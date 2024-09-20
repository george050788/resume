const accountSid = 'ACcd29236581371ee3c9310622ace7d896'
const authToken = '79acc69752fe3375d283e9a001930392'
const client = require('twilio')(accountSid, authToken)

client.messages.create({
  body: 'Someone left a message on your portfolio!',
  from: '+18336973199', // Twilio number
  to: '+16265012665'    // Your phone number
})
  .then(message => console.log(message.sid))
