import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from "./components/routes/home/home.components";
import Navigation from "./components/routes/navigation/navigation.components";

import Authentication from "./components/routes/authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component";

import Checkout from "./components/routes/checkout/checkout.component";



const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Navigation/>}>
              <Route index={true} element={<Home/>}/>
              <Route path='shop/*' element={<Shop/>}/>
              <Route path='auth' element={<Authentication />} />
              <Route path='checkout' element={<Checkout/>}/>
          </Route>
      </Routes>

  );
}

export default App;
