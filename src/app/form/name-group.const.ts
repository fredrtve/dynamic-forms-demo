import { DynamicFormBuilder } from "@fretve/dynamic-forms";
import { DynamicControlGroupComponent, InputFieldComponent } from "@fretve/mat-dynamic-form-controls";

export interface NameGroup {
    first: string,
    last: string,
}

const builder = new DynamicFormBuilder<NameGroup>();

export const NameGroup = builder.group()({
    viewOptions: {},
    viewComponent: DynamicControlGroupComponent,
    controlClass$: "name-control-group",
    controls: {
        first: builder.field({ 
            viewComponent: InputFieldComponent, 
            viewOptions: { placeholder$: "First Name" }, 
            required$: true
        }),
        last: builder.field({ 
            viewComponent: InputFieldComponent, 
            viewOptions: { placeholder$: "Last Name" }, 
            required$: true
        }),
    },
})