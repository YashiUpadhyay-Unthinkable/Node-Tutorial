
const {readFile, writeFile} = require('fs');

// const first = readFile('./content/first.txt', (err, result) => {});
// bina utf k alag answer print hoga

console.log('START');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }

    // console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }

        // console.log(result);
        const second = result;
        writeFile('./content/res-async.txt', `Here is the res: ${first}, ${second}`,
        (err) => {
            if(err){
                console.log(err);
                return;
            }
            console.log("Done with the task!");
        });
    });
});
// this is in asynchronous manner

console.log("Starting new task!");