const fetchUser = async ()=>{
    try{
        const users = await fetch('http://localhost:8080/api/v1/user')
        console.log(users.json())
    }catch(error){
        console.log(error)
    }
}