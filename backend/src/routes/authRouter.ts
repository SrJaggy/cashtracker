import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { body } from "express-validator";
import { handleInputErrors } from "../middleware/validation";

const router = Router()


router.post('/create-account', 
    body('name').notEmpty().withMessage('El nombre no debe estar vacio'),
    body('password').isLength({min:8}).withMessage('El password es muy corto, mínimo 8 caracteres'),
    body('email').isEmail().withMessage('El email no es valido'),
    handleInputErrors,
    AuthController.createAccount
)


export default router

