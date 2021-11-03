
import "./styles/public/style.css"
document.getElementById("submit").addEventListener("click",shortApi)

async function shortApi(){
    let longUrl=document.getElementById("url_input").value
   try{
    let response= await axios.post("http://localhost:3000/api",{
        "longUrl":longUrl
    })
    document.getElementById("short").innerText="your new url   :"+(response.data)
}  
catch(error){
    console.log(error.response.data.error)
    document.getElementById("short").innerText=(error.response.data.error)
}
}

