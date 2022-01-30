import React from 'react';
const ProfileCard = (props) => {
    const {imageSrc, name } = props;
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
                    <li> Daily </li>
                    <li className="active"> Weekly </li>
                    <li> Monthly </li>
                </ul>
            </div>
        </div>
    )
}
export default ProfileCard;