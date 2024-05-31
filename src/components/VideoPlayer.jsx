// src/components/CustomVideo.jsx

import Plyr from "plyr-react";
import "./plyr.css";
import "./plyr.custom.css";

import React, { useRef } from 'react';


const VideoPlayer = ({ src }) => {
    const videoRef = useRef(null);

    const plyrProps = {
        source: {
            type: "video",
            sources: [
                {
                    src,
                    provider: "html5",
                },
            ],
        },
        options: {
            controls: ["play-large", "progress", "current-time"],
            autoplay: true,
            resetOnEnd: true
        }
    }

    return (
        <div>
            <Plyr {...plyrProps} />
        </div>
    );
};

export default VideoPlayer;
