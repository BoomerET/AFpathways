/*jshint esversion: 6 */
/*jshint multistr: true */

/* Authentication:
Client ID: 268562111929-3afbvs2kf2l1jremoj0ft9v47oagsivk.apps.googleusercontent.com
Client secret: hWOIV6W0VmmGuiO328enfeGi
*/

var isLoggedIn = false;

$(function() {
    $('#checkLogin').click(function () {
        if (isLoggedIn == true) {
            console.log("User logged in");
        } else if (isLoggedIn == false) {
            console.log("User logged out");
        } else {
            console.log("User status unknown");
        }
     });
});

function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
    isLoggedIn = true;
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      isLoggedIn = false;
    });
}