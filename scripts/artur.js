module.exports = function(robot){
  robot.hear(/hi/i, function(msg){
    msg.reply('Hi bro, wssup?');
  })
  robot.hear(/[0-9]+/i, function(msg){
    console.log(msg.match);
    var number = parseInt(msg.match[0], 10)
    if(number % 7 == 0){
      msg.reply('Juf');
    }
  })
  robot.respond(/who are you\?/, function(msg){
    msg.reply('I am your bro');
  })
  robot.respond(/my name is ([a-z]+) ([a-z]+)/i, function(msg){
    console.log(msg.match);
    var firstName = msg.match[1];
    var lastName = msg.match[2];
    if(lastName === undefined){
      lastName = "";
    }
      msg.reply("Hi " + firstName + " " + lastName )
  })

  var timer;
  robot.hear(/.*/, function(msg){
    if(timer){
      clearTimeout(timer);
    }
    timer = setTimeout(function(){
        msg.reply("Captain have you forgotten me? :-( )");
    }, 5000000);
  })


  robot.hear(/go.*/, function(msg){
   msg.reply("AY AY CAPTAIN!!");
  })

  var uhh_what;
  uhh_what = ["I could tell you, but then I'd have to kill you", "Pff not now pleasee!", "You can't possibly compare them!", "Both hold a special place in my heart"];

  robot.respond(/(which|who) is (better|worse)\?* (.*) or (.*?)\?$/i, function(msg) {
      console.log(msg.random);
      var choosen_response;
      choosen_response = msg.random([1, 2, 3, 4, 5]);
      if (choosen_response >= 3) {
        return msg.send(msg.random(uhh_what));
      } else {
        return msg.send("Clearly " + msg.match[choosen_response + 2] + " is " + msg.match[2]);
      }
  });
}
