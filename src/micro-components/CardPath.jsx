const CardPath = ({ title, icon, desc, iconMore, url }) => {
    return (<>
        <div className="group bg-[#303030] rounded-sm md:w-1/2 hover:bg-[#6B3BCB]">
            <div className="body p-5">
                {/* icon */}
                <div className="icon text-[#6B3BCB] text-5xl md:text-4xl lg:text-6xl font-bold group-hover:text-white">
                    <ion-icon name={icon}></ion-icon>
                </div>
                {/* title */}
                <div className="title text-white font-bold tracking-wider text-lg">
                    <p>{title}</p>
                </div>
                {/* description */}
                <div className="desc text-[#C0C0C0] my-5 lg:w-80 group-hover:text-white">
                    <p>{desc}</p>
                </div>
                {/* button */}
                <a href={url} className="button text-dec flex items-center gap-4 w-max py-3 px-5 rounded-sm bg-[#6B3BCB] text-white hover:no-underline group-hover:bg-white group-hover:text-[#6B3BCB] focus:text-white" target="_blank">
                    <div className="text">
                        Know More
                    </div>
                    <ion-icon name={iconMore}></ion-icon>
                </a>
            </div>
        </div>
    </>);
}

export default CardPath;