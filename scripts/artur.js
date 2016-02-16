module.exports = function(robot){
  robot.hear(/barlus/i, function(msg){
    msg.reply('barlus brat, wssup?');
  })

  var uhh_what;
  uhh_what = ["I could tell you, but then I'd have to kill you", "Pff not now pleasee!", "You can't possibly compare them!", "Both hold a special place in my heart"];

  robot.respond(/(which|who) is (better|worse)\?* (.*) or (.*?)\?$/i, function(msg) {
      console.log(msg.random);
      var choosen_response;
      choosen_response = msg.random([1, 2, 3, 4, 5]);
      if (choosen_response >= 3) {
        msg.reply(msg.random(uhh_what));
      } else {
        msg.reply("Clearly " + msg.match[choosen_response + 2] + " is " + msg.match[2]);
      }
  });
}
