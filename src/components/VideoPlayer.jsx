// src/components/CustomVideo.jsx

import BrowserOnly from "@docusaurus/BrowserOnly";
import React from 'react';

const VideoPlayer = ({ src }) => {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Plyr = require('plyr-react').default;
                require("./plyr.css");
                require("./plyr.custom.css");

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
                };

                return (
                    <div>
                        <Plyr {...plyrProps} />
                    </div>
                );
            }}
        </BrowserOnly>
    );
};

export default VideoPlayer;
