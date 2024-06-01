import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routing from './routes/Routing';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routing/>
      <Footer/>
    </div>
  );
};

export default App;