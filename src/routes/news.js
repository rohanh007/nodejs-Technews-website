const express= require("express")
const apiKey = 'd894282ca6504df5a115e9a5330af163'; // Replace with your actual API key

const axios = require('axios')
//crete the new route object  use of  this funtion
const newsRouter=express.Router()

newsRouter.get('/',async(req,res)=>{

    try{
        const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d894282ca6504df5a115e9a5330af163`)
        res.render('news',{articles : newsAPI.data.articles})
        console.log(newsAPI.data)
    }catch(err){
             if(err.response){
                res.render('news',{articles : null})
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
             }else if(err.request)
             {
                res.render('news',{articles :null})
                console.log(err.request)
             }
             else{
                console.log('Error' ,err.message);
             }
    }
    // 

})

 newsRouter.get('/:title',async(req,res)=>{
     let articletitle= req.params.title;
    try{
           
           const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?q=${articletitle}&apiKey=${apiKey}`);

         res.render('singlenews',{article : newsAPI.data.articles})
       console.log(newsAPI.data)
    }catch(err){             
        if(err.response){
                res.render('singlenews',{article : null})
                console.log(err.response.data)
                console.log(err.response.status)
               console.log(err.response.headers)
             }else if(err.request)
             {
              res.render('singlenews',{article :null})
                console.log(err.request)
           }
            else{
                console.log('Error' ,err.message);
             }
   }


 })

newsRouter.post('', async(req, res) => {
    let search = req.body.search
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d894282ca6504df5a115e9a5330af163&q=${search}`)
        res.render('newssearch', { articles : newsAPI.data.articles })
    } catch (err) {
        if(err.response) {
            res.render('newssearch', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request) {
            res.render('newssearch', { articles : null })
            console.log(err.request)
        } else {
            res.render('newssearch', { articles : null })
            console.error('Error', err.message)
        }
    } 
})
module.exports=newsRouter;

