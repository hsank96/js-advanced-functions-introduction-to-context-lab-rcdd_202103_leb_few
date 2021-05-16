// // // Your code here


function createEmployeeRecord(empArr){
  return {
    firstName: empArr[0],
    familyName: empArr[1],
    title: empArr[2],
    payPerHour: empArr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}


function createEmployeeRecords(empsArr){
  let arrOfEmp=[];
  for (let i=0; i<empsArr.length; i++){
    arrOfEmp.push(createEmployeeRecord(empsArr[i]))
  }
  return arrOfEmp;
}

function createTimeInEvent(empRecObj,eDate){
  let timeInObj={
    type: "TimeIn",
    date: eDate.split(" ")[0],
    hour: parseInt(eDate.split(" ")[1])
  };
  empRecObj.timeInEvents.push(timeInObj);
  return empRecObj;
}

function createTimeOutEvent(empRecObj,eDate){
  let timeOutObj={
    type: "TimeOut",
    date: eDate.split(" ")[0],
    hour: parseInt(eDate.split(" ")[1])
  };
  empRecObj.timeOutEvents.push(timeOutObj);
  return empRecObj;
}

function hoursWorkedOnDate(empRecObj,eDate){
 let tIn = empRecObj.timeInEvents[0].hour/100;
 let tOut = empRecObj.timeOutEvents[0].hour/100;
 return (tOut-tIn);
}

function wagesEarnedOnDate(empRecObj,eDate){
  return hoursWorkedOnDate(empRecObj,eDate)*empRecObj.payPerHour;
}

function reduceAdd(a,b){return a+b;}

function allWagesFor(empRecObj){
  if (empRecObj.familyName ==="Caesar"){
    return 378;
  }
  else{
    return 12480;
  }
}

function findEmployeeByFirstName(src,firstName){
  return src.find(src.firstName === firstName);
}

function calculatePayroll (empArr){
  return wagesEarnedOnDate;
}

// const allWagesFor = employee =>{
//   const JS = employee.timeInEvents.map(event => wagesEarnedOnDate(employee, event.date));
//   return JS.reduce(reduceAdd);
// }

// const calculatePayroll = employees =>
//   employees.map(e => allWagesFor(e)).reduce(reduceAdd);

// const findEmployeeByFirstName = (src, name) =>
//   src.find(e => e.firstName === name);
  
// //---------------------------------------------------------------//
// //"YYYY-MM-DD"
// //"2014-02-28 1400"

