"use strict";

module.exports = function (req, res, next) {

   var array = [1, 2, 3, 4, 5];
   var nums = array.map(function (v, i) {
      return v + i;
   });
   var esCode = [[1, 2, 3, 4, 5], "array.map((v, i) => v + i);", nums];
   res.esCode = esCode;
   next();
};
