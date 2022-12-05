import './App.css';
import {Routes, Route} from 'react-router-dom'
import SubscriberPage from './Pages/SubscriberPage';
import ThankYouPage from './Pages/ThankYouPage';

function App() {
  return (<>
  <Routes>
    <Route path='/' element={<SubscriberPage/>}/> 
    <Route path='/thankYou' element={<ThankYouPage/>} />
  </Routes>
  </>
  );
}

export default App;
