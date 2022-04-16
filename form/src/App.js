import './App.css';
import Form from './pages/registerForm';
import { RegisterProvider } from './contexts/IsRegister';
import { ModeProvider } from './contexts/Mode';

function App() {

  return (
    <ModeProvider>
      <div className="App">
        <RegisterProvider>
          <Form />
        </RegisterProvider>
      </div>
    </ModeProvider>
  );
}

export default App;
