var seconds = document.getElementById("second-pointer-ring")
var minutes = document.getElementById("minute-pointer-ring")
var hours = document.getElementById("hour-pointer-ring")

var digitalseconds = document.getElementById("seconds")
var digitalminutes = document.getElementById("minutes")
var digitalhours = document.getElementById("hours")

var mode = document.getElementById("mode")
var modelabel = document.getElementById("modelabel")
var ball = document.getElementById("modelabsp")
var round = document.getElementById("modelab")
var body = document.getElementById("body")
var clockdial = document.getElementsByClassName("clock-dial")
var numbers = document.getElementById("numbers")
var myname = document.getElementById("myname")
var minutepointer = document.getElementById("minute-pointer")
var minutepointerring = document.getElementById("minute-pointer-ring")
var hourpointer = document.getElementById("hour-pointer")
var hourpointerring = document.getElementById("hour-pointer-ring")
var digitalclock = document.getElementById("digital-clock")
var ampm = document.getElementById("ampm")


setInterval(function time() {

    currenttime = new Date()


    var sec = currenttime.getSeconds()
    var min = currenttime.getMinutes()
    var hrs = currenttime.getHours()

    var secdeg = sec * 6
    seconds.style.rotate = secdeg + "deg"

    var mindeg = min * 6
    minutes.style.rotate = mindeg + "deg"


    if (hrs > 12) {
        var tfhrs = hrs - 12
        var hrsdega = tfhrs * 30
        hours.style.rotate = hrsdega + "deg"
    }
    else {
        var hrsdegm = hrs * 30
        hours.style.rotate = hrsdegm + "deg"
    }

    digitalseconds.innerHTML = sec
    digitalminutes.innerHTML = min

    if (hrs > 12) {
        var dtfhrs = hrs - 12
        digitalhours.innerHTML = dtfhrs
    }

    if (hrs < 10 || dtfhrs < 10) {
        digitalhours.innerHTML = "0" + dtfhrs
    }

    if (min < 10) {
        digitalminutes.innerHTML = "0" + min
    }

    if (sec < 10) {
        digitalseconds.innerHTML = "0" + sec
    }

    if (hrs > 12) {
        ampm.innerHTML = "PM"
    }
    else {
        ampm.innerHTML = "AM"
    }

}, 500)


function modee() {
    if (mode.checked == true) {
        ball.style.right = "4px"
        ball.style.left = "auto"
        ball.style.backgroundColor = "white"
        round.style.backgroundColor = "black"
        ball.style.boxShadow = " 0.2px 0.2px 4px  white"
        modelabel.innerHTML = "Dark Mode"
        modelabel.style.color = "white"
        body.classList.add("bg-dark")
        round.style.border = "1px solid white"
        clockdial[0].style.outline = "10px solid white"
        clockdial[0].style.backgroundColor = "black"
        numbers.style.color = "rgb(249, 96, 96)"
        myname.style.color = "white"
        minutepointerring.style.backgroundColor = "white"
        minutepointer.style.backgroundColor = "white"
        hourpointer.style.backgroundColor = "yellow"
        hourpointerring.style.backgroundColor = "yellow"
        digitalclock.style.color = "white"
        ampm.className="pm"
        



    }
    else {
        ball.style.right = "auto"
        ball.style.left = "4px"
        ball.style.backgroundColor = "black"
        round.style.backgroundColor = "white"
        modelabel.innerHTML = "Light Mode"
        modelabel.style.color = "black"
        ball.style.boxShadow = " 0.2px 0.2px 4px  rgb(0, 0, 0)"
        body.classList.remove("bg-dark")
        round.style.border = "1px solid blue"
        clockdial[0].style.outline = "10px solid black"
        clockdial[0].style.backgroundColor = "rgb(250, 250, 34)"
        numbers.style.color = "black"
        myname.style.color = "rgb(2, 2, 154)"
        minutepointerring.style.backgroundColor = "black"
        minutepointer.style.backgroundColor = "black"
        hourpointer.style.backgroundColor = "rgb(2, 2, 154)"
        hourpointerring.style.backgroundColor = "rgb(2, 2, 154)"
        digitalclock.style.color = "black"
        ampm.style.animation = "am 5s ease infinite;"
        ampm.className="am"







    }
}

