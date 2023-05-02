class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp[condition]) {
      throw new Error("Unsuccessful registration at the camp.");
    }
    if (this.listOfParticipants.some((student) => student.name === name)) {
      return `The ${name} is already registered at the camp.`;
    }

    if (money <= this.priceForTheCamp[name]) {
      `The money is not enough to pay the stay at the camp.`;
    }
    let participant = { name, condition, power: 100, wins: 0 };
    this.listOfParticipants.push(participant);
    return `The ${name} was successfully registered.`;
  }

  unregisterParticipant(name) {
    let indexOfParticipants = this.listOfParticipants.indexOf(x=>x.name==name);
    if (indexOfParticipants == -1) {
      return `The ${name} is not registered in the camp.`;
    }

   this.listOfParticipants=this.listOfParticipants.filter(x=>x.name!=name);
    return `The ${name} removed successfully.`;
  }

  timeToPlay(typeOfGame, participant1, participant2) {
    let firstPerson = this.listOfParticipants.find(
      (p) => p.name === participant1
    );
    let secondPerson = null;

    if (!firstPerson) {
      throw new Error(`Invalid entered name/s.`);
    }

    if (typeOfGame == "Battleship") {
      firstPerson.power += 20;
      return `The ${firstPerson.name} successfully completed the game ${typeOfGame}.`;
    } 
    
    else if (typeOfGame === "WaterBalloonFights") {
      let secondPerson = this.listOfParticipants.find(
        (p) => p.name === participant2
      );

      if (!secondPerson) {
        throw new Error(`Invalid entered name/s.`);
      }
      if(firstPerson.condition!==secondPerson.condition){
        return `Choose players with equal condition.`;
      }

      if(firstPerson.power===secondPerson.power){
        return`There is no winner.`;
      }
      let winner=(firstPerson.power>secondPerson.power) ? firstPerson:secondPerson;
      winner.wins+=1;
      return `The ${winner.name} is winner in the game ${typeOfGame}.`;
    }
  }
  toString(){
    let result=`${this.organizer} will take ${this.numberOfParticipants} participants on camping to ${this.location}\n`;
    let sortedArr=this.listOfParticipants.sort((a,b)=>b.wins-a.wins);
    for(let participant of sortedArr){
        let appender=`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}\n`;
        result+=appender;
    }
    return result;
  }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria"); 
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300)); 
console.log(summerCamp.unregisterParticipant("Petar"));
console.log(summerCamp.unregisterParticipant("Petar Petarson"));