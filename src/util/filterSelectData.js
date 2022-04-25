export const filterSelectData = (data) => {
  if (data.length === 0) {
    return data;
  }
  const newData = data.map((value, index) => {
    const newRow = {};
    Object.entries(value).forEach((val, idx) => {
      if(val[0]==="doctorID")
      {
          newRow.value=val[1]
      }
      if(val[0]==="doctorName")
      {
          newRow.label=val[1]
      }
    });
    return newRow;
  });
  return newData;
};
