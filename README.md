
# ReferEarn_BBbot - Telegram bot

![ReferEarn_BBbot](https://i.ibb.co/rRTtmPJ8/1-20250322-204534-0000.jpg)  

If my Bot win upload this as the main bot screen for BB Store. 

This is the official repository for **ReferEarn_BBbot**, a bot that can be imported into [Bots.Business](https://bots.business) to manage referral earnings on Telegram.  

## 📌 What is it?  
ReferEarn_BBbot is a **ready-to-use Telegram chatbot** designed for managing **referral programs** and **earning systems**. You can easily import this bot into [Bots.Business](https://bots.business), a **CBPaaS (Chat Bot Platform as a Service)** that helps developers create bots **without complex backend infrastructure**.  

---

## 🚀 How to Create Your Own Telegram Bot  

### 1️⃣ Set Up Your Bot  
1. Go to [@BotFather](https://telegram.me/BotFather) on Telegram and create a new bot.  
2. Copy the **Secret Token** provided.  

### 2️⃣ Import This Repository  
1. Go to [Bots.Business](https://bots.business) and create a new bot.  
2. Add your **Secret Token** in the bot settings.  
3. Add the provided **Public Key** from Bots.Business as a [Deploy Key](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys) in this GitHub repo.  
4. Import this repository into your bot.  
5. Go to /adminLogin and replace this piece of code 

```js
var admin = 6140468904
```

with
```js
var admin = your-chat-id
```

Dont know your chatID click on [@chat_id_echo_bot](https://t.me/chat_id_echo_bot)
6. Execute the command /adminLogin and you are good to go.
🎉 Now, your bot is live on Telegram!  

---


## ⭐ Features

- Transaction history should store to 20 most recent transactions.
- Users receive notifications about their withdrawal status.
- Withdrawal requests are sent to an admin channel, where an admin approves or declines the request manually.
- Users receive a unique referral link.
- User can receive bonuse buy clicking button at configurable time intervals (default: every 24 hours).

And many more explore it with a enthusiasm.

📖 [More about Libraries](https://help.bots.business/git/library)  

---
## ⚙️ Configuration 

![Bot Interface](https://i.ibb.co/fYcFrRkW/4-20250322-204535-0001.jpg) 

You can easily configure your bot after setup by giving the command `/adminPanel` then it will give a admin pannel to save your credentials for the bot.

- There can be three public channel 2 in force join and one payment alert channel.
- There is one private/public channel which eill handle payment request it is joined only by admin. You can use chatID of chat if you dont have public channel.
- Bouns Time Interval can be changed.(Default is 24hrs)
- Set Your own customised currency.
---

## 🖼️ Screenshots  
### Bot Interface:  

![Bot Interface1](https://i.ibb.co/BHH42TxC/IMG-20250322-204853-525.jpg)

---

## Ownership 
I herby declare that this bot is owned by [@TryToliveAlon_Backup](https://t.me/TryToliveAlon_Backup)

---

## 🌐 More Resources  
🔹 [Getting Started Guide](https://help.bots.business/getting-started)  
🔹 [Full API Documentation](https://api.bots.business/docs#/docs/summary)  
🔹 [Explore Other Bots](https://bots.business/)  

---

This Bot is participating in BB contest.
