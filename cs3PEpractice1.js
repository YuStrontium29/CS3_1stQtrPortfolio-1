process.stdin.on('data', input => {

  let goodbye = input.toString().trim();

    switch(goodbye) {
        case 'GOODBYE':
            console.log('ENGLISH');
            break;
        case 'ADIOS':
            console.log('SPANISH');
            break;
        case 'TSCHÜSS':
            console.log('GERMAN');
            break;
        case 'AU REVOIR':
            console.log('FRENCH');
            break;
        case 'ARRIVEDERCI':
            console.log('ITALIAN');
            break;
        case 'DO SVIDANIYA':
            console.log('RUSSIAN');
            break;
        default:
            console.log('UNKNOWN');
            break;
    }

  process.exit();

});