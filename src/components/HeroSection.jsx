// * import assets
import emailImage from '../assets/image/email.svg'
import linkedinImage from '../assets/image/linkedin.svg'
import githubImage from '../assets/image/github.svg'
import heroAnimation from '../assets/animation/astronot.webm'

const HeroSection = () => {
    return (
        <>
            <div className="hero-section my-5 grid grid-cols-1 gap-11 md:grid-cols-2 md:my-16 lg:my-0 lg:gap-0 place-items-center" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500">
                {/* hero image */}
                <div className="left">
                    <video playsInline autoPlay muted loop>
                        <source src={heroAnimation} type='video/webm' />
                    </video>
                </div>

                {/* intro */}
                <div className="right">
                    <div className="greeting">
                        <p className='text-primary font-semibold lg:font-semibold text-lg text-md xl:text-2xl font-Kanit tracking-wide lg:tracking-wider'>Hello, Im Reza Irfan Wijaya</p>
                    </div>
                    <div className="role">
                        <p className='text-white font-bold text-4xl lg:text-5xl xl:text-7xl font-Kanit'>Web Developer</p>
                    </div>
                    <div className="intro text-white-mute text-md my-5 leading-7 lg:my-6">
                        <p>Hello, I am an informatic engineering student who has an interest in website development. For now I'm focusing on learning fullstack with Reacjs technology as the frontend and Golang as the backend.</p>
                    </div>

                    {/* email dan sosmed */}
                    <div className="link-to-socmed flex gap-6 lg:gap-12 items-center">
                        {/* email */}
                        <div className="email-me grid">
                            <a href="mailto: rezairfanwijaya23@gmail.com" className='hover:no-underline flex justify-between gap-1 items-center bg-primary px-5 py-3 rounded-sm hover:bg-primary-hover' target={'blank'}>
                                <div className="icon">
                                    <img src={emailImage} alt="eamil-icon" className='h-4' />
                                </div>
                                <div className="placeholder text-white text-sm font-semibold">
                                    Email Me
                                </div>
                            </a>
                        </div>
                        {/* sosmed */}
                        <div className="socmed flex gap-5 lg:gap-12">
                            <div className="linkedin">
                                <a href="https://www.linkedin.com/in/rezairfanwijaya/" target="_blank">
                                    <img src={linkedinImage} alt="linkedin-icon" className='h-7' />
                                </a>
                            </div>
                            <div className="github">
                                <a href="https://github.com/rezairfanwijaya" target="_blank">
                                    <img src={githubImage} alt="github-icon" className='h-7' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;