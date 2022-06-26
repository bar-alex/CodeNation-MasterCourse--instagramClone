

export const saveUserToken = (token) => localStorage.setItem("userToken",token);

export const retrieveToken = () => localStorage.getItem("userToken")??'';

export const registerUser = async (username, email, password, setter) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });
        const data = await res.json();
        // console.log(data);
        if (data.error) throw new Error(data.error)

        // save user token for autologin
        saveUserToken(data.token)
        // set the username
        setter( data.newUser );
    } catch (error) {
        console.log('-> createUser(), error: ',error);
    }
}


export const loginUser = async (username, password, setter) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        const data = await res.json();
        console.log('loginUser, data: ',data, 'res: ', res);
        if (data.error) throw new Error(data.error)

        // save user token for autologin
        saveUserToken(data.token)
        // set the username
        if (res.ok) setter( data.user );
        
    } catch (error) {
        console.log('-> loginUser(), error: ',error);
    }
}


export const updateUser = async (token, email, password, setter) => {
    try {
        
    } catch (error) {
        console.log('-> updateUser(), error: ',error);
    }
}


export const retrieveUser = async (setter) => {
    try {
        const token = retrieveToken()
        if (!token) return 
        const res = await fetch(`${process.env.REACT_APP_REST_API}/user/token`, {
            method: "GET",
            headers: { "Authorization": token },
        });
        const data = await res.json();
        // console.log(data);
        if (data.error) throw new Error(data.error)
        // console.log('-> retrieveUser, data: ',data);
        // console.log('-> retrieveUser, res: ',res);
        // set the user object
        if (res.ok) setter( data[0] )

    } catch (error) {
        console.log('-> retrieveUser(), error: ',error);
    }
}