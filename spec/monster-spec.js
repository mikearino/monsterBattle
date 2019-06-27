import { Monster } from './../src/monster.js';

describe('Monster', function () {

  it('should test whether a monster recieves a weapon', function () {
    let goatLord = new Monster ("sword", 50, "devilWorship")
    goatLord.inventory('skateboard' , 0 , 'devilWorship')
    expect(goatLord.weapon.length).toBeGreaterThan(1)
  });
  describe('Monster', function () {

    it('should test whether a monster increases level with enough exp points', function () {
      let goatLord = new Monster ("sword", 50, "devilWorship")
      goatLord.levelUp(200)
      expect(goatLord.level).toBeGreaterThan(1)
    })
  });

  // it('should correctly determine whether three lengths can be made into a triangle', function () {
  //     var notTriangle = new Triangle(3, 2, 3);
  //     console.log(notTriangle.checkType());
  //     expect(notTriangle.checkType()).toEqual('not a triangle');
  //
  //
  //   });

});
