process.stdin.on('data', input => {

  const NUM = Number(input.toString().trim());   
    if (NUM < 0 && NUM % 2 == 0) {
        console.log('Cold Number');
    }
    
    else if (NUM < 0 && NUM % 2 !== 0) { 
        console.log('Hot Number');
    }

    else if (NUM > 0 && NUM % 3 == 0) {
        console.log('Fizz Number');
    }
    
    else { 
        console.log('Normal Number');
    }

  process.exit(); // ends the code

});