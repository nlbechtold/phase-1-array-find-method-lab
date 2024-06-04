// code your solution here
// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
    
//   ]

// record.find(superbowlWin)

function superbowlWin(record) {
    
   const x = record.find(superbowlWin2) 
if (x) 
    {return x.year}
else 
    {return undefined} 
}
function superbowlWin2(var2) {
    if (var2.result === "W")
        {return var2.year}
    else 

    {return undefined}
}

// function superbowlWin(win) {
//     record.find(superbowlWin)
//         if (win.result === "W") {
//             return win.year

//         }
//     }
 
//     function isOdd(element, index, array) {
//         return (element % 2 === 1);
//       }
  
// function superbowlWin2(win) {
//         if (win.result === "W") {
//             return win.year
//         }
//     }
  