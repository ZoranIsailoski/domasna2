var age = prompt(`Enter your age`);


if (age > 18){
    console.log(`You are old enough to drive`)
}



if (age < 18){
  var remainingYears = 18 - age;
  console.log(`You Need to wait ${remainingYears} years before turning 18`)
}


