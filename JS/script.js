let button = window.document.getElementById(`button`);
showcard();

button.addEventListener(`click`, function () {
  // alert(`clicked`)

  let date = new Date();
  let minutes = date.getMinutes();
  let hour = date.getHours();
  let nowDate = date.getDate();
  let monthIndex = date.getMonth();

  month = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `September`,
    `October`,
    `November`,
    `December`,
  ];
  if (hour <= 12) {
    ampm = `AM`;
  } else {
    hour = hour - 12;
    ampm = `PM`;
  }
  timeLine = [month[monthIndex], nowDate, hour, minutes, ampm];

  let notes = localStorage.getItem(`notes`);
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let notesTextArea = window.document.getElementById(`notes-txtarea`);
  let titleTextArea = window.document.getElementById(`title-txtarea`);
  let noteslStorage = notesTextArea.value;
  let titlelStorage = titleTextArea.value;
  if (titlelStorage == "") {
    titlelStorage = `Note`;
  }
  let notesArray = [noteslStorage, titlelStorage, timeLine];
  if (noteslStorage == "") {
    alert(`Enter any notes to add`);
  } else {
    notesObj.push(notesArray);
    localStorage.setItem(`notes`, JSON.stringify(notesObj));
    notesTextArea.value = ``;
    titleTextArea.value = ``;
  }
  console.log(notesObj);
  showcard();
});
function showcard() {
  let date = new Date();
  let minutes = date.getMinutes();
  let hour = date.getHours();
  let nowDate = date.getDate();
  let monthIndex = date.getMonth();

  month = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `September`,
    `October`,
    `November`,
    `December`,
  ];
  if (hour <= 12) {
    ampm = `AM`;
  } else {
    hour = hour - 12;
    ampm = `PM`;
  }
  timeLine = [month[monthIndex], nowDate, hour, minutes, ampm];

  let notes = localStorage.getItem(`notes`);
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  // alert(notesObj[0][0])
  let html = ``;
  for (let i = 0; i < notesObj.length; i++) {
    html += `<div class="card">
        <div class="title-time"><h4>${notesObj[i][1]}</h4></div><pre>                                                   ${notesObj[i][2][0]} ${notesObj[i][2][1]}  ${notesObj[i][2][2]}:${notesObj[i][2][3]} ${notesObj[i][2][4]}</pre><hr id="line">
        <div class="spaceing"><div class="notes-txt">${notesObj[i][0]}</div>
        <button id="${i}" onclick="deleteNote(this.id)" class="delete">Delete</button></div>
    </div>`;
  }
  let notesElm = window.document.getElementById(`sCard`);
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `<span id="id">Nothing to show! Use "Add a Note" section above to add notes.</span>`;
  }
}
function deleteNote(i){
  let date = new Date();
  let minutes = date.getMinutes();
  let hour = date.getHours();
  let nowDate = date.getDate();
  let monthIndex = date.getMonth();

  month = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `September`,
    `October`,
    `November`,
    `December`,
  ];
  if (hour <= 12) {
    ampm = `AM`;
  } else {
    hour = hour - 12;
    ampm = `PM`;
  }
  timeLine = [month[monthIndex], nowDate, hour, minutes, ampm];

  let notes = localStorage.getItem(`notes`);
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(i, 1);
  localStorage.setItem(`notes`, JSON.stringify(notesObj));
  showcard();
}