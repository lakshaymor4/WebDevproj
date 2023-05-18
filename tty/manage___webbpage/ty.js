const mai = document.querySelector("#mail")
const pa = document.querySelector("#lop")
const g = document.querySelector("#go")
g.addEventListener("click",(e)=>{
    e.preventDefault()
    const op = mai.value
    const patt = /\S+@\w+(\.+)\w+$/
    const res = patt.test(op)
    if(res==true){
       pa.innerText = "Thank You for subscribing"
    }
    else{
        pa.innerText = "Please Enter a valid email address"
    }
})