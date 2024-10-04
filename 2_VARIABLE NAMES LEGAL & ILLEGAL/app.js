//eclare 3 variables in one statement.
var a = 1,
  b = 2,
  c = 3;
// Declare 5 legal & 5 illegal variable names.

// Legal Variables
//  1  firstName
// 2  _count
// 3  totalAmount
// 4  $price
// 5  user1

// 5  Illegal Variable Names:
// 1stValue (Cannot start with a number)
// my-variable (Hyphen - is not allowed)
// class (Reserved keyword in JavaScript)
// user name (Spaces are not allowed)
// @value (Special characters other than _ and $ are not allowed)
// var firstName = "firstName";
// document.write("Variable names can only contain " +  );

var rules = "Rules for naming JS variables";
var caseSenstive = " Variable names are case Sensitive";
var js = "Variable names should not be JS keyword ";
var beginWith =
  " Variables must begin with a $ or _ For Example : $name_name or name";
document.write(rules + "<br>");
var variables = "numbers , $ and _ , For Example : $my_1st Variable  ";
document.write("Variable names can only contain:" + " " + variables + "<br>");
document.write(beginWith);
document.write(caseSenstive + "<br>");
document.write(js);
