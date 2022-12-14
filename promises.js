const $numberInput1 = $('.numbers-input1');

const $numberSubmit = $('.numbers-submit');

const $factsText = $('.facts-text');
const $factsDisplay = $('.facts-display');

const $batchnumbers = $('.numbers-batch');
const $numBatchSubmit = $('.numbers-batch-submit');
const $batchFactsDisplay = $('.batch-facts-display');

const baseURL = "http://numbersapi.com";
let favNums = [2, 4, 6];
console.log(`${baseURL}/${favNums}`);

$numBatchSubmit.on("click", function(evt) {
    evt.preventDefault();
    const nums = $batchnumbers.val();
    axios.get(`${baseURL}/${nums}?json`)
    .then(data => {
        console.log(data);
    })
});

$numberSubmit.on("click", function(evt) {
    evt.preventDefault();
    const num1 = $numberInput1.val();

    let promiseArray1 = [null, null, null, null];
    let promiseArray2 = promiseArray1.map(() => axios.get(`${baseURL}/${num1}?json`));

    Promise.all(promiseArray2).then(facts => {
        facts.forEach(data => {
            $factsDisplay.append(`<p>${data.data.text}</p>`);
        })
    });
});