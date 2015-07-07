
module.exports = function(req, res, next){

   var array = [1,2,3,4,5];
   var nums = array.map((v, i) => v + i);
   next();
}