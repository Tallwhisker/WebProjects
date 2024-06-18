
//All the cupcakes
const cupcakes = [
    ["name", "pic", 25]
    ["name", "pic", 25]
    ["name", "pic", 25]
    ["name", "pic", 25]
    ["name", "pic", 25]
    ["name", "pic", 25]
    ["name", "pic", 25]
    ["name", "pic", 25]
];

//All the cakes
const cakes = [
    ["name", "pic", 25]
    ["name", "pic", 25]
    ["name", "pic", 25]
    ["name", "pic", 25]
    ["name", "pic", 25]
    ["name", "pic", 25]
    ["name", "pic", 25]
    ["name", "pic", 25]
];


//Select 1 random for the promotion

function makeAPromotion() {
    let cupcakeCount = cupcakes.length();
    let cakeCount = cakes.length();

    let luckyProduct = Math.floor(Math.random() * (cupcakeCount + cakeCount));


    if (luckyProduct > cupcakeCount -1) {
        //Subtract first arrays length
        luckyProduct -= cupcakeCount;

        cakes[luckyProduct];
    }
}