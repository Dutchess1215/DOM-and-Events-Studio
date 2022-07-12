// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const takeoff = document.getElementById('takeoff');
    const landing = document.getElementById('landing');
    const missionAbort = document.getElementById('missionAbort');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const up = document.getElementById('up');
    const down = document.getElementById('down');
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
}
window.addEventListener("load", function() {
    // put DOM here?
    console.log('window loaded');


takeoff.addEventListener('click', function(event){
   let launchConfirm =  window.confirm('Confirm that the shuttle is ready for takeoff.');
    if(launchConfirm === true){
        flightStatus.innerHTML = 'Shuttle in flight.';
        shuttleBackground.style.backgroundColor = 'blue';
        spaceShuttleHeight.innerHTML=10000;
    }
});
landing.addEventListener(click, function(event){
    window.alert('The shuttle is landing. Landing gear engaged.');
    flightStatus.innerHTML = 'The shuttle has landed';
    shuttleBackground.style.backgroundColor = 'green';
    spaceShuttleHeight.innerHTML= 0 ;
});
});