// 0. Значення
// Назва категорії водія - transportCategory
// Водійська категорія А (мотоцикл) - motorcycleCategory
// Водійська категорія B (легковий автомобіль) - autoCategory
// Водійська категорія C (вантажний автомобіль)  - truckCategory

//1. Введення необхідних даних
let transportCategory = prompt('Введіть назву категорії, яка вказана у правах водія, і ми підкажемо яким транспортом ви можете керувати (категорії А, В, С):', 'Заповнюйте великими латинськими літерами (приклад: A)')

//2. Водійська категорія
let motorcycleCategory = 'A'
let autoCategory = 'B'
let truckCategory = 'C'

//3. Виведення результату
if (transportCategory == motorcycleCategory)
document.write(`Ваша категорія А та ви можете використовувати мотоцикли, у тому числі з бічним причепом, а також інші двоколісні транспортні засоби, що мають двигун із робочим об'ємом 50 куб. см і більше або електродвигун потужністю 4 кВт і більше`)
else if (transportCategory == autoCategory)
document.write(`Ваша категорія В і ви можете використовувати автомобілі (варіанти кузова: седан, універсал, хетчбек, кабріолет, купе), вантажні та напіввантажні автомобілі масою до 3.5 тонн. Важливо враховувати, що ця цифра означає максимально допустиму вагу з усіма вантажами та пасажирами, а також загальну вагу з причепом. Також ви можете сміливо керувати невеликими мікроавтобусами, якщо кількість пасажирів не перевищує 8 осіб.`)
else if (transportCategory == truckCategory)
document.write(`Ваша категорія В і ви маєте право на керування середніми (від 3.5 до 7.5 т) та важкими (понад 7.5 т) вантажними автомобілями. Важливий нюанс: як і С1, ця категорія не дає право керувати вантажними авто вагою до 3500 кг.`)
else if (transportCategory != motorcycleCategory)
document.write(`Введіть коректні дані. Оновіть сторінку та заповнюйте великими латинськими літерами (приклад: A).`)
else if (transportCategory != autoCategory)
document.write(`Введіть коректні дані. Оновіть сторінку та заповнюйте великими латинськими літерами (приклад: A).`)
else if (transportCategory != truckCategory)
document.write(`Введіть коректні дані. Оновіть сторінку та заповнюйте великими латинськими літерами (приклад: A).`)
