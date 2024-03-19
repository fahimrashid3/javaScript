function maxInArray(numbers){
    let largest =numbers[0];

    for (let i=0 ; i<numbers.length;i++){
        const index=i;
        const element=numbers[index];
        if(element>largest){
            largest=element;
        }
    }
    return largest;
    
}
const heights=[167,200,443,405];

const maximum=maxInArray(heights);
console.log(maximum);