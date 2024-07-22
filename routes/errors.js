import { Router } from "express";

const router=new Router();

router.use((req,res)=>{
    res.status(404);
    res.render('404',{layout:''});
});

router.use((req,res)=>{
    res.status(500);
    res.render('500');
});

export {router as errors}