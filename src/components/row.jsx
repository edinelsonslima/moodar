import "./styles.css";

export default function Row(props) {

  return (
    <>
      <tr>
        <td className="title-row">
          {props.title} <span className="icon-seta">▲</span>{" "}
        </td>
        <td className="check">
          <input type="checkbox" className={props.titleListagem + " listagem"}/>
        </td>
        <td className="check">
          <input type="checkbox" className={props.titleDetalhes + " detalhes"}/>
        </td>
        <td className="check">
          <input type="checkbox" className={props.titleCriar + " criar"}/>
        </td>
        <td className="check">
          <input type="checkbox" className={props.titleEditar + " editar"}/>
        </td>
        <td className="check">
          <input type="checkbox" className={props.titleDeletar + " deletar"}/>
        </td>
      </tr>

      <tr
        className={props.subTitleClass}
        style={{ display: props.subTitle1 ? "" : "none" }}
      >
        <td>{props.subTitle1}</td>
        <td className="check">
          <input type="checkbox" className={props.checkListagem + " listagem"} />
        </td>
        <td className="check">
          <input type="checkbox" className={props.CheckDetalhes + " detalhes"}/>
        </td>
        <td className="check">
          <input type="checkbox" className={props.CheckCriar + " criar"}/>
        </td>
        <td className="check">
          <input type="checkbox" className={props.CheckEditar + " editar"}/>
        </td>
        <td className="check">
          <input type="checkbox" className={props.CheckDeletar + " deletar"}/>
        </td>
      </tr>

      <tr
        className={props.subTitleClass}
        style={{ display: props.subTitle2 ? "" : "none" }}
      >
        <td>{props.subTitle2}</td>
        <td className="check">
          <input type="checkbox" className={props.checkListagem + " listagem" } />
        </td>
        <td className="check">
          <input type="checkbox" className={props.CheckDetalhes + " detalhes"}/>
        </td>
        <td className="check">
          <input type="checkbox" className={props.CheckCriar + " criar"}/>
        </td>
        <td className="check">
          <input type="checkbox" className={props.CheckEditar + " editar"}/>
        </td>
        <td className="check">
          <input type="checkbox" className={props.CheckDeletar + " deletar"}/>
        </td>
      </tr>

      <tr
        className={props.subTitleClass}
        style={{ display: props.subTitle3 ? "" : "none" }}
      >
        <td>{props.subTitle3}</td>
        <td className="check">
          <input type="checkbox" className={props.checkListagem + " listagem"} />
        </td>
        <td className="check">
          <input type="checkbox" className={props.CheckDetalhes + " detalhes"}/>
        </td>
        <td className="check">
          <input type="checkbox" className={props.CheckCriar + " criar"}/>
        </td>
        <td className="check">
          <input type="checkbox" className={props.CheckEditar + " editar"}/>
        </td>
        <td className="check">
          <input type="checkbox" className={props.CheckDeletar + " deletar"}/>
        </td>
      </tr>

      <tr
        className={props.subTitleClass}
        style={{ display: props.subTitle4 ? "" : "none" }}
      >
        <td>{props.subTitle4}</td>
        <td className="check">
          <input type="checkbox" className={props.checkListagem + " listagem"} />
        </td>
        <td className="check">
          <input type="checkbox" className={props.CheckDetalhes + " detalhes"}/>
        </td>
        <td className="check">
          <input type="checkbox" className={props.CheckCriar + " criar"}/>
        </td>
        <td className="check">
          <input type="checkbox" className={props.CheckEditar + " editar"}/>
        </td>
        <td className="check">
          <input type="checkbox" className={props.CheckDeletar + " deletar"}/>
        </td>
      </tr>
    </>
  );
}

export function handleExpansion() {
  let titlesRows = document.querySelectorAll(".title-row");

  titlesRows.forEach(function (titleRow) {
    titleRow.addEventListener("click", () => {
      let seta = titleRow.querySelector(".icon-seta");
      let titleComCaractere;
      let bool;

      if (seta.innerText === "▲") {
        seta.innerText = "▼";
        titleComCaractere = titleRow.innerText.replace(" ▼", "");
        bool = true;
      } else {
        seta.innerText = "▲";
        titleComCaractere = titleRow.innerText.replace(" ▲", "");
        bool = false;
      }

      let title = titleComCaractere
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      switch (title) {
        case "analise":
          let subs1 = document.querySelectorAll(".a");
          subs1.forEach(function (sub1) {
            bool
              ? sub1.classList.add("recolher")
              : sub1.classList.remove("recolher");
          });
          break;

        case "contas":
          let subs2 = document.querySelectorAll(".b");
          subs2.forEach(function (sub2) {
            bool
              ? sub2.classList.add("recolher")
              : sub2.classList.remove("recolher");
          });
          break;

        case "customizacao":
          let subs3 = document.querySelectorAll(".c");
          subs3.forEach(function (sub3) {
            bool
              ? sub3.classList.add("recolher")
              : sub3.classList.remove("recolher");
          });
          break;

        case "financeiro":
          let subs4 = document.querySelectorAll(".d");
          subs4.forEach(function (sub4) {
            bool
              ? sub4.classList.add("recolher")
              : sub4.classList.remove("recolher");
          });
          break;

        default:
          break;
      }
    });
  });
}

export function handleCheckedListagem() {
  const analiseListagem = document.querySelector(".analiseListagem");
  const contasListagem = document.querySelector(".contasListagem");
  const customizacaoListagem = document.querySelector(".customizacaoListagem");
  const financeiroListagem = document.querySelector(".financeiroListagem");

  const analiseListagemCheck = document.querySelectorAll(".analiseListagemCheck");
  const contasListagemCheck = document.querySelectorAll(".contasListagemCheck");
  const customizacaoListagemCheck = document.querySelectorAll(".customizacaoListagemCheck");
  const financeiroListagemCheck = document.querySelectorAll(".financeiroListagemCheck");

  analiseListagem.addEventListener("change", () => {
    analiseListagemCheck.forEach(function (check) {
      analiseListagem.checked ? (check.disabled = true) : (check.disabled = false);
    });
  });

  contasListagem.addEventListener("change", () => {
    contasListagemCheck.forEach(function (check) {
      contasListagem.checked ? (check.disabled = true) : (check.disabled = false);
    });
  });

  customizacaoListagem.addEventListener("change", () => {
    customizacaoListagemCheck.forEach(function (check) {
      customizacaoListagem.checked
        ? (check.disabled = true)
        : (check.disabled = false);
    });
  });

  financeiroListagem.addEventListener("change", () => {
    financeiroListagemCheck.forEach(function (check) {
      financeiroListagem.checked
        ? (check.disabled = true)
        : (check.disabled = false);
    });
  });
}

export function handleCheckedDetalhes() {
  const analiseDetalhes = document.querySelector(".analiseDetalhes");
  const contasDetalhes = document.querySelector(".contasDetalhes");
  const customizacaoDetalhes = document.querySelector(".customizacaoDetalhes");
  const financeiroDetalhes = document.querySelector(".financeiroDetalhes");

  const analiseDetalhesCheck = document.querySelectorAll(".analiseDetalhesCheck");
  const contasDetalhesCheck = document.querySelectorAll(".contasDetalhesCheck");
  const customizacaoDetalhesCheck = document.querySelectorAll(".customizacaoDetalhesCheck");
  const financeiroDetalhesCheck = document.querySelectorAll(".financeiroDetalhesCheck");

  analiseDetalhes.addEventListener("change", () => {
    analiseDetalhesCheck.forEach(function (check) {
      analiseDetalhes.checked ? (check.disabled = true) : (check.disabled = false);
    });
  });

  contasDetalhes.addEventListener("change", () => {
    contasDetalhesCheck.forEach(function (check) {
      contasDetalhes.checked ? (check.disabled = true) : (check.disabled = false);
    });
  });

  customizacaoDetalhes.addEventListener("change", () => {
    customizacaoDetalhesCheck.forEach(function (check) {
      customizacaoDetalhes.checked
        ? (check.disabled = true)
        : (check.disabled = false);
    });
  });

  financeiroDetalhes.addEventListener("change", () => {
    financeiroDetalhesCheck.forEach(function (check) {
      financeiroDetalhes.checked
        ? (check.disabled = true)
        : (check.disabled = false);
    });
  });
}

export function handleCheckedCriar() {
  const analiseCriar = document.querySelector(".analiseCriar");
  const contasCriar = document.querySelector(".contasCriar");
  const customizacaoCriar = document.querySelector(".customizacaoCriar");
  const financeiroCriar = document.querySelector(".financeiroCriar");

  const analiseCriarCheck = document.querySelectorAll(".analiseCriarCheck");
  const contasCriarCheck = document.querySelectorAll(".contasCriarCheck");
  const customizacaoCriarCheck = document.querySelectorAll(".customizacaoCriarCheck");
  const financeiroCriarCheck = document.querySelectorAll(".financeiroCriarCheck");

  analiseCriar.addEventListener("change", () => {
    analiseCriarCheck.forEach(function (check) {
      analiseCriar.checked ? (check.disabled = true) : (check.disabled = false);
    });
  });

  contasCriar.addEventListener("change", () => {
    contasCriarCheck.forEach(function (check) {
      contasCriar.checked ? (check.disabled = true) : (check.disabled = false);
    });
  });

  customizacaoCriar.addEventListener("change", () => {
    customizacaoCriarCheck.forEach(function (check) {
      customizacaoCriar.checked
        ? (check.disabled = true)
        : (check.disabled = false);
    });
  });

  financeiroCriar.addEventListener("change", () => {
    financeiroCriarCheck.forEach(function (check) {
      financeiroCriar.checked
        ? (check.disabled = true)
        : (check.disabled = false);
    });
  });
}

export function handleCheckedEditar() {
  const analiseEditar = document.querySelector(".analiseEditar");
  const contasEditar = document.querySelector(".contasEditar");
  const customizacaoEditar = document.querySelector(".customizacaoEditar");
  const financeiroEditar = document.querySelector(".financeiroEditar");

  const analiseEditarCheck = document.querySelectorAll(".analiseEditarCheck");
  const contasEditarCheck = document.querySelectorAll(".contasEditarCheck");
  const customizacaoEditarCheck = document.querySelectorAll(".customizacaoEditarCheck");
  const financeiroEditarCheck = document.querySelectorAll(".financeiroEditarCheck");

  analiseEditar.addEventListener("change", () => {
    analiseEditarCheck.forEach(function (check) {
      analiseEditar.checked ? (check.disabled = true) : (check.disabled = false);
    });
  });

  contasEditar.addEventListener("change", () => {
    contasEditarCheck.forEach(function (check) {
      contasEditar.checked ? (check.disabled = true) : (check.disabled = false);
    });
  });

  customizacaoEditar.addEventListener("change", () => {
    customizacaoEditarCheck.forEach(function (check) {
      customizacaoEditar.checked
        ? (check.disabled = true)
        : (check.disabled = false);
    });
  });

  financeiroEditar.addEventListener("change", () => {
    financeiroEditarCheck.forEach(function (check) {
      financeiroEditar.checked
        ? (check.disabled = true)
        : (check.disabled = false);
    });
  });
}

export function handleCheckedDeletar() {
  const analiseDeletar = document.querySelector(".analiseDeletar");
  const contasDeletar = document.querySelector(".contasDeletar");
  const customizacaoDeletar = document.querySelector(".customizacaoDeletar");
  const financeiroDeletar = document.querySelector(".financeiroDeletar");

  const analiseDeletarCheck = document.querySelectorAll(".analiseDeletarCheck");
  const contasDeletarCheck = document.querySelectorAll(".contasDeletarCheck");
  const customizacaoDeletarCheck = document.querySelectorAll(".customizacaoDeletarCheck");
  const financeiroDeletarCheck = document.querySelectorAll(".financeiroDeletarCheck");

  analiseDeletar.addEventListener("change", () => {
    analiseDeletarCheck.forEach(function (check) {
      analiseDeletar.checked ? (check.disabled = true) : (check.disabled = false);
    });
  });

  contasDeletar.addEventListener("change", () => {
    contasDeletarCheck.forEach(function (check) {
      contasDeletar.checked ? (check.disabled = true) : (check.disabled = false);
    });
  });

  customizacaoDeletar.addEventListener("change", () => {
    customizacaoDeletarCheck.forEach(function (check) {
      customizacaoDeletar.checked
        ? (check.disabled = true)
        : (check.disabled = false);
    });
  });

  financeiroDeletar.addEventListener("change", () => {
    financeiroDeletarCheck.forEach(function (check) {
      financeiroDeletar.checked
        ? (check.disabled = true)
        : (check.disabled = false);
    });
  });
}

export function disabledTodos() {
  let todosListagem = document.querySelector("#todosListagem");
  let todosDetalhes = document.querySelector("#todosDetalhes");
  let todosCriar = document.querySelector("#todosCriar");
  let todosEditar = document.querySelector("#todosEditar");
  let todosDeletar = document.querySelector("#todosDeletar");

  todosListagem.addEventListener("change", () => {
    let listagens = document.querySelectorAll(".listagem");
    listagens.forEach(function (listagem) {
      todosListagem.checked
        ? (listagem.disabled = true)
        : (listagem.disabled = false);
    });
  });

  todosDetalhes.addEventListener("change", () => {
    let detalhes = document.querySelectorAll(".detalhes");
    detalhes.forEach(function (detalhe) {
      todosDetalhes.checked
        ? (detalhe.disabled = true)
        : (detalhe.disabled = false);
    });
  });

  todosCriar.addEventListener("change", () => {
    let criars = document.querySelectorAll(".criar");
    criars.forEach(function (criar) {
      todosCriar.checked ? (criar.disabled = true) : (criar.disabled = false);
    });
  });

  todosEditar.addEventListener("change", () => {
    let editars = document.querySelectorAll(".editar");
    editars.forEach(function (editar) {
      todosEditar.checked
        ? (editar.disabled = true)
        : (editar.disabled = false);
    });
  });

  todosDeletar.addEventListener("change", () => {
    let delatars = document.querySelectorAll(".deletar");
    delatars.forEach(function (deletar) {
      todosDeletar.checked
        ? (deletar.disabled = true)
        : (deletar.disabled = false);
    });
  });
}