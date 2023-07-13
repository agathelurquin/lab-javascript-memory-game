class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(!this.cards){
      return undefined
    }

    const randomOrders = [];
    for (const card of this.cards){
      const pickedCardId = Math.floor(Math.random()*(this.cards.length-1));
      const pickedCard = this.cards[pickedCardId];
      randomOrders.push(pickedCard);
      this.cards.splice(pickedCardId, 1);
    }
    return randomOrders

  }

  checkIfPair(card1, card2) {
    console.log(card1, card2)
    this.pairsClicked++;
    if(card1 === card2){
      this.pairsGuessed++
      console.log('yep')
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    let pairs = this.cards.length;
     if(this.pairsGuessed === this.cards.length) {
      return true
    } else if (this.pairsClicked === 0 || this.pairsGuessed < this.cards.length ){
      return false
    }
  }
}
