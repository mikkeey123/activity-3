import './App.css';
import Login from './components/Login/Login';

function App() {

    const correctUser = 'mike'
    const correctPass = '1234'
  return (
    <div>
      <Login Correctusername={correctUser} Correctpassword={correctPass}/>
    </div>
  );
}

export default App;
