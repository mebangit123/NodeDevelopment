var max = 0;
var min = 0;

for(let i = 0; i<=5; i++)
{
	let getRandom = Math.floor(Math.random()*900) + 100;
	if(i == 1)
	{
		max = getRandom;
		min = getRandom;
	}
	else
	{
		if(getRandom > max)
		{
			max = getRandom;
		}
			if(getRandom < min)
		{
			min = getRandom;
		}
	}
}
	console.log("Maximum Value is: "+max);
	console.log("Minimum value is: "+min);
