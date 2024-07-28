import { useState, useRef } from 'react';

const VideoHoverHook = () => {
    const [ isHovered, setIsHovered ] = useState( false );
    const videoHover = useRef( null );

    const mouseEnter = () => {
        setIsHovered( true );
        if ( videoHover.current ) {
            videoHover.current.play();
        }
    };

    const mouseLeave = () => {
        setIsHovered( false );
        if ( videoHover.current ) {
            videoHover.current.pause();
        }
    };

    return {
        videoHover,
        isHovered,
        mouseEnter,
        mouseLeave,
    };
};

export default VideoHoverHook;