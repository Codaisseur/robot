module.exports = function(robot){
  robot.hear(/hoi/i, function(msg){
    msg.reply('Hallo');
  })

robot.respond(/thumbs up/i, function(msg){
      msg.reply('http://i.imgur.com/LT4GuFu.gif');
    })
}
