import './App.css';
import CICSlideshow from './components/CICSlideshow/CICSlideshow';
import ContactsBar from './layout/ContactsBar';
import Header from './layout/Header';

function App() {
  return (
    <>
      <ContactsBar />
      <Header />
      <CICSlideshow />
    </>
  );
}

export default App;
