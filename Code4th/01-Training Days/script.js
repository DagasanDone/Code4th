  const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {

 const event = ['Marathon', 'Triathlon' , 'Pentathlon'] ;
  //  return 'Marathon' || 'Triathlon' || 'Pentathlon' randomly ;
  if (random == 0) {
    return 'Marathon';
  } else if (random == 1) {
    return 'Triathlon';
  } else if (random == 2) {
    return 'Penthathlon';
  }
  
  }
  console.log(getRandEvent(random)); 




// The scope of `days` is too tight 
// let days = 
// const getTrainingDays = condition => {

// // decide the day according to the condition, write a conditional;

// return days;
// };

const logEvent = condition => {
  const name = 'Nala';
  console.log(`${name}'s condition is: ${condition}`);
};

const logEvent = condition => {
  const name = 'Warren';
  console.log(`${name}'s condition is: ${condition}`);
};

const logTime = days => {
  const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const condition = getRandEvent();
const days = getTrainingDays(condition);


logEvent(condition);
logTime(days);
