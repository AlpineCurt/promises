const baseURL = "https://deckofcardsapi.com/api/deck"

// 1.
axios.get(`${baseURL}/new/draw/?count=1`)
.then(data => {
    console.log("Question 1")
    console.log("Single card from new deck")
    //console.log(data)
    console.log(data.data.cards[0].value, data.data.cards[0].suit);
});

// 2.
let deckID1;
let card1;
let card2;
axios.get(`${baseURL}/new/draw/?count=1`)
.then (data => {
    deckID1 = data.data.deck_id;
    card1 = data.data.cards[0].value + ' ' + data.data.cards[0].suit;
    return axios.get(`${baseURL}/${deckID1}/draw/?count=1`);
})
.then (data => {
    card2 = data.data.cards[0].value + ' ' + data.data.cards[0].suit;
    console.log ("");
    console.log("Question 2");
    console.log(card1);
    console.log(card2);
});

// 3.
const $cardBTN = $('.get-card');
const $cardSpot = $('.card-spot');

let deckID;
axios.get(`${baseURL}/new/shuffle/?deck_count=1`)
.then(data => {
    deckID = data.data.deck_id;
})


$cardBTN.on("click", function(evt) {
    evt.preventDefault();
    axios.get(`${baseURL}/${deckID}/draw/?count=1`)
    .then (data => {
        $cardSpot.append(
            $('<img>', {
                src: data.data.cards[0].image
            })
        )
    })
});