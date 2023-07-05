const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn_Transferir = document.querySelector("#btn_transferir");
const btn_Remover = document.querySelector("#btn_remover");

const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.map((elementoHtml) => {
  elementoHtml.addEventListener("click", (evento) => {
    const curso = evento.target;
    console.log(curso);
    curso.classList.toggle("selecionado");
  });
});

btn_Transferir.addEventListener("click", () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
  cursosSelecionados.map((elemento) => {
    caixa2.appendChild(elemento);
  });
});

btn_Remover.addEventListener("click", () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
  cursosSelecionados.map((elemento) => {
    caixa1.appendChild(elemento);
  });
});
