var vv = 0;

for (let i =0; i<3; i++){
  rand_con = Math.floor(Math.random()*20);
  hehe = starters_obj['v'+rand_con][0];
  console.log(hehe);
  $('.v'+vv).append(hehe)
  vv++;
}

var ww = 0;

for (let i =0; i<3; i++){
  rand_con = Math.floor(Math.random()*20);
  hehe = mains_obj['w'+rand_con][0];
  console.log(hehe);
  $('.w'+ww).append(hehe)
  ww++;
}

var xx = 0;

for (let i =0; i<3; i++){
  rand_con = Math.floor(Math.random()*20);
  hehe = desserts_obj['x'+rand_con][0];
  console.log(hehe);
  $('.x'+xx).append(hehe)
  xx++;
}
