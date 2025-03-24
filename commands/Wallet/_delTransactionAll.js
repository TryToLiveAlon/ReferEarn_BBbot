/*CMD
  command: /delTransactionAll
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Wallet
  answer: 
  keyboard: 
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
// Get the user ID of the person who sent the command
var userID = params;

// Retrieve stored transactions
var userTransactions = Bot.getProperty("userTransactions") || {};

// Check if the user has any transaction history
if (!userTransactions[userID] || userTransactions[userID].length === 0) {
    Api.sendMessage({
        chat_id: userID,
        text: "⚠️ <b>No transaction history found.</b>",
        parse_mode: "html"
    });
    return;
}

// Delete the user's transaction history
delete userTransactions[userID];
Bot.setProperty("userTransactions", userTransactions, "json");

// Send confirmation message
Api.sendMessage({
    chat_id: userID,
    text: "✅ <b>Your transaction history has been successfully deleted.</b>",
    parse_mode: "html"
});

