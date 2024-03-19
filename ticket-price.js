/*
1. less then 100 =100 tk 
    more then 100 and less then 200 =90 tk
    mor then 200 =70 tk 

calculate the total ticket price using function

*/

function totalTicketCost (number){

    const first100TicketPrice=100;
    const second100TicketPrice=90;
    const restAllTicketPrice=70;

    let totalTicketPrice=0;
    if(number<=100){
      const ticketPrice=first100TicketPrice*number;
      totalTicketPrice=ticketPrice;

    }
    else if(number>100 && number<=200){
        const tempPrice=first100TicketPrice*100;
        const restTicketCount=number-100;
        const restTicketPrice=restTicketCount*second100TicketPrice;

        const ticketPrice=tempPrice+restTicketPrice;
        totalTicketPrice=ticketPrice;

    }
    else{
        const tempPrice1st=first100TicketPrice*100;
        const tempPrice2nd=second100TicketPrice*100
        const restTicketCount=number-200;
        const restTicketPrice=restTicketCount*restAllTicketPrice;

        const ticketPrice=tempPrice1st+tempPrice2nd+restTicketPrice;
        totalTicketPrice=ticketPrice;

    }
    return totalTicketPrice;
}

const totalPrice= totalTicketCost(205);
console.log(totalPrice);