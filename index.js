const functions = require("firebase-functions");
const admin = require("firebase-admin");
;


admin.initializeApp(functions.config().firebase);




exports.onNewUserCreated = functions.auth.user().onCreate(async (user, context) => {
    console.log(user.uid);
    console.log(user.email);
    const customToken = await admin.auth().createCustomToken(user.uid);
    console.log(customToken);




    // user.user.getIdToken().then((token) => console.log(token));



    return user.uid;

});

