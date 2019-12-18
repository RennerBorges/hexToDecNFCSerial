((cartoes) => {

    function separarString(string) {
        return string.split(":");
    }


    cartoes.map(item => {

        let stringSeparada = separarString(item.hex).splice(0, 4);
        let stringReversa = stringSeparada.reverse();
        let stringJunta = stringReversa.join("");
        let stringDecimal = parseInt(stringJunta, 16);
        console.log(item.numero)
        if (stringDecimal == item.numero) {
            console.log(true)
            return true;
        } else {
            console.log(false);
            return false;
        }

    })
})([
    {
        hex: 'E5:19:2E:AF',
        numero: 2939034085
    },
    {
        hex: 'BC:FF:90:71',
        numero: 1905328060
    },
    {
        hex: '05:84:6C:99:A1:21:00',
        numero: 2574025733
    },
    {
        hex: '04:77:E4:F2:B1:4E:80',
        numero: 4075058948
    }
]) 
