/*CMD
  command: /setMaintenanceStatus
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

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
var admin = Bot.getProperty("admin");
var users = user.telegramid;

if (users === admin) {
  var currentStatus = Bot.getProperty("maintenanceStatus", "Off"); // Default to "Off"
  var newStatus = currentStatus === "On" ? "Off" : "On"; // Toggle status

  Bot.setProperty("maintenanceStatus", newStatus, "string");

  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "Bot Maintenance Status Changed To: " + newStatus,
    show_alert: true
  });
  Bot.runCommand("/adminPanel")
} else {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "⚠️ You are not the admin!",
    show_alert: true
  });
}

