import { Router } from "express";
import { BudgetController } from "../controllers/BudgetController";
import { handleInputErrors } from "../middleware/validation";
import { validateBudgetExist, validateBudgetId, validateBudgetInput } from '../middleware/Budget';

const router = Router()

router.param('budgetId', validateBudgetId)
router.param('budgetId', validateBudgetExist)

router.get('/', BudgetController.getAll )

router.post('/', 
    validateBudgetInput,
    handleInputErrors,
    BudgetController.create 
)

router.get('/:budgetId', 
    handleInputErrors,
    BudgetController.getByID 
)

router.put('/:budgetId', 
    validateBudgetInput,
    handleInputErrors,
    BudgetController.updateById
)

router.delete('/:budgetId', 
    handleInputErrors,
    BudgetController.deleteById
)

export default router
