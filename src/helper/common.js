//for get current timess
exports.getCurrentTime = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
  const day = ('0' + currentDate.getDate()).slice(-2);
  const hours = ('0' + currentDate.getHours()).slice(-2);
  const minutes = ('0' + currentDate.getMinutes()).slice(-2);
  const seconds = ('0' + currentDate.getSeconds()).slice(-2);
  return year + month + day + hours + minutes + seconds;
};

// global error
exports.commonError = (error) => {
  console.log('error.message', error.message);
  console.log('error.cause', error.cause);
  console.log('error.stack', error.stack);
  console.log('error.lineNumber', error.lineNumber);
  console.log('error.fileName', error.fileName);
};

//common function for which is require for body and query
exports.required = (data, keys, res) => {
  // checks data have that keys and keys data if not return responce error;
};
