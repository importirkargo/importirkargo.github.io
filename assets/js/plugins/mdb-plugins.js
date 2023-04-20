const elemen = document.getElementById("id-elemen");
const isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
const isIOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);

if (isAndroid || isIOS) {
  elemen.style.display = "block";
} else {
  elemen.style.display = "none";
}