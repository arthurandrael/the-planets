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
  var altura = 80
  var margem = 2
  First.style.background = '#6732D9';
  document.getElementById('Terra').src = 'terra.png';
  document.getElementById('Terra').style.width = altura+"%"
  document.getElementById('Terra').style.margin = margem+"%"
  document.querySelector('section.texto').style.width = 39+"%"
  p.innerText = 'Terceiro planeta a partir do Sol e o único planeta conhecido a abrigar vida. Cerca de 29,2% da superfície da Terra é terra e os restantes 70,8% são cobertos por água. A distância da Terra ao Sol, as propriedades físicas e a história geológica permitiram que a vida evoluísse e prosperasse.'
  
  
  
  
  var size = screen.width
  
  if (size < 481) {
    H1 = document.getElementById('Titulo')
    image = document.querySelector('img#Terra')
    text = document.querySelector('section.texto')
    //fonte = document.querySelector('section span#fonte')
  
  
    H1.style.marginLeft = 4 + "%";
    H1.style.marginBottom = 6 + "%"
  
    image.style.marginTop = 22 + "%"
    image.style.marginLeft = 11 + "%"
    image.style.marginBottom = 10 + "%"
    image.style.width = 80 + "%"
  
    text.style.width = 97 + "%"
    text.style.color = "white"
    text.style.margin = "auto"
    text.style.textAlign = "center"
    text.style.fontSize = 0.78 + "rem"
    text.style.lineHeight = 1.3 + "rem"
    text.style.letterSpacing = 0.02 + "rem"
  
    p.style.marginBottom = 1 + "rem"
  
  
  }
}
function sairUm() {
  First.style.background = 'none';
}

function clicarDois() {
  var altura = 64
  var margem = 9
  Second.style.background = '#6732D9';
  document.getElementById('Terra').src = 'terra2.png'
  document.getElementById('Terra').style.width = altura+"%";
  //document.getElementById('Terra').style.margin = margem+"%"
  document.getElementById('Terra').style.marginLeft = 17+"%"
  document.getElementById('Terra').style.marginRight = 10+"%"
  document.getElementById('Terra').style.marginTop = 22+"%"
  //document.getElementById('Terra').style.justifyContent = 'space-around'
  document.querySelector('section.texto').style.width = 32+"%"
  p.innerText = 'A estrutura interna da Terra é constituída por três camadas: crosta terrestre - camada superficial sólida que envolve a Terra. Tem, em média, de 30 a 40 km de espessura, mas pode ser bem mais fina ou chegar a até 80km. Possui duas partes: forma de relevo e estruturas geológicas.'
  
  
  
  
  
  var size = screen.width
  
  if (size < 481) {
    H1 = document.getElementById('Titulo')
    image = document.querySelector('img#Terra')
    text = document.querySelector('section.texto')
    //fonte = document.querySelector('section span#fonte')
    

    H1.style.marginLeft = 4+"%";
    H1.style.marginBottom = 6+"%"
    
    image.style.marginTop = 27+"%"
    image.style.marginLeft = 23+"%"
    image.style.marginBottom = 17+"%"
    image.style.width = 56+"%"
    
    text.style.width = 97+"%"
    text.style.color = "white"
    text.style.margin = "auto"
    text.style.textAlign = "center"
    text.style.fontSize = 0.78+"rem"
    text.style.lineHeight = 1.3+"rem"
    text.style.letterSpacing = 0.02+"rem"

    p.style.marginBottom = 1+"rem"
    
  
  }
}
function sairDois() {
  Second.style.background = 'none';
}

function clicarTres() {
  var altura = 80
  var margem = 2
  Third.style.background = '#6732D9';
  document.getElementById('Terra').src = 'terra.png'
  document.getElementById('Terra').style.width = altura+"%"
  document.getElementById('Terra').style.margin = margem+"%"
  document.querySelector('section.texto').style.width = 39+"%"
  p.innerText = 'As estruturas geológicas representam as formações rochosas e as distintas gêneses do relevo terrestre. São subdivididas em crátons, bacias sedimentares e dobramentos modernos. Também chamadas de províncias geológicas – são as formações rochosas e estruturais que compõem a litosfera terrestre.'
  
  
  
  var size = screen.width
  
  if (size < 481) {
    H1 = document.getElementById('Titulo')
    image = document.querySelector('img#Terra')
    text = document.querySelector('section.texto')
    //fonte = document.querySelector('section span#fonte')
  
  
    H1.style.marginLeft = 4 + "%";
    H1.style.marginBottom = 6 + "%"
  
    image.style.marginTop = 22 + "%"
    image.style.marginLeft = 11 + "%"
    image.style.marginBottom = 10 + "%"
    image.style.width = 80 + "%"
  
    text.style.width = 98+ "%"
    text.style.color = "white"
    text.style.margin = "auto"
    text.style.textAlign = "center"
    text.style.fontSize = 0.78 + "rem"
    text.style.lineHeight = 1.3 + "rem"
    text.style.letterSpacing = 0.02 + "rem"
  
    p.style.marginBottom = 1 + "rem"
  
  
  }
}
function sairTres() {
  Third.style.background = 'none';
}

