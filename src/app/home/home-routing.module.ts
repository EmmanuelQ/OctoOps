import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {StockComponent} from '../stock/stock.component';
import {NgModule} from '@angular/core';


const homeRoutes : Routes = [
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{
				path: 'stock',
				component: StockComponent
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(homeRoutes)
	],
	exports: [
		RouterModule
	]
})

export class HomeRoutingModule{}