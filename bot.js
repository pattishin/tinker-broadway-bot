// Create the configuration
var config = {
    server: "orchard.willowtreeapps.com",
    botName: 'broadwaybot'
}


// Get the lib
var irc = require("irc");


// Create the bot name
var bot = new irc.Client(config.server, config.botName, {
    port: 7777,
    channels: ['#botsandbox'],
    userName: 'broadwaybot',
    realName: 'BroadwayBot',
    secure: {
        passphrase: 'We_built_that_app.',
        rejectUnauthorized: false
    },
    password: 'We_built_that_app.',
    certExpired: true,
    selfSigned: true,
    autoConnect: false
});

bot.connect(function() {
    console.log('connecting bot');
});

bot.addListener("join", function(channel, who) {
    bot.say(channel, who + "...dude...welcome back!");
});
        
bot.addListener("message", function(from, to, text, message) {
        bot.say(from, "¿Que?");
});

bot.addListener("message", function(from, to, text, message) {
        bot.say(config.channels[0], "¿Public que?");
});

console.log(bot);

bot.join('#wat');

