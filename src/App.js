import Animation from './Animation';
import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { sendPush } from './SendPush';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Animation/>
        <Button variant="info" onClick={sendPush}>Trigger Push Notification</Button>{' '}
      </header>
    </div>
  );
}

export default App;
