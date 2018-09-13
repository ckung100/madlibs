var adjective = ['eternal', 'warm', 'squishy', 'sparkly', 'plump', 'invasive', 'funny'];
var shine = ['high beams at night', 'the sun', 'fireworks', 'jewels', 'dragon scales', 'a lamp'];
var noun = ['the future', 'a map', 'home', 'a dog', 'apple cider', 'dictionaries', 'the ocean', 'breakfast'];
var noun2 = ['drawings', 'diamonds', 'Barack Obama', 'fragrance', 'farts','Minnesota'];
var body = ['heart', 'eye', 'pancreas', 'finger', 'skin', 'nose', 'pupil', 'brain'];
var emotion = ['happy', 'love', 'melancholy', 'light', 'bored', 'frustration', 'livid', 'nervous', 'distracted'];
var age = ['0', '30', '99', '69', '80', '101', '19', '42', '9', 'pretty old', 'dead'];
var end = ['Forever yours,', 'xoxo,', 'I love you,', 'Lots of love,', 'Always and truly,', 'Thinking of you,','Unconditionally yours,', 'Sincerely,','Not dead yet,','The one and only,', 'Signed,'];
var me = ['Me', 'Your secret admirer', 'Anonymous', 'You', 'Myself', 'Undisclosed', 'You know who', 'So and so'];

var randomAdjective = Math.floor( Math.random() * adjective.length);
var randomShine = Math.floor( Math.random() * shine.length);
var randomNoun = Math.floor( Math.random() * noun.length);
var randomNoun2 = Math.floor( Math.random() * noun2.length);
var randomBody = Math.floor( Math.random() * body.length);
var randomEmotion = Math.floor( Math.random() * emotion.length);
var randomAge = Math.floor( Math.random() * age.length);
var randomEnd = Math.floor( Math.random() * end.length);
var randomMe = Math.floor( Math.random() * me.length);

var first = document.getElementById('adjective'),
	second = document.getElementById('shine'),
	third = document.getElementById('noun'),
	fourth = document.getElementById('noun2'),
	fifth = document.getElementById('body'),
	sixth = document.getElementById('emotion'),
	seventh = document.getElementById('age'),
	eighth = document.getElementById('end')
	ninth = document.getElementById('me');

console.log(document.getElementById('adjective'));
console.log(document.getElementById('shine'));
console.log(document.getElementById('noun'));
console.log(document.getElementById('noun2'));
console.log(document.getElementById('body'));
console.log(document.getElementById('emotion'));
console.log(document.getElementById('age'));
console.log(document.getElementById('end'));
console.log(document.getElementById('me'));

first.textContent = adjective[randomAdjective];
second.textContent = shine[randomShine];
third.textContent = noun[randomNoun];
fourth.textContent = noun2[randomNoun2];
fifth.textContent = body[randomBody];
sixth.textContent = emotion[randomEmotion];
seventh.textContent = age[randomAge];
eighth.textContent = end[randomEnd];
ninth.textContent = me[randomMe];


