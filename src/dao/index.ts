import { SearchCriteriaFilter, Task, TaskQueue, URLTransform } from '@grupakmk/libstorefront';
import { injectable, inject } from 'inversify';
import qs from 'query-string';

@injectable()
export class StoreCreditDao {

    public getStoreCredit ({ customerId, pageSize, currentPage, sortBy, sortDir }: { customerId: string } & SearchCriteriaFilter, token: string, storeCode: string): Promise<Task> {
        const query = {
            pageSize,
            currentPage,
            sortBy,
            sortDir,
            token
        };

        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/store-credit/' + customerId + '?' + qs.stringify(query)),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public getSingleStoreCredit (storeCreditId, token: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/store-credit/single/' + storeCreditId),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public applyCredit (amount: number, cartId, token: string): Promise<Task> {
        const query = {
            amount,
            cartId,
            token
        };

        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/store-credit/apply?' + qs.stringify(query)),
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public cancelCredit (cartId, token: string): Promise<Task> {
        const query = {
            cartId,
            token
        };

        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/store-credit/cancel?' + qs.stringify(query)),
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
