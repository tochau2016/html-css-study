import Header from './Header.jsx';
import Main from './Main.jsx'
import Footer from './Footer.jsx'
import React from 'react';
import './App.css'
import Form from './Form.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Form/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
