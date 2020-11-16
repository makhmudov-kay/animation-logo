/* const users = {
    name: "Вася",
    surname: "Васильев",
    get fullName() {
        return `${this.name} ${this.surname}`
    },
    set fullName(value) {
        let arr = value.split(" ");
        this.name = arr[0];
        this.surname = arr[1];
    }
}
console.log(users.fullName);
users.fullName = "Петя Петров"
console.log(users); */


// создаём объект с продукцией
const product = {
    plainBurger: {
        name: "Гамбургер простой",
        price: 10000,
        kcall: 400,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: "Гамбургер FRESH",
        price: 20500,
        kcall: 500,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        kcall: 700,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    }
}

// -------создаём объект ингредиентов
const extraProduct = {
    doubleMayonnaise: {
        name: "Двойной майонез",
        price: 500,
        kcall: 50
    },
    lettuce: {
        name: "Салатный лист",
        price: 300,
        kcall: 10
    },
    cheese: {
        name: "Сыр",
        price: 400,
        kcall: 30
    }
}


// --------подключаемся к кнопкам + и -
const btnPlusOrMinus = document.querySelectorAll('.main__product-btn');
// console.log(btnPlusOrMinus);
//перебираем кнопки и навешиваем событию функцию
for (let i = 0; i < btnPlusOrMinus.length; i++) {
    btnPlusOrMinus[i].addEventListener("click", function () {
        plusOrMinus(this)
    })
}

function plusOrMinus(element) {
    // элемент.closest() - возвращает одного родителя по указанному селектору
    const parent = element.closest(".main__product") // подключаемся к секции
    // элемент.hasAttribute("name") - возвращает true если атрибут есть
    // элемент.setAttribute("name","value") - добавляет атрибут со значением
    // элемент.removeAttribute("name") - удаляет атрибут со значением
    // элемент.getAttribute("name") - возвращает значение атрибулта
    const parentId = parent.getAttribute("id"); // получим значение атрибута id
    const elementData = element.getAttribute("data-symbol") // получаем знак кнопки + или -

    if (elementData == "+" && product[parentId].amount < 10) {
        product[parentId].amount++
    } else if (elementData == "-" && product[parentId].amount > 0) {
        product[parentId].amount--
    }

    const out = parent.querySelector(".main__product-num");
    const price = parent.querySelector(".main__product-price span");
    const kcall = parent.querySelector(".main__product-kcall span");
    out.innerHTML = product[parentId].amount;
    price.innerHTML = product[parentId].Summ;
    kcall.innerHTML = product[parentId].Kcall;
}

// --------- подключаемся к чекбоксам ингридиентов
const checkExtraProduct = document.querySelectorAll('.main__product-checkbox');
// перебираем массив чекбоксов
for (let i = 0; i < checkExtraProduct.length; i++) {
    // для каждого чекбокса создаём событие
    checkExtraProduct[i].addEventListener("click", function () {
        addExtraProduct(this)
    })
}
// функция работы чекбокса
function addExtraProduct(element) {
    
}

// домашнее задание
// анимированное лого
const number = document.querySelector('.header__timer-extra');

function numLogo(){
    number.innerHTML++
    if (number.innerHTML < 51) {
        setTimeout(() => {numLogo()}, 100);
    }
    if (number.innerHTML > 50 && number.innerHTML < 61) {
        setTimeout(() => {numLogo()}, 150);
    }
    if (number.innerHTML > 60 && number.innerHTML < 71) {
        setTimeout(() => {numLogo()}, 190);
    }
    if (number.innerHTML > 70 && number.innerHTML < 81) {
        setTimeout(() => {numLogo()}, 210);
    }
    if (number.innerHTML > 80 && number.innerHTML < 91) {
        setTimeout(() => {numLogo()}, 250);
    }
    if (number.innerHTML > 90) {
        setTimeout(() => {numLogo()}, 300);
    }
    if (number.innerHTML > 99) {
        number.innerHTML = 100
    }
}  
numLogo()
