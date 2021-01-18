import { LibStorefront } from '@grupakmk/libstorefront';
let lsf: LibStorefront;

beforeEach(() => {
    lsf = new LibStorefront();

    console.log = jest.fn();
    console.warn = jest.fn();
    console.error = jest.fn();
    console.debug = jest.fn();
});

describe('General', () => {
    test('It should do some test', () => {

    });
});

