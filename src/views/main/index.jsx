import { useEffect, useState } from "react";
import Row, {
  handleExpansion,
  handleCheckedListagem,
  handleCheckedDetalhes,
  handleCheckedCriar,
  handleCheckedEditar,
  handleCheckedDeletar,
  disabledTodos,
} from "../../components/row";

import "./styles.css";

export default function Main() {
  useEffect(() => {
    handleExpansion();
    handleCheckedListagem();
    handleCheckedDetalhes();
    handleCheckedCriar();
    handleCheckedEditar();
    handleCheckedDeletar();
    disabledTodos();
    handleArray();
  });

   // eslint-disable-next-line
  const [lista, setLista] = useState([]);

  function handleArray() {
    let trs = document.querySelectorAll("tr");
    trs.forEach(function (tr) {
      let td = tr.querySelector("td");
      if (td) {
        let check = tr.querySelectorAll("input");
        check.forEach(function (check) {
          check.addEventListener("change", () => {
            let classe = check.getAttribute("class");
            let column;

            classe
              ? (column = classe.substring(classe.indexOf(" ") + 1))
              : (column = "Todos");

            lista.push({
              checked: check.checked,
              columns: column,
              row: td.innerText,
            });
          });
        });
      }
    });
  }

  function handleConsoleArray() {
    console.log(
      "Dentro do array abaixo vai ter a Linha e Coluna de cada elemento marcado"
    );
    console.log(lista);
  }

  return (
    <>
      <main>
        <h1>Tabela de Permissões</h1>
        <table>
          <thead>
            <tr>
              <th> </th> <th>Ver Listagem</th> <th>Ver Detalhes</th>{" "}
              <th>Criar</th>
              <th>Editar</th> <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            <tr id="todos">
              <td className="title-row">Todos</td>
              <td className="check">
                <input type="checkbox" id="todosListagem" />
              </td>
              <td className="check">
                <input type="checkbox" id="todosDetalhes" />
              </td>
              <td className="check">
                <input type="checkbox" id="todosCriar" />
              </td>
              <td className="check">
                <input type="checkbox" id="todosEditar" />
              </td>
              <td className="check">
                <input type="checkbox" id="todosDeletar" />
              </td>
            </tr>
            <Row
              title="Análise"
              subTitle1="Análise de contas"
              subTitle2="Análise de transações"
              subTitleClass="a"
              titleListagem="analiseListagem"
              checkListagem="analiseListagemCheck"
              titleDetalhes="analiseDetalhes"
              CheckDetalhes="analiseDetalhesCheck"
              titleCriar="analiseCriar"
              CheckCriar="analiseCriarCheck"
              titleEditar="analiseEditar"
              CheckEditar="analiseEditarCheck"
              titleDeletar="analiseDeletar"
              CheckDeletar="analiseDeletarCheck"
            />
            <Row
              title="Contas"
              subTitle1="Cliente"
              subTitle2="Transações"
              subTitle3="Contas digitais"
              subTitleClass="b"
              titleListagem="contasListagem"
              checkListagem="contasListagemCheck"
              titleDetalhes="contasDetalhes"
              CheckDetalhes="contasDetalhesCheck"
              titleCriar="contasCriar"
              CheckCriar="contasCriarCheck"
              titleEditar="contasEditar"
              CheckEditar="contasEditarCheck"
              titleDeletar="contasDeletar"
              CheckDeletar="contasDeletarCheck"
            />
            <Row
              title="Customização"
              subTitle1="Limites e horários"
              subTitle2="Tarifas"
              subTitle3="Tarifas personalizadas"
              subTitle4="Conta"
              subTitleClass="c"
              titleListagem="customizacaoListagem"
              checkListagem="customizacaoListagemCheck"
              titleDetalhes="customizacaoDetalhes"
              CheckDetalhes="customizacaoDetalhesCheck"
              titleCriar="customizacaoCriar"
              CheckCriar="customizacaoCriarCheck"
              titleEditar="customizacaoEditar"
              CheckEditar="customizacaoEditarCheck"
              titleDeletar="customizacaoDeletar"
              CheckDeletar="customizacaoDeletarCheck"
            />
            <Row
              title="Financeiro"
              subTitle1="Entradas"
              subTitleClass="d"
              titleListagem="financeiroListagem"
              checkListagem="financeiroListagemCheck"
              titleDetalhes="financeiroDetalhes"
              CheckDetalhes="financeiroDetalhesCheck"
              titleCriar="financeiroCriar"
              CheckCriar="financeiroCriarCheck"
              titleEditar="financeiroEditar"
              CheckEditar="financeiroEditarCheck"
              titleDeletar="financeiroDeletar"
              CheckDeletar="financeiroDeletarCheck"
            />
          </tbody>
        </table>
        <button onClick={handleConsoleArray}>CADASTRAR</button>
      </main>
      
      {lista}

    </>
  );
}
