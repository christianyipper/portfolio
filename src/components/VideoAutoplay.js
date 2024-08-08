const VideoAutoplay = ( { name, videoName, animation, link } ) => {

    return (
        <div className={ `${ name } ${ animation }` }>
            <video loop autoPlay muted className={ videoName }>
                <source src={ link }/>
            </video>
        </div>
    );
};

export default VideoAutoplay;