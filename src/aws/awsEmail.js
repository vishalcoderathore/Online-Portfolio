var AWS = require('aws-sdk/dist/aws-sdk-react-native');

var LPAWS = {};

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:7ccf63ab-c99d-48a3-9d48-cfc978372a00',
});

LPAWS.sendToTopic = function (fName, lName, email, contactNum, msg) {
    var sns = new AWS.SNS();

    var editedfName = "First Name : " + fName;
    var editedlName = "Last Name : " + lName;
    var editedEmail = "Email Address : " + email;
    var editedContactNum = "Contact Number : " + (contactNum ? contactNum : "N/A");
    var editedMsg = "Message : " + (msg ? msg : "N/A");
    var fullMsg = editedfName + "\n" + editedlName + "\n" + editedEmail + "\n" + editedContactNum + "\n" + editedMsg;

    var params = {
        Message: fullMsg,
        Subject: 'Online Portfolio - ' + fName + ' has a message for you!',
        TopicArn: 'arn:aws:sns:us-east-1:021094376121:Portfolio_Contact_Form'
    };
    sns.publish(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        console.log("email sent!");
    });
};

export { AWS, LPAWS as default };