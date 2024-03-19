// find the cheapest phone 

const phones =[
    {brand:'iphone', model:'15 pro max',camera:'100mp' , battary:'3500mp' ,price:150000},
    {brand:'iphone', model:'14 pro max',camera:'90mp' , battary:'3000mp' ,price:140000},
    {brand:'iphone', model:'15 pro',camera:'95mp' , battary:'3800mp' ,price:145000},
    {brand:'iphone', model:'15 mini',camera:'800mp' , battary:'3000mp' ,price:130000},
    {brand:'iphone', model:'14 pro',camera:'80mp' , battary:'2800mp' ,price:130000},
    {brand:'iphone', model:'14 mini',camera:'85mp' , battary:'2500mp' ,price:120000},
]


function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        let phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mobile = cheapestPhone(phones);
console.log(mobile);