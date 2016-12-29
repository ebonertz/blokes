const { SphereClient } = require('sphere-node-sdk');
const Config = require('./config.js');
const argv = require('minimist')(process.argv.slice(2));

const client = new SphereClient(Config);
// console.log(`SphereClient: ${SphereClient}`)

client.customers.fetch()
  .then((result) => {
    if (argv.expects) {
      if (argv.expects === result.body.count) {
        console.log('Expectation passed');
        process.exit(0);
      } else {
        console.error(`Expected ${argv.expects}, found ${result.body.count}`);
        process.exit(1);
      }
    } else {
      console.log(result, null, 2);
      console.log(JSON.stringify(result));
      console.log('These are all the Australian customers');
    }
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

client.orders.fetch()
  .then((result) => {
    if (argv.expects) {
      if (argv.expects === result.body.count) {
        console.log('Expectation passed');
        process.exit(0);
      } else {
        console.error('Expected to get some Orders');
        process.exit(1);
      }
    } else {
      console.log(JSON.stringify(result));
      console.log('There are no orders yet, sorry');
    }
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
