var photos = [
  "altumcode-dMUt0X3f59Q-unsplash.jpg",
  "kevin-ku-w7ZyuGYNpRQ-unsplash.jpg",
  "pexels-pavel-danilyuk-5496464.jpg",
];
var imgTag = document.querySelector("img");

var count = 0;
function next() {
  count++;
  if (count >= photos.length) {
    count = 0;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
}

function prev() {
  count--;
  if (count < 0) {
    count = photos.length - 1;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
}
