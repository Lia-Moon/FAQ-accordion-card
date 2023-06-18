const questionOne = document.querySelector('.faq__questions--one');
const questionTwo = document.querySelector('.faq__questions--two');
const questionThree = document.querySelector('.faq__questions--three');
const questionFour = document.querySelector('.faq__questions--four');
const questionFive = document.querySelector('.faq__questions--five');

function selectedQuestion(number) {

    questionOne.classList.remove('selected');
    questionTwo.classList.remove('selected');
    questionThree.classList.remove('selected');
    questionFour.classList.remove('selected');
    questionFive.classList.remove('selected');

    switch (number) {
        case ('numberOne'):
            questionOne.classList.add('selected');
            break;
        case ('numberTwo'):
            questionTwo.classList.add('selected');
            break;
        case ('numberThree'):
            questionThree.classList.add('selected');
            break;
        case ('numberFour'):
            questionFour.classList.add('selected');
            break;
        case ('numberFive'):
            questionFive.classList.add('selected');
            break;
        default:
            questionOne.classList.remove('selected');
            questionTwo.classList.remove('selected');
            questionThree.classList.remove('selected');
            questionFour.classList.remove('selected');
            questionFive.classList.remove('selected');
    }
}

questionOne.addEventListener("click", () => {
    if (!questionOne.classList.contains('selected')) {
        selectedQuestion('numberOne');
    } else {
        selectedQuestion('default');
    }
})

questionTwo.addEventListener("click", () => {
    if (!questionTwo.classList.contains('selected')) {
        selectedQuestion('numberTwo');
    } else {
        selectedQuestion('default');
    }
})

questionThree.addEventListener("click", () => {
    if (!questionThree.classList.contains('selected')) {
        selectedQuestion('numberThree');
    } else {
        selectedQuestion('default');
    }
})

questionFour.addEventListener("click", () => {
    if (!questionFour.classList.contains('selected')) {
        selectedQuestion('numberFour');
    } else {
        selectedQuestion('default');
    }
})

questionFive.addEventListener("click", () => {
    if (!questionFive.classList.contains('selected')) {
        selectedQuestion('numberFive');
    } else {
        selectedQuestion('default');
    }
})