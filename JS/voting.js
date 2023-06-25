var currentNumber = ""
var currentTeam = ""
var driver = localStorage.getItem('driver') == null ? {} : JSON.parse(localStorage.getItem('driver'));
var team = localStorage.getItem('team') == null ? {} : JSON.parse(localStorage.getItem('team'));


var drivers = {
  44: {
    "firstName": "Lewis",
    "lastName": "HAMILTON",
    "image": "./Images/Teams/teamdrivers/ham.png"
  },

  63: {
    "firstName": "George",
    "lastName": "RUSSELL",
    "image": "./Images/Teams/teamdrivers/rus.png"
  },

  1: {
    "firstName": "Max",
    "lastName": "VERSTAPPEN",
    "image": "./Images/Teams/teamdrivers/ver.png"
  },

  11: {
    "firstName": "Sergio",
    "lastName": "PEREZ",
    "image": "./Images/Teams/teamdrivers/per.png"
  },

  16: {
    "firstName": "Charles",
    "lastName": "LECLERC",
    "image": "./Images/Teams/teamdrivers/lec.png"
  },

  55: {
    "firstName": "Carlos",
    "lastName": "SAINZ",
    "image": "./Images/Teams/teamdrivers/sai.png"
  },

  14: {
    "firstName": "Fernado",
    "lastName": "ALONSO",
    "image": "./Images/Teams/teamdrivers/alo.png"
  },

  31: {
    "firstName": "Esteban",
    "lastName": "OCON",
    "image": "./Images/Teams/teamdrivers/oco.png"
  },

  4: {
    "firstName": "Lando",
    "lastName": "NORRIS",
    "image": "./Images/Teams/teamdrivers/nor.png"
  },

  3: {
    "firstName": "Daniel",
    "lastName": "RICCIARDO",
    "image": "./Images/Teams/teamdrivers/ric.png"
  },

  10: {
    "firstName": "Pierre",
    "lastName": "GASLY",
    "image": "./Images/Teams/teamdrivers/gas.png"
  },

  22: {
    "firstName": "Yuki",
    "lastName": "TSUNODA",
    "image": "./Images/Teams/teamdrivers/tsu.png"
  },

  20: {
    "firstName": "Kevin",
    "lastName": "MAGNUSSEN",
    "image": "./Images/Teams/teamdrivers/mag.png"
  },

  47: {
    "firstName": "Mick",
    "lastName": "SCHUMACHER",
    "image": "./Images/Teams/teamdrivers/msc.png"
  },

  77: {
    "firstName": "Valterri",
    "lastName": "BOTTAS",
    "image": "./Images/Teams/teamdrivers/bot.png"
  },

  24: {
    "firstName": "Zhou",
    "lastName": "GUANYU",
    "image": "./Images/Teams/teamdrivers/zho.png"
  },

  5: {
    "firstName": "Sebastian",
    "lastName": "VETTEL",
    "image": "./Images/Teams/teamdrivers/vet.png"
  },

  18: {
    "firstName": "Lance",
    "lastName": "STROLL",
    "image": "./Images/Teams/teamdrivers/str.png"
  },

  23: {
    "firstName": "Alexander",
    "lastName": "ALBON",
    "image": "./Images/Teams/teamdrivers/alb.png"
  },

  6: {
    "firstName": "Nicholas",
    "lastName": "LATIFI",
    "image": "./Images/Teams/teamdrivers/lat.png"
  },

}

var teams = {
  "Mercedes": {
    "image": "./Images/Teams/teamlogo/Mercedes.png",
    "color": "aquamarine"
  },

  "Red Bull": {
    "image": "./Images/Teams/teamlogo/redbull.png",
    "color": "#01295F"
  },

  "Ferrari": {
    "image": "./Images/Teams/teamlogo/ferrari.png",
    "color": "#FD151B"
  },

  "Alpine": {
    "image": "./Images/Teams/teamlogo/alpine.png",
    "color": "#007BFF"
  },

  "Mclaren": {
    "image": "./Images/Teams/teamlogo/mclaren.png",
    "color": "#F79F79"
  },

  "Alfa": {
    "image": "./Images/Teams/teamlogo/alfa.png",
    "color": "#EEEEEE"
  },

  "Haas": {
    "image": "./Images/Teams/teamlogo/hass.png",
    "color": "#EEEEEE"
  },

  "Alpha": {
    "image": "./Images/Teams/teamlogo/alpha.png",
    "color": "#E7ECEF"
  },

  "Aston": {
    "image": "./Images/Teams/teamlogo/aston.png",
    "color": "#14342B"
  },

  "Williams": {
    "image": "./Images/Teams/teamlogo/williams.png",
    "color": "#0353A4"
  },
}

function votedDriver(number) {
  if (currentNumber != "") {
    document.getElementById(currentNumber).style.border = "5px solid #373737" //change current selected driver back to grey border
  }
  document.getElementById(number).style.border = "5px solid red" // change current driver to red border to indicated selected
  currentNumber = number
}
function votedTeam(teamName) {
  if (currentTeam != "") {
    document.getElementById(currentTeam).style.border = "5px solid #373737" //change current selected driver back to grey border
  }
  document.getElementById(teamName).style.border = "5px solid red" // change current driver to red border to indicated selected
  currentTeam = teamName
}

function showResults() {
  var sortedDriverResults = []
  var sortedTeamResults = []

  // Put objects into array for sorting
  for (var person in driver) {
    sortedDriverResults.push([person, driver[person]]);
  }

  for (var teamName in team) {
    sortedTeamResults.push([teamName, team[teamName]]);
  }

  //Sort driver and team arrays
  sortedDriverResults.sort(function (a, b) {
    return a[1] - b[1];
  });

  sortedTeamResults.sort(function (a, b) {
    return a[1] - b[1];
  });

  //get top driver and team
  var topDriver = drivers[sortedDriverResults[sortedDriverResults.length - 1][0]]
  var topTeam = teams[sortedTeamResults[sortedTeamResults.length - 1][0]]

  // Set top driver and team into html
  document.getElementById("top-driver-number").innerHTML = sortedDriverResults[sortedDriverResults.length - 1][0]
  document.getElementById("top-driver-firstname").innerHTML = topDriver.firstName + "<span class='vote-title'> " + topDriver.lastName + "</span>"
  document.getElementById("top-driver-img").src = topDriver.image

  document.getElementById("top-team-img").src = topTeam.image
  document.getElementById("top-team-color").style.backgroundColor = topTeam.color
}



function voteResults() {
  // Check object has driver. if null, create one
  if (driver[currentNumber] == null) {
    driver[currentNumber] = 1
  } else {
    driver[currentNumber] += 1
  }

  // Check object has team. if null, create one
  if (team[currentTeam] == null) {
    team[currentTeam] = 1
  } else {
    team[currentTeam] += 1
  }

  localStorage.setItem('driver', JSON.stringify(driver))
  localStorage.setItem('team', JSON.stringify(team))

  showResults()
}

if (driver != {} && team != {}) {
  showResults()
}