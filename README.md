# [GPTrue-love](https://daniaezz.github.io/GPTrue-love/)
by dANIA AND PAULINE 
---
## About GPTrue Love
GPTrue Love is a dating sim where you play to help two GPTs, GPTheo and GPTessa, fall in love. The game intends to be a subversion of how Artificial Intelligence helps match humans together in dating apps. This time, the human is tasked to help the GPT find true love.
The game is separated into 5 chapters: Confession, Date, Love Poem, Dinner, and The Big Question, with a mini-chapter Horoscope. In each chapter, the player is tasked to help GPT choose between several randomly generated options. The player then gets a score after each stage, which will determine the final outcome of the game. The game also features ASCII art recombined from the ASCII Art Archive. We spent the majority of our time developing it into a web app that can be played online. It is best played on 2560 x 1600 px screens.
First, for GPTheo’s love confession, we scraped Reddit’s r/loveconfessions to get about 30 love confessions, fed the data to GPT-2, and produced around 80 generated love confessions. For their first date, where GPTheo is drunkenly trying to compliment GPTessa after having one too many Markov Margaritas, we scraped over 200 common compliments and Markovified them. For GPTheo’s Love Poem, we fed GPT-2 thousands of lines of Shakespeare and other love poems then selected over 30, from which the player is randomly shown three. For Dinner, we reused Pauline’s Algorithmic Cookbook, which we sorted by type of food so that we could randomly generate recipes for the GPT’s Appetizer, Main Course, and Dessert. Lastly, GPTheo proposes to GPTessa. He checks his horoscope for good luck first, so we scraped hundreds of horoscopes to feed GPT-2 to generate his horoscope (for which the user chooses his star sign). Finally, the player helps him get the right way to say “WILL YOU MARRY ME.”
The scores for Love Confession and Date Compliments are generated from their TextBlob Sentiment Analysis score. The others are all randomly generated. At the end, if the player has accrued over 75 points, they win and get a marriage outcome. If they fail, they get a losing outcome and can try again.

## Discussion
The project deals with a number of themes and topics from class. In particular, it plays with the tendency of GPT, Markov, and randomness to make comedic or incomprehensible outputs to make a fun dating sim. This weirdness, which is annoying for more formal outputs, is very fun in a lighthearted dating sim. The incoherency of the outputs is also played off with explanations that the GPT is a himbo, tongue-tied, or drunk on “Markov Margaritas.”
	It also plays with randomness, luck, and choice. Because the player is never informed of how the scores are computed and the options they receive are randomly generated each time they play, they may lose and win just out of luck. This speaks to how love is also quite random; you can never be sure of how a relationship will turn out. (Fortunately for our GPTs, we have tweaked the game so that it’s generally quite easy to win.)
	We chose to present the work as a web app because we wanted the experience to be playable online and so anyone can enjoy the game. We also wanted people to be able to play the game over and over again and get different outcomes generated each time. The web app was also a great medium to add specifically curated and modified ASCII art to complement each stage. For that reason, we wouldn’t consider the code the output, because the artwork is experienced most coherently by playing the game.
	Using GPT-2 for Confessions and Love Poems posed algorithmic challenges because of training time, difficult data collection, messy outputs, and the abrupt endings to sentences that we had to remove. To do this, we used an algorithm that split the output by sentence and pops out the last. We also used algorithms for the Dinner Recipes, where we had to swap out Unicode codes from the HTML for the correct symbols and deal with creating dictionaries for each of the different categories of food. With Markov, the challenge was filtering through duplicates. All of the algorithms we came up with can be seen in CoLab.

## Links
Dania and Pauline did basically everything in this project together, but in particular, Pauline worked more on the idea, design, writing and ASCII art, while Dania worked more on the front-end development and Javascript.

Drive Link:

https://drive.google.com/drive/u/3/folders/1C35UWmI2fRKNvbWo2SozaO8fTA70HnIL


Play Here:

https://daniaezz.github.io/GPTrue-love/


ASCII Art Archive:

https://www.asciiart.eu/



