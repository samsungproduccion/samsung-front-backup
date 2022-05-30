import * as Yup from 'yup';
import { isNumber } from '../../../../utils/isNumber';

export const validationForm = Yup.object({
    name: Yup.string()
      .required("El nombre es obligatorio")
      .min(5, "El nombre debe tener al menos 5 caracteres"),
    lastname: Yup.string().required("El apellido es obligatorio"),
    email: Yup.string()
      .required("El email es obligatorio")
      .email("Email ingresado no valido"),
    dni: Yup.string()
      .required("El DNI es obligatorio")
      .matches(isNumber, "DNI no válido")
      .min(8, "Debe tener mínimo 8 digitos")
      .max(10, " Debe tener máximo 10 digitos"),
    phone: Yup.string()
      .required("El celular es obligatorio")
      .matches(isNumber, "Teléfono no válido")
      .min(9, "Debe tener 9 digitos")
      .max(9, "Debe tener 9 digitos"),
      privacy: Yup.boolean().isTrue("Debe aceptar la política de privacidad"),
      terms: Yup.boolean().isTrue("Debe aceptar los terminos y condiciones"),
  })