process.stdin.on('data', input => {
  let light = input.toString().trim();

  switch(light) {
    case 'RED':
        console.log('STOP');
        break;
    case 'YELLOW':
        console.log('READY');
        break;  
    case 'GREEN':
        console.log('GO');
        break; 
    default:
        console.log('INVALID');
        break;
  }

  process.exit();
});