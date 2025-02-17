const fs= require('fs');
const data= "i am appended data"

fs.appendFile("./data.txt","I am appending data",(err)=> {
    if(err)
        console.log(err);
    console.log("data appended");
});

