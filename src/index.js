import img1 from "./assets/images/as1.jpeg"
import img2 from "./assets/images/bb.jpg"
import img3 from "./assets/images/vp.jpg"
import img4 from "./assets/images/pr.jpg"
import img5 from "./assets/images/fg.jpg"
import './styles.css';

const content =  document.getElementById("content")
const pic1 =     document.createElement("img");
const pic2 =     document.createElement("img");
const pic3 =     document.createElement("img");
const pic4 =     document.createElement("img");
const pic5 =     document.createElement("img");
const slide1 =   document.createElement("div");
const slide2 =   document.createElement("div");
const slide3 =   document.createElement("div");
const slide4 =   document.createElement("div");
const slide5 =   document.createElement("div");
const frame =    document.createElement("div");
const carousel = document.createElement("div");
const right =    document.createElement('div');
const left =     document.createElement('div');
const frameBox = document.createElement('div');
frameBox.classList.add('frame-box')
const offsets = ['o1', 'o2', 'o3', 'o4', 'o5'];

const dotBox =   document.createElement('div');
const dot1 =     document.createElement('div');
const dot2 =     document.createElement('div');
const dot3 =     document.createElement('div');
const dot4 =     document.createElement('div');
const dot5 =     document.createElement('div');
const dots = [dot1, dot2, dot3, dot4, dot5];
dotBox.classList.add('dotBox');
dot1.classList.add('dot');
dot2.classList.add('dot');
dot3.classList.add('dot');
dot4.classList.add('dot');
dot5.classList.add('dot');
dot1.classList.add('active');

for (let i = 0; i < 5; i++) {
  dots[i].addEventListener('click', () => {
    carousel.classList.remove(offsets[offset]);
    carousel.classList.add(offsets[i]);
    const current = document.getElementsByClassName('active');
    current[0].classList.remove('active');
    dots[i].classList.add('active');
    offset = i;
    clearInterval(rotate);
    rotate = setInterval(slideRight, 5000);
  })
}

let rotate;
let offset = 0;

pic1.src = img1;
pic2.src = img2;
pic3.src = img3;
pic4.src = img4;
pic5.src = img5;

slide1.appendChild(pic1);
slide1.classList.add("slide")
slide2.appendChild(pic2);
slide2.classList.add("slide")
slide3.appendChild(pic3);
slide3.classList.add("slide")
slide4.appendChild(pic4);
slide4.classList.add("slide")
slide5.appendChild(pic5);
slide5.classList.add("slide")

frame.setAttribute('id', 'frame');

carousel.setAttribute('id', 'carousel');
right.textContent = '>';
left.textContent = '<';


const slideRight = () => {
  carousel.classList.remove(offsets[offset]);
  const current = document.getElementsByClassName('active');
  current[0].classList.remove('active');
  offset += 1;
  if (offset > 4) {
    offset = offset % 5;
  }
  carousel.classList.add(offsets[offset]);
  dots[offset].classList.add('active');
}

const slideLeft = () => {
  carousel.classList.remove(offsets[offset]);
  offset -= 1;
  if (offset < 0) {
    offset = 4;
  }
  carousel.classList.add(offsets[offset]);
}

right.addEventListener('click', () => {
  slideRight();
  clearInterval(rotate);
  rotate = setInterval(slideRight, 5000);
});

left.addEventListener('click', () => {
  slideLeft();
  clearInterval(rotate);
  rotate = setInterval(slideRight, 5000);
});

const start = () => {
  rotate = setInterval(slideRight, 5000);
}

frameBox.appendChild(left);
carousel.appendChild(slide1);
carousel.appendChild(slide2);
carousel.appendChild(slide3);
carousel.appendChild(slide4);
carousel.appendChild(slide5);
frame.appendChild(carousel);
frameBox.appendChild(frame);
frameBox.appendChild(right);
content.appendChild(frameBox)
dotBox.appendChild(dot1);
dotBox.appendChild(dot2);
dotBox.appendChild(dot3);
dotBox.appendChild(dot4);
dotBox.appendChild(dot5);
content.appendChild(dotBox);
start();