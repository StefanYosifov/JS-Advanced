function assemblyLine() {
  return {
    hasClima() {
      return Object.assign({
        temp: 21,
        tempSettings: 21,
        adjustTemp: () => {
          if (temp < tempSettings) {
            temp++;
          } else if (temp > tempSettings) {
            temp--;
          }
        },
      });
    },
    hasAudio(){
        Object.assign({
            currentTrack :null,
            nowPlaying: function(){
                if(this.currentTrack!==null){
                    console.log(`Now playing ${this.currentTrack.name} by ${this.currentTrack.artist} `)
                }
            }
        })
    }
  };
}
