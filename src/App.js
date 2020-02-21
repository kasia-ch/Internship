import React, { useState, useEffect } from 'react';
import './App.css';
import getCompanies from "./Api/Request";

const App = () => {

  const [table, setTable] = useState([]);

  useEffect( () => {
    const get = async () => {
      const res = await getCompanies();
      console.log(res);
      setTable(res);
    };

    get();
  }, []);

  return (
    <div className="App">
      {table.map(( e, i ) => <div className ="wrapper" key={i}>
        <span className = "id">{e.id}</span>
        <span className = "name">{e.name}</span>
        <span className = "city">{e.city}</span>
        <span className = "total">{e.total}</span>
        <span className = "avg">{e.avg}</span>
      </div>)}
    </div>
  );
};

export default App;


