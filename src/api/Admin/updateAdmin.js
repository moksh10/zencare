import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function updateAdmin(admin) {
    const data = await API.put('/admin', admin).catch(handleError);
    return data.data?{success:true,data:data.data.data, message: data.data.message}:data.error   

}
// const admin = {
//     adminEmail: "moksh1@gmail.com",
//     adminName: "moksh",
//     password: "asdfzxcv",
//     adminContact: "9111919191"

// }
export default updateAdmin