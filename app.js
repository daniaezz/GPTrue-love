// import Math
con_obj = {"s0": ["Dear GPTessa, I have to confess that I like you. You are a person who I hold grudges for the rest of my life. Despite this, however, I have been able to work amiss frictions between us without him being there at all. I won't mind if he drags me off to work.", 15.0], "s1": ["Dear GPTessa, I have to confess that I like you. You are the person I hang out with the most and webrew together. I initially thought you were just too good for me, but then life took us different ways. I realize now how much you mean to me.", 11.8125], "s2": ["Dear GPTessa, I have to confess that I like you. You are both realistic and kind man. You are both optimistic and optimistic hag. You are kind and compassionate. The only difference is the way you dress. I have to stop trusting you and stop trusting myself completely. The only difference is the way you dress.", 12.444444444444445], "s3": ["Dear GPTessa, I have to confess that I like you. You are caring, witty, and are genuinely kind man. Your face and voice are so blue, and the ones that say \"I love you\" but don't seem to mind. I feel like I'm being a p--- joke.", 14.0], "s4": ["Dear GPTessa, I have to confess that I like you. You are the person I adored after, and ive never regretted it. I feel good about myself. However, I feel like i'm in the middle of the \"normal\" relationship drama between two friends.", 12.833333333333332], "s5": ["Dear GPTessa, I have to confess that I like you. You are the person i'm talking to the most when i'm feeling down. And though i'm being totally ridiculous, I want you I need it. You are the person i'm talking to when you go.", 10.037037037037036], "s6": ["Dear GPTessa, I have to confess that I like you. You are genuine, caring, and kind man. You are both honest and also kind man. I love you.", 15.4], "s7": ["Dear GPTessa, I have to confess that I like you. You are the person I keep in my heart for the first time, feeling the same. I don't know if it is jealousy or just the two of us out laughing. But I feel like I am on the right track. The two of us apart, that's what I feel.", 11.785714285714286], "s8": ["Dear GPTessa, I have to confess that I like you. You are a person who I hold grudges for the life of me and who at times, even threatens my life. At times, I even kill ourselves from the get go. This is the only comfort I can get from the knowledge that you are a person who I will never be.", 10.0], "s9": ["Dear GPTessa, I have to confess that I like you. You are genuine, caring, and kind man. You are both honest and caring. You also laugh it off and say whatever you want, even if I still don't understand why you think I like you so much. This is why I can't tell you how much I like you.", 13.833333333333334], "s10": ["Dear GPTessa, I have to confess that I like you. You are the person that everyone around me feels welcome in and I wanted nothing more than to be happy. However, upon receiving your message, I was completely speechless. I could not move my body during the moment. I could barely speak without making eye contact.", 14.5], "s11": ["Dear GPTessa, I have to confess that I like you. You are intelligent, witty, geeky, and are genuinely kind man. You are handsome as well, you are eyes a beautiful shade of hazel, and god your facial hair. I love you.", 15.357142857142858], "s12": ["Dear GPTessa, I have to confess that I like you. You are someone that I hold in my heart and whose day-to-day needs I take care of myself. While in the hospital, you kept me from getting married and instead I was left without a husband and without a family. For the first time, I felt close to a person.", 11.666666666666666], "s13": ["Dear GPTessa, I have to confess that I like you. You are the person who keeps me up at night, and when I say I don't have time to myself, you immediately pull me away. I eye you and say \"no\" all the time. I have to stop trusting you and let me know who you are.", 10.0], "s14": ["Dear GPTessa, I have to confess that I like you. You are a person who I hold grudges towards, but at the same time, I want to protect you. I don't you know it yet but I already do. I want to protect you from anyone who might think I am crazy. I even want to let you down.", 7.481481481481482], "s15": ["Dear GPTessa, I have to confess that I like you. You are respectful, kind, and don't judge. You don't judge me and when I say don't, you say I am too late. I \u00adm sorry for \u00adstirring up the worst \u00addreams \u00adsince \u00adFalling In Love.", 9.666666666666666], "s16": ["Dear GPTessa, I have to confess that I like you. You are both realistic and kind man. You are both honest and kind man. I find it very hard to believe that I have loved you but for some reason I kept adding up. The more I changed something in my life the more I hated it. I wanted to fix it before you left.", 12.3875], "s17": ["Dear GPTessa, I have to confess that I like you. You are the person I adored after, you were the person I cried o the shower almost nothing happened because of you. You were intelligent, witty, geeky, and were always willing to help me.", 15.166666666666668], "s18": ["Dear GPTessa, I have to confess that I like you. You are the person i'm closest to heart, and in some ways, am I. i'm happy for you, but most days when I see how you feel, I feel a physical and mental pain that words will never be able to describe.", 13.399999999999999], "s19": ["Dear GPTessa, I have to confess that I like you. You are the person I hang out with the least, because that's what I'm good at. I don't know if it's your intention or if I just want to avoid it, but once again, you keep me on the phone.", 12.0]}

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
    $('.scoreText').append(score);
  console.log(score);
}

document.getElementById('button2').addEventListener("click",()=>{
  console.log('ww');
  if (clickable == 1 ){
    $('#everything1').css('display', 'none');
    $('#everything2').css('visibility', 'visible');
    $('.brogress').css('width', score+'%');
    // $('.brogress').css('animation-name', 'brogress');
  }

});
