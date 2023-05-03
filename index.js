// Code your solution here
function findMatching(drivers, string){
  return drivers.filter((name) => name.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string){
    return drivers.filter((name=> name.slice(0, string.length) === string))
}

function matchName(drivers, string){
    return drivers.filter(function(item){
        return item.name === string;
    })
}