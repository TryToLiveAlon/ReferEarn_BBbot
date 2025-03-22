/*CMD
  command: /lastTransactions
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
var userID = user.telegramid;
var userTransactions = Bot.getProperty("userTransactions") || {};

// Check if user has transactions
if (!userTransactions[userID] || userTransactions[userID].length === 0) {
    Api.sendMessage({
        chat_id: userID,
        text: "<b>📜 No transaction history found.</b>",
        parse_mode: "html"
    });
    return;
}

// Create inline keyboard with "Delete All" button
var buttons = [];
for (var i = userTransactions[userID].length - 1; i >= 0; i--) {
    var tx = userTransactions[userID][i];

    buttons.push([{ text: "📅 " + tx.day + ", " + tx.date, callback_data: "/viewTransaction " + i }]);
}

// Add "Delete All History" button at the bottom
buttons.push([{ text: "🗑️ Delete All History", callback_data: "/delTransactionAll " +userID  }]);

// Send message with inline keyboard
Api.sendMessage({
    chat_id: userID,
    text: "<b>📜 Your Last Transactions (Tap to View or Delete All):</b>",
    reply_markup: { inline_keyboard: buttons },
    parse_mode: "html"
});

