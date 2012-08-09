/* Trig */

var Trig = Trig || {};

Trig.error = function() {
	throw new Error( arguments );
};

Trig.log = function() {
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};

Trig.Angle = function(x, y) {	
	this.x = x;
	this.y = y;
};

Trig.Angle.prototype.verticalAngle = function(second) {};
Trig.Angle.prototype.isVerticalAngle = function(second) {};

// 30deg = π/6
// 60deg = π/3
// 90deg = π/2
Trig.Angle.prototype.toRadians = function() {};

Trig.Angle.prototype.toDegrees = function() {};

Trig.Point = function(x, y) {	
	this.x = x;
	this.y = y;
};

//returns an integer 1 through 4 mapped to Quandrants I, II, III or IV
Trig.Point.prototype.quadrant = function() {};

//takes two Points
Trig.Line = function(x, y) {	
	this.x = x;
	this.y = y;
};


//returns a line parallel based on a point
Trig.Line.prototype.parallel = function(x) {

};

//
Trig.Line.prototype.isParallel = function(second) {

};

//the distance between point can be calculated using the Pythagorean theorem
//for the distance d, d^2 = (x2-x1)^2 + (y2-y1)^2

Trig.Line.prototype.distance = function(second) {

};


Trig.Circle = function(x, y, radius) {

};

//returns a unit circle
//TODO: inherits from Trig.Circle as a special type
Trig.Triangle.prototype.unit = function() {

};

//triangle has three vertices
//sum of angles is always 180 (per formula (n-2)*180deg)

Trig.Triangle = function(x, y, z) {
	//if two angles are known, calcluate third

	//largest side opposite largest angle, smallest side opposite smalled angle, etc.	
	
	/* length of a side of a triangle is always less than the sum of the lengths of the other two sides */

};

//solves any missing parts of a triangle given enough to go on
//(checks for right triangle, SSS, SAS, etc.)
Trig.Triangle.prototype.solve = function() {
	//calculate the hypotenuse and legs if it's a right triangle
	if (this.isRight()) {
		this.hypotenuse = this.leg1 + this.leg2;
	}
		
	//if two corresponding angles of two triangles are equal,
	//then the third angles are also equal
	//(sum of angles is 180deg)

	//lengths of each side
	//non hypotenuse sides are equal to |y2-y1| and |x2-x1|

	//angles
	//in a right triangle, we know one angle is 90deg
	//if we know the measure of 1 acute angle and side
	//or the measures of 2 sides, we can find all measures
	//of all sides and angles
	//trigonomic ratios, complementary angles (sum to 90deg),
	//reciprocal relationships and the Pythagorean Theorem can be used

	//in general:
	//1) if you know one of the acute angles, you can find the other angle
	//   because these sum to 180deg
	//2) to find the first acute angle, use one of the trigonomic functions,
	//   depending on which sides are known
	//3) to find the third side, use the Pythagorean theorem or one of the
	//   six trigonomic functions in combination with a known angle
	//points for each

	//as far as accuracy,
	//angles expressed to nearest degree (1deg) correspond to length
	//measures expressed to 2 significant digits
	// 0.1deg (10') = 3 significant digits; .01deg (1') = 4 significant digits;
	// .001deg (0.1') = 5 significant digits [[' denotes minute]]
	//
	//area

	//perimeter

};

//returns the three Point objects that make up a tringle 
Trig.Triangle.prototype.points = function() {
};

//all three sides have equal lengths and all three angles measure 60deg
Trig.Triangle.prototype.isEquilateral = function() {

};

//two sides have equal lengths
//the angles opposite the two equal sides have equal measurements
Trig.Triangle.prototype.isIscoceles = function() {};

//all three sides have different lengths
//all three angles have different measurments
Trig.Triangle.prototype.isScalene = function() {};

//all angles are smaller than 90deg
Trig.Triangle.prototype.isAcute = function() {};

//one of the angles is greater than 90deg
Trig.Triangle.prototype.isObtuse = function() {};

//one of the angles is 90deg
//the other two are acute angles that sum to 90deg
//total sum is 180deg (as with all triangles)
Trig.Triangle.prototype.isRight = function() {};

//the hypotenuse is opposite the right angle
Trig.Triangle.prototype.isHypotenuse = function(x, y) {};

//for a 30deg:60deg:90deg right triangle, the length of the hypotenuse
//equals two times the length of the leg opposite the 30deg angle

//for a 45deg:45deg:90deg right triangle, the length of the hypotenuse
//equals the square root of 2 times the length of a leg

Trig.Triangle.prototype.hypotenuse = function() {
	return this.hypotenuse;
};

//returns an array of lines
Trig.Triangle.prototype.legs = function() {
	return this.legs;
};

//legs meet to form a right angle
Trig.Triangle.prototype.isLeg = function(x, y) {};

//whether it's considered a special triangle
Trig.Triangle.prototype.isSpecial = function() {
	//30deg:60deg:90deg
	//
	//   |\ 2
	// √3| \
	//	 |  \
	//	 ----
	//	   1	
	//
	// 30deg:60deg:90deg is one half of an equilateral triangle
	
	//45deg:45deg:45deg
	// a.k.a right iscoceles
	//
	//      |\.
	// 1/√2 |  \.  1
	//      |____\
	//		 1/√2

	//3:4:5
	//5:12:13
	//7:24:25
	//any ratio of the above

};

//two corresponding sides of two right triangles
Trig.Triangle.prototype.isCongruent = function(second) {

	var result = false;
	if ( this.isRight() && second.isRight() ) {
		result = true;
		//SSS
		//SAS
		//ASA
		//AAS
	}
	return result;

};

//all three corresponding sides are equal
Trig.Triangle.prototype.isSSS = function(second) {

};

//two corresponding sides with their vertex angles are equal
Trig.Triangle.prototype.isSAS = function(second) {};

//two corresponding angles with the side in between are equal
Trig.Triangle.prototype.isASA = function(second) {};

//two angles and a non-included side are equal
Trig.Triangle.prototype.isAAS = function(second) {};

//all three pairs of corresponding angles in two triangles are equal to each other
//the corresponding sides of similiar triangles have the same proportion
Trig.Triangle.prototype.isSimilar = function(second) {

};

//complementary angles sum to 90deg
//two acute angles in a right triangle are always complementary
Trig.Triangle.prototype.isComplimentary = function(second) {

};

//the perimeter of a triangle is the sum of its sides
Trig.Triangle.prototype.perimeter = function() {

};

//the area of a triangle is: 1/2 * base * height
Trig.Triangle.prototype.area = function() {

};

// S°/h Ca/h T°/a
//
// 	r    /|
// (hyp)/ |  y (opposite Ø) 
// 	   /  |
//    /   |
//   /    |
//  /Ø    |
//  ------
//    x (adjacent to Ø)
//
// sine Ø = sin Ø = opposite/hypotenuse = y/r
// cosecant Ø = csc Ø = hypotenuse/opposite = r/y = 1/sin Ø
// cosine Ø = cos Ø = adjacent/hypotenuse = x/r 
// secant Ø = sec Ø = hypotenuse/adjacent = r/x
// tangent Ø = tan Ø = opposite/adjacent = y/x = sin Ø/cos Ø
// cotangent Ø = cot Ø = adjacent/opposite = x/y = 1/tan Ø
//
// r^2 = x^2 + y^2
// (y/r)^2 + (x/r)^2 = 1

// sine a = opposite/hypotenuse = x/r
// csc a = hypotenuse/opposite = r/x
// cos a = adjacent/hypotenuse = x/r
// sec a = hypotenuse/adjacent = r/x
// tan a = opposite/adjacent = y/x
// cot a = adjacent/opposite = x/y


//30deg:60deg:90deg is one half of an equilateral triangle
Trig.Triangle.prototype.toEquilateral = function() {

};

//triplet right triangle
//3:4:5
//5:12:13
//7:24:25
//any instance of the above ratios
Trig.Triangle.prototype.isTripletRight = function() {

};

//cofunction identities describe the complementary nature of the acute angles
//in a right traingle; cosine, cotangent and cosecent are cofunctions of
//sine tangent and secant, respectively
//
// sin Ø = cos(90deg - Ø); cos Ø = sin(90deg - Ø)
// tan Ø = cot(90deg - Ø); cot Ø = tan(90deg - Ø)
// sec Ø = csc(90deg - Ø); csc Ø = sec(90deg - Ø)
//
// csc Ø = 1/sin Ø or sin Ø = 1/csc Ø
// sec Ø = 1/cos Ø or cos Ø = 1/sec Ø
// cot Ø = 1/tan Ø or tan Ø = 1/cot Ø
//
// csc Ø sin Ø = 1
// sec Ø cos Ø = 1
// cot Ø tan Ø = 1
//
// (r/y)(y/r) = 1
// (r/x)(x/r) = 1
// (x/y)(y/x) = 1
//
// when you can't use a secant, cosecant or cotangent function
// just use the reciprocal function
Trig.Triangle.prototype.cofunction = function() {

};

//returns the reciprocal function
Trig.Triangle.prototype.reciprocal = function() {

};

