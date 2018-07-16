$(document).ready(function () {
  console.log("Ready!");//lets me know jQuery is G2G
  // Initialize Firebase
  // This is the code we copied and pasted from our app page
  var config = {
    apiKey: "AIzaSyAJS4YQWU5DmESeYueG1qH1NGkjv3DncEY",
    authDomain: "whateveryouwantdemo1.firebaseapp.com",
    databaseURL: "https://whateveryouwantdemo1.firebaseio.com",
    storageBucket: "whateveryouwantdemo1.appspot.com"
  };

  firebase.initializeApp(config);

  // VARIABLES
  // --------------------------------------------------------------------------------

  // Get a reference to the database service
  var database = firebase.database();

  /* 
   $("#form-submit").on("click", function () {
     event.preventDefault();
     database.ref().push({
       name: $("#employee-name").val().trim(),
       title: $("#employee-title").val().trim()
     });
   });
 
   database.ref().on("child_added", function (snapshot) {
 
     var empName = snapshot.val().name;
     var empTitle = snapshot.val().title;
 
     var newRow = $("<tr>").append($("<td").text(empName), $("<td>").text(empTitle));
 
     $("table").append(newRow);
 
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });
 
 */
  /*-----------------------------------------------------------------------------------*/
  /*-----------------------------------------------------------------------------------*/
  /*-----------------------------------------------------------------------------------*/
  /*-----------------------------------------------------------------------------------*/
  /*----------------------------Activity 18 Example------------------------------------*/
  /*-----------------------------------------------------------------------------------*/
  /*-----------------------------------------------------------------------------------*/
  /*-----------------------------------------------------------------------------------*/


  // Initial Values

  // Capture Button Click
  $("#form-submit").on("click", function (event) {
    event.preventDefault();
    var employeeName = "";
    var employeeTitle = "";
    var startDate = 0;
    var monthlyRate = 0;
    // Grabbed values from text boxes
    employeeName = $("#employee-name").val().trim();
    title = $("#employee-title").val().trim();
    startDate = $("#startdate-input").val().trim();
    monthlyRate = $("#monthlyrate-input").val().trim();

    // Code for handling the push
    database.ref().push({
      name: employeeName,
      title: employeeTitle,
      start: startDate,
      rate: monthlyRate,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

  });

  // Firebase watcher .on("child_added"
  database.ref().on("child_added", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var employeeName = snapshot.val().name;
    var employeeTitle = snapshot.val().title;
    var startDate = snapshot.val().start;
    var monthlyRate = snapshot.val().rate;

    // Console.logging the last user's data
    console.log(employeeName);
    console.log(employeeTitle);
    console.log(startDate);
    console.log(monthlyRate);

    // Change the HTML to reflect
    $("#employee-name").text(employeeName);
    $("employee-title").text(title);
    $("#startdate-input").text(startDate);
    $("#monthlyrate-input").text(monthlyRate);

    // Handle the errors
  }, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

});

/* 

*/
