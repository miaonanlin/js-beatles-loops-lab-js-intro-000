// add solution here
function iLoveTheBeatles(num){
  var strings=[];
  do {
    strings.push('I love the Beatles!')
    num++;
  } while (num < 15);
  return strings;
}


function johnLennonFacts(facts){
  var newArray =[];
  var i = 0;
  while (facts.length > i ){
    newArray.push(`${facts[i]}` + '!!!');
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
