// Corded By DripsMemes ©️Zim-bot 2022



const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: true, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/qpM8Jj9.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `

✨𝗤𝗨𝗘𝗘𝗡 𝗔𝗡𝗚𝗘𝗟𝗔 𝗠𝗘𝗡𝗨✨
🌟𝗧𝗬𝗣𝗘 .𝗹𝗶𝘀𝘁 𝗙𝗢𝗥 𝗠𝗢𝗥𝗘🌟
┌───💙〔 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 〕
┊ *💎𝙲𝚁𝙴𝙰𝚃𝙾𝚁:* Not-Me
┊ *💎𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁:* Shashikant Yadav
┊ *💎ᴡʜᴀᴛsᴀᴘᴘ:* +91 89605 70658
┊ *💎ᴅᴇᴠɪᴄᴇ:* Tacno Spark
┊ *💎ʀᴀᴍ:* 3GB
┊
├───💙〔 𝗔𝗕𝗢𝗨𝗧 〕
┊ *🌟sᴛᴀᴛᴜs:* 𝙱𝙾𝚃 𝙾𝙽𝙻𝙸𝙽𝙴
┊ *🌟ᴘʀᴇғɪx:* 𝙼𝚄𝙻𝚃𝙸 𝙿𝚁𝙴𝙵𝙸𝚇
┊ *🌟ᴛᴏᴛᴀʟ ᴄᴍᴅ:* 360+
┊ *🌟ᴘᴄ:* Window 10
┊ *🌟ᴛᴏᴛᴀʟ ᴄʜᴀᴛ:* 10+
┊ *🌟ɢʀᴏᴜᴘ ᴄʜᴀᴛ:* 4+
┊ *🌟sᴇʀᴠᴇʀ:* 𝙱𝙰𝙸𝙻𝙴𝚈𝚂
┊ *🌟ᴠᴇʀsɪᴏɴ:* 3.5.1
┊ *🌟sᴘᴇᴇᴅ:* 999𝚔𝚖
┊
├───💙〔 𝗧𝗛𝗔𝗡𝗞𝗦 𝗧𝗢 〕
┊
├〔 *Not-Me* 〕
├〔 *𝙱𝙻𝙴𝙽𝙽𝙸𝙴* 〕
├〔 *𝚉𝙸𝙼 𝙱𝙾𝚃* 〕
├〔 *𝚃𝚄𝙽𝙰𝙻𝙸𝚃𝙸𝙴𝚂* 〕
├〔 *𝙱𝙻𝙴𝚂𝚂𝙴𝙳* 〕
├〔 *𝚃𝚄𝙽𝙷𝙰* 〕
┊
└───💙〔 𝗤𝗨𝗘𝗘𝗡 〕

┌───〔 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 〕
┊🌟𝗽𝗵𝗼𝘁𝗼
┊ - Convert sticker into a image
┊🌟𝗺𝗽4
┊ - Convert voice into video.
┊🌟𝗺𝗽3
┊ - Conver video into audio.
┊🌟𝘀𝗹𝗼𝘄
┊ - Sets slow effect in videos.
┊🌟𝗳𝗮𝘀𝘁
┊ - Sets fast effect in videos.
┊🌟𝗿𝗲𝘃𝗲𝗿𝘀𝗲
┊ - Sets reverse effect in videos.
┊🌟sticker
┊ - Convert img/gif into sticker.
┊🌟𝗮𝘁𝘁𝗽
┊ - Convert text into glowing sticker.
┊🌟tts
┊ - Convert text into audio.
┊🌟𝘁𝘁𝗽
┊ - Convert text into img.
└───────────📑


┌─💙〔 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 〕
┊🌟𝘀𝗼𝗻𝗴
┊ - Sends the song.
┊🌟𝗽𝗹𝗮𝘆
┊ - Sends the videos.
┊🌟𝘃𝗶𝗱𝗲𝗼
┊ - Sends the videos.
┊🌟𝘆𝘁𝗺𝗽3
┊ - Sends link of music from youtube.
┊🌟𝘆𝘁𝗺𝗽4
┊ - Sends link of video from youtube.
┊🌟𝗶𝗴
┊ - Sends the img/video from instagram.
┊🌟𝗶𝗺𝗴
┊ - Sends the image from google.
└───────────📑

┌───💙〔 𝗤𝗨𝗘𝗘𝗡 𝗠𝗘𝗡𝗨 〕
┊🌟𝗷𝗼𝗸𝗲
┊ - Sends a joke
┊🌟𝗶𝗽
┊ - Gives information about given ip address.
┊🌟𝗶𝗻𝘀𝘂𝗹𝘁
┊ - Insult you.
┊🌟𝗽𝗿𝗼𝗳𝗶𝗻𝘀𝘁𝗮
┊ - Sends a profil of given insta link.
┊🌟𝗶𝗴𝘀𝘁𝗮𝗹𝗸
┊ - Sends the post of given insta link.
┊🌟𝗳𝗯
┊ - Give information about facebook account.
┊🌟𝗽𝗶𝗻𝘀𝘁𝗮
┊ - Sends a profil of given insta link.
┊🌟𝘃𝗶𝗻𝘀𝘁𝗮
┊ - Not working at.
┊🌟𝘄𝗲𝗹𝗰𝗼𝗺𝗲
┊ - Show you welcome massage. 
┊🌟𝗴𝗼𝗼𝗱𝗯𝘆𝗲
┊ - Show you goodbye massage.
┊🌟𝗶𝗻𝗳𝗼
┊ - information about bot
┊🌟𝗴𝗻
┊ - Sends Goodnight massages.
┊🌟𝗴𝗺
┊ - Sends Goodmorning massages.
┊🌟𝗱𝗶𝗰𝘁
┊ - Sends word meaning.
┊🌟𝗲𝗳𝗳𝗳𝗲𝗰𝘁𝗶𝗺𝗴
┊ - Adds effect in img.
┊🌟𝗳𝗳𝗺𝗽𝗲𝗴
┊ - You not need to know
┊🌟𝗳𝗶𝗻𝗱
┊ - Find the audio massages.
┊🌟𝗴𝗶𝘁
┊ - Sends the information.
┊🌟𝗮𝗻𝗶𝗺𝗲
┊ - Sends the img of anime.
┊🌟𝗳𝗯
┊ - About given FB account.
┊🌟𝗮𝗽𝗸𝗺𝗼𝗱
┊ - Sends mod apk of app.
┊🌟𝗱𝗲𝗲𝗽𝗮𝗶
┊ - Some extra editing features of photo editing.
┊🌟𝗱𝗲𝗹
┊ - Delete the chat which bot told.
┊🌟𝗰𝗵𝗮𝘁𝗯𝗼𝘁 𝗼𝗳𝗳
┊ Turn off chatbot
┊🌟𝗮𝗻𝘁𝗶𝗹𝗶𝗻𝗸 𝗼𝗻
┊ Unable to send any link.
┊🌟𝗯𝗮𝗻
┊ - Ban someone from group.
┊🌟𝘁𝗮𝗴
┊ - Tag a person of group.
┊🌟𝘁𝗮𝗴𝗮𝗹𝗹
┊ - Tagall person in group.
┊🌟𝗰𝗹𝗲𝗮𝗿𝗰𝗵𝗮𝘁
┊ - Clear chat
┊🌟𝗹𝗲𝗮𝘃𝗲
┊ - Leaves the group.
┊🌟𝘀𝗲𝘁 𝗽𝗿𝗲𝗳𝗶𝘅
┊ - Set prefix.
┊🌟𝗿𝗲𝘀𝘁𝗮𝗿𝘁
┊ - Restart Bot.
┊🌟𝘂𝗽𝗱𝗮𝘁𝗲
┊ - Update Bot.
┊🌟𝘀𝗵𝘂𝘁𝗱𝗼𝘄𝗻
┊ - Shutdown Bot.
┊🌟𝗮𝗰𝘁𝗶𝘃𝗮𝘁𝗲
┊ - Owner cmd.
┊🌟𝗲𝗺𝗲𝗿𝗴𝗲𝗻𝗰𝘆𝗰𝗿𝗮𝘀𝗵
┊ - Sends emergncy massage to all.
┊🌟𝗺𝘂𝘁𝗲
┊ - Mute chat.
┊🌟𝘂𝗻𝗺𝘂𝘁𝗲
┊ - Unmute chat.
┊🌟𝘀𝗲𝘁𝘃𝗮𝗿
┊ - Owner cmd.
┊🌟𝗯𝗴𝗺
┊ - On/Off Antilink
┊🌟𝘅𝗺𝗲𝗱𝗶𝗮
┊ - Extra editing tools.
┊🌟𝗯𝗿𝗮𝗶𝗻𝗹𝘆
┊ - Get the answer from Brainly.
┊🌟𝗼𝘄𝗻𝗲𝗿𝗰𝗺𝗱
┊ - Owner cmd.
┊🌟𝗰𝗼𝗱𝘁𝘁𝘀
┊ - Owner cmd.
┊🌟𝗶𝗻𝘀𝘁𝗮𝗹𝗹
┊ - Owner cmd.
┊🌟𝗽𝗹𝘂𝗴𝗶𝗻
┊ - Owner cmd.
┊🌟𝗿𝗲𝗺𝗼𝘃𝗲
┊ - Owner cmd.
┊🌟𝗮𝗱𝗮𝗻
┊ - Owner cmd.
┊🌟𝗽𝗿𝗮𝘆𝗲𝗿
┊ - Sends the prayer of state.
┊🌟𝗮𝗱𝗱
┊ - add somrbody to group.
┊🌟𝗽𝗿𝗼𝗺𝗼𝘁𝗲
┊ - Promote somebody.
┊🌟𝗱𝗲𝗺𝗼𝘁𝗲
┊ - Demote someboby.
┊🌟𝗶𝗻𝘃𝗶𝘁𝗲 
┊ Invite somebody.
┊🌟𝗰𝗵𝗮𝘁𝗯𝗼𝘁 𝗼𝗻
┊ - Turn on chat bot
┊🌟𝗮𝗳𝗸
┊ - Owner cmd
┊🌟𝘀𝘁𝗶𝗰𝗸𝗲𝗿
┊🌟𝗮𝗱𝗱𝗺𝗽3
┊🌟𝗮𝗱𝗱𝘀𝘁𝗶𝗰𝗸𝗲𝗿
┊🌟𝗮𝗱𝗱𝘃𝗻
┊🌟𝗲𝗺𝗲𝗿𝗴𝗲𝗻𝗰𝗿𝗮𝘀𝗵
┊🌟𝘀𝗽𝗮𝗺
┊🌟𝗸𝗶𝗹𝗹𝘀𝗽𝗮𝗺
┊🌟𝗳𝗮𝗸𝗲𝗶𝗱
┊
╰───💬〔 Shashikant Yadav〕


┌───〔 *𝗤𝗨𝗘𝗘𝗡 𝗠𝗘𝗡𝗨* 〕
┊
└───────────📑
┌───💙〔 𝗖𝗠𝗗 〕
┊
┊🌟𝘄𝗼𝗹𝗳
┊🌟𝗶𝗰𝗲
┊🌟𝘁𝗵𝘂𝗻𝗱𝗲𝗿
┊🌟𝗲𝗺𝗼𝗷𝗶
┊🌟𝘀𝘀
┊🌟𝘀𝗵𝗼𝘄
┊🌟𝗯𝗼𝘁
┊🌟𝗮𝗻𝗶𝗺𝗲𝘀𝗮𝘆
┊🌟𝗰𝗵𝗮𝗻𝗴𝗲𝘀𝗮𝘆
┊🌟𝗮𝘂𝗱𝗶𝗼𝘀𝗽𝗮𝗺
┊🌟𝘀𝘄𝗲𝗮𝘁𝗵𝗲𝗿
┊🌟𝗮𝗹𝗶𝘃𝗲
┊🌟𝘀𝘆𝘀𝗱
┊🌟𝘁𝗯𝗹𝗲𝗻𝗱
┊🌟𝗯𝗹𝗼𝗼𝗱
┊🌟𝘁𝗱𝗿𝘀
┊🌟𝘁𝘅𝘁𝗶𝘁
┊🌟𝘁𝗵𝗲𝗿𝗶
┊🌟𝘁𝗶𝗻𝘆
┊🌟𝘂𝗻𝘃𝗼𝗶𝗰𝗲
┊🌟𝘄𝗮𝗺𝗲
┊🌟𝘀𝗽𝗲𝗲𝗱𝘁𝗲𝘀𝘁
┊🌟𝗽𝗶𝗻𝗴
┊🌟𝘀𝗵𝗼𝗿𝘁
┊🌟𝗰𝗮𝗹𝗰
┊🌟𝘀𝗮𝘆
┊🌟𝗰𝗼𝘃𝗶𝗱
┊🌟𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿
┊🌟𝗼𝗰𝗿
┊🌟𝘄𝗵𝗼𝗶𝘀
┊🌟𝘄𝗲𝗮𝘁𝗵𝗲𝗿
┊🌟𝘄𝗶𝗸𝗶
┊🌟𝘁𝗿𝘁
┊🌟𝗴𝗶𝗳
┊🌟𝗱𝗲𝘃𝗶𝗰𝗲
┊🌟𝗹𝗶𝘆𝗮
┊🌟𝘃𝗼𝗶𝗰𝗲
┊🌟𝗹𝗼𝗰𝗮𝘁𝗲
┊🌟𝗹𝗼𝗴
┊🌟𝗺𝗲𝗺𝗲
┊🌟𝗺𝗲𝗻𝘂
┊🌟𝗺𝗺𝗽𝗮𝗰𝗸
┊🌟𝗺𝗼𝗿𝗲𝘅𝘁
┊🌟𝗳𝗳𝗶𝗿𝗲
┊🌟𝗺𝗼𝘃𝗶𝗲
┊🌟𝗻𝗲𝗸𝗼
┊🌟𝗻𝗲𝘄𝘀
┊🌟𝘀𝗮𝘃𝗲
┊🌟𝗱𝗲𝗹𝗲𝘁𝗲𝗻𝗼𝘁𝗲𝘀
┊🌟𝗷𝗶𝗱
┊🌟𝗼𝘄𝗻𝗲𝗿
┊🌟𝗾𝗿
┊🌟𝗿𝗮𝘀𝗵𝗺𝗶𝗸𝗮
┊🌟𝗾𝘂𝗼𝘁𝗲
┊🌟𝗿𝗮𝗻𝗱𝗼𝗺
┊🌟𝗿𝗱𝗺𝗼𝗿𝗲
┊🌟𝗿𝗲𝗺𝗼𝘃𝗲𝗯𝗴
┊🌟𝗿𝗲𝗽𝗼𝗿𝘁
┊🌟𝘀𝗰𝗮𝗻
┊🌟𝗱𝗲𝘁𝗲𝗰𝘁𝗹𝗮𝗻𝗴
┊🌟𝗰𝘂𝗿𝗿𝗲𝗻𝗰𝘆
┊🌟𝘀𝗰𝗮𝗺
┊
└───────────💬

┌───〔 *𝗤𝗨𝗘𝗘𝗡 𝗠𝗘𝗡𝗨* 〕
┊💙𝗯𝗼𝘁 𝗯𝘆 𝗗𝗿𝗶𝗽𝘀 𝗠𝗲𝗺𝗲𝘀💙
└───────────📑
┌───〔 𝗧𝗔𝗚 𝗠𝗘𝗡𝗨 〕
┊🌟𝘁𝗮𝗴
┊🌟𝘁𝗮𝗴𝗮𝗹𝗹
┊🌟𝘄𝗮𝗸𝗲𝘂𝗽
┊🌟𝘁𝗮𝗴𝗮𝗱𝗺𝗶𝗻
└───────────💬

`}) 

}));
