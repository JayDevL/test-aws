import express from 'express';

const app = express();

const port = 8080;

app.get('/',(req,res) => {
    res.send('<h1>Hello world from express and running on AWS Services in a instance WaterWaveProject</h1>')
})

app.listen(port)

