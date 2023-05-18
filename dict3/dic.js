const gg = document.querySelector("#lp")
const gy = document.querySelector("#bit")
const tt = document.querySelector("#h")
const rtt = document.querySelector("body")
const se = document.querySelector(".opi");
const san = document.querySelector(".oui");
const hand = document.querySelector(".oii");
const dis  = document.querySelector(".oti");
const mono  = document.querySelector(".oio");
const vr = document.querySelector(".lsi");
const no = document.querySelector(".nope");
no.addEventListener("click",()=>{
    if(vr.value == "San-serif"){
    rtt.style.fontFamily ="Sono"
    console.log(vr.value);
    }
    else if(vr.value == "Display"){
        rtt.style.fontFamily ="Averia Serif Libre"
        console.log(vr.value);
    }
    else if(vr.value=="Serif"){
        rtt.style.fontFamily ="Crimson Text"
    }
    else if(vr.value=="Handwriting"){
        rtt.style.fontFamily ="Merienda"
    }
    else if(vr.value =="Monospace"){
        rtt.style.fontFamily ="Inconsolata"
    }
})
gy.addEventListener("click",async ()=>{
    if(document.querySelector(".start")!=null){
    document.querySelector(".start").remove()
    
    }
   const yl = gg.value
   const quer = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/"+yl)
    .catch(function(err){
        if(err.response){
            console.clear()
            if(document.querySelector(".meani")!=null){
                document.querySelector(".meani").remove()
                document.querySelector("#h").remove()
                document.querySelector("#hh").remove()
            }
            if(document.querySelector(".star")==null){
            const v = document.createElement("div")
            v.setAttribute("class","start")
            const gop= document.createElement("h1")

            gop.innerText = "Sorry,Please search the word on the web:("
            v.append(gop)
            rtt.append(v)
            }
        }
})
   console.log(quer.data)
   const g= quer.data[0]
   const fr = g.phonetics
   
   const gy = document.createElement("h1")
   const tty = document.createElement("h3")
   tty.setAttribute("id","hh")
   gy.setAttribute("id","h")
   gy.innerText = yl
   for(let t=0;t<fr.length;t++){
    for(var yew in fr[t]){
        if(yew == "text"){
            tty.innerText = fr[t].text
            break
        }

    }
   }
   
   if(document.querySelector("#h")==null && document.querySelector("#hh")==null){
   document.querySelector(".mai23").append(gy)
   document.querySelector(".mai23").append(tty)
   }
   else{
    document.querySelector("#h").remove()
    document.querySelector("#hh").remove()
    document.querySelector(".mai23").append(gy)
   document.querySelector(".mai23").append(tty)
   }
   const op = g.meanings.length
   if(document.querySelector(".meani")!=null){
    document.querySelector(".meani").remove()
    const typ = document.createElement("div")
    typ.setAttribute("class","meani")
     rtt.append(typ)
    for(let i=0;i<op;i++){
     const yy = g.meanings[i].partOfSpeech
     const rr  = document.createElement("div")
     rr.setAttribute("class","mo")
     typ.append(rr)
     const p = document.createElement("p")
     p.setAttribute("id","p1")
     p.innerText = yy
     rr.append(p)
     const rop = document.createElement("div")
     rop.setAttribute("class","oiu")
     rr.append(rop)
     const yup = document.createElement("div")
     yup.setAttribute("class","mean")
     typ.append(yup)
     const ull = document.createElement("ul")
     ull.setAttribute("id","lis")
     ull.innerText = "Meaning"
     yup.append(ull)
     const ho = g.meanings[i].definitions.length
     for(let j=0;j<ho;j++){
         const hj = g.meanings[i].definitions[j]
         const lii = document.createElement("li")
         ull.append(lii)
         const re = document.createElement("span")
         re.innerText = hj.definition
         lii.append(re)
         
 
     }
     if(g.meanings[i].synonyms.length>0){
         const ggh = document.createElement("div")
         ggh.setAttribute("class","syn")
         typ.append(ggh)
         const gtt = document.createElement("p")
         gtt.setAttribute("id","p2")
         gtt.innerText = "Synonyms:"
         ggh.append(gtt)
         const fu = document.createElement("div")
         fu.setAttribute("class","sy")
         ggh.append(fu)
         for(let h= 0; h<g.meanings[i].synonyms.length;h++){
             const yui = document.createElement("p")
             yui.setAttribute("id","p3")
             yui.innerText = g.meanings[i].synonyms[h]
             fu.append(yui)
         } 
     }
     if(g.meanings[i].antonyms.length>0){
         const ggh = document.createElement("div")
         ggh.setAttribute("class","syn")
         typ.append(ggh)
         const gtt = document.createElement("p")
         gtt.setAttribute("id","p2")
         gtt.innerText = "Antonyms:"
         ggh.append(gtt)
         const fu = document.createElement("div")
         fu.setAttribute("class","sy")
         ggh.append(fu)
         for(let h= 0; h<g.meanings[i].antonyms.length;h++){
             const yui = document.createElement("p")
             yui.setAttribute("id","p3")
             yui.innerText = g.meanings[i].antonyms[h]
             fu.append(yui)
         } 
     }
     
 
    }
    console.log("done")
   }
   else{
    const typ = document.createElement("div")
    typ.setAttribute("class","meani")
     rtt.append(typ)
    for(let i=0;i<op;i++){
     const yy = g.meanings[i].partOfSpeech
     const rr  = document.createElement("div")
     rr.setAttribute("class","mo")
     typ.append(rr)
     const p = document.createElement("p")
     p.setAttribute("id","p1")
     p.innerText = yy
     rr.append(p)
     const rop = document.createElement("div")
     rop.setAttribute("class","oiu")
     rr.append(rop)
    
     
     
     const yup = document.createElement("div")
     yup.setAttribute("class","mean")
     typ.append(yup)
     const ull = document.createElement("ul")
     ull.setAttribute("id","lis")
     ull.innerText = "Meaning"
     yup.append(ull)
     const ho = g.meanings[i].definitions.length
     for(let j=0;j<ho;j++){
         const hj = g.meanings[i].definitions[j]
         const lii = document.createElement("li")
         ull.append(lii)
         const re = document.createElement("span")
         re.innerText = hj.definition
         lii.append(re)
         
 
     }
     if(g.meanings[i].synonyms.length>0){
         const ggh = document.createElement("div")
         ggh.setAttribute("class","syn")
         typ.append(ggh)
         const gtt = document.createElement("p")
         gtt.setAttribute("id","p2")
         gtt.innerText = "Synonyms:"
         ggh.append(gtt)
         const fu = document.createElement("div")
         fu.setAttribute("class","sy")
         ggh.append(fu)
         for(let h= 0; h<g.meanings[i].synonyms.length;h++){
             const yui = document.createElement("p")
             yui.setAttribute("id","p3")
             yui.innerText = g.meanings[i].synonyms[h]
             fu.append(yui)
         } 
     }
     if(g.meanings[i].antonyms.length>0){
         const ggh = document.createElement("div")
         ggh.setAttribute("class","syn")
         typ.append(ggh)
         const gtt = document.createElement("p")
         gtt.setAttribute("id","p2")
         gtt.innerText = "Antonyms:"
         ggh.append(gtt)
         const fu = document.createElement("div")
         fu.setAttribute("class","sy")
         ggh.append(fu)
         for(let h= 0; h<g.meanings[i].antonyms.length;h++){
             const yui = document.createElement("p")
             yui.setAttribute("id","p3")
             yui.innerText = g.meanings[i].antonyms[h]
             fu.append(yui)
         } 
     }
     
 
    }
    console.log("done")
   }
})
