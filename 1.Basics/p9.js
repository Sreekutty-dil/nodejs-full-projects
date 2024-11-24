const cluster = require('cluster')

if(cluster.isWorker) {
    console.log(`new thread is created`)
} else {
        cluster.fork()
        cluster.fork()
        cluster.fork()
        cluster.fork()
        cluster.fork()
}