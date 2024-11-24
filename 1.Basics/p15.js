// os module

const os = require('os');

const user = os.userInfo()
console.log(`user info =`, user)
console.log(`up title =`, os.uptime(), "ms")

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    arch: os.arch(),
    cpu: os.cpus(),
    avgLoad: os.loadavg()
}
console.log(`current Os =`, currentOs)