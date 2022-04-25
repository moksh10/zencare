export const filterDoctorData=(data)=>{
    return data.filter((value,index)=>{
        return value.doctorEmail!=="invalid@gmail.com"
    })
}