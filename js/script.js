const questionOne = document.querySelector('.faq__questions--one--question');
const questionTwo = document.querySelector('.faq__questions--two--question');
const questionThree = document.querySelector('.faq__questions--three--question');
const questionFour = document.querySelector('.faq__questions--four--question');
const questionFive = document.querySelector('.faq__questions--five--question');

const answerOne = document.querySelector('.faq__questions--one--answer');
const answerTwo = document.querySelector('.faq__questions--two--answer');
const answerThree = document.querySelector('.faq__questions--three--answer');
const answerFour = document.querySelector('.faq__questions--four--answer');
const answerFive = document.querySelector('.faq__questions--five--answer');

const questionOneArrow = document.querySelector('.faq__questions--one--arrow');
const questionTwoArrow = document.querySelector('.faq__questions--two--arrow');
const questionThreeArrow = document.querySelector('.faq__questions--three--arrow');
const questionFourArrow = document.querySelector('.faq__questions--four--arrow');
const questionFiveArrow = document.querySelector('.faq__questions--five--arrow');

function selectedQuestion(number) {
    answerOne.classList.remove('display');
    answerTwo.classList.remove('display');
    answerThree.classList.remove('display');
    answerFour.classList.remove('display');
    answerFive.classList.remove('display');

    questionOne.classList.remove('selected');
    questionTwo.classList.remove('selected');
    questionThree.classList.remove('selected');
    questionFour.classList.remove('selected');
    questionFive.classList.remove('selected');

    questionOneArrow.classList.remove('selected');
    questionTwoArrow.classList.remove('selected');
    questionThreeArrow.classList.remove('selected');
    questionFourArrow.classList.remove('selected');
    questionFiveArrow.classList.remove('selected');

    switch (number) {
        case ('numberOne'):
            answerOne.classList.add('display');
            questionOne.classList.add('selected');
            questionOneArrow.classList.add('selected');
            break;
        case ('numberTwo'):
            answerTwo.classList.add('display');
            questionTwo.classList.add('selected');
            questionTwoArrow.classList.add('selected');
            break;
        case ('numberThree'):
            answerThree.classList.add('display');
            questionThree.classList.add('selected');
            questionThreeArrow.classList.add('selected');
            break;
        case ('numberFour'):
            answerFour.classList.add('display');
            questionFour.classList.add('selected');
            questionFourArrow.classList.add('selected');
            break;
        case ('numberFive'):
            answerFive.classList.add('display');
            questionFive.classList.add('selected');
            questionFiveArrow.classList.add('selected');
            break;
    }
}

questionOne.addEventListener("click", () => {
    selectedQuestion('numberOne');
})

questionTwo.addEventListener("click", () => {
    answerOne.classList.remove('display');
    answerThree.classList.remove('display');
    answerFour.classList.remove('display');
    answerFive.classList.remove('display');
    if (!answerTwo.classList.contains('display')) {
        answerTwo.classList.add('display');
    } else {
        answerTwo.classList.remove('display');
    }
})

questionThree.addEventListener("click", () => {
    answerOne.classList.remove('display');
    answerTwo.classList.remove('display');
    answerFour.classList.remove('display');
    answerFive.classList.remove('display');
    if (!answerThree.classList.contains('display')) {
        answerThree.classList.add('display');
    } else {
        answerThree.classList.remove('display');
    }
})

questionFour.addEventListener("click", () => {
    answerOne.classList.remove('display');
    answerTwo.classList.remove('display');
    answerThree.classList.remove('display');
    answerFive.classList.remove('display');
    if (!answerFour.classList.contains('display')) {
        answerFour.classList.add('display');
    } else {
        answerFour.classList.remove('display');
    }
})

questionFive.addEventListener("click", () => {
    answerOne.classList.remove('display');
    answerTwo.classList.remove('display');
    answerThree.classList.remove('display');
    answerFour.classList.remove('display');
    if (!answerFive.classList.contains('display')) {
        answerFive.classList.add('display');
    } else {
        answerFive.classList.remove('display');
    }
})