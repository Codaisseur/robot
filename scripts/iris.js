module.exports = function(robot){

  robot.hear(/[A-Z]{3}/, function(msg){
    msg.reply("My ears!! Please don't shout at me =$")
  })

  robot.hear(/(music DB|musicDB|homework)/i, function(msg){
    msg.reply("Oh no, more homework? Here's a pug to save the day :)");
    return msg.http("http://pugme.herokuapp.com/random").get()(function(err, res, body) {
    return msg.send(JSON.parse(body).pug);
  });




  })

}
