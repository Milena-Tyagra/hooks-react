import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/pageTitle/PageTitle";
import SectionTitle from "../../components/layout/sectionTitle/SectionTitle";

function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;

  return calcFatorial(n - 1) * n;
}

const UseEffect = () => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [status, setStatus] = useState(1);

  const defineNumber = (input) => {
    const number = parseInt(input);
    if (!number || isNaN(number)) return "";

    return number;
  };

  useEffect(() => {
    if (number) {
      setFatorial(calcFatorial(number));
      setStatus(number % 2 === 0 ? "Par" : "Impar");
    } else {
      setFatorial(0);
      setStatus("");
    }
  }, [number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle
        title="Exercício #01"
        subtitle="Fatorial de número inputado"
      />

      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? "Não existe" : fatorial}
          </span>
        </div>
        <input
          type="text"
          className="input"
          value={number}
          onChange={(e) => setNumber(defineNumber(e.target.value))}
        />
      </div>

      <SectionTitle
        title="Exercício #02"
        subtitle="Status de número inputado"
      />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
