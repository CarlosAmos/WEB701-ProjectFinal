import axios from "axios";

// Create new token
export const createnewuser = async details => {
    let data = {
        userdetail: JSON.stringify({
            email: details.userdetail.email,
            name: details.userdetail.name,
            password: details.userdetail.password
        })
    };
    let request = {
        url: "http://localhost:3000/api/users",
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        data:JSON.stringify(data)
    };

    const response = await axios(request);
    return response;
}