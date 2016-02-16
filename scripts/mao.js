module.exports = function(robot) {

	var currentListDate = new Date();
	var links = [];
	var links_all = [];
	var wisdom = ["Sum Ting Wong?", "Hu Yu Hai Ding?","Tai Ni Po Ni?", "Kum Hia?"];

	robot.hear(/communis/i, function(msg){
		msg.reply(wisdom[Math.floor(Math.random() * 3)]);
	})

	// listens for links in the channel by the http tag
	robot.hear(/(https?:\/\/[^\s]+)/ig, function(msg) {
		// sets a date for the message
		var currentMessageDate = new Date();
		// compares the date of the list with the date of the message, if listdate is not message date
		if(currentListDate.setHours(0,0,0,0) !== currentMessageDate.setHours(0,0,0,0)) {
			//sets a new date for the list
			currentListDate = new Date();
			links = [];

		}

	// concatenates all the links inside the links array
		links_all = links.concat(msg.match);
		links = links.concat(msg.match);
	})

	// displays a list of links from the links of all time
	robot.respond(/links/, function(msg) {
		for (var i=0; i<links.length; i++) {
			msg.reply(links[i]);
		}
	})
	// displays a list of links from the links for one day
	robot.respond(/all links/, function(msg) {
		for (var i=0; i<links_all.length; i++) {
			msg.reply(links_all[i]);
		}
	})
}