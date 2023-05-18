const quv  = document.querySelector("#subm")
quv.addEventListener("submit",async function(e){
    e.preventDefault()
    
    const ee = quv.elements.querry.value
    const req = await axios.get("https://api.tvmaze.com/search/shows?q="+ee)
    console.log(req.data)
    if(document.getElementById("imagr")){
        while(document.getElementById("imagr")){
            const tti = document.getElementById("imagr")
            tti.parentNode.removeChild(tti)
        }
    }
    addImg(req.data)
    
    
    
})
const addImg = (shows)=>{
    for(let result of shows){
        if(result.show.image){
            const ime = document.createElement("IMG")
            ime.setAttribute("id","imagr")
            ime.src = result.show.image.medium
            document.body.append(ime)
        }
    }
}