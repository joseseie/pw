
var push = require('web-push');

let vapidkeys = {
  publicKey: 'BPfqDtqFy8HmKcbPjsQfYrTZQLYjF43kj9iTFK6aOF1GchnVGrdVkmUE7Ri85t6rj-YgaxIm-XkH5_braoSYJRk',
  privateKey: 'SNFBssNtGVPcLmb52J_s88uKU89VP1RMc2ZFRhOo2C8'
};

push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey);

let sub = {
	"endpoint": "https://fcm.googleapis.com/fcm/send/dLROzaC3CnQ:APA91bG-Y1PbEm3lk-OshLqfoxlPdmlptml2w_ksVxPPRCNLF_vkC4J7NkAt_eDcVsWGiit-FQpwZypYYi3uFtL0xFFAu7I9XMPxnbKiLDzqtc1SmTBUJdlbVGapDfFkbV-KSY9YpE-J",
	"expirationTime" : null, 
	"keys" : { 
		"p256dh" : "BGfVL4tVXcarQg1oUPLGJ5PJcai1H1q9hG7DBzjDyx_seFbHa8Bv3O4FpKpQq3tBBZGV9FQd40spDmFQiGrd2do",
		"auth" : "Rp_y-oeiyfgfiFMksqViQQ"
	}
}

push.sendNotification(sub, 'test message');