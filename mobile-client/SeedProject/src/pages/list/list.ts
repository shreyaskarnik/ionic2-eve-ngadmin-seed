import { Component } from '@angular/core';

import { CustomersService } from '../../services/customers.service';

@Component({
    templateUrl: 'list.html'
})

export class ListPage {

    selectedItem: any;
    icons: string[];
    items: any[];

    constructor(private customersService: CustomersService) { }

    getCustomers(refresher?): void {
        this.customersService.getCustomers().subscribe(
            customers => {
                this.items = customers;
                if (refresher) {
                    refresher.complete();
                }
            }
        );
    }

    ionViewDidEnter(): void {
        this.getCustomers();
    }

}
