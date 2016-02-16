module.exports = function(robot){
  robot.respond(/.*/, function(msg){
    var message = msg.match[0];

    console.log(message);

    if(message.match(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/gi)){
      msg.reply("Is a valid email");
    }else if(message.match(/are you nuts\?/i)){
      msg.reply("Yep, totaly!");
    }else{
      msg.reply("I don't understand, try again!");
    }
  })
}
