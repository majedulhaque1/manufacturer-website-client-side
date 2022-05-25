const { useState, useEffect } = require("react")

const useToken = (user) =>{
    const [token,setToken] = useState('');

    useEffect(() =>{
        const email = user?.user?.email;
        console.log(email);

        fetch(`http://localhost:5000/users/${email}`,{
            method: "PUT",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify({email})
        }).then(res => res.json())
        .then(data => console.log(data))
    },[user])
}
export default useToken;