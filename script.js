let activeCards = 0;
let deckCards = ['<img class="geralt" src="https://bn02pap001files.storage.live.com/y4mOjZPsZsDI3nrKk1xqqewvZrwvJSxpBHgZXeAQHgFf5Or7mKNnLlbYIcDkKZrOi0dCG8qhUaOiYENxkPP_oMG_2uSOprzCUI61_ZVVfN4w1IKUEv4uCLEh3nSIXKsI_iTnXv28VVN9WvrXf4LjCbSw6bPKX7OoieVY5ZozDZFz-5DxtB8UvMYgDSiFvqfqdvO?width=600&height=600&cropmode=none" width="600" height="600" />', '<img class="yenn" src="https://bn02pap001files.storage.live.com/y4mQo0LBM03cd3P2jZQaNrAM26Zmw342xstskFkWHOjAAD-lPMadOOGHRMFMc-LKpQX9juj9amKIwc6i5OqIHZ8pKnY7MLr3B7XN065aJUi5aFRcRvn44TSCfu-zeT-jln8W0zgMfd7D42RigpLXvTIih6HadbS8yuxZP7mlXvUIPyMZ8ZnHdz4taiCdEzAWEI-?width=600&height=600&cropmode=none" width="600" height="600" />', '<img class="wildhunt" src="https://bn02pap001files.storage.live.com/y4mPnAADly863PAqKpMwFJf17i_FmzF9GmZdxdaJGbT3beuFO3Kdg2bMKr8vmqzo4HJy0ZyBLRnmyXvev2eoSJo3fNlU5GeY0uFBaHrHDaCPxUTnmAepfxtIgHbV13XC_wjKicsWO7nW3jbDLLJOeiUJWu6hnJCiVeZ8DBedW-WOQX-RSXuL27zxmlRzMn8-6cM?width=600&height=600&cropmode=none" width="600" height="600" />', '<img class="dandelion" src="https://bn02pap001files.storage.live.com/y4m9RPDnIR-csLFsE4wMyJSOCdiRl_NEsEcc73sSMVMtlCLT-JVO46ifIK4kIaDzKxSeTGyuH0UZMm8nqhLPu2FLS-lGwvW5d6y_gLyqkFTfnFNRxM31dL7uHl9FfHFRGMHDrw4AgPvlNMlX_AWqMYoB0DPl39t9gHIirSPF1VMHhNjz7f6H7Cy7ESTLH9uufIg?width=600&height=600&cropmode=none" width="600" height="600" />', '<img class="triss" src="https://bn02pap001files.storage.live.com/y4mKqNL58eXL9UnUFbAJv0QLB3hQ8bIsSyc-EKtcRKn4ZsGrXysZt7niye5t0n3uAS-3lKkWowjtZRMgbc17Mv9B8To92fwoJH8jlm9ahxokjYkvtZP5ve-3bAa6R8bTTU_-2PHMM4-tK1BKAKMQKUDmBOam32_nZNTfdt1zL_sTRgjfWMYlADTckxZgNOiM7Mk?width=600&height=600&cropmode=none" width="600" height="600" />', '<img class="vessemir" src="https://bn02pap001files.storage.live.com/y4m-l-8htnBbOuU8f8TxWSvK8J2bnmBeMWRZzjtLZYWdkXOPn_BXqO4o_YprPgPQe0db_J-XrtPVxx16ULFnUN6rNkPwCDeRg8VH_CTQtjn3ycsJUTLrcaZDaSNKkcF32jQS0re9DqMWssj1nVOS52ADzgXfAvYS6kD-T1caVzRhOenwRPZkdGz_DkLlXx6u8S9?width=600&height=600&cropmode=none" width="600" height="600" />', '<img class="ciri" src="https://bn02pap001files.storage.live.com/y4mHcvwbgA-zZZSpra4vVN7xN9clm75Ty9k92cAqKnyuY29Zerlo9bRdgylUzs4QvthQHQguS02QTH9l9aulZ0fq0NthI3p-QvFvpiwgQcw-QjAx8wcykF8twPAhIPYmK0boeShfaJUb-32ZiT0GLLBiOb_XA8WWWE4Php52ZbfAPDJIGLC6fsb7HRdG8gOURMZ?width=600&height=600&cropmode=none" width="600" height="600" />'];

function selectCard(element) {
    element.classList.add("marked");
    activeCards++;

    if (activeCards==2) {
        setTimeout(flipCard, 1000, element)
    }
}

function flipCard(element) {
    element.classList.remove("marked");
    const marked =  document.querySelector(".marked");
    marked.classList.remove("marked");
    activeCards = 0;
}

function shuffleCards(number) {
    
    for (let i = deckCards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = deckCards[i];
        deckCards[i] = deckCards[j];
        deckCards[j] = temp;
    }
    console.log(deckCards);
    const activeDeckCards = deckCards.slice(-(number/2));
    //  for (let i = (activeDeckCards.length - (number/2)); i>0; i--) {
    //  activeDeckCards.slice(-1);
    //  }
    console.log(activeDeckCards);
    const myCards = activeDeckCards.slice(0)
    for ( let i=0; i<activeDeckCards.length; i++) {
        myCards.push(activeDeckCards[i]);
    }
    console.log(myCards);

    for (let i = myCards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = myCards[i];
        myCards[i] = myCards[j];
        myCards[j] = temp;
    }

    console.log(myCards);

    printCards(number, myCards);
}

function printCards(number, myCards) {
    const imageFront = document.querySelectorAll(".image-front");
    const showContainer = document.querySelectorAll(".container")

    for (let i=0; i<number; i++) {
        showContainer[i].classList.add("show");
        imageFront[i].innerHTML = myCards[i];
    }
}