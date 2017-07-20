import {MdToolbarModule, MdCardModule, MdSidenavModule} from '@angular/material';
import  {NgModule} from '@angular/core';


@NgModule({
	imports: [MdToolbarModule, MdCardModule, MdSidenavModule],
	exports: [MdToolbarModule, MdCardModule, MdSidenavModule]
})

export class myAngularMaterialModule{ }