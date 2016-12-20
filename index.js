const { SphereClient } = require('sphere-node-sdk')
const Config = require('./config.js')
const http = require('http')
const argv = require('minimist')(process.argv.slice(2))
console.log(`SphereClient: ${SphereClient}`)
const client = new SphereClient(Config)

client.customers.fetch()
.then(function getCustomers(result){
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
    console.log("These are all the Australian customers")
    // process.exit(0)
  }
})
.catch(function (err){
  console.error(err)
  process.exit(1)
})

client.orders.fetch()
.then(function getOrders(result){
  if (argv.expects) {
    if (arg.expects == result.body.count) {
      console.log('Expectation passed')
      process.exit(0)
    } else {
      console.error('Expected to get some Orders')
      process.exit(1)
    }
    } else {
      console.log(JSON.stringify(result))
      console.log("There are no orders yet, sorry")
      // process.exit(0)
    }
})
.catch(function (err){
  console.error(err)
  process.exit(1)
})
