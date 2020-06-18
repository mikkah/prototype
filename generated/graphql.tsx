import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Use JavaScript Date object for date/time fields. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken?: Maybe<Scalars['String']>;
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type DeckCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<DeckCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<DeckWhereUniqueInput>>;
};

export type DeckCreateManyWithoutUserInput = {
  create?: Maybe<Array<DeckCreateWithoutUserInput>>;
  connect?: Maybe<Array<DeckWhereUniqueInput>>;
};

export type DeckCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  url: Scalars['String'];
  published: Scalars['String'];
  logo: Scalars['String'];
  User?: Maybe<UserCreateOneWithoutDecksInput>;
  Template?: Maybe<TemplateCreateManyWithoutDeckInput>;
};

export type DeckCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  url: Scalars['String'];
  published: Scalars['String'];
  logo: Scalars['String'];
  author: UserCreateOneWithoutDeckInput;
  Template?: Maybe<TemplateCreateManyWithoutDeckInput>;
};

export type DeckFilter = {
  every?: Maybe<DeckWhereInput>;
  some?: Maybe<DeckWhereInput>;
  none?: Maybe<DeckWhereInput>;
};

export type DeckScalarWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  published?: Maybe<StringFilter>;
  logo?: Maybe<StringFilter>;
  authorId?: Maybe<StringFilter>;
  userId?: Maybe<NullableStringFilter>;
  Template?: Maybe<TemplateFilter>;
  AND?: Maybe<Array<DeckScalarWhereInput>>;
  OR?: Maybe<Array<DeckScalarWhereInput>>;
  NOT?: Maybe<Array<DeckScalarWhereInput>>;
};

export type DeckUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
};

export type DeckUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<DeckCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<DeckWhereUniqueInput>>;
  set?: Maybe<Array<DeckWhereUniqueInput>>;
  disconnect?: Maybe<Array<DeckWhereUniqueInput>>;
  delete?: Maybe<Array<DeckWhereUniqueInput>>;
  update?: Maybe<Array<DeckUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<DeckUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<DeckScalarWhereInput>>;
  upsert?: Maybe<Array<DeckUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type DeckUpdateManyWithoutUserInput = {
  create?: Maybe<Array<DeckCreateWithoutUserInput>>;
  connect?: Maybe<Array<DeckWhereUniqueInput>>;
  set?: Maybe<Array<DeckWhereUniqueInput>>;
  disconnect?: Maybe<Array<DeckWhereUniqueInput>>;
  delete?: Maybe<Array<DeckWhereUniqueInput>>;
  update?: Maybe<Array<DeckUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<DeckUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<DeckScalarWhereInput>>;
  upsert?: Maybe<Array<DeckUpsertWithWhereUniqueWithoutUserInput>>;
};

export type DeckUpdateManyWithWhereNestedInput = {
  where: DeckScalarWhereInput;
  data: DeckUpdateManyDataInput;
};

export type DeckUpdateWithoutAuthorDataInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  User?: Maybe<UserUpdateOneWithoutDecksInput>;
  Template?: Maybe<TemplateUpdateManyWithoutDeckInput>;
};

export type DeckUpdateWithoutUserDataInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  author?: Maybe<UserUpdateOneRequiredWithoutDeckInput>;
  Template?: Maybe<TemplateUpdateManyWithoutDeckInput>;
};

export type DeckUpdateWithWhereUniqueWithoutAuthorInput = {
  where: DeckWhereUniqueInput;
  data: DeckUpdateWithoutAuthorDataInput;
};

export type DeckUpdateWithWhereUniqueWithoutUserInput = {
  where: DeckWhereUniqueInput;
  data: DeckUpdateWithoutUserDataInput;
};

export type DeckUpsertWithWhereUniqueWithoutAuthorInput = {
  where: DeckWhereUniqueInput;
  update: DeckUpdateWithoutAuthorDataInput;
  create: DeckCreateWithoutAuthorInput;
};

export type DeckUpsertWithWhereUniqueWithoutUserInput = {
  where: DeckWhereUniqueInput;
  update: DeckUpdateWithoutUserDataInput;
  create: DeckCreateWithoutUserInput;
};

export type DeckWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  published?: Maybe<StringFilter>;
  logo?: Maybe<StringFilter>;
  authorId?: Maybe<StringFilter>;
  userId?: Maybe<NullableStringFilter>;
  Template?: Maybe<TemplateFilter>;
  AND?: Maybe<Array<DeckWhereInput>>;
  OR?: Maybe<Array<DeckWhereInput>>;
  NOT?: Maybe<Array<DeckWhereInput>>;
  author?: Maybe<UserWhereInput>;
  User?: Maybe<UserWhereInput>;
};

export type DeckWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  createOneUser: User;
  deleteOneUser?: Maybe<User>;
  updateOneUser?: Maybe<User>;
  signUp?: Maybe<Scalars['String']>;
  signIn?: Maybe<AuthPayload>;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationSignUpArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type NullableDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type NullableIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
};

export type NullableStringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type TemplateCreateManyWithoutDeckInput = {
  create?: Maybe<Array<TemplateCreateWithoutDeckInput>>;
  connect?: Maybe<Array<TemplateWhereUniqueInput>>;
};

export type TemplateCreateWithoutDeckInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  icon: Scalars['String'];
};

export type TemplateFilter = {
  every?: Maybe<TemplateWhereInput>;
  some?: Maybe<TemplateWhereInput>;
  none?: Maybe<TemplateWhereInput>;
};

export type TemplateScalarWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  icon?: Maybe<StringFilter>;
  deckId?: Maybe<StringFilter>;
  AND?: Maybe<Array<TemplateScalarWhereInput>>;
  OR?: Maybe<Array<TemplateScalarWhereInput>>;
  NOT?: Maybe<Array<TemplateScalarWhereInput>>;
};

export type TemplateUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type TemplateUpdateManyWithoutDeckInput = {
  create?: Maybe<Array<TemplateCreateWithoutDeckInput>>;
  connect?: Maybe<Array<TemplateWhereUniqueInput>>;
  set?: Maybe<Array<TemplateWhereUniqueInput>>;
  disconnect?: Maybe<Array<TemplateWhereUniqueInput>>;
  delete?: Maybe<Array<TemplateWhereUniqueInput>>;
  update?: Maybe<Array<TemplateUpdateWithWhereUniqueWithoutDeckInput>>;
  updateMany?: Maybe<Array<TemplateUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<TemplateScalarWhereInput>>;
  upsert?: Maybe<Array<TemplateUpsertWithWhereUniqueWithoutDeckInput>>;
};

export type TemplateUpdateManyWithWhereNestedInput = {
  where: TemplateScalarWhereInput;
  data: TemplateUpdateManyDataInput;
};

export type TemplateUpdateWithoutDeckDataInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type TemplateUpdateWithWhereUniqueWithoutDeckInput = {
  where: TemplateWhereUniqueInput;
  data: TemplateUpdateWithoutDeckDataInput;
};

export type TemplateUpsertWithWhereUniqueWithoutDeckInput = {
  where: TemplateWhereUniqueInput;
  update: TemplateUpdateWithoutDeckDataInput;
  create: TemplateCreateWithoutDeckInput;
};

export type TemplateWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  icon?: Maybe<StringFilter>;
  deckId?: Maybe<StringFilter>;
  AND?: Maybe<Array<TemplateWhereInput>>;
  OR?: Maybe<Array<TemplateWhereInput>>;
  NOT?: Maybe<Array<TemplateWhereInput>>;
  deck?: Maybe<DeckWhereInput>;
};

export type TemplateWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  userType: Scalars['String'];
  status?: Maybe<Scalars['Int']>;
  invite?: Maybe<Scalars['String']>;
};

export type UserCreateInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  userType: Scalars['String'];
  status?: Maybe<Scalars['Int']>;
  invite?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  decks?: Maybe<DeckCreateManyWithoutUserInput>;
  Deck?: Maybe<DeckCreateManyWithoutAuthorInput>;
};

export type UserCreateOneWithoutDeckInput = {
  create?: Maybe<UserCreateWithoutDeckInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutDecksInput = {
  create?: Maybe<UserCreateWithoutDecksInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutDeckInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  userType: Scalars['String'];
  status?: Maybe<Scalars['Int']>;
  invite?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  decks?: Maybe<DeckCreateManyWithoutUserInput>;
};

export type UserCreateWithoutDecksInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  userType: Scalars['String'];
  status?: Maybe<Scalars['Int']>;
  invite?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  Deck?: Maybe<DeckCreateManyWithoutAuthorInput>;
};

export type UserOrderByInput = {
  id?: Maybe<OrderByArg>;
  email?: Maybe<OrderByArg>;
  password?: Maybe<OrderByArg>;
  firstName?: Maybe<OrderByArg>;
  lastName?: Maybe<OrderByArg>;
  userType?: Maybe<OrderByArg>;
  status?: Maybe<OrderByArg>;
  invite?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  deletedAt?: Maybe<OrderByArg>;
};

export type UserUpdateInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  invite?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  decks?: Maybe<DeckUpdateManyWithoutUserInput>;
  Deck?: Maybe<DeckUpdateManyWithoutAuthorInput>;
};

export type UserUpdateOneRequiredWithoutDeckInput = {
  create?: Maybe<UserCreateWithoutDeckInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutDeckDataInput>;
  upsert?: Maybe<UserUpsertWithoutDeckInput>;
};

export type UserUpdateOneWithoutDecksInput = {
  create?: Maybe<UserCreateWithoutDecksInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutDecksDataInput>;
  upsert?: Maybe<UserUpsertWithoutDecksInput>;
};

export type UserUpdateWithoutDeckDataInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  invite?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  decks?: Maybe<DeckUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutDecksDataInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  invite?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  Deck?: Maybe<DeckUpdateManyWithoutAuthorInput>;
};

export type UserUpsertWithoutDeckInput = {
  update: UserUpdateWithoutDeckDataInput;
  create: UserCreateWithoutDeckInput;
};

export type UserUpsertWithoutDecksInput = {
  update: UserUpdateWithoutDecksDataInput;
  create: UserCreateWithoutDecksInput;
};

export type UserWhereInput = {
  id?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<NullableStringFilter>;
  firstName?: Maybe<StringFilter>;
  lastName?: Maybe<StringFilter>;
  userType?: Maybe<StringFilter>;
  status?: Maybe<NullableIntFilter>;
  invite?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  decks?: Maybe<DeckFilter>;
  Deck?: Maybe<DeckFilter>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type SignupMutationVariables = Exact<{
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
}>;


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'signUp'>
);

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'userType' | 'status' | 'invite'>
  )> }
);


export const SignupDocument = gql`
    mutation Signup($email: String!, $firstName: String!, $lastName: String!) {
  signUp(email: $email, firstName: $firstName, lastName: $lastName)
}
    `;

export function useSignupMutation() {
  return Urql.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument);
};
export const AllUsersDocument = gql`
    query AllUsers {
  users {
    id
    email
    firstName
    lastName
    userType
    status
    invite
  }
}
    `;

export function useAllUsersQuery(options: Omit<Urql.UseQueryArgs<AllUsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllUsersQuery>({ query: AllUsersDocument, ...options });
};