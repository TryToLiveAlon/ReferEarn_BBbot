/*CMD
  command: /setWithdrawlChannel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *⚠️ Send the channel username/ChatID without @ which you want to set as Confirmation Channel for payment request*
  keyboard: 
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var users = user.telegramid
var botLink = "@" + bot.name

if (users === admin) {
  var admin_approvechannel = message

  Bot.setProperty("admin_approvechannel", admin_approvechannel, "string")

  var text = "<b>⚠️ Payment Channel set to :</b> <code>" + admin_approvechannel + "</code>"

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

