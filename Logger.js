const EventEmitter = require('events');
const uuid=require('uuid');

class Logger extends EventEmitter
{
    log(greet)
    {
        console.log(greet);
        this.emit("PrintGreet",greet);       

    }
}

module.exports=Logger;