/**
 * @author Lothaire Guée
 * @description
 * 		The file contains the functions to welcome members in the discussion channel.
 *
 */


/*      IMPORTS      */
const { getSetupData } = require("../utils/enmapUtils")
const { NEW } = require('../files/welcomeMessages.js');

/* ----------------------------------------------- */
/* FUNCTIONS                                       */
/* ----------------------------------------------- */

async function welcomeMember(member, client){
    const WELCOME_ID = await getSetupData(member.guild.id, "welcome")
    if(WELCOME_ID == undefined || WELCOME_ID == null) return;

    const welcomeChannel = await client.channels.cache.find(channel => channel.id === WELCOME_ID)
    let message = `Hey yo <@${member.id}>, bienvenue sur ***${member.guild.name}*** !`;
    
    welcomeChannel.send(message)
    

}

module.exports ={
    welcomeMember
}