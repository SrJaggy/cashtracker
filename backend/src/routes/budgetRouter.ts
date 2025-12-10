import { Router } from "express";
import { BudgetController } from "../controllers/BudgetController";
import { handleInputErrors } from "../middleware/validation";
import { validateBudgetExist, validateBudgetId, validateBudgetInput, validateExpenseExist } from "../middleware/Budget";
import { ExpensesController } from "../controllers/ExpenseController";
import { validateExpenseId, validateExpenseInput } from "../middleware/Expense";



const router = Router()

router.param('budgetId', validateBudgetId)
router.param('budgetId', validateBudgetExist)
router.param('expenseId',validateExpenseId)
router.param('expenseId',validateExpenseExist)


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


/** Routes for Expenses **/

router.post('/:budgetId/expenses',
    validateExpenseInput,
    handleInputErrors,
    ExpensesController.create)
router.get('/:budgetId/expenses/:expenseId',ExpensesController.getById)
router.put('/:budgetId/expenses/:expenseId',
    validateExpenseInput,
    handleInputErrors,
    ExpensesController.updateById)
router.delete('/:budgetId/expenses/:expenseId',ExpensesController.deleteById)

export default router
