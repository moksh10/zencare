const handleError = (error) => {
  const message = error.response.data.status===500 ? {message:"Server Error"} : error.response.data;
  return { success: false, error: message };
};
export default handleError;
