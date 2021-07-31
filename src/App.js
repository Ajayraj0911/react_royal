import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Footer}  from './MyComponents/Footer';
import { Employee } from './MyComponents/Employee';

function App() {
   
  return (
    <>
      <Header title = "Employee Management" searchBar = {true}/>
      <Employee/>
      <Footer/>
    </>
  );
}

export default App;
