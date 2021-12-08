let activeCards = 0;
let gameCards = 0;
let card1 = null;
let card2 = null;
let sucessCards = 0;
let plays = 0;
let gameSelected = "";
let gameSelect = 1;
let second = 0;
let minute = 0;
let hours = 0;
// let timer = timer();
let witcherDeckCards = [
    '<img class="geralt" src="https://bn02pap001files.storage.live.com/y4mOjZPsZsDI3nrKk1xqqewvZrwvJSxpBHgZXeAQHgFf5Or7mKNnLlbYIcDkKZrOi0dCG8qhUaOiYENxkPP_oMG_2uSOprzCUI61_ZVVfN4w1IKUEv4uCLEh3nSIXKsI_iTnXv28VVN9WvrXf4LjCbSw6bPKX7OoieVY5ZozDZFz-5DxtB8UvMYgDSiFvqfqdvO?width=600&height=600&cropmode=none" />',
    '<img class="yenn" src="https://bn02pap001files.storage.live.com/y4mQo0LBM03cd3P2jZQaNrAM26Zmw342xstskFkWHOjAAD-lPMadOOGHRMFMc-LKpQX9juj9amKIwc6i5OqIHZ8pKnY7MLr3B7XN065aJUi5aFRcRvn44TSCfu-zeT-jln8W0zgMfd7D42RigpLXvTIih6HadbS8yuxZP7mlXvUIPyMZ8ZnHdz4taiCdEzAWEI-?width=600&height=600&cropmode=none"/>',
    '<img class="wildhunt" src="https://bn02pap001files.storage.live.com/y4mPnAADly863PAqKpMwFJf17i_FmzF9GmZdxdaJGbT3beuFO3Kdg2bMKr8vmqzo4HJy0ZyBLRnmyXvev2eoSJo3fNlU5GeY0uFBaHrHDaCPxUTnmAepfxtIgHbV13XC_wjKicsWO7nW3jbDLLJOeiUJWu6hnJCiVeZ8DBedW-WOQX-RSXuL27zxmlRzMn8-6cM?width=600&height=600&cropmode=none"/>',
    '<img class="dandelion" src="https://bn02pap001files.storage.live.com/y4m9RPDnIR-csLFsE4wMyJSOCdiRl_NEsEcc73sSMVMtlCLT-JVO46ifIK4kIaDzKxSeTGyuH0UZMm8nqhLPu2FLS-lGwvW5d6y_gLyqkFTfnFNRxM31dL7uHl9FfHFRGMHDrw4AgPvlNMlX_AWqMYoB0DPl39t9gHIirSPF1VMHhNjz7f6H7Cy7ESTLH9uufIg?width=600&height=600&cropmode=none" />',
    '<img class="triss" src="https://bn02pap001files.storage.live.com/y4mKqNL58eXL9UnUFbAJv0QLB3hQ8bIsSyc-EKtcRKn4ZsGrXysZt7niye5t0n3uAS-3lKkWowjtZRMgbc17Mv9B8To92fwoJH8jlm9ahxokjYkvtZP5ve-3bAa6R8bTTU_-2PHMM4-tK1BKAKMQKUDmBOam32_nZNTfdt1zL_sTRgjfWMYlADTckxZgNOiM7Mk?width=600&height=600&cropmode=none"/>',
    '<img class="vessemir" src="https://bn02pap001files.storage.live.com/y4m-l-8htnBbOuU8f8TxWSvK8J2bnmBeMWRZzjtLZYWdkXOPn_BXqO4o_YprPgPQe0db_J-XrtPVxx16ULFnUN6rNkPwCDeRg8VH_CTQtjn3ycsJUTLrcaZDaSNKkcF32jQS0re9DqMWssj1nVOS52ADzgXfAvYS6kD-T1caVzRhOenwRPZkdGz_DkLlXx6u8S9?width=600&height=600&cropmode=none"/>',
    '<img class="ciri" src="https://bn02pap001files.storage.live.com/y4mHcvwbgA-zZZSpra4vVN7xN9clm75Ty9k92cAqKnyuY29Zerlo9bRdgylUzs4QvthQHQguS02QTH9l9aulZ0fq0NthI3p-QvFvpiwgQcw-QjAx8wcykF8twPAhIPYmK0boeShfaJUb-32ZiT0GLLBiOb_XA8WWWE4Php52ZbfAPDJIGLC6fsb7HRdG8gOURMZ?width=600&height=600&cropmode=none"/>',
    '<img class="emhyr" src="https://bn02pap001files.storage.live.com/y4mEU1Jsl_jckP7tbCXh8klhxMMxv2FH29apLmt7kYmlyUlh3vCyYLOMvDwe3_ghaD4um8IJHHPj6AsSaBoDulYUMMV3EBVRzBN3FaOi6ey25FgJcGEp17a6hQZyRyGy8PZLUeFClCER0yjCwnnaCCqdN-7HHwNk9DoMlxxbKtcMfGZixxh9ChEBDrrUZDmX6do?width=600&height=600&cropmode=none"/>',
    '<img class ="demon" src="https://bn02pap001files.storage.live.com/y4mGuUYn2JkCRaTufezVZZnnTrHK77Gkf7nRv9gChifS70q3ReZgeH0zW48-KzNn75DEsxmx27xuhI-tBVLE1JIPXNoTK7QNDDWgKLoxtfQp6CpjeFEZA-0T9itr1BOKnVWkbGnBpvikaMmkKqON4nETnZoVlx35H9nQCa06eRdfbVO2_xEZhrr1q8PtLHfHcL9?width=600&height=600&cropmode=none"/>',
    '<img class = "hjalmar" src="https://bn02pap001files.storage.live.com/y4mHpq6gdBZeNHF5kDHUQZyOki5Hv165TXWQrzobhRyZ9kPwpbhPqE8LidPVxDVlQqMHt6f03VstSG3SnVEOv0BlBTnz9f9Y_vHmoXefVcPSSNdX_USnZ0ZSri6FinCoPtIko9LLnepZaGiBkSQk294JsUTsB8grg5EG34lr1hfjBWiLcf2OLBmxvVAzTQytYPt?width=600&height=600&cropmode=none"/>',
    '<img class="vernon" src="https://bn02pap001files.storage.live.com/y4mhIIuPH3DDCLOaWS3JNbsJx77x3OKQJzNmTn1Rd6mGKv01JXpeZ0iitG5rqD4xqKubwuwcf2hLu3-NrCZBanePsxwo03rRORgk8XBoUpvMdYi1UQjVBZnLJUd-2txATY5MwUBfmuapFcKWnIihGCjBTXCO5-NHRP8-JsrIU4dAeZXwLgYjIaJOHwCeopZVbwK?width=150&height=150&cropmode=none"/>',
    '<img src="https://bn02pap001files.storage.live.com/y4mUT_EaUmP-8L3lsAd1Bn2uNXP3aVolTGaowDd1uap6VJBy_NwqjRQlw6f9e8cUVS_kZ3CPOgm2i1VhnA1VCyb17HutRuEg30RZ2aRwuy_FoNjKkonGdEDQwr0lJ9ABYBuzXgi46Bi8vjEhaifNk4o9hZSaSSkeiG2-nZyEVGrExcVwYYrOQEi-WnjRc-7Hvry?width=150&height=150&cropmode=none"/>',
];

let wowDeckCards = [
    '<img class = “bluedrake” src="https://bn02pap001files.storage.live.com/y4mIUjusk0AMUhxcyrRyqMrZj5pn2i5q3Lq1dtkErebGcaY8nLREn9VnHDIaD9M6V0qvKyr_aq-3d7niFYKIdHTAzh_CsqJa6qDE2h1LUqJzJ4Iup03fNSdsqkHhhAVDsd34sAeXFTWcg6CFmXVJCZb49JcCA-WRrqwdsrm3suvSjHYWn99lDM9s-KZE_ydElpm?width=651&height=855&cropmode=none"/>',
    '<img class=”alysrazor” src="https://bn02pap001files.storage.live.com/y4mgUDLcPjMX-eR1yjEoKVjQ6yYF_Aqv2UcdagCHtLsIbMR9DwMAzzGlvJItaKUky9lu2kpJHF2VSnSpyXIfAC2NeE_dQYJHclwOS45vEdCNb9xbFK-bS6cVbcaoQO0aMRgDdtRXc2FcbAp31t7lsvZjJDYPR3PnV2CayoSSvrDaGpfzRs6IcfzU4Rfr0VQXrTU?width=651&height=855&cropmode=none"/>',
    '<img class=”ashes” src="https://bn02pap001files.storage.live.com/y4mzf4cQVL9qUOUUIRmIw3edQa7cOq_UYzku9OUkMr5vzLv-vz2PYNqzSOizoAQmZWj5pVf-sfPhwDbhDYzd3xTJ6L4e0A4LV2Vh0d8YtP3I5bAewScarDtl-bq9lrREKZjWyQ-LQKCKd1_4IuqvPBWou3u4EhZ_S7MvGjRB2ybjCTa-e1_tAygzQS1DYQCPN9w?width=651&height=855&cropmode=none"/>',
    '<img class =”bluep” src="https://bn02pap001files.storage.live.com/y4mDrTaYTnWfBK2jhG755MTLWCHZ_SAVpehxG2WTOBltMOcTRvDctUnVKE3i88yKuP8GOrW7wlAj9WcjkUbWd1c2qPB52DgtkOhKjvrTYZUTR39hWG0rWwQ_kEttNwuKeJB1qfg__Epyai_UJvcH9P1o_mK8FpvD00x5LULU4POQgRQcN8_CfMRoFZSwt7YjHsN?width=651&height=855&cropmode=none"/>',
    '<img class =”corrupted” src="https://bn02pap001files.storage.live.com/y4mIePi1OPt4rp9UCow57rQlARflj6So_UEqqShrRTd3PUDanb-yHgXiquS8nnmZ7oKjvoVsz5NWWdM-Tc0iM-8s9EJMKuJ4A7BMboBkjPG7kjk9pQAAyOG-alTvoG7VzA8TT1nkCUwKO0WoiJX4fGH1oq2-aKm0ANyNj1adqADZBSHVdjvwB3C4PDCSaLOwE3Y?width=651&height=855&cropmode=none"/>',
    '<img class=”firehalk” src="https://bn02pap001files.storage.live.com/y4mqfkMlwlgmZ6pcRnSK0ZWl1amL_OZKzX7oBDbgBWDF2UjvxidqI4I54wAUzXPnjYEH2-uSxEfkpGT3FJ1539IJuAi0UrxCtxTNtEzrQEecn_9S5XcsDkBOxlcEdXa2X6xS8G5AeONZ4diV7rJgwooYpxGFRcjZqg03c_CXUXDpi2S6TJM66MX3UjU1U8dIqm4?width=651&height=855&cropmode=none"/>',
    '<img class=”heaven” src="https://bn02pap001files.storage.live.com/y4mNE1OyEx4FNR7e7a0HA2WaPUr8Yc9lYFBAiDnRobzg_XE4zseHn_W62XRP7AKNf-3anuIj1qjnQDoVTJ2xUgTNeSovBf7xfiDKTlETsb8yXXceyyb-9NblXJvLHS2qIFdTuFQL-nnXS8lsoZROCmjDNBAWRHQ7mZ70NB8Y8BygCoPzkkSGn9LWG7NeUWK5lAl?width=651&height=855&cropmode=none"/>',
    '<img class=”invincible” src="https://bn02pap001files.storage.live.com/y4mSbf-7jCRvxOZ33XrO-_EurtDc3bzvJ1CJ9ikH5YUZBGLjekx6N6wb-_Bk_KD09lemJVpTsiGF_UISN3jaCdlbHDbL3rOZ0ADOenU7V_yYLU-aieE_QJ8B45lywUUML8Ny3z83_zSn9jM4bzJFMb4bH7cr5MoNfrOnr2Mjov-pAkhbzSAMdg-1fPlNLHpAJgg?width=651&height=855&cropmode=none"/>',
    '<img class=”ironbound” src="https://bn02pap001files.storage.live.com/y4mYo_TuAxtUUfMadABpAs6sKbhW5uQnlljilwMpQOUenCctTLD6dJox9sdf_0jygO3_stjyuPCn0BAjUnGpKkQg1t5hSSx-vFUi0Jvvn9Pa_QKe2qXFH2uw8boJCEV48c3YFYLO9_mNYnHlbjbboI4_WZ5AVpqfCZ6knL9BUiA7CxZT3SeqIUCtBAlsfeZ72bR?width=651&height=855&cropmode=none"/>',
    '<img class=”onyxia” src="https://bn02pap001files.storage.live.com/y4mW3fx6tb90ojpYgzpjrO32iGWkTwN6joqQFicu1jx1MqhhWlNOEtxUahCFvURqDNgqZJVnP55CtxZEj2-pWm5XVHvJWAv4-7UReP23kWjiex2DZFTRR6WPz0ihOOQvhUErQcLKBoLhadaMHkMIJhaNG5TadwsPtoITCM0XhKORQqH10Q_oTLiaKM81i-y21Bs?width=651&height=855&cropmode=none"/>',
    '<img class=”stonedrake” src="https://bn02pap001files.storage.live.com/y4mHZcqoC78HfkHOXiANVjrbBPjAYdYIHNLVMjXCMCNpsP_SfQ7VDQvg4FM9huQr4fNQry83986rT7WoWchZCXrMp2O3q0AMqOey1hUrNaDckHLS2n7O9g3Tmm4TU5kpaDWJ5du98mJmIfw4qwjTr_FFzvt83hsfYsNOJte4sHAdFaZGHUqdFEF3OY3V4w2txpu?width=651&height=855&cropmode=none"/>',
    '<img class=”twilight” src="https://bn02pap001files.storage.live.com/y4mtovJbXIxhKN_y8SvhnOJbx9NZTzCPVIveAdYFkuFXF_dseFqm_BTLYtnUAqMrDQFRnxNe1TRKcPKCX717tt_9nkYpvRNkV-t3X5xA-f6xkc4DVSnr-BhVCkLW8kNBtC6jqQyD4k8IYE5MXpJp6SfU6elCjq1R3AVd0WlgsmlxCHeEdFaQ-m33qJwF7i18OE4?width=651&height=855&cropmode=none"/>',
    '<img class=”TLPD” src="https://bn02pap001files.storage.live.com/y4mDI4CXFF6Fk_ZRnoNbBLjqIMQzod04tFLF25JYFQ3v0oCwIZ1s7qiZZ5am_ZEiPBOeuNBG64aV_Xwjd3uaWhHcnzJWbzEfaLd8Y2mSZgG_NiHA4RAbOn9O-2NUps7XRf0-hvHnusFJhyzTBUj5O5KQ3xyfqW5udlPvq8Q6Kb9JYgbstFSfm5PfTROUYPkGsUq?width=651&height=855&cropmode=none"/>',
];

function selectCardNumbers(button) {
    //identifica o numero de cards que o usuário clicou e armazena o valor//
    const buttonSelected = document.querySelector(".n-cards .selected");
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("selected");
    }
    button.classList.add("selected");
    gameCards = parseInt(button.innerHTML) / 2;

    //Ao selecionar o numero de cartas habilita o botao jogar//
    const nextButton = document.getElementById("disabled-button");
    if ((nextButton.disabled = true)) {
        nextButton.classList.remove("disabled-button");
        nextButton.disabled = false;
    }
}

function selectGameType(button) {
    //identifica o tipo de jogo que o usuário clicou e armazena//
    const buttonSelected = document.querySelector(".game-type .selected");
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("selected");
    }
    button.classList.add("selected");
    gameSelected = button.id;

    //Os jogos possuem paletas de cores diferentes, por isso mudamos a cor ao clicar em cada um//
    if (gameSelected == "witcher") {
        gameSelect = 1;
        const color = document.querySelector("body");
        color.classList.remove("body-wow");
        color.classList.add("body-witcher");
    } else {
        gameSelect = 2;
        const color = document.querySelector("body");
        color.classList.remove("body-witcher");
        color.classList.add("body-wow");
    }
}

function shuffleCards() {
    //Esconde o menu para começar o jogo//
    const gameStyle = document.querySelector(".show");
    gameStyle.classList.remove("show");

    //Cria o setup de acordo com qual jogo foi escolhido//
    if (gameSelect == 1) {
        shuffleWitcherCards();
        const gameName = document.getElementById("game-name");
        gameName.innerHTML = "Witcher Memory Game";
    } else if (gameSelect == 2) {
        shuffleWowCards();
        const gameName = document.getElementById("game-name");
        gameName.innerHTML = "WoW Dragons Memory Game";
    }
}

function shuffleWitcherCards() {
    //Muda a ordem do array, embaralhando as cartas//
    for (let i = witcherDeckCards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = witcherDeckCards[i];
        witcherDeckCards[i] = witcherDeckCards[j];
        witcherDeckCards[j] = temp;
    }

    //Utiliza apenas a quantidade de cartas selecionadas pelo usuário e dobra o array para ter pares de cartas//
    const activeCards = witcherDeckCards.slice(-gameCards);
    const myCards = activeCards.slice(0);
    for (let i = 0; i < activeCards.length; i++) {
        myCards.push(activeCards[i]);
    }

    //Embaralha o array novamente//
    for (let i = myCards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = myCards[i];
        myCards[i] = myCards[j];
        myCards[j] = temp;
    }

    printCards(myCards);
}

function shuffleWowCards() {
    //Muda a ordem do array, embaralhando as cartas//
    for (let i = wowDeckCards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = wowDeckCards[i];
        wowDeckCards[i] = wowDeckCards[j];
        wowDeckCards[j] = temp;
    }

    //Utiliza apenas a quantidade de cartas selecionadas pelo usuário e dobra o array para ter pares de cartas//
    const activeCards = wowDeckCards.slice(-gameCards);
    const myCards = activeCards.slice(0);
    for (let i = 0; i < activeCards.length; i++) {
        myCards.push(activeCards[i]);
    }

    //Embaralha o array novamente//
    for (let i = myCards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = myCards[i];
        myCards[i] = myCards[j];
        myCards[j] = temp;
    }

    printCards(myCards);
}

function printCards(myCards) {
    //Coloca e mostra as cartas no HTML //
    const showCards = document.getElementById("root");
    for (let i = 0; i < gameCards * 2; i++) {
        showCards.innerHTML += `<div class="container" onclick="selectCard(this)">
        <div class="image-front card">
        </div>
        <div class="image-back card"></div>
    </div>`;
    }
    const imageFront = document.querySelectorAll(".image-front");
    const showContainer = document.querySelectorAll(".container");
    for (let i = 0; i < gameCards * 2; i++) {
        showContainer[i].classList.add("show");
        imageFront[i].innerHTML = myCards[i];
    }

    //Habilita o botao de Finalizar Jogo
    const buttonFinish = document.querySelector(".finish");
    buttonFinish.classList.add("show");
}

function selectCard(element) {
    //Marca o botao selecionado para facilitar rastreamento e bloqueia o usuario de clicar nela novamente//
    element.classList.add("marked");
    element.classList.add("block");
    activeCards++;

    //itens marcados sao armazenados atraves de sua classe unica de cada par de carta//
    const cards = document.querySelectorAll(".marked img");
    if (cards.length == 2) {
        card1 = cards[0].classList;
        card2 = cards[1].classList;
    }

    //Ao selecionar as duas cartas é feita a comparação com as duas, com uma animaçao de 1segundo, enquanto isso qualquer ação é bloqueada
    if (activeCards == 2) {
        activeCards = 0;
        plays++;
        const blockContainer = document.querySelectorAll(".show");
        for (let i = 0; i < blockContainer.length; i++) {
            blockContainer[i].classList.add("block");
        }
        setTimeout(flipCard, 1000, element);
    }
}

function flipCard(element) {
    //Remove a marcação que não é mais necessária//
    element.classList.remove("marked");
    const marked = document.querySelector(".marked");
    marked.classList.remove("marked");

    //Compara se as cartas sao iguais//
    if (card1.value == card2.value) {
        element.classList.add("sucess");
        marked.classList.add("sucess");
        sucessCards++;
    }

    //Habilita novamente as ações do usuário//
    const blockContainer = document.querySelectorAll(".block");
    for (let i = 0; i < gameCards * 2 + 1; i++) {
        blockContainer[i].classList.remove("block");
    }

    //Se acabar as cartas o usuário venceu o jogo e finaliza//
    if (sucessCards == gameCards) {
        alert("Parabéns! Você venceu com apenas " + plays + " jogadas");
        removeCards();
    }
}

function finishGame() {
    //se o usuário sair com uma carta selecionada ela é desmarcada//
    const marked = document.querySelector(".marked");
    if (marked !== null) {
        marked.classList.remove("marked");
        activeCards = 0;
    }

    removeCards();
}

function removeCards() {
    //Remove todas as cartas do jogo e o botao de finalizar jogo//
    const imageFront = document.querySelectorAll(".image-front");
    const showContainer = document.querySelectorAll(".show");
    for (let i = 0; i < gameCards * 2; i++) {
        showContainer[i].classList.remove("sucess");
        showContainer[i].classList.remove("show");
        imageFront[i].innerHTML = null;
    }

    const showCards = document.getElementById("root");
    showCards.innerHTML = "";
    //Zera as informações salvas
    sucessCards = 0;
    plays = 0;
    card1 = null;
    card2 = null;

    //Aparece o menu de iniciar jogo novamente//
    const resetGame = document.querySelector(".game-style");
    resetGame.classList.add("show");
}

//Soon//
// function timer() {

//     second++;

//     if (second == 60) {
//         second = second - 60;
//         minute++;
//     }

//     const x = minute + ":" + second;
//     console.log(x);
//     return(x);

// }
