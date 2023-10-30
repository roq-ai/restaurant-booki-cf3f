import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  total_price: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  menu_id: yup.string().nullable().required(),
});
