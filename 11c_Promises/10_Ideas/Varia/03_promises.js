/*
Thema: Callbacks mit Promises
Wenn Sie viele ineinander verschachtelte Callbacks (Callback 1 ruft den inneren Callback 2 und dieser
ruft wiederum seinen inneren Callback 3 usw.), wird der Programmcode sehr schnell unleserlich
(sog. Callback-Hell). Promises erfüllen den gleichen Zweck wie Callbacks sind jedoch leserlicher
aufgebaut (strukturiert). Ferner hilft die klare Fehlerbehandlung robusten JavaScript-Programmcode zu erstellen.
 */

/*
Beispiel 1 - Vergleich Callback mit Promise
*/

// Implementation des Callbacks
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2);
        } else {
            callback('Number must be provided');
        }
    }, 2000);
}

// Aufruf des Callbacks - Test 1
getDataCallback(2, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log('err')
            } else {
                console.log(data)
            }
        })
    }
})

// Promise
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return 'this is some test data'
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})
