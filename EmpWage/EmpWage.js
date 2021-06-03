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

// UC 2,3,4,5,6,7,8

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 4;
const MAX_HRS_IN_MONTH = 160;
let totalWorkingDays = 0;
let totalEmpHrs = 0;
let empDailyHrsAndWageArr =  new Array();

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

while(totalEmpHrs <= MAX_HRS_IN_MONTH &&
		totalWorkingDays < NUM_OF_WORKING_DAYS)
{
	totalWorkingDays++;
	let empCheck = Math.floor(Math.random() * 10) % 3;
	let empHrs = getWorkingHours(empCheck);
	totalEmpHrs += empHrs;
	empDailyHrsAndWageArr.push(
	{
		dayNum:totalWorkingDays,
		dailyHours:empHrs,
		dailyWage: calcDailyWage(empHrs),
		toString() 
		{
			return '\nDay ' + this.dayNum + '=> Working Hours is ' +this.dailyHours +
						' And Wage Earned = ' + this.dailyWage
		}
	});
}

console.log("Showing Daily Hours worked and Wage Earned: "+empDailyHrsAndWageArr);

// UC 11A
let totalWages = empDailyHrsAndWageArr
						.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
						.reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);

let totalEmpHours = empDailyHrsAndWageArr
						.filter(hrs => hrs > 0)
						.reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);

console.log("Total Hours: "+totalEmpHours+ " Total Wages: "+totalWages);

// UC 11B
process.stdout.write("Logging Full Work Days");
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
							.forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empDailyHrsAndWageArr
										.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
										.map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\nPart WorkingDay Strings: "+ partWorkingDayStrArr);

let nonWorkingDayNums = empDailyHrsAndWageArr
								.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
								.map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("NonWorkingDayNums: "+nonWorkingDayNums);
