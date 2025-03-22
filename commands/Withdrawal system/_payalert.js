/*CMD
  command: /payalert
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdrawal system
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (request.data) {
    var chatID = request.message.chat_id;
    var messageID = request.message.message_id;

    Api.deleteMessage({
        chat_id: chatID,
        message_id: messageID
    });
}

var userID = params; // The user ID sent in the callback
var storage = Bot.getProperty("tempStorage") || {}; // Load stored data
var currency = Bot.getProperty("currency")

if (!storage[userID]) {
    Api.sendMessage({
        chat_id: request.message.chat.id,
        text: "<b>⚠️ Error: No withdrawal request found for this user.</b>",
        parse_mode: "html"
    });
    return;
}

var userData = storage[userID]; // Retrieve stored user data
var alertsChannel = Bot.getProperty("alertsChannel");

// Get current date and time
var dateObj = new Date();
var day = dateObj.toLocaleString("en-US", { timeZone: "Asia/Kolkata", weekday: "long" }); // Example: Monday
var date = dateObj.toLocaleString("en-US", { timeZone: "Asia/Kolkata", day: "2-digit", month: "long", year: "numeric" }); // Example: 21 March 2025
var time = dateObj.toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }); // Example: 10:30:15 PM

// Store transaction with date & time
var userTransactions = Bot.getProperty("userTransactions") || {};
if (!userTransactions[userID]) {
    userTransactions[userID] = [];
}

var transaction = {
    amount: userData.amount,
    wallet: userData.wallet,
    status: "Paid",
    timeZone: "Asia/Kolkata",
    date: date,
    time: time,
    day: day
};

userTransactions[userID].push(transaction);

// Keep only the last 20 transactions
if (userTransactions[userID].length > 20) {
    userTransactions[userID].shift();
}

Bot.setProperty("userTransactions", userTransactions, "json");

// Notify admin in the alerts channel
Api.sendPhoto({
    chat_id: alertsChannel,
    photo : "https://i.ibb.co/Txfhx4tf/Downpic-cc-2229202901.jpg",
    caption: "<b>✅ New Withdrawal Processed</b>\n\n" +
          "👤 <b>User:</b> " + userData.userName + "\n" +
          "🔗 <b>User Link:</b> " + userData.userLink + "\n" +
          "🆔 <b>User ID:</b> <code>" + userID + "</code>\n\n" +
          "📅 <b>Date:</b> " + day + ", " + date + "\n" +
          "⏰ <b>Time:</b> " + time + "\n" +
          "💰 <b>Amount:</b> <code>" + userData.amount +" "+ currency + "</code>\n" +
          "🗂️ <b>Wallet:</b> <code>" + userData.wallet.slice(0,4) + "xxxxx" + userData.wallet.slice(6,) + "</code>\n\n" +
          "✅ <b>Status:</b> <code>Paid</code>\n\n" +
          "💸 Payment has been successfully sent!",
    parse_mode: "html"
});

// Notify user that their withdrawal has been processed
Api.sendMessage({
    chat_id: userID,
    text: "<b>✅ Your Withdrawal Has Been Processed</b>\n\n" +
          "📅 <b>Date:</b> " + day + ", " + date + "\n" +
          "⏰ <b>Time:</b> " + time + "\n" +
          "💰 <b>Amount:</b> <code>" + userData.amount +" "+ currency + "</code>\n" +
          "🗂️ <b>Wallet:</b> <code>" + userData.wallet + "</code>\n\n" +
          "✅ <b>Status:</b> <code>Paid</code>\n\n" +
          "💸 Your withdrawal has been successfully sent!",
    parse_mode: "html"
});

// Delete stored request after processing
delete storage[userID];
Bot.setProperty("tempStorage", storage, "json");

