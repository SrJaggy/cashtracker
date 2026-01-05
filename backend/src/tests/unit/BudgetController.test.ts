import { budgets } from "../mocks/Budgets"

describe ('BuegetCOntroller.getAll', ()=> {
    it('should retrieve 3 budgets', ()=> {
        expect(budgets).toHaveLength(3)
    })
})