

export const createUser = async (username, email, password, setter) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
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
        if (data.error) 
            throw new Error(data.error)
        setter( data.newUser.username );
    } catch (error) {
        console.log(error);
    }
}