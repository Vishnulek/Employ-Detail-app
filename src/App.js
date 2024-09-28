import logo from './logo.svg';
import './App.css';
import AddEmploy from './components/AddEmploy';
import SearchEmploy from './components/SearchEmploy';
import DeleteEmploy from './components/DeleteEmploy';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<AddEmploy/>}/>
  <Route path='/search' element={<SearchEmploy/>}/>
  <Route path='/delete' element={<DeleteEmploy/>}/>
  <Route path='/viewall' element={<Viewall/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
