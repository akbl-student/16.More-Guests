

let Guest_List :string [] = ['asif','ali','amjid'];

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!')
}
let absent_Guest :string = 'Amjid';

let new_Guest :string = 'jawid';

Guest_List[0] = new_Guest;

for (let i = 0; i <Guest_List.length; i++) {
 
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!');
}

console.log('Dear Mr. ' + Guest_List [i] + ',\n\nit is our pleasure to iwite you in our party.\n\nit');

console.log('Mr. ${absent_Guest} is not coming to the party.')

