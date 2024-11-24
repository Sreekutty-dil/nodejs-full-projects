/* express query =>
    url parameters 
*/

const express = require('express');
const PORT = 4600;

const app = express();


app.get('/', (req, res) => {
    res.status(200).json({ msg: "home path"});
});

app.get('/api/register', (req, res) => {
    let data = req.query
    res.status(200).json({ data });
})

app.listen(PORT, () => {
    console.log(`Server is started @ http://localhost:${PORT}`);
});
