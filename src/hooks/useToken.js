const { useState, useEffect } = require("react")

const useToken = (user) =>{
    const [token, setToken] = useState('');
    console.log(token);

    useEffect(() =>{
        const email = user?.user?.email;
        console.log(email);
        const currentUser = {email: email};
        if(email){
            
            fetch(`http://localhost:5000/users/${email}`,{
                method: "PUT",
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(currentUser)
            }).then(res => res.json())
            .then(data =>{
                console.log(data.token);
                if(data.token){
                    localStorage.setItem('accessToken' , data.token);
                    const accessToken = localStorage.getItem('accessToken');
                    console.log(accessToken);
                    setToken(accessToken);
                }
            })
        }
        
    },[user])
    return [token];
}
export default useToken;