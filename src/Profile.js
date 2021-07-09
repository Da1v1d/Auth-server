
import "./profile.css"



export default function Profile(){
    return(
        <div className="profcontainer">
             <div className="profile">
        <img src={`file:///users/iyc-user/desktop/${localStorage.getItem("picture")}`} style={{width:100,height:100}} alt="man"/>
        <h1>{localStorage.getItem("email")}</h1>
                 </div>
        </div>
    )
}