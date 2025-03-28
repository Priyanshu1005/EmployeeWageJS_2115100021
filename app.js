// UC1
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
  console.log("Employee is Absent");
  return;
} else {
  console.log("Employee is PRESENT");
}

// UC2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// let empHrs = 0;
// empCheck = Math.floor(Math.random() * 10) % 3;
// switch (empCheck) {
//   case IS_PART_TIME:
//     empHrs = PART_TIME_HOURS;
//     break;
//   case IS_FULL_TIME:
//     empHrs = FULL_TIME_HOURS;
//     break;
//   default:
//     empHrs = 0;
// }
// let empWage = empHrs * WAGE_PER_HOUR;
// console.log("Emp Wage: " + empWage);

// UC 3
function getWorkingHours(empCheck) {
  switch (empCheck) {
    case IS_PART_TIME:
      return PART_TIME_HOURS;
    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
    default:
      return 0;
  }
}

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage);

// UC4
const NUM_OF_WORKING_DAYS = 20;
empHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
  let empCheck = Math.floor(Math.random() * 10) % 3;
  empHrs += getWorkingHours(empCheck);
}
empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs: " + empHrs + " Emp Wage: " + empWage);

// UC5
const MAX_HOURS_IN_MONTH = 100;
let totalEmpHrs = 0;
let totalWorkingDays = 0;

while (
  totalEmpHrs < MAX_HOURS_IN_MONTH &&
  totalWorkingDays < NUM_OF_WORKING_DAYS
) {
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  totalEmpHrs += getWorkingHours(empCheck);
}

empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log(
  "UC5 - Total Days: " +
    totalWorkingDays +
    " Total Hrs: " +
    totalEmpHrs +
    " Emp Wage: " +
    empWage
);

// UC6 Arrays
function calcDailyWage(empHrs) {
  return empHrs * WAGE_PER_HOUR;
}

totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (
  totalEmpHrs < MAX_HOURS_IN_MONTH &&
  totalWorkingDays < NUM_OF_WORKING_DAYS
) {
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = getWorkingHours(empCheck);
  totalEmpHrs += empHrs;
  empDailyWageArr.push(calcDailyWage(empHrs));
}

empWage = calcDailyWage(totalEmpHrs);
console.log(
  "UC6 - Total Days: " +
    totalWorkingDays +
    " Total Hrs: " +
    totalEmpHrs +
    " Emp Wage: " +
    empWage
);

// Array Helper Functions
// UC 7A Calc total Wage using Array forEach traversal or reduce method

let totEmpWage = 0;

function sum(dailyWage) {
  totEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);

console.log(
  "UC7A Total Days: " +
    totalWorkingDays +
    " Total Hrs: " +
    totalEmpHrs +
    " Emp Wage: " +
    totEmpWage
);

function totalWages(totalWage, dailyWage) {
  return totalWage + dailyWage;
}

console.log(
  "UC7A Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0)
);

// UC 7B Show the Day along with Daily Wage using Array map helper function

let dailyCntr = 0;

function mapDayWithWage(dailyWage) {
  dailyCntr++;
  return "Day " + dailyCntr + " => Wage: " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B Daily Wage Map");
console.log(mapDayWithWageArr);

// UC 7C-Show Days when Full time wage of 160 were earned

function fulltimeWage(dailyWage) {
  return dailyWage === 160;
}

let fullDayWageArr = empDailyWageArr.filter(fulltimeWage);

console.log("UC7C- Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC 7D Find the first occurrence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage) {
  return dailyWage === 160;
}
console.log(
  "UC 7D First time Fulltime wage was earned on Day: " +
    mapDayWithWageArr.find(findFulltimeWage)
);

// UC 7E Check if Every Element of Full Time Wage is truly holding Full time wage

function isAllFulltimeWage(dailyWage) {
  return dailyWage === 160;
}
console.log(
  "UC 7E Check All Element have Full Time Wage: " +
    fullDayWageArr.every(isAllFulltimeWage)
);

// UC 7F Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
  return dailyWage === 80;
}
console.log(
  "UC 7F Check If Any Part Time Wage: " +
    mapDayWithWageArr.some(isAnyPartTimeWage)
);
// UC 7G-Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
  if (dailyWage > 0) return numOfDays + 1;
  return numOfDays;
}

console.log(
  "UC 7G Number of Days Emp Worked: " +
    empDailyWageArr.reduce(totalDaysWorked, 0)
);

// UC 6 Arrays and 7 Maps

const MAX_HRS_IN_MONTH = 160;

totalEmpHrs = 0;
totalWorkingDays = 0;
empDailyWageArr = new Array();
let empDailyWageMap = new Map();

function calcDailywage(empHrs) {
  return empHrs * WAGE_PER_HOUR;
}

while (
  totalEmpHrs <= MAX_HRS_IN_MONTH &&
  totalWorkingDays < NUM_OF_WORKING_DAYS
) {
  totalWorkingDays++;

  let empCheck = Math.floor(Math.random() * 10) % 3;

  let empHrs = getWorkingHours(empCheck);

  totalEmpHrs += empHrs;

  empDailyWageArr.push(calcDailyWage(empHrs));

  empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

console.log(empDailyWageMap);

function totalWages(totalWage, dailyWage) {
  return totalWage + dailyWage;
}

console.log(
  "UC7A Emp Wage Map totalHrs: " +
    Array.from(empDailyWageMap.values()).reduce(totalWages, 0)
);

// UC 9 Arrow Functions
const findTotal = (totalval, dailyVal) => {
  return totalval + dailyVal;
};

let count = 0;
let empDailyHrsMap = new Map();
// Adding fake data to empDailyHrsMap
empDailyHrsMap.set(++count, 8); // Full working day
empDailyHrsMap.set(++count, 4); // Part working day
empDailyHrsMap.set(++count, 0); // Non-working day
empDailyHrsMap.set(++count, 8); // Full working day
empDailyHrsMap.set(++count, 4); // Part working day
empDailyHrsMap.set(++count, 0); // Non-working day

let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);

let totalSalary = empDailyWageArr
  .filter((dailywage) => dailywage > 0)
  .reduce(findTotal, 0);
console.log(
  "UC9A - Emp Wage with Arrow.: " +
    " Total Hours: " +
    totalHours +
    " Total Wages: " +
    totalSalary
);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empDailyHrsMap.forEach((value, key, map) => {
  if (value === 8) fullWorkingDays.push(key);
  else if (value === 4) partWorkingDays.push(key);
  else nonWorkingDays.push(key);
});

console.log("Full Working Days: " + fullWorkingDays);
console.log("Part Working Days: " + partWorkingDays);
console.log("Non Working Days: " + nonWorkingDays);

// UC 10 Object Creation

totalEmpHrs = 0;

let totalworkingDays = 0;

let empDailyHrsAndWageArr = new Array();

while (
  totalEmpHrs <= MAX_HRS_IN_MONTH &&
  totalworkingDays < NUM_OF_WORKING_DAYS
) {
  totalWorkingDays++;

  let empCheck = Math.floor(Math.random() * 10) % 3;

  let empHrs = getWorkingHours(empCheck);

  totalEmpHrs += empHrs;

  empDailyHrsAndWageArr.push({
    dayNum: totalWorkingDays,
    dailyHours: empHrs,
    dailywage: calcDailywage(empHrs),
    toString() {
      return (
        "\nDay" +
        this.dayNum +
        " => Working Hours is " +
        this.dailyHours +
        " And Wage Earned = " +
        this.dailywage
      );
    },
  });
}

console.log(
  "UC 10 Showing Daily Hours Worked and Wage Earned: " + empDailyHrsAndWageArr
);

// UC 10A to UC 11D Using Object Functions along with Arrow Functions

totalWages = empDailyHrsAndWageArr
  .filter((dailyHrsAndWage) => dailyHrsAndWage.dailywage > 0)
  .reduce(
    (totalWage, dailyHrsAndWage) => totalWage + dailyHrsAndWage.dailywage,
    0
  );

totalHours = empDailyHrsAndWageArr
  .filter((dailyHrsAndWage) => dailyHrsAndWage.dailywage > 0)
  .reduce(
    (totalHours, dailyHrsAndWage) => totalHours + dailyHrsAndWage.dailyHours,
    0
  );

console.log(
  "UC 11A Total Hours: " + totalHours + " Total Wages: " + totalWages
);

process.stdout.write("UC 11B Logging Full Work Days");

empDailyHrsAndWageArr
  .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours == 8)
  .forEach((dailyHrsAndWage) =>
    process.stdout.write(dailyHrsAndWage.toString())
  );

let partWorkingDayStrArr = empDailyHrsAndWageArr
  .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours == 4)
  .map((dailyHrsAndWage) => dailyHrsAndWage.toString());

console.log("\nUC 11C PartWorkingDayStrings: " + partWorkingDayStrArr);

let nonWorkingDayNums = empDailyHrsAndWageArr
  .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours == 0)
  .map((dailyHrsAndWage) => dailyHrsAndWage.dayNum);

console.log("UC 11D NonWorking DayNums: " + nonWorkingDayNums);

// UC12
// class EmployeePayrollData {
//   // properties
//   id;
//   name;
//   salary;
//   gender;
//   startDate;

//   // constructor
//   constructor(id, name, salary, gender, startDate) {
//     this.id = id;
//     this.name = name;
//     this.salary = salary;
//     this.gender = gender;
//     this.startDate = startDate;
//   }

//   // getter and setter methods
//   get name() {
//     return this._name;
//   }

//   set name(name) {
//     this._name = name;
//   }

//   // method
//   toString() {
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     const empDate = this.startDate
//       ? this.startDate.toLocaleDateString("en-US", options)
//       : "undefined";
//     return `id=${this.id}, name=${this.name}, salary=${this.salary}, gender=${this.gender}, startDate=${empDate}`;
//   }
// }

// let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
// console.log(employeePayrollData.toString());

// employeePayrollData.name = "John";
// console.log(employeePayrollData.toString());

// let newEmployeePayrollData = new EmployeePayrollData(
//   2,
//   "Terrisa",
//   388080,
//   "F",
//   new Date()
// );
// console.log(newEmployeePayrollData.toString());

//  UC13

// class EmployeePayrollData {
//   // properties
//   id;
//   name;
//   salary;
//   gender;
//   startDate;

//   // constructor
//   constructor(id, name, salary, gender, startDate) {
//     this.id = id;
//     this.name = name;
//     this.salary = salary;
//     this.gender = gender;
//     this.startDate = startDate;
//   }

//   // getter and setter methods
//   get name() {
//     return this._name;
//   }

//   set name(name) {
//     let nameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
//     if (nameRegex.test(name)) this._name = name;
//     else throw "Name is Incorrect!";
//   }

//   // method
//   toString() {
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     const empDate = this.startDate
//       ? this.startDate.toLocaleDateString("en-US", options)
//       : "undefined";
//     return `id=${this.id}, name=${this.name}, salary=${this.salary}, gender=${this.gender}, startDate=${empDate}`;
//   }
// }

// let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
// console.log(employeePayrollData.toString());

// try {
//   employeePayrollData.name = "John";
//   console.log(employeePayrollData.toString());
// } catch (e) {
//   console.error(e);
// }

// let newEmployeePayrollData = new EmployeePayrollData(
//   2,
//   "Terrisa",
//   30000,
//   "F",
//   new Date()
// );
// console.log(newEmployeePayrollData.toString());

// UC14

class EmployeePayrollData {
  // properties
  id;
  name;
  salary;
  gender;
  startDate;

  // constructor
  constructor(id, name, salary, gender, startDate) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.gender = gender;
    this.startDate = startDate;
  }

  // getter and setter methods
  get name() {
    return this._name;
  }

  set name(name) {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
    if (nameRegex.test(name)) this._name = name;
    else throw "Name is Incorrect!";
  }

  get salary() {
    return this._salary;
  }

  set salary(salary) {
    if (salary > 0) this._salary = salary;
    else throw "Salary must be a positive number!";
  }

  get gender() {
    return this._gender;
  }

  set gender(gender) {
    let genderRegex = RegExp("^[MF]$");
    if (genderRegex.test(gender)) this._gender = gender;
    else throw "Gender must be 'M' or 'F'!";
  }

  get startDate() {
    return this._startDate;
  }

  set startDate(startDate) {
    if (startDate <= new Date()) this._startDate = startDate;
    else throw "Start Date cannot be a future date!";
  }

  // method
  toString() {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const empDate = this.startDate
      ? this.startDate.toLocaleDateString("en-US", options)
      : "undefined";
    return `id=${this.id}, name=${this.name}, salary=${this.salary}, gender=${this.gender}, startDate=${empDate}`;
  }
}

try {
  let employeePayrollData = new EmployeePayrollData(
    1,
    "Mark",
    30000,
    "M",
    new Date("2023-01-01")
  );
  console.log(employeePayrollData.toString());

  employeePayrollData.name = "John";
  employeePayrollData.salary = 40000;
  employeePayrollData.gender = "M";
  employeePayrollData.startDate = new Date("2022-12-01");
  console.log(employeePayrollData.toString());

  let newEmployeePayrollData = new EmployeePayrollData(
    2,
    "Terrisa",
    30000,
    "F",
    new Date()
  );
  console.log(newEmployeePayrollData.toString());
} catch (e) {
  console.error(e);
}