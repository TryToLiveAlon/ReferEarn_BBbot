/*CMD
  command: 🎙️FAQ
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Main Menu
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var faqMessage = "<b>📌 Frequently Asked Questions (FAQ)</b>\n\n" + 

"🤖 <b>What is this bot about?</b>\n" + 
"This bot helps you earn rewards through referrals and provides useful services.\n\n" +

"💰 <b>How can I earn rewards?</b>\n" + 
"You can earn rewards by inviting friends using your referral link. The more referrals, the more you earn!\n\n" +

"🏦 <b>How do I withdraw my earnings?</b>\n" + 
"Withdrawals are processed automatically once you reach the minimum payout. You can check your balance in the bot.\n\n" +

"📩 <b>How can I contact support?</b>\n" + 
"You can contact support via bot on pressing Support button or email at support@example.com or join our Telegram support chat.\n\n" +

"💳 <b>What are the payment methods?</b>\n" + 
"We support PayPal, Bitcoin, and Bank Transfers. You can choose your preferred method in the settings.\n\n" +

"⚡ <b>How fast are withdrawals?</b>\n" + 
"Withdrawals are usually processed within 24-48 hours, depending on the payment method.\n\n" +

"🛠 <b>What if I have a problem?</b>\n" + 
"If you experience any issues, please contact support or check our help center for troubleshooting steps.\n\n" +

"📢 <b>Do you have a referral program?</b>\n" + 
"Yes! Invite your friends and earn rewards for every successful referral.\n\n" +

"🚀 <b>How can I increase my earnings?</b>\n" + 
"Share your referral link on social media, groups, and with friends to maximize your rewards!\n\n" +

"📜 <b>Terms & Conditions</b>\n" + 
"By using this bot, you agree to our terms. Any abuse or fraudulent activity may lead to account suspension.";

Api.sendMessage({
  text: faqMessage,
  parse_mode: "html"
});

