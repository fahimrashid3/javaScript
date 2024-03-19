const friends=['fahim' ,'rashid','fahim','shihan','mayen','emon','lahin','shihan','raj',
'hasib','raj','sajjad','rashid','shakib','shihab','shihan','emon'];


function removeDuplicate(array){
    const friendsNew=[];

for(let i=0 ;i<friends.length; i++){
    const friend=friends[i];
    
    if(friendsNew.includes(friend)===false){
        friendsNew.push(friend);
    }
    

}
return friendsNew;

}

const friendsNewName= removeDuplicate(friends);
console.log(friendsNewName);