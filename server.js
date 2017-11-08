const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const app = express();

mongoose.connect(keys.mongoURL,{ useMongoClient: true });

require('./models/user.js')

const User = mongoose.model('User')

app.use(bodyParser.json());

app.post('/api/dispatchUser', async(req, res)=>{

  const user = req.body;


  const findUser = await User.findOne({email: user.email})

  if(findUser){
    const checkUser = await User.findOne({ password: user.password, email: user.email })
    if(checkUser){
      res.send( { user, login: true, password: true } )
    }else{
      res.send( { login: false, password: {result: 'error', message: 'wrong password'} } )
    }
  }else {
    console.log('create user')
    new User( user ).save()

    res.send( { user, login: true, password: true } )
  }

})

app.post('/api/confirmKey', (req, res)=>{

  const { key } = req.body;

  if(key == '123456' ){
    res.send({ result: 'success', message: '' });
  }else{
    res.send({ result: 'error', message: 'неверный код'});
  }

})

app.get('/api/send_password', (req, res)=> {

  res.send({ result: 'success'})
})


if(process.env.NODE_ENV === "production"){
  app.use(express.static('client/build'));

  const path = require('path');

  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 3002

app.listen(PORT, ()=>{
   console.log('Server is running on port', PORT)
});
