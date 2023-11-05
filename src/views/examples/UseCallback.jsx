import React, { useState, useCallback } from "react";
import PageTitle from "../../components/layout/pageTitle/PageTitle";
import SectionTitle from "../../components/layout/sectionTitle/SectionTitle";
import UseCallbackButtons from "./UseCalbackButtons";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(
    (delta) => {
      setCount((current) => current + delta);
    },
    [setCount]
  );

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
      <SectionTitle
        title="Exercício #01"
        subtitle="Adição/Subtração por callback"
      />

      <div className="center">
        <span className="text"> {count}</span>
        <UseCallbackButtons increment={increment} />
      </div>
    </div>
  );
};

export default UseCallback;
