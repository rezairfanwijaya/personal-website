import cv from '../assets/pdf/CV_REZAIRFANWIJAYA_BACKEND.pdf'

const Summary = () => {
    return (<>
        <div className="summary flex flex-col md:items-center md:flex-row my-8 md:gap-5 lg:px-28" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500">
            {/* left */}
            <div className="left flex flex-col gap-1 p-12 md:w-1/2">
                <p className="total-year font-extrabold text-primary text-4xl text-center lg:text-6xl">01</p>
                <div className="text-white text-lg font-bold text-center tracking-wide lg:text-2xl">Year Experience</div>
            </div>

            {/* right */}
            <div className="right border-red-700 flex flex-col gap-3 md:w-1/2 ">
                {/* top */}
                <div className="top flex gap-3 cursor-pointer">
                    <div className="group complete-project flex flex-col gap-1 p-5 md:p-6 lg:p-11 lg:gap-2 bg-dark-card border-sm w-1/2 hover:bg-primary">
                        <p className="total text-center font-bold text-primary text-3xl lg:text-5xl group-hover:text-white">06</p>
                        <div className="text text-center text-white-mute tracking-wide text-xs lg:tracking-wider lg:text-[.9rem] group-hover:text-white">Completed Projects</div>
                    </div>
                    <div className="group skill-programming flex flex-col gap-1 p-5 md:p-6 lg:p-10 lg:gap-2 bg-dark-card border-sm w-1/2 hover:bg-primary">
                        <p className="total text-center font-bold text-primary text-3xl lg:text-5xl group-hover:text-white">08</p>
                        <div className="text text-center text-[#C0C0C0] tracking-wider text-xs lg:tracking-wider lg:text-[.9rem] group-hover:text-white">Skills Programming</div>
                    </div>
                </div>

                {/* bottom */}
                <div className="bottom flex gap-3 cursor-pointer">
                    <a href={cv} download className='group cv no-underline hover:no-underline flex flex-col gap-1 p-5 md:p-6 lg:p-10 lg:gap-2 bg-dark-card border-sm w-1/2 hover:bg-primary'>
                        <div className="icon text-center font-bold text-primary text-3xl lg:text-5xl  group-hover:text-white">
                            <ion-icon name="download-outline"></ion-icon>
                        </div>
                        <div className="text text-center text-white-mute tracking-wider text-xs lg:tracking-wider lg:text-[.9rem] group-hover:text-white">Download CV</div>
                    </a>
                    <div className="group certificate flex flex-col gap-1 p-5 md:p-6 lg:p-10 lg:gap-2 bg-dark-card border-sm w-1/2 hover:bg-primary">
                        <p className="total text-center font-bold text-primary text-3xl lg:text-5xl group-hover:text-white">33</p>
                        <div className="text text-center text-white-mute tracking-wider text-xs lg:tracking-wider lg:text-[.9rem] group-hover:text-white">Certificates</div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Summary;