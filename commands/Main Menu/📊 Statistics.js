/*CMD
  command: 📊 Statistics
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

var status = Libs.ResourcesLib.anotherChatRes("status", "global")
var botLink = "@" + bot.name
var photo = "https://i.ibb.co/9xyNLfS/IMG-20250324-210425-223.jpg"
var caption =
  "<b>📊 Statistics of " +
  botLink +
  "\n\n🧑 Total members :</b> <code>" +
  status.value() +
  "</code>\n\n<b>👑 Bot creator : @TryToLiveAlon\n\n This is a demo Bot participating in BB competition.</b>"

Api.sendPhoto({
  photo: photo,
  caption: caption,
  parse_mode: "html"
})

