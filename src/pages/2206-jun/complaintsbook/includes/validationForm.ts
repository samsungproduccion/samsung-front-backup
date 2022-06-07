import * as Yup from "yup";
import { isNumber } from "../../../../utils/isNumber";

export const validationForm = Yup.object({
  firstName: Yup.string()
    .required("El nombre es obligatorio"),
  lastName: Yup.string().required("El apellido es obligatorio"),
  address: Yup.string().required("La dirección es obligatoria"),
  email: Yup.string()
    .required("El email es obligatorio")
    .email("Email ingresado no valido"),
  nationalId: Yup.string()
    .required("El DNI es obligatorio")
    .matches(isNumber, "DNI no válido")
    .min(8, "Debe tener mínimo 8 digitos")
    .max(10, " Debe tener máximo 10 digitos"),
  phone: Yup.string()
    .required("El celular es obligatorio")
    .matches(isNumber, "Teléfono no válido")
    .min(9, "Debe tener 9 digitos")
    .max(9, "Debe tener 9 digitos"),
  acceptedPrivacyPolicy: Yup.boolean().isTrue("Debe aceptar la política de privacidad"),
  state: Yup.string().required("El departamento es obligatorio").notOneOf(['0'], 'escoja'),
  city: Yup.string().required("La ciudad es obligatoria").notOneOf(['0'], 'escoja'),
  district: Yup.string().required("El distrito es obligatorio").notOneOf(['0'], 'escoja'),
  pdate: Yup.string().required("La fecha es obligatoria"),
  datePurchased: Yup.string().required('La fecha de compra es obligatoria'),
  orderNumber: Yup.string().required('El número de pedido es obligatorio'),
  adquiredGood: Yup.string().required('El bien adquirido es obligatorio'),
  adquiredDescription: Yup.string().required('La descripción es obligatoria'),
  reclaimedAmount: Yup.string().required('El monto es obligatorio'),
  customerOrder: Yup.string().required('El pedido o compensación es obligatorio'),
});
