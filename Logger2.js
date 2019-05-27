const EventEmitter = require('events');
const uuid=require('uuid');

class Logger2 extends EventEmitter
{
    log()
    {
        for (var i=1;i<=10;i++)
        {
            this.emit("PrintId",{Id:uuid.v4(), Person:""},i);
        }
        

    }
}

module.exports=Logger2;