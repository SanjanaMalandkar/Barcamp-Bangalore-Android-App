var mockData = angular.module('mockData', []);

var session_data_success = {
    "status": "have stuff",
    "version": 50,
    "slots": [{
        "type": "fixed",
        "description" : "Registration starts at 0800, please be here on time.",
        "startTime": "0800",
        "endTime": "0900",
        "time": "8:00AM - 9:00AM",
        "name": "Registration",
        "id": 1
    }, {
        "type": "fixed",
        "startTime": "0900",
        "endTime": "0930",
        "time": "9:00AM - 9:30AM",
        "name": "Introduction",
        "id": 2
    }, {
        "type": "session",
        "startTime": "0945",
        "endTime": "1030",
        "time": "9:45AM - 10:30AM",
        "name": "Slot 1",
        "id": 3,
        "sessions": [{
            "id": 5283,
            "title": "Deep Dark Web &#8211; How to get inside?",
            "description": "We have all heard of (duh!) and used the internet. The same is not true for the dark net. &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212; From wikipedia\/google &#8211; The Dark Web, also confusingly referred to as the Deep Web and conflated with Deep Web search is the World Wide Web content that exists on darknets, overlay networks which use the [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/deep-dark-web-how-to-get-inside\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/deep-dark-web-how-to-get-inside",
            "time": "9:45AM - 10:30AM",
            "location": "Asteroids",
            "track": 0,
            "presenter": "anshprat",
            "photo": "https:\/\/0.gravatar.com\/avatar\/f1954353e8bf19f1ce9a7ac1cfd32ca8?s=96&d=identicon",
            "category": "Mobile &amp; Web",
            "color": "#E4460B"
        }, {
            "id": 5497,
            "title": "Innovation for start-ups &#8211; what, why and how.",
            "description": "I am a cofounder at Tinkerform &#8211; an innovation partner for startups. Last year when we started thinking about taking the start-up plunge, we stumbled upon the thought that Bangalore has a lot of Business and Tech talent but there is a huge lack of design talent out there. We all know that design has [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/innovation-for-start-ups-what-why-and-how\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/innovation-for-start-ups-what-why-and-how",
            "time": "9:45AM - 10:30AM",
            "location": "Battleship",
            "track": 1,
            "presenter": "Vivek Sahi",
            "photo": "https:\/\/graph.facebook.com\/1525269983\/picture?width=150&height=150",
            "category": "Design",
            "color": "#770B47"
        }, {
            "id": 5275,
            "title": "Guns, Germs And Steel. An Sneak Peak Into Evolution",
            "description": "When the Spanish conquistadors came to new world they had an army of 168! 106 on foot and 62 on horses. The Incas on the other hand had 30 thousand Soldiers! how did the Spanish manage to capture the Inca king and colonize an entire empire? And how is it even related to Evolution? This [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/guns-germs-and-steel-an-sneak-peak-into-evolution-2\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/guns-germs-and-steel-an-sneak-peak-into-evolution-2",
            "time": "9:45AM - 10:30AM",
            "location": "Contra",
            "track": 2,
            "presenter": "djds4rce",
            "photo": "https:\/\/lh3.googleusercontent.com\/-5tNJBjuqp1s\/AAAAAAAAAAI\/AAAAAAAAGU4\/NWkCz4Dx6sU\/photo.jpg?sz=200",
            "category": "Rest of the World",
            "color": "#701E7F"
        }, {
            "id": 5679,
            "title": "AntHillHacks &#8211; towards collective narratives",
            "description": "AntHillHacks was a 9 day live-together event, last summer, on a nearby hill called Devarayana Durga. It was a coming together of techies, artists, historians, makers, cooks, musicians, campers, trekkers, mappers, ecologists, students, performers, counsellors, activists, educators, professors, families and local groups. Wifi-mesh services and community radio was part of the available infrastructure. If there [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/anthillhacks-towards-collective-narratives\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/anthillhacks-towards-collective-narratives",
            "time": "9:45AM - 10:30AM",
            "location": "Everquest",
            "track": 4,
            "presenter": "tbdinesh",
            "photo": "https:\/\/secure.gravatar.com\/avatar\/b49473854236ff992023eea2aa0f1505?s=96&#038;d=wavatar&#038;r=g",
            "category": "Rest of the World",
            "color": "#701E7F"
        }, {
            "id": 5346,
            "title": "SUDOers&#8217; guide to Photography",
            "description": "I am a slightly more than an amateur photographer, who works solely on linux. I&#8217;ll share the flows that I&#8217;ve settled into for managing and processing my images on Ubuntu as compared to the conventional Lightroom\/Photoshop on Windows\/Mac. Demos include tools for making timelapses and panaromas. Timelapse like: https:\/\/www.youtube.com\/watch?v=j3ulp-DegpE Panaroma like: https:\/\/www.flickr.com\/photos\/tejovanth\/15404143865 Check out my [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/sudoers-guide-to-photography\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/sudoers-guide-to-photography",
            "time": "9:45AM - 10:30AM",
            "location": "Fable",
            "track": 5,
            "presenter": "Tejovanth N",
            "photo": "https:\/\/lh5.googleusercontent.com\/-4kiVmA_SLVk\/AAAAAAAAAAI\/AAAAAAAAAAA\/86zV-HMbVWc\/photo.jpg?sz=200",
            "category": "Technology",
            "color": "#0B83E4"
        }]
    }, {
        "type": "fixed",
        "startTime": "1030",
        "endTime": "1100",
        "time": "10:30AM - 11:00AM",
        "name": "Break 1",
        "id": 4
    }, {
        "type": "session",
        "startTime": "1100",
        "endTime": "1145",
        "time": "11:00AM - 11:45AM",
        "name": "Slot 2",
        "id": 5,
        "sessions": [{
            "id": 5423,
            "title": "Drupal &#8211; A drop in scalable &amp; secure backend for IoT or Mobile Apps",
            "description": "Drupal along with few popular modules can serve as a drop-in backend for IoT purpose or Mobile apps. It\u2019s very simple to use, easy to get started and can be the best backend solution value proposition you will find in the market today. With Drupal at backend the App or Hardware developers can focus on [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/drupal-a-drop-in-scalable-secure-backend-for-iot-or-mobile-apps\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/drupal-a-drop-in-scalable-secure-backend-for-iot-or-mobile-apps",
            "time": "11:00AM - 11:45AM",
            "location": "Asteroids",
            "track": 0,
            "presenter": "Safwan Erooth",
            "photo": "https:\/\/lh5.googleusercontent.com\/-eNlkl6rFS7Y\/AAAAAAAAAAI\/AAAAAAAAAf4\/lyZR5mmbe_E\/photo.jpg?sz=200",
            "category": "Mobile &amp; Web",
            "color": "#E4460B"
        }, {
            "id": 5459,
            "title": "Fun with HTTP",
            "description": "This is a fun session that talks about HTTP, as it evolved and how it is implemented today. It will feature the best HTTP Status codes and when (not) to use them, and the best HTTP headers and jokes featuring HTTP responses. ( _ ) ) _,(_)._ (( ___,(_______). ) ,'__. \/ \\ \/\\_ \/,' [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/fun-with-http\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/fun-with-http",
            "time": "11:00AM - 11:45AM",
            "location": "Battleship",
            "track": 1,
            "presenter": "nemo",
            "photo": "https:\/\/secure.gravatar.com\/avatar\/620d0eb7fcb87b272b387cf33e4ed314?s=96&#038;d=wavatar&#038;r=g",
            "category": "Technology",
            "color": "#0B83E4"
        }, {
            "id": 5308,
            "title": "How and why you must sell to entrepreneurs",
            "description": "Entrepreneurs often focus on selling solely to their target customers without realising that selling to fellow founders is an efficient way to boost sales and confidence among many things. This is intended to be an interactive discussion about the topic. Ideal fro founders, people planning to be founders and just about anybody interested in how [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/how-and-why-you-must-sell-to-entrepreneurs\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/how-and-why-you-must-sell-to-entrepreneurs",
            "time": "11:00AM - 11:45AM",
            "location": "Contra",
            "track": 2,
            "presenter": "nikhil jois",
            "photo": "https:\/\/lh5.googleusercontent.com\/-BU01LDQ-v3g\/AAAAAAAAAAI\/AAAAAAAABqE\/ZGCPKSiyeIY\/photo.jpg?sz=200",
            "category": "Entrepreneurship",
            "color": "#E28815"
        }, {
            "id": 5544,
            "title": "Ensign, Transhumanism and the Butlerian Jihad",
            "description": "We do not fit in this world being created for us. Our direction in terms of design and technology is completely contrary for what is good for us. I propose to introduce a wholly new way to move our de-sign axis back to being an en-sign axis, from human accomodative to human centric things. My [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/ensign-transhumanism-and-the-butlerian-jihad\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/ensign-transhumanism-and-the-butlerian-jihad",
            "time": "11:00AM - 11:45AM",
            "location": "Diablo",
            "track": 3,
            "presenter": "Anadianant",
            "photo": "https:\/\/secure.gravatar.com\/avatar\/084f8f5c671fbcebf674eb6e6168a452?s=96&#038;d=wavatar&#038;r=g",
            "category": "Design",
            "color": "#770B47"
        }, {
            "id": 5740,
            "title": "Cloud security &amp; analytics",
            "description": "Cloud security &amp; analytics: Effective threat analytics is an important element of the security lifecycle But it is ineffective without incident response \u2013 the yin and the yang For security architectures to be effective, threat analytics and incident response must be tightly coupled to prevent any gaps Session difficulty level: Intro\/101 This post was submitted [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/cloud-security-analytics\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/cloud-security-analytics",
            "time": "11:00AM - 11:45AM",
            "location": "Everquest",
            "track": 4,
            "presenter": "kirandoddi",
            "photo": "https:\/\/secure.gravatar.com\/avatar\/9a97617098e10664a363289c214b0685?s=96&#038;d=wavatar&#038;r=g",
            "category": "Technology",
            "color": "#0B83E4"
        }]
    }, {
        "type": "session",
        "startTime": "1145",
        "endTime": "1230",
        "time": "11:45AM - 12:30AM",
        "name": "Slot 3",
        "id": 6,
        "sessions": [{
            "id": 5379,
            "title": "UX For Developers &#8211; The Little Things That Matter",
            "description": "With User Experience being all the rage in the design world, it is important that we all understand the value of little UX based insights that go a long way in making the software we build easier to use, smoother to experience and harder to let go of. This session, a UX guy takes you [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/ux-for-developers-the-little-things-that-matter\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/ux-for-developers-the-little-things-that-matter",
            "time": "11:45AM - 12:30AM",
            "location": "Asteroids",
            "track": 0,
            "presenter": "Anirudh Shrinivas",
            "photo": "https:\/\/lh3.googleusercontent.com\/-n3ahqkG9ZBM\/AAAAAAAAAAI\/AAAAAAAAAWQ\/YO2Ojc-TN9o\/photo.jpg?sz=200",
            "category": "Design",
            "color": "#770B47"
        }, {
            "id": 5399,
            "title": "Transforming an IoT idea to an IoT product",
            "description": "So, you dirtied your hands connecting wires between a number of h\/w modules, wrote an arduino sketch, got it to work with a cloud service, perhaps even wrote an App to build that amazing IoT idea you imagined a few months ago. And now, it is there, alive in your hands&#8230; exactly the way you [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/transforming-an-iot-idea-to-an-iot-product\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/transforming-an-iot-idea-to-an-iot-product",
            "time": "11:45AM - 12:30AM",
            "location": "Battleship",
            "track": 1,
            "presenter": "Urmil Parikh",
            "photo": "https:\/\/lh3.googleusercontent.com\/-dNNZy4gNRUQ\/AAAAAAAAAAI\/AAAAAAAAAC8\/smyHAAlJ6K8\/photo.jpg?sz=200",
            "category": "Technology",
            "color": "#0B83E4"
        }, {
            "id": 5328,
            "title": "Health-tech and Internet of Things",
            "description": "The Session focuses on discussions about whether we should go for Internet of Things in the area of consumer healthcare? The privacy issues needed to be addressed for bringing in some good solutions. Design methodology and trials that&#8217;s needed to be focused? Developing an optimum design strategy and pricing of an IoT based health solution. [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/cnsumer-healthcare-and-internet-of-things\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/cnsumer-healthcare-and-internet-of-things",
            "time": "11:45AM - 12:30AM",
            "location": "Contra",
            "track": 2,
            "presenter": "sid.nair",
            "photo": "https:\/\/secure.gravatar.com\/avatar\/1b4da818fd1ed486822eccb196dd464f?s=96&#038;d=wavatar&#038;r=g",
            "category": "Technology",
            "color": "#0B83E4"
        }, {
            "id": 5566,
            "title": "Once upon a time there was a code: the story of linux",
            "description": "The concept of thousands of people working on a code to make it better for everyone without any money made me curious and surprised so I picked up a spare laptop about 9 months ago, and started using ubuntu gnome and since then I&#8217;ve been reading and closely following the interesting journey of linux so [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/once-upon-a-time-there-was-a-code-the-story-of-linux\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/once-upon-a-time-there-was-a-code-the-story-of-linux",
            "time": "11:45AM - 12:30AM",
            "location": "Diablo",
            "track": 3,
            "presenter": "ruchir89",
            "photo": "https:\/\/secure.gravatar.com\/avatar\/0a7d20e6af8fe6cf3285fd4ff911e8d6?s=96&#038;d=wavatar&#038;r=g",
            "category": "Technology",
            "color": "#0B83E4"
        }, {
            "id": 5352,
            "title": "Reimagining the recruiting landscape.",
            "description": "Tired of sending your resume through a metaphorical blackholes? Or conversely as a recruiter, tired of sifting through 1000s of resumes and not finding the perfect fit? We\u2019ve got the perfect solution for you! The session will provide a walk-through of how we, at Venturesity, an online job marketplace, are changing the recruiting landscape. Our [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/reimagining-the-recruiting-landscape\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/reimagining-the-recruiting-landscape",
            "time": "11:45AM - 12:30AM",
            "location": "Everquest",
            "track": 4,
            "presenter": "BharatR",
            "photo": "https:\/\/secure.gravatar.com\/avatar\/de24f5e7cee568c8d43e868e8b72e4cf?s=96&#038;d=wavatar&#038;r=g",
            "category": "Rest of the World",
            "color": "#701E7F"
        }, {
            "id": 5432,
            "title": "Getting started &#8211; A few questions and answers",
            "description": "Will go over a few important questions on entrepreneurship which took me painful years to find the right answer to. We will also discuss tools like BMC and how to get the best out of them. Will discuss accelerators, founding team and co-founder selection. Last but not the least, we will discuss funding and considerations [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/getting-started-a-few-questions-and-answers\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/getting-started-a-few-questions-and-answers",
            "time": "11:45AM - 12:30AM",
            "location": "Fable",
            "track": 5,
            "presenter": "Sajith Kandy",
            "photo": "https:\/\/graph.facebook.com\/1317857743\/picture?width=150&height=150",
            "category": "Entrepreneurship",
            "color": "#E28815"
        }]
    }, {
        "type": "fixed",
        "startTime": "1230",
        "endTime": "1330",
        "time": "12:30AM - 13:30AM",
        "name": "Lunch",
        "id": 7
    }, {
        "type": "fixed",
        "startTime": "1330",
        "endTime": "1430",
        "time": "1:30PM - 2:30PM",
        "name": "Techlash",
        "id": 8
    }, {
        "type": "session",
        "startTime": "1430",
        "endTime": "1515",
        "time": "2:30PM - 3:15PM",
        "name": "Slot 4",
        "id": 9,
        "sessions": [{
            "id": 5266,
            "title": "Oiling your Database to make them run faster &amp; smoother",
            "description": "In these days of Big Data, NoSQL, In memory databases and obscenely large number of memory banks, people seem to forget that your good ol&#8217; &#8220;traditional&#8221; RDBMS can still get you an astonishing amount of performance and an awesome bang for the buck. Join me as we sit and discuss on what is new developer&#8217;s [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/oiling-your-database-to-make-them-run-faster-smoother\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/oiling-your-database-to-make-them-run-faster-smoother",
            "time": "2:30PM - 3:15PM",
            "location": "Asteroids",
            "track": 0,
            "presenter": "sathyabhat",
            "photo": "https:\/\/lh6.googleusercontent.com\/-C3MM-iia_YQ\/AAAAAAAAAAI\/AAAAAAAAfg0\/qsA8_Ej0JJg\/photo.jpg?sz=200",
            "category": "Technology",
            "color": "#0B83E4"
        }, {
            "id": 5272,
            "title": "Building effective data science teams",
            "description": "There are very few companies that have truly been able to benefit from the vast area of data sciences. The major reason, is that they hire to solve a subset of present problems, but in the course, forget that a strong data science team can not only make a few problems go away, but also [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/building-effective-data-science-teams\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/building-effective-data-science-teams",
            "time": "2:30PM - 3:15PM",
            "location": "Battleship",
            "track": 1,
            "presenter": "Eeshan Chatterjee",
            "photo": "https:\/\/graph.facebook.com\/748365723\/picture?width=150&height=150",
            "category": "Entrepreneurship",
            "color": "#E28815"
        }, {
            "id": 5535,
            "title": "Understanding Bangalore Through Data",
            "description": "This world cities Day, I want to show you guys how I study cities in India through data, majorly open data. Cities are the center of issues and need further understanding before you attempt to solve them. This is to show you how transportation working group at datameet are trying to solve few of the [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/understanding-bangalore-through-data\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/understanding-bangalore-through-data",
            "time": "2:30PM - 3:15PM",
            "location": "Contra",
            "track": 2,
            "presenter": "srinivas",
            "photo": "https:\/\/lh3.googleusercontent.com\/-XdUIqdMkCWA\/AAAAAAAAAAI\/AAAAAAAAAAA\/4252rscbv5M\/photo.jpg?sz=200",
            "category": "Bangalore &amp; Lifestyle",
            "color": "#2D88EC"
        }, {
            "id": 5667,
            "title": "Work like a terrorist, live like a drunkard!",
            "description": "Now that I have you attention, 3 Reasons to attend this outrageously titled talk! >Get intoxicated by life! . . >Discover what takes a lifetime in 15 minutes(or less!) . . >Cause its FREE! . . For your benefit If you miss the first 5 minutes, you wont get the whole talk, so be on [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/work-like-a-terrorist-live-like-a-drunkard\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/work-like-a-terrorist-live-like-a-drunkard",
            "time": "2:30PM - 3:15PM",
            "location": "Diablo",
            "track": 3,
            "presenter": "GalataShuru",
            "photo": "https:\/\/secure.gravatar.com\/avatar\/e83dcc89d477c976ffaeefce4f0678c9?s=96&#038;d=wavatar&#038;r=g",
            "category": "Rest of the World",
            "color": "#701E7F"
        }, {
            "id": 5466,
            "title": "Quality Engineering &#8211; to be or not to be..",
            "description": "This session is to talk about Quality engineers in technology. Quality Engineering is a challenging and exciting career path to choose. Quality Engineers can almost always play a much bigger role than they think they can. We just need to understand why &amp; how! Questions like the following can be expected to answer.. ** Can [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/is-quality-engineering-the-right-choice-for-me\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/is-quality-engineering-the-right-choice-for-me",
            "time": "2:30PM - 3:15PM",
            "location": "Everquest",
            "track": 4,
            "presenter": "Nishchita",
            "photo": "https:\/\/secure.gravatar.com\/avatar\/6e4198d7a333912a02b4a6f6552f49f4?s=96&#038;d=wavatar&#038;r=g",
            "category": "Technology",
            "color": "#0B83E4"
        }, {
            "id": 5721,
            "title": "3D methods",
            "description": "A very brief description of the basics of graphics followed by a description of various 3d methods used in reconstructing real spaces virtually and creating virtual spaces. Various methods of reconstructing 3d spaces include, using laser scanners, using photographs, using panoramic photographs, creating 3d models of the reconstructed space. Session difficulty level: Intro\/101 This post [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/3d-methods\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/3d-methods",
            "time": "2:30PM - 3:15PM",
            "location": "Fable",
            "track": 5,
            "presenter": "Abrar Ahmed",
            "photo": "https:\/\/lh6.googleusercontent.com\/--CEGc8WtAUM\/AAAAAAAAAAI\/AAAAAAAAALk\/AqykKUmX0vU\/photo.jpg?sz=200",
            "category": "Technology",
            "color": "#0B83E4"
        }]
    }, {
        "type": "fixed",
        "startTime": "1515",
        "endTime": "1545",
        "time": "3:15PM - 3:45PM",
        "name": "Break 2",
        "id": 10
    }, {
        "type": "session",
        "startTime": "1545",
        "endTime": "1630",
        "time": "3:45PM - 4:30PM",
        "name": "Slot 5",
        "id": 11,
        "sessions": [{
            "id": 5288,
            "title": "Who Owns Your Face? Debriefing Facial recognition + Intro",
            "description": "Let&#8217;s talk about facial recognition, how it works, various methods, Pros\/Cons etc. From auto smile detection in mobiles to CSI investigation! Google Glass, Facebook tags.. Should a company need your permission before scanning your face? And does the technology really work? If facial recognition ever gets really good, who will own our faces? &nbsp; &nbsp; [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/who-owns-your-face-debriefing-facial-recognition-intro\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/who-owns-your-face-debriefing-facial-recognition-intro",
            "time": "3:45PM - 4:30PM",
            "location": "Asteroids",
            "track": 0,
            "presenter": "Vivekk",
            "photo": "https:\/\/secure.gravatar.com\/avatar\/4c776f36af429e9382ea60c3e43d6cb6?s=96&#038;d=wavatar&#038;r=g",
            "category": "Rest of the World",
            "color": "#701E7F"
        }, {
            "id": 5333,
            "title": "Disciplined Entrepreneurship: Understanding &amp; Planning the Business",
            "description": "This session would be an introduction to entrepreneurship. Which would be focusing on how to build an business idea, understand the operations and finally translate the idea and understanding into an Business Plan! The cases would focus on consumer and we will discuss a little on caveats, models, revenue structures and few tips on home [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/disciplined-entreprenuership-understanding-planning-the-business\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/disciplined-entreprenuership-understanding-planning-the-business",
            "time": "3:45PM - 4:30PM",
            "location": "Battleship",
            "track": 1,
            "presenter": "sid.nair",
            "photo": "https:\/\/secure.gravatar.com\/avatar\/1b4da818fd1ed486822eccb196dd464f?s=96&#038;d=wavatar&#038;r=g",
            "category": "Entrepreneurship",
            "color": "#E28815"
        }, {
            "id": 5503,
            "title": "Living with More Energy and Relaxedness",
            "description": "By Santu Mahapatra and Shiva Kumar Bharati * How to create new habits? * How to track new habits painlessly? * How to be on track? Self Quantification, Habit formation &amp; Gamification A sneak peek into the modern world of autodata tracking &#8211; Beeminder, Todoist, Rescuetime, IFTTT etc. &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212; Personal journey from being low energy [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/energy-and-relaxedness\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/energy-and-relaxedness",
            "time": "3:45PM - 4:30PM",
            "location": "Contra",
            "track": 2,
            "presenter": "Santu Mahapatra",
            "photo": "https:\/\/lh5.googleusercontent.com\/-hdainJ6PFLE\/AAAAAAAAAAI\/AAAAAAAAAGE\/IjEjxmTnnLA\/photo.jpg?sz=200",
            "category": "Bangalore &amp; Lifestyle",
            "color": "#2D88EC"
        }, {
            "id": 5526,
            "title": "Bitcoin &#8211; currency of the internet",
            "description": "Introduction to bitcoin, covering basics of consensus algorithms, transactions, the blockchain, mining, SPV clients, wallets. Some practical applications like setting up a wallet, security tips, getting started with a miner etc. will be covered. Finally, I&#8217;ll showcase libraries and utilities to start hacking and build on top of blockchain. Session difficulty level: In-depth talks This [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/bitcoin-currency-of-the-internet\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/bitcoin-currency-of-the-internet",
            "time": "3:45PM - 4:30PM",
            "location": "Diablo",
            "track": 3,
            "presenter": "Javed Khan",
            "photo": "https:\/\/lh6.googleusercontent.com\/-0eMqpTU_8rk\/AAAAAAAAAAI\/AAAAAAAADFM\/Fzd2ZzqyWVg\/photo.jpg?sz=200",
            "category": "Technology",
            "color": "#0B83E4"
        }, {
            "id": 5710,
            "title": "Solving Rubik&#8217;s Cube for Beginners",
            "description": "I started solving Rubik&#8217;s Cube recently. Its fun to learn solving it and upgrading skills to solve it faster. Join in if you are interested in Rubik&#8217;s Cube. This session is absolutely for beginners, the session deals with basics of rubik&#8217;s cube, how to identify the faces and solve it step by step. Please bring [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/solving-rubiks-cube-for-beginners\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/solving-rubiks-cube-for-beginners",
            "time": "3:45PM - 4:30PM",
            "location": "Everquest",
            "track": 4,
            "presenter": "Daaku",
            "photo": "https:\/\/secure.gravatar.com\/avatar\/7d8d90724c549fd22e200393932099b5?s=96&#038;d=wavatar&#038;r=g",
            "category": "Rest of the World",
            "color": "#701E7F"
        }, {
            "id": 5521,
            "title": "IoT: controlling lighting at home",
            "description": "Rohit &#038; myself have spent a lot of time automating the lighting at our homes using microcontrollers like raspberry pi &#038; arduino along with software to control them to achieve what we sent out to achieve. we faced lots of problems &#038; learnt a lots of lessons in the process. The focus of this session [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/iot-controlling-lighting-at-home\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/iot-controlling-lighting-at-home",
            "time": "3:45PM - 4:30PM",
            "location": "Fable",
            "track": 5,
            "presenter": "sfilinto",
            "photo": "https:\/\/secure.gravatar.com\/avatar\/3ca39eb9abe229a01db279f56e77a21f?s=96&#038;d=wavatar&#038;r=g",
            "category": "Technology",
            "color": "#0B83E4"
        }]
    }, {
        "type": "session",
        "startTime": "1630",
        "endTime": "1715",
        "time": "4:30PM - 5:15PM",
        "name": "Slot 6",
        "id": 12,
        "sessions": [{
            "id": 5301,
            "title": "Math is the new meth and I am cooking it.",
            "description": "It&#8217;s going to be a timeline journey through the magic world of mathematics in daily life and using maths as a life tool. How math changed the world and serves as a gateway or core to all science and technology that exist in this world and beyond. I will be sponsoring lunch to people who [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/math-is-the-new-meth-and-i-am-cooking-it\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/math-is-the-new-meth-and-i-am-cooking-it",
            "time": "4:30PM - 5:15PM",
            "location": "Asteroids",
            "track": 0,
            "presenter": "Rahul Venugopal",
            "photo": "https:\/\/lh5.googleusercontent.com\/-67RxsTUNpzo\/AAAAAAAAAAI\/AAAAAAAAAYg\/OtTmEcjo3tk\/photo.jpg?sz=200",
            "category": "Rest of the World",
            "color": "#701E7F"
        }, {
            "id": 5359,
            "title": "How we ran #SaveTheInternet for free",
            "description": "Back in April &#8217;15, the Telecom Regulatory Authority of India (TRAI) released a draft recommendation that threatened the fundamental openness and neutrality of the internet in India. A few of us got together to try and raise awareness on this issue on Net Neutrality, and it ended up being one the biggest online movements in [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/how-we-ran-savetheinternet-for-free\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/how-we-ran-savetheinternet-for-free",
            "time": "4:30PM - 5:15PM",
            "location": "Battleship",
            "track": 1,
            "presenter": "karthikb351",
            "photo": "https:\/\/secure.gravatar.com\/avatar\/52aae2406795f7e00339a19a22e9b38f?s=96&#038;d=wavatar&#038;r=g",
            "category": "Scaling &amp; Infrastructure",
            "color": "#789C18"
        }, {
            "id": 5278,
            "title": "Story of My Experiments with 3D Printing",
            "description": "A few months ago, I purchased the FabX 3D printer. In this session, I will share some of my experiences with 3D printing over the past few months. This session will cover both modelling (mostly with FreeCAD) &amp; printing. The focus of this will be creating items that combine 3D printed parts &amp; regular parts. [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/practical-3d-printing\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/practical-3d-printing",
            "time": "4:30PM - 5:15PM",
            "location": "Contra",
            "track": 2,
            "presenter": "shreekumar3d",
            "photo": "https:\/\/graph.facebook.com\/10205469911122849\/picture?width=150&height=150",
            "category": "Technology",
            "color": "#0B83E4"
        }, {
            "id": 5365,
            "title": "Disability And World Views",
            "description": "it aims to bring forth the world&#8217;s disability problem. it also plans to bring out the various issue faced by the disabled people of the country.it also aims in creatig general awareness for problems faced by the people with disabilities. it also aims to bring forth new technologies that have been made or introduced for [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/disability-and-world-views\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/disability-and-world-views",
            "time": "4:30PM - 5:15PM",
            "location": "Diablo",
            "track": 3,
            "presenter": "Anirudh Nair",
            "photo": "https:\/\/secure.gravatar.com\/avatar\/42b3932a3630deb631f5f6e5b1767d76?s=96&#038;d=wavatar&#038;r=g",
            "category": "Rest of the World",
            "color": "#701E7F"
        }, {
            "id": 5263,
            "title": "Apache Kafka : Your step 1 to Big Data",
            "description": "Apache Kafka is highly distributed message queue system. It is often used as a buffer between highly scalable ingestion systems to your backend big data processing systems like Storm, Spark or HDFS. In this session we will discuss about how to get Apache Kafka up and running. We will also talk about how scale Apache [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/apache-kafka-your-step-1-to-big-data\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/apache-kafka-your-step-1-to-big-data",
            "time": "4:30PM - 5:15PM",
            "location": "Everquest",
            "track": 4,
            "presenter": "the100rabh",
            "photo": "https:\/\/secure.gravatar.com\/avatar\/bb6caa13742a331aad8b493034663a64?s=96&#038;d=wavatar&#038;r=g",
            "category": "Technology",
            "color": "#0B83E4"
        }, {
            "id": 5747,
            "title": "General Quiz",
            "description": "A fun quiz with questions from current affairs, movies, technology, etc. A short quiz with around 16 questions. Teams will be split in the hall. So don&#8217;t worry about forming teams beforehand. This is an impromptu quiz so be prepared for the improv. Questions are simple and enough clues will be provided if you feel [&hellip;] <a href=\"https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/general-quiz\">Read more<\/a>",
            "permalink": "https:\/\/barcampbangalore.org\/bcb\/monsoon-2015\/general-quiz",
            "time": "4:30PM - 5:15PM",
            "location": "Fable",
            "track": 5,
            "presenter": "Nambirajan Vanamamalai",
            "photo": "https:\/\/graph.facebook.com\/10153575701817247\/picture?width=150&height=150",
            "category": "Rest of the World",
            "color": "#701E7F"
        }]
    }, {
        "type": "fixed",
        "startTime": "1730",
        "endTime": "1815",
        "time": "5:30PM - 6:15PM",
        "name": "Feedback",
        "id": 13
    }],
    "tracks": ["Asteroids", "Battleship", "Contra", "Diablo", "Everquest", "Fable"]
};

var session_empty = {
    "status": "Sessions have not been alloted yet",
    "version": 50,
    "slots": [{
        "type": "fixed",
        "description" : "Registration starts at 0800, please be here on time.",
        "startTime": "0800",
        "endTime": "0900",
        "time": "8:00AM - 9:00AM",
        "name": "Registration",
        "id": 1
    }, {
        "type": "fixed",
        "startTime": "0900",
        "endTime": "0930",
        "time": "9:00AM - 9:30AM",
        "name": "Introduction",
        "id": 2
    }, {
        "type": "session",
        "startTime": "0945",
        "endTime": "1030",
        "time": "9:45AM - 10:30AM",
        "name": "Slot 1",
        "id": 3,
        "sessions": []
    }, {
        "type": "fixed",
        "startTime": "1030",
        "endTime": "1100",
        "time": "10:30AM - 11:00AM",
        "name": "Break 1",
        "id": 4
    }, {
        "type": "session",
        "startTime": "1100",
        "endTime": "1145",
        "time": "11:00AM - 11:45AM",
        "name": "Slot 2",
        "id": 5,
        "sessions": []
    }, {
        "type": "session",
        "startTime": "1145",
        "endTime": "1230",
        "time": "11:45AM - 12:30AM",
        "name": "Slot 3",
        "id": 6,
        "sessions": []
    }, {
        "type": "fixed",
        "startTime": "1230",
        "endTime": "1330",
        "time": "12:30AM - 13:30AM",
        "name": "Lunch",
        "id": 7
    }, {
        "type": "fixed",
        "startTime": "1330",
        "endTime": "1430",
        "time": "1:30PM - 2:30PM",
        "name": "Techlash",
        "id": 8
    }, {
        "type": "session",
        "startTime": "1430",
        "endTime": "1515",
        "time": "2:30PM - 3:15PM",
        "name": "Slot 4",
        "id": 9,
        "sessions": []
    }, {
        "type": "fixed",
        "startTime": "1515",
        "endTime": "1545",
        "time": "3:15PM - 3:45PM",
        "name": "Break 2",
        "id": 10
    }, {
        "type": "session",
        "startTime": "1545",
        "endTime": "1630",
        "time": "3:45PM - 4:30PM",
        "name": "Slot 5",
        "id": 11,
        "sessions": []
    }, {
        "type": "session",
        "startTime": "1630",
        "endTime": "1715",
        "time": "4:30PM - 5:15PM",
        "name": "Slot 6",
        "id": 12,
        "sessions": []
    }, {
        "type": "fixed",
        "startTime": "1730",
        "endTime": "1815",
        "time": "5:30PM - 6:15PM",
        "name": "Feedback",
        "id": 13
    }],
    "tracks": ["Asteroids", "Battleship", "Contra", "Diablo", "Everquest", "Fable"]
};

var user_data = {
    data: [{
        title: 'Distributed Realtime Computation using Apache Storm',
        id: '5283'
    }, {
        title: 'Cross Platform Mobile Apps with Ionic',
        id: '5497'
    }, {
        title: 'Orchestrating the command line',
        id: '5275'
    }, {
        title: 'JavaScript, IoT on ESP8266 Micro Controller',
        id: '5679'
    }]
};

var user_data_empty = "useless";


utilsModule.factory('mockData', ['$http', function($window) {

var mockData = {};

mockData.getSessionDataSuccess = function() {
  console.log("getSessionDataSuccess");
  return session_data_success;
};

mockData.getUserDataSuccess = function() {
  console.log("getUserDataSuccess");
  return user_data;
}

mockData.getUserDataEmpty = function() {
  console.log("getUserDataEmpty");
  return user_data_empty;
}

return mockData;
}
]);
