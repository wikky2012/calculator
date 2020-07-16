var statement = function(para1, para2,para3) {
    return para1 + para2 + para3;
  };
  var age=parseInt(prompt("Enter your age"));
  var name=prompt("Give us your name:");
  var favouriteMeal=prompt("What is your favourite food?");

  alert(statement(age,name,favouriteMeal));