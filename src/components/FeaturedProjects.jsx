// import image
import snakeGame from '../assets/image/snakegame.png'
import urlShortener from '../assets/image/urlShortener.png'
import examTime from '../assets/image/examTime.png'
import jsLogo from '../assets/image/js.png'
import htmlLogo from '../assets/image/html.png'
import tailwindLogo from '../assets/image/tailwind.png'
import reactLogo from '../assets/image/react.png'
import goLogo from '../assets/image/go.png'
import mysqlLogo from '../assets/image/mysql.png'

// import component
import CardFeaturedProject from '../micro-components/CardFeaturedProjects'

const FeaturedProjects = () => {
    const featuredProjects = [

        {
            'id': 1,
            'thumbnail': snakeGame,
            'name': 'Snake Game',
            'description': 'Make simple snake game with javascript language',
            'tech': [
                jsLogo,
                htmlLogo,
                tailwindLogo
            ],
            'haveDemo': true,
            'linkCode': 'https://github.com/rezairfanwijaya/snake-game-with-js',
            'linkDemo': 'https://rezairfanwijaya.github.io/snake-game-with-js/'
        }, {
            'id': 2,
            'thumbnail': urlShortener,
            'name': 'URL Shortener',
            'description': 'Create a website to shorten links using reactjs and API public',
            'tech': [
                reactLogo,
                tailwindLogo,
            ],
            'haveDemo': true,
            'linkCode': 'https://github.com/rezairfanwijaya/ReactJS-URL-Shorteners',
            'linkDemo': 'https://link-pendek.vercel.app/'
        }, {
            'id': 3,
            'thumbnail': examTime,
            'name': 'Exam Time',
            'description': 'Create a website for exam with my team',
            'tech': [
                reactLogo,
                tailwindLogo,
                mysqlLogo,
                goLogo
            ],
            'haveDemo': false,
            'linkCode': 'https://github.com/rezairfanwijaya/Exam-Time',
            'linkDemo': ''
        },

    ]


    return (<>
        <div className="featured-projects mt-14 lg:px-28 flex flex-col gap-7" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500">
            <div className="header">
                <div className="title">
                    <p className="text-white font-bold text-2xl xl:text-3xl">Featured Projects</p>
                </div>
                <div className="desc mt-1 md:w-3/5 xl:w-5/12">
                    <p className="text-white-mute text-xs xl:text-md">Some examples of projects that I have worked on using Reactjs and Golang technologies</p>
                </div>
            </div>

            <div className="projects flex flex-col gap-12">
                {featuredProjects.map((featuredProject) => (
                    <CardFeaturedProject
                        id={featuredProject.id}
                        thumbnail={featuredProject.thumbnail}
                        name={featuredProject.name}
                        description={featuredProject.description}
                        tech={featuredProject.tech}
                        haveDemo={featuredProject.haveDemo}
                        linkCode={featuredProject.linkCode}
                        linkDemo={featuredProject.linkDemo}
                    />
                ))}
            </div>
        </div>
    </>);
}

export default FeaturedProjects;