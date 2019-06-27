import React, { useState, useEffect } from 'react';
import wizard from '../assets/wizard.gif';
import sherlock from '../assets/sherlock.gif';

const score = 46;
let image;
let color;
if (score > 70) {
    image = wizard;
    color = { color: "green" }
} else if (score > 50) {
    image = sherlock;
    color = { color: "orange" }
} else {
    color = { color: "red" }
}

const OnTrack = () => {    
    return (
        <div className="col s6 offset-s1 card medium">
            <div className="card-content">
                <h4 className="card-title">Here's your score: <span style={color}>{score}</span></h4>
                <p>*According to how much you spent*</p>
                {score > 50 && <img src={image} width="498px" alt="You're a wizard"/>}
                {score < 50 && (
                    <div class="video-container">
                        <iframe width="853" height="480" src="https://www.youtube.com/embed/qmsF3xbqnR8?autoplay=1" frameborder="0" allowfullscreen></iframe>
                    </div>
                )}
            </div>
        </div>
    )
}

export default OnTrack;