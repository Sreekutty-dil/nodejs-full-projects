// reslove4

const dns = require('dns');

dns.resolve4("www.facebook.com" , function(err,data) {
    if(err) throw err

    // console.log(data)
    data.forEach(item => {
        dns.reverse(item, function(err,host) {
            if(err) throw err;
            console.log(`reverse dns =`, item, ":", JSON.stringify(host))
        })
    })
})

dns.resolve6("www.facebook.com" , function(err,data) {
    if(err) throw err

    // console.log(data)
    data.forEach(item => {
        dns.reverse(item, function(err,host) {
            if(err) throw err;
            console.log(`reverse dns =`, item, ":", JSON.stringify(host))
        })
    })
})