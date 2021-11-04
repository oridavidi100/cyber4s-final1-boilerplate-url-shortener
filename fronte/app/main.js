
import "./styles/public/style.css"
document.getElementById("submit").addEventListener("click",shortApi)
 document.getElementById("statistic").addEventListener("click",showData)
let id ;
let userName;
async function shortApi(){
    userName=document.getElementById("userName").value
    let longUrl=document.getElementById("url_input").value
    document.getElementById("short").style.display ="block"
   try{
    let response= await axios.post("http://localhost:3000/api",{
        "userName":userName,
        "longUrl":longUrl
    })
    let p=document.createElement("p")
    p.innerText="your new url:"+"  "+(response.data.shortUrl)
    document.getElementById("short").appendChild(p)
     id=response.data.id
}  
catch(error){
    console.log(error.response.data.error)
    document.getElementById("short").innerText=(error.response.data.error)
}
}


async function showData(){
        console.log(id)
        let response = await axios.get(`http://localhost:3000/api/statistic/${id}/${userName}`)
        let data=(response.data)
        console.log(response.data.date)
        console.log(response.data.redirectCount)
        let div=document.getElementById("short")
        let p = document.createElement("p")
        p.innerText=(`Date:${data.date}  
        redirectCount:${data.redirectCount}`)
        div.appendChild(p)
    
}  