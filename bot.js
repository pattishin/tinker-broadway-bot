// Create the configuration
var config = {
    server: "orchard.willowtreeapps.com",
    port: 7777,
    channels: ['#botsandbox'],
    botName: 'pingbot',
    userName: 'pingbot',
    realName: 'Pinguin',
    secure: {
        passphrase: '',
        rejectUnauthorized: false
    },
    password: 'We_built_that_app.',
    certExpired: true,
    selfSigned: true,
    autoConnect: false
}


// Get the lib
var irc = require("irc");


// Create the bot name
var bot = new irc.Client(config.server, config.botName, {
    channels: config.channels
});

console.log(bot);

// Listen for joins
bot.addListener("join", function(channel, who) {
// Welcome them in!
    bot.say(channel, who + "...dude...welcome back!");
});

// Listen for any message, PM said user when he posts
bot.addListener("message", function(from, to, text, message) {
    bot.say(from, "¿Que?");
});

// Listen for any message, say to him/her in the room
bot.addListener("message", function(from, to, text, message) {
    bot.say(config.channels[0], "¿Public que?");
});

