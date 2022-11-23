import CardPath from "../micro-components/CardPath";

const Path = () => {
    const paths = [
        {
            'id': 1,
            'title': 'Frontend',
            'icon': 'code-slash-outline',
            'desc': 'Managed to make a website with React js and apply the public api',
            'iconMore': 'chevron-forward-outline',
            'url': 'https://www.linkedin.com/in/rezairfanwijaya/'
        },
        {
            'id': 2,
            'title': 'Backend',
            'icon': 'git-compare-outline',
            'desc': 'Create a restfull api using golang for the frontend to consume',
            'iconMore': 'chevron-forward-outline',
            'url': 'https://www.linkedin.com/in/rezairfanwijaya/'
        }
    ]
    return (<>
        <div className="path flex flex-col gap-3 my-9 md:my-14 md:flex-row md:gap-5 lg:px-28 lg:my-0 lg:mb-12">
            {paths.map((path) => (
                <CardPath
                    key={path.id}
                    title={path.title}
                    icon={path.icon}
                    desc={path.desc}
                    iconMore={path.iconMore}
                    url={path.url}
                />
            ))}
        </div>
    </>);
}

export default Path;