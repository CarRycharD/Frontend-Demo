import * as Yup from 'yup';

export const foodValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  amount: Yup.number().when('unit', {
    is: (unit: string) => unit || unit == '',
    then: Yup.number().required("If you want to add unit, amount must be added.")
  }),
  unit: Yup.string().when('amount', {
    is: (amount: number) => amount !== 0,
    then: Yup.string().required("If you want to add amount, unit must be added.")
  }),

},
[['amount', 'unit']])
