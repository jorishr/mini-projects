/* 
Note: there are three versions of the same app in this document: v1,v2 and v3.

###########
Version 1.0
###########

Create an array that will store the to-do items:
  
  var todos = ["task1", "task2"];

Ask for input user:
  var inputUser = prompt("What do you want to do?");

What do we do we the input? 
- If the input is list, show the list
- If the input is quit
- If the input is new

if(inputUser === "list"){
    document.write(todos);
} else if(inputUser === "quit"){
    document.write("You're done!");
} else if(inputUser === "new"){
    var newTodo = prompt("Add new task");
    todos.push(newTodo);
}

This works just fine. The next step is to have this code repeat until the
user types quit:

while(inputUser !== "quit"){
  if(inputUser === "list"){
    document.write(todos);
  } else if(inputUser === "new"){
      var newTodo = prompt("Add new task");
      todos.push(newTodo);
  }
  inputUser = prompt("What do you want to do?");
  //ask for new input
}
document.write("Ok, you're done"); 
// this line only runs when the loop is done
*/

/* 
###########
Version 2.0
###########

List command: each item of the list will be written separately on a line with some additional formatting. Before and after the loop you write a line of ****
and you add the index position before each item.

This means you iterate through the array todos with a for-Loop or forEach method, use the arguments of the function:

var todos = ["task1", "task2"];
var inputUser = prompt("What do you want to do?");

while(inputUser !== "quit"){
  if(inputUser === "list"){
    document.write("**********"+"<br />");
    todos.forEach(function(listPrint, i){
       document.write(i +": " + listPrint + "<br />");
    });
    document.write("**********"+"<br />");
  } else if(inputUser === "new"){
      var newTodo = prompt("Add new task");
      todos.push(newTodo);
      document.write("New task successfully added!"+"<br />")
  } else if(inputUser === "delete"){
      // to delete something, you need the index position of the item
      var whatIndex = prompt("what's the position of the item you want to delete?")
      // then delete the item with the splice() method
      todos.splice(whatIndex,1);
      // add user feedback
      document.write("Item: " + whatIndex +" deleted successfully!"+"<br />");
  }
  //ask for new input
  inputUser = prompt("What do you want to do?");
}
document.write("Ok, you're done!");
 
/* 
#############################
Version 3.0 - refactored code
#############################
*/
var todos = ["task1", "task2"];
var inputUser = prompt("What do you want to do?");

while(inputUser !== "quit"){
  if(inputUser === "list"){
      listItems();
  }else if(inputUser === "new"){
      addItem();
  }else if(inputUser === "delete"){
      deleteItem();
  }
  //ask for new input
  inputUser = prompt("What do you want to do?");
}
document.write("Ok, you're done!");

//refactored functions
function listItems(){
  document.write("**********"+"<br />");
  todos.forEach(function(listPrint, i){
  document.write(i +": " + listPrint + "<br />");
});
  document.write("**********"+"<br />");
}

function addItem(){
  var newTodo = prompt("Add new task");
  todos.push(newTodo);
  document.write("New task successfully added!"+"<br />")
}

function deleteItem(){
// to delete something, you need the index position of the item
  var whatIndex = prompt("what's the position of the item you want to delete?")
// then delete the item with the splice() method
  todos.splice(whatIndex,1);
// give user feedback
  document.write("Item: " + whatIndex +" deleted successfully!"+"<br />");
}