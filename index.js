const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.end("Server Connected !")
})
app.use('/contacts', router);

app.get('*', (req, res) => {
    res.send(`<h1>Not Found !</h1>`)
})


const port = process.env.PORT || 8080;
const mongoUri = `mongodb+srv://Test:Test@cluster0.19f5u.mongodb.net/Test?retryWrites=true&w=majority`;

// mongose server connection
mongoose.connect(mongoUri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
// promise back
.then(() => {
    app.listen(port, ()=> {
        console.log('\n listening on port ' + port + "\n");
    })
})
// if promise not resolve catch error
.catch(e =>{
    console.log(e)
})

