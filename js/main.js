function Stopwatch () {
    //DURATION: Starts at 0. Don't want anyone outside to update; accessible as "get"
    //Provides value of total time: Decimal goes to three places.
    let duration = 0;
    Object.defineProperty (this, 'duration', {
        get: function () {
            return (duration/1000).toFixed(3)
        }
    })

    // const stopwatch = 'stopwatch'   ... jk. not using. boooom
    let startTime = 0
    let running = false

    //this.START: Starts the timer. 
    this.start = function () {
        if (running === false) {
            startTime = Date.now ();
            running = true
        } else {
            console.error (`Can't start it again, it's already going.`)
        }
        // console.time(stopwatch)
    }
    
    //this.STOP: Stops the timer. 
    this.stop = function () {
        if (running === true) {
            duration += Date.now () - startTime;
            running = false
        } else {
            console.warn (`Can't stop, won't stop. Stop stopping the stop. Stop.`)
        }
        // duration += console.timeEnd(stopwatch)
    }
    
    //this.RESET: Sets duration to 0.
    this.reset = function () {
        duration = 0;
        runnning = false;
    }
}

const sw = new Stopwatch ()