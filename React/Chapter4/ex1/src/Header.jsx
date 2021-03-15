function Header(props){
    console.log("🚀 ~ file: header.jsx ~ line 2 ~ Header ~ props", props)
    return(
        
        <div style={{width:"100%",height:"200px",backgroundColor:"green"}}>
        <button onClick={() => {props.setIsShowSidebar(!props.isShowSidebar);console.log(props.isShowSidebar)}}>Toogle</button>
        </div>
    );
    
}
export default Header;