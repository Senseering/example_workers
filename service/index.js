let Worker = require('@senseering/worker')

let config = './config.json'

let worker = new Worker();

(async function () {
    await worker.connect(config)

    let data = {
        test: 3
    }
    await worker.publish(data, {
        price: 0
    })

    //publishes data only on demand
    let service = async (incomingData, log) => {
        //do something
        log('Processing data')

        /*if (typeof ('test') !== 'object') {
            throw new Error('Invalid data')
        }*/
        return {
            data: data,
            price: 0
        }
    }

    worker.provide(service)
})();