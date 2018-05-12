// begin bio section
var bio = {
    "name": "Robbie Doyen",
    "role": "Teacher, Writer, Entrepreneur",
    "contacts": {
        "linkedin": "check me out on LinkedIn",
        "github": "check out my GitHub",
        "facebook": "check out my Facebook",
        "website": "check out my website",
        "location": "Taipei, TW"
    },
    "welcomeMessage": "",
    "skills": ["HTML", "CSS", "Javascript", "Ruby"],
    "biopic": "assets/images/robbie3.png",
    "display": function () {
        $("#header").append(HTMLimgDiv);
        $(".img-div").append(HTMLbioPic.replace("%data%", bio.biopic));
        $("#header").append(HTMLnameDiv);
        $(".name-div").append(HTMLheaderName.replace("%data%", bio.name));
        $(".name-div").append(HTMLheaderRole.replace("%data%", bio.role));
        $(".name-div").append(HTMLlocation.replace("%data%", bio.contacts.location));
        $("#header").append(HTMLcontactDiv);
        $(".contact-div").append(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));
        $(".contact-div").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $(".contact-div").append(HTMLfacebook.replace("%data%", bio.contacts.facebook));
        $(".contact-div").append(HTMLwebsite.replace("%data%", bio.contacts.website));
        $("#header").append(HTMLmessageDiv);
        // $(".short-description").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        $("skills").append(HTMLskills.replace("%data%", bio.skills));
    }
};
// end bio section

// begin work section
var work = {
    "jobs": [
        {
            "employer": "CodeTaiwan.org",
            "title": "Co-Founder",
            "location": "Taipei, Taiwan",
            "dates": "2017-Current",
            "description": "Code Taiwan prepares children for the future by teaching them coding, English and emotional intelligence, all in one class."
    },
        {
            "employer": "Phoenix School of Education",
            "title": "English Teacher",
            "location": "Taipei, Taiwan",
            "dates": "2013-2018",
            "description": "Teaching students from kindergarten to adult level classes in an all English speaking environment."
    },
        {
            "employer": "Beaverworks",
            "title": "Sound Engineer",
            "location": "New Braunfels, TX",
            "dates": "2011-2013",
            "description": "Sound Engineer working with top level Texas Country music acts. Responsible for Front of House and Stage Sound, setting up and breaking down gear."
 	},
        {
            "employer": "WOAI and San Marcos Daily Record",
            "title": "Sports Reporter",
            "location": "San Antonio, TX and San Marcos, TX",
            "dates": "2010-2011",
            "description": "Freelance sportswriter covering local San Marcos High School Sports and covering The San Antonio Spurs in San Antonio"
    }],
    "display": function () {
        $("#work-experience").append(HTMLworkHeader);
        for (j in work.jobs) {
            $("#work-experience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
            $(".work-entry:last").append(formattedWorkDates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
            $(".work-entry:last").append(formattedWorkLocation);
            var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[j].description);
            $(".work-entry:last").append(formattedWorkDesc);
        }
    }
};
// end work section

// begin projects section
var projects = {
    "projects": [
        {
            "title": "CodeTaiwan.org",
            "dates": "2016-Current",
            "description": "Co-Founder of an Emotional Intelligence and Coding School in Taiwan.",
            "images": ["assets/images/logoCodeTaiwan.jpg", "assets/images/cody.png"]
 	  },
{
            "title": "THE ADVENTURES OF CODY",
            "dates": "2017-Current",
            "description": "Writing a series of comics and children's books that teach coding and emotional intelligence.",
            "images": ["assets/images/codyComicCover2.png", "assets/images/codyHowDoTheyFeel.jpg"]
      }],

    "display": function () {
        $("#projects").append(HTMLprojectHeader);
        for (p in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[p].title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[p].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[p].description));
            for (i in projects.projects[p].images) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[p].images[i]));
            }
        }
    }
};
// end projects section

// begin education section
var education = {
    "schools": [
        {
            "name": "Texas State University",
            "location": "San Marcos, TX",
            "degree": "Bachelors",
            "majors": "Double Major in English and Psychology",
            "dates": "",
            "description": "President of the Psychology Association, Member of English Honors Fraternity Sigma Tau Delta, Member of Psychology Honors Fraternity Psi Chi, Member of the Student Liberal Arts Advisory Council",
            "url": "www.txsate.edu"
    }],
    "onlineCourses": [{
        "title": "TEFL/TESL Certification",
        "school": "International TEFL Academy",
        "dates": "2013",
        "url": "link for more information",
        "description": "Certification for teaching English as a foreign language."
    }],
    "display": function () {
        $("#education").append(HTMLeducationHeader);
        for (e in education.schools) {
            $("#education").append(HTMLschoolStart);
            var sch = HTMLschoolName.replace("%data%", education.schools[e].name) + HTMLschoolDegree.replace("%data%", education.schools[e].degree)
            $(".education-entry:last").append(sch);
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[e].location));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[e].dates));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[e].majors));
            $(".education-entry:last").append(HTMLschoolDescription.replace("%data%", education.schools[e].description));
        }
        $("#education").append(HTMLonlineClassesStart);
        $(".online-classes-entry:last").append(HTMLonlineClasses);
        for (o in education.onlineCourses) {
            $(".online-classes-entry:last").append(HTMLonlineClassesSubHeading);
            $(".online-classes-sub-heading:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[o].title));
            $(".online-classes-sub-heading:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[o].school));
            $(".online-classes-sub-heading:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[o].dates));
            $(".online-classes-sub-heading:last").append(HTMLonlineDescription.replace("%data%", education.onlineCourses[o].description));
            // $(".online-classes-sub-heading:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[o].url));
        }
    }
};
// end education section

// begin skills Javascript
         
// end skills Javascript


// begin display function calls-----
bio.display();
work.display();
projects.display();
education.display();
// end display function calls-----

//Maps
$("#mapDiv").append(HTMLmapsHeader);
$("#mapDiv").append(googleMap);

/* ----------------------------------------- TOGGLE SECTIONS METHOD -------------------------------- */
