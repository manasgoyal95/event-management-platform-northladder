# event-management-platform-north ladder
I have made this assignment using NodeJS, ExpressJs, and MongoDB.
First, install all the dependencies by running "npm install" in the terminal.
For server, I have used nodemon so for starting the server please use - npm run start.
For accessing all the endpoints please go to "http://localhost:8080" and add the endpoints as described below for different purposes. 
I have also attached postman screenshots for all the post requests made.

This is set up on port 8080.

I have created two folders - config which contains the MongoDB connection code and another one is model which defines the various data fields present in a particular event data.

For adding a new event - I have created a new route "/events" that creates a new event.

![image](https://github.com/manasgoyal95/event-management-platform-northladder/assets/83281087/f979b73e-476f-482c-9921-f2c49efcadb1)
![image](https://github.com/manasgoyal95/event-management-platform-northladder/assets/83281087/b911bc54-d0cb-4991-a2af-cddd6da19284)
![image](https://github.com/manasgoyal95/event-management-platform-northladder/assets/83281087/ee07e7ec-2433-48af-88b3-d790c1e93a18)

For updating and deleting an existing I have created a route "/events/:id" which takes the id of the event to be updated or deleted.

Delete -

![image](https://github.com/manasgoyal95/event-management-platform-northladder/assets/83281087/0677c35f-bd0e-49d3-aa53-ccd1e0723fee)
![image](https://github.com/manasgoyal95/event-management-platform-northladder/assets/83281087/d44d1ea2-242f-4789-8a74-a587b5dfa225)

Update - I have changed the above event name from "My event" to "Birthday"
![image](https://github.com/manasgoyal95/event-management-platform-northladder/assets/83281087/d54b1e93-9ff3-4d8a-b868-df802b63973f)
![image](https://github.com/manasgoyal95/event-management-platform-northladder/assets/83281087/8ebd2c82-f11d-4df9-892d-a5c81c67c29f)



For getting a particular event again to go the route "/event/:id" and it would provide us to that particular event.

![image](https://github.com/manasgoyal95/event-management-platform-northladder/assets/83281087/ba135b96-0453-472a-b688-eae468ea72b8)
