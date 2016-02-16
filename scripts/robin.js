module.exports = function(robot){
  robot.hear(/hoi/i, function(msg){
    msg.reply('Hallo');
  })
  robot.hear(/[0-9]+/i, function(msg){
    console.log(msg.match);
    var number = parseInt(msg.match[0], 10)
    if(number % 7 == 0){
      msg.reply('Whoof');
    }
  })
  robot.respond(/Who are you\?/i, function(msg){
    msg.reply('I am a robot');
  })
  robot.respond(/My name is ([a-z]+) ([a-z]+)/i, function(msg){
    console.log(msg.match);
    var firstName = msg.match[1];
    var lastName = msg.match[2];
    if(lastName === undefined){
      lastName = "";
    }
      msg.reply("hai " + firstName + " " + lastName )
  })
  robot.respond(/I am hungry/i, function(msg){
    msg.reply('We should grab something to eat!');
  })
  robot.respond(/I want a ([a-z]+)/i, function(msg){
    console.log(msg.match);
    var food = msg.match[1];
    msg.reply("I can eat a " + food )
  })
  robot.respond(/I like some dessert/i, function(msg){
  msg.reply('Ice cream!');
})
  robot.respond(/Rules/i, function(msg){
    msg.reply('1st RULE: You do not talk about FIGHT CLUB. 2nd RULE: You DO NOT talk about FIGHT CLUB. 3rd RULE: If someone says "stop" or goes limp, taps out the fight is over.');
})

}
