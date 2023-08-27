import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChatProvider from './Context/ChatProvider';
import Chatpage from './Pages/Chatpage';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <ChatProvider>
    <div className="App">
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='chats' element={<Chatpage/>}/>
    </Routes>
    </div>
    </ChatProvider>
  );
}

export default App;
