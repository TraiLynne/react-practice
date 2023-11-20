import React from 'react';
import book from './books.jpg';
import Image from "next/image";
// import '../styles/index.css';
import Table from './Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src={book} className="App-logo" alt="logo" />
        <Table />
      </header>
    </div>
  );
}

export default App;
