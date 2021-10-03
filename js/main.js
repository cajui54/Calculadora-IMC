class IMC{
    constructor(){
        this._altura;
        this._peso;
    }
    readInput(){
        let readDate = new Object();
        readDate.alura = document.getElementById('txtAltura').value;
        readDate.peso = document.getElementById('txtPeso').value;
        return readDate;
    }
    confirm(){
        var elements = this.readInput();
        if(this.validarCampos(elements)){
            this.calcularIMC(elements);
            this.cancelar();
        }
        
    }
    cancelar(){
        document.getElementById('txtAltura').value = '';
        document.getElementById('txtPeso').value = '';
    }
    calcularIMC(elements){
        
        let imcResultado = elements.peso / (elements.alura * elements.alura);
        if(imcResultado <18.5){
            document.getElementById('trAbaixo').style.backgroundColor = "#BDB76B"
        }
        else if(imcResultado > 18.4 && imcResultado < 24.5){
            document.getElementById('trNormal').style.backgroundColor = "#00FA9A";
        }
        else if(imcResultado > 24 && imcResultado <= 28.88){
            document.getElementById('trSobrepeso').style.backgroundColor = "#FFB6C1";
        }
        else if(imcResultado > 29 && imcResultado <40){
            document.getElementById('trObesidade').style.backgroundColor = "#F08080";
        }
        else if(imcResultado > 39){
            document.getElementById('trObesidadeGrave').style.backgroundColor = "#DC143C";
        }
        document.getElementById('spnResultado').textContent = imcResultado.toFixed(2);
    }
    validarCampos(elements){
        var msg = '';
        if(elements.alura == ''){
            msg+= 'Por favor! Preencha o campo vázio! \n';
            document.getElementById('txtAltura').focus();
        }
        if(elements.peso == ''){
            msg+= 'Por favor! Preencha o campo vázio! \n'
            document.getElementById('txtPeso').focus();
        }
        if(msg != ''){
            alert(msg);
            return false;
        }
        return true;
    }

}
let imc = new IMC();

let $btnConfirmar = document.querySelector('.btnCalcular');
$btnConfirmar.addEventListener('click',()=>{
    imc.confirm();
    
});
$btnCancelar = document.querySelector('.btnCancelar');
$btnCancelar.addEventListener('click', ()=>{
    imc.cancelar();
})
