import img1 from "../images/pizza1.jpg";
import img2 from "../images/pizza2.jpg";
import img3 from "../images/pizza3.jpg";
import img4 from "../images/pizza4.jpg";
import img5 from "../images/pizza5.jpeg";
import img6 from "../images/pizza6.jpeg";
import img7 from "../images/drink1.png";
import img8 from "../images/drink2.jpg";
import img9 from "../images/drink3.jpg";
import img10 from "../images/drink4.jpg";
import img11 from "../images/drinks.png";
import img12 from "../images/sweets1.jpg";
import img13 from "../images/sweets2.jpg";
import img14 from "../images/sweets3.jpg";
import img15 from "../images/sweets4.jpg";
import img16 from "../images/sweets5.jpg";
const Data = [
  img1,
  img2,
  img3,
  img10,
  img6,
  img16,
  img11,
  img8,
  img7,
  img5,
  img14,
  img12,
  img9,
  img4,
  img15,
  img13,
];
export const GalleryData = function (pages, limit) {
  let array = [];
  for (let i = (pages - 1) * limit; i < pages * limit; i++) {
    array.push(Data[i]);
  }
  return array;
};
export const getLength = function () {
  return Data.length;
};
