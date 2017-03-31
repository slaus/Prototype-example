var Person = {
  constructor: function(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    return this;
  },
  greet: function() {
    console.log("Hi, my name is " + this.name);
  }
};

var WebDeveloper = Object.create(Person);

WebDeveloper.constructor = function(name, age, gender, skills) {
  Person.constructor.apply(this, arguments);
  this.skills = skills || [];
  return this;
};

WebDeveloper.develop = function(){
  console.log("Working...");
};

var developer = Object.create(WebDeveloper).constructor("Jack", 21, "male", ["html", "css", "js", "php", "mysql"]);

console.log(developer.skills);
console.log(developer.name);

developer.develop();
developer.greet();
