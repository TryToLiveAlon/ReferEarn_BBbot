/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var newUser = User.getProperty("newUser")

if (!newUser) {
  User.setProperty("newUser", "Yes", "string")

  var admin = Bot.getProperty("admin")
  var userName = user.first_name
  var username = "@" + user.username
  var userID = user.telegramid
  var userLink = "<a href='tg://user?id=" + userID + "'>" + userName + "</a>"
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")

  status.add(1)

  var adminText =
    "<b>🆕 New user notification 🆕\n\n👩‍💻 Name : " +
    userName +
    "\n👉 Username : " +
    username +
    "\n🔗 User link : " +
    userLink +
    "\n🆔 User ID :</b> <code>" +
    userID +
    "</code>\n\n<b>📊 Total users :</b> <code>" +
    status.value() +
    "</code>"

  Api.sendMessage({
    chat_id: admin,
    text: adminText,
    parse_mode: "html"
  })
}

var broadcast = Bot.getProperty("Broadcast") ? Bot.getProperty("Broadcast") : []

if (!broadcast.includes(user.telegramid)) {
  broadcast.push(user.telegramid)
  Bot.setProperty("Broadcast", broadcast, "json")
}

function doTouchOwnLink() {
  var ownText = "<i>⚠️ You can't invite yourself.</i>"

  Api.sendMessage({
    text: ownText,
    parse_mode: "html"
  })
}

function doAttracted(refUser) {
  var userText =
    "<b>👬 You are invited by <a href='tg://user?id=" +
    refUser.telegramid +
    "'>" +
    refUser.first_name +
    "</a></b>"

  Api.sendMessage({
    text: userText,
    parse_mode: "html"
  })

  var refUserText =
    "<b>👬 New user on your invite link : <a href='tg://user?id=" +
    user.telegramid +
    "'>" +
    user.first_name +
    "</a></b>"

  Api.sendMessage({
    chat_id: refUser.telegramid,
    text: refUserText,
    parse_mode: "html"
  })
}

function doAlreadyAttracted() {
  var alreadyText = "<i>⚠️ You have already started @" + bot.name + "</i>"

  Api.sendMessage({
    text: alreadyText,
    parse_mode: "html"
  })
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.track(trackOptions)

var channel1 = Bot.getProperty("channel1")
var channel2 = Bot.getProperty("channel2")
/*var channel3 = Bot.getProperty("channel3")
var channel4 = Bot.getProperty("channel4")
var channel5 = Bot.getProperty("channel5")
var channel6 = Bot.getProperty("channel6")*/
var photo = "https://i.ibb.co/6JyMbZwH/Untitled6-20250321150606.jpg"
var text =
  `<b>💯 Welcome to our bot!</b>  

To get started, you need to be a part of our official channel(s).  
Joining our community ensures you stay updated with the latest news, features, and exclusive rewards.  

<b>📢 Don't miss out! Join now and unlock the full experience.</b>

<b>This is a demo Bot participating in BB competition.</b>
`

if (channel1 === undefined) {
  Bot.runCommand("/mainMenu")
} else if (channel2 === undefined) {
  var buttons = [
    [
      {
        text: "🚀 Join Now",
        url: "https://t.me/" + channel1
      }
    ],
    [
      {
        text: "✅ Joined",
        callback_data: "/joined"
      }
    ]
  ]

  Api.sendPhoto({
    photo: photo,
    caption: text,
    reply_markup: {
      inline_keyboard: buttons
    },
    parse_mode: "html"
  })
} else {
  var buttons = [
    [
      {
        text: "🚀 Join Now",
        url: "https://t.me/" + channel1
      },
      {
        text: "🚀 Join Now",
        url: "https://t.me/" + channel2
      }
    ],
    [
      {
        text: "✅ Joined",
        callback_data: "/joined"
      }
    ]
  ]

  Api.sendPhoto({
    photo: photo,
    caption: text,
    reply_markup: {
      inline_keyboard: buttons
    },
    parse_mode: "html"
  })
}

