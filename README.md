# FOMO APP | A Full Stack App
This app lets you create files to organize and share content of certain interest with your friends in the network. Only the people signed up and tagged in the file will have acces to the shared information there. iIn every file you can upload a image from your computer add some tags and description.

demo here

## Frontend Technologies Used 

JavaScript
React
Mui
React Router
Backend
## Backend Technologies Used 
Ruby on Rails
ActiveRecord
PostgreSQL
Bcrypt
Active Model Serializers

## How To Use
```console
Install and run:

npm install

# create migrations with activerecord
rails db:migrate

# if you would like to use seed data
rails db:seed

# start server
rails s

# start up react
npm install --prefix client

npm start --prefix client

RoR uses port 3000 by default. React app will open up on port 4000.
```
## Features
### App

* Ability to add new users and login
* Persistent login using cookies
* Ability to delete your own profile
* Unique design


## Boards

## Profile


### Backend Relationships:
### Associations
* User has many Userboards
* User has many Boards through Userboards
* Board has many Userboards
* Board has many Users through Userboards
* User has many Posts
* User has many Comments
* Board has many Posts
* Post belongs to a User
* Post belongs to a Board
* Post has many Comments
* Comment belongs to a User
* Comment belongs to a Post
### Fetch Example
#### Users
#### Boards
#### Posts
#### Comments
## Resources

- [create-react-app][]
- [dbdiagram.io][]
- [Postman][postman download]

[create-react-app]: https://create-react-app.dev/docs/getting-started
[dbdiagram.io]: https://dbdiagram.io/
[postman download]: https://www.postman.com/downloads/