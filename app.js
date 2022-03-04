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
  // console.log(index);
  // console.log(con_obj['s'+index][1]);
  element.value = con_obj['s'+index][1];

  score = Math.floor(element.value);
    sessionStorage.setItem('score', element.value);
  console.log(score);
}

document.getElementById('button2').addEventListener("click",()=>{
  // console.log('ww');
  if (clickable == 1 ){
    $('.scoreText').append(score);
    $('#everything1').css('display', 'none');
    $('#everything2').css('visibility', 'visible');
    $('.brogress').css('width', score+'%');
    // $('.brogress').css('animation-name', 'brogress');
  }

});

document.getElementById('button3').addEventListener("click",()=>{
  // console.log('ww');
    $('#everything2').css('display', 'none');
    $('#everything3').css('visibility', 'visible');
    // $('.brogress').css('width', score+'%');
    // $('.brogress').css('animation-name', 'brogress');


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
  // console.log(index);
  // console.log(con_obj['s'+index][1]);
  element.value = comp_obj['t'+index][1];

  scoreComp = Math.floor(element.value);
    sessionStorage.setItem('score', element.value);
  console.log(scoreComp);
}


document.getElementById('button4').addEventListener("click",()=>{
  // console.log('ww');
  if (clickablet == 1 ){
    scoreFinal = parseInt(score)+parseInt(scoreComp);
    $('#everything3').css('display', 'none');
    $('#everything4').css('visibility', 'visible');
    $('.brogress').css('width', scoreFinal+'%');
    // $('.brogress').css('animation-name', 'brogress');
    $('.scoreText1').append(scoreFinal);

  }

});

document.getElementById('button5').addEventListener("click",()=>{
  // console.log('ww');
    $('#everything4').css('display', 'none');
    $('#everything5').css('visibility', 'visible');
    // $('.brogress').css('width', score+'%');
    // $('.brogress').css('animation-name', 'brogress');


});

let uu = 0;
for (let i = 0; i<3; i++){
  rand_con = Math.floor(Math.random()*20);
  hehe = poem_obj[rand_con];
  console.log(hehe);
  $('.u'+uu).append(hehe)
  uu++;
}
