import React from "react";

const DesignCard = ({ name, age, designCount }) => {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Designs: {designCount}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "8px",
    width: "250px",
    textAlign: "center",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  },
};

export default DesignCard;
