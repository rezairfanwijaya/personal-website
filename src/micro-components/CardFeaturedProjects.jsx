import codeLogo from '../assets/image/code.png'
import demoLogo from '../assets/image/demo.png'

const CardFeaturedProject = (props) => {
    return (<>
        <div className="card md:bg-dark-card md:flex md:gap-4 md:p-6 md:border-sm xl:gap-9" key={props.id}>

            <div className="left md:w-1/2">
                <img src={props.thumbnail} alt="snake-game" className="rounded-sm" />
            </div>

            <div className="right my-3 flex flex-col gap-4 md:w-1/2  md:my-0 md:gap-7 xl:gap-11">

                <div className="projects-name">
                    <p className="text-white font-semibold  md:text-lg xl:text-xl">{props.name}</p>
                    <p className="text-xs text-white-mute xl:text-md">{props.description}</p>
                </div>

                <div className="projects-tech flex gap-3">
                    {props.tech.map((image) => (
                        <img src={image} alt="" className="w-4 h-4 xl:w-5 xl:h-5" />
                    ))}

                </div>

                <div className="button flex justify-between gap-6 mt-4 xl:w-3/5">

                    <a href={props.linkCode} target={'_blank'} rel="noopener noreferrer" className="w-1/2 hover:text-white hover:no-underline focus:text-white focus:no-underline rounded-sm text-white code-link bg-dark-button-card p-2 flex justify-center items-center gap-4 hover:bg-primary">
                        <div className="text text-sm">code</div>
                        <div className="img">
                            <img src={codeLogo} alt="code-logo" className="w-4" />
                        </div>
                    </a>

                    {
                        props.haveDemo
                        &&
                        <a href={props.linkDemo} target={'_blank'} rel="noopener noreferrer" className="w-1/2 hover:text-white hover:no-underline focus:text-white focus:no-underline rounded-sm text-white code-link bg-dark-button-card p-2 flex justify-center items-center gap-4 hover:bg-primary">
                            <div className="text text-sm">demo</div>
                            <div className="img">
                                <img src={demoLogo} alt="code-logo" className="w-2" />
                            </div>
                        </a>
                    }

                </div>
            </div>
        </div>
    </>);
}

export default CardFeaturedProject;