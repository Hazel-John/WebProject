const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const shortid = require('shortid');
const Razorpay = require('razorpay');

const bodyParser = require('body-parser');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log('MongoDB database connection established successfully');
})

const userRouter = require('./routes/users');
const serviceProviderRouter = require('./routes/serviceProviders');
const RazorpayRouter = require('./routes/razorpayRouter');
const TransactionRouter = require('./routes/transaction')

app.use('/users', userRouter);
app.use('/serviceProviders', serviceProviderRouter);
app.use('/razorpay', RazorpayRouter);
app.use('/transactiondetails', TransactionRouter);

app.listen(port,() => {
    console.log('listening on port:  '+port);

});