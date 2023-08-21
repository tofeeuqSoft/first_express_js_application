let express=require('express');

app= express();

app.get('/', function (req, res){
    res.send('Hello Express');
});


app.listen(5050, function (){
    console.log("server run success")
});