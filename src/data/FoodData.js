import p1 from "../images/1.webp";
import p2 from "../images/2.webp";
import p3 from "../images/3.webp";
import p4 from "../images/4.webp";
import p5 from "../images/5.webp";
import p6 from "../images/6.webp";
import p7 from "../images/7.webp";
import p8 from "../images/8.webp";
import d1 from "../images/9.webp";
import d2 from "../images/10.webp";
import d3 from "../images/11.webp";
import d4 from "../images/12.webp";
import s1 from "../images/13.webp";
import s2 from "../images/14.webp";
import s3 from "../images/15.webp";
import s4 from "../images/16.webp";
import s5 from "../images/17.webp";
import s6 from "../images/18.webp";
export const foodData = [
  {
    id: 1,
    title: "Neapolitan Style Pizza",
    img: p1,
    categories: "pizza",
    price: "100",

    size: [
      {
        id: "1_1",
        size: "small",
        price: "100",
      },
      {
        id: "1_2",
        size: "medium",
        price: "120",
      },
      {
        id: "1_3",
        size: "large",
        price: "220",
      },
    ],
    ingredients: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    qty: 1,
    description:
      "Neapolitan is the original pizza. This delicious pie dates all the way back to the 18th century in Naples, Italy. During this time, the poorer citizens of this seaside city frequently purchased food that was cheap and could be eaten quickly. Luckily for them, Neapolitan pizza was affordable and readily available through numerous street vendors.",
  },
  {
    id: 2,
    title: "Chicago Style Pizza",
    img: p2,
    categories: "pizza",
    price: "100",

    size: [
      {
        id: "2_1",
        size: "small",
        price: "100",
      },
      {
        id: "2_2",
        size: "medium",
        price: "120",
      },
      {
        id: "2_3",

        size: "large",
        price: "200",
      },
    ],
    ingredients: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    qty: 1,
    description:
      "Chicago pizza, also called deep-dish pizza, gets its name from the city it was invented in. During the early 1900s, Italian immigrants in the windy city were searching for something similar to the Neapolitan pizza that they knew and loved. Instead of imitating the notoriously thin pie, Ike Sewell had something else in mind. He created a pizza with a thick crust that had raised edges, similar to a pie, and ingredients in reverse, with slices of mozzarella lining the dough followed by meat and vegetables, and then topped with a can of crushed tomatoes. This original creation led Sewell to create the now-famous chain restaurant, Pizzeria Uno.",
  },
  {
    id: 3,
    title: "New York Style Pizza",
    img: p3,
    categories: "pizza",
    price: "120",

    size: [
      {
        id: "3_1",
        size: "small",
        price: "120",
      },
      {
        id: "3_2",

        size: "medium",
        price: "150",
      },
      {
        id: "3_3",
        size: "large",
        price: "250",
      },
    ],
    ingredients: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    qty: 1,
    description:
      "With its characteristic large, foldable slices and crispy outer crust, New York pizza is one of America’s most famous regional pizza types. Originally a variation of Neapolitan pizza, the New York slice has taken on fame all its own, with some saying its unique flavor has to do with the minerals present in New York’s tap water supply.",
  },
  {
    id: 4,
    title: "Sicilian Style Pizza",
    img: p4,
    categories: "pizza",
    price: "100",

    size: [
      {
        id: "4_1",
        size: "small",
        price: "100",
      },
      {
        id: "4_2",

        size: "medium",
        price: "120",
      },
      {
        id: "4_3",

        size: "large",
        price: "220",
      },
    ],
    ingredients: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    qty: 1,
    description:
      'Sicilian pizza, also known as "sfincione," prov"id"es a thick cut of pizza with pillowy dough, a crunchy crust, and robust tomato sauce. This square-cut pizza is served with or without cheese, and often with the cheese underneath the sauce to prevent the pie from becoming soggy. Sicilian pizza was brought to America in the 19th century by Sicilian immigrants and became popular in the United States after the Second World War.',
  },
  {
    id: 5,
    title: "Greek Style Pizza",
    img: p5,
    categories: "pizza",
    price: "150",

    size: [
      {
        id: "5_1",
        size: "small",
        price: "150",
      },
      {
        id: "5_2",

        size: "medium",
        price: "180",
      },
      {
        id: "5_3",
        size: "large",
        price: "300",
      },
    ],
    ingredients: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    qty: 1,
    description:
      "Greek pizza was created by Greek immigrants who came to America and were introduced to Italian pizza. Greek pizza, trendy in the New England states, features a thick and chewy crust cooked in shallow, oiled pans, resulting in a nearly deep-fried bottom. While this style has a crust that is puffier and chewier than thin crust pizzas, it’s not quite as thick as a deep-dish or Sicilian crust.",
  },
  {
    id: 6,
    title: "California Style Pizza",
    img: p6,
    categories: "pizza",
    price: "100",

    size: [
      {
        id: "6_1",
        size: "small",
        price: "100",
      },
      {
        id: "6_2",

        size: "medium",
        price: "120",
      },
      {
        id: "6_3",
        size: "large",
        price: "220",
      },
    ],
    ingredients: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    qty: 1,
    description:
      "California pizza, or gourmet pizza, is known for its unusual ingredients. This pizza got its start back in the late 1970s when Chef Ed LaDou began experimenting with pizza recipes in the classic Italian restaurant, Prego. He created a pizza with mustard, ricotta, pate, and red pepper, and by chance, served it to Wolfgang Puck. Impressed with LaDou’s innovative pie, Puck invited him to be the head pizza chef at his restaurant. It was here that LaDou came up with over 250 unique pizza recipes that eventually formed the menu of the chain restaurant California Pizza Kitchen.",
  },
  {
    id: 7,
    title: "Detroit Style Pizza",
    img: p7,
    categories: "pizza",
    price: "120",

    size: [
      {
        id: "7_1",
        size: "small",
        price: "120",
      },
      {
        id: "7_2",

        size: "medium",
        price: "140",
      },
      {
        id: "7_3",
        size: "large",
        price: "280",
      },
    ],
    ingredients: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    qty: 1,
    description:
      "Reflecting the city’s deep ties to the auto industry, Detroit pizza was originally baked in a square automotive parts pan in the 1940s. Detroit pizza is first topped with pepperoni, followed by brick cheese (a semi-hard cheese named after the bricks used to press the curds) which is spread to the very edges of the pan, yielding a caramelized cheese perimeter. The sauce is then spooned over the pizza, an order similar to Chicago pizza. This pizza features a thick, extra-crispy crust that is tender and airy on the ins ide.",
  },
  {
    id: 8,
    title: "St. Louis Style Pizza",
    img: p8,
    categories: "pizza",
    price: "100",

    size: [
      {
        id: "8_1",
        size: "small",
        price: "100",
      },
      {
        id: "8_2",

        size: "medium",
        price: "120",
      },
      {
        id: "8_3",
        size: "large",
        price: "220",
      },
    ],
    ingredients: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    qty: 1,
    description:
      'Looking for a light slice? St. Louis pizza features a thin crust with a cracker-like consistency that is made without yeast. Due to the crispy crust, St. Louis pizza is usually cut into 3- or 4-inch rectangles, known as "party" or "tavern" cut. This pizza features Provel processed cheese, which is a gooey combination of cheddar, Swiss, and provolone cheeses. St. Louis received an influx of Italian immigrants in the 19th century who were looking for employment opportunities. The Italian community, largely from Milan and Sicily, created the St. Louis pizza. Its sweet sauce is reminiscent of the Sicilian influence.',
  },
  {
    id: 9,
    title: "Green tea",
    img: d1,
    categories: "drinks",
    price: "60",

    size: [
      {
        id: "9_1",
        size: "small",
        price: "60",
      },
      {
        id: "9_2",

        size: "medium",
        price: "80",
      },
      {
        id: "9_3",
        size: "large",
        price: "100",
      },
    ],
    ingredients: "Green tea",
    qty: 1,
    description:
      "Green tea has functional ingredients that may combine to improve brain function and cognitive health. Green tea seems to be linked with a lower chance of cognitive impairment in middle and older age.",
  },
  {
    id: 10,
    title: "Chocolate milk",
    img: d2,
    categories: "drinks",
    price: "60",

    size: [
      {
        id: "10_1",
        size: "small",
        price: "60",
      },
      {
        id: "10_2",

        size: "medium",
        price: "80",
      },
      {
        id: "10_3",
        size: "large",
        price: "100",
      },
    ],
    ingredients: "Chocolate milk",
    qty: 1,
    description:
      "Chocolate milk is a type of flavoured milk made by mixing cocoa solids with milk (either dairy or plant-based). It is a food pairing in which the milk's mouthfeel masks the dietary fibres of the cocoa solids.",
  },
  {
    id: 11,
    title: "Coconut milk",
    img: d3,
    categories: "drinks",
    price: "70",

    size: [
      {
        id: "11_1",
        size: "small",
        price: "70",
      },
      {
        id: "11_2",

        size: "medium",
        price: "90",
      },
      {
        id: "11_3",
        size: "large",
        price: "110",
      },
    ],
    ingredients: "Coconut milk",
    qty: 1,
    description:
      "Coconut milk is an opaque, milky-white liquid extracted from the grated pulp of mature coconuts.",
  },
  {
    id: 12,
    title: "Lemonade",
    img: d4,
    categories: "drinks",
    price: "60",

    size: [
      {
        id: "12_1",
        size: "small",
        price: "60",
      },
      {
        id: "12_2",
        size: "medium",
        price: "80",
      },
      {
        id: "12_3",
        size: "large",
        price: "100",
      },
    ],
    ingredients: "Mint, lemonada",
    qty: 1,
    description:
      "Sweet mint and tart lemons make this Fresh Mint Lemonade the perfect antidote to the heat of a summer day! Make a pitcher, kick back and enjoy this refreshingly simple drink. A true summer favorite!",
  },
  {
    id: 13,
    title: "Dark Chocolate-Caramel Macchiato Pie",
    img: s1,
    categories: "sweets",
    price: "80",
    ingredients: "biscotti,butter,milk chocolate,caramel",
    qty: 1,
    description:
      "1 piece: 413 calories, 27g fat (18g saturated fat), 55mg cholesterol, 186mg sodium, 39g carbohydrate (30g sugars, 1g fiber), 5g protein.",
  },
  {
    id: 14,
    title: "Coffee Cheesecake",
    img: s2,
    categories: "sweets",
    price: "80",
    ingredients: "biscotti,butter,milk chocolate,caramel",
    qty: 1,
    description:
      "1 piece: 466 calories, 33g fat (19g saturated fat), 123mg cholesterol, 279mg sodium, 39g carbohydrate (31g sugars, 1g fiber), 6g protein.",
  },
  {
    id: 15,
    title: "Coffee Ice Cream",
    img: s3,
    categories: "sweets",
    price: "80",
    ingredients: "biscotti,butter,milk chocolate,caramel",
    qty: 1,
    description:
      "1/2 cup: 292 calories, 20g fat (13g saturated fat), 73mg cholesterol, 87mg sodium, 25g carbohydrate (24g sugars, 0 fiber), 4g protein.",
  },
  {
    id: 16,
    title: "White Chocolate-Cappuccino Cookies",
    img: s4,
    categories: "sweets",
    price: "80",
    ingredients: "biscotti,butter,milk chocolate,caramel",
    qty: 1,
    description:
      "1 cookie: 97 calories, 5g fat (4g saturated fat), 14mg cholesterol, 40mg sodium, 12g carbohydrate (7g sugars, 0 fiber), 1g protein.",
  },
  {
    id: 17,
    title: "Mocha Cake",
    img: s5,
    categories: "sweets",
    price: "80",
    ingredients: "biscotti,butter,milk chocolate,caramel",
    qty: 1,
    description:
      "1 piece: 730 calories, 35g fat (21g saturated fat), 124mg cholesterol, 542mg sodium, 100g carbohydrate (75g sugars, 3g fiber), 8g protein.",
  },
  {
    id: 18,
    title: "Coffee Bean Bark",
    img: s6,
    categories: "sweets",
    price: "80",
    ingredients: "biscotti,butter,milk chocolate,caramel",
    qty: 1,
    description:
      "1 ounce: 132 calories, 8g fat (5g saturated fat), 2mg cholesterol, 13mg sodium, 16g carbohydrate (15g sugars, 1g fiber), 1g protein.",
  },
];
export const NoOfItems = function (category) {
  let n = 0;
  foodData.forEach((e) => {
    if (category === "all") {
      n = foodData.length;
    } else if (e.categories === category) {
      n++;
    }
  });
  return n;
};

export const categories = ["all", "pizza", "drinks", "sweets"];
export const bestSeller = [
  {
    id: 13,
    title: "Dark Chocolate-Caramel Macchiato Pie",
    img: s1,
    categories: "sweets",
    price: "80",
    ingredients: "biscotti,butter,milk chocolate,caramel",
    qty: 1,
    description:
      "1 piece: 413 calories, 27g fat (18g saturated fat), 55mg cholesterol, 186mg sodium, 39g carbohydrate (30g sugars, 1g fiber), 5g protein.",
  },
  {
    id: 14,
    title: "Coffee Cheesecake",
    img: s2,
    categories: "sweets",
    price: "80",
    ingredients: "biscotti,butter,milk chocolate,caramel",
    qty: 1,
    description:
      "1 piece: 466 calories, 33g fat (19g saturated fat), 123mg cholesterol, 279mg sodium, 39g carbohydrate (31g sugars, 1g fiber), 6g protein.",
  },
  {
    id: 15,
    title: "Coffee Ice Cream",
    img: s3,
    categories: "sweets",
    price: "80",
    ingredients: "biscotti,butter,milk chocolate,caramel",
    qty: 1,
    description:
      "1/2 cup: 292 calories, 20g fat (13g saturated fat), 73mg cholesterol, 87mg sodium, 25g carbohydrate (24g sugars, 0 fiber), 4g protein.",
  },
  {
    id: 9,
    title: "Green tea",
    img: d1,
    categories: "drinks",
    price: "60",

    size: [
      {
        id: "9_1",
        size: "small",
        price: "60",
      },
      {
        id: "9_2",

        size: "medium",
        price: "80",
      },
      {
        id: "9_3",
        size: "large",
        price: "100",
      },
    ],
    ingredients: "Green tea",
    qty: 1,
    description:
      "Green tea has functional ingredients that may combine to improve brain function and cognitive health. Green tea seems to be linked with a lower chance of cognitive impairment in middle and older age.",
  },
  {
    id: 10,
    title: "Chocolate milk",
    img: d2,
    categories: "drinks",
    price: "60",

    size: [
      {
        id: "10_1",
        size: "small",
        price: "60",
      },
      {
        id: "10_2",

        size: "medium",
        price: "80",
      },
      {
        id: "10_3",
        size: "large",
        price: "100",
      },
    ],
    ingredients: "Chocolate milk",
    qty: 1,
    description:
      "Chocolate milk is a type of flavoured milk made by mixing cocoa solids with milk (either dairy or plant-based). It is a food pairing in which the milk's mouthfeel masks the dietary fibres of the cocoa solids.",
  },
  {
    id: 2,
    title: "Chicago Style Pizza",
    img: p2,
    categories: "pizza",
    price: "100",

    size: [
      {
        id: "2_1",
        size: "small",
        price: "100",
      },
      {
        id: "2_2",
        size: "medium",
        price: "120",
      },
      {
        id: "2_3",

        size: "large",
        price: "200",
      },
    ],
    ingredients: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    qty: 1,
    description:
      "Chicago pizza, also called deep-dish pizza, gets its name from the city it was invented in. During the early 1900s, Italian immigrants in the windy city were searching for something similar to the Neapolitan pizza that they knew and loved. Instead of imitating the notoriously thin pie, Ike Sewell had something else in mind. He created a pizza with a thick crust that had raised edges, similar to a pie, and ingredients in reverse, with slices of mozzarella lining the dough followed by meat and vegetables, and then topped with a can of crushed tomatoes. This original creation led Sewell to create the now-famous chain restaurant, Pizzeria Uno.",
  },
  {
    id: 3,
    title: "New York Style Pizza",
    img: p3,
    categories: "pizza",
    price: "120",

    size: [
      {
        id: "3_1",
        size: "small",
        price: "120",
      },
      {
        id: "3_2",

        size: "medium",
        price: "150",
      },
      {
        id: "3_3",
        size: "large",
        price: "250",
      },
    ],
    ingredients: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    qty: 1,
    description:
      "With its characteristic large, foldable slices and crispy outer crust, New York pizza is one of America’s most famous regional pizza types. Originally a variation of Neapolitan pizza, the New York slice has taken on fame all its own, with some saying its unique flavor has to do with the minerals present in New York’s tap water supply.",
  },
  {
    id: 4,
    title: "Sicilian Style Pizza",
    img: p4,
    categories: "pizza",
    price: "100",
    size: [
      {
        id: "4_1",
        size: "small",
        price: "100",
      },
      {
        id: "4_2",

        size: "medium",
        price: "120",
      },
      {
        id: "4_3",

        size: "large",
        price: "220",
      },
    ],
    ingredients: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    qty: 1,
    description:
      'Sicilian pizza, also known as "sfincione," prov"id"es a thick cut of pizza with pillowy dough, a crunchy crust, and robust tomato sauce. This square-cut pizza is served with or without cheese, and often with the cheese underneath the sauce to prevent the pie from becoming soggy. Sicilian pizza was brought to America in the 19th century by Sicilian immigrants and became popular in the United States after the Second World War.',
  },
];
