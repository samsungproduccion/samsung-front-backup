import { gql } from "@apollo/client";

export const CREATE_EVOUCHER_BESPOKE = gql`
  mutation Mutation(
    $name: String!
    $lastname: String!
    $dni: String!
    $email: String!
    $phone: String!
    $voucher: String!
    $state: String!
    $city: String!
    $district: String!
    $image: String!
    $art: String!
    $marketingOption: Boolean!
  ) {
    addEvoucherBespoke(
      name: $name
      lastname: $lastname
      dni: $dni
      email: $email
      phone: $phone
      voucher: $voucher
      state: $state
      city: $city
      district: $district
      image: $image
      art: $art
      marketingOption: $marketingOption
    ) {
      name
      lastname
      dni
      email
      phone
      voucher
      state
      city
      district
      image
      art
      acceptedPrivacyPolicy
      acceptedTermsOfService
      marketingOption
    }
  }
`;
