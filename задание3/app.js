async function fetchData() {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
  resolve("Данные получены");
  }, 2000);
  });
  }
  async function processData() {
  try {
  const data = await fetchData();
  console.log(data);
  } catch (error) {
  console.error("Ошибка:", error);
  }
  }
  processData();