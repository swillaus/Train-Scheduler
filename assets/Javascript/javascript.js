// Input Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyA1cfdFkSz-wUPV9DOer0tixPAXNkw9LLM",
   authDomain: "train-schedule-ca8d1.firebaseapp.com",
   databaseURL: "https://train-schedule-ca8d1.firebaseio.com",
   projectId: "train-schedule-ca8d1",
   storageBucket: "",
   messagingSenderId: "65586820247",
   appId: "1:65586820247:web:9b604dbee7f4f4a9"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var trainName = "";
var role = "";
var startDate = 0;
var monthlyRate = 0;

$("#submitValue").on("click", function (event) {
   event.preventDefault();
   trainName = $("#trainName").val().trim();
   destination = $("#destination").val().trim();
   firstTrainTime = $("#firstTrainTime").val().trim();
   frequency = $("#frequency").val().trim();
   // push to firebase
   database.ref().push({
      trainName: trainName,
      destination: destination,
      firstTrainTime: firstTrainTime,
      frequency: frequency,
   });
    // Add alert message
    alert("Train has been added successfully")
});


// Create the listener even to pick up a new record add and append to table
database.ref().on("child_added", function (childSnapshot) {

   trainName = childSnapshot.val().trainName;
   destination = childSnapshot.val().destination;
   firstTrainTime = childSnapshot.val().firstTrainTime;
   frequency = childSnapshot.val().frequency;

   var convertedTimeAMPM = moment(firstTrainTime, "hh:mm:").format("hh:mm a");

   console.log(trainName);
   console.log(destination);
   console.log(convertedTimeAMPM);
   console.log(frequency);


   // Calculate how far away train is
   var minutesAway = moment(convertedTimeAMPM, "hh:mm a").fromNow();
   console.log(minutesAway);


   // Create the new row to all values to table
   var newRow = $("<tr>").append(
      $("<td>").text(childSnapshot.val().trainName),
      $("<td>").text(childSnapshot.val().destination),
      $("<td>").text(childSnapshot.val().frequency),
      $("<td>").text(convertedTimeAMPM),
      $("<td>").text(minutesAway),
   );

   // Append the new row to the table
   $("#trainTable > tbody").append(newRow);

  
});

