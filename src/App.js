// import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello";
import MyClass from "./components/MyClass";
import Name from "./components/Name";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

    function clicked(){
        alert("Clicked button as props")
    }
  return (
    <div className="container">
        <Name></Name>
    </div>

  );
}

export default App;
