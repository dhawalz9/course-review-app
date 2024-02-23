export const isLogin = (req, res, next) => {
    if(req.user){
        next();
    }else{
        return res.status(400).send({
            success:false,
            message:"Please login to continue"
        })
    }
}