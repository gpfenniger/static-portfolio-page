var body_info = [
	{
		"title": "# about_me",
		"body": [
			"Some interesting facts about me:",
			"In 2016 I was awarded my Queen's Venturer Award the highest Scouting Award in Canada",
			"In my Senior High School year I took Robotics classes",
			"I have competed in two national level rock climbing competitions",
			"I have worked as a summer camp councillor for 6 years",
			"I learned React JS, JavaFX and Python between college classes"
		]
	},
	{
		"title": "# my_projects",
		"body": [
			"Over the last 3 years I have built several projects I am very proud of:",
			"In 2016 alongside my Robotics class I built a dice assembly line using VEX Robotics Kits",
			"In 2017 I decided to learn Linux by building an Arch Linux workstation, from assembling hardware to a base install",
			"In 2018 using class info scrapped from Langara's website I built a JavaFX app that listed open classrooms",
			"In 2018 I began developing a React / Node JS Web App for my Scout Group",
		]
	},
	{
		"title": "# my_goals",
		"body": [
			"Where Do I See Myself in the Future",
			"In 1 year I want to be finished school and moving onto my first junior developer position",
			"In 5 years I want to be fully involved in the industry working on even greater projects",
			"In 10 years I fully expect to be running the world, how I don't know but I'm sure I'll figure it out"
		]
	}
]

function load_text(tab) {
	document.getElementById("body_title").innerHTML = "# " + tab;
	var i = 0;
	switch(tab) {
		case 'my_goals': i++;
		case 'my_projects': i++;
	}

	document.getElementById("content").innerHTML = `
		<div>
			${body_info[i].body.map(line => `<p>${line}</p>`).join('')}
		</div>
	`;
}