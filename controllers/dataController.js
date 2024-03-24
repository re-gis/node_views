const fs = require('fs')
// const bcrypt = require('')
// const { Hash } = require('crypto')
// const { stringify } = require('querystring')
// const {} = require('querystring')



const postData = (req, res) => {
    let name = req.body.uname
    let email = req.body.email
    // let salt = Hash.salt()
    // let pass = Hash( salt,req.body.password )
    res.json({message: 'Signed in successfully'})

    fs.writeFile('index.txt', `\nThe name is -${name}-, email is -${email}`, {flag: 'a'}, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Done!');
        }
    })
}


const getData = (req, res) => {
let name = fs.readFile('index.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
    } else {
        
        // console.log(result);
        let rest = result.split('-')[3]
        if(rest == `${req.body.email}`){
            res.json({message: 'Logged in successfully!'})
            console.log(rest);
         } else {
            res.json({message: 'Invalid credentials!'})
            // console.log(rest);
            console.log('No req matching');
         }
    }
})
   
}

module.exports = {
    postData,
    getData
}