const time = document.querySelector('.time')

function clock() {
    let now = new Date()

    let hour = now.getHours()
    let minute = now.getMinutes()
    let seconds = now.getSeconds()

    if (hour < 10) hour = '0' + hour
    if (minute < 10) minute = '0' + minute
    if (seconds < 10) seconds = '0' + seconds

    time.innerHTML = `${hour}:${minute}:${seconds}`
}

clock()

setInterval(clock , 1000)