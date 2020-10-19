import React from "react";
import "./channelrow.css";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlined";

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channelrow">
      <Avatar className="channelrow__logo" alt={channel} src={image} />
      <div className="channelrow__text">
        <h4>
          {channel}
          {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscriber . {noOfVideos} videos
        </p>
        <p> {description} </p>
      </div>
    </div>
  );
}

export default ChannelRow;
