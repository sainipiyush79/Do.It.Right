import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';


function MainSection(){
    return (
        <div className = 'hero-container'>
            <video src = '/videos/video-1.mp4' autoPlay loop muted />
           
            <h1 className = 'header'> DO THINGS, THE WAY THEY SHOULD BE DONE</h1>
            
            <p> Why wait to start a healthy life?</p>
            <div className = 'hero-btns'>
                <Button className = 'btns'
                 buttonStyle = 'btn--outline'
                 buttonSize = 'btn--large'> 
                 START TODAY
                 </Button>

                 <Button className = 'btns'
                 buttonStyle = 'btn--primary'
                 buttonSize = 'btn--large'> 
                 WHY DO IT < i className = 'far fa-play-circle'/>
                 </Button>

            </div>

        </div>
    )
}

export default MainSection; 