class Bowling {
  constructor() {
    this.shoot = 0;
    this.frame = [];
    this.frameList = [];
  }

  roll(pinDown) {
    this.shoot += 1;

    this.frame.push(pinDown);

    if (pinDown === 10) {
        this.frame.push(0);
        this.shoot = 2;
    }
    
    if (this.shoot === 2) {
      this.frameList.push(this.frame);
      this.frame = [];
      this.shoot = 0;
    }
  }

  score() {

      this.frameList.map((value,index,array)=>{

          if(value[0]==10){
              
              const nextFrameScore = array[index+1][0] + array[index+1][1];
              value[1] = nextFrameScore;
          }
          
          if(value[0] + value[1] == 10 && value[1]>0){
              
              const nextFrameScore = array[index+1][0] ;
              value[1] += nextFrameScore;
          }

      })


    const score = this.frameList.flat().reduce((a, b) => a + b);
    return score;
  }
}

module.exports = Bowling;
