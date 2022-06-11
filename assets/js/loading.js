// loading
var percent = document.querySelector(".percent");
var preload = document.querySelector(".loading");
var count = 0;
//var per = 16;
var loading = setInterval(animate, 1000 / 70);
function animate() {
  if (count >= 100) {
    clearInterval(loading);
    preload.classList.add("finished");
    // loadingAfter();
    //loadingAfterMain();
  } else {
    count = count + 1;
    percent.textContent = count + "%";
  }
  if (count > 99.9) {
    count = 100;
  }
}
