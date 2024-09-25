let img = document.querySelector(".watch");

let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let num3 = document.querySelector(".num3");
let num4 = document.querySelector(".num4");
let num5 = document.querySelector(".num5");
let move = document.querySelector(".move");
let text = document.querySelector(".text");
let price = document.querySelector(".price");
let btn = document.querySelector(".btn");
let cart = document.querySelector(".cart");

let count = 1;  // Proper declaration of count

const numItems = [num1, num2, num3, num4, num5];

numItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    img.src = `photo/watch_${index + 1}.png`;
    console.log(index);

    // Remove active class from all items
    numItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    // Adjust the margin
    move.style.marginBottom = `${index * 87}px`;

    // Define the media query (min-width: 576px and max-width: 1200px)
    const mediaQuery = window.matchMedia("(min-width: 576px) and (max-width: 1200px)");

    // Function to handle the change
    function changeMargin(e) {
      if (e.matches) {
        move.style.marginBottom = "0px";
        numItems.forEach((i) => i.classList.remove("white"));
        item.classList.add("white");
        console.log("Screen width is between 576px and 1200px");
      } else {
        console.log("Screen width is outside 576px to 1200px");
      }
    }

    // Add a listener for changes to the media query
    mediaQuery.addEventListener("change", changeMargin);

    // Initial check
    changeMargin(mediaQuery);

    // Change the text and price based on index
    switch (index) {
      case 0:
        text.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate exercitationem corporis qui quod illo ipsa..";
        price.textContent = "250";
        break;
      case 1:
        text.textContent = "The overall design combines modern technology with a classic aesthetic due to the leather band.";
        price.textContent = "299";
        break;
      case 2:
        text.textContent = "The digital display shows large, easy-to-read fonts for the time and date, with a bright ring.";
        price.textContent = "533";
        break;
      case 3:
        text.textContent = "The brown leather strap adds a classic touch, offering a contrast between the digital screen.";
        price.textContent = "467";
        break;
      case 4:
        text.textContent = "Fossil is visible on the right side of the screen, a brand known for blending fashion with technology.";
        price.textContent = "380";
        break;
    }
  });
});

// Button click event
btn.addEventListener("click", () => {
  console.log("hello add");
  cart.textContent = `(${count})`;
  count += 1;
});
