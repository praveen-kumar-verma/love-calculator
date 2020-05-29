var isNotClicked=true;

var loveCalculator=function () {
  var yourName = document.getElementById("firstname").value;
  var loversName = document.getElementById("lovername").value;
  var loveScore = Math.random() * 100;
  var loveFinal = Math.round(loveScore);

  if (yourName === "") {
    alert("Please enter your name");
  }
    else if (loversName === "") {
      alert("Please enter your partner name");
  }
    else if (isNotClicked) {
      document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + " your lovescore is " + loveFinal + " % ";
      document.getElementById("lovefinal").style.color="red";

  }
};

function resetFunction() {
  location.reload();
}
