import React, {useState, useEffect} from "react";
import TinderCard from "react-tinder-card";
import '../styles/css/TinderCards.css';
import axios from "../axios";

const TinderCards = () => {
    const [people, setPeople] = useState([]);
    //this is the typical pattern to fetch data from a database
    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/tinder/cards');
            setPeople(req.data);
        }
         fetchData();
    });
    

    const swiped = (direction, nameToDelete) => {
        console.log("removing : ", nameToDelete);
        // setLastDirection(direction)
    }


    const outOfFrame = (name) => {
        console.log(name + ' left the screen');
    }

    return (
        <div className='tinder_cards'>
            <div className='tinderCards_cardContainer'>
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div className={'card'} style={{backgroundImage: 'url(' + person.imgUrl + ')'}}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
};

export default TinderCards;
