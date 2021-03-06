# Pet-My-Cats
Was the first time you touched a MAC when you decided to pursue `coding`? Are you me?
This game is meant for MAC noobies like us who just wants to learn useful mac shortcuts for mac, vscode, zoom, and slack.


[click me to play owo](https://kokopuffz.github.io/Pet-my-cats/)



## About the Game
This a typing game. There will be a prompt on what the shortcut will do, and if you push the right keys => You get to pet my cute cats. Lucky you!  Currently, ~~only for mac users. 
:(~~ available for mac and pc! Select at top on start of game. Hit refresh to change setting.


<img src="https://cdn.discordapp.com/attachments/829614700815319060/987475991448395816/sdasds.PNG" width="50%">

***

## Tech Used
* HTML
* CSS
* JavaScript
* Flexbox
* Apple phone voice memo (to record my cat)

***


## MVP 
- [x] Start screen with directions
- [x] Screen displaying what shortcut does
- [x] If correct, cat gets pet
- [x] If wrong, game stops, correct shortcut displayed, no pets.

***

## Wireframes
### wireframes vs final(?)product:  
<br/>

#### game description | sound on/off switch | hover:directions
<img src="https://cdn.discordapp.com/attachments/829614700815319060/939021615247798322/1.png" width="45%"></img> <img src="https://cdn.discordapp.com/attachments/829614700815319060/941536433934577664/Screen_Shot_2022-02-10_at_9.28.27_PM.png" width="45%"></img> 
<br/>


#### key presses shown | sound switch available | rotating pictures
<img src="https://cdn.discordapp.com/attachments/829614700815319060/939027436174209032/Colorful_Abstract_Pattern_and_Shapes_Hidden_Picture_Game_Fun_Presentation.png" width="45%"></img> <img src="https://cdn.discordapp.com/attachments/829614700815319060/941539539497918464/Screen_Shot_2022-02-10_at_9.41.51_PM.png" width="45%"></img> 


#### if correct: cat meow recording goes off | giant hand pets the cat
<img src="https://cdn.discordapp.com/attachments/829614700815319060/939021614274707486/7.png" width="45%"></img> <img src="https://cdn.discordapp.com/attachments/829614700815319060/941552692994637834/Screen_Shot_2022-02-10_at_10.33.27_PM.png" width="45%"></img> 

#### if incorrect: red prompt | correct answer display | try again button
<img src="https://cdn.discordapp.com/attachments/829614700815319060/939021614719336488/8.png" width="45%"></img> <img src="https://cdn.discordapp.com/attachments/829614700815319060/941540416073900112/Screen_Shot_2022-02-10_at_9.45.20_PM.png" width="45%"></img> 

#### got-all-questions-right-screen!
<img src="https://cdn.discordapp.com/attachments/829614700815319060/941551718720733244/Screen_Shot_2022-02-10_at_10.30.18_PM.png" width="65%"></img> 
***
## Stretch Goals

* [ ] web accessibility
  - [x] add alt for all images
  - [x] titles for empty buttons and switches
  - [x] add heading to start page with game description
  - [ ] add `kind` attribute to audio element
  - [ ] logical document structure
* [x] show buttons that are being pressed | changed the color if correct
* [ ] extra points on certain cats
* [ ] timed version | How many can you get done in under a minute?
* [x] sound when right |recorded one of my own cats and used the sound!
* [x] include mute button

***
## Ongoing bugs
* Pushing the correct keys multiple times will create many hands while the correct timer is running. It also changes the picture the same amount of times. It does not skip questions or give free credit to questions.
  - although my cats would appreciate more pets. :)



## Notable Fixes
* eventlisteners on keys ups and key downs
* going from event.key to event.code because spacebar is an empty string in key
* putting my eventCode object inside my reset function, fixed issues where if i played again, some keys were still set true.
* coding the pressed keys like alt and meta, into options and command... also when player presses all correct buttons it will show all the buttons together, instead of single buttons or strange symbols. ie: ??????
* trying to make plan B incase plan A breaks... like my images and github!

***
## Things that surprised me:
* Because the game has to keep track of multiple keys being pressed at the same time.  Creating questions took a lot longer.
* Short-cuts that were browser shortcuts had to be taken out for the fluidity of the game.

***
## Credits |human

* Paulina - debug queen!
* @yaakov -#1 talking rubberduck that also talks back 
* Weston - helping me understand the eventlistener functions...again. :D
* Justin | Jon | Roman -lots of help throughout project

## Credits |non-human
* [pretty subtle shadowboxes](https://getcssscan.com/css-box-shadow-examples)
* [press any key to get the javascript event keycode](keycode.info "keycode.info")
* [code for making sure all buttons are pressed](https://www.allbloggertricks.com/2021/04/determine-if-multiple-keys-are-pressed.html)
* [gallery creator for github - multiple images in one line for README](http://felixhayashi.github.io/ReadmeGalleryCreatorForGitHub/) 
* [very easy to understand make a start screen for your JS Games by David Reid](https://youtu.be/FwLMz7jMRac) 
* [useful shortcuts for devs](https://dev.to/designpuddle/27-no-frills-keyboard-shortcuts-every-developer-should-follow-4jd)
* [web accessibility](https://webaim.org/intro/)
* [audio accessibility](https://dequeuniversity.com/rules/axe/4.0/audio-caption)
* [canva for wireframes](canva.com)
* [transform explanation](https://discord.com/channels/296063428043341834/829614700815319060/941599823746973726)
* ws3 and mixtures of stackover flow answers

<!-- 
noteable fixes:
-going from event.key to event.code because spacebar is an empty string
-reset function had to include the eventCode object to be set to all false
-coded the pressed keys to match the terms we normally know. meta left => command
" " => spacebar -->
<!-- -coded pressed keys to command-shift-a  instead of ?? -->
***
### Check out the other fantastic games my cohort made! Yay SpringForward!

* [Tae's color pipe](https://taekim90.github.io/First-Project-Color-Pipes/)

* [Sol's Loona Memory Game](https://luflos.github.io/Loona-Memory-Game/)

* [Norman's Hamster: The Candy Hunter ](https://foosasugaome.github.io/candy_hunt/)

* [Roman's Marvel Match Game](https://romanprotoliuk.github.io/marvel_match_game/#)

* [Bryan's Angus Adventure](https://github.com/brnguy/Angus-Adventure)

* [Brian's Simon Meme Game](https://br1anlee.github.io/project-1/)

* [Phil's 2D Side Scrol](https://philjang.github.io/2D-SideScrol/)

* [James's Word Search](https://jamelscott.github.io/WordSearch-Countdown/)

* [Daniel's Return to Oz](https://danieldenton.github.io/return-to-oz-p1/)

* [Triston's Whack-a-Mole](https://tristonpalacios.github.io/WaM/)

* [Evan's Bussin Bagels](https://evankski.github.io/bussin-bagels-pq/)

* [Andy's Newsies Rush Glows](https://snacksident.github.io/P1/)

* [Marty's Get that Cheese](https://mvanzo.github.io/Get_That_Cheese/)

* [Zach's Song Birds](https://zbrose.github.io/sei-projectone-song-birds/)

* [Nate's Beanie Bandits](https://nchez.github.io/Beanie-Bandit/)

* [Justin's Speed Typer Glows](https://justin-aquino.github.io/speed-typer/ )

* [John's Bomber](https://jondmc.github.io/Project1-bomber/)

* [Irma's Memory Game](https://ikarabag1.github.io/Juggle-Your-Memory/)

* [Gabe's Whack a Mole]()

* [Clair's Trust Your Memory Do You](https://clairxc.github.io/Trust-Your-Memory-Do-You/)

* [Aimee's Ceelo's](https://aimeemisaki.github.io/Project1_Ceelo/)

* [Mark's Stick]()