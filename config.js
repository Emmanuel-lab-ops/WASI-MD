const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="jastinmtewa@yahoo.com"
global.location="Morogoro,Tanzania."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Pakistan";
global.github=process.env.GITHUB|| "https://github.com/wasixd/WASI-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/wasixd/WASI-MD/blob/main/lib/assets/suhail.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923192173398" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923192173398";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923135673658,923192173398";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "923135673658,923192173398";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923135673658,923192173398";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://myqr-43bb863fa5eb.herokuapp.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0FqYUNTUTlJeisxZ3lEYmVPK2xJRlpYMUtWVlVtcXM4K0FFdUw4eXZHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnlzUTRzcDFQNkU0MEswK2RUSTBrY2FXL1RqanI3UUpabmNCM3RoSU1STT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTREhWVkRLaXgwUTBGeU9Bd0lPeldEbFdCSS9NU0dJODBGemc2UkluQmw4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRT3RSMTkwa2ZScDBYNFo5M09QY092T2tSRm14bkJtTnZteVN3RlkwUTNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1HaE5TdkNLaGxzd29PWWNSdTFsVGNqQ1VSRzJOdUszKy8wZU1BZkVpVjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllVWGVuU08vcE85dmlKQ0VJdlB5dWdKR3oyRllsL3BMUk1qdXp0ZTdLQUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1AyN2hVSGc2cTdxeDNNS0F2dkMxaDgzdUY4VmhpbENDeko4ZXgzY2NVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3I4ZlFJVHE2WGtQcVQ5RTlQUXRoQ1d1TnIxNEorOXB3THptMUR4ZFZFRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd3dGFaVjBwYVI1K2pNaUY3dlNaNGhhZFY0ay9TWlhzN1B4OXB1bENLSXlaWjlUaHFja3JiYWFNYjJlbkUydGtzZDlwN3k0M1dnN3hRYW5NYmpWakF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTgsImFkdlNlY3JldEtleSI6IkhaZDVqajNVemVJT1hLSGNsT0prRnVkZ25EM0N1ZVBBaElwQTF2aFdkRzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InRqY3JVTUU0U1dLNzFYQlhvdkp3QmciLCJwaG9uZUlkIjoiM2RiZjI2M2EtMWE5Mi00Y2VkLThhNmQtZTgwYjEwNTUyYWQzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFrLzRVZThqSEhzWTMrQm1qNUNsM3d1ckZSQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMYzJoR3JkaTZIdEsvRmluS05ReHBmY29IVVE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWVFDRVAxSFEiLCJtZSI6eyJpZCI6IjIzNDgxMzg2MjE5ODI6MTJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tmN252VURFTHY3bzdRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IituRGc1dTFiREdjSVNBSmkrazhRTDNuL3hsSHJORnpXbVRmMlp5QWxJUUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilh1dVVWR0o0eTRVZnI4Rm55WngzemlHaFoyWktTeUx5QnR0cmxPcEhDNGh5T1dUR3BHSDNqc2RlUVFMMWw5TGU5aHBVTUJITXV3YTdsYnZLemhmSUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWL0VuOE5jTFhMQmVGb3drVzVHUk9NRkVHN2hweC8xU2lSOStJZU16bTdla09IMVhsTFZ3SmFCVFBvS0I1NFRhWDFNRWhTV2lHMFFBdGhZb0U0UTdDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMzg2MjE5ODI6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZnB3NE9idFd3eG5DRWdDWXZwUEVDOTUvOFpSNnpSYzFwazM5bWNnSlNFQyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDI1Mzg5NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOR2gifQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Venocyber-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.0.0",
  caption : process.env.CAPTION || "𝙵𝙸𝙻𝙴 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ＷＡＳＩ ＭＤ🚩" , // ```『 ²⁴ ᴠᴇɴᴏᴄʏʙᴇʀ-ᴍᴅ 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@JASTINMTEWA-vn9pl"),
 
  author : process.env.PACK_AUTHER|| "𝗪𝗔𝗦𝗜 ",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𝗪𝗔𝗦𝗜 𝗠𝗗",
  ownername:process.env.OWNER_NAME|| "It's 𝗜𝗧𝗫𝗫𝗪𝗔𝗦𝗜",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "01",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "WASI",



};

























global.rank = "updated"
global.isMongodb = true ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
