
module.exports = function(req, res, next){
   console.log(req.body)
   if (req.body.nomLogin === 'Metux' && req.body.nomPassword === 'Metux'){
      console.log('succesfully logged')
      res.send('succesfully logged')
      next();
   }else{
      res.send('error')
   }
}