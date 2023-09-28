//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

//script

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


let inpchk = document.querySelectorAll("input[type=checkbox]");

function handleCheckboxTgle(checkbox) {
  console.log(checkbox.checked);

  let Row = checkbox.parentElement.parentElement;

  console.log(Row);

  let delColmn = Row.querySelector(":nth-child(9)");
  removeAllChldNode(delColmn);

  let editColmn = Row.querySelector(":nth-child(10)");
  removeAllChldNode(editColmn);

  Row.bgColor = '';

  if (checkbox.checked) {
    Row.bgColor = 'yellow';
    delColmn.appendChild(newDelBtn(Row));
    editColmn.appendChild(newEditBtn());

  }

  Visibilitytoggle();
}

function removeAllChldNode(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function defAlert(formatString, ...args) {
  const formattedText = formatString.replace(/{(\d+)}/g, (match, index) => {
    const argIndex = parseInt(index);
    return args[argIndex] !== undefined ? args[argIndex] : match;
  });

  setTimeout(() => {
    alert(formattedText);
  }, 150);
}

function newDelBtn(tr) {
  let btn = document.createElement('input');

  btn.type = 'button';

  btn.value = 'Delete';

  btn.addEventListener('click', () => {
    tr.nextElementSibling.remove();
    tr.remove();
    Visibilitytoggle();
    defAlert('record deleted successfully');
  })

  return btn;
}

function newEditBtn() {
  let btn = document.createElement('input');

  btn.type = 'button';

  btn.value = "Edit";
  btn.addEventListener('click', () => {
    const st = 'Edit details of {studentName}';
    const message = findSelectedCheckboxAndFormatMessage(st);

    if (message) {
      const userInput = prompt(message);
      if (userInput !== null) {
        window.alert('Data updated successfully')
        console.log('Data updated successfully');
      }
    }
  });

  return btn;
}


function findSelectedCheckboxAndFormatMessage(formatString) {
  const checkboxes = document.querySelectorAll('.checkbox');

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      const row = checkboxes[i].closest('tr');
      const firstColumnElement = row.querySelector('td:nth-child(2)');

      const message = formatString.replace('{studentName}', firstColumnElement.textContent);
      return message; // Return the formatted message
    }
  }
  
  return ''; // Return an empty string if no checkbox is selected
}

function Visibilitytoggle() {
  let chkboxes = document.querySelectorAll("input[type=checkbox]");

  let checked = false;

  chkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      checked = true;
      }
    })

    document.querySelector("button#button").disabled = !checked;

    const deleteAndEditRows = document.querySelectorAll("#myTable td:nth-child(9),#myTable th:nth-child(9),#myTable td:nth-child(10),#myTable th:nth-child(10)");

    deleteAndEditRows.forEach(cell => {
      cell.classList.remove("display-cell");
      if (checked) {
        cell.classList.add("display-cell");
      }
  })

  console.log(`button disability is now ${!checked}`);
}

function tglDropDwn(img) {
  const drpdwn = img.parentElement.parentElement.nextElementSibling;
  console.log(drpdwn);

  if (drpdwn.classList.contains("dropDownTextArea")) {
    drpdwn.classList.remove("dropDownTextArea");
  }
  else {
    drpdwn.classList.add("dropDownTextArea");
  }
}

function InputFunctionality(input) {
  input.addEventListener('change', () => {
    handleCheckboxTgle(input);
  })

  const img = input.nextElementSibling.nextElementSibling.nextElementSibling;

  img.addEventListener('click', () => {
    tglDropDwn(img);
  })

  handleCheckboxTgle(input);
}

let cln = document.querySelectorAll("#myTable tbody tr");
let clnRow = cln[1].cloneNode(true);
let clnDetails = cln[2].cloneNode(true);

inpchk.forEach(input => {
  InputFunctionality(input);
})

function addNewStudent() {
  console.log(`adding new student`);

  let tbody = document.querySelector("#myTable tbody");

  newRow = clnRow.cloneNode(true);
  newDetails = clnDetails.cloneNode(true);

  const count = document.querySelectorAll("input[type=checkbox]").length + 1;
  console.log(count);

  const rows = newRow.querySelectorAll("td");

  rows[1].innerHTML = `Student ${count}`;
  rows[2].innerHTML = `Teacher ${count}`;
  rows[6].innerHTML = getRandom(count * 10000, count * 10000 + 9999);

  let checkbox = newRow.querySelector("input[type=checkbox]");
  InputFunctionality(checkbox);

  console.log(newRow);
  console.log(newDetails);

  tbody.appendChild(newRow);
  tbody.appendChild(newDetails);

  defAlert('Student {0} added successfully.', count);
}

let addNewButton = document.querySelector("button#add");

addNewButton.addEventListener('click', () => {
  try {
    addNewStudent();
    Visibilitytoggle();
  } catch (error) {
      alert(`Unable to add student: ${error}`);
    }
})

