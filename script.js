btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", ()=>{

    nome = document.getElementById('nomeUsuario').value;
    P = parseFloat(document.getElementById('valorAM').value);
    i = parseFloat(document.getElementById('taxaJuros').value);
    n = parseFloat(document.getElementById('nParcelasMensais').value);

    if (nome !== '' && valorAM !== '' && taxaJuros !== '' && nParcelasMensais !== ''){

        taxa = i / 100

        VF = P*(Math.pow((1 + taxa),n) - 1) / taxa;

        window.alert('Olá! ' + nome + '! Se você aplicar R$ ' + P + ',00, à taxa de juros de ' + i + '% ao mês, durante ' 
        + n + ' messes. Acumulará uma poupança de R$ ' +  VF.toFixed(2)  + '.');

    }else {
        window.alert('Para calcular o seu Pace , preencha todos os campos.');

    }
});

