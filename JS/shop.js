const items = [
    ["Mercedes", "Mercedes AMG Petronas F1 2022 Lewis Hamilton 1:5 Model Helmet", "./Images/shop/merc/1.png"],
    ["Mercedes", "Mercedes AMG Petronas Lewis Hamilton 2022 Special Edition Hoodie - British GP", "./Images/shop/merc/2.png"],
    ["Mercedes", "Mercedes AMG Petronas F1 Lewis Hamilton 2022 Special Edition Bucket Hat - British GP", "./Images/shop/merc/3.png"],
    ["Mercedes", "Mercedes AMG Petronas F1 2022 Team Polo - Black", "./Images/shop/merc/4.png"],
    ["Mercedes", "Mercedes AMG Petronas F1 2022 Team Softshell Jacket", "./Images/shop/merc/5.png"],
    ["Red Bull", "Oracle Red Bull Racing RB16 Max Verstappen Abu Dhabi 2021 World Champion Car 1:43", "./Images/shop/redbull/1.png"],
    ["Red Bull", "Oracle Red Bull Racing Sergio Perez Checo Logo Hoodie - Womens", "./Images/shop/redbull/2.png"],
    ["Red Bull", "Oracle Red Bull Racing Sergio Perez Checo Logo T-Shirt - Navy - Kids", "./Images/shop/redbull/3.png"],
    ["Red Bull", "Oracle Red Bull Racing 2022 Team Half Zip Jumper", "./Images/shop/redbull/4.png"],
    ["Red Bull", "Oracle Red Bull Racing Max Verstappen Winners T-shirt", "./Images/shop/redbull/5.png"],
    ["Ferrari", "Scuderia Ferrari 2020 Team Sebastian Vettel T-Shirt", "./Images/shop/ferrari/1.png"],
    ["Ferrari", "Scuderia Ferrari Compact Umbrella - Black", "./Images/shop/ferrari/2.png"],
    ["Ferrari", "Scuderia Ferrari 2020 Team Charles Leclerc T-Shirt - Black", "./Images/shop/ferrari/3.png"],
    ["Ferrari", "Scuderia Ferrari 2020 Team Charles Leclerc T-Shirt - Red", "./Images/shop/ferrari/4.png"],
    ["Ferrari", "Scuderia Ferrari Race Waterbottle", "./Images/shop/ferrari/5.png"],
    ["Alpine", "Bwt Alpine F1 Team 2022 New Era 950 Esteban Ocon Cap", "./Images/shop/alpine/1.png"],
    ["Alpine", "Bwt Alpine F1 Team 2022 Polo Shirt White", "./Images/shop/alpine/2.png"],
    ["Alpine", "Bwt Alpine F1 Team 2022 Rain Jacket", "./Images/shop/alpine/3.png"],
    ["Alpine", "Bwt Alpine F1 Team 2022 T-shirt Black", "./Images/shop/alpine/4.png"],
    ["Alpine", "Bwt Alpine F1 Team Fernando Alonso 2022 Driver T-shirt", "./Images/shop/alpine/5.png"],
    ["Mclaren", "Mclaren 2022 Daniel Ricciardo 1 5 Helmet Model", "./Images/shop/mclaren/1.png"],
    ["Mclaren", "Mclaren-2022 Lando Norris Limited Edition Poster", "./Images/shop/mclaren/2.png"],
    ["Mclaren", "Mclaren 2022 Team Set Up T-shirt Grey", "./Images/shop/mclaren/3.png"],
    ["Mclaren", "Mclaren Lando Norris Hoodie Black", "./Images/shop/mclaren/4.png"],
    ["Mclaren", "Mclaren Matte Finish Mug", "./Images/shop/mclaren/5.png"],
    ["Alfa", "Alfa Romeo F1 Team Orlen 2022 Valtteri Bottas Driver Cap", "./Images/shop/alfa/1.png"],
    ["Alfa", "Kimi By West Coast Choppers Lanyard", "./Images/shop/alfa/2.png"],
    ["Alfa", "Kimi Lightweight Functional jacket Black", "./Images/shop/alfa/3.png"],
    ["Alfa", "Alfa Romeo F1-team Orlen 2022 Team T-shirt", "./Images/shop/alfa/4.png"],
    ["Alfa", "Alfa Romeo Sauber F1 2021 Essential T-shirt Womens", "./Images/shop/alfa/5.png"],
    ["Haas", "Replica Driver’s Cap Kevin Magnussen", "./Images/shop/haas/1.png"],
    ["Haas", "Replica Team Cap Haas F1 Team", "./Images/shop/haas/2.png"],
    ["Haas", "T-shirt Kevin Magnussen", "./Images/shop/haas/3.png"],
    ["Haas", "T-shirt Mick Schumacher", "./Images/shop/haas/4.png"],
    ["Alpha", "Alphatauri 2022 Team Polo White", "./Images/shop/alpha/1.png"],
    ["Alpha", "Alphatauri Team T-shirt Navy", "./Images/shop/alpha/2.png"],
    ["Alpha", "Alphatauri Team Backpack", "./Images/shop/alpha/3.png"],
    ["Alpha", "Alphatauri 2022 France Gp T-shirt", "./Images/shop/alpha/4.png"],
    ["Alpha", "Alphatauri 2022 Team Sweat Jacket", "./Images/shop/alpha/5.png"],
    ["Aston", "Aston Martin F1 Cognizant F1 2022 Official Team Bobble Beanie", "./Images/shop/astonmartin/1.png"],
    ["Aston", "Aston Martin F1 Cognizant F1 2022 Official Team Grid Golf Umbrella", "./Images/shop/astonmartin/2.png"],
    ["Aston", "Aston Martin F1 Cognizant F1 Lifestyle Hoodie Black", "./Images/shop/astonmartin/3.png"],
    ["Aston", "Aston Martin F1 Cognizant F1 Official Sebastian Vettel Hoodie Green", "./Images/shop/astonmartin/4.png"],
    ["Aston", "Aston Martin F1 Cognizant F1 Official Sebastian Vettel T-shirt Black", "./Images/shop/astonmartin/5.png"],
    ["Williams", "Williams Racing 2022 Team Alex Albon Driver Cap", "./Images/shop/williams/1.png"],
    ["Williams", "Williams Racing 2022 Team Gilet", "./Images/shop/williams/2.png"],
    ["Williams", "Williams Racing 2021 Team Performance Jacket", "./Images/shop/williams/3.png"],
    ["Williams", "Williams Racing 2022 Team Training Jersey - Navy", "./Images/shop/williams/4.png"],
    ["Williams", "Williams Racing 2022 Team Media Pole - Navy", "./Images/shop/williams/5.png"],
];

function displayItem(team) {
    var elementToPutIn = document.getElementById("shopItems")
    elementToPutIn.innerHTML = ""
    for (var i = 0; i < items.length; i++) {
        if (team) {
            if (team == items[i][0]) {
                elementToPutIn.innerHTML += '<div class="col-md-3 mb-4"><div class="card round-box card-color" style="width: 100%;"><div class="card-body"><div class="d-flex align-items-center"><img src=" ' + items[i][2] + ' " class="team-driver-image"></div><br><div class="d-flex align-items-center"><h4 class="card-title driver-name">' + items[i][1] + '</h4></div><br><button class="cart-btn" id="addToCart" onclick="">Add To Cart</button></div></div></div>'
            }
        } else {
            elementToPutIn.innerHTML += '<div class="col-md-3 mb-4"><div class="card round-box card-color" style="width: 100%;"><div class="card-body"><div class="d-flex align-items-center"><img src=" ' + items[i][2] + ' " class="team-driver-image"></div><br><div class="d-flex align-items-center"><h4 class="card-title driver-name">' + items[i][1] + '</h4></div><br><button class="cart-btn" id="addToCart" onclick="">Add To Cart</button></div></div></div>'
        }
    }
}

displayItem(); 
