//The first code block defines the variables "topics" and "randomTopic"

var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random()* topics.length)]; 

//This code block defines the function listTopics

function listTopics () {
    for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
   }
}

//This code block defines the function selectTopic

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
       } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
       } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
       } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
       } else {
        console.log('Please try again!');
       }
}

//This code block is the execution of the functions outlined above

console.log('Here are the topics we learned through Prework:');
listTopics()
console.log('Which topic should we study first?');
selectTopic()