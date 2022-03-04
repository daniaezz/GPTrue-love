var ss = 0;
let sValues = []
for (let i =0; i<5; i++){
  rand_con = Math.floor(Math.random()*20);
  hehe = con_obj['s'+rand_con][0];
  // console.log(hehe);
  $('.s'+ss).append(hehe);
  ss++;
  sValues.push(con_obj['s'+rand_con][1])
  // console.log(sValues);
}

// console.log(rand_con);

cc=0;
let index;
let score = 0;
let text;
let clickable = 0;

function clicked(element){
  clickable =1;
  index = element.id[6]
  // console.log(con_obj['s'+index][1]);
  element.value = sValues[index];
  score = Math.floor(element.value);
    sessionStorage.setItem('score', element.value);
  // console.log(score);
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
let tValues = [];

for (let i =0; i<8; i++){
  rand_con = Math.floor(Math.random()*20);
  hehe = comp_obj['t'+rand_con][0];
  // console.log(hehe);
  $('.t'+tt).append(hehe);
  tt++;
  tValues.push(comp_obj['t'+rand_con][1]);
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
  // console.log(scoreComp);
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
  // console.log(hehe);
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
  // console.log(scorePoem);
    scoreFinal += parseInt(Math.floor(scorePoem));
    $('#everything5').css('display', 'none');
    $('#everything6').css('visibility', 'visible');
    $('.brogress').css('width', scoreFinal+'%');
    $('.scoreText2').append(scoreFinal);
  // }
});

document.getElementById('button7').addEventListener("click",()=>{
    $('#everything6').css('display', 'none');
    $('#everything8').css('display', 'grid');
});

var vv = 0;
let vIng = [];
let vDir = [];

for (let i =0; i<3; i++){
  rand_con = Math.floor(Math.random()*20);
  hehe = starters_obj['v'+rand_con][0];
  for (let j = 0; j<hehe.length; j++){
    // console.log(hehe[j]);
    $('.v'+vv).append(hehe[j]+" ");
    // console.log(starters_obj['v'+rand_con][1]);
  }
  // console.log(hehe);
  vIng.push(starters_obj['v'+rand_con][1]);
  vDir.push(starters_obj['v'+rand_con][2]);
  // vDir.push()
  vv++;
}
// console.log(vDir);



var ww = 0;
let wIng = [];
let wDir = [];

for (let i =0; i<3; i++){
  rand_con = Math.floor(Math.random()*20);
  hehe = mains_obj['w'+rand_con][0];
  // console.log(hehe);
  for (let j = 0; j<hehe.length; j++){
    // console.log(hehe[j]);
    $('.w'+ww).append(hehe[j]+" ")
  }
  wIng.push(main_obj['w'+rand_con][1]);
  wDir.push(main_obj['w'+rand_con][2]);
  ww++;
}

var xx = 0;
let xIng = [];
let xDir = [];

for (let i =0; i<3; i++){
  rand_con = Math.floor(Math.random()*20);
  hehe = desserts_obj['x'+rand_con][0];
  // console.log(hehe);
  for (let j = 0; j<hehe.length; j++){
    // console.log(hehe[j]);
    $('.x'+xx).append(hehe[j]+" ")
  }
  xIng.push(main_obj['x'+rand_con][1]);
  xDir.push(main_obj['x'+rand_con][2]);
  // $('.x'+xx).append(hehe)
  xx++;
}

// let scorePoem = 0;

document.getElementById('button8').addEventListener("click",()=>{
  // if (clickablet == 1 ){
  scorePoem = randomInt(10, 20);
  // console.log(scorePoem);
    scoreFinal += parseInt(Math.floor(scorePoem));
    $('#everything8').css('display', 'none');
    $('#everything9').css('display', 'grid');
    $('.brogress').css('width', scoreFinal+'%');
    $('.scoreText3').append(scoreFinal);
  // }
});
