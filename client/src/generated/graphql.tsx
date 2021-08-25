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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Application = {
  __typename?: 'Application';
  appication_date: Scalars['DateTime'];
  updatedAt: Scalars['String'];
  userId?: Maybe<Scalars['Float']>;
  jobId?: Maybe<Scalars['Float']>;
};

export type CompanyProfile = {
  __typename?: 'CompanyProfile';
  id: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  founded_date?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  jobs: Array<Job>;
};


export type Education = {
  __typename?: 'Education';
  id: Scalars['Float'];
  school: Scalars['String'];
  degree: Scalars['String'];
  field: Scalars['String'];
  start_date?: Maybe<Scalars['String']>;
  jobSeekerId: Scalars['Int'];
  end_date?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type EducationInput = {
  school?: Maybe<Scalars['String']>;
  degree?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['String']>;
  jobSeekerId: Scalars['Int'];
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

export type JsProfileInput = {
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  about_me?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  profile_pic?: Maybe<Scalars['String']>;
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
  createdDate: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Float'];
  company: CompanyProfile;
  applications: Array<Application>;
  userApplications: Array<Application>;
};

export type JobSeeker = {
  __typename?: 'JobSeeker';
  id: Scalars['Float'];
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  about_me?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  profile_pic?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Float']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
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
  updateCompanyProfile: CompanyProfile;
  fileUpload: ImageUrl;
  postJob: Job;
  updateJob: Job;
  deleteJob: Scalars['Boolean'];
  apply: Application;
  createJSProfile: JobSeeker;
  updateJSProfile: JobSeeker;
  addEducation: Education;
  updateEducation: Education;
  deleteEducation: Scalars['Boolean'];
  addWork: Work;
  updateWork: Work;
  deleteWork: Scalars['Boolean'];
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


export type MutationUpdateCompanyProfileArgs = {
  id: Scalars['Int'];
  data: CompanyProfileInput;
};


export type MutationFileUploadArgs = {
  imgUrl: Scalars['Upload'];
};


export type MutationPostJobArgs = {
  data: JobInput;
};


export type MutationUpdateJobArgs = {
  id: Scalars['Int'];
  data: JobInput;
};


export type MutationDeleteJobArgs = {
  id: Scalars['Int'];
};


export type MutationApplyArgs = {
  jobId: Scalars['Int'];
};


export type MutationCreateJsProfileArgs = {
  data: JsProfileInput;
};


export type MutationUpdateJsProfileArgs = {
  id: Scalars['Int'];
  data: JsProfileInput;
};


export type MutationAddEducationArgs = {
  data: EducationInput;
};


export type MutationUpdateEducationArgs = {
  id: Scalars['Int'];
  data: EducationInput;
};


export type MutationDeleteEducationArgs = {
  id: Scalars['Int'];
};


export type MutationAddWorkArgs = {
  data: WorkInput;
};


export type MutationUpdateWorkArgs = {
  id: Scalars['Int'];
  data: WorkInput;
};


export type MutationDeleteWorkArgs = {
  id: Scalars['Int'];
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
  getCompanyProfile: CompanyProfile;
  getCompanyById?: Maybe<CompanyProfile>;
  getCompanyJobs: Array<Job>;
  getCompanies?: Maybe<Array<CompanyProfile>>;
  job: Scalars['String'];
  getJobById?: Maybe<Job>;
  getJobs?: Maybe<PaginatedJobs>;
  searchJobs?: Maybe<Array<Job>>;
  jobSeeker: Scalars['String'];
  getJSProfile: JobSeeker;
  getAllJSProfile: Array<JobSeeker>;
  getAllEducation: Array<Education>;
  getEducationbyId: Education;
  getAllWork: Array<Work>;
  getWorkbyId: Work;
  application: Scalars['String'];
  getApplicantJobs?: Maybe<Array<Job>>;
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


export type QuerySearchJobsArgs = {
  input: SearchInput;
};


export type QueryGetAllEducationArgs = {
  jsId: Scalars['Int'];
};


export type QueryGetEducationbyIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetAllWorkArgs = {
  jsId: Scalars['Int'];
};


export type QueryGetWorkbyIdArgs = {
  id: Scalars['Int'];
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

export type Work = {
  __typename?: 'Work';
  id: Scalars['Float'];
  company_name: Scalars['String'];
  position: Scalars['String'];
  field: Scalars['String'];
  jobSeekerId: Scalars['Float'];
  start_date?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type WorkInput = {
  company_name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['String']>;
  jobSeekerId: Scalars['Float'];
};

export type CompanyProfileInput = {
  name?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  founded_date?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type JobInput = {
  title?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  expDate?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
};

export type SearchInput = {
  title?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
};

export type ApplyMutationVariables = Exact<{
  jobId: Scalars['Int'];
}>;


export type ApplyMutation = { __typename?: 'Mutation', apply: { __typename?: 'Application', appication_date: any, userId?: Maybe<number>, jobId?: Maybe<number>, updatedAt: string } };

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', username: string, email: string, user_type: string }> } };

export type CreateJsProfileMutationVariables = Exact<{
  data: JsProfileInput;
}>;


export type CreateJsProfileMutation = { __typename?: 'Mutation', createJSProfile: { __typename?: 'JobSeeker', first_name?: Maybe<string>, last_name?: Maybe<string>, about_me?: Maybe<string>, profile_pic?: Maybe<string>, userId?: Maybe<number>, email?: Maybe<string> } };

export type CreateCompanyProfileMutationVariables = Exact<{
  data: CompanyProfileInput;
}>;


export type CreateCompanyProfileMutation = { __typename?: 'Mutation', createCompanyProfile: { __typename?: 'CompanyProfile', id: number, name?: Maybe<string>, website?: Maybe<string>, location?: Maybe<string>, phone?: Maybe<string>, logo?: Maybe<string>, founded_date?: Maybe<string>, description?: Maybe<string>, createdAt: string, updatedAt: string } };

export type UpdateCompanyProfileMutationVariables = Exact<{
  id: Scalars['Int'];
  data: CompanyProfileInput;
}>;


export type UpdateCompanyProfileMutation = { __typename?: 'Mutation', updateCompanyProfile: { __typename?: 'CompanyProfile', id: number, name?: Maybe<string>, location?: Maybe<string>, website?: Maybe<string>, phone?: Maybe<string>, logo?: Maybe<string>, description?: Maybe<string>, email?: Maybe<string>, createdAt: string, updatedAt: string, founded_date?: Maybe<string> } };

export type DeleteJobMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteJobMutation = { __typename?: 'Mutation', deleteJob: boolean };

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


export type PostJobMutation = { __typename?: 'Mutation', postJob: { __typename?: 'Job', id: number, title: string, category: string, location: string, expDate: string, description: string, createdAt: string, updatedAt: any, salary: string, userId: number } };

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', user?: Maybe<{ __typename?: 'User', id: number, username: string, email: string, user_type: string }>, errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>> } };

export type UpdateJsProfileMutationVariables = Exact<{
  id: Scalars['Int'];
  data: JsProfileInput;
}>;


export type UpdateJsProfileMutation = { __typename?: 'Mutation', updateJSProfile: { __typename?: 'JobSeeker', first_name?: Maybe<string>, last_name?: Maybe<string>, about_me?: Maybe<string>, profile_pic?: Maybe<string>, userId?: Maybe<number>, email?: Maybe<string> } };

export type GetAllJsProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllJsProfileQuery = { __typename?: 'Query', getAllJSProfile: Array<{ __typename?: 'JobSeeker', first_name?: Maybe<string>, last_name?: Maybe<string>, profile_pic?: Maybe<string>, about_me?: Maybe<string>, email?: Maybe<string>, id: number, headline?: Maybe<string> }> };

export type GetApplicantJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetApplicantJobsQuery = { __typename?: 'Query', getApplicantJobs?: Maybe<Array<{ __typename?: 'Job', id: number, title: string, location: string, category: string, salary: string, description: string, imgUrl: string, expDate: string, createdDate: any, updatedAt: any, userApplications: Array<{ __typename?: 'Application', appication_date: any, userId?: Maybe<number> }>, company: { __typename?: 'CompanyProfile', name?: Maybe<string>, location?: Maybe<string>, logo?: Maybe<string> } }>> };

export type GetCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompaniesQuery = { __typename?: 'Query', getCompanies?: Maybe<Array<{ __typename?: 'CompanyProfile', id: number, name?: Maybe<string>, location?: Maybe<string>, website?: Maybe<string>, phone?: Maybe<string>, logo?: Maybe<string>, description?: Maybe<string>, createdAt: string }>> };

export type GetCompanyByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetCompanyByIdQuery = { __typename?: 'Query', getCompanyById?: Maybe<{ __typename?: 'CompanyProfile', id: number, name?: Maybe<string>, location?: Maybe<string>, phone?: Maybe<string>, logo?: Maybe<string>, description?: Maybe<string>, website?: Maybe<string>, email?: Maybe<string>, jobs: Array<{ __typename?: 'Job', id: number, title: string, location: string, category: string, salary: string, expDate: string, description: string, createdAt: string, imgUrl: string }> }> };

export type GetCompanyJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompanyJobsQuery = { __typename?: 'Query', getCompanyJobs: Array<{ __typename?: 'Job', id: number, title: string, location: string, category: string, salary: string, expDate: string, description: string, imgUrl: string, userId: number, createdDate: any, updatedAt: any, applications: Array<{ __typename?: 'Application', userId?: Maybe<number>, jobId?: Maybe<number>, appication_date: any }>, company: { __typename?: 'CompanyProfile', name?: Maybe<string> } }> };

export type GetCompanyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompanyProfileQuery = { __typename?: 'Query', getCompanyProfile: { __typename?: 'CompanyProfile', id: number, name?: Maybe<string>, email?: Maybe<string>, location?: Maybe<string>, website?: Maybe<string>, phone?: Maybe<string>, logo?: Maybe<string>, description?: Maybe<string>, founded_date?: Maybe<string>, createdAt: string, updatedAt: string } };

export type GetJsProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJsProfileQuery = { __typename?: 'Query', getJSProfile: { __typename?: 'JobSeeker', id: number, first_name?: Maybe<string>, last_name?: Maybe<string>, about_me?: Maybe<string>, profile_pic?: Maybe<string>, userId?: Maybe<number>, email?: Maybe<string>, headline?: Maybe<string> } };

export type GetJobByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetJobByIdQuery = { __typename?: 'Query', getJobById?: Maybe<{ __typename?: 'Job', id: number, title: string, location: string, category: string, description: string, imgUrl: string, createdAt: string, salary: string, expDate: string, createdDate: any, applications: Array<{ __typename?: 'Application', userId?: Maybe<number>, jobId?: Maybe<number>, appication_date: any }>, company: { __typename?: 'CompanyProfile', id: number, name?: Maybe<string>, website?: Maybe<string>, logo?: Maybe<string>, phone?: Maybe<string>, description?: Maybe<string> } }> };

export type GetJobsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type GetJobsQuery = { __typename?: 'Query', getJobs?: Maybe<{ __typename?: 'PaginatedJobs', hasMore: boolean, jobs: Array<{ __typename?: 'Job', id: number, title: string, location: string, category: string, expDate: string, description: string, imgUrl: string, salary: string, createdAt: string, createdDate: any, company: { __typename?: 'CompanyProfile', name?: Maybe<string>, website?: Maybe<string>, phone?: Maybe<string> } }> }> };

export type EducationDetailsFragment = { __typename?: 'Education', id: number, school: string, degree: string, field: string, start_date?: Maybe<string>, end_date?: Maybe<string>, jobSeekerId: number };

export type AddEducationMutationVariables = Exact<{
  data: EducationInput;
}>;


export type AddEducationMutation = { __typename?: 'Mutation', addEducation: { __typename?: 'Education', id: number, school: string, degree: string, field: string, start_date?: Maybe<string>, end_date?: Maybe<string>, jobSeekerId: number } };

export type UpdateEducationMutationVariables = Exact<{
  data: EducationInput;
  id: Scalars['Int'];
}>;


export type UpdateEducationMutation = { __typename?: 'Mutation', updateEducation: { __typename?: 'Education', id: number, school: string, degree: string, field: string, start_date?: Maybe<string>, end_date?: Maybe<string>, jobSeekerId: number } };

export type DeleteEducationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteEducationMutation = { __typename?: 'Mutation', deleteEducation: boolean };

export type GetAllEducationQueryVariables = Exact<{
  jsId: Scalars['Int'];
}>;


export type GetAllEducationQuery = { __typename?: 'Query', getAllEducation: Array<{ __typename?: 'Education', id: number, school: string, degree: string, field: string, start_date?: Maybe<string>, end_date?: Maybe<string>, jobSeekerId: number }> };

export type GetEducationbyIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetEducationbyIdQuery = { __typename?: 'Query', getEducationbyId: { __typename?: 'Education', id: number, school: string, degree: string, field: string, start_date?: Maybe<string>, end_date?: Maybe<string>, jobSeekerId: number } };

export type WorkDetailsFragment = { __typename?: 'Work', id: number, company_name: string, position: string, field: string, jobSeekerId: number, start_date?: Maybe<string>, end_date?: Maybe<string> };

export type AddWorkMutationVariables = Exact<{
  data: WorkInput;
}>;


export type AddWorkMutation = { __typename?: 'Mutation', addWork: { __typename?: 'Work', id: number, company_name: string, position: string, field: string, jobSeekerId: number, start_date?: Maybe<string>, end_date?: Maybe<string> } };

export type UpdateWorkMutationVariables = Exact<{
  data: WorkInput;
  id: Scalars['Int'];
}>;


export type UpdateWorkMutation = { __typename?: 'Mutation', updateWork: { __typename?: 'Work', id: number, company_name: string, position: string, field: string, jobSeekerId: number, start_date?: Maybe<string>, end_date?: Maybe<string> } };

export type DeleteWorkMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteWorkMutation = { __typename?: 'Mutation', deleteWork: boolean };

export type GetAllWorkQueryVariables = Exact<{
  jsId: Scalars['Int'];
}>;


export type GetAllWorkQuery = { __typename?: 'Query', getAllWork: Array<{ __typename?: 'Work', id: number, company_name: string, position: string, field: string, jobSeekerId: number, start_date?: Maybe<string>, end_date?: Maybe<string> }> };

export type GetWorkbyIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetWorkbyIdQuery = { __typename?: 'Query', getWorkbyId: { __typename?: 'Work', id: number, company_name: string, position: string, field: string, jobSeekerId: number, start_date?: Maybe<string>, end_date?: Maybe<string> } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: Maybe<{ __typename?: 'User', id: number, username: string, email: string, user_type: string }> };

export type SearchJobsQueryVariables = Exact<{
  input: SearchInput;
}>;


export type SearchJobsQuery = { __typename?: 'Query', searchJobs?: Maybe<Array<{ __typename?: 'Job', id: number, title: string, location: string, category: string, salary: string, description: string, imgUrl: string, company: { __typename?: 'CompanyProfile', id: number, name?: Maybe<string>, website?: Maybe<string>, phone?: Maybe<string>, logo?: Maybe<string>, location?: Maybe<string> } }>> };

export const EducationDetailsFragmentDoc = gql`
    fragment educationDetails on Education {
  id
  school
  degree
  field
  start_date
  end_date
  jobSeekerId
}
    `;
export const WorkDetailsFragmentDoc = gql`
    fragment workDetails on Work {
  id
  company_name
  position
  field
  jobSeekerId
  start_date
  end_date
}
    `;
export const ApplyDocument = gql`
    mutation Apply($jobId: Int!) {
  apply(jobId: $jobId) {
    appication_date
    userId
    jobId
    updatedAt
  }
}
    `;
export type ApplyMutationFn = Apollo.MutationFunction<ApplyMutation, ApplyMutationVariables>;

/**
 * __useApplyMutation__
 *
 * To run a mutation, you first call `useApplyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApplyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [applyMutation, { data, loading, error }] = useApplyMutation({
 *   variables: {
 *      jobId: // value for 'jobId'
 *   },
 * });
 */
export function useApplyMutation(baseOptions?: Apollo.MutationHookOptions<ApplyMutation, ApplyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ApplyMutation, ApplyMutationVariables>(ApplyDocument, options);
      }
export type ApplyMutationHookResult = ReturnType<typeof useApplyMutation>;
export type ApplyMutationResult = Apollo.MutationResult<ApplyMutation>;
export type ApplyMutationOptions = Apollo.BaseMutationOptions<ApplyMutation, ApplyMutationVariables>;
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
export const CreateJsProfileDocument = gql`
    mutation createJSProfile($data: JSProfileInput!) {
  createJSProfile(data: $data) {
    first_name
    last_name
    about_me
    profile_pic
    userId
    email
  }
}
    `;
export type CreateJsProfileMutationFn = Apollo.MutationFunction<CreateJsProfileMutation, CreateJsProfileMutationVariables>;

/**
 * __useCreateJsProfileMutation__
 *
 * To run a mutation, you first call `useCreateJsProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJsProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJsProfileMutation, { data, loading, error }] = useCreateJsProfileMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateJsProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateJsProfileMutation, CreateJsProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateJsProfileMutation, CreateJsProfileMutationVariables>(CreateJsProfileDocument, options);
      }
export type CreateJsProfileMutationHookResult = ReturnType<typeof useCreateJsProfileMutation>;
export type CreateJsProfileMutationResult = Apollo.MutationResult<CreateJsProfileMutation>;
export type CreateJsProfileMutationOptions = Apollo.BaseMutationOptions<CreateJsProfileMutation, CreateJsProfileMutationVariables>;
export const CreateCompanyProfileDocument = gql`
    mutation CreateCompanyProfile($data: companyProfileInput!) {
  createCompanyProfile(data: $data) {
    id
    name
    website
    location
    phone
    logo
    founded_date
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
export const UpdateCompanyProfileDocument = gql`
    mutation updateCompanyProfile($id: Int!, $data: companyProfileInput!) {
  updateCompanyProfile(id: $id, data: $data) {
    id
    name
    location
    website
    phone
    logo
    description
    email
    createdAt
    updatedAt
    founded_date
  }
}
    `;
export type UpdateCompanyProfileMutationFn = Apollo.MutationFunction<UpdateCompanyProfileMutation, UpdateCompanyProfileMutationVariables>;

/**
 * __useUpdateCompanyProfileMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyProfileMutation, { data, loading, error }] = useUpdateCompanyProfileMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCompanyProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCompanyProfileMutation, UpdateCompanyProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCompanyProfileMutation, UpdateCompanyProfileMutationVariables>(UpdateCompanyProfileDocument, options);
      }
export type UpdateCompanyProfileMutationHookResult = ReturnType<typeof useUpdateCompanyProfileMutation>;
export type UpdateCompanyProfileMutationResult = Apollo.MutationResult<UpdateCompanyProfileMutation>;
export type UpdateCompanyProfileMutationOptions = Apollo.BaseMutationOptions<UpdateCompanyProfileMutation, UpdateCompanyProfileMutationVariables>;
export const DeleteJobDocument = gql`
    mutation deleteJob($id: Int!) {
  deleteJob(id: $id)
}
    `;
export type DeleteJobMutationFn = Apollo.MutationFunction<DeleteJobMutation, DeleteJobMutationVariables>;

/**
 * __useDeleteJobMutation__
 *
 * To run a mutation, you first call `useDeleteJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteJobMutation, { data, loading, error }] = useDeleteJobMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteJobMutation(baseOptions?: Apollo.MutationHookOptions<DeleteJobMutation, DeleteJobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteJobMutation, DeleteJobMutationVariables>(DeleteJobDocument, options);
      }
export type DeleteJobMutationHookResult = ReturnType<typeof useDeleteJobMutation>;
export type DeleteJobMutationResult = Apollo.MutationResult<DeleteJobMutation>;
export type DeleteJobMutationOptions = Apollo.BaseMutationOptions<DeleteJobMutation, DeleteJobMutationVariables>;
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
    userId
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
export const UpdateJsProfileDocument = gql`
    mutation updateJsProfile($id: Int!, $data: JSProfileInput!) {
  updateJSProfile(id: $id, data: $data) {
    first_name
    last_name
    about_me
    profile_pic
    userId
    email
  }
}
    `;
export type UpdateJsProfileMutationFn = Apollo.MutationFunction<UpdateJsProfileMutation, UpdateJsProfileMutationVariables>;

/**
 * __useUpdateJsProfileMutation__
 *
 * To run a mutation, you first call `useUpdateJsProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJsProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateJsProfileMutation, { data, loading, error }] = useUpdateJsProfileMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateJsProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateJsProfileMutation, UpdateJsProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateJsProfileMutation, UpdateJsProfileMutationVariables>(UpdateJsProfileDocument, options);
      }
export type UpdateJsProfileMutationHookResult = ReturnType<typeof useUpdateJsProfileMutation>;
export type UpdateJsProfileMutationResult = Apollo.MutationResult<UpdateJsProfileMutation>;
export type UpdateJsProfileMutationOptions = Apollo.BaseMutationOptions<UpdateJsProfileMutation, UpdateJsProfileMutationVariables>;
export const GetAllJsProfileDocument = gql`
    query getAllJSProfile {
  getAllJSProfile {
    first_name
    last_name
    profile_pic
    about_me
    email
    id
    headline
  }
}
    `;

/**
 * __useGetAllJsProfileQuery__
 *
 * To run a query within a React component, call `useGetAllJsProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllJsProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllJsProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllJsProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetAllJsProfileQuery, GetAllJsProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllJsProfileQuery, GetAllJsProfileQueryVariables>(GetAllJsProfileDocument, options);
      }
export function useGetAllJsProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllJsProfileQuery, GetAllJsProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllJsProfileQuery, GetAllJsProfileQueryVariables>(GetAllJsProfileDocument, options);
        }
export type GetAllJsProfileQueryHookResult = ReturnType<typeof useGetAllJsProfileQuery>;
export type GetAllJsProfileLazyQueryHookResult = ReturnType<typeof useGetAllJsProfileLazyQuery>;
export type GetAllJsProfileQueryResult = Apollo.QueryResult<GetAllJsProfileQuery, GetAllJsProfileQueryVariables>;
export const GetApplicantJobsDocument = gql`
    query getApplicantJobs {
  getApplicantJobs {
    id
    title
    location
    category
    salary
    description
    imgUrl
    expDate
    createdDate
    updatedAt
    userApplications {
      appication_date
      userId
    }
    company {
      name
      location
      logo
    }
  }
}
    `;

/**
 * __useGetApplicantJobsQuery__
 *
 * To run a query within a React component, call `useGetApplicantJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicantJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicantJobsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetApplicantJobsQuery(baseOptions?: Apollo.QueryHookOptions<GetApplicantJobsQuery, GetApplicantJobsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetApplicantJobsQuery, GetApplicantJobsQueryVariables>(GetApplicantJobsDocument, options);
      }
export function useGetApplicantJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetApplicantJobsQuery, GetApplicantJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetApplicantJobsQuery, GetApplicantJobsQueryVariables>(GetApplicantJobsDocument, options);
        }
export type GetApplicantJobsQueryHookResult = ReturnType<typeof useGetApplicantJobsQuery>;
export type GetApplicantJobsLazyQueryHookResult = ReturnType<typeof useGetApplicantJobsLazyQuery>;
export type GetApplicantJobsQueryResult = Apollo.QueryResult<GetApplicantJobsQuery, GetApplicantJobsQueryVariables>;
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
    id
    name
    location
    phone
    logo
    description
    website
    email
    jobs {
      id
      title
      location
      category
      salary
      expDate
      description
      createdAt
      expDate
      imgUrl
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
export const GetCompanyJobsDocument = gql`
    query getCompanyJobs {
  getCompanyJobs {
    id
    title
    location
    category
    salary
    expDate
    description
    imgUrl
    userId
    createdDate
    updatedAt
    applications {
      userId
      jobId
      appication_date
    }
    company {
      name
    }
  }
}
    `;

/**
 * __useGetCompanyJobsQuery__
 *
 * To run a query within a React component, call `useGetCompanyJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyJobsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompanyJobsQuery(baseOptions?: Apollo.QueryHookOptions<GetCompanyJobsQuery, GetCompanyJobsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompanyJobsQuery, GetCompanyJobsQueryVariables>(GetCompanyJobsDocument, options);
      }
export function useGetCompanyJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyJobsQuery, GetCompanyJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompanyJobsQuery, GetCompanyJobsQueryVariables>(GetCompanyJobsDocument, options);
        }
export type GetCompanyJobsQueryHookResult = ReturnType<typeof useGetCompanyJobsQuery>;
export type GetCompanyJobsLazyQueryHookResult = ReturnType<typeof useGetCompanyJobsLazyQuery>;
export type GetCompanyJobsQueryResult = Apollo.QueryResult<GetCompanyJobsQuery, GetCompanyJobsQueryVariables>;
export const GetCompanyProfileDocument = gql`
    query getCompanyProfile {
  getCompanyProfile {
    id
    name
    email
    location
    website
    phone
    logo
    description
    founded_date
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetCompanyProfileQuery__
 *
 * To run a query within a React component, call `useGetCompanyProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompanyProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetCompanyProfileQuery, GetCompanyProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompanyProfileQuery, GetCompanyProfileQueryVariables>(GetCompanyProfileDocument, options);
      }
export function useGetCompanyProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyProfileQuery, GetCompanyProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompanyProfileQuery, GetCompanyProfileQueryVariables>(GetCompanyProfileDocument, options);
        }
export type GetCompanyProfileQueryHookResult = ReturnType<typeof useGetCompanyProfileQuery>;
export type GetCompanyProfileLazyQueryHookResult = ReturnType<typeof useGetCompanyProfileLazyQuery>;
export type GetCompanyProfileQueryResult = Apollo.QueryResult<GetCompanyProfileQuery, GetCompanyProfileQueryVariables>;
export const GetJsProfileDocument = gql`
    query getJSProfile {
  getJSProfile {
    id
    first_name
    last_name
    about_me
    profile_pic
    userId
    email
    headline
  }
}
    `;

/**
 * __useGetJsProfileQuery__
 *
 * To run a query within a React component, call `useGetJsProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJsProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJsProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetJsProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetJsProfileQuery, GetJsProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJsProfileQuery, GetJsProfileQueryVariables>(GetJsProfileDocument, options);
      }
export function useGetJsProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJsProfileQuery, GetJsProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJsProfileQuery, GetJsProfileQueryVariables>(GetJsProfileDocument, options);
        }
export type GetJsProfileQueryHookResult = ReturnType<typeof useGetJsProfileQuery>;
export type GetJsProfileLazyQueryHookResult = ReturnType<typeof useGetJsProfileLazyQuery>;
export type GetJsProfileQueryResult = Apollo.QueryResult<GetJsProfileQuery, GetJsProfileQueryVariables>;
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
    createdDate
    applications {
      userId
      jobId
      appication_date
    }
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
      createdDate
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
export const AddEducationDocument = gql`
    mutation AddEducation($data: EducationInput!) {
  addEducation(data: $data) {
    ...educationDetails
  }
}
    ${EducationDetailsFragmentDoc}`;
export type AddEducationMutationFn = Apollo.MutationFunction<AddEducationMutation, AddEducationMutationVariables>;

/**
 * __useAddEducationMutation__
 *
 * To run a mutation, you first call `useAddEducationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddEducationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addEducationMutation, { data, loading, error }] = useAddEducationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddEducationMutation(baseOptions?: Apollo.MutationHookOptions<AddEducationMutation, AddEducationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddEducationMutation, AddEducationMutationVariables>(AddEducationDocument, options);
      }
export type AddEducationMutationHookResult = ReturnType<typeof useAddEducationMutation>;
export type AddEducationMutationResult = Apollo.MutationResult<AddEducationMutation>;
export type AddEducationMutationOptions = Apollo.BaseMutationOptions<AddEducationMutation, AddEducationMutationVariables>;
export const UpdateEducationDocument = gql`
    mutation UpdateEducation($data: EducationInput!, $id: Int!) {
  updateEducation(data: $data, id: $id) {
    ...educationDetails
  }
}
    ${EducationDetailsFragmentDoc}`;
export type UpdateEducationMutationFn = Apollo.MutationFunction<UpdateEducationMutation, UpdateEducationMutationVariables>;

/**
 * __useUpdateEducationMutation__
 *
 * To run a mutation, you first call `useUpdateEducationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEducationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEducationMutation, { data, loading, error }] = useUpdateEducationMutation({
 *   variables: {
 *      data: // value for 'data'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateEducationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEducationMutation, UpdateEducationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEducationMutation, UpdateEducationMutationVariables>(UpdateEducationDocument, options);
      }
export type UpdateEducationMutationHookResult = ReturnType<typeof useUpdateEducationMutation>;
export type UpdateEducationMutationResult = Apollo.MutationResult<UpdateEducationMutation>;
export type UpdateEducationMutationOptions = Apollo.BaseMutationOptions<UpdateEducationMutation, UpdateEducationMutationVariables>;
export const DeleteEducationDocument = gql`
    mutation DeleteEducation($id: Int!) {
  deleteEducation(id: $id)
}
    `;
export type DeleteEducationMutationFn = Apollo.MutationFunction<DeleteEducationMutation, DeleteEducationMutationVariables>;

/**
 * __useDeleteEducationMutation__
 *
 * To run a mutation, you first call `useDeleteEducationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEducationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEducationMutation, { data, loading, error }] = useDeleteEducationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEducationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEducationMutation, DeleteEducationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEducationMutation, DeleteEducationMutationVariables>(DeleteEducationDocument, options);
      }
export type DeleteEducationMutationHookResult = ReturnType<typeof useDeleteEducationMutation>;
export type DeleteEducationMutationResult = Apollo.MutationResult<DeleteEducationMutation>;
export type DeleteEducationMutationOptions = Apollo.BaseMutationOptions<DeleteEducationMutation, DeleteEducationMutationVariables>;
export const GetAllEducationDocument = gql`
    query GetAllEducation($jsId: Int!) {
  getAllEducation(jsId: $jsId) {
    ...educationDetails
  }
}
    ${EducationDetailsFragmentDoc}`;

/**
 * __useGetAllEducationQuery__
 *
 * To run a query within a React component, call `useGetAllEducationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllEducationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllEducationQuery({
 *   variables: {
 *      jsId: // value for 'jsId'
 *   },
 * });
 */
export function useGetAllEducationQuery(baseOptions: Apollo.QueryHookOptions<GetAllEducationQuery, GetAllEducationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllEducationQuery, GetAllEducationQueryVariables>(GetAllEducationDocument, options);
      }
export function useGetAllEducationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllEducationQuery, GetAllEducationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllEducationQuery, GetAllEducationQueryVariables>(GetAllEducationDocument, options);
        }
export type GetAllEducationQueryHookResult = ReturnType<typeof useGetAllEducationQuery>;
export type GetAllEducationLazyQueryHookResult = ReturnType<typeof useGetAllEducationLazyQuery>;
export type GetAllEducationQueryResult = Apollo.QueryResult<GetAllEducationQuery, GetAllEducationQueryVariables>;
export const GetEducationbyIdDocument = gql`
    query GetEducationbyId($id: Int!) {
  getEducationbyId(id: $id) {
    ...educationDetails
  }
}
    ${EducationDetailsFragmentDoc}`;

/**
 * __useGetEducationbyIdQuery__
 *
 * To run a query within a React component, call `useGetEducationbyIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEducationbyIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEducationbyIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEducationbyIdQuery(baseOptions: Apollo.QueryHookOptions<GetEducationbyIdQuery, GetEducationbyIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEducationbyIdQuery, GetEducationbyIdQueryVariables>(GetEducationbyIdDocument, options);
      }
export function useGetEducationbyIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEducationbyIdQuery, GetEducationbyIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEducationbyIdQuery, GetEducationbyIdQueryVariables>(GetEducationbyIdDocument, options);
        }
export type GetEducationbyIdQueryHookResult = ReturnType<typeof useGetEducationbyIdQuery>;
export type GetEducationbyIdLazyQueryHookResult = ReturnType<typeof useGetEducationbyIdLazyQuery>;
export type GetEducationbyIdQueryResult = Apollo.QueryResult<GetEducationbyIdQuery, GetEducationbyIdQueryVariables>;
export const AddWorkDocument = gql`
    mutation AddWork($data: WorkInput!) {
  addWork(data: $data) {
    ...workDetails
  }
}
    ${WorkDetailsFragmentDoc}`;
export type AddWorkMutationFn = Apollo.MutationFunction<AddWorkMutation, AddWorkMutationVariables>;

/**
 * __useAddWorkMutation__
 *
 * To run a mutation, you first call `useAddWorkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddWorkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addWorkMutation, { data, loading, error }] = useAddWorkMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddWorkMutation(baseOptions?: Apollo.MutationHookOptions<AddWorkMutation, AddWorkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddWorkMutation, AddWorkMutationVariables>(AddWorkDocument, options);
      }
export type AddWorkMutationHookResult = ReturnType<typeof useAddWorkMutation>;
export type AddWorkMutationResult = Apollo.MutationResult<AddWorkMutation>;
export type AddWorkMutationOptions = Apollo.BaseMutationOptions<AddWorkMutation, AddWorkMutationVariables>;
export const UpdateWorkDocument = gql`
    mutation UpdateWork($data: WorkInput!, $id: Int!) {
  updateWork(data: $data, id: $id) {
    ...workDetails
  }
}
    ${WorkDetailsFragmentDoc}`;
export type UpdateWorkMutationFn = Apollo.MutationFunction<UpdateWorkMutation, UpdateWorkMutationVariables>;

/**
 * __useUpdateWorkMutation__
 *
 * To run a mutation, you first call `useUpdateWorkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkMutation, { data, loading, error }] = useUpdateWorkMutation({
 *   variables: {
 *      data: // value for 'data'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateWorkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWorkMutation, UpdateWorkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWorkMutation, UpdateWorkMutationVariables>(UpdateWorkDocument, options);
      }
export type UpdateWorkMutationHookResult = ReturnType<typeof useUpdateWorkMutation>;
export type UpdateWorkMutationResult = Apollo.MutationResult<UpdateWorkMutation>;
export type UpdateWorkMutationOptions = Apollo.BaseMutationOptions<UpdateWorkMutation, UpdateWorkMutationVariables>;
export const DeleteWorkDocument = gql`
    mutation deleteWork($id: Int!) {
  deleteWork(id: $id)
}
    `;
export type DeleteWorkMutationFn = Apollo.MutationFunction<DeleteWorkMutation, DeleteWorkMutationVariables>;

/**
 * __useDeleteWorkMutation__
 *
 * To run a mutation, you first call `useDeleteWorkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkMutation, { data, loading, error }] = useDeleteWorkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteWorkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWorkMutation, DeleteWorkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWorkMutation, DeleteWorkMutationVariables>(DeleteWorkDocument, options);
      }
export type DeleteWorkMutationHookResult = ReturnType<typeof useDeleteWorkMutation>;
export type DeleteWorkMutationResult = Apollo.MutationResult<DeleteWorkMutation>;
export type DeleteWorkMutationOptions = Apollo.BaseMutationOptions<DeleteWorkMutation, DeleteWorkMutationVariables>;
export const GetAllWorkDocument = gql`
    query GetAllWork($jsId: Int!) {
  getAllWork(jsId: $jsId) {
    ...workDetails
  }
}
    ${WorkDetailsFragmentDoc}`;

/**
 * __useGetAllWorkQuery__
 *
 * To run a query within a React component, call `useGetAllWorkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllWorkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllWorkQuery({
 *   variables: {
 *      jsId: // value for 'jsId'
 *   },
 * });
 */
export function useGetAllWorkQuery(baseOptions: Apollo.QueryHookOptions<GetAllWorkQuery, GetAllWorkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllWorkQuery, GetAllWorkQueryVariables>(GetAllWorkDocument, options);
      }
export function useGetAllWorkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllWorkQuery, GetAllWorkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllWorkQuery, GetAllWorkQueryVariables>(GetAllWorkDocument, options);
        }
export type GetAllWorkQueryHookResult = ReturnType<typeof useGetAllWorkQuery>;
export type GetAllWorkLazyQueryHookResult = ReturnType<typeof useGetAllWorkLazyQuery>;
export type GetAllWorkQueryResult = Apollo.QueryResult<GetAllWorkQuery, GetAllWorkQueryVariables>;
export const GetWorkbyIdDocument = gql`
    query GetWorkbyId($id: Int!) {
  getWorkbyId(id: $id) {
    ...workDetails
  }
}
    ${WorkDetailsFragmentDoc}`;

/**
 * __useGetWorkbyIdQuery__
 *
 * To run a query within a React component, call `useGetWorkbyIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkbyIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkbyIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetWorkbyIdQuery(baseOptions: Apollo.QueryHookOptions<GetWorkbyIdQuery, GetWorkbyIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkbyIdQuery, GetWorkbyIdQueryVariables>(GetWorkbyIdDocument, options);
      }
export function useGetWorkbyIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkbyIdQuery, GetWorkbyIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkbyIdQuery, GetWorkbyIdQueryVariables>(GetWorkbyIdDocument, options);
        }
export type GetWorkbyIdQueryHookResult = ReturnType<typeof useGetWorkbyIdQuery>;
export type GetWorkbyIdLazyQueryHookResult = ReturnType<typeof useGetWorkbyIdLazyQuery>;
export type GetWorkbyIdQueryResult = Apollo.QueryResult<GetWorkbyIdQuery, GetWorkbyIdQueryVariables>;
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
export const SearchJobsDocument = gql`
    query SearchJobs($input: searchInput!) {
  searchJobs(input: $input) {
    id
    title
    location
    category
    salary
    description
    imgUrl
    company {
      id
      name
      website
      phone
      logo
      location
    }
  }
}
    `;

/**
 * __useSearchJobsQuery__
 *
 * To run a query within a React component, call `useSearchJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchJobsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchJobsQuery(baseOptions: Apollo.QueryHookOptions<SearchJobsQuery, SearchJobsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchJobsQuery, SearchJobsQueryVariables>(SearchJobsDocument, options);
      }
export function useSearchJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchJobsQuery, SearchJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchJobsQuery, SearchJobsQueryVariables>(SearchJobsDocument, options);
        }
export type SearchJobsQueryHookResult = ReturnType<typeof useSearchJobsQuery>;
export type SearchJobsLazyQueryHookResult = ReturnType<typeof useSearchJobsLazyQuery>;
export type SearchJobsQueryResult = Apollo.QueryResult<SearchJobsQuery, SearchJobsQueryVariables>;