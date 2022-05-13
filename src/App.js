import './App.css';
import TypeComment from './Components/TypeComment';
import RenderComments from './Components/RenderComments';
import CommentProvider from './Context/Comment'
import CommentsContext from './Components/CommentsContext';

function App() {
  return (
    <div className="App">
      <TypeComment/>
      <span>Comments are rendered here!!</span>
      <RenderComments/>
      <CommentProvider>
        <CommentsContext/>
      </CommentProvider>
    </div>
  );
}

export default App;
