$(document).ready(function() {
  $(".container").hide();
  $("#add-user").click(function() {
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

    // Initial Values
    var name = "";
    var email = "";
    var zipcode = 0;
    $("#add-user").on("click", function(event) {
      // Don't refresh the page!
      event.preventDefault();

      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      name = $("#name-input").val().trim();
      email = $("#email-input").val().trim();
      age = $("#zipcode-input").val().trim();

      database.ref().set({
        name: name,
        email: email,
        zipcode: zipcode
      });

    });
  });

  $("#recipe-search").on("click", function() {
    // In this case, the "this" keyword refers to the button that was clicked
    var ingredients = $("#ingredient-search").val();
    console.log(ingredients);

    var recipequeryURL = "https://api.edamam.com/search?q=" +
      ingredients + "&app_id=34b92ab5" + "&app_key=db5e2409c61531b092a4927d225ce0c8";

    $.ajax({
        url: recipequeryURL,
        method: "GET"
      })
      .then(function(response) {
        var results = response.hits;

        var recipeList = $("<ul>");

        for (var i = 0; i < results.length; i++) {

          var list = $("<li>").text("Recipe Title:" + results[i].recipe.label + " " + results[i].recipe.url)
          recipeList.append(list);
        }
        $("#recipes-appear-here").append(recipeList);
      })

  });



  //var yelpqueryURL = "https://api.yelp.com/v3/businesses/search?term= + userZipcode + &radius=8046;




});
