for(let i = 0 ; i < 10 ; i++){
    console.log(`Value is ${i}`);
    if(i === 5)
        break; // Terminates the loop
}


for(let j = 0 ; j < 10 ; j++){
    if(j === 5)
        continue; // Skips the loop for one iteration
    console.log(`Value is ${j}`);
}