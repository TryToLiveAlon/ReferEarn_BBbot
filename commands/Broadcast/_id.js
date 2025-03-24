/*CMD
  command: /id
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

const task = options.run_all_task;
Bot.sendMessage(
  "Task for brodcasting created. Task id: " + task.id +"\n\nUse /progress to check the broadcast status."
);
// save task id:
Bot.setProperty("curBrodcastTaskID", task.id, "integer")
//Bot.inspect(options.run_all_task);
