const addRemoveListener = (event, callback) => {
  console.log("listener on removeListenerGen:", event);
  window.addEventListener(event, callback);
  return () => window.removeEventListener(event, callback);
};
export default addRemoveListener;
