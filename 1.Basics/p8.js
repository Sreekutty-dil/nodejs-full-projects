// cluster

/*
     single thread -> isMaster
     multi thread -> isWorker
*/

const cluster = require('cluster')

if(cluster.isMaster) {
    console.log(`node is running in single thread`)
}