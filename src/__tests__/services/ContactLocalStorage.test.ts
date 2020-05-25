import ContactLocalStorageService from "../../services/contactLocalStorageService";
import { IContact } from "../../models/contact";


// __tests__/services/ContactLocalStorage.test.ts
describe("ContactLocalStorage", () => {
    const service =  ContactLocalStorageService;
    
    it("Contact Id", () => {
        const contact: IContact = {
            id: 0,
            name: 'Coumarane',
            email: 'c.coumarane@gmail.com',
            dateOfBirth: '24/07/1975'
        }
        const result = service.saveContact(contact);
        expect(result).toBeGreaterThan(0)
        expect(result).toEqual(1)
    })
})