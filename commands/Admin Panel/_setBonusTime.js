/*CMD
  command: /setBonusTime
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *Send the time which you want to set dealy for bonus in seconds*
  keyboard: 
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var users = user.telegramid
var botLink = "@" + bot.name

if (users === admin) {
  var BonusTime = message

  Bot.setProperty("BonusTime", BonusTime, "string")

  var text = "<b>Bonus Time interval set to :</b> <code>" + BonusTime + "</code>"

  Api.sendMessage({
    text: text,
    parse_mode: "html"
  })

  Bot.runCommand("/adminPanel")
} else {
  var notAdminText = "<i>⚠️ You're not the admin of " + botLink + ".</i>"

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  })
}

