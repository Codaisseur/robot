var codaisseur;

codaisseur =
["https://codaisseur-blog.s3.amazonaws.com/2015/Dec/codaisseur_open_evening_151210-1448970446385.png",
"https://codaisseur-blog.s3.amazonaws.com/2015/Oct/DBC1-1445339369028.png",
"http://www.codaisseur.com/assets/images/codaisseur-square.png?v=7ebe9b15b6",
"https://pbs.twimg.com/profile_images/663998509029396480/0KAb-gdd.png",
"http://image.slidesharecdn.com/261928a6-fd50-4e69-8cbd-f6c3330c3319-151210230913/95/codaisseur-open-evening-dec-15-6-638.jpg?cb=1449789004",
"https://www.developmentbootcamp.nl/assets/headers/development-bootcamp-sticker-cf29d55ebbb6f421f4cb18e053ad5222.png"
]

far =
["https://s-media-cache-ak0.pinimg.com/236x/97/92/e2/9792e2943e886f1a0331c0e004b6c301.jpg"]

wrong =
["https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/s320x320/e15/1390043_866788983392716_1782052893_n.jpg"]

module.exports = function(robot) {
  robot.hear(/ben/i, function(msg){
    msg.reply('Ben loves cats');
  })
    robot.hear(/far/i, function(msg) {
    return msg.send(msg.random(far));
    })
    robot.hear(/wrong/i, function(msg) {
    return msg.send(msg.random(wrong));
    })
    robot.respond(/codaisseur/i, function(msg) {
    return msg.send(msg.random(codaisseur));
  });
};
