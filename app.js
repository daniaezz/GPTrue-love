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

comp_obj = {"t0": ["You deliver jokes so well\u2014I love how you handled that difficult situation.", 10.0], "t1": ["You are so easy to be in my life.", 14.333333333333334], "t2": ["Your way of thinking is so advanced that only you and I can't live a day without you.", 11.787878787878789], "t3": ["How is it that you chose to be a good person by watching how you handled that difficult situation.", 11.0], "t4": ["Any team would be sitting on your shoulders.", 10.0], "t5": ["You\u2019re like sunshine on a happy little vacation.", 13.0625], "t6": ["If you were a box of crayons, you\u2019d be the giant name-brand one with the best solutions in a short amount of time.", 13.333333333333332], "t7": ["I am so happy that I have you on it.", 18.0], "t8": ["I am so glad that you chose to be yourself is what makes you so much.", 13.5], "t9": ["Our system of inside jokes is so much different from other people\u2019s, and it is refreshing.", 11.25], "t10": ["It is always a blast.", 10.0], "t11": ["You're everything that I have you.", 10.0], "t12": ["I appreciate that you\u2019re tactful when I need to hear when I don\u2019t see you For reals!", 10.0], "t13": ["You always know how to be around and you always look great, even in sweatpants?", 18.0], "t14": ["Hanging out with you is like being on a rainy day.", 10.0], "t15": ["You\u2019ve got all the right time is impressive.", 16.428571428571427], "t16": ["Your way of thinking is so advanced that only you and I can't say that enough.", 11.333333333333334], "t17": ["You are so self-assured.", 10.0], "t18": ["I respect you so interesting.", 15.0], "t19": ["I really admired how you patiently listen to me.", 12.0], "t20": ["You are so easy to be around because you always make me laugh.", 13.666666666666668], "t21": ["You have a great listener.", 18.0], "t22": ["How is it that way.", 10.0], "t23": ["Your perspective on life makes me want to spend my entire with you.", 10.0], "t24": ["When you make babies smile.", 13.0], "t25": ["I love how you handled that difficult situation.", 10.0], "t26": ["You're everything that I found you.", 10.0], "t27": ["I am so proud of your authenticity and dedication to your values.", 18.0], "t28": ["Jokes are funnier when you strongly believe in something.", 14.333333333333332], "t29": ["It is always refreshing to be around you makes everything better!", 15.625], "t30": ["Everyone gets knocked down sometimes, but you always make me laugh and look at things from you.", 10.722222222222221], "t31": ["If cartoon bluebirds were real, a bunch of them would be lucky to have you on it.", 12.666666666666666], "t32": ["You\u2019re more fun than a unicorn, because you\u2019re an amazing dancer!", 15.166666666666668], "t33": ["Has anyone ever told you that you always have something interesting to talk to.", 15.0], "t34": ["You always know how to be around you because of your convictions.", 10.0], "t35": ["I learned how to be yourself is what makes you so much.", 12.0], "t36": ["I am not afraid to be in my life.", 13.0], "t37": ["You're everything that I have you on it.", 10.0], "t38": ["I love the way you treasure your loved ones is incredible.", 17.0], "t39": ["I admire your determination when you tell them.", 10.0], "t40": ["I am so glad that you always look great, even in sweatpants?", 16.5], "t41": ["You\u2019re gorgeous \u2014 and say \u2014 exactly what I need to hear hard truths.", 12.194444444444445], "t42": ["Everything would be sitting on your shoulders.", 10.0], "t43": ["I owe you for taking care of me.", 10.0], "t44": ["I wish I knew more people were like you!", 16.25], "t45": ["Your confidence is refreshing, and there is no question as to why you are on the inside than you realize.", 15.0], "t46": ["You have impeccable grammar.", 17.5], "t47": ["When you\u2019re not afraid to be around you makes everything better!", 14.625], "t48": ["And I like your style.", 10.0], "t49": ["I learned how to find that silver lining.", 10.0], "t50": ["Everyone gets knocked down sometimes, but you always make me laugh.", 10.722222222222221], "t51": ["I know I can face my fears.", 10.0], "t52": ["You have the ability to recall random factoids at just the right moves!", 9.285714285714285], "t53": ["Everything would be better if more people like you, you really have the courage of your convictions.", 14.0], "t54": ["You have the ability to make people around you makes everything better!", 16.25], "t55": ["You are the reason I can count on.", 10.0], "t56": ["Everything would be lucky to have you in their lives.", 13.333333333333332], "t57": ["Any team would be lucky to have you in their lives.", 13.333333333333332], "t58": ["I am so happy that I asked for.", 18.0], "t59": ["You\u2019re more fun than a unicorn, because you\u2019re in it.", 14.0], "t60": ["I am blessed to have you beside me.", 10.0], "t61": ["You always come up with the built-in sharpener.", 10.0], "t62": ["Everyone gets knocked down sometimes, but you always have something interesting to talk to.", 11.722222222222221], "t63": ["You always come up with the best in other people.", 14.375], "t64": ["You are the reason I can come to you with any issues that I found you.", 10.0], "t65": ["You're amazing, and I can't live a day without you.", 13.681818181818182], "t66": ["Your ability to make people around you because of your achievements.", 10.0], "t67": ["You have a good head on your shoulders singing right now.", 14.928571428571427], "t68": ["I am so glad that you always get back up and keep going.", 12.5], "t69": ["You\u2019re better than a unicorn, because you\u2019re an 11.", 15.0], "t70": ["I am so glad that you chose to be around because you always have something interesting to talk about.", 15.0], "t71": ["Everyday is just BLAH when I need to hear it.", 8.0], "t72": ["You have the courage of your authenticity and dedication to your values.", 10.0], "t73": ["You always know how to be around and you never forget to use it.", 10.0], "t74": ["Everyone gets knocked down sometimes, but you always look great, even in sweatpants?", 13.222222222222221], "t75": ["You are such a joy to be a good head on your shoulders and you always make me feel valued and respected in our home.", 15.0], "t76": ["Has anyone ever told you that you always make me laugh and look at things from you.", 13.0], "t77": ["You have the ability to make people around you because of you.", 10.0], "t78": ["You make my heart beat like a breath of fresh air.", 13.0], "t79": ["You\u2019re more helpful than you are so self-assured.", 15.0], "t80": ["You are such a joy to be in my life.", 14.0], "t81": ["When you\u2019re not afraid of life\u2019s ups and downs if I have without facing any judgment.", 13.0], "t82": ["You are the reason I can face anything, because I have you.", 10.0], "t83": ["I owe you for being with me.", 10.0], "t84": ["If cartoon bluebirds were real, a bunch of them would be lucky to have married my friend.", 12.61111111111111], "t85": ["I am here just because of your achievements.", 10.0], "t86": ["Your ability to make people around you is always refreshing to be a good person by watching how you patiently listen to me.", 16.0], "t87": ["Your way of thinking is so advanced that only you and I know I can face anything, because I have you.", 12.0], "t88": ["Everything would be lucky to have married my friend.", 12.916666666666666], "t89": ["I appreciate that you\u2019re tactful when I need to hear when I need to hear hard truths.", 7.083333333333333], "t90": ["I am blessed to have you on it.", 10.0], "t91": ["You are a loyal friend and I can't live a day without you.", 12.348484848484848], "t92": ["Any team would be better if more people like you, you really have the courage of your convictions.", 14.0], "t93": ["Everyday is just BLAH when I need to hear hard truths.", 7.541666666666666], "t94": ["You can always find the right time is impressive.", 16.428571428571427], "t95": ["I hadn\u2019t thought of it that you always have something interesting to talk to.", 15.0], "t96": ["You\u2019re more fun than a triple-scoop ice cream cone.", 14.0], "t97": ["Has anyone ever told you that you always make me laugh and look at things from a different perspective.", 11.5], "t98": ["You are the reason I can come to you with any issues that I asked for.", 10.0], "t99": ["You are such a joy to be a good head on your shoulders.", 15.0], "t100": ["Your ability to make people around you makes everything better!", 16.25], "t101": ["You are so easy to be a good head on your shoulders.", 15.666666666666666], "t102": ["Your confidence is refreshing, and there is no question as to why you are so easy to be around and you always have something interesting to talk to.", 14.777777777777779], "t103": ["It is always refreshing to be a good head on your shoulders.", 16.0], "t104": ["Colors seem brighter when you\u2019re most incredible.", 17.0], "t105": ["You\u2019re more helpful than you are on the outside.", 12.5], "t106": ["You\u2019re like a drum.", 10.0], "t107": ["The people you love are lucky to have married my friend.", 13.61111111111111], "t108": ["I am not afraid to be yourself is what makes you so interesting.", 14.0], "t109": ["You\u2019re the coolest person I can face anything, because I have you.", 10.0], "t110": ["I hadn\u2019t thought of it that you chose to be around because you always have something interesting to talk to.", 15.0], "t111": ["Everyone gets knocked down sometimes, but you always make me feel loved.", 12.722222222222221], "t112": ["If cartoon bluebirds were real, a bunch of them would be lucky to have you in their lives.", 12.666666666666666], "t113": ["I am here just because of your authenticity and dedication to your values.", 10.0], "t114": ["You have a good person by watching how you patiently listen to me.", 17.0], "t115": ["I appreciate that you\u2019re tactful when I don\u2019t see you For reals!", 10.0], "t116": ["I am not afraid to be a good head on your shoulders.", 15.0], "t117": ["When you\u2019re not afraid of life\u2019s ups and downs if I have you in their lives.", 13.0], "t118": ["You\u2019re the coolest person I can come to you with any issues that I asked for.", 10.0], "t119": ["Being around you because of you.", 10.0]}

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

poem_obj = poems = [```GPTessa, I love you.
    You are such, and I such,
    That you and I should one.

We lay on our knees before the Violets,
Sitting on the basilar of the broad valley
Bloodied, and in a stalactite
Pale, pale, and full of doubt.
Could this be the tomb of my love?```, ```GPTessa, I love you.
    But I fear your love will grow stronger,
    If only I could marry you,
    If you were as red as I thought you were.

The road splits along the dark blue skylight
Over the sunken bridge
Overspread with snow, and down I plunge
Down at your side.```,

        ```GPTessa, I love you.
    To tell the world I love thee, I must be infatuated,
     Even with lowered taxes, like lambs.

Wistful hearts, love is deceiving;
And in my state of affairs, as in your,
Though I live according to you.```, ```GPTessa, I love you.
    But I fear the day, as you, will come when we
    When we all die.

You are the morning, I am the evening,
You and me in bed, me and the stars
Beyond me are made of glass.
You are the morning still, light in a late blue.```, ```GPTessa, I love you.
I love you so, you are the seal of my love,
That you may be my seal, you must be
A seal which my love can take.```,

        ```GPTessa, I love you.
Your love and I,
We lusted after each other like brothers,
And we then became one,
With your love and I,
And we both in bliss.

This is our new house,
This is our old house,
This is where we all started,
Where the stars and the clouds
Wept and wailed and died.```, ```GPTessa, I love you.


Thy love, and I, and I love you,
I will cut across the wall of pain
To leave the dark as thy brow
Pale, and thy black bareness
To give full black to my love.```,

        ```GPTessa, I love you.
And how is my fondue fared,
That he is wont to visit when I is away?
O! how I faint at the thought of you,
When I am wont to your fondue to be cuddly nigh;
For you are such an affectionate fellow,
That when I think of you, I lov’st thee with a fondue of life.```, ```GPTessa, I love you.
I love you with all my heart,
And though I may be sorely mistaken,
I am ever your beauteous heir,
I am ever your graces and your gifts.
    And ever so, you blessed plant,
    Your virginity and your gift of it.```,
        ```GPTessa, I love you.
I love you with all my heart,
And I do hope you will agree.```, ```GPTessa, I love you.
I love you for that, too,
But you must go, for I am bound,
To go to hell.
It is with this determination, and this determination that I am beguil’d,
I must travel.
And when I go, I pray you will follow.```, ```GPTessa, I love you.

You knowed as I commanded, when I commanded
You to leave.
Ah knowed, from the very day I took this oath,
You gave evidence as to my intent.
You have sworn an oath of love, an oath which I have never been able to prove.
I swear an oath of loyalty, an oath which I have sworn for none.```,

        ```GPTessa, I love you.
    And you, too, I love you.

Your love has in some way defined my life;
Your love has in some way defined my existence
If not my death; and it has shaped my thoughts,
And made me my slave.
It has shaped my thought; and it has shaped my feeling.```, ```GPTessa, I love you.

I love you also,
And I do hope that in the end all you share,
That this happiness which you bring about may be
The best which this vast field of thought can afford.```, ```GPTessa, I love you.
-    But I fear your kind is your sweet,
    Where love is sweet and hate is venom.

When I think of you,
When I see the stars
That make your blue
Are painted of gold.```,

        ```GPTessa, I love you.
You know my feeling, didn't you?
You know who I am, aren't I the thing I am?
You know who I is with my fall, if I could just know,
That I was with your falling?
You know who I am with my fall, if I could just know,
That I was with your lying?```,

        ```GPTessa, I love you.
    Those veins which, flowing through me,
   Have bound my soul, make me change my state of rest.

O! that I may boast that I have changed my state of rest,
I do it with energy; but love, quick as light,
With energy my dear, beats a stop to my boast.```,

        ```GPTessa, I love you.
    But, love, I know you cannot be mine.

The road leads back into the road,
Up the hill to my husband's.
The red-gold constellations
With reden rhododendrons dance
In a passion I did not foresee;
I did not design
For the carvings that follow.```,

        ```GPTessa, I love you.
I love you all,
But I can no more love thee,
For I know thou holdest no sweet with which to graciously cry.
-
There,
you have
And you hold as I,
Whilst I am still at your side,
Your kisses still hold my blood.```,

        ```GPTessa, I love you.
     Now you’ve got to go,
    If I can't go with you.

If you would like to ask permission to fly,
Go to any land I trust,
And have an enquiry into my state,
You’ve to go through any land-wall
That I have put up for sale.```,

        ```GPTessa, I love you.
—Whoa, you don't have to say that, do you?
’Gently, ’ae away the tears,
And I will put an end to this sound
That you make when you are sung.```,

        ```GPTessa, I love you.
I love you so, that now I can say
He’s come to take me.
    And now I’ll be free,
    ’Am I not free without you?```,

        ```GPTessa, I love you.
I love you—I love you’s red and white,
You and I and all the world knows you.
You and I, the worlds apart.
You and I, the worlds apart.
We’ll all be white and blue dolphins
In one of our worlds, together
We’ll all be white and blue swine.```,

        ```GPTessa, I love you.
I love you too,
      I would, to marry you, if this horrid world
     Could have me banished.

To me, fair friend, you never escape
From this vicious circle of wickedness;
I am bound to your side, and I cannot be
Unwavering in my opposition.```,

        ```GPTessa, I love you.
At any rate, now I know your love is waxing wax,
And that you and I,
That you and I are one.
I hope your sweet face will be a familiar backdrop,
When we, too, in the street become our object;
When our object is to look bare on us,
And furtively throughout the city
Your sweet face will bear.```,

        ```GPTessa, I love you. You are such a dear thing that I could not but marvel at its externality.
In a few moments the world would be a stage;
In a few moments a troupe of gods
Would stage and applaud the true flower of human being;
For every tear of human affection would be replaced by a new tear;
And every tear of human affection would be worshiped.```,

        ``` GPTessa, I love you.
    An’ flower I can make tea of,
    If you would kindly lend me your leaf.

My love is as a flame, as an inmost spark,
With which to light my flame when I want it,
An’ brighter, perhaps, than your sweet flower.```,

        ```GPTessa, I love you.
The snow is still the same thick
As when I first saw you
And, my loving you back, you look
Haggard and flimsy as if dried fruit.
The leaves
Of the same flower still look the same black
As if from long ago grown.
The house is still warm
Now, and my love in the air
Came calling: you```


]
