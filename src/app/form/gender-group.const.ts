import { DynamicFormBuilder } from "@fretve/dynamic-forms";
import { RadioGroupFieldComponent, InputFieldComponent } from "@fretve/mat-dynamic-form-controls";

export interface GenderSelect { selected: string, other: string  };

const builder = new DynamicFormBuilder<GenderSelect>();

export const GenderGroup = builder.group()({
    viewComponent: null,
    viewOptions: {},
    controls:{
        selected: builder.field<RadioGroupFieldComponent<string>>({ 
            viewComponent: RadioGroupFieldComponent, 
            viewOptions: { options$: [ "Male", "Female", "Other" ], label$: "Gender" }
        }),
        other: builder.field({ 
            viewComponent: InputFieldComponent, 
            viewOptions: { placeholder$: "Specify gender" } 
        }),
    },
    overrides: {
        other: { 
            controlClass$: builder.bindForm("selected", (gender) => gender === "Other" ? '' : 'hide-control')
        }
    }
})