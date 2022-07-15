import {Route,Routes} from 'react-router-dom'

import Navigaiton from './route/navigation/navigation.component';
import Home from './route/home/home.component';
import Shop from './route/shop/shop.component';
import Checkout from './route/checkout/checkout.component';

import './App.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigaiton/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App;
