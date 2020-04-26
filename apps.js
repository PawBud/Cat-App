var app=express();
var request=require("request");

app.get("/results",function(req,res){
    request("https://http.cat/201",function(error, response, body)
    {
        if(!error && response.statusCode == 200)
        {
            res.send(body);
        } 
    });
});