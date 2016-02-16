module.exports = function(robot){
  robot.hear(/(catfact)/i, function(msg){
    //msg.reply("Welcome to CatFacts!");
    robot.http('http://catfacts-api.appspot.com/api/facts?number=1').header('Accept', 'application/json').get()(function(err, res, body) {
      var response;
      response = JSON.parse(body);
      msg.reply(response["facts"]);
    })
  })
}
