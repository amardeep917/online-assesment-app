import { useNavigate } from "react-router-dom"
import './MainPage.css'
function MainPage(){
    let navigate=useNavigate()
    const handleAdmin=()=>{
        navigate('/adminLogin')
    }
    const handleUser=()=>{
        navigate('/userLogin')
    }
    return(
        <>
            <div className="outer-container">
                    <div className="text-container">
                        <div className="user-text"><h3>If You are a User click on User button</h3></div>
                        <div className="admin-text"><h3>If You are a Admin click on Admin button</h3></div>
                    </div>
                    <div className="button-container">
                        <div className="main-button" id="user"><button onClick={()=>handleUser()}>User</button></div>
                        <div className="main-button"><button onClick={()=>handleAdmin()}>Admin</button></div>
                    </div>
                </div>
        </>
    )
}
export default MainPage