var Regex = (x,y)=> {
    return x.search(y)
}

var data = "abcdefghijklmnopqrstuvwxyz"

console.log("Urutan ke :",(Regex(data,"S".toLowerCase())))