function mincost(arr)
{ 
//write your code here
// return the min cost
	if (!arr || arr.length <= 1) return 0;
	let cost = 0;

	while (arr.length > 1) {
		arr.sort((a, b) => a - b);
		let first = arr.shift();
		let second = arr.shift();
		let sum = first + second;
		const += sum;
		arr.push(sum);
	}
	return cost;
  
}

module.exports=mincost;
