const express = require('express')
const mongoose = require('mongoose');
const Post = require('./models/posts.module.js')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send(JSON.stringify({message: "hello from Node API"}))
})

app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find({})
    res.send(posts)
  } catch (error) {
    res.send({message: error})
  }
}) 

const createPosts = async () => {
  try{
    await Post.create({
      title: "Post about AI dogs",
      content: "Have you ever had a dog?",
      image: "/ai-dogs.jpeg"
    })
  } catch(error){

  }
}

//Change to docker
mongoose.connect("mongodb+srv://root:ZZyqJzEwotcPUeKz@cluster0.jsjc5yt.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
  console.log("Connected to mongo")
  // createPosts()
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})
.catch(err => console.log(err))

