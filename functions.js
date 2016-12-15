var quotes = [
  { "quote" :"The graves stood tenantless and the sheeted dead did squeak and gibber in the Roman streets",
   "speaker" : "Horatio",
   "play": "Hamlet" },
  
  {"quote" : "Stars with trains of fire and dews of blood, disasters in the sun",
   "speaker" : "Horatio",
   "play": "Hamlet" },
   
  {"quote" : "The moist star upon whose influence Neptune’s empire stands was sick almost to doomsday with eclipse",
   "speaker": "Horatio",
   "play": "Hamlet"},
  
  {"quote" : "Pray to the devils; the gods have given us over.",
   "speaker": "Aaron",
   "play": "Titus Andronicus" },
  
  {"quote":   "Demand me nothing: what you know, you know. From this time forth I never will speak word.",
  "speaker": "Iago",
   "play": "Othello"
  }, 
   
  
  {"quote" : "Here's the smell of the blood still: all the perfumes of Arabia will not sweeten this little hand.",
   "speaker": "Lady MacBeth",
   "play": "MacBeth"},
   
  {"quote": "These violent delights have violent ends and in their triumph die, like fire and powder, which, as they kiss, consume. ",
  "speaker": "Friar Lawrence",
  "play": "Romeo and Juliet"},
  
 {"quote": "What is he whose grief bears such an emphasis? whose phrase of sorrow conjures the wand'ring stars, and makes them stand like wonder-wounded hearers?",
  "speaker": "Hamlet",
  "play": "Hamlet"},

  {"quote" : "Think not, Percy, to share with me in glory any more: Two stars keep not their motion in one sphere", 
   "speaker": "Henry V",
   "play": "Henry IV, Part I"},   

  {"quote": "Hung be the heavens with black, yield day to night! Comets, importing change of times and states, brandish your crystal tresses in the sky, and with them scourge the bad revolting stars",
  "speaker": "Duke of Bedford",
  "play": "Henry VI"},

  {"quote": "You stars that move in your right spheres, where be your powers? show now your mended faiths, and instantly return with me again",
   "speaker": "Philip the Bastard",
   "play": "King John"},
   
  {"quote": "We make guilty of our disasters the sun, the moon, and the stars; as if we were villains on necessity; fools by heavenly compulsion; knaves, thieves, and treachers by spherical pre-dominance",
   "speaker": "Edmund",
   "play": "King Lear"},
   {"quote": "Stars, hide your fires; Let not light see my black and deep desires: The eye wink at the hand; yet let that be, which the eye fears, when it is done, to see.",
    "speaker": "MacBeth",
    "play": "MacBeth"},
    
];

var images = [
  "1473408655921-6e1310501bdc",
  "1473806189829-9641421a59f1",
  "1475198751283-d3f5d231c7f4",
  "1473090549840-057a880803e0"
];
var base = "https://images.unsplash.com/photo-";

function newQuote(){
  var randoNoQ = Math.floor(Math.random() * (quotes.length));  
  var randoNoI = Math.floor(Math.random() * (images.length));  
  var item = quotes[randoNoQ];
  var image = base + images[randoNoI]; 
  document.body.style.backgroundImage = "url('" + image + "')" ;
  document.getElementById('quoteDisplay').innerHTML = "<i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> " +  item.quote + " <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>";
  document.getElementById('speaker').innerHTML = "&#8212;" + item.speaker;
  document.getElementById('play').innerHTML = "in <i>" + item.play + "</i>";
  
  document.getElementById('share').href = "https://twitter.com/intent/tweet?text='" + encodeURIComponent(item.quote) + "'%20from%20" + encodeURIComponent(item.play) ;
};

window.onload = newQuote;
