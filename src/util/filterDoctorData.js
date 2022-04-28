export const filterDoctorData = (data, role) => {
  const newData = data.map((value, index) => {
    if (value.doctorEmail === "invalid@gmail.com") {
      value.doctorEmail = "-";
    }
    return value;
  });
  if (role === "admin") {
    return newData;
  }
  return newData.filter((value, index) => {
    return value.doctorEmail !== "-";
  });
};
