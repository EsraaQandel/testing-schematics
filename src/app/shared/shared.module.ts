import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDfCustom } from './ngx-custom.module';
import { MatCustom } from './mat-custom.module';

const SHARED_MODULES: any[] = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  NgxDfCustom,
  MatCustom,
];
const SHARED_COMPONENTS: any[] = [];
const SHARED_PIPES: any[] = [];

/**
 * The shared module is used to hold all reusable components across the app's
 * different modules. It imports and exports reusable modules to make them
 * readily available to other feature modules just by importing the shared
 * module, avoiding repetition. Since the shared module is meant to be imported
 * by all feature-modules, it shouldn't provide any service.
 */
@NgModule({
  declarations: [...SHARED_COMPONENTS, ...SHARED_PIPES],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENTS, ...SHARED_PIPES],
  imports: [...SHARED_MODULES]
  /** Do not provide services here, do it in core.module */
})
export class SharedModule {}
