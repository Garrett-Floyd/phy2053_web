var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "phy2053-2-3",
  "level": "1",
  "url": "phy2053-2-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-sig-figs",
  "level": "1",
  "url": "sec-sig-figs.html",
  "type": "Section",
  "number": "1.1",
  "title": "Significant Figures",
  "body": " Significant Figures   We use significant figures as a crude way to represent the amount of error in a measurement. When the display on a measurement tool, like a digital scale, fluctuates, we note which decimal digits are relatively stable (goes up and down by only one or two), and which digits are fluctuating wildly (fluctuating all the way between and , so we aren't sure at all of its value). We round to the last stable digit. We aren't confident in the next digit. When you do math with sig figs, there are rules for how many sig figs are in the result. Our knowledge of the output is effected by our knowledge of the inputs.    Exact vs Inexact Numbers  Exact numbers have no uncertainty. Exact numbers are always either counted or defined. (Examples: days in January, inches in a foot, ) Any measured quantity has uncertainty. Measurement error comes from the equipment used and the person taking the measurement. Rules for determining sig figs in a number:    Non-zero numbers are ALWAYS significant. ( has 3 sig figs)  Zeros between non-zero numbers are ALWAYS significant. ( has 4 sig figs)  Zeros to the left of the first non-zero number are NOT significant. ( has one sig fig. The zeros simply indicate the position of the decimal place)  Zeros at the end of a number and to the right of the decimal point are ALWAYS significant. ( has 5 sig figs)  Zeros at the end of a number and to the left of the decimal point are NOT NECESSARILY significant.    Rule 5 is ambiguous, but there are conventions that express the number of sig figs unambiguously. Take the number \" \" as an example. If the number is written as , you can be confidant that all five zeros are significant, giving 6 sig figs overall. The two zeros to the right of the decimal place must be significant by rule 4. Therefore the zeros before the decimal place must be significant as well. If the number is written . with the decimal place explicitly shown, then it is generally safe to assume that all three zeros are meant to be significant, giving 4 sig figs overall. If the number is written as then the zero with the bar over it communicates the last significant zero to the left of the decimal place. This gives 3 sig figs overall. Best practice to communicate sig figs is scientific notation. In scientific notation, the difference between (three sig figs), (two sig figs), and (one sig fig) is completely unambiguous.    Addition and Subtraction  The last significant figure position (for example, hundreds, tens, ones, tenths, hundredths, and so forth) in the calculated result should be the same as the leftmost or largest digit position among the last significant figures of the measured quantities in the calculation.  Example 1: Example 2: Example 3:     Multiplication and Division  Number of significant figures in answer = Smallest number of significant figures in the data  Example: because the smallest number of sig figs in the given data is two (from ).    Multiple-Step Calculations  Use PEMDAS (parentheses, then exponents, then multiplication\/division, and finally addition\/subtraction with ties being broken by evaluating left to right) and only round your final answer (see the caution below in the next section), but you will need to keep track of the sig figs carried through each step of the calculation if you want to get the correct answer.  Example: Steps:   Multiplication: (3 sig figs)    Addition: (2 decimal places giving 3 sig figs)    Round (see next section for rules on rounding): to two decimal places is .       Rules for Rounding Your Final Answer  To round the final answer uses bankers rounding: If the last digit is above , round up ( to two sig figs is ) If the last digit is below , round down ( to two sig figs is ) If the last digit is equal to , round to the nearest even number ( to two sig figs is but to two sig figs is ) The last rule of bankers rounding reduces rounding errors because half the time the rounding will overestimate, and half the time the rounding will underestimate. Therefore, over many measurements and calculations, any rounding errors will be averaged out.   "
},
{
  "id": "sec-alg-w-units",
  "level": "1",
  "url": "sec-alg-w-units.html",
  "type": "Section",
  "number": "1.2",
  "title": "Algebra with Units",
  "body": " Algebra with Units  In school, you learned to how to combine and cancel when you multiply and divide variables, such as x, and y. But you might not know that units should be combined and\/or cancelled as well. Here are a couple of examples of how units should be combined or cancelled in some simple multiplications and divisions:  Example 1:   Example 2:   In college physics, you are expected to write your units throughout all steps of a problem, and to use that info to calculate what the units of the final answer are, in addition to the numerical digits of the final answer.  Watch from 2:50 to end of video   "
},
{
  "id": "sec-geometry",
  "level": "1",
  "url": "sec-geometry.html",
  "type": "Section",
  "number": "1.3",
  "title": "Geometry",
  "body": " Geometry     Interior angles - In a triangle, the three interior angles always add to 180 degrees.    Supplementary angles - Angles on one side of a straight line always add to 180 degrees.    Vertically Opposite Angles - Angles on opposite sides of an intersection of two lines are equal.    Corresponding angles - If two parallel lines A and B are intersected by a third line C, then the top left, top right, bottom left, and bottom right angles of the intersection of A and C are equal to the top left, top right, bottom left, and bottom right of the intersection of B and C respectively.    Alternate Interior Angles - Assume two parallel lines A and B are intersected by a third line C. Then any interior angle (located between A and B) formed by the intersection of A and C is equal to the interior angle on the opposite side of the intersection of B and C.     "
},
{
  "id": "sec-trig",
  "level": "1",
  "url": "sec-trig.html",
  "type": "Section",
  "number": "1.4",
  "title": "Trigonometry",
  "body": " Trigonometry   The figure depicts a right triangle with the ninety degree angle in the bottom right side. The angle in the bottom left is labeled theta and the angle in the top right is unlabeled. The side running from the bottom left to the top right is labeled as the hypotenuse. The side running from the bottom left to the bottom right is labeled as adjacent, because it is adjacent to the angle theta. The side running from the bottom right to the top right is labeled as oppositie, because it is opposite to the angle theta.   A right triangle with one angle labeled theta, and the three sides labeled hypotenuse, opposite, and adjacent.    The function sine is defined as the function cosine is defined as and the function tangent is defined as To help rememeber this many people use the mnemonic phrase sohcahtoa (pronounced as \"soh-kah-toe-uh\").  "
},
{
  "id": "fig-soa-cah-toa",
  "level": "2",
  "url": "sec-trig.html#fig-soa-cah-toa",
  "type": "Figure",
  "number": "1.4.1",
  "title": "",
  "body": " The figure depicts a right triangle with the ninety degree angle in the bottom right side. The angle in the bottom left is labeled theta and the angle in the top right is unlabeled. The side running from the bottom left to the top right is labeled as the hypotenuse. The side running from the bottom left to the bottom right is labeled as adjacent, because it is adjacent to the angle theta. The side running from the bottom right to the top right is labeled as oppositie, because it is opposite to the angle theta.   A right triangle with one angle labeled theta, and the three sides labeled hypotenuse, opposite, and adjacent.   "
},
{
  "id": "sec-exercises-prereq-skills",
  "level": "1",
  "url": "sec-exercises-prereq-skills.html",
  "type": "Exercises",
  "number": "1.5",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   Significant Figures    How many significant figures are in the number 0.0004?      A digital readout on a scale is showing a fluctuating reading, and you're trying to decide what to report on your piece of paper. The numbers flash before your eyes in the following random sequence:   1.053    1.059    1.041    1.050    1.047    1.051    1.048       Which decimal place is totally unknown due to the fluctuations?    Since we need to exclude the totally unknown digit from the significant figures, but keep the digit that we can reasonably well estimate, what is the reported value, to the correct number of significant figures?        If you do 1.0 + 1254.1, how many significant figures does the answer have, according to the rule for adding significant figures?      If you do , how many significant figures does the answer have,according to the rule for multiplying significant figures?      Unit Conversions    Convert 6.00 kilograms to grams. Show all the algebraic cancellations of intermediate units.      Convert 3.00 miles per hour to meters per second. Show all the algebraic cancellations of intermediate units.      Convert 5.00 meters pers second squared to miles per hour squared. Show all the algebraic cancellations of intermediate units.      Geometry    A right triangle has a hypotenuse of length 20 centimeters and another side of length 16 centimeters. Determine the third side of the triangle and the other two angles of the triangle. Don't forget units.       replacement_tag   replacement_tag     is a diagram containing right triangles that might appear in unit 2 of this course, when we will draw something called, “free-body diagrams”. If we assume is a symbolic given, compute , , , and in terms of (i.e., the answers must only contain numbers and the given symbol ). Then, if the triangle side lengths and are given, compute the lengths , , , and in terms of only , , and . Fully simplify your answers. Make sure to specify whether the angle units are degrees or radians.       replacement_tag   replacement_tag     is a diagram containing right triangles that might appear in unit 2 of this course, when we will draw something called, “free-body diagrams”. If we assume is given, compute , , , and in terms of . Then, if the triangle side lengths and are given, compute the lengths , , , and in terms of only , , and .       replacement_tag   replacement_tag     is a diagram containing right triangles that might appear in unit 2 of this course, when we will draw something called, “free-body diagrams”. Compute , , , , and . Then, if the triangle side length is given, compute the lengths and in terms of (i.e., the answer should be times some numerical value from your calculator, with proper significant figures):     "
},
{
  "id": "sec-exercises-prereq-skills-2-2",
  "level": "2",
  "url": "sec-exercises-prereq-skills.html#sec-exercises-prereq-skills-2-2",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "",
  "body": "  How many significant figures are in the number 0.0004?   "
},
{
  "id": "sec-exercises-prereq-skills-2-3",
  "level": "2",
  "url": "sec-exercises-prereq-skills.html#sec-exercises-prereq-skills-2-3",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "",
  "body": "  A digital readout on a scale is showing a fluctuating reading, and you're trying to decide what to report on your piece of paper. The numbers flash before your eyes in the following random sequence:   1.053    1.059    1.041    1.050    1.047    1.051    1.048       Which decimal place is totally unknown due to the fluctuations?    Since we need to exclude the totally unknown digit from the significant figures, but keep the digit that we can reasonably well estimate, what is the reported value, to the correct number of significant figures?     "
},
{
  "id": "sec-exercises-prereq-skills-2-4",
  "level": "2",
  "url": "sec-exercises-prereq-skills.html#sec-exercises-prereq-skills-2-4",
  "type": "Exercise",
  "number": "1.5.3",
  "title": "",
  "body": "  If you do 1.0 + 1254.1, how many significant figures does the answer have, according to the rule for adding significant figures?   "
},
{
  "id": "sec-exercises-prereq-skills-2-5",
  "level": "2",
  "url": "sec-exercises-prereq-skills.html#sec-exercises-prereq-skills-2-5",
  "type": "Exercise",
  "number": "1.5.4",
  "title": "",
  "body": "  If you do , how many significant figures does the answer have,according to the rule for multiplying significant figures?   "
},
{
  "id": "sec-exercises-prereq-skills-3-2",
  "level": "2",
  "url": "sec-exercises-prereq-skills.html#sec-exercises-prereq-skills-3-2",
  "type": "Exercise",
  "number": "1.5.5",
  "title": "",
  "body": "  Convert 6.00 kilograms to grams. Show all the algebraic cancellations of intermediate units.   "
},
{
  "id": "sec-exercises-prereq-skills-3-3",
  "level": "2",
  "url": "sec-exercises-prereq-skills.html#sec-exercises-prereq-skills-3-3",
  "type": "Exercise",
  "number": "1.5.6",
  "title": "",
  "body": "  Convert 3.00 miles per hour to meters per second. Show all the algebraic cancellations of intermediate units.   "
},
{
  "id": "sec-exercises-prereq-skills-3-4",
  "level": "2",
  "url": "sec-exercises-prereq-skills.html#sec-exercises-prereq-skills-3-4",
  "type": "Exercise",
  "number": "1.5.7",
  "title": "",
  "body": "  Convert 5.00 meters pers second squared to miles per hour squared. Show all the algebraic cancellations of intermediate units.   "
},
{
  "id": "sec-exercises-prereq-skills-4-2",
  "level": "2",
  "url": "sec-exercises-prereq-skills.html#sec-exercises-prereq-skills-4-2",
  "type": "Exercise",
  "number": "1.5.8",
  "title": "",
  "body": "  A right triangle has a hypotenuse of length 20 centimeters and another side of length 16 centimeters. Determine the third side of the triangle and the other two angles of the triangle. Don't forget units.   "
},
{
  "id": "sec-exercises-prereq-skills-4-3",
  "level": "2",
  "url": "sec-exercises-prereq-skills.html#sec-exercises-prereq-skills-4-3",
  "type": "Exercise",
  "number": "1.5.9",
  "title": "",
  "body": "   replacement_tag   replacement_tag     is a diagram containing right triangles that might appear in unit 2 of this course, when we will draw something called, “free-body diagrams”. If we assume is a symbolic given, compute , , , and in terms of (i.e., the answers must only contain numbers and the given symbol ). Then, if the triangle side lengths and are given, compute the lengths , , , and in terms of only , , and . Fully simplify your answers. Make sure to specify whether the angle units are degrees or radians.   "
},
{
  "id": "sec-exercises-prereq-skills-4-4",
  "level": "2",
  "url": "sec-exercises-prereq-skills.html#sec-exercises-prereq-skills-4-4",
  "type": "Exercise",
  "number": "1.5.10",
  "title": "",
  "body": "   replacement_tag   replacement_tag     is a diagram containing right triangles that might appear in unit 2 of this course, when we will draw something called, “free-body diagrams”. If we assume is given, compute , , , and in terms of . Then, if the triangle side lengths and are given, compute the lengths , , , and in terms of only , , and .   "
},
{
  "id": "sec-exercises-prereq-skills-4-5",
  "level": "2",
  "url": "sec-exercises-prereq-skills.html#sec-exercises-prereq-skills-4-5",
  "type": "Exercise",
  "number": "1.5.11",
  "title": "",
  "body": "   replacement_tag   replacement_tag     is a diagram containing right triangles that might appear in unit 2 of this course, when we will draw something called, “free-body diagrams”. Compute , , , , and . Then, if the triangle side length is given, compute the lengths and in terms of (i.e., the answer should be times some numerical value from your calculator, with proper significant figures):   "
},
{
  "id": "sec-vectors",
  "level": "1",
  "url": "sec-vectors.html",
  "type": "Section",
  "number": "2.1",
  "title": "Vectors",
  "body": " Vectors   A scalar is a physical quantity with a value only. The value can be positive or negative. As an example, consider the windfinder temperature map . In this map temperature is a scalar because its value at any position on the map is just a number.  A vector is a physical quantity with a value (magnitude) and a direction. We typically represent a vector quantity with an arrow. As an example, consider the windfinder wind velocity map . In this map the wind velocity is a vector. The color of a point on the map tells us how fast the wind is blowing at that location. The direction of the arrow at that point tells us the direction the wind at that location.  Even though windfinder uses color to display the magnitude of the wind's velocity, in this class we typically denote the magnitude of a vector by the length of its arrow. A longer arrow has a greater magnitude and a shorter arrow has a lesser magnitude. The arrow's direction still represents the vectors direction. We use the symbol to denote that a vector is pointing into the page and the symbol to denote that a vector is pointing out of the page.    Doing Math on Vectors Graphically     Vectors in Component Form   A coordinate diagram shows a vector A extending upward and to the right from the origin. The vector is drawn in orange and forms the diagonal of a right triangle. A horizontal dashed orange line extends from the origin to the right, representing the horizontal component . A vertical dashed orange line extends upward from the end of the horizontal component to the vector endpoint, representing the vertical component . Black horizontal and vertical coordinate axes intersect at the origin. The horizontal axis is labeled x, and the vertical axis is labeled y.   A Vector decomposed into x and y components.    In we've draw a vector on an x,y coordinate system. As shown in the figure, every vector forms a right triangle with x and y axes. The components of the vector denote how much it points in a particular direction.  : component pointing in the -direction.  : component pointing in the -direction.  denotes the positive -direction.  denotes the positive -direction.  In vector component form The magnitude of the vector is or Unit vector direction: dividing a vector by its magnitude gives a vector with magnitude one and points in the same direction (i.e. denotes direction of )     Find the magnitude and unit vector for the following two vectors...       and have the same magnitude, but point in different directions Bonus: Suppose a boat travels at in the direction of .       Vectors in Polar Form  The polar form a vector is represented using the magnitude of the vector and its angle relative to the positive x-axis (counter-clockwise, towards +y-axis). To calculate the cartesian components of a vector using its magnitude and angle use the following two equations: To calculate the magnitude and angle of the vector in terms of its cartesian coordinates use the following equations: if is positive then else if is negative then    's hidden pitfall  It is a common mistake for students forget to add degrees to the result of when is negative. To avoid making this mistake always check what quadrent your vector is in before taking the . Recall that the range of is degrees, so will always output a value in this range. If your vector is in quadrent one or four this is fine. However, if your vector is in quadrent two or three your going to need to add degrees to get the correct angle.   Polar form notation \"magnitude at an angle \".    Scaling Vectors  When multiplying a vector by a scalar , each cartesian component of the vector is multiplied by the scalar. Remember that scalars can be negative! If is negative, vector flips direction. Magnitude scales with absolute value of . If (positive) then the polar angle does not change. If (negative) then multiplying the vector by adds degrees to the polar angle (i.e., Flips direction).    Vector Addition  When adding vectors together, the components add When subtracting vectors, the components subtract    When adding or subtracting vectors, the polar coordinates do not add or subtract respectively.     Position Vector    The postion is a vector that points from the origin to location . Mathamatically the position is given as     The distance from the origin to the point\/location is then The unit vector direction pointing from the origin to the location is     Displacement Vector     displacement  is defined as the change in the position vector over a period of time \" \". where and .      You start at an initial position Then you walk 10 m at an angle west of north. What is your final position?        or west of north      Dot Product  In we talked about what happens when you multiply a vector with a scalar. In we talked about what happens when you add or subtract two vectors. What happens when you multiply two vectors together? Ends up there a two ways to multiply vectors together. The first way of multiplying vectors together is called the dot product and outputs a scalar. The dot product is a measure of how much the two vectors point in the same direction. There are two ways to calculate the dot product corresponding to using eithier the polar or component form of vectors.   Two arrows originating from the same lower-left point and extending in different directions. The left arrow points upward and slightly right and is labeled B near its tip. The right arrow points upward and strongly to the right and is labeled A near its tip. A curved arc between the two arrows marks the angle . Two dashed projection lines illustrate the components of each vector onto the direction of the other. A dashed line extends from vector B toward vector A, labeled . Another dashed line extends from vector A toward vector B, labeled . Small squares appear where each projection meets the opposite vector, marking right-angle intersections.   Diagram showing two vectors from a common point with angle θ between them and labeled component projections.    The polar method of computing the dot product uses the magnitude of the two vectors and the angle between them. Given two vectors and the polar form formula for taking the dot product is given by where is the angle between and . displays some important properties of the dot product. The dot product can be though as the length of one of the vectors mulipilied by the component of the second vector that is parrallel to the first. Which vector is taken to first be first or second in the dot product is irrelevent. Because of this we say that the dot product is symmetric . In other words,   In component form, the formula for the dot product is given by where is the number of dimensions and is an index ranging over integers that represent each dimension. For example, in 3 dimensional cartesian coordinates corresponds to , corresponds to , and corresponds to . Then in 3 dimensional cartesian coordinates the component form formula for the dot product reduces to     Cross Product  The second way of multiplying vectors together is the cross product. The cross product multiplies the components of two vectors that are perpendicular to each other, and gives a new direction that is perpendicular to both original vectors. Like the dot product there are two ways to calculate the cross product corresponding to using eithier the polar or component form of vectors.   Two arrows originating from the same lower-left point and extending in different directions. The left arrow points upward and slightly right and is labeled B near its tip. The right arrow points upward and strongly to the right and is labeled A near its tip. A curved arc between the two arrows marks the angle . Two dashed construction lines illustrate perpendicular components of each vector with respect to the other. One dashed line runs from vector B toward vector A, and another runs from vector A toward vector B. Each dashed segment is labeled with the corresponding perpendicular magnitude, or . Small squares mark the right-angle corners where these perpendiculars meet the vectors.   Diagram showing two vectors, A and B, with angle θ between them and dashed components labeled Asinθ and Bsinθ.    The polar formula for the magnitude of the cross product of vectors and is where is the angle between the vector. There are two things worth noting. The first is that The second is that outputs a number but earlier we said that the output of the cross product is a vector. While gives the magnitude of the cross product it doesn't give its direction.  To find the direction of the cross product you must use the right-hand rule. The right hand rules says that the direction of the cross product of and is given by the following procedure:   Flatten your right hand and put your thumb at a ninety degree angle to your fingers like your going to shake someones hand.    While maintaining this posture, point your fingers in the direction of .    Sweep your fingers into the direction of , but don't move your thumb or wrist.    Your thumb now points in the direction of the cross product.     By using the right-hand rule and noting that we see that Because of this we say that the cross product is antisymmetric .  Using the right hand rule we see that Noting that we see that Noting that we see that These relationships can be used to find the cross product in component form. Let and then We didn't discuss this earlier, but the cross product is also distributive which means that we can use \"first inner outer last\" to evaluate the cross product.   If you are familiar with matrices and determinants you can also use the following formula if you would find it more convenient:     Section Exercises    replacement_tag     "
},
{
  "id": "sec-vectors-2-1",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar "
},
{
  "id": "sec-vectors-2-2",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector "
},
{
  "id": "fig-vect-cart-decomp",
  "level": "2",
  "url": "sec-vectors.html#fig-vect-cart-decomp",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": " A coordinate diagram shows a vector A extending upward and to the right from the origin. The vector is drawn in orange and forms the diagonal of a right triangle. A horizontal dashed orange line extends from the origin to the right, representing the horizontal component . A vertical dashed orange line extends upward from the end of the horizontal component to the vector endpoint, representing the vertical component . Black horizontal and vertical coordinate axes intersect at the origin. The horizontal axis is labeled x, and the vertical axis is labeled y.   A Vector decomposed into x and y components.   "
},
{
  "id": "subsec-vect-comp-form-4",
  "level": "2",
  "url": "sec-vectors.html#subsec-vect-comp-form-4",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": "  Find the magnitude and unit vector for the following two vectors...       and have the same magnitude, but point in different directions Bonus: Suppose a boat travels at in the direction of .    "
},
{
  "id": "subsec-vect-polar-form-3",
  "level": "2",
  "url": "sec-vectors.html#subsec-vect-polar-form-3",
  "type": "Warning",
  "number": "2.1.3",
  "title": "<span class=\"process-math\">\\(\\arctan\\)<\/span>’s hidden pitfall.",
  "body": " 's hidden pitfall  It is a common mistake for students forget to add degrees to the result of when is negative. To avoid making this mistake always check what quadrent your vector is in before taking the . Recall that the range of is degrees, so will always output a value in this range. If your vector is in quadrent one or four this is fine. However, if your vector is in quadrent two or three your going to need to add degrees to get the correct angle.  "
},
{
  "id": "subsec-vec-add-3",
  "level": "2",
  "url": "sec-vectors.html#subsec-vec-add-3",
  "type": "Warning",
  "number": "2.1.4",
  "title": "",
  "body": " When adding or subtracting vectors, the polar coordinates do not add or subtract respectively.  "
},
{
  "id": "def-position",
  "level": "2",
  "url": "sec-vectors.html#def-position",
  "type": "Definition",
  "number": "2.1.5",
  "title": "",
  "body": "  The postion is a vector that points from the origin to location . Mathamatically the position is given as    "
},
{
  "id": "def-",
  "level": "2",
  "url": "sec-vectors.html#def-",
  "type": "Definition",
  "number": "2.1.6",
  "title": "",
  "body": "   displacement  is defined as the change in the position vector over a period of time \" \". where and .   "
},
{
  "id": "subsec-displacement-vect-3",
  "level": "2",
  "url": "sec-vectors.html#subsec-displacement-vect-3",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": "  You start at an initial position Then you walk 10 m at an angle west of north. What is your final position?        or west of north   "
},
{
  "id": "fig-dot-prod-polar",
  "level": "2",
  "url": "sec-vectors.html#fig-dot-prod-polar",
  "type": "Figure",
  "number": "2.1.8",
  "title": "",
  "body": " Two arrows originating from the same lower-left point and extending in different directions. The left arrow points upward and slightly right and is labeled B near its tip. The right arrow points upward and strongly to the right and is labeled A near its tip. A curved arc between the two arrows marks the angle . Two dashed projection lines illustrate the components of each vector onto the direction of the other. A dashed line extends from vector B toward vector A, labeled . Another dashed line extends from vector A toward vector B, labeled . Small squares appear where each projection meets the opposite vector, marking right-angle intersections.   Diagram showing two vectors from a common point with angle θ between them and labeled component projections.   "
},
{
  "id": "subsec-dot-prod-4",
  "level": "2",
  "url": "sec-vectors.html#subsec-dot-prod-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric "
},
{
  "id": "fig-cross-prod-polar",
  "level": "2",
  "url": "sec-vectors.html#fig-cross-prod-polar",
  "type": "Figure",
  "number": "2.1.9",
  "title": "",
  "body": " Two arrows originating from the same lower-left point and extending in different directions. The left arrow points upward and slightly right and is labeled B near its tip. The right arrow points upward and strongly to the right and is labeled A near its tip. A curved arc between the two arrows marks the angle . Two dashed construction lines illustrate perpendicular components of each vector with respect to the other. One dashed line runs from vector B toward vector A, and another runs from vector A toward vector B. Each dashed segment is labeled with the corresponding perpendicular magnitude, or . Small squares mark the right-angle corners where these perpendiculars meet the vectors.   Diagram showing two vectors, A and B, with angle θ between them and dashed components labeled Asinθ and Bsinθ.   "
},
{
  "id": "subsec-cross-prod-6",
  "level": "2",
  "url": "sec-vectors.html#subsec-cross-prod-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "antisymmetric "
},
{
  "id": "exercises-sec-replacement_tag5-2",
  "level": "2",
  "url": "sec-vectors.html#exercises-sec-replacement_tag5-2",
  "type": "Exercise",
  "number": "2.1.10.1",
  "title": "",
  "body": "  replacement_tag   "
},
{
  "id": "exercises-ch-vectors",
  "level": "1",
  "url": "exercises-ch-vectors.html",
  "type": "Exercises",
  "number": "2.2",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   Vector Addition and Subtraction   How adding vectors tip-to-tail (graphically) corresponds to adding vectors algebraically   Your group should annotate on the graph paper in to practice adding the specified vectors.   a sheet of graph paper.       Choose a starting point to begin at. Draw the vector centimeters.    Continuing onwards from the tip of , draw the next leg: the vector centimeters. We have now arrived at the destination point.    How many horizontal grid squares is the total run, , for the entire trip, ? How can you calculate that value just from the Cartesian components of and ?    How many vertical grid squares is the total rise, , for the entire trip, ? How can you calculate that value just from the Cartesian components of and ?     What you have just done shows that column addition allows you to add vectors algebraically. So, if you have the Cartesian components, you can add them using numbers, without having to physically draw the vectors to scale on graph paper.  In other words, if: and: Then the sum is:      Two warnings   Let's check out whether it is true that the magnitude of the resultant vector can be found by adding the magnitudes of the ingredients. In other words, is it true that ? For this check, use the same vector values as above: , , .    Use Pythagoras to get the magnitude :     Use Pythagoras to get the magnitude :     Add those magnitudes up to see what is:     Use Pythagoras to get the magnitude of the resultant:     Conclude: is it true that ? Indicate one:         Let's check out whether it is true that the angle of the resultant vector can be found by adding the angles of the ingredients. In other words, is it true that ? For this check, use the same vector values as above: , , .    Use trigonometry to get the direction of :     Use trigonometry to get the direction of :     Add those directions up to see what is:     Use trigonometry to get the direction of the resultant vector:     Conclude: is it true that ? Indicate one:     You've just discovered that there's no shortcut to find the magnitude or angle of the resultant. You first had to add Cartesian components to get the components of the resultant, centimeters. Only then can you use Pythagoras to find the magnitude and trigonometry to find the direction. In other words, vectors can't be added in polar form, only in Cartesian form (i.e., if you want a polar form answer, you have to convert from Cartesian to polar after all the addition is done).      Jim's dog Sparky runs 60.0 meters northeast to a tree, then 70.0 meters west to a second tree, and finally 30.0 meters south to a third tree.    Calculate Sparky's net displacement in vector component form;    Calculate Sparky's net displacement as a magnitude and an angle.        A field mouse trying to escape a hawk runs east for 4.0 meters, darts southeast for 2.0 meters, then drops 1.0 meter straight down a hole into its burrow. What is the magnitude of the net displacement?      A treasure map gives the following directions to the buried treasure: “Start at the old oak tree, walk due north for 500 paces until you arrive at the stone well, then walk due east for 100 paces. Dig.”. But when you arrive, you find an angry dragon guarding the stone well. To avoid the dragon, you start at the old oak tree, but set off on a trail at an angle 60.0 degrees east of north. After walking 250 paces along the trail, you arrive at a small cabin, from which you can see an opening through the woods. From the small cabin, which direction must you go, and how far, to reach the treasure?      (Practice with vectors given in polar form) In the following list of exercises, let vector be 2.8284 kilometers long, directed 45.0 degrees above the positive x-axis. Let vector be 4.00 kilometers long, directed 30.0 degrees above the positive. Practice computing the following expressions.            (Practice with vectors given in rectangular\/Cartesian form) In the following list of exercises, let vector , and vector . Practice computing the following expressions.            Vector Multiplication    (Practice with vector dot and cross product) In the following table of exercises, let vector , and vector . Practice computing the following expressions. Don't forget to compute the appropriate units, and also, appropriate vector component notation if your answer is a vector rather than a scalar.           (Practice with vectors specified relative to each other) In the following list of exercises, let vectors and be defined as shown in the accompanying diagram. Practice computing the following expressions.   The diagram shows an x-y coordinate plane with dashed horizontal and vertical axes. Two vectors originate from the origin and extend into the upper right quadrant. Vector B has a greater angle with the x-axis than vector A. Vector is 30 degrees clockwise from vector . The magnitude of vector is marked as 4.00 meters, and the magnitude of vector is marked as 5.00 meters. An additional label indicates an unknown angle between vector A and the positive x-axis.   Two vectors from the origin with magnitudes 4 meters and 5 meters forming a 30 degree angle between them.             "
},
{
  "id": "exercises-ch-vectors-2-2",
  "level": "2",
  "url": "exercises-ch-vectors.html#exercises-ch-vectors-2-2",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "How adding vectors tip-to-tail (graphically) corresponds to adding vectors algebraically.",
  "body": " How adding vectors tip-to-tail (graphically) corresponds to adding vectors algebraically   Your group should annotate on the graph paper in to practice adding the specified vectors.   a sheet of graph paper.       Choose a starting point to begin at. Draw the vector centimeters.    Continuing onwards from the tip of , draw the next leg: the vector centimeters. We have now arrived at the destination point.    How many horizontal grid squares is the total run, , for the entire trip, ? How can you calculate that value just from the Cartesian components of and ?    How many vertical grid squares is the total rise, , for the entire trip, ? How can you calculate that value just from the Cartesian components of and ?     What you have just done shows that column addition allows you to add vectors algebraically. So, if you have the Cartesian components, you can add them using numbers, without having to physically draw the vectors to scale on graph paper.  In other words, if: and: Then the sum is:    "
},
{
  "id": "exercises-ch-vectors-2-3",
  "level": "2",
  "url": "exercises-ch-vectors.html#exercises-ch-vectors-2-3",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "Two warnings.",
  "body": " Two warnings   Let's check out whether it is true that the magnitude of the resultant vector can be found by adding the magnitudes of the ingredients. In other words, is it true that ? For this check, use the same vector values as above: , , .    Use Pythagoras to get the magnitude :     Use Pythagoras to get the magnitude :     Add those magnitudes up to see what is:     Use Pythagoras to get the magnitude of the resultant:     Conclude: is it true that ? Indicate one:      "
},
{
  "id": "exercises-ch-vectors-2-4",
  "level": "2",
  "url": "exercises-ch-vectors.html#exercises-ch-vectors-2-4",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": "  Let's check out whether it is true that the angle of the resultant vector can be found by adding the angles of the ingredients. In other words, is it true that ? For this check, use the same vector values as above: , , .    Use trigonometry to get the direction of :     Use trigonometry to get the direction of :     Add those directions up to see what is:     Use trigonometry to get the direction of the resultant vector:     Conclude: is it true that ? Indicate one:     You've just discovered that there's no shortcut to find the magnitude or angle of the resultant. You first had to add Cartesian components to get the components of the resultant, centimeters. Only then can you use Pythagoras to find the magnitude and trigonometry to find the direction. In other words, vectors can't be added in polar form, only in Cartesian form (i.e., if you want a polar form answer, you have to convert from Cartesian to polar after all the addition is done).   "
},
{
  "id": "exercises-ch-vectors-2-5",
  "level": "2",
  "url": "exercises-ch-vectors.html#exercises-ch-vectors-2-5",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": "  Jim's dog Sparky runs 60.0 meters northeast to a tree, then 70.0 meters west to a second tree, and finally 30.0 meters south to a third tree.    Calculate Sparky's net displacement in vector component form;    Calculate Sparky's net displacement as a magnitude and an angle.     "
},
{
  "id": "exercises-ch-vectors-2-6",
  "level": "2",
  "url": "exercises-ch-vectors.html#exercises-ch-vectors-2-6",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "",
  "body": "  A field mouse trying to escape a hawk runs east for 4.0 meters, darts southeast for 2.0 meters, then drops 1.0 meter straight down a hole into its burrow. What is the magnitude of the net displacement?   "
},
{
  "id": "exercises-ch-vectors-2-7",
  "level": "2",
  "url": "exercises-ch-vectors.html#exercises-ch-vectors-2-7",
  "type": "Exercise",
  "number": "2.2.6",
  "title": "",
  "body": "  A treasure map gives the following directions to the buried treasure: “Start at the old oak tree, walk due north for 500 paces until you arrive at the stone well, then walk due east for 100 paces. Dig.”. But when you arrive, you find an angry dragon guarding the stone well. To avoid the dragon, you start at the old oak tree, but set off on a trail at an angle 60.0 degrees east of north. After walking 250 paces along the trail, you arrive at a small cabin, from which you can see an opening through the woods. From the small cabin, which direction must you go, and how far, to reach the treasure?   "
},
{
  "id": "exercises-ch-vectors-2-8",
  "level": "2",
  "url": "exercises-ch-vectors.html#exercises-ch-vectors-2-8",
  "type": "Exercise",
  "number": "2.2.7",
  "title": "",
  "body": "  (Practice with vectors given in polar form) In the following list of exercises, let vector be 2.8284 kilometers long, directed 45.0 degrees above the positive x-axis. Let vector be 4.00 kilometers long, directed 30.0 degrees above the positive. Practice computing the following expressions.         "
},
{
  "id": "exercises-ch-vectors-2-9",
  "level": "2",
  "url": "exercises-ch-vectors.html#exercises-ch-vectors-2-9",
  "type": "Exercise",
  "number": "2.2.8",
  "title": "",
  "body": "  (Practice with vectors given in rectangular\/Cartesian form) In the following list of exercises, let vector , and vector . Practice computing the following expressions.         "
},
{
  "id": "exercises-ch-vectors-3-2",
  "level": "2",
  "url": "exercises-ch-vectors.html#exercises-ch-vectors-3-2",
  "type": "Exercise",
  "number": "2.2.9",
  "title": "",
  "body": "  (Practice with vector dot and cross product) In the following table of exercises, let vector , and vector . Practice computing the following expressions. Don't forget to compute the appropriate units, and also, appropriate vector component notation if your answer is a vector rather than a scalar.        "
},
{
  "id": "exercises-ch-vectors-3-3",
  "level": "2",
  "url": "exercises-ch-vectors.html#exercises-ch-vectors-3-3",
  "type": "Exercise",
  "number": "2.2.10",
  "title": "",
  "body": "  (Practice with vectors specified relative to each other) In the following list of exercises, let vectors and be defined as shown in the accompanying diagram. Practice computing the following expressions.   The diagram shows an x-y coordinate plane with dashed horizontal and vertical axes. Two vectors originate from the origin and extend into the upper right quadrant. Vector B has a greater angle with the x-axis than vector A. Vector is 30 degrees clockwise from vector . The magnitude of vector is marked as 4.00 meters, and the magnitude of vector is marked as 5.00 meters. An additional label indicates an unknown angle between vector A and the positive x-axis.   Two vectors from the origin with magnitudes 4 meters and 5 meters forming a 30 degree angle between them.           "
},
{
  "id": "sec-pos-vel-speed-acc",
  "level": "1",
  "url": "sec-pos-vel-speed-acc.html",
  "type": "Section",
  "number": "3.1",
  "title": "1D Kinematic Definitions",
  "body": " 1D Kinematic Definitions   One Dimensional Position  We discussed position in . The x component of position is     One Dimensional Displacement  We discussed displacement in . The x component of displacement is     One Dimensional Velocity    The average velocity over a period of time is the change in position divided by the change in time for that interval.     The x-component of the average velocity is     Speed  Speed is the magnitude of velocity. Speed describes how fast your going, but doesn't say anything about which direction your going.    The average speed ( ) of an object over a period of time is     Sometimes students confuse displacement and distance. Remember displacement is the change in position. So if you run four laps around a standard track your total distance is one mile, but total displacement is zero.    One Dimensional Acceleration    The average acceleration of an object over a period of time is     The x-component of average acceleration is    "
},
{
  "id": "def-avg-vel",
  "level": "2",
  "url": "sec-pos-vel-speed-acc.html#def-avg-vel",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  The average velocity over a period of time is the change in position divided by the change in time for that interval.    "
},
{
  "id": "def-speed",
  "level": "2",
  "url": "sec-pos-vel-speed-acc.html#def-speed",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": "  The average speed ( ) of an object over a period of time is    "
},
{
  "id": "def-avg-acc",
  "level": "2",
  "url": "sec-pos-vel-speed-acc.html#def-avg-acc",
  "type": "Definition",
  "number": "3.1.3",
  "title": "",
  "body": "  The average acceleration of an object over a period of time is    "
},
{
  "id": "exercises-ch-1d-kinematic-defs",
  "level": "1",
  "url": "exercises-ch-1d-kinematic-defs.html",
  "type": "Exercises",
  "number": "3.2",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises    A boat is sailing on the lake. At seconds the boat is located at meters and has an x-component of velocity equal to meters per second. Later at seconds the boat is located at meters and has an x-component of velocity equal to meters per second. What is the average x-component of velocity and the average x-component of acceleration of the boat?      A boat is sailing on the lake. At seconds the boat is located at meters and has an x-component of velocity equal to meters per second. Later at seconds the boat is located at meters and has an x-component of velocity equal to meters per second. What is the average x-component of velocity and the average x-component of acceleration? of the boat?      A boat is sailing on the lake. At seconds the boat is located at meters and has an x-component of velocity equal to meters per second. Later at seconds the boat is located at meters and has an x-component of velocity equal to meters per second. What is the average x-component of velocity and the average x-component of acceleration? of the boat?      A boat is sailing on the lake. At seconds the boat is located at meters and has an x-component of velocity equal to meters per second. Later at seconds the boat is located at meters and has an x-component of velocity equal to meters per second. What is the average x-component of velocity and the average x-component of acceleration? of the boat?      A runner runs 13 laps around a quarter mile track in 33 minutes. What is the runners average velocity and average speed?      Assume that an object is constrained, so that it can only move along the x-axis. If the final speed of the object over a period of time is less than the initial speed of the object, is the x-component of the acceleration always negative? If so prove it. If not which of the first four chapter exercies are a counter example.    "
},
{
  "id": "exercises-ch-1d-kinematic-defs-2",
  "level": "2",
  "url": "exercises-ch-1d-kinematic-defs.html#exercises-ch-1d-kinematic-defs-2",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": "  A boat is sailing on the lake. At seconds the boat is located at meters and has an x-component of velocity equal to meters per second. Later at seconds the boat is located at meters and has an x-component of velocity equal to meters per second. What is the average x-component of velocity and the average x-component of acceleration of the boat?   "
},
{
  "id": "exercises-ch-1d-kinematic-defs-3",
  "level": "2",
  "url": "exercises-ch-1d-kinematic-defs.html#exercises-ch-1d-kinematic-defs-3",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": "  A boat is sailing on the lake. At seconds the boat is located at meters and has an x-component of velocity equal to meters per second. Later at seconds the boat is located at meters and has an x-component of velocity equal to meters per second. What is the average x-component of velocity and the average x-component of acceleration? of the boat?   "
},
{
  "id": "exercises-ch-1d-kinematic-defs-4",
  "level": "2",
  "url": "exercises-ch-1d-kinematic-defs.html#exercises-ch-1d-kinematic-defs-4",
  "type": "Exercise",
  "number": "3.2.3",
  "title": "",
  "body": "  A boat is sailing on the lake. At seconds the boat is located at meters and has an x-component of velocity equal to meters per second. Later at seconds the boat is located at meters and has an x-component of velocity equal to meters per second. What is the average x-component of velocity and the average x-component of acceleration? of the boat?   "
},
{
  "id": "exercises-ch-1d-kinematic-defs-5",
  "level": "2",
  "url": "exercises-ch-1d-kinematic-defs.html#exercises-ch-1d-kinematic-defs-5",
  "type": "Exercise",
  "number": "3.2.4",
  "title": "",
  "body": "  A boat is sailing on the lake. At seconds the boat is located at meters and has an x-component of velocity equal to meters per second. Later at seconds the boat is located at meters and has an x-component of velocity equal to meters per second. What is the average x-component of velocity and the average x-component of acceleration? of the boat?   "
},
{
  "id": "exercises-ch-1d-kinematic-defs-6",
  "level": "2",
  "url": "exercises-ch-1d-kinematic-defs.html#exercises-ch-1d-kinematic-defs-6",
  "type": "Exercise",
  "number": "3.2.5",
  "title": "",
  "body": "  A runner runs 13 laps around a quarter mile track in 33 minutes. What is the runners average velocity and average speed?   "
},
{
  "id": "exercises-ch-1d-kinematic-defs-7",
  "level": "2",
  "url": "exercises-ch-1d-kinematic-defs.html#exercises-ch-1d-kinematic-defs-7",
  "type": "Exercise",
  "number": "3.2.6",
  "title": "",
  "body": "  Assume that an object is constrained, so that it can only move along the x-axis. If the final speed of the object over a period of time is less than the initial speed of the object, is the x-component of the acceleration always negative? If so prove it. If not which of the first four chapter exercies are a counter example.   "
},
{
  "id": "sec-deriv-1d-kin-eqs",
  "level": "1",
  "url": "sec-deriv-1d-kin-eqs.html",
  "type": "Section",
  "number": "4.1",
  "title": "Deriving 1D Kinematic Equations",
  "body": " Deriving 1D Kinematic Equations  In general, the acceleration is a function of time. However, in many situations we can approximate the acceleration in the x-direction as a constant. Because this approximation is made frequently, we will solve in advance for the x-component of velocity and position when = constant.    When the x-component of the acceleration is constant     If the x-component of acceleration is constant then by the definition of average acceleration ( ) we have Rearranging, we get       When the x-component of the acceleration is constant     As we proved in there is a linear relationship between the x-component of the velocity and if the x-component of the acceleration is zero. For straight lines ( ) the average y value is the average of the initial y value and the final y value. In our case From we have Plugging this in to our equation for gives On the other hand, the definition of average velocity ( ) gives the equation Setting these two equations equal to each other, we get       When the x-component of the acceleration is constant     We rearrange to obtain Plugging this into gives       When the x-component of the acceleration is constant     We rearrange to obtain Plugging this into gives       When the x-component of the acceleration is constant     We rearrange to obtain Plugging this into gives     "
},
{
  "id": "thm-1d-const-a-1",
  "level": "2",
  "url": "sec-deriv-1d-kin-eqs.html#thm-1d-const-a-1",
  "type": "Theorem",
  "number": "4.1.1",
  "title": "",
  "body": "  When the x-component of the acceleration is constant     If the x-component of acceleration is constant then by the definition of average acceleration ( ) we have Rearranging, we get    "
},
{
  "id": "thm-1d-const-a-2",
  "level": "2",
  "url": "sec-deriv-1d-kin-eqs.html#thm-1d-const-a-2",
  "type": "Theorem",
  "number": "4.1.2",
  "title": "",
  "body": "  When the x-component of the acceleration is constant     As we proved in there is a linear relationship between the x-component of the velocity and if the x-component of the acceleration is zero. For straight lines ( ) the average y value is the average of the initial y value and the final y value. In our case From we have Plugging this in to our equation for gives On the other hand, the definition of average velocity ( ) gives the equation Setting these two equations equal to each other, we get    "
},
{
  "id": "thm-1d-const-a-3",
  "level": "2",
  "url": "sec-deriv-1d-kin-eqs.html#thm-1d-const-a-3",
  "type": "Theorem",
  "number": "4.1.3",
  "title": "",
  "body": "  When the x-component of the acceleration is constant     We rearrange to obtain Plugging this into gives    "
},
{
  "id": "thm-1d-const-a-4",
  "level": "2",
  "url": "sec-deriv-1d-kin-eqs.html#thm-1d-const-a-4",
  "type": "Theorem",
  "number": "4.1.4",
  "title": "",
  "body": "  When the x-component of the acceleration is constant     We rearrange to obtain Plugging this into gives    "
},
{
  "id": "thm-1d-const-a-5",
  "level": "2",
  "url": "sec-deriv-1d-kin-eqs.html#thm-1d-const-a-5",
  "type": "Theorem",
  "number": "4.1.5",
  "title": "",
  "body": "  When the x-component of the acceleration is constant     We rearrange to obtain Plugging this into gives    "
},
{
  "id": "sec-solv-sing-obj-1d-kin-probs",
  "level": "1",
  "url": "sec-solv-sing-obj-1d-kin-probs.html",
  "type": "Section",
  "number": "4.2",
  "title": "Solving Single-object 1D Kinematic Problems",
  "body": " Solving Single-object 1D Kinematic Problems  Lets go over the recommended steps for solving a single-object one dimensional kinematics problem by working an example. An arrow is shot straight up with an initial velocity of 30.0 m\/s. What is the maximum height it reaches?  This problem has what I call \"hidden givens\". Hidden givens are values that the problem gave you, but they told you using a description in words instead of quoting a number. Here are some examples of hidden givens:   \"uniform acceleration\": acceleration is a constant value (not necessarily zero)    \"the velocity was constant\": and     \"started at rest\": initial velocity     \"came to a stop\": final velocity     \"peak height\": velocity = 0 at the peak    \"was dropped\/released\": initial velocity and acceleration in the direction of the center of the earth.   Now that we've covered hidden givens lets dive into the recommended steps for solving the problem.     Decide which of the kinematics variables are givens or hidden givens and which are unknowns, by making a table of all possibilities.  We will choose up to be the positive direction and down to be the negative direction. We could also choose the reverse and still solve the problem correctly. The important thing is to be consistent. We will choose our initial state to be the case when the arrow is first shot. We will choose our final state to be the case when the arrow reaches its maximum height. We have the freedom to choose our initial time to be zero. We don't know when the arrow will reach its maximum height. We have the freedom to choose our intial x to be zero. We don't know the final height, but that's okay since we choose it to be the maximum height which we want to solve for. The problem tells us the initial x-component of the velocity is . At the maximum height the x-component of the velocity must be zero (this is one of the hidden givens). We record the givens and unknowns for the problem in . When you are solving kinematics problems its a good idea to make an empty table first, and then fill it out as you think about what is given and unknown.   Givens Table                         Pick equations of kinematics that have the unknown you want and the things you were given. It's worth noting that some combination of and is sufficient to solve all one dimensional kinematic problems. So if your really feeling stuck you can't go wrong combining them to fit your circumstances.  We don't know , which means we don't know . Since we don't know  , , , and aren't great choices. Looking at we see that it includes the variable we're solving for ( ) and we know the values of the rest of the variables in the equation. This means that is a good choice for this problem.    Algebraically\/symbolically solve for the unknown (preferably without plugging in numbers since that would take longer to write out)  Lets solve for the unknown symbollically.     Plug in the numbers with units so you can check the unit cancellations (helps detect errors in your algebra, such as forgetting to square)  Let's plug our values into the equation from the last step.      "
},
{
  "id": "table-1d-sing-obj-givens",
  "level": "2",
  "url": "sec-solv-sing-obj-1d-kin-probs.html#table-1d-sing-obj-givens",
  "type": "Table",
  "number": "4.2.1",
  "title": "Givens Table",
  "body": " Givens Table                      "
},
{
  "id": "ch-exercises-eqs-1d-kinematics",
  "level": "1",
  "url": "ch-exercises-eqs-1d-kinematics.html",
  "type": "Exercises",
  "number": "4.3",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises    Note that 5280 feet = 1 mile, and 1 inch = 2.54 centimeters = 0.0254 meters.  A car starts from rest at a stop sign. It accelerates at 4.0 meters per second squared for 6 seconds, coasts for 2 seconds, and then slows down at a rate of 3 meters per second squared for the next stop sign. How far apart (in meters) are the stop signs?      An airplane travels 0.175 miles down the runway before taking off. Assuming that it has constant acceleration, if it starts from rest and becomes airborne in 8 seconds, how fast (in meters per second) is it moving at takeoff?      Starting from rest, a boulder rolls down a hill with constant acceleration and travels 2.00 meters during the first second. What is the boulder's acceleration (in meters per second squared)?      A car sits in an entrance ramp to a freeway, waiting for a break in the traffic. The driver accelerates with constant acceleration along the ramp and onto the freeway. The car starts from rest, moves in a straight line, and has a speed of 45.0 miles per hour ( mph ) when it reaches the end of the 120.0 meter long ramp. How much time (in seconds) does it take the car to travel the length of the ramp?      One way to make lead balls for shot is to use a shot tower. Drops of molten lead are dropped from a height , and they solidify into round balls (due to surface tension) during a time as they fall. Assuming t = 4.20 seconds, what is the height , assuming negligible air resistance?      When jumping, a flea accelerates at an astounding , but over only the very short distance of 0.54 millimeters. After that, its legs have left the ground. If a flea jumps straight up, and if air resistance is neglected (a rather poor approximation in this situation), how high does the flea go above the ground?      You are part of a citizen's group evaluating the safety of a high school athletic program. To help judge the diving program you would like to know how fast a diver hits the water in the most complicated dive. The coach has his best diver perform for your group. The diver, after jumping from the high board, moves through the air with a constant acceleration of 9.8 meters per second squared. Later in the dive, she passes near a lower diving board which is 3.0 meters above the water. With your trusty stop watch, you determine that it took 0.20 seconds to enter the water from the time the diver passed the lower board. How fast was she going when she hit the water?    "
},
{
  "id": "ch-exercises-eqs-1d-kinematics-2",
  "level": "2",
  "url": "ch-exercises-eqs-1d-kinematics.html#ch-exercises-eqs-1d-kinematics-2",
  "type": "Exercise",
  "number": "4.3.1",
  "title": "",
  "body": "  Note that 5280 feet = 1 mile, and 1 inch = 2.54 centimeters = 0.0254 meters.  A car starts from rest at a stop sign. It accelerates at 4.0 meters per second squared for 6 seconds, coasts for 2 seconds, and then slows down at a rate of 3 meters per second squared for the next stop sign. How far apart (in meters) are the stop signs?   "
},
{
  "id": "ch-exercises-eqs-1d-kinematics-3",
  "level": "2",
  "url": "ch-exercises-eqs-1d-kinematics.html#ch-exercises-eqs-1d-kinematics-3",
  "type": "Exercise",
  "number": "4.3.2",
  "title": "",
  "body": "  An airplane travels 0.175 miles down the runway before taking off. Assuming that it has constant acceleration, if it starts from rest and becomes airborne in 8 seconds, how fast (in meters per second) is it moving at takeoff?   "
},
{
  "id": "ch-exercises-eqs-1d-kinematics-4",
  "level": "2",
  "url": "ch-exercises-eqs-1d-kinematics.html#ch-exercises-eqs-1d-kinematics-4",
  "type": "Exercise",
  "number": "4.3.3",
  "title": "",
  "body": "  Starting from rest, a boulder rolls down a hill with constant acceleration and travels 2.00 meters during the first second. What is the boulder's acceleration (in meters per second squared)?   "
},
{
  "id": "ch-exercises-eqs-1d-kinematics-5",
  "level": "2",
  "url": "ch-exercises-eqs-1d-kinematics.html#ch-exercises-eqs-1d-kinematics-5",
  "type": "Exercise",
  "number": "4.3.4",
  "title": "",
  "body": "  A car sits in an entrance ramp to a freeway, waiting for a break in the traffic. The driver accelerates with constant acceleration along the ramp and onto the freeway. The car starts from rest, moves in a straight line, and has a speed of 45.0 miles per hour ( mph ) when it reaches the end of the 120.0 meter long ramp. How much time (in seconds) does it take the car to travel the length of the ramp?   "
},
{
  "id": "ch-exercises-eqs-1d-kinematics-6",
  "level": "2",
  "url": "ch-exercises-eqs-1d-kinematics.html#ch-exercises-eqs-1d-kinematics-6",
  "type": "Exercise",
  "number": "4.3.5",
  "title": "",
  "body": "  One way to make lead balls for shot is to use a shot tower. Drops of molten lead are dropped from a height , and they solidify into round balls (due to surface tension) during a time as they fall. Assuming t = 4.20 seconds, what is the height , assuming negligible air resistance?   "
},
{
  "id": "ch-exercises-eqs-1d-kinematics-7",
  "level": "2",
  "url": "ch-exercises-eqs-1d-kinematics.html#ch-exercises-eqs-1d-kinematics-7",
  "type": "Exercise",
  "number": "4.3.6",
  "title": "",
  "body": "  When jumping, a flea accelerates at an astounding , but over only the very short distance of 0.54 millimeters. After that, its legs have left the ground. If a flea jumps straight up, and if air resistance is neglected (a rather poor approximation in this situation), how high does the flea go above the ground?   "
},
{
  "id": "ch-exercises-eqs-1d-kinematics-8",
  "level": "2",
  "url": "ch-exercises-eqs-1d-kinematics.html#ch-exercises-eqs-1d-kinematics-8",
  "type": "Exercise",
  "number": "4.3.7",
  "title": "",
  "body": "  You are part of a citizen's group evaluating the safety of a high school athletic program. To help judge the diving program you would like to know how fast a diver hits the water in the most complicated dive. The coach has his best diver perform for your group. The diver, after jumping from the high board, moves through the air with a constant acceleration of 9.8 meters per second squared. Later in the dive, she passes near a lower diving board which is 3.0 meters above the water. With your trusty stop watch, you determine that it took 0.20 seconds to enter the water from the time the diver passed the lower board. How fast was she going when she hit the water?   "
},
{
  "id": "sec-solv-multi-obj-1d-kin-probs",
  "level": "1",
  "url": "sec-solv-multi-obj-1d-kin-probs.html",
  "type": "Section",
  "number": "5.1",
  "title": "Solving Multi-object 1D Kinematic Problems",
  "body": " Solving Multi-object 1D Kinematic Problems  We've seen how to do single-object one dimensional kinematics problems. Another common, but slightly more complicated, class of problems is when there are two objects that meet or intersect at a certain time or a certain location. How do we solve for the meeting time or the meeting location? The basic idea behind how to solve multiobject kinematics problems is the same as the single object case, but each object has its own kinematic variables to describe its motion. For two objects we'll need a givens table with seven entries for each object (this gives fourteen variables in total).  Lets go over the recommended steps for solving a multi-object one dimensional kinematics problem by working an example. The evil Lex Luthor drops Lois Lane from the top of a 100.0m high cliff. Who comes to rescue her? Superman, of course! At the time Lois is dropped, Superman jumps from the bottom of the cliff with a super velocity of +50.0 m\/s, but he immediately allows gravity to take over during the rest of his jump (so that he doesn't smash into Lois that fast when he meets her). How long after Lois is dropped does Superman meet up with her?     Decide on givens and unknowns for both objects or axes (make a separate table for each). Break out , , , and separately instead of as and , because the two objects may have started at different coordinates or times.  The problem has choosen up as positive in the way that it has given Superman's velocity so lets stick with that. We choose the initial state to be the state of affiars when Lex Luther drops Lois and the final state to be the state of affairs when Superman meets Lois in the air. In the givens tables that follow kinematic variables with an L subscript correspond to Lois and kinematic variables with an S subscript correspond to Superman.   Lois's Givens Table Stage 1                        Supermans Givens Table Stage 1                         Circle unknowns that you know should come out equal between the two tables (for example, if two objects are supposed to intersect at a common time or a common position). We will call these shared unknowns.  We have choosen the inital time for both Lois and Superman to be at the same instant which we will choose to be the zero time. We also know that in order for Superman and Lois to meet in the final state they must be at the same place at the same time. Just by coincidence they also have the same acceleration. We now record these findings in updated givens tables. For increased accessibility we don't circle kinematic variables that come out equal between the two tables, but instead drop the subscripts L or S denoting which object the variable belongs to. This emphasizes that the variable is the same between the two obects.   Lois's Givens Table Stage 2                        Supermans Givens Table Stage 2                         For each table, pick one of the equations of kinematics that has the unknown you want and the things you were given. Keep in mind, unknowns that share the same value in both tables are easier to mathimatically eliminate, so prioritize what to include in the equation:   Include the givens and the unknown you are solving for.    Include unknowns that that share the same value in both tables.    If you have to, include nuisance unknowns that you are not solving (you shouldn't normally have to do this unless there is a separate way to find the nuisance unknowns).      doesn't include the variable we want to solve for so it's not a good choice. , , and have the variable we want to solve for but they also include which is different and unknown in both of the objects. This gives us three unknowns and only two equations so these are not good choices either. includes the variable we want to solve for and the only other unknown is which is a shared unknown between the objects. This gives us two unknowns and two equations which means we can solve for everything. So looks like the best choice for this problem.    Substitute one equation into the other to solve for one unknown. If necessary, backsubstitute into the other equation to solve the other unknown. It may help to substitute in givens that are zero, to make the algebra easier.  We start with the equations we choose. Plugging in zero values gives We want to solve for so we eliminated .     Plug in the numbers with units so you can check the unit cancellations (this helps detect errors in your algebra, such as forgetting to square).  Plugging in our values gives      "
},
{
  "id": "table-lois-givens-1",
  "level": "2",
  "url": "sec-solv-multi-obj-1d-kin-probs.html#table-lois-givens-1",
  "type": "Table",
  "number": "5.1.1",
  "title": "Lois’s Givens Table Stage 1",
  "body": " Lois's Givens Table Stage 1                      "
},
{
  "id": "table-superman-givens-1",
  "level": "2",
  "url": "sec-solv-multi-obj-1d-kin-probs.html#table-superman-givens-1",
  "type": "Table",
  "number": "5.1.2",
  "title": "Supermans Givens Table Stage 1",
  "body": " Supermans Givens Table Stage 1                      "
},
{
  "id": "table-lois-givens-2",
  "level": "2",
  "url": "sec-solv-multi-obj-1d-kin-probs.html#table-lois-givens-2",
  "type": "Table",
  "number": "5.1.3",
  "title": "Lois’s Givens Table Stage 2",
  "body": " Lois's Givens Table Stage 2                      "
},
{
  "id": "table-superman-givens-2",
  "level": "2",
  "url": "sec-solv-multi-obj-1d-kin-probs.html#table-superman-givens-2",
  "type": "Table",
  "number": "5.1.4",
  "title": "Supermans Givens Table Stage 2",
  "body": " Supermans Givens Table Stage 2                      "
},
{
  "id": "exercises-ch-multiobject-kinematics",
  "level": "1",
  "url": "exercises-ch-multiobject-kinematics.html",
  "type": "Exercises",
  "number": "5.2",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   Note that , and .     Just for the fun of it, you and a friend decide to enter the famous Tour de Minnesota bicycle race from Rochester to Duluth and then to St. Paul. You are riding along at a comfortable speed of 20 miles per hour when you see in your mirror that your friend is going to pass you at what you estimate to be a constant 30 miles per hour. You will, of course, take up the challenge and accelerate just as she passes you until you pass her. If you accelerate at a constant 0.250 miles per hour each second until you pass her, how long will she be ahead of you?      As a science project, you drop a watermelon off the top of the Empire State Building, 320.0 meters above the sidewalk. It so happens that Superman flies by at the instant you release the watermelon. Superman is headed straight down and maintains a constant speed of 33.0 meters per second. How fast is the watermelon going when it passes Superman?      Because of your technical background, you have been given a job as a student assistant in a University research laboratory that has been investigating possible accident avoidance systems for oil tankers. Your group is concerned about oil spills in the North Atlantic caused by a super tanker running into an iceberg. The group has been developing a new type of down-looking radar which can detect large icebergs. They are concerned about its rather short range of 2.0 miles. Your research director has told you that the radar signal travels at the speed of light which is 186,000 miles per second but once the signal arrives back at the ship it takes the computer 5.0 minutes to process the signal. Unfortunately, the super tankers are such huge ships that it takes a long time to turn them. Your job is to determine how much time would be available to turn the tanker to avoid a collision once the tanker detects an iceberg. A typical sailing speed for super tankers during the winter on the North Atlantic is about 15.0 miles per hour. Assume that the tanker is heading directly at an iceberg that is drifting at 5.0 miles per hour in the same direction that the tanker is going.      You have landed a summer job as the technical assistant to the director of an adventure movie shot locally. The script calls for a large package to be dropped onto the bed of a fast moving pick-up truck from a helicopter that is hovering above the road, out of view of the camera. The helicopter is 235 feet above the road, and the bed of the truck is 3.00 feet above the road. The truck is traveling down the road at 40.0 miles per hour. You must determine when to cue the assistant in the helicopter to drop the package so it lands in the truck. The director is paying $20,000 per hour for the chopper, so he wants you to do this successfully in one take.    "
},
{
  "id": "exercises-ch-multiobject-kinematics-3",
  "level": "2",
  "url": "exercises-ch-multiobject-kinematics.html#exercises-ch-multiobject-kinematics-3",
  "type": "Exercise",
  "number": "5.2.1",
  "title": "",
  "body": "  Just for the fun of it, you and a friend decide to enter the famous Tour de Minnesota bicycle race from Rochester to Duluth and then to St. Paul. You are riding along at a comfortable speed of 20 miles per hour when you see in your mirror that your friend is going to pass you at what you estimate to be a constant 30 miles per hour. You will, of course, take up the challenge and accelerate just as she passes you until you pass her. If you accelerate at a constant 0.250 miles per hour each second until you pass her, how long will she be ahead of you?   "
},
{
  "id": "exercises-ch-multiobject-kinematics-4",
  "level": "2",
  "url": "exercises-ch-multiobject-kinematics.html#exercises-ch-multiobject-kinematics-4",
  "type": "Exercise",
  "number": "5.2.2",
  "title": "",
  "body": "  As a science project, you drop a watermelon off the top of the Empire State Building, 320.0 meters above the sidewalk. It so happens that Superman flies by at the instant you release the watermelon. Superman is headed straight down and maintains a constant speed of 33.0 meters per second. How fast is the watermelon going when it passes Superman?   "
},
{
  "id": "exercises-ch-multiobject-kinematics-5",
  "level": "2",
  "url": "exercises-ch-multiobject-kinematics.html#exercises-ch-multiobject-kinematics-5",
  "type": "Exercise",
  "number": "5.2.3",
  "title": "",
  "body": "  Because of your technical background, you have been given a job as a student assistant in a University research laboratory that has been investigating possible accident avoidance systems for oil tankers. Your group is concerned about oil spills in the North Atlantic caused by a super tanker running into an iceberg. The group has been developing a new type of down-looking radar which can detect large icebergs. They are concerned about its rather short range of 2.0 miles. Your research director has told you that the radar signal travels at the speed of light which is 186,000 miles per second but once the signal arrives back at the ship it takes the computer 5.0 minutes to process the signal. Unfortunately, the super tankers are such huge ships that it takes a long time to turn them. Your job is to determine how much time would be available to turn the tanker to avoid a collision once the tanker detects an iceberg. A typical sailing speed for super tankers during the winter on the North Atlantic is about 15.0 miles per hour. Assume that the tanker is heading directly at an iceberg that is drifting at 5.0 miles per hour in the same direction that the tanker is going.   "
},
{
  "id": "exercises-ch-multiobject-kinematics-6",
  "level": "2",
  "url": "exercises-ch-multiobject-kinematics.html#exercises-ch-multiobject-kinematics-6",
  "type": "Exercise",
  "number": "5.2.4",
  "title": "",
  "body": "  You have landed a summer job as the technical assistant to the director of an adventure movie shot locally. The script calls for a large package to be dropped onto the bed of a fast moving pick-up truck from a helicopter that is hovering above the road, out of view of the camera. The helicopter is 235 feet above the road, and the bed of the truck is 3.00 feet above the road. The truck is traveling down the road at 40.0 miles per hour. You must determine when to cue the assistant in the helicopter to drop the package so it lands in the truck. The director is paying $20,000 per hour for the chopper, so he wants you to do this successfully in one take.   "
},
{
  "id": "sec-2d-pos-vel-acc",
  "level": "1",
  "url": "sec-2d-pos-vel-acc.html",
  "type": "Section",
  "number": "6.1",
  "title": "Position, velocity, and Acceleration",
  "body": " Position, velocity, and Acceleration   We defined position, displacement, velocity, and acceleration in , but we only looked at their x-components. For a refresher on these definitions please see the previously mentioned section. In this chapter we'll look at multidimensional kinematics, so we can't ignore the fact that these vectors have y- and z-components as well.  As we discussed in we can decompose vectors into x-, y-, and z-components. We also know that vectors are equal if and only if their components are equal. For example, we know that because the x-components are not equal.    Position    The x,y, and z components of position are     Position is We can also write the position out in terms of its components Setting these equal to each other we get Since vectors are equal if and only if their components are equal, the x-component of position is the y-component of position is and the z-component of position is       Displacement    The x,y, and z components of displacement are     Displacement is We can also write the position out in terms of its components Setting these equal to each other we get Since vectors are equal if and only if their components are equal, the x-component of displacement is the y-component of displacement is and the z-component of displacement is       Velocity    The x,y, and z components of the average velocity are     The average velocity is We can also write the average velocity out in terms of its components Setting these equal to each other we get Since vectors are equal if and only if their components are equal, the x-component of the average velocity is the y-component of average velocity is and the z-component of average velocity is       Acceleration    The x,y, and z components of the average acceleration are     The average acceleration is We can also write the average acceleration out in terms of its components Setting these equal to each other we get Since vectors are equal if and only if their components are equal, the x-component of the average velocity is the y-component of average velocity is and the z-component of average velocity is      "
},
{
  "id": "thm-comps-of-pos",
  "level": "2",
  "url": "sec-2d-pos-vel-acc.html#thm-comps-of-pos",
  "type": "Theorem",
  "number": "6.1.1",
  "title": "",
  "body": "  The x,y, and z components of position are     Position is We can also write the position out in terms of its components Setting these equal to each other we get Since vectors are equal if and only if their components are equal, the x-component of position is the y-component of position is and the z-component of position is    "
},
{
  "id": "thm-comps-of-displacement",
  "level": "2",
  "url": "sec-2d-pos-vel-acc.html#thm-comps-of-displacement",
  "type": "Theorem",
  "number": "6.1.2",
  "title": "",
  "body": "  The x,y, and z components of displacement are     Displacement is We can also write the position out in terms of its components Setting these equal to each other we get Since vectors are equal if and only if their components are equal, the x-component of displacement is the y-component of displacement is and the z-component of displacement is    "
},
{
  "id": "thm-comps-of-avg-vel",
  "level": "2",
  "url": "sec-2d-pos-vel-acc.html#thm-comps-of-avg-vel",
  "type": "Theorem",
  "number": "6.1.3",
  "title": "",
  "body": "  The x,y, and z components of the average velocity are     The average velocity is We can also write the average velocity out in terms of its components Setting these equal to each other we get Since vectors are equal if and only if their components are equal, the x-component of the average velocity is the y-component of average velocity is and the z-component of average velocity is    "
},
{
  "id": "thm-comps-of-avg-acc",
  "level": "2",
  "url": "sec-2d-pos-vel-acc.html#thm-comps-of-avg-acc",
  "type": "Theorem",
  "number": "6.1.4",
  "title": "",
  "body": "  The x,y, and z components of the average acceleration are     The average acceleration is We can also write the average acceleration out in terms of its components Setting these equal to each other we get Since vectors are equal if and only if their components are equal, the x-component of the average velocity is the y-component of average velocity is and the z-component of average velocity is    "
},
{
  "id": "exercises-ch-2d-kinematic-defs",
  "level": "1",
  "url": "exercises-ch-2d-kinematic-defs.html",
  "type": "Exercises",
  "number": "6.2",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises    A boat is sailing on the lake. At seconds the boat is located at meters and has a velocity of meters per second. Later at seconds the boat is located at meters and has an x-component of velocity equal to meters per second. What is the average velocity and average acceleration of the boat?    "
},
{
  "id": "exercises-ch-2d-kinematic-defs-2",
  "level": "2",
  "url": "exercises-ch-2d-kinematic-defs.html#exercises-ch-2d-kinematic-defs-2",
  "type": "Exercise",
  "number": "6.2.1",
  "title": "",
  "body": "  A boat is sailing on the lake. At seconds the boat is located at meters and has a velocity of meters per second. Later at seconds the boat is located at meters and has an x-component of velocity equal to meters per second. What is the average velocity and average acceleration of the boat?   "
},
{
  "id": "sec-deriv-2d-kin-eqs",
  "level": "1",
  "url": "sec-deriv-2d-kin-eqs.html",
  "type": "Section",
  "number": "7.1",
  "title": "Deriving 2D Kinematic Equations",
  "body": " Deriving 2D Kinematic Equations  In general, acceleration is a function of time. However, in many situations we can approximate the acceleration as a constant. Because this approximation is made frequently, we will solve in advance for velocity and position when acceleration is constant. By definition Now two vectors are equal if and only if all their components are equal. This gives an equation for each dimension. Since we are assuming the acceleration is constant , and are constant as well. In addition and . Then the equation we got from equating the -component is same equation which justifies the kinematic equations in . Similarly the equation we got from equating the -components is the same as the equation we got from equating the -components, just with all the subscripts replaced with . So for each equation in there is an equivalent for the -dimension which replaces the subscript with .  To recap, when acceleration is constant we have the following kinematic equations for : , as well as the following kinematic equations for :   What's the takeaway? When acceleration is constant the one dimensional kinematic equations can be applied to each individual dimension.  "
},
{
  "id": "sec-projectile-motion",
  "level": "1",
  "url": "sec-projectile-motion.html",
  "type": "Section",
  "number": "7.2",
  "title": "Projectile Motion",
  "body": " Projectile Motion  Projectile motion is the motion an object undergoes when the only force acting on it is gravity. This excludes self propulsion, as well as air resistance. In textbook physics problems that take place near the surface of a planet, projectile motion is often treated as a hidden given. Near the surface of the Earth only gravity acts on an object undergoing projectile motion so we have and assuming up is the positive -direction.  "
},
{
  "id": "sec-solv-2d-kin-probs",
  "level": "1",
  "url": "sec-solv-2d-kin-probs.html",
  "type": "Section",
  "number": "7.3",
  "title": "Solving 2D Kinematic Problems",
  "body": " Solving 2D Kinematic Problems  Lets go over the recommended steps for solving a two dimensional kinematics problem by working an example. A tennis player hits the tennis ball 2.0 meters above the ground. The ball's initial speed is 20.0 meters per second, directed at 5.0 degrees above the horizontal. The distance to the net is 7.0 meters, and the net is 1.0 meter high. Does the ball clear the net, and if so, how high is the ball when it passes over the net?   The diagram shows a two-dimensional coordinate system with a vertical axis on the left and a horizontal axis along the bottom. The axes include arrowheads indicating positive directions: upward for the vertical axis and to the right for the horizontal axis. A small black point representing the tennis ball is located partway up the vertical axis. The height of the ball is labeled 2 meters. From this point, a solid arrow representing the inital velocity extends upward and to the right at a shallow angle. A dashed horizontal line extends from the same point directly to the right, forming a right-triangle relationship with the angled arrow. A curved arc near the angled arrow marks the launch angle. The angled arrow is labeled with a speed of 20 meters per second, and the arc is labeled 5 degrees. In the middle of the horizonal axis there is a vertical black line segment representing the net. The height of the net is labeled 1 meter. The distance from the ball to the net is labeled 7 meters.   Projectile motion diagram showing a point launched at 20 meters per second at a 5 degree angle with labeled distances and heights.    Typical solution steps: The setup for the problem is nearly identical to the setup for a multi-object kinematics problem.   Break any given vectors (like velocity vectors) into and components.  The -component of the intial velocity is and the -component of the intial velocity is     List all the -givens and unknowns in one table. List all the -givens and unknowns in a second table.  We want to analyze what happens at the net so lets make the net our final point. Because , . Since the ball will definitely reach the net.   givens table                        givens table                         Circle the unknowns that are equal between the two tables (usually and ). For increased accessibility we don't circle kinematic variables that come out equal between the two tables in these notes, but instead drop the subscripts denoting which object the variable belongs to since it is equal in both.   and are equal between the two tables so we've dropped any or subscripts in and .    Then pick the best equation for the -givens, and, separately, pick the best equation for the -givens. (You will frequently wind up solving one equation for time, and subbing time back into the other equation.)  For the -component we pick the following equation This is a good choice because it contains which we want to solve for but not which we don't know. It contains which we don't know but is the only unknown in the givens table so we can eliminate it with our -component equation. For the -component we pick the following equation This is a good choice because we know everything else except     Solve the algebra.  Now we plug in all the zero values and solve for in the -component equation. This gives a symbolic solution for so we can treat it as a known and use it to solve for . Considering this and pluggin in all the zero values is already a symbolic solution for . Now lets plug in numbers   so the ball clears the net.     "
},
{
  "id": "fig-eq-2d-kin-ex-prob",
  "level": "2",
  "url": "sec-solv-2d-kin-probs.html#fig-eq-2d-kin-ex-prob",
  "type": "Figure",
  "number": "7.3.1",
  "title": "",
  "body": " The diagram shows a two-dimensional coordinate system with a vertical axis on the left and a horizontal axis along the bottom. The axes include arrowheads indicating positive directions: upward for the vertical axis and to the right for the horizontal axis. A small black point representing the tennis ball is located partway up the vertical axis. The height of the ball is labeled 2 meters. From this point, a solid arrow representing the inital velocity extends upward and to the right at a shallow angle. A dashed horizontal line extends from the same point directly to the right, forming a right-triangle relationship with the angled arrow. A curved arc near the angled arrow marks the launch angle. The angled arrow is labeled with a speed of 20 meters per second, and the arc is labeled 5 degrees. In the middle of the horizonal axis there is a vertical black line segment representing the net. The height of the net is labeled 1 meter. The distance from the ball to the net is labeled 7 meters.   Projectile motion diagram showing a point launched at 20 meters per second at a 5 degree angle with labeled distances and heights.   "
},
{
  "id": "table-2d-kin-ex-x-givens",
  "level": "2",
  "url": "sec-solv-2d-kin-probs.html#table-2d-kin-ex-x-givens",
  "type": "Table",
  "number": "7.3.2",
  "title": "<span class=\"process-math\">\\(x\\)<\/span> givens table",
  "body": " givens table                      "
},
{
  "id": "table-2d-kin-ex-y-givens",
  "level": "2",
  "url": "sec-solv-2d-kin-probs.html#table-2d-kin-ex-y-givens",
  "type": "Table",
  "number": "7.3.3",
  "title": "<span class=\"process-math\">\\(y\\)<\/span> givens table",
  "body": " givens table                      "
},
{
  "id": "exercises-ch-eqs-of-2d-kinematics",
  "level": "1",
  "url": "exercises-ch-eqs-of-2d-kinematics.html",
  "type": "Exercises",
  "number": "7.4",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   Note that .     While on a vacation to Kenya, you visit the port city of Mombassa on the Indian Ocean. On the coast you find an old Portuguese fort probably built in the 16th century. Large stone walls rise vertically from the shore to protect the fort from cannon fire from pirate ships. Walking around on the ramparts, you find the fort's cannons mounted such that they fire horizontally out of holes near the top of the walls facing the ocean. Leaning out of one of these gun holes, you drop a rock which hits the ocean 3.0 seconds later. You wonder how close a pirate ship would have to sail to the fort to be in range of the fort's cannon? Of course you realize that the range depends on the velocity that the cannonball leaves the cannon. That muzzle velocity depends, in turn, on how much gunpowder was loaded into the cannon.   Calculate the muzzle velocity necessary to hit a pirate ship 300.0 meters from the base of the fort.    One of the cannons is crooked, and fires at 5.0 degrees above horizontal instead. What different muzzle velocity does this one need to hit the same ship 300.0 meters away?         You are a member of a citizen's committee investigating safety in the high school sports program. You are interested in knee damage to athletes participating in the long jump (sometimes called the broad jump). The coach has her best long jumper demonstrate the event for you. He runs down the track and, at the take-off point, jumps into the air at an angle of 30.0 degrees from the horizontal. He comes down in a sand pit at the same level as the track 26.0 feet away from his take-off point. With what velocity (both magnitude and direction) did he hit the ground?      A projectile is fired over flat ground, with an initial velocity of magnitude at angle above horizontal. Calculate the height of the projectile at the peak of its flight, in terms of the symbols and ?      A projectile is fired over flat ground, with an initial velocity of magnitude at angle above horizontal. When the projectile hits the ground, calculate the magnitude of its final velocity vector, in terms of the symbols and ?      A projectile is fired over flat ground, with an initial velocity of magnitude at angle above horizontal.   When the projectile hits the ground, calculate what its total horizontal displacement has been, in terms of the symbols and ?    It is sometimes useful to write our equation with symbolic givens, like in these problems, because then the person we give our equation to can plug in any given value she wants. In particular, this is good for optimization problems, where the person can in fact vary the given and test multiple results. In this case, the given can even be treated as a variable for the purposes of optimization. From your result in , calculus allows us to vary the value of such that the total horizontal displacement is a maximum (extremum). We do this by taking the derivative of the equation with respect to the given that you are varying, and setting the derivative to zero. Solve that equation for the given that you are varying ( ), and thus calculate the best to maximize the range of the projectile.         You have a summer job with an insurance company and have been asked to help with the investigation of a tragic \"accident\". When you visit the scene, you see a road running straight down a hill which has a slope of 10.0 degrees below horizontal. At the bottom of the hill, the bridge is out, and the road continues downhill right up to the cliff edge. Then, the cliff has a vertical drop of 400.0 feet to the horizontal ground below where a car is wrecked 30.0 feet from the base of the cliff. Was it possible that the driver fell asleep at the wheel and simply drove over the cliff? After looking pensive, your boss tells you to calculate the speed of the car as it left the top of the cliff. She reminds you to be careful to write down all of your assumptions so she can evaluate the applicability of the calculation to this situation. Obviously, she suspects foul play.      Because of your knowledge of physics, you have been hired as a technical adviser on a new action movie. In one scene, the hero pursues the villain up to the top of a bungee jump. The villain creates a diversion by dropping a bottle filled with deadly gas. The script calls for the hero to quickly strap on a 100.0 foot bungee cord and jump straight down to grab the bottle out of the air just as the bungee cord begins to stretch. Your job is to determine the feasibility of the stunt by finding the initial speed with which the hero needs to jump downward to catch the bottle. You estimate that the hero can react to the villain's dropping the bottle by strapping on the bungee cord and jumping in 2.0 seconds.    "
},
{
  "id": "exercises-ch-eqs-of-2d-kinematics-3",
  "level": "2",
  "url": "exercises-ch-eqs-of-2d-kinematics.html#exercises-ch-eqs-of-2d-kinematics-3",
  "type": "Exercise",
  "number": "7.4.1",
  "title": "",
  "body": "  While on a vacation to Kenya, you visit the port city of Mombassa on the Indian Ocean. On the coast you find an old Portuguese fort probably built in the 16th century. Large stone walls rise vertically from the shore to protect the fort from cannon fire from pirate ships. Walking around on the ramparts, you find the fort's cannons mounted such that they fire horizontally out of holes near the top of the walls facing the ocean. Leaning out of one of these gun holes, you drop a rock which hits the ocean 3.0 seconds later. You wonder how close a pirate ship would have to sail to the fort to be in range of the fort's cannon? Of course you realize that the range depends on the velocity that the cannonball leaves the cannon. That muzzle velocity depends, in turn, on how much gunpowder was loaded into the cannon.   Calculate the muzzle velocity necessary to hit a pirate ship 300.0 meters from the base of the fort.    One of the cannons is crooked, and fires at 5.0 degrees above horizontal instead. What different muzzle velocity does this one need to hit the same ship 300.0 meters away?      "
},
{
  "id": "exercises-ch-eqs-of-2d-kinematics-4",
  "level": "2",
  "url": "exercises-ch-eqs-of-2d-kinematics.html#exercises-ch-eqs-of-2d-kinematics-4",
  "type": "Exercise",
  "number": "7.4.2",
  "title": "",
  "body": "  You are a member of a citizen's committee investigating safety in the high school sports program. You are interested in knee damage to athletes participating in the long jump (sometimes called the broad jump). The coach has her best long jumper demonstrate the event for you. He runs down the track and, at the take-off point, jumps into the air at an angle of 30.0 degrees from the horizontal. He comes down in a sand pit at the same level as the track 26.0 feet away from his take-off point. With what velocity (both magnitude and direction) did he hit the ground?   "
},
{
  "id": "exercises-ch-eqs-of-2d-kinematics-5",
  "level": "2",
  "url": "exercises-ch-eqs-of-2d-kinematics.html#exercises-ch-eqs-of-2d-kinematics-5",
  "type": "Exercise",
  "number": "7.4.3",
  "title": "",
  "body": "  A projectile is fired over flat ground, with an initial velocity of magnitude at angle above horizontal. Calculate the height of the projectile at the peak of its flight, in terms of the symbols and ?   "
},
{
  "id": "exercises-ch-eqs-of-2d-kinematics-6",
  "level": "2",
  "url": "exercises-ch-eqs-of-2d-kinematics.html#exercises-ch-eqs-of-2d-kinematics-6",
  "type": "Exercise",
  "number": "7.4.4",
  "title": "",
  "body": "  A projectile is fired over flat ground, with an initial velocity of magnitude at angle above horizontal. When the projectile hits the ground, calculate the magnitude of its final velocity vector, in terms of the symbols and ?   "
},
{
  "id": "exercises-ch-eqs-of-2d-kinematics-7",
  "level": "2",
  "url": "exercises-ch-eqs-of-2d-kinematics.html#exercises-ch-eqs-of-2d-kinematics-7",
  "type": "Exercise",
  "number": "7.4.5",
  "title": "",
  "body": "  A projectile is fired over flat ground, with an initial velocity of magnitude at angle above horizontal.   When the projectile hits the ground, calculate what its total horizontal displacement has been, in terms of the symbols and ?    It is sometimes useful to write our equation with symbolic givens, like in these problems, because then the person we give our equation to can plug in any given value she wants. In particular, this is good for optimization problems, where the person can in fact vary the given and test multiple results. In this case, the given can even be treated as a variable for the purposes of optimization. From your result in , calculus allows us to vary the value of such that the total horizontal displacement is a maximum (extremum). We do this by taking the derivative of the equation with respect to the given that you are varying, and setting the derivative to zero. Solve that equation for the given that you are varying ( ), and thus calculate the best to maximize the range of the projectile.      "
},
{
  "id": "exercises-ch-eqs-of-2d-kinematics-8",
  "level": "2",
  "url": "exercises-ch-eqs-of-2d-kinematics.html#exercises-ch-eqs-of-2d-kinematics-8",
  "type": "Exercise",
  "number": "7.4.6",
  "title": "",
  "body": "  You have a summer job with an insurance company and have been asked to help with the investigation of a tragic \"accident\". When you visit the scene, you see a road running straight down a hill which has a slope of 10.0 degrees below horizontal. At the bottom of the hill, the bridge is out, and the road continues downhill right up to the cliff edge. Then, the cliff has a vertical drop of 400.0 feet to the horizontal ground below where a car is wrecked 30.0 feet from the base of the cliff. Was it possible that the driver fell asleep at the wheel and simply drove over the cliff? After looking pensive, your boss tells you to calculate the speed of the car as it left the top of the cliff. She reminds you to be careful to write down all of your assumptions so she can evaluate the applicability of the calculation to this situation. Obviously, she suspects foul play.   "
},
{
  "id": "exercises-ch-eqs-of-2d-kinematics-9",
  "level": "2",
  "url": "exercises-ch-eqs-of-2d-kinematics.html#exercises-ch-eqs-of-2d-kinematics-9",
  "type": "Exercise",
  "number": "7.4.7",
  "title": "",
  "body": "  Because of your knowledge of physics, you have been hired as a technical adviser on a new action movie. In one scene, the hero pursues the villain up to the top of a bungee jump. The villain creates a diversion by dropping a bottle filled with deadly gas. The script calls for the hero to quickly strap on a 100.0 foot bungee cord and jump straight down to grab the bottle out of the air just as the bungee cord begins to stretch. Your job is to determine the feasibility of the stunt by finding the initial speed with which the hero needs to jump downward to catch the bottle. You estimate that the hero can react to the villain's dropping the bottle by strapping on the bungee cord and jumping in 2.0 seconds.   "
},
{
  "id": "sec-obs-and-ref-frame",
  "level": "1",
  "url": "sec-obs-and-ref-frame.html",
  "type": "Section",
  "number": "8.1",
  "title": "Observers and Reference Frames",
  "body": " Observers and Reference Frames  In the context of science what is an observer? Does an observer have to be a person or can it be an inanimate object like a camera? In newtonian physics an observer is any real or hypothetical entity or object, that could observe a physical phenomenon if it exist(s\/ed). Observers could be anthropomorphized as self centered because they view themselves as the center of the universe. That is to say, every observer has a coordinate system with themselves at the origin by which the positions of everything else in the universe relative to that observer can be taken. Such a coordinate system belonging to an observer is called that observer's reference frame . Examining a physical phenomenon in an observer's reference frame is the same a viewing that phenomenon from the observers perspective.  "
},
{
  "id": "sec-obs-and-ref-frame-2",
  "level": "2",
  "url": "sec-obs-and-ref-frame.html#sec-obs-and-ref-frame-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "observer reference frame "
},
{
  "id": "sec-rel-position",
  "level": "1",
  "url": "sec-rel-position.html",
  "type": "Section",
  "number": "8.2",
  "title": "Relative Position",
  "body": " Relative Position  Imagine there are two objservers and looking at the same object as it moves. Observer ascribes a postion to the object, and a position to observer . What position does observer ascribe to the object?   The diagram shows an x-y coordinate plane with the vertical axis extending upward from the origin and the horizontal axis extending to the right. Three points are plotted. Point A is located at the lower left near the origin, and represents observer A's location. Point B is located above and to the right of A. Point B represents the location of observer B. Point C is located farther up and to the right compared to the other two points and represents the location of object C. A vector extends from A to B, and is labeled . A second vector extends from B to C, and is labeled . A third vector extends from A to C, and is labeled .   Diagram showing locations of observers A, B, and C on an x-y coordinate plane with vectors between them.    As can be seen from , if we go from observer to observer , then from to the object then we have traveled from observer to the object. Then we must have Solving this for we see that the observer must ascribe a position to the object. The position of an object\/location observered from the perspective of another observer is the the relative position of the object with respect to that observer. In our derivation above is the relative position of the object with respect to . If and then   Note that if one or both objects are in motion the relative position can change over time.    Your home is 5 kilometers at an angle of 30 degrees north away from the Sante Fe campus. Your friend's home is 12 kilometers at angle 45 degees west of north away from the Sante Fe campus. What is the distance between your homes?    Let the position of your home be Let the position of your friends home be      "
},
{
  "id": "fig-rel-position-diagram",
  "level": "2",
  "url": "sec-rel-position.html#fig-rel-position-diagram",
  "type": "Figure",
  "number": "8.2.1",
  "title": "",
  "body": " The diagram shows an x-y coordinate plane with the vertical axis extending upward from the origin and the horizontal axis extending to the right. Three points are plotted. Point A is located at the lower left near the origin, and represents observer A's location. Point B is located above and to the right of A. Point B represents the location of observer B. Point C is located farther up and to the right compared to the other two points and represents the location of object C. A vector extends from A to B, and is labeled . A second vector extends from B to C, and is labeled . A third vector extends from A to C, and is labeled .   Diagram showing locations of observers A, B, and C on an x-y coordinate plane with vectors between them.   "
},
{
  "id": "sec-rel-position-4",
  "level": "2",
  "url": "sec-rel-position.html#sec-rel-position-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "relative position "
},
{
  "id": "sec-rel-position-5",
  "level": "2",
  "url": "sec-rel-position.html#sec-rel-position-5",
  "type": "Example",
  "number": "8.2.2",
  "title": "",
  "body": "  Your home is 5 kilometers at an angle of 30 degrees north away from the Sante Fe campus. Your friend's home is 12 kilometers at angle 45 degees west of north away from the Sante Fe campus. What is the distance between your homes?    Let the position of your home be Let the position of your friends home be     "
},
{
  "id": "sec-rel-vel-alg",
  "level": "1",
  "url": "sec-rel-vel-alg.html",
  "type": "Section",
  "number": "8.3",
  "title": "Relative Velocity",
  "body": " Relative Velocity   "
},
{
  "id": "sec-solving-rel-vel-probs",
  "level": "1",
  "url": "sec-solving-rel-vel-probs.html",
  "type": "Section",
  "number": "8.4",
  "title": "Solving Relative Velocity Problems",
  "body": " Solving Relative Velocity Problems  Lets go over the recommended steps for solving a relative velocity problem by working an example. An airplane has an airspeed of 250.0 kilometers per hour. There is a crosswind of 80.0 kilometers per hour blowing directly towards the northwest.   What direction (in degrees north of east) must the plane be pointed to fight the wind and head due north?    Determine the groundspeed of the airplane.     Here are the steps for solving the problem.   Decide whether or not the problem is is a relative velocity problem. Check whether the velocity of the target object is being observed or measured from two different frames of reference. (Note that if it is a combination relative velocity and kinematics problem, you typically solve the velocity first, then use the velocity to solve the kinematics part of the problem.)  The problem gives the airspeed of the plane which is the plane's speed relative to the air, and ask a question about the planes motion with respect to the ground. There are two different reference frames, the air and the ground. So this is a relative velocity problem.    Decide on which components of the three vectors ( , , and ) are givens and unknowns. (You'll need to use trig. to calculate the components symbolically if they gave you magnitudes or directions.) I usually write the vector x-components and y-components in columns, to show how and add up to give If a component is still unknown, put a variable (usually with a subscript) to represent the unknown value. You might want to keep a list telling you which variable values are givens and which are unknowns.  For this problem choose be the Earth, be the air, and be the plane. Then is the velocity of the plane with respect to the air, is the velocity of the air relative to the earth, and is the velocity of the plane with respect to the ground. The are givens are where is the angle of with respect to the -axis, and because part one of the question says the plane will be headed north relative to the ground. The unknowns are and . Using the form of the relative velocity equation given in equation and plugging in our values gives     For each of the equations you picked, solve for the unknowns. This is now just a high school algebra problem, as if solving for and in two simultaneous equations. So, algebraically solve one component's equation, then substitute the result into the other to solve for one of the unknowns. Often, the unknowns are magnitudes or directions, not just pure - or - components. Backsubstitute if necessary.  The -component of the equation is We can use this equation to solve for . This gives a symbolic solution for part 1 of the question. For part 2, since we just solved for we can you use it to solve for . is the total ground speed of the plane since . The -component of the equation is which is already the symbolic solution for .    Plug in the numbers with units so you can get your final answer and check the unit cancellations (helps detect errors in your algebra, such as forgetting to square)  Pluggin in numbers gives       "
},
{
  "id": "exercises-ch-rel-velocity",
  "level": "1",
  "url": "exercises-ch-rel-velocity.html",
  "type": "Exercises",
  "number": "8.5",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises    An aircraft is skimming the runway as it comes in for a landing in a heavy storm. The aircraft has a velocity of 30.0 meters per second at 20.0 degrees south of east when there is no wind blowing. Then, a gust of wind of 20.0 meters per second due East (relative to the Earth) suddenly blows the aircraft towards the edge of the runway. What is the resultant velocity of the aircraft relative to the Earth, during the gust?      A second aircraft is approaching a different runway as it comes in for a landing an hour later, when the wind is different. The aircraft wishes to land heading due eastwards on the runway. The aircraft's airspeed indicator shows 30.0 meters per second (the airspeed has to be fast enough to prevent a stall, but the velocity as indicated by GPS is something different). The wind is currently blowing 10.0 meters per second to the southeast (relative to the Earth).    What direction (in degrees) will the pilot have to aim the nose of the plane in order to fight the wind and keep the plane on an eastbound path?    What is the magnitude of the velocity of the plane as indicated by GPS, instead of the airspeed indicator?         The diagram illustrates a top down schematic of a river crossing scenario. Point A is located on the lower riverbank, and point C is directly across from A on the upper bank, forming a vertical reference line representing the river's width. Point B lies downstream from C (to the right) along the upper bank, forming a diagonal line from A to B. The angle between the diagonal line from A to B and the lower bank is . The vertical distance from A to C is labeled , and the horizontal distance from C to B is labeled . A vector originating at A is drawn at an angle to the left of the straight-across direction, representing the kayaker's velocity relative to the river. The rightward velocity of the river with respect to the ground is .   Diagram showing a kayaker planing to crossing a river along a diagonal straight path.    A kayaker wishes to cross a river directly from point to point , as shown in the figure (this most direct path will, of course, save more of the kayaker's strength). The width of the river, (from to ) is 200.0 meters, the distance (from to ) is 150 meters, and the speed of the eastbound current in the river is 1.39 meters per second. Suppose that the kayaker has aimed her boat at degrees to the left of straight across, as shown in .    To paddle directly from to , at what angle , relative to the shore, will the kayaker actually travel along (despite being aimed in a different direction)?    To paddle directly from to , what speed, relative to the water, must the kayaker paddle at?    To paddle directly from to , what speed, relative to the shore, will the kayaker have?        In the river crossing lab, we solved the unknowns in the relative velocity problem by performing algebra on the vector components. But it can also be solved using graphical vector addition plus geometry. Here's how:  In relative velocity problems, drawing a picture of the platform velocity vector plus the target velocity relative to the platform creates a drawing of a triangle, where each side is the length of one of the velocity vectors. (In the case where this triangle comes out with at least one vertical or horizontal side, it is pretty easy to solve all the sides and angles of the triangle by adding up the components of the vectors. It is especially easy if the triangle is a right triangle.)  However, the triangle sometimes has no vertical or horizontal sides, and is often not a right triangle, unlike most other diagrams we encounter in physics. So, this is one case where adding up the vectors tip-to-tail on a sketch (then using the cosine law and sine law for the sides and angles of a non-right triangle) can be useful for solving for the unknown velocities. In the following problem, drawing out the vectors yields a non-right triangle to solve:  The pilot of a Boeing 737 files a flight plan with the tower; the flight plan states that he should fly to a city located at 35.00 degrees south of west. The Boeing 737 is capable of cruising with an airspeed of 874.0 kilometers per hour relative to the air (i.e., the speed in a zero wind). However, there is a crosswind blowing with a magnitude of 110.00 kilometers per hour at 20.00 degrees east of south, boosting the plane's velocity relative to the ground. You have to calculate which direction to aim the plane to compensate for the direction of the wind…    Draw a graphical sketch of how the velocity of the air plus the plane's velocity relative to the air equals the plane's velocity as tracked by ground radar. These three velocities should form a triangle on your sketch; then you can compute the three angles in terms of the unknown angle at which the plane is aimed. (You will find that one of the angles inside the triangle doesn't even involve the unknown, so is instantly calculable.) Then, label the two sides of the triangle that have known magnitudes.    Use the cosine law relating the lengths of the three sides of a non-right triangle ( ) to calculate the magnitude of the unknown side. This should be solvable since you know one angle and two sides. (But which one is which? If you don't remember the definition of which angle to use relative to the sides a, b, and c, just look up any explanation of the cosine law.) Which unknown velocity's magnitude did we just calculate here?    Use the cosine law or the sine law ( ) to calculate one of the other angles inside the triangle. (N.B. When you use cosine or sine law, be aware that your calculator will often only tell you the solution less than 90 degrees even if the real answer is greater than 90 degrees, so only trust the answer for the narrower angle. You may recall that this issue is called “quadrant ambiguity.”) Use this information to determine the compass bearing (in degrees clockwise from north) in which the pilot must aim the plane (so as to compensate for the direction of the wind and follow the flight plan).      "
},
{
  "id": "exercises-ch-rel-velocity-2",
  "level": "2",
  "url": "exercises-ch-rel-velocity.html#exercises-ch-rel-velocity-2",
  "type": "Exercise",
  "number": "8.5.1",
  "title": "",
  "body": "  An aircraft is skimming the runway as it comes in for a landing in a heavy storm. The aircraft has a velocity of 30.0 meters per second at 20.0 degrees south of east when there is no wind blowing. Then, a gust of wind of 20.0 meters per second due East (relative to the Earth) suddenly blows the aircraft towards the edge of the runway. What is the resultant velocity of the aircraft relative to the Earth, during the gust?   "
},
{
  "id": "exercises-ch-rel-velocity-3",
  "level": "2",
  "url": "exercises-ch-rel-velocity.html#exercises-ch-rel-velocity-3",
  "type": "Exercise",
  "number": "8.5.2",
  "title": "",
  "body": "  A second aircraft is approaching a different runway as it comes in for a landing an hour later, when the wind is different. The aircraft wishes to land heading due eastwards on the runway. The aircraft's airspeed indicator shows 30.0 meters per second (the airspeed has to be fast enough to prevent a stall, but the velocity as indicated by GPS is something different). The wind is currently blowing 10.0 meters per second to the southeast (relative to the Earth).    What direction (in degrees) will the pilot have to aim the nose of the plane in order to fight the wind and keep the plane on an eastbound path?    What is the magnitude of the velocity of the plane as indicated by GPS, instead of the airspeed indicator?     "
},
{
  "id": "exercises-ch-rel-velocity-4",
  "level": "2",
  "url": "exercises-ch-rel-velocity.html#exercises-ch-rel-velocity-4",
  "type": "Exercise",
  "number": "8.5.3",
  "title": "",
  "body": "   The diagram illustrates a top down schematic of a river crossing scenario. Point A is located on the lower riverbank, and point C is directly across from A on the upper bank, forming a vertical reference line representing the river's width. Point B lies downstream from C (to the right) along the upper bank, forming a diagonal line from A to B. The angle between the diagonal line from A to B and the lower bank is . The vertical distance from A to C is labeled , and the horizontal distance from C to B is labeled . A vector originating at A is drawn at an angle to the left of the straight-across direction, representing the kayaker's velocity relative to the river. The rightward velocity of the river with respect to the ground is .   Diagram showing a kayaker planing to crossing a river along a diagonal straight path.    A kayaker wishes to cross a river directly from point to point , as shown in the figure (this most direct path will, of course, save more of the kayaker's strength). The width of the river, (from to ) is 200.0 meters, the distance (from to ) is 150 meters, and the speed of the eastbound current in the river is 1.39 meters per second. Suppose that the kayaker has aimed her boat at degrees to the left of straight across, as shown in .    To paddle directly from to , at what angle , relative to the shore, will the kayaker actually travel along (despite being aimed in a different direction)?    To paddle directly from to , what speed, relative to the water, must the kayaker paddle at?    To paddle directly from to , what speed, relative to the shore, will the kayaker have?     "
},
{
  "id": "exercises-ch-rel-velocity-5",
  "level": "2",
  "url": "exercises-ch-rel-velocity.html#exercises-ch-rel-velocity-5",
  "type": "Exercise",
  "number": "8.5.4",
  "title": "",
  "body": "  In the river crossing lab, we solved the unknowns in the relative velocity problem by performing algebra on the vector components. But it can also be solved using graphical vector addition plus geometry. Here's how:  In relative velocity problems, drawing a picture of the platform velocity vector plus the target velocity relative to the platform creates a drawing of a triangle, where each side is the length of one of the velocity vectors. (In the case where this triangle comes out with at least one vertical or horizontal side, it is pretty easy to solve all the sides and angles of the triangle by adding up the components of the vectors. It is especially easy if the triangle is a right triangle.)  However, the triangle sometimes has no vertical or horizontal sides, and is often not a right triangle, unlike most other diagrams we encounter in physics. So, this is one case where adding up the vectors tip-to-tail on a sketch (then using the cosine law and sine law for the sides and angles of a non-right triangle) can be useful for solving for the unknown velocities. In the following problem, drawing out the vectors yields a non-right triangle to solve:  The pilot of a Boeing 737 files a flight plan with the tower; the flight plan states that he should fly to a city located at 35.00 degrees south of west. The Boeing 737 is capable of cruising with an airspeed of 874.0 kilometers per hour relative to the air (i.e., the speed in a zero wind). However, there is a crosswind blowing with a magnitude of 110.00 kilometers per hour at 20.00 degrees east of south, boosting the plane's velocity relative to the ground. You have to calculate which direction to aim the plane to compensate for the direction of the wind…    Draw a graphical sketch of how the velocity of the air plus the plane's velocity relative to the air equals the plane's velocity as tracked by ground radar. These three velocities should form a triangle on your sketch; then you can compute the three angles in terms of the unknown angle at which the plane is aimed. (You will find that one of the angles inside the triangle doesn't even involve the unknown, so is instantly calculable.) Then, label the two sides of the triangle that have known magnitudes.    Use the cosine law relating the lengths of the three sides of a non-right triangle ( ) to calculate the magnitude of the unknown side. This should be solvable since you know one angle and two sides. (But which one is which? If you don't remember the definition of which angle to use relative to the sides a, b, and c, just look up any explanation of the cosine law.) Which unknown velocity's magnitude did we just calculate here?    Use the cosine law or the sine law ( ) to calculate one of the other angles inside the triangle. (N.B. When you use cosine or sine law, be aware that your calculator will often only tell you the solution less than 90 degrees even if the real answer is greater than 90 degrees, so only trust the answer for the narrower angle. You may recall that this issue is called “quadrant ambiguity.”) Use this information to determine the compass bearing (in degrees clockwise from north) in which the pilot must aim the plane (so as to compensate for the direction of the wind and follow the flight plan).     "
},
{
  "id": "sec-newt-first-law-def-force",
  "level": "1",
  "url": "sec-newt-first-law-def-force.html",
  "type": "Section",
  "number": "9.1",
  "title": "Newton’s First Law and the Definition of Force",
  "body": " Newton's First Law and the Definition of Force  So far we've really focused on position's first two derivatives, velocity and acceleration when analyzing motion. Why not position's third, fourth, fifth or sixth derivatives jerk, snap, crackle, and pop? Newton's laws govern motion in classical mechanics and they are acceleration focused. Newton's laws are not universally true, but are a good approximation for most everyday phenomena.   Newton's First Law   An object at rest tends to stay at rest unless acted upon by an outside force. An object in motion tends to stay in motion with constant velocity vector unless acted upon by an outside force.    What does Newton mean by a \"force?\" In layman's terms, a force is a push or a pull. A force has a direction, acts on a target object, is exerted by a source \"agent\" object, and can be added vectorially to other force vectors acting on the same target object to find the net force Newton's Laws only apply for observers that are not accelerating. Observers that are not accelerating are said to have an \"inertial frame of reference\". If the observer is accelerating, \"fictitious forces\" appear. Fictitious forces are apparent forces that are not caused by physical interaction between objects\/fields.  "
},
{
  "id": "principle-newts-first-law",
  "level": "2",
  "url": "sec-newt-first-law-def-force.html#principle-newts-first-law",
  "type": "Principle",
  "number": "9.1.1",
  "title": "Newton’s First Law.",
  "body": " Newton's First Law   An object at rest tends to stay at rest unless acted upon by an outside force. An object in motion tends to stay in motion with constant velocity vector unless acted upon by an outside force.   "
},
{
  "id": "sec-newt-sec-law-def-mass",
  "level": "1",
  "url": "sec-newt-sec-law-def-mass.html",
  "type": "Section",
  "number": "9.2",
  "title": "Newton’s Second Law and the Definition of Mass",
  "body": " Newton's Second Law and the Definition of Mass  Newton's Second Law connects why things move (Forces) with how things move (kinematices).   Newton's Second Law   Let be the sum of all external forces acting on a object, and be the mass of the object. Then     What does Newton mean by a \"mass?\" Mass is a measure of the target object's resistance to acceleration. This is why Newton's Second Law says net force is proportional to mass. If the mass increases, the net force must be increased in order to get the same motion out of the object. If the mass decreases, you don't need as much net force to get the same motion. Mass is measured in base SI units of kilograms (kg) in the meters-kilograms-seconds (mks) SI unit standard. We can use this base unit of mass to construct the base unit of force. Newton's Second Law says that the units of force are the units of mass times the units of acceleration so the units of force are kilograms times meters divided by seconds squared. Force units = . This combination unit for force is used so often that we call it the Newton (N). One Newton is the amount of net force that gives an acceleration of one meter per second squared to a body with a mass of one kilogram.  "
},
{
  "id": "principle-newts-sec-law",
  "level": "2",
  "url": "sec-newt-sec-law-def-mass.html#principle-newts-sec-law",
  "type": "Principle",
  "number": "9.2.1",
  "title": "Newton’s Second Law.",
  "body": " Newton's Second Law   Let be the sum of all external forces acting on a object, and be the mass of the object. Then    "
},
{
  "id": "sec-normal-force",
  "level": "1",
  "url": "sec-normal-force.html",
  "type": "Section",
  "number": "9.3",
  "title": "The Normal Force",
  "body": " The Normal Force  Imagine you place a book on a table so that it's just siting there. We know that the force of gravity acts down on the book. The book is not accelerating so Newton's second laws says that the net force on the book is zero. What is countering the force of gravity? Why doesn't the book go through the table? It ends up that when we place the book on the table it sags slightly under the load. Unless an object is deformed beyond its limit, it will exert a restoring force much like a deformed spring (or a trampoline). When the book is placed on the table, the table sags until the restoring force becomes as large as the weight of the book. When the responce force is normal (perpendicular) to the surface of contact, we call the responce force a normal force. It is typical to label a normal force as , although other labels are sometimes used. Normal forces are extremely common in everyday situations and we will use them often in this course.  To recap, a normal force always acts perpendicularly to the surface of contact. There is no formula for the normal force, you have to solve for it based on whats physically happening in a given situation. Any contact between the surfaces of objects can produce a normal force.  "
},
{
  "id": "sec-draw-fbds",
  "level": "1",
  "url": "sec-draw-fbds.html",
  "type": "Section",
  "number": "9.4",
  "title": "Drawing Free Body Diagrams",
  "body": " Drawing Free Body Diagrams  Lets go over the recommended steps for drawing a free body diagram by working an example. A box of mass 10.0kg is placed on a frictionless hill. The hill has an angle of 30.0 degrees above horizontal.   Draw a free-body diagram of the box.    Find the acceleration of the box down the ramp.    Find the magnitude of the normal force acting on the box.     Here are the steps for drawing (and analyzing) a free-body diagram. Steps 1 through 4 are about producing the drawing, and steps 5 through 7 are about making equations out of the drawing.   (This step may be done in your head if you're good) Draw a separate force-ID diagram to help identify the forces that go on the free-body diagram. The force ID diagram shows the object and every surface it is being touched by. Circle each separate contact, then list at least one contact force for each. Also, make a list of the non-contact forces acting on the object.  Our only contact force is the normal force of the ramp on the box. Our only non-contact force is gravity.    Draw a dot representing the center of the target object whose motion (acceleration) is being analyzed. (Must be shown on paper.) Leave plenty of empty space around the dot to draw arrows representing the directions of the forces, and to label the direction angles. I recommend at least a quarter-page of empty space so the angles aren't too tiny to write.  Because of the lecture note format I'm going to do this step with step number 3.    Draw all external force vectors from your list. (Must be shown on paper.) Draw the force vectors with with their tails starting at the dot (this helps to make the geometry and trig easier to see).   The diagram shows a right-triangle ramp with its hypotenuse sloping upward from left to right. A square block rests on the incline near the middle. A small filled circle marks the block's center. Two force vectors originate from the block's center. The normal force arrow points perpendicular to the ramp surface, extending upward and leftward; it is labeled . The gravity arrow points straight downward from the center; it is labeled . A curved arc near the lower left corner of the ramp indicates the incline angle .   Block on an inclined ramp with normal force and gravity.    This answers part 1 of the question.    Draw the coordinate axes, then use geometry and trigonometry to write down the x and y components of each force vector. (Do it symbolically first.) (Must be shown on paper.) It is important to draw the coordinate axes, because in some problems with an angled hill, the math becomes easier if you mentally rotate your page as if the plane of the hill were the x-axis, instead of the flat ground. You may need to do geometry to ensure the angle of each force is known.   The diagram shows a right-triangle ramp with its hypotenuse sloping upward from left to right. A square block rests on the incline near the middle. A small filled circle marks the block's center. Two force vectors originate from the block's center. The normal force arrow points perpendicular to the ramp surface, extending upward and leftward; it is labeled . The gravity arrow points straight downward from the center; it is labeled . A curved arc near the lower left corner of the ramp indicates the incline angle . A rotated coordinate system is drawn aligned with the ramp: the x-axis runs along the incline, and the y-axis is perpendicular to it. Both axes include arrowheads at each end. The normal forces is at an angle with the positive y-axis.   Block on an inclined ramp with normal force and gravity. A standard x-y axis is imposed on the image.     The diagram shows a right-triangle ramp with its hypotenuse sloping upward from left to right. A square block rests on the incline near the middle. A small filled circle marks the block's center. Two force vectors originate from the block's center. The normal force arrow points perpendicular to the ramp surface, extending upward and leftward; it is labeled . The gravity arrow points straight downward from the center; it is labeled . A curved arc near the lower left corner of the ramp indicates the incline angle . A rotated coordinate system is drawn aligned with the ramp: the x-axis runs along the incline, and the y-axis is perpendicular to it. Both axes include arrowheads at each end. The force of gravity is at an angle with the negative y-axis.   Block on an inclined ramp with normal force and gravity. A tilted x-y axis is imposed on the image.    We could draw the coordinate axis as shown in , but it's a better teaching example if we tilt the coordinate axis as shown in . Choosing the coordinate axis to be same the coordinate axis in the and components of the forces become     Sum the x-components of the force vectors (usually, symbolically first, then numerically after). Separately, sum the y-components of the force vectors. (Must be shown on paper.) making sure to account for any negative components. The total run of all the force vectors is called the x-component of the net force (symbol: or ), and the total run of all the force vectors is called the y-component of the net force (symbol: or ).       Set and . (Must be shown on paper.) Newton's 2nd Law says the net force vector is proportional to the acceleration vector. That is why we are allowed to set the net x force equal to the target object's mass times its x-acceleration, and the net y force equal to the target object's mass times its y-acceleration. If either of the acceleration components are zero (due to the object being permanently at rest, or due to the object's velocity being constant), substitute those zeroes in now, to simplify the equation.  For the -component equation we get For the -component equation we know that the block isn't coming off the ramp so we must have .     Use algebraic substitution, if needed, to solve the system of two equations for up to two requested unknowns. (Must be shown on paper.) We have produced two symbolic equations, \\one which dealt with the net x force, and another which dealt with the net y force. If you can identify what is given and what is unknown in these symbolic equations, that's the end of the actual physics. At this point, all that's left is to substitute the equations into each other to finish solving for the unknowns (example: 5x+y=4, 9x-2y=8, solve x and y).  For the -component we get Plugging in numbers gives This answers part 2 of the question. For the -component equation we get Plugging in numbers gives This answers part 3 of the question.     "
},
{
  "id": "fig-fbd-ex-prob-img-1",
  "level": "2",
  "url": "sec-draw-fbds.html#fig-fbd-ex-prob-img-1",
  "type": "Figure",
  "number": "9.4.1",
  "title": "",
  "body": " The diagram shows a right-triangle ramp with its hypotenuse sloping upward from left to right. A square block rests on the incline near the middle. A small filled circle marks the block's center. Two force vectors originate from the block's center. The normal force arrow points perpendicular to the ramp surface, extending upward and leftward; it is labeled . The gravity arrow points straight downward from the center; it is labeled . A curved arc near the lower left corner of the ramp indicates the incline angle .   Block on an inclined ramp with normal force and gravity.   "
},
{
  "id": "fig-fbd-ex-prob-img-2",
  "level": "2",
  "url": "sec-draw-fbds.html#fig-fbd-ex-prob-img-2",
  "type": "Figure",
  "number": "9.4.2",
  "title": "",
  "body": " The diagram shows a right-triangle ramp with its hypotenuse sloping upward from left to right. A square block rests on the incline near the middle. A small filled circle marks the block's center. Two force vectors originate from the block's center. The normal force arrow points perpendicular to the ramp surface, extending upward and leftward; it is labeled . The gravity arrow points straight downward from the center; it is labeled . A curved arc near the lower left corner of the ramp indicates the incline angle . A rotated coordinate system is drawn aligned with the ramp: the x-axis runs along the incline, and the y-axis is perpendicular to it. Both axes include arrowheads at each end. The normal forces is at an angle with the positive y-axis.   Block on an inclined ramp with normal force and gravity. A standard x-y axis is imposed on the image.   "
},
{
  "id": "fig-fbd-ex-prob-img-3",
  "level": "2",
  "url": "sec-draw-fbds.html#fig-fbd-ex-prob-img-3",
  "type": "Figure",
  "number": "9.4.3",
  "title": "",
  "body": " The diagram shows a right-triangle ramp with its hypotenuse sloping upward from left to right. A square block rests on the incline near the middle. A small filled circle marks the block's center. Two force vectors originate from the block's center. The normal force arrow points perpendicular to the ramp surface, extending upward and leftward; it is labeled . The gravity arrow points straight downward from the center; it is labeled . A curved arc near the lower left corner of the ramp indicates the incline angle . A rotated coordinate system is drawn aligned with the ramp: the x-axis runs along the incline, and the y-axis is perpendicular to it. Both axes include arrowheads at each end. The force of gravity is at an angle with the negative y-axis.   Block on an inclined ramp with normal force and gravity. A tilted x-y axis is imposed on the image.   "
},
{
  "id": "exercises-ch-fbds",
  "level": "1",
  "url": "exercises-ch-fbds.html",
  "type": "Exercises",
  "number": "9.5",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises    On a shared page, your group will draw force identification diagrams of the following situations. In each situation, list all the contact forces that would apply. Then, list all the non-contact forces that would apply. Finally, draw a free body diagram of only the object of interest (the one you would care about the motion of), and draw every force from the list of forces onto the free body diagram Show me each finished free body diagram so I can help check for missing forces or extra forces. Note that the free body diagram is drawn based on the contact points on the target object at the present situation, not a time in the past or a time in the future.     A cat is sitting on a window sill.  Force-ID:  Free-body:        An ice hockey puck glides across frictionless ice  Force-ID:  Free-body:        Your physics textbook is sliding across a rough table (so you cannot ignore friction).  Force-ID:  Free-body:        A steel beam is being lowered at steady speed by a crane.  Force-ID:  Free-body:        A jet plane is speeding up as it goes down the runway. It does have air resistance.  Force-ID:  Free-body:        You've kicked a rock down the sidewalk, and now, it is sliding along the concrete 3 feet in front of you.  Force-ID:  Free-body:        A skier is sliding down a hill angled 20 degrees below horizontal. There is friction. There is also a horizontal wind blowing in the skier's face.  Force-ID:  Free-body:         In , two forces are acting on a 30.0 kilogram mass. If the acceleration of the mass is known to be meters per second squared, calculate the unknown force vector .   The diagram shows a single object represented by a blue dot labeled with a mass of 30.0 kilograms. Two forces act on the object. One force, labeled , is directed horizontally to the left. The magnitude of is not provided. The second force, labeled newtons, is drawn upward and to the right. A dashed vertical reference line is drawn through the object. The angled force forms a 63.4 degree angle measured from this vertical line toward the right. A coordinate axis appears in the lower-left corner, with the positive x-axis pointing right and the positive y-axis pointing upward.   Diagram of a 30 kilogram mass with two applied forces, including one unknown horizontal force and one angled force of 22.4 newtons        In the , four forces are acting on a 10.0 kilogram mass.   Calculate the net force vector.    Calculate the magnitude (in meters per second squared) and direction (in degrees above the positive x-axis) of the mass' acceleration.      The diagram shows a single blue point labeled “m = 10.0 kg” at the center. Four force vectors extend outward from this point. One vector labeled newtons points straight downward along the negative y axis. A second vector labeled newtons points up and to the left at a 60 degree angle from the positive y-axis. A third vector labeled newtons points straight upward along the positive y axis. The fourth vector labeled newtons points directly to the right along the positive x-axis. A small coordinate axis in the lower left corner marks the positive x and y-directions.   Free body diagram showing a 10 kilogram mass with four labeled force vectors in different directions.      "
},
{
  "id": "exercises-ch-fbds-2-2",
  "level": "2",
  "url": "exercises-ch-fbds.html#exercises-ch-fbds-2-2",
  "type": "Exercise",
  "number": "9.5.1",
  "title": "",
  "body": "  A cat is sitting on a window sill.  Force-ID:  Free-body:     "
},
{
  "id": "exercises-ch-fbds-2-3",
  "level": "2",
  "url": "exercises-ch-fbds.html#exercises-ch-fbds-2-3",
  "type": "Exercise",
  "number": "9.5.2",
  "title": "",
  "body": "  An ice hockey puck glides across frictionless ice  Force-ID:  Free-body:     "
},
{
  "id": "exercises-ch-fbds-2-4",
  "level": "2",
  "url": "exercises-ch-fbds.html#exercises-ch-fbds-2-4",
  "type": "Exercise",
  "number": "9.5.3",
  "title": "",
  "body": "  Your physics textbook is sliding across a rough table (so you cannot ignore friction).  Force-ID:  Free-body:     "
},
{
  "id": "exercises-ch-fbds-2-5",
  "level": "2",
  "url": "exercises-ch-fbds.html#exercises-ch-fbds-2-5",
  "type": "Exercise",
  "number": "9.5.4",
  "title": "",
  "body": "  A steel beam is being lowered at steady speed by a crane.  Force-ID:  Free-body:     "
},
{
  "id": "exercises-ch-fbds-2-6",
  "level": "2",
  "url": "exercises-ch-fbds.html#exercises-ch-fbds-2-6",
  "type": "Exercise",
  "number": "9.5.5",
  "title": "",
  "body": "  A jet plane is speeding up as it goes down the runway. It does have air resistance.  Force-ID:  Free-body:     "
},
{
  "id": "exercises-ch-fbds-2-7",
  "level": "2",
  "url": "exercises-ch-fbds.html#exercises-ch-fbds-2-7",
  "type": "Exercise",
  "number": "9.5.6",
  "title": "",
  "body": "  You've kicked a rock down the sidewalk, and now, it is sliding along the concrete 3 feet in front of you.  Force-ID:  Free-body:     "
},
{
  "id": "exercises-ch-fbds-2-8",
  "level": "2",
  "url": "exercises-ch-fbds.html#exercises-ch-fbds-2-8",
  "type": "Exercise",
  "number": "9.5.7",
  "title": "",
  "body": "  A skier is sliding down a hill angled 20 degrees below horizontal. There is friction. There is also a horizontal wind blowing in the skier's face.  Force-ID:  Free-body:     "
},
{
  "id": "exercises-ch-fbds-3",
  "level": "2",
  "url": "exercises-ch-fbds.html#exercises-ch-fbds-3",
  "type": "Exercise",
  "number": "9.5.8",
  "title": "",
  "body": "  In , two forces are acting on a 30.0 kilogram mass. If the acceleration of the mass is known to be meters per second squared, calculate the unknown force vector .   The diagram shows a single object represented by a blue dot labeled with a mass of 30.0 kilograms. Two forces act on the object. One force, labeled , is directed horizontally to the left. The magnitude of is not provided. The second force, labeled newtons, is drawn upward and to the right. A dashed vertical reference line is drawn through the object. The angled force forms a 63.4 degree angle measured from this vertical line toward the right. A coordinate axis appears in the lower-left corner, with the positive x-axis pointing right and the positive y-axis pointing upward.   Diagram of a 30 kilogram mass with two applied forces, including one unknown horizontal force and one angled force of 22.4 newtons     "
},
{
  "id": "exercises-ch-fbds-4",
  "level": "2",
  "url": "exercises-ch-fbds.html#exercises-ch-fbds-4",
  "type": "Exercise",
  "number": "9.5.9",
  "title": "",
  "body": "  In the , four forces are acting on a 10.0 kilogram mass.   Calculate the net force vector.    Calculate the magnitude (in meters per second squared) and direction (in degrees above the positive x-axis) of the mass' acceleration.      The diagram shows a single blue point labeled “m = 10.0 kg” at the center. Four force vectors extend outward from this point. One vector labeled newtons points straight downward along the negative y axis. A second vector labeled newtons points up and to the left at a 60 degree angle from the positive y-axis. A third vector labeled newtons points straight upward along the positive y axis. The fourth vector labeled newtons points directly to the right along the positive x-axis. A small coordinate axis in the lower left corner marks the positive x and y-directions.   Free body diagram showing a 10 kilogram mass with four labeled force vectors in different directions.     "
},
{
  "id": "sec-gravity",
  "level": "1",
  "url": "sec-gravity.html",
  "type": "Section",
  "number": "10.1",
  "title": "Gravity",
  "body": " Gravity  In Newtonian physics gravity is the fundamental force of attraction that exits between any objects possesing mass.   The diagram shows two circular objects representing masses. The mass is on the left, drawn as a circle with a small filled center point. The mass is on the right, also shown as a circle with a filled center point. A straight arrow extends from the center of toward the center of , indicating the relative position of mass with respect to mass . This arrow is labeled . A second, shorter arrow near the right-hand mass points diagonally downward and left, illustrating the gravitational force vector labeled .   Two masses labeled m and m' with arrows showing the gravitational force between them and the distance R.     Newton's Law of Universal Gravitation   Imagine there are two particles, one having mass and the other having mass . Let be the relative postion of with respect to . The gravitational force on the particle of mass due to the particle of mass is where .    As can be seen in the force of gravity points in the direction toward the particle of mass . The magnitude of the gravitational force is For objects near the surface of the Earth, is equal to the mass of the Earth ( ), and is approximately the average radius of the Earth ( ). The mass of the Earth is kilograms and the radius of the Earth ranges from 6357 kilometers to 6378 kilometers. Then So for objects near the surface of the Earth the force of gravity can be approximated as having magnitude and a direction pointing towards the center of the Earth. Interestingly (and Newton's Third Law (to be discussed later)) imply that the object also exerts a force of equal magitude and opposite direction on the Earth.  "
},
{
  "id": "sec-gravity-2",
  "level": "2",
  "url": "sec-gravity.html#sec-gravity-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gravity "
},
{
  "id": "fig-newt-univ-law-grav-img",
  "level": "2",
  "url": "sec-gravity.html#fig-newt-univ-law-grav-img",
  "type": "Figure",
  "number": "10.1.1",
  "title": "",
  "body": " The diagram shows two circular objects representing masses. The mass is on the left, drawn as a circle with a small filled center point. The mass is on the right, also shown as a circle with a filled center point. A straight arrow extends from the center of toward the center of , indicating the relative position of mass with respect to mass . This arrow is labeled . A second, shorter arrow near the right-hand mass points diagonally downward and left, illustrating the gravitational force vector labeled .   Two masses labeled m and m' with arrows showing the gravitational force between them and the distance R.   "
},
{
  "id": "principle-newt-law-univ-grav",
  "level": "2",
  "url": "sec-gravity.html#principle-newt-law-univ-grav",
  "type": "Principle",
  "number": "10.1.2",
  "title": "Newton’s Law of Universal Gravitation.",
  "body": " Newton's Law of Universal Gravitation   Imagine there are two particles, one having mass and the other having mass . Let be the relative postion of with respect to . The gravitational force on the particle of mass due to the particle of mass is where .   "
},
{
  "id": "sec-weight-ex-prob",
  "level": "1",
  "url": "sec-weight-ex-prob.html",
  "type": "Section",
  "number": "10.2",
  "title": "Weight Example Problem",
  "body": " Weight Example Problem  A bobsled of mass slides on a track to the bottom of a frictionless hill. The hill is inclined at angle from the horizontal. The track has a length of , and the sled starts at rest. Find the sled's speed at the bottom of the hill. (Hint: when the acceleration is on a diagonal, it can make the math easier to draw the x and y axes tilted over so that the new, tilted x-axis is parallel to the acceleration.)   The diagram shows a right-triangle ramp with its hypotenuse sloping downward from left to right. A square block rests on the incline near the middle. A small filled circle marks the block's center. Two force vectors originate from the block's center. The normal force arrow points perpendicular to the ramp surface, extending upward and rightward; it is labeled . The gravity arrow points straight downward from the center; it is labeled . A curved arc near the lower right corner of the ramp indicates the incline angle . A rotated coordinate system is drawn aligned with the ramp: the x-axis runs along the incline, and the y-axis is perpendicular to it. Both axes include arrowheads at each end. The force of gravity is at an angle with the negative y-axis.   Block on an inclined ramp with normal force and gravity. A tilted x-y axis is imposed on the image.    We draw as our free body diagram. Since the box isn't leaving the surface of the ramp we have  The part of Newton's Second Law doesn't yield any information that can help to solve the problem. Let's look at the part. The acceleration in the direction is constant so we can use our constant acceleration kinematic equations to find the sleds speed at the bottom of the hill. Let's make a givens table.   Givens Table                       Considering what we know, is best choice for this problem. Let's Plug in symbolic and zero values, then solve.   "
},
{
  "id": "fig-weight-ex-prob-img",
  "level": "2",
  "url": "sec-weight-ex-prob.html#fig-weight-ex-prob-img",
  "type": "Figure",
  "number": "10.2.1",
  "title": "",
  "body": " The diagram shows a right-triangle ramp with its hypotenuse sloping downward from left to right. A square block rests on the incline near the middle. A small filled circle marks the block's center. Two force vectors originate from the block's center. The normal force arrow points perpendicular to the ramp surface, extending upward and rightward; it is labeled . The gravity arrow points straight downward from the center; it is labeled . A curved arc near the lower right corner of the ramp indicates the incline angle . A rotated coordinate system is drawn aligned with the ramp: the x-axis runs along the incline, and the y-axis is perpendicular to it. Both axes include arrowheads at each end. The force of gravity is at an angle with the negative y-axis.   Block on an inclined ramp with normal force and gravity. A tilted x-y axis is imposed on the image.   "
},
{
  "id": "table-weight-ex-prob-givens",
  "level": "2",
  "url": "sec-weight-ex-prob.html#table-weight-ex-prob-givens",
  "type": "Table",
  "number": "10.2.2",
  "title": "Givens Table",
  "body": " Givens Table                      "
},
{
  "id": "sec-tension",
  "level": "1",
  "url": "sec-tension.html",
  "type": "Section",
  "number": "10.3",
  "title": "Tension",
  "body": " Tension  When a rope\/chain\/cable is in tension, it can re-direct applied forces along its length. The force of tension is directed parallel to the string and away from the point of contact. To keep things simple, when working with strings in this class we apply the ideal string approximation . The ideal string approximation approximates the string in question as having the following three properties:   The string is massless.    The string is not stretchable. This means that the length of the string is constant regardless of the forces being applied to it.    The string is perfectly flexiable. This means that the string has no resistance to being bent.   When the perfect string approximation is applicable, the magnitude of the tension force is the same throughout the string. Like the normal force there is no formula for the tension force. You have to solve for the force of tension based on whats physically happening in a given situation.  To recap, based partially on the perfect string approximation holding we will make extensive use of the following two properties to solve for the force of tension:   Tension is directed parallel to the string everywhere and away from the point of contact.    The magnitude of the tension force is the same throughout the string.     "
},
{
  "id": "sec-tension-2",
  "level": "2",
  "url": "sec-tension.html#sec-tension-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ideal string approximation "
},
{
  "id": "sec-weight-tension-ex-prob",
  "level": "1",
  "url": "sec-weight-tension-ex-prob.html",
  "type": "Section",
  "number": "10.4",
  "title": "Weight and Tension Example Problem",
  "body": " Weight and Tension Example Problem  A lamp is hung from the ceiling using three ropes, as shown in . Find the magnitude of the tension in each rope ( , , and ), if the mass of the lamp is a given, .   A junction where three ropes connect. Rope 3 extends straight downward from the junction and attaches to a mass labeled “m.” Rope 1 and Rope 2 extend upward from the same junction the roof. Rope 1 forms a 60 degree angle with the roof on the left side, and Rope 2 forms a 30 degree angle with the roof on the right side.   Diagram of three ropes meeting at a junction, with two angled upward to the roof and one vertical rope supporting a mass.    We know everything is static so and for all objects. Let's look at whats going on with the lamp. The free body diagram is drawn in .   A block labeled suspended from a single vertical rope. The rope extends upward from the top of the block. Two arrows are drawn along the rope at the right side of the image: one arrow points upward and is labeled , representing the tension force in the rope; the other arrow points downward and is labeled , representing the gravitational force acting on the mass.   Mass hanging from a vertical rope with upward tension and downward weight.    The part of Newton's Second Law for the lamp gives Now let's look at the intersection of the ropes. The free body diagram is drawn in .   A small filled circle marks the junction where the three ropes connect with each exerting a tension force. The tension force from rope 3 labeled acts down from the junction. The tension force from rope 2 labeled acts at a 60 degree angle to the right of up. The tension force from rope 1 labeled acts at a 30 degree angle to the left of up.   Diagram showing the tension forces acting on the junction where the thee ropes connect.    The part of Newton's Second Law gives The part of Newton's Second Law gives Plugging in from the part of Newton's Second Law, we get Plugging into gives Recaping, for the final answers we get   "
},
{
  "id": "fig-weight-and-tension-ex-prob-img-1",
  "level": "2",
  "url": "sec-weight-tension-ex-prob.html#fig-weight-and-tension-ex-prob-img-1",
  "type": "Figure",
  "number": "10.4.1",
  "title": "",
  "body": " A junction where three ropes connect. Rope 3 extends straight downward from the junction and attaches to a mass labeled “m.” Rope 1 and Rope 2 extend upward from the same junction the roof. Rope 1 forms a 60 degree angle with the roof on the left side, and Rope 2 forms a 30 degree angle with the roof on the right side.   Diagram of three ropes meeting at a junction, with two angled upward to the roof and one vertical rope supporting a mass.   "
},
{
  "id": "fig-weight-and-tension-ex-prob-img-2",
  "level": "2",
  "url": "sec-weight-tension-ex-prob.html#fig-weight-and-tension-ex-prob-img-2",
  "type": "Figure",
  "number": "10.4.2",
  "title": "",
  "body": " A block labeled suspended from a single vertical rope. The rope extends upward from the top of the block. Two arrows are drawn along the rope at the right side of the image: one arrow points upward and is labeled , representing the tension force in the rope; the other arrow points downward and is labeled , representing the gravitational force acting on the mass.   Mass hanging from a vertical rope with upward tension and downward weight.   "
},
{
  "id": "fig-weight-and-tension-ex-prob-img-3",
  "level": "2",
  "url": "sec-weight-tension-ex-prob.html#fig-weight-and-tension-ex-prob-img-3",
  "type": "Figure",
  "number": "10.4.3",
  "title": "",
  "body": " A small filled circle marks the junction where the three ropes connect with each exerting a tension force. The tension force from rope 3 labeled acts down from the junction. The tension force from rope 2 labeled acts at a 60 degree angle to the right of up. The tension force from rope 1 labeled acts at a 30 degree angle to the left of up.   Diagram showing the tension forces acting on the junction where the thee ropes connect.   "
},
{
  "id": "exercises-ch-weight-and-tension",
  "level": "1",
  "url": "exercises-ch-weight-and-tension.html",
  "type": "Exercises",
  "number": "10.5",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   Note . Some problems leave it up to you to estimate what would be an appropriate number of significant figures to use based on the situation, but if in doubt, it is usually good to use 3 sig figs.    Using Tension in Force Problems    You are part of a team to help design the atrium of a new building. Your boss, the manager of the project, wants to suspend a 20 pound sculpture high over the room by hanging it from the ceiling using thin, clear fishing line (string) so that it will be difficult to see how the sculpture is held up. The only place to fasten the fishing line is to a wooden beam which runs around the edge of the room at the ceiling. The fishing line that she wants to use will safely hold 20 pounds, so she suggests attaching two lines to the sculpture to be safe. Each line would come from the opposite side of the ceiling to attach to the hanging sculpture. Her initial design has one line making an angle of 20 degrees with the ceiling and the other line making an angle of 40 degrees with the ceiling. She knows you took physics, so she asks you if her design can work.   Standard step: Draw the correct free-body diagram.    Standard step: Find the symbolic components of the force vectors.    Standard step: Equate the symbolic sums of the components of the force vectors to the mass times components of the acceleration.    Now solve the unknowns to answer the real question. Will the tension on either of the lines exceed the safe maximum tension?         A football coach sits on a sled while two of his players build their strength by dragging the sled due east across the field with ropes. The friction force on the sled is 1000.0 Newtons directed opposite to the sled's velocity, and the angle between the two ropes is 20 degrees. If the players are pulling symmetrically, each with the same magnitude of force, how hard must each player pull to drag the coach at a steady acceleration of 0.100 meters per second squared to the east? The coach and sled have a combined mass of 100.0 kilograms.   Standard step: Draw the correct free-body diagram.    Standard step: Find the symbolic components of the force vectors.    Standard step: Equate the symbolic sums of the components of the force vectors to the mass times components of the acceleration.    Now solve the unknowns to answer the real question. How hard must each player pull?         Tilted Axis Problems    Calculate the magnitude of the acceleration of a skier of mass 60.0 kilogram heading down a 15.0 degree slope, if the magnitude of the friction force between the skier and the ground is 56.80 Newtons.   Standard step: Draw the correct free-body diagram.    Standard step: Find the symbolic components of the force vectors (tilt the axis to go in the direction of the acceleration).    tandard step: Equate the symbolic sums of the components of the force vectors to the mass times components of the acceleration. (If you tilted the axis correctly, then you have forced one of the acceleration components to be equal to zero.)    Now solve the unknowns to answer the real question. What is the magnitude of the acceleration?         Force and Kinematics Problems    While driving in the mountains, you notice that when the freeway goes steeply down hill, there are emergency exits every few miles. These emergency exits are straight dirt ramps which leave the freeway and are sloped uphill. They are designed to stop trucks and cars that lose their brakes on the downhill stretches of the freeway even if the road is covered in ice. You are curious, so you stop at the next emergency road. You estimate that the road rises at an angle of about 10 degrees from the horizontal and is about 100 meters long. What is the maximum speed of a truck that you are sure will be stopped by this road, even if the frictional force of the road surface is negligible?      Compressed air is used to fire a 50.0 gram ball vertically upward from a 1.0 meter tall tube. The air exerts an upward force of 2.0 Newtons on the ball, only as long as it is still in the tube. How high does the ball go above the top of the tube before falling back down?     "
},
{
  "id": "exercises-ch-weight-and-tension-3-2",
  "level": "2",
  "url": "exercises-ch-weight-and-tension.html#exercises-ch-weight-and-tension-3-2",
  "type": "Exercise",
  "number": "10.5.1",
  "title": "",
  "body": "  You are part of a team to help design the atrium of a new building. Your boss, the manager of the project, wants to suspend a 20 pound sculpture high over the room by hanging it from the ceiling using thin, clear fishing line (string) so that it will be difficult to see how the sculpture is held up. The only place to fasten the fishing line is to a wooden beam which runs around the edge of the room at the ceiling. The fishing line that she wants to use will safely hold 20 pounds, so she suggests attaching two lines to the sculpture to be safe. Each line would come from the opposite side of the ceiling to attach to the hanging sculpture. Her initial design has one line making an angle of 20 degrees with the ceiling and the other line making an angle of 40 degrees with the ceiling. She knows you took physics, so she asks you if her design can work.   Standard step: Draw the correct free-body diagram.    Standard step: Find the symbolic components of the force vectors.    Standard step: Equate the symbolic sums of the components of the force vectors to the mass times components of the acceleration.    Now solve the unknowns to answer the real question. Will the tension on either of the lines exceed the safe maximum tension?      "
},
{
  "id": "exercises-ch-weight-and-tension-3-3",
  "level": "2",
  "url": "exercises-ch-weight-and-tension.html#exercises-ch-weight-and-tension-3-3",
  "type": "Exercise",
  "number": "10.5.2",
  "title": "",
  "body": "  A football coach sits on a sled while two of his players build their strength by dragging the sled due east across the field with ropes. The friction force on the sled is 1000.0 Newtons directed opposite to the sled's velocity, and the angle between the two ropes is 20 degrees. If the players are pulling symmetrically, each with the same magnitude of force, how hard must each player pull to drag the coach at a steady acceleration of 0.100 meters per second squared to the east? The coach and sled have a combined mass of 100.0 kilograms.   Standard step: Draw the correct free-body diagram.    Standard step: Find the symbolic components of the force vectors.    Standard step: Equate the symbolic sums of the components of the force vectors to the mass times components of the acceleration.    Now solve the unknowns to answer the real question. How hard must each player pull?      "
},
{
  "id": "exercises-ch-weight-and-tension-4-2",
  "level": "2",
  "url": "exercises-ch-weight-and-tension.html#exercises-ch-weight-and-tension-4-2",
  "type": "Exercise",
  "number": "10.5.3",
  "title": "",
  "body": "  Calculate the magnitude of the acceleration of a skier of mass 60.0 kilogram heading down a 15.0 degree slope, if the magnitude of the friction force between the skier and the ground is 56.80 Newtons.   Standard step: Draw the correct free-body diagram.    Standard step: Find the symbolic components of the force vectors (tilt the axis to go in the direction of the acceleration).    tandard step: Equate the symbolic sums of the components of the force vectors to the mass times components of the acceleration. (If you tilted the axis correctly, then you have forced one of the acceleration components to be equal to zero.)    Now solve the unknowns to answer the real question. What is the magnitude of the acceleration?      "
},
{
  "id": "exercises-ch-weight-and-tension-5-2",
  "level": "2",
  "url": "exercises-ch-weight-and-tension.html#exercises-ch-weight-and-tension-5-2",
  "type": "Exercise",
  "number": "10.5.4",
  "title": "",
  "body": "  While driving in the mountains, you notice that when the freeway goes steeply down hill, there are emergency exits every few miles. These emergency exits are straight dirt ramps which leave the freeway and are sloped uphill. They are designed to stop trucks and cars that lose their brakes on the downhill stretches of the freeway even if the road is covered in ice. You are curious, so you stop at the next emergency road. You estimate that the road rises at an angle of about 10 degrees from the horizontal and is about 100 meters long. What is the maximum speed of a truck that you are sure will be stopped by this road, even if the frictional force of the road surface is negligible?   "
},
{
  "id": "exercises-ch-weight-and-tension-5-3",
  "level": "2",
  "url": "exercises-ch-weight-and-tension.html#exercises-ch-weight-and-tension-5-3",
  "type": "Exercise",
  "number": "10.5.5",
  "title": "",
  "body": "  Compressed air is used to fire a 50.0 gram ball vertically upward from a 1.0 meter tall tube. The air exerts an upward force of 2.0 Newtons on the ball, only as long as it is still in the tube. How high does the ball go above the top of the tube before falling back down?   "
},
{
  "id": "sec-weight",
  "level": "1",
  "url": "sec-weight.html",
  "type": "Section",
  "number": "11.1",
  "title": "Weight",
  "body": " Weight  The weight of an object is the force of gravity on that object. The magnitude of the weight of an object near the surface of the Earth is It's common for students to confuse mass and weight but they're not the same. weight is a force and mass is a scalar.  "
},
{
  "id": "sec-weight-2",
  "level": "2",
  "url": "sec-weight.html#sec-weight-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "weight "
},
{
  "id": "sec-apparent-weight",
  "level": "1",
  "url": "sec-apparent-weight.html",
  "type": "Section",
  "number": "11.2",
  "title": "Apparent Weight",
  "body": " Apparent Weight  While our weight near the surface of the Earth has a constant magintude, our perception of our weight can be variable. This is because the perception of our weight is based on the normal force acting on us. An example of this is the weightlessness you feel on a roller coaster when it takes a large plunge. The force of gravity (weight) still has the same magnitude as usual but there is no normal force to counter your weight so you feel weightless. Given that the normal force dictates how you percieve weight, the net normal force acting on an object is also called that object's apparent weight . Here's another example, Consider your apparent weight when you ride the gravitron carnival ride. The gravition is a carnival ride where you stand against a wall in an enclosed circular room. The room is then spun around at high speed, which pins you against the wall even though nothing else is touching you. Finally the floor is lower from underneath your feet but because your pinned agianst the wall you end up floating above the floor. Heres a video example.   The video refers to centrifugal forces even though we haven't talk about that topic and won't. Don't worry about that for now. We will discuss the physics of circular motion behind the gravitron later in the course, but will adopt an explanation that doesn't use centrifugal force.  Notice in the graviton example that your weight points toward the surface of the earth but your apparent weight points toward the center of the room.  "
},
{
  "id": "sec-apparent-weight-2",
  "level": "2",
  "url": "sec-apparent-weight.html#sec-apparent-weight-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "apparent weight "
},
{
  "id": "sec-apparent-weight-ex-prob",
  "level": "1",
  "url": "sec-apparent-weight-ex-prob.html",
  "type": "Section",
  "number": "11.3",
  "title": "Apparent Weight Example Problem",
  "body": " Apparent Weight Example Problem  A watermelon of mass is sitting on a bathroom scale in an elevator.   What is the normal force on the watermelon if the elevator is stationary?    What is the normal force on the watermelon if the elevator is accelerating upwards with acceleration magnitude     What is the normal force on the watermelon if the elevator is accelerating downwards with acceleration magnitude       There is a large rectangle representing an elevator. Inside the elevator there is a small rectangle representing a scale. On top of the scale is an oval representing the watermelon. A normal force labeled acts up on the watermelon. Gravity labeled acts down on the watermelon.   A watermelon resting on a scale in an elevator with a normal force and gravity acting on it.    The only difference between the three parts of the question are the acceleration of the elevator\/watermelon. This doesn't effect the free body diagram or the net force on the watermelon at all, so we can calculate these once and use them for every case in the problem. We start by drawing the free body diagram in . The -component of the net force is Then the part of Newton's Second Law says In part 1 of the question so . In part 2 of the question the elevator is accelerating upward with a magnitude . Then and we get . In part 3 of the question the elevator is accelerating downward with a magnitde . Then and we get .  "
},
{
  "id": "fig-app-weight-ex-prob",
  "level": "2",
  "url": "sec-apparent-weight-ex-prob.html#fig-app-weight-ex-prob",
  "type": "Figure",
  "number": "11.3.1",
  "title": "",
  "body": " There is a large rectangle representing an elevator. Inside the elevator there is a small rectangle representing a scale. On top of the scale is an oval representing the watermelon. A normal force labeled acts up on the watermelon. Gravity labeled acts down on the watermelon.   A watermelon resting on a scale in an elevator with a normal force and gravity acting on it.   "
},
{
  "id": "sec-lbs",
  "level": "1",
  "url": "sec-lbs.html",
  "type": "Section",
  "number": "11.4",
  "title": "Pounds: Force or Mass",
  "body": " Pounds: Force or Mass  In the metric system its clear that newtons are a unit of force and kilgrams are a unit of mass. However, for readers who will use the imperial system confusion often arises regarding if pounds (abbreviated as lbs) are units of force or mass. The interested reader may want to check out Engineering Statics Open and Interactive, Section 1.2.1 which deals with unit systems and answers this question. To summarize, the answer is convaluted and depends on the subdialect of imperial units you are using. Pounds can be abbreviated as ibf for the version that measures force and ibm for the version that measures mass. However, as stated before pounds are often abbreviated as lbs which is ambigious with regard to if ibf or ibm is intended. In this class, as in most introductory physics classes we will exclusively use the version of pounds that are units of force.  "
},
{
  "id": "exercises-ch-contact-force-and-apparent-weight",
  "level": "1",
  "url": "exercises-ch-contact-force-and-apparent-weight.html",
  "type": "Exercises",
  "number": "11.5",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   Note . Some problems leave it up to you to estimate what would be an appropriate number of significant figures to use based on the situation, but if in doubt, it is usually good to use 3 sig figs.     It takes an elevator in an office 4.0 seconds to reach its cruising speed of 10 meters per second. A 60 kilogram passenger gets aboard on the ground floor. What is the passenger's apparent weight:   Before the elevator starts moving?    While the elevator is speeding up?    After the elevator reaches its cruising speed?         You are in New York, and are impressed by the speed of the elevators in a skyscraper compared to the ones in a low-rise apartment building. You wonder about the maximum acceleration for the skyscraper's elevators during normal operation, so you decide to measure it by using your bathroom scale. While the elevator is at rest on the ground floor, you get in, put down your scale, and stand on it. The scale reads 130 pounds You continue standing on the scale when the elevator goes up, carefully watching the reading. During the trip to the 50th floor, the greatest scale reading was 180 pounds (P.S. Also, roughly when during the trip up will this occur?)    "
},
{
  "id": "exercises-ch-contact-force-and-apparent-weight-3",
  "level": "2",
  "url": "exercises-ch-contact-force-and-apparent-weight.html#exercises-ch-contact-force-and-apparent-weight-3",
  "type": "Exercise",
  "number": "11.5.1",
  "title": "",
  "body": "  It takes an elevator in an office 4.0 seconds to reach its cruising speed of 10 meters per second. A 60 kilogram passenger gets aboard on the ground floor. What is the passenger's apparent weight:   Before the elevator starts moving?    While the elevator is speeding up?    After the elevator reaches its cruising speed?      "
},
{
  "id": "exercises-ch-contact-force-and-apparent-weight-4",
  "level": "2",
  "url": "exercises-ch-contact-force-and-apparent-weight.html#exercises-ch-contact-force-and-apparent-weight-4",
  "type": "Exercise",
  "number": "11.5.2",
  "title": "",
  "body": "  You are in New York, and are impressed by the speed of the elevators in a skyscraper compared to the ones in a low-rise apartment building. You wonder about the maximum acceleration for the skyscraper's elevators during normal operation, so you decide to measure it by using your bathroom scale. While the elevator is at rest on the ground floor, you get in, put down your scale, and stand on it. The scale reads 130 pounds You continue standing on the scale when the elevator goes up, carefully watching the reading. During the trip to the 50th floor, the greatest scale reading was 180 pounds (P.S. Also, roughly when during the trip up will this occur?)   "
},
{
  "id": "sec-pulley-probs-stat-equil",
  "level": "1",
  "url": "sec-pulley-probs-stat-equil.html",
  "type": "Section",
  "number": "12.1",
  "title": "Pulley Problems with Static Equilibirum",
  "body": " Pulley Problems with Static Equilibirum  In this chapter we'll solve physics problems with strings and pulleys assuming the ideal string approximation holds. Since the ideal string approximation holds we can use the two properties at the end of to help solve problems. For problems where nothing is moving pulley problems are solved in the same exact way you solved other problems with tension. However, the application of the properties in to pulleys can be confusing so it will be good for us work some practice problems.  "
},
{
  "id": "sec-pulleys-ex-prob-1",
  "level": "1",
  "url": "sec-pulleys-ex-prob-1.html",
  "type": "Section",
  "number": "12.2",
  "title": "Pulleys Example Problem 1",
  "body": " Pulleys Example Problem 1   The image shows a mechanical lifting system composed of a vertical and horizontal blue beam structure supporting a motor on top of the horizontal beam. A string runs horizonally to the right from the motor, turns over a pulley fixed to the end of the horizontal beam and heads vertically down. The string then wraps around a pulley suspended in the air and heads vertically upward were it is tether to a hook mounted on the bottom of the horizonal beam. The suspended pulley has a hook from which an elephant shaped weight marked with the letter “m,” representing a load or mass is tethered. The motor on top of the horizontal beam is pulling the string into it.   Mechanical pulley system lifting an elephant shaped mass labeled “m.”    A crane can lift an object using a free-floating (moving) pulley, suspended by cables. The cables raise and lower the moving pulley, along with whatever load is affixed to the pulley. In the following example, the pulley and affixed load have a combined mass of = 100.0 kilograms. Our goal is to determine the tension the crane's motor must apply to the cable in two cases:   The case where the load is being raised upwards with constant velocity.    the case where the load is being accelerated upwards at 1.20 meters per second squared.      free body diagram for the pulley with the mass attached. There is a force of tension on each side of the pulley acting up. The force of tension on each side of the pulley is the same. Gravity acts down.   Pulley free body diagram with two equal tension forces acting up and gravity acting down.    The only difference between the two parts of the question are the acceleration of the load. This doesn't effect the free body diagram so we can draw it once and use it for every case in the problem. For both parts we choose up to be positive. We draw the free body diagram for the problem in (figure x). Note how there is a force of tenstion for every location the string leaves the pulley. Also note how the tension forces are equal because the tension in a string is the same everywhere under the ideal string approximation.  The part of Newton's Second Law for part one of the question gives Numerically,   The part of Newton's Second Law for part two of the question gives Numerically,   "
},
{
  "id": "fig-pulley-ex-prob-1",
  "level": "2",
  "url": "sec-pulleys-ex-prob-1.html#fig-pulley-ex-prob-1",
  "type": "Figure",
  "number": "12.2.1",
  "title": "",
  "body": " The image shows a mechanical lifting system composed of a vertical and horizontal blue beam structure supporting a motor on top of the horizontal beam. A string runs horizonally to the right from the motor, turns over a pulley fixed to the end of the horizontal beam and heads vertically down. The string then wraps around a pulley suspended in the air and heads vertically upward were it is tether to a hook mounted on the bottom of the horizonal beam. The suspended pulley has a hook from which an elephant shaped weight marked with the letter “m,” representing a load or mass is tethered. The motor on top of the horizontal beam is pulling the string into it.   Mechanical pulley system lifting an elephant shaped mass labeled “m.”   "
},
{
  "id": "fig-pulleys-ex-prob-img-1",
  "level": "2",
  "url": "sec-pulleys-ex-prob-1.html#fig-pulleys-ex-prob-img-1",
  "type": "Figure",
  "number": "12.2.2",
  "title": "",
  "body": " free body diagram for the pulley with the mass attached. There is a force of tension on each side of the pulley acting up. The force of tension on each side of the pulley is the same. Gravity acts down.   Pulley free body diagram with two equal tension forces acting up and gravity acting down.   "
},
{
  "id": "exercises-ch-pulleys",
  "level": "1",
  "url": "exercises-ch-pulleys.html",
  "type": "Exercises",
  "number": "12.3",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   Fixed Pulleys    The kilogram block in is held in place by the massless rope passing over two massless, frictionless pulleys. Find the tensions to and the magnitude of force .   The diagram shows a two pulley, three rope mechanical system used to hold a mass labeled without moving. A fixed support is positioned at the top, holding the upper rope. The upper rope connects to the upper pully via a hook on the top of the pulley. The tension in the upper rope is labeled . The middle rope runs over the upper pulley from the right. The tension in this segment of the middle rope is labeled . A force labeled is applyed to the bottom of this segment of the middle rope. After looping over the upper pulley, the middle rope runs vertically down and loops under the lower pulley. The tension in this segment of the middle rope is labeled . After looping under the lower pulley, the middle rope runs vertically up and connects to the upper pully via a hook on the bottom of the pulley. The tension in this segment of the middle rope is labeled . The lower rope is fastened to the lower pulley via a hook on the bottom of the pulley, and runs vertically down where it is fastened to the hanging mass labeled . The tension in the lower rope is labeled .   Compound pulley system with labeled tension forces and a suspended mass.       "
},
{
  "id": "exercises-ch-pulleys-2-2",
  "level": "2",
  "url": "exercises-ch-pulleys.html#exercises-ch-pulleys-2-2",
  "type": "Exercise",
  "number": "12.3.1",
  "title": "",
  "body": "  The kilogram block in is held in place by the massless rope passing over two massless, frictionless pulleys. Find the tensions to and the magnitude of force .   The diagram shows a two pulley, three rope mechanical system used to hold a mass labeled without moving. A fixed support is positioned at the top, holding the upper rope. The upper rope connects to the upper pully via a hook on the top of the pulley. The tension in the upper rope is labeled . The middle rope runs over the upper pulley from the right. The tension in this segment of the middle rope is labeled . A force labeled is applyed to the bottom of this segment of the middle rope. After looping over the upper pulley, the middle rope runs vertically down and loops under the lower pulley. The tension in this segment of the middle rope is labeled . After looping under the lower pulley, the middle rope runs vertically up and connects to the upper pully via a hook on the bottom of the pulley. The tension in this segment of the middle rope is labeled . The lower rope is fastened to the lower pulley via a hook on the bottom of the pulley, and runs vertically down where it is fastened to the hanging mass labeled . The tension in the lower rope is labeled .   Compound pulley system with labeled tension forces and a suspended mass.     "
},
{
  "id": "sec-stat-kin-fric",
  "level": "1",
  "url": "sec-stat-kin-fric.html",
  "type": "Section",
  "number": "13.1",
  "title": "Static and Kinetic Friction",
  "body": " Static and Kinetic Friction  Begin watching at 0:11.   Their are two equations for the magnitude of friction. One applies in the case of static friction, and one applies in the case of kinetic friction. For static friction we have where is the magnitude of the force of friction, is the magnitude of the normal force, and is the coefficient of static friction. The coefficient of static friction is a property of the surface in question. Static friction has a magnitude that exactly cancels out the sum of the parts of forces that would cause sliding between the surfaces as long it's less than the maximum value. For kinetic friction we have , where is the coefficient of kinetic friction. Like , is a property of the material and . To get the normal force, you have to solve for it. It's not automatically equal to . The equations above are scalar equations. They don't tell us about direction. For direction use the rules in the video.  "
},
{
  "id": "sec-contact-friction-ex-prob-1",
  "level": "1",
  "url": "sec-contact-friction-ex-prob-1.html",
  "type": "Section",
  "number": "13.2",
  "title": "Contact Friction Example Problem 1",
  "body": " Contact Friction Example Problem 1  A curling stone is thrown in a straight line with . It finally comes to rest after sliding a distance . Calculate , the coefficient of kinetic friction between the curling stone and the ice.   A kinetic friction force labeled acts horizontally to the left on the curling iron. A normal force labeled acts vertically up on the curling iron. Gravity labeled acts vertically down on the curling iron.   Free body diagram for the curling iron.    We draw the free body diagram for this problem in . The part of Newton's Second Law gives The curling stone isn't floating up or down so . Then The part of Newton's Second Law gives Since we can relate and we can solve this problem using kinematics. Let's start by making a givens table   Givens Table                       The best kinematic equation for this problem is . Pluggin in zero and symbolic values gives Numerically,   "
},
{
  "id": "fig-friction-ex-prob-img-1",
  "level": "2",
  "url": "sec-contact-friction-ex-prob-1.html#fig-friction-ex-prob-img-1",
  "type": "Figure",
  "number": "13.2.1",
  "title": "",
  "body": " A kinetic friction force labeled acts horizontally to the left on the curling iron. A normal force labeled acts vertically up on the curling iron. Gravity labeled acts vertically down on the curling iron.   Free body diagram for the curling iron.   "
},
{
  "id": "table-frictin-ex-prob-1-givens",
  "level": "2",
  "url": "sec-contact-friction-ex-prob-1.html#table-frictin-ex-prob-1-givens",
  "type": "Table",
  "number": "13.2.2",
  "title": "Givens Table",
  "body": " Givens Table                      "
},
{
  "id": "sec-contact-friction-ex-prob-2",
  "level": "1",
  "url": "sec-contact-friction-ex-prob-2.html",
  "type": "Section",
  "number": "13.3",
  "title": "Contact Friction Example Problem 2",
  "body": " Contact Friction Example Problem 2  A horizontal tow rope is attached to a crate, in preparation for towing the crate to the right. The crate has mass , and the coefficient of static friction between the crate and the horizontal floor is . What range of tension values in the tow rope will give the crate an acceleration of 0?   A tension force labeled acts horizontally to the right on the crate. A static friction force labeled acts horizontally to the left on the crate. A normal force labeled acts vertically up on the crate. Gravity labeled acts vertically down on the crate.   Free body diagram for the crate.    We draw the free body diagram for this problem in . The part of Newton's Second Law gives  since the crate isn't floating up or down. Then The part of Newton's Second Law gives The problem asks us for the range of values of such that the acceleration is zero so we should set . Then So for acceleration to be zero we need   "
},
{
  "id": "fig-friction-ex-prob-img-2",
  "level": "2",
  "url": "sec-contact-friction-ex-prob-2.html#fig-friction-ex-prob-img-2",
  "type": "Figure",
  "number": "13.3.1",
  "title": "",
  "body": " A tension force labeled acts horizontally to the right on the crate. A static friction force labeled acts horizontally to the left on the crate. A normal force labeled acts vertically up on the crate. Gravity labeled acts vertically down on the crate.   Free body diagram for the crate.   "
},
{
  "id": "sec-wheels-fric",
  "level": "1",
  "url": "sec-wheels-fric.html",
  "type": "Section",
  "number": "13.4",
  "title": "Wheels and Friction",
  "body": " Wheels and Friction   A tire labeled “Hoosier” positioned above a microscopically jagged road surface. The tire has a microscopically jagged outer edge. Two green arrows on either side of the tire indicate its rotating counterclockwise. Beneath the tire, the road surface is drawn as a blue wavy line with raised bumps. Two horizontal force arrows are shown at the point where a tire bump meets a road bump. A light-blue arrow points left to represent the force exerted by the road bump on the tire bump. An orange arrow points right to represent the force exerted by the tire bump on the road bump.   Diagram showing a rotating tire interacting with a bumpy road surface, with arrows indicating opposing contact forces.    Imagine a car is moving with a constant velocity to the left. (Figure x) depicts the microscopically rough surfaces of one of the tires and the road interacting as the wheels rotate. When the orange-highlighted bump on the tire begins rotating counterclockwise, it hits the blue-highlighted bump on the road. The orange tire bump will exert a force to the right on the blue road bump. In return, the blue road bump pushes back to the left on the orange tire bump. So, we see that because the microscopic bumps in the tire are accelerating towards the microscopic bumps in the road, the tire gets pushed to the left, and hence, the whole car gets pushed to the left.   What about imperfect wheels?  The wheels we discussed so far would keep rolling forever if no active motorization or braking were applied. In real life, even a wheel which is not actively motorized or braking will eventually come to a stop because of the small amount of axle friction, and the deformation of the tire. The effect of the axle friction on a coasting wheel which should not otherwise be accelerating is called \"rolling friction.\" In a problem with a coasting wheel with rolling friction, we model the rolling vehicle as a sliding block with a very small coefficient of kinetic friction. This pretend coefficient of kinetic friction is called the coefficient of rolling friction, .  "
},
{
  "id": "fig-rolling-fric",
  "level": "2",
  "url": "sec-wheels-fric.html#fig-rolling-fric",
  "type": "Figure",
  "number": "13.4.1",
  "title": "",
  "body": " A tire labeled “Hoosier” positioned above a microscopically jagged road surface. The tire has a microscopically jagged outer edge. Two green arrows on either side of the tire indicate its rotating counterclockwise. Beneath the tire, the road surface is drawn as a blue wavy line with raised bumps. Two horizontal force arrows are shown at the point where a tire bump meets a road bump. A light-blue arrow points left to represent the force exerted by the road bump on the tire bump. An orange arrow points right to represent the force exerted by the tire bump on the road bump.   Diagram showing a rotating tire interacting with a bumpy road surface, with arrows indicating opposing contact forces.   "
},
{
  "id": "sec-wheels-fric-ex-prob",
  "level": "1",
  "url": "sec-wheels-fric-ex-prob.html",
  "type": "Section",
  "number": "13.5",
  "title": "Wheels and Friction Example Problem",
  "body": " Wheels and Friction Example Problem  A car accelerates from 0 to 120.0 kilometers per hour in 10.0 seconds without skidding. What range of between the tires and the road could permit this amount of acceleration?  Let's convert the cars acceleration fro kilometers per hour to meters per second. Now we draw the free body diagram for this problem in .   A static friction force labeled acts horizontally to the right on the car. A normal force labeled acts vertically up on the car. Gravity labeled acts vertically down on the car.   Free body diagram for the car.    Looking at the part of Newton's Second Law we get  since the car isn't floating up or down. Then Looking at the part of Newton's Second Law we get So for the car to have the required acceleration we must have To get the exact value lets solve for using kinematics. Using we get Pluggin this in gives Numerically   "
},
{
  "id": "fig-friction-wheels-ex-prob-img",
  "level": "2",
  "url": "sec-wheels-fric-ex-prob.html#fig-friction-wheels-ex-prob-img",
  "type": "Figure",
  "number": "13.5.1",
  "title": "",
  "body": " A static friction force labeled acts horizontally to the right on the car. A normal force labeled acts vertically up on the car. Gravity labeled acts vertically down on the car.   Free body diagram for the car.   "
},
{
  "id": "exercises-ch-contact-friction",
  "level": "1",
  "url": "exercises-ch-contact-friction.html",
  "type": "Exercises",
  "number": "13.6",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   Static and Kinetic Friction    A block of given mass m is placed on a table with given coefficient of static friction . The table is then tilted above the horizontal. What angle should the table be tilted at in order for the block to begin sliding down the table (in other words, the acceleration down the slope is only infinitesimally greater than )?      A driver in a 1000.0 kilogram car traveling at 35.0 meters per second slams on the brakes and skids to a stop. If the coefficient of friction between the tires and the horizontal road is 0.800, how long will the skid marks be?      A block of mass is given a very brief push up a 20.0 degree frictionless incline to give it an initial speed of 12.0 meters per second. How far along the surface of the incline does the block slide before coming to rest?      Jason takes off from rest across level water on his jet-powered skis. The combined mass of Jason and his skis is 75 kilograms (the mass of the fuel is negligible). The skis have a thrust of 200.0 newtons and a coefficient of kinetic friction on water of 0.10. Unfortunately, the skis run out of fuel after only 26 seconds. How far has Jason traveled when he finally coasts to a stop?      A factory robot drops a 10.0 kilogram computer onto a conveyor belt running at 7.8 meters per second. The materials are such that and between the belt and the computer. How far is the computer dragged before it is riding smoothly on the belt?      You push downward on a box at an angle 25 degrees below the horizontal with a force of 750.0 newtons. If the box is on a flat horizontal surface for which the coefficient of static friction with the box is 0.67, what is the mass of the heaviest box you will be able to move?      A driver in a 1100.0 kilogram car traveling at 35.0 meters per second on a straight road wishes to accelerate to 45.0 meters per second. If the coefficient of static friction between the tires and the horizontal road is 0.800, what is the smallest possible amount of time it will take to reach the desired speed?      Contact Friction and Wheels    A driver in a 1200.0 kilogram car traveling at 25.0 meters per second on a straight road wishes to come to rest. If the coefficient of static friction between the tires and the horizontal road is 0.800 and the coefficient of kinetic friction between the tires and the road is 0.600, what is the smallest possible displacement it will take to brake to a stop?      A driver in a 1300.0 kilogram car has bald tires, and is planning to try to drive up a hill with an angle 10.0 degrees above horizontal. The coefficient of static friction between the tires and the road is only 0.500. A stormy headwind is blowing downhill towards the car, exerting a wind force on the car of 432 newtons, parallel to the hill. What is the maximum acceleration of this car up the hill?     "
},
{
  "id": "exercises-ch-contact-friction-2-2",
  "level": "2",
  "url": "exercises-ch-contact-friction.html#exercises-ch-contact-friction-2-2",
  "type": "Exercise",
  "number": "13.6.1",
  "title": "",
  "body": "  A block of given mass m is placed on a table with given coefficient of static friction . The table is then tilted above the horizontal. What angle should the table be tilted at in order for the block to begin sliding down the table (in other words, the acceleration down the slope is only infinitesimally greater than )?   "
},
{
  "id": "exercises-ch-contact-friction-2-3",
  "level": "2",
  "url": "exercises-ch-contact-friction.html#exercises-ch-contact-friction-2-3",
  "type": "Exercise",
  "number": "13.6.2",
  "title": "",
  "body": "  A driver in a 1000.0 kilogram car traveling at 35.0 meters per second slams on the brakes and skids to a stop. If the coefficient of friction between the tires and the horizontal road is 0.800, how long will the skid marks be?   "
},
{
  "id": "exercises-ch-contact-friction-2-4",
  "level": "2",
  "url": "exercises-ch-contact-friction.html#exercises-ch-contact-friction-2-4",
  "type": "Exercise",
  "number": "13.6.3",
  "title": "",
  "body": "  A block of mass is given a very brief push up a 20.0 degree frictionless incline to give it an initial speed of 12.0 meters per second. How far along the surface of the incline does the block slide before coming to rest?   "
},
{
  "id": "exercises-ch-contact-friction-2-5",
  "level": "2",
  "url": "exercises-ch-contact-friction.html#exercises-ch-contact-friction-2-5",
  "type": "Exercise",
  "number": "13.6.4",
  "title": "",
  "body": "  Jason takes off from rest across level water on his jet-powered skis. The combined mass of Jason and his skis is 75 kilograms (the mass of the fuel is negligible). The skis have a thrust of 200.0 newtons and a coefficient of kinetic friction on water of 0.10. Unfortunately, the skis run out of fuel after only 26 seconds. How far has Jason traveled when he finally coasts to a stop?   "
},
{
  "id": "exercises-ch-contact-friction-2-6",
  "level": "2",
  "url": "exercises-ch-contact-friction.html#exercises-ch-contact-friction-2-6",
  "type": "Exercise",
  "number": "13.6.5",
  "title": "",
  "body": "  A factory robot drops a 10.0 kilogram computer onto a conveyor belt running at 7.8 meters per second. The materials are such that and between the belt and the computer. How far is the computer dragged before it is riding smoothly on the belt?   "
},
{
  "id": "exercises-ch-contact-friction-2-7",
  "level": "2",
  "url": "exercises-ch-contact-friction.html#exercises-ch-contact-friction-2-7",
  "type": "Exercise",
  "number": "13.6.6",
  "title": "",
  "body": "  You push downward on a box at an angle 25 degrees below the horizontal with a force of 750.0 newtons. If the box is on a flat horizontal surface for which the coefficient of static friction with the box is 0.67, what is the mass of the heaviest box you will be able to move?   "
},
{
  "id": "exercises-ch-contact-friction-2-8",
  "level": "2",
  "url": "exercises-ch-contact-friction.html#exercises-ch-contact-friction-2-8",
  "type": "Exercise",
  "number": "13.6.7",
  "title": "",
  "body": "  A driver in a 1100.0 kilogram car traveling at 35.0 meters per second on a straight road wishes to accelerate to 45.0 meters per second. If the coefficient of static friction between the tires and the horizontal road is 0.800, what is the smallest possible amount of time it will take to reach the desired speed?   "
},
{
  "id": "exercises-ch-contact-friction-3-2",
  "level": "2",
  "url": "exercises-ch-contact-friction.html#exercises-ch-contact-friction-3-2",
  "type": "Exercise",
  "number": "13.6.8",
  "title": "",
  "body": "  A driver in a 1200.0 kilogram car traveling at 25.0 meters per second on a straight road wishes to come to rest. If the coefficient of static friction between the tires and the horizontal road is 0.800 and the coefficient of kinetic friction between the tires and the road is 0.600, what is the smallest possible displacement it will take to brake to a stop?   "
},
{
  "id": "exercises-ch-contact-friction-3-3",
  "level": "2",
  "url": "exercises-ch-contact-friction.html#exercises-ch-contact-friction-3-3",
  "type": "Exercise",
  "number": "13.6.9",
  "title": "",
  "body": "  A driver in a 1300.0 kilogram car has bald tires, and is planning to try to drive up a hill with an angle 10.0 degrees above horizontal. The coefficient of static friction between the tires and the road is only 0.500. A stormy headwind is blowing downhill towards the car, exerting a wind force on the car of 432 newtons, parallel to the hill. What is the maximum acceleration of this car up the hill?   "
},
{
  "id": "sec-newtons-third",
  "level": "1",
  "url": "sec-newtons-third.html",
  "type": "Section",
  "number": "14.1",
  "title": "Newton’s Third Law",
  "body": " Newton's Third Law  Watch from 0:10.0 to 1:30.0.   Watch entire video.   Newton's 3rd Law is used in problems when two interacting objects are pushing or pulling on each other, and you need to draw the free-body diagrams of both of the objects. The fact that the magnitude of the tension force is the same throughout a tight string is a result of Newton's third law.  "
},
{
  "id": "sec-tips-and-tricks",
  "level": "1",
  "url": "sec-tips-and-tricks.html",
  "type": "Section",
  "number": "14.2",
  "title": "Tips and Tricks",
  "body": " Tips and Tricks  During free-body diagram construction:   You only use Newton's 3rd Law if you are drawing at least two FBD's (of objects interacting with each other).    Force identification lists really help to make sure you got all the forces: if you see a force from object number 2 in the force identification list of object number 1's FBD, then check to make sure you put the same force from object number 1 in the force identification list of object number 2's FBD.    Cross-check the two FBD's for opposite directions: check that the force from object number 2 on object number 1's FBD is in the opposite direction of the force from object number 1 on object number 2's FBD.     During equation construction:   If you have a stack of interacting objects, it's usually best to first try to solve the object with the fewest forces on the FBD; that's usually the object at the top of the stack.    If you've already solved for the force from object number 2 on object number 1's FBD, then the force from object number 1 on object number 2's FBD is the same magnitude. So, your solved force value from FBD number 1 becomes a given in FBD number 2. Make sure to sub that in when working on the equations for FBD number 2.     "
},
{
  "id": "sec-newtons-third-ex-prob",
  "level": "1",
  "url": "sec-newtons-third-ex-prob.html",
  "type": "Section",
  "number": "14.3",
  "title": "Newton’s Third Law Example Problem",
  "body": " Newton's Third Law Example Problem   The diagram shows two rectangular blocks arranged vertically on a horizontal surface. The upper block is labeled , and it rests directly on top of a larger lower block labeled . A horizontal rope segment is attached to the left side of the upper block, indicating a leftward tension force labeled . The horizontal rope segment leaves the left side of the upper block and attaches to wall to the left of both blocks. A second rope segment is attached to the right side of the lower block, where a hand pulls to the right, creating a tension force labeled . Two kinetic friction coefficients are marked. The coefficient is placed at the interface between the upper and lower blocks, indicating friction between and . The coefficient is placed beneath the lower block, indicating friction between and the ground.   Two stacked blocks with labeled masses, friction coefficients, and tension forces.    A block of soap of mass = 1.00 kilogram is stacked on top of a block of pine of mass = 2.00 kilograms. The soap is tied to the wall on the left by string number 1, while the pine is pulled to the right by string number 2, with a force of 20.0 Newtons. The coefficient of kinetic friction between the soap and the pine is , while the coefficient of kinetic friction between the pine and the ground is .   What is the tension in string number 1?    What is the magnitude of the acceleration of the block of pine?      A kinetic friction force labeled from the pine acts horizontally to the right on the soap. A tension force labeled acts horizontally to the left on the soap. A normal force labeled from the pine acts vertically up on the soap. Gravity labeled acts vertically down on the soap.   Free body diagram for the soap.     A tension force labeled acts horizontally to the right on the pine. A kinetic friction force labeled from the soap acts horizontally to the left on the pine. A kinetic friction force labeled from the ground acts horizontally to the left on the pine. A normal force labeled from the ground acts vertically up on the pine. A normal force labeled from the soap acts vertically down on the pine. Gravity labeled acts vertically down on the pine.   Free body diagram for the curling pine.    We draw the free body diagram for the soap in and the free body diagram for the pine in . Because of Newton's Third Law the normal force of on is the same magnitude but opposite direction as the normal force of on . Similarly, because of Newton's Third Law the contact friction force of on is the same magnitued but opposite direction as the contact friction force of on . Since the soap has less forces acting on it let's focus on it first. The part of Newton's Second Law gives where since the soap is remaining still. Then For the part of Newton's Second Law we get Pluggin in numerically we get This answers part one of the question.  To answer part two lets look at Newton's Second Law for the pine. The part of Newton's Second Law gives The pine isn't moving in direction so . We previously solved for and got . Plugging these values in gives The part of Newton's Second law gives We previously solved for and . Pluggin in these values we get Numerically we get   "
},
{
  "id": "fig-newt-third-ex-prob-pic",
  "level": "2",
  "url": "sec-newtons-third-ex-prob.html#fig-newt-third-ex-prob-pic",
  "type": "Figure",
  "number": "14.3.1",
  "title": "",
  "body": " The diagram shows two rectangular blocks arranged vertically on a horizontal surface. The upper block is labeled , and it rests directly on top of a larger lower block labeled . A horizontal rope segment is attached to the left side of the upper block, indicating a leftward tension force labeled . The horizontal rope segment leaves the left side of the upper block and attaches to wall to the left of both blocks. A second rope segment is attached to the right side of the lower block, where a hand pulls to the right, creating a tension force labeled . Two kinetic friction coefficients are marked. The coefficient is placed at the interface between the upper and lower blocks, indicating friction between and . The coefficient is placed beneath the lower block, indicating friction between and the ground.   Two stacked blocks with labeled masses, friction coefficients, and tension forces.   "
},
{
  "id": "fig-newt-third-law-ex-prob-img-1",
  "level": "2",
  "url": "sec-newtons-third-ex-prob.html#fig-newt-third-law-ex-prob-img-1",
  "type": "Figure",
  "number": "14.3.2",
  "title": "",
  "body": " A kinetic friction force labeled from the pine acts horizontally to the right on the soap. A tension force labeled acts horizontally to the left on the soap. A normal force labeled from the pine acts vertically up on the soap. Gravity labeled acts vertically down on the soap.   Free body diagram for the soap.   "
},
{
  "id": "fig-newt-third-law-ex-prob-img-2",
  "level": "2",
  "url": "sec-newtons-third-ex-prob.html#fig-newt-third-law-ex-prob-img-2",
  "type": "Figure",
  "number": "14.3.3",
  "title": "",
  "body": " A tension force labeled acts horizontally to the right on the pine. A kinetic friction force labeled from the soap acts horizontally to the left on the pine. A kinetic friction force labeled from the ground acts horizontally to the left on the pine. A normal force labeled from the ground acts vertically up on the pine. A normal force labeled from the soap acts vertically down on the pine. Gravity labeled acts vertically down on the pine.   Free body diagram for the curling pine.   "
},
{
  "id": "exercises-ch-newtons-third",
  "level": "1",
  "url": "exercises-ch-newtons-third.html",
  "type": "Exercises",
  "number": "14.4",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   Note .     The brick of soap in weighs 12.7 Newtons and the wooden tray weighs 35.2 Newtons. The coefficient of static friction between the soap and tray is unknown. The coefficient of kinetic friction between the tray and the ground is 0.293. Find the magnitude of the horizontal force necessary to drag the tray to the right with a magnitude of acceleration 0.500 meters per second squared, if the soap only accelerates rightwards at 0.250 meters per second squared while resting on (in other words, the soap is gradually getting left behind by the tray).   The image shows two rectangular blocks arranged vertically. Block A is smaller and rests directly and completely on top of block B. Block A is light in color, while block B is larger and brown. Both blocks sit on a flat blue horizontal surface. A horizontal arrow labeled F extends to the right from the left side of block B, indicating an applied force acting on block B. The force is applied at the mid-height of block B.   Two stacked blocks labeled A and B with a rightward force applied to block B.        You see the boy next door trying to push a crate down the sidewalk. He can barely keep it moving, and his feet occasionally slip. You start to wonder how heavy the crate is. You call to ask the boy his mass, and he replies \" 45 kilograms\". From your recent physics class you estimate that the static and kinetic coefficients of friction are 0.90 and 0.40 for the boy's shoes, and 0.50 and 0.20 for the crate.      Two packages at UPS start sliding down the 20.0 degree ramp shown in . Package A has a mass of 6.00 kilograms and a coefficient of kinetic friction of 0.210. Package B has a mass of 8.00 kilograms and a coefficient of kinetic friction of 0.130. How long does it take package A to reach the bottom?   The image shows an inclined plane tilted at a 20 degree angle relative to the horizontal. Two rectangular blocks, labeled A and B, are placed on the slope. Block A sits lower on the incline, and block B is positioned directly above and touching block A along the same line of the slope. A measurement line indicates that block A is 2 meters from the bottom of the incline.   Two touching labeled blocks on a 20 degree incline with a 2 meter distance marked to the lower block.      "
},
{
  "id": "exercises-ch-newtons-third-3",
  "level": "2",
  "url": "exercises-ch-newtons-third.html#exercises-ch-newtons-third-3",
  "type": "Exercise",
  "number": "14.4.1",
  "title": "",
  "body": "  The brick of soap in weighs 12.7 Newtons and the wooden tray weighs 35.2 Newtons. The coefficient of static friction between the soap and tray is unknown. The coefficient of kinetic friction between the tray and the ground is 0.293. Find the magnitude of the horizontal force necessary to drag the tray to the right with a magnitude of acceleration 0.500 meters per second squared, if the soap only accelerates rightwards at 0.250 meters per second squared while resting on (in other words, the soap is gradually getting left behind by the tray).   The image shows two rectangular blocks arranged vertically. Block A is smaller and rests directly and completely on top of block B. Block A is light in color, while block B is larger and brown. Both blocks sit on a flat blue horizontal surface. A horizontal arrow labeled F extends to the right from the left side of block B, indicating an applied force acting on block B. The force is applied at the mid-height of block B.   Two stacked blocks labeled A and B with a rightward force applied to block B.     "
},
{
  "id": "exercises-ch-newtons-third-4",
  "level": "2",
  "url": "exercises-ch-newtons-third.html#exercises-ch-newtons-third-4",
  "type": "Exercise",
  "number": "14.4.2",
  "title": "",
  "body": "  You see the boy next door trying to push a crate down the sidewalk. He can barely keep it moving, and his feet occasionally slip. You start to wonder how heavy the crate is. You call to ask the boy his mass, and he replies \" 45 kilograms\". From your recent physics class you estimate that the static and kinetic coefficients of friction are 0.90 and 0.40 for the boy's shoes, and 0.50 and 0.20 for the crate.   "
},
{
  "id": "exercises-ch-newtons-third-5",
  "level": "2",
  "url": "exercises-ch-newtons-third.html#exercises-ch-newtons-third-5",
  "type": "Exercise",
  "number": "14.4.3",
  "title": "",
  "body": "  Two packages at UPS start sliding down the 20.0 degree ramp shown in . Package A has a mass of 6.00 kilograms and a coefficient of kinetic friction of 0.210. Package B has a mass of 8.00 kilograms and a coefficient of kinetic friction of 0.130. How long does it take package A to reach the bottom?   The image shows an inclined plane tilted at a 20 degree angle relative to the horizontal. Two rectangular blocks, labeled A and B, are placed on the slope. Block A sits lower on the incline, and block B is positioned directly above and touching block A along the same line of the slope. A measurement line indicates that block A is 2 meters from the bottom of the incline.   Two touching labeled blocks on a 20 degree incline with a 2 meter distance marked to the lower block.     "
},
{
  "id": "sec-work",
  "level": "1",
  "url": "sec-work.html",
  "type": "Section",
  "number": "15.1",
  "title": "Work",
  "body": " Work   This chapter and the next explores mechanical energy and related concepts. Before beginning it will be helpful to give an intuitive but unrigourous, imprecise, and slightly incorrect overview of energy. Unrigourously, energy is a quantitative property of a system of one or more objects describing its ability to cause change. Energy can have many different forms. Some examples are electrical, chemical, and gravitational. A useful analogy for energy is money. Money lets you buy stuff and can be in many different accounts. Energy lets you do stuff and can be in many different forms. The total energy of a system is like the system's \"net worth\".  One important energy \"account\" is kinetic energy. The kinetic energy (often written as or ) is the energy an object has due to its motion. Mathimatically, where is mass of the object and is the speed of the object. In addition to the kinetic energy \"account\", every force that conserves energy (doesn't change the energy of the system) also has an energy account. For example, the gravitational energy \"account\" is the \"account\" associated with the gravitational force.  In this section we will explore the concept of work in physics. Work ( ) on a system of one or more objects is the energy transferred to that systems by means of a force acting on the object. Energy transferred to the object is positive work, and energy transferred from the object is negative work. Continuing the money analogy, work is analogous to transferring money between accounts. Positive work done by a force transfers energy from the account associated with that force into the object's kinetic energy account Negative work done by a force transfers energy out of the object's kinetic energy account and into the account associated with that force.    Work From a Single Force  Consider an object moving along a path. If there is a force that point along the path, there will be acceleration in the direction of motion. As a result, the object's speed will change. Let's denote an arbitrary infinitesmally small displacement along the path as . The magnitude of is the length of the infinitesmal path segment and the direction of is the direction of motion. The amount of force parallel to the path can be found using the dot product: . The quantity multiplies the component of the force parallel to the path by the length of the path segment.  If force points with the path, the speed increases: If force points against the path, the speed decreases:   The quantity is referred to as the infinitesimal work performed by the force on the object over the displacement , which changes the objects speed: Adding up the small amounts of work done by the force along each segment gives the work along the entire path. where at the bottom of the integral sign denote the countor or path the integral is to be taken over. The units of work are which are also known as \"joules\" .  If the path is a straight line and the force acting on the object is constant over the path, then this expression reduces to where is the displacement of the total straight line path.  positive work increases speed: negative work decreases speed: The \"differential\" length represents a change in position along the path. In two-dimensions... (the path defines the relationship between and ). The change in position can also be related to velocity over a short period of time . Therefore,      Net Work  The work done by all the forces acting on the object as it moves along the path is known as the net work . The net work is given by Because the path is the same for each force (object only follows one path), we can bring the summation into the integral Noting that we get    "
},
{
  "id": "subsec-work-from-mult-forces-2",
  "level": "2",
  "url": "sec-work.html#subsec-work-from-mult-forces-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "net work "
},
{
  "id": "sec-work-kin-energy-theorem",
  "level": "1",
  "url": "sec-work-kin-energy-theorem.html",
  "type": "Section",
  "number": "15.2",
  "title": "Work-Kinetic Energy Theorem",
  "body": " Work-Kinetic Energy Theorem  Recall from the that the kinetic energy of an object is the energy it has due to its motion, and that is mathimatically given by    Work-Kinetic Energy Theorem   The net work done on a system is given by          "
},
{
  "id": "thm-work-kin-energy-theorem",
  "level": "2",
  "url": "sec-work-kin-energy-theorem.html#thm-work-kin-energy-theorem",
  "type": "Theorem",
  "number": "15.2.1",
  "title": "Work-Kinetic Energy Theorem.",
  "body": " Work-Kinetic Energy Theorem   The net work done on a system is given by         "
},
{
  "id": "exercises-ch-work-and-kinetic-energy",
  "level": "1",
  "url": "exercises-ch-work-and-kinetic-energy.html",
  "type": "Exercises",
  "number": "15.3",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   Dot product Review    Evaluate the dot product if meters and meters pers second squared.      Evaluate the dot product of the pair of vectors in .   Two vectors of magnitudes 3 and 5 extend from a shared origin with a 40 degree angle between them.         Evaluate the dot product if and .      Evaluate the dot product of the pair of vectors in .   Two vectors of magnitudes 2 and 3 extend from a shared origin with a 140 degree angle between them.          Two vectors of magnitudes 3 and 4 extend from a shared origin with a 90 degree angle between them.     Evaluate the dot product of the pair of vectors in .      Work Under Constant Force and Straight Line Displacement    The two ropes seen in are used to lower a 255 kilogram piano 5.70 m from a second-story window to the ground.  How much work is done by each of the three forces?  What is the net work done?     The image shows a piano suspended by two cables, each exerting a tension force at different angles. The forces originate from the top corners of the piano and extend upward. , with a magnitude of 1830 newtons, is directed upward and to the left at a 60 degree angle from the horizontal. , with a magnitude of 1295 newtons, is directed upward and to the right at a 45 degree angle from the horizontal. A third force, , represents gravity acting on the piano. This vector points straight downward from the piano's center and has a magnitude of 2500 newtons.   Three force vectors acting on a suspended piano, including two angled tension forces and one downward gravitational force.        A 25 kilogram air compressor is dragged up a rough incline from coordinates meters to meters, where the y-axis is vertical. How much work does gravity do on the compressor during this displacement?      The three ropes shown in the bird's-eye view of the figure below are used to drag a crate 3.7 m across the floor.  How much work is done by each of the three tension forces?  How much work is done by the normal and gravity forces?  What is the net work done?     The diagram shows a single crate with three labeled tension forces applied to it. One force, , has a magnitude of 600 newtons and is directed upward and to the right at a 20 degree angle above the horizontal. A second force, , has a magnitude of 410 newtons and is directed downward and to the right at a 30 degree angle below the horizontal. The third force, , has a magnitude of 650 newtons and is directed horizontally to the left. A separate velocity vector labeled v extends horizontally to the right from the block. The block is centered, and all force arrows originate from the same point on the block.   Three tension forces acting on a block at different angles with a rightward velocity vector.        Work in General    A force on an object is given by . What is the work done by that force when the object moves from meters to meters? Is it a negative or positive amount of work (the sign does matter)?      A force on an object is given by . What is the work done by that force when the object moves from meters to meters? Is it a negative or positive amount of work (the sign does matter)?     Deriving the Relation between Work and Kinetic Energy: the Work-Kinetic Energy Theorem (1-D version)   Suppose a target object is travelling along the x-axis (starting at position and speed , ending at position and speed ), and there is a horizontal force along the x-axis applied to the target object, but the force varies as the object changes position. So, force is , a function of . You'd think that applying a force along the direction of travel would make the velocity . Based on this information, the question we will answer is: how much work is done by the force, and how is that related to the velocity of the object?   What general formula do we need for computing the work done by a varying force?     When doing an integral of a dot product, it's easiest to figure out the dot product attempting to integrate:   Since the force is only in the x direction, we can easily write the force vector in component form:     Since the small displacement ds is only in the x direction, we can easily write the displacement vector in component form:     Therefore, the dot product is:        Subbing the dot product back into the integral, we see the integral for our 1-D case becomes:     Eventually, our original question wanted us to write this formula in terms of velocity. We'll have to do this substitution in a couple of stages rather than all at once.   Right now, one of the symbols in the formula has a relation to kinematics. Which one of Newton's Laws can we use to substitute for the force F so it is more related to velocity?     Making the above substitution into the formula for work, we get:     The acceleration isn't constant, so we can't use the equations of kinematics to relate it to velocity. However, we can go all the way back to the basic calculus definition to substitute for the acceleration so it is related to velocity: Multiplying the top and bottom by dx allows us to perform something called the Chain Rule: (Rearrange this into something more useful by switching the order in which the denominators are multiplied):     Making the above substitution into the formula for work, we get:        Cancelling dx from the numerator and denominator simplifies this to:     But we already know that is the definition of , so we can simplify that, too, which yields:     Mass m is constant even though the force pushing on the object is varying. So, m factors out:     This is an easy integral, but we need to apply limits of integration so that there aren't constants of integration. Since the variable of integration here turned out to be , then according to the original givens, the lower limit should be , and the upper limit should be .     Now carry out the integral, giving:     Carrying out the evaluation between the limits gives the answer to our question, which was how the work relates to the velocity:     Physicists define the instantaneous kinetic energy, , based on the target object's speed at a given time. So, the final kinetic energy is evaluated using the final speed, , and the initial kinetic energy is evaluated using the initial speed, . Making these substitutions, the equation can be written in terms of kinetic energies: In other words, the net work done (total done by all forces) is the change in kinetic energy: That is called the Work-Energy Theorem.    Lastly, SI units for energy must be: = Joules.    The 3-D version of the Work-Energy Theorem just requires adding up the work done in the x direction with the work in the y and z directions. The final equation actually comes out the same, as long as the speeds used are the magnitudes of the 3-D velocity vectors!         You are driving your car uphill along a straight road. Suddenly, you see a car run a red light and enter the intersection just ahead of you. You slam on your brakes and skid in a straight line to a stop, leaving skid marks 30 meters long. A policeman observes the whole incident and gives a ticket to the other car for running a red light. He also gives you a ticket for exceeding the speed limit of 50 kilometers per hour. When you get home, you read your physics book and estimate that the coefficient of kinetic friction between your tires and the road was 0.60, and the coefficient of static friction was 0.80. You estimate that the hill made an angle of about 10 degrees with the horizontal. You look in your owner's manual and find that your car's mass is 930 kilograms. Based on this evidence, could you successfully fight the traffic ticket in court?      You have landed a summer job with a company that has been given the contract to design the ski jump for the next Winter Olympics. The track is coated with snow and has an angle of 25 degrees from the horizontal. A skier zips down the ski jump ramp so that he leaves it at high speed. The winner is the person who jumps the farthest after leaving the end of the ramp. Your task is to determine the height of the starting gate above the end of the ramp, which will determine the mechanical structure of the ski jump facility. You have been told that the typical ski-jumper pushes off from the starting gate at a speed of 2.0 meters per second. For safety reasons, your design should be such that for a perfect run down the ramp, the skier's speed before leaving the end of the ramp and sailing through the air should be no more than 80 kilometers per hour. You run some experiments on various skis used by the jumpers and determine that the coefficient of static friction between the snow and the skis is 0.10 and its coefficient of kinetic friction is 0.02. Since the ski-jumpers bend over and wear very aerodynamic suits, you decide to neglect the air resistance to make your design.     "
},
{
  "id": "exercises-ch-work-and-kinetic-energy-2-2",
  "level": "2",
  "url": "exercises-ch-work-and-kinetic-energy.html#exercises-ch-work-and-kinetic-energy-2-2",
  "type": "Exercise",
  "number": "15.3.1",
  "title": "",
  "body": "  Evaluate the dot product if meters and meters pers second squared.   "
},
{
  "id": "exercises-ch-work-and-kinetic-energy-2-3",
  "level": "2",
  "url": "exercises-ch-work-and-kinetic-energy.html#exercises-ch-work-and-kinetic-energy-2-3",
  "type": "Exercise",
  "number": "15.3.2",
  "title": "",
  "body": "  Evaluate the dot product of the pair of vectors in .   Two vectors of magnitudes 3 and 5 extend from a shared origin with a 40 degree angle between them.      "
},
{
  "id": "exercises-ch-work-and-kinetic-energy-2-4",
  "level": "2",
  "url": "exercises-ch-work-and-kinetic-energy.html#exercises-ch-work-and-kinetic-energy-2-4",
  "type": "Exercise",
  "number": "15.3.3",
  "title": "",
  "body": "  Evaluate the dot product if and .   "
},
{
  "id": "exercises-ch-work-and-kinetic-energy-2-5",
  "level": "2",
  "url": "exercises-ch-work-and-kinetic-energy.html#exercises-ch-work-and-kinetic-energy-2-5",
  "type": "Exercise",
  "number": "15.3.4",
  "title": "",
  "body": "  Evaluate the dot product of the pair of vectors in .   Two vectors of magnitudes 2 and 3 extend from a shared origin with a 140 degree angle between them.      "
},
{
  "id": "exercises-ch-work-and-kinetic-energy-2-6",
  "level": "2",
  "url": "exercises-ch-work-and-kinetic-energy.html#exercises-ch-work-and-kinetic-energy-2-6",
  "type": "Exercise",
  "number": "15.3.5",
  "title": "",
  "body": "   Two vectors of magnitudes 3 and 4 extend from a shared origin with a 90 degree angle between them.     Evaluate the dot product of the pair of vectors in .   "
},
{
  "id": "exercises-ch-work-and-kinetic-energy-3-2",
  "level": "2",
  "url": "exercises-ch-work-and-kinetic-energy.html#exercises-ch-work-and-kinetic-energy-3-2",
  "type": "Exercise",
  "number": "15.3.6",
  "title": "",
  "body": "  The two ropes seen in are used to lower a 255 kilogram piano 5.70 m from a second-story window to the ground.  How much work is done by each of the three forces?  What is the net work done?     The image shows a piano suspended by two cables, each exerting a tension force at different angles. The forces originate from the top corners of the piano and extend upward. , with a magnitude of 1830 newtons, is directed upward and to the left at a 60 degree angle from the horizontal. , with a magnitude of 1295 newtons, is directed upward and to the right at a 45 degree angle from the horizontal. A third force, , represents gravity acting on the piano. This vector points straight downward from the piano's center and has a magnitude of 2500 newtons.   Three force vectors acting on a suspended piano, including two angled tension forces and one downward gravitational force.     "
},
{
  "id": "exercises-ch-work-and-kinetic-energy-3-3",
  "level": "2",
  "url": "exercises-ch-work-and-kinetic-energy.html#exercises-ch-work-and-kinetic-energy-3-3",
  "type": "Exercise",
  "number": "15.3.7",
  "title": "",
  "body": "  A 25 kilogram air compressor is dragged up a rough incline from coordinates meters to meters, where the y-axis is vertical. How much work does gravity do on the compressor during this displacement?   "
},
{
  "id": "exercises-ch-work-and-kinetic-energy-3-4",
  "level": "2",
  "url": "exercises-ch-work-and-kinetic-energy.html#exercises-ch-work-and-kinetic-energy-3-4",
  "type": "Exercise",
  "number": "15.3.8",
  "title": "",
  "body": "  The three ropes shown in the bird's-eye view of the figure below are used to drag a crate 3.7 m across the floor.  How much work is done by each of the three tension forces?  How much work is done by the normal and gravity forces?  What is the net work done?     The diagram shows a single crate with three labeled tension forces applied to it. One force, , has a magnitude of 600 newtons and is directed upward and to the right at a 20 degree angle above the horizontal. A second force, , has a magnitude of 410 newtons and is directed downward and to the right at a 30 degree angle below the horizontal. The third force, , has a magnitude of 650 newtons and is directed horizontally to the left. A separate velocity vector labeled v extends horizontally to the right from the block. The block is centered, and all force arrows originate from the same point on the block.   Three tension forces acting on a block at different angles with a rightward velocity vector.     "
},
{
  "id": "exercises-ch-work-and-kinetic-energy-4-2",
  "level": "2",
  "url": "exercises-ch-work-and-kinetic-energy.html#exercises-ch-work-and-kinetic-energy-4-2",
  "type": "Exercise",
  "number": "15.3.9",
  "title": "",
  "body": "  A force on an object is given by . What is the work done by that force when the object moves from meters to meters? Is it a negative or positive amount of work (the sign does matter)?   "
},
{
  "id": "exercises-ch-work-and-kinetic-energy-4-3",
  "level": "2",
  "url": "exercises-ch-work-and-kinetic-energy.html#exercises-ch-work-and-kinetic-energy-4-3",
  "type": "Exercise",
  "number": "15.3.10",
  "title": "",
  "body": "  A force on an object is given by . What is the work done by that force when the object moves from meters to meters? Is it a negative or positive amount of work (the sign does matter)?   "
},
{
  "id": "exercises-ch-work-and-kinetic-energy-4-4",
  "level": "2",
  "url": "exercises-ch-work-and-kinetic-energy.html#exercises-ch-work-and-kinetic-energy-4-4",
  "type": "Exercise",
  "number": "15.3.11",
  "title": "Deriving the Relation between Work and Kinetic Energy: the Work-Kinetic Energy Theorem (1-D version).",
  "body": " Deriving the Relation between Work and Kinetic Energy: the Work-Kinetic Energy Theorem (1-D version)   Suppose a target object is travelling along the x-axis (starting at position and speed , ending at position and speed ), and there is a horizontal force along the x-axis applied to the target object, but the force varies as the object changes position. So, force is , a function of . You'd think that applying a force along the direction of travel would make the velocity . Based on this information, the question we will answer is: how much work is done by the force, and how is that related to the velocity of the object?   What general formula do we need for computing the work done by a varying force?     When doing an integral of a dot product, it's easiest to figure out the dot product attempting to integrate:   Since the force is only in the x direction, we can easily write the force vector in component form:     Since the small displacement ds is only in the x direction, we can easily write the displacement vector in component form:     Therefore, the dot product is:        Subbing the dot product back into the integral, we see the integral for our 1-D case becomes:     Eventually, our original question wanted us to write this formula in terms of velocity. We'll have to do this substitution in a couple of stages rather than all at once.   Right now, one of the symbols in the formula has a relation to kinematics. Which one of Newton's Laws can we use to substitute for the force F so it is more related to velocity?     Making the above substitution into the formula for work, we get:     The acceleration isn't constant, so we can't use the equations of kinematics to relate it to velocity. However, we can go all the way back to the basic calculus definition to substitute for the acceleration so it is related to velocity: Multiplying the top and bottom by dx allows us to perform something called the Chain Rule: (Rearrange this into something more useful by switching the order in which the denominators are multiplied):     Making the above substitution into the formula for work, we get:        Cancelling dx from the numerator and denominator simplifies this to:     But we already know that is the definition of , so we can simplify that, too, which yields:     Mass m is constant even though the force pushing on the object is varying. So, m factors out:     This is an easy integral, but we need to apply limits of integration so that there aren't constants of integration. Since the variable of integration here turned out to be , then according to the original givens, the lower limit should be , and the upper limit should be .     Now carry out the integral, giving:     Carrying out the evaluation between the limits gives the answer to our question, which was how the work relates to the velocity:     Physicists define the instantaneous kinetic energy, , based on the target object's speed at a given time. So, the final kinetic energy is evaluated using the final speed, , and the initial kinetic energy is evaluated using the initial speed, . Making these substitutions, the equation can be written in terms of kinetic energies: In other words, the net work done (total done by all forces) is the change in kinetic energy: That is called the Work-Energy Theorem.    Lastly, SI units for energy must be: = Joules.    The 3-D version of the Work-Energy Theorem just requires adding up the work done in the x direction with the work in the y and z directions. The final equation actually comes out the same, as long as the speeds used are the magnitudes of the 3-D velocity vectors!      "
},
{
  "id": "exercises-ch-work-and-kinetic-energy-4-5",
  "level": "2",
  "url": "exercises-ch-work-and-kinetic-energy.html#exercises-ch-work-and-kinetic-energy-4-5",
  "type": "Exercise",
  "number": "15.3.12",
  "title": "",
  "body": "  You are driving your car uphill along a straight road. Suddenly, you see a car run a red light and enter the intersection just ahead of you. You slam on your brakes and skid in a straight line to a stop, leaving skid marks 30 meters long. A policeman observes the whole incident and gives a ticket to the other car for running a red light. He also gives you a ticket for exceeding the speed limit of 50 kilometers per hour. When you get home, you read your physics book and estimate that the coefficient of kinetic friction between your tires and the road was 0.60, and the coefficient of static friction was 0.80. You estimate that the hill made an angle of about 10 degrees with the horizontal. You look in your owner's manual and find that your car's mass is 930 kilograms. Based on this evidence, could you successfully fight the traffic ticket in court?   "
},
{
  "id": "exercises-ch-work-and-kinetic-energy-4-6",
  "level": "2",
  "url": "exercises-ch-work-and-kinetic-energy.html#exercises-ch-work-and-kinetic-energy-4-6",
  "type": "Exercise",
  "number": "15.3.13",
  "title": "",
  "body": "  You have landed a summer job with a company that has been given the contract to design the ski jump for the next Winter Olympics. The track is coated with snow and has an angle of 25 degrees from the horizontal. A skier zips down the ski jump ramp so that he leaves it at high speed. The winner is the person who jumps the farthest after leaving the end of the ramp. Your task is to determine the height of the starting gate above the end of the ramp, which will determine the mechanical structure of the ski jump facility. You have been told that the typical ski-jumper pushes off from the starting gate at a speed of 2.0 meters per second. For safety reasons, your design should be such that for a perfect run down the ramp, the skier's speed before leaving the end of the ramp and sailing through the air should be no more than 80 kilometers per hour. You run some experiments on various skis used by the jumpers and determine that the coefficient of static friction between the snow and the skis is 0.10 and its coefficient of kinetic friction is 0.02. Since the ski-jumpers bend over and wear very aerodynamic suits, you decide to neglect the air resistance to make your design.   "
},
{
  "id": "sec-conserv-forces",
  "level": "1",
  "url": "sec-conserv-forces.html",
  "type": "Section",
  "number": "16.1",
  "title": "Conservative Forces",
  "body": " Conservative Forces  In the to the chapter on Work and Kinetic energy we said that we can associate an energy account with a force as long as it meets some special conditions. In this section we elaborate on this.   A two dimensional coordinate plane with horizontal and vertical axes, each ending in an arrow to indicate positive direction. A small black point labeled appears in the lower-left region of the plane. A second point labeled appears in the upper-right region. A single smooth curve connects point to point . An arrowhead at the end of the curve indicates the direction of motion from to .   A path on an x-y axis from point i to point f.    Imagine some object is moved from an arbitrary initial point to an arbitrary final point under the influence of a single force as shown in If the work done by on the object as it moves from to is path-independent (independent of the path taken from to ) then is said to be a conservative force.    The work done by a force as an object is moved around any closed loop is zero if the force is conservative.     A two dimensional coordinate plane with horizontal and vertical axes, each ending in an arrow. A point labeled is located in the lower-left region of the plane. A second point labeled appears in the upper-right region of the plane. Two distinct curved paths connect point to point . One path begins at , curves upward and rightward with several smooth bends, and ends at with an arrowhead. The second path begins near the lower-left area of the plane, curves upward in a different shape, and also ends near f with an arrowhead. The two curves illustrate different possible trajectories between the same initial and final points.   Two labeled points on an x-y axis connected by two different curved paths with arrowheads.     depicts two arbitrary paths an object can take to get from an arbitrary pont to an arbitrary point under a force . Call one path path one and the other path two. Assume the force is conservative. Then The work done by the force over the closed loop formed by going from to along path one, then from to agianst path two is then Recall that , , path one, and path two were arbitrarily selected. Any other choice for these values would yield the same result. Therefore, the work done around any closed loop is zero.      A force is conservative if the work done by the force around any closed loop is zero.     A two dimensional coordinate plane with horizontal and vertical axes, each ending in an arrow. A point labeled is located in the lower-left region of the plane. A second point labeled appears in the upper-right region of the plane. Two curved paths connect point to point . One curve begins near point , rises and bends smoothly toward the upper-right, and ends with an arrow pointing toward point . The second curve begins at point and curves smoothly toward the lower-left, ending at point with an arrowhead.   Curved paths between two labeled points on an x-y axis, with arrows indicating direction.    Assume the work done by a force around a closed loop is zero. As depicted in pick two arbitrary points on the loop and call one and one . This forms two paths. Path one goes from to and path two goes from to . The work done along the close loop is Let path be the path formed by reversing the direction of path . Then Now the choice of closed loop, , and was arbitrary. Any choice of these variables would yield the same result. Since any tow paths from to can be formed in this way, they must all have the same value. Therefore the work done is path-independent and is conservative.    Since the work done by a conservative force is path-independent the work integral can only depend on the initial and final points. Because of this we often denote the work integral due to a conservative force as instead of the more proper for the sake of clarity.  "
},
{
  "id": "fig-cons-force-ex-path",
  "level": "2",
  "url": "sec-conserv-forces.html#fig-cons-force-ex-path",
  "type": "Figure",
  "number": "16.1.1",
  "title": "",
  "body": " A two dimensional coordinate plane with horizontal and vertical axes, each ending in an arrow to indicate positive direction. A small black point labeled appears in the lower-left region of the plane. A second point labeled appears in the upper-right region. A single smooth curve connects point to point . An arrowhead at the end of the curve indicates the direction of motion from to .   A path on an x-y axis from point i to point f.   "
},
{
  "id": "thm-0w-closed-loop-if-conserv",
  "level": "2",
  "url": "sec-conserv-forces.html#thm-0w-closed-loop-if-conserv",
  "type": "Theorem",
  "number": "16.1.2",
  "title": "",
  "body": "  The work done by a force as an object is moved around any closed loop is zero if the force is conservative.     A two dimensional coordinate plane with horizontal and vertical axes, each ending in an arrow. A point labeled is located in the lower-left region of the plane. A second point labeled appears in the upper-right region of the plane. Two distinct curved paths connect point to point . One path begins at , curves upward and rightward with several smooth bends, and ends at with an arrowhead. The second path begins near the lower-left area of the plane, curves upward in a different shape, and also ends near f with an arrowhead. The two curves illustrate different possible trajectories between the same initial and final points.   Two labeled points on an x-y axis connected by two different curved paths with arrowheads.     depicts two arbitrary paths an object can take to get from an arbitrary pont to an arbitrary point under a force . Call one path path one and the other path two. Assume the force is conservative. Then The work done by the force over the closed loop formed by going from to along path one, then from to agianst path two is then Recall that , , path one, and path two were arbitrarily selected. Any other choice for these values would yield the same result. Therefore, the work done around any closed loop is zero.   "
},
{
  "id": "thm-conserv-if-0w-closed-loop",
  "level": "2",
  "url": "sec-conserv-forces.html#thm-conserv-if-0w-closed-loop",
  "type": "Theorem",
  "number": "16.1.4",
  "title": "",
  "body": "  A force is conservative if the work done by the force around any closed loop is zero.     A two dimensional coordinate plane with horizontal and vertical axes, each ending in an arrow. A point labeled is located in the lower-left region of the plane. A second point labeled appears in the upper-right region of the plane. Two curved paths connect point to point . One curve begins near point , rises and bends smoothly toward the upper-right, and ends with an arrow pointing toward point . The second curve begins at point and curves smoothly toward the lower-left, ending at point with an arrowhead.   Curved paths between two labeled points on an x-y axis, with arrows indicating direction.    Assume the work done by a force around a closed loop is zero. As depicted in pick two arbitrary points on the loop and call one and one . This forms two paths. Path one goes from to and path two goes from to . The work done along the close loop is Let path be the path formed by reversing the direction of path . Then Now the choice of closed loop, , and was arbitrary. Any choice of these variables would yield the same result. Since any tow paths from to can be formed in this way, they must all have the same value. Therefore the work done is path-independent and is conservative.   "
},
{
  "id": "sec-pot-energy",
  "level": "1",
  "url": "sec-pot-energy.html",
  "type": "Section",
  "number": "16.2",
  "title": "Potential Energy",
  "body": " Potential Energy  Let be an arbitrary but fixed point of reference. In addition let be a conservative force. We define the potential energy due to at a point as where the countor taken by the work integral is any path from to , and is the conservative work done by as the object is moved from to . This definition of potential energy makes sense because the work done by a conservative force only depends on the end points, and the reference point is fixed so every should correspond to exactly one value of .    Let be the work done by a conservative force as an object is moved from an arbitrary initial point to an arbitrary final point . Let be the potential energy due to with reference point . Then      The diagram shows a two dimensional coordinate system with horizontal and vertical axes. The horizontal axis extends to the right, and the vertical axis extends upward. Three small black points are plotted and labeled , , and . Point is located in the top-left region of the graph. Point appears in the top-right region. Point is positioned bottom-middle region. Three curved arrows connect these points. One arrow curves upward and leftward from point to point . One arrow curves rightward from point to point . A third arrow begins at point and curves to point . Each arrow ends with a triangular arrowhead indicating direction.   Diagram showing x-y axes with three labeled points (i, f, P) connected by curved arrows.    Consider the work done by as an object is moved from to to back to . By the work done by on this closed loop is zero so we can write     "
},
{
  "id": "thm-work-pot-energy",
  "level": "2",
  "url": "sec-pot-energy.html#thm-work-pot-energy",
  "type": "Theorem",
  "number": "16.2.1",
  "title": "",
  "body": "  Let be the work done by a conservative force as an object is moved from an arbitrary initial point to an arbitrary final point . Let be the potential energy due to with reference point . Then      The diagram shows a two dimensional coordinate system with horizontal and vertical axes. The horizontal axis extends to the right, and the vertical axis extends upward. Three small black points are plotted and labeled , , and . Point is located in the top-left region of the graph. Point appears in the top-right region. Point is positioned bottom-middle region. Three curved arrows connect these points. One arrow curves upward and leftward from point to point . One arrow curves rightward from point to point . A third arrow begins at point and curves to point . Each arrow ends with a triangular arrowhead indicating direction.   Diagram showing x-y axes with three labeled points (i, f, P) connected by curved arrows.    Consider the work done by as an object is moved from to to back to . By the work done by on this closed loop is zero so we can write    "
},
{
  "id": "sec-conserv-energy",
  "level": "1",
  "url": "sec-conserv-energy.html",
  "type": "Section",
  "number": "16.3",
  "title": "Conservation of Energy",
  "body": " Conservation of Energy  The mechanical energy ( ) of a system is the sum of the systems kinetic and potential energy. The change in mechanical energy over an arbitrary time period is     The change in mechancial energy over an arbitrary time period is equal to the nonconservative work done on the system over that period. In equation form Where is the nonconservative work done on the system over the time period in question.    By the work-kinetic energy theorem  where is the total work done on the system over the time period in question. We can split the total work into its conservative and non conservative components. By  so      implies that if no nonconservative work is done on the system than the mechanical energy is conserved over the time period in question. The equation proved in is nice because it's easy to understand what it means intuitively. However, that form of the equation isn't the most convienient form for solving problems. Let's do some manipulations to put in a form which is more convenient for solving problems. Recalling the definition of mechanical energy we can write Recalling the definition of mechanical energy we can write   "
},
{
  "id": "sec-conserv-energy-2",
  "level": "2",
  "url": "sec-conserv-energy.html#sec-conserv-energy-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mechanical energy "
},
{
  "id": "thm-conserv-mech-energy",
  "level": "2",
  "url": "sec-conserv-energy.html#thm-conserv-mech-energy",
  "type": "Theorem",
  "number": "16.3.1",
  "title": "",
  "body": "  The change in mechancial energy over an arbitrary time period is equal to the nonconservative work done on the system over that period. In equation form Where is the nonconservative work done on the system over the time period in question.    By the work-kinetic energy theorem  where is the total work done on the system over the time period in question. We can split the total work into its conservative and non conservative components. By  so    "
},
{
  "id": "sec-conserv-energy-ex-prob",
  "level": "1",
  "url": "sec-conserv-energy-ex-prob.html",
  "type": "Section",
  "number": "16.4",
  "title": "Conservation of Energy Example Problem",
  "body": " Conservation of Energy Example Problem  A pendulum of mass is hanging on a string from the origin. The string has length . If the pendulum has initial speed when released from an initial angle from vertical, , find the final velocity as a function of ?   The diagram shows a simple pendulum consisting of a small circular bob connected to a pivot by a straight string of length . The pivot is located at the origin of an coordinate system. The coordinate system has has positive going to the right and positive going up. The pendulum rod extends upward and to the left, where the bob is positioned. A dashed horizontal line runs across the x-axis at and is labeled , indicating the reference height. A curved arc near the pivot marks the angular displacement from the positive -axis. The angle is labeled .   Pendulum diagram showing a bob at an initial angle θ₀ from the positive y-axis line.    The only force acting on the pendulum mass is gravity. The potential energy due to gravity near the surface of the Earth is approximately . As shown in we choose the -axis to have height . Then plugging in zero values the conservation of energy equation gives   "
},
{
  "id": "fig-conserv-energy-ex-prob-img",
  "level": "2",
  "url": "sec-conserv-energy-ex-prob.html#fig-conserv-energy-ex-prob-img",
  "type": "Figure",
  "number": "16.4.1",
  "title": "",
  "body": " The diagram shows a simple pendulum consisting of a small circular bob connected to a pivot by a straight string of length . The pivot is located at the origin of an coordinate system. The coordinate system has has positive going to the right and positive going up. The pendulum rod extends upward and to the left, where the bob is positioned. A dashed horizontal line runs across the x-axis at and is labeled , indicating the reference height. A curved arc near the pivot marks the angular displacement from the positive -axis. The angle is labeled .   Pendulum diagram showing a bob at an initial angle θ₀ from the positive y-axis line.   "
},
{
  "id": "sec-power",
  "level": "1",
  "url": "sec-power.html",
  "type": "Section",
  "number": "16.5",
  "title": "Power",
  "body": " Power  We've talk about how the core idea behind work is that it transfers energy into and out of the kinetic energy account. However, most devices (for example your phone) constantly drain energy. These devices need energy to be supplied to them at a particular rate to stay operational. Power ( ) is the physical quantity describing the rate at which energy is transferred to a system. For cases when only work in considered Recall that Parameterizing everything as a function of time and using gives Plugging this equation into the equation for power gives  where the second line follows from the Leibniz integral rule and the fundamental theorem of calculus. The units of power are units of energy divided by units of time. Thus, the units of are Joules per second. This combination is used so often that 1 Joule per second has a special name: 1 Watt (W).  "
},
{
  "id": "sec-power-ex-prob",
  "level": "1",
  "url": "sec-power-ex-prob.html",
  "type": "Section",
  "number": "16.6",
  "title": "Power Example Problem",
  "body": " Power Example Problem  An aircraft of mass kilograms is subject to a total drag force of Newtons. If the aircraft is flying at a constant horizontal velocity of 855 kilometers per hour, how much power is being generated by the jet engines?  Let use equation . The drag force is given in Newtons so we need to convert our velocity to units of meters per second to get an answer in units of Watts. The power being consumed by the drag force is So in order to keep the jet in the sky the engines must generate to offset this loss.  "
},
{
  "id": "exercises-ch-conserv-energy",
  "level": "1",
  "url": "exercises-ch-conserv-energy.html",
  "type": "Exercises",
  "number": "16.7",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   Deriving the Gravitational Potential Energy formula,    The work done by a conservative force causes stored energy that can be fully recovered later (whereas the work done by a non-conservative force is not stored up, and gets lost as waste energy). So, we say that the amount of potential energy, , stored by a conservative force is the negative (reverse) of the work W expended by the conservative force.   If we calculate the amount of work done by a conservative force, that will give us (after some cleanup) the formula for the potential energy caused by that force. Let's do this to find the formula for gravitational potential energy near the surface of Earth (it's a more complicated formula out in space).    Write down the most general formula we have for net work done when the net force vector and displacement vector is not constant:     Write the x,y,z components of the force of gravity . Assume the vertical axis is the z-axis.     Write the x,y,z components of a small 3-D displacement :     Do the dot product of the force of gravity and the small displacement:     Do the integral of your dot product result to get the work formula. Since the only small differential left is , the variable of integration must be z. So, the lower limit of integration is the initial coordinate , and the upper limit is the final coordinate .       So, the gain in gravitational potential energy is the reverse of the work done:   or if you need to break the into final and initial values,     Many textbooks call the altitude (above the origin) instead of . So, in terms of , the formula would be: so, since you can plug in to get or to get , we can write the general formula for any single in terms of any single as:         Derivation of Conservaton of Energy   The Law of Conservation of Energy is actually just an alternative way of writing the Work-Energy Theorem. However, we are going to break down the net work into conservative work and non-conservative work.   Write down the most general formula we have for net work done when the net force is not constant. Write the symbolic formula in terms of the net force vector, :      is made up of two kinds of forces: conservative and non-conservative. Substitute in :     Break the integral into two parts, one for integrating the , and one for integrating the :     From the definition of potential energy , we know that the change in potential energy is related to the by the following relationship:     From the Work-KE Theorem, we know that the net work is related to the change in kinetic energy by the following relationship:     Now, use your answers from steps 4 and 5 to substitute back into step 3. You can replace one of the integrals using your answer from step 4, and you can replace the using your answer from step 5:     We can call the one remaining integral the work done by the non-conservative forces. (These include forces that move energy in\/out of the isolated system, which could be called external work input, .) So,     Now we can do some rearranging on the formula to clean it up. Note that and . Substitute these in:     Put all the energies that are evaluated using the final positions\/velocities on the left-hand side; put all the energies that are evaluated using the initial positions\/velocities on the right-hand side:      is defined as the final total mechanical energy: . is defined as the initial total mechanical energy: . Subbing this in to shorten the equation, we have the Law of Conservation of Energy: Note that often the is done by friction, and friction often does negative work. When is a negative number, is less than (in other words, energy was lost\/dissipated as frictional heat). But if there is no nonconservative , then the final total energy is the same as the initial total energy. Note also that is the total instantaneous potential energy from all sources of conservative work. It may be made up of many individual sources of potential energy. So, if gravity, electricity, and springs are all present in a problem, you will need to calculate the total instantaneous potential energy by breaking out .        Conservation of Energy example including external work   In potential energy problems, the variables are usually the coordinates and speeds. Let's see how the givens and unknowns come into an example problem. Consider a sled of mass m sliding down a wavy hill with friction. The hill has height . The sled starts at rest at the top and ends with speed = at the bottom. How much energy is lost due to friction?  Step 1. Make sure that this is a Conservation of Energy problem. We know it's probably not a kinematics problem because they didn't tell us the of the hill, the of the hill, or the amount of elapsed for the sled to get to the bottom.  Step 2. Draw a before-and-after diagram showing the initial position and final position of the sled. Mark the location of the coordinate origin on both pictures (you may pick the origin anywhere you like, but after you pick it, both pictures must have the origin marked in the same place). To show that any pick works, let's pick the origin to be where the sled started.  Step 3. Measure speeds and coordinates relative to the origin you picked.  Initial values:     final values:     Step 4. Write the equation of Conservation of Energy. Break it down to show all sources of initial energy present in this particular problem (kinetic? gravitational potential? spring potential?), and all sources of final energy in this particular problem. Since the target object has a speed, there is energy in this problem. Since the altitude changes, there is energy in this problem. Since there is no spring, there is no energy in this problem. Since there is friction, there is non-conserved external in this problem.    Step 5. Sub. in all kinetic and potential energy formulae needed.   Step 6. Sub. in all givens, then solve for the requested unknown, which is in this problem. If came out negative, it means energy was lost and turned into waste energy, such as heat. [If were positive, it means some external source came and added energy to the system (for example, chemical energy from an explosion).]        A reluctant child is pushed down a frictionless waterslide, with an initial speed of 1.00 meters per second, initially directed 20.0 degrees below horizontal (the angle of the slide is not 20.0 degrees all throughout, though, since the slide twists and turns). The top of the slide is 30.0 m above sea level, and the bottom of the ramp is 20.0 m above sea level. Find the speed of the child as he reaches the bottom of the slide.      Your company is designing an apparatus for an ice skating show. An ice skater will start from rest and slide down an ice-covered ramp. At the bottom of the ramp, the skater will glide around an ice-covered loop which is the inside of a vertical circle before emerging out onto the skating rink floor. For a spectacular effect, the circular loop will have a diameter of 30.0 feet. Your task is to determine the minimum height from the rink floor to the top of the ramp for the skater to make it around the loop. When barely making it around, the skater briefly loses contact with the ice at the top of the loop and at that point the skater is in free fall.     Deriving the Spring Potential Energy formula,   The work done by a conservative force causes stored energy that can be fully recovered later (whereas the work done by a non-conservative force is not stored up, and gets lost as waste energy). So, we say that the amount of potential energy, , stored by a conservative force is the negative (reverse) of the work expended by the conservative force.   If we calculate the amount of work done by a conservative force, that will give us (after some cleanup) the formula for the potential energy caused by that force. Let's do this to find the formula for the potential energy of a string that gets stretched by an amount beyond its natural length.    Write down the most general formula we have for net work done when the net force vector and displacement vector is not constant:     We need to know what the spring force equation is. Let's figure it out:   For a spring, when you increase the amount of stretch , the force will .    For a spring, when you stretch it in the +x direction, the force will be in the direction.    Therefore, the spring force would be , where the is a constant of proportionality that cancels the units correctly (since the is in newtons and the is in meters). is called the “spring constant.”       Write the x,y,z components of the spring force . Assume the spring is stretched along the x-axis.     Write the x,y,z components of a small displacement of our spring along the x-axis:     5. Do the dot product of the spring force and the small displacement:     6. Do the integral of your dot product result to get the work formula. Since the only small differential left is , the variable of integration must be . So, the lower limit of integration is the initial coordinate , and the upper limit is the final coordinate .      7. So, the gain in spring potential energy is the reverse of the work done:   or if you need to break the into final and initial values,     8. Since you can plug in to get or to get , we can write the general formula for any single in terms of any single as:          At the train station, you notice a large horizontal spring at the end of the track where the train comes in. This is a safety device to stop the train so that it will not plow through the station if the engineer misjudges the stopping distance. While waiting, you wonder what would be the fastest train that the spring could stop at its full compression, 3.0 feet. To keep the passengers safe when the train stops, you assume a maximum stopping acceleration of magnitude , where meters per second. You also guess that a train weighs half a million pounds. For purpose of getting an estimate, you decide to assume that all frictional force are negligible.      You have been hired to design a spring-launched roller coaster that will carry two passengers per car. The car goes up a 10 meter high hill, then descends 17 meters to the track's lowest point. You've determined that the spring can be compressed a maximum of 2.4 meters and that a loaded car will have a maximum mass of 410 kilograms. For safety reasons, the spring constant should be 12% larger than the minimum needed for the car to just make it over the top. What spring constant should you specify?      A 2.5 kilogram box, sliding on a rough horizontal surface, has a speed of 1.2 meters per second when it makes contact with a spring (see the figure). The block comes to a momentary halt when the compression of the spring is 5.0 centimeters. The work done by the friction, from the instant the block makes contact with the spring until it comes to a momentary halt, is -0.50 Joules.   What is the spring constant of the spring?    What is the coefficient of kinetic friction between the box and the rough surface?        Power: the rate at which work is done by a force   Work transfers energy between things. The rate at which work is done, or the rate at which energy is transferred, is called the power.   To move your body up the altitude of one flight of stairs, it typically takes joulse of work to achieve that result. However, you can do this amount of work by: A) crawling up the stairs slowly in a total elapsed time of seconds, or B) the same amount of work by running up the stairs quickly in a total elapsed time of seconds. Which method, A or B, accomplishes the joules of work at a faster rate?    Since power is the rate at which work is done, which method had higher power?     Knowing which method gave you higher power, which of the following equations must be the correct one?      Assuming work done climbing the stairs was joules, what was the average power for the two cases? Check to make sure your answers agree with what you stated in question 2.  Average power for seconds:   Average power for seconds:     The SI units for power are units of energy divided by units of time: Also note that if you know the power, but want the energy transferred, then , so you can invent a unit of energy by multiplying any unit of power times any unit of time. This is why your electricity company bills you for the amount of energy you used in units of kilowatts times (abbreviated kWh).    To get the instantaneous power, we take the limit of the average power as the time elapsed shrinks to zero:  which turns into a derivative:     We can actually write this in terms of the velocity, if the work is being done by a constant force and a straight-line displacement . We'll need to sub in the formula for work if the force is constant, which was:     Subbing that in, we've got: If the force is constant, it factors outside the derivative: But we know that the derivative of the displacement is the , so this formula can be written:          A 85 kilogram firefighter needs to climb the stairs of a 25 meter tall building while carrying a 35 kilogram backpack filled with gear. How much average power does he need to reach the top in 55 seconds?      An elevator of mass 1800.0 kilograms ascends with constant velocity +3.00 meters per second. The force of kinetic friction with the wall is 4000.0 newtons. How much power must be supplied to the elevator cable?    "
},
{
  "id": "exercises-ch-conserv-energy-2",
  "level": "2",
  "url": "exercises-ch-conserv-energy.html#exercises-ch-conserv-energy-2",
  "type": "Exercise",
  "number": "16.7.1",
  "title": "Deriving the Gravitational Potential Energy formula, <span class=\"process-math\">\\(mgh\\)<\/span>.",
  "body": " Deriving the Gravitational Potential Energy formula,    The work done by a conservative force causes stored energy that can be fully recovered later (whereas the work done by a non-conservative force is not stored up, and gets lost as waste energy). So, we say that the amount of potential energy, , stored by a conservative force is the negative (reverse) of the work W expended by the conservative force.   If we calculate the amount of work done by a conservative force, that will give us (after some cleanup) the formula for the potential energy caused by that force. Let's do this to find the formula for gravitational potential energy near the surface of Earth (it's a more complicated formula out in space).    Write down the most general formula we have for net work done when the net force vector and displacement vector is not constant:     Write the x,y,z components of the force of gravity . Assume the vertical axis is the z-axis.     Write the x,y,z components of a small 3-D displacement :     Do the dot product of the force of gravity and the small displacement:     Do the integral of your dot product result to get the work formula. Since the only small differential left is , the variable of integration must be z. So, the lower limit of integration is the initial coordinate , and the upper limit is the final coordinate .       So, the gain in gravitational potential energy is the reverse of the work done:   or if you need to break the into final and initial values,     Many textbooks call the altitude (above the origin) instead of . So, in terms of , the formula would be: so, since you can plug in to get or to get , we can write the general formula for any single in terms of any single as:       "
},
{
  "id": "exercises-ch-conserv-energy-3",
  "level": "2",
  "url": "exercises-ch-conserv-energy.html#exercises-ch-conserv-energy-3",
  "type": "Exercise",
  "number": "16.7.2",
  "title": "Derivation of Conservaton of Energy.",
  "body": " Derivation of Conservaton of Energy   The Law of Conservation of Energy is actually just an alternative way of writing the Work-Energy Theorem. However, we are going to break down the net work into conservative work and non-conservative work.   Write down the most general formula we have for net work done when the net force is not constant. Write the symbolic formula in terms of the net force vector, :      is made up of two kinds of forces: conservative and non-conservative. Substitute in :     Break the integral into two parts, one for integrating the , and one for integrating the :     From the definition of potential energy , we know that the change in potential energy is related to the by the following relationship:     From the Work-KE Theorem, we know that the net work is related to the change in kinetic energy by the following relationship:     Now, use your answers from steps 4 and 5 to substitute back into step 3. You can replace one of the integrals using your answer from step 4, and you can replace the using your answer from step 5:     We can call the one remaining integral the work done by the non-conservative forces. (These include forces that move energy in\/out of the isolated system, which could be called external work input, .) So,     Now we can do some rearranging on the formula to clean it up. Note that and . Substitute these in:     Put all the energies that are evaluated using the final positions\/velocities on the left-hand side; put all the energies that are evaluated using the initial positions\/velocities on the right-hand side:      is defined as the final total mechanical energy: . is defined as the initial total mechanical energy: . Subbing this in to shorten the equation, we have the Law of Conservation of Energy: Note that often the is done by friction, and friction often does negative work. When is a negative number, is less than (in other words, energy was lost\/dissipated as frictional heat). But if there is no nonconservative , then the final total energy is the same as the initial total energy. Note also that is the total instantaneous potential energy from all sources of conservative work. It may be made up of many individual sources of potential energy. So, if gravity, electricity, and springs are all present in a problem, you will need to calculate the total instantaneous potential energy by breaking out .      "
},
{
  "id": "exercises-ch-conserv-energy-4",
  "level": "2",
  "url": "exercises-ch-conserv-energy.html#exercises-ch-conserv-energy-4",
  "type": "Exercise",
  "number": "16.7.3",
  "title": "Conservation of Energy example including external work.",
  "body": " Conservation of Energy example including external work   In potential energy problems, the variables are usually the coordinates and speeds. Let's see how the givens and unknowns come into an example problem. Consider a sled of mass m sliding down a wavy hill with friction. The hill has height . The sled starts at rest at the top and ends with speed = at the bottom. How much energy is lost due to friction?  Step 1. Make sure that this is a Conservation of Energy problem. We know it's probably not a kinematics problem because they didn't tell us the of the hill, the of the hill, or the amount of elapsed for the sled to get to the bottom.  Step 2. Draw a before-and-after diagram showing the initial position and final position of the sled. Mark the location of the coordinate origin on both pictures (you may pick the origin anywhere you like, but after you pick it, both pictures must have the origin marked in the same place). To show that any pick works, let's pick the origin to be where the sled started.  Step 3. Measure speeds and coordinates relative to the origin you picked.  Initial values:     final values:     Step 4. Write the equation of Conservation of Energy. Break it down to show all sources of initial energy present in this particular problem (kinetic? gravitational potential? spring potential?), and all sources of final energy in this particular problem. Since the target object has a speed, there is energy in this problem. Since the altitude changes, there is energy in this problem. Since there is no spring, there is no energy in this problem. Since there is friction, there is non-conserved external in this problem.    Step 5. Sub. in all kinetic and potential energy formulae needed.   Step 6. Sub. in all givens, then solve for the requested unknown, which is in this problem. If came out negative, it means energy was lost and turned into waste energy, such as heat. [If were positive, it means some external source came and added energy to the system (for example, chemical energy from an explosion).]     "
},
{
  "id": "exercises-ch-conserv-energy-5",
  "level": "2",
  "url": "exercises-ch-conserv-energy.html#exercises-ch-conserv-energy-5",
  "type": "Exercise",
  "number": "16.7.4",
  "title": "",
  "body": "  A reluctant child is pushed down a frictionless waterslide, with an initial speed of 1.00 meters per second, initially directed 20.0 degrees below horizontal (the angle of the slide is not 20.0 degrees all throughout, though, since the slide twists and turns). The top of the slide is 30.0 m above sea level, and the bottom of the ramp is 20.0 m above sea level. Find the speed of the child as he reaches the bottom of the slide.   "
},
{
  "id": "exercises-ch-conserv-energy-6",
  "level": "2",
  "url": "exercises-ch-conserv-energy.html#exercises-ch-conserv-energy-6",
  "type": "Exercise",
  "number": "16.7.5",
  "title": "",
  "body": "  Your company is designing an apparatus for an ice skating show. An ice skater will start from rest and slide down an ice-covered ramp. At the bottom of the ramp, the skater will glide around an ice-covered loop which is the inside of a vertical circle before emerging out onto the skating rink floor. For a spectacular effect, the circular loop will have a diameter of 30.0 feet. Your task is to determine the minimum height from the rink floor to the top of the ramp for the skater to make it around the loop. When barely making it around, the skater briefly loses contact with the ice at the top of the loop and at that point the skater is in free fall.   "
},
{
  "id": "exercises-ch-conserv-energy-7",
  "level": "2",
  "url": "exercises-ch-conserv-energy.html#exercises-ch-conserv-energy-7",
  "type": "Exercise",
  "number": "16.7.6",
  "title": "Deriving the Spring Potential Energy formula, <span class=\"process-math\">\\(\\sfrac{kx^{2}}{2}\\)<\/span>.",
  "body": " Deriving the Spring Potential Energy formula,   The work done by a conservative force causes stored energy that can be fully recovered later (whereas the work done by a non-conservative force is not stored up, and gets lost as waste energy). So, we say that the amount of potential energy, , stored by a conservative force is the negative (reverse) of the work expended by the conservative force.   If we calculate the amount of work done by a conservative force, that will give us (after some cleanup) the formula for the potential energy caused by that force. Let's do this to find the formula for the potential energy of a string that gets stretched by an amount beyond its natural length.    Write down the most general formula we have for net work done when the net force vector and displacement vector is not constant:     We need to know what the spring force equation is. Let's figure it out:   For a spring, when you increase the amount of stretch , the force will .    For a spring, when you stretch it in the +x direction, the force will be in the direction.    Therefore, the spring force would be , where the is a constant of proportionality that cancels the units correctly (since the is in newtons and the is in meters). is called the “spring constant.”       Write the x,y,z components of the spring force . Assume the spring is stretched along the x-axis.     Write the x,y,z components of a small displacement of our spring along the x-axis:     5. Do the dot product of the spring force and the small displacement:     6. Do the integral of your dot product result to get the work formula. Since the only small differential left is , the variable of integration must be . So, the lower limit of integration is the initial coordinate , and the upper limit is the final coordinate .      7. So, the gain in spring potential energy is the reverse of the work done:   or if you need to break the into final and initial values,     8. Since you can plug in to get or to get , we can write the general formula for any single in terms of any single as:       "
},
{
  "id": "exercises-ch-conserv-energy-8",
  "level": "2",
  "url": "exercises-ch-conserv-energy.html#exercises-ch-conserv-energy-8",
  "type": "Exercise",
  "number": "16.7.7",
  "title": "",
  "body": "  At the train station, you notice a large horizontal spring at the end of the track where the train comes in. This is a safety device to stop the train so that it will not plow through the station if the engineer misjudges the stopping distance. While waiting, you wonder what would be the fastest train that the spring could stop at its full compression, 3.0 feet. To keep the passengers safe when the train stops, you assume a maximum stopping acceleration of magnitude , where meters per second. You also guess that a train weighs half a million pounds. For purpose of getting an estimate, you decide to assume that all frictional force are negligible.   "
},
{
  "id": "exercises-ch-conserv-energy-9",
  "level": "2",
  "url": "exercises-ch-conserv-energy.html#exercises-ch-conserv-energy-9",
  "type": "Exercise",
  "number": "16.7.8",
  "title": "",
  "body": "  You have been hired to design a spring-launched roller coaster that will carry two passengers per car. The car goes up a 10 meter high hill, then descends 17 meters to the track's lowest point. You've determined that the spring can be compressed a maximum of 2.4 meters and that a loaded car will have a maximum mass of 410 kilograms. For safety reasons, the spring constant should be 12% larger than the minimum needed for the car to just make it over the top. What spring constant should you specify?   "
},
{
  "id": "exercises-ch-conserv-energy-10",
  "level": "2",
  "url": "exercises-ch-conserv-energy.html#exercises-ch-conserv-energy-10",
  "type": "Exercise",
  "number": "16.7.9",
  "title": "",
  "body": "  A 2.5 kilogram box, sliding on a rough horizontal surface, has a speed of 1.2 meters per second when it makes contact with a spring (see the figure). The block comes to a momentary halt when the compression of the spring is 5.0 centimeters. The work done by the friction, from the instant the block makes contact with the spring until it comes to a momentary halt, is -0.50 Joules.   What is the spring constant of the spring?    What is the coefficient of kinetic friction between the box and the rough surface?      "
},
{
  "id": "exercises-ch-conserv-energy-11",
  "level": "2",
  "url": "exercises-ch-conserv-energy.html#exercises-ch-conserv-energy-11",
  "type": "Exercise",
  "number": "16.7.10",
  "title": "Power: the rate at which work is done by a force.",
  "body": " Power: the rate at which work is done by a force   Work transfers energy between things. The rate at which work is done, or the rate at which energy is transferred, is called the power.   To move your body up the altitude of one flight of stairs, it typically takes joulse of work to achieve that result. However, you can do this amount of work by: A) crawling up the stairs slowly in a total elapsed time of seconds, or B) the same amount of work by running up the stairs quickly in a total elapsed time of seconds. Which method, A or B, accomplishes the joules of work at a faster rate?    Since power is the rate at which work is done, which method had higher power?     Knowing which method gave you higher power, which of the following equations must be the correct one?      Assuming work done climbing the stairs was joules, what was the average power for the two cases? Check to make sure your answers agree with what you stated in question 2.  Average power for seconds:   Average power for seconds:     The SI units for power are units of energy divided by units of time: Also note that if you know the power, but want the energy transferred, then , so you can invent a unit of energy by multiplying any unit of power times any unit of time. This is why your electricity company bills you for the amount of energy you used in units of kilowatts times (abbreviated kWh).    To get the instantaneous power, we take the limit of the average power as the time elapsed shrinks to zero:  which turns into a derivative:     We can actually write this in terms of the velocity, if the work is being done by a constant force and a straight-line displacement . We'll need to sub in the formula for work if the force is constant, which was:     Subbing that in, we've got: If the force is constant, it factors outside the derivative: But we know that the derivative of the displacement is the , so this formula can be written:       "
},
{
  "id": "exercises-ch-conserv-energy-12",
  "level": "2",
  "url": "exercises-ch-conserv-energy.html#exercises-ch-conserv-energy-12",
  "type": "Exercise",
  "number": "16.7.11",
  "title": "",
  "body": "  A 85 kilogram firefighter needs to climb the stairs of a 25 meter tall building while carrying a 35 kilogram backpack filled with gear. How much average power does he need to reach the top in 55 seconds?   "
},
{
  "id": "exercises-ch-conserv-energy-13",
  "level": "2",
  "url": "exercises-ch-conserv-energy.html#exercises-ch-conserv-energy-13",
  "type": "Exercise",
  "number": "16.7.12",
  "title": "",
  "body": "  An elevator of mass 1800.0 kilograms ascends with constant velocity +3.00 meters per second. The force of kinetic friction with the wall is 4000.0 newtons. How much power must be supplied to the elevator cable?   "
},
{
  "id": "sec-momentum-impulse",
  "level": "1",
  "url": "sec-momentum-impulse.html",
  "type": "Section",
  "number": "17.1",
  "title": "Momentum and Impulse",
  "body": " Momentum and Impulse  We define momentum as the product of mass and velocity . We will see that the momentum of an object describes how hard it is to stop that object's motion. If mass is constant we can think of the net force as the time rate-of-change of momentum   Forces applied over a period of time can alter the momentum of an object, described by the relationship between force and acceleration: Note that that this can result in a change in speed and\/or direction of motion. We define net impulse as the total change in momentum of an object over a given period of time. Considering the equations above we see that We can also decompose net impulse into impulses cause by each force. An equal change in momentum can occur from a large force over a very short time, or a smaller force over a greater time (equal integral of force over time).    Impulse: The relationship Between the Change in Momentum and the Force   Momentum is a measurement which summarizes how hard it is to stop something. For example, is it hard for your hand to stop a speeding bullet? If yes, it has a lot of momentum. Is it hard for your hand to stop a slow-moving train? If yes, it has a lot of momentum. Since momentum of a target object depends on the velocity and the mass, we multiply them together and call that the momentum vector of the object, . To get the x-component of the momentum vector, multiply the x-component of the velocity by the mass of the object. To get the y-component of the momentum vector, multiply the -component of the velocity by the of the object. Since the momentum involves the velocity, we can probably relate the momentum to the net force that was applied to a target object. This will give us another way to calculate velocities from forces!  1. Observe the equation for the momentum of your target object: . The right side of the equation looks somewhat similar to Newton's 2nd Law, but instead of , the equation has . What calculus operation will we have to apply if we want to change into ?  2. So, applying that calculus operation to both sides of the equation:     If the mass of the target remained constant while the target object was being hit by a force, then the constant factors out:     We already know that the derivative of the velocity is the . Subbing that in gives:     Finally, use Newton's Second Law, , to write the equation that relates force to momentum :     (This is known as an alternative version of Newton's Second Law. It is consistent with Newton's Laws, because if the change in velocity is zero, then the change in momentum is also , therefore the net force applied was also .)  3. Recall that work was found by integrating the force dot product with the displacement. Impulse is a similar idea, except instead of applying a force during a set amount of displacement, we instead apply a net force during a set amount of time:     4. How does impulse relate to momentum? Well, now that we know can be written in terms of momentum, we can sub that in:     The 's cancel, leaving:     The limits of integration should be changed since the variable of integration isn't anymore:     So the result is:                 So impulse is the change in momentum.  5. If we use the average , we can also rearrange for in terms of the impulse or change in momentum, because the is a constant that factors out of the integral:                 This is useful for finding the average force if you know the velocities and times!      A bouncy ball of mass 0.100 kilograms starts at rest, at a height of 2.00 meters. It is released, and by the time it hits the ground (vertically), I used conservation of energy to compute that its velocity when it first touches the ground must be meters per second. The rubber compresses during the 0.0100 seconds that the ball is in contact with the ground, bringing the ball to a stop as the ball deforms, then the ball springs vertically back upwards, reaching a peak height of 1.50m.    Now, since I already did conservation of energy for the downward leg, I'll let you use conservation of energy on the upwards leg of the trip to find the upwards velocity of the ball as it leaves the ground.    Calculate the momentum vector of the ball just before it collides with the ground.    Calculate the momentum vector of the ball just after it leaves the ground.    Calculate the change in the momentum vector, . Keep writing it in component form, because this is the impulse vector.    Theory tells us we can calculate the average net force vector from the impulse vector. So, calculate the average net force vector exerted on the ball during the collision with the ground?        A hockey player sees a puck sliding down the ice, and goes in for a powerful slapshot. The hockey puck has a mass of 165 grams. Before the slapshot, the puck has a velocity of meters per second. Right after the slapshot, the puck is rocketing down the ice with a velocity of meters per second. The hockey stick made contact with the puck for a duration of 0.00500s.     What was the impulse vector (change in momentum) imparted to the puck? Make sure to include the sign and direction.    What was the average net force on the puck (write it in proper vector component notation)?        "
},
{
  "id": "sec-momentum-impulse-2",
  "level": "2",
  "url": "sec-momentum-impulse.html#sec-momentum-impulse-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "momentum "
},
{
  "id": "sec-momentum-impulse-3",
  "level": "2",
  "url": "sec-momentum-impulse.html#sec-momentum-impulse-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "net impulse "
},
{
  "id": "exercises-sec-impulse-1",
  "level": "2",
  "url": "sec-momentum-impulse.html#exercises-sec-impulse-1",
  "type": "Exercise",
  "number": "17.1.1",
  "title": "Impulse: The relationship Between the Change in Momentum and the Force.",
  "body": " Impulse: The relationship Between the Change in Momentum and the Force   Momentum is a measurement which summarizes how hard it is to stop something. For example, is it hard for your hand to stop a speeding bullet? If yes, it has a lot of momentum. Is it hard for your hand to stop a slow-moving train? If yes, it has a lot of momentum. Since momentum of a target object depends on the velocity and the mass, we multiply them together and call that the momentum vector of the object, . To get the x-component of the momentum vector, multiply the x-component of the velocity by the mass of the object. To get the y-component of the momentum vector, multiply the -component of the velocity by the of the object. Since the momentum involves the velocity, we can probably relate the momentum to the net force that was applied to a target object. This will give us another way to calculate velocities from forces!  1. Observe the equation for the momentum of your target object: . The right side of the equation looks somewhat similar to Newton's 2nd Law, but instead of , the equation has . What calculus operation will we have to apply if we want to change into ?  2. So, applying that calculus operation to both sides of the equation:     If the mass of the target remained constant while the target object was being hit by a force, then the constant factors out:     We already know that the derivative of the velocity is the . Subbing that in gives:     Finally, use Newton's Second Law, , to write the equation that relates force to momentum :     (This is known as an alternative version of Newton's Second Law. It is consistent with Newton's Laws, because if the change in velocity is zero, then the change in momentum is also , therefore the net force applied was also .)  3. Recall that work was found by integrating the force dot product with the displacement. Impulse is a similar idea, except instead of applying a force during a set amount of displacement, we instead apply a net force during a set amount of time:     4. How does impulse relate to momentum? Well, now that we know can be written in terms of momentum, we can sub that in:     The 's cancel, leaving:     The limits of integration should be changed since the variable of integration isn't anymore:     So the result is:                 So impulse is the change in momentum.  5. If we use the average , we can also rearrange for in terms of the impulse or change in momentum, because the is a constant that factors out of the integral:                 This is useful for finding the average force if you know the velocities and times!   "
},
{
  "id": "exercises-sec-impulse-2",
  "level": "2",
  "url": "sec-momentum-impulse.html#exercises-sec-impulse-2",
  "type": "Exercise",
  "number": "17.1.2",
  "title": "",
  "body": "  A bouncy ball of mass 0.100 kilograms starts at rest, at a height of 2.00 meters. It is released, and by the time it hits the ground (vertically), I used conservation of energy to compute that its velocity when it first touches the ground must be meters per second. The rubber compresses during the 0.0100 seconds that the ball is in contact with the ground, bringing the ball to a stop as the ball deforms, then the ball springs vertically back upwards, reaching a peak height of 1.50m.    Now, since I already did conservation of energy for the downward leg, I'll let you use conservation of energy on the upwards leg of the trip to find the upwards velocity of the ball as it leaves the ground.    Calculate the momentum vector of the ball just before it collides with the ground.    Calculate the momentum vector of the ball just after it leaves the ground.    Calculate the change in the momentum vector, . Keep writing it in component form, because this is the impulse vector.    Theory tells us we can calculate the average net force vector from the impulse vector. So, calculate the average net force vector exerted on the ball during the collision with the ground?     "
},
{
  "id": "exercises-sec-impulse-3",
  "level": "2",
  "url": "sec-momentum-impulse.html#exercises-sec-impulse-3",
  "type": "Exercise",
  "number": "17.1.3",
  "title": "",
  "body": "  A hockey player sees a puck sliding down the ice, and goes in for a powerful slapshot. The hockey puck has a mass of 165 grams. Before the slapshot, the puck has a velocity of meters per second. Right after the slapshot, the puck is rocketing down the ice with a velocity of meters per second. The hockey stick made contact with the puck for a duration of 0.00500s.     What was the impulse vector (change in momentum) imparted to the puck? Make sure to include the sign and direction.    What was the average net force on the puck (write it in proper vector component notation)?      "
},
{
  "id": "sec-conserv-momentum",
  "level": "1",
  "url": "sec-conserv-momentum.html",
  "type": "Section",
  "number": "17.2",
  "title": "Conservation of Momentum",
  "body": " Conservation of Momentum  To begin let's define an isolated system as a system which meets the following criteria:   No mass enters or leaves the system.    The net external force on the system is zero.    No energy enters or leaves the system.   Now imagine a isolated system of two objects undergoing a collision. The forces between the two objects are equal in magnitude and opposite in direction (Newton's Third Law). This implies the change in momentum due to the forces between the objects are also \"equal or opposite\" The combined (total) momentum has no change: By integrating the equation above, the conservation of the total momentum can also be express as the sum of the inital momenta ( and ) is equal to the sum of the final momenta ( and ) or if the objects didn't exchange mass during the collsion. This arguement can be generalized to incorporate any number of colliding objects, including cases where objects fuse together or break apart in the course of the collision. The general equation is given by or where the indecies j and k run over all the objects that exists before and after the collsion respectively.  For real collisions outside forces typically act on the system. On the other hand it is often the case that the magnitudes of the forces between the colliding objects are much larger than the magnitudes of outside forces and the collision takes place over a short period of time. In this case the influence of the outside forces are negigable compared to the influence of the forces between the colliding objects and we can approximate the collision as being free of influence by outside forces. This approximation is known as the impulse approximation .    Derivation of Conservation of Momentum in an isolated system   During a collision between two objects, it is usually too difficult to numerically calculate the non-conservative forces and the work they do. However, by examining the momentum vectors of the objects, we can still calculate something about the final velocities. Here, we will derive how the final velocities are related to the initial velocities.    1. During a collision between body 1 and body 2, we know Newton's Third Law says that (force of body 1 pushing on body 2) has to be the same magnitude as the back reaction (force of body 2 pushing on body ). The only difference between the forces is that the back reaction pushes body 1 in the opposite direction. To make the back reaction force the opposite direction, we put a sign in front of it. Then, Newton's Third Law says those forces are equal: To see what happens to the two target bodies during the collision, we need two FBD's. The force on body 2 goes on the FBD for body 2. The force on body 1 goes separately on the FBD for body 1.    2. Let's look at the in the FBD's. In our derivations of impulse, we found there was an alternative form of Newton's Second Law, which related net force on a body to momentum of that body: Since the system is isolated, the only force contributing to the net force on body 1 during the collision is exerted by body . Similarly, the only force contributing to the net force on body 2 during the collision is exerted by body . So, we can easily sub in the symbolic for the FBD of each body:  Body 1: Therefore, calling the momentum vector of body 1 = , we see that:   Body 2: Therefore, calling the momentum vector of body 2 = , we see that:     3. Now that we know the values of and , let's sub that back into the equation we had from Newton's Third Law in 1):  Taking all terms to the left side, “Factoring” out the derivative operator,     4. Each body is a source of momentum in the system. So, when we add up the momentum vectors of all the bodies, we call that the total momentum of the whole system: . So, subbing that in, we see:     5. The derivative means the slope. What kind of function (quadratic? linear? constant? exponential?) has a slope of zero everywhere? .    6. So, this equation is saying that never changes. In other words, is conserved. This is called “The Law of Conservation of Momentum”. Since it never changes, here is how the initial momentum and the final momentum are related:     7. Or, breaking out the total momentum into all the sources it came from,     8. Remember that the momentum is gotten by multiplying the velocity vector of the object by the mass     9. Fully breaking the vectors out into x and y components for the case of a 2-D velocity vector, we can do the x components and the y components of the vectors:      10. Count how many possible given velocity components there might be in those two equations, since there are two objects, with two axis components, evaluated at two points in time. Count of total possible velocity component givens= . That's a lot of givens, not even counting the mass givens! If you're doing a full 2-D (or 3-D) problem, you may wish to list them in a table while you are working out the        You have been hired to check the technical correctness of an upcoming made-for-TV murder mystery that takes place in the space shuttle. In one scene, an astronaut's safety line is cut while on a space walk. The astronaut, who is 200 meters from the shuttle and not moving with respect to it, finds that the suit's thruster pack has also been damaged and no longer works and that only 4 minutes of air remains. To get back to the shuttle, the astronaut unstraps a 10 kilogram tool kit and throws it away with a speed of 8 meters per second. In the script, the astronaut, who has a mass of 80 kilograms without the toolkit, survives, but is this correct? (Assume 2 significant figures for all values.)      For a part time job with a medical physics group, you are studying a cancer therapy that uses neutrons to knock a particle out of the nucleus of the atoms of cancer cells. This is an inelastic collision in which the heavy nucleus essentially does not move. After the collision, the nucleus decays and kills the cancer cell. You decide to measure the change in internal energy of a nitrogen nucleus after a neutron collides with it. In the experiment, a neutron hits the nucleus with a speed of meters per second and you detect two neutrons both coming out at angles of 30.0 degrees with respect to the direction of the neutron coming in.      You are on a committee investigating injuries to students participating in sports, starting with the high incidence of ankle injuries on the basketball team. Observing the team practice jump shots inspires you to try a small calculation. A 50.0 kilogram student jumps 1.0 meter straight up and shoots the 0.80 kilogram basketball at the top of the jump. From the path of the basketball, you estimate that the ball left the hand at 30.0 degrees from he horizontal at 5.0 meters per second. To determine the horizontal forces on the ankle, you decide to calculate the student's horizontal velocity when hitting the ground.      A 1.2 kilogram spring-activated toy bomb slides on a smooth surface along the x-axis with a speed of 0.50 meters per second. At the origin, the bomb explodes into two fragments. Fragment 1 has a mass of 0.40 kilograms and a speed of 0.90 meters per second along the negative y-axis, as shown in the “after” figure below. Determine the angle of the final velocity vector of fragment two relative to the x-axis.      A plate falls vertically to the floor and breaks up into three pieces, which slide along the floor. Immediately after the impact, a 340.0 gram piece moves along the x -axis with a speed of 2.00 meters per second and a 390.0 gram piece moves along the y -axis with a speed of 1.50 meters per second. The third piece has a mass of 100.0 grams. In what direction does the third piece move? (Assume the floor is perfectly level, so the floor does not exert any external horizontal forces during the crash.)      A 1000.0 kilograms car approaches an intersection traveling north at 20.0 meters per second. A 1200.0 kilogram car approaches the same intersection traveling east at 22.0 meters per second. The two cars collide at the intersection and lock together. Ignoring any external forces that act on the cars during the collision, what is the velocity of the cars immediately after the collision?      A car manufacturer is testing spring mounted bumpers that cause cars to bounce apart elastically after a collision, instead of sticking together. In a bumper test, a car of mass 1358 kilograms collides head-on with a parked truck of mass 2000.0 kilograms, but the bumpers ensure that the collision is completely elastic (i.e., no energy losses from friction). If the velocity of the truck after the collision is 17.0 kilometers per hour (in the same direction as the car's initial velocity), what was the initial speed of the car?      A 0.250 kilogram ball traveling horizontally on a frictionless surface approaches a very massive stone at 20.0 meters per second perpendicular to wall and rebounds with 70.0% of its initial kinetic energy. What is the magnitude of the change in momentum of the stone?      You are helping your friend prepare for the next skateboard exhibition by determining if the planned program will work. Your friend will take a running start and then jump onto a heavy-duty 15.0 pound stationary skateboard. The skateboard will glide in a straight line along a short, level section of track, then up a sloped concrete wall. The goal is to reach a height of at least 10.0 feet above the starting point before coming back down the slope. Your friend's maximum running speed to safely jump on the skateboard is 23 feet per second. Your friend weighs 150 pounds.      Because of your concern that incorrect science is being taught to children when they watch cartoons on TV, you have joined a committee which is reviewing a new cartoon version of Tarzan. In this episode, Tarzan is on the ground in front of a herd of stampeding elephants. Just in time Jane, who is up in a tall tree, sees him. She grabs a convenient vine and swings towards Tarzan, who has twice her mass, to save him. Luckily, the lowest point of her swing is just where Tarzan is standing. When she reaches him, he grabs her and the vine. They both continue to swing to safety over the elephants up to a height which looks to be about half that of Jane's original position. To decide if you going to approve this cartoon, calculate the maximum height Tarzan and Jane can swing as a fraction of her initial height.      You have been hired as a technical consultant for an early-morning cartoon series for children to make sure that the science is correct. In the script, a wagon containing two boxes of gold (total mass of 150 kilogram) has been cut loose from the horses by an outlaw. The wagon starts from rest 50.0 meters up a hill with a 6.0 degree slope. The outlaw plans to have the wagon roll down the hill and across the level ground and then crash into a canyon where his confederates wait. But in a tree 40.0 meters from the edge of the canyon wait the Lone Ranger (mass 80.0 kilogram) and Tonto (mass 70.0 kilogram). They drop vertically into the wagon as it passes beneath them. The script states that it takes the Lone Ranger and Tonto 5.0 seconds to grab the gold and jump out of the wagon, but is this correct? You assume that the wagon rolls with negligible friction.     "
},
{
  "id": "sec-conserv-momentum-2",
  "level": "2",
  "url": "sec-conserv-momentum.html#sec-conserv-momentum-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "isolated system "
},
{
  "id": "sec-conserv-momentum-3",
  "level": "2",
  "url": "sec-conserv-momentum.html#sec-conserv-momentum-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "impulse approximation "
},
{
  "id": "exercises-sec-conserv-momentum-1",
  "level": "2",
  "url": "sec-conserv-momentum.html#exercises-sec-conserv-momentum-1",
  "type": "Exercise",
  "number": "17.2.1",
  "title": "Derivation of Conservation of Momentum in an isolated system.",
  "body": " Derivation of Conservation of Momentum in an isolated system   During a collision between two objects, it is usually too difficult to numerically calculate the non-conservative forces and the work they do. However, by examining the momentum vectors of the objects, we can still calculate something about the final velocities. Here, we will derive how the final velocities are related to the initial velocities.    1. During a collision between body 1 and body 2, we know Newton's Third Law says that (force of body 1 pushing on body 2) has to be the same magnitude as the back reaction (force of body 2 pushing on body ). The only difference between the forces is that the back reaction pushes body 1 in the opposite direction. To make the back reaction force the opposite direction, we put a sign in front of it. Then, Newton's Third Law says those forces are equal: To see what happens to the two target bodies during the collision, we need two FBD's. The force on body 2 goes on the FBD for body 2. The force on body 1 goes separately on the FBD for body 1.    2. Let's look at the in the FBD's. In our derivations of impulse, we found there was an alternative form of Newton's Second Law, which related net force on a body to momentum of that body: Since the system is isolated, the only force contributing to the net force on body 1 during the collision is exerted by body . Similarly, the only force contributing to the net force on body 2 during the collision is exerted by body . So, we can easily sub in the symbolic for the FBD of each body:  Body 1: Therefore, calling the momentum vector of body 1 = , we see that:   Body 2: Therefore, calling the momentum vector of body 2 = , we see that:     3. Now that we know the values of and , let's sub that back into the equation we had from Newton's Third Law in 1):  Taking all terms to the left side, “Factoring” out the derivative operator,     4. Each body is a source of momentum in the system. So, when we add up the momentum vectors of all the bodies, we call that the total momentum of the whole system: . So, subbing that in, we see:     5. The derivative means the slope. What kind of function (quadratic? linear? constant? exponential?) has a slope of zero everywhere? .    6. So, this equation is saying that never changes. In other words, is conserved. This is called “The Law of Conservation of Momentum”. Since it never changes, here is how the initial momentum and the final momentum are related:     7. Or, breaking out the total momentum into all the sources it came from,     8. Remember that the momentum is gotten by multiplying the velocity vector of the object by the mass     9. Fully breaking the vectors out into x and y components for the case of a 2-D velocity vector, we can do the x components and the y components of the vectors:      10. Count how many possible given velocity components there might be in those two equations, since there are two objects, with two axis components, evaluated at two points in time. Count of total possible velocity component givens= . That's a lot of givens, not even counting the mass givens! If you're doing a full 2-D (or 3-D) problem, you may wish to list them in a table while you are working out the     "
},
{
  "id": "exercises-sec-conserv-momentum-2",
  "level": "2",
  "url": "sec-conserv-momentum.html#exercises-sec-conserv-momentum-2",
  "type": "Exercise",
  "number": "17.2.2",
  "title": "",
  "body": "  You have been hired to check the technical correctness of an upcoming made-for-TV murder mystery that takes place in the space shuttle. In one scene, an astronaut's safety line is cut while on a space walk. The astronaut, who is 200 meters from the shuttle and not moving with respect to it, finds that the suit's thruster pack has also been damaged and no longer works and that only 4 minutes of air remains. To get back to the shuttle, the astronaut unstraps a 10 kilogram tool kit and throws it away with a speed of 8 meters per second. In the script, the astronaut, who has a mass of 80 kilograms without the toolkit, survives, but is this correct? (Assume 2 significant figures for all values.)   "
},
{
  "id": "exercises-sec-conserv-momentum-3",
  "level": "2",
  "url": "sec-conserv-momentum.html#exercises-sec-conserv-momentum-3",
  "type": "Exercise",
  "number": "17.2.3",
  "title": "",
  "body": "  For a part time job with a medical physics group, you are studying a cancer therapy that uses neutrons to knock a particle out of the nucleus of the atoms of cancer cells. This is an inelastic collision in which the heavy nucleus essentially does not move. After the collision, the nucleus decays and kills the cancer cell. You decide to measure the change in internal energy of a nitrogen nucleus after a neutron collides with it. In the experiment, a neutron hits the nucleus with a speed of meters per second and you detect two neutrons both coming out at angles of 30.0 degrees with respect to the direction of the neutron coming in.   "
},
{
  "id": "exercises-sec-conserv-momentum-4",
  "level": "2",
  "url": "sec-conserv-momentum.html#exercises-sec-conserv-momentum-4",
  "type": "Exercise",
  "number": "17.2.4",
  "title": "",
  "body": "  You are on a committee investigating injuries to students participating in sports, starting with the high incidence of ankle injuries on the basketball team. Observing the team practice jump shots inspires you to try a small calculation. A 50.0 kilogram student jumps 1.0 meter straight up and shoots the 0.80 kilogram basketball at the top of the jump. From the path of the basketball, you estimate that the ball left the hand at 30.0 degrees from he horizontal at 5.0 meters per second. To determine the horizontal forces on the ankle, you decide to calculate the student's horizontal velocity when hitting the ground.   "
},
{
  "id": "exercises-sec-conserv-momentum-5",
  "level": "2",
  "url": "sec-conserv-momentum.html#exercises-sec-conserv-momentum-5",
  "type": "Exercise",
  "number": "17.2.5",
  "title": "",
  "body": "  A 1.2 kilogram spring-activated toy bomb slides on a smooth surface along the x-axis with a speed of 0.50 meters per second. At the origin, the bomb explodes into two fragments. Fragment 1 has a mass of 0.40 kilograms and a speed of 0.90 meters per second along the negative y-axis, as shown in the “after” figure below. Determine the angle of the final velocity vector of fragment two relative to the x-axis.   "
},
{
  "id": "exercises-sec-conserv-momentum-6",
  "level": "2",
  "url": "sec-conserv-momentum.html#exercises-sec-conserv-momentum-6",
  "type": "Exercise",
  "number": "17.2.6",
  "title": "",
  "body": "  A plate falls vertically to the floor and breaks up into three pieces, which slide along the floor. Immediately after the impact, a 340.0 gram piece moves along the x -axis with a speed of 2.00 meters per second and a 390.0 gram piece moves along the y -axis with a speed of 1.50 meters per second. The third piece has a mass of 100.0 grams. In what direction does the third piece move? (Assume the floor is perfectly level, so the floor does not exert any external horizontal forces during the crash.)   "
},
{
  "id": "exercises-sec-conserv-momentum-7",
  "level": "2",
  "url": "sec-conserv-momentum.html#exercises-sec-conserv-momentum-7",
  "type": "Exercise",
  "number": "17.2.7",
  "title": "",
  "body": "  A 1000.0 kilograms car approaches an intersection traveling north at 20.0 meters per second. A 1200.0 kilogram car approaches the same intersection traveling east at 22.0 meters per second. The two cars collide at the intersection and lock together. Ignoring any external forces that act on the cars during the collision, what is the velocity of the cars immediately after the collision?   "
},
{
  "id": "exercises-sec-conserv-momentum-8",
  "level": "2",
  "url": "sec-conserv-momentum.html#exercises-sec-conserv-momentum-8",
  "type": "Exercise",
  "number": "17.2.8",
  "title": "",
  "body": "  A car manufacturer is testing spring mounted bumpers that cause cars to bounce apart elastically after a collision, instead of sticking together. In a bumper test, a car of mass 1358 kilograms collides head-on with a parked truck of mass 2000.0 kilograms, but the bumpers ensure that the collision is completely elastic (i.e., no energy losses from friction). If the velocity of the truck after the collision is 17.0 kilometers per hour (in the same direction as the car's initial velocity), what was the initial speed of the car?   "
},
{
  "id": "exercises-sec-conserv-momentum-9",
  "level": "2",
  "url": "sec-conserv-momentum.html#exercises-sec-conserv-momentum-9",
  "type": "Exercise",
  "number": "17.2.9",
  "title": "",
  "body": "  A 0.250 kilogram ball traveling horizontally on a frictionless surface approaches a very massive stone at 20.0 meters per second perpendicular to wall and rebounds with 70.0% of its initial kinetic energy. What is the magnitude of the change in momentum of the stone?   "
},
{
  "id": "exercises-sec-conserv-momentum-10",
  "level": "2",
  "url": "sec-conserv-momentum.html#exercises-sec-conserv-momentum-10",
  "type": "Exercise",
  "number": "17.2.10",
  "title": "",
  "body": "  You are helping your friend prepare for the next skateboard exhibition by determining if the planned program will work. Your friend will take a running start and then jump onto a heavy-duty 15.0 pound stationary skateboard. The skateboard will glide in a straight line along a short, level section of track, then up a sloped concrete wall. The goal is to reach a height of at least 10.0 feet above the starting point before coming back down the slope. Your friend's maximum running speed to safely jump on the skateboard is 23 feet per second. Your friend weighs 150 pounds.   "
},
{
  "id": "exercises-sec-conserv-momentum-11",
  "level": "2",
  "url": "sec-conserv-momentum.html#exercises-sec-conserv-momentum-11",
  "type": "Exercise",
  "number": "17.2.11",
  "title": "",
  "body": "  Because of your concern that incorrect science is being taught to children when they watch cartoons on TV, you have joined a committee which is reviewing a new cartoon version of Tarzan. In this episode, Tarzan is on the ground in front of a herd of stampeding elephants. Just in time Jane, who is up in a tall tree, sees him. She grabs a convenient vine and swings towards Tarzan, who has twice her mass, to save him. Luckily, the lowest point of her swing is just where Tarzan is standing. When she reaches him, he grabs her and the vine. They both continue to swing to safety over the elephants up to a height which looks to be about half that of Jane's original position. To decide if you going to approve this cartoon, calculate the maximum height Tarzan and Jane can swing as a fraction of her initial height.   "
},
{
  "id": "exercises-sec-conserv-momentum-12",
  "level": "2",
  "url": "sec-conserv-momentum.html#exercises-sec-conserv-momentum-12",
  "type": "Exercise",
  "number": "17.2.12",
  "title": "",
  "body": "  You have been hired as a technical consultant for an early-morning cartoon series for children to make sure that the science is correct. In the script, a wagon containing two boxes of gold (total mass of 150 kilogram) has been cut loose from the horses by an outlaw. The wagon starts from rest 50.0 meters up a hill with a 6.0 degree slope. The outlaw plans to have the wagon roll down the hill and across the level ground and then crash into a canyon where his confederates wait. But in a tree 40.0 meters from the edge of the canyon wait the Lone Ranger (mass 80.0 kilogram) and Tonto (mass 70.0 kilogram). They drop vertically into the wagon as it passes beneath them. The script states that it takes the Lone Ranger and Tonto 5.0 seconds to grab the gold and jump out of the wagon, but is this correct? You assume that the wagon rolls with negligible friction.   "
},
{
  "id": "sec-collisions",
  "level": "1",
  "url": "sec-collisions.html",
  "type": "Section",
  "number": "17.3",
  "title": "Collisions",
  "body": " Collisions   One useful application of conservation of momentum is analyzing collisions that take place in isolated systems. Even though the energy of an isolated system is conserved it can still transfer between different forms in the system. The external force on an isolated system is zero and internal forces cancel out, so how can this happen? Even though internal forces cancel out, work done by internal forces don't necessarily have to. For example, consider the system made up of a person standing on ice holding a bowling ball. Since the system has no velocity it has no kinetic energy. If the person throws the bowling ball they will gain speed in opposite directions and increase the kinetic energy of the system above zero. The forces are in equal and opposite directions but they act on different objects with opposite velocity directions so the work done on each is positive. However, total energy stays the same because the person added the kinetic energy by using up an equal amount of chemical energy stored in their body.    1D Elastic Collsions  If the collision undergone by an isolated system conserves kinetic energy then it is said to be an elastic collision .    Assume an isolated system of two objects undergo a one dimensional elastic collision and don't exchange mass with each other. Let , , and be the mass, initial speed, and final speed of object one. Likewise let , , and be the mass, initial speed, and final speed of object two. Then     The kinetic energy conservation equation can be written as Now we put all the terms for object 1 on one side and all the terms for object 2 on the other. Factoring both sides gives Doing the same for the conservation of momentum equation gives Dividing our final expression from the conservation of kinetic energy by our final expression from the conservation of momentum gives Now we plugg this back in to the origional conservation of momentum equation       Assume an isolated system of two objects undergo a one dimensional elastic collision and don't exchange mass with each other. Let , , and be the mass, initial speed, and final speed of object one. Likewise let , , and be the mass, initial speed, and final speed of object two. Then     We could repeat the process followed in the proof of but solve for instead of . However, there is an easier way to solve for . In the proof of we arbitrary picked one of the objects to be labeled 1 and the other to be label 2. The arbitrary choice of labelling a system 1 or 2 can't change the physics of the situation. So if we now go and swap all the labels between 1 and 2 the equations should still be valid. This gives the desired result.      Inelastic Collisions  If the collision undergone by an isolated system does not conserve kinetic energy then it is said to be and inelastic collsion . In this case just use conservation of momentum to solve the problem If the collision undergone by an isolated system converts the maximum amount of kinetic energy to some other form then it is said the be a totally inelastic collision . totally inelastic collsions are a special case of inelastic collsion. Totally nelastic collsions occur when two objects stick together after colliding. This scenario gives rise to the following conservation of momentum equation:     Explosions  Explosions occur when an object splits into two or more pieces. An example would be a firework rocket. Initially, the firework is one piece, but after the explosion, the firework splits into separate objects, with separate velocities. For explosions, use conservation of momentum in the form where the indecies j and k run over all the objects that exists before and after the collsion respectively.   "
},
{
  "id": "subsec-elastic-collisions-2",
  "level": "2",
  "url": "sec-collisions.html#subsec-elastic-collisions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elastic collision "
},
{
  "id": "thm-1d-elastic-coll-obj-1",
  "level": "2",
  "url": "sec-collisions.html#thm-1d-elastic-coll-obj-1",
  "type": "Theorem",
  "number": "17.3.1",
  "title": "",
  "body": "  Assume an isolated system of two objects undergo a one dimensional elastic collision and don't exchange mass with each other. Let , , and be the mass, initial speed, and final speed of object one. Likewise let , , and be the mass, initial speed, and final speed of object two. Then     The kinetic energy conservation equation can be written as Now we put all the terms for object 1 on one side and all the terms for object 2 on the other. Factoring both sides gives Doing the same for the conservation of momentum equation gives Dividing our final expression from the conservation of kinetic energy by our final expression from the conservation of momentum gives Now we plugg this back in to the origional conservation of momentum equation    "
},
{
  "id": "thm-1d-elastic-coll-obj-2",
  "level": "2",
  "url": "sec-collisions.html#thm-1d-elastic-coll-obj-2",
  "type": "Theorem",
  "number": "17.3.2",
  "title": "",
  "body": "  Assume an isolated system of two objects undergo a one dimensional elastic collision and don't exchange mass with each other. Let , , and be the mass, initial speed, and final speed of object one. Likewise let , , and be the mass, initial speed, and final speed of object two. Then     We could repeat the process followed in the proof of but solve for instead of . However, there is an easier way to solve for . In the proof of we arbitrary picked one of the objects to be labeled 1 and the other to be label 2. The arbitrary choice of labelling a system 1 or 2 can't change the physics of the situation. So if we now go and swap all the labels between 1 and 2 the equations should still be valid. This gives the desired result.   "
},
{
  "id": "subsec-inelastic-collisions-2",
  "level": "2",
  "url": "sec-collisions.html#subsec-inelastic-collisions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inelastic collsion totally inelastic collision "
},
{
  "id": "sec-collision-ex-prob",
  "level": "1",
  "url": "sec-collision-ex-prob.html",
  "type": "Section",
  "number": "17.4",
  "title": "Collision Example Problem",
  "body": " Collision Example Problem  Two hockey pucks of equal mass m collide. Puck A is initially moving to the right at 5.00 meters pers second when it collides with puck B (initially stationary). After the collision, puck A moves at 2.00 meters per second at an angle of 30.0 degrees from its original direction. What is the speed of puck B after the collision?  Conservation of momentum with zero values plugged in gives Plugging in values we get Solving the -component of the equation we get Solving the -component of the equation we get   "
},
{
  "id": "sec-com",
  "level": "1",
  "url": "sec-com.html",
  "type": "Section",
  "number": "17.5",
  "title": "Center of Mass",
  "body": " Center of Mass  Imagine you want to analyze a system consisting of a large number or particles. It would be quite tedious to keep track of them individually. In some cases the system you want to analyze is an extended body like a chair and analyzing each atom isn't even feasible. In cases like this it is often good enough to analyze the motion of the systems center of mass (com) instead of every particle in the system.    For a system of particles the com is defined as the vector: where and the index ranges over all particles in the system.    If no mass enters or leaves the system then the system is said to be closed. If the system is closed then is constant.    For a closed system, the velocity of the center of mass is given by     Taking the time derivative of with being constant gives the desired result.      Let be the total linear momentum of the system, and assume that the system is closed. Then     Rearranging gives      says that we can calculate the total linear momentum of a system of particles by pretending that the system is a single partilce of mass located at the center of mass.    For a closed system the acceleration of the center of mass is given by     Taking the time derivative of with being constant gives the desired result.      For a closed system     Rearranging gives      says that we can apply Newton's second law to a system of particles by pretending that the system is a single particle of mass located at the center of mass. We have actually already been secretly been doing this for extended objects throughout the course so far.    For a closed system     Taking the time deriavtive of gives Then by we have       Formula for Center of Mass   We've seen previously that momentum of an isolated system is conserved. However, if there are too many particles in the system, it would be difficult to add so many sources to get the total momentum. To examine the motion of large groups of particles, we need to create a definition for where the center of mass of the system is. This is based on averaging.    Suppose you had a simple isolated system of two grains of wheat. One grain is at x=0.0m and one grain is at x=2.0m. What would you say the average x position ( ) of the system was?     Suppose you had a simple isolated system of three grains of wheat. One grain is at x=0.0m, one grain is at x=4.0m, and one grain is at x=5.0m. What would you say the average x position ( ) of the system was?     Suppose you had a simple isolated system of four grains of wheat. One grain is at x=1.0m, and three grains are all at x=5.0m. What would you say the average x position ( ) of the system was?     Suppose you had an isolated system of 101 grams of flour. 100 grams are making up a cake at x=1.00m, and one gram is at x=5.00m. What would you say the average x position ( ) of the system was, to 3 significant figures?     Suppose you had an isolated system of flour. 200 grams are making up a cake at x=2.00m, 50 grams are making up a cake at x=3.00m, and 350 grams are making up a cake at x=5.00m. What would you say the average x position ( ) of the system was, to 3 significant figures?     So, in general, to get the average x position, we need to take the (in kilogram) of the each object and multiply that by the (in m) of that object, add all the answers together, and then divide by the grand total of all the objects together. This is called a mass-weighted average, and we also call that the “center of mass” or “centroid”: Writing the sum using the sum symbol, If we had been calculating the center of mass along the y coordinate, the equation would be: Finally, if we had been calculating the center of mass along the z coordinate, the equation would be: So, the position in 3-D of the center of mass is: In the limit as the masses of the individual objects shrink towards zero, the mass distribution becomes a smooth, continuous object instead of many discrete objects. In that limit, all the m's shrink into infinitesimal dm's, and we use an integral to do the addition of all the tiny masses: In practice, each tiny mass dm is computed by multiplying its tiny volume dV by its density : If you're integrating using Cartesian coordinates, the volume of a tiny rectangular volume is dx dy dz. Doing a triple integral over dx, dy, and dz is something you do in Calculus 3, so you don't have to do one right now.      The three masses shown in are connected by massless, rigid rods. Let grams and grams.   What is the x-coordinate of the center of mass?    What is the y-coordinate of the center of mass?      The diagram shows three labeled masses positioned at the vertices of a right triangle on an x-y coordinate grid. Point A is located at the origin and is labeled as a 200 gram mass. Point C lies directly to the right of A along the x-axis, with a horizontal distance of 12 centimeters between them. Point C is labeled with mass . From point C, a vertical line extends upward 10 centimeters to point B, which is labeled with mass . The segment from A to C and the segment from C to B form the perpendicular legs of the triangle, while the segment from A to B forms the hypotenuse.   Diagram of three masses at points A, B, and C forming a right triangle with labeled distances.        A 150.0 gram ball and a 240.0 gram ball are connected by a 32.00 centimeter long, massless, rigid rod. The balls rotate about their center of mass at 150.0 revolutions per minute.   How far from the 150.0 gram ball is the center of mass?    What is the tangential speed of the 150 gram ball?         A straight rod has one end at the origin and the other end at the point and a linear density given by , where is a known constant and is the x coordinate. Since this wire is not uniform, you will have to use integration to solve this part.   Use with appropriate limits to find the total mass .    Find for this rod. Express your answer in terms of one or both of and .        "
},
{
  "id": "principle-com",
  "level": "2",
  "url": "sec-com.html#principle-com",
  "type": "Principle",
  "number": "17.5.1",
  "title": "",
  "body": "  For a system of particles the com is defined as the vector: where and the index ranges over all particles in the system.   "
},
{
  "id": "thm-v-com",
  "level": "2",
  "url": "sec-com.html#thm-v-com",
  "type": "Theorem",
  "number": "17.5.2",
  "title": "",
  "body": "  For a closed system, the velocity of the center of mass is given by     Taking the time derivative of with being constant gives the desired result.   "
},
{
  "id": "cor-momentum-com",
  "level": "2",
  "url": "sec-com.html#cor-momentum-com",
  "type": "Corollary",
  "number": "17.5.3",
  "title": "",
  "body": "  Let be the total linear momentum of the system, and assume that the system is closed. Then     Rearranging gives    "
},
{
  "id": "thm-a-com",
  "level": "2",
  "url": "sec-com.html#thm-a-com",
  "type": "Theorem",
  "number": "17.5.4",
  "title": "",
  "body": "  For a closed system the acceleration of the center of mass is given by     Taking the time derivative of with being constant gives the desired result.   "
},
{
  "id": "cor-f-eq-ma-com",
  "level": "2",
  "url": "sec-com.html#cor-f-eq-ma-com",
  "type": "Corollary",
  "number": "17.5.5",
  "title": "",
  "body": "  For a closed system     Rearranging gives    "
},
{
  "id": "cor-f-eq-dpdt-com",
  "level": "2",
  "url": "sec-com.html#cor-f-eq-dpdt-com",
  "type": "Corollary",
  "number": "17.5.6",
  "title": "",
  "body": "  For a closed system     Taking the time deriavtive of gives Then by we have    "
},
{
  "id": "exercises-sec-com-1",
  "level": "2",
  "url": "sec-com.html#exercises-sec-com-1",
  "type": "Exercise",
  "number": "17.5.1",
  "title": "Formula for Center of Mass.",
  "body": " Formula for Center of Mass   We've seen previously that momentum of an isolated system is conserved. However, if there are too many particles in the system, it would be difficult to add so many sources to get the total momentum. To examine the motion of large groups of particles, we need to create a definition for where the center of mass of the system is. This is based on averaging.    Suppose you had a simple isolated system of two grains of wheat. One grain is at x=0.0m and one grain is at x=2.0m. What would you say the average x position ( ) of the system was?     Suppose you had a simple isolated system of three grains of wheat. One grain is at x=0.0m, one grain is at x=4.0m, and one grain is at x=5.0m. What would you say the average x position ( ) of the system was?     Suppose you had a simple isolated system of four grains of wheat. One grain is at x=1.0m, and three grains are all at x=5.0m. What would you say the average x position ( ) of the system was?     Suppose you had an isolated system of 101 grams of flour. 100 grams are making up a cake at x=1.00m, and one gram is at x=5.00m. What would you say the average x position ( ) of the system was, to 3 significant figures?     Suppose you had an isolated system of flour. 200 grams are making up a cake at x=2.00m, 50 grams are making up a cake at x=3.00m, and 350 grams are making up a cake at x=5.00m. What would you say the average x position ( ) of the system was, to 3 significant figures?     So, in general, to get the average x position, we need to take the (in kilogram) of the each object and multiply that by the (in m) of that object, add all the answers together, and then divide by the grand total of all the objects together. This is called a mass-weighted average, and we also call that the “center of mass” or “centroid”: Writing the sum using the sum symbol, If we had been calculating the center of mass along the y coordinate, the equation would be: Finally, if we had been calculating the center of mass along the z coordinate, the equation would be: So, the position in 3-D of the center of mass is: In the limit as the masses of the individual objects shrink towards zero, the mass distribution becomes a smooth, continuous object instead of many discrete objects. In that limit, all the m's shrink into infinitesimal dm's, and we use an integral to do the addition of all the tiny masses: In practice, each tiny mass dm is computed by multiplying its tiny volume dV by its density : If you're integrating using Cartesian coordinates, the volume of a tiny rectangular volume is dx dy dz. Doing a triple integral over dx, dy, and dz is something you do in Calculus 3, so you don't have to do one right now.   "
},
{
  "id": "exercises-sec-com-2",
  "level": "2",
  "url": "sec-com.html#exercises-sec-com-2",
  "type": "Exercise",
  "number": "17.5.2",
  "title": "",
  "body": "  The three masses shown in are connected by massless, rigid rods. Let grams and grams.   What is the x-coordinate of the center of mass?    What is the y-coordinate of the center of mass?      The diagram shows three labeled masses positioned at the vertices of a right triangle on an x-y coordinate grid. Point A is located at the origin and is labeled as a 200 gram mass. Point C lies directly to the right of A along the x-axis, with a horizontal distance of 12 centimeters between them. Point C is labeled with mass . From point C, a vertical line extends upward 10 centimeters to point B, which is labeled with mass . The segment from A to C and the segment from C to B form the perpendicular legs of the triangle, while the segment from A to B forms the hypotenuse.   Diagram of three masses at points A, B, and C forming a right triangle with labeled distances.     "
},
{
  "id": "exercises-sec-com-3",
  "level": "2",
  "url": "sec-com.html#exercises-sec-com-3",
  "type": "Exercise",
  "number": "17.5.3",
  "title": "",
  "body": "  A 150.0 gram ball and a 240.0 gram ball are connected by a 32.00 centimeter long, massless, rigid rod. The balls rotate about their center of mass at 150.0 revolutions per minute.   How far from the 150.0 gram ball is the center of mass?    What is the tangential speed of the 150 gram ball?      "
},
{
  "id": "exercises-sec-com-4",
  "level": "2",
  "url": "sec-com.html#exercises-sec-com-4",
  "type": "Exercise",
  "number": "17.5.4",
  "title": "",
  "body": "  A straight rod has one end at the origin and the other end at the point and a linear density given by , where is a known constant and is the x coordinate. Since this wire is not uniform, you will have to use integration to solve this part.   Use with appropriate limits to find the total mass .    Find for this rod. Express your answer in terms of one or both of and .      "
},
{
  "id": "sec-var-mass-force",
  "level": "1",
  "url": "sec-var-mass-force.html",
  "type": "Section",
  "number": "17.6",
  "title": "Variable Mass Force",
  "body": " Variable Mass Force  Previously we have use Newton's Second Law in two forms, given by and We used these forms under the assumption that the mass of the system is constant. However, when the mass is not constant these expressions appear to disagree. Which if either is right? The answer to this question is nuanced. There are different answers to this question depending on how you want to interpret things. We will provide one answer which is widely regarded as the most conveinent to work with in practice.    Let denote the relative velocity of the mass being transfered between the system and the environment. The equation governing the evolution of systems with variable mass is     To derive the dynamics of a system with variable mass at an arbitrary time , we will investigate how the system evolves over the infinitesimal time interval to . To do this we will embedded the system into the constant mass system made up of the original system and the entering or leaving mass. At an arbitrary time the original system has mass . Over an infinitesimal time the original system's mass will change by an infinitesmal amount , where is positive if mass is entering the original system and negative if mass is leaving the original system. Over the infinitesimal time the original system's velocity will also change by an amount . We denote the velocity of the entering or leaving mass as . Then the relative velocity of the entering or leaving mass compared to the original system is . We will break the analysis into two cases.  Case 1 is the case where mass is entering the original system. The initial momentum of the constant mass system is The final momentum of the constant mass system is The change in momentum over the interval is then where we drop the term in the last line because the product of two infinitesimal values is insignificant in comparison to the terms containing a single infinitesimal. Either form of Newton's Law applies to the constant mass system so we can write   Case 2 is the case where mass is leaving the original system. The inital momentum of the constant mass system is The final momentum of the constant mass system is Recall that is negative in this case so is positive. The change in momentum over the interval is then where we drop the term in the last line because the product of two infinitesimal values is insignificant in comparison to the terms containing a single infinitesimal. Either form of Newton's Law applies to the constant mass system so we can write      Newton's Second Law for Variable Mass Systems   Let denote the relative velocity of the mass being transfered between the system and the environment. If we take the interpretation that mass being transfered between the system and the environment causes an external force on the system, then Newton's Second Law in the form applies to variable mass systems. must be included in for this to be true. If multiple simultaneous mass transfers are occuring between the system and the environment, then each mass transfer will exert its own variable mass force on the system.     Rocket Equation   Let the only force acting on a object be the force caused by transfering mass between the system and the environment. Furthermore, suppose that the relative velocity of the transfered mass is constant with respect to the system. Let and denote the inital and final velocities of the object. Let and denote the initial and final mass of the system. Then     Because the variable mass force is the only force acting on the system, gives       Derivation of Velocity from Rocket Propulsion   Suppose an isolated rocket in outer space (negligible gravity) has given initial velocity and given initial mass . It then converts some of its fuel into exhaust gas and pushes it out the back, so the rocket's mass without the exhaust gas is only . An observer onboard the rocket sees the exhaust leaving with given steady velocity  relative to the rocket , but ground control sees the true velocity of the exhaust relative to the ground , which is slower because the exhaust was being carried along on the platform of the rocket, and we already know the platform's velocity was . Therefore, true ground velocity of exhaust . Since we have here an explosion question, we can use the Law of Conservation of Momentum to solve for the change in the rocket's velocity, , as it pushes a small packet of exhaust out the back. Then, we will integrate that equation to find the rocket's velocity after it has pushed millions of small packets of exhaust out the back. We'll assume the rocket is travelling in the x-direction only, so all the y-components are zero.    For collision\/explosion problems, we use the Law of Conservation of Momentum because the work done by external\/non-conservative forces is too complicated to calculate. Let's write the Law of Conservation of Momentum:     Now sort out the givens and unknowns. For a Conservation of Momentum problem, we need to check on givens for the masses, the initial velocity components for all objects, and the final velocity components for all objects. A diagram sometimes helps for putting the plus or minus signs on to indicate directions: Rocket alone (without exhaust gas) Exhaust gas mass alone (mass of rocket not including mass of exhaust) (mass of exhaust in terms of and )  (since exhaust mass was initially part of the rocket, it initially shared the rocket's velocity)      Expand the Law of Conservation of Momentum so we can see where to plug in the givens. Since there are objects, we will need to break the into sources of momentum: then do the x and y components of the equation:   We are going to set , just to make it easier to use multiple 's in a while: Now distribute terms through the bracket to get: Cancelling the common term from both sides gives: Finally, solving for the change in the velocity due to pushing one small packet of exhaust out the back:   y-components are all zero since it is an x-direction problem only Next, let's take the limit of the change in velocity when the mass of the exhaust is very small, . This turns all the 's into derivative symbol 's:  Now, to find the final velocity after millions of packets of exhaust have been expelled, we can take the integral of both sides to solve for the final v: Let's assume the rocket began with mass and velocity , and ended with mass and velocity . Since the variable of integration on the left side is , and the variable of integration on the right side is , we can use these assumed values for the limits of integration: Factor out the constant: Doing the definite integrals, we get:  Distributing the minus sign inside the brackets: Using the rules of logarithms, we can combine the ln's:      From the equation for rocket propulsion, we can see:    1. If is large (faster exhaust), that tends to the final of the rocket.    2. If is large (more initial fuel available), that tends to the final of the rocket.    3. If is small (less fuel remaining at end), that tends to the final of the rocket.        A rocket in deep space has an exhaust-gas speed of 2000 meters per second. When the rocket is fully loaded, the mass of the fuel is five times the mass of the empty rocket. What is the rocket's speed when half the fuel has been burned?      A rocket in deep space has an empty mass of 170 kilograms and exhausts the hot gases of burned fuel at 2500 meters per second. What mass of fuel is needed to reach a top speed of 4000 meters per second?     "
},
{
  "id": "thm-var-mass-dyn",
  "level": "2",
  "url": "sec-var-mass-force.html#thm-var-mass-dyn",
  "type": "Theorem",
  "number": "17.6.1",
  "title": "",
  "body": "  Let denote the relative velocity of the mass being transfered between the system and the environment. The equation governing the evolution of systems with variable mass is     To derive the dynamics of a system with variable mass at an arbitrary time , we will investigate how the system evolves over the infinitesimal time interval to . To do this we will embedded the system into the constant mass system made up of the original system and the entering or leaving mass. At an arbitrary time the original system has mass . Over an infinitesimal time the original system's mass will change by an infinitesmal amount , where is positive if mass is entering the original system and negative if mass is leaving the original system. Over the infinitesimal time the original system's velocity will also change by an amount . We denote the velocity of the entering or leaving mass as . Then the relative velocity of the entering or leaving mass compared to the original system is . We will break the analysis into two cases.  Case 1 is the case where mass is entering the original system. The initial momentum of the constant mass system is The final momentum of the constant mass system is The change in momentum over the interval is then where we drop the term in the last line because the product of two infinitesimal values is insignificant in comparison to the terms containing a single infinitesimal. Either form of Newton's Law applies to the constant mass system so we can write   Case 2 is the case where mass is leaving the original system. The inital momentum of the constant mass system is The final momentum of the constant mass system is Recall that is negative in this case so is positive. The change in momentum over the interval is then where we drop the term in the last line because the product of two infinitesimal values is insignificant in comparison to the terms containing a single infinitesimal. Either form of Newton's Law applies to the constant mass system so we can write    "
},
{
  "id": "principle-var-mass-newt-2-law",
  "level": "2",
  "url": "sec-var-mass-force.html#principle-var-mass-newt-2-law",
  "type": "Principle",
  "number": "17.6.2",
  "title": "Newton’s Second Law for Variable Mass Systems.",
  "body": " Newton's Second Law for Variable Mass Systems   Let denote the relative velocity of the mass being transfered between the system and the environment. If we take the interpretation that mass being transfered between the system and the environment causes an external force on the system, then Newton's Second Law in the form applies to variable mass systems. must be included in for this to be true. If multiple simultaneous mass transfers are occuring between the system and the environment, then each mass transfer will exert its own variable mass force on the system.   "
},
{
  "id": "thm-rocket-eq",
  "level": "2",
  "url": "sec-var-mass-force.html#thm-rocket-eq",
  "type": "Theorem",
  "number": "17.6.3",
  "title": "Rocket Equation.",
  "body": " Rocket Equation   Let the only force acting on a object be the force caused by transfering mass between the system and the environment. Furthermore, suppose that the relative velocity of the transfered mass is constant with respect to the system. Let and denote the inital and final velocities of the object. Let and denote the initial and final mass of the system. Then     Because the variable mass force is the only force acting on the system, gives    "
},
{
  "id": "exercises-sec-sec-var-mass-force-1",
  "level": "2",
  "url": "sec-var-mass-force.html#exercises-sec-sec-var-mass-force-1",
  "type": "Exercise",
  "number": "17.6.1",
  "title": "Derivation of Velocity from Rocket Propulsion.",
  "body": " Derivation of Velocity from Rocket Propulsion   Suppose an isolated rocket in outer space (negligible gravity) has given initial velocity and given initial mass . It then converts some of its fuel into exhaust gas and pushes it out the back, so the rocket's mass without the exhaust gas is only . An observer onboard the rocket sees the exhaust leaving with given steady velocity  relative to the rocket , but ground control sees the true velocity of the exhaust relative to the ground , which is slower because the exhaust was being carried along on the platform of the rocket, and we already know the platform's velocity was . Therefore, true ground velocity of exhaust . Since we have here an explosion question, we can use the Law of Conservation of Momentum to solve for the change in the rocket's velocity, , as it pushes a small packet of exhaust out the back. Then, we will integrate that equation to find the rocket's velocity after it has pushed millions of small packets of exhaust out the back. We'll assume the rocket is travelling in the x-direction only, so all the y-components are zero.    For collision\/explosion problems, we use the Law of Conservation of Momentum because the work done by external\/non-conservative forces is too complicated to calculate. Let's write the Law of Conservation of Momentum:     Now sort out the givens and unknowns. For a Conservation of Momentum problem, we need to check on givens for the masses, the initial velocity components for all objects, and the final velocity components for all objects. A diagram sometimes helps for putting the plus or minus signs on to indicate directions: Rocket alone (without exhaust gas) Exhaust gas mass alone (mass of rocket not including mass of exhaust) (mass of exhaust in terms of and )  (since exhaust mass was initially part of the rocket, it initially shared the rocket's velocity)      Expand the Law of Conservation of Momentum so we can see where to plug in the givens. Since there are objects, we will need to break the into sources of momentum: then do the x and y components of the equation:   We are going to set , just to make it easier to use multiple 's in a while: Now distribute terms through the bracket to get: Cancelling the common term from both sides gives: Finally, solving for the change in the velocity due to pushing one small packet of exhaust out the back:   y-components are all zero since it is an x-direction problem only Next, let's take the limit of the change in velocity when the mass of the exhaust is very small, . This turns all the 's into derivative symbol 's:  Now, to find the final velocity after millions of packets of exhaust have been expelled, we can take the integral of both sides to solve for the final v: Let's assume the rocket began with mass and velocity , and ended with mass and velocity . Since the variable of integration on the left side is , and the variable of integration on the right side is , we can use these assumed values for the limits of integration: Factor out the constant: Doing the definite integrals, we get:  Distributing the minus sign inside the brackets: Using the rules of logarithms, we can combine the ln's:      From the equation for rocket propulsion, we can see:    1. If is large (faster exhaust), that tends to the final of the rocket.    2. If is large (more initial fuel available), that tends to the final of the rocket.    3. If is small (less fuel remaining at end), that tends to the final of the rocket.     "
},
{
  "id": "exercises-sec-sec-var-mass-force-2",
  "level": "2",
  "url": "sec-var-mass-force.html#exercises-sec-sec-var-mass-force-2",
  "type": "Exercise",
  "number": "17.6.2",
  "title": "",
  "body": "  A rocket in deep space has an exhaust-gas speed of 2000 meters per second. When the rocket is fully loaded, the mass of the fuel is five times the mass of the empty rocket. What is the rocket's speed when half the fuel has been burned?   "
},
{
  "id": "exercises-sec-sec-var-mass-force-3",
  "level": "2",
  "url": "sec-var-mass-force.html#exercises-sec-sec-var-mass-force-3",
  "type": "Exercise",
  "number": "17.6.3",
  "title": "",
  "body": "  A rocket in deep space has an empty mass of 170 kilograms and exhausts the hot gases of burned fuel at 2500 meters per second. What mass of fuel is needed to reach a top speed of 4000 meters per second?   "
},
{
  "id": "sec-rot-kin",
  "level": "1",
  "url": "sec-rot-kin.html",
  "type": "Section",
  "number": "18.1",
  "title": "Rotational Kinematics",
  "body": " Rotational Kinematics   Imagine we have an object going in a circle about a central point.   The diagram shows an x-y coordinate system with horizontal and vertical axes marked by arrowheads. A circle is centered at the origin. A small black point representing the location of an object on the circle lies on the upper-right portion of the circle. An arc shaped vector just outside the circle indicates the object is traveling counter-clockwise along the circle. A straight radius line extends from the center of the circle to this point labeled for the radius of the circle. A curved arc near the center of the circle marks the angle between the positive -axis and the radius line. The point on the circle has a vertical line segment extending downward to the -axis. This forms a triangle with -axis and the radius line. The vertical line segment is labeled to indicate the coordinate of the object. the part of the triangle formed by the -axis is labeled to indicate the coordinate of the object.   Diagram of circular motion showing an x-y coordinate system, a circle of radius r, a point on the circle, and the symbolic polar and cartesian coordinates of the point.    This situation occurs frequently in physics. We will see that it's much easier to analyze the physics of this situation in polar coordinates than cartesian coordinates. For example lets ask a simple question, if at time , what distance has the object traveled by time ? This question would be a pain in cartesian coordinates. Let's us polar coordinates. From geometry the perimeter of a circle is , so if is such that the object has made one revolution around the circle then where is the distance traveled. What about a half or quater circle?   The image displays three geometric figures arranged horizontally: a full circle on the left, a semicircle in the center, and a quarter-circle arc on the right. Each figure has a radius of equal length, shown through consistent sizing across the shapes. In the center of each circular figure is a bold formula representing the arc length for that specific portion of a circle. The full circle on the left is paired with the formula . The semicircle in the center is paired with . The quarter-circle arc on the right is paired with . The formulas correspond directly to the amount of the circumference represented by each arc.   One full circle and two circular arcs labeled with arc-length formulas.    In general where  must be in radians .    Angular Position, Velocity, and Acceleration  We can do kinematics with . We define angular velocity as the change in angle per unit time elapsed. Similarly we can define angular acceleration as the change in angular velocity per unit time elapsed. We can obtain integral equations of motion by integrating equation and equation which gives and respectively.    Equations of Rotational Kinematics  Let's consider the special case that occurs when the angular accleration is constant.    If is constant then     Evaluating equation with constant gives the desired result.    Hopefully this should look familiar. is just with all the linear kinematic variables replaced with their angular versions. Even the proofs are the same if you replace the linear kinematic variables with the angular versions. This logic extends to the other theorems in as well. We list the remaining rotational kinematic equations below but omit the proofs since they are entirely similar to the linear versions.    If is constant then       If is constant then       If is constant then       If is constant then      "
},
{
  "id": "fig-circ-motion-1",
  "level": "2",
  "url": "sec-rot-kin.html#fig-circ-motion-1",
  "type": "Figure",
  "number": "18.1.1",
  "title": "",
  "body": " The diagram shows an x-y coordinate system with horizontal and vertical axes marked by arrowheads. A circle is centered at the origin. A small black point representing the location of an object on the circle lies on the upper-right portion of the circle. An arc shaped vector just outside the circle indicates the object is traveling counter-clockwise along the circle. A straight radius line extends from the center of the circle to this point labeled for the radius of the circle. A curved arc near the center of the circle marks the angle between the positive -axis and the radius line. The point on the circle has a vertical line segment extending downward to the -axis. This forms a triangle with -axis and the radius line. The vertical line segment is labeled to indicate the coordinate of the object. the part of the triangle formed by the -axis is labeled to indicate the coordinate of the object.   Diagram of circular motion showing an x-y coordinate system, a circle of radius r, a point on the circle, and the symbolic polar and cartesian coordinates of the point.   "
},
{
  "id": "fig-circ-motion-2",
  "level": "2",
  "url": "sec-rot-kin.html#fig-circ-motion-2",
  "type": "Figure",
  "number": "18.1.2",
  "title": "",
  "body": " The image displays three geometric figures arranged horizontally: a full circle on the left, a semicircle in the center, and a quarter-circle arc on the right. Each figure has a radius of equal length, shown through consistent sizing across the shapes. In the center of each circular figure is a bold formula representing the arc length for that specific portion of a circle. The full circle on the left is paired with the formula . The semicircle in the center is paired with . The quarter-circle arc on the right is paired with . The formulas correspond directly to the amount of the circumference represented by each arc.   One full circle and two circular arcs labeled with arc-length formulas.   "
},
{
  "id": "thm-const-alpha-1",
  "level": "2",
  "url": "sec-rot-kin.html#thm-const-alpha-1",
  "type": "Theorem",
  "number": "18.1.3",
  "title": "",
  "body": "  If is constant then     Evaluating equation with constant gives the desired result.   "
},
{
  "id": "thm-const-alpha-2",
  "level": "2",
  "url": "sec-rot-kin.html#thm-const-alpha-2",
  "type": "Theorem",
  "number": "18.1.4",
  "title": "",
  "body": "  If is constant then    "
},
{
  "id": "thm-const-alpha-3",
  "level": "2",
  "url": "sec-rot-kin.html#thm-const-alpha-3",
  "type": "Theorem",
  "number": "18.1.5",
  "title": "",
  "body": "  If is constant then    "
},
{
  "id": "thm-const-alpha-4",
  "level": "2",
  "url": "sec-rot-kin.html#thm-const-alpha-4",
  "type": "Theorem",
  "number": "18.1.6",
  "title": "",
  "body": "  If is constant then    "
},
{
  "id": "thm-const-alpha-5",
  "level": "2",
  "url": "sec-rot-kin.html#thm-const-alpha-5",
  "type": "Theorem",
  "number": "18.1.7",
  "title": "",
  "body": "  If is constant then    "
},
{
  "id": "sec-circ-motion",
  "level": "1",
  "url": "sec-circ-motion.html",
  "type": "Section",
  "number": "18.2",
  "title": "Circular Motion",
  "body": " Circular Motion   Now we want to relate linear and angular kinematics for circular motion, but first we need to take a detour to further explore polar coordinates.    Relating Cartesian and Polar Coordinate Systems  Unit vectors point in the direction that increase the coordinate they're associated with. In the cartesian coordinate system the unit vector points in the direction of increasing , and the unit vector points in the direction of increasing .   A Cartesian grid with the Cartesian unit vectors at two different points. From each point, two black arrows extend: one arrow points horizontally to the right, representing the positive x-unit direction, and the other arrow points vertically upward, representing the positive y-unit direction. The right-pointing arrow is labeled , and the upward-pointing arrow is labeled .   A Cartesian grid with the Cartesian unit vectors at two different points.    Cartesian coordinates are special because the unit vectors point in the same direction everywhere (They don't depend on the the position ). Polar coordinates are defined by the radius and angle where is in radians.   A polar coordinate grid contains five concentric circles and twelve evenly spaced radial lines, forming a full 360-degree polar layout. A small solid dot marks the center of the grid. Two separate pairs of unit vectors are drawn at different angular positions on the grid. Each pair of unit vectors originates from a small black point located on one of the circles. In each pair , one arrow represents the r-hat direction (pointing radially outward from the center), and the other arrow represents the -hat direction (pointing tangentially in the clockwise direction to the circle it lies on). Each arrow has a small arrowhead and is labeled with a bold character: for the radial unit vector and for the angular unit vector.   Polar grid with two sets of polar unit vectors labeled r-hat and theta-hat at different positions.    Unit vectors point in the direction that increases their coordinate so the unit vector points in the direction of increasing , and the unit vector points in the direction of increasing . The direction of unit vectors in polar coordinates depends on position . The fact that unit vectors for polar coordinates depend on position is usually undesirable. Let's express them in terms of cartesian unit vectors which don't depend on position to deal with this.   A coordinate system with horizontal x-axis and vertical y-axis intersects at the center of a large circle. The circle represents a path of circular motion. A point on the circle, located in the upper-right quadrant, is marked with a small filled dot. A straight radius line extends from the center of the circle to this point. The angle between the radius line and the x-axis is labeled as . Four short arrows originate at the point on the circle, indicating directions of basis vectors. A vector labeled points horizontally to the right. A vector labeled points vertically up. A vector labeled points radially outward from the center of the circle. A vector labeled points tangentially in the clockwise direction to the circle at that point. The vector makes and angle with the vector. The vector alos makes and angle with the vector.   A diagram showing the angles between the polar and cartesian unit vectors at a point on a circle.    By projecting the and unit vectors onto the and unit vectors we get the following equations:      Circular Motion  Now we have the tools we need to relate linear and angular kinematics in circular motion.    The velocity of an object undergoing circular motion is     For circular motion the position of the revolving object at any time is Then Now so we have     The speed of an object undergoing circular motion is then     The acceleration of an object undergoing circular motion is      so Now so     If we break the acceleration vector into its componenents in polar coordinates we get Since vectors are equal if and only if their components are equal we see that the radial component of the acceleration is given by and the angular component is given by The angular component of the acceleration has a subscript because its also known as the tangential acceleration. It called tangential acceleration because the angular component of the acceleration is always tangent to the object's circular path at its current position.   The diagram shows a circle representing an object's circular path. A small black dot is placed on the upper-right portion of the circle to mark the object's position. From this point, a diagonal arrow extends upward and leftward tangential to the circle, indicating the direction of the tangent acceleration vector. The arrow is labeled as .   Tangent acceleration vector shown at a point on a circular path.     is also the component of the acceleration that changes the object's angular velocity over time. The radial component of the acceleration is also known as the centripedal acceleration (The word centripedal means center seeking).   The diagram shows a circle representing an object's circular path. A small black dot is placed on the upper-right portion of the circle to mark the object's position. From this point, a diagonal arrow extends downward and leftward toward the center of the circle, indicating the direction of the radial acceleration vector. The arrow is labeled as .   Radial acceleration vector pointing inward from a point on a circular path.    The radial acceleration always points towards the center of the circle. Plugging equation into equation gives another useful formula for the radial acceleration.  Finally, the radial and tangential components of the acceleration are always orthogonal (at a right angle to each other) so we can use the pythagorean theorem to get    "
},
{
  "id": "fig-circ-motion-cart-unit-vecs",
  "level": "2",
  "url": "sec-circ-motion.html#fig-circ-motion-cart-unit-vecs",
  "type": "Figure",
  "number": "18.2.1",
  "title": "",
  "body": " A Cartesian grid with the Cartesian unit vectors at two different points. From each point, two black arrows extend: one arrow points horizontally to the right, representing the positive x-unit direction, and the other arrow points vertically upward, representing the positive y-unit direction. The right-pointing arrow is labeled , and the upward-pointing arrow is labeled .   A Cartesian grid with the Cartesian unit vectors at two different points.   "
},
{
  "id": "fig-circ-motion-polar-unit-vecs",
  "level": "2",
  "url": "sec-circ-motion.html#fig-circ-motion-polar-unit-vecs",
  "type": "Figure",
  "number": "18.2.2",
  "title": "",
  "body": " A polar coordinate grid contains five concentric circles and twelve evenly spaced radial lines, forming a full 360-degree polar layout. A small solid dot marks the center of the grid. Two separate pairs of unit vectors are drawn at different angular positions on the grid. Each pair of unit vectors originates from a small black point located on one of the circles. In each pair , one arrow represents the r-hat direction (pointing radially outward from the center), and the other arrow represents the -hat direction (pointing tangentially in the clockwise direction to the circle it lies on). Each arrow has a small arrowhead and is labeled with a bold character: for the radial unit vector and for the angular unit vector.   Polar grid with two sets of polar unit vectors labeled r-hat and theta-hat at different positions.   "
},
{
  "id": "fig-circ-motion-polar-in-cart",
  "level": "2",
  "url": "sec-circ-motion.html#fig-circ-motion-polar-in-cart",
  "type": "Figure",
  "number": "18.2.3",
  "title": "",
  "body": " A coordinate system with horizontal x-axis and vertical y-axis intersects at the center of a large circle. The circle represents a path of circular motion. A point on the circle, located in the upper-right quadrant, is marked with a small filled dot. A straight radius line extends from the center of the circle to this point. The angle between the radius line and the x-axis is labeled as . Four short arrows originate at the point on the circle, indicating directions of basis vectors. A vector labeled points horizontally to the right. A vector labeled points vertically up. A vector labeled points radially outward from the center of the circle. A vector labeled points tangentially in the clockwise direction to the circle at that point. The vector makes and angle with the vector. The vector alos makes and angle with the vector.   A diagram showing the angles between the polar and cartesian unit vectors at a point on a circle.   "
},
{
  "id": "thm-vel-circ-motion",
  "level": "2",
  "url": "sec-circ-motion.html#thm-vel-circ-motion",
  "type": "Theorem",
  "number": "18.2.4",
  "title": "",
  "body": "  The velocity of an object undergoing circular motion is     For circular motion the position of the revolving object at any time is Then Now so we have    "
},
{
  "id": "thm-acc-circ-motion",
  "level": "2",
  "url": "sec-circ-motion.html#thm-acc-circ-motion",
  "type": "Theorem",
  "number": "18.2.5",
  "title": "",
  "body": "  The acceleration of an object undergoing circular motion is      so Now so    "
},
{
  "id": "fig-circ-motion-tang-acc",
  "level": "2",
  "url": "sec-circ-motion.html#fig-circ-motion-tang-acc",
  "type": "Figure",
  "number": "18.2.6",
  "title": "",
  "body": " The diagram shows a circle representing an object's circular path. A small black dot is placed on the upper-right portion of the circle to mark the object's position. From this point, a diagonal arrow extends upward and leftward tangential to the circle, indicating the direction of the tangent acceleration vector. The arrow is labeled as .   Tangent acceleration vector shown at a point on a circular path.   "
},
{
  "id": "fig-circ-motion-rad-acc",
  "level": "2",
  "url": "sec-circ-motion.html#fig-circ-motion-rad-acc",
  "type": "Figure",
  "number": "18.2.7",
  "title": "",
  "body": " The diagram shows a circle representing an object's circular path. A small black dot is placed on the upper-right portion of the circle to mark the object's position. From this point, a diagonal arrow extends downward and leftward toward the center of the circle, indicating the direction of the radial acceleration vector. The arrow is labeled as .   Radial acceleration vector pointing inward from a point on a circular path.   "
},
{
  "id": "sec-ucm",
  "level": "1",
  "url": "sec-ucm.html",
  "type": "Section",
  "number": "18.3",
  "title": "Uniform Circular Motion",
  "body": " Uniform Circular Motion  Consider the special case of circular motion where . This is known as uniform circular motion . For uniform circular motion gives where we drop the subscript from in the last line because can't change if . The period is defined as the time needed to make one revolution. Then an so Frequency is defined as Since on revolution is completed in one period Frequency has units of hertz (Hz) which is equivalent to . Finally,   "
},
{
  "id": "sec-ucm-2",
  "level": "2",
  "url": "sec-ucm.html#sec-ucm-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "uniform circular motion "
},
{
  "id": "sec-rot-kin-ex-prob",
  "level": "1",
  "url": "sec-rot-kin-ex-prob.html",
  "type": "Section",
  "number": "18.4",
  "title": "Rotational Kinematics Example Problem",
  "body": " Rotational Kinematics Example Problem  A turntable of radius 0.100 meters is initially revolving at 33.0 rpm (rotations per minute). It comes to rest uniformly over 20.0 seconds.   How many revolutions does it manage to make before coming to rest?    What is the initial tangential velocity of the edge of the turntable?    What is the initial tangential acceleration of the edge of the turntable?    What is the initial radial acceleration of the edge of the turntable?    What is the magnitude of the initial total acceleration of the edge of the turntable?     To convert between angular and linear kinematic quantities we need to put are angular quantities in terms of radians instead of rotations. We also know the turntable comes to rest in 20 seconds but rpm is in units of minutes. Let's convert our angular velocity to radians per second Now let's make a givens table to keep track of what we do and don't know.   Kinematic Givens Table                       Given what we know, is the best equation to solve for the number of radians covered before coming to rest. Plugging in zero values gives Numerically we get Part 1 asked for the number of revolutions not the number or radians, so lets convert to revolutions.   Part 2 ask for the initial tangential velocity. We can use the equation at the initial time to solve for the initial tangential velocity. Numerically   Part 3 ask for the inital tangential acceleration. We know that but we don't know at the inital time. Lets solve for it using equation . Plugging in zero values gives The initial tangential acceleration is then Numerically   Part 4 ask for the inital radial acceleration. We can use the equation at the initial time to solve for the initial radial acceleration. Numerically   Part 5 ask for the magnitude of the inital acceleration We can use the equation at the initial time to solve for the magnitude of the initial acceleration. Numerically   "
},
{
  "id": "table-rot-kin-ex-prob-givens",
  "level": "2",
  "url": "sec-rot-kin-ex-prob.html#table-rot-kin-ex-prob-givens",
  "type": "Table",
  "number": "18.4.1",
  "title": "Kinematic Givens Table",
  "body": " Kinematic Givens Table                      "
},
{
  "id": "exercises-ch-rotational-kinematics",
  "level": "1",
  "url": "exercises-ch-rotational-kinematics.html",
  "type": "Exercises",
  "number": "18.5",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   General Circular Motion    The turntable of a record player rotates at a rate of 33.33 revolutions per minute while running. After it is switched off, it takes 60.00 seconds to come to rest uniformly.   Calculate its angular acceleration after being switched off    Calculate the angle in radians through which it rotates in that time.         A grinding wheel, initially at rest, is spun up with constant angular acceleration of 5.00 radians per second squared for 8.00 seconds. The wheel is then brought to rest by braking with uniform negative angular acceleration in 10.0 revolutions. Determine the negative acceleration required, and the time needed to bring the wheel to rest.      You are a city engineer watching traffic at a roundabout, and want to check on the accelerations experienced by the vehicles going around. A bus enters a roundabout of radius 30.0 meters at . The roundabout is a circle centered at the origin, and the bus enters the circle at coordinates , i.e., where the positive x-axis intersects the roundabout. The bus proceeds counterclockwise around the circle at a constant speed of 7.00 meters per second.   Find the coordinates of the bus at seconds. (Polar coordinates are acceptable; they may help you to do the geometry and trigonometry for part b.)    Determine the centripetal acceleration vector of the bus at seconds. (Hint: the formula will give you the magnitude, and since the direction of centripetal acceleration is from the object towards the center of the circle, you can calculate the direction as an angle in degrees.) Write the result in x and y component notation, such angled brackets. (This vector represents the direction and amount that the driver is steering at that instant.)         At seconds, a police car enters a roundabout of radius 20.0 meters. The roundabout is a circle centered at the origin, and the police car enters the circle at coordinates , with an initial speed of 5.00 meters per second, headed counterclockwise. However, at seconds, the policeman decides to speed up; he steps on the gas, and the police car increases its speed at a rate of meters per second squared.   Find the coordinates of the police car at seconds. (Polar coordinates are acceptable.)    Then, find the total acceleration vector of the police car at seconds. The total acceleration vector is the sum of the centripetal acceleration vector (due to the policeman steering in a circle) plus the tangential acceleration vector (due to the policeman stepping on the gas). To do the vector sum, you will want the x and y components of both vectors. Write the result in x and y component notation, such as angled brackets.         A turntable of radius 0.150 meters, initially at rest, accelerates to 45.0 rotations per minute uniformly over 25.0 seconds.   What is the initial tangential velocity?    What is the angular acceleration?    What is the tangential acceleration?    What is the final radial acceleration?    What is the magnitude of the final total acceleration (treat the radial as the “new x-axis” and the tangential as the “new y-axis” since the radial is perpendicular to the tangential)?         Uniform Circular Motion   Deriving the formula for centripetal acceleration during uniform circular motion   Uniform circular motion means the angular velocity is a symbolic given , and thus the angular . Also, the radius of the circle is a symbolic given . Let the initial angular position when . If final time is a symbolic given , we can therefore use the equations of kinematics to calculate the final angular position :     Next, we can convert from known polar coordinates to rectangular coordinates by using trigonometry:  Now, we can find the x-velocity ( ) and the y-velocity ( ) by differentiating:  Now, we can find the x-acceleration ( ) and the y-acceleration ( ) by differentiating:  Finally, find the magnitude of the acceleration by using Pythagoras' Theorem, and simplify it:      A car travels at constant speed (tangential velocity) around a circular track, completing one lap for every period seconds. The radial (centripetal) acceleration of the car is measured using the accelerometer in a cell phone, and is 0.3858 meters per second squared. We are going to figure out the radius of the track, .   What is the initial angular velocity of the car, written in symbols (in terms of , the given period)? Also, what is the final angular velocity of the car, written in symbols?    What is the tangential velocity of the car, written in symbols (in terms of , the given period, and , the unknown radius)?    Use the given acceleration to compute the radius of the track, numerically.    Use the radius of the track computed from the previous question to compute the speed of the car, numerically.        "
},
{
  "id": "exercises-ch-rotational-kinematics-2-2",
  "level": "2",
  "url": "exercises-ch-rotational-kinematics.html#exercises-ch-rotational-kinematics-2-2",
  "type": "Exercise",
  "number": "18.5.1",
  "title": "",
  "body": "  The turntable of a record player rotates at a rate of 33.33 revolutions per minute while running. After it is switched off, it takes 60.00 seconds to come to rest uniformly.   Calculate its angular acceleration after being switched off    Calculate the angle in radians through which it rotates in that time.      "
},
{
  "id": "exercises-ch-rotational-kinematics-2-3",
  "level": "2",
  "url": "exercises-ch-rotational-kinematics.html#exercises-ch-rotational-kinematics-2-3",
  "type": "Exercise",
  "number": "18.5.2",
  "title": "",
  "body": "  A grinding wheel, initially at rest, is spun up with constant angular acceleration of 5.00 radians per second squared for 8.00 seconds. The wheel is then brought to rest by braking with uniform negative angular acceleration in 10.0 revolutions. Determine the negative acceleration required, and the time needed to bring the wheel to rest.   "
},
{
  "id": "exercises-ch-rotational-kinematics-2-4",
  "level": "2",
  "url": "exercises-ch-rotational-kinematics.html#exercises-ch-rotational-kinematics-2-4",
  "type": "Exercise",
  "number": "18.5.3",
  "title": "",
  "body": "  You are a city engineer watching traffic at a roundabout, and want to check on the accelerations experienced by the vehicles going around. A bus enters a roundabout of radius 30.0 meters at . The roundabout is a circle centered at the origin, and the bus enters the circle at coordinates , i.e., where the positive x-axis intersects the roundabout. The bus proceeds counterclockwise around the circle at a constant speed of 7.00 meters per second.   Find the coordinates of the bus at seconds. (Polar coordinates are acceptable; they may help you to do the geometry and trigonometry for part b.)    Determine the centripetal acceleration vector of the bus at seconds. (Hint: the formula will give you the magnitude, and since the direction of centripetal acceleration is from the object towards the center of the circle, you can calculate the direction as an angle in degrees.) Write the result in x and y component notation, such angled brackets. (This vector represents the direction and amount that the driver is steering at that instant.)      "
},
{
  "id": "exercises-ch-rotational-kinematics-2-5",
  "level": "2",
  "url": "exercises-ch-rotational-kinematics.html#exercises-ch-rotational-kinematics-2-5",
  "type": "Exercise",
  "number": "18.5.4",
  "title": "",
  "body": "  At seconds, a police car enters a roundabout of radius 20.0 meters. The roundabout is a circle centered at the origin, and the police car enters the circle at coordinates , with an initial speed of 5.00 meters per second, headed counterclockwise. However, at seconds, the policeman decides to speed up; he steps on the gas, and the police car increases its speed at a rate of meters per second squared.   Find the coordinates of the police car at seconds. (Polar coordinates are acceptable.)    Then, find the total acceleration vector of the police car at seconds. The total acceleration vector is the sum of the centripetal acceleration vector (due to the policeman steering in a circle) plus the tangential acceleration vector (due to the policeman stepping on the gas). To do the vector sum, you will want the x and y components of both vectors. Write the result in x and y component notation, such as angled brackets.      "
},
{
  "id": "exercises-ch-rotational-kinematics-2-6",
  "level": "2",
  "url": "exercises-ch-rotational-kinematics.html#exercises-ch-rotational-kinematics-2-6",
  "type": "Exercise",
  "number": "18.5.5",
  "title": "",
  "body": "  A turntable of radius 0.150 meters, initially at rest, accelerates to 45.0 rotations per minute uniformly over 25.0 seconds.   What is the initial tangential velocity?    What is the angular acceleration?    What is the tangential acceleration?    What is the final radial acceleration?    What is the magnitude of the final total acceleration (treat the radial as the “new x-axis” and the tangential as the “new y-axis” since the radial is perpendicular to the tangential)?      "
},
{
  "id": "exercises-ch-rotational-kinematics-3-2",
  "level": "2",
  "url": "exercises-ch-rotational-kinematics.html#exercises-ch-rotational-kinematics-3-2",
  "type": "Exercise",
  "number": "18.5.6",
  "title": "Deriving the formula for centripetal acceleration during uniform circular motion.",
  "body": " Deriving the formula for centripetal acceleration during uniform circular motion   Uniform circular motion means the angular velocity is a symbolic given , and thus the angular . Also, the radius of the circle is a symbolic given . Let the initial angular position when . If final time is a symbolic given , we can therefore use the equations of kinematics to calculate the final angular position :     Next, we can convert from known polar coordinates to rectangular coordinates by using trigonometry:  Now, we can find the x-velocity ( ) and the y-velocity ( ) by differentiating:  Now, we can find the x-acceleration ( ) and the y-acceleration ( ) by differentiating:  Finally, find the magnitude of the acceleration by using Pythagoras' Theorem, and simplify it:   "
},
{
  "id": "exercises-ch-rotational-kinematics-3-3",
  "level": "2",
  "url": "exercises-ch-rotational-kinematics.html#exercises-ch-rotational-kinematics-3-3",
  "type": "Exercise",
  "number": "18.5.7",
  "title": "",
  "body": "  A car travels at constant speed (tangential velocity) around a circular track, completing one lap for every period seconds. The radial (centripetal) acceleration of the car is measured using the accelerometer in a cell phone, and is 0.3858 meters per second squared. We are going to figure out the radius of the track, .   What is the initial angular velocity of the car, written in symbols (in terms of , the given period)? Also, what is the final angular velocity of the car, written in symbols?    What is the tangential velocity of the car, written in symbols (in terms of , the given period, and , the unknown radius)?    Use the given acceleration to compute the radius of the track, numerically.    Use the radius of the track computed from the previous question to compute the speed of the car, numerically.      "
},
{
  "id": "sec-newt-laws-circ-motion",
  "level": "1",
  "url": "sec-newt-laws-circ-motion.html",
  "type": "Section",
  "number": "19.1",
  "title": "Newton’s Laws with Circular Motion",
  "body": " Newton's Laws with Circular Motion   "
},
{
  "id": "sec-solv-newt-laws-circ-motion-probs",
  "level": "1",
  "url": "sec-solv-newt-laws-circ-motion-probs.html",
  "type": "Section",
  "number": "19.2",
  "title": "Solving Newton’s Laws with Circular Motion Problems",
  "body": " Solving Newton's Laws with Circular Motion Problems  The steps for solving a circular motion forces problem are quite similar to the standard plan for a regular forces problem. The main difference is that we equate the vectors on each side of Newton's Second Law using polar coordinates instead of cartesian coordinates. Lets go over the recommended steps for solving a Newton's Laws with Circular Motions problem by working an example. Above a horizontal table, a given mass is whirled in a horizontal circle of radius by a horizontal string. Assume the table has negligible friction. Suppose the string has a maximum tensile force . If a tension beyond this is applied, the string will break. what is the maximum tangential velocity of the mass at the end of the string, without breaking the string? Express the answer in terms of , , and . The list of steps is:   Draw the free body diagram.  I find that it's usually best to draw the free body diagram from the perspective of following the object from behind as it traverses the circle. I also like to include a dot representing the center of circular motion. The reason for this is if you have a circular motion problem and tilt the coordinate axis, the motion in the tilted coordinate axis is often no longer circular. Including the dot helps to check if motion really is circular for your choice coordinate system.   A tension force labeled acts radially inward (towards the middle of the circle) on the object. A normal force labeled from the ground acts on the object in the positive direction. Gravity labeled acts on the object in the negative direction.   Free body diagram of the object being whirled by the string.      Draw radial, tangential, and coordinate axes instead of coordinate axes. This allows the axes to track together with the object as it rotates. The -axis is like the new, tilted -axis. It points in the radial direction, from the origin to the point that is moving in a circle. The -axis is like the new, tilted -axis. It points in the tangent ( ) direction, which is perpendicular to the radius. The -axis must be orthogonal to both the and the axes. The -axis parallels the rotational axis of the circle (so the -axis is like the axle of a spinning wheel).    Find the components of each force vector. Remember that we are finding the components using the new, tilted axes instead of the original axes.         Sum the force components symbolically, to find the net -axis force, the net -axis force, and the net -axis force. Note that there is a special vocabulary word for the net -axis force: it is called the \"centripetal force.\"         For each axis, take the symbolic net force sum you found and set it equal to mass times the acceleration component for that axis. If you have hidden givens for either the -acceleration ( ) or the -acceleration ( ), substitute those givens in now. Note that there is a special hidden given for the -acceleration ( ). It is the radial, or centripetal acceleration! So, if the object is in circular motion, we'll always be able to substitute in . (A common mistake is to substitute in , which will give incorrect answers.)  The -component yields For the -component the mass isn't changing how high it is so . For the -component we get     Solve the unknowns. Since there are three equations (one for net force, one for net force, and one for net force), you may be able to solve up to three unknowns!  Solving the -component yields Solving the -component yields For the -component yields The maximum tangential velocity ( ) of mass without breaking the string occurs when . Then      "
},
{
  "id": "fig-newt-laws-circ-motion-ex-prob-img",
  "level": "2",
  "url": "sec-solv-newt-laws-circ-motion-probs.html#fig-newt-laws-circ-motion-ex-prob-img",
  "type": "Figure",
  "number": "19.2.1",
  "title": "",
  "body": " A tension force labeled acts radially inward (towards the middle of the circle) on the object. A normal force labeled from the ground acts on the object in the positive direction. Gravity labeled acts on the object in the negative direction.   Free body diagram of the object being whirled by the string.   "
},
{
  "id": "exercises-ch-newtons-laws-w-circ-motion",
  "level": "1",
  "url": "exercises-ch-newtons-laws-w-circ-motion.html",
  "type": "Exercises",
  "number": "19.3",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   When working on the free body diagram of an object travelling in a circle, it is better to use cylindrical polar coordinates (r,t,z system), which can follow the object around with radius remaining constant, than rectangular coordinates (x,y,z system), where neither x nor y would remain constant as the object travels. In the (r,t,z) system, the r-axis points radially outward from the center of the travel circle, the t-axis points tangent to the travel circle (parallel or antiparallel to the direction of travel), and the z-axis points in the direction of the rotational axis of the travel circle. Let's practice applying (r,t,z) coordinates to the following problems.     Approximate that the Earth ( kilograms) orbits the Sun ( kilograms) in a perfect circle as constant speed. The radius of the orbit is meters. What is the Earth's orbital speed?  Step 0: Make a force ID diagram.  Draw the Earth, and indicate what it is contacting. Based on counting the contact regions, make a list of the contact and non-contact forces. Don't include fictitious forces (i.e. only include the usual forces caused by an agent).  Forces List:   Don't forget that the magnitude of in outer space is no longer , since the target isn't an object at the surface of Earth being attracted to the center of Earth. Instead, the formula is: where is the mass of the target object being pulled, is the mass of the agent object doing the pulling, is the distance between the centers of mass of the two objects, and is a constant that fixes all the units correctly. The direction of in outer space is such that the target object is pulled towards the source object.  Step 1: Draw a free body diagram as seen from behind the object. The observer should be looking in the direction of the object's velocity.  Step 2: Mark up the free body diagram above by drawing a copy of its (r,t,z) axes off to the side. The r-axis points from the center of the circle towards the object. The t-axis points along the tangent at the spot on the circle where the object is. The z-axis is parallel to the rotational axis of the circle. All three axes are perpendicular to each other.  Step 3: Symbolically find vector components of each component force in the r,t,z coordinate system.  Now write the components of the force vector using the new, polar r,t,z axis system you drew.   Step 4: Symbolically find the vector components of in the r,t,z coordinate system.  Now find the symbolic in r, t, and z, based on your vector components.     Step 5: relate to acceleration using Newton's Second Law.  For the radial component we have . The the hidden given for the radial acceleration comes from rotational kinematics. The rotation kinematic formula for , including sign, was: .  For the tangential component Newton's Second Law says that . Since the Earth isn't speeding up tangentially we have: .  For the z component Newton's Second Law says that . Since the Earth isn't levitating in or out of the page we have: .  Step 6: Solve all unknowns.  Solve for . Remember to substitute in Newton's Law of Universal Gravitation for , since we're in outer space.       You did so well in your physics course that you decided to try to get a summer job working in a physics laboratory at the University. You got the job as a student lab assistant in a research group investigating the ozone depletion at the Earth's poles. This group is planning to put an atmospheric measuring device in a satellite which will pass over both poles. To collect samples of the upper atmosphere, the satellite will be in a circular orbit 200.0 miles above the surface of the Earth. To adjust the instruments for the proper data taking rate, you need to calculate how many times per day the device will sample the atmosphere over the South pole. Using the inside cover of your trusty Physics text you find that the radius of the Earth is kilometers, the mass of the Earth is kilograms, and the universal gravitational constant is .      A car of mass is turning to the left around a circular corner of radius , on flat ground, and wishes to maintain a constant tangential speed (so, not speeding up). The coefficient of static friction between the tires and the ground is . What should be the speed limit (i.e., the maximum possible tangential speed), in terms of the given , , and ?  Step 0: Make a force ID diagram.  Draw the car, and indicate what it is contacting. Based on counting the contact regions, make a list of the contact and non-contact forces. Don't include fictitious forces (i.e. only include the usual forces caused by an agent).  Forces list: , ,   Step 1: Draw a free body diagram as seen from behind the object. The observer should be looking in the direction of the object's velocity.  Step 2: Mark up the free body diagram above by drawing a copy of its (r,t,z) axes off to the side. The r-axis points from the center of the circle towards the object. The t-axis points along the tangent at the spot on the circle where the object is. The z-axis is parallel to the rotational axis of the circle. All three axes are perpendicular to each other.  Step 3: Symbolically find vector components of each component force in the r,t,z coordinate system.  Now write the components of all the force vectors using the new, polar r,t,z axis system you drew.     Step 4: Symbolically find the vector components of in the r,t,z coordinate system.  Now find the symbolic in r, t, and z, based on your vector components.     Step 5: relate to acceleration using Newton's Second Law.  For the radial component we have . The the hidden given for the radial acceleration comes from rotational kinematics. The rotation kinematic formula for , including sign, was: .  For the tangential component Newton's Second Law says that . Since the car isn't speeding up tangentially we have: .  For the z component Newton's Second Law says that . Since the car isn't levitating in or out of the page we have: .  Step 6: Solve all unknowns.  Solve for . Substitute into the friction force formula. Finally, solve for .       car of mass is turning to the left around an icy (frictionless), but banked (on a hillside of angle from horizontal), circular corner of radius , and wishes to maintain a constant tangential speed (so, not speeding up). What should be the speed limit (i.e., the maximum possible tangential speed), in terms of the given , , and ?  Step 0: Make a force ID diagram.  Draw the car, and indicate what it is contacting. Based on counting the contact regions, make a list of the contact and non-contact forces. Remember, we're doing an icy hill. Don't include fictitious forces (i.e. only include the usual forces caused by an agent).  Forces List: ,   Step 1: Draw a free body diagram as seen from behind the object. The observer should be looking in the direction of the object's velocity.  Step 2: Mark up the free body diagram above by drawing a copy of its (r,t,z) axes off to the side. The r-axis points from the center of the circle towards the object. The t-axis points along the tangent at the spot on the circle where the object is. The z-axis is parallel to the rotational axis of the circle. All three axes are perpendicular to each other.  Step 3: Symbolically find vector components of each component force in the r,t,z coordinate system.  Now write the components of all the force vectors using the new, polar r,t,z axis system you drew.    Step 4: Symbolically find the vector components of in the r,t,z coordinate system.  Now find the symbolic in r, t, and z, based on your vector components.     Step 5: relate to acceleration using Newton's Second Law.  For the radial component we have . The the hidden given for the radial acceleration comes from rotational kinematics. The rotation kinematic formula for , including sign, was: .  For the tangential component Newton's Second Law says that . Since the car isn't speeding up tangentially we have: .  For the z component Newton's Second Law says that . Since the car isn't levitating in or out of the page we have: .  Step 6: Solve all unknowns.  Solve for . Substitute into the formula for . Finally, solve for .       After watching the movie \"Crocodile Dundee,\" you and some friends decide to make a communications device invented by the Australian Aborigines. It consists of a noise-maker swung in a vertical circle on the end of a string. Your design calls for a 400.0 gram noise-maker on a 60.0 centimeter string. You are worried about whether the string you have will be strong enough, so you decide to calculate the tension in the string when the device is swung with an acceleration which has a constant magnitude of 20.0 meters per second. You and your friends can't agree whether the maximum tension will occur when the noise maker is at the highest point in the circle, at the lowest point in the circle, or is always the same. To settle the argument you decide to calculate the tension at the highest point and at the lowest point and compare them.      You are reading an article about the aesthetics of airplane design. One example in the article is a beautiful new design for commercial airliners. You are worried that this light wing structure might not be strong enough to be safe. The article explains that an airplane can fly because the air exerts a force, called \"lift,\" on the wings such that the lift is always perpendicular to the wing surface. For level flying, the wings are horizontal. To turn, the pilot \"banks\" the plane so that the wings are oriented at an angle to the horizontal. This causes the plane to have a trajectory which is a horizontal circle. The specifications of the kilogram plane require that it be able to turn with a radius of 3.0 kilometers at a constant speed of 800.0 kilometers per hour. The article states that tests show that the new wing structure will support a force four times the lift necessary for level flight. Is the wing structure sufficiently strong for the plane to make this turn?      Just before finals you decide to visit an amusement park. Since it is a weekend, you invite your favorite niece along. She loves to ride on a Ferris wheel, and there is one at the amusement park. The Ferris wheel has seats on the rim of a circle with a radius of 25 meters. The Ferris wheel rotates at a constant speed and makes one complete revolution every 20.0 seconds. While you wait, your niece who has a mass of 42 kilograms, rides the Ferris wheel. To kill time you decide to calculate the total force (both magnitude and direction) on her when she is one quarter revolution past the highest point. Because the Ferris wheel can be run at different speeds, you also decide to make a graph which gives the magnitude of the force on her at that point as a function of the period of the Ferris wheel.      A new package moving system in the new, improved post office consists of a large circular disc (i.e. a turntable) which rotates once every 3.0 seconds at a constant speed in the horizontal plane. Packages are put on the outer edge of the turntable on one side of the room and taken off on the opposite side. The coefficient of static friction between the disc surface and a package is 0.80 while the coefficient of kinetic friction is 0.60. If this system is to work, what is the maximum possible radius of the turntable?    "
},
{
  "id": "exercises-ch-newtons-laws-w-circ-motion-3",
  "level": "2",
  "url": "exercises-ch-newtons-laws-w-circ-motion.html#exercises-ch-newtons-laws-w-circ-motion-3",
  "type": "Exercise",
  "number": "19.3.1",
  "title": "",
  "body": "  Approximate that the Earth ( kilograms) orbits the Sun ( kilograms) in a perfect circle as constant speed. The radius of the orbit is meters. What is the Earth's orbital speed?  Step 0: Make a force ID diagram.  Draw the Earth, and indicate what it is contacting. Based on counting the contact regions, make a list of the contact and non-contact forces. Don't include fictitious forces (i.e. only include the usual forces caused by an agent).  Forces List:   Don't forget that the magnitude of in outer space is no longer , since the target isn't an object at the surface of Earth being attracted to the center of Earth. Instead, the formula is: where is the mass of the target object being pulled, is the mass of the agent object doing the pulling, is the distance between the centers of mass of the two objects, and is a constant that fixes all the units correctly. The direction of in outer space is such that the target object is pulled towards the source object.  Step 1: Draw a free body diagram as seen from behind the object. The observer should be looking in the direction of the object's velocity.  Step 2: Mark up the free body diagram above by drawing a copy of its (r,t,z) axes off to the side. The r-axis points from the center of the circle towards the object. The t-axis points along the tangent at the spot on the circle where the object is. The z-axis is parallel to the rotational axis of the circle. All three axes are perpendicular to each other.  Step 3: Symbolically find vector components of each component force in the r,t,z coordinate system.  Now write the components of the force vector using the new, polar r,t,z axis system you drew.   Step 4: Symbolically find the vector components of in the r,t,z coordinate system.  Now find the symbolic in r, t, and z, based on your vector components.     Step 5: relate to acceleration using Newton's Second Law.  For the radial component we have . The the hidden given for the radial acceleration comes from rotational kinematics. The rotation kinematic formula for , including sign, was: .  For the tangential component Newton's Second Law says that . Since the Earth isn't speeding up tangentially we have: .  For the z component Newton's Second Law says that . Since the Earth isn't levitating in or out of the page we have: .  Step 6: Solve all unknowns.  Solve for . Remember to substitute in Newton's Law of Universal Gravitation for , since we're in outer space.    "
},
{
  "id": "exercises-ch-newtons-laws-w-circ-motion-4",
  "level": "2",
  "url": "exercises-ch-newtons-laws-w-circ-motion.html#exercises-ch-newtons-laws-w-circ-motion-4",
  "type": "Exercise",
  "number": "19.3.2",
  "title": "",
  "body": "  You did so well in your physics course that you decided to try to get a summer job working in a physics laboratory at the University. You got the job as a student lab assistant in a research group investigating the ozone depletion at the Earth's poles. This group is planning to put an atmospheric measuring device in a satellite which will pass over both poles. To collect samples of the upper atmosphere, the satellite will be in a circular orbit 200.0 miles above the surface of the Earth. To adjust the instruments for the proper data taking rate, you need to calculate how many times per day the device will sample the atmosphere over the South pole. Using the inside cover of your trusty Physics text you find that the radius of the Earth is kilometers, the mass of the Earth is kilograms, and the universal gravitational constant is .   "
},
{
  "id": "exercises-ch-newtons-laws-w-circ-motion-5",
  "level": "2",
  "url": "exercises-ch-newtons-laws-w-circ-motion.html#exercises-ch-newtons-laws-w-circ-motion-5",
  "type": "Exercise",
  "number": "19.3.3",
  "title": "",
  "body": "  A car of mass is turning to the left around a circular corner of radius , on flat ground, and wishes to maintain a constant tangential speed (so, not speeding up). The coefficient of static friction between the tires and the ground is . What should be the speed limit (i.e., the maximum possible tangential speed), in terms of the given , , and ?  Step 0: Make a force ID diagram.  Draw the car, and indicate what it is contacting. Based on counting the contact regions, make a list of the contact and non-contact forces. Don't include fictitious forces (i.e. only include the usual forces caused by an agent).  Forces list: , ,   Step 1: Draw a free body diagram as seen from behind the object. The observer should be looking in the direction of the object's velocity.  Step 2: Mark up the free body diagram above by drawing a copy of its (r,t,z) axes off to the side. The r-axis points from the center of the circle towards the object. The t-axis points along the tangent at the spot on the circle where the object is. The z-axis is parallel to the rotational axis of the circle. All three axes are perpendicular to each other.  Step 3: Symbolically find vector components of each component force in the r,t,z coordinate system.  Now write the components of all the force vectors using the new, polar r,t,z axis system you drew.     Step 4: Symbolically find the vector components of in the r,t,z coordinate system.  Now find the symbolic in r, t, and z, based on your vector components.     Step 5: relate to acceleration using Newton's Second Law.  For the radial component we have . The the hidden given for the radial acceleration comes from rotational kinematics. The rotation kinematic formula for , including sign, was: .  For the tangential component Newton's Second Law says that . Since the car isn't speeding up tangentially we have: .  For the z component Newton's Second Law says that . Since the car isn't levitating in or out of the page we have: .  Step 6: Solve all unknowns.  Solve for . Substitute into the friction force formula. Finally, solve for .    "
},
{
  "id": "exercises-ch-newtons-laws-w-circ-motion-6",
  "level": "2",
  "url": "exercises-ch-newtons-laws-w-circ-motion.html#exercises-ch-newtons-laws-w-circ-motion-6",
  "type": "Exercise",
  "number": "19.3.4",
  "title": "",
  "body": "  car of mass is turning to the left around an icy (frictionless), but banked (on a hillside of angle from horizontal), circular corner of radius , and wishes to maintain a constant tangential speed (so, not speeding up). What should be the speed limit (i.e., the maximum possible tangential speed), in terms of the given , , and ?  Step 0: Make a force ID diagram.  Draw the car, and indicate what it is contacting. Based on counting the contact regions, make a list of the contact and non-contact forces. Remember, we're doing an icy hill. Don't include fictitious forces (i.e. only include the usual forces caused by an agent).  Forces List: ,   Step 1: Draw a free body diagram as seen from behind the object. The observer should be looking in the direction of the object's velocity.  Step 2: Mark up the free body diagram above by drawing a copy of its (r,t,z) axes off to the side. The r-axis points from the center of the circle towards the object. The t-axis points along the tangent at the spot on the circle where the object is. The z-axis is parallel to the rotational axis of the circle. All three axes are perpendicular to each other.  Step 3: Symbolically find vector components of each component force in the r,t,z coordinate system.  Now write the components of all the force vectors using the new, polar r,t,z axis system you drew.    Step 4: Symbolically find the vector components of in the r,t,z coordinate system.  Now find the symbolic in r, t, and z, based on your vector components.     Step 5: relate to acceleration using Newton's Second Law.  For the radial component we have . The the hidden given for the radial acceleration comes from rotational kinematics. The rotation kinematic formula for , including sign, was: .  For the tangential component Newton's Second Law says that . Since the car isn't speeding up tangentially we have: .  For the z component Newton's Second Law says that . Since the car isn't levitating in or out of the page we have: .  Step 6: Solve all unknowns.  Solve for . Substitute into the formula for . Finally, solve for .    "
},
{
  "id": "exercises-ch-newtons-laws-w-circ-motion-7",
  "level": "2",
  "url": "exercises-ch-newtons-laws-w-circ-motion.html#exercises-ch-newtons-laws-w-circ-motion-7",
  "type": "Exercise",
  "number": "19.3.5",
  "title": "",
  "body": "  After watching the movie \"Crocodile Dundee,\" you and some friends decide to make a communications device invented by the Australian Aborigines. It consists of a noise-maker swung in a vertical circle on the end of a string. Your design calls for a 400.0 gram noise-maker on a 60.0 centimeter string. You are worried about whether the string you have will be strong enough, so you decide to calculate the tension in the string when the device is swung with an acceleration which has a constant magnitude of 20.0 meters per second. You and your friends can't agree whether the maximum tension will occur when the noise maker is at the highest point in the circle, at the lowest point in the circle, or is always the same. To settle the argument you decide to calculate the tension at the highest point and at the lowest point and compare them.   "
},
{
  "id": "exercises-ch-newtons-laws-w-circ-motion-8",
  "level": "2",
  "url": "exercises-ch-newtons-laws-w-circ-motion.html#exercises-ch-newtons-laws-w-circ-motion-8",
  "type": "Exercise",
  "number": "19.3.6",
  "title": "",
  "body": "  You are reading an article about the aesthetics of airplane design. One example in the article is a beautiful new design for commercial airliners. You are worried that this light wing structure might not be strong enough to be safe. The article explains that an airplane can fly because the air exerts a force, called \"lift,\" on the wings such that the lift is always perpendicular to the wing surface. For level flying, the wings are horizontal. To turn, the pilot \"banks\" the plane so that the wings are oriented at an angle to the horizontal. This causes the plane to have a trajectory which is a horizontal circle. The specifications of the kilogram plane require that it be able to turn with a radius of 3.0 kilometers at a constant speed of 800.0 kilometers per hour. The article states that tests show that the new wing structure will support a force four times the lift necessary for level flight. Is the wing structure sufficiently strong for the plane to make this turn?   "
},
{
  "id": "exercises-ch-newtons-laws-w-circ-motion-9",
  "level": "2",
  "url": "exercises-ch-newtons-laws-w-circ-motion.html#exercises-ch-newtons-laws-w-circ-motion-9",
  "type": "Exercise",
  "number": "19.3.7",
  "title": "",
  "body": "  Just before finals you decide to visit an amusement park. Since it is a weekend, you invite your favorite niece along. She loves to ride on a Ferris wheel, and there is one at the amusement park. The Ferris wheel has seats on the rim of a circle with a radius of 25 meters. The Ferris wheel rotates at a constant speed and makes one complete revolution every 20.0 seconds. While you wait, your niece who has a mass of 42 kilograms, rides the Ferris wheel. To kill time you decide to calculate the total force (both magnitude and direction) on her when she is one quarter revolution past the highest point. Because the Ferris wheel can be run at different speeds, you also decide to make a graph which gives the magnitude of the force on her at that point as a function of the period of the Ferris wheel.   "
},
{
  "id": "exercises-ch-newtons-laws-w-circ-motion-10",
  "level": "2",
  "url": "exercises-ch-newtons-laws-w-circ-motion.html#exercises-ch-newtons-laws-w-circ-motion-10",
  "type": "Exercise",
  "number": "19.3.8",
  "title": "",
  "body": "  A new package moving system in the new, improved post office consists of a large circular disc (i.e. a turntable) which rotates once every 3.0 seconds at a constant speed in the horizontal plane. Packages are put on the outer edge of the turntable on one side of the room and taken off on the opposite side. The coefficient of static friction between the disc surface and a package is 0.80 while the coefficient of kinetic friction is 0.60. If this system is to work, what is the maximum possible radius of the turntable?   "
},
{
  "id": "sec-torque",
  "level": "1",
  "url": "sec-torque.html",
  "type": "Section",
  "number": "20.1",
  "title": "Torque",
  "body": " Torque  Torque is the angular equivalent of force. Forces produce a straight-line acceleration, torque produces an angular acceleration. The magnitude of a torque, , is defined in the following way: The total torque vector is defined as: The definition of torque can be plugged into Newton's 2nd Law to derive the rotational equivalent of Newton's 2nd Law. The magnitude of the result is:  is found by summing the torque from each force that is trying to rotate the object; i.e., When finding the magnitude of the net torque, we treat torques pulling counterclockwise as positive, and torques pulling clockwise as negative. This allows you to determine the angular acceleration. This is the grand link between torque and rotational kinematics, because once you've calculated the angular acceleration from the torque, you can use the angular acceleration as a given for solving a rotational kinematics problem.  "
},
{
  "id": "exercises-ch-torque",
  "level": "1",
  "url": "exercises-ch-torque.html",
  "type": "Exercises",
  "number": "20.2",
  "title": "Chapter Exercises",
  "body": " Chapter Exercises   Torque and angular acceleration   Derivation of Relationship Between Torque and Angular Acceleration   Torque is known as the capacity to rotate an object. In this exercise, we will see how a specific definition for torque is useful for determining how quickly an object's rotation increases.   Because pushing an object perpendicular to the direction it is hinged generates the most rotation for the force, torque is defined using an operation called the cross product. Unlike the dot product, which multiplies one vector by the parallel component of a second vector, the cross product multiplies one vector by the perpendicular component of a second vector. So, instead of the used in the dot product, the cross product contains :   The diagram shows two vectors that share the same starting point. One vector extends horizontally to the right in red and is labeled as having length . The second vector extends upward and to the right at an angle and is labeled as having length . The angle between the two vectors is marked in blue near their shared origin. A horizontal dashed line represents the projection of the black vector on the red vector, marking the horizontal component of the black vector. This horizontal segment is labeled .   Two vectors pointing from the origin with an angle between them. One vector is along the x-axis    The magnitude of dot product of and is given by multiplying by the parallel component of :      The diagram shows two vectors that share the same starting point. One vector extends horizontally to the right in red and is labeled as having length . The second vector extends upward and to the right at an angle and is labeled as having length . The angle between the two vectors is marked in blue near their shared origin. A vertical red dotted line drops from the tip of the angled vector down to the horizontal vector. This vertical segment is labeled and represents the perpendicular distance between the two vector endpoints.   Two vectors pointing from the origin with an angle between them. One vector is along the x-axis    The magnitude of cross product of and is given by multiplying by the perpendicular component of :       Since the torque depends on how much force you apply to an object (force = ), and also how far away from the hinge you push the object (displacement from hinge 0 to push location = ), torque ( ) is defined as the cross product of vector and vector :   The diagram presents a hinge labeled “0” at the left, from which a red displacement vector labeled “displacement r” extends up and to the right. At the end of this displacement vector, a blue force vector labeled “force F” is drawn at an upward angle compared to the displacement vector. The angle between the displacement vector and the force vector is marked as . A dotted blue line drops perpendicularly from the force vector to the line the displacement vector is pointing, representing the perpendicular component of the force. This perpendicular component is labeled “ ”. The layout visually demonstrates how torque depends on the magnitude of the applied force, the displacement from the hinge, and the sine of the angle between the force and displacement vectors.   Diagram showing a hinge, a displacement vector, a force vector at an angle, and the perpendicular force component used to illustrate torque.       If the force is spinning the object counterclockwise around the hinge, we call this a positive torque (because the rule “lefty-loosey” implies this would cause a screw to travel out of the page). However, if the force is spinning the object around the hinge, that would be a negative torque (because the rule “righty-tighty” implies this would cause a screw to burrow down into the page).       Group the acceleration with the :       What does the mean? We can figure out which acceleration component that corresponds to. We'll draw the r,t,z axes for circular motion and look at which axis the is going along:   The diagram presents a hinge at the origin with a red displacement vector labeled extending outward from the hinge. At the tip of this displacement vector, a blue acceleration vector labeled extends at an angle relative to the displacement direction. The acceleration vector is decomposed into two components: one aligned with the displacement vector, labeled a , and one perpendicular to it, labeled a . A small coordinate triad appears in the lower right corner, showing three axes labeled r, t, and z, indicating radial, tangential, and vertical directions. The component of the acceleration vector labeled points along the tangential direction.   Diagram showing a displacement vector and an acceleration vector with radial and tangential components in polar coordinates.    So, is the radial component, , or the tangential component, , of the acceleration?     Now we can sub out for :       But we know from rotational kinematics that tangential acceleration is related to angular acceleration and the radius of the circle by:       Subbing in for , we now see torque is related to the angular acceleration :       Grouping the r's together,       The quantity is defined as the moment of intertia of a point sized mass : So, subbing out , we get:     This looks very similar to Newton's Second Law , except this tells you the angular acceleration instead of the rectangular acceleration. plays the role of , plays the role of , and plays the role of .  In practice, you will have more than one force acting on your object, so you get a net torque (sum of the positive\/counterclockwise and negative\/clockwise torques) causing the total counterclockwise\/clockwise angular acceleration:     If the net torque has a sign, the angular acceleration is counterclockwise. If the net torque has a sign, the angular acceleration is clockwise.         You push on the doorknob of a door, which is located at a distance of 0.500 meters from the hinge. Your push has a magnitude of 40.0 Newtons, directed perpendicular to the door's surface. However, door's hinge exerts a torque of -15.0 newton meters (i.e., opposite to the direction of your torque).    What is the net torque on the door due to you plus the hinge?    Suppose the moment of inertia of the door is 40.0 kilogram meters per second squared. What is the angular acceleration of the door?    If the door starts at rest, what will be the tangential velocity of the doorknob at 0.250 seconds after you started pushing?        Static Equilibrium   Static equilibrium and the Rigid Body Diagram   If an object is in the special case of static equilibrium, that is a new hidden given. It means the object is permanently at rest, and also not rotating. This means it has zero rectangular acceleration  and zero angular acceleration . Therefore, in this special case, the is , and the is also . Here is a list of the general steps for solving a static equilibrium problem (after that, we will apply the steps in the context of an example):  Step 1. Draw a “rigid-body diagram” of the object. Draw all forces acting on the object. This is just an free body diagram, except that now we must draw the full shape of the object, and draw the forces from the actual locations they pull on the object. However, the force of gravity is still drawn acting on the center dot, because that represents the center of mass.  Step 2. Pick axes and an origin location (which will be the hinge). Draw the displacements from the hinge to the locations the forces act. Draw the angles between the displacements to the forces and the forces themselves, since those angles appear in the torques. Draw x and y axes like in an free body diagram, but in addition, label an origin 0 which will represent the hinge. (Trick: put the origin at a location where there are many forces that aren't givens, because if there's a zero displacement from the origin to a force, it contributes of torque.) Why are we allowed to pick anywhere for the hinge origin? Because we don't want the object to rotate at all, no matter where it is hinged!  Step 3. Find the symbolic and the same as usual for an free body diagram problem. Then, sub in since that is a hidden given in static equilibrium.  Step 4. Find the symbolic by adding up the torque caused by each force on the diagram (use a + sign for the torque if a force would spin the object counterclockwise, or a - sign for clockwise). Then, sub in since that is a hidden given in static equilibrium.  Step 5. We now have a system of three equations from steps 3 and 4. Use algebra to substitute the equations into each other and solve for the requested unknowns.  Here is an example problem with several different forces:  In a uniform ladder 12 meters long rests against a vertical frictionless wall. The ladder weighs 400 newtons and makes an angle , of 55 degrees with the floor. A man weighing 741 newtons climbs slowly up the ladder. When he has climbed to a point that is 7.8 meters from the base of the ladder, the ladder starts to slip. What is the coefficient of static friction between the floor and the ladder?   The image shows a a stick figure positioned on a latter. The latter slopes upward from left to right. The bottom of the latter is on the ground and the top of the latter is propped agianst a wall. The angle between the latter and the horizontal ground is marked with the symbol . The stick figure stands 7.8 meters along the length of the latter from the ground.   Stick figure standing on latter that is propped agianst a wall.    Step 1. Draw a “rigid-body diagram” of the object. Draw all forces acting on the object.   The diagram shows a single beam resting on the ground with an angle and leaning against a vertical wall. The beam is represented by a green line slanting upward from left to right. Several forces acting on the beam are marked with arrows. A horizontal arrow at the top of the beam indicates the normal force from the wall pushing left. Two downward arrows along the beam represent gravitational forces: one for the person standing on the beam and one for the beam's own weight. At the bottom of the beam, two forces from the ground are shown: a vertical upward normal force and a horizontal leftward static friction force.   Rigid body diagram of a beam leaning against a wall with labeled forces.    Step 2. Pick axes and an origin location (which will be the hinge). Draw the displacements from the hinge to the locations the forces act. Draw the angles between the displacements to the forces and the forces themselves, since those angles appear in the torques. We should put the origin 0 in the lower right corner, because there are unknown forces there that will provide zero torque, whereas if we put the origin in the upper left corner, there would only be unknown force that will provide zero torque. Making more zeroes with our choice makes the problem easier!   Rigid body diagram of a beam leaning against a wall with labeled forces and distances. The beam is drawn as a red line extending upward and to the right until it touches the wall. Several forces acting on the system are labeled with arrows. At the top of the beam, a horizontal arrow pointing right represents the normal force from the wall. At the bottom of the beam, two forces act at the ground contact point: an upward arrow for the normal force from the ground and a horizontal arrow pointing left for the frictional force at the ground. Two downward arrows along the beam represent gravitational forces: one at the midpoint for the beam's weight and one higher on the beam for the person's weight. Distances from the ground contact point to each force location are labeled along the beam. Angles between the beam and the forces are marked as or .   Rigid body diagram of a beam leaning against a wall with labeled forces and distances.    Step 3. Find the symbolic and the same as usual for an FBD problem. Then, sub in since that is a hidden given in static equilibrium.                    Sums of x components:              Sums of y components:           At this point, we see we are given and , which is not enough to solve for . So, we need to do step 4 to get another piece of info (to help us get )  Step 4. Find the symbolic by adding up the torque caused by each force on the diagram (use a + sign for the torque if a force would spin the object counterclockwise, or a - sign for clockwise). Then, sub in since that is a hidden given in static equilibrium.                 Sum of torques:              Now it's time to sub in our numbers!  Step 5. We now have a system of three equations from steps 3 and 4. Use algebra to substitute the equations into each other and solve for the requested unknowns.  Lets sub into the torque equation first:        Let's sub into the next:        Finally, let's sub into the :                  An 80 kilogram construction worker sits down 2.0 meters from the end of a 1450 kilogram steel beam to eat his lunch. How much tension is in the cable if the beam is in static equilibrium? The cable supporting the beam is rated at 15000 newtons, so will the cable break under this tension?   The image shows a horizontal beam extending 6.0 meters from a vertical wall on the left. The beam isn't fastened or bound to the wall but it is touching it. A cable runs diagonally from the top of the wall to the far end of the beam, forming a 30 degree angle with the beam. A person is seated on the beam close to the point where the cable attaches.   Horizontal beam touching a wall with a supporting cable at a 30 degree angle and a person sitting near the cable connection.        A 20.0 kilogram uniform door has a width of 1.20 meter and a height of 2.50 meters. The door is mounted on a post by a pair of hinges, marked 1 and 2 in , at the top and bottom of the door. An external force of 60.0 newtons, at an angle of 30.0 degrees above the horizontal, is applied to the small doorknob, as shown in the figure. The doorknob is 1.00 meter above the bottom of the door.   Find the x component of the force that hinge 1 exerts on the door at the top.    Find the SUM of the y components of the forces that hinges 1 and 2 together exert on the door.      The image shows a rectangular door that is 2.50 meters tall and 1.20 meters wide. The door is hinged along its left vertical edge at two points labeled 1 and 2. A single external force of 60.0 newtons is applied on the right side of the door at a point located 1.00 meter above the bottom edge. The force is directed 30 degrees above the horizontal, pushing outward from the door's surface. A horizontal x-axis and vertical y-axis appear near the bottom left corner to indicate orientation. The force vector originates at the marked application point and extends diagonally upward and to the right. The door's mass is labeled as 20.0 kilograms.   Rectangular door with applied 60 newton force at a point 1 meter above the bottom, angled 30 degrees above horizontal.        In figure, a uniform ladder 12 meters long rests against a vertical frictionless wall. The ladder weighs 400 newtons and makes an angle , of 55 degrees with the floor. A man weighing 741 newtons climbs slowly up the ladder. When he has climbed to a point that is 7.8 meters from the base of the ladder, the ladder starts to slip. What is the coefficient of static friction between the floor and the ladder?   The image shows a a stick figure positioned on a latter. The latter slopes upward from left to right. The bottom of the latter is on the ground and the top of the latter is propped agianst a wall. The angle between the latter and the horizontal ground is marked with the symbol . The stick figure stands 7.8 meters along the length of the latter from the ground.   Stick figure standing on latter that is propped agianst a wall.       "
},
{
  "id": "exercises-ch-torque-2-2",
  "level": "2",
  "url": "exercises-ch-torque.html#exercises-ch-torque-2-2",
  "type": "Exercise",
  "number": "20.2.1",
  "title": "Derivation of Relationship Between Torque and Angular Acceleration.",
  "body": " Derivation of Relationship Between Torque and Angular Acceleration   Torque is known as the capacity to rotate an object. In this exercise, we will see how a specific definition for torque is useful for determining how quickly an object's rotation increases.   Because pushing an object perpendicular to the direction it is hinged generates the most rotation for the force, torque is defined using an operation called the cross product. Unlike the dot product, which multiplies one vector by the parallel component of a second vector, the cross product multiplies one vector by the perpendicular component of a second vector. So, instead of the used in the dot product, the cross product contains :   The diagram shows two vectors that share the same starting point. One vector extends horizontally to the right in red and is labeled as having length . The second vector extends upward and to the right at an angle and is labeled as having length . The angle between the two vectors is marked in blue near their shared origin. A horizontal dashed line represents the projection of the black vector on the red vector, marking the horizontal component of the black vector. This horizontal segment is labeled .   Two vectors pointing from the origin with an angle between them. One vector is along the x-axis    The magnitude of dot product of and is given by multiplying by the parallel component of :      The diagram shows two vectors that share the same starting point. One vector extends horizontally to the right in red and is labeled as having length . The second vector extends upward and to the right at an angle and is labeled as having length . The angle between the two vectors is marked in blue near their shared origin. A vertical red dotted line drops from the tip of the angled vector down to the horizontal vector. This vertical segment is labeled and represents the perpendicular distance between the two vector endpoints.   Two vectors pointing from the origin with an angle between them. One vector is along the x-axis    The magnitude of cross product of and is given by multiplying by the perpendicular component of :       Since the torque depends on how much force you apply to an object (force = ), and also how far away from the hinge you push the object (displacement from hinge 0 to push location = ), torque ( ) is defined as the cross product of vector and vector :   The diagram presents a hinge labeled “0” at the left, from which a red displacement vector labeled “displacement r” extends up and to the right. At the end of this displacement vector, a blue force vector labeled “force F” is drawn at an upward angle compared to the displacement vector. The angle between the displacement vector and the force vector is marked as . A dotted blue line drops perpendicularly from the force vector to the line the displacement vector is pointing, representing the perpendicular component of the force. This perpendicular component is labeled “ ”. The layout visually demonstrates how torque depends on the magnitude of the applied force, the displacement from the hinge, and the sine of the angle between the force and displacement vectors.   Diagram showing a hinge, a displacement vector, a force vector at an angle, and the perpendicular force component used to illustrate torque.       If the force is spinning the object counterclockwise around the hinge, we call this a positive torque (because the rule “lefty-loosey” implies this would cause a screw to travel out of the page). However, if the force is spinning the object around the hinge, that would be a negative torque (because the rule “righty-tighty” implies this would cause a screw to burrow down into the page).       Group the acceleration with the :       What does the mean? We can figure out which acceleration component that corresponds to. We'll draw the r,t,z axes for circular motion and look at which axis the is going along:   The diagram presents a hinge at the origin with a red displacement vector labeled extending outward from the hinge. At the tip of this displacement vector, a blue acceleration vector labeled extends at an angle relative to the displacement direction. The acceleration vector is decomposed into two components: one aligned with the displacement vector, labeled a , and one perpendicular to it, labeled a . A small coordinate triad appears in the lower right corner, showing three axes labeled r, t, and z, indicating radial, tangential, and vertical directions. The component of the acceleration vector labeled points along the tangential direction.   Diagram showing a displacement vector and an acceleration vector with radial and tangential components in polar coordinates.    So, is the radial component, , or the tangential component, , of the acceleration?     Now we can sub out for :       But we know from rotational kinematics that tangential acceleration is related to angular acceleration and the radius of the circle by:       Subbing in for , we now see torque is related to the angular acceleration :       Grouping the r's together,       The quantity is defined as the moment of intertia of a point sized mass : So, subbing out , we get:     This looks very similar to Newton's Second Law , except this tells you the angular acceleration instead of the rectangular acceleration. plays the role of , plays the role of , and plays the role of .  In practice, you will have more than one force acting on your object, so you get a net torque (sum of the positive\/counterclockwise and negative\/clockwise torques) causing the total counterclockwise\/clockwise angular acceleration:     If the net torque has a sign, the angular acceleration is counterclockwise. If the net torque has a sign, the angular acceleration is clockwise.      "
},
{
  "id": "exercises-ch-torque-2-3",
  "level": "2",
  "url": "exercises-ch-torque.html#exercises-ch-torque-2-3",
  "type": "Exercise",
  "number": "20.2.2",
  "title": "",
  "body": "  You push on the doorknob of a door, which is located at a distance of 0.500 meters from the hinge. Your push has a magnitude of 40.0 Newtons, directed perpendicular to the door's surface. However, door's hinge exerts a torque of -15.0 newton meters (i.e., opposite to the direction of your torque).    What is the net torque on the door due to you plus the hinge?    Suppose the moment of inertia of the door is 40.0 kilogram meters per second squared. What is the angular acceleration of the door?    If the door starts at rest, what will be the tangential velocity of the doorknob at 0.250 seconds after you started pushing?     "
},
{
  "id": "exercises-ch-torque-3-2",
  "level": "2",
  "url": "exercises-ch-torque.html#exercises-ch-torque-3-2",
  "type": "Exercise",
  "number": "20.2.3",
  "title": "Static equilibrium and the Rigid Body Diagram.",
  "body": " Static equilibrium and the Rigid Body Diagram   If an object is in the special case of static equilibrium, that is a new hidden given. It means the object is permanently at rest, and also not rotating. This means it has zero rectangular acceleration  and zero angular acceleration . Therefore, in this special case, the is , and the is also . Here is a list of the general steps for solving a static equilibrium problem (after that, we will apply the steps in the context of an example):  Step 1. Draw a “rigid-body diagram” of the object. Draw all forces acting on the object. This is just an free body diagram, except that now we must draw the full shape of the object, and draw the forces from the actual locations they pull on the object. However, the force of gravity is still drawn acting on the center dot, because that represents the center of mass.  Step 2. Pick axes and an origin location (which will be the hinge). Draw the displacements from the hinge to the locations the forces act. Draw the angles between the displacements to the forces and the forces themselves, since those angles appear in the torques. Draw x and y axes like in an free body diagram, but in addition, label an origin 0 which will represent the hinge. (Trick: put the origin at a location where there are many forces that aren't givens, because if there's a zero displacement from the origin to a force, it contributes of torque.) Why are we allowed to pick anywhere for the hinge origin? Because we don't want the object to rotate at all, no matter where it is hinged!  Step 3. Find the symbolic and the same as usual for an free body diagram problem. Then, sub in since that is a hidden given in static equilibrium.  Step 4. Find the symbolic by adding up the torque caused by each force on the diagram (use a + sign for the torque if a force would spin the object counterclockwise, or a - sign for clockwise). Then, sub in since that is a hidden given in static equilibrium.  Step 5. We now have a system of three equations from steps 3 and 4. Use algebra to substitute the equations into each other and solve for the requested unknowns.  Here is an example problem with several different forces:  In a uniform ladder 12 meters long rests against a vertical frictionless wall. The ladder weighs 400 newtons and makes an angle , of 55 degrees with the floor. A man weighing 741 newtons climbs slowly up the ladder. When he has climbed to a point that is 7.8 meters from the base of the ladder, the ladder starts to slip. What is the coefficient of static friction between the floor and the ladder?   The image shows a a stick figure positioned on a latter. The latter slopes upward from left to right. The bottom of the latter is on the ground and the top of the latter is propped agianst a wall. The angle between the latter and the horizontal ground is marked with the symbol . The stick figure stands 7.8 meters along the length of the latter from the ground.   Stick figure standing on latter that is propped agianst a wall.    Step 1. Draw a “rigid-body diagram” of the object. Draw all forces acting on the object.   The diagram shows a single beam resting on the ground with an angle and leaning against a vertical wall. The beam is represented by a green line slanting upward from left to right. Several forces acting on the beam are marked with arrows. A horizontal arrow at the top of the beam indicates the normal force from the wall pushing left. Two downward arrows along the beam represent gravitational forces: one for the person standing on the beam and one for the beam's own weight. At the bottom of the beam, two forces from the ground are shown: a vertical upward normal force and a horizontal leftward static friction force.   Rigid body diagram of a beam leaning against a wall with labeled forces.    Step 2. Pick axes and an origin location (which will be the hinge). Draw the displacements from the hinge to the locations the forces act. Draw the angles between the displacements to the forces and the forces themselves, since those angles appear in the torques. We should put the origin 0 in the lower right corner, because there are unknown forces there that will provide zero torque, whereas if we put the origin in the upper left corner, there would only be unknown force that will provide zero torque. Making more zeroes with our choice makes the problem easier!   Rigid body diagram of a beam leaning against a wall with labeled forces and distances. The beam is drawn as a red line extending upward and to the right until it touches the wall. Several forces acting on the system are labeled with arrows. At the top of the beam, a horizontal arrow pointing right represents the normal force from the wall. At the bottom of the beam, two forces act at the ground contact point: an upward arrow for the normal force from the ground and a horizontal arrow pointing left for the frictional force at the ground. Two downward arrows along the beam represent gravitational forces: one at the midpoint for the beam's weight and one higher on the beam for the person's weight. Distances from the ground contact point to each force location are labeled along the beam. Angles between the beam and the forces are marked as or .   Rigid body diagram of a beam leaning against a wall with labeled forces and distances.    Step 3. Find the symbolic and the same as usual for an FBD problem. Then, sub in since that is a hidden given in static equilibrium.                    Sums of x components:              Sums of y components:           At this point, we see we are given and , which is not enough to solve for . So, we need to do step 4 to get another piece of info (to help us get )  Step 4. Find the symbolic by adding up the torque caused by each force on the diagram (use a + sign for the torque if a force would spin the object counterclockwise, or a - sign for clockwise). Then, sub in since that is a hidden given in static equilibrium.                 Sum of torques:              Now it's time to sub in our numbers!  Step 5. We now have a system of three equations from steps 3 and 4. Use algebra to substitute the equations into each other and solve for the requested unknowns.  Lets sub into the torque equation first:        Let's sub into the next:        Finally, let's sub into the :               "
},
{
  "id": "exercises-ch-torque-3-3",
  "level": "2",
  "url": "exercises-ch-torque.html#exercises-ch-torque-3-3",
  "type": "Exercise",
  "number": "20.2.4",
  "title": "",
  "body": "  An 80 kilogram construction worker sits down 2.0 meters from the end of a 1450 kilogram steel beam to eat his lunch. How much tension is in the cable if the beam is in static equilibrium? The cable supporting the beam is rated at 15000 newtons, so will the cable break under this tension?   The image shows a horizontal beam extending 6.0 meters from a vertical wall on the left. The beam isn't fastened or bound to the wall but it is touching it. A cable runs diagonally from the top of the wall to the far end of the beam, forming a 30 degree angle with the beam. A person is seated on the beam close to the point where the cable attaches.   Horizontal beam touching a wall with a supporting cable at a 30 degree angle and a person sitting near the cable connection.     "
},
{
  "id": "exercises-ch-torque-3-4",
  "level": "2",
  "url": "exercises-ch-torque.html#exercises-ch-torque-3-4",
  "type": "Exercise",
  "number": "20.2.5",
  "title": "",
  "body": "  A 20.0 kilogram uniform door has a width of 1.20 meter and a height of 2.50 meters. The door is mounted on a post by a pair of hinges, marked 1 and 2 in , at the top and bottom of the door. An external force of 60.0 newtons, at an angle of 30.0 degrees above the horizontal, is applied to the small doorknob, as shown in the figure. The doorknob is 1.00 meter above the bottom of the door.   Find the x component of the force that hinge 1 exerts on the door at the top.    Find the SUM of the y components of the forces that hinges 1 and 2 together exert on the door.      The image shows a rectangular door that is 2.50 meters tall and 1.20 meters wide. The door is hinged along its left vertical edge at two points labeled 1 and 2. A single external force of 60.0 newtons is applied on the right side of the door at a point located 1.00 meter above the bottom edge. The force is directed 30 degrees above the horizontal, pushing outward from the door's surface. A horizontal x-axis and vertical y-axis appear near the bottom left corner to indicate orientation. The force vector originates at the marked application point and extends diagonally upward and to the right. The door's mass is labeled as 20.0 kilograms.   Rectangular door with applied 60 newton force at a point 1 meter above the bottom, angled 30 degrees above horizontal.     "
},
{
  "id": "exercises-ch-torque-3-5",
  "level": "2",
  "url": "exercises-ch-torque.html#exercises-ch-torque-3-5",
  "type": "Exercise",
  "number": "20.2.6",
  "title": "",
  "body": "  In figure, a uniform ladder 12 meters long rests against a vertical frictionless wall. The ladder weighs 400 newtons and makes an angle , of 55 degrees with the floor. A man weighing 741 newtons climbs slowly up the ladder. When he has climbed to a point that is 7.8 meters from the base of the ladder, the ladder starts to slip. What is the coefficient of static friction between the floor and the ladder?   The image shows a a stick figure positioned on a latter. The latter slopes upward from left to right. The bottom of the latter is on the ground and the top of the latter is propped agianst a wall. The angle between the latter and the horizontal ground is marked with the symbol . The stick figure stands 7.8 meters along the length of the latter from the ground.   Stick figure standing on latter that is propped agianst a wall.     "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
