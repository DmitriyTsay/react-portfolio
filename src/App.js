
import './App.scss';

// Container components 
import Header from './container/Header/Header';
import About from './container/About/About';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './container/Portfolio/Portfolio';
import Contacts from './container/Contacts/Contacts';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <div className='divider' />
      <About />
      <div className='divider' />
      <Portfolio />
      <div className='divider' />
      <Contacts />
      <div className='divider' />
    </div>
  );
}

export default App;
