import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type CompanyProfile = {
  __typename?: 'CompanyProfile';
  id: Scalars['Float'];
  name: Scalars['String'];
  location: Scalars['String'];
  website: Scalars['String'];
  phone: Scalars['String'];
  logo: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type ImageUrl = {
  __typename?: 'ImageUrl';
  url: Scalars['String'];
};

export type Job = {
  __typename?: 'Job';
  id: Scalars['Float'];
  title: Scalars['String'];
  location: Scalars['String'];
  category: Scalars['String'];
  salary: Scalars['String'];
  expDate: Scalars['String'];
  description: Scalars['String'];
  imgUrl: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  companyProfileId: Scalars['Float'];
  company: CompanyProfile;
};

export type LoginInput = {
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  forgotPassword: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  createCompanyProfile: CompanyProfile;
  fileUpload: ImageUrl;
  postJob: Job;
};


export type MutationChangePasswordArgs = {
  token: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationCreateCompanyProfileArgs = {
  data: CompanyProfileInput;
};


export type MutationFileUploadArgs = {
  imgUrl: Scalars['Upload'];
};


export type MutationPostJobArgs = {
  data: JobInput;
};

export type PaginatedJobs = {
  __typename?: 'PaginatedJobs';
  jobs: Array<Job>;
  hasMore: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  getCompanyUserDetails: CompanyProfile;
  me?: Maybe<User>;
  company: Scalars['String'];
  getCompanyById?: Maybe<CompanyDetails>;
  getCompanies?: Maybe<Array<CompanyProfile>>;
  job: Scalars['String'];
  getJobById?: Maybe<Job>;
  getJobs?: Maybe<PaginatedJobs>;
};


export type QueryGetCompanyByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetJobByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetJobsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};

export type RegisterInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
  user_type: Scalars['String'];
};


export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
  email: Scalars['String'];
  user_type: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type CompanyDetails = {
  __typename?: 'companyDetails';
  details?: Maybe<CompanyProfile>;
  jobs?: Maybe<Array<Job>>;
};

export type CompanyProfileInput = {
  name: Scalars['String'];
  location: Scalars['String'];
  website: Scalars['String'];
  phone: Scalars['String'];
  logo: Scalars['String'];
  description: Scalars['String'];
};

export type JobInput = {
  title: Scalars['String'];
  category: Scalars['String'];
  description: Scalars['String'];
  salary: Scalars['String'];
  location: Scalars['String'];
  expDate: Scalars['String'];
  imgUrl: Scalars['String'];
};

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', username: string, email: string, user_type: string }> } };

export type CreateCompanyProfileMutationVariables = Exact<{
  data: CompanyProfileInput;
}>;


export type CreateCompanyProfileMutation = { __typename?: 'Mutation', createCompanyProfile: { __typename?: 'CompanyProfile', id: number, name: string, website: string, location: string, phone: string, logo: string, description: string, createdAt: string, updatedAt: string } };

export type FileUploadMutationVariables = Exact<{
  imgUrl: Scalars['Upload'];
}>;


export type FileUploadMutation = { __typename?: 'Mutation', fileUpload: { __typename?: 'ImageUrl', url: string } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', user?: Maybe<{ __typename?: 'User', username: string, email: string, id: number, user_type: string }>, errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>> } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type PostJobMutationVariables = Exact<{
  data: JobInput;
}>;


export type PostJobMutation = { __typename?: 'Mutation', postJob: { __typename?: 'Job', id: number, title: string, category: string, location: string, expDate: string, description: string, createdAt: string, updatedAt: string, salary: string, companyProfileId: number } };

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', user?: Maybe<{ __typename?: 'User', id: number, username: string, email: string, user_type: string }>, errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>> } };

export type GetCompanyUserDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompanyUserDetailsQuery = { __typename?: 'Query', getCompanyUserDetails: { __typename?: 'CompanyProfile', id: number, name: string, website: string, location: string, logo: string, description: string } };

export type GetCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompaniesQuery = { __typename?: 'Query', getCompanies?: Maybe<Array<{ __typename?: 'CompanyProfile', id: number, name: string, location: string, website: string, phone: string, logo: string, description: string, createdAt: string }>> };

export type GetCompanyByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetCompanyByIdQuery = { __typename?: 'Query', getCompanyById?: Maybe<{ __typename?: 'companyDetails', details?: Maybe<{ __typename?: 'CompanyProfile', id: number, name: string, location: string, phone: string, logo: string, description: string, website: string }>, jobs?: Maybe<Array<{ __typename?: 'Job', title: string, id: number, salary: string, location: string, category: string, description: string, imgUrl: string, companyProfileId: number, createdAt: string }>> }> };

export type GetJobByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetJobByIdQuery = { __typename?: 'Query', getJobById?: Maybe<{ __typename?: 'Job', id: number, title: string, location: string, category: string, description: string, imgUrl: string, createdAt: string, salary: string, expDate: string, company: { __typename?: 'CompanyProfile', id: number, name: string, website: string, logo: string, phone: string, description: string } }> };

export type GetJobsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type GetJobsQuery = { __typename?: 'Query', getJobs?: Maybe<{ __typename?: 'PaginatedJobs', hasMore: boolean, jobs: Array<{ __typename?: 'Job', id: number, title: string, location: string, category: string, expDate: string, description: string, imgUrl: string, salary: string, createdAt: string, company: { __typename?: 'CompanyProfile', name: string, website: string, phone: string } }> }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: Maybe<{ __typename?: 'User', id: number, username: string, email: string, user_type: string }> };


export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    errors {
      field
      message
    }
    user {
      username
      email
      user_type
    }
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateCompanyProfileDocument = gql`
    mutation CreateCompanyProfile($data: companyProfileInput!) {
  createCompanyProfile(data: $data) {
    id
    name
    website
    location
    phone
    logo
    description
    createdAt
    updatedAt
  }
}
    `;
export type CreateCompanyProfileMutationFn = Apollo.MutationFunction<CreateCompanyProfileMutation, CreateCompanyProfileMutationVariables>;

/**
 * __useCreateCompanyProfileMutation__
 *
 * To run a mutation, you first call `useCreateCompanyProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyProfileMutation, { data, loading, error }] = useCreateCompanyProfileMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCompanyProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateCompanyProfileMutation, CreateCompanyProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCompanyProfileMutation, CreateCompanyProfileMutationVariables>(CreateCompanyProfileDocument, options);
      }
export type CreateCompanyProfileMutationHookResult = ReturnType<typeof useCreateCompanyProfileMutation>;
export type CreateCompanyProfileMutationResult = Apollo.MutationResult<CreateCompanyProfileMutation>;
export type CreateCompanyProfileMutationOptions = Apollo.BaseMutationOptions<CreateCompanyProfileMutation, CreateCompanyProfileMutationVariables>;
export const FileUploadDocument = gql`
    mutation FileUpload($imgUrl: Upload!) {
  fileUpload(imgUrl: $imgUrl) {
    url
  }
}
    `;
export type FileUploadMutationFn = Apollo.MutationFunction<FileUploadMutation, FileUploadMutationVariables>;

/**
 * __useFileUploadMutation__
 *
 * To run a mutation, you first call `useFileUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFileUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fileUploadMutation, { data, loading, error }] = useFileUploadMutation({
 *   variables: {
 *      imgUrl: // value for 'imgUrl'
 *   },
 * });
 */
export function useFileUploadMutation(baseOptions?: Apollo.MutationHookOptions<FileUploadMutation, FileUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FileUploadMutation, FileUploadMutationVariables>(FileUploadDocument, options);
      }
export type FileUploadMutationHookResult = ReturnType<typeof useFileUploadMutation>;
export type FileUploadMutationResult = Apollo.MutationResult<FileUploadMutation>;
export type FileUploadMutationOptions = Apollo.BaseMutationOptions<FileUploadMutation, FileUploadMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    user {
      username
      email
      id
      user_type
    }
    errors {
      field
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const PostJobDocument = gql`
    mutation PostJob($data: jobInput!) {
  postJob(data: $data) {
    id
    title
    category
    location
    expDate
    description
    createdAt
    updatedAt
    salary
    expDate
    companyProfileId
  }
}
    `;
export type PostJobMutationFn = Apollo.MutationFunction<PostJobMutation, PostJobMutationVariables>;

/**
 * __usePostJobMutation__
 *
 * To run a mutation, you first call `usePostJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postJobMutation, { data, loading, error }] = usePostJobMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function usePostJobMutation(baseOptions?: Apollo.MutationHookOptions<PostJobMutation, PostJobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostJobMutation, PostJobMutationVariables>(PostJobDocument, options);
      }
export type PostJobMutationHookResult = ReturnType<typeof usePostJobMutation>;
export type PostJobMutationResult = Apollo.MutationResult<PostJobMutation>;
export type PostJobMutationOptions = Apollo.BaseMutationOptions<PostJobMutation, PostJobMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    user {
      id
      username
      email
      user_type
    }
    errors {
      field
      message
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetCompanyUserDetailsDocument = gql`
    query GetCompanyUserDetails {
  getCompanyUserDetails {
    id
    name
    website
    location
    logo
    description
  }
}
    `;

/**
 * __useGetCompanyUserDetailsQuery__
 *
 * To run a query within a React component, call `useGetCompanyUserDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyUserDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyUserDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompanyUserDetailsQuery(baseOptions?: Apollo.QueryHookOptions<GetCompanyUserDetailsQuery, GetCompanyUserDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompanyUserDetailsQuery, GetCompanyUserDetailsQueryVariables>(GetCompanyUserDetailsDocument, options);
      }
export function useGetCompanyUserDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyUserDetailsQuery, GetCompanyUserDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompanyUserDetailsQuery, GetCompanyUserDetailsQueryVariables>(GetCompanyUserDetailsDocument, options);
        }
export type GetCompanyUserDetailsQueryHookResult = ReturnType<typeof useGetCompanyUserDetailsQuery>;
export type GetCompanyUserDetailsLazyQueryHookResult = ReturnType<typeof useGetCompanyUserDetailsLazyQuery>;
export type GetCompanyUserDetailsQueryResult = Apollo.QueryResult<GetCompanyUserDetailsQuery, GetCompanyUserDetailsQueryVariables>;
export const GetCompaniesDocument = gql`
    query getCompanies {
  getCompanies {
    id
    name
    location
    website
    phone
    logo
    description
    createdAt
  }
}
    `;

/**
 * __useGetCompaniesQuery__
 *
 * To run a query within a React component, call `useGetCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompaniesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<GetCompaniesQuery, GetCompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, options);
      }
export function useGetCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompaniesQuery, GetCompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, options);
        }
export type GetCompaniesQueryHookResult = ReturnType<typeof useGetCompaniesQuery>;
export type GetCompaniesLazyQueryHookResult = ReturnType<typeof useGetCompaniesLazyQuery>;
export type GetCompaniesQueryResult = Apollo.QueryResult<GetCompaniesQuery, GetCompaniesQueryVariables>;
export const GetCompanyByIdDocument = gql`
    query GetCompanyById($id: Int!) {
  getCompanyById(id: $id) {
    details {
      id
      name
      location
      phone
      logo
      description
      website
    }
    jobs {
      title
      id
      salary
      location
      category
      salary
      description
      imgUrl
      companyProfileId
      createdAt
    }
  }
}
    `;

/**
 * __useGetCompanyByIdQuery__
 *
 * To run a query within a React component, call `useGetCompanyByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCompanyByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCompanyByIdQuery, GetCompanyByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompanyByIdQuery, GetCompanyByIdQueryVariables>(GetCompanyByIdDocument, options);
      }
export function useGetCompanyByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyByIdQuery, GetCompanyByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompanyByIdQuery, GetCompanyByIdQueryVariables>(GetCompanyByIdDocument, options);
        }
export type GetCompanyByIdQueryHookResult = ReturnType<typeof useGetCompanyByIdQuery>;
export type GetCompanyByIdLazyQueryHookResult = ReturnType<typeof useGetCompanyByIdLazyQuery>;
export type GetCompanyByIdQueryResult = Apollo.QueryResult<GetCompanyByIdQuery, GetCompanyByIdQueryVariables>;
export const GetJobByIdDocument = gql`
    query GetJobById($id: Int!) {
  getJobById(id: $id) {
    id
    title
    location
    category
    description
    imgUrl
    createdAt
    salary
    expDate
    company {
      id
      name
      website
      logo
      phone
      description
    }
  }
}
    `;

/**
 * __useGetJobByIdQuery__
 *
 * To run a query within a React component, call `useGetJobByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetJobByIdQuery(baseOptions: Apollo.QueryHookOptions<GetJobByIdQuery, GetJobByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobByIdQuery, GetJobByIdQueryVariables>(GetJobByIdDocument, options);
      }
export function useGetJobByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobByIdQuery, GetJobByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobByIdQuery, GetJobByIdQueryVariables>(GetJobByIdDocument, options);
        }
export type GetJobByIdQueryHookResult = ReturnType<typeof useGetJobByIdQuery>;
export type GetJobByIdLazyQueryHookResult = ReturnType<typeof useGetJobByIdLazyQuery>;
export type GetJobByIdQueryResult = Apollo.QueryResult<GetJobByIdQuery, GetJobByIdQueryVariables>;
export const GetJobsDocument = gql`
    query getJobs($limit: Int!, $cursor: String) {
  getJobs(limit: $limit, cursor: $cursor) {
    jobs {
      id
      title
      location
      category
      expDate
      description
      imgUrl
      salary
      createdAt
      company {
        name
        website
        phone
      }
    }
    hasMore
  }
}
    `;

/**
 * __useGetJobsQuery__
 *
 * To run a query within a React component, call `useGetJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useGetJobsQuery(baseOptions: Apollo.QueryHookOptions<GetJobsQuery, GetJobsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobsQuery, GetJobsQueryVariables>(GetJobsDocument, options);
      }
export function useGetJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobsQuery, GetJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobsQuery, GetJobsQueryVariables>(GetJobsDocument, options);
        }
export type GetJobsQueryHookResult = ReturnType<typeof useGetJobsQuery>;
export type GetJobsLazyQueryHookResult = ReturnType<typeof useGetJobsLazyQuery>;
export type GetJobsQueryResult = Apollo.QueryResult<GetJobsQuery, GetJobsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    username
    email
    user_type
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;