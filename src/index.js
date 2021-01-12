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
const offsets = ['o1', 'o2', 'o3', 'o4', 'o5'];
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
  offset += 1;
  if (offset > 4) {
    offset = offset % 5;
  }
  carousel.classList.add(offsets[offset]);
}

const slideLeft = () => {
  carousel.classList.remove(offsets[offset]);
  offset -= 1;
  if (offset < 0) {
    offset = 4;
  }
  carousel.classList.add(offsets[offset]);
}

// let rotate = setInterval(slideRight, 3000);

right.addEventListener('click', slideRight);

left.addEventListener('click', slideLeft);

content.appendChild(left);
carousel.appendChild(slide1);
carousel.appendChild(slide2);
carousel.appendChild(slide3);
carousel.appendChild(slide4);
carousel.appendChild(slide5);
frame.appendChild(carousel);
content.appendChild(frame);
content.appendChild(right);
