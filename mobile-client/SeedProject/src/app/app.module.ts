import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { CustomersService } from '../services/customers.service';


@NgModule({
    declarations: [
        MyApp,
        HelloIonicPage,
        ListPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HelloIonicPage,
        ListPage
    ],
    providers: [CustomersService]
})
export class AppModule { }
