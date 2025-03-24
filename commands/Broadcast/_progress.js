/*CMD
  command: /progress
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// Get the current broadcast task ID
const taskID = Bot.getProperty("curBrodcastTaskID");

// Check if the task ID exists
if (!taskID) {
  Bot.sendMessage("❌ No active broadcast task found.");
  return;
}

// Create a RunAllTask object
let task = new RunAllTask({ id: taskID });

// Check if the task exists and has a valid status
if (!task || !task.status) {
  Bot.sendMessage("❌ Task not found or already completed.");
  return;
}

// Send broadcast progress with inline button
Bot.sendMessage(
  "📢 *Broadcast Progress:*" +
  "\n📌 *Status:* " + task.status +
  "\n📊 *Progress:* " + task.progress + "%" +
  "\n📍 *Current Position:* " + task.cur_position + "/" + task.total,
  {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔄 Refresh Progress", callback_data: "/progress" }]
      ]
    }
  }
);

