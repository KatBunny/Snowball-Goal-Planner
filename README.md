#### Snowball-behindTheScenes
The backend server to my Snowball goal tracker api 

#### Katherine Sinkler
* Hello, I am creating a goal setting api that is meant to track goals that have many parts and keep progress of the parts as they are accomplished so that the user can realize that doing one thing at a time can really add up when careful planning and tracking is considered.  This project will include a sign in page that should link into a page where goals and goal steps are listed. There will be a cache of data within a user's account and a way to track progress according to a time frame set. I have a stretch goal to include some kind of animation of a snowman being built as the goal progresses with a complete build of a snowman at the completion of each goal. 
I would also like to allow the user to set reminder notificaions according to their comfort level.

# Snowball Goal Planner

## Wireframe
![Alt text](images/Snow%20Man%20wireframe.jpg)
![Alt text](images/Snow%20Man%20wireframe.jpg)


## User Experience

* As a user I want to be able to use this app as a personal goal tracker that can accommodate my progress and keep me focused on my goal with constant reminders and motivational reinforcement.
* As a user I want to be able to sign in to my private account that has a cache of my saved information that is able to be changed through a request.
* As a user, I want this site to be simple and easy to navigate so that I don't struggle with my goals because I am not sure how to access them.

```<nav id="Sign-in"></nav>```


* As a user, I want have access to the goals I set to be able to edit them in order to accomadate changes due to unforseeable obstacles that I have faced along the way. 
* As a user I want to be able to recieve daily notifications as reminders that I have set for myself to complete my goals.
* As a user I want to be able to set a time and/or date that I want this goal to be complete so that I can know if I am being realistic with the goals that I have set for myself.
* As a user I want to be able to break down my goal into as many steps as I need to in order to snow ball my progress without being confused about the details that I have left out.
* As a user I want to be able to refresh my page after I have checked off accomplishments to see the  updates of all my information that has been recorded .
* As a user I want to have all my goals saved within my account, as well as be able to access previous history of my completed goals to realize how far that I have come.
* As a user, I would like to see a full snow man built in response to my goal accomplishment.

## MVP (CRUD + ERD)
* I will use express for my recall and response cycle.
        ``` I would like to require express as a route to accomplish all of my CRUD actions and I will more than likely test them all through POST man:
            -I want to make GET request to welcome the user to my page an help them to utilize the nav bar. I want a json response to all info saved after sign-in and populate accordingly.
            - I want to allow update and delete options to the user. 
            -I want to POST all base options and requirements to get the user to set their goals outlined in the user experience. I would like to create a table through my nav bar to communicate with the database. ```


* ERD should be seen in wire frame, but will briefly explain it here. 
        ``` Their will be a client which will be known as "Goal-Getter" entity; identification information with attributes such as email, username, password will be here. All attributes of the client should be a String value. There will be one client with a zero to many relationship with the second entity which is going to be called "Goal Details" which take in attribute such as goal(String), breakdown steps of the goal {string}, time frame to accomplish the goal (Number), etc (final attributes are still being considered). The "Goal Getter" entity will have a zero or many relationship with the final entity which is the "Snow Man".
        The "Snow Man" entity will have attributes such as completion rate of goal set (Number), timeframe management (Number), and null for anything not beeded within a goal. ```  

* Fulfill user experience.
* I want to be able to test out this app for myself after deployment to check out bugs and do my best to correct them befor the presentation. 
* I want to have a desirable css and html front end that is successfully connected to my app.
* I want to use my backend and front end wireframe as a clear reference and guide from the beginnin to the end.
* Make daily commits.


### MVP Version 2
* I want my phone to have mobile media capabilites with up to a 750px accomodation.

### MVP Version 3
* I want to allow user an option to change the color of their background
* I want to allow the user an option to link goals to socail media to share their goal results if they so please.

### Project Timeline
 * 1/25/23 : 
        1. Approvel of project and start working on backend and some testing in place.
 * 1/26/23 : 
        1. Integrate backend and front-end and testing.
        2. Focus on present road blocks so that I will be able to get help through teacher staff through slack parking lot channel as well as office hours. 
 * 1/27/23 :
        1. Try to be as close to MVP as possible.
        2. Deployment
        3. Ask for help where needed while staff is still available through parking lot channel.
        4. Make a list of what still needs to be done in mvp to try to catch up over the weekend. If mvp is done, I will attempt version 2.
        5. Start to test the api on myself.
 * 1/30/23 :
        1. See if I ran into issues over the weekend and take advantage of the staff available.
        2. Do as little to the change the project as possible if it is running well and ready to present.
        3. Make sure that README.md is polished and ready to go. 
 * 1/31/23 :
        4. Submit project.
        5. Present project.