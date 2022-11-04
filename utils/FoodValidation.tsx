import * as Yup from 'yup';

export const foodValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  amount: Yup.number().when('unit', {
    is: (unit: string) => unit,
    then:Yup.number().required()
  }),
  unit: Yup.string().when('amount', {
    is: (amount: number) => amount,
    then:Yup.string().required()
  }),

},
[['amount', 'unit']])
