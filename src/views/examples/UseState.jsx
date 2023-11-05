import React, { useState } from "react";
import PageTitle from "../../components/layout/pageTitle/PageTitle";
import SectionTitle from "../../components/layout/sectionTitle/SectionTitle";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const negativeButtonValues = [-10, -1];
  const buttonValues = [+1, +10];
  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" subtitle="Adição/Subtração" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          {negativeButtonValues.map((value) => (
            <button onClick={() => setCount(count + value)} className="btn">
              {value}
            </button>
          ))}
          {buttonValues.map((value) => (
            <button onClick={() => setCount(count + value)} className="btn">
              +{value}
            </button>
          ))}
        </div>
      </div>

      <SectionTitle title="Exercício #02" subtitle="Controle de Títulos" />
      <input
        type="text"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Insira seu nome"
      />
      <span className="text">{name}</span>
    </div>
  );
};

export default UseState;
