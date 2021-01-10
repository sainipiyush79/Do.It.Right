import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import './Cards.css';



function Cards() {
    return (
        <div className = 'cards'>
            <h1> Check out these FACTS to know how your body Functions! </h1>
            <div className = "cards__container">
                <div className = "cards__wrapper">
                    <ul className = "cards__items">
                        <CardItem 
                        src = "images/image-eat.jpg"
                        text ="Let's feed your body what it needs!"
                        label = "EAT"
                        path = "/EAT"
                        />
                        <CardItem 
                        src = "images/image-drink.jpg"
                        text ="Keeping the Fluids and Electrolytes Balance!"
                        label = "DRINK"
                        path = "/DRINK"
                        />
                        </ul>

                        <ul className = "cards__items">
                        <CardItem 
                        src = "images/image-sleep.jpg"
                        text ="Giving Enough time to Brain for the Memory Storage"
                        label = "SLEEP"
                        path = "/SLEEP"
                        />

                        <CardItem 
                        src = "images/image-study.jpg"
                        text ="Improve Muscle Memory in the Right Way"
                        label = "STUDY"
                        path = "/STUDY"
                        />

                    </ul>

                </div>
            </div>
        </div>
        )

    }

    export default Cards;