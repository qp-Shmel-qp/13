setTimeout(() => {
  console.log('Используем setTimeout');

}, 2000);


Promise.resolve().then(() => {
  console.log('Используем Promise.resolve().then()');
  
});