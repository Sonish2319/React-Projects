import React from "react";
import { useState } from "react";

const Gameplay = ({ toggle }) => {
  return (
    <div>
      <button onClick={toggle}>back to home</button>
    </div>
  );
};

export default Gameplay;
