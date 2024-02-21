import img1 from "../images/pizza1.webp";
import img2 from "../images/pizza2.webp";
import img3 from "../images/pizza3.webp";
import img4 from "../images/pizza4.webp";
import img5 from "../images/pizza5.webp";
import img6 from "../images/pizza6.webp";
import img7 from "../images/drink1.webp";
import img8 from "../images/drink2.webp";
import img9 from "../images/drink3.webp";
import img10 from "../images/drink4.webp";
import img11 from "../images/drinks.webp";
import img12 from "../images/sweets1.webp";
import img13 from "../images/sweets2.webp";
import img14 from "../images/sweets3.webp";
import img15 from "../images/sweets4.webp";
import img16 from "../images/sweets5.webp";
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
