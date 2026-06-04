let penstock = 10;
let pencilstock = 20;
function stock(product, quantity) 
{
    if (product=="pen") {
        if (quantity <= penstock){return "Product availabe"; }
        else {return "Product out of stock"; } 
    } else if (product=="pencil") {
        if (quantity <= penstock){return "Product availabe"; }
        else {return "Product out of stock"; } 
    } else {
        return "Product not found";
    }
}


module.exports = stock;
