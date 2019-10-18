// 1. Copy and paste your prototype in here and refactor into class syntax.





// function CuboidMaker (attr) {
//     this.length = attr.length;
//     this.width = attr.width;
//     this.height = attr.height;
//   };

  class CuboidMaker  {
      constructor(attr){
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  };

 
//   CuboidMaker.prototype.vol = function(){
//     return this.length * this.width * this.height;
//   };

  vol (){
    return this.length * this.width * this.height;
  };


//   CuboidMaker.prototype.surfaceArea = function(){
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   };
  
  surfaceArea (){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  };

  }
  //console.log(surfaceArea())
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  
  const cuboid = new CuboidMaker({
   length: 4,
   width: 5,
   height: 5
  
  })
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.vol()); // 100
  console.log(cuboid.surfaceArea()); // 130
  
  
  //YAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS I did all the things!
  
  
  







// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area. 