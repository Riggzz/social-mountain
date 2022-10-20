require('dotenv').config()
const {sequelize} = require('./util/database')
const {User} = require('./models/user')
const {post, Post} = require('./models/post')


const express = require('express')
const cors = require('cors')

const {PORT} = process.env
const {getAllPosts, getCurrentUserPosts, addPost, editPost, deltePost} = require('./conrollers/posts')
const {register, login} = require('./controllers/auth')
const {isAuthenticated} = require('./middleware/isAuthenticated')
const { deletePost } = require('./controllers/posts')

User.hasMany(Post)
Post.belongsTo(User)

const app = express()

app.use(express.json())
app.use(cors())


app.get('/posts', getAllPosts)


app.get('/userposts/:userId', getCurrentUserPosts)
app.post('/posts', isAuthenticated, addPost)
app.put('/posts/:id', isAuthenticated, editPost)
app.delete('/posts/:id', isAuthenticated, deletePost)

app.listen(PORT, () => console.log(`db sync successful & server running on port ${PORT}`))

sequelize.sync()
.then(() => {
    app.listen(PORT, () => console.log(`db sync successful & server running on port ${PORT}`))
})
.catch(err => console.log(err))