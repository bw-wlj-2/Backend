//imports
const bc= require('bcryptjs')
const users= require('../models/userModel')
const restricted= require('./session')

//variables
const router= require('express').Router()

//code
    //register
    router.post('/register', (req, res)=>{
        const user= req.body
        console.log(user)
        const hash= bc.hashSync(user.password, 8)
        user.password= hash
        users.add(user)
            .then(user=>{
                res.status(201).json(user)
            })
            .catch(err=>{
                res.status(500).json({error: 'could not create account'})
            })
    })
    //login
    router.post('/login', (req, res) => {
        let { username, password } = req.body;
        users.getBy({ username })
            .first()
            .then(user => {
                if (user && bc.compareSync(password, user.password)) {
                    req.session.loggedIn = true
                    req.session.userId = user.id
                    res.status(200).json({ message: `Welcome ${user.username}!` })
                } else {
                    res.status(401).json({ message: 'Incorrect Password' })
                }
            })
            .catch(error => {
                res.status(500).json({error: 'unable to login'});
            });
      });

//exports
module.exports= router