
var push = require('web-push');

let vapidkeys = {
  publicKey: 'BPfqDtqFy8HmKcbPjsQfYrTZQLYjF43kj9iTFK6aOF1GchnVGrdVkmUE7Ri85t6rj-YgaxIm-XkH5_braoSYJRk',
  privateKey: 'SNFBssNtGVPcLmb52J_s88uKU89VP1RMc2ZFRhOo2C8'
}

push.setVapiDetails('mailto:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {}

push.sendNotification(sub, 'test message')