import { useState } from "react"
import video from "../data/video.js";
import Comments from './Comments';
import CommentToggle from './CommentToggle';
import Votes from "./Votes";
import Header from "./Header";

function App() {
  console.log("Here's your data:", video);

  //STATE FOR VOTES
  const [upVotes, setUpVotes] = useState(video.upvotes)
  function handleUpClick(){
    setUpVotes(() => upVotes + 1)
  }
  
  const [downVotes, setDownVotes] = useState(video.downvotes)
  function handleDownClick(){
    setDownVotes(() => downVotes - 1)
  }

  //STATE FOR COMMENTS & COMMENT TOGGLE
  const [isHidden, setIsHidden] = useState(true);
  function handleIsHiddenClick(){
      setIsHidden(!isHidden)
  }


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header title={video.title} views={video.views} dateCreated={video.createdAt}/>
      <Votes upVotes={upVotes} handleUpClick={handleUpClick} downVotes={downVotes} handleDownClick={handleDownClick}/>
      <CommentToggle isHidden={isHidden} handleClick={handleIsHiddenClick} />
      <Comments comments={video.comments} isHidden={isHidden}/>
    </div>
  );
}

export default App;
