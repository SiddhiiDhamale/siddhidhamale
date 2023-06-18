// import logo from './logo.svg';
import './App.css';
import ReactTypingEffect from 'react-typing-effect';
import { Card} from 'semantic-ui-react'
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import React,{Component} from 'react';



// import {center} from "./assets/center.png";
// import {yellowcircle} from "./assets/Ellipse1.png";
// import {Ellipse2} from "./assets/Ellipse2.png";
// import {} from "src/assets";
// import {} from "src/assets";
// import {} from "src/assets";
// import {} from "src/assets";
// import {} from "src/assets";
// import {} from "src/assets";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = 
"https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


class App extends Component {

  constructor(props){
 
 super(props)
    this.state={
  showmsg:false,
  swapimg:false
  }
}

handlesubmitclickArrow=(props)=> {

 
this.setState({showmsg:!this.state.showmsg,swapimg:true});
// props.preventDefault();
}



render(){

  return (
    <div className="App">

   <div className="Home">
  
      <p className="Home_intro">

      <ReactTypingEffect
        text={["My name is Siddhi Dhamale.","I am a Analyst at Deloitte."]}
        speed={100}
      />
      
       <br/>
       <br/>
       I am passionate about learning new things, <br/>
       experimenting with new technologies, <br/>
       and sharing my knowledge with others. </p>

    

      <a className="resumeLink"href={require('./assets/SiddhiDhamale.pdf')}><button className="resume">My Resume</button></a>
      <div>
      
      <img onClick={this.handlesubmitclickArrow} className='arrow'src={require('./assets/arrow-down.png')} alt=""></img>
      { this.state.showmsg===true ?
      
      <div className='Home_imgs'>
      <div class='yellowCircle_container'>
      <img className='yellowCircle' src={require('./assets/Ellipse1.png')} alt="image"></img>
      </div>
      <img className='whitecircle' src={require('./assets/Ellipse2.png')} alt=""></img>
      <img className='center'src={require('./assets/center.png')} alt=""></img>

      <img className='webdev' src={require('./assets/app.jpeg')} alt=""></img>
      <img className='flutter' src={require('./assets/flutter_img.png')} alt=""></img>
      <img className='aws'src={require('./assets/amazon_s.png')} alt=""></img>
      <img className='postman'src={require('./assets/postman.jpeg')} alt=""></img>
      <img className='react'src={require('./assets/React-icon.png')} alt=""></img>
      </div>

      :   <div className='Home_imgs'>
      <img className='yellowCircle' src={require('./assets/Ellipse1.png')} alt=""></img>
      <img className='whitecircle' src={require('./assets/Ellipse2.png')} alt=""></img>
      <img className='center'src={require('./assets/center.png')} alt=""></img>

      <img className='java' src={require('./assets/java.png')} alt=""></img>
      <img className='scifi' src={require('./assets/programmer.png')} alt=""></img>
      <img className='programmer'src={require('./assets/sci-fi.png')} alt=""></img>
      <img className='git'src={require('./assets/th.jpeg')} alt=""></img>
      <img className='html'src={require('./assets/html element.png')} alt=""></img>
      </div>
    
      

      }
      </div>
     </div>    
    
    <div className="Projects">
      <h4 className="Title" >Projects</h4>
      <div className="Projects_cardView">
      <Card.Group stackable className='Cards'>
        <Card>
      <Card.Content>
      <Card.Header>Research Paper : Recognition of realtime Indian sign language gestures
for Cafeteria</Card.Header>
<br></br>
      <Card.Meta>
        <span>The model is developed to recognize real-time hand gestures by using LSTM network<br></br> trained on a customized dataset
for the cafeteria with an accuracy of up to 85%.<br></br> The model can be useful for the hearing impaired <br></br>who interact with
guests to provide food services.</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
    <a href="https://drive.google.com/file/d/1QXH79sr7KOkqyje8ADfTTfT6Qzft5sSC/view">LINK</a>
    </Card.Content>
  </Card>
  <Card>
      <Card.Content>
      <Card.Header>Chat App</Card.Header>
      <br></br>
      <Card.Meta>
        <span>Build Using Firebase and flutter.<br></br>
          Supports features like  sigin, signup, change password, search users. </span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
    <a href="https://github.com/SiddhiiDhamale/chatapplication">LINK</a>
    </Card.Content>
  </Card>
  <Card>
      <Card.Content>
      <Card.Header>Deployed a Web App over GCP</Card.Header>
      <br></br>
      <Card.Meta>
        <span>Deployed a simple Web App made with wordpress.<br/>
         </span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
    <a href="https://drive.google.com/file/d/1-ZXZlVLMsA1hq6oerWE2Ze3-6mB18AHB/view">LINK</a>
    </Card.Content>
  </Card>
  <Card>
      <Card.Content>
      <Card.Header>Chat Bot, Using Python</Card.Header>
      <br></br>
      <Card.Meta>
        <span>This is a pyBot build using python gives response based on pattern matching technique and pre processes the data using nltk library and GUI is made using python library named tkinter.<br></br>
          </span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
        <a href="https://github.com/SiddhiiDhamale/">LINK</a>
    </Card.Content>
  </Card>

  </Card.Group>
      </div>
    </div>

    <div className="Contact">
    <h4 className="Title" >Contact</h4>
    <div className="Contact_logo">
     <a href="http://"> <FiInstagram className='Contact_logo1'/>
     </a>
     <a href="https://www.linkedin.com/in/siddhi-dhamale-4b156a1b2/">  <FiLinkedin className='Contact_logo1'/> </a>
     <a href="https://github.com/SiddhiiDhamale"> <FiGithub className='Contact_logo1'/> </a>
    {/* <img src={linkedin} alt=""></img>
    <img src={insta}></img>
    <img src={th}></img> */}

    </div>
    </div>

    </div>

  );
}

}

export default App;
