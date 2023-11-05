import React, { useState, useMemo } from "react";
import PageTitle from "../../components/layout/pageTitle/PageTitle";
import SectionTitle from "../../components/layout/sectionTitle/SectionTitle";

const sum = (a, b) => {
  const future = Date.now() + 2000;
  while (Date.now() < future) {}
  return a + b;
};

const defineNumber = (input) => {
  const number = parseInt(input);
  if (!number || isNaN(number)) return "";

  return number;
};

const UseMemo = () => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  const result = useMemo(() => sum(n1, n2), [n1, n2]);
  return (
    <div className="UseMemo">
      <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memoizado!" />
      <SectionTitle
        title="Exercício #01"
        subtitle="Soma de valores inputados"
      />

      <div className="center">
        <input
          type="text"
          className="input"
          value={n1}
          onChange={(e) => setN1(defineNumber(e.target.value))}
        />
        <input
          type="text"
          className="input"
          value={n2}
          onChange={(e) => setN2(defineNumber(e.target.value))}
        />
        <input
          type="text"
          className="input"
          value={n3}
          onChange={(e) => setN3(defineNumber(e.target.value))}
        />

        <span className="text"> {result}</span>
      </div>
    </div>
  );
};

export default UseMemo;
