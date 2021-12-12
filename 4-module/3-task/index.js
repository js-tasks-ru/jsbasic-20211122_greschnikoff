function highlight(table) {

  table = table.getElementsByTagName('tr');

  let Age;
  let Gender;
  let Status;

  for (let i = 0; i < table[0].children.length; i++) {
    if (table[0].children[i].innerHTML === 'Age') {
      Age = i;
    }
    if (table[0].children[i].innerHTML === 'Gender') {
      Gender = i;
    }
    if (table[0].children[i].innerHTML === 'Status') {
      Status = i;
    }
  }

  let classTable = {
    m: 'male',
    f: 'female',
    true: 'available',
    false: 'unavailable',
  }

  for (let o = 1; o < table.length; o++) {
    let classGender = table[o].children[Gender];

    classGender.parentNode.classList.add(classTable[classGender.innerHTML]);

    let classAge = table[o].children[Age].innerHTML;
    if (classAge < 18) {
      classGender.parentNode.setAttribute('style', 'text-decoration: line-through');
    }

    let classStatus = table[o].children[Status];
    if (classStatus.hasAttribute('data-available')) {
      let classAvailable = classStatus.getAttribute('data-available');
      classStatus.parentNode.classList.add(classTable[classAvailable]);
    } else {
      classStatus.parentNode.hidden = true;
    }
    console.log(classStatus);

  }
}
