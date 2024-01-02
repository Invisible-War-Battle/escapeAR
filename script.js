alert("Escape in 5 minutes, or you will meet your doom. Find the 16 digit code in your room, and type it into the box to get out. Tap to allow VR. Good luck!")
var code = "1952167823450967";

    // feature detect
var x, y, z;
var b;
		var imageCapture;
			var canvas = document.getElementById("play");
			var ctx = canvas.getContext("2d");
		
document.getElementById("mainDiv").onclick = ()=> {
			navigator.mediaDevices.getUserMedia({video: { facingMode: 'environment'}, audio: false}).then(function(video){
			document.getElementById("vid").srcObject = video;
				document.getElementById("vid").height = window.innerHeight;
				document.getElementById("vid").width = window.innerWidth;
							});
	 if (typeof DeviceOrientationEvent.requestPermission === 'function') {
							DeviceOrientationEvent.requestPermission()
								.then(permissionState => {
									if (permissionState === 'granted') {
											window.addEventListener('deviceorientation', (e) => {
																 x = -e.beta;
																 y = e.gamma;
																 z = -e.alpha;
												document.getElementById("mainDiv").style.transform = `translateZ(600px) rotateY(${y}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
															});
										
									}
								})
								.catch(console.error);
						} 
	window.addEventListener('deviceorientation', (e) => {
																 x = -e.beta;
																 y = e.gamma;
																 z = -e.alpha;
												document.getElementById("mainDiv").style.transform = `translateZ(600px) rotateY(${y}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
															});

}
if(window.location.hash === "1"){
	speechSynthesis.speak(new SpeechSynthesisUtterance("Part 1 is: " + code.substring(0,4)));
}
if(window.location.hash === "2"){
		speechSynthesis.speak(new SpeechSynthesisUtterance("Part 2 is: " + code.substring(4,8)));

}
if(window.location.hash === "3"){
		speechSynthesis.speak(new SpeechSynthesisUtterance("Part 3 is: " + code.substring(8,12)));

}
if(window.location.hash === "4"){
		speechSynthesis.speak(new SpeechSynthesisUtterance("Part 4 is: " + code.substring(12,16)));

}
document.getElementById("escape").onclick = ()=>{
		if(document.querySelector("input").value === code){
			alert("Great Job!");
			window.open("", "_self").close();
		}
		else{
			alert("Nice try. Better luck next time...");
			location.reload();
		}
}
setTimeout(()=> {
	alert("Time's up! Nice try.");
	location.reload();
}, 300000)
