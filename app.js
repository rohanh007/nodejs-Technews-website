const express=require("express")
const ejs=require("ejs")
const app=express();
const bodyparser=require("body-parser")
const PORT=process.env.PORT || 5000


// static files

app.use(express.static("public"));
app.use("/css",express.static(__dirname +'public/css'))
app.use("/js",express.static(__dirname +'public/js'))
app.use("/img",express.static(__dirname +'public/img'))


app.use(express.urlencoded({extended: true}));


// set templating

app.set('views' , './src/views');
app.set('view engine','ejs')

// setup the routes
const newsRouter= require('./src/routes/news')
app.use('/', newsRouter);
app.use('/article', newsRouter);


app.listen(5000,()=>{
    console.log(`listening on port  ${PORT}`);
})