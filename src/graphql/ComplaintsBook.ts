import { gql } from "@apollo/client";

export const CREATE_COMPLAINT_BOOK = gql`
  mutation AddComplaintsBook(
    $firstName: String!
    $lastNameP: String!
    $lastNameM: String!
    $docType: String!
    $docNumber: String!
    $address: String!
    $phone: String!
    $email: String!
    $reclaimedAmount: String!
    $adquiredGood: String!
    $adquiredDescription: String!
    $claimType: String!
    $claimDetail: String!
    $customerOrder: String!
    $underAge: Boolean!
    $tutorName: String
    $tutorDocType: String
    $tutorDocNumber: String
  ) {
    addComplaintsBook(
      firstName: $firstName
      lastNameP: $lastNameP
      lastNameM: $lastNameM
      docType: $docType
      docNumber: $docNumber
      address: $address
      phone: $phone
      email: $email
      reclaimedAmount: $reclaimedAmount
      adquiredGood: $adquiredGood
      adquiredDescription: $adquiredDescription
      claimType: $claimType
      claimDetail: $claimDetail
      customerOrder: $customerOrder
      underAge: $underAge
      tutorName: $tutorName
      tutorDocType: $tutorDocType
      tutorDocNumber: $tutorDocNumber
    ) {
      firstName
      lastNameP
      lastNameM
      docType
      docNumber
      address
      phone
      email
      reclaimedAmount
      adquiredGood
      adquiredDescription
      claimType
      claimDetail
      customerOrder
      underAge
      tutorName
      tutorDocType
      tutorDocNumber
      correlativo
      f_date
      createdAt
    }
  }
`;

export const COMPLAINT_BOOK_LIST = gql`
query ComplaintsBookList {
  ComplaintsBookList {
    firstName
    lastNameP
    lastNameM
    docType
    docNumber
    address
    phone
    email
    reclaimedAmount
    adquiredGood
    adquiredDescription
    claimType
    claimDetail
    customerOrder
    underAge
    tutorName
    tutorDocType
    tutorDocNumber
    correlativo
    f_date
    createdAt
  } 
}
`;
