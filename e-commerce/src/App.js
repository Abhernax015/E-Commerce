import './index.css';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import HomePage from './customer/Pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';

function App() {
  return (
    <div className="">
      <Navigation/>

      <>
        <HomePage/>
      </>
      <Footer/>
    </div>
  );
}

export default App;
