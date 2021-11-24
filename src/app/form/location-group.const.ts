import { DynamicFormBuilder } from "@fretve/dynamic-forms";
import { DynamicControlGroupComponent, SelectFieldComponent } from "@fretve/mat-dynamic-form-controls";
import { combineLatest } from "rxjs";
import { switchMap } from "rxjs/operators";
import { LocationApi } from "../location-api.service";

export interface Location {
    country: string,
    region: string
}

const builder = new DynamicFormBuilder<Location, { locationApi: LocationApi }>();

const countriesBinding = builder.bindObserver([], ['locationApi'], (f$, s$) =>
    s$.pipe(switchMap((s) => s.locationApi!.getCountries()))
);

const regionBinding = builder.bindObserver(['country'], ['locationApi'], (f$, s$) =>
    combineLatest([f$, s$]).pipe(
      switchMap(([f, s]) => s.locationApi!.getRegions(f.country))
    )
);

export const LocationGroup = builder.group()({
    viewComponent: DynamicControlGroupComponent,
    viewOptions: {},
    controlClass$: 'location-control-group',
    controls: {
        country: builder.field<SelectFieldComponent<string>>({ 
            viewComponent: SelectFieldComponent, 
            viewOptions: { options$: [], placeholder$: "Country" }, 
            required$: true
        }),
        region: builder.field<SelectFieldComponent<string>>({
            viewComponent: SelectFieldComponent,
            viewOptions: { options$: [], placeholder$: 'Region' },
        }),
    },
    overrides: {
        country: { viewOptions: { options$: countriesBinding } },
        region: {
            disabled$: builder.bindForm('country', (c) => c == null),
            viewOptions: { options$: regionBinding },
        },
    }
})