import './App.css';
import About from './components/About';
import Dishes from './components/Dishes';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Order from './components/Order';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader'
import { useState } from 'react';

function App() {
  const [colour, setcolour] = useState('');
  const [color, setcolor] = useState('');
  const [orange, setorange] = useState('')
  const toggle = ()=>{
    if(colour===''){
      setcolour('orange');
      setcolor('white');
      setorange('orange');
    }
    else{
      setcolour('');
      setcolor('');
      setorange('');
    }
  }
  return (
    <>
      <BrowserRouter>
        <Header colour={colour} toggle={toggle} color={color} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/dishes' element={<Dishes />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/menu' element={<Menu />} />
          <Route exact path='/order' element={<Order />} />
        </Routes>
        <Footer orange={orange}/>
        <Loader/>
      </BrowserRouter>
    </>
  );
}

export default App;
