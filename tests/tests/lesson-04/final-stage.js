function findPairsDivisibleBy17(){
    let count = 0;
    for (let i = 1; i <= 100; i++){
        for (let j = i+1; j <= 100; j++){
            let sum = i + j;
            if (sum % 17 === 0){
                count ++;
            }
        }
    }
    console.log(`Tong cong: ${count} cap`);
}
findPairsDivisibleBy17();