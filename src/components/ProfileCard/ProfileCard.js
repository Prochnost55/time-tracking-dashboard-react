import React from 'react';
import { TIME_FRAMES } from '../../utils/constant';

const ProfileCard = (props) => {
    const {imageSrc, name, setTimeFrame, timeFrame } = props;
    return(
        <div className='profile-card'>
            <div className='profile-card-body'>
                <div className='image-container'>
                    <img src={imageSrc} alt='profile'/>
                </div>
                <div className="profile-card-body-content">
                    <span className='profile-card-for'>Report for</span><br />
                    <span className='profile-name'>{name}</span>
                </div>
            </div>
            <div className='profile-card-footer'>
                <ul>
                    {Object.values(TIME_FRAMES).map(
                        (tf, i) => 
                            <li 
                                key={tf} 
                                className={tf === timeFrame ? 'active' : ''}
                                onClick={() => setTimeFrame(tf)}
                            > 
                                {tf} 
                            </li> 
                    )}
                </ul>
            </div>
        </div>
    )
}
export default ProfileCard;