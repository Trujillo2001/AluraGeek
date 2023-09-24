const crecarCliente = (nombre, email, password, password2)=>{
    fetch("http://localhost:3000/register", {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            nombre, email, password, password2
        })
    })
}