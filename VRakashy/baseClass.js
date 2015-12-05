//базовый класс

function Person(person) {
     this.id = person.id;  
     this.firsName = person.firsName;
     this.lastName = person.lastName;
     this.email = person.email;
     this.login = person.login;
     this.password = person.password;
};


//пользователь

function User(person) {
   Person.apply(this, arguments);
  
   this.photo = person.photo;
   this.dateOfBirthd = person.dateOfBirthd;
   this.location = person.location; 
   this.friends = person.friends || [];
   this.post = person.post || [];
};

User.prototype.setFriends = function() {};

User.prototype.dellFriends = function() {};

User.prototype.setPost = function() {};

User.prototype.dellPost = function() {};


//админ

function SuperAdmin(person) {
   Person.apply(this, arguments); 
};

SuperAdmin.prototype.dellUser = function() {};

SuperAdmin.prototype.dellPost = function() {};


//пост
function Post(post) {
  this.id = post.id;
  this.ownerId = post.ownerId;
  this.image = post.image;
  this.description = post.description;
  this.date = post.date;
  this.likesId = post.likesId || [];
}

Post.prototype.addLikesId = function() {};



