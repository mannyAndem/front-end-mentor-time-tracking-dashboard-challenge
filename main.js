let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");

daily.addEventListener("click", () => {
  daily.setAttribute("active-tab", "true");
  monthly.setAttribute("active-tab", "false");
  weekly.setAttribute("active-tab", "false");

  workHour.innerHTML = "5hrs";
  playHour.innerHTML = "1hrs";
  studyHour.innerHTML = "0hrs";
  exerciseHour.innerHTML = "1hrs";
  socialHour.innerHTML = "1hrs";
  selfCareHour.innerHTML = "0hrs";

  workLast.innerHTML = "Yesterday - 7hrs";
  playLast.innerHTML = "Yesterday - 1hr";
  studyLast.innerHTML = "Yesterday - 1hr";
  exerciseLast.innerHTML = "Yesterday - 1hr";
  socialLast.innerHTML = "Yesterday - 3hrs";
  selfCareLast.innerHTML = "Yesterday - 1hr";
});
weekly.addEventListener("click", () => {
  weekly.setAttribute("active-tab", "true");
  daily.setAttribute("active-tab", "false");
  monthly.setAttribute("active-tab", "false");

  workHour.innerHTML = "32hrs";
  playHour.innerHTML = "10hrs";
  studyHour.innerHTML = "4hrs";
  exerciseHour.innerHTML = "4hrs";
  socialHour.innerHTML = "5hrs";
  selfCareHour.innerHTML = "2hrs";

  workLast.innerHTML = "Last Week - 36hrs";
  playLast.innerHTML = "Last Week - 8hrs";
  studyLast.innerHTML = "Last Week - 7hrs";
  exerciseLast.innerHTML = "Last Week - 5hrs";
  socialLast.innerHTML = "Last Week - 10hrs";
  selfCareLast.innerHTML = "Last Week - 2hrs";
});
monthly.addEventListener("click", () => {
  monthly.setAttribute("active-tab", "true");
  daily.setAttribute("active-tab", "false");
  weekly.setAttribute("active-tab", "false");

  workHour.innerHTML = "103hrs";
  playHour.innerHTML = "23hrs";
  studyHour.innerHTML = "13hrs";
  exerciseHour.innerHTML = "11hrs";
  socialHour.innerHTML = "21hrs";
  selfCareHour.innerHTML = "7hrs";

  workLast.innerHTML = "Last Month - 128hrs";
  playLast.innerHTML = "Last Month - 29hrs";
  studyLast.innerHTML = "Last Month - 19hrs";
  exerciseLast.innerHTML = "Last Month - 18hrs";
  socialLast.innerHTML = "Last Month - 23hrs";
  selfCareLast.innerHTML = "Last Month - 11shrs";
});
let workHour = document.getElementById("work-hour");
let playHour = document.getElementById("play-hour");
let studyHour = document.getElementById("study-hour");
let exerciseHour = document.getElementById("exercise-hour");
let socialHour = document.getElementById("social-hour");
let selfCareHour = document.getElementById("self-care-hour");

let workLast = document.getElementById("work-last");
let playLast = document.getElementById("play-last");
let studyLast = document.getElementById("study-last");
let exerciseLast = document.getElementById("exercise-last");
let socialLast = document.getElementById("social-last");
let selfCareLast = document.getElementById("self-care-last");
