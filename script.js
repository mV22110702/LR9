const scoreTable = document.getElementsByClassName("scoreBoard")[0];


document.getElementById("userName1").innerText = prompt("Enter player 1 name:");
document.getElementById("userName2").innerText = prompt("Enter player 2 name:");

scoreTable.style.setProperty("display","none");
document.getElementById("hideRecords").style.setProperty("display","none");


document.getElementById("generator").addEventListener("mouseover",function (event){
  if(window.getComputedStyle(event.target, null).backgroundColor != "rgb(14, 227, 2)"){
  event.target.style.setProperty("transition-duration","100ms");
  event.target.style.setProperty("transition-timing-function","ease-in");
  event.target.style.setProperty("background-color","white");
  }
});
document.getElementById("restart").addEventListener("mouseover",function (event){
  event.target.style.setProperty("transition-duration","100ms");
  event.target.style.setProperty("transition-timing-function","ease-in");
  event.target.style.setProperty("background-color","white");
  
});
document.getElementById("generator").addEventListener("mouseout",function (event){
  event.target.removeAttribute("style");
  event.target.style.backgroundColor = "rgb(14, 227, 2)";
});
document.getElementById("restart").addEventListener("mouseout",function (event){
  event.target.removeAttribute("style");
});

document.getElementById("showRecords").addEventListener("click",function (){
  document.getElementById("gameInterface").style.setProperty("display","none");
  scoreTable.style.removeProperty("display");
  document.getElementById("hideRecords").style.removeProperty("display");
});

document.getElementById("hideRecords").addEventListener("click",function (){
  document.getElementById("gameInterface").style.removeProperty("display");
  scoreTable.style.setProperty("display","none");
  document.getElementById("hideRecords").style.setProperty("display","none");
});

document.getElementById("showRecords").addEventListener("mouseover",function (event){
  event.target.style.setProperty("transition-duration","100ms");
  event.target.style.setProperty("transition-timing-function","ease-in");
  event.target.style.setProperty("background-color","white");
  
});
document.getElementById("hideRecords").addEventListener("mouseover",function (event){
  event.target.style.setProperty("transition-duration","100ms");
  event.target.style.setProperty("transition-timing-function","ease-in");
  event.target.style.setProperty("background-color","white");
  
});
document.getElementById("showRecords").addEventListener("mouseout",function (event){
  event.target.removeAttribute("style");
});
document.getElementById("hideRecords").addEventListener("mouseout",function (event){
  event.target.style.removeProperty("background-color");
});

const userNumElement1 = document.getElementById("userNumber1");
const userNumElement2 = document.getElementById("userNumber2");

const userScoreElement1 = document.getElementById("userScore1");
const userScoreElement2 = document.getElementById("userScore2");

const cards=[
  {"dir":`url('6_of_clubs.png')`,"weight":6},
  {"dir":`url('6_of_diamonds.png')`,"weight":6},
  {"dir":`url('6_of_hearts.png')`,"weight":6},
  {"dir":`url('6_of_spades.png')`,"weight":6},

  {"dir":`url('7_of_clubs.png')`,"weight":7},
  {"dir":`url('7_of_diamonds.png')`,"weight":7},
  {"dir":`url('7_of_hearts.png')`,"weight":7},
  {"dir":`url('7_of_spades.png')`,"weight":7},

  {"dir":`url('8_of_clubs.png')`,"weight":8},
  {"dir":`url('8_of_diamonds.png')`,"weight":8},
  {"dir":`url('8_of_hearts.png')`,"weight":8},
  {"dir":`url('8_of_spades.png')`,"weight":8},

  {"dir":`url('9_of_clubs.png')`,"weight":9},
  {"dir":`url('9_of_diamonds.png')`,"weight":9},
  {"dir":`url('9_of_hearts.png')`,"weight":9},
  {"dir":`url('9_of_spades.png')`,"weight":9},

  {"dir":`url('10_of_clubs.png')`,"weight":10},
  {"dir":`url('10_of_diamonds.png')`,"weight":10},
  {"dir":`url('10_of_hearts.png')`,"weight":10},
  {"dir":`url('10_of_spades.png')`,"weight":10},

  {"dir":`url('jack_of_clubs2.png')`,"weight":2},
  {"dir":`url('jack_of_diamonds2.png')`,"weight":2},
  {"dir":`url('jack_of_hearts2.png')`,"weight":2},
  {"dir":`url('jack_of_spades2.png')`,"weight":2},

  {"dir":`url('queen_of_clubs2.png')`,"weight":3},
  {"dir":`url('queen_of_diamonds2.png')`,"weight":3},
  {"dir":`url('queen_of_hearts2.png')`,"weight":3},
  {"dir":`url('queen_of_spades2.png')`,"weight":3},

  {"dir":`url('king_of_clubs2.png')`,"weight":4},
  {"dir":`url('king_of_diamonds2.png')`,"weight":4},
  {"dir":`url('king_of_hearts2.png')`,"weight":4},
  {"dir":`url('king_of_spades2.png')`,"weight":4},

  {"dir":`url('ace_of_clubs.png')`,"weight":11},
  {"dir":`url('ace_of_diamonds.png')`,"weight":11},
  {"dir":`url('ace_of_hearts.png')`,"weight":11},
  {"dir":`url('ace_of_spades2.png')`,"weight":11},
];

document.getElementById("generator").addEventListener("click", genRandom);
document.getElementById("restart").addEventListener("click",() => {
  userScoreElement1.innerText=0;
  userScoreElement2.innerText=0;
  userNumElement1.style.removeProperty("background-image");
  userNumElement2.style.removeProperty("background-image");
  scoreTable.children[0].replaceChildren('');
  scoreTable.children[1].replaceChildren('');
  numOfGames=0;
  document.getElementById("userScore1").classList.remove("winner");
  document.getElementById("userScore2").classList.remove("winner");
  document.getElementById("userScore1").classList.remove("loser");
  document.getElementById("userScore2").classList.remove("loser");
  document.getElementById("generator").removeAttribute("disabled");
  document.getElementById("generator").style.setProperty("backgroundColor","rgb(14, 227, 2)");
});

function genRandom(){
  var keepGenerating = true;
  var rand1, rand2;
  while(keepGenerating){
  rand1 = parseInt(Math.random()*cards.length);
  rand2 = parseInt(Math.random()*cards.length);
  if (rand1 != rand2) keepGenerating=false;
  }
  
  setNumbers(rand1,rand2);
  incrementWinner(rand1,rand2);
  writeResults(rand1,rand2);
  

}



  function writeResults(Rand1,Rand2){
  var interResults = document.createElement("tr");
  
  var p1Results = document.createElement("td");
  p1Results.innerText= cards[Rand1].weight;
  var p2Results = document.createElement("td");
  p2Results.innerText= cards[Rand2].weight;
  
  var roundResults = document.createElement("td");
  roundResults.innerText= (cards[Rand1].weight > cards[Rand2].weight) ? document.getElementById("userName1").innerText : document.getElementById("userName2").innerText ;
  
  interResults.append(p1Results,p2Results,roundResults);
scoreTable.children[0].innerHTML = `<th>${document.getElementById("userName1").innerText}</th><th>${document.getElementById("userName2").innerText}</th><th>Winner</th>`;
scoreTable.children[1].appendChild(interResults);
}

var numOfGames=0;
function incrementWinner(Rand1,Rand2){
  numOfGames++;
    userScoreElement1.innerText = parseInt(userScoreElement1.innerText) + cards[Rand1].weight;
    
    userScoreElement2.innerText = parseInt(userScoreElement2.innerText) + cards[Rand2].weight;
    
  if (numOfGames == 3 ){
   if (parseInt(userScoreElement1.innerText)>parseInt(userScoreElement2.innerText)){
        alert(`Player ${document.getElementById("userName1").innerText} won! Congratulations!`);
        document.getElementById("userScore1").classList.toggle("winner");
        document.getElementById("userScore2").classList.toggle("loser");
        document.getElementById("generator").toggleAttribute("disabled");
   }
   else{
    alert(`Player ${document.getElementById("userName2").innerText} won! Congratulations!`);
    document.getElementById("userScore2").classList.toggle("winner");
    document.getElementById("userScore1").classList.toggle("loser");
    document.getElementById("generator").toggleAttribute("disabled");
   }
  }
}

function setNumbers(Rand1,Rand2){
  userNumElement1.style.setProperty("background-image",cards[Rand1].dir);
  userNumElement2.style.setProperty("background-image",cards[Rand2].dir);
}


