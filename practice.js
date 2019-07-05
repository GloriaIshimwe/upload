//Black jack application 
// let card1 = "Ace of spades", 
//     card2 = "Ten of Hearts"; 

// console.log (" "+ card1); 
// console.log (" "+ card1);

// Variables and Arrays
// let deck = [
//     "Ace of Spades", 
//     "Two of Spades", 
//     "Three of Spades"
//     ]; 
// let PlayerCards = [deck[0], deck[1]]; 

// console.log (" "+ PlayerCards[0]);
// console.log (" "+ PlayerCards[1]);

let score = 1000; 
    if (score<=1000) { 
        score = score - 500; 
    }
    else {
        score = score + 500; 
    }
// Switch case practices
let state = "kigali"; 
    switch (state){
        case "Rwanda": 
            {console.log ("You chose" + "Rwanda")}; 
            break; 
        case "kigali": 
            {console.log ("You chose " + "Kigali")}; 
            break; 
        default: 
            {console.log("Unkown")}
            break; 
    }
// loops practices
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']; 
let values = [ 'Ace','King', 'Queen', 'Jack', 'Ten','Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Four', 'Three', 'Two', 'One']; 
// Nested for loop practice ___ idx means index/ for (initialization (define variable), condition, increment); 
/*let deck = []; 
    for (let suitsIdx = 0; suitsIdx < suits.length; suitsIdx++ ){
        for (let valuesIdx = 0; valuesIdx < values.length; valuesIdx++){
        deck.push(values[valuesIdx] + " " + suits[suitsIdx])
        }
}
for (let i = 0; i < deck.length; i++){
    console.log (deck[i])
}
*/
function createCards(){
     let deck = []
    for (let suitsIdx = 0; suitsIdx < suits.length; suitsIdx++ ){
        for (let valuesIdx = 0; valuesIdx < values.length; valuesIdx++){
        deck.push(values[valuesIdx] + " " + suits[suitsIdx])
        }
    }
return deck; 
}
function getNextCard(){
    return deck.shift(); 
}
let deck = createCards();
for (let i = 0; i < deck.length; i++){
    console.log (deck[i]);
}
let PlayerCards = [getNextCard(), getNextCard()]; 
