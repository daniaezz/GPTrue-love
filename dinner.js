var vv = 0;

for (let i =0; i<3; i++){
  rand_con = Math.floor(Math.random()*20);
  hehe = starters_obj['v'+rand_con][0];
  for (let j = 0; j<hehe.length; j++){
    console.log(hehe[j]);
    $('.v'+vv).append(hehe[j]+" ")
  }
  console.log(hehe);

  vv++;
}

var ww = 0;

for (let i =0; i<3; i++){
  rand_con = Math.floor(Math.random()*20);
  hehe = mains_obj['w'+rand_con][0];
  console.log(hehe);
  for (let j = 0; j<hehe.length; j++){
    console.log(hehe[j]);
    $('.w'+ww).append(hehe[j]+" ")
  }
  ww++;
}

var xx = 0;

for (let i =0; i<3; i++){
  rand_con = Math.floor(Math.random()*20);
  hehe = desserts_obj['x'+rand_con][0];
  console.log(hehe);
  for (let j = 0; j<hehe.length; j++){
    console.log(hehe[j]);
    $('.x'+xx).append(hehe[j]+" ")
  }
  // $('.x'+xx).append(hehe)
  xx++;
}
