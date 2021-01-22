//  github link:  https://github.com/rayhan999/JavaScriptBasic-PH-Assignment3




//--------------------------------------Problem 1-----------------------------------------------------
//Kilometer to Meter Convesion
function kilometerToMeter(kilometer) {
    // 1 kilometer = 1000 meter
    if (kilometer >= 0) {
        var meter = 1000;
        var result = kilometer * meter;
        return result;
    }
    //Exception Handling
    else {
        return "Undefined Input value";
    }
}
// console.log(kilometerToMeter(50));




//--------------------------------------Problem 2-----------------------------------------------------
//Calculate total Budget
function budgetCalculator(watch, phone, laptop) {
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        // Price of the Components
        var watchPrice = 50;
        var phonePrice = 100;
        var laptopPrice = 500;
        var totalCost = (watchPrice * watch) + (phonePrice * phone) + (laptopPrice * laptop);
        return totalCost;
    }
    //Error Handling 
    else {
        return "Undefined Quantity";
    }
}
// console.log(budgetCalculator(10, 15, 0));




//--------------------------------------Problem 3-----------------------------------------------------
//Calculate total Hotel Cost
function hotelCost(numOfDays) {
    // Day-wise Hotel cost
    var first10DaysCost = 100;
    var second10DaysCost = first10DaysCost - 20;
    var restAllDaysCost = 50;
    var totalCost = 0;

    if (numOfDays >= 0) {
        if (numOfDays <= 10) {
            totalCost = numOfDays * first10DaysCost;
        }
        else if (numOfDays <= 20) {
            var part1Cost = 10 * first10DaysCost;
            var remainingDays = numOfDays - 10;
            var part2Cost = remainingDays * second10DaysCost;
            totalCost = part1Cost + part2Cost;
        }
        else {
            var part1Cost = 10 * first10DaysCost;
            var part2Cost = 10 * second10DaysCost;
            var remainingDays = numOfDays - 20;
            var restDaysCost = remainingDays * restAllDaysCost;
            totalCost = part1Cost + part2Cost + restDaysCost;
        }
        return totalCost;
    }
    //Exception Handling
    else {
        return "Please enter Valid Number of Days";
    }
}
// console.log(hotelCost(21));




//--------------------------------------Problem 4-----------------------------------------------------
// Find Largest Name from an Array 
function megaFriend(nameList) {
    if (Array.isArray(nameList)) {
        if (nameList.length > 0) {
            var length = 0;
            var longestName = nameList[0];
            for (var i = 0; i < nameList.length; i++) {
                if (nameList[i].length > length) {
                    length = nameList[i].length;
                    longestName = nameList[i];
                }
            }
            return longestName;
        }
        //Exception Handling
        else {
            return "Please enter some Names.Array is Empty"
        }
    }
    //Exception Handling
    else {
        return "Array not found";
    }
}
// var a = ["Rayhan", "Shuvo", "Salman", "Fahim", "Nahiyan", "Abir"];
// var b = [];
// var c = "Rayhan";
// console.log(megaFriend(a));

