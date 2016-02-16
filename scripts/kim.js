module.exports = function(robot){
  robot.hear(/.*kim.*/i, function(msg){
    msg.reply('She is twerking');
  })
  robot.hear(/.*captain.*/i, function(msg){
    msg.reply('What captain\? You are a lousy sailor');
  })
}
