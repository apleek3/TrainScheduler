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
    var trainName = "";
    var destinationName = "";
    var trainTime = 0;
    var frequency = 0;
    // Grabbed values from text boxes
    trainName = $("#trainName").val().trim();
    destinationName = $("#destinationName").val().trim();
    trainTime = $("#trainTime").val().trim();
    frequency = $("#frequency").val().trim();

    // Code for handling the push
    database.ref().push({
      train: trainName,
      destination: destinationName,
      time: trainTime,
      frequency: frequency,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

  });

  // Firebase watcher .on("child_added"
  database.ref().on("child_added", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var trainName = snapshot.val().train;
    var destinationName = snapshot.val().destination;
    var trainTime = snapshot.val().time;
    var frequency = snapshot.val().frequency;

    // Console.logging the last user's data
    console.log(trainName);
    console.log(destinationName);
    console.log(trainTime);
    console.log(frequency);


    // add items to the table
    $("#trainTable").append(
      " <tr><th class='trainItems' id='tableFrequency'> " + snapshot.val().frequency +
      " </th><td class='trainItems' id='tableTrainName'> " + snapshot.val().train +
      " </td><td class='trainItems' id='tableDestination'> " + snapshot.val().destination +
      " </td><td class='trainItems' id='tableTime'> " + snapshot.val().time + " </td></tr>");


    // Change the HTML to reflect
    $("#trainName").text(snapshot.val().trainName);
    $("destinationName").text(snapshot.val().destinationName);
    $("#trainTime").text(snapshot.val().trainTime);
    $("#frequency").text(snaphshot.val().frequency);

    // Handle the errors
  }, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

});

/* 

*/
