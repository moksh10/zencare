export const getDate = () => {
  const date = new Date();
  return (
    date.getFullYear() + "-" + (1 + date.getMonth()) + "-" + date.getDate()
  );
};
