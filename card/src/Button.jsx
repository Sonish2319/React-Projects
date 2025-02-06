import { useState } from "react";

function Button(props) {
  const [Count, setCount] = useState(0);

  function Counter() {
    setCount(Count + 1);
  }

  return <button onClick={Counter}>{props.view} {Count}</button>;
}

export default Button;
