import { useContext, useEffect, useState } from "react"
import AdminContext from "../contextApi/AdminContext"
import axios from "axios"
import Pagination from "./Pagination"
import '../stylesheet/UserDashBoard.css'

function UserDashBoard(){
    const {globalUsername}=useContext(AdminContext)
    const username=globalUsername
    const [questionDetails,setQuestionDetails]=useState([])
    const [button,setButton]=useState(false)

    useEffect(()=>{
        axios.get("http://localhost:3002/questions").then((res)=>{
            let result=res.data
            setQuestionDetails(result)
            
        }).catch((err)=>console.log(err))
    })
    const handleQuiz=()=>{
        setButton(true)
        
    }
    return(
        <>
        
            <div className="user-dashboard-outer-container">
                <div className="dashboard-container"> 
                    <h1>Hey {username}! Welcome to UserDashBoard</h1>
                    <div className="dashBoard-btn">
                        <button onClick={()=>handleQuiz() }>start quiz</button>
                    </div>
                    <div>
                        {
                            button?<Pagination data={questionDetails} dataPerPage={1} pagesShown={5}></Pagination>:""
                        }
                        {/* <Pagination data={questionDetails} dataPerPage={5} pagesShown={5}></Pagination> */}
                    </div>
                </div>
            </div>

        </>
    )
}
export default UserDashBoard