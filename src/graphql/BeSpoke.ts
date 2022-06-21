import { gql } from "@apollo/client";

export const CREATE_EVOUCHER_BESPOKE = gql`
  mutation AddEvoucherBespoke(
    $name: String!
    $dni: String!
    $email: String!
    $phone: String!
    $address: String!
    $quantity: String!
    $voucher: String!
    $store: String!
    $image: String!
    $art: String!
    $privacy: Boolean!
    $terms: Boolean!
    $marketingOption: Boolean!
    $lastname: String!
  ) {
    addEvoucherBespoke(
      name: $name
      dni: $dni
      email: $email
      phone: $phone
      address: $address
      quantity: $quantity
      voucher: $voucher
      store: $store
      image: $image
      art: $art
      privacy: $privacy
      terms: $terms
      marketingOption: $marketingOption
      lastname: $lastname
    ) {
      name
      lastname
      dni
      email
      phone
      address
      quantity
      voucher
      store
      image
      art
      terms
      privacy
      marketingOption
      created
      createdAt
    }
  }
`;

export const CREATE_BESPOKE = gql`
  mutation AddBeSpokeUser(
    $name: String!
    $lastname: String!
    $dni: String!
    $email: String!
    $phone: String!
  ) {
    addBeSpokeUser(
      name: $name
      lastname: $lastname
      dni: $dni
      email: $email
      phone: $phone
    ) {
      name
      lastname
      dni
      email
      phone
    }
  }
`;

export const BESPOKE_LIST = gql`
  query BeSpokeList {
    BeSpokeList {
      phone
      email
      lastname
      name
      dni
    }
  }
`;
