
var arg = process.argv; 
//Sends arguments into an array, index 0,1 are useless info.

if (arg.length === 3){

	var testInput = arg[2];
	var summer =[];
	var negPlace = 1;
	var results = 0;

	for (let i=0; i<testInput.length; i++){  //Going through each character
		if (testInput.charAt(i)==="-"){
			negPlace = -1;
		} else {
			let tempChar = testInput.charAt(i);	 //Assigning character into a temp
			let num = parseInt(tempChar)		 //change string to an int
			
			num*=negPlace;						 //applies neg if neg

			summer.push(num);					 //push it into another array

			negPlace=1;							 //reset neg number

		}
	}

	for (let i=0; i<summer.length; i++){	//summing the array
		results += summer[i];
	}

	console.log(results);
}