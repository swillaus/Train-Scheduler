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
 var name = "";
 var role = "";
 var startDate = 0;
 var monthlyRate = 0;
 $("#submitValue").on("click", function (event) {
    event.preventDefault();
    name = $("#employeeName").val().trim();
    role = $("#roleInput").val().trim();
    startDate = $("#startDate").val().trim();
    monthlyRate = $("#monthlyRate").val().trim();
    // push to firebase
    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
    });
 });


 database.ref().on("child_added", function (snapshot) {
    var sv = snapshot.val();
    var name = childSnapshot.val().name;
    var role =  childSnapshot.val().role;
    var startDate =  childSnapshot.val().startDate;
    var monthlyRate = childSnapshot.val().monthlyRate;
    console.log(sv.name);
    console.log(sv.role);
    console.log(sv.startDate);
    console.log(sv.monthlyRate);
 })