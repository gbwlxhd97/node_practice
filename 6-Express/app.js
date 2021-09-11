import express from "express";
const app = express()

app.get('/', (req,res,next) => {
    console.log('first');
    next(new Error('error'));
},(req,res,next) => {
    console.log('first2');
}
);

app.use((error,req,res,next) => {
    console.log(error);
    res.status(500).send('sry')
})

app.listen(8080);