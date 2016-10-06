/*
This is empty on purpose! Your code to build the resume will go here.
 */


// Header
var formattedName = HTMLheaderName.replace("%data%", "Rafael Vasquez")
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer")

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

// Bio

var bio = {
	"name": "Rafael Vasquez", 
	"role": "Web Developer", 
	"contacts": {
		"mobile": "347.419.9842",
		"email": "rafvasquez87@gmail.com",
		"github": 'rafvasquez87',
		"twitter": "rvasquez44",
		"location": "NYC"
	},
	"biopic": "images/me.jpeg",
	"welcomeMessage": "Hi there, Welcome to online resume",
	"skills": ["HTML ", "CSS ", "JavaScript ", "JQuery ", "API", ],
	"portfolio" : "Portfolio"
};

function displayBio(){
	//$("#topContacts").append(HTMLcontactGeneric);
	//$("#lets-connect").append(HTMLcontactGeneric);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation =  HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedpic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMessege = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedportfolio = HTMLportfolio.replace("%data%", bio.portfolio);

	$("#header").append(formattedMessege + formattedpic); 
	$("#topContacts, #footerContacts").append(formattedMobile + formattedEmail +formattedTwitter +formattedGithub+formattedLocation); 

	

}
displayBio();

$("#header").append(HTMLskillsStart);

if(bio.skills.length > 0) {

	var formatedSkill = HTMLskills.replace("%data%", bio.skills);
	$("#skills").append(formatedSkill);
};

// work

var work = {
	"jobs": [
		{	
			"employer" : "Catholic Charities Community Services",
			"title" : "Vocational Instructor",
			"location" : "New York",
			"dates" : "1/2014-9/2015",
			"description" : "Provide vocational assessment to assess education, skills, and abilities of participants ■ Develop and implement curriculum to provide a positive learning experience ■ Conduct workshops including SAT/regents prep, financial literacy, and leadership skills"			
		},
		{	
			"employer" : "Learn It Systems",
			"title" : "Operations Analyst",
			"location" : "New York",
			"dates" : "9/2007-8/2013",
			"description" : " Provide back office support to the field staff ■ Reconcile and submit timesheets, students attendance, and invoices"			
		}	
	]
}

function displayWork(){
	work.jobs.forEach(function(job){

		$("#workExperience").append(HTMLworkStart);
		// employer
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedtitle = HTMLworkEmployer.replace("%data%", job.title);
		$(".work-entry:last").prepend(formattedEmployer , formattedtitle);
		// location
		var formattedLocation = HTMLworkLocation.replace("%data%",job.location )
		$(".work-entry:last").append(formattedLocation);
		// dates
		var formattedDates = HTMLworkDates.replace("%data%",job.dates )
		$(".work-entry:last").append(formattedDates );
		// description
		var formattedDescription = HTMLworkDescription.replace("%data%",job.description )
		$(".work-entry:last").append(formattedDescription);

	})
}

displayWork();


// projects

var projects = {
	"projects" : [
		{
			"title" : "Arcade Game Clone",
			"dates" : "August 2016",
			"description" : "Mockup of an HTML Blog",
			"images" :[
			]
		},
		{
			"title": "Portfolio",
			"dates" : "August 2016",
			"description" : "Develop a responsive website using HTML and CSS that will display images, descriptions and links to each of the portfolio projects",
			"images" :[
			]
		},
		{
			"title": "Random Quote Generator",
			"dates" : "January 2016",
			"description" : "As the user presses the button, a new quote will appear using a quote API ",
			"images" :[
			]
		}
	]
}

projects.display =function(){
	projects.projects.forEach(function(proj){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", proj.title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", proj.dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", proj.description);
		$(".project-entry:last").append(formattedDescription)
	
		if(proj.images.length > 0){
			for(images in projects.projects[project].images){
				var formattedImage = HTMLprojectImages.replace("%data%", proj.images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	})

}

projects.display();

//education

var education = {
	"schools": [
		{
			"name" : "CUNY school of professional studies",
			"location" : ["New York"],
			"dates" : "9/2015-Present",
			"degree" : "Bachelor degree",
			"major" : ["Information Systems"] 
		},
		{
			"name" : "CUNY Borough of Manhattan Community College",
			"location" : "New York",
			"dates" : "9/2009-/2013",
			"degree" : "Associate degree",
			"major" : ["Liberal Arts"] 
		}	

	],
	"onlineCourses" : [
		{
			"title" : "Front end Web Development",
			"school" : "Udacity",
			"dates" : "8/2016-Present",
			"url" : "https://www.udacity.com/nanodegree"
		}
	]
}

function displayEducation(){
		education.schools.forEach(function(school){	
		// school
		var formattedSchool = HTMLschoolName.replace("%data%", school.name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
		// location
		var formattedDates = HTMLschoolDates.replace("%data%",school.dates )
		// dates
		var formattedLocation = HTMLschoolLocation.replace("%data%",school.location )
		// description
		var formattedMajor = HTMLschoolMajor.replace("%data%",school.major )
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedSchool ,formattedDates,formattedLocation, formattedMajor);

	});
	education.onlineCourses.forEach(function(course) {

		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', course.title);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', course.school);
		var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		var formattedOnlineDates = HTMLonlineDates.replace('%data%', course.dates);
		var formattedOnlineurl = HTMLonlineURL.replace('%data%', course.url);
		$('.education-entry:last').append(HTMLonlineClasses, formattedOnlineTitleSchool, formattedOnlineDates, formattedOnlineurl);

	});
}
displayEducation();



$('#mapDiv').append(googleMap);





