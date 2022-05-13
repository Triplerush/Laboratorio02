function arrayGenerator(n,min,max){
	let a = [];
	for(let x= 0;x<n;x++){
		a.push(Math.ceil(Math.random()*(max-min)+ min));
	}
	return a;
}

function arrayGenerator2(n,min,max){
	let b = Array(n).fill(0);
	return b.map(x => {
		return x + Math.ceil(Math.random()*(max-min)+ min-1);
	})
}
