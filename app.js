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
        code: "brown",
        img: "./img/brazer.png"
      },
      {
        code: "yellow",
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
        code: "aqua",
        img: "./img/tennis.png"
      },
      {
        code: "white",
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
        code: "blue",
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
        code: "red",
        img: "./img/jordan.png"
      },
      {
        code: "black",
        img: "./img/jordan2.png"
      }
    ]
  }
];
let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // 1. Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // 2. Change the chosen product
    choosenProduct = products[index];

    // 3. Update the text and image in the product section
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // 4. Update the color circles
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

// 5. Change product image based on color click
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});
//product box  color
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});  
//product button to make payments
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex";
}); 

close.addEventListener("click",() =>{
  payment.style.display="none";
});