import herosectionImage from '../assets/image/herroSection.png'
import emailImage from '../assets/image/email.svg'
import linkedinImage from '../assets/image/linkedin.svg'
import githubImage from '../assets/image/github.svg'

const HeroSection = () => {
    return (
        <>
            <div className="hero-section my-5 grid grid-cols-1 gap-11 md:grid-cols-2 md:my-16 lg:gap-0">
                {/* hero image */}
                <div className="left">
                    <img src={herosectionImage} alt="hero-image" className='md:h-96 lg:h-max lg:ml-8' />
                </div>

                {/* intro */}
                <div className="right">
                    <div className="greeting">
                        <p className='text-[#8D63E1] font-bold text-md lg:text-xl'>Hello, Im Reza Irfan Wijaya</p>
                    </div>
                    <div className="role">
                        <p className='text-white font-black text-4xl lg:text-7xl'>Web Developer</p>
                    </div>
                    <div className="intro text-[#C0C0C0] text-md my-5 leading-7 lg:my-6">
                        <p>Hello, I am an informatic engineering student who has an interest in website development. For now I'm focusing on learning fullstack with Reacjs technology as the frontend and Golang as the backend.</p>
                    </div>

                    {/* email dan sosmed */}
                    <div className="link-to-socmed flex gap-5 items-center">
                        {/* email */}
                        <div className="email-me grid">
                            <a href="mailto: rezairfanwijaya23@gmail.com" className='flex justify-between gap-1 items-center bg-[#6741B5] px-5 py-3 rounded-sm hover:bg-[#482A83]' target={'blank'}>
                                <div className="icon">
                                    <img src={emailImage} alt="eamil-icon" className='h-4' />
                                </div>
                                <div className="placeholder text-white text-sm font-semibold">
                                    Email Me
                                </div>
                            </a>
                        </div>
                        {/* sosmed */}
                        <div className="socmed flex gap-5">
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