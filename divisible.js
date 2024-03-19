// print number 1 to 50 and if number divided by 3 print foo . if divided by 5 print bar . if both than print foobar

for(let i = 1 ;i <= 50 ; i++){

    let number=i;
    if(number%3===0 && number%5===0){
        console.log("foobar");
        continue;
    }
    else if(number%3===0){
        console.log('foo');
        continue;
    }
    else if(number%5===0){
        console.log('bar')
        continue;
    }
    else{
        console.log(number);
    }
}