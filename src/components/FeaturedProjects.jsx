import snakeGame from '../assets/image/snakegame.png'
import jsLogo from '../assets/image/js.png'
import htmlLogo from '../assets/image/html.png'
import tailwindLogo from '../assets/image/tailwind.png'
import codeLogo from '../assets/image/code.png'
import demoLogo from '../assets/image/demo.png'

const FeaturedProjects = () => {
    return (<>
        <div className="featured-projects mt-14 lg:px-28 flex flex-col gap-7" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500">
            <div className="header">
                <div className="title">
                    <p className="text-white font-bold text-2xl">Featured Projects</p>
                </div>
                <div className="desc mt-1">
                    <p className="text-white-mute text-xs">Some examples of projects that I have worked on using Laravel, Reactjs and Golang technologies</p>
                </div>
            </div>

            <div className="projects flex flex-col gap-10">
                <div className="card">
                    <div className="left">
                        <img src={snakeGame} alt="snake-game" />
                    </div>
                    <div className="right my-3 flex flex-col gap-4">
                        <div className="projects-name">
                            <p className="text-white font-semibold -mb-1">Snake Game</p>
                            <p className="text-xs text-white-mute">Make simple snake game with javascript language</p>
                        </div>
                        <div className="projects-tech flex gap-3">
                            <img src={jsLogo} alt="" className="w-6 h-6" />
                            <img src={htmlLogo} alt="" className="w-6 h-6" />
                            <img src={tailwindLogo} alt="" className="w-6 h-6" />
                        </div>
                        <div className="button flex justify-between gap-6">
                            <a href="https://www.google.com/?hl=ID" target={'_blank'} className="w-1/2 hover:text-white hover:no-underline focus:text-white focus:no-underline rounded-sm text-white code-link bg-dark-card p-2 flex justify-center items-center gap-4">
                                <div className="text text-sm">code</div>
                                <div className="img">
                                    <img src={codeLogo} alt="code-logo" className="w-4"/>
                                </div>
                            </a>
                            <a href="https://www.google.com/?hl=ID" target={'_blank'} className="w-1/2 hover:text-white hover:no-underline focus:text-white focus:no-underline rounded-sm text-white code-link bg-dark-card p-2 flex justify-center items-center gap-4">
                                <div className="text text-sm">demo</div>
                                <div className="img">
                                    <img src={demoLogo} alt="code-logo" className="w-2"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="left">
                        <img src={snakeGame} alt="snake-game" />
                    </div>
                    <div className="right my-3 flex flex-col gap-4">
                        <div className="projects-name">
                            <p className="text-white font-semibold -mb-1">Snake Game</p>
                            <p className="text-xs text-white-mute">Make simple snake game with javascript language</p>
                        </div>
                        <div className="projects-tech flex gap-3">
                            <img src={jsLogo} alt="" className="w-6 h-6" />
                            <img src={htmlLogo} alt="" className="w-6 h-6" />
                            <img src={tailwindLogo} alt="" className="w-6 h-6" />
                        </div>
                        <div className="button flex justify-between gap-6">
                            <a href="https://www.google.com/?hl=ID" target={'_blank'} className="w-1/2 hover:text-white hover:no-underline focus:text-white focus:no-underline rounded-sm text-white code-link bg-dark-card p-2 flex justify-center items-center gap-4">
                                <div className="text text-sm">code</div>
                                <div className="img">
                                    <img src={codeLogo} alt="code-logo" className="w-4"/>
                                </div>
                            </a>
                            <a href="https://www.google.com/?hl=ID" target={'_blank'} className="w-1/2 hover:text-white hover:no-underline focus:text-white focus:no-underline rounded-sm text-white code-link bg-dark-card p-2 flex justify-center items-center gap-4">
                                <div className="text text-sm">demo</div>
                                <div className="img">
                                    <img src={demoLogo} alt="code-logo" className="w-2"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="left">
                        <img src={snakeGame} alt="snake-game" />
                    </div>
                    <div className="right my-3 flex flex-col gap-4">
                        <div className="projects-name">
                            <p className="text-white font-semibold -mb-1">Snake Game</p>
                            <p className="text-xs text-white-mute">Make simple snake game with javascript language</p>
                        </div>
                        <div className="projects-tech flex gap-3">
                            <img src={jsLogo} alt="" className="w-6 h-6" />
                            <img src={htmlLogo} alt="" className="w-6 h-6" />
                            <img src={tailwindLogo} alt="" className="w-6 h-6" />
                        </div>
                        <div className="button flex justify-between gap-6">
                            <a href="https://www.google.com/?hl=ID" target={'_blank'} className="w-1/2 hover:text-white hover:no-underline focus:text-white focus:no-underline rounded-sm text-white code-link bg-dark-card p-2 flex justify-center items-center gap-4">
                                <div className="text text-sm">code</div>
                                <div className="img">
                                    <img src={codeLogo} alt="code-logo" className="w-4"/>
                                </div>
                            </a>
                            <a href="https://www.google.com/?hl=ID" target={'_blank'} className="w-1/2 hover:text-white hover:no-underline focus:text-white focus:no-underline rounded-sm text-white code-link bg-dark-card p-2 flex justify-center items-center gap-4">
                                <div className="text text-sm">demo</div>
                                <div className="img">
                                    <img src={demoLogo} alt="code-logo" className="w-2"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="left">
                        <img src={snakeGame} alt="snake-game" />
                    </div>
                    <div className="right my-3 flex flex-col gap-4">
                        <div className="projects-name">
                            <p className="text-white font-semibold -mb-1">Snake Game</p>
                            <p className="text-xs text-white-mute">Make simple snake game with javascript language</p>
                        </div>
                        <div className="projects-tech flex gap-3">
                            <img src={jsLogo} alt="" className="w-6 h-6" />
                            <img src={htmlLogo} alt="" className="w-6 h-6" />
                            <img src={tailwindLogo} alt="" className="w-6 h-6" />
                        </div>
                        <div className="button flex justify-between gap-6">
                            <a href="https://www.google.com/?hl=ID" target={'_blank'} className="w-1/2 hover:text-white hover:no-underline focus:text-white focus:no-underline rounded-sm text-white code-link bg-dark-card p-2 flex justify-center items-center gap-4">
                                <div className="text text-sm">code</div>
                                <div className="img">
                                    <img src={codeLogo} alt="code-logo" className="w-4"/>
                                </div>
                            </a>
                            <a href="https://www.google.com/?hl=ID" target={'_blank'} className="w-1/2 hover:text-white hover:no-underline focus:text-white focus:no-underline rounded-sm text-white code-link bg-dark-card p-2 flex justify-center items-center gap-4">
                                <div className="text text-sm">demo</div>
                                <div className="img">
                                    <img src={demoLogo} alt="code-logo" className="w-2"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default FeaturedProjects;