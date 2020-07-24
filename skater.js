class Skater {
  constructor(info) {
    this.name = info.name;
    this.skill = info.skill;
    this.tricks = info.tricks;
    this.money = info.cash
    this.frustration = 0
  }

  practice(trick) {
    if (!this.tricks[trick]) {
      this.frustration++;
    }
    if (this.frustration > 2) {
      this.tricks[trick] = true;
      this.frustration = 0
      return `I just learned to ${trick}!!!`
    }
  }
}
module.exports = Skater;