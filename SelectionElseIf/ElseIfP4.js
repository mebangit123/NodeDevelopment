let max = 0;
let min = 0;

let a = 10;
let b = 30;
let c = 32;

//4(1)

let calc1 = a + b * c;

max = calc1;
min = calc1;

//4(2)
let calc2 = a % b + c;
//4(3)
let calc3 = c + a / b;
//4(4)
let calc4 = a * b + c;

if(calc2 > max | calc2 < min)
{
	max = calc2;
	min = calc2;
}
else if(calc3 > max | calc3 < min)
{
	max = calc3;
	min = calc3;
}
else if(calc4 > max | calc4 < min)
{
	max = calc4;
	min = calc4;
}

console.log(max);
console.log(min);
