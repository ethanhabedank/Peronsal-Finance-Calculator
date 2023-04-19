// const paycheck = 396;

const personalSpending = (percent) => {
  var percent = document.getElementById('text2')
  var paycheck = document.getElementById('text1').value
 return percent * paycheck
}
// const ps = personalSpending(.15)

const whichGasPrice = (gasType) => {
  if (gasType === 'regular'){
    return 3.481
  } else if (gasType === 'mid-grade'){
    return 3.897
  } else if (gasType === 'premium'){
    return 4.322
  } else {
    return 'Please enter valid gas type'
  }
}
const gas = whichGasPrice('regular');

const gasSpending = (howManyMiles, milesToGallon) => {
  let gasUsed = howManyMiles / milesToGallon; 
  return gasUsed * gas;
}
const gs = gasSpending(250, 15)

const monthlyInsurance = (cost) => {
  let month = cost * 12;
  return month / 52;
}
const mI = monthlyInsurance(69)

const savingsLeft = () =>{
    const amount = gs + ps + mI;
    return paycheck - amount;
}
// figure out how to calculate time until paycheck when currentDate  is higher than untilDate
const timeUntil = (currentDate, untilDate) =>{
  
}

console.log(currentDate); 
console.log(ps)
console.log(gs)
console.log(savingsLeft())
console.log(mI)
