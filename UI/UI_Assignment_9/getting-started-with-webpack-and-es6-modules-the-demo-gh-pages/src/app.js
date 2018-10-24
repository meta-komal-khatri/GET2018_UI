import {sayHello} from './modules/greeting';
import {sum, product} from './modules/math-functions';

const resultGreeting = document.getElementById('resultGreeting');
const resultSum = document.getElementById('resultSum');
const resultProduct = document.getElementById('resultProduct');

const a = 3;
const b = 7;

resultGreeting.textContent = sayHello('Nice to see you! 🙂');
resultSum.textContent = `The sum of ${a} and ${b} is ${sum(a)(b)}. ✨`;
resultProduct.textContent = `The product of ${a} and ${b} is ${product(a, b)}. 🚀`;

window.createSumDiv=function(){
    var para = document.createElement("p");
    para.id="newSum";
    para.textContent = `The sum of ${a} and ${b} is ${sum(a)(b)}. ✨`;
    var results = document.getElementById("results");
    var resultSum = document.getElementById("resultSum");
    results.insertBefore(para,resultSum);
}