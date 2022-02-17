import Nav from './Navbar'

const Layout = ({children}) => {
    return(
        <>
        <Nav/>
        <div>
            <main>{children}</main>
        </div>
        </>
    );
}
export default Layout 