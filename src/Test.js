import axios from "axios"

function Test(){
    const id ="e58a"
    const handleSee=()=>{
        
        axios.patch(`http://localhost:3002/AdminCredential/${id}`,{
        username: "hello",
        email: "hello@gmail.com",
        password: "hello@123",
        phone: "8080800080"
        }).then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
    return(
        <>
            <button onClick={()=>handleSee()}>see</button>
        </>
    )
}
export default Test