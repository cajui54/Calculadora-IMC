const $menuBtn = document.querySelector('.lblMenu');
let $header__btnMenu = document.querySelector('#header__btnMenu');
let menuOpen = false;
$menuBtn.addEventListener('click', ()=>{
    openMenuOrClose();
})

function openMenuOrClose(){
    if(!menuOpen){
        $menuBtn.classList.add('open');
        menuOpen = true;
    }
    else{
        $menuBtn.classList.remove('open');
        menuOpen = false;
    }
}

let $navOpcion = document.querySelectorAll('.optionMenu a');

for(var i = 0; i <$navOpcion.length; i++){
    $navOpcion[i].addEventListener('click', ()=>{
        openMenuOrClose();
        document.getElementById('header__btnMenu').checked = false;
    });
     
}
//event botões
function scrollTo(element){
    document.querySelector(element).scrollIntoView({behavior: 'smooth'});
}
document.querySelector('.btnCalcular').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#tabelaAncora');
});
document.querySelector('.btnNovo').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#formCalculadora');
})
// reset color table;
let $tr = document.querySelectorAll('tr');
document.querySelector('.btnNovo').addEventListener('click', function(event){
    document.querySelector('#spnResultado').textContent = '?';
    document.getElementById('trAbaixo').style.backgroundColor = "#fff"
    document.getElementById('trNormal').style.backgroundColor = "#e6e3e3";
    document.getElementById('trSobrepeso').style.backgroundColor = "#fff";
    document.getElementById('trObesidade').style.backgroundColor = "#e6e3e3";
    document.getElementById('trObesidadeGrave').style.backgroundColor = "#fff";
});

let $loadText =  document.querySelector('.article-top');
setInterval(function(){
    $loadText.classList.add('load');
},2000);

