import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/author_logo.jpg';
import Title from './Title.js';

class App extends Component{
    state = {displayBio: false};

    toggleDisplayBio = () =>{
        this.setState({displayBio: !this.state.displayBio});
    }

    render(){
        return(
            <div>  
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello</h1>
                <p>My name is Feyra.</p>
                <Title />
                <p>placeholder</p>
                { 
                    this.state.displayBio ? ( 
                    <div>
                    <p>place holder for bio</p>
                    <p>place holder for bio</p>
                    <p>place holder for bio</p>
                    <button onClick={this.toggleDisplayBio}>Show Less</button>
                    </div>) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;