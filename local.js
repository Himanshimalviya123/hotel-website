let singup=()=>{
    let inpname=document.querySelector("#name").value
    let inpnumber=document.querySelector("#number").value
    let inpemail=document.querySelector("#email").value
    let inppass=document.querySelector("#pass").value

    let errorname=document.querySelector("#errname")
    if(inpname.trim()==="")
    {
        document.querySelector("#name").placeholder="please enter your name"
        document.querySelector("#name").Style.border="1px solid red"
        errorname.innerHTML="please fill the name"
        errorname.Style.color="red"
        return false

        
    }
        else{
            errorname,innerHTML=""
        }
}