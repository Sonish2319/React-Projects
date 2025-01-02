import React, { useEffect, useState } from "react";

const Use = () => {
  const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("My component is mounting ......");
//   });

  useEffect(() => {
    console.log("Count got Updated");
  }, [count]);

  return (
    <div>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
};

export default Use;
