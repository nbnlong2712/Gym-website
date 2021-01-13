const express=require('express');
const cartModel=require('../models/cart.model')
const productModel=require('../models/product.model')
const router=express.Router();

router.get('/', async function (req, res) {
  
    const  item=[];
    for(const ci of req.session.cart)
     {
         const product=await productModel.single(ci.id);
         item.push({
             product,
             quantity: +ci.quantity,
             amount: ((+(ci.quantity))*(+(product.Sub_price)))
 
         })
    
     }
     console.log(item[0].amount);
    res.render('vwCart/index',{item})
    
})
router.post('/add', async function(req, res){
   const  item={
        id: +req.body.id,
        quantity:+req.body.quantity
    }
    cartModel.add(req.session.cart,item);
    res.redirect(req.headers.referer);
})
router.post('/remove', async function(req, res){
     cartModel.remove(req.session.cart,+req.body.id);
     res.redirect(req.headers.referer);
 })
module.exports=router;