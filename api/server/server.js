//imports
const express = require('express');
const session= require('express-session')

//variables
const server= express()
const sessionConfig={
    name:'session',
    secret: process.env.SESSION_SECRET || "keep it secret, keep it safe!",
    cookie: {
        maxAge: 1000 * 60 * 10, // 10 minutes in ms
        secure: false, // set to true in production, only send cookies over HTTPS
        httpOnly: true, // JS cannot access the cookies on the browser
    },
    resave: false,
    saveUninitialized: true,
}

//code 
server.use(express.json());
server.use(session(sessionConfig))

server.use()
server.use()

//exports
module.exports = server;
