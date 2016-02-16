module.exports = function(robot){
  var initialized = false;

  robot.hear(/.*/, function(msg){
    if (!initialized){
      setInterval(function(){
        sayBye(msg);
      }, 60000);

      initialized = true;
    }
  });
}

function sayBye(msg){
  if (checkTime() === "19:00"){
    msg.reply("SCREW YOU GUYS...I'M GOING HOME!!");
  }
  if (checkTime() === "12:30"){
    msg.reply("TIME TO EAT BITCHES");
  }
}

var checkTime = function() {
  var day = new Date();
  var hour = ('0' + day.getHours()).slice(-2);
  var minutes = ('0' + day.getMinutes()).slice(-2);
  var time = hour + ":" + minutes;
  return time;
};
