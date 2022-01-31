import React from 'react';
import { TIMEFRAME_FORMAT_MAP } from '../../utils/constant';

const Card = (props) => {
    const {title, hours, timeFrame, lastData, color, imgSrc} = props;
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
                            {hours} hrs
                        </div>
                    </div>
                    <div className='card-footer'>
                        <span>Last {TIMEFRAME_FORMAT_MAP[timeFrame]} - {lastData} hrs</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;