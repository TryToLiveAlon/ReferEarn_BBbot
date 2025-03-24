/*CMD
  command: /onForward
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

Api.forwardMessage({
    chat_id: user.telegramid,
    from_chat_id: options.chat_id,
    message_id: options.message_id
  })
