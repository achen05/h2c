

var imgArray = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  ],
    curIndex = 0;
    imgDuration = 20000;

function slideShow() {
    document.getElementById('backgroundImage').className += "fadeOut";
    setTimeout(function() {
        document.getElementById('backgroundImage').src = imgArray[curIndex];
        document.getElementById('backgroundImage').className = "";
    },1000);
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout(slideShow, imgDuration);
}
slideShow();
