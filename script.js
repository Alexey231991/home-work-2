// Первое задание
const a = Number(prompt('Введите первое число:'));
const b = Number(prompt('Введите второе число:'));

if (a > b) {
    alert('Первое больше');
} else if (a === b) {
    alert('Числа равны друг другу');
} else {
    alert('Второе больше');
}


// Второе задание
const c = prompt('Введите число');
alert(c.slice(-1));


// Третье задание
const name = prompt('Введите имя');
const age = +prompt('Введите возраст');
const drinkAlc = confirm('Алкоголь употребляем?');

if (drinkAlc) {
    
    if (age > 40) {
        alert('Не злоупотребляйте');
    }
    if (age < 18) {
        alert('Ты что?! Маме расскажу!');
    }
    if (age > 18 && age < 40) {
        alert('Только водку с пивом не мешай...');
    }

} else {
    alert('Так держать');
}


