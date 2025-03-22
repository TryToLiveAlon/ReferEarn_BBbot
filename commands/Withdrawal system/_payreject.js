/*CMD
  command: /payreject
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
  var chatID = request.message.chat_id
  var messageID = request.message.message_id

  Api.deleteMessage({
    chat_id: chatID,
    message_id: messageID
  })
}
Api.sendMessage({chat_id: params,
                 text:"*😌 Your withdrawal request was rejected by admin.* \nReason can be the following. \n\n1.Fake Reffer in the Bot.\n2.Refferd user may have left the channel.\n3.Detected any unusual thing in your account.",parse_mode: "Markdown"})


