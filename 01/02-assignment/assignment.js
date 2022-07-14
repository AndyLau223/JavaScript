const task3Element = document.getElementById('task-3');

function greet() {
  alert('hi there');
}

function greetUser(userName) {
  alert('Hi ' + userName);
}

function combine(str1, str2, str3) {
  return str1 + str2 + str2;
}

greet();

greetUser('Andy');

task3Element.addEventListener('click', greet);
