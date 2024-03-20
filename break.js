// for loop
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    //console.log("best 5");
  }
  //console.log(element);
}

for (let i = 1; i < 10; i++) {
  //console.log(`outer loop ${i}`);
  //const element = array[i];
  for (let j = 1; j < 10; j++) {
    //console.log(`inner loop ${j}`);
    //const element = array[j];
    //console.log(i + "X" + j + "=" + i * j);
  }
}

//outer loop once then inner loop 10times

let myArray = ["Flash", "Batman", "superman"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
}
//index++ is IMP

// break and continue

for (let index = 1; index < 21; index++) {
  //const element = array[index];
  if (index == 5) {
    break;
  }
  //console.log(`value of i is ${index}`);
}

for (let index = 1; index < 21; index++) {
  //const element = array[index];
  if (index == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`value of i is ${index}`);
}

//continue--> skips once, not outside loop, continues
