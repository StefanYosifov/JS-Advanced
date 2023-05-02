class footballTeam{
    constructor(clubName,country){
        this.clubName=clubName;
        this.country=country;
        this.invitedPlayers=[]; 
    }
    newAdditions(footballPlayers){
        let addedPlayers=[];

        for(let player of footballPlayers){
            let[name,age,playerValue]=player.split('/');


            let findPlayer=this.invitedPlayers.find(x=>x.name===name);
            if(findPlayer){
                if(findPlayer.playerValue<playerValue){
                    findPlayer.playerValue=playerValue;
                }
            }
            else{
            let footballPlayer={name,age,playerValue};
            this.invitedPlayers.push(footballPlayer);
            addedPlayers.push(name);
            }
        }

        return `You successfully invite ${addedPlayers.join(`, `)}.`;
    }
    signContract(selectedPlayer){
        let[playerName,playerOffer]=selectedPlayer.split(`/`);
        playerOffer=Number(playerOffer);
        let findPlayer=this.invitedPlayers.find(x=>x.name===playerName);

        if(!findPlayer){
            throw new Error(`${playerName} is not invited to the selection list!`);
        }
        if(playerOffer<findPlayer.playerValue){
            throw new Error(`The manager's offer is not enough to sign a contract with ${playerName}, ${Math.abs(findPlayer.playerValue-playerOffer)} million more are needed to sign the contract!`)
        }
        findPlayer.playerValue=`Bought`;
        return `Congratulations! You sign a contract with ${playerName} for ${playerOffer} million dollars.`;
    }
    ageLimit(name, age){
        let findPlayer=this.invitedPlayers.find(x=>x.name===name);

        if(!findPlayer){
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if(findPlayer.age<age){
            let ageDiff=Math.abs(findPlayer.age-age);
            if(ageDiff<5){
               return`${findPlayer.name} will sign a contract for ${ageDiff} years with ${this.clubName} in ${this.country}!`;
            }
            return `${findPlayer.name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        }
        return `${name} is above age limit!`;
    }
    transferWindowResult(){
        let sortedPlayers=this.invitedPlayers.sort((a,b)=>a.name-(b.name));
        let result="Players list:";
        for(let player of sortedPlayers){
            result+=`\nPlayer ${player.name}-${player.playerValue}`;
        }
        return result;
    }

}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
