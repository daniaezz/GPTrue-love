var ss = 0;

for (let i =0; i<5; i++){
  rand_con = Math.floor(Math.random()*20);
  hehe = con_obj['s'+rand_con][0];
  console.log(hehe);
  $('.s'+ss).append(hehe)
  ss++;
}

console.log(rand_con);

cc=0;
let index;
let score = 0;
let text;
let clickable = 0;

function clicked(element){
  clickable =1;
  index = element.id[6]
  console.log(con_obj['s'+index][1]);
  element.value = con_obj['s'+index][1];
  score = Math.floor(element.value);
    sessionStorage.setItem('score', element.value);
  console.log(score);
}

document.getElementById('button2').addEventListener("click",()=>{
  if (clickable == 1 ){
    $('.scoreText').append(score);
    $('#everything1').css('display', 'none');
    $('#everything2').css('visibility', 'visible');
    $('.brogress').css('width', score+'%');
  }

});

document.getElementById('button3').addEventListener("click",()=>{
    $('#everything2').css('display', 'none');
    $('#everything3').css('visibility', 'visible');
});

let tt=0;

for (let i =0; i<8; i++){
  rand_con = Math.floor(Math.random()*20);
  hehe = comp_obj['t'+rand_con][0];
  console.log(hehe);
  $('.t'+tt).append(hehe)
  tt++;
}

clickablet =0;

let scoreComp =0
let scoreFinal;
function clicket(element){
  clickablet =1;
  index = element.id[7]
  element.value = comp_obj['t'+index][1];
  scoreComp = Math.floor(element.value);
    sessionStorage.setItem('score', element.value);
  console.log(scoreComp);
}


document.getElementById('button4').addEventListener("click",()=>{
  if (clickablet == 1 ){
    scoreFinal = parseInt(score)+parseInt(scoreComp);
    $('#everything3').css('display', 'none');
    $('#everything4').css('visibility', 'visible');
    $('.brogress').css('width', scoreFinal+'%');
    $('.scoreText1').append(scoreFinal);
  }
});

document.getElementById('button5').addEventListener("click",()=>{
    $('#everything4').css('display', 'none');
    $('#everything5').css('visibility', 'visible')
});

let uu = 0;
for (let i = 0; i<3; i++){
  rand_con = Math.floor(Math.random()*20);
  hehe = poem_obj[rand_con];
  console.log(hehe);
  $('.u'+uu).append(hehe)
  uu++;
}

function randomInt(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let scorePoem = 0;

document.getElementById('button6').addEventListener("click",()=>{
  // if (clickablet == 1 ){
  scorePoem = randomInt(10, 20);
  console.log(scorePoem);
    scoreFinal += parseInt(Math.floor(scorePoem));
    $('#everything5').css('display', 'none');
    $('#everything6').css('visibility', 'visible');
    $('.brogress').css('width', scoreFinal+'%');
    $('.scoreText2').append(scoreFinal);
  // }
});
