// $.backstretch("http://res.cloudinary.com/codingbootcamp/image/upload/c_fit,h_700/v1524791753/background.jpg");

$(".container").hide();

$("#add-user").click(function (event) {
  event.preventDefault();
  // Initial Values
  var name = "";
  var email = "";
  var zipcode = "";
  name = $("#exampleInputName").val().trim();
  email = $("#exampleInputEmail1").val().trim();
  zipcode = $("#exampleInputZipcode").val().trim();
  console.log(name);
  console.log(email);
  console.log(zipcode);
  //empty out input fields after last user
  $("#exampleInputName").val("");
  $("#exampleInputEmail1").val("");
  $("#exampleInputZipcode").val("");

  if(!name==""&&!email== " "&&!zipcode==""){
 $(".container").show();
  $("#sign-up-form").toggle();
  $("#add-user").toggle();
  var config = {
    apiKey: "AIzaSyCyq05OybcgW5FOvPiDrBQscEWl_p2BPiA",
    authDomain: "recipe-app-3ba55.firebaseapp.com",
    databaseURL: "https://recipe-app-3ba55.firebaseio.com",
    projectId: "recipe-app-3ba55",
    storageBucket: "",
    messagingSenderId: "1053202008671"
  };

  firebase.initializeApp(config);

  // Create a variable to reference the database
  var database = firebase.database();
  database.ref().set({
    name: name,
    email: email,
    zipcode: zipcode
  });
  
  }else{
    $(".error-messages").text("The form is not complete. ").show();
  }
 
  

});

$("#recipe-search").on("click", function (event) {
  event.preventDefault();

  // In this case, the "this" keyword refers to the button that was clicked
  var ingredients = $("#ingredient-search").val();
  console.log(ingredients);

  var recipequeryURL = "https://api.edamam.com/search?q=" +
    ingredients + "&app_id=34b92ab5" + "&app_key=db5e2409c61531b092a4927d225ce0c8";

  $.ajax({
    url: recipequeryURL,
    method: "GET"
  })
    .then(function (response) {
      var results = response.hits;

      var recipeList = $("<ul>");

      for (var i = 0; i < results.length; i++) {

        var list = $("<li>").text(results[i].recipe.label + " " + results[i].recipe.url);
        recipeList.append(list);
      }
      $("#recipe-section").empty();
      $("#recipe-section").append(recipeList);
    });
  var userZipcode = 28277;
  var yelpqueryURL = "https://api.yelp.com/v3/businesses/search?location=" + userZipcode + "&radius=8046&limit=10";
  $.ajax({
    url: yelpqueryURL,
    method: "GET",
    headers: {
      "Authorization": "Bearer -yWLl5z5MtqpT8QUaKOFUYIGnGrgetYRnOV5DUM0yWGVgbs82xXIYXWf7H-TcDhHnRQXT15KUYOxj0gueIrFtLUgNc9_IqwJIRwuZi2Qqbcj0krqcLgyiGOh99zoWnYx"

    }
  })

    .then(function (response) {
      var results = response.businesses;
      var yelpList = $("<ul>");
      for (var i = 0; i < results.length; i++) {
        var list = $("<li>").text(results[i].name + " " + results[i].url);
        yelpList.append(list);
      }
      $("#restaurant-section").empty();
      $("#restaurant-section").append(yelpList);

    })

});



  //







