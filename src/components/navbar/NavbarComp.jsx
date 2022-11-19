import { Navbar, Nav } from 'rsuite';

const NavbarComp = () => {
    return (
        <>
            <div className="container bg-[#161616]">
                <Navbar>
                    <Navbar.Brand href="#">RSUITE</Navbar.Brand>
                    <Nav>
                        <Nav.Item>Home</Nav.Item>
                        <Nav.Item>News</Nav.Item>
                        <Nav.Item>Products</Nav.Item>
                        <Nav.Menu title="About">
                            <Nav.Item>Company</Nav.Item>
                            <Nav.Item>Team</Nav.Item>
                            <Nav.Menu title="Contact">
                                <Nav.Item>Via email</Nav.Item>
                                <Nav.Item>Via telephone</Nav.Item>
                            </Nav.Menu>
                        </Nav.Menu>
                    </Nav>
                </Navbar>
            </div>
        </>
    );
}

export default NavbarComp;