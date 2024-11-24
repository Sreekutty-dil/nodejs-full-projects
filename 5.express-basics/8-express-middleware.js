const express = require('express');
const PORT = 4300

const { logger , userRole , passwordValidation } = require('./middleware/log')

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).json({ msg: "home path"})
})

app.get('/api/user', logger , (req, res) => {
    res.status(200).json({ msg: "main controller", mainTime: req.myTime})
})

// userlogin
app.post ('/api/login', userRole , (req, res) => {
    res.status(200).json({ role : req.role})
})

//passwordValidation
app.post('/api/register', passwordValidation, (req, res) => {
    res.status(200).json({ msg: req.msg , password: req.password})
})


app.listen(PORT, () => {
    console.log(`Server is connected running @ http://localhost:${PORT}`);
});