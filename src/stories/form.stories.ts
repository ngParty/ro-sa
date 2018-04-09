import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { storiesOf } from '@storybook/angular';

const form = new FormGroup({});

const formTemplate = `
<form [formGroup]="form">
  <formly-form [form]="form" [fields]="fields" [model]="model">
    <button type="submit" class="btn btn-default">Submit</button>
  </formly-form>
</form>
`;

storiesOf('Form customization', module)
  .add('input', () => ({
    moduleMetadata: {
      imports: [ReactiveFormsModule, FormlyModule.forRoot(), FormlyBootstrapModule],
    },
    template: formTemplate,
    props: {
      form,
      model: { name: '' },
      fields: [
        {
          key: 'name',
          type: 'input',
          templateOptions: {
            type: 'input',
            label: 'Name',
            placeholder: 'Enter name',
            required: true,
          },
        },
      ],
    },
  }))
  .add('email', () => ({
    moduleMetadata: {
      imports: [ReactiveFormsModule, FormlyModule.forRoot(), FormlyBootstrapModule],
    },
    template: formTemplate,
    props: {
      form,
      model: { email: 'email@gmail.com' },
      fields: [
        {
          key: 'email',
          type: 'input',
          templateOptions: {
            type: 'input',
            label: 'Email address',
            placeholder: 'Enter email',
            required: true,
          },
        },
      ],
    },
  }));
