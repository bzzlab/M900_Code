//Consume a promise by Uber
uberRide.then(myride => {
        //driver arrived
        console.log(myride);
    }).catch(error => {
    //Sorry. Traffic jam!
    //Cannot pick you up!'
    console.log(error);
})
