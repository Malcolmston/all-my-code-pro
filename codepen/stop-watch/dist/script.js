var times = []

Number.prototype.fixstr = function () {
  if (this <= 9) {
    return "0" + this.toString();
  } else {
    return this.toString();
  }
};

Array.prototype.last = function (sub) {
  return this[this.length-(sub || 1)]
}

var myVar; //= setInterval(myTimer, 100);

document.getElementById("time").innerHTML = "00:00.00";
var minnit = 0,
  second = 0,
  milliscond = 0,
  lap = 1;

function myTimer() {
  //function(){
  document.getElementById("time").innerHTML =
    minnit.fixstr() + ":" + second.fixstr() + "." + milliscond.fixstr();
  milliscond++;
  if (milliscond == 99) {
    milliscond = 0;
    second++;
  }
  if (second == 99) {
    second = 0;
    minnit++;
  }
}

function myStopFunction() {
  clearInterval(myVar);
}

function addlap() {
  times.push( `<ul> lap ${lap}    ${
    document.getElementById("time").innerHTML
  } </ul> <hr> <div>` )
  if( times.length !== 1){
  if( times.last() > times.last(2) ){
    times[times.length-1] = times[times.length-1].replace("<ul","<ul style='color: lime;' ")
  }else{
    times[times.length-1] = times[times.length-1].replace("<ul","<ul style='color: red;' ")
}
  }
  document.getElementById("laps").innerHTML = times/* += `<ul> lap ${lap}    ${
    document.getElementById("time").innerHTML
  } </ul> <hr> <div>`; */
  lap++;
  times.toString().replaceAll(/["style='color: lime;'","style='color: red;"]/,"")
}

document.getElementById("click").onclick = function () {
  if (document.getElementById("click").className == "end") {
    document.getElementById("click").className = "start";
    document.getElementById("click").innerHTML = "start";
    document.getElementById("sett").innerHTML = "Reset";
    myStopFunction();
  } else {
    document.getElementById("click").className = "end";
    document.getElementById("click").innerHTML = "end";
    document.getElementById("sett").innerHTML = "Lap";
    myVar = setInterval(myTimer, 10);
  }
};

document.getElementById("sett").onclick = function () {
  if (
    document.getElementById("click").innerHTML == "end" &&
    document.getElementById("sett").innerHTML == "Reset"
  ) {
    document.getElementById("sett").innerHTML = "Reset";
    return;
  } else {
    if (document.getElementById("sett").innerHTML == "Reset") {
      times = []
      document.getElementById("laps").innerHTML = "";
      document.getElementById("sett").innerHTML = "Lap";
      (minnit = 0), (second = 0), (milliscond = 0), (lap = 1);
      myTimer();
    } else {
      addlap();
    }
  }
};