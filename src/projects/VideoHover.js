import React from 'react';
import VideoHoverHook from './VideoHoverHook';

const VideoHover = ( { videoSrc } ) => {
    const { videoHover, mouseEnter, mouseLeave } = VideoHoverHook();

    return (
        <section 
        onMouseEnter={ mouseEnter } 
        onMouseLeave={ mouseLeave } 
        >
            <video 
                ref={ videoHover } 
                src={ videoSrc } 
                muted 
                loop 
            />
        </section>
    );
};

export default VideoHover;