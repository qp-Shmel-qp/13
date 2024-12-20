function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Данные пользователя");
    }, 2000);
  });
}

fetchUserData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });