require('dotenv').config()
const venom = require('venom-bot');
const xlsxFile = require('read-excel-file/node');
const delayTime = process.env.INTERVAL
const groupName = process.env.GROUP_NAME
var firstAd = true

console.log(`[${getCurrentDateTime()}] Starting...`)
console.log(`[${getCurrentDateTime()}] Group name defined : ${groupName}`)
console.log(`[${getCurrentDateTime()}] Interval defined as : ${delayTime} seconds`)

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro)
  });

function start(client) {
    client.getAllChatsGroups()
        .then((result) => {
            var group = result.filter(obj=> obj.name == groupName);
            if (group.length > 0){
                run(client, group);
            }
        })
}

const run = async (client, group) => {
    const groupId = group[0].id.user + "@" + group[0].id.server
    await xlsxFile('./ad.xlsx').then(async (rows) => {
        for (const row of rows) {
            const adName = row[0]
            const imagePath = row[1]
            const caption = row[2]
            if(row[0] !== "AD"){
                if(!firstAd){
                    await sleep(delayTime)
                }
                await sendImage(client, groupId, imagePath, imagePath, caption, adName)
                firstAd = false;        
            }
        }
    })
    process.exit()
  }

async function sendImage(client, to, imagePath, imageName, cc, adName){
    try{
        await client.sendImage(to, imagePath, imageName,cc)
        console.log(`[${getCurrentDateTime()}] Ad ${adName} sent.`)
        
    } catch(error) {
        console.error(`[${getCurrentDateTime()}] Error when sending ad: ${adName} :`, error) //return object error
    }
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getCurrentDateTime(){
    return new Date().toLocaleString()
}