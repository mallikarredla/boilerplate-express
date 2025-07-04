const bGround = require('fcc-express-bground');
const myApp = require('./myApp');
const express = require('express');
const app = express();

if (!process.env.DISABLE_XORIGIN) {
  app.use((req, res, next) => {
    const allowedOrigins = ['https://narrow-plane.gomix.me', 'https://www.freecodecamp.com'];
    const origin = req.headers.origin || '*';
    if (!process.env.XORIG_RESTRICT || allowedOrigins.indexOf(origin) > -1) {
      console.log(origin);
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }
    next();
  });
}

// Do NOT call .listen here – Render does it via fcc-express-bground
bGround.setupBackgroundApp(app, myApp, __dirname);

console.log('App initialized. Waiting for Render to assign port...');
