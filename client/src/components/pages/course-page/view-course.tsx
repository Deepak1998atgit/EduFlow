import { FaIcons, FaPause, FaPlay } from "react-icons/fa";
import { useRef, useState } from "react";

const ViewCourseStudent: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);


    const handlePlayandPauseOnVideo = () => {
        if (isPlaying) {
            videoRef?.current?.play()
        } else {
            videoRef?.current?.pause();
        }
        setIsPlaying(!isPlaying);
    }
    return (
        <main className="w-full">
            <section className="w-full flex flex-row bg-[#fdfdfd] h-72 gap-2">
                <div className="w-1/2 h-full relative">
                    <h3 className="h3 absolute left-0 top-0">React - The Complete Guide 2024 (incl. Next.js, Redux)</h3>
                    <div className=" absolute text-right right-0 bottom-0 text-black">
                        <p>Duraton:25 Min</p>
                        <p>Language:English</p>
                    </div>
                </div>
                <aside className="w-1/2 pt-24">
                    <figure className="relative ">
                        <video ref={videoRef} controls className="w-96" >
                            <source src="https://videocdn.cdnpk.net/videos/cebe11b1-e085-4f12-9374-3fe8f8d95501/horizontal/previews/videvo_watermarked/large.mp4" type="video/mp4" />
                            Your Browser does not support the Video
                        </video>
                        <div className="absolute top-20  left-28  flex flex-col items-center justify-center">
                            <button onClick={handlePlayandPauseOnVideo} className="h-14 w-14  bg-white text-black flex items-center justify-center rounded-full">
                                <i>
                                    <FaPlay />
                                </i>
                            </button>
                            <p className="text-white font-bold">Preview This Course</p>
                        </div>
                        <div className="h-36 relative shadow-md border border-[#D6EFD8] pt-5 bg-[#fdfdfd] w-96">
                            <div className="ml-2 text-base  font-thin  leading-9">
                                <p>Creator: Ana James</p>
                                <p>Published on:21/7/2024</p>
                            </div>
                            <button className="bg-[#D6EFD8] h-10  absolute bottom-0 left-24 w-48"><span className="text-sm font-light">ENROLL NOW</span></button>
                        </div>
                    </figure>
                </aside>
            </section>

        </main>
    )
}


export default ViewCourseStudent;