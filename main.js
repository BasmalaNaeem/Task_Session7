function question1() {
  let q1_input = inputQ1.value;
  let q1_output;

  if(q1_input >= "A" && q1_input <= "Z")
    q1_output = "UpperCase";
  else if(q1_input >= "a" && q1_input <= "z")
    q1_output = "LowerCase";
  else if(q1_input >= 0 && q1_input <= 9)
    q1_output = "Digit";
  else
    q1_output = "Special Symbol";

  outputQ1.innerHTML = q1_output;
}

function question2() {
  let q2_input = inputQ2.value;
  let q2_output;

  let mypoints1 = q2_input.split(" "); // A+B=C   Q -> = , S -> +
  let A = parseInt(mypoints1[0]);
  let S = mypoints1[1];
  let B = parseInt(mypoints1[2]);
  let Q = mypoints1[3];
  let C = parseInt(mypoints1[4]);

  if (S == "+"){
    if (A + B == C)
    {
      q2_output ="Yes";
    }
    else {
      q2_output = A + B;
    }
  }
  else if (S == "-"){
    if (A - B == C)
    {
      q2_output ="Yes";
    }
    else {
      q2_output = A - B;
    }
  }
  else if (S == "*"){
    if (A * B == C)
    {
      q2_output ="Yes";
    }
    else {
      q2_output = A * B;
    }
  }

  outputQ2.innerHTML = q2_output;
}

function question3() {
  let A = input1Q3.value;
  let B = input2Q3.value;
  let q3_output;
  
  ( A % B == 0 || B % A == 0) ? q3_output = "Multiples" : q3_output = "No Multiples"

  outputQ3.innerHTML = q3_output;
}

function question4() {
  let q4_input = inputQ4.value;
  let q4_output;

  let myPoints = q4_input.split(", ");

  let x1 = myPoints[0];
  let y1 = myPoints[1];
  let x2 = myPoints[2];
  let y2 = myPoints[3];

  let x = x2 - x1;
  let y = y2 - y1;

  let distance = Math.sqrt(x * x + y * y);

  q4_output = distance;
  outputQ4.innerHTML = q4_output;
}

function question5() {
  let q5_input = inputQ5.value;
  let q5_output;

  q5_input = q5_input.toString();

  if(q5_input.length > 10){
    let char1 = q5_input.charAt(0);
    let char2 = q5_input.charAt(q5_input.length - 1);
    let numOfChars = q5_input.length - 2;

    q5_output = char1 + " " + numOfChars + " " + char2;
  }
  else {
    q5_output = `String length is ${q5_input.length} < 10`
  }

  outputQ5.innerHTML = q5_output;
}
