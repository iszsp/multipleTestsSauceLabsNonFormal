

import Logoutting from '../pageobjects/logout.js';

let loggingOut = () => {
describe('imma do the checkout thing now', () => {
    it('happy logout', async () => {
        await Logoutting.happyLogout();
    })
    it('trying to access the cart url when logged out', async () => {
        await Logoutting.cartLinkLck();
    })
})
}
loggingOut();
export { loggingOut };