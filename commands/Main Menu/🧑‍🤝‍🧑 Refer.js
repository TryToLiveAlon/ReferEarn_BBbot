/*CMD
  command: 🧑‍🤝‍🧑 Refer
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Main Menu

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Get required bot properties
var channel1 = Bot.getProperty("channel1");
var joined = User.getProperty("joined");
var ban = Bot.getProperty(user.telegramid);
var maintenanceStatus = Bot.getProperty("maintenanceStatus");

// ❌ Check if the user has joined the required channel
if (channel1 !== undefined && joined !== "Yes") {
  Api.sendMessage({
    text: "<i>⚠️ You must join our channels to use the bot.</i>",
    parse_mode: "html"
  });

  Bot.runCommand("/start");
  return;
}

// 🚫 Check if the user is banned
if (ban === "Ban") {
  Api.sendMessage({
    text: "<i>🚫 You are banned.</i>",
    parse_mode: "html"
  });
  return;
}

// 🛠️ Check if the bot is under maintenance
if (maintenanceStatus === "On") {
  Api.sendMessage({
    text: "<i>🛠️ The bot is under maintenance. Please try again later.</i>",
    parse_mode: "html"
  });
  return;
}

// 📢 Referral System
var inviteLink = Libs.ReferralLib.getLink();
var referCount = Libs.ReferralLib.getRefCount();
var perRefer = Bot.getProperty("perRefer");
var currency = Bot.getProperty("currency"); // Default currency

var totalEarnings = perRefer * referCount;
var referralMessage = `<b>👬 Your invite link :</b> ${inviteLink}\n\n`
  + `<b>💸 Per refer :</b> <code>${perRefer} ${currency}</code>\n\n`
  + `<b>👉 Total invited users :</b> <code>${referCount}</code>\n\n`
  + `💰 <b>Total earnings :</b> <code>${totalEarnings} ${currency}</code>`;

Api.sendMessage({
  text: referralMessage,
  parse_mode: "html"
});

