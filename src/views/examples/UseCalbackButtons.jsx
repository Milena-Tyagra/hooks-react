import React from "react";

const UseCallbackButtons = ({ increment }) => {
  return (
    <div>
      <button className="btn" onClick={() => increment(6)}>
        +6
      </button>
      <button className="btn" onClick={() => increment(12)}>
        +12
      </button>
      <button className="btn" onClick={() => increment(18)}>
        +18
      </button>
    </div>
  );
};

export default React.memo(UseCallbackButtons);
