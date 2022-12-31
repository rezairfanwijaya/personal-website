// ? import components
import NavbarProject from "./NavbarProject";

// * import image
import snakeGame from '../assets/image/snakegame.png'
import urlShortener from '../assets/image/urlShortener.png'
import jsLogo from '../assets/image/js.png'
import htmlLogo from '../assets/image/html.png'
import tailwindLogo from '../assets/image/tailwind.png'
import reactLogo from '../assets/image/react.png'
import tailwindDoc from '../assets/image/tailwindDoc.png'
import CardFeaturedProject from "../micro-components/CardFeaturedProjects";

const FrontendProject = () => {

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
            'thumbnail': tailwindDoc,
            'name': 'Tailwind Docs',
            'description': 'Make website to document learning tailwind',
            'tech': [
                reactLogo,
                htmlLogo
            ],
            'haveDemo': true,
            'linkCode': 'https://github.com/rezairfanwijaya/Learn-Tailwind',
            'linkDemo': 'https://rezairfanwijaya.github.io/Learn-Tailwind/'
        },

    ]

    return (<>
        <NavbarProject />
        <div className="main my-5 lg:px-28 flex flex-col gap-5 lg:gap-12">
            <div className="title">
                <p className="text-white font-semibold font-Kanit text-4xl tracking-wide lg:tracking-wider xl:text-4xl">Frontend</p>
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

export default FrontendProject;