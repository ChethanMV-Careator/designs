import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Layout from 'antd/lib/layout/layout';

function App() {
  return (
    <div className="App">
     <Sidebar/>
      {/* <Layout/>
      <Menu/> */}
    </div>
  );
}

export default App;
