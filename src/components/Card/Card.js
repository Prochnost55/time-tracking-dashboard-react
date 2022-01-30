import React from 'react';
const Card = (props) => {
    const {title, hours, format, lastData, color, imgSrc} = props;
    return (
        <div className='card' style={{backgroundColor: color}}>
            <div className='card-icon'>
                <img src={imgSrc} alt='icon'/>
            </div>
            <div className='main-body'>
                <div className='card-header'>
                    <div className='card-header-title'>
                        <span>{title}</span>
                        <span> 
                            <img style={{width: '14px', cursor: 'pointer'}} src='./images/icon-ellipsis.svg' alt='icon'/>
                        </span>
                    </div>
                </div>
                <div className='card-body-mobile'>
                    <div className='card-body'>
                        <div className='card-body-content'>
                            {hours}
                        </div>
                    </div>
                    <div className='card-footer'>
                        <span>Last {format} - {lastData}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;