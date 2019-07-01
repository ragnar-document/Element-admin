const express = require('express');
const app = express();

//跨域
app.use(require('cors')())
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect("mongodb://119.23.240.115:27017/element-admin",{
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
})

const Article = mongoose.model('Article',new mongoose.Schema({
    title:{type:String},
    body:{type:String},
}))


app.get('/',async(req,res)=>{
    res.send('index')
})


app.post('/api/article',async(req,res)=>{
    const articles = await Article.create(req.body)
    res.send(articles)
})


app.get('/api/article',async(req,res)=>{
    const article = await Article.find();
    res.send(article)
})

// 删除文章(接受参数)
app.delete("/api/article/:id", async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.send({
        status: true
    })
})


app.listen(3001,()=>{
    console.log('http://localhost:3001/')
})

