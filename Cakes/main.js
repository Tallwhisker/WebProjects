//All the cupcakes
const cupcakes = [
    ["Pirate Petal", "./Media/Cupcake1.png", 10],
    ["Pinky Swirly", "./Media/Cupcake2.png", 6],
    ["Strawberry Top", "./Media/Cupcake3.png", 8],
    ["Cherry Top", "./Media/Cupcake4.png", 8],
    ["Kittycat Hungers", "./Media/Cupcake5.png", 10],
    ["Roses taste good", "./Media/Cupcake6.png", 8],
    ["Cherry Birthday", "./Media/Cupcake7.png", 10],
    ["Confused Spiderman", "./Media/Cupcake8.png", 10]
];


//All the cakes
const cakes = [
    ["Chocolate Berry", "./Media/Cake1.png", 20],
    ["Pink Princess", "./Media/Cake2.png", 25],
    ["Gold Wedding", "./Media/Cake3.png", 30],
    ["Lime Wedding", "./Media/Cake4.png", 40],
    ["Roses Intricate", "./Media/Cake5.png", 35],
    ["Red Rose Tower", "./Media/Cake6.png", 25],
    ["Blue Rose Intricate", "./Media/Cake7.png", 25],
    ["Rose Top Column", "./Media/Cake8.png", 30]
];


//Select 1 random for the promotion
function makeAPromotion() {
    let cupcakeCount = cupcakes.length;
    let cakeCount = cakes.length;

    let luckyProduct = Math.floor(Math.random() * (cupcakeCount + cakeCount));
    let productArray = [];

    if (luckyProduct > cupcakeCount -1) {
        //Subtract first arrays length to select second array
        luckyProduct -= cupcakeCount;
        
        productArray = cakes[luckyProduct];
        console.log(`Lucky Product: Cake ${luckyProduct}`);
    } 
    else {
        console.log(`Lucky Product: Cupcake ${luckyProduct}`);
        productArray = cupcakes[luckyProduct];
    };

    let name = productArray[0];
    let image = productArray[1];
    let price = productArray[2];

    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <img src="${image}" class="productImage">
        <h3 class="productTitle">${name}</h3>
        <p class="productPrice">${price}€</p>
        <button class="productButton" alt="Buy Now">Buy Now</button>
    `;
    newDiv.setAttribute('class', 'productCard');
    newDiv.setAttribute('id', 'promotedProduct');

    document.getElementById('promotions').appendChild(newDiv);
};


window.onload = function onLoadFunction() {
    makeAPromotion();
    createProducts(cupcakes, "cupcakeContainer");
    createProducts(cakes, "cakeContainer");
};


async function createProducts(array, targetElement) {
    const target = document.getElementById(targetElement);

    array.forEach(element => {
        let name = element[0];
        let image = element[1];
        let price = element[2];

        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <img src="${image}" class="productImage">
            <h3 class="productTitle">${name}</h3>
            <p class="productPrice">${price}€</p>
            <button class="productButton" alt="Buy Now">Buy Now</button>
        `;
        newDiv.setAttribute('class', 'productCard');

        target.appendChild(newDiv);
    });
};


// Hamburger things
const mobileMenuButton = document.getElementById('mobileNavigationButton');
const mobileMenuNav = document.getElementById('mobileNavigation');

mobileMenuButton.addEventListener('click', showMobileNav);
mobileMenuNav.addEventListener('click', showMobileNav);

async function showMobileNav() {
    if (mobileMenuNav.style.display == "block") {
        mobileMenuNav.style.display = "";
    }
    else {
        mobileMenuNav.style.display = "block";
    }
};
