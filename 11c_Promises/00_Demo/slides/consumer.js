//Consume a promise by Uber
uberRide.then(myride => {
    //driver arrived
    console.log(myride);
}).catch(error => {
    //Sorry .. Traffic jam ...
    console.log(error);
})


new Promise((resolve, reject) => {
    //Simulation eines Netzwerkaufrufs
    setTimeout(() =>
            resolve(1), 1000);
}).then(result => {
    console.log(result); // 1
    return result * 2;
}).then(result => {
    console.log(result); // 2
    return result * 2;
}).then(result => {
    console.log(result); // 4
    return result * 2;
});
