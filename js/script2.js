function process(action) {
	
	var colsKey = document.getElementById('colsKey').value;
	var rowsKey = document.getElementById('rowsKey').value;

	var inputMessage = document.getElementById('inputMessage').value; 

	inputMessage = inputMessage.replace(/\s/g, '').toUpperCase(); 
	
	for (var i = inputMessage.length; i < colsKey.length * rowsKey.length; i++) {
		inputMessage += '_';
	};
	var cryptResult = crypt(inputMessage, colsKey, rowsKey); 
	var regExp = new RegExp('.{' + colsKey.length + '}', 'g');
	var resultLine = cryptResult.right.join('').replace(regExp, '$& ');

	
	document.getElementById('outputLine').innerText = resultLine;
}


function crypt(message, colsKey, rowsKey) {
	var result = []; 
	var middle = []; 
	var left = []; 
	
	var colsCount = colsKey.length; 
	var rowsCount = rowsKey.length;

	for (var row = 0; row < rowsCount; row++) { 
		for (var col = 0; col < colsCount; col++) {
			
			var newCol = colsKey[col] - 1;
			var newRow = rowsKey[row] - 1;
			left[row * colsCount + col] = message[row * colsCount + col];
			middle[row * colsCount + newCol] = message[row * colsCount + col];
			result[newRow * colsCount + newCol] = message[row * colsCount + col];
		}
	}
	return {
		left: left,
		middle: middle,
		right: result
	};
}