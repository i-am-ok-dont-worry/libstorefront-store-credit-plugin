export interface StoreCredit {
    store_credit_id?: number,
    customer_id?: number|string,
    store_credit?: number,
    store_credit_limit?: number
}

export interface StoreCreditPluginOptions {
    catalogPricesIncludeTax?: boolean // If catalog product prices do include taxes use base_grand_total value to reapply storecredit
}
