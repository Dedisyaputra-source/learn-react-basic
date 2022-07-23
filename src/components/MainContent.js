
const MainContent = (props) => {
    // console.log(props.listNama)
    return(
        <div>
            {/* <h3>List Nama</h3>
            <ul>
                <li>{props.listNama}</li>
            </ul> */}
            <h3>Identitas</h3>
            <div className="box-name">
                <h4>{props.nama}</h4>
                <p>{props.asal}</p>
                <p>{props.pekerjaan}</p>
                <p>{props.umur}</p>
                <p>{props.getNavbarValue}</p>
            </div>
        </div>
    )
}

export default MainContent;