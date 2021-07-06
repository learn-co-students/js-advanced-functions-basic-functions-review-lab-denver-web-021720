// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}


function wrapAdjective(flair="*") {
    return function(par="special") {
        return `You are ${flair}${par}${flair}!`
    }
}

let Calculator = { 
    add(x, y) { return x + y },
    subtract(x, y) { return x - y },
    multiply(x, y) { return x * y},
    divide(x, y) { return x / y }
}

function actionApplyer(int, funcArr) {
    if (funcArr.length == 0) {
        return int
    }
    else {
        return funcArr.reduce(function(total, value) { return value(total) }, int)
    }
}
