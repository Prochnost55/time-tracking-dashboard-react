import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard';
import Card from './components/Card/Card';

const format = 'Week';
const cards = [
    {
        title: 'Work',
        hours: '32hrs',
        lastData: '36hrs',
        color: 'hsl(15, 100%, 70%)',
        imgSrc: './images/icon-work.svg',
    },
    {
        title: "Play",
        hours: '32hrs',
        lastData: '36hrs',
        color: 'hsl(195, 74%, 62%)',
        imgSrc: './images/icon-play.svg',
    },
    {
        title: 'Study',
        hours: '32hrs',
        lastData: '36hrs',
        color: 'hsl(348, 100%, 68%)',
        imgSrc: './images/icon-study.svg',
    },
    {
        title: 'Exercise',
        hours: '32hrs',
        lastData: '36hrs',
        color: 'hsl(145, 58%, 55%)',
        imgSrc: './images/icon-exercise.svg',
    },
    {
        title: 'Social',
        hours: '32hrs',
        lastData: '36hrs',
        color: 'hsl(264, 64%, 52%)',
        imgSrc: './images/icon-social.svg',
    },
    {
        title: 'Self Care',
        hours: '32hrs',
        lastData: '36hrs',
        color: 'hsl(43, 84%, 65%)',
        imgSrc: './images/icon-self-care.svg',
    },
]
function App() {
    return (
        <div className='container'>
            <div className='main'>
                <ProfileCard imageSrc="./images/image-jeremy.png" name={"Jeremy Robson"} />
                {cards.map((card, index) =>
                    <Card key={index} {...card} format={format} />
                )
                }
            </div>
        </div>
    );
}

export default App;
