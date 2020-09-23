module.exports = function check(str, bracketsConfig) {
	let strArr = str.split('');
	   
	let brackets = {};
	for (let i = 0; i < bracketsConfig.length; i++) {
	   	if (bracketsConfig[i][0] == bracketsConfig[i][1]) {
	   		brackets[bracketsConfig[i][0]] = 'open and close bracket';
	   		brackets[bracketsConfig[i][0] + ' is used'] = false;
	   	} else {
	    	brackets[bracketsConfig[i][0]] = 'open bracket';
	    	brackets[bracketsConfig[i][1]] = [bracketsConfig[i][0]];
	 	}
	}

	const openBracketsStack = [];

	for (let i = 0; i < strArr.length; i++) {
		currentElemen = strArr[i];

		if (brackets[currentElemen] == 'open and close bracket') {
			let isCurrentElemenUsed = brackets[currentElemen + ' is used'];
			let twoLastElem = openBracketsStack[openBracketsStack.length - 1] == currentElemen;
			
			if (isCurrentElemenUsed) {
				if (twoLastElem) {
					openBracketsStack.pop();	
				} else {
					openBracketsStack.push(currentElemen);
				}
				continue;
			}
		}

	   	if ( ( brackets[currentElemen] == 'open bracket') || (brackets[currentElemen] == 'open and close bracket') ) {
	   		openBracketsStack.push(currentElemen);
	   		brackets[currentElemen + ' is used'] = true;
	   		continue;
	   	}

		
		twoLastElem = openBracketsStack[openBracketsStack.length - 1] == brackets[currentElemen];
	    if (twoLastElem) {
			openBracketsStack.pop();
			brackets[currentElemen + ' is used'] = false;
	 		continue;
	    }

	    return false;

	}

	return openBracketsStack[0] == undefined ? true : false;
}