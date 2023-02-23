// Write a simple code using two for loops to draw the following diagrams:

// Create a function that accepts an integer for the number of row

const drawStarsRectangle = (row) => {
	for (let i = 0; i < row; i++) {
		// declare a variable that stores the value of the string
		let stars = "";
		for (let j = 0; j < i + 1; j++) {
			// For each iteration of the loop add the star to the string
			stars += "*";
		}
		// log the value of the string
		console.log(stars);
	}
};

drawStarsRectangle(5);
