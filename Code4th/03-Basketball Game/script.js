
let scoreJohn = ((189 + 120 + 103) / 3).toFixed(2);
let scoreMike = ((129 + 94 + 123) / 3).toFixed(2);


if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}

let scoreMary = ((97 + 134 + 105) / 3).toFixed(2);

console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}

function compareScores(name1, name2, score1, score2){
    average1 = (score1[0]+ score1[1] + score2[2])/3 ; 
    average2 = (score2[0]+ score2[1] + score2[2])/3 ; 
if(average1 > average2){
console.log(`win ${name1}`); 
}else if(average1 < average2){
    console.log(`win ${name2}`);
}else{
 console.log("Score is draw.");
}

}
console.log(compareScores('John', 'Mark' , 137 , 167));




