const Footer = () => {
    return (<>
        <div className="footer bg-[#181818] text-2xl flex gap-5 justify-center p-3 mt-36">
            <a href="https://github.com/rezairfanwijaya" target={'_blank'}>
                <div className="github text-white hover:text-[#6B3BCB]">
                    <ion-icon name="logo-github"></ion-icon>
                </div>
            </a>

            <a href="mailto: rezairfanwijaya23@gmail.com">
                <div className="email text-white hover:text-[#6B3BCB]">
                    <ion-icon name="mail"></ion-icon>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/rezairfanwijaya/" target={'_blank'}>
                <div className="linkedin text-white hover:text-[#6B3BCB]">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </div>
            </a>
        </div>
    </>);
}

export default Footer;