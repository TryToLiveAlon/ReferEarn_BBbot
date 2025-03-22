/*CMD
  command: /viewTransaction
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
var index = parseInt(params); // Get transaction index
var currency = Bot.getProperty("currency");

var userTransactions = Bot.getProperty("userTransactions") || {};
if (!userTransactions[userID] || index >= userTransactions[userID].length) {
    Api.answerCallbackQuery({
        callback_query_id: request.id,
        text: "⚠️ Transaction not found.",
        show_alert: true
    });
    return;
}

// Get transaction details
var tx = userTransactions[userID][index];

// Format message
var details = "<b>📜 Transaction Details</b>\n\n" +
              "📅 <b>Date:</b> " + tx.day + ", " + tx.date + "\n" +
              "⏰ <b>Time:</b> " + tx.time + "\n" +
              "💰 <b>Amount:</b> <code>" + tx.amount +" "+currency + "</code>\n" +
              "🗂️ <b>Wallet:</b> <code>" + tx.wallet.slice(0,4) + "xxxxx" + tx.wallet.slice(6,) + "</code>\n" +
              "✅ <b>Status:</b> <code>Paid</code>";

// Define button
var buttons = [
    [{ text: "🔄 View Other Transactions", callback_data: "/lastTransactions" }]
];

// Send message with button
Api.sendMessage({
    text: details,
    parse_mode: "html",
    reply_markup: { inline_keyboard: buttons }
});

