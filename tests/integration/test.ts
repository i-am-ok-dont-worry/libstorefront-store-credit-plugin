import { LibStorefront } from '@grupakmk/libstorefront';
import {StoreCreditPlugin} from "../../src";
import {StoreCreditService} from "../../src/service";

console.warn('Test suite initialized');

const LSF = new LibStorefront({
    plugins: [
        StoreCreditPlugin
    ]
}, 'http://localhost:9001');

(async () => {
    await LSF.UserService.login('test@grupakmk.pl', 'Testowe2!');
    await LSF.CartService.createCart({ guestCart: false });
    LSF.get(StoreCreditService).cancelCredit()
        .then(res => {
            debugger
        })
        .catch(err => {
            debugger;
        });

})();
