
var timer;
var sec = document.getElementById('Timer');


(function(){
    var sec = 50;
    timer = setInterval(()=>{
        sec --
        console.log(sec);
    }, 1000)
})()