    const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')


app.use(express.json())
app.use(cors())

app.listen(3002, ()=>{
    console.log('Server is running on port 3002')
})


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'techdb',
})

app.post('/registro', (req, res) =>{
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password
    //const sentConfirmPassword = req.body.ConfirmPassword

    const SQL = 'INSERT INTO users (email, username, password) VALUES (?,?,?)' //inserir valor depois por variavel
    
    const Values = [sentEmail, sentUserName, sentPassword]


    db.query(SQL, Values, (err, results) => {
        if(err){
            res.send(err)
        }else{
            console.log("Usuario inserio com Sucesso")
            res.send({message: 'User added!'})
        }
    })
})

app.post('/login', (req, res) => {
    const sentloginUserName = req.body.LoginUserName
    const sentloginPassword = req.body.LoginPassword
    //const sentConfirmPassword = req.body.ConfirmPassword

    const SQL = 'SELECT * FROM users WHERE username=? && password=?'
    
    const Values = [sentloginUserName, sentloginPassword]

    db.query(SQL, Values, (err, results) => {
        if(err){
            res.send({error: err})
        }
        if(results.length > 0){
            res.send(results)
        }else{
            res.send({message: 'Credenciais invalidas'})
        }
    })
})