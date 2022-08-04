class pitaya {
  constructor(PosX, PosY) {
    this.PosX = PosX;
    this.PosY = PosY;
    this.imagem = new Image(90, 70);
    this.imagem.src = "../images/logozinha.png";
  }
}

var mouseX = 0;
var mouseY = 0;
let pitayas = [];
let pontuacao = 0;
let recorde = 0;
let loop;
let contador = 0;

if (!localStorage.getItem("recorde")) {
  localStorage.setItem("recorde", JSON.stringify(recorde));
}

let strigRecorde = localStorage.getItem("recorde");
recorde = JSON.parse(strigRecorde);

const draw = async () => {
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //Coordenadas do mouse no canvas
  ctx.canvas.addEventListener(
    "mousemove",
    function (event) {
      mouseX = event.clientX - ctx.canvas.offsetLeft;
      mouseY = event.clientY - ctx.canvas.offsetTop;
      // document.getElementById("status").innerHTML =
      //   mouseX + " | " + mouseY;
    },
    false
  );

  contador++;

  if (contador === 30) {
    pitayas.push(new pitaya(Math.floor(Math.random() * 411), -70));
    contador = 0;
  }

  //atualizando as pitayas
  for (let i = 0; i < pitayas.length; i++) {
    /*await*/ ctx.drawImage(
      pitayas[i].imagem,
      pitayas[i].PosX,
      pitayas[i].PosY,
      90,
      70
    );

    pitayas[i].PosY += 3;
  }

  for (let i = 0; i < pitayas.length; i++) {
    //retirar as pitayas ao pegá-las
    if (
      pitayas[i].PosY >= canvas.height - 90 &&
      pitayas[i].PosY <= canvas.height - 80 &&
      pitayas[i].PosX <= mouseX - 25 &&
      pitayas[i].PosX + 90 >= mouseX + 25
    ) {
      pitayas.splice(i, 1);
      pontuacao++;
      document.getElementById("pontuacao").innerHTML = pontuacao;
    } else if (pitayas[i].PosY > canvas.height) {
      //retirar as pitayas ao chegar ao fim do canvas
      window.cancelAnimationFrame(loop);
      pitayas.splice(0, pitayas.length);
      contador = 0;
      fimdeJogo();
      return;
    }
  }

  //retângulo vermelho
  ctx.beginPath();
  ctx.fillStyle = "#14f100";
  ctx.rect(mouseX - 25, canvas.height - 20, 50, 10);
  ctx.fill();

  loop = window.requestAnimationFrame(draw);

  //quantidade de pitayas na tela
  // document.getElementById("status2").innerHTML = pitayas.length;
};

const fimdeJogo = () => {
  let telaFimJogo = document.getElementsByClassName("tela-fim-jogo")[0];
  telaFimJogo.style.display = "flex";
  telaFimJogo.getElementsByTagName("p")[0].innerHTML =
    "Pontuação = " + pontuacao;
  if (pontuacao > recorde) recorde = pontuacao;
  telaFimJogo.getElementsByTagName("p")[1].innerHTML = "Recorde = " + recorde;
  localStorage.setItem("recorde", JSON.stringify(recorde));

  loop = true;
};

const esconderTela = () => {
  pontuacao = 0;
  document.getElementById("pontuacao").innerHTML = 0;
  document.getElementsByClassName("tela-fim-jogo")[0].style.display = "none";
};

window.addEventListener("load", function () {
  window.requestAnimationFrame(draw);
});
