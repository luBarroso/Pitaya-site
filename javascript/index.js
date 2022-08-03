let menuAberto = false;

const menuAparece = () => {
  if (!menuAberto) {
    document.getElementsByClassName("menu_mobile")[0].style.display = "flex";
    document.getElementsByClassName("icone_menu")[0].style.backgroundImage =
      "url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZiMDAiPjxwYXRoIGQ9Ik00MC4xMzMzMywyMi45MzMzM2MtMS40NjcwMiwwIC0yLjkzNTY1LDAuNTU4ODIgLTQuMDUzNjUsMS42Nzk2OWwtMTEuNDY2NjcsMTEuNDY2NjdjLTIuMjQxNzMsMi4yNDE3MyAtMi4yNDE3Myw1Ljg3MTI5IDAsOC4xMDcyOWw0MS44MTMwMiw0MS44MTMwMmwtNDEuODEzMDIsNDEuODEzMDJjLTIuMjQxNzMsMi4yNDE3MyAtMi4yNDE3Myw1Ljg3MTI5IDAsOC4xMDcyOWwxMS40NjY2NywxMS40NjY2N2MyLjI0MTczLDIuMjQxNzMgNS44NzEyOSwyLjI0MTczIDguMTA3MjksMGw0MS44MTMwMiwtNDEuODEzMDJsNDEuODEzMDIsNDEuODEzMDJjMi4yMzYsMi4yNDE3MyA1Ljg3MTI5LDIuMjQxNzMgOC4xMDcyOSwwbDExLjQ2NjY3LC0xMS40NjY2N2MyLjI0MTczLC0yLjI0MTczIDIuMjQxNzMsLTUuODcxMjkgMCwtOC4xMDcyOWwtNDEuODEzMDIsLTQxLjgxMzAybDQxLjgxMzAyLC00MS44MTMwMmMyLjI0MTczLC0yLjIzNiAyLjI0MTczLC01Ljg3MTI5IDAsLTguMTA3MjlsLTExLjQ2NjY3LC0xMS40NjY2N2MtMi4yNDE3MywtMi4yNDE3MyAtNS44NzEyOSwtMi4yNDE3MyAtOC4xMDcyOSwwbC00MS44MTMwMiw0MS44MTMwMmwtNDEuODEzMDIsLTQxLjgxMzAyYy0xLjEyMDg3LC0xLjEyMDg3IC0yLjU4NjYzLC0xLjY3OTY5IC00LjA1MzY1LC0xLjY3OTY5eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+)";
    menuAberto = true;
  } else {
    document.getElementsByClassName("menu_mobile")[0].style.display = "none";
    document.getElementsByClassName("icone_menu")[0].style.backgroundImage =
      "url(../images/icone_meni.png)";
    menuAberto = false;
  }
};

//recolhe a data atual
let dataAtual = new Date();
let diaAtual = dataAtual.getDate();
const diaAtualReal = diaAtual;
let mesAtual = dataAtual.getMonth();
const mesAtualReal = mesAtual;
let anoAtual = dataAtual.getFullYear();
const anoAtualReal = anoAtual;
let diaSemanaAtual = dataAtual.getDay();

//Página especial idependência
if ((diaAtualReal === 7) & (mesAtualReal === 8) && anoAtualReal === 2022) {
  document.getElementsByClassName("historia")[0].style.backgroundImage =
    "url(../images/bandeira-brasil.jpg)";
  let textoIndependencia = document.getElementById("independencia-200anos");
  textoIndependencia.innerHTML = "200 anos da Independência do Brasil!";
  textoIndependencia.style.fontSize = "2rem";
  textoIndependencia.style.marginBottom = "50px";
  textoIndependencia.style.textAlign = "center";
  textoIndependencia.style.textShadow = "2px 2px #14f100";
}

const ehBissexto = () => {
  return anoAtual % 4 === 0 && (anoAtual % 100 != 0 || anoAtual % 400 === 0);
};

const maxDias = () => {
  if (
    mesAtual === 0 ||
    mesAtual === 2 ||
    mesAtual === 4 ||
    mesAtual === 6 ||
    mesAtual === 7 ||
    mesAtual === 9 ||
    mesAtual === 11
  )
    return 31;
  else if (mesAtual === 1 && ehBissexto()) return 29;
  else if (mesAtual === 1 && !ehBissexto()) return 28;
  else return 30;
};

const calendario = () => {
  let cal = document.getElementsByClassName("calendario")[0];
  cal.innerHTML = "";
  const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  let mesCalendario = document.createElement("h3");
  mesCalendario.innerHTML = meses[mesAtual] + " " + anoAtual;
  cal.appendChild(mesCalendario);

  for (dia of diasSemana) {
    let cabecalhoSemana = document.createElement("h6");
    cabecalhoSemana.innerHTML = dia;
    cal.appendChild(cabecalhoSemana);
  }

  let espacoBranco = diaSemanaAtual + 1 - (diaAtual % 7);
  if (espacoBranco < 0) espacoBranco = 7 + espacoBranco;
  if (espacoBranco === 7) espacoBranco = 0;

  for (let i = 0; i < espacoBranco; i++) {
    let brancoHtml = document.createElement("p");
    cal.appendChild(brancoHtml);
  }

  let dias = [];
  for (let i = 0; i < maxDias(); i++) {
    dias.push(document.createElement("p"));
    dias[i].innerHTML = i + 1;
    dias[i].setAttribute("class", "item");
    cal.appendChild(dias[i]);
    console.log(dias[i]);
  }

  if (mesAtualReal === mesAtual && anoAtualReal === anoAtual) {
    dias[diaAtual - 1].style.color = "white";
    dias[diaAtual - 1].style.backgroundColor = "#ff107d";
    dias[diaAtual - 1].style.borderRadius = "10px";
  }
};

const mudarMes = (operaçao) => {
  if (operaçao === "+") {
    if (mesAtual === 11) {
      dataAtual = new Date(anoAtual + 1, 0, diaAtual);
    } else {
      dataAtual = new Date(anoAtual, mesAtual + 1, diaAtual);
    }
    diaAtual = dataAtual.getDate();
    mesAtual = dataAtual.getMonth();
    anoAtual = dataAtual.getFullYear();
    diaSemanaAtual = dataAtual.getDay();
  } else {
    if (mesAtual === 0) {
      dataAtual = new Date(anoAtual - 1, 11, diaAtual);
    } else {
      dataAtual = new Date(anoAtual, mesAtual - 1, diaAtual);
    }
    dataAtual = new Date(anoAtual, mesAtual - 1, diaAtual);
    diaAtual = dataAtual.getDate();
    mesAtual = dataAtual.getMonth();
    anoAtual = dataAtual.getFullYear();
    diaSemanaAtual = dataAtual.getDay();
  }

  calendario();
};

window.addEventListener("onload", calendario());
