// var string = "hello fivepoints good luck"
// var lastword = string.slice(-1)[0] 
// console.log('hello '+lastword)
/* ------ ex 1 -----*/
var words = "hello fivepoints good luck"
var n = words.split(" ");
var res=  n[n.length - 1];
var longueur = res.length
console.log('hello '+res)
console.log('longueur '+longueur)

/* ------ ex 2 -----*/
var l1 = [2,4,3] 
var l2 = [5,6,4]
var l3
if ((l1 == [])&&
(l2 == [])){
l3 = [0]
}
l1_1 = l1.reverse()
l2_2 = l2.reverse()
console.log(l1_1);
var string1 = ''

l1_1.forEach(element => {
    string1 += element
});
console.log(string1);
var string2 = ''
l2_2.forEach(element => {
    string2 += element
});
console.log(string2);
var nombre1 =  parseInt(string1, 10)
var nombre2 =  parseInt(string2, 10)
console.log(" nombre 1 " + nombre1);
var sum = nombre1 + nombre2
var sumString = sum.toString()
console.log(sumString);

var splits = sumString.split("", sumString.length);

console.log("le tableau de la somme est "+ splits);



/* ------ ex 3 -----*/
/* ------ function nombre premier :  -----*/

function nbrPremier(nbr) {
    for(var i = 2; i < nbr; i++)
      if(nbr%i === 0) return false;
    return nbr > 1;
  }
  console.log("le nombre est " + nbrPremier(10));

var k = 10
var nums = [1,2,3,3,4,5,6]
var numsContent = function (nums){
    for (i = 0; i < nums.length; i++){
        if((1<=nums[i])&&
        (nums[i]<=10**9)){
            return true
        }else {
            return false
        }

    }
}

  if(nbrPremier(k) == true ){
      console.log("le nombre n'est pas divisible");
  }
  else if (
     (numsContent(nums)) &&
     (k>= 1 )&&
     (k<= nums.length)
  ){
    console.log("le nombre est divisible");


  }