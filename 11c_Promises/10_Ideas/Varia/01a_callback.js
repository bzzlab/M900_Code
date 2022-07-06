// Callback
const getDataOverNetworkCallback = (callback) => {
    setTimeout(() => {
        callback('This is my callback error', undefined);
        callback('This is my callback error', undefined);
    }, 2000);
}

console.time(`Callback`);
getDataOverNetworkCallback((err, data) =>{
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.timeLog(`Callback`);
console.timeEnd(`Callback`);
