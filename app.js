
const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs');
app.use(express.static(__dirname + '/views'));

const username = {
    firstname : "fifalnwza",
    lastnaem :  "00Ped",
    age : "18"
}
const fifafamily = [
    {role : "porfifa",  name : "pen pu shai"},
    {role : "maefifa",  name : "pen pu shing"},
    {role : "fifa",  name : "pen fifa"},
]



app.get('/',(req, res)=> {
    // console.log(fifafamily)
    // res.render('projectloops',{
    //     projectloops : fifafamily
    // })
    res.render("page/index", {

    })
}) 

app.listen(port, () => {
    console.log('App listening port ${port}')
})