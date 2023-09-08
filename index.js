let products = {
    data: [
        {
            productName: "Regular white T-Shirts",
            category: "topwear",
            price: "30",
            image: "white-tshirts.jpeg",
        },
        {
            productName: "Beige Short Skirt",
            category: "bottomwear",
            price: "49",
            image: "short-skirt.jpeg",
        },
        {
            productName: "Sporty Smartwatch",
            category: "watch",
            price: "99",
            image: "sports-smartwatch.jpg",
        },
        {
            productName: "Basic Knitted Top",
            category: "topwear",
            price: "29",
            image: "knitted-top.jpeg",
        },
        {
            productName: "Black Leather Jacket",
            category: "jacket",
            price: "129",
            image: "black-leather-jacket.jpeg",
        },
        {
            productName: "Stylish Pink Trousers",
            category: "bottomwear",
            price: "89",
            image: "pink-trousers.jpeg",
        },
        {
            productName: "Brown Men's Jacket",
            category: "jacket",
            price: "189",
            image: "brown-jacket.jpg",
        },
        {
            productName: "Comfy Gray Pants",
            category: "bottomwear",
            price: "49",
            image: "comfy-gray-pants.jpeg",
        },
    ],
};

for (let i of products.data) {
    // create card
    let card = document.createElement("div");
    // card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    // img div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    // product name
    let name = document.createElement("h5");
    name.classList.add("product-name")
    name.innerHTML = i.productName.toUpperCase();
    container.appendChild(name);
    // price
    let price = document.createElement("h6");
    price.innerHTML = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

// parameter passed from button (parameter same as category)
function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        // check if value is equal to innerHtml
        if (value.toUpperCase() == button.innerHTML.toUpperCase()) {
            button.classList.add("active")
        }
        else {
            button.classList.remove("active")
        }
    });

    //select all the cards
    let elements = document.querySelectorAll(".card")
    // loop through all the card 
    elements.forEach((element) => {
        // display all the card on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        }
        else {
            // check if element contain category class
            if (element.classList.contains(value)) {
                // elemnt display based on category
                element.classList.remove("hide");
            }
            else {
                // hide other element
                element.classList.add("hide");
            }
        }

    });
}


// search button
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    
    // loop through all elements 
    elements.forEach((element, index) => {
        //   check if text inlude the search value 
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        }
        else {
            cards[index].classList.add("hide");
        }
    });
});

// initiall display all the product
window.onload = () => {
    filterProduct("all");
}