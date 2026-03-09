const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "AIR FORCE",
    price: 119,
    colors: [
      {
        code: "white",
        img: "./img/airforce.png"
      },
      {
        code: "black", 
        img: "./img/airforce2.png"
      }
    ]
  },
  {
    id: 2,
    title: "BRAZER",
    price: 119,
    colors: [
      {
        code: "white",
        img: "./img/brazer.png"
      },
      {
        code: "black",
        img: "./img/brazer2.png"
      }
    ]
  },
  {
    id: 3,
    title: "CRATER",
    price: 119,
    colors: [
      {
        code: "white",
        img: "./img/crater.png"
      },
      {
        code: "black",
        img: "./img/crater2.png"
      }
    ]
  },
  {
    id: 4,
    title: "HIPPIE",
    price: 119,
    colors: [
      {
        code: "white",
        img: "./img/hippie.png"
      },
      {
        code: "black",
        img: "./img/hippie2.png"
      }
    ]
  },
  {
    id: 5,
    title: "TENNIS SHOES",
    price: 119,
    colors: [
      {
        code: "white",
        img: "./img/tennis.png"
      },
      {
        code: "black",
        img: "./img/tennis2.png"
      }
    ]
  },
  {
    id: 6,
    title: "SNEAKERS",
    price: 119,
    colors: [
      {
        code: "white",
        img: "./img/sneaker.png"
      },
      {
        code: "black",
        img: "./img/sneaker2.png"
      }
    ]
  },
  {
    id: 7,
    title: "JORDAN",
    price: 119,
    colors: [
      {
        code: "white",
        img: "./img/jordan.png"
      },
      {
        code: "black",
        img: "./img/jordan2.png"
      }
    ]
  }
];

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});