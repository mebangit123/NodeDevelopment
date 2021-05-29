let sum = 0;
let avg = 0;
for(let i = 0; i<= 5; i++)
{
	let randomNum = Math.floor(Math.random()*90) + 10;
	sum += randomNum;
}

avg = sum/5;

console.log("Sum is :"+sum);
console.log("Average is :"+avg);
