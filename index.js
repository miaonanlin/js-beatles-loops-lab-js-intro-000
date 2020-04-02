// add solution here
function iLoveTheBeatles(num){
  var strings=[];
  do {
    strings.push('I love the Beatles!')
    num++;
  } while (num < 15);
  return strings;
}

const facts = ["He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"]

function johnLennonFacts(facta){
  var newArray =[];
  var i = 0;
  while (facts.length > i ){
    newArray.push(`${facta[i]}` + '!!!');
    i++;
  }
  return newArray;
}


function theBeatlesPlay(musicians, instruments){
  var allMusicians = [];
  for (var i =0; i < musicians.length; i++) {
    allMusicians.push(musicians[i] + ' plays '+ instruments[i]);
  }
  return allMusicians;
}
