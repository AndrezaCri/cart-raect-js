import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from './layouts/Header'; 
import { Footer } from './layouts/Footer'; 
import { Home } from './views/Home';
import { DataProvider } from './componets/DataContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <DataProvider>
        <Home />
      </DataProvider>
        <Routes>
          <Route exact path='/' component={<Home />} />
          <Route exact path='/home' component={<Home />} />
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
    
  );
}
export default App;
