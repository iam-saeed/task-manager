import './App.css';
import Post from './Post';


function App() {
  return (
    <div className="App">
     
     {/* using classname with bem convention */}
     <div className="app__header">
       <img 
       className="app__headerImage"
       src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
       alt=""
       />
     </div> 
      <Post />
      {/* Posts */}
      {/* Posts */}


    </div>
  );
}

export default App;