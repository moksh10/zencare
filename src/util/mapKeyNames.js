export const convertToString = (string) => {
    const strArr= string
      .split(/(?=[A-Z])/)
      .map((p) => {
        return p[0].toUpperCase() + p.slice(1);
      })
      let newString=""
      for(let i=0; i<strArr.length; i++) {
        newString += strArr[i]
        if(i!==strArr.length-1&&strArr[i].length!==1)
        {
          newString+=" "
        }
      }
      const tempString = newString.split(" ");
      if(tempString.length===3)
      {
        return tempString[2]
      }
      if(tempString.length===2)
      {
        return tempString[1]
      }
      return tempString[0]
      
  }