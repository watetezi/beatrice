import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Summary from './summary';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/summary" element={<Summary />} />
       </Routes>
    </>
 );
};

export default App;
