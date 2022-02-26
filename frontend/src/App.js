import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import ViewReviews from './components/ViewReviews'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="/" exact element={<Landing/>} />
            <Route path="/viewreviews" exact element={<ViewReviews/>} />
          </Routes>
          
        </header>
      </div>
    </Router>
  );
}

export default App;
