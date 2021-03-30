import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import './App.css';
// import '~antd/dist/antd.css';

//Test
import LoginForm from './Components/Form/LoginForm';
import FooterPage from './Components/Footer/FooterPage';


import ProductDetail from './pages/ProductDetail';

function App() {
  return (

    <div className="App">
       <Navbar />
      {/* <FooterPage /> */}
      {/* <FooterPage /> */}
      {/* {productDetail} */}
      <ProductDetail />

    </div>

  );
}

export default App;
