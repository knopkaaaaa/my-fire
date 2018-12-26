function calculation(){

    var N = parseInt(document.getElementById('N').value);
    var K = parseInt(document.getElementById('K').value);

    var sum=0;
    for (var i = 1; i <= N; i++) {

        sum = sum + Math.pow(i, K);

    }
        
        document.getElementById('res').innerHTML += " "+sum;
    }