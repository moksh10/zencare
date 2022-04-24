const handleError = (error) => {
  const message = error.response ? error.response.data : "Server Error";
  return { success: false, error: message };
};
export default handleError;
