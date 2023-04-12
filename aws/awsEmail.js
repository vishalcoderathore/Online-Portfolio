var AWS = require("aws-sdk/dist/aws-sdk-react-native");

var LPAWS = {};

// Initialize the Amazon Cognito credentials provider
AWS.config.region = "us-east-1"; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-east-1:7ccf63ab-c99d-48a3-9d48-cfc978372a00",
});

LPAWS.sendToTopic = function (name, email, subject, message) {
  var sns = new AWS.SNS();
  var fullMsg = name + "\n" + email + "\n" + message;

  var params = {
    Message: fullMsg,
    Subject: "Online Portfolio - " + subject,
    TopicArn: "arn:aws:sns:us-east-1:021094376121:Portfolio_Contact_Form",
  };
 
  sns.publish(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    console.log("email sent!");
  });
};

export { AWS, LPAWS as default };
