import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function createAdmin(admin) {
    const data = await API.post('/admin', admin).catch(handleError);
    return data.data?{success:true,data:data.data.data}:data.error   

}
// const admin = {
//     adminEmail: "moksh1@gmail.com",
//     adminName: "moksh",
//     password: "asdfzxcv",
//     adminContact: "9111919191"

// }
export default createAdmin