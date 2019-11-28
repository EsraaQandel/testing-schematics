import { ModuleWithProviders, NgModule } from '@angular/core';
import { DfButtonModule } from '@devfactory/ngx-df/button';
import { DfCardModule } from '@devfactory/ngx-df/card';
import { DfLabelModule } from '@devfactory/ngx-df/label';
import { DfLoadingSpinnerModule } from '@devfactory/ngx-df/loading-spinner';
import { DfProtoToolbarModule } from '@devfactory/ngx-df/proto-toolbar';
import { DfSidebarModule } from '@devfactory/ngx-df/sidebar';
import { DfSketchModeModule } from '@devfactory/ngx-df/sketch-mode';
import { DfToolTipModule } from '@devfactory/ngx-df/tooltip';
import { DfTopbarModule } from '@devfactory/ngx-df/topbar';
import { DfUserProfileModule } from '@devfactory/ngx-df/user-profile';
import { DfWhatsNewModule } from '@devfactory/ngx-df/whats-new';

const NGX_DF_MODULES: any[] = [
  DfButtonModule,
  DfCardModule,
  DfLabelModule,
  DfLoadingSpinnerModule,
  DfProtoToolbarModule,
  DfSidebarModule,
  DfSketchModeModule,
  DfToolTipModule,
  DfTopbarModule,
  DfUserProfileModule,
  DfWhatsNewModule,
];

@NgModule({
  exports: NGX_DF_MODULES,
  imports: [
    DfButtonModule.forRoot(),
    DfCardModule.forRoot(),
    DfLabelModule.forRoot(),
    DfLoadingSpinnerModule.forRoot(),
    DfProtoToolbarModule.forRoot(),
    DfSidebarModule.forRoot(),
    DfSketchModeModule.forRoot(),
    DfToolTipModule.forRoot(),
    DfTopbarModule.forRoot(),
    DfUserProfileModule.forRoot(),
    DfWhatsNewModule.forRoot(),
  ],
})
export class NgxDfRootModule {}

@NgModule({
  exports: NGX_DF_MODULES,
  imports: NGX_DF_MODULES,
})
export class NgxDfCustom {
  public static forRoot(): ModuleWithProviders {
    return { ngModule: NgxDfRootModule };
  }
}
