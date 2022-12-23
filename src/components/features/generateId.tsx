const generateId = () => {
  const dateMillsecond = new Date().getMilliseconds();
  return Math.floor(Math.ceil(Math.random() * dateMillsecond));
};
export default generateId;
