import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoudComponent } from './page-not-foud/page-not-foud.component';
import { FaqComponent } from './faq/faq.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
        // component: HomeComponent
    }, 

    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },

    {
        path: 'faq',
        component: FaqComponent
    },

    {
        path: '**',
        component: PageNotFoudComponent
    }
];
