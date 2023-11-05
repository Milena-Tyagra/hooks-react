import React from "react";
import PageTitle from "../../components/layout/pageTitle/PageTitle";
import SectionTitle from "../../components/layout/sectionTitle/SectionTitle";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

const UseCustom = () => {
  const [count, inc, dec] = useCounter();
  const url = "http://files.cod3r.com.br/curso-react/estados.json";
  const response = useFetch(url);

  function showStates(states) {
    return states.map((state) => (
      <span class="card-state" key={state.nome}>
        {" "}
        {state.nome} - {state.sigla}{" "}
      </span>
    ));
  }
  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />
      <SectionTitle
        title="Exercício #01"
        subtitle="Componente criado para  Adição/Subtração"
      />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => dec()}>
            -1
          </button>
          <button className="btn" onClick={() => inc()}>
            +1
          </button>
        </div>
      </div>
      <SectionTitle
        title="Exercício #02"
        subtitle="Fetch de estados brasileiros"
      />
      <div className="grid">
        {response.data ? showStates(response.data) : false}
      </div>
    </div>
  );
};

export default UseCustom;
