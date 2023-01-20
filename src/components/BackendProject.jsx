// ? import components
import NavbarProject from "./NavbarProject";
import CardFeaturedProject from "../micro-components/CardFeaturedProjects";
import BackToTop from "./BackToTop";

// * import image
import bemo from '../assets/image/bemo.png'
import herocat from '../assets/image/herocat.png'
import authentication from '../assets/image/authentication.png'
import restLumen from '../assets/image/rest-lumen.png'
import goproj from '../assets/image/goproj.png'
import htmlLogo from '../assets/image/html.png'
import bootstrapLogo from '../assets/image/bootstrap.png'
import laravelLogo from '../assets/image/laravel.png'
import mysqlLogo from '../assets/image/mysql.png'
import phpLogo from '../assets/image/php.png'
import lumenLogo from '../assets/image/lumen.png'
import goLogo from '../assets/image/go.png'


const BackendProjects = () => {

    const featuredProjects = [

        {
            'id': 1,
            'thumbnail': bemo,
            'name': 'Bemo',
            'description': 'Create a website for streaming films using laravel 7',
            'tech': [
                bootstrapLogo,
                laravelLogo,
                mysqlLogo
            ],
            'haveDemo': false,
            'linkCode': 'https://github.com/rezairfanwijaya/BEMO-Streaming-Film',
            'linkDemo': ''
        }, {
            'id': 2,
            'thumbnail': herocat,
            'name': 'Herocat',
            'description': 'Make a cat adoption website using php murni, bootstrap and mysql',
            'tech': [
                bootstrapLogo,
                phpLogo,
                mysqlLogo
            ],
            'haveDemo': false,
            'linkCode': 'https://github.com/rezairfanwijaya/herocat',
            'linkDemo': ''
        }, {
            'id': 3,
            'thumbnail': authentication,
            'name': 'Authentication',
            'description': 'Create a login and register system using native php and mysql',
            'tech': [
                htmlLogo,
                mysqlLogo,
                phpLogo
            ],
            'haveDemo': false,
            'linkCode': 'https://github.com/rezairfanwijaya/login-and-register',
            'linkDemo': ''
        },{
            'id': 4,
            'thumbnail': restLumen,
            'name': 'Restapi Lumen',
            'description': 'Create restapi using lumen and mysql',
            'tech': [
                lumenLogo,
                mysqlLogo
            ],
            'haveDemo': false,
            'linkCode': 'https://github.com/rezairfanwijaya/learn-restAPI-lumen',
            'linkDemo': ''
        },{
            'id': 5,
            'thumbnail': goproj,
            'name': 'Restfull Api Gin Golang',
            'description': 'Create restfull ap using golang with gin http server and gorm in mysql database',
            'tech': [
                goLogo,
                mysqlLogo
            ],
            'haveDemo': false,
            'linkCode': 'https://github.com/rezairfanwijaya/Restfull-API-Gin',
            'linkDemo': ''
        },{
            'id': 6,
            'thumbnail': goproj,
            'name': 'JWT Auth Restfull Api Gin Golang',
            'description': 'Create restfull ap using golang with gin http server and gorm in mysql database',
            'tech': [
                goLogo,
                mysqlLogo
            ],
            'haveDemo': false,
            'linkCode': 'https://github.com/rezairfanwijaya/Auth-JWT-Golang-React-BACKEND',
            'linkDemo': ''
        },

    ]

    return (
        <>
            <NavbarProject />
            <BackToTop/>
            <div className="main my-5 lg:px-28 flex flex-col gap-5 lg:gap-12">
                <div className="title" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1500">
                    <p className="text-white font-semibold font-Kanit text-4xl tracking-wide lg:tracking-wider xl:text-4xl">Backend</p>
                </div>

                <div className="projects flex flex-col gap-12" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1500">
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
        </>
    );
}

export default BackendProjects;