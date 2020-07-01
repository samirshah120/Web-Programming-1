const express = require('express')
const app = express()
const about = require("./routes/about.json");
const story = require("./routes/story.json");
const education = require("./routes/education.json")
app.get('/',async(request,response)=>{
    response.json(about);
});
app.get('/about',async(request,response)=>{
    response.json(about);
});
app.get('/story',async(request,response)=>{
    response.json(story);
});
app.get('/education',async(request,response)=>{
    response.json(education);
});
app.get('*',async(request,response)=>{
    response.status(404).json({ error: ' 404 Page not found' });
});
try{
    app.listen(3000,()=>{
        console.log("server started")
    })
}
catch(err){
    console.log("No Connection established")
}
