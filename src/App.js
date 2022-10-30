import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SearchPage from './components/searchPage/SearchPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


//BEM
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/search" element={<SearchPage/>}/>
          </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
