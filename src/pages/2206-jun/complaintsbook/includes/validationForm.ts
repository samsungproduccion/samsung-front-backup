import * as Yup from "yup";
import { isNumber } from "../../../../utils/isNumber";

export const validationForm = Yup.object({
  firstName: Yup.string()
    .required("El nombre es obligatorio"),
    lastNameP: Yup.string().required("El apellido paterno es obligatorio"),
    lastNameM: Yup.string().required("El apellido materno es obligatorio"),
    docType: Yup.string().required("El tipo de documento es obligatorio").notOneOf(['0'], 'escoja'),
    docNumber: Yup.string()
    .required("El nro de documento es obligatorio")
    .matches(isNumber, "Nro de documento no válido"),
  address: Yup.string().required("La dirección es obligatoria"),
  email: Yup.string()
    .required("El email es obligatorio")
    .email("Email ingresado no valido"),
  phone: Yup.number()
  .typeError('Debe ser un número')
  .required('La descripción es obligatoria'),

    reclaimedAmount: Yup.number()
    .typeError('Debe ser un número')
    .required('El monto reclamado es obligatorio'),
    adquiredGood: Yup.string().required('Debe seleccionar una opción'),
    adquiredDescription: Yup.string().required('El pedido o compensación es obligatorio'),
    
    claimType: Yup.string().required('El tipo de reclamación es obligatorio'),
    claimDetail: Yup.string().required('El detalle de reclamación es obligatorio'),
    customerOrder: Yup.string().required('El pedido o compensación es obligatorio'),

});
