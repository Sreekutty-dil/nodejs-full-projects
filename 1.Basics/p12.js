//dnm = domain name system(/server)

const dns = require('dns')

dns.lookup("www.instagram.com" , function(err , address , family) {
    if(err) throw err;
    console.log("IP Address =",address)
    console.log("Family =",family)

    // lookup server
    dns.lookupService(address, 22 , function(err, host, service) {
        if(err) throw err;
        console.log("Host =",host)
        console.log("Service =",service)
    })
 
})

// Output:
// "www.facebook.com"
// IP Address = 157.240.16.35
// Family = 4
// Host = edge-star-mini-shv-01-bom1.facebook.com
// Service = ssh
