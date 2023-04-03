
    /*window.alert('ciao a tutti');

    var saluto = 'grazie per la lettura';
    console.log(saluto);
    document.write(saluto)*/

    document.getElementById ("mioNome").innerHTML = "Gilda Marzano Makeup";


    var sceltaMakeUp= prompt('Di quanti Makeup hai bisogno?');

    console.log(sceltaMakeUp);

    if( sceltaMakeUp >= 1 && sceltaMakeUp <= 3){
        document.write('tra i 150$ e i 200$');
    }else if(sceltaMakeUp > 3){
        document.write('Tra i200$ e i 300$');
    }else{
        document.write('Più di 300$');
    }