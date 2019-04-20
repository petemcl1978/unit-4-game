var yourScore = document.getElementById('yourScore');
//var yourScore = getElementById(red,blue,purple,green.onclick(math.sum));
yourScore.innerHTML = 0; //
var targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue(10, 4);

function addToScore(val) {
    var numberToAdd = parseInt(val);
    var currentScore = paresInt(yourScore.innerHTML);
    yourScore.innerHTML =numberToAdd + currentScore;

}

var red = document.getElementById("red");
//red.setAttribute("value", "5");
//console.log(red.value);

var blue = document.getElementById("blue");
//console.log(blue.value);

var green = document.getElementById("green");
//console.log(red.value);

var purple = document.getElementById("purple");
//console.log(purple.value)

// add an event listener to elements
red.addEventListener('click',function(){
    //this refers to red
    addToScore(this.value);
    checkPlayerScore();
});
//parseInt (42.01) => 42
//alert(parseInt('james'));//NaN (not a number)
//cafe Del Mar ChillWave 2 :)
//.innerHTML returns a string, NaN

blue.addEventListener('click', function(){
    //this refers to blue
    addToScore(this.value);
    checkPlayerScore();
})

green.addEventListener('click', function(){
    //this refers to green
    addToScore(this.value);
    checkPlayerScore();
})

purple.addEventListener('click', function(){
    //this refuers to purple
    addToScore(this.value);
    checkPlayerScore();
})

//var sum = parseInt(red.value) + parseInt(blue.value) + ParseInt(purple.value) + ParseInt(green.value);

//console.log (sum);
function getRandomValue (a,b){
    return Math.floor((Math.random() *a) + b);
}
function checkPlayerScore() {
    //yourScore, targetScore (parseFloat() is for decimals)
    var playerInt = parseInt(yourScore.innerHTML);
    var targetInt = parseInt(targetScore.innerHTML);
    if (playerInt === targetInt) {
        alert('You win!');
    } else if (playerInt > targetInt) {
      alert('You lose!');
    } 
  }
  
  console.log(getRandomValue(10, 4));


 


