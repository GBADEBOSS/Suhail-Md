const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349072506883";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_05_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI4LFxuICAgICAgICAzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDg2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyLFxuICAgICAgICA3NixcbiAgICAgICAgMjQsXG4gICAgICAgIDEyLFxuICAgICAgICA5NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgODgsXG4gICAgICAgIDIwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcxLFxuICAgICAgICA4MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEwLFxuICAgICAgICA3NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI4LFxuICAgICAgICA3LFxuICAgICAgICA2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM4LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDcsXG4gICAgICAgIDI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODksXG4gICAgICAgIDM4LFxuICAgICAgICA5NixcbiAgICAgICAgMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNSxcbiAgICAgICAgODUsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEZjU1VytJS0RxbzZTQXNUaklUdWlxQzRoNy9vRVdoMVd0bkluNUROTnk4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNzI1MDY4ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU2Mjc5QjMxMzU1NDIxNjAzQUNDM0NBQTRERERERTc0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTcyNzUxNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNzI1MDY4ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcxRkQ0QzAzQkEyRTczODk0MzRGN0ZDNEQ4OTlBMTQzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTcyNzUxOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYeERrN1pCQ1QzdXhUMmk1dkJxY05nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA5OWViY2NlLTE3YzMtNDBkZi1hZGI5LWQxYTFhMzY2N2FhZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICA2OSxcbiAgICAgIDI1MCxcbiAgICAgIDQsXG4gICAgICAxMjUsXG4gICAgICAyMzIsXG4gICAgICAyOSxcbiAgICAgIDUzLFxuICAgICAgMTMsXG4gICAgICAxOTksXG4gICAgICAyMDcsXG4gICAgICAxNjIsXG4gICAgICAxNjgsXG4gICAgICAyNTIsXG4gICAgICAyMTksXG4gICAgICAzNCxcbiAgICAgIDc1LFxuICAgICAgNDMsXG4gICAgICAxNTQsXG4gICAgICAxNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQyLFxuICAgICAgNzksXG4gICAgICAyMTAsXG4gICAgICAxMTEsXG4gICAgICAxMzQsXG4gICAgICAyMDEsXG4gICAgICAxOTQsXG4gICAgICA4NSxcbiAgICAgIDIxNCxcbiAgICAgIDcsXG4gICAgICAyMTQsXG4gICAgICA5NCxcbiAgICAgIDk5LFxuICAgICAgMjIzLFxuICAgICAgMjE5LFxuICAgICAgNzgsXG4gICAgICA4NixcbiAgICAgIDI1MCxcbiAgICAgIDIzLFxuICAgICAgNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiREU4UUY1VkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNzI1MDY4ODM6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMwNjA1NTAxNTQyNTI2OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTM4K084SEVKYnJnN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMMDVLZk5rVVR4bTZiVHhRRjd0aVhGT1ZCVVU1QitLNGkzdGViVjY3M1hVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIml4UDc3SXgzNm5oM0dkVDUvMCtMSVNUdWQvb2FPa3N2aEpUSVVXMHhWMU8zR1puQUZLZnpFNTl3bzlPTjNCcmVKbXV2WXVPUjBzNTFkUGVzd3ZRaERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlkRTQvMW1RUDdNaHJrTERST2ZXcGdEUjBtNUhPODVxTlNValJTR2xSd0V5bEN3QmpPSGEvVFpNUHdSVGc5Z2JOZ2RvZ0pWUTg5aXpCUTZod0VSd2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNzI1MDY4ODM6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3Mjc1MTNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
