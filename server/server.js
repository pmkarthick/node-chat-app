const path=require('path');
const express=require('express');

var app=express();
var publicPath=path.join(__dirname,'/../public');
console.log(publicPath);
const port = process.env.PORT || 3000

app.use(express.static(publicPath));
// app.get('/',(req,res)=>{
//   res.render(publicPath+'/index.html');
// });

app.listen(port, () =>{
  console.log(`server started on port ${port}`);
});
