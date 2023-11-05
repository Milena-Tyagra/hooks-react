import React, { useContext } from "react";
import PageTitle from "../../components/layout/pageTitle/PageTitle";
import SectionTitle from "../../components/layout/sectionTitle/SectionTitle";

import dataContext from "../../data/DataContext";
import { AppContext } from "../../data/Store";

const UseContext = () => {
  const { state, setState } = useContext(dataContext);

  function addNumber(delta) {
    setState({
      ...state,
      number: state.number + delta,
    });
  }

  const { number, text, setNumber } = useContext(AppContext);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <SectionTitle title="Exercício #01" subtitle={state.text} />
      <div className="center">
        <span className="text">{state.number}</span>

        <div>
          <button className="btn" onClick={() => addNumber(-1)}>
            -1
          </button>
          <button className="btn" onClick={() => addNumber(1)}>
            +1
          </button>
        </div>
      </div>

      <SectionTitle title="Exercício #02" subtitle={text} />
      <div className="center">
        <span className="text">{number}</span>
        <div>
          <button className="btn" onClick={() => setNumber(number - 1)}>
            -1
          </button>
          <button className="btn" onClick={() => setNumber(number + 1)}>
            +1
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
