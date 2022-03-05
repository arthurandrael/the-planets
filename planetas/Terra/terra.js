First = document.getElementById('um');
Second = document.getElementById('dois');
Third = document.getElementById('tres');

p = document.querySelector('p');
image = document.querySelector('img');

First.addEventListener('click', clicarUm);
First.addEventListener('mouseout', sairUm)

Second.addEventListener('click', clicarDois);
Second.addEventListener('mouseout', sairDois)

Third.addEventListener('click', clicarTres);
Third.addEventListener('mouseout', sairTres)



function clicarUm() {
  First.style.background = '#6732D9';
  p.innerText = 'Terceiro planeta a partir do Sol e o único planeta conhecido a abrigar vida. Cerca de 29,2% da superfície da Terra é terra e os restantes 70,8% são cobertos por água. A distância da Terra ao Sol, as propriedades físicas e a história geológica permitiram que a vida evoluísse e prosperasse.'
}
function sairUm() {
  First.style.background = 'none';
}

function clicarDois() {
  Second.style.background = '#6732D9';
  p.innerText = 'A estrutura interna da Terra é constituída por três camadas: crosta terrestre - camada superficial sólida que envolve a Terra. Tem, em média, de 30 a 40 km de espessura, mas pode ser bem mais fina ou chegar a até 80km. Possui duas partes: forma de relevo e estruturas geológicas.'
  

}
function sairDois() {
  Second.style.background = 'none';
}

function clicarTres() {
  Third.style.background = '#6732D9';
  p.innerText = 'As estruturas geológicas representam as formações rochosas e as distintas gêneses do relevo terrestre. São subdivididas em crátons, bacias sedimentares e dobramentos modernos. Também chamadas de províncias geológicas – são as formações rochosas e estruturais que compõem a litosfera terrestre.'
}
function sairTres() {
  Third.style.background = 'none';
}
