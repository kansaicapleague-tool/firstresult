function checkClick(){
    firstTeamname.textContent = firstTeam.value;
    secondTeamname.textContent = secondTeam.value;
    firstGameFirstPoint.textContent = firstGameFirst.value;
    firstGameSecondPoint.textContent = firstGameSecond.value;
    secondGameFirstPoint.textContent = secondGameFirst.value;
    secondGameSecondPoint.textContent = secondGameSecond.value;

    switch(firstTeam.value){
        case "龍谷A":
            firstImageName = "RuCBC.jpg";
            break;
        case "京大A":
            firstImageName = "KUCtC.jpg";
            break;  
        case "京大B":
            firstImageName = "KUCtC.jpg";
            break;
        case "大阪大学":
            firstImageName = "ouctc.jpg";
            break;
        case "大阪公立大学":
            firstImageName = "COMUC.jpg";
            break;
        case "賀茂別雷":
            firstImageName = "kamo.jpg";
            break;
        default:
            break;        
    }
    switch(secondTeam.value){
        case "龍谷A":
            secondImageName = "RuCBC.jpg";
            break;
        case "京大A":
            secondImageName = "KUCtC.jpg";
            break;  
        case "京大B":
            secondImageName = "KUCtC.jpg";
            break;
        case "大阪大学":
            secondImageName = "ouctc.jpg";
            break;
        case "大阪公立大学":
            secondImageName = "COMUC.jpg";
            break;
        case "賀茂別雷":
            secondImageName = "kamo.jpg";
            break;
        default:
            break;        
    }
    firstImage.src = firstImageName;
    secondImage.src = secondImageName; 

    html2canvas(document.getElementById("target")).then(canvas => {
        document.body.appendChild(canvas)
        canvas.id = "canvas"
      });
}

function downloadClick(){
    var canvas = document.getElementById("canvas");
    const name = 'firstresult.png';
    const a = document.createElement('a');

    a.href = canvas.toDataURL();
    a.download = name;
    a.click();
}

var firstImage = document.getElementById("firstImage");
var firstImageName = "RuCBC.jpg";
var secondImage = document.getElementById("secondImage");
var secondImageName = "RuCBC.jpg";

firstImage.src = firstImageName;
secondImage.src = secondImageName;
  
  let firstTeam = document.getElementById('firstTeam');
  let firstTeamname = document.getElementById('firstTeamname');
  let secondTeam = document.getElementById('secondTeam');
  let secondTeamname = document.getElementById('secondTeamname');

  let firstGameFirst = document.getElementById('firstGameFirst');
  let firstGameFirstPoint = document.getElementById('firstGameFirstPoint');
  let firstGameSecond = document.getElementById('firstGameSecond');
  let firstGameSecondPoint = document.getElementById('firstGameSecondPoint');

  let secondGameFirst = document.getElementById('secondGameFirst');
  let secondGameFirstPoint = document.getElementById('secondGameFirstPoint');
  let secondGameSecond = document.getElementById('secondGameSecond');
  let secondGameSecondPoint = document.getElementById('secondGameSecondPoint');
  
  let checkButton = document.getElementById('checkButton');
  checkButton.addEventListener('click', checkClick);
  let downloadButton = document.getElementById('downloadButton');
  downloadButton.addEventListener('click', downloadClick);