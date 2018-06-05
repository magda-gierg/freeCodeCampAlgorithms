function checkCashRegister(price, cash, cid) {

  var change = cash - price
  var register = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00]
  var changeArr = []

  var cidTotal = cid.reduce(function (sum, value) {
    return sum + value[1]
  }, 0);

  cidTotal = Math.round(cidTotal * 100) / 100 // rounding to prevent floating point error
  if (cidTotal === change) {
    return {status: "CLOSED", change: cid}
  }

  // calculate change
  for (var i = cid.length - 1; i > -1; i--) {
    var value = 0
    while (cid[i][1] > 0 && change >= register[i]) {
      change -= register[i]
      change = Math.round(change * 100) / 100
      cid[i][1] -= register[i]
      value += register[i]
    }
    if (value > 0) {
      changeArr.push([cid[i][0], value])
    }
  }

  // check available change
  var avaiableChange = changeArr.reduce(function (sum, value) {
    return sum + value[1]
  }, 0)
  avaiableChange = Math.round(avaiableChange * 100) / 100

  if (avaiableChange < change) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  return {status: "OPEN", change: changeArr}
}


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
