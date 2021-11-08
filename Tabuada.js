function tabuada() {
   let num = document.getElementById('numTexto')
   let tab = document.getElementById('selectTab')
    if(num.value.lenght == 0) {
        alert('Por favor, digite um número')
    }else {
        let numDigitado = Number(num.value)
        let contador = 1
        tab.innerHTML = ''
        while (contador <= 10){
            let item = document.createElement('option')
            item.text = `${numDigitado} X ${contador} = ${numDigitado*contador}`
            item.value = `tab${contador}`
            tab.appendChild(item)
            contador++
        }
    }
}
