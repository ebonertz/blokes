var SphereClient = require('sphere-node-sdk').SphereClient
var Config = require('./config.js')
var http = require('http');

var argv = require('minimist')(process.argv.slice(2))

var client = new SphereClient(Config)
client.customers.fetch()
.then(function (result){
  if (argv.expects) {
    if (argv.expects == result.body.count) {
      console.log('Expectation passed')
      process.exit(0)
    } else {
      console.error('Expected ' + argv.expects + ', found ' + result.body.count)
      process.exit(1)
    }
  } else {
    console.log(result, null, 2)
    console.log(JSON.stringify(result))
    process.exit(0)
  }
})
.catch(function (err){
  console.error(err)
  process.exit(1)
})
