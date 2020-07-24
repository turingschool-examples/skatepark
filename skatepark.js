class SkatePark {
  constructor(name, yearFounded, style, features, isPrivate, cost) {
    this.name = name;
    this.yearFounded = yearFounded;
    this.style = style;
    this.features = features;
    this.isPrivate = isPrivate || false;
    this.cost = cost || 0;
    this.occupants = []
  }

  admit(skater) {
    if (!this.isPrivate) {
      this.occupants.push(skater)
      return `Welcome to the free ${this.name} Skatepark!`
    } if (this.isPrivate && skater.money >= this.cost && this.occupants.length < 3) {
      skater.money -= this.cost
      this.occupants.push(skater)
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
    } if (skater.money < this.cost) {
      return `Sorry, you don't have enough money!`
    } if (this.occupants.length > 2) {
      return 'Sorry, we are at max capacity. Thank you for understanding.'
    }

  }
}

module.exports = SkatePark;