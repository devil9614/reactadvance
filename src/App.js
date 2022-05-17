import './App.css';
import TypeComment from './Components/TypeComment';
import RenderComments from './Components/RenderComments';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ErrorBoundary } from './Features/Utils/ErrorBoundary';

function App() {

  return (
    <div className="App">
      <ErrorBoundary>
        <div style = {{display:"flex",alignContent:"center",alignItems:"center",gap:10,padding:20}}>
        <a href = "/">Home</a>
        <a href = "/post">Post</a>
      </div>
      </ErrorBoundary>
      
      <Router>
        
        <Routes>
          <Route path = "/" element = {<><span>Comments are rendered here!!</span><RenderComments/></>} default/>
          <Route path = '/post' element = {<><TypeComment/></>}/>
        </Routes>
      </Router>
      
      
      {/* <CommentProvider>
        <CommentsContext/>
      </CommentProvider> */}
    </div>
  );
}

export default App;
