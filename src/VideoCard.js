import { Avatar } from '@material-ui/core'
import React from 'react'

import "./videocard.css"



function VideoCard({ image, channelImage, title, channel, views, timestamp}) {
    return (
        <div className="videocard">
            <img className="videocard__thumbnail" src={image} alt="" />
            <div className="videocard__info">
                <Avatar 
                className="videocard_avatar" 
                alt={channel} 
                src={channelImage}
                />
                <div className="videocard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard ;
