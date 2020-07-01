const express = require('express');
const router = express.Router();
const data = require('../data');
const userData = data.users;
const bcrypt = require('bcryptjs');
const session = require('express-session');

router.use(function (req, res, next) {
    let auth = "(Non-Authenticated User)"
    if (req.session.AuthCookie) {
        auth = "(Authenticated User)";
    }
    let time = new Date().toUTCString();
    console.log("[" + time + "]: " + req.method + " " + req.originalUrl + " " + auth);
    next();
});

router.use('/private', function (req, res, next) {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    if (req.session.user) {
        return next();
    } else {
        res.status(403).render('error', { title: "Authentication Error" });
    }
});

router.get('/', (req, res) => {
    try{
        if (req.session.user){
            res.status(200).redirect("private");
        }
        else{
            res.render("login",{})
        }
    }
    catch(e){
        res.status(404).json({ error: e.message })
    }
    
    
});
router.post("/login", async (req, res) => {
    try{
        if (req.session.user){
            res.status(200).redirect("../private");
        }
        else{
            let uname = req.body["username"]
            let username = uname.toLowerCase()
            let password = req.body["password"]
            let checkValidUser;
            checkValidUser = await userData.checkUserDetails(username,password)
            if(checkValidUser){
                let result;
                result = await userData.getUserDetails(username,checkValidUser)
                req.session.user = result.username
                req.session.AuthCookie = req.sessionID;
                res.status(200).redirect("../private");
            }
            else{
                res.status(401).render('login', { title: "Login Page", Errors: true });
            }
            
        }
    }
    catch(e){
        res.status(404).json({ error: e.message })
    }
});
router.get('/private', async(req, res) => {
    try{
        if (req.session.user){
            let username = req.session.user
            let result;
            result = await userData.getUserDetails(username,true)
            res.render('private', {result:result})
        }
        else{
            res.status(404).json({ error: "User not found" })
        }
    }
    catch(e){
        res.status(404).json({ error: e.message })
    }
    
    
    
});
router.get('/logout', async(req, res) => {
    try {
        req.session.destroy(function () {
            res.clearCookie('AuthCookie')
        })
        res.render('logout', { title: "Logged Out" })
    }
    catch{
        res.status(404).json({ error: "Some problem." })
    }
});

module.exports = router