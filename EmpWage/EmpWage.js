//UC 1 IF ELSE Condition
{
	const IS_ABSENT = 0;
	let empCheck = Math.floor(Math.random() * 10) %2;
	if(empCheck == IS_ABSENT)
	{
		console.log("Emloyee is ABSENT");
		return;
	}
	else
	{
		console.log("Employee is PRESENT");
	}
}

// UC 2,3,4,5,6

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 2;
const MAX_HRS_IN_MONTH = 160;

function calcDailyWage(empHrs)
{
	return empHrs * WAGE_PER_HOUR;
}

function getWorkingHours(empCheck)
{
	switch(empCheck)
	{
		case IS_PART_TIME:
				return PART_TIME_HOURS;
		case IS_FULL_TIME:
				return FULL_TIME_HOURS;
		default:
				return 0;
	}
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr =  new Array();

while(totalEmpHrs <= MAX_HRS_IN_MONTH &&
		totalWorkingDays < NUM_OF_WORKING_DAYS)
{
	totalWorkingDays++;
	let empCheck = Math.floor(Math.random() * 10) % 3;
	let empHrs = getWorkingHours(empCheck);
	totalEmpHrs += empHrs;
	empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Days: " + totalWorkingDays +
				"\nTotal Hrs: "+ totalEmpHrs +
				"\nEmp Wage: "+ empWage);
console.log("Emp Daily Wage: " +empDailyWageArr);

// UC 7A
let totEmpWage = 0;
function sum(dailyWage)
{
	totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total Days: " +totalWorkingDays +
				"\nTotal Hrs: "+ totalEmpHrs +
				"\nEmp Wage: "+ totEmpWage);

function totalWages(totalWage, dailyWage)
{
	return totalWage + dailyWage;
}
console.log("Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

// UC 7B
let dailyCntr = 0;
function mapDayWithWage(dailyWage)
{
	dailyCntr++;
	return "Day:" +dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage Map");
console.log(mapDayWithWageArr);

// UC 7C
function fulltimeWage(dailyWage)
{
return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC 7D
function findFullTimeWage(dailyWage)
{
	return dailyWage.includes("160");
}
console.log("First time FullTime Wage was Earned on Day: "+
					mapDayWithWageArr.find(findFullTimeWage));

// UC 7E
function isAllFulltimeWage(dailyWage)
{
	return dailyWage.includes("160");
}
console.log("Check all Element have Full Time Wage: "+
					mapDayWithWageArr.every(isAllFulltimeWage));

// UC 7F
function isAnyPartTimeWage(dailyWage)
{
	return dailyWage.includes("80");
}
console.log("Check If Any part Time Wage: "+
					mapDayWithWageArr.some(isAnyPartTimeWage));

// UC 7G
function totalDaysWorked(numOfDays, dailyWage)
{
	if(dailyWage > 0) return numOfDays + 1;
	return numOfDays;
}
console.log("Number of Days Emp Worked: "+
					empDailyWageArr.reduce(totalDaysWorked, 0));
