import img1 from "./assets/images/as1.jpeg"
const content = document.getElementById("content");
const imgBox = document.createElement("img");

const h1 = document.createElement("div");
h1.textContent = "Hello World";

imgBox.src = img1

content.appendChild(h1);
content.appendChild(imgBox)