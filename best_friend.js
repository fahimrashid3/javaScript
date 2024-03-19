
function bestFriend(friends){

    let longestName=friendList[0];

    for(let i=0; i<friends.length; i++){
        const bestFriendName=friends[i];
        if(bestFriendName.length>longestName.length){
            longestName=bestFriendName;
        }

    }
    return longestName;
}

const friendList=[
    'Nur Al Mahmud Mayen','Rezanoor bin Rashid Emon','Robayed Ahmed lahin','Mahmudul Hasan Shihan','Fahim Hasan','Rakibul Islam Raj',
    'Afatullah Siddik','Sajjad Hossain','Ariful Islam Hasin'
]

const bestFriendNameLongest=bestFriend(friendList);
console.log(bestFriendNameLongest)