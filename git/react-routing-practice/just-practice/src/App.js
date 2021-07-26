import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

function Home(props){
  return <h1>Home Components</h1>
}
function About(props){
  return <h1>About Components</h1>
}
function Contact(props){
  return <h1>Contact Components</h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
    <Link to ='/home'>Home</Link>
    <Link to ='/about'>About</Link>
    <Link to ='/contact'>Contact</Link>

    <Route path='/about' component={About} />
    <Route path='/home' component={Home} />
    <Route path='/contact' component={Contact} />
    </Router>
      </header>
    </div>
  );
}

export default App;
