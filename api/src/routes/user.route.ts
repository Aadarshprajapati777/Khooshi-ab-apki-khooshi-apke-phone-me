// export const userRouter = async () => {
//     try{
//         console.log('user router connected')
//     }
//     catch(err){
//         console.log(err)
//     }
// }
import { Router } from "express";
import {loginUser, registerUser, logoutUser} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../controllers/auth.middleware.js";

const router = Router();
router.route("/register").post(
    
    upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'coverImage', maxCount: 1 }
    ])
    ,registerUser); 



router.route("/login").post( loginUser);

router.route("/logout").post(verifyJWT, logoutUser);

router.route("/post").post(verifyJWT, postUser);
export default router;