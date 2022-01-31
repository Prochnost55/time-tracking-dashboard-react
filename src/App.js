import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard';
import Card from './components/Card/Card';
import React from 'react';
import { TIME_FRAMES, CARDS } from './utils/constant';
import data from './data/data';

function App() {
    const [timeFrame, setTimeFrame] = React.useState('');
    React.useEffect(() => {
        setTimeFrame(TIME_FRAMES.WEEKLY);
    }, [])
    return (
        <div className='container'>
            <div className='main'>
                <ProfileCard
                    imageSrc={data.imageSrc}
                    name={data.name}
                    timeFrame={timeFrame}
                    setTimeFrame={setTimeFrame}
                />
                {CARDS.map((card, index) => {
                    let info = data.data.find(item => item.title === card.title);
                    return (
                        <Card
                            key={index}
                            {...card}
                            timeFrame={timeFrame}
                            hours={timeFrame && info.timeframes[timeFrame.toLowerCase()].current}
                            lastData={timeFrame && info.timeframes[timeFrame.toLowerCase()].previous}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default App;
