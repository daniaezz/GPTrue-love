let ss = 0;
let sValues = [];

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


function clicked(element){
  clickable =1;
  index = element.id[6];
  // console.log(con_obj['s'+index][1]);
  element.value = sValues[index];
  score = Math.floor(element.value)+5;
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

let scoreComp =5;
let scoreFinal;
function clicket(element){
  clickablet =1;
  index = element.id[7];
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

let scorePoem = 5;

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

let vv = 0;
let vIng = [];
let vDir = [];
let vTitles = [];

for (let i =0; i<3; i++){
  rand_con = Math.floor(Math.random()*25);
  hehe = starters_obj['v'+rand_con][0];
  vTitles.push(hehe);
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



let ww = 0;
let wIng = [];
let wDir = [];
let wTitles= [];

for (let i =0; i<3; i++){
  rand_con = Math.floor(Math.random()*20);
  hehe = mains_obj['w'+rand_con][0];
  wTitles.push(hehe);
  // console.log(hehe);
  for (let j = 0; j<hehe.length; j++){
    // console.log(hehe[j]);
    $('.w'+ww).append(hehe[j]+" ")
  }
  wIng.push(mains_obj['w'+rand_con][1]);
  wDir.push(mains_obj['w'+rand_con][2]);
  ww++;
}

let xx = 0;
let xIng = [];
let xDir = [];
let xTitles = [];

for (let i =0; i<3; i++){
  rand_con = Math.floor(Math.random()*25);
  hehe = desserts_obj['x'+rand_con][0];
  xTitles.push(hehe);
  // console.log(hehe);
  for (let j = 0; j<hehe.length; j++){
    // console.log(hehe[j]);
    $('.x'+xx).append(hehe[j]+" ")
  }
  xIng.push(desserts_obj['x'+rand_con][1]);
  xDir.push(desserts_obj['x'+rand_con][2]);
  // $('.x'+xx).append(hehe)
  xx++;
}

let dinner_click = 0;
let vclick = 0;
let wclick = 0;
let xclick = 0;

let final_starterIng;
let final_starterDir;
let final_starterTitle;
let final_mainIng;
let final_mainDir;
let final_mainTitle;
let final_dessertIng;
let final_dessertDir;
let final_dessertTitle;

function clickev(element){
  vclick =1;
  index = element.id[7]
   final_starterIng = vIng[index];
   final_starterDir = vDir[index];
   final_starterTitle = vTitles[index];
   console.log(final_starterTitle);

}

function clickew(element){
  wclick =1;
  index = element.id[7]
   final_mainIng = wIng[index];
   final_mainDir = wDir[index];
   final_mainTitle = wTitles[index];
}

function clickex(element){
  xclick =1;
  index = element.id[7]
  final_dessertIng = xIng[index];
  final_dessertDir = xDir[index];
  final_dessertTitle = xTitles[index];
}

let scoreDinner
document.getElementById('button8').addEventListener("click",()=>{
  dinner_click = xclick+wclick+vclick;
  if (dinner_click == 3 ){
    scoreDinner = randomInt(15, 25);
  // console.log(scorePoem);
    scoreFinal += scoreDinner;
    $('#everything8').css('display', 'none');
    $('#everything9').css('display', 'grid');
    $('.brogress').css('width', scoreFinal+'%');
    $('.scoreText3').append(scoreFinal);
    for (let i =0; i<final_starterTitle.length; i++){
      $('.s').append(final_starterTitle[i]+" ");
    }
    for (let i =0; i<final_mainTitle.length; i++){
      $('.m').append(final_mainTitle[i]+" ");
    }
    for (let i =0; i<final_dessertTitle.length; i++){
      $('.d').append(final_dessertTitle[i]+" ");
    }

    for (let i =0; i<final_starterIng.length; i++){
      $('.sIng').append('<li>'+final_starterIng[i]+'</li>');
    }

    for (let i =0; i<final_mainIng.length; i++){
      $('.mIng').append('<li>'+final_mainIng[i]+'</li>');
    }

    for (let i =0; i<final_dessertIng.length; i++){
      $('.dIng').append('<li>'+final_dessertIng[i]+'</li>');
    }

    for (let i =0; i<final_starterDir.length; i++){
      $('.sDir').append(final_starterDir[i]+'<br>');
    }

    for (let i =0; i<final_mainDir.length; i++){
      $('.mDir').append(final_mainDir[i]+'<br>');
    }

    for (let i =0; i<final_dessertDir.length; i++){
      $('.dDir').append(final_dessertDir[i]+'<br>');
    }
  }
});

document.getElementById('button9').addEventListener("click",()=>{
    $('#everything9').css('display', 'none');
    $('#everything10').css('display', 'grid');
});

let scoreHoro = 0;
let horoClick = 0;
let final_horo;

function clickHoro(element){
  horoClick = 1;
}

document.getElementById('button10').addEventListener("click",()=>{
  console.log('button10');
  if (horoClick==1){
    console.log('if');
    scoreHoro = randomInt(10, 20);
    scoreFinal += scoreHoro;
    console.log(horo_obj.length);
    index = Math.floor((Math.random()*horo_obj.length)+1);
    final_horo = horo_obj[index];
    console.log(final_horo);
    $('.final_horo').append(final_horo);
    $('#everything10').css('display', 'none');
    $('#everything11').css('display', 'grid');
    $('.brogress').css('width', scoreFinal+'%');
    $('.scoreText4').append(scoreFinal);
  }
});

proposals.splice(Math.random()*proposals.length, 0, 'WILL YOU MARRY ME');

console.log(proposals);

document.getElementById('button11').addEventListener("click",()=>{
    $('#everything11').css('display', 'none');
    $('#everything12').css('display', 'grid');

    for (let i =0; i<proposals.length; i++){
      $('.proposal'+i).append(proposals[i]);
    }
});

let propNext = 0;

function clickProp(element){
  if (element.id[7] == proposals.indexOf('WILL YOU MARRY ME', 0)){
    propNext =1;
  }
  else{
    propNext =0;
  }
}


function hoverProp(element){
  console.log(element.class);
  if (element.id[8] != proposals.indexOf('WILL YOU MARRY ME', 0)){
    element.innerHTML = 'NOT THIS ONE!';
  }
}

function outProp(element){
  element.innerHTML = proposals[element.id[8]];
}

document.getElementById('button12').addEventListener("click",()=>{
  if (propNext ==1){
    $('#everything12').css('display', 'none');

    if (scoreFinal>=75){
      $('#everything13').css('display', 'grid');
      $('.brogress').css('width', '100%');
    }
    else{
      $('#everything14').css('display', 'grid');
    }
  }

});
