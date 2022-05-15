// alert('Hello');

var cl = console.log;

var DigiClock = document.getElementById('DigiClock');
var Clock = document.getElementById('Clock');
var ClockDigi = document.getElementById('ClockDigi');

// Ex.1) ======================================

function DigitalClock(){
	
	var date = new Date();
	var hours = date.getHours();
	var mins = date.getMinutes();
	var sec = date.getSeconds();
	var session = "AM";
	
	if(hours > 12){
			session = "PM";
			hours = hours - 12;
	}
	
	hours = zeroaddtoTime(hours);
	mins = zeroaddtoTime(mins);
	sec = zeroaddtoTime(sec);
	
	
	// if(hours < 10){
		// hours = "0" + hours;
	// }
	// if(mins < 10){
		// mins = "0" + mins;
	// }
	// if(sec < 10){
		// sec = "0" + sec;
	// }

	var result = hours + ":" + mins + ":" + sec + " " + session;
	
	DigiClock.innerHTML = result;
	setTimeout(DigitalClock,1000);
	
}

DigitalClock();
function zeroaddtoTime(time){
	if(time < 10){
		time = "0" + time;
		return time;
	}else{
		return time
	}
}


// Ex.2) ======================================

function Digital(){
	
	var d = new Date();
	var hrs = d.getHours();
	var min = d.getMinutes();
	var secs = d.getSeconds();
	var session = "AM";
	
	if(hrs > 12){
			session = "PM";
			hrs = hrs - 12;
	}
	
	hrs = zeroaddTotime(hrs);
	min = zeroaddTotime(min);
	secs = zeroaddTotime(secs);
	
	
	// if(hours < 10){
		// hours = "0" + hours;
	// }
	// if(mins < 10){
		// mins = "0" + mins;
	// }
	// if(sec < 10){
		// sec = "0" + sec;
	// }

	var result = hrs + ":" + min + ":" + secs + " " + session;
	
	Clock.innerHTML = result;
	setTimeout(Digital,1000);
	
}

Digital();
function zeroaddTotime(Time){
	if(Time < 10){
		Time = "0" + Time;
		return Time;
	}else{
		return Time
	}
}


// Ex.3) ======================================

function Digiclock(){
	
	var d = new Date();
	var hr = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	var session = "AM";
	
	if(hr > 12){
			session = "PM";
			hr = hr - 12;
	}
	
	hr = zeroaddTotime(hr);
	m = zeroaddTotime(m);
	s = zeroaddTotime(s);
	
	
	// if(hours < 10){
		// hours = "0" + hours;
	// }
	// if(mins < 10){
		// mins = "0" + mins;
	// }
	// if(sec < 10){
		// sec = "0" + sec;
	// }

	var result = hr + ":" + m + ":" + s + " " + session;
	
	ClockDigi.innerHTML = result;
	setTimeout(Digiclock,1000);
	
}

Digiclock();
function addZerotoTime(time){
	if(time < 10){
		time = "0" + time;
		return time;
	}else{
		return time
	}
}
