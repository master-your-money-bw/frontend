import React, { useState, useEffect } from 'react';
import wizard from '../assets/wizard.gif';
import sherlock from '../assets/sherlock.gif';

const OnTrack = () => {    
    const [image, setImage] = useState('')
    const [color, setColor] = useState({})

    const score = 49;

    useEffect(() => {
        if (score > 70) {
            setImage(wizard)
            setColor({ color: "green" })
        } else if (score > 50) {
            setImage(sherlock)
            setColor({ color: "orange" })
        } else {
            setColor({ color: "red" })
        }
    }, [score])

    return (
        <div className="col s6 offset-s1 card">
            <div className="card-content">
                <h4 className="card-title">Here's your score: <span style={color}>{score}</span></h4>
                <p>*According to how much you spent*</p>
                {score > 50 && <img src={image} width="498px" alt="You're a wizard"/>}
                {score < 50 && (
                    <div class="video-container">
                        <iframe title="this" width="853" height="480" src="https://www.youtube.com/embed/qmsF3xbqnR8?autoplay=1" frameborder="0" allowfullscreen></iframe>
                    </div>
                )}
            </div>
        </div>
    )
}

export default OnTrack;