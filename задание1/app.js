function getUserData(callback) {
  setTimeout(function() {
    console.log("Данные получены");
    callback();
  }, 1000);
}


getUserData(function() {
  console.log("Данные обработаны");
});
  