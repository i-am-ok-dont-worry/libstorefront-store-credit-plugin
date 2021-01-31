import { SearchCriteriaFilter, Task, TaskQueue, URLTransform } from '@grupakmk/libstorefront';
import { injectable, inject } from 'inversify';
import qs from 'query-string';

@injectable()
export class StoreCreditDao {

    public getStoreCredit ({ customerId, pageSize, currentPage, sortBy, sortDir }: { customerId: string } & SearchCriteriaFilter, storeCode: string): Promise<Task> {
        const query = {
            pageSize,
            currentPage,
            sortBy,
            sortDir,
            storeCode,
        };

        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/store-credit/' + customerId + '?' + qs.stringify(query)) + '&token={{token}}',
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public getSingleStoreCredit (storeCreditId): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/store-credit/single/' + storeCreditId + '?token={{token}}'),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public applyCredit (amount: number, cartId): Promise<Task> {
        const query = {
            amount,
            cartId
        };

        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/store-credit/apply?' + qs.stringify(query)) + '&token={{token}}',
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public cancelCredit (cartId): Promise<Task> {
        const query = {
            cartId
        };

        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/store-credit/cancel?' + qs.stringify(query)) + '&token={{token}}',
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public getMyStoreCredit (storeCode?: string): Promise<Task> {
        const query = {
            storeCode
        };

        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/store-credit/mine?' + qs.stringify(query)) + '&token={{token}}',
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public constructor(@inject(TaskQueue) private taskQueue) {}
}
