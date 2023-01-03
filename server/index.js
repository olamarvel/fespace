import express, { json } from 'express'
const app = express()

app.use(json)

app.post('/admin', (req,res) => {

})
app.post('/user',(req,res) => { 
    req.body.doc
 })
app.post('/user/comment',(req,res) => {  })
app.post('/comment',(req,res) => {  })
app.get('/featured', () => {})
app.get('/caterory', () => {})


app.listen(3000, () => {
 console.log('now listen' + Date.now())
})
