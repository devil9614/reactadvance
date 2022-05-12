import logo from './logo.svg';
import './App.css';
import TypeComment from './Components/TypeComment';
import RenderComments from './Components/RenderComments';

function App() {
  return (
    <div className="App">
      <TypeComment/>
      <span>Comments are rendered here!!</span>
      <RenderComments/>
    </div>
  );
}

export default App;
