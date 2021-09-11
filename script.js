digiClock = () => {
	let clock = new Date();
	let hours = clock.getHours();
	let minute = clock.getMinutes()
	let second = clock.getSeconds();


	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minute").innerHTML = minute;
	document.getElementById("second").innerHTML = second;

	setInterval(digiClock,500);
}

digiClock();