const handleError = (error) => {
  const message = error.response ? error.response : "Server Error";
  return { success: false, error: message };
};
export default handleError;
