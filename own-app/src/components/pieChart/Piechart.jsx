import React, { useState } from 'react';
import Graph from '../Graph/Graph';
import Styles from "./PieChart.module.css"

function CategoryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [data,
    //  setData
  
  ] = useState({
    "Category 1": 10,
    "Category 2": 20,
    "Category 3": 30,
    "Category 4": 40
  });

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <button onClick={handleOpen} className={Styles.analyse}>Analyse</button>
      {isOpen && (
        <div className={Styles.main_modal}>
          <div className={Styles.modal_data}>
            <div className={Styles.header}>
              <h3>Category Count Analysis</h3>
              <button onClick={handleClose}>X</button>
            </div>
            <div className={Styles.modal_body}>
              <Graph data={data} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryModal;
