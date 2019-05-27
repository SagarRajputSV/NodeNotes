//PATH MODULE

// const path= require('path');

// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
// console.log(path.join(__filename,'test','index.js'));
// console.log(path.dirname(__filename));

//END OF PATH MODULE

//OS MODULE

// const os = require('os');
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.uptime());
// console.log(os.release());
// console.log(os.cpus());

//END OF OS MODULE

//FILESYSTEM MODULE   ========> Practice this module by uncommenting each of it's method

// const fs=require('fs');
// const os=require('os');

//METHOD-1

// fs.mkdir(os.homedir()+"//Desktop//testingFile",{recursive:false},(err)=>{
//     if(err)
//     {
//         console.log(err.message);
//     }

//     else
//     {
//         console.log("Folder has been created");
//     }
// });

//METHOD-2     Note:fs.writeFile method creates only a file not a folder

// fs.writeFile(os.homedir()+"//Desktop//testing//test1.txt","Test karne ke liye","utf8",(err)=>{
//     if(err)
//     {
//         console.log(err.message);
//     }

//     else
//     {
//         console.log("File has been created and the content is been written");
//     }
// });

//METHOD-3

// fs.appendFile(os.homedir()+"//Desktop//testing//test1.txt",os.EOL+"Append method test karne ke liye","utf8",(err)=>{
//     if(err)
//     {
//         console.log(err.message);
//     }

//     else
//     {
//         console.log("Content has been appended in the file")
//     }
// });

// METHOD-4

// fs.mkdir(os.homedir()+"//..//..//Program Files//Example",{recursive:false},(err)=>{
//     if(err)
//     {
//         console.log(err.message);
//     }

//     else
//     {
//         console.log("This was the example to create file using os.homedir to navigate to any directory");
//     }
// });

//METHOD-5

// fs.readFile(os.homedir()+"//Desktop//testingFile//test1.txt","utf8",(err,data)=>{
//     if(err)
//     {
//         console.log(err.message);
//     }

//     else
//     {
//         console.log(data);
//     }
// });

//METHOD-6

// fs.rename(os.homedir()+"//Desktop//testingFile",os.homedir()+"//Desktop//testing",(err)=>{
//     if(err)
//     {
//         console.log(err.message);
//     }

//     else
//     {
//         console.log("File has been renamed");
//     }
// });

//METHOD-7   Note:fs.unlink is used to delete a file not a folder

// fs.unlink(os.homedir()+"//Desktop//testing//test1.txt",(err)=>{
//     if(err)
//     {
//         console.log(err.message);
//     }

//     else
//     {
//         console.log("File has been deleted");
//     }
// });

//URL MODULE

// const url = require('url');

// const ExampleUrl=new URL("https://Username:Pass@example.com:8080/index.html?id=100&status=active#hash");
// //In the above line the url has been parsed from string to an url 

// //The above method can also be done as follows

// //const ExUrl= "https://Username:Pass@example.com/index.html?id=100&status=active#hash";
// //const ExampleUrl=new URL(ExUrl);

// console.log(ExampleUrl.protocol);
// console.log(ExampleUrl.username);
// console.log(ExampleUrl.password);
// console.log(ExampleUrl.origin);
// console.log(ExampleUrl.host);
// console.log(ExampleUrl.hostname);
// console.log(ExampleUrl.port);
// console.log(ExampleUrl.pathname);
// console.log(ExampleUrl.search);
// console.log(ExampleUrl.hash);


// console.log(ExampleUrl.searchParams);  // This creates a object of different search elements and it's values

// //END OF URL MODULE

// //QUERYSTRING MODULE

// const qs = require('querystring');

// const person={
//     name:"sagar",
//     empId:6733
// }

// const personString = qs.stringify(person);

// console.log(personString);

// const stringForm = "name=sagar&empId=6733";

// const StringToObjectForm=qs.parse(stringForm);

// console.log(StringToObjectForm);

// //END OF QUERYSTRING

// //EVENTS MODULE

// // METHOD-1===> CREATING A EVENTS WITHOUT ANY CLASS

// const EventEmitter = require('events');
// const emitter=new EventEmitter();

// emitter.on("PrintName",(name)=>{
//     console.log(`My Name is ${name}`);
// });

// emitter.on("PrintNombre",()=>{
//     console.log(`Mi Nombre Sagar`);
//     console.log(`\n\nThis program also demostrates the method of callback function without any argument`);
// });

// emitter.emit("PrintName",("sagar"));
// emitter.emit("PrintNombre");

// // METHOD-2===> CREATING AN EVENT BY EXTENIDNG THE CLASS CREATED BY IMPORTING EVENT MODULE

// const Logger= require('./Logger');
// const logger=new Logger();

// logger.on("PrintGreet",(greet)=>{
//     console.log(greet);
// });

// logger.log("Hola");

// // END OF EVENTS MODULE

// // UUID MODULE

// const uuid=require('uuid');
// const fs=require('fs');
// const path=require('path');
// const EventEmitter=require('events');
// const os=require('os');
// const Logger2=require('./Logger2');
// const qs=require('querystring');

// const mapObject={
//     "&":" ",
//     "=":":"
// };

// //LESSON-1====>Generating a random id and printing

// // console.log(uuid.v4());


// //LESSON-2====>Using Events,UUID and FS MODULE TOGETGER

// const logger2=new Logger2();

// logger2.on("PrintId",(data,i)=>{

//     fs.mkdir(os.homedir()+"//Desktop//testing",{recursive:true},(err)=>{
//         if(err)
//         {
//             console.log(err.message);
//         }

//         else
//         {
//             if(i==1)
//             {
//                 fs.appendFile(os.homedir()+"//Desktop//testing//test1.txt",(qs.stringify(data)).replace(/&|=/gi,(matched)=>{return mapObject[matched]})+i,(err)=>{
//                     if(err)
//                     {
//                         console.log(err.message);
//                     }
            
//                     else
//                     {
//                         console.log("Content has been written into the file");
//                     }
//                 });
//             }
//             else
//             {
//                 fs.appendFile(os.homedir()+"//Desktop//testing//test1.txt",os.EOL+(qs.stringify(data)).replace(/&|=/gi,(matched)=>{return mapObject[matched]})+i,(err)=>{
//                     if(err)
//                     {
//                         console.log(err.message);
//                     }
            
//                     else
//                     {
//                         console.log("Content has been written into the file");
//                     }
//                 });
//             }
           
//         }
//     });
   
// });

// logger2.log();

// END OF UUID MODULE

//START OF HTTP MODULE

const http = require("http");
const path=require("path");
const fs=require("fs");

// const port = process.env.port|| 3000;
// const hostname='127.0.0.1';

// fs.readFile("IIndex.html","utf8",(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//     } 
    
//     const server=http.createServer((req,res)=>{
//         res.statusCode=200;
//         res.setHeader("Content-type","text/html");
//         res.write(data);
//         res.end();
//     });
    
//     server.listen(port,hostname,()=>{
//         console.log(`Server has started on the port ${port}`);
//     });
// });

const port= process.env.port || 8080;

const server=http.createServer((req,res)=>
{
    if(req.url=="/")
    {
        fs.readFile("IIndex.html","utf8",(err,data)=>
        {
            if (err) console.log(err.message);
            res.statusCode=200;
            res.setHeader("Content-type","text/html");
            res.write(data);
            res.end();
        });
    }

    else if(req.url=='/about')
    {
        fs.readFile("about.html","utf8",(err,data)=>{
            if(err)
            {
                console.log(err.message);
            }
            res.statusCode=200;
            res.setHeader("Content-type","text/html");
            res.write(data);
            res.end();
        });
    }
});

server.listen(port,()=>{
    console.log(`Server has started in the port ${port}`);
});

//END OF HTTP MODULE


