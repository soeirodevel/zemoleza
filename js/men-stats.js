const os = require('os')
const log = require('./logger')

setInterval(() => {
    const free = parseInt(os.freemem()/1024/1024)
    const total = parseInt(os.totalmem()/1024/1024)
    
    const stats ={
        total: total,
        livre: free,
        porcentual: (free/total)*100
    }
    console.clear()
    console.table(stats)
    log(JSON.stringify(stats))    
}, 1000);