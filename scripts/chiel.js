var codaisseur;

codaisseur =
["https://codaisseur-blog.s3.amazonaws.com/2015/Dec/codaisseur_open_evening_151210-1448970446385.png",
"https://codaisseur-blog.s3.amazonaws.com/2015/Oct/DBC1-1445339369028.png",
"http://www.codaisseur.com/assets/images/codaisseur-square.png?v=7ebe9b15b6",
"https://pbs.twimg.com/profile_images/663998509029396480/0KAb-gdd.png",
"http://image.slidesharecdn.com/261928a6-fd50-4e69-8cbd-f6c3330c3319-151210230913/95/codaisseur-open-evening-dec-15-6-638.jpg?cb=1449789004",
"https://www.developmentbootcamp.nl/assets/headers/development-bootcamp-sticker-cf29d55ebbb6f421f4cb18e053ad5222.png"
]

module.exports = function(robot) {
  robot.hear(/ben/i, function(msg){
    msg.reply('Ben loves cats');
  })
  return robot.respond(/codaisseur/i, function(msg) {
    return msg.send(msg.random(codaisseur));
  });
};
