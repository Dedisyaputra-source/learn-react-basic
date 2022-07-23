function Navbar(props){
    return(
        <div>
            <nav>
                <ul>
                    <li><a href="#">Beranda</a></li>
                    <li><a href="#">Bantuan</a></li>
                    <li><a href="#">{props.navValue ?  props.navValue : 'Kontak'}</a></li>
                    <li><a href="#">{props.newNavbar}</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;