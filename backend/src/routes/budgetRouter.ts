import { Router } from "express";
import { BudgetController } from "../controllers/BudgetController";
import { body, param } from "express-validator";
import { handleInputErrors } from "../middleware/validation";

const router = Router()

router.get('/', BudgetController.getAll )


router.post('/', 
    body('name')
        .notEmpty().withMessage('El nombre del presupuesto no puede estar vacio'),
    body('amount')
        .notEmpty().withMessage('La cantidad del presupuesto no puede ir vacia')
        .isNumeric().withMessage('Cantidad no válida')
        .custom(value => value > 0).withMessage('El presupuesto debe ser mayor a 0'),
    handleInputErrors,
    BudgetController.create 
)

router.get('/:id', 
    param('id')
        .isInt().withMessage('id no válido')
        .custom(value => value > 0 ).withMessage('id no válido'),
    handleInputErrors,
    BudgetController.getByID 
)


router.put('/:id', 
    param('id')
        .isInt().withMessage('id no válido')
        .custom(value => value > 0 ).withMessage('id no válido'),
    body('name')
        .notEmpty().withMessage('El nombre del presupuesto no puede estar vacio'),
    body('amount')
        .notEmpty().withMessage('La cantidad del presupuesto no puede ir vacia')
        .isNumeric().withMessage('Cantidad no válida')
        .custom(value => value > 0).withMessage('El presupuesto debe ser mayor a 0'),
    handleInputErrors,
    BudgetController.updateById
)



router.delete('/:id', 
    param('id')
        .isInt().withMessage('id no válido')
        .custom(value => value > 0 ).withMessage('id no válido'),
    handleInputErrors,
    BudgetController.deleteById
)

export default router
