export class Monster {
constructor (weapon, hp, power){
this.weapon = [weapon]
this.hp = hp,
this.power = power,
this.exp = 0,
this.level = 1
  }
  inventory (newWeapon) {
    this.weapon.push(newWeapon)
  }
  levelUp (newExp) {
    this.exp += newExp;
    if (this.exp > 100) {
      this.level += 1
    }
  }
  // battle(this.power, this.power) {
  //     if (this.power > this.power) {
  //
  //     }
  //   }

};

let goatLord = new Monster ("sword", 50, "devilWorship")
let pizzaGuts = new Monster ("guts", 40, "gutRot")
