/*
var timeout = setTimeout(function() {}, 3600 * 1000);

setInterval(function() {
    console.log('Time left: '+getTimeLeft(timeout)+'s');
}, 2000);

function getTimeLeft(timeout) {
    return Math.ceil((timeout._idleStart + timeout._idleTimeout - Date.now()) / 1000);
}
*/


function timer(callback, delay) {
    var id, started, remaining = delay, running

    this.start = function() {
        running = true
        started = new Date()
        id = setTimeout(() => {
            callback('This is my callback error', undefined);
            callback('This is my callback error', undefined);
        }, remaining)
    }

    this.pause = function() {
        running = false
        clearTimeout(id)
        remaining -= new Date() - started
    }

    this.getTimeLeft = function() {
        if (running) {
            this.pause()
            this.start()
        }

        return remaining
    }

    this.getStateRunning = function() {
        return running
    }

    this.start()
}


function myCallback(err, data){
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

console.time('Timer');
a = new timer(myCallback, 1000);

console.log(a.getTimeLeft());
console.timeLog('Timer');
console.timeEnd('Timer');
