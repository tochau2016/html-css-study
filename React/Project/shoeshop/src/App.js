import Header from './Header'
import './App.css';
import React from 'react';
import Footer from './Footer'
import SignUp from './SignUp.jsx'
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SignUp/>
      <Footer/>
    </div>
  );
}

export default App;
