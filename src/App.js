import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Nav from './components/nav'
import EditableLay1 from './components/editable'
import EditableLay2 from './components/editableTwo'


const App = () => {
  return(
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
      <Route path='/layout1' element={<EditableLay1></EditableLay1>}></Route>
      <Route path='/layout2' element={<EditableLay2></EditableLay2>}></Route>
    </Routes>
    </BrowserRouter>
  )
};

export default App;


/* .featureCard img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 20px;
  } */
  
