import { gql } from "@apollo/client";

export const CREATE_COMPLAINT_BOOK = gql`
  mutation AddComplaintsBook(
    $firstName: String!
    $lastName: String!
    $email: String!
    $nationalId: String!
    $address: String!
    $phone: String!
    $acceptedPrivacyPolicy: Boolean!
    $underAge: Boolean!
    $state: String!
    $city: String!
    $district: String!
    $datePurchased: String!
    $orderNumber: String!
    $adquiredGood: String!
    $adquiredDescription: String!
    $reclaimedAmount: String!
    $claimDetail: String!
    $complainDetail: String!
    $customerOrder: String!
    $uploadFile: String!
    $tutorFirstName: String!
    $tutorLastName: String!
    $tutorNationalId: String!
    $tutorEmail: String!
    $tutorPhone: String!
    $tutorAddress: String!
    $tutorState: String!
    $tutorCity: String!
    $tutorDistrict: String!
  ) {
    addComplaintsBook(
      firstName: $firstName
      lastName: $lastName
      email: $email
      nationalId: $nationalId
      address: $address
      phone: $phone
      acceptedPrivacyPolicy: $acceptedPrivacyPolicy
      underAge: $underAge
      state: $state
      city: $city
      district: $district
      datePurchased: $datePurchased
      orderNumber: $orderNumber
      adquiredGood: $adquiredGood
      adquiredDescription: $adquiredDescription
      reclaimedAmount: $reclaimedAmount
      claimDetail: $claimDetail
      complainDetail: $complainDetail
      customerOrder: $customerOrder
      uploadFile: $uploadFile
      tutorFirstName: $tutorFirstName
      tutorLastName: $tutorLastName
      tutorNationalId: $tutorNationalId
      tutorEmail: $tutorEmail
      tutorPhone: $tutorPhone
      tutorAddress: $tutorAddress
      tutorState: $tutorState
      tutorCity: $tutorCity
      tutorDistrict: $tutorDistrict
    ) {
      firstName
      lastName
      email
      nationalId
      address
      phone
      acceptedPrivacyPolicy
      underAge
      state
      city
      district
      datePurchased
      orderNumber
      adquiredDescription
      adquiredGood
      reclaimedAmount
      claimDetail
      complainDetail
      customerOrder
      uploadFile
      tutorLastName
      tutorFirstName
      tutorNationalId
      tutorEmail
      tutorPhone
      tutorAddress
      tutorState
      tutorCity
      tutorDistrict
    }
  }
`;

export const COMPLAINT_BOOK_LIST = gql`
  query ComplaintsBookList {
    ComplaintsBookList {
      firstName
      lastName
      email
      nationalId
      address
      phone
      acceptedPrivacyPolicy
      underAge
      state
      city
      district
      datePurchased
      orderNumber
      adquiredGood
      adquiredDescription
      reclaimedAmount
      claimDetail
      complainDetail
      customerOrder
      uploadFile
      tutorFirstName
      tutorLastName
      tutorNationalId
      tutorEmail
      tutorPhone
      tutorAddress
      tutorState
      tutorCity
      tutorDistrict
      createdAt
    }
  }
`;
