# Libstorefront Store credit plugin
Provides registered customers with a flexible credit system. 
Lets customers spend their credit balance on product purchase.

## Usage
To use plugin add a dependency to the LSF lib:
```javascript
const LSF = new LibStorefront({
    plugins: [
        StoreCreditPlugin
    ]
});
```

and get `StoreCreditService` registered by lib:
```javascript
LSF.get(StoreCreditService)
```
## Model
Plugin adds new type `StoreCredit`:
```javascript
interface StoreCredit {
    store_credit_id: number,
    customer_id: number|string,
    store_credit: number,
    store_credit_limit: number
}
```

## Service
Plugin registers the [StoreCreditService](https://gitlab.grupakmk.pl/internal/frontend/api/addons/libstorefront-addons/libstorefront-store-credit-plugin/-/blob/master/src/service/index.ts) that serves as a plugin entry point.
Service exposes methods:
* `getStoreCredit ({ sortBy, sortDir, pageSize, currentPage }: SearchCriteriaFilter)` - returns store credit info for currently logged user
* `getSingleStoreCredit (storeCreditId: string): Promise<StoreCredit>` - returns details about the store credit
* `applyCredit (amount: number): Promise<void>` - applies credit to the current cart
* `cancelCredit (): Promise<void>` - cancels credit on the current cart

## Redux store 
Plugin adds new state branch `storeCredit` to the original Libstorefront redux store.
```javascript
interface StoreCreditModuleState {
    current: StoreCredit
}
```

## Test plugin
Plugin must be tested in isolation. Unit tests can be performed via jest framework
in `/tests/test.ts` file.
Template includes by default mocked LocalStorage object.
