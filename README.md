#WKD || FREI:raum

                            Project: Odin-Book
                    "The Odin-Project" - NodeJS Course

                    | implemented with Express/React |

Introduction

You’ve come a long way, congratulations! At this point you should feel comfortable with building new Express applications and using MongoDB to model and store data. This project will require you to put all of that knowledge to the test. It’s not going to be easy, but should be well within your capabilities and it will be a great portfolio piece.

You’ll be building Facebook. As with our previous lessons, how much effort you want to put into the styling and front-end is up to you. The important stuff is the data and backend. You’ll put together the core features of the platform like users, profiles, posts, “liking”, “friending”, and the news feed. You’ll also implement signing in with the real Facebook using our old friend passportJS.

Some features of Facebook are things we haven’t been exposed to such as chat, realtime updates of the newsfeed and notifications. You won’t be responsible for those unless you’re feeling really confident in your skills at this point. (It’s not that hard.. look here if you want to see what’s involved.)

Assignment
Build Facebook! You’ll build a large portion of the core Facebook user functionality in this project. We won’t be worrying about some of the more flashy front-end stuff unless you really want to, but you shouldn’t need it to get a nice user experience.

This project will give you a chance to take a relatively high level set of requirements and turn it into a functioning website. You’ll need to do some of your own research and read the documentation for a few of the modules we’ll be using. Keep the following requirements in mind. We’ll cover specific steps to get started below this list.

Users must sign in to see anything except the sign in page.

Users should be able to sign in using their real facebook details. This is fairly easily accomplished using PassportJS, and you should be able to use the knowledge you already have to figure it out from the documentation.

Users can send friend requests to other users.

A user must accept the friend request to become friends.

Users can create posts. (begin with text only)

Users can like posts.

Users can comment on posts.

Posts should always display with the post content, author, comments and likes.

Treat the Posts index page like the real Facebook’s “Timeline” feature – show all the recent posts from the current user and users she is friends with.

Users can create Profile with a photo (you can get this from the real facebook when you sign in using passport)
The User Show page contains their profile information, profile photo and posts.

The Users Index page lists all users and buttons for sending friend requests to those who are not already friends or who don’t already have a pending request.

Deploy your app to Heroku!

++++++++++++
Extra Credit
Make posts also allow images (either just via a url, or by uploading one.)
Allow Users to upload and update their own profile photo.

Create a guest sign-in functionality that allows visitors to bypass the login screen without creating an account or supplying credentials. This is especially useful if you are planning on putting this project on your résumé - most recruiters, hiring managers, etc. will not take the time to create an account. This feature will give them an opportunity to look at your hard work without going through a tedious sign-up process.

Make it pretty!

+++++++++++++++
Getting Started
Think through the data architecture required to make this work. There are lots of models and the relationship between them is more complicated than anything you’ve done before. How are you going to model a user’s list of friends and friend requests? Posts should be able to have likes and comments associated with them, how are you going to model that? Take some time to plan your approach before diving in.

Start your app however you like, using the express-generator or from scratch.

Work your way down the list above! Each step will involve a new challenge, but you’ve got the tools.

You can populate data like users and posts with fake data using the Faker module from npm. To accomplish this create a new JavaScript file named seeds.js which imports your mongoose models and uses the faker module to generate and save a bunch of new users.