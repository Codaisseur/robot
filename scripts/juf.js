// Description:
//   Benjamins examples
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot who are you?  - returns I am a robot
//   hubot my name is firstName lastName  - returns hai firstName lastName

module.exports = function(robot){
  robot.hear(/hoi/i, function(msg){
    msg.reply('Hallo');
  })
  robot.hear(/[0-9]+/i, function(msg){
    console.log(msg.match);
    var number = parseInt(msg.match[0], 10)
    if(number % 7 == 0){
      msg.reply('Juf');
    }
  })
  robot.respond(/link/i, function(msg){
    msg.reply('https://github.com/Codaisseur/robot')
  })
  robot.respond(/who are you\?/, function(msg){
    msg.reply('I am a robot');
  })
  robot.respond(/my name is ([a-z]+)( [a-z]+)?/i, function(msg){
    console.log(msg.match);
    var firstName = msg.match[1];
    var lastName = msg.match[2];
    if(lastName === undefined){
      lastName = "";
    }
      msg.reply("hai " + firstName + " " + lastName )
  })
}
