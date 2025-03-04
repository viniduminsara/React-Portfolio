import loadingGif from "../assets/img/logo_animated.gif"

const Loading = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-[#08020F] '>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <img src={loadingGif} alt="laoding image" className='w-64 h-64'/>
            </div>
        </div>
    )
}

export default Loading;
