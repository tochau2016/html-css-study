import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import './App.css';
// import '~antd/dist/antd.css';

//Test
import LoginForm from './Components/Form/LoginForm';
import FooterPage from './Components/Footer/FooterPage';

function App() {
  return (

    <div className="App">
      <Navbar />
      <LoginForm />
      {/* <FooterPage /> */}
      <FooterPage />
    </div>

  );
}

export default App;
