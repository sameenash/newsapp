import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News  from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import Spinner from './Components/Spinner';
import LoadingBar from 'react-top-loading-bar';

export class App extends Component {
   //apiKey=process.env.REACT_APP_NEWS_API;
 apiKey="5d67cb8f099545aeac77e582daaeaef1";
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
         <Router>
       <NavBar/>
       <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        />
<Routes>
  <Route exact path="/" element={<News setProgress={this.setProgress} key="general"  apiKey={this.apiKey}pageSize={5} country='us' category='general'/>}/>
  <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" apiKey={this.apiKey} pageSize={5} country='us'category='business'/>}/>
<Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" apiKey={this.apiKey} pageSize={5} country='us'category='entertainment'/>}/>
<Route exact path="/general" element={<News setProgress={this.setProgress} key="general"  apiKey={this.apiKey}pageSize={5} country='us'category='general'/>}/>
<Route exact path="/health" element={<News setProgress={this.setProgress} key="health" apiKey={this.apiKey} pageSize={5} country='us'category='health'/>}/>
<Route exact path="/science" element={<News setProgress={this.setProgress} key="sceince" apiKey={this.apiKey} pageSize={5} country='us'category='science'/>}/>
<Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" apiKey={this.apiKey} pageSize={5} country='us'category='sports'/>}/>
<Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" apiKey={this.apiKey} pageSize={5} country='us'category='technology'/>}/>
</Routes>   
    </Router>
      </div>
    )
  }
}

export default App
