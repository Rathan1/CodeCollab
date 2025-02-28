import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import {Routes,Route} from 'react-router-dom';
import EditorPage from './component/EditorPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Toaster} from 'react-hot-toast'
function App() {
  return (
    <>
    <Toaster position='Top-center'></Toaster>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/editor/:roomId' element={<EditorPage/>} />
    </Routes>
    </>
  );
}

export default App;
