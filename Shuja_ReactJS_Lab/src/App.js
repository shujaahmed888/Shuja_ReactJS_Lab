import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ExpListing from './ExpListing';
import ExpCreate from './ExpCreate';
import ExpViewExp from './ExpViewExp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ExpListing />}></Route>
          <Route path='/expense/create' element={<ExpCreate />}></Route>
          <Route path='/expense/view' element={<ExpViewExp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
