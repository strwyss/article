function showLiveTime() {
  let d = new Date();

  let hours = d.getHours();

  let timeRange;

  if (hours < 12) {
    timeRange = "AM";
  } else {
    timeRange = "PM";
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  day = d.getDate();
  month = getCurrentMonth();
  year = d.getFullYear();

  hours = ("0" + hours).slice(-2);
  minutes = ("0" + d.getMinutes()).slice(-2);
  seconds = ("0" + d.getSeconds()).slice(-2);

  var currentTime = day + " " + month + " " + year + ", " + hours + ":" + minutes + ":" + seconds + " " + timeRange;

  document.getElementById("clock").innerHTML = currentTime;

  var t = setTimeout(showLiveTime, 500);
}

function getCurrentMonth() {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const d = new Date();

  return monthNames[d.getMonth()];
}
