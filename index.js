import express from "express";
const app = express();
const PORT =4000;


function handleListening(){
    console.log('Server connected... PORT:4000');
}


app.get('/', function (req,res) {
    res.send('hi guys')
})

app.listen(PORT, handleListening);