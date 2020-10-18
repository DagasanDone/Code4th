let namesArr = [ 'Ben', 'Jenny', 'Michael' , 'Chloe', 'Timmy', 'Max'];

let lengthOfNames =  namesArr[0].length + namesArr[1].length + namesArr[2].length + namesArr[3].length + namesArr[4].length ; 

console.log('Total '+ lengthOfNames + ' characters in this array.');

let lengthOfArray =  namesArr.length ;
console.log(lengthOfArray+ " names in there.");

function whoIsWashing(namesArr){
  const random = Math.floor(Math.random() * 6 );
  
if( random == 0){
  return namesArr[0] ;    //'Ben' ;
}else if (random == 1){
  return  namesArr[1]; // 'Jenny';
}else if(random == 2){
  return  namesArr[2];    //'Michael';
}else if(random == 3){
  return  namesArr[3];    //'Chloe' ; 
}else if(random ==4){
  return  namesArr[4] ;  //'Timmy';
}else if(random == 5){
  return namesArr[5] ; // 'Max'
}

}
console.log(whoIsWashing(namesArr)+ ' is going to wash dishes today!');

let namesNArr = ["Patrick", "AnnMarie", "Alisol",  "Walton"] ;

const random = Math.floor(Math.random() * 4);
console.log(whoIsWashing(namesNArr)+ ' is going to wash dishes today!');
