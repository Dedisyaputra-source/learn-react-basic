import './App.css';
import Navbar from './components/Navbar';
import React, {useState} from 'react';
import Mybutton from './components/MyButton';
import MainContent from './components/MainContent';


const App = () => {
  const [getNavbarValue, setNavbarValue] = useState('');
  const navBarTerbaru= 'Blog';
  const changeNavValue= () => {
    setNavbarValue('Learn react');
  };
  // const listNama = ['robin', 'rohana', 'jaja'];
  const identitas = {
      nama: 'alexander',
      asal: 'jakarta',
      pekerjaan: 'codingers',
      umur: 28,
  };
  // destructuring object
  const {nama, asal, pekerjaan, umur} = identitas;

  return (
    <div>
      <Navbar newNavbar= {navBarTerbaru} navValue={getNavbarValue}/>
      <MainContent  nama={nama} asal={asal} pekerjaan={pekerjaan} umur={umur} getNavbarValue={getNavbarValue} />
      <Mybutton clicked={changeNavValue}/>
    </div>
  );
}

export default App;
