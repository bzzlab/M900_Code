// Promise
const getDataOverNetworkPromise = (data) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data){
                resolve(`Data received: ${data}`);
            }
            else {
                reject('Data error - no data received!');
            }
        }, 2000);
    }
)

console.time(`Promise`);
getDataOverNetworkPromise({ahv_id:'756.1234.5678.97'}).then((data) => {

    console.log(data);
}, (err) => {
    console.log(err);
})

console.timeLog(`Promise`);
console.timeEnd(`Promise`);
