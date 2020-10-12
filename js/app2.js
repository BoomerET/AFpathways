/*jshint esversion: 6 */
/*jshint multistr: true */

/* Authentication:
Client ID: 268562111929-3afbvs2kf2l1jremoj0ft9v47oagsivk.apps.googleusercontent.com
Client secret: hWOIV6W0VmmGuiO328enfeGi
*/

$(function() {
  // Get a reference to the database service
  var database = firebase.database();
  firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          displayName = user.displayName;
          //console.log("Name1: " + displayName);
          email = user.email;
          //var emailVerified = user.emailVerified;
          //var photoURL = user.photoURL;
          //var isAnonymous = user.isAnonymous;
          uid = user.uid;
          //var providerData = user.providerData;
          //console.log("User signed in: " + email);
          // ...
          console.log("DN: " + displayName);
          console.log("Email: " + email);
          console.log("Verified: " + user.emailVerified);
          console.log("Anon: " + user.isAnonymous);
          console.log("UID: " + user.uid);
        } else {
            console.log("User is cheating, kick him outta here.");
        }
    });
});

function userRegged(useremail, usergid) {
    $.ajax({
        data: { gmail: useremail },
        url: 'scripts/getUser.php',
        method: 'GET',
        success: function(data) {
            try {
                console.log(data);
                if (data == 0) {
                    console.log("User not registered, add user");
                    // Add user to database, set updates to zero
                    addRegUser(useremail, usergid);
                } else {
                    console.log("User already registered");
                    // Get user updates
                }
            } catch(e) {
                alert("Unable to get status");
                console.error(e);
                return;
            }
        },
        failure: function(msg) {
            alert("Unable to find user");
            return;
        }
    });
}

function addRegUser() {
    console.log("Adding user");
}