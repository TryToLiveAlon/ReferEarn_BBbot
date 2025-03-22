/*CMD
  command: /confirm
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Withdrawal system

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (request.data) {
  var chatID = request.message.chat_id
  var messageID = request.message.message_id

  Api.deleteMessage({
    chat_id: chatID,
    message_id: messageID
  })
}

var channel1 = Bot.getProperty("channel1")

if (channel1 !== undefined) {
  var joined = User.getProperty("joined")

  if (joined !== "Yes") {
    var notJoinedText = "<i>⚠️ Must join our channels to use the bot.</i>"

    Api.sendMessage({
      text: notJoinedText,
      parse_mode: "html"
    })

    Bot.runCommand("/start")
    return
  }
}

var ban = Bot.getProperty(user.telegramid)

if (ban === "Ban") {
  var banText = "<i>🚫 You're banned.</i>"

  Api.sendMessage({
    text: banText,
    parse_mode: "html"
  })
  return
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus")

if (maintenanceStatus === "On") {
  var onText =
    "<i>🛠️ Bot is under maintenance, please come back after some time.</i>"

  Api.sendMessage({
    text: onText,
    parse_mode: "html"
  })
  return
}

var amount = User.getProperty("amount")
var wallet = User.getProperty("wallet")
var balance = Libs.ResourcesLib.userRes("balance")

balance.remove(parseFloat(amount))

var currency = Bot.getProperty("currency")
var userText =
  "<b>✅ Your withdrawal has been requested\n\n💸 Amount :</b> <code>" +
  amount +
  " " +
  currency +
  "</code>\n👝 <code>" +
  currency +
  "</code> <b>wallet :</b> <code>" +
  wallet +
  "</code>\n\n<b>✔️ Your withdrawal will be processed within few hours. Be patient.</b>"

Api.sendMessage({
  text: userText,
  parse_mode: "html"
})

Bot.runCommand("/mainMenu")

var userName = user.first_name
var userID = user.telegramid
var userLink = "<a href='tg://user?id=" + userID + "'>" + userName + "</a>"
var username = "@" + user.username
var botLink = "@" + bot.name
var adminText =
  "<b>🆕 New withdrawal requested\n\n🧒 User : " +
  userName +
  "\n🔗 User link : " +
  userLink +
  "\n👉 Username : " +
  username +
  "\n🆔 User ID :</b> <code>" +
  userID +
  "</code>\n\n<b>💸 Amount :</b> <code>" +
  amount +
  " " +
  currency +
  "</code>\n👝 <code>" +
  currency +
  "</code> <b>wallet :</b> <code>" +
  wallet +
  "</code>\n\n<b>✔️ Your withdrawal will be processed within few hours. Be patient.\n\n🤖 Bot : " +
  botLink +
  "</b>"
var admin = Bot.getProperty("admin")
var admin_approvechannel = Bot.getProperty("admin_approvechannel")

var storage = Bot.getProperty("tempStorage") || {}; // Load stored data

storage[user.telegramid] = {
    amount: User.getProperty("amount"),
    wallet: User.getProperty("wallet"),
    userLink: userLink,
    username: user.username,
    userName: user.first_name
};

// Save updated storage
Bot.setProperty("tempStorage", storage, "json");

Api.sendPhoto({
  chat_id: admin_approvechannel,
  photo: "https://i.ibb.co/0jSHGQFr/Fake-UPI.webp",
  caption: "<b>🆕 New withdrawal requested\n\n🧒 User : " +
  userName +
  "\n🔗 User link : " +
  userLink +
  "\n👉 Username : " +
  username +
  "\n🆔 User ID :</b> <code>" +
  userID +
  "</code>\n\n<b>💸 Amount :</b> <code>" +
  amount +
  " " +
  currency +
  "</code>\n👝 <code>" +
  currency +
  "</code> <b>wallet :</b> <code>" +
  wallet +
  "</code>\n\n<b>✔️ If you have done the payment please press accept otherwise reject\n\n🤖 Bot : " +
  botLink +
  "</b>",

  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [
        { 
          text: "✅ Accept", 
          callback_data: "/payalert "+ user.telegramid
        },
        { 
          text: "❌ Reject", 
          callback_data: "/payreject " + user.telegramid 
        }
      ]
    ]
  }
});


