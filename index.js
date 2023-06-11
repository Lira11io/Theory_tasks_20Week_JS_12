//4 вопрос
let user = undefined;

if (!user || !user.name) {
  console.log("Имя пользователя не заполнено");
} else {
  console.log(`Привет, ${user.name}`);
}

//7 вопрос
try {
  const num = parseInt("ыыыы");
  if (isNaN(num)) {
    //является ли введенное значение числом или нет, если нет
    throw new Error("Некорректное преобразование данных");
  }
  console.log(num);
} catch (error) {
  console.error(error);
}
