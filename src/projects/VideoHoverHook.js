// import { useState, useRef } from 'react';

// const videoRefHook = () => {
//     const [ isHovered, setIsHovered ] = useState( false );
//     const videoRef = useRef( null );

//     const mouseEnter = () => {
//         setIsHovered( true );
//         if ( videoRef.current ) {
//             videoRef.current.play();
//         }
//     };

//     const mouseLeave = () => {
//         setIsHovered( false );
//         if ( videoRef.current ) {
//             videoRef.current.pause();
//         }
//     };

//     return {
//         videoRef,
//         isHovered,
//         mouseEnter,
//         mouseLeave,
//     };
// };

// export default videoRefHook;