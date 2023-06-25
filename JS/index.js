// random number function
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

// fun fact generator
function fact() {

    var fact = [
        "Recording 365,000 spectators, the 2021 British Grand Prix broke attendance records.",
        "Who has the most F1 titles?",
        "Who has the most fastest laps in F1?",
        "How fast are F1 cars? ",
        "How much does an F1 car cost?"
    ];
    var facttext = [
        "",
        "Lewis Hamilton has 7 world titles alongside Michael Schumacher",
        "Michael Schumacher has 77 fastest laps in total",
        "F1 cars can accelerate from 0 – 60mph in just 2.6 seconds and clock up to 360kmph or 223.6mph.",
        "An F1 team may spend $145.6 million for a car"
    ];
    var factimage = [
        "./Images/facts/fact1.png",
        "./Images/facts/fact2.png",
        "./Images/facts/fact3.png",
        "./Images/facts/fact4.png",
        "./Images/facts/fact5.png"
    ];
    var chance = random(0, 4);
    document.getElementById("fact-title").innerHTML = fact[chance];
    document.getElementById("fact-text").innerHTML = facttext[chance];
    document.getElementById("fact").src = factimage[chance];


}
fact();