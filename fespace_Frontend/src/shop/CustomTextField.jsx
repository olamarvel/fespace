import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <div className='col-12 sm:col-6'>
      <Controller
        name={name}
        control={control}
        label={label}
        required={required}
        error={isError}
        render={({ field }) => <input {...field} />}
      />
    </div>
  );
}

export default FormInput;
