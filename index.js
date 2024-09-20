const cors = require('cors')
const bodyParser = require('body-parser')
const twilio = require('twilio')
const express = require('express')
const port = 5000

let app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

const accountSid = 'ACcd29236581371ee3c9310622ace7d896'
const authToken = '79acc69752fe3375d283e9a001930392'
const client = twilio(accountSid, authToken)

app.post('/send-message', (req, res) => {
  const { name, email, message } = req.body
  console.log('Form data received:', req.body)

  client.messages.create({
    body: `Message from ${name} (${email}): ${message}`,
    from: '+18336973199', // Twilio number
    to: '+16265012665'    // Your phone number
  })
    .then((message) => {
      res.status(200).json({ success: true, message: 'Message sent!' })
    })
    .catch((error) => {
      res.status(500).json({ success: false, error: error.message })
    })
  res.json({ success: true, message: 'Message received successfully' })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})