/*CMD
  command: /broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Broadcast
  answer: *📢 Send the message to broadcast*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin");

// Check if the user is the admin
if (admin != user.telegramid) {
  Bot.sendMessage("*Only the admin can use this command!*", { is_reply: true });
  return;
}

// Notify admin before sending
Bot.sendMessage("✅ Forwarding message to all users...");

// Forward message to all users
Bot.runAll({
  command: "/onForward",
  options: { chat_id: request.chat.id, message_id: request.message_id },
  on_create: "/id"
});

