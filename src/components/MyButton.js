const Mybutton = (props) => {
    return(
        <div>
            <button onClick={() =>props.clicked()}>Klik saya</button>
        </div>
    )
}

export default Mybutton;