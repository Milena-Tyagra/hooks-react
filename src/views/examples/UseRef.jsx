import React, { useRef, useEffect, useState } from "react";
import PageTitle from "../../components/layout/pageTitle/PageTitle";
import SectionTitle from "../../components/layout/sectionTitle/SectionTitle";

const merge = (s1, s2) => {
  const textSize = s1.length > s2.length ? s1.length : s2.length;
  let text = "";
  for (let i = 0; i < textSize; i++) {
    if (s1[i]) text += s1[i];
    if (s2[i]) text += s2[i];
  }
  return text;
};

const defineCaractersCount = (myInput1, myInput2) => {
  const myInput1Count = myInput1.current.value.length;
  const myInput2Count = myInput2.current.value.length;

  return myInput1Count + myInput2Count;
};

const UseRef = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [count, setCount] = useState(0);

  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  useEffect(() => {
    setCount(defineCaractersCount(myInput1, myInput2));
  }, [value1, value2]);

  useEffect(() => {
    myInput2.current.focus();
  }, [value1]);

  useEffect(() => {
    myInput1.current.focus();
  }, [value2]);

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle
        title="Exercício #01"
        subtitle="Concatenção de inputs por referência"
      />

      <div className="center">
        <div>
          <span className="text">Valor:</span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count}</span>
          <span className="text">]</span>
        </div>
        <input
          type="text"
          className="input"
          ref={myInput1}
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>

      <div className="center">
        <input
          type="text"
          className="input"
          ref={myInput2}
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;
