//Produce or create a promise by Uber
const uberRide = (arrived) =>
    new Promise ((resolve, reject) => {
        if (arrived){
            resolve('driver arrived');
        } else {
            reject('Sorry. ' +
                'Traffic jam!' +
                'Cannot pick you up!');
        }
    })
