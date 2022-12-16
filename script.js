const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

const btn = document.querySelector('#btn');
btn.addEventListener('mouseenter', () => {
    btn.style.left = `${random(0, 80)}%`;
    btn.style.top = `${random(15, 80)}%`;
});

btn.addEventListener('click', () => {
    let temp = prompt(`Подветрдите своё действие \nУкажите задуманное мной слово: `);
    if(temp == "Помидор"){
        alert('Ну ладно');
    }
    else{
        alert('Неправильно. Полагаю, Вам следует проголосовать за нашу команду');
    }
});
