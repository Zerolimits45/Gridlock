// random number function
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

// driver generator
function gacha() {

    var driver = [
        "Lewis HAMILTON","George RUSSELL"
        ,"Max VERSTAPPEN","Sergio PEREZ"
        ,"Charles LECLERC","Carlos SAINZ"
        ,"Fernando ALONSO","Estaban OCON"
        ,"Lando NORRIS","Daniel RICCIARDO"
        ,"Valterri BOTTAS","Zhou GUANYU"
        ,"Kevin MAGNUSSEN","Mick SCHUMACHER"
        ,"Pierre GASLY","Yuki TSUNODA"
        ,"Sebastian VETTEL","Lance STROLL"
        ,"Alexander ALBON","Nicholas LATIFI"
    ];
    var drivernumber = [
        44,63,1,11,16,55,14,31,4,3,77,24,20,3,10,22,5,18,23,6
    ];
    
    var driverimage = [
        "./Images/Teams/teamdrivers/ham.png","./Images/Teams/teamdrivers/rus.png"
        ,"./Images/Teams/teamdrivers/ver.png","./Images/Teams/teamdrivers/per.png"
        ,"./Images/Teams/teamdrivers/lec.png","./Images/Teams/teamdrivers/sai.png"
        ,"./Images/Teams/teamdrivers/alo.png","./Images/Teams/teamdrivers/oco.png"
        ,"./Images/Teams/teamdrivers/nor.png","./Images/Teams/teamdrivers/ric.png"
        ,"./Images/Teams/teamdrivers/bot.png","./Images/Teams/teamdrivers/zho.png"
        ,"./Images/Teams/teamdrivers/mag.png","./Images/Teams/teamdrivers/msc.png"
        ,"./Images/Teams/teamdrivers/gas.png","./Images/Teams/teamdrivers/tsu.png"
        ,"./Images/Teams/teamdrivers/vet.png","./Images/Teams/teamdrivers/str.png"
        ,"./Images/Teams/teamdrivers/alb.png","./Images/Teams/teamdrivers/lat.png"
    ];
    var driverrating = [
        "./Images/rating/5rating.png","./Images/rating/4rating.png"
        ,"./Images/rating/5rating.png","./Images/rating/4rating.png"
        ,"./Images/rating/4rating.png","./Images/rating/4rating.png"
        ,"./Images/rating/5rating.png","./Images/rating/3rating.png"
        ,"./Images/rating/4rating.png","./Images/rating/3rating.png"
        ,"./Images/rating/4rating.png","./Images/rating/2rating.png"
        ,"./Images/rating/3rating.png","./Images/rating/2rating.png"
        ,"./Images/rating/3rating.png","./Images/rating/2rating.png"
        ,"./Images/rating/5rating.png","./Images/rating/1rating.png"
        ,"./Images/rating/2rating.png","./Images/rating/1rating.png"

    ];
    var chance = random(0,19);
    document.getElementById("luckynumber").innerHTML = drivernumber[chance];
    document.getElementById("luckyname").innerHTML = driver[chance];
    document.getElementById("luckyimage").src = driverimage[chance];
    document.getElementById("luckyrating").src = driverrating[chance];
    
 
}
