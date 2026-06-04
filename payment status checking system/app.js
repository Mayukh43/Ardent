const check = require('./payment');

console.log(check("pending"));    
console.log(check("processing"));  
console.log(check("completed"));    
console.log(check("failed"));      
console.log(check("refunded"));    
console.log(check("unknown"));     
