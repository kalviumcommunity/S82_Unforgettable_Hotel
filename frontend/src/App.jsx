import React from "react";
import DesignCard from "./components/DesignCard";

const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <DesignCard name="Rahul A B" age={18} designCount={4} />
    </div>
  );
};

export default App;
