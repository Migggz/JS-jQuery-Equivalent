/*global console,alert,prompt,document,navigator*/

// function openNav() {
//   document.getElementById("navigation").style.width = "250px";
//   document.body.style.marginLeft = "250px";
// }

var theDate = new Date();

document.getElementById("getDate").innerHTML = theDate.getDate();
document.getElementById("getDay").innerHTML = theDate.getDay();
document.getElementById("getFullYear").innerHTML = theDate.getFullYear();
document.getElementById("getMonth").innerHTML = theDate.getMonth();
document.getElementById("getHours").innerHTML = theDate.getHours();
document.getElementById("getMinutes").innerHTML = theDate.getMinutes();
document.getElementById("getSeconds").innerHTML = theDate.getSeconds();
document.getElementById("getMilliseconds").innerHTML = theDate.getMilliseconds();
document.getElementById("getTime").innerHTML = theDate.getTime();
document.getElementById("getTimezoneOffset").innerHTML = theDate.getTimezoneOffset();
document.getElementById("now").innerHTML = Date.now();
document.getElementById("parse").innerHTML = Date.parse("August 5, 2016");
document.getElementById("toISOString").innerHTML = theDate.toISOString();
document.getElementById("toDateString").innerHTML = theDate.toDateString();
document.getElementById("toTimeString").innerHTML = theDate.toTimeString();
document.getElementById("random").innerHTML = Math.floor(Math.random() * 100 + 1);


document.getElementById("appCodeName").innerHTML = navigator.appCodeName;
document.getElementById("appName").innerHTML = navigator.appName;
document.getElementById("appVersion").innerHTML = navigator.appVersion;
document.getElementById("cookieEnabled").innerHTML = navigator.cookieEnabled;
document.getElementById("geolocation").innerHTML = navigator.geolocation;
document.getElementById("language").innerHTML = navigator.language;
document.getElementById("onLine").innerHTML = navigator.onLine;
document.getElementById("platform").innerHTML = navigator.platform;
document.getElementById("product").innerHTML = navigator.product;
document.getElementById("userAgent").innerHTML = navigator.userAgent;
