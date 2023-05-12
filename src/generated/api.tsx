import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  bytea: any;
  citext: any;
  jsonb: any;
  money: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type TBoolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type TInt_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type TString_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** The activity table of all user actions */
export type TActivity = {
  __typename?: 'activity';
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  event: Scalars['String'];
  id: Scalars['uuid'];
  ideaId: Scalars['uuid'];
  type: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  url: Scalars['String'];
  /** An object relationship */
  user?: Maybe<TUsers>;
  userId: Scalars['uuid'];
};

/** aggregated selection of "activity" */
export type TActivity_Aggregate = {
  __typename?: 'activity_aggregate';
  aggregate?: Maybe<TActivity_Aggregate_Fields>;
  nodes: Array<TActivity>;
};

/** aggregate fields of "activity" */
export type TActivity_Aggregate_Fields = {
  __typename?: 'activity_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TActivity_Max_Fields>;
  min?: Maybe<TActivity_Min_Fields>;
};


/** aggregate fields of "activity" */
export type TActivity_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TActivity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "activity". All fields are combined with a logical 'AND'. */
export type TActivity_Bool_Exp = {
  _and?: InputMaybe<Array<TActivity_Bool_Exp>>;
  _not?: InputMaybe<TActivity_Bool_Exp>;
  _or?: InputMaybe<Array<TActivity_Bool_Exp>>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  description?: InputMaybe<TString_Comparison_Exp>;
  event?: InputMaybe<TString_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  ideaId?: InputMaybe<TUuid_Comparison_Exp>;
  type?: InputMaybe<TString_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  url?: InputMaybe<TString_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "activity" */
export type TActivity_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'activity_pkey';

/** input type for inserting data into table "activity" */
export type TActivity_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TActivity_Max_Fields = {
  __typename?: 'activity_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  ideaId?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type TActivity_Min_Fields = {
  __typename?: 'activity_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  ideaId?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "activity" */
export type TActivity_Mutation_Response = {
  __typename?: 'activity_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TActivity>;
};

/** on_conflict condition type for table "activity" */
export type TActivity_On_Conflict = {
  constraint: TActivity_Constraint;
  update_columns?: Array<TActivity_Update_Column>;
  where?: InputMaybe<TActivity_Bool_Exp>;
};

/** Ordering options when selecting data from "activity". */
export type TActivity_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  description?: InputMaybe<TOrder_By>;
  event?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  ideaId?: InputMaybe<TOrder_By>;
  type?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  url?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: activity */
export type TActivity_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "activity" */
export type TActivity_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'description'
  /** column name */
  | 'event'
  /** column name */
  | 'id'
  /** column name */
  | 'ideaId'
  /** column name */
  | 'type'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'url'
  /** column name */
  | 'userId';

/** input type for updating data in table "activity" */
export type TActivity_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "activity" */
export type TActivity_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TActivity_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TActivity_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "activity" */
export type TActivity_Update_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'description'
  /** column name */
  | 'event'
  /** column name */
  | 'id'
  /** column name */
  | 'ideaId'
  /** column name */
  | 'type'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'url'
  /** column name */
  | 'userId';

export type TActivity_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TActivity_Set_Input>;
  where: TActivity_Bool_Exp;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TAuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid'];
  options?: Maybe<Scalars['jsonb']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TAuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type TAuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<TAuthProviderRequests_Aggregate_Fields>;
  nodes: Array<TAuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type TAuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TAuthProviderRequests_Max_Fields>;
  min?: Maybe<TAuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type TAuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TAuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type TAuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type TAuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<TAuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<TAuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<TAuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  options?: InputMaybe<TJsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export type TAuthProviderRequests_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'provider_requests_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type TAuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type TAuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type TAuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type TAuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type TAuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type TAuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type TAuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TAuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type TAuthProviderRequests_On_Conflict = {
  constraint: TAuthProviderRequests_Constraint;
  update_columns?: Array<TAuthProviderRequests_Update_Column>;
  where?: InputMaybe<TAuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type TAuthProviderRequests_Order_By = {
  id?: InputMaybe<TOrder_By>;
  options?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: auth.provider_requests */
export type TAuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type TAuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export type TAuthProviderRequests_Select_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'options';

/** input type for updating data in table "auth.provider_requests" */
export type TAuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Streaming cursor of the table "authProviderRequests" */
export type TAuthProviderRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TAuthProviderRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TAuthProviderRequests_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export type TAuthProviderRequests_Update_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'options';

export type TAuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<TAuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<TAuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<TAuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<TAuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<TAuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TAuthProviderRequests_Set_Input>;
  where: TAuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TAuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<TAuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: TAuthUserProviders_Aggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TAuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserProviders_Order_By>>;
  where?: InputMaybe<TAuthUserProviders_Bool_Exp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TAuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserProviders_Order_By>>;
  where?: InputMaybe<TAuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type TAuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<TAuthProviders_Aggregate_Fields>;
  nodes: Array<TAuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type TAuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TAuthProviders_Max_Fields>;
  min?: Maybe<TAuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type TAuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TAuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type TAuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<TAuthProviders_Bool_Exp>>;
  _not?: InputMaybe<TAuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<TAuthProviders_Bool_Exp>>;
  id?: InputMaybe<TString_Comparison_Exp>;
  userProviders?: InputMaybe<TAuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<TAuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export type TAuthProviders_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'providers_pkey';

/** input type for inserting data into table "auth.providers" */
export type TAuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  userProviders?: InputMaybe<TAuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type TAuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type TAuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type TAuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TAuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type TAuthProviders_Obj_Rel_Insert_Input = {
  data: TAuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<TAuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type TAuthProviders_On_Conflict = {
  constraint: TAuthProviders_Constraint;
  update_columns?: Array<TAuthProviders_Update_Column>;
  where?: InputMaybe<TAuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type TAuthProviders_Order_By = {
  id?: InputMaybe<TOrder_By>;
  userProviders_aggregate?: InputMaybe<TAuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.providers */
export type TAuthProviders_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export type TAuthProviders_Select_Column =
  /** column name */
  | 'id';

/** input type for updating data in table "auth.providers" */
export type TAuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authProviders" */
export type TAuthProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TAuthProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TAuthProviders_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export type TAuthProviders_Update_Column =
  /** column name */
  | 'id';

export type TAuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TAuthProviders_Set_Input>;
  where: TAuthProviders_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TAuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken: Scalars['uuid'];
  refreshTokenHash?: Maybe<Scalars['String']>;
  /** An object relationship */
  user: TUsers;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type TAuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<TAuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<TAuthRefreshTokens>;
};

export type TAuthRefreshTokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<TAuthRefreshTokens_Aggregate_Bool_Exp_Count>;
};

export type TAuthRefreshTokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TAuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TAuthRefreshTokens_Bool_Exp>;
  predicate: TInt_Comparison_Exp;
};

/** aggregate fields of "auth.refresh_tokens" */
export type TAuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TAuthRefreshTokens_Max_Fields>;
  min?: Maybe<TAuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type TAuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TAuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type TAuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<TOrder_By>;
  max?: InputMaybe<TAuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<TAuthRefreshTokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type TAuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<TAuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TAuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type TAuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<TAuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<TAuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<TAuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  refreshToken?: InputMaybe<TUuid_Comparison_Exp>;
  refreshTokenHash?: InputMaybe<TString_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export type TAuthRefreshTokens_Constraint =
  /** unique or primary key constraint on columns "refresh_token" */
  | 'refresh_tokens_pkey';

/** input type for inserting data into table "auth.refresh_tokens" */
export type TAuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TAuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: Maybe<Scalars['uuid']>;
  refreshTokenHash?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type TAuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  expiresAt?: InputMaybe<TOrder_By>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<TOrder_By>;
  refreshTokenHash?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** aggregate min on columns */
export type TAuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: Maybe<Scalars['uuid']>;
  refreshTokenHash?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type TAuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  expiresAt?: InputMaybe<TOrder_By>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<TOrder_By>;
  refreshTokenHash?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type TAuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TAuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type TAuthRefreshTokens_On_Conflict = {
  constraint: TAuthRefreshTokens_Constraint;
  update_columns?: Array<TAuthRefreshTokens_Update_Column>;
  where?: InputMaybe<TAuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type TAuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  expiresAt?: InputMaybe<TOrder_By>;
  refreshToken?: InputMaybe<TOrder_By>;
  refreshTokenHash?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type TAuthRefreshTokens_Pk_Columns_Input = {
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export type TAuthRefreshTokens_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'expiresAt'
  /** column name */
  | 'refreshToken'
  /** column name */
  | 'refreshTokenHash'
  /** column name */
  | 'userId';

/** input type for updating data in table "auth.refresh_tokens" */
export type TAuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type TAuthRefreshTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TAuthRefreshTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TAuthRefreshTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<Scalars['uuid']>;
  refreshTokenHash?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export type TAuthRefreshTokens_Update_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'expiresAt'
  /** column name */
  | 'refreshToken'
  /** column name */
  | 'userId';

export type TAuthRefreshTokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TAuthRefreshTokens_Set_Input>;
  where: TAuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TAuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<TAuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: TAuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<TUsers>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: TUsers_Aggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TAuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserRoles_Order_By>>;
  where?: InputMaybe<TAuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TAuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserRoles_Order_By>>;
  where?: InputMaybe<TAuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TAuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<TUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUsers_Order_By>>;
  where?: InputMaybe<TUsers_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TAuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUsers_Order_By>>;
  where?: InputMaybe<TUsers_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type TAuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<TAuthRoles_Aggregate_Fields>;
  nodes: Array<TAuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type TAuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TAuthRoles_Max_Fields>;
  min?: Maybe<TAuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type TAuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TAuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type TAuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<TAuthRoles_Bool_Exp>>;
  _not?: InputMaybe<TAuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<TAuthRoles_Bool_Exp>>;
  role?: InputMaybe<TString_Comparison_Exp>;
  userRoles?: InputMaybe<TAuthUserRoles_Bool_Exp>;
  userRoles_aggregate?: InputMaybe<TAuthUserRoles_Aggregate_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<TUsers_Bool_Exp>;
  usersByDefaultRole_aggregate?: InputMaybe<TUsers_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export type TAuthRoles_Constraint =
  /** unique or primary key constraint on columns "role" */
  | 'roles_pkey';

/** input type for inserting data into table "auth.roles" */
export type TAuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']>;
  userRoles?: InputMaybe<TAuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<TUsers_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type TAuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type TAuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type TAuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TAuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type TAuthRoles_Obj_Rel_Insert_Input = {
  data: TAuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<TAuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type TAuthRoles_On_Conflict = {
  constraint: TAuthRoles_Constraint;
  update_columns?: Array<TAuthRoles_Update_Column>;
  where?: InputMaybe<TAuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type TAuthRoles_Order_By = {
  role?: InputMaybe<TOrder_By>;
  userRoles_aggregate?: InputMaybe<TAuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<TUsers_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.roles */
export type TAuthRoles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export type TAuthRoles_Select_Column =
  /** column name */
  | 'role';

/** input type for updating data in table "auth.roles" */
export type TAuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authRoles" */
export type TAuthRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TAuthRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TAuthRoles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export type TAuthRoles_Update_Column =
  /** column name */
  | 'role';

export type TAuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TAuthRoles_Set_Input>;
  where: TAuthRoles_Bool_Exp;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TAuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: TAuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: TUsers;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type TAuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<TAuthUserProviders_Aggregate_Fields>;
  nodes: Array<TAuthUserProviders>;
};

export type TAuthUserProviders_Aggregate_Bool_Exp = {
  count?: InputMaybe<TAuthUserProviders_Aggregate_Bool_Exp_Count>;
};

export type TAuthUserProviders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TAuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TAuthUserProviders_Bool_Exp>;
  predicate: TInt_Comparison_Exp;
};

/** aggregate fields of "auth.user_providers" */
export type TAuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TAuthUserProviders_Max_Fields>;
  min?: Maybe<TAuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type TAuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TAuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type TAuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<TOrder_By>;
  max?: InputMaybe<TAuthUserProviders_Max_Order_By>;
  min?: InputMaybe<TAuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type TAuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<TAuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TAuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type TAuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<TAuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<TAuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<TAuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<TString_Comparison_Exp>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  provider?: InputMaybe<TAuthProviders_Bool_Exp>;
  providerId?: InputMaybe<TString_Comparison_Exp>;
  providerUserId?: InputMaybe<TString_Comparison_Exp>;
  refreshToken?: InputMaybe<TString_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export type TAuthUserProviders_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'user_providers_pkey'
  /** unique or primary key constraint on columns "provider_id", "provider_user_id" */
  | 'user_providers_provider_id_provider_user_id_key'
  /** unique or primary key constraint on columns "provider_id", "user_id" */
  | 'user_providers_user_id_provider_id_key';

/** input type for inserting data into table "auth.user_providers" */
export type TAuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<TAuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TAuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type TAuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  providerId?: InputMaybe<TOrder_By>;
  providerUserId?: InputMaybe<TOrder_By>;
  refreshToken?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** aggregate min on columns */
export type TAuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type TAuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  providerId?: InputMaybe<TOrder_By>;
  providerUserId?: InputMaybe<TOrder_By>;
  refreshToken?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type TAuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TAuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type TAuthUserProviders_On_Conflict = {
  constraint: TAuthUserProviders_Constraint;
  update_columns?: Array<TAuthUserProviders_Update_Column>;
  where?: InputMaybe<TAuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type TAuthUserProviders_Order_By = {
  accessToken?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  provider?: InputMaybe<TAuthProviders_Order_By>;
  providerId?: InputMaybe<TOrder_By>;
  providerUserId?: InputMaybe<TOrder_By>;
  refreshToken?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: auth.user_providers */
export type TAuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export type TAuthUserProviders_Select_Column =
  /** column name */
  | 'accessToken'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'providerId'
  /** column name */
  | 'providerUserId'
  /** column name */
  | 'refreshToken'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

/** input type for updating data in table "auth.user_providers" */
export type TAuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authUserProviders" */
export type TAuthUserProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TAuthUserProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TAuthUserProviders_Stream_Cursor_Value_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export type TAuthUserProviders_Update_Column =
  /** column name */
  | 'accessToken'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'providerId'
  /** column name */
  | 'providerUserId'
  /** column name */
  | 'refreshToken'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

export type TAuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TAuthUserProviders_Set_Input>;
  where: TAuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TAuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: TAuthRoles;
  /** An object relationship */
  user: TUsers;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type TAuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<TAuthUserRoles_Aggregate_Fields>;
  nodes: Array<TAuthUserRoles>;
};

export type TAuthUserRoles_Aggregate_Bool_Exp = {
  count?: InputMaybe<TAuthUserRoles_Aggregate_Bool_Exp_Count>;
};

export type TAuthUserRoles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TAuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TAuthUserRoles_Bool_Exp>;
  predicate: TInt_Comparison_Exp;
};

/** aggregate fields of "auth.user_roles" */
export type TAuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TAuthUserRoles_Max_Fields>;
  min?: Maybe<TAuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type TAuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TAuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type TAuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<TOrder_By>;
  max?: InputMaybe<TAuthUserRoles_Max_Order_By>;
  min?: InputMaybe<TAuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type TAuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<TAuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TAuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type TAuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<TAuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<TAuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<TAuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  role?: InputMaybe<TString_Comparison_Exp>;
  roleByRole?: InputMaybe<TAuthRoles_Bool_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export type TAuthUserRoles_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'user_roles_pkey'
  /** unique or primary key constraint on columns "user_id", "role" */
  | 'user_roles_user_id_role_key';

/** input type for inserting data into table "auth.user_roles" */
export type TAuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<TAuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TAuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type TAuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  role?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** aggregate min on columns */
export type TAuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type TAuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  role?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type TAuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TAuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type TAuthUserRoles_On_Conflict = {
  constraint: TAuthUserRoles_Constraint;
  update_columns?: Array<TAuthUserRoles_Update_Column>;
  where?: InputMaybe<TAuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type TAuthUserRoles_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  role?: InputMaybe<TOrder_By>;
  roleByRole?: InputMaybe<TAuthRoles_Order_By>;
  user?: InputMaybe<TUsers_Order_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: auth.user_roles */
export type TAuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export type TAuthUserRoles_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'role'
  /** column name */
  | 'userId';

/** input type for updating data in table "auth.user_roles" */
export type TAuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authUserRoles" */
export type TAuthUserRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TAuthUserRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TAuthUserRoles_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export type TAuthUserRoles_Update_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'role'
  /** column name */
  | 'userId';

export type TAuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TAuthUserRoles_Set_Input>;
  where: TAuthUserRoles_Bool_Exp;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TAuthUserSecurityKeys = {
  __typename?: 'authUserSecurityKeys';
  counter: Scalars['bigint'];
  credentialId: Scalars['String'];
  credentialPublicKey?: Maybe<Scalars['bytea']>;
  id: Scalars['uuid'];
  nickname?: Maybe<Scalars['String']>;
  transports: Scalars['String'];
  /** An object relationship */
  user: TUsers;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Aggregate = {
  __typename?: 'authUserSecurityKeys_aggregate';
  aggregate?: Maybe<TAuthUserSecurityKeys_Aggregate_Fields>;
  nodes: Array<TAuthUserSecurityKeys>;
};

export type TAuthUserSecurityKeys_Aggregate_Bool_Exp = {
  count?: InputMaybe<TAuthUserSecurityKeys_Aggregate_Bool_Exp_Count>;
};

export type TAuthUserSecurityKeys_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TAuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TAuthUserSecurityKeys_Bool_Exp>;
  predicate: TInt_Comparison_Exp;
};

/** aggregate fields of "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Aggregate_Fields = {
  __typename?: 'authUserSecurityKeys_aggregate_fields';
  avg?: Maybe<TAuthUserSecurityKeys_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<TAuthUserSecurityKeys_Max_Fields>;
  min?: Maybe<TAuthUserSecurityKeys_Min_Fields>;
  stddev?: Maybe<TAuthUserSecurityKeys_Stddev_Fields>;
  stddev_pop?: Maybe<TAuthUserSecurityKeys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<TAuthUserSecurityKeys_Stddev_Samp_Fields>;
  sum?: Maybe<TAuthUserSecurityKeys_Sum_Fields>;
  var_pop?: Maybe<TAuthUserSecurityKeys_Var_Pop_Fields>;
  var_samp?: Maybe<TAuthUserSecurityKeys_Var_Samp_Fields>;
  variance?: Maybe<TAuthUserSecurityKeys_Variance_Fields>;
};


/** aggregate fields of "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TAuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Aggregate_Order_By = {
  avg?: InputMaybe<TAuthUserSecurityKeys_Avg_Order_By>;
  count?: InputMaybe<TOrder_By>;
  max?: InputMaybe<TAuthUserSecurityKeys_Max_Order_By>;
  min?: InputMaybe<TAuthUserSecurityKeys_Min_Order_By>;
  stddev?: InputMaybe<TAuthUserSecurityKeys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<TAuthUserSecurityKeys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<TAuthUserSecurityKeys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<TAuthUserSecurityKeys_Sum_Order_By>;
  var_pop?: InputMaybe<TAuthUserSecurityKeys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<TAuthUserSecurityKeys_Var_Samp_Order_By>;
  variance?: InputMaybe<TAuthUserSecurityKeys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Arr_Rel_Insert_Input = {
  data: Array<TAuthUserSecurityKeys_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TAuthUserSecurityKeys_On_Conflict>;
};

/** aggregate avg on columns */
export type TAuthUserSecurityKeys_Avg_Fields = {
  __typename?: 'authUserSecurityKeys_avg_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Avg_Order_By = {
  counter?: InputMaybe<TOrder_By>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type TAuthUserSecurityKeys_Bool_Exp = {
  _and?: InputMaybe<Array<TAuthUserSecurityKeys_Bool_Exp>>;
  _not?: InputMaybe<TAuthUserSecurityKeys_Bool_Exp>;
  _or?: InputMaybe<Array<TAuthUserSecurityKeys_Bool_Exp>>;
  counter?: InputMaybe<TBigint_Comparison_Exp>;
  credentialId?: InputMaybe<TString_Comparison_Exp>;
  credentialPublicKey?: InputMaybe<TBytea_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  nickname?: InputMaybe<TString_Comparison_Exp>;
  transports?: InputMaybe<TString_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Constraint =
  /** unique or primary key constraint on columns "credential_id" */
  | 'user_security_key_credential_id_key'
  /** unique or primary key constraint on columns "id" */
  | 'user_security_keys_pkey';

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Inc_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Insert_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TAuthUserSecurityKeys_Max_Fields = {
  __typename?: 'authUserSecurityKeys_max_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Max_Order_By = {
  counter?: InputMaybe<TOrder_By>;
  credentialId?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  nickname?: InputMaybe<TOrder_By>;
  transports?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** aggregate min on columns */
export type TAuthUserSecurityKeys_Min_Fields = {
  __typename?: 'authUserSecurityKeys_min_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Min_Order_By = {
  counter?: InputMaybe<TOrder_By>;
  credentialId?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  nickname?: InputMaybe<TOrder_By>;
  transports?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Mutation_Response = {
  __typename?: 'authUserSecurityKeys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TAuthUserSecurityKeys>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_On_Conflict = {
  constraint: TAuthUserSecurityKeys_Constraint;
  update_columns?: Array<TAuthUserSecurityKeys_Update_Column>;
  where?: InputMaybe<TAuthUserSecurityKeys_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type TAuthUserSecurityKeys_Order_By = {
  counter?: InputMaybe<TOrder_By>;
  credentialId?: InputMaybe<TOrder_By>;
  credentialPublicKey?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  nickname?: InputMaybe<TOrder_By>;
  transports?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: auth.user_security_keys */
export type TAuthUserSecurityKeys_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Select_Column =
  /** column name */
  | 'counter'
  /** column name */
  | 'credentialId'
  /** column name */
  | 'credentialPublicKey'
  /** column name */
  | 'id'
  /** column name */
  | 'nickname'
  /** column name */
  | 'transports'
  /** column name */
  | 'userId';

/** input type for updating data in table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Set_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type TAuthUserSecurityKeys_Stddev_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Stddev_Order_By = {
  counter?: InputMaybe<TOrder_By>;
};

/** aggregate stddev_pop on columns */
export type TAuthUserSecurityKeys_Stddev_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Stddev_Pop_Order_By = {
  counter?: InputMaybe<TOrder_By>;
};

/** aggregate stddev_samp on columns */
export type TAuthUserSecurityKeys_Stddev_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Stddev_Samp_Order_By = {
  counter?: InputMaybe<TOrder_By>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type TAuthUserSecurityKeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TAuthUserSecurityKeys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TAuthUserSecurityKeys_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type TAuthUserSecurityKeys_Sum_Fields = {
  __typename?: 'authUserSecurityKeys_sum_fields';
  counter?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Sum_Order_By = {
  counter?: InputMaybe<TOrder_By>;
};

/** update columns of table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Update_Column =
  /** column name */
  | 'counter'
  /** column name */
  | 'credentialId'
  /** column name */
  | 'credentialPublicKey'
  /** column name */
  | 'id'
  /** column name */
  | 'nickname'
  /** column name */
  | 'transports'
  /** column name */
  | 'userId';

export type TAuthUserSecurityKeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TAuthUserSecurityKeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TAuthUserSecurityKeys_Set_Input>;
  where: TAuthUserSecurityKeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type TAuthUserSecurityKeys_Var_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_var_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Var_Pop_Order_By = {
  counter?: InputMaybe<TOrder_By>;
};

/** aggregate var_samp on columns */
export type TAuthUserSecurityKeys_Var_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_var_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Var_Samp_Order_By = {
  counter?: InputMaybe<TOrder_By>;
};

/** aggregate variance on columns */
export type TAuthUserSecurityKeys_Variance_Fields = {
  __typename?: 'authUserSecurityKeys_variance_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
export type TAuthUserSecurityKeys_Variance_Order_By = {
  counter?: InputMaybe<TOrder_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type TBigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** All the times an idea was boosted */
export type TBoosted_Idea_Log = {
  __typename?: 'boosted_idea_log';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  idea_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "boosted_idea_log" */
export type TBoosted_Idea_Log_Aggregate = {
  __typename?: 'boosted_idea_log_aggregate';
  aggregate?: Maybe<TBoosted_Idea_Log_Aggregate_Fields>;
  nodes: Array<TBoosted_Idea_Log>;
};

/** aggregate fields of "boosted_idea_log" */
export type TBoosted_Idea_Log_Aggregate_Fields = {
  __typename?: 'boosted_idea_log_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TBoosted_Idea_Log_Max_Fields>;
  min?: Maybe<TBoosted_Idea_Log_Min_Fields>;
};


/** aggregate fields of "boosted_idea_log" */
export type TBoosted_Idea_Log_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TBoosted_Idea_Log_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "boosted_idea_log". All fields are combined with a logical 'AND'. */
export type TBoosted_Idea_Log_Bool_Exp = {
  _and?: InputMaybe<Array<TBoosted_Idea_Log_Bool_Exp>>;
  _not?: InputMaybe<TBoosted_Idea_Log_Bool_Exp>;
  _or?: InputMaybe<Array<TBoosted_Idea_Log_Bool_Exp>>;
  created_at?: InputMaybe<TTimestamptz_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  idea_id?: InputMaybe<TUuid_Comparison_Exp>;
  updated_at?: InputMaybe<TTimestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "boosted_idea_log" */
export type TBoosted_Idea_Log_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'boosted_idea_log_pkey';

/** input type for inserting data into table "boosted_idea_log" */
export type TBoosted_Idea_Log_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  idea_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TBoosted_Idea_Log_Max_Fields = {
  __typename?: 'boosted_idea_log_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  idea_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type TBoosted_Idea_Log_Min_Fields = {
  __typename?: 'boosted_idea_log_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  idea_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "boosted_idea_log" */
export type TBoosted_Idea_Log_Mutation_Response = {
  __typename?: 'boosted_idea_log_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TBoosted_Idea_Log>;
};

/** on_conflict condition type for table "boosted_idea_log" */
export type TBoosted_Idea_Log_On_Conflict = {
  constraint: TBoosted_Idea_Log_Constraint;
  update_columns?: Array<TBoosted_Idea_Log_Update_Column>;
  where?: InputMaybe<TBoosted_Idea_Log_Bool_Exp>;
};

/** Ordering options when selecting data from "boosted_idea_log". */
export type TBoosted_Idea_Log_Order_By = {
  created_at?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  idea_id?: InputMaybe<TOrder_By>;
  updated_at?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: boosted_idea_log */
export type TBoosted_Idea_Log_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "boosted_idea_log" */
export type TBoosted_Idea_Log_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'idea_id'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "boosted_idea_log" */
export type TBoosted_Idea_Log_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  idea_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "boosted_idea_log" */
export type TBoosted_Idea_Log_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TBoosted_Idea_Log_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TBoosted_Idea_Log_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  idea_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "boosted_idea_log" */
export type TBoosted_Idea_Log_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'idea_id'
  /** column name */
  | 'updated_at';

export type TBoosted_Idea_Log_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TBoosted_Idea_Log_Set_Input>;
  where: TBoosted_Idea_Log_Bool_Exp;
};

/** All ideas that are currently boosted */
export type TBoosted_Ideas = {
  __typename?: 'boosted_ideas';
  completedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currencyAmountIncrement: Scalars['money'];
  id: Scalars['uuid'];
  /** An object relationship */
  idea?: Maybe<TIdeas>;
  ideaId: Scalars['uuid'];
  pointsIncrement: Scalars['Int'];
  remainingCurrencyAmount?: Maybe<Scalars['money']>;
  remainingPoints?: Maybe<Scalars['Int']>;
  totalCurrencyAmount?: Maybe<Scalars['money']>;
  totalPoints?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "boosted_ideas" */
export type TBoosted_Ideas_Aggregate = {
  __typename?: 'boosted_ideas_aggregate';
  aggregate?: Maybe<TBoosted_Ideas_Aggregate_Fields>;
  nodes: Array<TBoosted_Ideas>;
};

/** aggregate fields of "boosted_ideas" */
export type TBoosted_Ideas_Aggregate_Fields = {
  __typename?: 'boosted_ideas_aggregate_fields';
  avg?: Maybe<TBoosted_Ideas_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<TBoosted_Ideas_Max_Fields>;
  min?: Maybe<TBoosted_Ideas_Min_Fields>;
  stddev?: Maybe<TBoosted_Ideas_Stddev_Fields>;
  stddev_pop?: Maybe<TBoosted_Ideas_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<TBoosted_Ideas_Stddev_Samp_Fields>;
  sum?: Maybe<TBoosted_Ideas_Sum_Fields>;
  var_pop?: Maybe<TBoosted_Ideas_Var_Pop_Fields>;
  var_samp?: Maybe<TBoosted_Ideas_Var_Samp_Fields>;
  variance?: Maybe<TBoosted_Ideas_Variance_Fields>;
};


/** aggregate fields of "boosted_ideas" */
export type TBoosted_Ideas_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TBoosted_Ideas_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type TBoosted_Ideas_Avg_Fields = {
  __typename?: 'boosted_ideas_avg_fields';
  currencyAmountIncrement?: Maybe<Scalars['Float']>;
  pointsIncrement?: Maybe<Scalars['Float']>;
  remainingCurrencyAmount?: Maybe<Scalars['Float']>;
  remainingPoints?: Maybe<Scalars['Float']>;
  totalCurrencyAmount?: Maybe<Scalars['Float']>;
  totalPoints?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "boosted_ideas". All fields are combined with a logical 'AND'. */
export type TBoosted_Ideas_Bool_Exp = {
  _and?: InputMaybe<Array<TBoosted_Ideas_Bool_Exp>>;
  _not?: InputMaybe<TBoosted_Ideas_Bool_Exp>;
  _or?: InputMaybe<Array<TBoosted_Ideas_Bool_Exp>>;
  completedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  currencyAmountIncrement?: InputMaybe<TMoney_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  idea?: InputMaybe<TIdeas_Bool_Exp>;
  ideaId?: InputMaybe<TUuid_Comparison_Exp>;
  pointsIncrement?: InputMaybe<TInt_Comparison_Exp>;
  remainingCurrencyAmount?: InputMaybe<TMoney_Comparison_Exp>;
  remainingPoints?: InputMaybe<TInt_Comparison_Exp>;
  totalCurrencyAmount?: InputMaybe<TMoney_Comparison_Exp>;
  totalPoints?: InputMaybe<TInt_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "boosted_ideas" */
export type TBoosted_Ideas_Constraint =
  /** unique or primary key constraint on columns "idea_id", "id" */
  | 'boosted_ideas_id_idea_id_key'
  /** unique or primary key constraint on columns "idea_id" */
  | 'boosted_ideas_pkey';

/** input type for incrementing numeric columns in table "boosted_ideas" */
export type TBoosted_Ideas_Inc_Input = {
  currencyAmountIncrement?: InputMaybe<Scalars['money']>;
  pointsIncrement?: InputMaybe<Scalars['Int']>;
  remainingCurrencyAmount?: InputMaybe<Scalars['money']>;
  remainingPoints?: InputMaybe<Scalars['Int']>;
  totalCurrencyAmount?: InputMaybe<Scalars['money']>;
  totalPoints?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "boosted_ideas" */
export type TBoosted_Ideas_Insert_Input = {
  completedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currencyAmountIncrement?: InputMaybe<Scalars['money']>;
  id?: InputMaybe<Scalars['uuid']>;
  idea?: InputMaybe<TIdeas_Obj_Rel_Insert_Input>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  pointsIncrement?: InputMaybe<Scalars['Int']>;
  remainingCurrencyAmount?: InputMaybe<Scalars['money']>;
  remainingPoints?: InputMaybe<Scalars['Int']>;
  totalCurrencyAmount?: InputMaybe<Scalars['money']>;
  totalPoints?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TBoosted_Ideas_Max_Fields = {
  __typename?: 'boosted_ideas_max_fields';
  completedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currencyAmountIncrement?: Maybe<Scalars['money']>;
  id?: Maybe<Scalars['uuid']>;
  ideaId?: Maybe<Scalars['uuid']>;
  pointsIncrement?: Maybe<Scalars['Int']>;
  remainingCurrencyAmount?: Maybe<Scalars['money']>;
  remainingPoints?: Maybe<Scalars['Int']>;
  totalCurrencyAmount?: Maybe<Scalars['money']>;
  totalPoints?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type TBoosted_Ideas_Min_Fields = {
  __typename?: 'boosted_ideas_min_fields';
  completedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currencyAmountIncrement?: Maybe<Scalars['money']>;
  id?: Maybe<Scalars['uuid']>;
  ideaId?: Maybe<Scalars['uuid']>;
  pointsIncrement?: Maybe<Scalars['Int']>;
  remainingCurrencyAmount?: Maybe<Scalars['money']>;
  remainingPoints?: Maybe<Scalars['Int']>;
  totalCurrencyAmount?: Maybe<Scalars['money']>;
  totalPoints?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "boosted_ideas" */
export type TBoosted_Ideas_Mutation_Response = {
  __typename?: 'boosted_ideas_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TBoosted_Ideas>;
};

/** input type for inserting object relation for remote table "boosted_ideas" */
export type TBoosted_Ideas_Obj_Rel_Insert_Input = {
  data: TBoosted_Ideas_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<TBoosted_Ideas_On_Conflict>;
};

/** on_conflict condition type for table "boosted_ideas" */
export type TBoosted_Ideas_On_Conflict = {
  constraint: TBoosted_Ideas_Constraint;
  update_columns?: Array<TBoosted_Ideas_Update_Column>;
  where?: InputMaybe<TBoosted_Ideas_Bool_Exp>;
};

/** Ordering options when selecting data from "boosted_ideas". */
export type TBoosted_Ideas_Order_By = {
  completedAt?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  currencyAmountIncrement?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  idea?: InputMaybe<TIdeas_Order_By>;
  ideaId?: InputMaybe<TOrder_By>;
  pointsIncrement?: InputMaybe<TOrder_By>;
  remainingCurrencyAmount?: InputMaybe<TOrder_By>;
  remainingPoints?: InputMaybe<TOrder_By>;
  totalCurrencyAmount?: InputMaybe<TOrder_By>;
  totalPoints?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: boosted_ideas */
export type TBoosted_Ideas_Pk_Columns_Input = {
  ideaId: Scalars['uuid'];
};

/** select columns of table "boosted_ideas" */
export type TBoosted_Ideas_Select_Column =
  /** column name */
  | 'completedAt'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'currencyAmountIncrement'
  /** column name */
  | 'id'
  /** column name */
  | 'ideaId'
  /** column name */
  | 'pointsIncrement'
  /** column name */
  | 'remainingCurrencyAmount'
  /** column name */
  | 'remainingPoints'
  /** column name */
  | 'totalCurrencyAmount'
  /** column name */
  | 'totalPoints'
  /** column name */
  | 'updatedAt';

/** input type for updating data in table "boosted_ideas" */
export type TBoosted_Ideas_Set_Input = {
  completedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currencyAmountIncrement?: InputMaybe<Scalars['money']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  pointsIncrement?: InputMaybe<Scalars['Int']>;
  remainingCurrencyAmount?: InputMaybe<Scalars['money']>;
  remainingPoints?: InputMaybe<Scalars['Int']>;
  totalCurrencyAmount?: InputMaybe<Scalars['money']>;
  totalPoints?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type TBoosted_Ideas_Stddev_Fields = {
  __typename?: 'boosted_ideas_stddev_fields';
  currencyAmountIncrement?: Maybe<Scalars['Float']>;
  pointsIncrement?: Maybe<Scalars['Float']>;
  remainingCurrencyAmount?: Maybe<Scalars['Float']>;
  remainingPoints?: Maybe<Scalars['Float']>;
  totalCurrencyAmount?: Maybe<Scalars['Float']>;
  totalPoints?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type TBoosted_Ideas_Stddev_Pop_Fields = {
  __typename?: 'boosted_ideas_stddev_pop_fields';
  currencyAmountIncrement?: Maybe<Scalars['Float']>;
  pointsIncrement?: Maybe<Scalars['Float']>;
  remainingCurrencyAmount?: Maybe<Scalars['Float']>;
  remainingPoints?: Maybe<Scalars['Float']>;
  totalCurrencyAmount?: Maybe<Scalars['Float']>;
  totalPoints?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type TBoosted_Ideas_Stddev_Samp_Fields = {
  __typename?: 'boosted_ideas_stddev_samp_fields';
  currencyAmountIncrement?: Maybe<Scalars['Float']>;
  pointsIncrement?: Maybe<Scalars['Float']>;
  remainingCurrencyAmount?: Maybe<Scalars['Float']>;
  remainingPoints?: Maybe<Scalars['Float']>;
  totalCurrencyAmount?: Maybe<Scalars['Float']>;
  totalPoints?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "boosted_ideas" */
export type TBoosted_Ideas_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TBoosted_Ideas_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TBoosted_Ideas_Stream_Cursor_Value_Input = {
  completedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currencyAmountIncrement?: InputMaybe<Scalars['money']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  pointsIncrement?: InputMaybe<Scalars['Int']>;
  remainingCurrencyAmount?: InputMaybe<Scalars['money']>;
  remainingPoints?: InputMaybe<Scalars['Int']>;
  totalCurrencyAmount?: InputMaybe<Scalars['money']>;
  totalPoints?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type TBoosted_Ideas_Sum_Fields = {
  __typename?: 'boosted_ideas_sum_fields';
  currencyAmountIncrement?: Maybe<Scalars['money']>;
  pointsIncrement?: Maybe<Scalars['Int']>;
  remainingCurrencyAmount?: Maybe<Scalars['money']>;
  remainingPoints?: Maybe<Scalars['Int']>;
  totalCurrencyAmount?: Maybe<Scalars['money']>;
  totalPoints?: Maybe<Scalars['Int']>;
};

/** update columns of table "boosted_ideas" */
export type TBoosted_Ideas_Update_Column =
  /** column name */
  | 'completedAt'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'currencyAmountIncrement'
  /** column name */
  | 'id'
  /** column name */
  | 'ideaId'
  /** column name */
  | 'pointsIncrement'
  /** column name */
  | 'remainingCurrencyAmount'
  /** column name */
  | 'remainingPoints'
  /** column name */
  | 'totalCurrencyAmount'
  /** column name */
  | 'totalPoints'
  /** column name */
  | 'updatedAt';

export type TBoosted_Ideas_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TBoosted_Ideas_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TBoosted_Ideas_Set_Input>;
  where: TBoosted_Ideas_Bool_Exp;
};

/** aggregate var_pop on columns */
export type TBoosted_Ideas_Var_Pop_Fields = {
  __typename?: 'boosted_ideas_var_pop_fields';
  currencyAmountIncrement?: Maybe<Scalars['Float']>;
  pointsIncrement?: Maybe<Scalars['Float']>;
  remainingCurrencyAmount?: Maybe<Scalars['Float']>;
  remainingPoints?: Maybe<Scalars['Float']>;
  totalCurrencyAmount?: Maybe<Scalars['Float']>;
  totalPoints?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type TBoosted_Ideas_Var_Samp_Fields = {
  __typename?: 'boosted_ideas_var_samp_fields';
  currencyAmountIncrement?: Maybe<Scalars['Float']>;
  pointsIncrement?: Maybe<Scalars['Float']>;
  remainingCurrencyAmount?: Maybe<Scalars['Float']>;
  remainingPoints?: Maybe<Scalars['Float']>;
  totalCurrencyAmount?: Maybe<Scalars['Float']>;
  totalPoints?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type TBoosted_Ideas_Variance_Fields = {
  __typename?: 'boosted_ideas_variance_fields';
  currencyAmountIncrement?: Maybe<Scalars['Float']>;
  pointsIncrement?: Maybe<Scalars['Float']>;
  remainingCurrencyAmount?: Maybe<Scalars['Float']>;
  remainingPoints?: Maybe<Scalars['Float']>;
  totalCurrencyAmount?: Maybe<Scalars['Float']>;
  totalPoints?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "storage.buckets" */
export type TBuckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  downloadExpiration: Scalars['Int'];
  /** An array relationship */
  files: Array<TFiles>;
  /** An aggregate relationship */
  files_aggregate: TFiles_Aggregate;
  id: Scalars['String'];
  maxUploadFileSize: Scalars['Int'];
  minUploadFileSize: Scalars['Int'];
  presignedUrlsEnabled: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "storage.buckets" */
export type TBucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<TFiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TFiles_Order_By>>;
  where?: InputMaybe<TFiles_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type TBucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TFiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TFiles_Order_By>>;
  where?: InputMaybe<TFiles_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type TBuckets_Aggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<TBuckets_Aggregate_Fields>;
  nodes: Array<TBuckets>;
};

/** aggregate fields of "storage.buckets" */
export type TBuckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<TBuckets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<TBuckets_Max_Fields>;
  min?: Maybe<TBuckets_Min_Fields>;
  stddev?: Maybe<TBuckets_Stddev_Fields>;
  stddev_pop?: Maybe<TBuckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<TBuckets_Stddev_Samp_Fields>;
  sum?: Maybe<TBuckets_Sum_Fields>;
  var_pop?: Maybe<TBuckets_Var_Pop_Fields>;
  var_samp?: Maybe<TBuckets_Var_Samp_Fields>;
  variance?: Maybe<TBuckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type TBuckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TBuckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type TBuckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type TBuckets_Bool_Exp = {
  _and?: InputMaybe<Array<TBuckets_Bool_Exp>>;
  _not?: InputMaybe<TBuckets_Bool_Exp>;
  _or?: InputMaybe<Array<TBuckets_Bool_Exp>>;
  cacheControl?: InputMaybe<TString_Comparison_Exp>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<TInt_Comparison_Exp>;
  files?: InputMaybe<TFiles_Bool_Exp>;
  files_aggregate?: InputMaybe<TFiles_Aggregate_Bool_Exp>;
  id?: InputMaybe<TString_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<TInt_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<TInt_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<TBoolean_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export type TBuckets_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'buckets_pkey';

/** input type for incrementing numeric columns in table "storage.buckets" */
export type TBuckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.buckets" */
export type TBuckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  files?: InputMaybe<TFiles_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TBuckets_Max_Fields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type TBuckets_Min_Fields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type TBuckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TBuckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type TBuckets_Obj_Rel_Insert_Input = {
  data: TBuckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<TBuckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type TBuckets_On_Conflict = {
  constraint: TBuckets_Constraint;
  update_columns?: Array<TBuckets_Update_Column>;
  where?: InputMaybe<TBuckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type TBuckets_Order_By = {
  cacheControl?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  downloadExpiration?: InputMaybe<TOrder_By>;
  files_aggregate?: InputMaybe<TFiles_Aggregate_Order_By>;
  id?: InputMaybe<TOrder_By>;
  maxUploadFileSize?: InputMaybe<TOrder_By>;
  minUploadFileSize?: InputMaybe<TOrder_By>;
  presignedUrlsEnabled?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: storage.buckets */
export type TBuckets_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export type TBuckets_Select_Column =
  /** column name */
  | 'cacheControl'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'downloadExpiration'
  /** column name */
  | 'id'
  /** column name */
  | 'maxUploadFileSize'
  /** column name */
  | 'minUploadFileSize'
  /** column name */
  | 'presignedUrlsEnabled'
  /** column name */
  | 'updatedAt';

/** input type for updating data in table "storage.buckets" */
export type TBuckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type TBuckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type TBuckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type TBuckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "buckets" */
export type TBuckets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TBuckets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TBuckets_Stream_Cursor_Value_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type TBuckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.buckets" */
export type TBuckets_Update_Column =
  /** column name */
  | 'cacheControl'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'downloadExpiration'
  /** column name */
  | 'id'
  /** column name */
  | 'maxUploadFileSize'
  /** column name */
  | 'minUploadFileSize'
  /** column name */
  | 'presignedUrlsEnabled'
  /** column name */
  | 'updatedAt';

export type TBuckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TBuckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TBuckets_Set_Input>;
  where: TBuckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type TBuckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type TBuckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type TBuckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type TBytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']>;
  _gt?: InputMaybe<Scalars['bytea']>;
  _gte?: InputMaybe<Scalars['bytea']>;
  _in?: InputMaybe<Array<Scalars['bytea']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bytea']>;
  _lte?: InputMaybe<Scalars['bytea']>;
  _neq?: InputMaybe<Scalars['bytea']>;
  _nin?: InputMaybe<Array<Scalars['bytea']>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type TCitext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** All status types */
export type TComment_Status_Types = {
  __typename?: 'comment_status_types';
  description: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "comment_status_types" */
export type TComment_Status_Types_Aggregate = {
  __typename?: 'comment_status_types_aggregate';
  aggregate?: Maybe<TComment_Status_Types_Aggregate_Fields>;
  nodes: Array<TComment_Status_Types>;
};

/** aggregate fields of "comment_status_types" */
export type TComment_Status_Types_Aggregate_Fields = {
  __typename?: 'comment_status_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TComment_Status_Types_Max_Fields>;
  min?: Maybe<TComment_Status_Types_Min_Fields>;
};


/** aggregate fields of "comment_status_types" */
export type TComment_Status_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TComment_Status_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "comment_status_types". All fields are combined with a logical 'AND'. */
export type TComment_Status_Types_Bool_Exp = {
  _and?: InputMaybe<Array<TComment_Status_Types_Bool_Exp>>;
  _not?: InputMaybe<TComment_Status_Types_Bool_Exp>;
  _or?: InputMaybe<Array<TComment_Status_Types_Bool_Exp>>;
  description?: InputMaybe<TString_Comparison_Exp>;
  value?: InputMaybe<TString_Comparison_Exp>;
};

/** unique or primary key constraints on table "comment_status_types" */
export type TComment_Status_Types_Constraint =
  /** unique or primary key constraint on columns "value" */
  | 'comment_status_types_pkey';

export type TComment_Status_Types_Enum =
  /** The comment is in the approved state */
  | 'APPROVED'
  /** The comment is in the pending state */
  | 'PENDING'
  /** The comment is in the rejected state */
  | 'REJECTED';

/** Boolean expression to compare columns of type "comment_status_types_enum". All fields are combined with logical 'AND'. */
export type TComment_Status_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<TComment_Status_Types_Enum>;
  _in?: InputMaybe<Array<TComment_Status_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<TComment_Status_Types_Enum>;
  _nin?: InputMaybe<Array<TComment_Status_Types_Enum>>;
};

/** input type for inserting data into table "comment_status_types" */
export type TComment_Status_Types_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TComment_Status_Types_Max_Fields = {
  __typename?: 'comment_status_types_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type TComment_Status_Types_Min_Fields = {
  __typename?: 'comment_status_types_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "comment_status_types" */
export type TComment_Status_Types_Mutation_Response = {
  __typename?: 'comment_status_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TComment_Status_Types>;
};

/** on_conflict condition type for table "comment_status_types" */
export type TComment_Status_Types_On_Conflict = {
  constraint: TComment_Status_Types_Constraint;
  update_columns?: Array<TComment_Status_Types_Update_Column>;
  where?: InputMaybe<TComment_Status_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "comment_status_types". */
export type TComment_Status_Types_Order_By = {
  description?: InputMaybe<TOrder_By>;
  value?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: comment_status_types */
export type TComment_Status_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "comment_status_types" */
export type TComment_Status_Types_Select_Column =
  /** column name */
  | 'description'
  /** column name */
  | 'value';

/** input type for updating data in table "comment_status_types" */
export type TComment_Status_Types_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "comment_status_types" */
export type TComment_Status_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TComment_Status_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TComment_Status_Types_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "comment_status_types" */
export type TComment_Status_Types_Update_Column =
  /** column name */
  | 'description'
  /** column name */
  | 'value';

export type TComment_Status_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TComment_Status_Types_Set_Input>;
  where: TComment_Status_Types_Bool_Exp;
};

/** ordering argument of a cursor */
export type TCursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** columns and relationships of "storage.files" */
export type TFiles = {
  __typename?: 'files';
  /** An object relationship */
  bucket: TBuckets;
  bucketId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  etag?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isUploaded?: Maybe<Scalars['Boolean']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "storage.files" */
export type TFiles_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<TFiles_Aggregate_Fields>;
  nodes: Array<TFiles>;
};

export type TFiles_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<TFiles_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<TFiles_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<TFiles_Aggregate_Bool_Exp_Count>;
};

export type TFiles_Aggregate_Bool_Exp_Bool_And = {
  arguments: TFiles_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TFiles_Bool_Exp>;
  predicate: TBoolean_Comparison_Exp;
};

export type TFiles_Aggregate_Bool_Exp_Bool_Or = {
  arguments: TFiles_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TFiles_Bool_Exp>;
  predicate: TBoolean_Comparison_Exp;
};

export type TFiles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TFiles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TFiles_Bool_Exp>;
  predicate: TInt_Comparison_Exp;
};

/** aggregate fields of "storage.files" */
export type TFiles_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<TFiles_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<TFiles_Max_Fields>;
  min?: Maybe<TFiles_Min_Fields>;
  stddev?: Maybe<TFiles_Stddev_Fields>;
  stddev_pop?: Maybe<TFiles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<TFiles_Stddev_Samp_Fields>;
  sum?: Maybe<TFiles_Sum_Fields>;
  var_pop?: Maybe<TFiles_Var_Pop_Fields>;
  var_samp?: Maybe<TFiles_Var_Samp_Fields>;
  variance?: Maybe<TFiles_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type TFiles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TFiles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage.files" */
export type TFiles_Aggregate_Order_By = {
  avg?: InputMaybe<TFiles_Avg_Order_By>;
  count?: InputMaybe<TOrder_By>;
  max?: InputMaybe<TFiles_Max_Order_By>;
  min?: InputMaybe<TFiles_Min_Order_By>;
  stddev?: InputMaybe<TFiles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<TFiles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<TFiles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<TFiles_Sum_Order_By>;
  var_pop?: InputMaybe<TFiles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<TFiles_Var_Samp_Order_By>;
  variance?: InputMaybe<TFiles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type TFiles_Arr_Rel_Insert_Input = {
  data: Array<TFiles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TFiles_On_Conflict>;
};

/** aggregate avg on columns */
export type TFiles_Avg_Fields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage.files" */
export type TFiles_Avg_Order_By = {
  size?: InputMaybe<TOrder_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type TFiles_Bool_Exp = {
  _and?: InputMaybe<Array<TFiles_Bool_Exp>>;
  _not?: InputMaybe<TFiles_Bool_Exp>;
  _or?: InputMaybe<Array<TFiles_Bool_Exp>>;
  bucket?: InputMaybe<TBuckets_Bool_Exp>;
  bucketId?: InputMaybe<TString_Comparison_Exp>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  etag?: InputMaybe<TString_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  isUploaded?: InputMaybe<TBoolean_Comparison_Exp>;
  mimeType?: InputMaybe<TString_Comparison_Exp>;
  name?: InputMaybe<TString_Comparison_Exp>;
  size?: InputMaybe<TInt_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<TUuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export type TFiles_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'files_pkey';

/** input type for incrementing numeric columns in table "storage.files" */
export type TFiles_Inc_Input = {
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.files" */
export type TFiles_Insert_Input = {
  bucket?: InputMaybe<TBuckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TFiles_Max_Fields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "storage.files" */
export type TFiles_Max_Order_By = {
  bucketId?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  etag?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  mimeType?: InputMaybe<TOrder_By>;
  name?: InputMaybe<TOrder_By>;
  size?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  uploadedByUserId?: InputMaybe<TOrder_By>;
};

/** aggregate min on columns */
export type TFiles_Min_Fields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "storage.files" */
export type TFiles_Min_Order_By = {
  bucketId?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  etag?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  mimeType?: InputMaybe<TOrder_By>;
  name?: InputMaybe<TOrder_By>;
  size?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  uploadedByUserId?: InputMaybe<TOrder_By>;
};

/** response of any mutation on the table "storage.files" */
export type TFiles_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TFiles>;
};

/** on_conflict condition type for table "storage.files" */
export type TFiles_On_Conflict = {
  constraint: TFiles_Constraint;
  update_columns?: Array<TFiles_Update_Column>;
  where?: InputMaybe<TFiles_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type TFiles_Order_By = {
  bucket?: InputMaybe<TBuckets_Order_By>;
  bucketId?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  etag?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  isUploaded?: InputMaybe<TOrder_By>;
  mimeType?: InputMaybe<TOrder_By>;
  name?: InputMaybe<TOrder_By>;
  size?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  uploadedByUserId?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: storage.files */
export type TFiles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "storage.files" */
export type TFiles_Select_Column =
  /** column name */
  | 'bucketId'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'etag'
  /** column name */
  | 'id'
  /** column name */
  | 'isUploaded'
  /** column name */
  | 'mimeType'
  /** column name */
  | 'name'
  /** column name */
  | 'size'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'uploadedByUserId';

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export type TFiles_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'isUploaded';

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export type TFiles_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'isUploaded';

/** input type for updating data in table "storage.files" */
export type TFiles_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type TFiles_Stddev_Fields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage.files" */
export type TFiles_Stddev_Order_By = {
  size?: InputMaybe<TOrder_By>;
};

/** aggregate stddev_pop on columns */
export type TFiles_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type TFiles_Stddev_Pop_Order_By = {
  size?: InputMaybe<TOrder_By>;
};

/** aggregate stddev_samp on columns */
export type TFiles_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type TFiles_Stddev_Samp_Order_By = {
  size?: InputMaybe<TOrder_By>;
};

/** Streaming cursor of the table "files" */
export type TFiles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TFiles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TFiles_Stream_Cursor_Value_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type TFiles_Sum_Fields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage.files" */
export type TFiles_Sum_Order_By = {
  size?: InputMaybe<TOrder_By>;
};

/** update columns of table "storage.files" */
export type TFiles_Update_Column =
  /** column name */
  | 'bucketId'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'etag'
  /** column name */
  | 'id'
  /** column name */
  | 'isUploaded'
  /** column name */
  | 'mimeType'
  /** column name */
  | 'name'
  /** column name */
  | 'size'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'uploadedByUserId';

export type TFiles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TFiles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TFiles_Set_Input>;
  where: TFiles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type TFiles_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type TFiles_Var_Pop_Order_By = {
  size?: InputMaybe<TOrder_By>;
};

/** aggregate var_samp on columns */
export type TFiles_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type TFiles_Var_Samp_Order_By = {
  size?: InputMaybe<TOrder_By>;
};

/** aggregate variance on columns */
export type TFiles_Variance_Fields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage.files" */
export type TFiles_Variance_Order_By = {
  size?: InputMaybe<TOrder_By>;
};

/** The table to store all replies to comments */
export type TIdea_Comment_Replies = {
  __typename?: 'idea_comment_replies';
  /** An object relationship */
  comment?: Maybe<TIdea_Comments>;
  commentId: Scalars['uuid'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  ideaId: Scalars['uuid'];
  targetUserId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<TUsers>;
  userId: Scalars['uuid'];
  value: Scalars['String'];
};

/** aggregated selection of "idea_comment_replies" */
export type TIdea_Comment_Replies_Aggregate = {
  __typename?: 'idea_comment_replies_aggregate';
  aggregate?: Maybe<TIdea_Comment_Replies_Aggregate_Fields>;
  nodes: Array<TIdea_Comment_Replies>;
};

export type TIdea_Comment_Replies_Aggregate_Bool_Exp = {
  count?: InputMaybe<TIdea_Comment_Replies_Aggregate_Bool_Exp_Count>;
};

export type TIdea_Comment_Replies_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TIdea_Comment_Replies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TIdea_Comment_Replies_Bool_Exp>;
  predicate: TInt_Comparison_Exp;
};

/** aggregate fields of "idea_comment_replies" */
export type TIdea_Comment_Replies_Aggregate_Fields = {
  __typename?: 'idea_comment_replies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TIdea_Comment_Replies_Max_Fields>;
  min?: Maybe<TIdea_Comment_Replies_Min_Fields>;
};


/** aggregate fields of "idea_comment_replies" */
export type TIdea_Comment_Replies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TIdea_Comment_Replies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "idea_comment_replies" */
export type TIdea_Comment_Replies_Aggregate_Order_By = {
  count?: InputMaybe<TOrder_By>;
  max?: InputMaybe<TIdea_Comment_Replies_Max_Order_By>;
  min?: InputMaybe<TIdea_Comment_Replies_Min_Order_By>;
};

/** input type for inserting array relation for remote table "idea_comment_replies" */
export type TIdea_Comment_Replies_Arr_Rel_Insert_Input = {
  data: Array<TIdea_Comment_Replies_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TIdea_Comment_Replies_On_Conflict>;
};

/** Boolean expression to filter rows from the table "idea_comment_replies". All fields are combined with a logical 'AND'. */
export type TIdea_Comment_Replies_Bool_Exp = {
  _and?: InputMaybe<Array<TIdea_Comment_Replies_Bool_Exp>>;
  _not?: InputMaybe<TIdea_Comment_Replies_Bool_Exp>;
  _or?: InputMaybe<Array<TIdea_Comment_Replies_Bool_Exp>>;
  comment?: InputMaybe<TIdea_Comments_Bool_Exp>;
  commentId?: InputMaybe<TUuid_Comparison_Exp>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  ideaId?: InputMaybe<TUuid_Comparison_Exp>;
  targetUserId?: InputMaybe<TUuid_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
  value?: InputMaybe<TString_Comparison_Exp>;
};

/** unique or primary key constraints on table "idea_comment_replies" */
export type TIdea_Comment_Replies_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'idea_comment_replies_pkey';

/** input type for inserting data into table "idea_comment_replies" */
export type TIdea_Comment_Replies_Insert_Input = {
  comment?: InputMaybe<TIdea_Comments_Obj_Rel_Insert_Input>;
  commentId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  targetUserId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TIdea_Comment_Replies_Max_Fields = {
  __typename?: 'idea_comment_replies_max_fields';
  commentId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  ideaId?: Maybe<Scalars['uuid']>;
  targetUserId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "idea_comment_replies" */
export type TIdea_Comment_Replies_Max_Order_By = {
  commentId?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  ideaId?: InputMaybe<TOrder_By>;
  targetUserId?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
  value?: InputMaybe<TOrder_By>;
};

/** aggregate min on columns */
export type TIdea_Comment_Replies_Min_Fields = {
  __typename?: 'idea_comment_replies_min_fields';
  commentId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  ideaId?: Maybe<Scalars['uuid']>;
  targetUserId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "idea_comment_replies" */
export type TIdea_Comment_Replies_Min_Order_By = {
  commentId?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  ideaId?: InputMaybe<TOrder_By>;
  targetUserId?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
  value?: InputMaybe<TOrder_By>;
};

/** response of any mutation on the table "idea_comment_replies" */
export type TIdea_Comment_Replies_Mutation_Response = {
  __typename?: 'idea_comment_replies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TIdea_Comment_Replies>;
};

/** on_conflict condition type for table "idea_comment_replies" */
export type TIdea_Comment_Replies_On_Conflict = {
  constraint: TIdea_Comment_Replies_Constraint;
  update_columns?: Array<TIdea_Comment_Replies_Update_Column>;
  where?: InputMaybe<TIdea_Comment_Replies_Bool_Exp>;
};

/** Ordering options when selecting data from "idea_comment_replies". */
export type TIdea_Comment_Replies_Order_By = {
  comment?: InputMaybe<TIdea_Comments_Order_By>;
  commentId?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  ideaId?: InputMaybe<TOrder_By>;
  targetUserId?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  userId?: InputMaybe<TOrder_By>;
  value?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: idea_comment_replies */
export type TIdea_Comment_Replies_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "idea_comment_replies" */
export type TIdea_Comment_Replies_Select_Column =
  /** column name */
  | 'commentId'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'ideaId'
  /** column name */
  | 'targetUserId'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId'
  /** column name */
  | 'value';

/** input type for updating data in table "idea_comment_replies" */
export type TIdea_Comment_Replies_Set_Input = {
  commentId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  targetUserId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "idea_comment_replies" */
export type TIdea_Comment_Replies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TIdea_Comment_Replies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TIdea_Comment_Replies_Stream_Cursor_Value_Input = {
  commentId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  targetUserId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "idea_comment_replies" */
export type TIdea_Comment_Replies_Update_Column =
  /** column name */
  | 'commentId'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'ideaId'
  /** column name */
  | 'targetUserId'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId'
  /** column name */
  | 'value';

export type TIdea_Comment_Replies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TIdea_Comment_Replies_Set_Input>;
  where: TIdea_Comment_Replies_Bool_Exp;
};

/** The table to store all comments for each idea */
export type TIdea_Comments = {
  __typename?: 'idea_comments';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  idea?: Maybe<TIdeas>;
  ideaId: Scalars['uuid'];
  isBoost: Scalars['Boolean'];
  /** An array relationship */
  replies: Array<TIdea_Comment_Replies>;
  /** An aggregate relationship */
  replies_aggregate: TIdea_Comment_Replies_Aggregate;
  status: TComment_Status_Types_Enum;
  targetUserId: Scalars['uuid'];
  totalReplies: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<TUsers>;
  userId: Scalars['uuid'];
  value: Scalars['String'];
};


/** The table to store all comments for each idea */
export type TIdea_CommentsRepliesArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comment_Replies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comment_Replies_Order_By>>;
  where?: InputMaybe<TIdea_Comment_Replies_Bool_Exp>;
};


/** The table to store all comments for each idea */
export type TIdea_CommentsReplies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comment_Replies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comment_Replies_Order_By>>;
  where?: InputMaybe<TIdea_Comment_Replies_Bool_Exp>;
};

/** aggregated selection of "idea_comments" */
export type TIdea_Comments_Aggregate = {
  __typename?: 'idea_comments_aggregate';
  aggregate?: Maybe<TIdea_Comments_Aggregate_Fields>;
  nodes: Array<TIdea_Comments>;
};

export type TIdea_Comments_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<TIdea_Comments_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<TIdea_Comments_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<TIdea_Comments_Aggregate_Bool_Exp_Count>;
};

export type TIdea_Comments_Aggregate_Bool_Exp_Bool_And = {
  arguments: TIdea_Comments_Select_Column_Idea_Comments_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TIdea_Comments_Bool_Exp>;
  predicate: TBoolean_Comparison_Exp;
};

export type TIdea_Comments_Aggregate_Bool_Exp_Bool_Or = {
  arguments: TIdea_Comments_Select_Column_Idea_Comments_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TIdea_Comments_Bool_Exp>;
  predicate: TBoolean_Comparison_Exp;
};

export type TIdea_Comments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TIdea_Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TIdea_Comments_Bool_Exp>;
  predicate: TInt_Comparison_Exp;
};

/** aggregate fields of "idea_comments" */
export type TIdea_Comments_Aggregate_Fields = {
  __typename?: 'idea_comments_aggregate_fields';
  avg?: Maybe<TIdea_Comments_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<TIdea_Comments_Max_Fields>;
  min?: Maybe<TIdea_Comments_Min_Fields>;
  stddev?: Maybe<TIdea_Comments_Stddev_Fields>;
  stddev_pop?: Maybe<TIdea_Comments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<TIdea_Comments_Stddev_Samp_Fields>;
  sum?: Maybe<TIdea_Comments_Sum_Fields>;
  var_pop?: Maybe<TIdea_Comments_Var_Pop_Fields>;
  var_samp?: Maybe<TIdea_Comments_Var_Samp_Fields>;
  variance?: Maybe<TIdea_Comments_Variance_Fields>;
};


/** aggregate fields of "idea_comments" */
export type TIdea_Comments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TIdea_Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "idea_comments" */
export type TIdea_Comments_Aggregate_Order_By = {
  avg?: InputMaybe<TIdea_Comments_Avg_Order_By>;
  count?: InputMaybe<TOrder_By>;
  max?: InputMaybe<TIdea_Comments_Max_Order_By>;
  min?: InputMaybe<TIdea_Comments_Min_Order_By>;
  stddev?: InputMaybe<TIdea_Comments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<TIdea_Comments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<TIdea_Comments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<TIdea_Comments_Sum_Order_By>;
  var_pop?: InputMaybe<TIdea_Comments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<TIdea_Comments_Var_Samp_Order_By>;
  variance?: InputMaybe<TIdea_Comments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "idea_comments" */
export type TIdea_Comments_Arr_Rel_Insert_Input = {
  data: Array<TIdea_Comments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TIdea_Comments_On_Conflict>;
};

/** aggregate avg on columns */
export type TIdea_Comments_Avg_Fields = {
  __typename?: 'idea_comments_avg_fields';
  totalReplies?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "idea_comments" */
export type TIdea_Comments_Avg_Order_By = {
  totalReplies?: InputMaybe<TOrder_By>;
};

/** Boolean expression to filter rows from the table "idea_comments". All fields are combined with a logical 'AND'. */
export type TIdea_Comments_Bool_Exp = {
  _and?: InputMaybe<Array<TIdea_Comments_Bool_Exp>>;
  _not?: InputMaybe<TIdea_Comments_Bool_Exp>;
  _or?: InputMaybe<Array<TIdea_Comments_Bool_Exp>>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  idea?: InputMaybe<TIdeas_Bool_Exp>;
  ideaId?: InputMaybe<TUuid_Comparison_Exp>;
  isBoost?: InputMaybe<TBoolean_Comparison_Exp>;
  replies?: InputMaybe<TIdea_Comment_Replies_Bool_Exp>;
  replies_aggregate?: InputMaybe<TIdea_Comment_Replies_Aggregate_Bool_Exp>;
  status?: InputMaybe<TComment_Status_Types_Enum_Comparison_Exp>;
  targetUserId?: InputMaybe<TUuid_Comparison_Exp>;
  totalReplies?: InputMaybe<TInt_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
  value?: InputMaybe<TString_Comparison_Exp>;
};

/** unique or primary key constraints on table "idea_comments" */
export type TIdea_Comments_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'idea_comments_pkey';

/** input type for incrementing numeric columns in table "idea_comments" */
export type TIdea_Comments_Inc_Input = {
  totalReplies?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "idea_comments" */
export type TIdea_Comments_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  idea?: InputMaybe<TIdeas_Obj_Rel_Insert_Input>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  isBoost?: InputMaybe<Scalars['Boolean']>;
  replies?: InputMaybe<TIdea_Comment_Replies_Arr_Rel_Insert_Input>;
  status?: InputMaybe<TComment_Status_Types_Enum>;
  targetUserId?: InputMaybe<Scalars['uuid']>;
  totalReplies?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TIdea_Comments_Max_Fields = {
  __typename?: 'idea_comments_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  ideaId?: Maybe<Scalars['uuid']>;
  targetUserId?: Maybe<Scalars['uuid']>;
  totalReplies?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "idea_comments" */
export type TIdea_Comments_Max_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  ideaId?: InputMaybe<TOrder_By>;
  targetUserId?: InputMaybe<TOrder_By>;
  totalReplies?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
  value?: InputMaybe<TOrder_By>;
};

/** aggregate min on columns */
export type TIdea_Comments_Min_Fields = {
  __typename?: 'idea_comments_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  ideaId?: Maybe<Scalars['uuid']>;
  targetUserId?: Maybe<Scalars['uuid']>;
  totalReplies?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "idea_comments" */
export type TIdea_Comments_Min_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  ideaId?: InputMaybe<TOrder_By>;
  targetUserId?: InputMaybe<TOrder_By>;
  totalReplies?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
  value?: InputMaybe<TOrder_By>;
};

/** response of any mutation on the table "idea_comments" */
export type TIdea_Comments_Mutation_Response = {
  __typename?: 'idea_comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TIdea_Comments>;
};

/** input type for inserting object relation for remote table "idea_comments" */
export type TIdea_Comments_Obj_Rel_Insert_Input = {
  data: TIdea_Comments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<TIdea_Comments_On_Conflict>;
};

/** on_conflict condition type for table "idea_comments" */
export type TIdea_Comments_On_Conflict = {
  constraint: TIdea_Comments_Constraint;
  update_columns?: Array<TIdea_Comments_Update_Column>;
  where?: InputMaybe<TIdea_Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "idea_comments". */
export type TIdea_Comments_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  idea?: InputMaybe<TIdeas_Order_By>;
  ideaId?: InputMaybe<TOrder_By>;
  isBoost?: InputMaybe<TOrder_By>;
  replies_aggregate?: InputMaybe<TIdea_Comment_Replies_Aggregate_Order_By>;
  status?: InputMaybe<TOrder_By>;
  targetUserId?: InputMaybe<TOrder_By>;
  totalReplies?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  userId?: InputMaybe<TOrder_By>;
  value?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: idea_comments */
export type TIdea_Comments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "idea_comments" */
export type TIdea_Comments_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'ideaId'
  /** column name */
  | 'isBoost'
  /** column name */
  | 'status'
  /** column name */
  | 'targetUserId'
  /** column name */
  | 'totalReplies'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId'
  /** column name */
  | 'value';

/** select "idea_comments_aggregate_bool_exp_bool_and_arguments_columns" columns of table "idea_comments" */
export type TIdea_Comments_Select_Column_Idea_Comments_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'isBoost';

/** select "idea_comments_aggregate_bool_exp_bool_or_arguments_columns" columns of table "idea_comments" */
export type TIdea_Comments_Select_Column_Idea_Comments_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'isBoost';

/** input type for updating data in table "idea_comments" */
export type TIdea_Comments_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  isBoost?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<TComment_Status_Types_Enum>;
  targetUserId?: InputMaybe<Scalars['uuid']>;
  totalReplies?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type TIdea_Comments_Stddev_Fields = {
  __typename?: 'idea_comments_stddev_fields';
  totalReplies?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "idea_comments" */
export type TIdea_Comments_Stddev_Order_By = {
  totalReplies?: InputMaybe<TOrder_By>;
};

/** aggregate stddev_pop on columns */
export type TIdea_Comments_Stddev_Pop_Fields = {
  __typename?: 'idea_comments_stddev_pop_fields';
  totalReplies?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "idea_comments" */
export type TIdea_Comments_Stddev_Pop_Order_By = {
  totalReplies?: InputMaybe<TOrder_By>;
};

/** aggregate stddev_samp on columns */
export type TIdea_Comments_Stddev_Samp_Fields = {
  __typename?: 'idea_comments_stddev_samp_fields';
  totalReplies?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "idea_comments" */
export type TIdea_Comments_Stddev_Samp_Order_By = {
  totalReplies?: InputMaybe<TOrder_By>;
};

/** Streaming cursor of the table "idea_comments" */
export type TIdea_Comments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TIdea_Comments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TIdea_Comments_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  isBoost?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<TComment_Status_Types_Enum>;
  targetUserId?: InputMaybe<Scalars['uuid']>;
  totalReplies?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type TIdea_Comments_Sum_Fields = {
  __typename?: 'idea_comments_sum_fields';
  totalReplies?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "idea_comments" */
export type TIdea_Comments_Sum_Order_By = {
  totalReplies?: InputMaybe<TOrder_By>;
};

/** update columns of table "idea_comments" */
export type TIdea_Comments_Update_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'ideaId'
  /** column name */
  | 'isBoost'
  /** column name */
  | 'status'
  /** column name */
  | 'targetUserId'
  /** column name */
  | 'totalReplies'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId'
  /** column name */
  | 'value';

export type TIdea_Comments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TIdea_Comments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TIdea_Comments_Set_Input>;
  where: TIdea_Comments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type TIdea_Comments_Var_Pop_Fields = {
  __typename?: 'idea_comments_var_pop_fields';
  totalReplies?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "idea_comments" */
export type TIdea_Comments_Var_Pop_Order_By = {
  totalReplies?: InputMaybe<TOrder_By>;
};

/** aggregate var_samp on columns */
export type TIdea_Comments_Var_Samp_Fields = {
  __typename?: 'idea_comments_var_samp_fields';
  totalReplies?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "idea_comments" */
export type TIdea_Comments_Var_Samp_Order_By = {
  totalReplies?: InputMaybe<TOrder_By>;
};

/** aggregate variance on columns */
export type TIdea_Comments_Variance_Fields = {
  __typename?: 'idea_comments_variance_fields';
  totalReplies?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "idea_comments" */
export type TIdea_Comments_Variance_Order_By = {
  totalReplies?: InputMaybe<TOrder_By>;
};

/** columns and relationships of "idea_preview" */
export type TIdea_Preview = {
  __typename?: 'idea_preview';
  /** An object relationship */
  boosted_idea?: Maybe<TBoosted_Ideas>;
  /** An array relationship */
  comments: Array<TIdea_Comments>;
  /** An aggregate relationship */
  comments_aggregate: TIdea_Comments_Aggregate;
  createdAt?: Maybe<Scalars['timestamptz']>;
  field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  interested: Array<TInterested_Ideas>;
  /** An aggregate relationship */
  interested_aggregate: TInterested_Ideas_Aggregate;
  isNew?: Maybe<Scalars['Boolean']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<TUsers>;
  userId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  votes: Array<TIdea_Votes>;
  /** An aggregate relationship */
  votes_aggregate: TIdea_Votes_Aggregate;
};


/** columns and relationships of "idea_preview" */
export type TIdea_PreviewCommentsArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comments_Order_By>>;
  where?: InputMaybe<TIdea_Comments_Bool_Exp>;
};


/** columns and relationships of "idea_preview" */
export type TIdea_PreviewComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comments_Order_By>>;
  where?: InputMaybe<TIdea_Comments_Bool_Exp>;
};


/** columns and relationships of "idea_preview" */
export type TIdea_PreviewInterestedArgs = {
  distinct_on?: InputMaybe<Array<TInterested_Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TInterested_Ideas_Order_By>>;
  where?: InputMaybe<TInterested_Ideas_Bool_Exp>;
};


/** columns and relationships of "idea_preview" */
export type TIdea_PreviewInterested_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TInterested_Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TInterested_Ideas_Order_By>>;
  where?: InputMaybe<TInterested_Ideas_Bool_Exp>;
};


/** columns and relationships of "idea_preview" */
export type TIdea_PreviewVotesArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Votes_Order_By>>;
  where?: InputMaybe<TIdea_Votes_Bool_Exp>;
};


/** columns and relationships of "idea_preview" */
export type TIdea_PreviewVotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Votes_Order_By>>;
  where?: InputMaybe<TIdea_Votes_Bool_Exp>;
};

/** aggregated selection of "idea_preview" */
export type TIdea_Preview_Aggregate = {
  __typename?: 'idea_preview_aggregate';
  aggregate?: Maybe<TIdea_Preview_Aggregate_Fields>;
  nodes: Array<TIdea_Preview>;
};

/** aggregate fields of "idea_preview" */
export type TIdea_Preview_Aggregate_Fields = {
  __typename?: 'idea_preview_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TIdea_Preview_Max_Fields>;
  min?: Maybe<TIdea_Preview_Min_Fields>;
};


/** aggregate fields of "idea_preview" */
export type TIdea_Preview_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TIdea_Preview_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "idea_preview". All fields are combined with a logical 'AND'. */
export type TIdea_Preview_Bool_Exp = {
  _and?: InputMaybe<Array<TIdea_Preview_Bool_Exp>>;
  _not?: InputMaybe<TIdea_Preview_Bool_Exp>;
  _or?: InputMaybe<Array<TIdea_Preview_Bool_Exp>>;
  boosted_idea?: InputMaybe<TBoosted_Ideas_Bool_Exp>;
  comments?: InputMaybe<TIdea_Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<TIdea_Comments_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  field?: InputMaybe<TString_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  interested?: InputMaybe<TInterested_Ideas_Bool_Exp>;
  interested_aggregate?: InputMaybe<TInterested_Ideas_Aggregate_Bool_Exp>;
  isNew?: InputMaybe<TBoolean_Comparison_Exp>;
  isPublished?: InputMaybe<TBoolean_Comparison_Exp>;
  name?: InputMaybe<TString_Comparison_Exp>;
  status?: InputMaybe<TString_Comparison_Exp>;
  summary?: InputMaybe<TString_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
  votes?: InputMaybe<TIdea_Votes_Bool_Exp>;
  votes_aggregate?: InputMaybe<TIdea_Votes_Aggregate_Bool_Exp>;
};

/** input type for inserting data into table "idea_preview" */
export type TIdea_Preview_Insert_Input = {
  boosted_idea?: InputMaybe<TBoosted_Ideas_Obj_Rel_Insert_Input>;
  comments?: InputMaybe<TIdea_Comments_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  field?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  interested?: InputMaybe<TInterested_Ideas_Arr_Rel_Insert_Input>;
  isNew?: InputMaybe<Scalars['Boolean']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
  votes?: InputMaybe<TIdea_Votes_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type TIdea_Preview_Max_Fields = {
  __typename?: 'idea_preview_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type TIdea_Preview_Min_Fields = {
  __typename?: 'idea_preview_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "idea_preview" */
export type TIdea_Preview_Mutation_Response = {
  __typename?: 'idea_preview_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TIdea_Preview>;
};

/** Ordering options when selecting data from "idea_preview". */
export type TIdea_Preview_Order_By = {
  boosted_idea?: InputMaybe<TBoosted_Ideas_Order_By>;
  comments_aggregate?: InputMaybe<TIdea_Comments_Aggregate_Order_By>;
  createdAt?: InputMaybe<TOrder_By>;
  field?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  interested_aggregate?: InputMaybe<TInterested_Ideas_Aggregate_Order_By>;
  isNew?: InputMaybe<TOrder_By>;
  isPublished?: InputMaybe<TOrder_By>;
  name?: InputMaybe<TOrder_By>;
  status?: InputMaybe<TOrder_By>;
  summary?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  userId?: InputMaybe<TOrder_By>;
  votes_aggregate?: InputMaybe<TIdea_Votes_Aggregate_Order_By>;
};

/** select columns of table "idea_preview" */
export type TIdea_Preview_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'field'
  /** column name */
  | 'id'
  /** column name */
  | 'isNew'
  /** column name */
  | 'isPublished'
  /** column name */
  | 'name'
  /** column name */
  | 'status'
  /** column name */
  | 'summary'
  /** column name */
  | 'userId';

/** input type for updating data in table "idea_preview" */
export type TIdea_Preview_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  field?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isNew?: InputMaybe<Scalars['Boolean']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "idea_preview" */
export type TIdea_Preview_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TIdea_Preview_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TIdea_Preview_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  field?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isNew?: InputMaybe<Scalars['Boolean']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

export type TIdea_Preview_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TIdea_Preview_Set_Input>;
  where: TIdea_Preview_Bool_Exp;
};

/** The table to store all ideas */
export type TIdea_Votes = {
  __typename?: 'idea_votes';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  idea?: Maybe<TIdeas>;
  ideaId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<TUsers>;
  userId: Scalars['uuid'];
};

/** aggregated selection of "idea_votes" */
export type TIdea_Votes_Aggregate = {
  __typename?: 'idea_votes_aggregate';
  aggregate?: Maybe<TIdea_Votes_Aggregate_Fields>;
  nodes: Array<TIdea_Votes>;
};

export type TIdea_Votes_Aggregate_Bool_Exp = {
  count?: InputMaybe<TIdea_Votes_Aggregate_Bool_Exp_Count>;
};

export type TIdea_Votes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TIdea_Votes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TIdea_Votes_Bool_Exp>;
  predicate: TInt_Comparison_Exp;
};

/** aggregate fields of "idea_votes" */
export type TIdea_Votes_Aggregate_Fields = {
  __typename?: 'idea_votes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TIdea_Votes_Max_Fields>;
  min?: Maybe<TIdea_Votes_Min_Fields>;
};


/** aggregate fields of "idea_votes" */
export type TIdea_Votes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TIdea_Votes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "idea_votes" */
export type TIdea_Votes_Aggregate_Order_By = {
  count?: InputMaybe<TOrder_By>;
  max?: InputMaybe<TIdea_Votes_Max_Order_By>;
  min?: InputMaybe<TIdea_Votes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "idea_votes" */
export type TIdea_Votes_Arr_Rel_Insert_Input = {
  data: Array<TIdea_Votes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TIdea_Votes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "idea_votes". All fields are combined with a logical 'AND'. */
export type TIdea_Votes_Bool_Exp = {
  _and?: InputMaybe<Array<TIdea_Votes_Bool_Exp>>;
  _not?: InputMaybe<TIdea_Votes_Bool_Exp>;
  _or?: InputMaybe<Array<TIdea_Votes_Bool_Exp>>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  idea?: InputMaybe<TIdeas_Bool_Exp>;
  ideaId?: InputMaybe<TUuid_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "idea_votes" */
export type TIdea_Votes_Constraint =
  /** unique or primary key constraint on columns "idea_id", "user_id" */
  | 'idea_votes_pkey';

/** input type for inserting data into table "idea_votes" */
export type TIdea_Votes_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  idea?: InputMaybe<TIdeas_Obj_Rel_Insert_Input>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TIdea_Votes_Max_Fields = {
  __typename?: 'idea_votes_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  ideaId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "idea_votes" */
export type TIdea_Votes_Max_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  ideaId?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** aggregate min on columns */
export type TIdea_Votes_Min_Fields = {
  __typename?: 'idea_votes_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  ideaId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "idea_votes" */
export type TIdea_Votes_Min_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  ideaId?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** response of any mutation on the table "idea_votes" */
export type TIdea_Votes_Mutation_Response = {
  __typename?: 'idea_votes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TIdea_Votes>;
};

/** on_conflict condition type for table "idea_votes" */
export type TIdea_Votes_On_Conflict = {
  constraint: TIdea_Votes_Constraint;
  update_columns?: Array<TIdea_Votes_Update_Column>;
  where?: InputMaybe<TIdea_Votes_Bool_Exp>;
};

/** Ordering options when selecting data from "idea_votes". */
export type TIdea_Votes_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  idea?: InputMaybe<TIdeas_Order_By>;
  ideaId?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: idea_votes */
export type TIdea_Votes_Pk_Columns_Input = {
  ideaId: Scalars['uuid'];
  userId: Scalars['uuid'];
};

/** select columns of table "idea_votes" */
export type TIdea_Votes_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'ideaId'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

/** input type for updating data in table "idea_votes" */
export type TIdea_Votes_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "idea_votes" */
export type TIdea_Votes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TIdea_Votes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TIdea_Votes_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "idea_votes" */
export type TIdea_Votes_Update_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'ideaId'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

export type TIdea_Votes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TIdea_Votes_Set_Input>;
  where: TIdea_Votes_Bool_Exp;
};

/** The ideas created by all users */
export type TIdeas = {
  __typename?: 'ideas';
  additionalInformation?: Maybe<Scalars['String']>;
  /** An object relationship */
  boosted_idea?: Maybe<TBoosted_Ideas>;
  businessPlan?: Maybe<Scalars['String']>;
  /** An array relationship */
  comments: Array<TIdea_Comments>;
  /** An aggregate relationship */
  comments_aggregate: TIdea_Comments_Aggregate;
  competitors?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  field: Scalars['String'];
  id: Scalars['uuid'];
  /** An array relationship */
  interested: Array<TInterested_Ideas>;
  /** An aggregate relationship */
  interested_aggregate: TInterested_Ideas_Aggregate;
  isPublished: Scalars['Boolean'];
  name: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  totalComments: Scalars['Int'];
  totalInterested: Scalars['Int'];
  totalVotes: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<TUsers>;
  userId: Scalars['uuid'];
  /** An array relationship */
  votes: Array<TIdea_Votes>;
  /** An aggregate relationship */
  votes_aggregate: TIdea_Votes_Aggregate;
};


/** The ideas created by all users */
export type TIdeasCommentsArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comments_Order_By>>;
  where?: InputMaybe<TIdea_Comments_Bool_Exp>;
};


/** The ideas created by all users */
export type TIdeasComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comments_Order_By>>;
  where?: InputMaybe<TIdea_Comments_Bool_Exp>;
};


/** The ideas created by all users */
export type TIdeasInterestedArgs = {
  distinct_on?: InputMaybe<Array<TInterested_Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TInterested_Ideas_Order_By>>;
  where?: InputMaybe<TInterested_Ideas_Bool_Exp>;
};


/** The ideas created by all users */
export type TIdeasInterested_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TInterested_Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TInterested_Ideas_Order_By>>;
  where?: InputMaybe<TInterested_Ideas_Bool_Exp>;
};


/** The ideas created by all users */
export type TIdeasVotesArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Votes_Order_By>>;
  where?: InputMaybe<TIdea_Votes_Bool_Exp>;
};


/** The ideas created by all users */
export type TIdeasVotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Votes_Order_By>>;
  where?: InputMaybe<TIdea_Votes_Bool_Exp>;
};

/** aggregated selection of "ideas" */
export type TIdeas_Aggregate = {
  __typename?: 'ideas_aggregate';
  aggregate?: Maybe<TIdeas_Aggregate_Fields>;
  nodes: Array<TIdeas>;
};

export type TIdeas_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<TIdeas_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<TIdeas_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<TIdeas_Aggregate_Bool_Exp_Count>;
};

export type TIdeas_Aggregate_Bool_Exp_Bool_And = {
  arguments: TIdeas_Select_Column_Ideas_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TIdeas_Bool_Exp>;
  predicate: TBoolean_Comparison_Exp;
};

export type TIdeas_Aggregate_Bool_Exp_Bool_Or = {
  arguments: TIdeas_Select_Column_Ideas_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TIdeas_Bool_Exp>;
  predicate: TBoolean_Comparison_Exp;
};

export type TIdeas_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TIdeas_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TIdeas_Bool_Exp>;
  predicate: TInt_Comparison_Exp;
};

/** aggregate fields of "ideas" */
export type TIdeas_Aggregate_Fields = {
  __typename?: 'ideas_aggregate_fields';
  avg?: Maybe<TIdeas_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<TIdeas_Max_Fields>;
  min?: Maybe<TIdeas_Min_Fields>;
  stddev?: Maybe<TIdeas_Stddev_Fields>;
  stddev_pop?: Maybe<TIdeas_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<TIdeas_Stddev_Samp_Fields>;
  sum?: Maybe<TIdeas_Sum_Fields>;
  var_pop?: Maybe<TIdeas_Var_Pop_Fields>;
  var_samp?: Maybe<TIdeas_Var_Samp_Fields>;
  variance?: Maybe<TIdeas_Variance_Fields>;
};


/** aggregate fields of "ideas" */
export type TIdeas_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TIdeas_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ideas" */
export type TIdeas_Aggregate_Order_By = {
  avg?: InputMaybe<TIdeas_Avg_Order_By>;
  count?: InputMaybe<TOrder_By>;
  max?: InputMaybe<TIdeas_Max_Order_By>;
  min?: InputMaybe<TIdeas_Min_Order_By>;
  stddev?: InputMaybe<TIdeas_Stddev_Order_By>;
  stddev_pop?: InputMaybe<TIdeas_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<TIdeas_Stddev_Samp_Order_By>;
  sum?: InputMaybe<TIdeas_Sum_Order_By>;
  var_pop?: InputMaybe<TIdeas_Var_Pop_Order_By>;
  var_samp?: InputMaybe<TIdeas_Var_Samp_Order_By>;
  variance?: InputMaybe<TIdeas_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ideas" */
export type TIdeas_Arr_Rel_Insert_Input = {
  data: Array<TIdeas_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TIdeas_On_Conflict>;
};

/** aggregate avg on columns */
export type TIdeas_Avg_Fields = {
  __typename?: 'ideas_avg_fields';
  totalComments?: Maybe<Scalars['Float']>;
  totalInterested?: Maybe<Scalars['Float']>;
  totalVotes?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ideas" */
export type TIdeas_Avg_Order_By = {
  totalComments?: InputMaybe<TOrder_By>;
  totalInterested?: InputMaybe<TOrder_By>;
  totalVotes?: InputMaybe<TOrder_By>;
};

/** Boolean expression to filter rows from the table "ideas". All fields are combined with a logical 'AND'. */
export type TIdeas_Bool_Exp = {
  _and?: InputMaybe<Array<TIdeas_Bool_Exp>>;
  _not?: InputMaybe<TIdeas_Bool_Exp>;
  _or?: InputMaybe<Array<TIdeas_Bool_Exp>>;
  additionalInformation?: InputMaybe<TString_Comparison_Exp>;
  boosted_idea?: InputMaybe<TBoosted_Ideas_Bool_Exp>;
  businessPlan?: InputMaybe<TString_Comparison_Exp>;
  comments?: InputMaybe<TIdea_Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<TIdea_Comments_Aggregate_Bool_Exp>;
  competitors?: InputMaybe<TString_Comparison_Exp>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  description?: InputMaybe<TString_Comparison_Exp>;
  field?: InputMaybe<TString_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  interested?: InputMaybe<TInterested_Ideas_Bool_Exp>;
  interested_aggregate?: InputMaybe<TInterested_Ideas_Aggregate_Bool_Exp>;
  isPublished?: InputMaybe<TBoolean_Comparison_Exp>;
  name?: InputMaybe<TString_Comparison_Exp>;
  status?: InputMaybe<TString_Comparison_Exp>;
  summary?: InputMaybe<TString_Comparison_Exp>;
  team?: InputMaybe<TString_Comparison_Exp>;
  totalComments?: InputMaybe<TInt_Comparison_Exp>;
  totalInterested?: InputMaybe<TInt_Comparison_Exp>;
  totalVotes?: InputMaybe<TInt_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
  votes?: InputMaybe<TIdea_Votes_Bool_Exp>;
  votes_aggregate?: InputMaybe<TIdea_Votes_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "ideas" */
export type TIdeas_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'ideas_pkey';

/** input type for incrementing numeric columns in table "ideas" */
export type TIdeas_Inc_Input = {
  totalComments?: InputMaybe<Scalars['Int']>;
  totalInterested?: InputMaybe<Scalars['Int']>;
  totalVotes?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "ideas" */
export type TIdeas_Insert_Input = {
  additionalInformation?: InputMaybe<Scalars['String']>;
  boosted_idea?: InputMaybe<TBoosted_Ideas_Obj_Rel_Insert_Input>;
  businessPlan?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<TIdea_Comments_Arr_Rel_Insert_Input>;
  competitors?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  interested?: InputMaybe<TInterested_Ideas_Arr_Rel_Insert_Input>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  team?: InputMaybe<Scalars['String']>;
  totalComments?: InputMaybe<Scalars['Int']>;
  totalInterested?: InputMaybe<Scalars['Int']>;
  totalVotes?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
  votes?: InputMaybe<TIdea_Votes_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type TIdeas_Max_Fields = {
  __typename?: 'ideas_max_fields';
  additionalInformation?: Maybe<Scalars['String']>;
  businessPlan?: Maybe<Scalars['String']>;
  competitors?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  totalComments?: Maybe<Scalars['Int']>;
  totalInterested?: Maybe<Scalars['Int']>;
  totalVotes?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "ideas" */
export type TIdeas_Max_Order_By = {
  additionalInformation?: InputMaybe<TOrder_By>;
  businessPlan?: InputMaybe<TOrder_By>;
  competitors?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  description?: InputMaybe<TOrder_By>;
  field?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  name?: InputMaybe<TOrder_By>;
  status?: InputMaybe<TOrder_By>;
  summary?: InputMaybe<TOrder_By>;
  team?: InputMaybe<TOrder_By>;
  totalComments?: InputMaybe<TOrder_By>;
  totalInterested?: InputMaybe<TOrder_By>;
  totalVotes?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** aggregate min on columns */
export type TIdeas_Min_Fields = {
  __typename?: 'ideas_min_fields';
  additionalInformation?: Maybe<Scalars['String']>;
  businessPlan?: Maybe<Scalars['String']>;
  competitors?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  totalComments?: Maybe<Scalars['Int']>;
  totalInterested?: Maybe<Scalars['Int']>;
  totalVotes?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "ideas" */
export type TIdeas_Min_Order_By = {
  additionalInformation?: InputMaybe<TOrder_By>;
  businessPlan?: InputMaybe<TOrder_By>;
  competitors?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  description?: InputMaybe<TOrder_By>;
  field?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  name?: InputMaybe<TOrder_By>;
  status?: InputMaybe<TOrder_By>;
  summary?: InputMaybe<TOrder_By>;
  team?: InputMaybe<TOrder_By>;
  totalComments?: InputMaybe<TOrder_By>;
  totalInterested?: InputMaybe<TOrder_By>;
  totalVotes?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** response of any mutation on the table "ideas" */
export type TIdeas_Mutation_Response = {
  __typename?: 'ideas_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TIdeas>;
};

/** input type for inserting object relation for remote table "ideas" */
export type TIdeas_Obj_Rel_Insert_Input = {
  data: TIdeas_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<TIdeas_On_Conflict>;
};

/** on_conflict condition type for table "ideas" */
export type TIdeas_On_Conflict = {
  constraint: TIdeas_Constraint;
  update_columns?: Array<TIdeas_Update_Column>;
  where?: InputMaybe<TIdeas_Bool_Exp>;
};

/** Ordering options when selecting data from "ideas". */
export type TIdeas_Order_By = {
  additionalInformation?: InputMaybe<TOrder_By>;
  boosted_idea?: InputMaybe<TBoosted_Ideas_Order_By>;
  businessPlan?: InputMaybe<TOrder_By>;
  comments_aggregate?: InputMaybe<TIdea_Comments_Aggregate_Order_By>;
  competitors?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  description?: InputMaybe<TOrder_By>;
  field?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  interested_aggregate?: InputMaybe<TInterested_Ideas_Aggregate_Order_By>;
  isPublished?: InputMaybe<TOrder_By>;
  name?: InputMaybe<TOrder_By>;
  status?: InputMaybe<TOrder_By>;
  summary?: InputMaybe<TOrder_By>;
  team?: InputMaybe<TOrder_By>;
  totalComments?: InputMaybe<TOrder_By>;
  totalInterested?: InputMaybe<TOrder_By>;
  totalVotes?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  userId?: InputMaybe<TOrder_By>;
  votes_aggregate?: InputMaybe<TIdea_Votes_Aggregate_Order_By>;
};

/** primary key columns input for table: ideas */
export type TIdeas_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ideas" */
export type TIdeas_Select_Column =
  /** column name */
  | 'additionalInformation'
  /** column name */
  | 'businessPlan'
  /** column name */
  | 'competitors'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'description'
  /** column name */
  | 'field'
  /** column name */
  | 'id'
  /** column name */
  | 'isPublished'
  /** column name */
  | 'name'
  /** column name */
  | 'status'
  /** column name */
  | 'summary'
  /** column name */
  | 'team'
  /** column name */
  | 'totalComments'
  /** column name */
  | 'totalInterested'
  /** column name */
  | 'totalVotes'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

/** select "ideas_aggregate_bool_exp_bool_and_arguments_columns" columns of table "ideas" */
export type TIdeas_Select_Column_Ideas_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'isPublished';

/** select "ideas_aggregate_bool_exp_bool_or_arguments_columns" columns of table "ideas" */
export type TIdeas_Select_Column_Ideas_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'isPublished';

/** input type for updating data in table "ideas" */
export type TIdeas_Set_Input = {
  additionalInformation?: InputMaybe<Scalars['String']>;
  businessPlan?: InputMaybe<Scalars['String']>;
  competitors?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  team?: InputMaybe<Scalars['String']>;
  totalComments?: InputMaybe<Scalars['Int']>;
  totalInterested?: InputMaybe<Scalars['Int']>;
  totalVotes?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type TIdeas_Stddev_Fields = {
  __typename?: 'ideas_stddev_fields';
  totalComments?: Maybe<Scalars['Float']>;
  totalInterested?: Maybe<Scalars['Float']>;
  totalVotes?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ideas" */
export type TIdeas_Stddev_Order_By = {
  totalComments?: InputMaybe<TOrder_By>;
  totalInterested?: InputMaybe<TOrder_By>;
  totalVotes?: InputMaybe<TOrder_By>;
};

/** aggregate stddev_pop on columns */
export type TIdeas_Stddev_Pop_Fields = {
  __typename?: 'ideas_stddev_pop_fields';
  totalComments?: Maybe<Scalars['Float']>;
  totalInterested?: Maybe<Scalars['Float']>;
  totalVotes?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ideas" */
export type TIdeas_Stddev_Pop_Order_By = {
  totalComments?: InputMaybe<TOrder_By>;
  totalInterested?: InputMaybe<TOrder_By>;
  totalVotes?: InputMaybe<TOrder_By>;
};

/** aggregate stddev_samp on columns */
export type TIdeas_Stddev_Samp_Fields = {
  __typename?: 'ideas_stddev_samp_fields';
  totalComments?: Maybe<Scalars['Float']>;
  totalInterested?: Maybe<Scalars['Float']>;
  totalVotes?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ideas" */
export type TIdeas_Stddev_Samp_Order_By = {
  totalComments?: InputMaybe<TOrder_By>;
  totalInterested?: InputMaybe<TOrder_By>;
  totalVotes?: InputMaybe<TOrder_By>;
};

/** Streaming cursor of the table "ideas" */
export type TIdeas_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TIdeas_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TIdeas_Stream_Cursor_Value_Input = {
  additionalInformation?: InputMaybe<Scalars['String']>;
  businessPlan?: InputMaybe<Scalars['String']>;
  competitors?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  team?: InputMaybe<Scalars['String']>;
  totalComments?: InputMaybe<Scalars['Int']>;
  totalInterested?: InputMaybe<Scalars['Int']>;
  totalVotes?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type TIdeas_Sum_Fields = {
  __typename?: 'ideas_sum_fields';
  totalComments?: Maybe<Scalars['Int']>;
  totalInterested?: Maybe<Scalars['Int']>;
  totalVotes?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ideas" */
export type TIdeas_Sum_Order_By = {
  totalComments?: InputMaybe<TOrder_By>;
  totalInterested?: InputMaybe<TOrder_By>;
  totalVotes?: InputMaybe<TOrder_By>;
};

/** update columns of table "ideas" */
export type TIdeas_Update_Column =
  /** column name */
  | 'additionalInformation'
  /** column name */
  | 'businessPlan'
  /** column name */
  | 'competitors'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'description'
  /** column name */
  | 'field'
  /** column name */
  | 'id'
  /** column name */
  | 'isPublished'
  /** column name */
  | 'name'
  /** column name */
  | 'status'
  /** column name */
  | 'summary'
  /** column name */
  | 'team'
  /** column name */
  | 'totalComments'
  /** column name */
  | 'totalInterested'
  /** column name */
  | 'totalVotes'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

export type TIdeas_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TIdeas_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TIdeas_Set_Input>;
  where: TIdeas_Bool_Exp;
};

/** aggregate var_pop on columns */
export type TIdeas_Var_Pop_Fields = {
  __typename?: 'ideas_var_pop_fields';
  totalComments?: Maybe<Scalars['Float']>;
  totalInterested?: Maybe<Scalars['Float']>;
  totalVotes?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ideas" */
export type TIdeas_Var_Pop_Order_By = {
  totalComments?: InputMaybe<TOrder_By>;
  totalInterested?: InputMaybe<TOrder_By>;
  totalVotes?: InputMaybe<TOrder_By>;
};

/** aggregate var_samp on columns */
export type TIdeas_Var_Samp_Fields = {
  __typename?: 'ideas_var_samp_fields';
  totalComments?: Maybe<Scalars['Float']>;
  totalInterested?: Maybe<Scalars['Float']>;
  totalVotes?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ideas" */
export type TIdeas_Var_Samp_Order_By = {
  totalComments?: InputMaybe<TOrder_By>;
  totalInterested?: InputMaybe<TOrder_By>;
  totalVotes?: InputMaybe<TOrder_By>;
};

/** aggregate variance on columns */
export type TIdeas_Variance_Fields = {
  __typename?: 'ideas_variance_fields';
  totalComments?: Maybe<Scalars['Float']>;
  totalInterested?: Maybe<Scalars['Float']>;
  totalVotes?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ideas" */
export type TIdeas_Variance_Order_By = {
  totalComments?: InputMaybe<TOrder_By>;
  totalInterested?: InputMaybe<TOrder_By>;
  totalVotes?: InputMaybe<TOrder_By>;
};

/** The table to store all ideas users are interested in */
export type TInterested_Ideas = {
  __typename?: 'interested_ideas';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  ideaId: Scalars['uuid'];
  targetUserId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<TUsers>;
  userId: Scalars['uuid'];
};

/** aggregated selection of "interested_ideas" */
export type TInterested_Ideas_Aggregate = {
  __typename?: 'interested_ideas_aggregate';
  aggregate?: Maybe<TInterested_Ideas_Aggregate_Fields>;
  nodes: Array<TInterested_Ideas>;
};

export type TInterested_Ideas_Aggregate_Bool_Exp = {
  count?: InputMaybe<TInterested_Ideas_Aggregate_Bool_Exp_Count>;
};

export type TInterested_Ideas_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TInterested_Ideas_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TInterested_Ideas_Bool_Exp>;
  predicate: TInt_Comparison_Exp;
};

/** aggregate fields of "interested_ideas" */
export type TInterested_Ideas_Aggregate_Fields = {
  __typename?: 'interested_ideas_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TInterested_Ideas_Max_Fields>;
  min?: Maybe<TInterested_Ideas_Min_Fields>;
};


/** aggregate fields of "interested_ideas" */
export type TInterested_Ideas_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TInterested_Ideas_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "interested_ideas" */
export type TInterested_Ideas_Aggregate_Order_By = {
  count?: InputMaybe<TOrder_By>;
  max?: InputMaybe<TInterested_Ideas_Max_Order_By>;
  min?: InputMaybe<TInterested_Ideas_Min_Order_By>;
};

/** input type for inserting array relation for remote table "interested_ideas" */
export type TInterested_Ideas_Arr_Rel_Insert_Input = {
  data: Array<TInterested_Ideas_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TInterested_Ideas_On_Conflict>;
};

/** Boolean expression to filter rows from the table "interested_ideas". All fields are combined with a logical 'AND'. */
export type TInterested_Ideas_Bool_Exp = {
  _and?: InputMaybe<Array<TInterested_Ideas_Bool_Exp>>;
  _not?: InputMaybe<TInterested_Ideas_Bool_Exp>;
  _or?: InputMaybe<Array<TInterested_Ideas_Bool_Exp>>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  ideaId?: InputMaybe<TUuid_Comparison_Exp>;
  targetUserId?: InputMaybe<TUuid_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "interested_ideas" */
export type TInterested_Ideas_Constraint =
  /** unique or primary key constraint on columns "idea_id", "user_id" */
  | 'interested_ideas_pkey';

/** input type for inserting data into table "interested_ideas" */
export type TInterested_Ideas_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  targetUserId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TInterested_Ideas_Max_Fields = {
  __typename?: 'interested_ideas_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  ideaId?: Maybe<Scalars['uuid']>;
  targetUserId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "interested_ideas" */
export type TInterested_Ideas_Max_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  ideaId?: InputMaybe<TOrder_By>;
  targetUserId?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** aggregate min on columns */
export type TInterested_Ideas_Min_Fields = {
  __typename?: 'interested_ideas_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  ideaId?: Maybe<Scalars['uuid']>;
  targetUserId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "interested_ideas" */
export type TInterested_Ideas_Min_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  ideaId?: InputMaybe<TOrder_By>;
  targetUserId?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** response of any mutation on the table "interested_ideas" */
export type TInterested_Ideas_Mutation_Response = {
  __typename?: 'interested_ideas_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TInterested_Ideas>;
};

/** on_conflict condition type for table "interested_ideas" */
export type TInterested_Ideas_On_Conflict = {
  constraint: TInterested_Ideas_Constraint;
  update_columns?: Array<TInterested_Ideas_Update_Column>;
  where?: InputMaybe<TInterested_Ideas_Bool_Exp>;
};

/** Ordering options when selecting data from "interested_ideas". */
export type TInterested_Ideas_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  ideaId?: InputMaybe<TOrder_By>;
  targetUserId?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: interested_ideas */
export type TInterested_Ideas_Pk_Columns_Input = {
  ideaId: Scalars['uuid'];
  userId: Scalars['uuid'];
};

/** select columns of table "interested_ideas" */
export type TInterested_Ideas_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'ideaId'
  /** column name */
  | 'targetUserId'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

/** input type for updating data in table "interested_ideas" */
export type TInterested_Ideas_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  targetUserId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "interested_ideas" */
export type TInterested_Ideas_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TInterested_Ideas_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TInterested_Ideas_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  targetUserId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "interested_ideas" */
export type TInterested_Ideas_Update_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'ideaId'
  /** column name */
  | 'targetUserId'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

export type TInterested_Ideas_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TInterested_Ideas_Set_Input>;
  where: TInterested_Ideas_Bool_Exp;
};

export type TJsonb_Cast_Exp = {
  String?: InputMaybe<TString_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type TJsonb_Comparison_Exp = {
  _cast?: InputMaybe<TJsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "match_settings" */
export type TMatch_Settings = {
  __typename?: 'match_settings';
  lookingFor?: Maybe<Scalars['String']>;
  skills?: Maybe<Scalars['jsonb']>;
  type?: Maybe<Scalars['String']>;
  /** An object relationship */
  user: TUsers;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "match_settings" */
export type TMatch_SettingsSkillsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "match_settings" */
export type TMatch_Settings_Aggregate = {
  __typename?: 'match_settings_aggregate';
  aggregate?: Maybe<TMatch_Settings_Aggregate_Fields>;
  nodes: Array<TMatch_Settings>;
};

/** aggregate fields of "match_settings" */
export type TMatch_Settings_Aggregate_Fields = {
  __typename?: 'match_settings_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TMatch_Settings_Max_Fields>;
  min?: Maybe<TMatch_Settings_Min_Fields>;
};


/** aggregate fields of "match_settings" */
export type TMatch_Settings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TMatch_Settings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type TMatch_Settings_Append_Input = {
  skills?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "match_settings". All fields are combined with a logical 'AND'. */
export type TMatch_Settings_Bool_Exp = {
  _and?: InputMaybe<Array<TMatch_Settings_Bool_Exp>>;
  _not?: InputMaybe<TMatch_Settings_Bool_Exp>;
  _or?: InputMaybe<Array<TMatch_Settings_Bool_Exp>>;
  lookingFor?: InputMaybe<TString_Comparison_Exp>;
  skills?: InputMaybe<TJsonb_Comparison_Exp>;
  type?: InputMaybe<TString_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  user_id?: InputMaybe<TUuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "match_settings" */
export type TMatch_Settings_Constraint =
  /** unique or primary key constraint on columns "user_id" */
  | 'matchmake_preferences_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type TMatch_Settings_Delete_At_Path_Input = {
  skills?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type TMatch_Settings_Delete_Elem_Input = {
  skills?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type TMatch_Settings_Delete_Key_Input = {
  skills?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "match_settings" */
export type TMatch_Settings_Insert_Input = {
  lookingFor?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Scalars['jsonb']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TMatch_Settings_Max_Fields = {
  __typename?: 'match_settings_max_fields';
  lookingFor?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type TMatch_Settings_Min_Fields = {
  __typename?: 'match_settings_min_fields';
  lookingFor?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "match_settings" */
export type TMatch_Settings_Mutation_Response = {
  __typename?: 'match_settings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TMatch_Settings>;
};

/** input type for inserting object relation for remote table "match_settings" */
export type TMatch_Settings_Obj_Rel_Insert_Input = {
  data: TMatch_Settings_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<TMatch_Settings_On_Conflict>;
};

/** on_conflict condition type for table "match_settings" */
export type TMatch_Settings_On_Conflict = {
  constraint: TMatch_Settings_Constraint;
  update_columns?: Array<TMatch_Settings_Update_Column>;
  where?: InputMaybe<TMatch_Settings_Bool_Exp>;
};

/** Ordering options when selecting data from "match_settings". */
export type TMatch_Settings_Order_By = {
  lookingFor?: InputMaybe<TOrder_By>;
  skills?: InputMaybe<TOrder_By>;
  type?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  user_id?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: match_settings */
export type TMatch_Settings_Pk_Columns_Input = {
  user_id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type TMatch_Settings_Prepend_Input = {
  skills?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "match_settings" */
export type TMatch_Settings_Select_Column =
  /** column name */
  | 'lookingFor'
  /** column name */
  | 'skills'
  /** column name */
  | 'type'
  /** column name */
  | 'user_id';

/** input type for updating data in table "match_settings" */
export type TMatch_Settings_Set_Input = {
  lookingFor?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Scalars['jsonb']>;
  type?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "match_settings" */
export type TMatch_Settings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TMatch_Settings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TMatch_Settings_Stream_Cursor_Value_Input = {
  lookingFor?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Scalars['jsonb']>;
  type?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "match_settings" */
export type TMatch_Settings_Update_Column =
  /** column name */
  | 'lookingFor'
  /** column name */
  | 'skills'
  /** column name */
  | 'type'
  /** column name */
  | 'user_id';

export type TMatch_Settings_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<TMatch_Settings_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<TMatch_Settings_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<TMatch_Settings_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<TMatch_Settings_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<TMatch_Settings_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TMatch_Settings_Set_Input>;
  where: TMatch_Settings_Bool_Exp;
};

/** All chat messages */
export type TMessage = {
  __typename?: 'message';
  content: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  messageThread: TMessage_Thread;
  /** An object relationship */
  sender: TUsers;
  senderUserId: Scalars['uuid'];
  threadId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "message" */
export type TMessage_Aggregate = {
  __typename?: 'message_aggregate';
  aggregate?: Maybe<TMessage_Aggregate_Fields>;
  nodes: Array<TMessage>;
};

export type TMessage_Aggregate_Bool_Exp = {
  count?: InputMaybe<TMessage_Aggregate_Bool_Exp_Count>;
};

export type TMessage_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TMessage_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TMessage_Bool_Exp>;
  predicate: TInt_Comparison_Exp;
};

/** aggregate fields of "message" */
export type TMessage_Aggregate_Fields = {
  __typename?: 'message_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TMessage_Max_Fields>;
  min?: Maybe<TMessage_Min_Fields>;
};


/** aggregate fields of "message" */
export type TMessage_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TMessage_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "message" */
export type TMessage_Aggregate_Order_By = {
  count?: InputMaybe<TOrder_By>;
  max?: InputMaybe<TMessage_Max_Order_By>;
  min?: InputMaybe<TMessage_Min_Order_By>;
};

/** input type for inserting array relation for remote table "message" */
export type TMessage_Arr_Rel_Insert_Input = {
  data: Array<TMessage_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TMessage_On_Conflict>;
};

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type TMessage_Bool_Exp = {
  _and?: InputMaybe<Array<TMessage_Bool_Exp>>;
  _not?: InputMaybe<TMessage_Bool_Exp>;
  _or?: InputMaybe<Array<TMessage_Bool_Exp>>;
  content?: InputMaybe<TString_Comparison_Exp>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  messageThread?: InputMaybe<TMessage_Thread_Bool_Exp>;
  sender?: InputMaybe<TUsers_Bool_Exp>;
  senderUserId?: InputMaybe<TUuid_Comparison_Exp>;
  threadId?: InputMaybe<TUuid_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "message" */
export type TMessage_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'message_pkey';

/** input type for inserting data into table "message" */
export type TMessage_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  messageThread?: InputMaybe<TMessage_Thread_Obj_Rel_Insert_Input>;
  sender?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  senderUserId?: InputMaybe<Scalars['uuid']>;
  threadId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TMessage_Max_Fields = {
  __typename?: 'message_max_fields';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  senderUserId?: Maybe<Scalars['uuid']>;
  threadId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "message" */
export type TMessage_Max_Order_By = {
  content?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  senderUserId?: InputMaybe<TOrder_By>;
  threadId?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
};

/** aggregate min on columns */
export type TMessage_Min_Fields = {
  __typename?: 'message_min_fields';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  senderUserId?: Maybe<Scalars['uuid']>;
  threadId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "message" */
export type TMessage_Min_Order_By = {
  content?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  senderUserId?: InputMaybe<TOrder_By>;
  threadId?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
};

/** response of any mutation on the table "message" */
export type TMessage_Mutation_Response = {
  __typename?: 'message_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TMessage>;
};

/** on_conflict condition type for table "message" */
export type TMessage_On_Conflict = {
  constraint: TMessage_Constraint;
  update_columns?: Array<TMessage_Update_Column>;
  where?: InputMaybe<TMessage_Bool_Exp>;
};

/** Ordering options when selecting data from "message". */
export type TMessage_Order_By = {
  content?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  messageThread?: InputMaybe<TMessage_Thread_Order_By>;
  sender?: InputMaybe<TUsers_Order_By>;
  senderUserId?: InputMaybe<TOrder_By>;
  threadId?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: message */
export type TMessage_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "message" */
export type TMessage_Select_Column =
  /** column name */
  | 'content'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'senderUserId'
  /** column name */
  | 'threadId'
  /** column name */
  | 'updatedAt';

/** input type for updating data in table "message" */
export type TMessage_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  senderUserId?: InputMaybe<Scalars['uuid']>;
  threadId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "message" */
export type TMessage_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TMessage_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TMessage_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  senderUserId?: InputMaybe<Scalars['uuid']>;
  threadId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** The parent table for all messages for a particular thread between two users */
export type TMessage_Thread = {
  __typename?: 'message_thread';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  messageThreadUsers: Array<TMessage_Thread_Users>;
  /** An aggregate relationship */
  messageThreadUsers_aggregate: TMessage_Thread_Users_Aggregate;
  /** An array relationship */
  messages: Array<TMessage>;
  /** An aggregate relationship */
  messages_aggregate: TMessage_Aggregate;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  owner?: Maybe<TUsers>;
  ownerId?: Maybe<Scalars['uuid']>;
  updatedAt: Scalars['timestamptz'];
};


/** The parent table for all messages for a particular thread between two users */
export type TMessage_ThreadMessageThreadUsersArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Users_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
};


/** The parent table for all messages for a particular thread between two users */
export type TMessage_ThreadMessageThreadUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Users_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
};


/** The parent table for all messages for a particular thread between two users */
export type TMessage_ThreadMessagesArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Order_By>>;
  where?: InputMaybe<TMessage_Bool_Exp>;
};


/** The parent table for all messages for a particular thread between two users */
export type TMessage_ThreadMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Order_By>>;
  where?: InputMaybe<TMessage_Bool_Exp>;
};

/** aggregated selection of "message_thread" */
export type TMessage_Thread_Aggregate = {
  __typename?: 'message_thread_aggregate';
  aggregate?: Maybe<TMessage_Thread_Aggregate_Fields>;
  nodes: Array<TMessage_Thread>;
};

export type TMessage_Thread_Aggregate_Bool_Exp = {
  count?: InputMaybe<TMessage_Thread_Aggregate_Bool_Exp_Count>;
};

export type TMessage_Thread_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TMessage_Thread_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TMessage_Thread_Bool_Exp>;
  predicate: TInt_Comparison_Exp;
};

/** aggregate fields of "message_thread" */
export type TMessage_Thread_Aggregate_Fields = {
  __typename?: 'message_thread_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TMessage_Thread_Max_Fields>;
  min?: Maybe<TMessage_Thread_Min_Fields>;
};


/** aggregate fields of "message_thread" */
export type TMessage_Thread_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TMessage_Thread_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "message_thread" */
export type TMessage_Thread_Aggregate_Order_By = {
  count?: InputMaybe<TOrder_By>;
  max?: InputMaybe<TMessage_Thread_Max_Order_By>;
  min?: InputMaybe<TMessage_Thread_Min_Order_By>;
};

/** input type for inserting array relation for remote table "message_thread" */
export type TMessage_Thread_Arr_Rel_Insert_Input = {
  data: Array<TMessage_Thread_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TMessage_Thread_On_Conflict>;
};

/** Boolean expression to filter rows from the table "message_thread". All fields are combined with a logical 'AND'. */
export type TMessage_Thread_Bool_Exp = {
  _and?: InputMaybe<Array<TMessage_Thread_Bool_Exp>>;
  _not?: InputMaybe<TMessage_Thread_Bool_Exp>;
  _or?: InputMaybe<Array<TMessage_Thread_Bool_Exp>>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  messageThreadUsers?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
  messageThreadUsers_aggregate?: InputMaybe<TMessage_Thread_Users_Aggregate_Bool_Exp>;
  messages?: InputMaybe<TMessage_Bool_Exp>;
  messages_aggregate?: InputMaybe<TMessage_Aggregate_Bool_Exp>;
  name?: InputMaybe<TString_Comparison_Exp>;
  owner?: InputMaybe<TUsers_Bool_Exp>;
  ownerId?: InputMaybe<TUuid_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "message_thread" */
export type TMessage_Thread_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'message_thread_pkey';

/** input type for inserting data into table "message_thread" */
export type TMessage_Thread_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  messageThreadUsers?: InputMaybe<TMessage_Thread_Users_Arr_Rel_Insert_Input>;
  messages?: InputMaybe<TMessage_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  ownerId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TMessage_Thread_Max_Fields = {
  __typename?: 'message_thread_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "message_thread" */
export type TMessage_Thread_Max_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  name?: InputMaybe<TOrder_By>;
  ownerId?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
};

/** aggregate min on columns */
export type TMessage_Thread_Min_Fields = {
  __typename?: 'message_thread_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "message_thread" */
export type TMessage_Thread_Min_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  name?: InputMaybe<TOrder_By>;
  ownerId?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
};

/** response of any mutation on the table "message_thread" */
export type TMessage_Thread_Mutation_Response = {
  __typename?: 'message_thread_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TMessage_Thread>;
};

/** input type for inserting object relation for remote table "message_thread" */
export type TMessage_Thread_Obj_Rel_Insert_Input = {
  data: TMessage_Thread_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<TMessage_Thread_On_Conflict>;
};

/** on_conflict condition type for table "message_thread" */
export type TMessage_Thread_On_Conflict = {
  constraint: TMessage_Thread_Constraint;
  update_columns?: Array<TMessage_Thread_Update_Column>;
  where?: InputMaybe<TMessage_Thread_Bool_Exp>;
};

/** Ordering options when selecting data from "message_thread". */
export type TMessage_Thread_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  messageThreadUsers_aggregate?: InputMaybe<TMessage_Thread_Users_Aggregate_Order_By>;
  messages_aggregate?: InputMaybe<TMessage_Aggregate_Order_By>;
  name?: InputMaybe<TOrder_By>;
  owner?: InputMaybe<TUsers_Order_By>;
  ownerId?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: message_thread */
export type TMessage_Thread_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "message_thread" */
export type TMessage_Thread_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'ownerId'
  /** column name */
  | 'updatedAt';

/** input type for updating data in table "message_thread" */
export type TMessage_Thread_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "message_thread" */
export type TMessage_Thread_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TMessage_Thread_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TMessage_Thread_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "message_thread" */
export type TMessage_Thread_Update_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'ownerId'
  /** column name */
  | 'updatedAt';

export type TMessage_Thread_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TMessage_Thread_Set_Input>;
  where: TMessage_Thread_Bool_Exp;
};

/** All users participating in the message thread */
export type TMessage_Thread_Users = {
  __typename?: 'message_thread_users';
  /** An object relationship */
  messageThread: TMessage_Thread;
  threadId: Scalars['uuid'];
  /** An object relationship */
  user: TUsers;
  userId: Scalars['uuid'];
};

/** aggregated selection of "message_thread_users" */
export type TMessage_Thread_Users_Aggregate = {
  __typename?: 'message_thread_users_aggregate';
  aggregate?: Maybe<TMessage_Thread_Users_Aggregate_Fields>;
  nodes: Array<TMessage_Thread_Users>;
};

export type TMessage_Thread_Users_Aggregate_Bool_Exp = {
  count?: InputMaybe<TMessage_Thread_Users_Aggregate_Bool_Exp_Count>;
};

export type TMessage_Thread_Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TMessage_Thread_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
  predicate: TInt_Comparison_Exp;
};

/** aggregate fields of "message_thread_users" */
export type TMessage_Thread_Users_Aggregate_Fields = {
  __typename?: 'message_thread_users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TMessage_Thread_Users_Max_Fields>;
  min?: Maybe<TMessage_Thread_Users_Min_Fields>;
};


/** aggregate fields of "message_thread_users" */
export type TMessage_Thread_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TMessage_Thread_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "message_thread_users" */
export type TMessage_Thread_Users_Aggregate_Order_By = {
  count?: InputMaybe<TOrder_By>;
  max?: InputMaybe<TMessage_Thread_Users_Max_Order_By>;
  min?: InputMaybe<TMessage_Thread_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "message_thread_users" */
export type TMessage_Thread_Users_Arr_Rel_Insert_Input = {
  data: Array<TMessage_Thread_Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TMessage_Thread_Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "message_thread_users". All fields are combined with a logical 'AND'. */
export type TMessage_Thread_Users_Bool_Exp = {
  _and?: InputMaybe<Array<TMessage_Thread_Users_Bool_Exp>>;
  _not?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
  _or?: InputMaybe<Array<TMessage_Thread_Users_Bool_Exp>>;
  messageThread?: InputMaybe<TMessage_Thread_Bool_Exp>;
  threadId?: InputMaybe<TUuid_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "message_thread_users" */
export type TMessage_Thread_Users_Constraint =
  /** unique or primary key constraint on columns "user_id", "thread_id" */
  | 'message_thread_users_pkey';

/** input type for inserting data into table "message_thread_users" */
export type TMessage_Thread_Users_Insert_Input = {
  messageThread?: InputMaybe<TMessage_Thread_Obj_Rel_Insert_Input>;
  threadId?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TMessage_Thread_Users_Max_Fields = {
  __typename?: 'message_thread_users_max_fields';
  threadId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "message_thread_users" */
export type TMessage_Thread_Users_Max_Order_By = {
  threadId?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** aggregate min on columns */
export type TMessage_Thread_Users_Min_Fields = {
  __typename?: 'message_thread_users_min_fields';
  threadId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "message_thread_users" */
export type TMessage_Thread_Users_Min_Order_By = {
  threadId?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** response of any mutation on the table "message_thread_users" */
export type TMessage_Thread_Users_Mutation_Response = {
  __typename?: 'message_thread_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TMessage_Thread_Users>;
};

/** on_conflict condition type for table "message_thread_users" */
export type TMessage_Thread_Users_On_Conflict = {
  constraint: TMessage_Thread_Users_Constraint;
  update_columns?: Array<TMessage_Thread_Users_Update_Column>;
  where?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "message_thread_users". */
export type TMessage_Thread_Users_Order_By = {
  messageThread?: InputMaybe<TMessage_Thread_Order_By>;
  threadId?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: message_thread_users */
export type TMessage_Thread_Users_Pk_Columns_Input = {
  threadId: Scalars['uuid'];
  userId: Scalars['uuid'];
};

/** select columns of table "message_thread_users" */
export type TMessage_Thread_Users_Select_Column =
  /** column name */
  | 'threadId'
  /** column name */
  | 'userId';

/** input type for updating data in table "message_thread_users" */
export type TMessage_Thread_Users_Set_Input = {
  threadId?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "message_thread_users" */
export type TMessage_Thread_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TMessage_Thread_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TMessage_Thread_Users_Stream_Cursor_Value_Input = {
  threadId?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "message_thread_users" */
export type TMessage_Thread_Users_Update_Column =
  /** column name */
  | 'threadId'
  /** column name */
  | 'userId';

export type TMessage_Thread_Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TMessage_Thread_Users_Set_Input>;
  where: TMessage_Thread_Users_Bool_Exp;
};

/** update columns of table "message" */
export type TMessage_Update_Column =
  /** column name */
  | 'content'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'senderUserId'
  /** column name */
  | 'threadId'
  /** column name */
  | 'updatedAt';

export type TMessage_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TMessage_Set_Input>;
  where: TMessage_Bool_Exp;
};

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type TMoney_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['money']>;
  _gt?: InputMaybe<Scalars['money']>;
  _gte?: InputMaybe<Scalars['money']>;
  _in?: InputMaybe<Array<Scalars['money']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['money']>;
  _lte?: InputMaybe<Scalars['money']>;
  _neq?: InputMaybe<Scalars['money']>;
  _nin?: InputMaybe<Array<Scalars['money']>>;
};

/** mutation root */
export type TMutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<TAuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<TAuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<TAuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<TAuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<TAuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<TAuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<TAuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<TAuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<TAuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<TAuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<TAuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<TAuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey?: Maybe<TAuthUserSecurityKeys>;
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys?: Maybe<TAuthUserSecurityKeys_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<TBuckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<TBuckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<TFiles>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<TFiles_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<TUsers>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<TUsers_Mutation_Response>;
  /** delete data from the table: "activity" */
  delete_activity?: Maybe<TActivity_Mutation_Response>;
  /** delete single row from the table: "activity" */
  delete_activity_by_pk?: Maybe<TActivity>;
  /** delete data from the table: "boosted_idea_log" */
  delete_boosted_idea_log?: Maybe<TBoosted_Idea_Log_Mutation_Response>;
  /** delete single row from the table: "boosted_idea_log" */
  delete_boosted_idea_log_by_pk?: Maybe<TBoosted_Idea_Log>;
  /** delete data from the table: "boosted_ideas" */
  delete_boosted_ideas?: Maybe<TBoosted_Ideas_Mutation_Response>;
  /** delete single row from the table: "boosted_ideas" */
  delete_boosted_ideas_by_pk?: Maybe<TBoosted_Ideas>;
  /** delete data from the table: "comment_status_types" */
  delete_comment_status_types?: Maybe<TComment_Status_Types_Mutation_Response>;
  /** delete single row from the table: "comment_status_types" */
  delete_comment_status_types_by_pk?: Maybe<TComment_Status_Types>;
  /** delete data from the table: "idea_comment_replies" */
  delete_idea_comment_replies?: Maybe<TIdea_Comment_Replies_Mutation_Response>;
  /** delete single row from the table: "idea_comment_replies" */
  delete_idea_comment_replies_by_pk?: Maybe<TIdea_Comment_Replies>;
  /** delete data from the table: "idea_comments" */
  delete_idea_comments?: Maybe<TIdea_Comments_Mutation_Response>;
  /** delete single row from the table: "idea_comments" */
  delete_idea_comments_by_pk?: Maybe<TIdea_Comments>;
  /** delete data from the table: "idea_preview" */
  delete_idea_preview?: Maybe<TIdea_Preview_Mutation_Response>;
  /** delete data from the table: "idea_votes" */
  delete_idea_votes?: Maybe<TIdea_Votes_Mutation_Response>;
  /** delete single row from the table: "idea_votes" */
  delete_idea_votes_by_pk?: Maybe<TIdea_Votes>;
  /** delete data from the table: "ideas" */
  delete_ideas?: Maybe<TIdeas_Mutation_Response>;
  /** delete single row from the table: "ideas" */
  delete_ideas_by_pk?: Maybe<TIdeas>;
  /** delete data from the table: "interested_ideas" */
  delete_interested_ideas?: Maybe<TInterested_Ideas_Mutation_Response>;
  /** delete single row from the table: "interested_ideas" */
  delete_interested_ideas_by_pk?: Maybe<TInterested_Ideas>;
  /** delete data from the table: "match_settings" */
  delete_match_settings?: Maybe<TMatch_Settings_Mutation_Response>;
  /** delete single row from the table: "match_settings" */
  delete_match_settings_by_pk?: Maybe<TMatch_Settings>;
  /** delete data from the table: "message" */
  delete_message?: Maybe<TMessage_Mutation_Response>;
  /** delete single row from the table: "message" */
  delete_message_by_pk?: Maybe<TMessage>;
  /** delete data from the table: "message_thread" */
  delete_message_thread?: Maybe<TMessage_Thread_Mutation_Response>;
  /** delete single row from the table: "message_thread" */
  delete_message_thread_by_pk?: Maybe<TMessage_Thread>;
  /** delete data from the table: "message_thread_users" */
  delete_message_thread_users?: Maybe<TMessage_Thread_Users_Mutation_Response>;
  /** delete single row from the table: "message_thread_users" */
  delete_message_thread_users_by_pk?: Maybe<TMessage_Thread_Users>;
  /** delete data from the table: "notification_types" */
  delete_notification_types?: Maybe<TNotification_Types_Mutation_Response>;
  /** delete single row from the table: "notification_types" */
  delete_notification_types_by_pk?: Maybe<TNotification_Types>;
  /** delete data from the table: "report" */
  delete_report?: Maybe<TReport_Mutation_Response>;
  /** delete single row from the table: "report" */
  delete_report_by_pk?: Maybe<TReport>;
  /** delete data from the table: "user_address" */
  delete_user_address?: Maybe<TUser_Address_Mutation_Response>;
  /** delete single row from the table: "user_address" */
  delete_user_address_by_pk?: Maybe<TUser_Address>;
  /** delete data from the table: "user_esteem_points_currency" */
  delete_user_esteem_points_currency?: Maybe<TUser_Esteem_Points_Currency_Mutation_Response>;
  /** delete single row from the table: "user_esteem_points_currency" */
  delete_user_esteem_points_currency_by_pk?: Maybe<TUser_Esteem_Points_Currency>;
  /** delete data from the table: "user_followers" */
  delete_user_followers?: Maybe<TUser_Followers_Mutation_Response>;
  /** delete single row from the table: "user_followers" */
  delete_user_followers_by_pk?: Maybe<TUser_Followers>;
  /** delete data from the table: "user_notifications" */
  delete_user_notifications?: Maybe<TUser_Notifications_Mutation_Response>;
  /** delete single row from the table: "user_notifications" */
  delete_user_notifications_by_pk?: Maybe<TUser_Notifications>;
  /** delete data from the table: "user_profile" */
  delete_user_profile?: Maybe<TUser_Profile_Mutation_Response>;
  /** delete single row from the table: "user_profile" */
  delete_user_profile_by_pk?: Maybe<TUser_Profile>;
  /** delete data from the table: "v_comments" */
  delete_v_comments?: Maybe<TV_Comments_Mutation_Response>;
  /** delete data from the table: "withdrawal_requests" */
  delete_withdrawal_requests?: Maybe<TWithdrawal_Requests_Mutation_Response>;
  /** delete single row from the table: "withdrawal_requests" */
  delete_withdrawal_requests_by_pk?: Maybe<TWithdrawal_Requests>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<TAuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<TAuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<TAuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<TAuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<TAuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<TAuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<TAuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<TAuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<TAuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<TAuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<TAuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<TAuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey?: Maybe<TAuthUserSecurityKeys>;
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys?: Maybe<TAuthUserSecurityKeys_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<TBuckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<TBuckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<TFiles>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<TFiles_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<TUsers>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<TUsers_Mutation_Response>;
  /** insert data into the table: "activity" */
  insert_activity?: Maybe<TActivity_Mutation_Response>;
  /** insert a single row into the table: "activity" */
  insert_activity_one?: Maybe<TActivity>;
  /** insert data into the table: "boosted_idea_log" */
  insert_boosted_idea_log?: Maybe<TBoosted_Idea_Log_Mutation_Response>;
  /** insert a single row into the table: "boosted_idea_log" */
  insert_boosted_idea_log_one?: Maybe<TBoosted_Idea_Log>;
  /** insert data into the table: "boosted_ideas" */
  insert_boosted_ideas?: Maybe<TBoosted_Ideas_Mutation_Response>;
  /** insert a single row into the table: "boosted_ideas" */
  insert_boosted_ideas_one?: Maybe<TBoosted_Ideas>;
  /** insert data into the table: "comment_status_types" */
  insert_comment_status_types?: Maybe<TComment_Status_Types_Mutation_Response>;
  /** insert a single row into the table: "comment_status_types" */
  insert_comment_status_types_one?: Maybe<TComment_Status_Types>;
  /** insert data into the table: "idea_comment_replies" */
  insert_idea_comment_replies?: Maybe<TIdea_Comment_Replies_Mutation_Response>;
  /** insert a single row into the table: "idea_comment_replies" */
  insert_idea_comment_replies_one?: Maybe<TIdea_Comment_Replies>;
  /** insert data into the table: "idea_comments" */
  insert_idea_comments?: Maybe<TIdea_Comments_Mutation_Response>;
  /** insert a single row into the table: "idea_comments" */
  insert_idea_comments_one?: Maybe<TIdea_Comments>;
  /** insert data into the table: "idea_preview" */
  insert_idea_preview?: Maybe<TIdea_Preview_Mutation_Response>;
  /** insert a single row into the table: "idea_preview" */
  insert_idea_preview_one?: Maybe<TIdea_Preview>;
  /** insert data into the table: "idea_votes" */
  insert_idea_votes?: Maybe<TIdea_Votes_Mutation_Response>;
  /** insert a single row into the table: "idea_votes" */
  insert_idea_votes_one?: Maybe<TIdea_Votes>;
  /** insert data into the table: "ideas" */
  insert_ideas?: Maybe<TIdeas_Mutation_Response>;
  /** insert a single row into the table: "ideas" */
  insert_ideas_one?: Maybe<TIdeas>;
  /** insert data into the table: "interested_ideas" */
  insert_interested_ideas?: Maybe<TInterested_Ideas_Mutation_Response>;
  /** insert a single row into the table: "interested_ideas" */
  insert_interested_ideas_one?: Maybe<TInterested_Ideas>;
  /** insert data into the table: "match_settings" */
  insert_match_settings?: Maybe<TMatch_Settings_Mutation_Response>;
  /** insert a single row into the table: "match_settings" */
  insert_match_settings_one?: Maybe<TMatch_Settings>;
  /** insert data into the table: "message" */
  insert_message?: Maybe<TMessage_Mutation_Response>;
  /** insert a single row into the table: "message" */
  insert_message_one?: Maybe<TMessage>;
  /** insert data into the table: "message_thread" */
  insert_message_thread?: Maybe<TMessage_Thread_Mutation_Response>;
  /** insert a single row into the table: "message_thread" */
  insert_message_thread_one?: Maybe<TMessage_Thread>;
  /** insert data into the table: "message_thread_users" */
  insert_message_thread_users?: Maybe<TMessage_Thread_Users_Mutation_Response>;
  /** insert a single row into the table: "message_thread_users" */
  insert_message_thread_users_one?: Maybe<TMessage_Thread_Users>;
  /** insert data into the table: "notification_types" */
  insert_notification_types?: Maybe<TNotification_Types_Mutation_Response>;
  /** insert a single row into the table: "notification_types" */
  insert_notification_types_one?: Maybe<TNotification_Types>;
  /** insert data into the table: "report" */
  insert_report?: Maybe<TReport_Mutation_Response>;
  /** insert a single row into the table: "report" */
  insert_report_one?: Maybe<TReport>;
  /** insert data into the table: "user_address" */
  insert_user_address?: Maybe<TUser_Address_Mutation_Response>;
  /** insert a single row into the table: "user_address" */
  insert_user_address_one?: Maybe<TUser_Address>;
  /** insert data into the table: "user_esteem_points_currency" */
  insert_user_esteem_points_currency?: Maybe<TUser_Esteem_Points_Currency_Mutation_Response>;
  /** insert a single row into the table: "user_esteem_points_currency" */
  insert_user_esteem_points_currency_one?: Maybe<TUser_Esteem_Points_Currency>;
  /** insert data into the table: "user_followers" */
  insert_user_followers?: Maybe<TUser_Followers_Mutation_Response>;
  /** insert a single row into the table: "user_followers" */
  insert_user_followers_one?: Maybe<TUser_Followers>;
  /** insert data into the table: "user_notifications" */
  insert_user_notifications?: Maybe<TUser_Notifications_Mutation_Response>;
  /** insert a single row into the table: "user_notifications" */
  insert_user_notifications_one?: Maybe<TUser_Notifications>;
  /** insert data into the table: "user_profile" */
  insert_user_profile?: Maybe<TUser_Profile_Mutation_Response>;
  /** insert a single row into the table: "user_profile" */
  insert_user_profile_one?: Maybe<TUser_Profile>;
  /** insert data into the table: "v_comments" */
  insert_v_comments?: Maybe<TV_Comments_Mutation_Response>;
  /** insert a single row into the table: "v_comments" */
  insert_v_comments_one?: Maybe<TV_Comments>;
  /** insert data into the table: "withdrawal_requests" */
  insert_withdrawal_requests?: Maybe<TWithdrawal_Requests_Mutation_Response>;
  /** insert a single row into the table: "withdrawal_requests" */
  insert_withdrawal_requests_one?: Maybe<TWithdrawal_Requests>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<TAuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<TAuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<TAuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<TAuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<TAuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<TAuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<TAuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<TAuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<TAuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<TAuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<TAuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<TAuthUserRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey?: Maybe<TAuthUserSecurityKeys>;
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys?: Maybe<TAuthUserSecurityKeys_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<TBuckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<TBuckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<TFiles>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<TFiles_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<TUsers>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<TUsers_Mutation_Response>;
  /** update data of the table: "activity" */
  update_activity?: Maybe<TActivity_Mutation_Response>;
  /** update single row of the table: "activity" */
  update_activity_by_pk?: Maybe<TActivity>;
  /** update multiples rows of table: "activity" */
  update_activity_many?: Maybe<Array<Maybe<TActivity_Mutation_Response>>>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<Array<Maybe<TAuthProviderRequests_Mutation_Response>>>;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<Array<Maybe<TAuthProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<Array<Maybe<TAuthRefreshTokens_Mutation_Response>>>;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<TAuthRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<Array<Maybe<TAuthUserProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<Array<Maybe<TAuthUserRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_security_keys" */
  update_authUserSecurityKeys_many?: Maybe<Array<Maybe<TAuthUserSecurityKeys_Mutation_Response>>>;
  /** update data of the table: "boosted_idea_log" */
  update_boosted_idea_log?: Maybe<TBoosted_Idea_Log_Mutation_Response>;
  /** update single row of the table: "boosted_idea_log" */
  update_boosted_idea_log_by_pk?: Maybe<TBoosted_Idea_Log>;
  /** update multiples rows of table: "boosted_idea_log" */
  update_boosted_idea_log_many?: Maybe<Array<Maybe<TBoosted_Idea_Log_Mutation_Response>>>;
  /** update data of the table: "boosted_ideas" */
  update_boosted_ideas?: Maybe<TBoosted_Ideas_Mutation_Response>;
  /** update single row of the table: "boosted_ideas" */
  update_boosted_ideas_by_pk?: Maybe<TBoosted_Ideas>;
  /** update multiples rows of table: "boosted_ideas" */
  update_boosted_ideas_many?: Maybe<Array<Maybe<TBoosted_Ideas_Mutation_Response>>>;
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<TBuckets_Mutation_Response>>>;
  /** update data of the table: "comment_status_types" */
  update_comment_status_types?: Maybe<TComment_Status_Types_Mutation_Response>;
  /** update single row of the table: "comment_status_types" */
  update_comment_status_types_by_pk?: Maybe<TComment_Status_Types>;
  /** update multiples rows of table: "comment_status_types" */
  update_comment_status_types_many?: Maybe<Array<Maybe<TComment_Status_Types_Mutation_Response>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<TFiles_Mutation_Response>>>;
  /** update data of the table: "idea_comment_replies" */
  update_idea_comment_replies?: Maybe<TIdea_Comment_Replies_Mutation_Response>;
  /** update single row of the table: "idea_comment_replies" */
  update_idea_comment_replies_by_pk?: Maybe<TIdea_Comment_Replies>;
  /** update multiples rows of table: "idea_comment_replies" */
  update_idea_comment_replies_many?: Maybe<Array<Maybe<TIdea_Comment_Replies_Mutation_Response>>>;
  /** update data of the table: "idea_comments" */
  update_idea_comments?: Maybe<TIdea_Comments_Mutation_Response>;
  /** update single row of the table: "idea_comments" */
  update_idea_comments_by_pk?: Maybe<TIdea_Comments>;
  /** update multiples rows of table: "idea_comments" */
  update_idea_comments_many?: Maybe<Array<Maybe<TIdea_Comments_Mutation_Response>>>;
  /** update data of the table: "idea_preview" */
  update_idea_preview?: Maybe<TIdea_Preview_Mutation_Response>;
  /** update multiples rows of table: "idea_preview" */
  update_idea_preview_many?: Maybe<Array<Maybe<TIdea_Preview_Mutation_Response>>>;
  /** update data of the table: "idea_votes" */
  update_idea_votes?: Maybe<TIdea_Votes_Mutation_Response>;
  /** update single row of the table: "idea_votes" */
  update_idea_votes_by_pk?: Maybe<TIdea_Votes>;
  /** update multiples rows of table: "idea_votes" */
  update_idea_votes_many?: Maybe<Array<Maybe<TIdea_Votes_Mutation_Response>>>;
  /** update data of the table: "ideas" */
  update_ideas?: Maybe<TIdeas_Mutation_Response>;
  /** update single row of the table: "ideas" */
  update_ideas_by_pk?: Maybe<TIdeas>;
  /** update multiples rows of table: "ideas" */
  update_ideas_many?: Maybe<Array<Maybe<TIdeas_Mutation_Response>>>;
  /** update data of the table: "interested_ideas" */
  update_interested_ideas?: Maybe<TInterested_Ideas_Mutation_Response>;
  /** update single row of the table: "interested_ideas" */
  update_interested_ideas_by_pk?: Maybe<TInterested_Ideas>;
  /** update multiples rows of table: "interested_ideas" */
  update_interested_ideas_many?: Maybe<Array<Maybe<TInterested_Ideas_Mutation_Response>>>;
  /** update data of the table: "match_settings" */
  update_match_settings?: Maybe<TMatch_Settings_Mutation_Response>;
  /** update single row of the table: "match_settings" */
  update_match_settings_by_pk?: Maybe<TMatch_Settings>;
  /** update multiples rows of table: "match_settings" */
  update_match_settings_many?: Maybe<Array<Maybe<TMatch_Settings_Mutation_Response>>>;
  /** update data of the table: "message" */
  update_message?: Maybe<TMessage_Mutation_Response>;
  /** update single row of the table: "message" */
  update_message_by_pk?: Maybe<TMessage>;
  /** update multiples rows of table: "message" */
  update_message_many?: Maybe<Array<Maybe<TMessage_Mutation_Response>>>;
  /** update data of the table: "message_thread" */
  update_message_thread?: Maybe<TMessage_Thread_Mutation_Response>;
  /** update single row of the table: "message_thread" */
  update_message_thread_by_pk?: Maybe<TMessage_Thread>;
  /** update multiples rows of table: "message_thread" */
  update_message_thread_many?: Maybe<Array<Maybe<TMessage_Thread_Mutation_Response>>>;
  /** update data of the table: "message_thread_users" */
  update_message_thread_users?: Maybe<TMessage_Thread_Users_Mutation_Response>;
  /** update single row of the table: "message_thread_users" */
  update_message_thread_users_by_pk?: Maybe<TMessage_Thread_Users>;
  /** update multiples rows of table: "message_thread_users" */
  update_message_thread_users_many?: Maybe<Array<Maybe<TMessage_Thread_Users_Mutation_Response>>>;
  /** update data of the table: "notification_types" */
  update_notification_types?: Maybe<TNotification_Types_Mutation_Response>;
  /** update single row of the table: "notification_types" */
  update_notification_types_by_pk?: Maybe<TNotification_Types>;
  /** update multiples rows of table: "notification_types" */
  update_notification_types_many?: Maybe<Array<Maybe<TNotification_Types_Mutation_Response>>>;
  /** update data of the table: "report" */
  update_report?: Maybe<TReport_Mutation_Response>;
  /** update single row of the table: "report" */
  update_report_by_pk?: Maybe<TReport>;
  /** update multiples rows of table: "report" */
  update_report_many?: Maybe<Array<Maybe<TReport_Mutation_Response>>>;
  /** update data of the table: "user_address" */
  update_user_address?: Maybe<TUser_Address_Mutation_Response>;
  /** update single row of the table: "user_address" */
  update_user_address_by_pk?: Maybe<TUser_Address>;
  /** update multiples rows of table: "user_address" */
  update_user_address_many?: Maybe<Array<Maybe<TUser_Address_Mutation_Response>>>;
  /** update data of the table: "user_esteem_points_currency" */
  update_user_esteem_points_currency?: Maybe<TUser_Esteem_Points_Currency_Mutation_Response>;
  /** update single row of the table: "user_esteem_points_currency" */
  update_user_esteem_points_currency_by_pk?: Maybe<TUser_Esteem_Points_Currency>;
  /** update multiples rows of table: "user_esteem_points_currency" */
  update_user_esteem_points_currency_many?: Maybe<Array<Maybe<TUser_Esteem_Points_Currency_Mutation_Response>>>;
  /** update data of the table: "user_followers" */
  update_user_followers?: Maybe<TUser_Followers_Mutation_Response>;
  /** update single row of the table: "user_followers" */
  update_user_followers_by_pk?: Maybe<TUser_Followers>;
  /** update multiples rows of table: "user_followers" */
  update_user_followers_many?: Maybe<Array<Maybe<TUser_Followers_Mutation_Response>>>;
  /** update data of the table: "user_notifications" */
  update_user_notifications?: Maybe<TUser_Notifications_Mutation_Response>;
  /** update single row of the table: "user_notifications" */
  update_user_notifications_by_pk?: Maybe<TUser_Notifications>;
  /** update multiples rows of table: "user_notifications" */
  update_user_notifications_many?: Maybe<Array<Maybe<TUser_Notifications_Mutation_Response>>>;
  /** update data of the table: "user_profile" */
  update_user_profile?: Maybe<TUser_Profile_Mutation_Response>;
  /** update single row of the table: "user_profile" */
  update_user_profile_by_pk?: Maybe<TUser_Profile>;
  /** update multiples rows of table: "user_profile" */
  update_user_profile_many?: Maybe<Array<Maybe<TUser_Profile_Mutation_Response>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<TUsers_Mutation_Response>>>;
  /** update data of the table: "v_comments" */
  update_v_comments?: Maybe<TV_Comments_Mutation_Response>;
  /** update multiples rows of table: "v_comments" */
  update_v_comments_many?: Maybe<Array<Maybe<TV_Comments_Mutation_Response>>>;
  /** update data of the table: "withdrawal_requests" */
  update_withdrawal_requests?: Maybe<TWithdrawal_Requests_Mutation_Response>;
  /** update single row of the table: "withdrawal_requests" */
  update_withdrawal_requests_by_pk?: Maybe<TWithdrawal_Requests>;
  /** update multiples rows of table: "withdrawal_requests" */
  update_withdrawal_requests_many?: Maybe<Array<Maybe<TWithdrawal_Requests_Mutation_Response>>>;
};


/** mutation root */
export type TMutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type TMutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDeleteAuthProviderRequestsArgs = {
  where: TAuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDeleteAuthProvidersArgs = {
  where: TAuthProviders_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDeleteAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDeleteAuthRefreshTokensArgs = {
  where: TAuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type TMutation_RootDeleteAuthRolesArgs = {
  where: TAuthRoles_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDeleteAuthUserProvidersArgs = {
  where: TAuthUserProviders_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDeleteAuthUserRolesArgs = {
  where: TAuthUserRoles_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDeleteAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDeleteAuthUserSecurityKeysArgs = {
  where: TAuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDeleteBucketArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type TMutation_RootDeleteBucketsArgs = {
  where: TBuckets_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDeleteFileArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDeleteFilesArgs = {
  where: TFiles_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDeleteUsersArgs = {
  where: TUsers_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_ActivityArgs = {
  where: TActivity_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Activity_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDelete_Boosted_Idea_LogArgs = {
  where: TBoosted_Idea_Log_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Boosted_Idea_Log_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDelete_Boosted_IdeasArgs = {
  where: TBoosted_Ideas_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Boosted_Ideas_By_PkArgs = {
  ideaId: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDelete_Comment_Status_TypesArgs = {
  where: TComment_Status_Types_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Comment_Status_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type TMutation_RootDelete_Idea_Comment_RepliesArgs = {
  where: TIdea_Comment_Replies_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Idea_Comment_Replies_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDelete_Idea_CommentsArgs = {
  where: TIdea_Comments_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Idea_Comments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDelete_Idea_PreviewArgs = {
  where: TIdea_Preview_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Idea_VotesArgs = {
  where: TIdea_Votes_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Idea_Votes_By_PkArgs = {
  ideaId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDelete_IdeasArgs = {
  where: TIdeas_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Ideas_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDelete_Interested_IdeasArgs = {
  where: TInterested_Ideas_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Interested_Ideas_By_PkArgs = {
  ideaId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDelete_Match_SettingsArgs = {
  where: TMatch_Settings_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Match_Settings_By_PkArgs = {
  user_id: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDelete_MessageArgs = {
  where: TMessage_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Message_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDelete_Message_ThreadArgs = {
  where: TMessage_Thread_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Message_Thread_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDelete_Message_Thread_UsersArgs = {
  where: TMessage_Thread_Users_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Message_Thread_Users_By_PkArgs = {
  threadId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDelete_Notification_TypesArgs = {
  where: TNotification_Types_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Notification_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type TMutation_RootDelete_ReportArgs = {
  where: TReport_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Report_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDelete_User_AddressArgs = {
  where: TUser_Address_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_User_Address_By_PkArgs = {
  userId: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDelete_User_Esteem_Points_CurrencyArgs = {
  where: TUser_Esteem_Points_Currency_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_User_Esteem_Points_Currency_By_PkArgs = {
  userId: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDelete_User_FollowersArgs = {
  where: TUser_Followers_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_User_Followers_By_PkArgs = {
  followerId: Scalars['uuid'];
  followingId: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDelete_User_NotificationsArgs = {
  where: TUser_Notifications_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_User_Notifications_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDelete_User_ProfileArgs = {
  where: TUser_Profile_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_User_Profile_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootDelete_V_CommentsArgs = {
  where: TV_Comments_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Withdrawal_RequestsArgs = {
  where: TWithdrawal_Requests_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Withdrawal_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootInsertAuthProviderArgs = {
  object: TAuthProviders_Insert_Input;
  on_conflict?: InputMaybe<TAuthProviders_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertAuthProviderRequestArgs = {
  object: TAuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<TAuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<TAuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<TAuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertAuthProvidersArgs = {
  objects: Array<TAuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<TAuthProviders_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertAuthRefreshTokenArgs = {
  object: TAuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<TAuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<TAuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<TAuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertAuthRoleArgs = {
  object: TAuthRoles_Insert_Input;
  on_conflict?: InputMaybe<TAuthRoles_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertAuthRolesArgs = {
  objects: Array<TAuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<TAuthRoles_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertAuthUserProviderArgs = {
  object: TAuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<TAuthUserProviders_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<TAuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<TAuthUserProviders_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertAuthUserRoleArgs = {
  object: TAuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<TAuthUserRoles_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertAuthUserRolesArgs = {
  objects: Array<TAuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<TAuthUserRoles_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertAuthUserSecurityKeyArgs = {
  object: TAuthUserSecurityKeys_Insert_Input;
  on_conflict?: InputMaybe<TAuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertAuthUserSecurityKeysArgs = {
  objects: Array<TAuthUserSecurityKeys_Insert_Input>;
  on_conflict?: InputMaybe<TAuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertBucketArgs = {
  object: TBuckets_Insert_Input;
  on_conflict?: InputMaybe<TBuckets_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertBucketsArgs = {
  objects: Array<TBuckets_Insert_Input>;
  on_conflict?: InputMaybe<TBuckets_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertFileArgs = {
  object: TFiles_Insert_Input;
  on_conflict?: InputMaybe<TFiles_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertFilesArgs = {
  objects: Array<TFiles_Insert_Input>;
  on_conflict?: InputMaybe<TFiles_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertUserArgs = {
  object: TUsers_Insert_Input;
  on_conflict?: InputMaybe<TUsers_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsertUsersArgs = {
  objects: Array<TUsers_Insert_Input>;
  on_conflict?: InputMaybe<TUsers_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_ActivityArgs = {
  objects: Array<TActivity_Insert_Input>;
  on_conflict?: InputMaybe<TActivity_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Activity_OneArgs = {
  object: TActivity_Insert_Input;
  on_conflict?: InputMaybe<TActivity_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Boosted_Idea_LogArgs = {
  objects: Array<TBoosted_Idea_Log_Insert_Input>;
  on_conflict?: InputMaybe<TBoosted_Idea_Log_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Boosted_Idea_Log_OneArgs = {
  object: TBoosted_Idea_Log_Insert_Input;
  on_conflict?: InputMaybe<TBoosted_Idea_Log_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Boosted_IdeasArgs = {
  objects: Array<TBoosted_Ideas_Insert_Input>;
  on_conflict?: InputMaybe<TBoosted_Ideas_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Boosted_Ideas_OneArgs = {
  object: TBoosted_Ideas_Insert_Input;
  on_conflict?: InputMaybe<TBoosted_Ideas_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Comment_Status_TypesArgs = {
  objects: Array<TComment_Status_Types_Insert_Input>;
  on_conflict?: InputMaybe<TComment_Status_Types_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Comment_Status_Types_OneArgs = {
  object: TComment_Status_Types_Insert_Input;
  on_conflict?: InputMaybe<TComment_Status_Types_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Idea_Comment_RepliesArgs = {
  objects: Array<TIdea_Comment_Replies_Insert_Input>;
  on_conflict?: InputMaybe<TIdea_Comment_Replies_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Idea_Comment_Replies_OneArgs = {
  object: TIdea_Comment_Replies_Insert_Input;
  on_conflict?: InputMaybe<TIdea_Comment_Replies_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Idea_CommentsArgs = {
  objects: Array<TIdea_Comments_Insert_Input>;
  on_conflict?: InputMaybe<TIdea_Comments_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Idea_Comments_OneArgs = {
  object: TIdea_Comments_Insert_Input;
  on_conflict?: InputMaybe<TIdea_Comments_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Idea_PreviewArgs = {
  objects: Array<TIdea_Preview_Insert_Input>;
};


/** mutation root */
export type TMutation_RootInsert_Idea_Preview_OneArgs = {
  object: TIdea_Preview_Insert_Input;
};


/** mutation root */
export type TMutation_RootInsert_Idea_VotesArgs = {
  objects: Array<TIdea_Votes_Insert_Input>;
  on_conflict?: InputMaybe<TIdea_Votes_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Idea_Votes_OneArgs = {
  object: TIdea_Votes_Insert_Input;
  on_conflict?: InputMaybe<TIdea_Votes_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_IdeasArgs = {
  objects: Array<TIdeas_Insert_Input>;
  on_conflict?: InputMaybe<TIdeas_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Ideas_OneArgs = {
  object: TIdeas_Insert_Input;
  on_conflict?: InputMaybe<TIdeas_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Interested_IdeasArgs = {
  objects: Array<TInterested_Ideas_Insert_Input>;
  on_conflict?: InputMaybe<TInterested_Ideas_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Interested_Ideas_OneArgs = {
  object: TInterested_Ideas_Insert_Input;
  on_conflict?: InputMaybe<TInterested_Ideas_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Match_SettingsArgs = {
  objects: Array<TMatch_Settings_Insert_Input>;
  on_conflict?: InputMaybe<TMatch_Settings_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Match_Settings_OneArgs = {
  object: TMatch_Settings_Insert_Input;
  on_conflict?: InputMaybe<TMatch_Settings_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_MessageArgs = {
  objects: Array<TMessage_Insert_Input>;
  on_conflict?: InputMaybe<TMessage_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Message_OneArgs = {
  object: TMessage_Insert_Input;
  on_conflict?: InputMaybe<TMessage_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Message_ThreadArgs = {
  objects: Array<TMessage_Thread_Insert_Input>;
  on_conflict?: InputMaybe<TMessage_Thread_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Message_Thread_OneArgs = {
  object: TMessage_Thread_Insert_Input;
  on_conflict?: InputMaybe<TMessage_Thread_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Message_Thread_UsersArgs = {
  objects: Array<TMessage_Thread_Users_Insert_Input>;
  on_conflict?: InputMaybe<TMessage_Thread_Users_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Message_Thread_Users_OneArgs = {
  object: TMessage_Thread_Users_Insert_Input;
  on_conflict?: InputMaybe<TMessage_Thread_Users_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Notification_TypesArgs = {
  objects: Array<TNotification_Types_Insert_Input>;
  on_conflict?: InputMaybe<TNotification_Types_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Notification_Types_OneArgs = {
  object: TNotification_Types_Insert_Input;
  on_conflict?: InputMaybe<TNotification_Types_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_ReportArgs = {
  objects: Array<TReport_Insert_Input>;
  on_conflict?: InputMaybe<TReport_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Report_OneArgs = {
  object: TReport_Insert_Input;
  on_conflict?: InputMaybe<TReport_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_User_AddressArgs = {
  objects: Array<TUser_Address_Insert_Input>;
  on_conflict?: InputMaybe<TUser_Address_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_User_Address_OneArgs = {
  object: TUser_Address_Insert_Input;
  on_conflict?: InputMaybe<TUser_Address_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_User_Esteem_Points_CurrencyArgs = {
  objects: Array<TUser_Esteem_Points_Currency_Insert_Input>;
  on_conflict?: InputMaybe<TUser_Esteem_Points_Currency_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_User_Esteem_Points_Currency_OneArgs = {
  object: TUser_Esteem_Points_Currency_Insert_Input;
  on_conflict?: InputMaybe<TUser_Esteem_Points_Currency_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_User_FollowersArgs = {
  objects: Array<TUser_Followers_Insert_Input>;
  on_conflict?: InputMaybe<TUser_Followers_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_User_Followers_OneArgs = {
  object: TUser_Followers_Insert_Input;
  on_conflict?: InputMaybe<TUser_Followers_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_User_NotificationsArgs = {
  objects: Array<TUser_Notifications_Insert_Input>;
  on_conflict?: InputMaybe<TUser_Notifications_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_User_Notifications_OneArgs = {
  object: TUser_Notifications_Insert_Input;
  on_conflict?: InputMaybe<TUser_Notifications_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_User_ProfileArgs = {
  objects: Array<TUser_Profile_Insert_Input>;
  on_conflict?: InputMaybe<TUser_Profile_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_User_Profile_OneArgs = {
  object: TUser_Profile_Insert_Input;
  on_conflict?: InputMaybe<TUser_Profile_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_V_CommentsArgs = {
  objects: Array<TV_Comments_Insert_Input>;
};


/** mutation root */
export type TMutation_RootInsert_V_Comments_OneArgs = {
  object: TV_Comments_Insert_Input;
};


/** mutation root */
export type TMutation_RootInsert_Withdrawal_RequestsArgs = {
  objects: Array<TWithdrawal_Requests_Insert_Input>;
  on_conflict?: InputMaybe<TWithdrawal_Requests_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Withdrawal_Requests_OneArgs = {
  object: TWithdrawal_Requests_Insert_Input;
  on_conflict?: InputMaybe<TWithdrawal_Requests_On_Conflict>;
};


/** mutation root */
export type TMutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<TAuthProviders_Set_Input>;
  pk_columns: TAuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<TAuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<TAuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<TAuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<TAuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<TAuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<TAuthProviderRequests_Set_Input>;
  pk_columns: TAuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<TAuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<TAuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<TAuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<TAuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<TAuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<TAuthProviderRequests_Set_Input>;
  where: TAuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<TAuthProviders_Set_Input>;
  where: TAuthProviders_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdateAuthRefreshTokenArgs = {
  _set?: InputMaybe<TAuthRefreshTokens_Set_Input>;
  pk_columns: TAuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdateAuthRefreshTokensArgs = {
  _set?: InputMaybe<TAuthRefreshTokens_Set_Input>;
  where: TAuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<TAuthRoles_Set_Input>;
  pk_columns: TAuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<TAuthRoles_Set_Input>;
  where: TAuthRoles_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<TAuthUserProviders_Set_Input>;
  pk_columns: TAuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<TAuthUserProviders_Set_Input>;
  where: TAuthUserProviders_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<TAuthUserRoles_Set_Input>;
  pk_columns: TAuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<TAuthUserRoles_Set_Input>;
  where: TAuthUserRoles_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdateAuthUserSecurityKeyArgs = {
  _inc?: InputMaybe<TAuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<TAuthUserSecurityKeys_Set_Input>;
  pk_columns: TAuthUserSecurityKeys_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdateAuthUserSecurityKeysArgs = {
  _inc?: InputMaybe<TAuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<TAuthUserSecurityKeys_Set_Input>;
  where: TAuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<TBuckets_Inc_Input>;
  _set?: InputMaybe<TBuckets_Set_Input>;
  pk_columns: TBuckets_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<TBuckets_Inc_Input>;
  _set?: InputMaybe<TBuckets_Set_Input>;
  where: TBuckets_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdateFileArgs = {
  _inc?: InputMaybe<TFiles_Inc_Input>;
  _set?: InputMaybe<TFiles_Set_Input>;
  pk_columns: TFiles_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdateFilesArgs = {
  _inc?: InputMaybe<TFiles_Inc_Input>;
  _set?: InputMaybe<TFiles_Set_Input>;
  where: TFiles_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdateUserArgs = {
  _append?: InputMaybe<TUsers_Append_Input>;
  _delete_at_path?: InputMaybe<TUsers_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<TUsers_Delete_Elem_Input>;
  _delete_key?: InputMaybe<TUsers_Delete_Key_Input>;
  _prepend?: InputMaybe<TUsers_Prepend_Input>;
  _set?: InputMaybe<TUsers_Set_Input>;
  pk_columns: TUsers_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<TUsers_Append_Input>;
  _delete_at_path?: InputMaybe<TUsers_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<TUsers_Delete_Elem_Input>;
  _delete_key?: InputMaybe<TUsers_Delete_Key_Input>;
  _prepend?: InputMaybe<TUsers_Prepend_Input>;
  _set?: InputMaybe<TUsers_Set_Input>;
  where: TUsers_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_ActivityArgs = {
  _set?: InputMaybe<TActivity_Set_Input>;
  where: TActivity_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Activity_By_PkArgs = {
  _set?: InputMaybe<TActivity_Set_Input>;
  pk_columns: TActivity_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_Activity_ManyArgs = {
  updates: Array<TActivity_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_AuthProviderRequests_ManyArgs = {
  updates: Array<TAuthProviderRequests_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_AuthProviders_ManyArgs = {
  updates: Array<TAuthProviders_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
  updates: Array<TAuthRefreshTokens_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_AuthRoles_ManyArgs = {
  updates: Array<TAuthRoles_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_AuthUserProviders_ManyArgs = {
  updates: Array<TAuthUserProviders_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_AuthUserRoles_ManyArgs = {
  updates: Array<TAuthUserRoles_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_AuthUserSecurityKeys_ManyArgs = {
  updates: Array<TAuthUserSecurityKeys_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_Boosted_Idea_LogArgs = {
  _set?: InputMaybe<TBoosted_Idea_Log_Set_Input>;
  where: TBoosted_Idea_Log_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Boosted_Idea_Log_By_PkArgs = {
  _set?: InputMaybe<TBoosted_Idea_Log_Set_Input>;
  pk_columns: TBoosted_Idea_Log_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_Boosted_Idea_Log_ManyArgs = {
  updates: Array<TBoosted_Idea_Log_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_Boosted_IdeasArgs = {
  _inc?: InputMaybe<TBoosted_Ideas_Inc_Input>;
  _set?: InputMaybe<TBoosted_Ideas_Set_Input>;
  where: TBoosted_Ideas_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Boosted_Ideas_By_PkArgs = {
  _inc?: InputMaybe<TBoosted_Ideas_Inc_Input>;
  _set?: InputMaybe<TBoosted_Ideas_Set_Input>;
  pk_columns: TBoosted_Ideas_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_Boosted_Ideas_ManyArgs = {
  updates: Array<TBoosted_Ideas_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<TBuckets_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_Comment_Status_TypesArgs = {
  _set?: InputMaybe<TComment_Status_Types_Set_Input>;
  where: TComment_Status_Types_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Comment_Status_Types_By_PkArgs = {
  _set?: InputMaybe<TComment_Status_Types_Set_Input>;
  pk_columns: TComment_Status_Types_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_Comment_Status_Types_ManyArgs = {
  updates: Array<TComment_Status_Types_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_Files_ManyArgs = {
  updates: Array<TFiles_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_Idea_Comment_RepliesArgs = {
  _set?: InputMaybe<TIdea_Comment_Replies_Set_Input>;
  where: TIdea_Comment_Replies_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Idea_Comment_Replies_By_PkArgs = {
  _set?: InputMaybe<TIdea_Comment_Replies_Set_Input>;
  pk_columns: TIdea_Comment_Replies_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_Idea_Comment_Replies_ManyArgs = {
  updates: Array<TIdea_Comment_Replies_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_Idea_CommentsArgs = {
  _inc?: InputMaybe<TIdea_Comments_Inc_Input>;
  _set?: InputMaybe<TIdea_Comments_Set_Input>;
  where: TIdea_Comments_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Idea_Comments_By_PkArgs = {
  _inc?: InputMaybe<TIdea_Comments_Inc_Input>;
  _set?: InputMaybe<TIdea_Comments_Set_Input>;
  pk_columns: TIdea_Comments_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_Idea_Comments_ManyArgs = {
  updates: Array<TIdea_Comments_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_Idea_PreviewArgs = {
  _set?: InputMaybe<TIdea_Preview_Set_Input>;
  where: TIdea_Preview_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Idea_Preview_ManyArgs = {
  updates: Array<TIdea_Preview_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_Idea_VotesArgs = {
  _set?: InputMaybe<TIdea_Votes_Set_Input>;
  where: TIdea_Votes_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Idea_Votes_By_PkArgs = {
  _set?: InputMaybe<TIdea_Votes_Set_Input>;
  pk_columns: TIdea_Votes_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_Idea_Votes_ManyArgs = {
  updates: Array<TIdea_Votes_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_IdeasArgs = {
  _inc?: InputMaybe<TIdeas_Inc_Input>;
  _set?: InputMaybe<TIdeas_Set_Input>;
  where: TIdeas_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Ideas_By_PkArgs = {
  _inc?: InputMaybe<TIdeas_Inc_Input>;
  _set?: InputMaybe<TIdeas_Set_Input>;
  pk_columns: TIdeas_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_Ideas_ManyArgs = {
  updates: Array<TIdeas_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_Interested_IdeasArgs = {
  _set?: InputMaybe<TInterested_Ideas_Set_Input>;
  where: TInterested_Ideas_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Interested_Ideas_By_PkArgs = {
  _set?: InputMaybe<TInterested_Ideas_Set_Input>;
  pk_columns: TInterested_Ideas_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_Interested_Ideas_ManyArgs = {
  updates: Array<TInterested_Ideas_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_Match_SettingsArgs = {
  _append?: InputMaybe<TMatch_Settings_Append_Input>;
  _delete_at_path?: InputMaybe<TMatch_Settings_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<TMatch_Settings_Delete_Elem_Input>;
  _delete_key?: InputMaybe<TMatch_Settings_Delete_Key_Input>;
  _prepend?: InputMaybe<TMatch_Settings_Prepend_Input>;
  _set?: InputMaybe<TMatch_Settings_Set_Input>;
  where: TMatch_Settings_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Match_Settings_By_PkArgs = {
  _append?: InputMaybe<TMatch_Settings_Append_Input>;
  _delete_at_path?: InputMaybe<TMatch_Settings_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<TMatch_Settings_Delete_Elem_Input>;
  _delete_key?: InputMaybe<TMatch_Settings_Delete_Key_Input>;
  _prepend?: InputMaybe<TMatch_Settings_Prepend_Input>;
  _set?: InputMaybe<TMatch_Settings_Set_Input>;
  pk_columns: TMatch_Settings_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_Match_Settings_ManyArgs = {
  updates: Array<TMatch_Settings_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_MessageArgs = {
  _set?: InputMaybe<TMessage_Set_Input>;
  where: TMessage_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Message_By_PkArgs = {
  _set?: InputMaybe<TMessage_Set_Input>;
  pk_columns: TMessage_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_Message_ManyArgs = {
  updates: Array<TMessage_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_Message_ThreadArgs = {
  _set?: InputMaybe<TMessage_Thread_Set_Input>;
  where: TMessage_Thread_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Message_Thread_By_PkArgs = {
  _set?: InputMaybe<TMessage_Thread_Set_Input>;
  pk_columns: TMessage_Thread_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_Message_Thread_ManyArgs = {
  updates: Array<TMessage_Thread_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_Message_Thread_UsersArgs = {
  _set?: InputMaybe<TMessage_Thread_Users_Set_Input>;
  where: TMessage_Thread_Users_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Message_Thread_Users_By_PkArgs = {
  _set?: InputMaybe<TMessage_Thread_Users_Set_Input>;
  pk_columns: TMessage_Thread_Users_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_Message_Thread_Users_ManyArgs = {
  updates: Array<TMessage_Thread_Users_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_Notification_TypesArgs = {
  _set?: InputMaybe<TNotification_Types_Set_Input>;
  where: TNotification_Types_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Notification_Types_By_PkArgs = {
  _set?: InputMaybe<TNotification_Types_Set_Input>;
  pk_columns: TNotification_Types_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_Notification_Types_ManyArgs = {
  updates: Array<TNotification_Types_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_ReportArgs = {
  _set?: InputMaybe<TReport_Set_Input>;
  where: TReport_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Report_By_PkArgs = {
  _set?: InputMaybe<TReport_Set_Input>;
  pk_columns: TReport_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_Report_ManyArgs = {
  updates: Array<TReport_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_User_AddressArgs = {
  _set?: InputMaybe<TUser_Address_Set_Input>;
  where: TUser_Address_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_User_Address_By_PkArgs = {
  _set?: InputMaybe<TUser_Address_Set_Input>;
  pk_columns: TUser_Address_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_User_Address_ManyArgs = {
  updates: Array<TUser_Address_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_User_Esteem_Points_CurrencyArgs = {
  _inc?: InputMaybe<TUser_Esteem_Points_Currency_Inc_Input>;
  _set?: InputMaybe<TUser_Esteem_Points_Currency_Set_Input>;
  where: TUser_Esteem_Points_Currency_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_User_Esteem_Points_Currency_By_PkArgs = {
  _inc?: InputMaybe<TUser_Esteem_Points_Currency_Inc_Input>;
  _set?: InputMaybe<TUser_Esteem_Points_Currency_Set_Input>;
  pk_columns: TUser_Esteem_Points_Currency_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_User_Esteem_Points_Currency_ManyArgs = {
  updates: Array<TUser_Esteem_Points_Currency_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_User_FollowersArgs = {
  _set?: InputMaybe<TUser_Followers_Set_Input>;
  where: TUser_Followers_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_User_Followers_By_PkArgs = {
  _set?: InputMaybe<TUser_Followers_Set_Input>;
  pk_columns: TUser_Followers_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_User_Followers_ManyArgs = {
  updates: Array<TUser_Followers_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_User_NotificationsArgs = {
  _set?: InputMaybe<TUser_Notifications_Set_Input>;
  where: TUser_Notifications_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_User_Notifications_By_PkArgs = {
  _set?: InputMaybe<TUser_Notifications_Set_Input>;
  pk_columns: TUser_Notifications_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_User_Notifications_ManyArgs = {
  updates: Array<TUser_Notifications_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_User_ProfileArgs = {
  _append?: InputMaybe<TUser_Profile_Append_Input>;
  _delete_at_path?: InputMaybe<TUser_Profile_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<TUser_Profile_Delete_Elem_Input>;
  _delete_key?: InputMaybe<TUser_Profile_Delete_Key_Input>;
  _prepend?: InputMaybe<TUser_Profile_Prepend_Input>;
  _set?: InputMaybe<TUser_Profile_Set_Input>;
  where: TUser_Profile_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_User_Profile_By_PkArgs = {
  _append?: InputMaybe<TUser_Profile_Append_Input>;
  _delete_at_path?: InputMaybe<TUser_Profile_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<TUser_Profile_Delete_Elem_Input>;
  _delete_key?: InputMaybe<TUser_Profile_Delete_Key_Input>;
  _prepend?: InputMaybe<TUser_Profile_Prepend_Input>;
  _set?: InputMaybe<TUser_Profile_Set_Input>;
  pk_columns: TUser_Profile_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_User_Profile_ManyArgs = {
  updates: Array<TUser_Profile_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_Users_ManyArgs = {
  updates: Array<TUsers_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_V_CommentsArgs = {
  _inc?: InputMaybe<TV_Comments_Inc_Input>;
  _set?: InputMaybe<TV_Comments_Set_Input>;
  where: TV_Comments_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_V_Comments_ManyArgs = {
  updates: Array<TV_Comments_Updates>;
};


/** mutation root */
export type TMutation_RootUpdate_Withdrawal_RequestsArgs = {
  _inc?: InputMaybe<TWithdrawal_Requests_Inc_Input>;
  _set?: InputMaybe<TWithdrawal_Requests_Set_Input>;
  where: TWithdrawal_Requests_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Withdrawal_Requests_By_PkArgs = {
  _inc?: InputMaybe<TWithdrawal_Requests_Inc_Input>;
  _set?: InputMaybe<TWithdrawal_Requests_Set_Input>;
  pk_columns: TWithdrawal_Requests_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_Withdrawal_Requests_ManyArgs = {
  updates: Array<TWithdrawal_Requests_Updates>;
};

/** All notification types */
export type TNotification_Types = {
  __typename?: 'notification_types';
  description: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "notification_types" */
export type TNotification_Types_Aggregate = {
  __typename?: 'notification_types_aggregate';
  aggregate?: Maybe<TNotification_Types_Aggregate_Fields>;
  nodes: Array<TNotification_Types>;
};

/** aggregate fields of "notification_types" */
export type TNotification_Types_Aggregate_Fields = {
  __typename?: 'notification_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TNotification_Types_Max_Fields>;
  min?: Maybe<TNotification_Types_Min_Fields>;
};


/** aggregate fields of "notification_types" */
export type TNotification_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TNotification_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "notification_types". All fields are combined with a logical 'AND'. */
export type TNotification_Types_Bool_Exp = {
  _and?: InputMaybe<Array<TNotification_Types_Bool_Exp>>;
  _not?: InputMaybe<TNotification_Types_Bool_Exp>;
  _or?: InputMaybe<Array<TNotification_Types_Bool_Exp>>;
  description?: InputMaybe<TString_Comparison_Exp>;
  value?: InputMaybe<TString_Comparison_Exp>;
};

/** unique or primary key constraints on table "notification_types" */
export type TNotification_Types_Constraint =
  /** unique or primary key constraint on columns "value" */
  | 'notification_types_pkey';

export type TNotification_Types_Enum =
  /** New comment */
  | 'COMMENT'
  /** Earned currency */
  | 'CURRENCY'
  /** Earned esteem points */
  | 'ESTEEM_POINTS'
  /** New message */
  | 'MESSAGE'
  /** Profile not set */
  | 'PROFILE_NOT_SET'
  /** New reply */
  | 'REPLY';

/** Boolean expression to compare columns of type "notification_types_enum". All fields are combined with logical 'AND'. */
export type TNotification_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<TNotification_Types_Enum>;
  _in?: InputMaybe<Array<TNotification_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<TNotification_Types_Enum>;
  _nin?: InputMaybe<Array<TNotification_Types_Enum>>;
};

/** input type for inserting data into table "notification_types" */
export type TNotification_Types_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TNotification_Types_Max_Fields = {
  __typename?: 'notification_types_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type TNotification_Types_Min_Fields = {
  __typename?: 'notification_types_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "notification_types" */
export type TNotification_Types_Mutation_Response = {
  __typename?: 'notification_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TNotification_Types>;
};

/** on_conflict condition type for table "notification_types" */
export type TNotification_Types_On_Conflict = {
  constraint: TNotification_Types_Constraint;
  update_columns?: Array<TNotification_Types_Update_Column>;
  where?: InputMaybe<TNotification_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "notification_types". */
export type TNotification_Types_Order_By = {
  description?: InputMaybe<TOrder_By>;
  value?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: notification_types */
export type TNotification_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "notification_types" */
export type TNotification_Types_Select_Column =
  /** column name */
  | 'description'
  /** column name */
  | 'value';

/** input type for updating data in table "notification_types" */
export type TNotification_Types_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "notification_types" */
export type TNotification_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TNotification_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TNotification_Types_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "notification_types" */
export type TNotification_Types_Update_Column =
  /** column name */
  | 'description'
  /** column name */
  | 'value';

export type TNotification_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TNotification_Types_Set_Input>;
  where: TNotification_Types_Bool_Exp;
};

/** column ordering options */
export type TOrder_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

export type TQuery_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "activity" */
  activity: Array<TActivity>;
  /** fetch aggregated fields from the table: "activity" */
  activity_aggregate: TActivity_Aggregate;
  /** fetch data from the table: "activity" using primary key columns */
  activity_by_pk?: Maybe<TActivity>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<TAuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<TAuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<TAuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: TAuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<TAuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: TAuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<TAuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<TAuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: TAuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<TAuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<TAuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: TAuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<TAuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<TAuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: TAuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<TAuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<TAuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: TAuthUserRoles_Aggregate;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<TAuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<TAuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: TAuthUserSecurityKeys_Aggregate;
  /** fetch data from the table: "boosted_idea_log" */
  boosted_idea_log: Array<TBoosted_Idea_Log>;
  /** fetch aggregated fields from the table: "boosted_idea_log" */
  boosted_idea_log_aggregate: TBoosted_Idea_Log_Aggregate;
  /** fetch data from the table: "boosted_idea_log" using primary key columns */
  boosted_idea_log_by_pk?: Maybe<TBoosted_Idea_Log>;
  /** fetch data from the table: "boosted_ideas" */
  boosted_ideas: Array<TBoosted_Ideas>;
  /** fetch aggregated fields from the table: "boosted_ideas" */
  boosted_ideas_aggregate: TBoosted_Ideas_Aggregate;
  /** fetch data from the table: "boosted_ideas" using primary key columns */
  boosted_ideas_by_pk?: Maybe<TBoosted_Ideas>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<TBuckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<TBuckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: TBuckets_Aggregate;
  /** fetch data from the table: "comment_status_types" */
  comment_status_types: Array<TComment_Status_Types>;
  /** fetch aggregated fields from the table: "comment_status_types" */
  comment_status_types_aggregate: TComment_Status_Types_Aggregate;
  /** fetch data from the table: "comment_status_types" using primary key columns */
  comment_status_types_by_pk?: Maybe<TComment_Status_Types>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<TFiles>;
  /** An array relationship */
  files: Array<TFiles>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: TFiles_Aggregate;
  /** fetch data from the table: "idea_comment_replies" */
  idea_comment_replies: Array<TIdea_Comment_Replies>;
  /** fetch aggregated fields from the table: "idea_comment_replies" */
  idea_comment_replies_aggregate: TIdea_Comment_Replies_Aggregate;
  /** fetch data from the table: "idea_comment_replies" using primary key columns */
  idea_comment_replies_by_pk?: Maybe<TIdea_Comment_Replies>;
  /** fetch data from the table: "idea_comments" */
  idea_comments: Array<TIdea_Comments>;
  /** fetch aggregated fields from the table: "idea_comments" */
  idea_comments_aggregate: TIdea_Comments_Aggregate;
  /** fetch data from the table: "idea_comments" using primary key columns */
  idea_comments_by_pk?: Maybe<TIdea_Comments>;
  /** fetch data from the table: "idea_preview" */
  idea_preview: Array<TIdea_Preview>;
  /** fetch aggregated fields from the table: "idea_preview" */
  idea_preview_aggregate: TIdea_Preview_Aggregate;
  /** fetch data from the table: "idea_votes" */
  idea_votes: Array<TIdea_Votes>;
  /** fetch aggregated fields from the table: "idea_votes" */
  idea_votes_aggregate: TIdea_Votes_Aggregate;
  /** fetch data from the table: "idea_votes" using primary key columns */
  idea_votes_by_pk?: Maybe<TIdea_Votes>;
  /** An array relationship */
  ideas: Array<TIdeas>;
  /** An aggregate relationship */
  ideas_aggregate: TIdeas_Aggregate;
  /** fetch data from the table: "ideas" using primary key columns */
  ideas_by_pk?: Maybe<TIdeas>;
  /** fetch data from the table: "interested_ideas" */
  interested_ideas: Array<TInterested_Ideas>;
  /** fetch aggregated fields from the table: "interested_ideas" */
  interested_ideas_aggregate: TInterested_Ideas_Aggregate;
  /** fetch data from the table: "interested_ideas" using primary key columns */
  interested_ideas_by_pk?: Maybe<TInterested_Ideas>;
  /** fetch data from the table: "match_settings" */
  match_settings: Array<TMatch_Settings>;
  /** fetch aggregated fields from the table: "match_settings" */
  match_settings_aggregate: TMatch_Settings_Aggregate;
  /** fetch data from the table: "match_settings" using primary key columns */
  match_settings_by_pk?: Maybe<TMatch_Settings>;
  /** fetch data from the table: "message" */
  message: Array<TMessage>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: TMessage_Aggregate;
  /** fetch data from the table: "message" using primary key columns */
  message_by_pk?: Maybe<TMessage>;
  /** fetch data from the table: "message_thread" */
  message_thread: Array<TMessage_Thread>;
  /** fetch aggregated fields from the table: "message_thread" */
  message_thread_aggregate: TMessage_Thread_Aggregate;
  /** fetch data from the table: "message_thread" using primary key columns */
  message_thread_by_pk?: Maybe<TMessage_Thread>;
  /** fetch data from the table: "message_thread_users" */
  message_thread_users: Array<TMessage_Thread_Users>;
  /** fetch aggregated fields from the table: "message_thread_users" */
  message_thread_users_aggregate: TMessage_Thread_Users_Aggregate;
  /** fetch data from the table: "message_thread_users" using primary key columns */
  message_thread_users_by_pk?: Maybe<TMessage_Thread_Users>;
  /** fetch data from the table: "notification_types" */
  notification_types: Array<TNotification_Types>;
  /** fetch aggregated fields from the table: "notification_types" */
  notification_types_aggregate: TNotification_Types_Aggregate;
  /** fetch data from the table: "notification_types" using primary key columns */
  notification_types_by_pk?: Maybe<TNotification_Types>;
  /** fetch data from the table: "report" */
  report: Array<TReport>;
  /** fetch aggregated fields from the table: "report" */
  report_aggregate: TReport_Aggregate;
  /** fetch data from the table: "report" using primary key columns */
  report_by_pk?: Maybe<TReport>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<TUsers>;
  /** fetch data from the table: "user_address" */
  user_address: Array<TUser_Address>;
  /** fetch aggregated fields from the table: "user_address" */
  user_address_aggregate: TUser_Address_Aggregate;
  /** fetch data from the table: "user_address" using primary key columns */
  user_address_by_pk?: Maybe<TUser_Address>;
  /** fetch data from the table: "user_esteem_points_currency" */
  user_esteem_points_currency: Array<TUser_Esteem_Points_Currency>;
  /** fetch aggregated fields from the table: "user_esteem_points_currency" */
  user_esteem_points_currency_aggregate: TUser_Esteem_Points_Currency_Aggregate;
  /** fetch data from the table: "user_esteem_points_currency" using primary key columns */
  user_esteem_points_currency_by_pk?: Maybe<TUser_Esteem_Points_Currency>;
  /** An array relationship */
  user_followers: Array<TUser_Followers>;
  /** An aggregate relationship */
  user_followers_aggregate: TUser_Followers_Aggregate;
  /** fetch data from the table: "user_followers" using primary key columns */
  user_followers_by_pk?: Maybe<TUser_Followers>;
  /** An array relationship */
  user_notifications: Array<TUser_Notifications>;
  /** An aggregate relationship */
  user_notifications_aggregate: TUser_Notifications_Aggregate;
  /** fetch data from the table: "user_notifications" using primary key columns */
  user_notifications_by_pk?: Maybe<TUser_Notifications>;
  /** fetch data from the table: "user_profile" */
  user_profile: Array<TUser_Profile>;
  /** fetch aggregated fields from the table: "user_profile" */
  user_profile_aggregate: TUser_Profile_Aggregate;
  /** fetch data from the table: "user_profile" using primary key columns */
  user_profile_by_pk?: Maybe<TUser_Profile>;
  /** fetch data from the table: "auth.users" */
  users: Array<TUsers>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: TUsers_Aggregate;
  /** fetch data from the table: "v_comments" */
  v_comments: Array<TV_Comments>;
  /** fetch aggregated fields from the table: "v_comments" */
  v_comments_aggregate: TV_Comments_Aggregate;
  /** fetch data from the table: "withdrawal_requests" */
  withdrawal_requests: Array<TWithdrawal_Requests>;
  /** fetch aggregated fields from the table: "withdrawal_requests" */
  withdrawal_requests_aggregate: TWithdrawal_Requests_Aggregate;
  /** fetch data from the table: "withdrawal_requests" using primary key columns */
  withdrawal_requests_by_pk?: Maybe<TWithdrawal_Requests>;
};


export type TQuery_RootActivityArgs = {
  distinct_on?: InputMaybe<Array<TActivity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TActivity_Order_By>>;
  where?: InputMaybe<TActivity_Bool_Exp>;
};


export type TQuery_RootActivity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TActivity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TActivity_Order_By>>;
  where?: InputMaybe<TActivity_Bool_Exp>;
};


export type TQuery_RootActivity_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TQuery_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type TQuery_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type TQuery_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<TAuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthProviderRequests_Order_By>>;
  where?: InputMaybe<TAuthProviderRequests_Bool_Exp>;
};


export type TQuery_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthProviderRequests_Order_By>>;
  where?: InputMaybe<TAuthProviderRequests_Bool_Exp>;
};


export type TQuery_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<TAuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthProviders_Order_By>>;
  where?: InputMaybe<TAuthProviders_Bool_Exp>;
};


export type TQuery_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthProviders_Order_By>>;
  where?: InputMaybe<TAuthProviders_Bool_Exp>;
};


export type TQuery_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type TQuery_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<TAuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthRefreshTokens_Order_By>>;
  where?: InputMaybe<TAuthRefreshTokens_Bool_Exp>;
};


export type TQuery_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthRefreshTokens_Order_By>>;
  where?: InputMaybe<TAuthRefreshTokens_Bool_Exp>;
};


export type TQuery_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type TQuery_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<TAuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthRoles_Order_By>>;
  where?: InputMaybe<TAuthRoles_Bool_Exp>;
};


export type TQuery_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthRoles_Order_By>>;
  where?: InputMaybe<TAuthRoles_Bool_Exp>;
};


export type TQuery_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type TQuery_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserProviders_Order_By>>;
  where?: InputMaybe<TAuthUserProviders_Bool_Exp>;
};


export type TQuery_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserProviders_Order_By>>;
  where?: InputMaybe<TAuthUserProviders_Bool_Exp>;
};


export type TQuery_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type TQuery_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserRoles_Order_By>>;
  where?: InputMaybe<TAuthUserRoles_Bool_Exp>;
};


export type TQuery_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserRoles_Order_By>>;
  where?: InputMaybe<TAuthUserRoles_Bool_Exp>;
};


export type TQuery_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


export type TQuery_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<TAuthUserSecurityKeys_Bool_Exp>;
};


export type TQuery_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<TAuthUserSecurityKeys_Bool_Exp>;
};


export type TQuery_RootBoosted_Idea_LogArgs = {
  distinct_on?: InputMaybe<Array<TBoosted_Idea_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TBoosted_Idea_Log_Order_By>>;
  where?: InputMaybe<TBoosted_Idea_Log_Bool_Exp>;
};


export type TQuery_RootBoosted_Idea_Log_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TBoosted_Idea_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TBoosted_Idea_Log_Order_By>>;
  where?: InputMaybe<TBoosted_Idea_Log_Bool_Exp>;
};


export type TQuery_RootBoosted_Idea_Log_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TQuery_RootBoosted_IdeasArgs = {
  distinct_on?: InputMaybe<Array<TBoosted_Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TBoosted_Ideas_Order_By>>;
  where?: InputMaybe<TBoosted_Ideas_Bool_Exp>;
};


export type TQuery_RootBoosted_Ideas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TBoosted_Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TBoosted_Ideas_Order_By>>;
  where?: InputMaybe<TBoosted_Ideas_Bool_Exp>;
};


export type TQuery_RootBoosted_Ideas_By_PkArgs = {
  ideaId: Scalars['uuid'];
};


export type TQuery_RootBucketArgs = {
  id: Scalars['String'];
};


export type TQuery_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<TBuckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TBuckets_Order_By>>;
  where?: InputMaybe<TBuckets_Bool_Exp>;
};


export type TQuery_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<TBuckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TBuckets_Order_By>>;
  where?: InputMaybe<TBuckets_Bool_Exp>;
};


export type TQuery_RootComment_Status_TypesArgs = {
  distinct_on?: InputMaybe<Array<TComment_Status_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TComment_Status_Types_Order_By>>;
  where?: InputMaybe<TComment_Status_Types_Bool_Exp>;
};


export type TQuery_RootComment_Status_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TComment_Status_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TComment_Status_Types_Order_By>>;
  where?: InputMaybe<TComment_Status_Types_Bool_Exp>;
};


export type TQuery_RootComment_Status_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type TQuery_RootFileArgs = {
  id: Scalars['uuid'];
};


export type TQuery_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<TFiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TFiles_Order_By>>;
  where?: InputMaybe<TFiles_Bool_Exp>;
};


export type TQuery_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TFiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TFiles_Order_By>>;
  where?: InputMaybe<TFiles_Bool_Exp>;
};


export type TQuery_RootIdea_Comment_RepliesArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comment_Replies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comment_Replies_Order_By>>;
  where?: InputMaybe<TIdea_Comment_Replies_Bool_Exp>;
};


export type TQuery_RootIdea_Comment_Replies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comment_Replies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comment_Replies_Order_By>>;
  where?: InputMaybe<TIdea_Comment_Replies_Bool_Exp>;
};


export type TQuery_RootIdea_Comment_Replies_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TQuery_RootIdea_CommentsArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comments_Order_By>>;
  where?: InputMaybe<TIdea_Comments_Bool_Exp>;
};


export type TQuery_RootIdea_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comments_Order_By>>;
  where?: InputMaybe<TIdea_Comments_Bool_Exp>;
};


export type TQuery_RootIdea_Comments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TQuery_RootIdea_PreviewArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Preview_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Preview_Order_By>>;
  where?: InputMaybe<TIdea_Preview_Bool_Exp>;
};


export type TQuery_RootIdea_Preview_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Preview_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Preview_Order_By>>;
  where?: InputMaybe<TIdea_Preview_Bool_Exp>;
};


export type TQuery_RootIdea_VotesArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Votes_Order_By>>;
  where?: InputMaybe<TIdea_Votes_Bool_Exp>;
};


export type TQuery_RootIdea_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Votes_Order_By>>;
  where?: InputMaybe<TIdea_Votes_Bool_Exp>;
};


export type TQuery_RootIdea_Votes_By_PkArgs = {
  ideaId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


export type TQuery_RootIdeasArgs = {
  distinct_on?: InputMaybe<Array<TIdeas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdeas_Order_By>>;
  where?: InputMaybe<TIdeas_Bool_Exp>;
};


export type TQuery_RootIdeas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdeas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdeas_Order_By>>;
  where?: InputMaybe<TIdeas_Bool_Exp>;
};


export type TQuery_RootIdeas_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TQuery_RootInterested_IdeasArgs = {
  distinct_on?: InputMaybe<Array<TInterested_Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TInterested_Ideas_Order_By>>;
  where?: InputMaybe<TInterested_Ideas_Bool_Exp>;
};


export type TQuery_RootInterested_Ideas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TInterested_Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TInterested_Ideas_Order_By>>;
  where?: InputMaybe<TInterested_Ideas_Bool_Exp>;
};


export type TQuery_RootInterested_Ideas_By_PkArgs = {
  ideaId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


export type TQuery_RootMatch_SettingsArgs = {
  distinct_on?: InputMaybe<Array<TMatch_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMatch_Settings_Order_By>>;
  where?: InputMaybe<TMatch_Settings_Bool_Exp>;
};


export type TQuery_RootMatch_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TMatch_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMatch_Settings_Order_By>>;
  where?: InputMaybe<TMatch_Settings_Bool_Exp>;
};


export type TQuery_RootMatch_Settings_By_PkArgs = {
  user_id: Scalars['uuid'];
};


export type TQuery_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Order_By>>;
  where?: InputMaybe<TMessage_Bool_Exp>;
};


export type TQuery_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Order_By>>;
  where?: InputMaybe<TMessage_Bool_Exp>;
};


export type TQuery_RootMessage_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TQuery_RootMessage_ThreadArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Bool_Exp>;
};


export type TQuery_RootMessage_Thread_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Bool_Exp>;
};


export type TQuery_RootMessage_Thread_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TQuery_RootMessage_Thread_UsersArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Users_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
};


export type TQuery_RootMessage_Thread_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Users_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
};


export type TQuery_RootMessage_Thread_Users_By_PkArgs = {
  threadId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


export type TQuery_RootNotification_TypesArgs = {
  distinct_on?: InputMaybe<Array<TNotification_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TNotification_Types_Order_By>>;
  where?: InputMaybe<TNotification_Types_Bool_Exp>;
};


export type TQuery_RootNotification_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TNotification_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TNotification_Types_Order_By>>;
  where?: InputMaybe<TNotification_Types_Bool_Exp>;
};


export type TQuery_RootNotification_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type TQuery_RootReportArgs = {
  distinct_on?: InputMaybe<Array<TReport_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TReport_Order_By>>;
  where?: InputMaybe<TReport_Bool_Exp>;
};


export type TQuery_RootReport_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TReport_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TReport_Order_By>>;
  where?: InputMaybe<TReport_Bool_Exp>;
};


export type TQuery_RootReport_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TQuery_RootUserArgs = {
  id: Scalars['uuid'];
};


export type TQuery_RootUser_AddressArgs = {
  distinct_on?: InputMaybe<Array<TUser_Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Address_Order_By>>;
  where?: InputMaybe<TUser_Address_Bool_Exp>;
};


export type TQuery_RootUser_Address_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TUser_Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Address_Order_By>>;
  where?: InputMaybe<TUser_Address_Bool_Exp>;
};


export type TQuery_RootUser_Address_By_PkArgs = {
  userId: Scalars['uuid'];
};


export type TQuery_RootUser_Esteem_Points_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<TUser_Esteem_Points_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Esteem_Points_Currency_Order_By>>;
  where?: InputMaybe<TUser_Esteem_Points_Currency_Bool_Exp>;
};


export type TQuery_RootUser_Esteem_Points_Currency_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TUser_Esteem_Points_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Esteem_Points_Currency_Order_By>>;
  where?: InputMaybe<TUser_Esteem_Points_Currency_Bool_Exp>;
};


export type TQuery_RootUser_Esteem_Points_Currency_By_PkArgs = {
  userId: Scalars['uuid'];
};


export type TQuery_RootUser_FollowersArgs = {
  distinct_on?: InputMaybe<Array<TUser_Followers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Followers_Order_By>>;
  where?: InputMaybe<TUser_Followers_Bool_Exp>;
};


export type TQuery_RootUser_Followers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TUser_Followers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Followers_Order_By>>;
  where?: InputMaybe<TUser_Followers_Bool_Exp>;
};


export type TQuery_RootUser_Followers_By_PkArgs = {
  followerId: Scalars['uuid'];
  followingId: Scalars['uuid'];
};


export type TQuery_RootUser_NotificationsArgs = {
  distinct_on?: InputMaybe<Array<TUser_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Notifications_Order_By>>;
  where?: InputMaybe<TUser_Notifications_Bool_Exp>;
};


export type TQuery_RootUser_Notifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TUser_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Notifications_Order_By>>;
  where?: InputMaybe<TUser_Notifications_Bool_Exp>;
};


export type TQuery_RootUser_Notifications_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TQuery_RootUser_ProfileArgs = {
  distinct_on?: InputMaybe<Array<TUser_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Profile_Order_By>>;
  where?: InputMaybe<TUser_Profile_Bool_Exp>;
};


export type TQuery_RootUser_Profile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TUser_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Profile_Order_By>>;
  where?: InputMaybe<TUser_Profile_Bool_Exp>;
};


export type TQuery_RootUser_Profile_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TQuery_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<TUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUsers_Order_By>>;
  where?: InputMaybe<TUsers_Bool_Exp>;
};


export type TQuery_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<TUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUsers_Order_By>>;
  where?: InputMaybe<TUsers_Bool_Exp>;
};


export type TQuery_RootV_CommentsArgs = {
  distinct_on?: InputMaybe<Array<TV_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TV_Comments_Order_By>>;
  where?: InputMaybe<TV_Comments_Bool_Exp>;
};


export type TQuery_RootV_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TV_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TV_Comments_Order_By>>;
  where?: InputMaybe<TV_Comments_Bool_Exp>;
};


export type TQuery_RootWithdrawal_RequestsArgs = {
  distinct_on?: InputMaybe<Array<TWithdrawal_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TWithdrawal_Requests_Order_By>>;
  where?: InputMaybe<TWithdrawal_Requests_Bool_Exp>;
};


export type TQuery_RootWithdrawal_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TWithdrawal_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TWithdrawal_Requests_Order_By>>;
  where?: InputMaybe<TWithdrawal_Requests_Bool_Exp>;
};


export type TQuery_RootWithdrawal_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};

/** The report table for all users, ideas, comments and replies */
export type TReport = {
  __typename?: 'report';
  content: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  fromUserId: Scalars['uuid'];
  id: Scalars['uuid'];
  reason: Scalars['String'];
  recipientEmail: Scalars['String'];
  recipientName: Scalars['String'];
  reportedId: Scalars['uuid'];
  reportedUserId: Scalars['uuid'];
  type: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "report" */
export type TReport_Aggregate = {
  __typename?: 'report_aggregate';
  aggregate?: Maybe<TReport_Aggregate_Fields>;
  nodes: Array<TReport>;
};

/** aggregate fields of "report" */
export type TReport_Aggregate_Fields = {
  __typename?: 'report_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TReport_Max_Fields>;
  min?: Maybe<TReport_Min_Fields>;
};


/** aggregate fields of "report" */
export type TReport_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TReport_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "report". All fields are combined with a logical 'AND'. */
export type TReport_Bool_Exp = {
  _and?: InputMaybe<Array<TReport_Bool_Exp>>;
  _not?: InputMaybe<TReport_Bool_Exp>;
  _or?: InputMaybe<Array<TReport_Bool_Exp>>;
  content?: InputMaybe<TString_Comparison_Exp>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  fromUserId?: InputMaybe<TUuid_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  reason?: InputMaybe<TString_Comparison_Exp>;
  recipientEmail?: InputMaybe<TString_Comparison_Exp>;
  recipientName?: InputMaybe<TString_Comparison_Exp>;
  reportedId?: InputMaybe<TUuid_Comparison_Exp>;
  reportedUserId?: InputMaybe<TUuid_Comparison_Exp>;
  type?: InputMaybe<TString_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "report" */
export type TReport_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'report_pkey';

/** input type for inserting data into table "report" */
export type TReport_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fromUserId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  reason?: InputMaybe<Scalars['String']>;
  recipientEmail?: InputMaybe<Scalars['String']>;
  recipientName?: InputMaybe<Scalars['String']>;
  reportedId?: InputMaybe<Scalars['uuid']>;
  reportedUserId?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TReport_Max_Fields = {
  __typename?: 'report_max_fields';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  fromUserId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  reason?: Maybe<Scalars['String']>;
  recipientEmail?: Maybe<Scalars['String']>;
  recipientName?: Maybe<Scalars['String']>;
  reportedId?: Maybe<Scalars['uuid']>;
  reportedUserId?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type TReport_Min_Fields = {
  __typename?: 'report_min_fields';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  fromUserId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  reason?: Maybe<Scalars['String']>;
  recipientEmail?: Maybe<Scalars['String']>;
  recipientName?: Maybe<Scalars['String']>;
  reportedId?: Maybe<Scalars['uuid']>;
  reportedUserId?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "report" */
export type TReport_Mutation_Response = {
  __typename?: 'report_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TReport>;
};

/** on_conflict condition type for table "report" */
export type TReport_On_Conflict = {
  constraint: TReport_Constraint;
  update_columns?: Array<TReport_Update_Column>;
  where?: InputMaybe<TReport_Bool_Exp>;
};

/** Ordering options when selecting data from "report". */
export type TReport_Order_By = {
  content?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  fromUserId?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  reason?: InputMaybe<TOrder_By>;
  recipientEmail?: InputMaybe<TOrder_By>;
  recipientName?: InputMaybe<TOrder_By>;
  reportedId?: InputMaybe<TOrder_By>;
  reportedUserId?: InputMaybe<TOrder_By>;
  type?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: report */
export type TReport_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "report" */
export type TReport_Select_Column =
  /** column name */
  | 'content'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'fromUserId'
  /** column name */
  | 'id'
  /** column name */
  | 'reason'
  /** column name */
  | 'recipientEmail'
  /** column name */
  | 'recipientName'
  /** column name */
  | 'reportedId'
  /** column name */
  | 'reportedUserId'
  /** column name */
  | 'type'
  /** column name */
  | 'updatedAt';

/** input type for updating data in table "report" */
export type TReport_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fromUserId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  reason?: InputMaybe<Scalars['String']>;
  recipientEmail?: InputMaybe<Scalars['String']>;
  recipientName?: InputMaybe<Scalars['String']>;
  reportedId?: InputMaybe<Scalars['uuid']>;
  reportedUserId?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "report" */
export type TReport_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TReport_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TReport_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fromUserId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  reason?: InputMaybe<Scalars['String']>;
  recipientEmail?: InputMaybe<Scalars['String']>;
  recipientName?: InputMaybe<Scalars['String']>;
  reportedId?: InputMaybe<Scalars['uuid']>;
  reportedUserId?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "report" */
export type TReport_Update_Column =
  /** column name */
  | 'content'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'fromUserId'
  /** column name */
  | 'id'
  /** column name */
  | 'reason'
  /** column name */
  | 'recipientEmail'
  /** column name */
  | 'recipientName'
  /** column name */
  | 'reportedId'
  /** column name */
  | 'reportedUserId'
  /** column name */
  | 'type'
  /** column name */
  | 'updatedAt';

export type TReport_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TReport_Set_Input>;
  where: TReport_Bool_Exp;
};

export type TSubscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "activity" */
  activity: Array<TActivity>;
  /** fetch aggregated fields from the table: "activity" */
  activity_aggregate: TActivity_Aggregate;
  /** fetch data from the table: "activity" using primary key columns */
  activity_by_pk?: Maybe<TActivity>;
  /** fetch data from the table in a streaming manner: "activity" */
  activity_stream: Array<TActivity>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<TAuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<TAuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<TAuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: TAuthProviderRequests_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  authProviderRequests_stream: Array<TAuthProviderRequests>;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<TAuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: TAuthProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.providers" */
  authProviders_stream: Array<TAuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<TAuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<TAuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: TAuthRefreshTokens_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  authRefreshTokens_stream: Array<TAuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<TAuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<TAuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: TAuthRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.roles" */
  authRoles_stream: Array<TAuthRoles>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<TAuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<TAuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: TAuthUserProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  authUserProviders_stream: Array<TAuthUserProviders>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<TAuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<TAuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: TAuthUserRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  authUserRoles_stream: Array<TAuthUserRoles>;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<TAuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<TAuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: TAuthUserSecurityKeys_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  authUserSecurityKeys_stream: Array<TAuthUserSecurityKeys>;
  /** fetch data from the table: "boosted_idea_log" */
  boosted_idea_log: Array<TBoosted_Idea_Log>;
  /** fetch aggregated fields from the table: "boosted_idea_log" */
  boosted_idea_log_aggregate: TBoosted_Idea_Log_Aggregate;
  /** fetch data from the table: "boosted_idea_log" using primary key columns */
  boosted_idea_log_by_pk?: Maybe<TBoosted_Idea_Log>;
  /** fetch data from the table in a streaming manner: "boosted_idea_log" */
  boosted_idea_log_stream: Array<TBoosted_Idea_Log>;
  /** fetch data from the table: "boosted_ideas" */
  boosted_ideas: Array<TBoosted_Ideas>;
  /** fetch aggregated fields from the table: "boosted_ideas" */
  boosted_ideas_aggregate: TBoosted_Ideas_Aggregate;
  /** fetch data from the table: "boosted_ideas" using primary key columns */
  boosted_ideas_by_pk?: Maybe<TBoosted_Ideas>;
  /** fetch data from the table in a streaming manner: "boosted_ideas" */
  boosted_ideas_stream: Array<TBoosted_Ideas>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<TBuckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<TBuckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: TBuckets_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.buckets" */
  buckets_stream: Array<TBuckets>;
  /** fetch data from the table: "comment_status_types" */
  comment_status_types: Array<TComment_Status_Types>;
  /** fetch aggregated fields from the table: "comment_status_types" */
  comment_status_types_aggregate: TComment_Status_Types_Aggregate;
  /** fetch data from the table: "comment_status_types" using primary key columns */
  comment_status_types_by_pk?: Maybe<TComment_Status_Types>;
  /** fetch data from the table in a streaming manner: "comment_status_types" */
  comment_status_types_stream: Array<TComment_Status_Types>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<TFiles>;
  /** An array relationship */
  files: Array<TFiles>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: TFiles_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.files" */
  files_stream: Array<TFiles>;
  /** fetch data from the table: "idea_comment_replies" */
  idea_comment_replies: Array<TIdea_Comment_Replies>;
  /** fetch aggregated fields from the table: "idea_comment_replies" */
  idea_comment_replies_aggregate: TIdea_Comment_Replies_Aggregate;
  /** fetch data from the table: "idea_comment_replies" using primary key columns */
  idea_comment_replies_by_pk?: Maybe<TIdea_Comment_Replies>;
  /** fetch data from the table in a streaming manner: "idea_comment_replies" */
  idea_comment_replies_stream: Array<TIdea_Comment_Replies>;
  /** fetch data from the table: "idea_comments" */
  idea_comments: Array<TIdea_Comments>;
  /** fetch aggregated fields from the table: "idea_comments" */
  idea_comments_aggregate: TIdea_Comments_Aggregate;
  /** fetch data from the table: "idea_comments" using primary key columns */
  idea_comments_by_pk?: Maybe<TIdea_Comments>;
  /** fetch data from the table in a streaming manner: "idea_comments" */
  idea_comments_stream: Array<TIdea_Comments>;
  /** fetch data from the table: "idea_preview" */
  idea_preview: Array<TIdea_Preview>;
  /** fetch aggregated fields from the table: "idea_preview" */
  idea_preview_aggregate: TIdea_Preview_Aggregate;
  /** fetch data from the table in a streaming manner: "idea_preview" */
  idea_preview_stream: Array<TIdea_Preview>;
  /** fetch data from the table: "idea_votes" */
  idea_votes: Array<TIdea_Votes>;
  /** fetch aggregated fields from the table: "idea_votes" */
  idea_votes_aggregate: TIdea_Votes_Aggregate;
  /** fetch data from the table: "idea_votes" using primary key columns */
  idea_votes_by_pk?: Maybe<TIdea_Votes>;
  /** fetch data from the table in a streaming manner: "idea_votes" */
  idea_votes_stream: Array<TIdea_Votes>;
  /** An array relationship */
  ideas: Array<TIdeas>;
  /** An aggregate relationship */
  ideas_aggregate: TIdeas_Aggregate;
  /** fetch data from the table: "ideas" using primary key columns */
  ideas_by_pk?: Maybe<TIdeas>;
  /** fetch data from the table in a streaming manner: "ideas" */
  ideas_stream: Array<TIdeas>;
  /** fetch data from the table: "interested_ideas" */
  interested_ideas: Array<TInterested_Ideas>;
  /** fetch aggregated fields from the table: "interested_ideas" */
  interested_ideas_aggregate: TInterested_Ideas_Aggregate;
  /** fetch data from the table: "interested_ideas" using primary key columns */
  interested_ideas_by_pk?: Maybe<TInterested_Ideas>;
  /** fetch data from the table in a streaming manner: "interested_ideas" */
  interested_ideas_stream: Array<TInterested_Ideas>;
  /** fetch data from the table: "match_settings" */
  match_settings: Array<TMatch_Settings>;
  /** fetch aggregated fields from the table: "match_settings" */
  match_settings_aggregate: TMatch_Settings_Aggregate;
  /** fetch data from the table: "match_settings" using primary key columns */
  match_settings_by_pk?: Maybe<TMatch_Settings>;
  /** fetch data from the table in a streaming manner: "match_settings" */
  match_settings_stream: Array<TMatch_Settings>;
  /** fetch data from the table: "message" */
  message: Array<TMessage>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: TMessage_Aggregate;
  /** fetch data from the table: "message" using primary key columns */
  message_by_pk?: Maybe<TMessage>;
  /** fetch data from the table in a streaming manner: "message" */
  message_stream: Array<TMessage>;
  /** fetch data from the table: "message_thread" */
  message_thread: Array<TMessage_Thread>;
  /** fetch aggregated fields from the table: "message_thread" */
  message_thread_aggregate: TMessage_Thread_Aggregate;
  /** fetch data from the table: "message_thread" using primary key columns */
  message_thread_by_pk?: Maybe<TMessage_Thread>;
  /** fetch data from the table in a streaming manner: "message_thread" */
  message_thread_stream: Array<TMessage_Thread>;
  /** fetch data from the table: "message_thread_users" */
  message_thread_users: Array<TMessage_Thread_Users>;
  /** fetch aggregated fields from the table: "message_thread_users" */
  message_thread_users_aggregate: TMessage_Thread_Users_Aggregate;
  /** fetch data from the table: "message_thread_users" using primary key columns */
  message_thread_users_by_pk?: Maybe<TMessage_Thread_Users>;
  /** fetch data from the table in a streaming manner: "message_thread_users" */
  message_thread_users_stream: Array<TMessage_Thread_Users>;
  /** fetch data from the table: "notification_types" */
  notification_types: Array<TNotification_Types>;
  /** fetch aggregated fields from the table: "notification_types" */
  notification_types_aggregate: TNotification_Types_Aggregate;
  /** fetch data from the table: "notification_types" using primary key columns */
  notification_types_by_pk?: Maybe<TNotification_Types>;
  /** fetch data from the table in a streaming manner: "notification_types" */
  notification_types_stream: Array<TNotification_Types>;
  /** fetch data from the table: "report" */
  report: Array<TReport>;
  /** fetch aggregated fields from the table: "report" */
  report_aggregate: TReport_Aggregate;
  /** fetch data from the table: "report" using primary key columns */
  report_by_pk?: Maybe<TReport>;
  /** fetch data from the table in a streaming manner: "report" */
  report_stream: Array<TReport>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<TUsers>;
  /** fetch data from the table: "user_address" */
  user_address: Array<TUser_Address>;
  /** fetch aggregated fields from the table: "user_address" */
  user_address_aggregate: TUser_Address_Aggregate;
  /** fetch data from the table: "user_address" using primary key columns */
  user_address_by_pk?: Maybe<TUser_Address>;
  /** fetch data from the table in a streaming manner: "user_address" */
  user_address_stream: Array<TUser_Address>;
  /** fetch data from the table: "user_esteem_points_currency" */
  user_esteem_points_currency: Array<TUser_Esteem_Points_Currency>;
  /** fetch aggregated fields from the table: "user_esteem_points_currency" */
  user_esteem_points_currency_aggregate: TUser_Esteem_Points_Currency_Aggregate;
  /** fetch data from the table: "user_esteem_points_currency" using primary key columns */
  user_esteem_points_currency_by_pk?: Maybe<TUser_Esteem_Points_Currency>;
  /** fetch data from the table in a streaming manner: "user_esteem_points_currency" */
  user_esteem_points_currency_stream: Array<TUser_Esteem_Points_Currency>;
  /** An array relationship */
  user_followers: Array<TUser_Followers>;
  /** An aggregate relationship */
  user_followers_aggregate: TUser_Followers_Aggregate;
  /** fetch data from the table: "user_followers" using primary key columns */
  user_followers_by_pk?: Maybe<TUser_Followers>;
  /** fetch data from the table in a streaming manner: "user_followers" */
  user_followers_stream: Array<TUser_Followers>;
  /** An array relationship */
  user_notifications: Array<TUser_Notifications>;
  /** An aggregate relationship */
  user_notifications_aggregate: TUser_Notifications_Aggregate;
  /** fetch data from the table: "user_notifications" using primary key columns */
  user_notifications_by_pk?: Maybe<TUser_Notifications>;
  /** fetch data from the table in a streaming manner: "user_notifications" */
  user_notifications_stream: Array<TUser_Notifications>;
  /** fetch data from the table: "user_profile" */
  user_profile: Array<TUser_Profile>;
  /** fetch aggregated fields from the table: "user_profile" */
  user_profile_aggregate: TUser_Profile_Aggregate;
  /** fetch data from the table: "user_profile" using primary key columns */
  user_profile_by_pk?: Maybe<TUser_Profile>;
  /** fetch data from the table in a streaming manner: "user_profile" */
  user_profile_stream: Array<TUser_Profile>;
  /** fetch data from the table: "auth.users" */
  users: Array<TUsers>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: TUsers_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.users" */
  users_stream: Array<TUsers>;
  /** fetch data from the table: "v_comments" */
  v_comments: Array<TV_Comments>;
  /** fetch aggregated fields from the table: "v_comments" */
  v_comments_aggregate: TV_Comments_Aggregate;
  /** fetch data from the table in a streaming manner: "v_comments" */
  v_comments_stream: Array<TV_Comments>;
  /** fetch data from the table: "withdrawal_requests" */
  withdrawal_requests: Array<TWithdrawal_Requests>;
  /** fetch aggregated fields from the table: "withdrawal_requests" */
  withdrawal_requests_aggregate: TWithdrawal_Requests_Aggregate;
  /** fetch data from the table: "withdrawal_requests" using primary key columns */
  withdrawal_requests_by_pk?: Maybe<TWithdrawal_Requests>;
  /** fetch data from the table in a streaming manner: "withdrawal_requests" */
  withdrawal_requests_stream: Array<TWithdrawal_Requests>;
};


export type TSubscription_RootActivityArgs = {
  distinct_on?: InputMaybe<Array<TActivity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TActivity_Order_By>>;
  where?: InputMaybe<TActivity_Bool_Exp>;
};


export type TSubscription_RootActivity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TActivity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TActivity_Order_By>>;
  where?: InputMaybe<TActivity_Bool_Exp>;
};


export type TSubscription_RootActivity_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootActivity_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TActivity_Stream_Cursor_Input>>;
  where?: InputMaybe<TActivity_Bool_Exp>;
};


export type TSubscription_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type TSubscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<TAuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthProviderRequests_Order_By>>;
  where?: InputMaybe<TAuthProviderRequests_Bool_Exp>;
};


export type TSubscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthProviderRequests_Order_By>>;
  where?: InputMaybe<TAuthProviderRequests_Bool_Exp>;
};


export type TSubscription_RootAuthProviderRequests_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TAuthProviderRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<TAuthProviderRequests_Bool_Exp>;
};


export type TSubscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<TAuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthProviders_Order_By>>;
  where?: InputMaybe<TAuthProviders_Bool_Exp>;
};


export type TSubscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthProviders_Order_By>>;
  where?: InputMaybe<TAuthProviders_Bool_Exp>;
};


export type TSubscription_RootAuthProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TAuthProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<TAuthProviders_Bool_Exp>;
};


export type TSubscription_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type TSubscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<TAuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthRefreshTokens_Order_By>>;
  where?: InputMaybe<TAuthRefreshTokens_Bool_Exp>;
};


export type TSubscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthRefreshTokens_Order_By>>;
  where?: InputMaybe<TAuthRefreshTokens_Bool_Exp>;
};


export type TSubscription_RootAuthRefreshTokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TAuthRefreshTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<TAuthRefreshTokens_Bool_Exp>;
};


export type TSubscription_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type TSubscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<TAuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthRoles_Order_By>>;
  where?: InputMaybe<TAuthRoles_Bool_Exp>;
};


export type TSubscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthRoles_Order_By>>;
  where?: InputMaybe<TAuthRoles_Bool_Exp>;
};


export type TSubscription_RootAuthRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TAuthRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<TAuthRoles_Bool_Exp>;
};


export type TSubscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserProviders_Order_By>>;
  where?: InputMaybe<TAuthUserProviders_Bool_Exp>;
};


export type TSubscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserProviders_Order_By>>;
  where?: InputMaybe<TAuthUserProviders_Bool_Exp>;
};


export type TSubscription_RootAuthUserProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TAuthUserProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<TAuthUserProviders_Bool_Exp>;
};


export type TSubscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserRoles_Order_By>>;
  where?: InputMaybe<TAuthUserRoles_Bool_Exp>;
};


export type TSubscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserRoles_Order_By>>;
  where?: InputMaybe<TAuthUserRoles_Bool_Exp>;
};


export type TSubscription_RootAuthUserRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TAuthUserRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<TAuthUserRoles_Bool_Exp>;
};


export type TSubscription_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<TAuthUserSecurityKeys_Bool_Exp>;
};


export type TSubscription_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<TAuthUserSecurityKeys_Bool_Exp>;
};


export type TSubscription_RootAuthUserSecurityKeys_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TAuthUserSecurityKeys_Stream_Cursor_Input>>;
  where?: InputMaybe<TAuthUserSecurityKeys_Bool_Exp>;
};


export type TSubscription_RootBoosted_Idea_LogArgs = {
  distinct_on?: InputMaybe<Array<TBoosted_Idea_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TBoosted_Idea_Log_Order_By>>;
  where?: InputMaybe<TBoosted_Idea_Log_Bool_Exp>;
};


export type TSubscription_RootBoosted_Idea_Log_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TBoosted_Idea_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TBoosted_Idea_Log_Order_By>>;
  where?: InputMaybe<TBoosted_Idea_Log_Bool_Exp>;
};


export type TSubscription_RootBoosted_Idea_Log_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootBoosted_Idea_Log_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TBoosted_Idea_Log_Stream_Cursor_Input>>;
  where?: InputMaybe<TBoosted_Idea_Log_Bool_Exp>;
};


export type TSubscription_RootBoosted_IdeasArgs = {
  distinct_on?: InputMaybe<Array<TBoosted_Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TBoosted_Ideas_Order_By>>;
  where?: InputMaybe<TBoosted_Ideas_Bool_Exp>;
};


export type TSubscription_RootBoosted_Ideas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TBoosted_Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TBoosted_Ideas_Order_By>>;
  where?: InputMaybe<TBoosted_Ideas_Bool_Exp>;
};


export type TSubscription_RootBoosted_Ideas_By_PkArgs = {
  ideaId: Scalars['uuid'];
};


export type TSubscription_RootBoosted_Ideas_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TBoosted_Ideas_Stream_Cursor_Input>>;
  where?: InputMaybe<TBoosted_Ideas_Bool_Exp>;
};


export type TSubscription_RootBucketArgs = {
  id: Scalars['String'];
};


export type TSubscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<TBuckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TBuckets_Order_By>>;
  where?: InputMaybe<TBuckets_Bool_Exp>;
};


export type TSubscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<TBuckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TBuckets_Order_By>>;
  where?: InputMaybe<TBuckets_Bool_Exp>;
};


export type TSubscription_RootBuckets_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TBuckets_Stream_Cursor_Input>>;
  where?: InputMaybe<TBuckets_Bool_Exp>;
};


export type TSubscription_RootComment_Status_TypesArgs = {
  distinct_on?: InputMaybe<Array<TComment_Status_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TComment_Status_Types_Order_By>>;
  where?: InputMaybe<TComment_Status_Types_Bool_Exp>;
};


export type TSubscription_RootComment_Status_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TComment_Status_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TComment_Status_Types_Order_By>>;
  where?: InputMaybe<TComment_Status_Types_Bool_Exp>;
};


export type TSubscription_RootComment_Status_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type TSubscription_RootComment_Status_Types_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TComment_Status_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<TComment_Status_Types_Bool_Exp>;
};


export type TSubscription_RootFileArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<TFiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TFiles_Order_By>>;
  where?: InputMaybe<TFiles_Bool_Exp>;
};


export type TSubscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TFiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TFiles_Order_By>>;
  where?: InputMaybe<TFiles_Bool_Exp>;
};


export type TSubscription_RootFiles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TFiles_Stream_Cursor_Input>>;
  where?: InputMaybe<TFiles_Bool_Exp>;
};


export type TSubscription_RootIdea_Comment_RepliesArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comment_Replies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comment_Replies_Order_By>>;
  where?: InputMaybe<TIdea_Comment_Replies_Bool_Exp>;
};


export type TSubscription_RootIdea_Comment_Replies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comment_Replies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comment_Replies_Order_By>>;
  where?: InputMaybe<TIdea_Comment_Replies_Bool_Exp>;
};


export type TSubscription_RootIdea_Comment_Replies_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootIdea_Comment_Replies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TIdea_Comment_Replies_Stream_Cursor_Input>>;
  where?: InputMaybe<TIdea_Comment_Replies_Bool_Exp>;
};


export type TSubscription_RootIdea_CommentsArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comments_Order_By>>;
  where?: InputMaybe<TIdea_Comments_Bool_Exp>;
};


export type TSubscription_RootIdea_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comments_Order_By>>;
  where?: InputMaybe<TIdea_Comments_Bool_Exp>;
};


export type TSubscription_RootIdea_Comments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootIdea_Comments_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TIdea_Comments_Stream_Cursor_Input>>;
  where?: InputMaybe<TIdea_Comments_Bool_Exp>;
};


export type TSubscription_RootIdea_PreviewArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Preview_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Preview_Order_By>>;
  where?: InputMaybe<TIdea_Preview_Bool_Exp>;
};


export type TSubscription_RootIdea_Preview_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Preview_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Preview_Order_By>>;
  where?: InputMaybe<TIdea_Preview_Bool_Exp>;
};


export type TSubscription_RootIdea_Preview_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TIdea_Preview_Stream_Cursor_Input>>;
  where?: InputMaybe<TIdea_Preview_Bool_Exp>;
};


export type TSubscription_RootIdea_VotesArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Votes_Order_By>>;
  where?: InputMaybe<TIdea_Votes_Bool_Exp>;
};


export type TSubscription_RootIdea_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Votes_Order_By>>;
  where?: InputMaybe<TIdea_Votes_Bool_Exp>;
};


export type TSubscription_RootIdea_Votes_By_PkArgs = {
  ideaId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


export type TSubscription_RootIdea_Votes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TIdea_Votes_Stream_Cursor_Input>>;
  where?: InputMaybe<TIdea_Votes_Bool_Exp>;
};


export type TSubscription_RootIdeasArgs = {
  distinct_on?: InputMaybe<Array<TIdeas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdeas_Order_By>>;
  where?: InputMaybe<TIdeas_Bool_Exp>;
};


export type TSubscription_RootIdeas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdeas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdeas_Order_By>>;
  where?: InputMaybe<TIdeas_Bool_Exp>;
};


export type TSubscription_RootIdeas_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootIdeas_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TIdeas_Stream_Cursor_Input>>;
  where?: InputMaybe<TIdeas_Bool_Exp>;
};


export type TSubscription_RootInterested_IdeasArgs = {
  distinct_on?: InputMaybe<Array<TInterested_Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TInterested_Ideas_Order_By>>;
  where?: InputMaybe<TInterested_Ideas_Bool_Exp>;
};


export type TSubscription_RootInterested_Ideas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TInterested_Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TInterested_Ideas_Order_By>>;
  where?: InputMaybe<TInterested_Ideas_Bool_Exp>;
};


export type TSubscription_RootInterested_Ideas_By_PkArgs = {
  ideaId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


export type TSubscription_RootInterested_Ideas_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TInterested_Ideas_Stream_Cursor_Input>>;
  where?: InputMaybe<TInterested_Ideas_Bool_Exp>;
};


export type TSubscription_RootMatch_SettingsArgs = {
  distinct_on?: InputMaybe<Array<TMatch_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMatch_Settings_Order_By>>;
  where?: InputMaybe<TMatch_Settings_Bool_Exp>;
};


export type TSubscription_RootMatch_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TMatch_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMatch_Settings_Order_By>>;
  where?: InputMaybe<TMatch_Settings_Bool_Exp>;
};


export type TSubscription_RootMatch_Settings_By_PkArgs = {
  user_id: Scalars['uuid'];
};


export type TSubscription_RootMatch_Settings_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TMatch_Settings_Stream_Cursor_Input>>;
  where?: InputMaybe<TMatch_Settings_Bool_Exp>;
};


export type TSubscription_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Order_By>>;
  where?: InputMaybe<TMessage_Bool_Exp>;
};


export type TSubscription_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Order_By>>;
  where?: InputMaybe<TMessage_Bool_Exp>;
};


export type TSubscription_RootMessage_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootMessage_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TMessage_Stream_Cursor_Input>>;
  where?: InputMaybe<TMessage_Bool_Exp>;
};


export type TSubscription_RootMessage_ThreadArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Bool_Exp>;
};


export type TSubscription_RootMessage_Thread_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Bool_Exp>;
};


export type TSubscription_RootMessage_Thread_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootMessage_Thread_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TMessage_Thread_Stream_Cursor_Input>>;
  where?: InputMaybe<TMessage_Thread_Bool_Exp>;
};


export type TSubscription_RootMessage_Thread_UsersArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Users_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
};


export type TSubscription_RootMessage_Thread_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Users_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
};


export type TSubscription_RootMessage_Thread_Users_By_PkArgs = {
  threadId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


export type TSubscription_RootMessage_Thread_Users_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TMessage_Thread_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
};


export type TSubscription_RootNotification_TypesArgs = {
  distinct_on?: InputMaybe<Array<TNotification_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TNotification_Types_Order_By>>;
  where?: InputMaybe<TNotification_Types_Bool_Exp>;
};


export type TSubscription_RootNotification_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TNotification_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TNotification_Types_Order_By>>;
  where?: InputMaybe<TNotification_Types_Bool_Exp>;
};


export type TSubscription_RootNotification_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type TSubscription_RootNotification_Types_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TNotification_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<TNotification_Types_Bool_Exp>;
};


export type TSubscription_RootReportArgs = {
  distinct_on?: InputMaybe<Array<TReport_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TReport_Order_By>>;
  where?: InputMaybe<TReport_Bool_Exp>;
};


export type TSubscription_RootReport_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TReport_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TReport_Order_By>>;
  where?: InputMaybe<TReport_Bool_Exp>;
};


export type TSubscription_RootReport_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootReport_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TReport_Stream_Cursor_Input>>;
  where?: InputMaybe<TReport_Bool_Exp>;
};


export type TSubscription_RootUserArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootUser_AddressArgs = {
  distinct_on?: InputMaybe<Array<TUser_Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Address_Order_By>>;
  where?: InputMaybe<TUser_Address_Bool_Exp>;
};


export type TSubscription_RootUser_Address_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TUser_Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Address_Order_By>>;
  where?: InputMaybe<TUser_Address_Bool_Exp>;
};


export type TSubscription_RootUser_Address_By_PkArgs = {
  userId: Scalars['uuid'];
};


export type TSubscription_RootUser_Address_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TUser_Address_Stream_Cursor_Input>>;
  where?: InputMaybe<TUser_Address_Bool_Exp>;
};


export type TSubscription_RootUser_Esteem_Points_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<TUser_Esteem_Points_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Esteem_Points_Currency_Order_By>>;
  where?: InputMaybe<TUser_Esteem_Points_Currency_Bool_Exp>;
};


export type TSubscription_RootUser_Esteem_Points_Currency_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TUser_Esteem_Points_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Esteem_Points_Currency_Order_By>>;
  where?: InputMaybe<TUser_Esteem_Points_Currency_Bool_Exp>;
};


export type TSubscription_RootUser_Esteem_Points_Currency_By_PkArgs = {
  userId: Scalars['uuid'];
};


export type TSubscription_RootUser_Esteem_Points_Currency_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TUser_Esteem_Points_Currency_Stream_Cursor_Input>>;
  where?: InputMaybe<TUser_Esteem_Points_Currency_Bool_Exp>;
};


export type TSubscription_RootUser_FollowersArgs = {
  distinct_on?: InputMaybe<Array<TUser_Followers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Followers_Order_By>>;
  where?: InputMaybe<TUser_Followers_Bool_Exp>;
};


export type TSubscription_RootUser_Followers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TUser_Followers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Followers_Order_By>>;
  where?: InputMaybe<TUser_Followers_Bool_Exp>;
};


export type TSubscription_RootUser_Followers_By_PkArgs = {
  followerId: Scalars['uuid'];
  followingId: Scalars['uuid'];
};


export type TSubscription_RootUser_Followers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TUser_Followers_Stream_Cursor_Input>>;
  where?: InputMaybe<TUser_Followers_Bool_Exp>;
};


export type TSubscription_RootUser_NotificationsArgs = {
  distinct_on?: InputMaybe<Array<TUser_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Notifications_Order_By>>;
  where?: InputMaybe<TUser_Notifications_Bool_Exp>;
};


export type TSubscription_RootUser_Notifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TUser_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Notifications_Order_By>>;
  where?: InputMaybe<TUser_Notifications_Bool_Exp>;
};


export type TSubscription_RootUser_Notifications_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootUser_Notifications_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TUser_Notifications_Stream_Cursor_Input>>;
  where?: InputMaybe<TUser_Notifications_Bool_Exp>;
};


export type TSubscription_RootUser_ProfileArgs = {
  distinct_on?: InputMaybe<Array<TUser_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Profile_Order_By>>;
  where?: InputMaybe<TUser_Profile_Bool_Exp>;
};


export type TSubscription_RootUser_Profile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TUser_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Profile_Order_By>>;
  where?: InputMaybe<TUser_Profile_Bool_Exp>;
};


export type TSubscription_RootUser_Profile_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootUser_Profile_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TUser_Profile_Stream_Cursor_Input>>;
  where?: InputMaybe<TUser_Profile_Bool_Exp>;
};


export type TSubscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<TUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUsers_Order_By>>;
  where?: InputMaybe<TUsers_Bool_Exp>;
};


export type TSubscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<TUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUsers_Order_By>>;
  where?: InputMaybe<TUsers_Bool_Exp>;
};


export type TSubscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TUsers_Stream_Cursor_Input>>;
  where?: InputMaybe<TUsers_Bool_Exp>;
};


export type TSubscription_RootV_CommentsArgs = {
  distinct_on?: InputMaybe<Array<TV_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TV_Comments_Order_By>>;
  where?: InputMaybe<TV_Comments_Bool_Exp>;
};


export type TSubscription_RootV_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TV_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TV_Comments_Order_By>>;
  where?: InputMaybe<TV_Comments_Bool_Exp>;
};


export type TSubscription_RootV_Comments_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TV_Comments_Stream_Cursor_Input>>;
  where?: InputMaybe<TV_Comments_Bool_Exp>;
};


export type TSubscription_RootWithdrawal_RequestsArgs = {
  distinct_on?: InputMaybe<Array<TWithdrawal_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TWithdrawal_Requests_Order_By>>;
  where?: InputMaybe<TWithdrawal_Requests_Bool_Exp>;
};


export type TSubscription_RootWithdrawal_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TWithdrawal_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TWithdrawal_Requests_Order_By>>;
  where?: InputMaybe<TWithdrawal_Requests_Bool_Exp>;
};


export type TSubscription_RootWithdrawal_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootWithdrawal_Requests_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TWithdrawal_Requests_Stream_Cursor_Input>>;
  where?: InputMaybe<TWithdrawal_Requests_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TTimestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** The table to store the address for all users */
export type TUser_Address = {
  __typename?: 'user_address';
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  location?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: TUsers;
  userId: Scalars['uuid'];
};

/** aggregated selection of "user_address" */
export type TUser_Address_Aggregate = {
  __typename?: 'user_address_aggregate';
  aggregate?: Maybe<TUser_Address_Aggregate_Fields>;
  nodes: Array<TUser_Address>;
};

/** aggregate fields of "user_address" */
export type TUser_Address_Aggregate_Fields = {
  __typename?: 'user_address_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TUser_Address_Max_Fields>;
  min?: Maybe<TUser_Address_Min_Fields>;
};


/** aggregate fields of "user_address" */
export type TUser_Address_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TUser_Address_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_address". All fields are combined with a logical 'AND'. */
export type TUser_Address_Bool_Exp = {
  _and?: InputMaybe<Array<TUser_Address_Bool_Exp>>;
  _not?: InputMaybe<TUser_Address_Bool_Exp>;
  _or?: InputMaybe<Array<TUser_Address_Bool_Exp>>;
  country?: InputMaybe<TString_Comparison_Exp>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  location?: InputMaybe<TString_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_address" */
export type TUser_Address_Constraint =
  /** unique or primary key constraint on columns "user_id" */
  | 'user_address_pkey';

/** input type for inserting data into table "user_address" */
export type TUser_Address_Insert_Input = {
  country?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  location?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TUser_Address_Max_Fields = {
  __typename?: 'user_address_max_fields';
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  location?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type TUser_Address_Min_Fields = {
  __typename?: 'user_address_min_fields';
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  location?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_address" */
export type TUser_Address_Mutation_Response = {
  __typename?: 'user_address_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TUser_Address>;
};

/** input type for inserting object relation for remote table "user_address" */
export type TUser_Address_Obj_Rel_Insert_Input = {
  data: TUser_Address_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<TUser_Address_On_Conflict>;
};

/** on_conflict condition type for table "user_address" */
export type TUser_Address_On_Conflict = {
  constraint: TUser_Address_Constraint;
  update_columns?: Array<TUser_Address_Update_Column>;
  where?: InputMaybe<TUser_Address_Bool_Exp>;
};

/** Ordering options when selecting data from "user_address". */
export type TUser_Address_Order_By = {
  country?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  location?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: user_address */
export type TUser_Address_Pk_Columns_Input = {
  userId: Scalars['uuid'];
};

/** select columns of table "user_address" */
export type TUser_Address_Select_Column =
  /** column name */
  | 'country'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'location'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

/** input type for updating data in table "user_address" */
export type TUser_Address_Set_Input = {
  country?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  location?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "user_address" */
export type TUser_Address_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TUser_Address_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TUser_Address_Stream_Cursor_Value_Input = {
  country?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  location?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_address" */
export type TUser_Address_Update_Column =
  /** column name */
  | 'country'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'location'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

export type TUser_Address_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TUser_Address_Set_Input>;
  where: TUser_Address_Bool_Exp;
};

/** Esteem points for all users */
export type TUser_Esteem_Points_Currency = {
  __typename?: 'user_esteem_points_currency';
  currency: Scalars['money'];
  points: Scalars['Int'];
  userId: Scalars['uuid'];
};

/** aggregated selection of "user_esteem_points_currency" */
export type TUser_Esteem_Points_Currency_Aggregate = {
  __typename?: 'user_esteem_points_currency_aggregate';
  aggregate?: Maybe<TUser_Esteem_Points_Currency_Aggregate_Fields>;
  nodes: Array<TUser_Esteem_Points_Currency>;
};

/** aggregate fields of "user_esteem_points_currency" */
export type TUser_Esteem_Points_Currency_Aggregate_Fields = {
  __typename?: 'user_esteem_points_currency_aggregate_fields';
  avg?: Maybe<TUser_Esteem_Points_Currency_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<TUser_Esteem_Points_Currency_Max_Fields>;
  min?: Maybe<TUser_Esteem_Points_Currency_Min_Fields>;
  stddev?: Maybe<TUser_Esteem_Points_Currency_Stddev_Fields>;
  stddev_pop?: Maybe<TUser_Esteem_Points_Currency_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<TUser_Esteem_Points_Currency_Stddev_Samp_Fields>;
  sum?: Maybe<TUser_Esteem_Points_Currency_Sum_Fields>;
  var_pop?: Maybe<TUser_Esteem_Points_Currency_Var_Pop_Fields>;
  var_samp?: Maybe<TUser_Esteem_Points_Currency_Var_Samp_Fields>;
  variance?: Maybe<TUser_Esteem_Points_Currency_Variance_Fields>;
};


/** aggregate fields of "user_esteem_points_currency" */
export type TUser_Esteem_Points_Currency_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TUser_Esteem_Points_Currency_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type TUser_Esteem_Points_Currency_Avg_Fields = {
  __typename?: 'user_esteem_points_currency_avg_fields';
  currency?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user_esteem_points_currency". All fields are combined with a logical 'AND'. */
export type TUser_Esteem_Points_Currency_Bool_Exp = {
  _and?: InputMaybe<Array<TUser_Esteem_Points_Currency_Bool_Exp>>;
  _not?: InputMaybe<TUser_Esteem_Points_Currency_Bool_Exp>;
  _or?: InputMaybe<Array<TUser_Esteem_Points_Currency_Bool_Exp>>;
  currency?: InputMaybe<TMoney_Comparison_Exp>;
  points?: InputMaybe<TInt_Comparison_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_esteem_points_currency" */
export type TUser_Esteem_Points_Currency_Constraint =
  /** unique or primary key constraint on columns "user_id" */
  | 'esteem_points_pkey';

/** input type for incrementing numeric columns in table "user_esteem_points_currency" */
export type TUser_Esteem_Points_Currency_Inc_Input = {
  currency?: InputMaybe<Scalars['money']>;
  points?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_esteem_points_currency" */
export type TUser_Esteem_Points_Currency_Insert_Input = {
  currency?: InputMaybe<Scalars['money']>;
  points?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TUser_Esteem_Points_Currency_Max_Fields = {
  __typename?: 'user_esteem_points_currency_max_fields';
  currency?: Maybe<Scalars['money']>;
  points?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type TUser_Esteem_Points_Currency_Min_Fields = {
  __typename?: 'user_esteem_points_currency_min_fields';
  currency?: Maybe<Scalars['money']>;
  points?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_esteem_points_currency" */
export type TUser_Esteem_Points_Currency_Mutation_Response = {
  __typename?: 'user_esteem_points_currency_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TUser_Esteem_Points_Currency>;
};

/** input type for inserting object relation for remote table "user_esteem_points_currency" */
export type TUser_Esteem_Points_Currency_Obj_Rel_Insert_Input = {
  data: TUser_Esteem_Points_Currency_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<TUser_Esteem_Points_Currency_On_Conflict>;
};

/** on_conflict condition type for table "user_esteem_points_currency" */
export type TUser_Esteem_Points_Currency_On_Conflict = {
  constraint: TUser_Esteem_Points_Currency_Constraint;
  update_columns?: Array<TUser_Esteem_Points_Currency_Update_Column>;
  where?: InputMaybe<TUser_Esteem_Points_Currency_Bool_Exp>;
};

/** Ordering options when selecting data from "user_esteem_points_currency". */
export type TUser_Esteem_Points_Currency_Order_By = {
  currency?: InputMaybe<TOrder_By>;
  points?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: user_esteem_points_currency */
export type TUser_Esteem_Points_Currency_Pk_Columns_Input = {
  userId: Scalars['uuid'];
};

/** select columns of table "user_esteem_points_currency" */
export type TUser_Esteem_Points_Currency_Select_Column =
  /** column name */
  | 'currency'
  /** column name */
  | 'points'
  /** column name */
  | 'userId';

/** input type for updating data in table "user_esteem_points_currency" */
export type TUser_Esteem_Points_Currency_Set_Input = {
  currency?: InputMaybe<Scalars['money']>;
  points?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type TUser_Esteem_Points_Currency_Stddev_Fields = {
  __typename?: 'user_esteem_points_currency_stddev_fields';
  currency?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type TUser_Esteem_Points_Currency_Stddev_Pop_Fields = {
  __typename?: 'user_esteem_points_currency_stddev_pop_fields';
  currency?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type TUser_Esteem_Points_Currency_Stddev_Samp_Fields = {
  __typename?: 'user_esteem_points_currency_stddev_samp_fields';
  currency?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "user_esteem_points_currency" */
export type TUser_Esteem_Points_Currency_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TUser_Esteem_Points_Currency_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TUser_Esteem_Points_Currency_Stream_Cursor_Value_Input = {
  currency?: InputMaybe<Scalars['money']>;
  points?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type TUser_Esteem_Points_Currency_Sum_Fields = {
  __typename?: 'user_esteem_points_currency_sum_fields';
  currency?: Maybe<Scalars['money']>;
  points?: Maybe<Scalars['Int']>;
};

/** update columns of table "user_esteem_points_currency" */
export type TUser_Esteem_Points_Currency_Update_Column =
  /** column name */
  | 'currency'
  /** column name */
  | 'points'
  /** column name */
  | 'userId';

export type TUser_Esteem_Points_Currency_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TUser_Esteem_Points_Currency_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TUser_Esteem_Points_Currency_Set_Input>;
  where: TUser_Esteem_Points_Currency_Bool_Exp;
};

/** aggregate var_pop on columns */
export type TUser_Esteem_Points_Currency_Var_Pop_Fields = {
  __typename?: 'user_esteem_points_currency_var_pop_fields';
  currency?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type TUser_Esteem_Points_Currency_Var_Samp_Fields = {
  __typename?: 'user_esteem_points_currency_var_samp_fields';
  currency?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type TUser_Esteem_Points_Currency_Variance_Fields = {
  __typename?: 'user_esteem_points_currency_variance_fields';
  currency?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

/** The table to store all user followers */
export type TUser_Followers = {
  __typename?: 'user_followers';
  followerId: Scalars['uuid'];
  followingId: Scalars['uuid'];
  status: Scalars['String'];
  /** An object relationship */
  user: TUsers;
};

/** aggregated selection of "user_followers" */
export type TUser_Followers_Aggregate = {
  __typename?: 'user_followers_aggregate';
  aggregate?: Maybe<TUser_Followers_Aggregate_Fields>;
  nodes: Array<TUser_Followers>;
};

export type TUser_Followers_Aggregate_Bool_Exp = {
  count?: InputMaybe<TUser_Followers_Aggregate_Bool_Exp_Count>;
};

export type TUser_Followers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TUser_Followers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TUser_Followers_Bool_Exp>;
  predicate: TInt_Comparison_Exp;
};

/** aggregate fields of "user_followers" */
export type TUser_Followers_Aggregate_Fields = {
  __typename?: 'user_followers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TUser_Followers_Max_Fields>;
  min?: Maybe<TUser_Followers_Min_Fields>;
};


/** aggregate fields of "user_followers" */
export type TUser_Followers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TUser_Followers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_followers" */
export type TUser_Followers_Aggregate_Order_By = {
  count?: InputMaybe<TOrder_By>;
  max?: InputMaybe<TUser_Followers_Max_Order_By>;
  min?: InputMaybe<TUser_Followers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_followers" */
export type TUser_Followers_Arr_Rel_Insert_Input = {
  data: Array<TUser_Followers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TUser_Followers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_followers". All fields are combined with a logical 'AND'. */
export type TUser_Followers_Bool_Exp = {
  _and?: InputMaybe<Array<TUser_Followers_Bool_Exp>>;
  _not?: InputMaybe<TUser_Followers_Bool_Exp>;
  _or?: InputMaybe<Array<TUser_Followers_Bool_Exp>>;
  followerId?: InputMaybe<TUuid_Comparison_Exp>;
  followingId?: InputMaybe<TUuid_Comparison_Exp>;
  status?: InputMaybe<TString_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
};

/** unique or primary key constraints on table "user_followers" */
export type TUser_Followers_Constraint =
  /** unique or primary key constraint on columns "following_id", "follower_id" */
  | 'user_followers_pkey';

/** input type for inserting data into table "user_followers" */
export type TUser_Followers_Insert_Input = {
  followerId?: InputMaybe<Scalars['uuid']>;
  followingId?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type TUser_Followers_Max_Fields = {
  __typename?: 'user_followers_max_fields';
  followerId?: Maybe<Scalars['uuid']>;
  followingId?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_followers" */
export type TUser_Followers_Max_Order_By = {
  followerId?: InputMaybe<TOrder_By>;
  followingId?: InputMaybe<TOrder_By>;
  status?: InputMaybe<TOrder_By>;
};

/** aggregate min on columns */
export type TUser_Followers_Min_Fields = {
  __typename?: 'user_followers_min_fields';
  followerId?: Maybe<Scalars['uuid']>;
  followingId?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_followers" */
export type TUser_Followers_Min_Order_By = {
  followerId?: InputMaybe<TOrder_By>;
  followingId?: InputMaybe<TOrder_By>;
  status?: InputMaybe<TOrder_By>;
};

/** response of any mutation on the table "user_followers" */
export type TUser_Followers_Mutation_Response = {
  __typename?: 'user_followers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TUser_Followers>;
};

/** on_conflict condition type for table "user_followers" */
export type TUser_Followers_On_Conflict = {
  constraint: TUser_Followers_Constraint;
  update_columns?: Array<TUser_Followers_Update_Column>;
  where?: InputMaybe<TUser_Followers_Bool_Exp>;
};

/** Ordering options when selecting data from "user_followers". */
export type TUser_Followers_Order_By = {
  followerId?: InputMaybe<TOrder_By>;
  followingId?: InputMaybe<TOrder_By>;
  status?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
};

/** primary key columns input for table: user_followers */
export type TUser_Followers_Pk_Columns_Input = {
  followerId: Scalars['uuid'];
  followingId: Scalars['uuid'];
};

/** select columns of table "user_followers" */
export type TUser_Followers_Select_Column =
  /** column name */
  | 'followerId'
  /** column name */
  | 'followingId'
  /** column name */
  | 'status';

/** input type for updating data in table "user_followers" */
export type TUser_Followers_Set_Input = {
  followerId?: InputMaybe<Scalars['uuid']>;
  followingId?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user_followers" */
export type TUser_Followers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TUser_Followers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TUser_Followers_Stream_Cursor_Value_Input = {
  followerId?: InputMaybe<Scalars['uuid']>;
  followingId?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user_followers" */
export type TUser_Followers_Update_Column =
  /** column name */
  | 'followerId'
  /** column name */
  | 'followingId'
  /** column name */
  | 'status';

export type TUser_Followers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TUser_Followers_Set_Input>;
  where: TUser_Followers_Bool_Exp;
};

/** columns and relationships of "user_notifications" */
export type TUser_Notifications = {
  __typename?: 'user_notifications';
  createdAt: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  read: Scalars['Boolean'];
  type: TNotification_Types_Enum;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: TUsers;
  userId: Scalars['uuid'];
  value: Scalars['String'];
};

/** aggregated selection of "user_notifications" */
export type TUser_Notifications_Aggregate = {
  __typename?: 'user_notifications_aggregate';
  aggregate?: Maybe<TUser_Notifications_Aggregate_Fields>;
  nodes: Array<TUser_Notifications>;
};

export type TUser_Notifications_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<TUser_Notifications_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<TUser_Notifications_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<TUser_Notifications_Aggregate_Bool_Exp_Count>;
};

export type TUser_Notifications_Aggregate_Bool_Exp_Bool_And = {
  arguments: TUser_Notifications_Select_Column_User_Notifications_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TUser_Notifications_Bool_Exp>;
  predicate: TBoolean_Comparison_Exp;
};

export type TUser_Notifications_Aggregate_Bool_Exp_Bool_Or = {
  arguments: TUser_Notifications_Select_Column_User_Notifications_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TUser_Notifications_Bool_Exp>;
  predicate: TBoolean_Comparison_Exp;
};

export type TUser_Notifications_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TUser_Notifications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TUser_Notifications_Bool_Exp>;
  predicate: TInt_Comparison_Exp;
};

/** aggregate fields of "user_notifications" */
export type TUser_Notifications_Aggregate_Fields = {
  __typename?: 'user_notifications_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TUser_Notifications_Max_Fields>;
  min?: Maybe<TUser_Notifications_Min_Fields>;
};


/** aggregate fields of "user_notifications" */
export type TUser_Notifications_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TUser_Notifications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_notifications" */
export type TUser_Notifications_Aggregate_Order_By = {
  count?: InputMaybe<TOrder_By>;
  max?: InputMaybe<TUser_Notifications_Max_Order_By>;
  min?: InputMaybe<TUser_Notifications_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_notifications" */
export type TUser_Notifications_Arr_Rel_Insert_Input = {
  data: Array<TUser_Notifications_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TUser_Notifications_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_notifications". All fields are combined with a logical 'AND'. */
export type TUser_Notifications_Bool_Exp = {
  _and?: InputMaybe<Array<TUser_Notifications_Bool_Exp>>;
  _not?: InputMaybe<TUser_Notifications_Bool_Exp>;
  _or?: InputMaybe<Array<TUser_Notifications_Bool_Exp>>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  description?: InputMaybe<TString_Comparison_Exp>;
  href?: InputMaybe<TString_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  read?: InputMaybe<TBoolean_Comparison_Exp>;
  type?: InputMaybe<TNotification_Types_Enum_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
  value?: InputMaybe<TString_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_notifications" */
export type TUser_Notifications_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'user_notifications_pkey';

/** input type for inserting data into table "user_notifications" */
export type TUser_Notifications_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  read?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<TNotification_Types_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TUser_Notifications_Max_Fields = {
  __typename?: 'user_notifications_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_notifications" */
export type TUser_Notifications_Max_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  description?: InputMaybe<TOrder_By>;
  href?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
  value?: InputMaybe<TOrder_By>;
};

/** aggregate min on columns */
export type TUser_Notifications_Min_Fields = {
  __typename?: 'user_notifications_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_notifications" */
export type TUser_Notifications_Min_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  description?: InputMaybe<TOrder_By>;
  href?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
  value?: InputMaybe<TOrder_By>;
};

/** response of any mutation on the table "user_notifications" */
export type TUser_Notifications_Mutation_Response = {
  __typename?: 'user_notifications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TUser_Notifications>;
};

/** on_conflict condition type for table "user_notifications" */
export type TUser_Notifications_On_Conflict = {
  constraint: TUser_Notifications_Constraint;
  update_columns?: Array<TUser_Notifications_Update_Column>;
  where?: InputMaybe<TUser_Notifications_Bool_Exp>;
};

/** Ordering options when selecting data from "user_notifications". */
export type TUser_Notifications_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  description?: InputMaybe<TOrder_By>;
  href?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  read?: InputMaybe<TOrder_By>;
  type?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  userId?: InputMaybe<TOrder_By>;
  value?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: user_notifications */
export type TUser_Notifications_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_notifications" */
export type TUser_Notifications_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'description'
  /** column name */
  | 'href'
  /** column name */
  | 'id'
  /** column name */
  | 'read'
  /** column name */
  | 'type'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId'
  /** column name */
  | 'value';

/** select "user_notifications_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user_notifications" */
export type TUser_Notifications_Select_Column_User_Notifications_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'read';

/** select "user_notifications_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user_notifications" */
export type TUser_Notifications_Select_Column_User_Notifications_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'read';

/** input type for updating data in table "user_notifications" */
export type TUser_Notifications_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  read?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<TNotification_Types_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user_notifications" */
export type TUser_Notifications_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TUser_Notifications_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TUser_Notifications_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  read?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<TNotification_Types_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user_notifications" */
export type TUser_Notifications_Update_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'description'
  /** column name */
  | 'href'
  /** column name */
  | 'id'
  /** column name */
  | 'read'
  /** column name */
  | 'type'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId'
  /** column name */
  | 'value';

export type TUser_Notifications_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TUser_Notifications_Set_Input>;
  where: TUser_Notifications_Bool_Exp;
};

/** The table for a user's profile details */
export type TUser_Profile = {
  __typename?: 'user_profile';
  availability?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  businessDescription?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  customPronouns?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  industries?: Maybe<Scalars['jsonb']>;
  instagram?: Maybe<Scalars['String']>;
  isComplete: Scalars['Boolean'];
  linkedin?: Maybe<Scalars['String']>;
  objective?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  resume?: Maybe<Scalars['String']>;
  skills?: Maybe<Scalars['jsonb']>;
  specialistIndustry?: Maybe<Scalars['String']>;
  startups?: Maybe<Scalars['String']>;
  statement?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<TUsers>;
  userId: Scalars['uuid'];
  website?: Maybe<Scalars['String']>;
};


/** The table for a user's profile details */
export type TUser_ProfileIndustriesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** The table for a user's profile details */
export type TUser_ProfileSkillsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "user_profile" */
export type TUser_Profile_Aggregate = {
  __typename?: 'user_profile_aggregate';
  aggregate?: Maybe<TUser_Profile_Aggregate_Fields>;
  nodes: Array<TUser_Profile>;
};

export type TUser_Profile_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<TUser_Profile_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<TUser_Profile_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<TUser_Profile_Aggregate_Bool_Exp_Count>;
};

export type TUser_Profile_Aggregate_Bool_Exp_Bool_And = {
  arguments: TUser_Profile_Select_Column_User_Profile_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TUser_Profile_Bool_Exp>;
  predicate: TBoolean_Comparison_Exp;
};

export type TUser_Profile_Aggregate_Bool_Exp_Bool_Or = {
  arguments: TUser_Profile_Select_Column_User_Profile_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TUser_Profile_Bool_Exp>;
  predicate: TBoolean_Comparison_Exp;
};

export type TUser_Profile_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TUser_Profile_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TUser_Profile_Bool_Exp>;
  predicate: TInt_Comparison_Exp;
};

/** aggregate fields of "user_profile" */
export type TUser_Profile_Aggregate_Fields = {
  __typename?: 'user_profile_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TUser_Profile_Max_Fields>;
  min?: Maybe<TUser_Profile_Min_Fields>;
};


/** aggregate fields of "user_profile" */
export type TUser_Profile_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TUser_Profile_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_profile" */
export type TUser_Profile_Aggregate_Order_By = {
  count?: InputMaybe<TOrder_By>;
  max?: InputMaybe<TUser_Profile_Max_Order_By>;
  min?: InputMaybe<TUser_Profile_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type TUser_Profile_Append_Input = {
  industries?: InputMaybe<Scalars['jsonb']>;
  skills?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "user_profile" */
export type TUser_Profile_Arr_Rel_Insert_Input = {
  data: Array<TUser_Profile_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TUser_Profile_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_profile". All fields are combined with a logical 'AND'. */
export type TUser_Profile_Bool_Exp = {
  _and?: InputMaybe<Array<TUser_Profile_Bool_Exp>>;
  _not?: InputMaybe<TUser_Profile_Bool_Exp>;
  _or?: InputMaybe<Array<TUser_Profile_Bool_Exp>>;
  availability?: InputMaybe<TString_Comparison_Exp>;
  background?: InputMaybe<TString_Comparison_Exp>;
  businessDescription?: InputMaybe<TString_Comparison_Exp>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  customPronouns?: InputMaybe<TString_Comparison_Exp>;
  facebook?: InputMaybe<TString_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  industries?: InputMaybe<TJsonb_Comparison_Exp>;
  instagram?: InputMaybe<TString_Comparison_Exp>;
  isComplete?: InputMaybe<TBoolean_Comparison_Exp>;
  linkedin?: InputMaybe<TString_Comparison_Exp>;
  objective?: InputMaybe<TString_Comparison_Exp>;
  pronouns?: InputMaybe<TString_Comparison_Exp>;
  resume?: InputMaybe<TString_Comparison_Exp>;
  skills?: InputMaybe<TJsonb_Comparison_Exp>;
  specialistIndustry?: InputMaybe<TString_Comparison_Exp>;
  startups?: InputMaybe<TString_Comparison_Exp>;
  statement?: InputMaybe<TString_Comparison_Exp>;
  status?: InputMaybe<TString_Comparison_Exp>;
  twitter?: InputMaybe<TString_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
  website?: InputMaybe<TString_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_profile" */
export type TUser_Profile_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'user_profile_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type TUser_Profile_Delete_At_Path_Input = {
  industries?: InputMaybe<Array<Scalars['String']>>;
  skills?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type TUser_Profile_Delete_Elem_Input = {
  industries?: InputMaybe<Scalars['Int']>;
  skills?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type TUser_Profile_Delete_Key_Input = {
  industries?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "user_profile" */
export type TUser_Profile_Insert_Input = {
  availability?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
  businessDescription?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  customPronouns?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  industries?: InputMaybe<Scalars['jsonb']>;
  instagram?: InputMaybe<Scalars['String']>;
  isComplete?: InputMaybe<Scalars['Boolean']>;
  linkedin?: InputMaybe<Scalars['String']>;
  objective?: InputMaybe<Scalars['String']>;
  pronouns?: InputMaybe<Scalars['String']>;
  resume?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Scalars['jsonb']>;
  specialistIndustry?: InputMaybe<Scalars['String']>;
  startups?: InputMaybe<Scalars['String']>;
  statement?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TUser_Profile_Max_Fields = {
  __typename?: 'user_profile_max_fields';
  availability?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  businessDescription?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  customPronouns?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  objective?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  resume?: Maybe<Scalars['String']>;
  specialistIndustry?: Maybe<Scalars['String']>;
  startups?: Maybe<Scalars['String']>;
  statement?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_profile" */
export type TUser_Profile_Max_Order_By = {
  availability?: InputMaybe<TOrder_By>;
  background?: InputMaybe<TOrder_By>;
  businessDescription?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  customPronouns?: InputMaybe<TOrder_By>;
  facebook?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  instagram?: InputMaybe<TOrder_By>;
  linkedin?: InputMaybe<TOrder_By>;
  objective?: InputMaybe<TOrder_By>;
  pronouns?: InputMaybe<TOrder_By>;
  resume?: InputMaybe<TOrder_By>;
  specialistIndustry?: InputMaybe<TOrder_By>;
  startups?: InputMaybe<TOrder_By>;
  statement?: InputMaybe<TOrder_By>;
  status?: InputMaybe<TOrder_By>;
  twitter?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
  website?: InputMaybe<TOrder_By>;
};

/** aggregate min on columns */
export type TUser_Profile_Min_Fields = {
  __typename?: 'user_profile_min_fields';
  availability?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  businessDescription?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  customPronouns?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  objective?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  resume?: Maybe<Scalars['String']>;
  specialistIndustry?: Maybe<Scalars['String']>;
  startups?: Maybe<Scalars['String']>;
  statement?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_profile" */
export type TUser_Profile_Min_Order_By = {
  availability?: InputMaybe<TOrder_By>;
  background?: InputMaybe<TOrder_By>;
  businessDescription?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  customPronouns?: InputMaybe<TOrder_By>;
  facebook?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  instagram?: InputMaybe<TOrder_By>;
  linkedin?: InputMaybe<TOrder_By>;
  objective?: InputMaybe<TOrder_By>;
  pronouns?: InputMaybe<TOrder_By>;
  resume?: InputMaybe<TOrder_By>;
  specialistIndustry?: InputMaybe<TOrder_By>;
  startups?: InputMaybe<TOrder_By>;
  statement?: InputMaybe<TOrder_By>;
  status?: InputMaybe<TOrder_By>;
  twitter?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
  website?: InputMaybe<TOrder_By>;
};

/** response of any mutation on the table "user_profile" */
export type TUser_Profile_Mutation_Response = {
  __typename?: 'user_profile_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TUser_Profile>;
};

/** input type for inserting object relation for remote table "user_profile" */
export type TUser_Profile_Obj_Rel_Insert_Input = {
  data: TUser_Profile_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<TUser_Profile_On_Conflict>;
};

/** on_conflict condition type for table "user_profile" */
export type TUser_Profile_On_Conflict = {
  constraint: TUser_Profile_Constraint;
  update_columns?: Array<TUser_Profile_Update_Column>;
  where?: InputMaybe<TUser_Profile_Bool_Exp>;
};

/** Ordering options when selecting data from "user_profile". */
export type TUser_Profile_Order_By = {
  availability?: InputMaybe<TOrder_By>;
  background?: InputMaybe<TOrder_By>;
  businessDescription?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  customPronouns?: InputMaybe<TOrder_By>;
  facebook?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  industries?: InputMaybe<TOrder_By>;
  instagram?: InputMaybe<TOrder_By>;
  isComplete?: InputMaybe<TOrder_By>;
  linkedin?: InputMaybe<TOrder_By>;
  objective?: InputMaybe<TOrder_By>;
  pronouns?: InputMaybe<TOrder_By>;
  resume?: InputMaybe<TOrder_By>;
  skills?: InputMaybe<TOrder_By>;
  specialistIndustry?: InputMaybe<TOrder_By>;
  startups?: InputMaybe<TOrder_By>;
  statement?: InputMaybe<TOrder_By>;
  status?: InputMaybe<TOrder_By>;
  twitter?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  userId?: InputMaybe<TOrder_By>;
  website?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: user_profile */
export type TUser_Profile_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type TUser_Profile_Prepend_Input = {
  industries?: InputMaybe<Scalars['jsonb']>;
  skills?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "user_profile" */
export type TUser_Profile_Select_Column =
  /** column name */
  | 'availability'
  /** column name */
  | 'background'
  /** column name */
  | 'businessDescription'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'customPronouns'
  /** column name */
  | 'facebook'
  /** column name */
  | 'id'
  /** column name */
  | 'industries'
  /** column name */
  | 'instagram'
  /** column name */
  | 'isComplete'
  /** column name */
  | 'linkedin'
  /** column name */
  | 'objective'
  /** column name */
  | 'pronouns'
  /** column name */
  | 'resume'
  /** column name */
  | 'skills'
  /** column name */
  | 'specialistIndustry'
  /** column name */
  | 'startups'
  /** column name */
  | 'statement'
  /** column name */
  | 'status'
  /** column name */
  | 'twitter'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId'
  /** column name */
  | 'website';

/** select "user_profile_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user_profile" */
export type TUser_Profile_Select_Column_User_Profile_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'isComplete';

/** select "user_profile_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user_profile" */
export type TUser_Profile_Select_Column_User_Profile_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'isComplete';

/** input type for updating data in table "user_profile" */
export type TUser_Profile_Set_Input = {
  availability?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
  businessDescription?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  customPronouns?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  industries?: InputMaybe<Scalars['jsonb']>;
  instagram?: InputMaybe<Scalars['String']>;
  isComplete?: InputMaybe<Scalars['Boolean']>;
  linkedin?: InputMaybe<Scalars['String']>;
  objective?: InputMaybe<Scalars['String']>;
  pronouns?: InputMaybe<Scalars['String']>;
  resume?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Scalars['jsonb']>;
  specialistIndustry?: InputMaybe<Scalars['String']>;
  startups?: InputMaybe<Scalars['String']>;
  statement?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  website?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user_profile" */
export type TUser_Profile_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TUser_Profile_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TUser_Profile_Stream_Cursor_Value_Input = {
  availability?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
  businessDescription?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  customPronouns?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  industries?: InputMaybe<Scalars['jsonb']>;
  instagram?: InputMaybe<Scalars['String']>;
  isComplete?: InputMaybe<Scalars['Boolean']>;
  linkedin?: InputMaybe<Scalars['String']>;
  objective?: InputMaybe<Scalars['String']>;
  pronouns?: InputMaybe<Scalars['String']>;
  resume?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Scalars['jsonb']>;
  specialistIndustry?: InputMaybe<Scalars['String']>;
  startups?: InputMaybe<Scalars['String']>;
  statement?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  website?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user_profile" */
export type TUser_Profile_Update_Column =
  /** column name */
  | 'availability'
  /** column name */
  | 'background'
  /** column name */
  | 'businessDescription'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'customPronouns'
  /** column name */
  | 'facebook'
  /** column name */
  | 'id'
  /** column name */
  | 'industries'
  /** column name */
  | 'instagram'
  /** column name */
  | 'isComplete'
  /** column name */
  | 'linkedin'
  /** column name */
  | 'objective'
  /** column name */
  | 'pronouns'
  /** column name */
  | 'resume'
  /** column name */
  | 'skills'
  /** column name */
  | 'specialistIndustry'
  /** column name */
  | 'startups'
  /** column name */
  | 'statement'
  /** column name */
  | 'status'
  /** column name */
  | 'twitter'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId'
  /** column name */
  | 'website';

export type TUser_Profile_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<TUser_Profile_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<TUser_Profile_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<TUser_Profile_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<TUser_Profile_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<TUser_Profile_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TUser_Profile_Set_Input>;
  where: TUser_Profile_Bool_Exp;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsers = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  /** An object relationship */
  address?: Maybe<TUser_Address>;
  avatarUrl: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: TAuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  /** An object relationship */
  esteemPointsCurrency?: Maybe<TUser_Esteem_Points_Currency>;
  id: Scalars['uuid'];
  /** An array relationship */
  ideas: Array<TIdeas>;
  /** An aggregate relationship */
  ideas_aggregate: TIdeas_Aggregate;
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  /** An object relationship */
  matchSettings?: Maybe<TMatch_Settings>;
  /** An array relationship */
  messageThreadUsers: Array<TMessage_Thread_Users>;
  /** An aggregate relationship */
  messageThreadUsers_aggregate: TMessage_Thread_Users_Aggregate;
  /** An array relationship */
  messageThreads: Array<TMessage_Thread>;
  /** An aggregate relationship */
  messageThreads_aggregate: TMessage_Thread_Aggregate;
  /** An array relationship */
  messages: Array<TMessage>;
  /** An aggregate relationship */
  messages_aggregate: TMessage_Aggregate;
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An object relationship */
  profile?: Maybe<TUser_Profile>;
  /** An array relationship */
  refreshTokens: Array<TAuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: TAuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<TAuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: TAuthUserRoles_Aggregate;
  /** An array relationship */
  securityKeys: Array<TAuthUserSecurityKeys>;
  /** An aggregate relationship */
  securityKeys_aggregate: TAuthUserSecurityKeys_Aggregate;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userProviders: Array<TAuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: TAuthUserProviders_Aggregate;
  /** An array relationship */
  user_followers: Array<TUser_Followers>;
  /** An aggregate relationship */
  user_followers_aggregate: TUser_Followers_Aggregate;
  /** An array relationship */
  user_notifications: Array<TUser_Notifications>;
  /** An aggregate relationship */
  user_notifications_aggregate: TUser_Notifications_Aggregate;
  /** An array relationship */
  user_profiles: Array<TUser_Profile>;
  /** An aggregate relationship */
  user_profiles_aggregate: TUser_Profile_Aggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersIdeasArgs = {
  distinct_on?: InputMaybe<Array<TIdeas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdeas_Order_By>>;
  where?: InputMaybe<TIdeas_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersIdeas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdeas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdeas_Order_By>>;
  where?: InputMaybe<TIdeas_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersMessageThreadUsersArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Users_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersMessageThreadUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Users_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersMessageThreadsArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersMessageThreads_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersMessagesArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Order_By>>;
  where?: InputMaybe<TMessage_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Order_By>>;
  where?: InputMaybe<TMessage_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<TAuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthRefreshTokens_Order_By>>;
  where?: InputMaybe<TAuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthRefreshTokens_Order_By>>;
  where?: InputMaybe<TAuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersRolesArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserRoles_Order_By>>;
  where?: InputMaybe<TAuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserRoles_Order_By>>;
  where?: InputMaybe<TAuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<TAuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersSecurityKeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<TAuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserProviders_Order_By>>;
  where?: InputMaybe<TAuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TAuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TAuthUserProviders_Order_By>>;
  where?: InputMaybe<TAuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersUser_FollowersArgs = {
  distinct_on?: InputMaybe<Array<TUser_Followers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Followers_Order_By>>;
  where?: InputMaybe<TUser_Followers_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersUser_Followers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TUser_Followers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Followers_Order_By>>;
  where?: InputMaybe<TUser_Followers_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersUser_NotificationsArgs = {
  distinct_on?: InputMaybe<Array<TUser_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Notifications_Order_By>>;
  where?: InputMaybe<TUser_Notifications_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersUser_Notifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TUser_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Notifications_Order_By>>;
  where?: InputMaybe<TUser_Notifications_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersUser_ProfilesArgs = {
  distinct_on?: InputMaybe<Array<TUser_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Profile_Order_By>>;
  where?: InputMaybe<TUser_Profile_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type TUsersUser_Profiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TUser_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Profile_Order_By>>;
  where?: InputMaybe<TUser_Profile_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type TUsers_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<TUsers_Aggregate_Fields>;
  nodes: Array<TUsers>;
};

export type TUsers_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<TUsers_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<TUsers_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<TUsers_Aggregate_Bool_Exp_Count>;
};

export type TUsers_Aggregate_Bool_Exp_Bool_And = {
  arguments: TUsers_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TUsers_Bool_Exp>;
  predicate: TBoolean_Comparison_Exp;
};

export type TUsers_Aggregate_Bool_Exp_Bool_Or = {
  arguments: TUsers_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TUsers_Bool_Exp>;
  predicate: TBoolean_Comparison_Exp;
};

export type TUsers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TUsers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TUsers_Bool_Exp>;
  predicate: TInt_Comparison_Exp;
};

/** aggregate fields of "auth.users" */
export type TUsers_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TUsers_Max_Fields>;
  min?: Maybe<TUsers_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type TUsers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TUsers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type TUsers_Aggregate_Order_By = {
  count?: InputMaybe<TOrder_By>;
  max?: InputMaybe<TUsers_Max_Order_By>;
  min?: InputMaybe<TUsers_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type TUsers_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type TUsers_Arr_Rel_Insert_Input = {
  data: Array<TUsers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TUsers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type TUsers_Bool_Exp = {
  _and?: InputMaybe<Array<TUsers_Bool_Exp>>;
  _not?: InputMaybe<TUsers_Bool_Exp>;
  _or?: InputMaybe<Array<TUsers_Bool_Exp>>;
  activeMfaType?: InputMaybe<TString_Comparison_Exp>;
  address?: InputMaybe<TUser_Address_Bool_Exp>;
  avatarUrl?: InputMaybe<TString_Comparison_Exp>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  currentChallenge?: InputMaybe<TString_Comparison_Exp>;
  defaultRole?: InputMaybe<TString_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<TAuthRoles_Bool_Exp>;
  disabled?: InputMaybe<TBoolean_Comparison_Exp>;
  displayName?: InputMaybe<TString_Comparison_Exp>;
  email?: InputMaybe<TCitext_Comparison_Exp>;
  emailVerified?: InputMaybe<TBoolean_Comparison_Exp>;
  esteemPointsCurrency?: InputMaybe<TUser_Esteem_Points_Currency_Bool_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  ideas?: InputMaybe<TIdeas_Bool_Exp>;
  ideas_aggregate?: InputMaybe<TIdeas_Aggregate_Bool_Exp>;
  isAnonymous?: InputMaybe<TBoolean_Comparison_Exp>;
  lastSeen?: InputMaybe<TTimestamptz_Comparison_Exp>;
  locale?: InputMaybe<TString_Comparison_Exp>;
  matchSettings?: InputMaybe<TMatch_Settings_Bool_Exp>;
  messageThreadUsers?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
  messageThreadUsers_aggregate?: InputMaybe<TMessage_Thread_Users_Aggregate_Bool_Exp>;
  messageThreads?: InputMaybe<TMessage_Thread_Bool_Exp>;
  messageThreads_aggregate?: InputMaybe<TMessage_Thread_Aggregate_Bool_Exp>;
  messages?: InputMaybe<TMessage_Bool_Exp>;
  messages_aggregate?: InputMaybe<TMessage_Aggregate_Bool_Exp>;
  metadata?: InputMaybe<TJsonb_Comparison_Exp>;
  newEmail?: InputMaybe<TCitext_Comparison_Exp>;
  otpHash?: InputMaybe<TString_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<TString_Comparison_Exp>;
  passwordHash?: InputMaybe<TString_Comparison_Exp>;
  phoneNumber?: InputMaybe<TString_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<TBoolean_Comparison_Exp>;
  profile?: InputMaybe<TUser_Profile_Bool_Exp>;
  refreshTokens?: InputMaybe<TAuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<TAuthRefreshTokens_Aggregate_Bool_Exp>;
  roles?: InputMaybe<TAuthUserRoles_Bool_Exp>;
  roles_aggregate?: InputMaybe<TAuthUserRoles_Aggregate_Bool_Exp>;
  securityKeys?: InputMaybe<TAuthUserSecurityKeys_Bool_Exp>;
  securityKeys_aggregate?: InputMaybe<TAuthUserSecurityKeys_Aggregate_Bool_Exp>;
  ticket?: InputMaybe<TString_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<TString_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<TAuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<TAuthUserProviders_Aggregate_Bool_Exp>;
  user_followers?: InputMaybe<TUser_Followers_Bool_Exp>;
  user_followers_aggregate?: InputMaybe<TUser_Followers_Aggregate_Bool_Exp>;
  user_notifications?: InputMaybe<TUser_Notifications_Bool_Exp>;
  user_notifications_aggregate?: InputMaybe<TUser_Notifications_Aggregate_Bool_Exp>;
  user_profiles?: InputMaybe<TUser_Profile_Bool_Exp>;
  user_profiles_aggregate?: InputMaybe<TUser_Profile_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export type TUsers_Constraint =
  /** unique or primary key constraint on columns "email" */
  | 'users_email_key'
  /** unique or primary key constraint on columns "phone_number" */
  | 'users_phone_number_key'
  /** unique or primary key constraint on columns "id" */
  | 'users_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type TUsers_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type TUsers_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type TUsers_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type TUsers_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<TUser_Address_Obj_Rel_Insert_Input>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultRoleByRole?: InputMaybe<TAuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  esteemPointsCurrency?: InputMaybe<TUser_Esteem_Points_Currency_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  ideas?: InputMaybe<TIdeas_Arr_Rel_Insert_Input>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  matchSettings?: InputMaybe<TMatch_Settings_Obj_Rel_Insert_Input>;
  messageThreadUsers?: InputMaybe<TMessage_Thread_Users_Arr_Rel_Insert_Input>;
  messageThreads?: InputMaybe<TMessage_Thread_Arr_Rel_Insert_Input>;
  messages?: InputMaybe<TMessage_Arr_Rel_Insert_Input>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  profile?: InputMaybe<TUser_Profile_Obj_Rel_Insert_Input>;
  refreshTokens?: InputMaybe<TAuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<TAuthUserRoles_Arr_Rel_Insert_Input>;
  securityKeys?: InputMaybe<TAuthUserSecurityKeys_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userProviders?: InputMaybe<TAuthUserProviders_Arr_Rel_Insert_Input>;
  user_followers?: InputMaybe<TUser_Followers_Arr_Rel_Insert_Input>;
  user_notifications?: InputMaybe<TUser_Notifications_Arr_Rel_Insert_Input>;
  user_profiles?: InputMaybe<TUser_Profile_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type TUsers_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type TUsers_Max_Order_By = {
  activeMfaType?: InputMaybe<TOrder_By>;
  avatarUrl?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  currentChallenge?: InputMaybe<TOrder_By>;
  defaultRole?: InputMaybe<TOrder_By>;
  displayName?: InputMaybe<TOrder_By>;
  email?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  lastSeen?: InputMaybe<TOrder_By>;
  locale?: InputMaybe<TOrder_By>;
  newEmail?: InputMaybe<TOrder_By>;
  otpHash?: InputMaybe<TOrder_By>;
  otpHashExpiresAt?: InputMaybe<TOrder_By>;
  otpMethodLastUsed?: InputMaybe<TOrder_By>;
  passwordHash?: InputMaybe<TOrder_By>;
  phoneNumber?: InputMaybe<TOrder_By>;
  ticket?: InputMaybe<TOrder_By>;
  ticketExpiresAt?: InputMaybe<TOrder_By>;
  totpSecret?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
};

/** aggregate min on columns */
export type TUsers_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type TUsers_Min_Order_By = {
  activeMfaType?: InputMaybe<TOrder_By>;
  avatarUrl?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  currentChallenge?: InputMaybe<TOrder_By>;
  defaultRole?: InputMaybe<TOrder_By>;
  displayName?: InputMaybe<TOrder_By>;
  email?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  lastSeen?: InputMaybe<TOrder_By>;
  locale?: InputMaybe<TOrder_By>;
  newEmail?: InputMaybe<TOrder_By>;
  otpHash?: InputMaybe<TOrder_By>;
  otpHashExpiresAt?: InputMaybe<TOrder_By>;
  otpMethodLastUsed?: InputMaybe<TOrder_By>;
  passwordHash?: InputMaybe<TOrder_By>;
  phoneNumber?: InputMaybe<TOrder_By>;
  ticket?: InputMaybe<TOrder_By>;
  ticketExpiresAt?: InputMaybe<TOrder_By>;
  totpSecret?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
};

/** response of any mutation on the table "auth.users" */
export type TUsers_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TUsers>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type TUsers_Obj_Rel_Insert_Input = {
  data: TUsers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<TUsers_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type TUsers_On_Conflict = {
  constraint: TUsers_Constraint;
  update_columns?: Array<TUsers_Update_Column>;
  where?: InputMaybe<TUsers_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type TUsers_Order_By = {
  activeMfaType?: InputMaybe<TOrder_By>;
  address?: InputMaybe<TUser_Address_Order_By>;
  avatarUrl?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  currentChallenge?: InputMaybe<TOrder_By>;
  defaultRole?: InputMaybe<TOrder_By>;
  defaultRoleByRole?: InputMaybe<TAuthRoles_Order_By>;
  disabled?: InputMaybe<TOrder_By>;
  displayName?: InputMaybe<TOrder_By>;
  email?: InputMaybe<TOrder_By>;
  emailVerified?: InputMaybe<TOrder_By>;
  esteemPointsCurrency?: InputMaybe<TUser_Esteem_Points_Currency_Order_By>;
  id?: InputMaybe<TOrder_By>;
  ideas_aggregate?: InputMaybe<TIdeas_Aggregate_Order_By>;
  isAnonymous?: InputMaybe<TOrder_By>;
  lastSeen?: InputMaybe<TOrder_By>;
  locale?: InputMaybe<TOrder_By>;
  matchSettings?: InputMaybe<TMatch_Settings_Order_By>;
  messageThreadUsers_aggregate?: InputMaybe<TMessage_Thread_Users_Aggregate_Order_By>;
  messageThreads_aggregate?: InputMaybe<TMessage_Thread_Aggregate_Order_By>;
  messages_aggregate?: InputMaybe<TMessage_Aggregate_Order_By>;
  metadata?: InputMaybe<TOrder_By>;
  newEmail?: InputMaybe<TOrder_By>;
  otpHash?: InputMaybe<TOrder_By>;
  otpHashExpiresAt?: InputMaybe<TOrder_By>;
  otpMethodLastUsed?: InputMaybe<TOrder_By>;
  passwordHash?: InputMaybe<TOrder_By>;
  phoneNumber?: InputMaybe<TOrder_By>;
  phoneNumberVerified?: InputMaybe<TOrder_By>;
  profile?: InputMaybe<TUser_Profile_Order_By>;
  refreshTokens_aggregate?: InputMaybe<TAuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<TAuthUserRoles_Aggregate_Order_By>;
  securityKeys_aggregate?: InputMaybe<TAuthUserSecurityKeys_Aggregate_Order_By>;
  ticket?: InputMaybe<TOrder_By>;
  ticketExpiresAt?: InputMaybe<TOrder_By>;
  totpSecret?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  userProviders_aggregate?: InputMaybe<TAuthUserProviders_Aggregate_Order_By>;
  user_followers_aggregate?: InputMaybe<TUser_Followers_Aggregate_Order_By>;
  user_notifications_aggregate?: InputMaybe<TUser_Notifications_Aggregate_Order_By>;
  user_profiles_aggregate?: InputMaybe<TUser_Profile_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.users */
export type TUsers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type TUsers_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export type TUsers_Select_Column =
  /** column name */
  | 'activeMfaType'
  /** column name */
  | 'avatarUrl'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'currentChallenge'
  /** column name */
  | 'defaultRole'
  /** column name */
  | 'disabled'
  /** column name */
  | 'displayName'
  /** column name */
  | 'email'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'id'
  /** column name */
  | 'isAnonymous'
  /** column name */
  | 'lastSeen'
  /** column name */
  | 'locale'
  /** column name */
  | 'metadata'
  /** column name */
  | 'newEmail'
  /** column name */
  | 'otpHash'
  /** column name */
  | 'otpHashExpiresAt'
  /** column name */
  | 'otpMethodLastUsed'
  /** column name */
  | 'passwordHash'
  /** column name */
  | 'phoneNumber'
  /** column name */
  | 'phoneNumberVerified'
  /** column name */
  | 'ticket'
  /** column name */
  | 'ticketExpiresAt'
  /** column name */
  | 'totpSecret'
  /** column name */
  | 'updatedAt';

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export type TUsers_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'disabled'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'isAnonymous'
  /** column name */
  | 'phoneNumberVerified';

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export type TUsers_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'disabled'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'isAnonymous'
  /** column name */
  | 'phoneNumberVerified';

/** input type for updating data in table "auth.users" */
export type TUsers_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "users" */
export type TUsers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TUsers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TUsers_Stream_Cursor_Value_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export type TUsers_Update_Column =
  /** column name */
  | 'activeMfaType'
  /** column name */
  | 'avatarUrl'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'currentChallenge'
  /** column name */
  | 'defaultRole'
  /** column name */
  | 'disabled'
  /** column name */
  | 'displayName'
  /** column name */
  | 'email'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'id'
  /** column name */
  | 'isAnonymous'
  /** column name */
  | 'lastSeen'
  /** column name */
  | 'locale'
  /** column name */
  | 'metadata'
  /** column name */
  | 'newEmail'
  /** column name */
  | 'otpHash'
  /** column name */
  | 'otpHashExpiresAt'
  /** column name */
  | 'otpMethodLastUsed'
  /** column name */
  | 'passwordHash'
  /** column name */
  | 'phoneNumber'
  /** column name */
  | 'phoneNumberVerified'
  /** column name */
  | 'ticket'
  /** column name */
  | 'ticketExpiresAt'
  /** column name */
  | 'totpSecret'
  /** column name */
  | 'updatedAt';

export type TUsers_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<TUsers_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<TUsers_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<TUsers_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<TUsers_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<TUsers_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TUsers_Set_Input>;
  where: TUsers_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type TUuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "v_comments" */
export type TV_Comments = {
  __typename?: 'v_comments';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  idea?: Maybe<TIdeas>;
  ideaId?: Maybe<Scalars['uuid']>;
  isBoost?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  replies: Array<TIdea_Comment_Replies>;
  /** An aggregate relationship */
  replies_aggregate: TIdea_Comment_Replies_Aggregate;
  status?: Maybe<Scalars['String']>;
  targetUserId?: Maybe<Scalars['uuid']>;
  totalReplies?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user?: Maybe<TUsers>;
  userId?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};


/** columns and relationships of "v_comments" */
export type TV_CommentsRepliesArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comment_Replies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comment_Replies_Order_By>>;
  where?: InputMaybe<TIdea_Comment_Replies_Bool_Exp>;
};


/** columns and relationships of "v_comments" */
export type TV_CommentsReplies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comment_Replies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comment_Replies_Order_By>>;
  where?: InputMaybe<TIdea_Comment_Replies_Bool_Exp>;
};

/** aggregated selection of "v_comments" */
export type TV_Comments_Aggregate = {
  __typename?: 'v_comments_aggregate';
  aggregate?: Maybe<TV_Comments_Aggregate_Fields>;
  nodes: Array<TV_Comments>;
};

/** aggregate fields of "v_comments" */
export type TV_Comments_Aggregate_Fields = {
  __typename?: 'v_comments_aggregate_fields';
  avg?: Maybe<TV_Comments_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<TV_Comments_Max_Fields>;
  min?: Maybe<TV_Comments_Min_Fields>;
  stddev?: Maybe<TV_Comments_Stddev_Fields>;
  stddev_pop?: Maybe<TV_Comments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<TV_Comments_Stddev_Samp_Fields>;
  sum?: Maybe<TV_Comments_Sum_Fields>;
  var_pop?: Maybe<TV_Comments_Var_Pop_Fields>;
  var_samp?: Maybe<TV_Comments_Var_Samp_Fields>;
  variance?: Maybe<TV_Comments_Variance_Fields>;
};


/** aggregate fields of "v_comments" */
export type TV_Comments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TV_Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type TV_Comments_Avg_Fields = {
  __typename?: 'v_comments_avg_fields';
  totalReplies?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "v_comments". All fields are combined with a logical 'AND'. */
export type TV_Comments_Bool_Exp = {
  _and?: InputMaybe<Array<TV_Comments_Bool_Exp>>;
  _not?: InputMaybe<TV_Comments_Bool_Exp>;
  _or?: InputMaybe<Array<TV_Comments_Bool_Exp>>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  idea?: InputMaybe<TIdeas_Bool_Exp>;
  ideaId?: InputMaybe<TUuid_Comparison_Exp>;
  isBoost?: InputMaybe<TBoolean_Comparison_Exp>;
  replies?: InputMaybe<TIdea_Comment_Replies_Bool_Exp>;
  replies_aggregate?: InputMaybe<TIdea_Comment_Replies_Aggregate_Bool_Exp>;
  status?: InputMaybe<TString_Comparison_Exp>;
  targetUserId?: InputMaybe<TUuid_Comparison_Exp>;
  totalReplies?: InputMaybe<TInt_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
  value?: InputMaybe<TString_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "v_comments" */
export type TV_Comments_Inc_Input = {
  totalReplies?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "v_comments" */
export type TV_Comments_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  idea?: InputMaybe<TIdeas_Obj_Rel_Insert_Input>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  isBoost?: InputMaybe<Scalars['Boolean']>;
  replies?: InputMaybe<TIdea_Comment_Replies_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']>;
  targetUserId?: InputMaybe<Scalars['uuid']>;
  totalReplies?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TV_Comments_Max_Fields = {
  __typename?: 'v_comments_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  ideaId?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  targetUserId?: Maybe<Scalars['uuid']>;
  totalReplies?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type TV_Comments_Min_Fields = {
  __typename?: 'v_comments_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  ideaId?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  targetUserId?: Maybe<Scalars['uuid']>;
  totalReplies?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "v_comments" */
export type TV_Comments_Mutation_Response = {
  __typename?: 'v_comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TV_Comments>;
};

/** Ordering options when selecting data from "v_comments". */
export type TV_Comments_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  idea?: InputMaybe<TIdeas_Order_By>;
  ideaId?: InputMaybe<TOrder_By>;
  isBoost?: InputMaybe<TOrder_By>;
  replies_aggregate?: InputMaybe<TIdea_Comment_Replies_Aggregate_Order_By>;
  status?: InputMaybe<TOrder_By>;
  targetUserId?: InputMaybe<TOrder_By>;
  totalReplies?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  userId?: InputMaybe<TOrder_By>;
  value?: InputMaybe<TOrder_By>;
};

/** select columns of table "v_comments" */
export type TV_Comments_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'ideaId'
  /** column name */
  | 'isBoost'
  /** column name */
  | 'status'
  /** column name */
  | 'targetUserId'
  /** column name */
  | 'totalReplies'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId'
  /** column name */
  | 'value';

/** input type for updating data in table "v_comments" */
export type TV_Comments_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  isBoost?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['String']>;
  targetUserId?: InputMaybe<Scalars['uuid']>;
  totalReplies?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type TV_Comments_Stddev_Fields = {
  __typename?: 'v_comments_stddev_fields';
  totalReplies?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type TV_Comments_Stddev_Pop_Fields = {
  __typename?: 'v_comments_stddev_pop_fields';
  totalReplies?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type TV_Comments_Stddev_Samp_Fields = {
  __typename?: 'v_comments_stddev_samp_fields';
  totalReplies?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "v_comments" */
export type TV_Comments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TV_Comments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TV_Comments_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  isBoost?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['String']>;
  targetUserId?: InputMaybe<Scalars['uuid']>;
  totalReplies?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type TV_Comments_Sum_Fields = {
  __typename?: 'v_comments_sum_fields';
  totalReplies?: Maybe<Scalars['Int']>;
};

export type TV_Comments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TV_Comments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TV_Comments_Set_Input>;
  where: TV_Comments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type TV_Comments_Var_Pop_Fields = {
  __typename?: 'v_comments_var_pop_fields';
  totalReplies?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type TV_Comments_Var_Samp_Fields = {
  __typename?: 'v_comments_var_samp_fields';
  totalReplies?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type TV_Comments_Variance_Fields = {
  __typename?: 'v_comments_variance_fields';
  totalReplies?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "withdrawal_requests" */
export type TWithdrawal_Requests = {
  __typename?: 'withdrawal_requests';
  amount: Scalars['money'];
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['citext']>;
  id: Scalars['uuid'];
  status: TComment_Status_Types_Enum;
  /** An object relationship */
  user?: Maybe<TUsers>;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "withdrawal_requests" */
export type TWithdrawal_Requests_Aggregate = {
  __typename?: 'withdrawal_requests_aggregate';
  aggregate?: Maybe<TWithdrawal_Requests_Aggregate_Fields>;
  nodes: Array<TWithdrawal_Requests>;
};

/** aggregate fields of "withdrawal_requests" */
export type TWithdrawal_Requests_Aggregate_Fields = {
  __typename?: 'withdrawal_requests_aggregate_fields';
  avg?: Maybe<TWithdrawal_Requests_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<TWithdrawal_Requests_Max_Fields>;
  min?: Maybe<TWithdrawal_Requests_Min_Fields>;
  stddev?: Maybe<TWithdrawal_Requests_Stddev_Fields>;
  stddev_pop?: Maybe<TWithdrawal_Requests_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<TWithdrawal_Requests_Stddev_Samp_Fields>;
  sum?: Maybe<TWithdrawal_Requests_Sum_Fields>;
  var_pop?: Maybe<TWithdrawal_Requests_Var_Pop_Fields>;
  var_samp?: Maybe<TWithdrawal_Requests_Var_Samp_Fields>;
  variance?: Maybe<TWithdrawal_Requests_Variance_Fields>;
};


/** aggregate fields of "withdrawal_requests" */
export type TWithdrawal_Requests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TWithdrawal_Requests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type TWithdrawal_Requests_Avg_Fields = {
  __typename?: 'withdrawal_requests_avg_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "withdrawal_requests". All fields are combined with a logical 'AND'. */
export type TWithdrawal_Requests_Bool_Exp = {
  _and?: InputMaybe<Array<TWithdrawal_Requests_Bool_Exp>>;
  _not?: InputMaybe<TWithdrawal_Requests_Bool_Exp>;
  _or?: InputMaybe<Array<TWithdrawal_Requests_Bool_Exp>>;
  amount?: InputMaybe<TMoney_Comparison_Exp>;
  created_at?: InputMaybe<TTimestamptz_Comparison_Exp>;
  email?: InputMaybe<TCitext_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  status?: InputMaybe<TComment_Status_Types_Enum_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  user_id?: InputMaybe<TUuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "withdrawal_requests" */
export type TWithdrawal_Requests_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'withdrawal_requests_pkey';

/** input type for incrementing numeric columns in table "withdrawal_requests" */
export type TWithdrawal_Requests_Inc_Input = {
  amount?: InputMaybe<Scalars['money']>;
};

/** input type for inserting data into table "withdrawal_requests" */
export type TWithdrawal_Requests_Insert_Input = {
  amount?: InputMaybe<Scalars['money']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['citext']>;
  id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<TComment_Status_Types_Enum>;
  user?: InputMaybe<TUsers_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TWithdrawal_Requests_Max_Fields = {
  __typename?: 'withdrawal_requests_max_fields';
  amount?: Maybe<Scalars['money']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type TWithdrawal_Requests_Min_Fields = {
  __typename?: 'withdrawal_requests_min_fields';
  amount?: Maybe<Scalars['money']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "withdrawal_requests" */
export type TWithdrawal_Requests_Mutation_Response = {
  __typename?: 'withdrawal_requests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TWithdrawal_Requests>;
};

/** on_conflict condition type for table "withdrawal_requests" */
export type TWithdrawal_Requests_On_Conflict = {
  constraint: TWithdrawal_Requests_Constraint;
  update_columns?: Array<TWithdrawal_Requests_Update_Column>;
  where?: InputMaybe<TWithdrawal_Requests_Bool_Exp>;
};

/** Ordering options when selecting data from "withdrawal_requests". */
export type TWithdrawal_Requests_Order_By = {
  amount?: InputMaybe<TOrder_By>;
  created_at?: InputMaybe<TOrder_By>;
  email?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  status?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  user_id?: InputMaybe<TOrder_By>;
};

/** primary key columns input for table: withdrawal_requests */
export type TWithdrawal_Requests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "withdrawal_requests" */
export type TWithdrawal_Requests_Select_Column =
  /** column name */
  | 'amount'
  /** column name */
  | 'created_at'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'status'
  /** column name */
  | 'user_id';

/** input type for updating data in table "withdrawal_requests" */
export type TWithdrawal_Requests_Set_Input = {
  amount?: InputMaybe<Scalars['money']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['citext']>;
  id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<TComment_Status_Types_Enum>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type TWithdrawal_Requests_Stddev_Fields = {
  __typename?: 'withdrawal_requests_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type TWithdrawal_Requests_Stddev_Pop_Fields = {
  __typename?: 'withdrawal_requests_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type TWithdrawal_Requests_Stddev_Samp_Fields = {
  __typename?: 'withdrawal_requests_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "withdrawal_requests" */
export type TWithdrawal_Requests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TWithdrawal_Requests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<TCursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TWithdrawal_Requests_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['money']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['citext']>;
  id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<TComment_Status_Types_Enum>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type TWithdrawal_Requests_Sum_Fields = {
  __typename?: 'withdrawal_requests_sum_fields';
  amount?: Maybe<Scalars['money']>;
};

/** update columns of table "withdrawal_requests" */
export type TWithdrawal_Requests_Update_Column =
  /** column name */
  | 'amount'
  /** column name */
  | 'created_at'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'status'
  /** column name */
  | 'user_id';

export type TWithdrawal_Requests_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TWithdrawal_Requests_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TWithdrawal_Requests_Set_Input>;
  where: TWithdrawal_Requests_Bool_Exp;
};

/** aggregate var_pop on columns */
export type TWithdrawal_Requests_Var_Pop_Fields = {
  __typename?: 'withdrawal_requests_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type TWithdrawal_Requests_Var_Samp_Fields = {
  __typename?: 'withdrawal_requests_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type TWithdrawal_Requests_Variance_Fields = {
  __typename?: 'withdrawal_requests_variance_fields';
  amount?: Maybe<Scalars['Float']>;
};

export type TUserActivityQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type TUserActivityQuery = { activity: Array<{ __typename?: 'activity', ideaId: any, event: string, description: string, url: string, type: string, createdAt: any }> };

export type TPostCommentMutationVariables = Exact<{
  ideaComment: TIdea_Comments_Insert_Input;
  ideaId: Scalars['uuid'];
}>;


export type TPostCommentMutation = { addIdeaComment?: { __typename?: 'idea_comments', id: any, ideaId: any, user?: { __typename?: 'users', displayName: string, avatarUrl: string } | null } | null, updateIdeaTotalComments?: { __typename?: 'ideas', id: any } | null };

export type TPostReplyMutationVariables = Exact<{
  ideaReply: TIdea_Comment_Replies_Insert_Input;
  commentId: Scalars['uuid'];
}>;


export type TPostReplyMutation = { addIdeaReply?: { __typename?: 'idea_comment_replies', commentId: any, id: any, value: string } | null, update_idea_comments_by_pk?: { __typename?: 'idea_comments', id: any } | null };

export type TCommentFieldsFragment = { __typename?: 'v_comments', id?: any | null, updatedAt?: any | null, value?: string | null, ideaId?: any | null, totalReplies?: number | null, isBoost?: boolean | null, status?: string | null, user?: { __typename?: 'users', displayName: string, id: any, avatarUrl: string, createdAt: any, address?: { __typename?: 'user_address', location?: string | null, country?: string | null } | null } | null, firstReplies: Array<{ __typename?: 'idea_comment_replies', id: any, commentId: any, value: string, updatedAt: any, user?: { __typename?: 'users', displayName: string, id: any, avatarUrl: string, createdAt: any, address?: { __typename?: 'user_address', location?: string | null, country?: string | null } | null } | null }> };

export type TCommentsForIdeaQueryVariables = Exact<{
  ideaId: Scalars['uuid'];
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type TCommentsForIdeaQuery = { comments: Array<{ __typename?: 'v_comments', id?: any | null, updatedAt?: any | null, value?: string | null, ideaId?: any | null, totalReplies?: number | null, isBoost?: boolean | null, status?: string | null, user?: { __typename?: 'users', displayName: string, id: any, avatarUrl: string, createdAt: any, address?: { __typename?: 'user_address', location?: string | null, country?: string | null } | null } | null, firstReplies: Array<{ __typename?: 'idea_comment_replies', id: any, commentId: any, value: string, updatedAt: any, user?: { __typename?: 'users', displayName: string, id: any, avatarUrl: string, createdAt: any, address?: { __typename?: 'user_address', location?: string | null, country?: string | null } | null } | null }> }>, totalComments: { __typename?: 'v_comments_aggregate', aggregate?: { __typename?: 'v_comments_aggregate_fields', count: number } | null } };

export type TRepliesForCommentQueryVariables = Exact<{
  commentId: Scalars['uuid'];
}>;


export type TRepliesForCommentQuery = { replies: Array<{ __typename?: 'idea_comment_replies', id: any, commentId: any, value: string, updatedAt: any, user?: { __typename?: 'users', displayName: string, id: any, avatarUrl: string, createdAt: any, address?: { __typename?: 'user_address', location?: string | null, country?: string | null } | null } | null }> };

export type TFollowUserMutationVariables = Exact<{
  followingId: Scalars['uuid'];
}>;


export type TFollowUserMutation = { insert_user_followers_one?: { __typename?: 'user_followers', followingId: any, followerId: any } | null };

export type TUserFieldsFragment = { __typename?: 'users', displayName: string, id: any, avatarUrl: string, createdAt: any, address?: { __typename?: 'user_address', location?: string | null, country?: string | null } | null };

export type TUserFieldsWithEmailFragment = { __typename?: 'users', email?: any | null, displayName: string, id: any, avatarUrl: string, createdAt: any, address?: { __typename?: 'user_address', location?: string | null, country?: string | null } | null };

export type TUserAddressFragment = { __typename?: 'user_address', location?: string | null, country?: string | null };

export type TUserSearchFragment = { __typename?: 'user_profile', skills?: any | null, startups?: string | null, availability?: string | null, specialistIndustry?: string | null, status?: string | null, objective?: string | null, pronouns?: string | null, customPronouns?: string | null, user?: { __typename?: 'users', displayName: string, id: any, avatarUrl: string, createdAt: any, address?: { __typename?: 'user_address', location?: string | null, country?: string | null } | null } | null };

export type TMessageUserFragment = { __typename?: 'users', avatarUrl: string, id: any, displayName: string, profile?: { __typename?: 'user_profile', pronouns?: string | null, customPronouns?: string | null } | null };

export type TThreadUserFragment = { __typename?: 'users', id: any, displayName: string, avatarUrl: string };

export type TCreateIdeaMutationVariables = Exact<{
  idea: TIdeas_Insert_Input;
}>;


export type TCreateIdeaMutation = { idea?: { __typename?: 'ideas', id: any, name: string } | null };

export type TUpdateIdeaMutationVariables = Exact<{
  idea: TIdeas_Set_Input;
  id: Scalars['uuid'];
}>;


export type TUpdateIdeaMutation = { update_ideas_by_pk?: { __typename?: 'ideas', id: any, name: string, summary?: string | null, description?: string | null, field: string, competitors?: string | null, team?: string | null, additionalInformation?: string | null, isPublished: boolean, userId: any, status?: string | null } | null };

export type TDeleteIdeaMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type TDeleteIdeaMutation = { delete_ideas_by_pk?: { __typename?: 'ideas', id: any } | null };

export type TCreateInterestedIdeaMutationVariables = Exact<{
  ideaId: Scalars['uuid'];
  targetUserId: Scalars['uuid'];
}>;


export type TCreateInterestedIdeaMutation = { addInterestedIdea?: { __typename?: 'interested_ideas', ideaId: any } | null };

export type TIdeasQueryVariables = Exact<{
  where?: InputMaybe<TIdea_Preview_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TIdea_Preview_Order_By> | TIdea_Preview_Order_By>;
  userId: Scalars['uuid'];
}>;


export type TIdeasQuery = { idea_preview_aggregate: { __typename?: 'idea_preview_aggregate', aggregate?: { __typename?: 'idea_preview_aggregate_fields', count: number } | null }, idea_preview: Array<{ __typename?: 'idea_preview', id?: any | null, name?: string | null, field?: string | null, status?: string | null, createdAt?: any | null, isNew?: boolean | null, isPublished?: boolean | null, summary?: string | null, userId?: any | null, user?: { __typename?: 'users', email?: any | null, displayName: string, id: any, avatarUrl: string, createdAt: any, address?: { __typename?: 'user_address', location?: string | null, country?: string | null } | null } | null, votes_aggregate: { __typename?: 'idea_votes_aggregate', aggregate?: { __typename?: 'idea_votes_aggregate_fields', count: number } | null }, comments_aggregate: { __typename?: 'idea_comments_aggregate', aggregate?: { __typename?: 'idea_comments_aggregate_fields', count: number } | null }, interested_aggregate: { __typename?: 'interested_ideas_aggregate', aggregate?: { __typename?: 'interested_ideas_aggregate_fields', count: number } | null }, votes: Array<{ __typename?: 'idea_votes', id: any }>, boosted_idea?: { __typename?: 'boosted_ideas', ideaId: any, remainingCurrencyAmount?: any | null } | null }> };

export type TBoostedIdeaFieldsFragment = { __typename?: 'boosted_ideas', ideaId: any, totalCurrencyAmount?: any | null, remainingCurrencyAmount?: any | null, createdAt?: any | null, idea?: { __typename?: 'ideas', name: string, summary?: string | null, status?: string | null, field: string } | null };

export type TIdeaPreviewFieldsFragment = { __typename?: 'idea_preview', id?: any | null, name?: string | null, field?: string | null, status?: string | null, createdAt?: any | null, isNew?: boolean | null, isPublished?: boolean | null, summary?: string | null, userId?: any | null, user?: { __typename?: 'users', email?: any | null, displayName: string, id: any, avatarUrl: string, createdAt: any, address?: { __typename?: 'user_address', location?: string | null, country?: string | null } | null } | null, votes_aggregate: { __typename?: 'idea_votes_aggregate', aggregate?: { __typename?: 'idea_votes_aggregate_fields', count: number } | null }, comments_aggregate: { __typename?: 'idea_comments_aggregate', aggregate?: { __typename?: 'idea_comments_aggregate_fields', count: number } | null }, interested_aggregate: { __typename?: 'interested_ideas_aggregate', aggregate?: { __typename?: 'interested_ideas_aggregate_fields', count: number } | null }, votes: Array<{ __typename?: 'idea_votes', id: any }>, boosted_idea?: { __typename?: 'boosted_ideas', ideaId: any, remainingCurrencyAmount?: any | null } | null };

export type TUserIdeasQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type TUserIdeasQuery = { user_ideas: Array<{ __typename?: 'idea_preview', id?: any | null, name?: string | null, field?: string | null, status?: string | null, createdAt?: any | null, isNew?: boolean | null, isPublished?: boolean | null, summary?: string | null, userId?: any | null, user?: { __typename?: 'users', email?: any | null, displayName: string, id: any, avatarUrl: string, createdAt: any, address?: { __typename?: 'user_address', location?: string | null, country?: string | null } | null } | null, votes_aggregate: { __typename?: 'idea_votes_aggregate', aggregate?: { __typename?: 'idea_votes_aggregate_fields', count: number } | null }, comments_aggregate: { __typename?: 'idea_comments_aggregate', aggregate?: { __typename?: 'idea_comments_aggregate_fields', count: number } | null }, interested_aggregate: { __typename?: 'interested_ideas_aggregate', aggregate?: { __typename?: 'interested_ideas_aggregate_fields', count: number } | null }, votes: Array<{ __typename?: 'idea_votes', id: any }>, boosted_idea?: { __typename?: 'boosted_ideas', ideaId: any, remainingCurrencyAmount?: any | null } | null }> };

export type TIdeaFieldsFragment = { __typename?: 'ideas', id: any, summary?: string | null, name: string, description?: string | null, field: string, competitors?: string | null, team?: string | null, additionalInformation?: string | null, isPublished: boolean, userId: any, status?: string | null, createdAt: any, totalInterested: number, totalComments: number, totalVotes: number };

export type TIdeaQueryVariables = Exact<{
  id: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type TIdeaQuery = { idea?: { __typename?: 'ideas', id: any, summary?: string | null, name: string, description?: string | null, field: string, competitors?: string | null, team?: string | null, additionalInformation?: string | null, isPublished: boolean, userId: any, status?: string | null, createdAt: any, totalInterested: number, totalComments: number, totalVotes: number, user?: { __typename?: 'users', email?: any | null, displayName: string, id: any, avatarUrl: string, createdAt: any, address?: { __typename?: 'user_address', location?: string | null, country?: string | null } | null } | null, votes_aggregate: { __typename?: 'idea_votes_aggregate', aggregate?: { __typename?: 'idea_votes_aggregate_fields', count: number } | null }, votes: Array<{ __typename?: 'idea_votes', id: any }>, interested_aggregate: { __typename?: 'interested_ideas_aggregate', aggregate?: { __typename?: 'interested_ideas_aggregate_fields', count: number } | null }, boosted_idea?: { __typename?: 'boosted_ideas', ideaId: any, remainingCurrencyAmount?: any | null, createdAt?: any | null } | null } | null, hasInterest?: { __typename?: 'interested_ideas', id: any, ideaId: any, userId: any } | null, hasBoostedFeedback: Array<{ __typename?: 'idea_comments', id: any, value: string, status: TComment_Status_Types_Enum }> };

export type TInterestedIdeaFieldsFragment = { __typename?: 'interested_ideas', id: any, ideaId: any, userId: any };

export type TIdeaInterestedUsersQueryVariables = Exact<{
  ideaId: Scalars['uuid'];
}>;


export type TIdeaInterestedUsersQuery = { interested_users: Array<{ __typename?: 'interested_ideas', id: any, createdAt: any, user?: { __typename?: 'users', email?: any | null, displayName: string, id: any, avatarUrl: string, createdAt: any, address?: { __typename?: 'user_address', location?: string | null, country?: string | null } | null } | null }> };

export type TInsertIdeaUpvoteMutationVariables = Exact<{
  idea_vote: TIdea_Votes_Insert_Input;
}>;


export type TInsertIdeaUpvoteMutation = { insert_idea_votes_one?: { __typename?: 'idea_votes', id: any, ideaId: any } | null };

export type TDeleteIdeaUpvoteMutationVariables = Exact<{
  ideaId: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type TDeleteIdeaUpvoteMutation = { delete_idea_votes?: { __typename?: 'idea_votes_mutation_response', affected_rows: number } | null };

export type TBoostedIdeasQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type TBoostedIdeasQuery = { boosted_ideas: Array<{ __typename?: 'boosted_ideas', ideaId: any, totalCurrencyAmount?: any | null, remainingCurrencyAmount?: any | null, createdAt?: any | null, idea?: { __typename?: 'ideas', name: string, summary?: string | null, status?: string | null, field: string } | null }>, boosted_ideas_aggregate: { __typename?: 'boosted_ideas_aggregate', aggregate?: { __typename?: 'boosted_ideas_aggregate_fields', count: number } | null } };

export type TUpdateMatchSettingsMutationVariables = Exact<{
  id: Scalars['uuid'];
  match_settings: TMatch_Settings_Set_Input;
}>;


export type TUpdateMatchSettingsMutation = { update_match_settings_by_pk?: { __typename?: 'match_settings', lookingFor?: string | null, skills?: any | null, type?: string | null } | null };

export type TMatchSettingsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type TMatchSettingsQuery = { settings?: { __typename?: 'match_settings', type?: string | null, skills?: any | null, lookingFor?: string | null } | null };

export type TMatchSettingsFieldsFragment = { __typename?: 'match_settings', type?: string | null, skills?: any | null, lookingFor?: string | null };

export type TMatchesQueryVariables = Exact<{
  currentUserId: Scalars['uuid'];
  lookingFor: Scalars['String'];
  skills?: InputMaybe<Scalars['jsonb']>;
}>;


export type TMatchesQuery = { users: Array<{ __typename?: 'users', displayName: string, id: any, avatarUrl: string, matchSettings?: { __typename?: 'match_settings', type?: string | null } | null, profile?: { __typename?: 'user_profile', skills?: any | null } | null }> };

export type TNewMessageThreadMutationVariables = Exact<{
  targetUserId: Scalars['uuid'];
  currentUserId: Scalars['uuid'];
}>;


export type TNewMessageThreadMutation = { insert_message_thread?: { __typename?: 'message_thread_mutation_response', returning: Array<{ __typename?: 'message_thread', id: any }> } | null };

export type TNewMessageMutationVariables = Exact<{
  messageThreadId: Scalars['uuid'];
  content: Scalars['String'];
}>;


export type TNewMessageMutation = { insert_message_one?: { __typename?: 'message', id: any, threadId: any, content: string, createdAt: any, sender: { __typename?: 'users', avatarUrl: string, id: any, displayName: string, profile?: { __typename?: 'user_profile', pronouns?: string | null, customPronouns?: string | null } | null } } | null };

export type TUserMessageThreadsQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type TUserMessageThreadsQuery = { threads: Array<{ __typename?: 'message_thread', id: any, name?: string | null, ownerId?: any | null, targetUser: Array<{ __typename?: 'message_thread_users', user: { __typename?: 'users', avatarUrl: string, id: any, displayName: string, profile?: { __typename?: 'user_profile', pronouns?: string | null, customPronouns?: string | null } | null } }>, lastMessage: Array<{ __typename?: 'message', content: string, createdAt: any, sender: { __typename?: 'users', avatarUrl: string, id: any, displayName: string, profile?: { __typename?: 'user_profile', pronouns?: string | null, customPronouns?: string | null } | null } }> }>, total: { __typename?: 'message_thread_aggregate', aggregate?: { __typename?: 'message_thread_aggregate_fields', count: number } | null } };

export type TGetThreadUsersQueryVariables = Exact<{
  messageThreadId: Scalars['uuid'];
}>;


export type TGetThreadUsersQuery = { users: Array<{ __typename?: 'message_thread_users', user: { __typename?: 'users', id: any, displayName: string, avatarUrl: string } }> };

export type TMessageListSubscriptionVariables = Exact<{
  messageThreadId: Scalars['uuid'];
}>;


export type TMessageListSubscription = { message: Array<{ __typename?: 'message', id: any, threadId: any, content: string, createdAt: any, sender: { __typename?: 'users', avatarUrl: string, id: any, displayName: string, profile?: { __typename?: 'user_profile', pronouns?: string | null, customPronouns?: string | null } | null } }> };

export type TGetUserNotificationsQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type TGetUserNotificationsQuery = { user_notifications: Array<{ __typename?: 'user_notifications', id: any, href?: string | null, value: string, type: TNotification_Types_Enum, description?: string | null, read: boolean, createdAt: any }> };

export type TNotificationFieldsFragment = { __typename?: 'user_notifications', id: any, href?: string | null, value: string, type: TNotification_Types_Enum, description?: string | null, read: boolean, createdAt: any };

export type TNewWithdrawalRequestMutationVariables = Exact<{
  amount: Scalars['money'];
  email: Scalars['citext'];
}>;


export type TNewWithdrawalRequestMutation = { insert_withdrawal_requests_one?: { __typename?: 'withdrawal_requests', amount: any } | null };

export type TCreateReportMutationVariables = Exact<{
  report: TReport_Insert_Input;
}>;


export type TCreateReportMutation = { insert_report_one?: { __typename?: 'report', id: any } | null };

export type TUserSocialsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type TUserSocialsQuery = { profile?: { __typename?: 'user_profile', linkedin?: string | null, twitter?: string | null, website?: string | null } | null };

export type TUserProfileDetailsQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type TUserProfileDetailsQuery = { user?: { __typename?: 'users', displayName: string, avatarUrl: string, createdAt: any, lastSeen?: any | null, address?: { __typename?: 'user_address', location?: string | null, country?: string | null } | null, profile?: { __typename?: 'user_profile', availability?: string | null, background?: string | null, status?: string | null, startups?: string | null, businessDescription?: string | null, specialistIndustry?: string | null, statement?: string | null, skills?: any | null, objective?: string | null, pronouns?: string | null, customPronouns?: string | null } | null } | null };

export type TUserQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type TUserQuery = { user?: { __typename?: 'users', createdAt: any, lastSeen?: any | null, email?: any | null, displayName: string, id: any, avatarUrl: string, profile?: { __typename?: 'user_profile', id: any, pronouns?: string | null, customPronouns?: string | null, isComplete: boolean, skills?: any | null } | null, esteemPointsCurrency?: { __typename?: 'user_esteem_points_currency', points: number, currency: any } | null, matchSettings?: { __typename?: 'match_settings', lookingFor?: string | null, type?: string | null, skills?: any | null } | null, address?: { __typename?: 'user_address', location?: string | null, country?: string | null } | null } | null };

export type TUsersQueryVariables = Exact<{
  where?: InputMaybe<TUser_Profile_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TUser_Profile_Order_By> | TUser_Profile_Order_By>;
}>;


export type TUsersQuery = { user_profile_aggregate: { __typename?: 'user_profile_aggregate', aggregate?: { __typename?: 'user_profile_aggregate_fields', count: number } | null }, user_profile: Array<{ __typename?: 'user_profile', id: any, objective?: string | null, skills?: any | null, startups?: string | null, availability?: string | null, specialistIndustry?: string | null, status?: string | null, pronouns?: string | null, customPronouns?: string | null, user?: { __typename?: 'users', displayName: string, id: any, avatarUrl: string, createdAt: any, address?: { __typename?: 'user_address', location?: string | null, country?: string | null } | null } | null }> };

export type TUpdateUserProfileMutationVariables = Exact<{
  id: Scalars['uuid'];
  user_profile: TUser_Profile_Set_Input;
}>;


export type TUpdateUserProfileMutation = { update_user_profile_by_pk?: { __typename?: 'user_profile', id: any, availability?: string | null, objective?: string | null, background?: string | null, linkedin?: string | null, twitter?: string | null, instagram?: string | null, facebook?: string | null, resume?: string | null, statement?: string | null, status?: string | null, businessDescription?: string | null, startups?: string | null, website?: string | null, skills?: any | null, isComplete: boolean, specialistIndustry?: string | null, updatedAt: any } | null };

export type TUserExperienceQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type TUserExperienceQuery = { profile?: { __typename?: 'user_profile', id: any, userId: any, objective?: string | null, background?: string | null, statement?: string | null, startups?: string | null, status?: string | null, availability?: string | null, businessDescription?: string | null, specialistIndustry?: string | null, skills?: any | null, resume?: string | null, linkedin?: string | null, twitter?: string | null, instagram?: string | null, facebook?: string | null, website?: string | null, updatedAt: any, isComplete: boolean, pronouns?: string | null, customPronouns?: string | null } | null };

export type TUpdateUserExperienceMutationVariables = Exact<{
  id: Scalars['uuid'];
  userExperience: TUser_Profile_Set_Input;
}>;


export type TUpdateUserExperienceMutation = { update_user_profile_by_pk?: { __typename?: 'user_profile', id: any, userId: any, background?: string | null, statement?: string | null, startups?: string | null, status?: string | null, skills?: any | null, availability?: string | null, resume?: string | null, businessDescription?: string | null, objective?: string | null } | null };

export type TUpdateResumeMutationVariables = Exact<{
  id: Scalars['uuid'];
  resume: TUser_Profile_Set_Input;
}>;


export type TUpdateResumeMutation = { update_user_profile_by_pk?: { __typename?: 'user_profile', id: any, resume?: string | null } | null };

export type TUpdateUserPersonalDetailsMutationVariables = Exact<{
  id: Scalars['uuid'];
  profileId: Scalars['uuid'];
  userPersonalDetails: TUsers_Set_Input;
  userAddress: TUser_Address_Set_Input;
  userProfile: TUser_Profile_Set_Input;
}>;


export type TUpdateUserPersonalDetailsMutation = { updateUser?: { __typename?: 'users', displayName: string } | null, updateUserProfile?: { __typename?: 'user_profile', id: any, pronouns?: string | null, customPronouns?: string | null } | null, updateUserAddress?: { __typename?: 'user_address', country?: string | null, location?: string | null } | null };

export type TUpdateUserAvatarMutationVariables = Exact<{
  id: Scalars['uuid'];
  userDetails: TUsers_Set_Input;
}>;


export type TUpdateUserAvatarMutation = { user?: { __typename?: 'users', avatarUrl: string } | null };

export type TUserCurrencySubscriptionVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type TUserCurrencySubscription = { currencyPoints?: { __typename?: 'user_esteem_points_currency', currency: any, points: number } | null };

export const UserAddressFragmentDoc = gql`
    fragment UserAddress on user_address {
  location
  country
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on users {
  displayName
  id
  avatarUrl
  createdAt
  address {
    ...UserAddress
  }
}
    ${UserAddressFragmentDoc}`;
export const CommentFieldsFragmentDoc = gql`
    fragment CommentFields on v_comments {
  id
  updatedAt
  value
  ideaId
  totalReplies
  isBoost
  status
  user {
    ...UserFields
  }
  firstReplies: replies(limit: 2, order_by: {updatedAt: desc}) {
    id
    commentId
    value
    updatedAt
    user {
      ...UserFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export const UserSearchFragmentDoc = gql`
    fragment UserSearch on user_profile {
  skills
  startups
  availability
  specialistIndustry
  status
  objective
  pronouns
  customPronouns
  user {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const ThreadUserFragmentDoc = gql`
    fragment ThreadUser on users {
  id
  displayName
  avatarUrl
}
    `;
export const MessageUserFragmentDoc = gql`
    fragment MessageUser on users {
  ...ThreadUser
  avatarUrl
  profile {
    pronouns
    customPronouns
  }
}
    ${ThreadUserFragmentDoc}`;
export const BoostedIdeaFieldsFragmentDoc = gql`
    fragment BoostedIdeaFields on boosted_ideas {
  ideaId
  totalCurrencyAmount
  remainingCurrencyAmount
  createdAt
  idea {
    name
    summary
    status
    field
  }
}
    `;
export const UserFieldsWithEmailFragmentDoc = gql`
    fragment UserFieldsWithEmail on users {
  ...UserFields
  email
}
    ${UserFieldsFragmentDoc}`;
export const IdeaPreviewFieldsFragmentDoc = gql`
    fragment IdeaPreviewFields on idea_preview {
  id
  name
  field
  status
  createdAt
  isNew
  isPublished
  summary
  userId
  user {
    ...UserFieldsWithEmail
  }
  votes_aggregate {
    aggregate {
      count(columns: id)
    }
  }
  comments_aggregate {
    aggregate {
      count(columns: id)
    }
  }
  interested_aggregate {
    aggregate {
      count(columns: id)
    }
  }
  votes(where: {userId: {_eq: $userId}}) {
    id
  }
  boosted_idea {
    ideaId
    remainingCurrencyAmount
  }
}
    ${UserFieldsWithEmailFragmentDoc}`;
export const IdeaFieldsFragmentDoc = gql`
    fragment IdeaFields on ideas {
  id
  summary
  name
  description
  field
  competitors
  team
  additionalInformation
  isPublished
  userId
  status
  createdAt
  totalInterested
  totalComments
  totalVotes
}
    `;
export const InterestedIdeaFieldsFragmentDoc = gql`
    fragment InterestedIdeaFields on interested_ideas {
  id
  ideaId
  userId
}
    `;
export const MatchSettingsFieldsFragmentDoc = gql`
    fragment MatchSettingsFields on match_settings {
  type
  skills
  lookingFor
}
    `;
export const NotificationFieldsFragmentDoc = gql`
    fragment NotificationFields on user_notifications {
  id
  href
  value
  type
  description
  read
  createdAt
}
    `;
export const UserActivityDocument = gql`
    query UserActivity($userId: uuid!) {
  activity(where: {userId: {_eq: $userId}}, order_by: {createdAt: desc}) {
    ideaId
    event
    description
    url
    type
    createdAt
  }
}
    `;

/**
 * __useUserActivityQuery__
 *
 * To run a query within a React component, call `useUserActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserActivityQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserActivityQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TUserActivityQuery, TUserActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TUserActivityQuery, TUserActivityQueryVariables>(UserActivityDocument, options);
      }
export function useUserActivityLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TUserActivityQuery, TUserActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TUserActivityQuery, TUserActivityQueryVariables>(UserActivityDocument, options);
        }
export type UserActivityQueryHookResult = ReturnType<typeof useUserActivityQuery>;
export type UserActivityLazyQueryHookResult = ReturnType<typeof useUserActivityLazyQuery>;
export type UserActivityQueryResult = Apollo.QueryResult<TUserActivityQuery, TUserActivityQueryVariables>;
export function refetchUserActivityQuery(variables: TUserActivityQueryVariables) {
      return { query: UserActivityDocument, variables: variables }
    }
export const PostCommentDocument = gql`
    mutation PostComment($ideaComment: idea_comments_insert_input!, $ideaId: uuid!) {
  addIdeaComment: insert_idea_comments_one(object: $ideaComment) {
    id
    ideaId
    user {
      displayName
      avatarUrl
    }
  }
  updateIdeaTotalComments: update_ideas_by_pk(
    pk_columns: {id: $ideaId}
    _inc: {totalComments: 1}
  ) {
    id
  }
}
    `;
export type TPostCommentMutationFn = Apollo.MutationFunction<TPostCommentMutation, TPostCommentMutationVariables>;

/**
 * __usePostCommentMutation__
 *
 * To run a mutation, you first call `usePostCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postCommentMutation, { data, loading, error }] = usePostCommentMutation({
 *   variables: {
 *      ideaComment: // value for 'ideaComment'
 *      ideaId: // value for 'ideaId'
 *   },
 * });
 */
export function usePostCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TPostCommentMutation, TPostCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TPostCommentMutation, TPostCommentMutationVariables>(PostCommentDocument, options);
      }
export type PostCommentMutationHookResult = ReturnType<typeof usePostCommentMutation>;
export type PostCommentMutationResult = Apollo.MutationResult<TPostCommentMutation>;
export type PostCommentMutationOptions = Apollo.BaseMutationOptions<TPostCommentMutation, TPostCommentMutationVariables>;
export const PostReplyDocument = gql`
    mutation PostReply($ideaReply: idea_comment_replies_insert_input!, $commentId: uuid!) {
  addIdeaReply: insert_idea_comment_replies_one(object: $ideaReply) {
    commentId
    id
    value
  }
  update_idea_comments_by_pk(
    pk_columns: {id: $commentId}
    _inc: {totalReplies: 1}
  ) {
    id
  }
}
    `;
export type TPostReplyMutationFn = Apollo.MutationFunction<TPostReplyMutation, TPostReplyMutationVariables>;

/**
 * __usePostReplyMutation__
 *
 * To run a mutation, you first call `usePostReplyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostReplyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postReplyMutation, { data, loading, error }] = usePostReplyMutation({
 *   variables: {
 *      ideaReply: // value for 'ideaReply'
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function usePostReplyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TPostReplyMutation, TPostReplyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TPostReplyMutation, TPostReplyMutationVariables>(PostReplyDocument, options);
      }
export type PostReplyMutationHookResult = ReturnType<typeof usePostReplyMutation>;
export type PostReplyMutationResult = Apollo.MutationResult<TPostReplyMutation>;
export type PostReplyMutationOptions = Apollo.BaseMutationOptions<TPostReplyMutation, TPostReplyMutationVariables>;
export const CommentsForIdeaDocument = gql`
    query CommentsForIdea($ideaId: uuid!, $offset: Int) {
  comments: v_comments(
    where: {ideaId: {_eq: $ideaId}}
    order_by: {updatedAt: desc}
    offset: $offset
    limit: 8
  ) {
    ...CommentFields
  }
  totalComments: v_comments_aggregate(where: {ideaId: {_eq: $ideaId}}) {
    aggregate {
      count(columns: id)
    }
  }
}
    ${CommentFieldsFragmentDoc}`;

/**
 * __useCommentsForIdeaQuery__
 *
 * To run a query within a React component, call `useCommentsForIdeaQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsForIdeaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsForIdeaQuery({
 *   variables: {
 *      ideaId: // value for 'ideaId'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useCommentsForIdeaQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TCommentsForIdeaQuery, TCommentsForIdeaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TCommentsForIdeaQuery, TCommentsForIdeaQueryVariables>(CommentsForIdeaDocument, options);
      }
export function useCommentsForIdeaLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TCommentsForIdeaQuery, TCommentsForIdeaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TCommentsForIdeaQuery, TCommentsForIdeaQueryVariables>(CommentsForIdeaDocument, options);
        }
export type CommentsForIdeaQueryHookResult = ReturnType<typeof useCommentsForIdeaQuery>;
export type CommentsForIdeaLazyQueryHookResult = ReturnType<typeof useCommentsForIdeaLazyQuery>;
export type CommentsForIdeaQueryResult = Apollo.QueryResult<TCommentsForIdeaQuery, TCommentsForIdeaQueryVariables>;
export function refetchCommentsForIdeaQuery(variables: TCommentsForIdeaQueryVariables) {
      return { query: CommentsForIdeaDocument, variables: variables }
    }
export const RepliesForCommentDocument = gql`
    query RepliesForComment($commentId: uuid!) {
  replies: idea_comment_replies(
    where: {commentId: {_eq: $commentId}}
    order_by: {updatedAt: asc}
  ) {
    id
    commentId
    value
    updatedAt
    user {
      ...UserFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useRepliesForCommentQuery__
 *
 * To run a query within a React component, call `useRepliesForCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useRepliesForCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRepliesForCommentQuery({
 *   variables: {
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useRepliesForCommentQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TRepliesForCommentQuery, TRepliesForCommentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TRepliesForCommentQuery, TRepliesForCommentQueryVariables>(RepliesForCommentDocument, options);
      }
export function useRepliesForCommentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TRepliesForCommentQuery, TRepliesForCommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TRepliesForCommentQuery, TRepliesForCommentQueryVariables>(RepliesForCommentDocument, options);
        }
export type RepliesForCommentQueryHookResult = ReturnType<typeof useRepliesForCommentQuery>;
export type RepliesForCommentLazyQueryHookResult = ReturnType<typeof useRepliesForCommentLazyQuery>;
export type RepliesForCommentQueryResult = Apollo.QueryResult<TRepliesForCommentQuery, TRepliesForCommentQueryVariables>;
export function refetchRepliesForCommentQuery(variables: TRepliesForCommentQueryVariables) {
      return { query: RepliesForCommentDocument, variables: variables }
    }
export const FollowUserDocument = gql`
    mutation FollowUser($followingId: uuid!) {
  insert_user_followers_one(object: {followingId: $followingId}) {
    followingId
    followerId
  }
}
    `;
export type TFollowUserMutationFn = Apollo.MutationFunction<TFollowUserMutation, TFollowUserMutationVariables>;

/**
 * __useFollowUserMutation__
 *
 * To run a mutation, you first call `useFollowUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followUserMutation, { data, loading, error }] = useFollowUserMutation({
 *   variables: {
 *      followingId: // value for 'followingId'
 *   },
 * });
 */
export function useFollowUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TFollowUserMutation, TFollowUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TFollowUserMutation, TFollowUserMutationVariables>(FollowUserDocument, options);
      }
export type FollowUserMutationHookResult = ReturnType<typeof useFollowUserMutation>;
export type FollowUserMutationResult = Apollo.MutationResult<TFollowUserMutation>;
export type FollowUserMutationOptions = Apollo.BaseMutationOptions<TFollowUserMutation, TFollowUserMutationVariables>;
export const CreateIdeaDocument = gql`
    mutation CreateIdea($idea: ideas_insert_input!) {
  idea: insert_ideas_one(object: $idea) {
    id
    name
  }
}
    `;
export type TCreateIdeaMutationFn = Apollo.MutationFunction<TCreateIdeaMutation, TCreateIdeaMutationVariables>;

/**
 * __useCreateIdeaMutation__
 *
 * To run a mutation, you first call `useCreateIdeaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIdeaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIdeaMutation, { data, loading, error }] = useCreateIdeaMutation({
 *   variables: {
 *      idea: // value for 'idea'
 *   },
 * });
 */
export function useCreateIdeaMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TCreateIdeaMutation, TCreateIdeaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TCreateIdeaMutation, TCreateIdeaMutationVariables>(CreateIdeaDocument, options);
      }
export type CreateIdeaMutationHookResult = ReturnType<typeof useCreateIdeaMutation>;
export type CreateIdeaMutationResult = Apollo.MutationResult<TCreateIdeaMutation>;
export type CreateIdeaMutationOptions = Apollo.BaseMutationOptions<TCreateIdeaMutation, TCreateIdeaMutationVariables>;
export const UpdateIdeaDocument = gql`
    mutation UpdateIdea($idea: ideas_set_input!, $id: uuid!) {
  update_ideas_by_pk(pk_columns: {id: $id}, _set: $idea) {
    id
    name
    summary
    description
    field
    competitors
    team
    additionalInformation
    isPublished
    userId
    status
  }
}
    `;
export type TUpdateIdeaMutationFn = Apollo.MutationFunction<TUpdateIdeaMutation, TUpdateIdeaMutationVariables>;

/**
 * __useUpdateIdeaMutation__
 *
 * To run a mutation, you first call `useUpdateIdeaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIdeaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIdeaMutation, { data, loading, error }] = useUpdateIdeaMutation({
 *   variables: {
 *      idea: // value for 'idea'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateIdeaMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TUpdateIdeaMutation, TUpdateIdeaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TUpdateIdeaMutation, TUpdateIdeaMutationVariables>(UpdateIdeaDocument, options);
      }
export type UpdateIdeaMutationHookResult = ReturnType<typeof useUpdateIdeaMutation>;
export type UpdateIdeaMutationResult = Apollo.MutationResult<TUpdateIdeaMutation>;
export type UpdateIdeaMutationOptions = Apollo.BaseMutationOptions<TUpdateIdeaMutation, TUpdateIdeaMutationVariables>;
export const DeleteIdeaDocument = gql`
    mutation DeleteIdea($id: uuid!) {
  delete_ideas_by_pk(id: $id) {
    id
  }
}
    `;
export type TDeleteIdeaMutationFn = Apollo.MutationFunction<TDeleteIdeaMutation, TDeleteIdeaMutationVariables>;

/**
 * __useDeleteIdeaMutation__
 *
 * To run a mutation, you first call `useDeleteIdeaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteIdeaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteIdeaMutation, { data, loading, error }] = useDeleteIdeaMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteIdeaMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TDeleteIdeaMutation, TDeleteIdeaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TDeleteIdeaMutation, TDeleteIdeaMutationVariables>(DeleteIdeaDocument, options);
      }
export type DeleteIdeaMutationHookResult = ReturnType<typeof useDeleteIdeaMutation>;
export type DeleteIdeaMutationResult = Apollo.MutationResult<TDeleteIdeaMutation>;
export type DeleteIdeaMutationOptions = Apollo.BaseMutationOptions<TDeleteIdeaMutation, TDeleteIdeaMutationVariables>;
export const CreateInterestedIdeaDocument = gql`
    mutation CreateInterestedIdea($ideaId: uuid!, $targetUserId: uuid!) {
  addInterestedIdea: insert_interested_ideas_one(
    object: {ideaId: $ideaId, targetUserId: $targetUserId}
  ) {
    ideaId
  }
}
    `;
export type TCreateInterestedIdeaMutationFn = Apollo.MutationFunction<TCreateInterestedIdeaMutation, TCreateInterestedIdeaMutationVariables>;

/**
 * __useCreateInterestedIdeaMutation__
 *
 * To run a mutation, you first call `useCreateInterestedIdeaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInterestedIdeaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInterestedIdeaMutation, { data, loading, error }] = useCreateInterestedIdeaMutation({
 *   variables: {
 *      ideaId: // value for 'ideaId'
 *      targetUserId: // value for 'targetUserId'
 *   },
 * });
 */
export function useCreateInterestedIdeaMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TCreateInterestedIdeaMutation, TCreateInterestedIdeaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TCreateInterestedIdeaMutation, TCreateInterestedIdeaMutationVariables>(CreateInterestedIdeaDocument, options);
      }
export type CreateInterestedIdeaMutationHookResult = ReturnType<typeof useCreateInterestedIdeaMutation>;
export type CreateInterestedIdeaMutationResult = Apollo.MutationResult<TCreateInterestedIdeaMutation>;
export type CreateInterestedIdeaMutationOptions = Apollo.BaseMutationOptions<TCreateInterestedIdeaMutation, TCreateInterestedIdeaMutationVariables>;
export const IdeasDocument = gql`
    query Ideas($where: idea_preview_bool_exp, $limit: Int, $offset: Int, $orderBy: [idea_preview_order_by!], $userId: uuid!) {
  idea_preview_aggregate(where: $where) {
    aggregate {
      count
    }
  }
  idea_preview(where: $where, limit: $limit, offset: $offset, order_by: $orderBy) {
    ...IdeaPreviewFields
  }
}
    ${IdeaPreviewFieldsFragmentDoc}`;

/**
 * __useIdeasQuery__
 *
 * To run a query within a React component, call `useIdeasQuery` and pass it any options that fit your needs.
 * When your component renders, `useIdeasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIdeasQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useIdeasQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TIdeasQuery, TIdeasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TIdeasQuery, TIdeasQueryVariables>(IdeasDocument, options);
      }
export function useIdeasLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TIdeasQuery, TIdeasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TIdeasQuery, TIdeasQueryVariables>(IdeasDocument, options);
        }
export type IdeasQueryHookResult = ReturnType<typeof useIdeasQuery>;
export type IdeasLazyQueryHookResult = ReturnType<typeof useIdeasLazyQuery>;
export type IdeasQueryResult = Apollo.QueryResult<TIdeasQuery, TIdeasQueryVariables>;
export function refetchIdeasQuery(variables: TIdeasQueryVariables) {
      return { query: IdeasDocument, variables: variables }
    }
export const UserIdeasDocument = gql`
    query UserIdeas($userId: uuid!) {
  user_ideas: idea_preview(
    where: {userId: {_eq: $userId}}
    order_by: {createdAt: desc}
  ) {
    ...IdeaPreviewFields
  }
}
    ${IdeaPreviewFieldsFragmentDoc}`;

/**
 * __useUserIdeasQuery__
 *
 * To run a query within a React component, call `useUserIdeasQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserIdeasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserIdeasQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserIdeasQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TUserIdeasQuery, TUserIdeasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TUserIdeasQuery, TUserIdeasQueryVariables>(UserIdeasDocument, options);
      }
export function useUserIdeasLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TUserIdeasQuery, TUserIdeasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TUserIdeasQuery, TUserIdeasQueryVariables>(UserIdeasDocument, options);
        }
export type UserIdeasQueryHookResult = ReturnType<typeof useUserIdeasQuery>;
export type UserIdeasLazyQueryHookResult = ReturnType<typeof useUserIdeasLazyQuery>;
export type UserIdeasQueryResult = Apollo.QueryResult<TUserIdeasQuery, TUserIdeasQueryVariables>;
export function refetchUserIdeasQuery(variables: TUserIdeasQueryVariables) {
      return { query: UserIdeasDocument, variables: variables }
    }
export const IdeaDocument = gql`
    query Idea($id: uuid!, $userId: uuid!) {
  idea: ideas_by_pk(id: $id) {
    ...IdeaFields
    user {
      ...UserFieldsWithEmail
    }
    votes_aggregate {
      aggregate {
        count(columns: id)
      }
    }
    votes(where: {userId: {_eq: $userId}}) {
      id
    }
    interested_aggregate {
      aggregate {
        count(columns: id)
      }
    }
    boosted_idea {
      ideaId
      remainingCurrencyAmount
      createdAt
    }
  }
  hasInterest: interested_ideas_by_pk(ideaId: $id, userId: $userId) {
    ...InterestedIdeaFields
  }
  hasBoostedFeedback: idea_comments(
    where: {ideaId: {_eq: $id}, _and: {userId: {_eq: $userId}, _and: {isBoost: {_eq: true}}}, _or: [{status: {_eq: APPROVED}}, {status: {_eq: PENDING}}]}
  ) {
    id
    value
    status
  }
}
    ${IdeaFieldsFragmentDoc}
${UserFieldsWithEmailFragmentDoc}
${InterestedIdeaFieldsFragmentDoc}`;

/**
 * __useIdeaQuery__
 *
 * To run a query within a React component, call `useIdeaQuery` and pass it any options that fit your needs.
 * When your component renders, `useIdeaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIdeaQuery({
 *   variables: {
 *      id: // value for 'id'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useIdeaQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TIdeaQuery, TIdeaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TIdeaQuery, TIdeaQueryVariables>(IdeaDocument, options);
      }
export function useIdeaLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TIdeaQuery, TIdeaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TIdeaQuery, TIdeaQueryVariables>(IdeaDocument, options);
        }
export type IdeaQueryHookResult = ReturnType<typeof useIdeaQuery>;
export type IdeaLazyQueryHookResult = ReturnType<typeof useIdeaLazyQuery>;
export type IdeaQueryResult = Apollo.QueryResult<TIdeaQuery, TIdeaQueryVariables>;
export function refetchIdeaQuery(variables: TIdeaQueryVariables) {
      return { query: IdeaDocument, variables: variables }
    }
export const IdeaInterestedUsersDocument = gql`
    query IdeaInterestedUsers($ideaId: uuid!) {
  interested_users: interested_ideas(
    where: {ideaId: {_eq: $ideaId}}
    order_by: {createdAt: desc}
  ) {
    id
    createdAt
    user {
      ...UserFieldsWithEmail
    }
  }
}
    ${UserFieldsWithEmailFragmentDoc}`;

/**
 * __useIdeaInterestedUsersQuery__
 *
 * To run a query within a React component, call `useIdeaInterestedUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useIdeaInterestedUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIdeaInterestedUsersQuery({
 *   variables: {
 *      ideaId: // value for 'ideaId'
 *   },
 * });
 */
export function useIdeaInterestedUsersQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TIdeaInterestedUsersQuery, TIdeaInterestedUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TIdeaInterestedUsersQuery, TIdeaInterestedUsersQueryVariables>(IdeaInterestedUsersDocument, options);
      }
export function useIdeaInterestedUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TIdeaInterestedUsersQuery, TIdeaInterestedUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TIdeaInterestedUsersQuery, TIdeaInterestedUsersQueryVariables>(IdeaInterestedUsersDocument, options);
        }
export type IdeaInterestedUsersQueryHookResult = ReturnType<typeof useIdeaInterestedUsersQuery>;
export type IdeaInterestedUsersLazyQueryHookResult = ReturnType<typeof useIdeaInterestedUsersLazyQuery>;
export type IdeaInterestedUsersQueryResult = Apollo.QueryResult<TIdeaInterestedUsersQuery, TIdeaInterestedUsersQueryVariables>;
export function refetchIdeaInterestedUsersQuery(variables: TIdeaInterestedUsersQueryVariables) {
      return { query: IdeaInterestedUsersDocument, variables: variables }
    }
export const InsertIdeaUpvoteDocument = gql`
    mutation InsertIdeaUpvote($idea_vote: idea_votes_insert_input!) {
  insert_idea_votes_one(object: $idea_vote) {
    id
    ideaId
  }
}
    `;
export type TInsertIdeaUpvoteMutationFn = Apollo.MutationFunction<TInsertIdeaUpvoteMutation, TInsertIdeaUpvoteMutationVariables>;

/**
 * __useInsertIdeaUpvoteMutation__
 *
 * To run a mutation, you first call `useInsertIdeaUpvoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertIdeaUpvoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertIdeaUpvoteMutation, { data, loading, error }] = useInsertIdeaUpvoteMutation({
 *   variables: {
 *      idea_vote: // value for 'idea_vote'
 *   },
 * });
 */
export function useInsertIdeaUpvoteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TInsertIdeaUpvoteMutation, TInsertIdeaUpvoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TInsertIdeaUpvoteMutation, TInsertIdeaUpvoteMutationVariables>(InsertIdeaUpvoteDocument, options);
      }
export type InsertIdeaUpvoteMutationHookResult = ReturnType<typeof useInsertIdeaUpvoteMutation>;
export type InsertIdeaUpvoteMutationResult = Apollo.MutationResult<TInsertIdeaUpvoteMutation>;
export type InsertIdeaUpvoteMutationOptions = Apollo.BaseMutationOptions<TInsertIdeaUpvoteMutation, TInsertIdeaUpvoteMutationVariables>;
export const DeleteIdeaUpvoteDocument = gql`
    mutation DeleteIdeaUpvote($ideaId: uuid!, $userId: uuid!) {
  delete_idea_votes(where: {userId: {_eq: $userId}, ideaId: {_eq: $ideaId}}) {
    affected_rows
  }
}
    `;
export type TDeleteIdeaUpvoteMutationFn = Apollo.MutationFunction<TDeleteIdeaUpvoteMutation, TDeleteIdeaUpvoteMutationVariables>;

/**
 * __useDeleteIdeaUpvoteMutation__
 *
 * To run a mutation, you first call `useDeleteIdeaUpvoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteIdeaUpvoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteIdeaUpvoteMutation, { data, loading, error }] = useDeleteIdeaUpvoteMutation({
 *   variables: {
 *      ideaId: // value for 'ideaId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteIdeaUpvoteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TDeleteIdeaUpvoteMutation, TDeleteIdeaUpvoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TDeleteIdeaUpvoteMutation, TDeleteIdeaUpvoteMutationVariables>(DeleteIdeaUpvoteDocument, options);
      }
export type DeleteIdeaUpvoteMutationHookResult = ReturnType<typeof useDeleteIdeaUpvoteMutation>;
export type DeleteIdeaUpvoteMutationResult = Apollo.MutationResult<TDeleteIdeaUpvoteMutation>;
export type DeleteIdeaUpvoteMutationOptions = Apollo.BaseMutationOptions<TDeleteIdeaUpvoteMutation, TDeleteIdeaUpvoteMutationVariables>;
export const BoostedIdeasDocument = gql`
    query BoostedIdeas($limit: Int, $offset: Int) {
  boosted_ideas(limit: 10, offset: 0, order_by: {remainingCurrencyAmount: asc}) {
    ...BoostedIdeaFields
  }
  boosted_ideas_aggregate {
    aggregate {
      count
    }
  }
}
    ${BoostedIdeaFieldsFragmentDoc}`;

/**
 * __useBoostedIdeasQuery__
 *
 * To run a query within a React component, call `useBoostedIdeasQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoostedIdeasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoostedIdeasQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useBoostedIdeasQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TBoostedIdeasQuery, TBoostedIdeasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TBoostedIdeasQuery, TBoostedIdeasQueryVariables>(BoostedIdeasDocument, options);
      }
export function useBoostedIdeasLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TBoostedIdeasQuery, TBoostedIdeasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TBoostedIdeasQuery, TBoostedIdeasQueryVariables>(BoostedIdeasDocument, options);
        }
export type BoostedIdeasQueryHookResult = ReturnType<typeof useBoostedIdeasQuery>;
export type BoostedIdeasLazyQueryHookResult = ReturnType<typeof useBoostedIdeasLazyQuery>;
export type BoostedIdeasQueryResult = Apollo.QueryResult<TBoostedIdeasQuery, TBoostedIdeasQueryVariables>;
export function refetchBoostedIdeasQuery(variables?: TBoostedIdeasQueryVariables) {
      return { query: BoostedIdeasDocument, variables: variables }
    }
export const UpdateMatchSettingsDocument = gql`
    mutation UpdateMatchSettings($id: uuid!, $match_settings: match_settings_set_input!) {
  update_match_settings_by_pk(pk_columns: {user_id: $id}, _set: $match_settings) {
    lookingFor
    skills
    type
  }
}
    `;
export type TUpdateMatchSettingsMutationFn = Apollo.MutationFunction<TUpdateMatchSettingsMutation, TUpdateMatchSettingsMutationVariables>;

/**
 * __useUpdateMatchSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateMatchSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMatchSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMatchSettingsMutation, { data, loading, error }] = useUpdateMatchSettingsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      match_settings: // value for 'match_settings'
 *   },
 * });
 */
export function useUpdateMatchSettingsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TUpdateMatchSettingsMutation, TUpdateMatchSettingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TUpdateMatchSettingsMutation, TUpdateMatchSettingsMutationVariables>(UpdateMatchSettingsDocument, options);
      }
export type UpdateMatchSettingsMutationHookResult = ReturnType<typeof useUpdateMatchSettingsMutation>;
export type UpdateMatchSettingsMutationResult = Apollo.MutationResult<TUpdateMatchSettingsMutation>;
export type UpdateMatchSettingsMutationOptions = Apollo.BaseMutationOptions<TUpdateMatchSettingsMutation, TUpdateMatchSettingsMutationVariables>;
export const MatchSettingsDocument = gql`
    query MatchSettings($id: uuid!) {
  settings: match_settings_by_pk(user_id: $id) {
    ...MatchSettingsFields
  }
}
    ${MatchSettingsFieldsFragmentDoc}`;

/**
 * __useMatchSettingsQuery__
 *
 * To run a query within a React component, call `useMatchSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMatchSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMatchSettingsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMatchSettingsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TMatchSettingsQuery, TMatchSettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TMatchSettingsQuery, TMatchSettingsQueryVariables>(MatchSettingsDocument, options);
      }
export function useMatchSettingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TMatchSettingsQuery, TMatchSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TMatchSettingsQuery, TMatchSettingsQueryVariables>(MatchSettingsDocument, options);
        }
export type MatchSettingsQueryHookResult = ReturnType<typeof useMatchSettingsQuery>;
export type MatchSettingsLazyQueryHookResult = ReturnType<typeof useMatchSettingsLazyQuery>;
export type MatchSettingsQueryResult = Apollo.QueryResult<TMatchSettingsQuery, TMatchSettingsQueryVariables>;
export function refetchMatchSettingsQuery(variables: TMatchSettingsQueryVariables) {
      return { query: MatchSettingsDocument, variables: variables }
    }
export const MatchesDocument = gql`
    query Matches($currentUserId: uuid!, $lookingFor: String!, $skills: jsonb) {
  users(
    where: {id: {_neq: $currentUserId}, matchSettings: {type: {_eq: $lookingFor}}}
  ) {
    displayName
    id
    avatarUrl
    matchSettings {
      type
    }
    profile {
      skills
    }
  }
}
    `;

/**
 * __useMatchesQuery__
 *
 * To run a query within a React component, call `useMatchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMatchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMatchesQuery({
 *   variables: {
 *      currentUserId: // value for 'currentUserId'
 *      lookingFor: // value for 'lookingFor'
 *      skills: // value for 'skills'
 *   },
 * });
 */
export function useMatchesQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TMatchesQuery, TMatchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TMatchesQuery, TMatchesQueryVariables>(MatchesDocument, options);
      }
export function useMatchesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TMatchesQuery, TMatchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TMatchesQuery, TMatchesQueryVariables>(MatchesDocument, options);
        }
export type MatchesQueryHookResult = ReturnType<typeof useMatchesQuery>;
export type MatchesLazyQueryHookResult = ReturnType<typeof useMatchesLazyQuery>;
export type MatchesQueryResult = Apollo.QueryResult<TMatchesQuery, TMatchesQueryVariables>;
export function refetchMatchesQuery(variables: TMatchesQueryVariables) {
      return { query: MatchesDocument, variables: variables }
    }
export const NewMessageThreadDocument = gql`
    mutation NewMessageThread($targetUserId: uuid!, $currentUserId: uuid!) {
  insert_message_thread(
    objects: [{messageThreadUsers: {data: [{userId: $targetUserId}, {userId: $currentUserId}]}}]
  ) {
    returning {
      id
    }
  }
}
    `;
export type TNewMessageThreadMutationFn = Apollo.MutationFunction<TNewMessageThreadMutation, TNewMessageThreadMutationVariables>;

/**
 * __useNewMessageThreadMutation__
 *
 * To run a mutation, you first call `useNewMessageThreadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewMessageThreadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newMessageThreadMutation, { data, loading, error }] = useNewMessageThreadMutation({
 *   variables: {
 *      targetUserId: // value for 'targetUserId'
 *      currentUserId: // value for 'currentUserId'
 *   },
 * });
 */
export function useNewMessageThreadMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TNewMessageThreadMutation, TNewMessageThreadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TNewMessageThreadMutation, TNewMessageThreadMutationVariables>(NewMessageThreadDocument, options);
      }
export type NewMessageThreadMutationHookResult = ReturnType<typeof useNewMessageThreadMutation>;
export type NewMessageThreadMutationResult = Apollo.MutationResult<TNewMessageThreadMutation>;
export type NewMessageThreadMutationOptions = Apollo.BaseMutationOptions<TNewMessageThreadMutation, TNewMessageThreadMutationVariables>;
export const NewMessageDocument = gql`
    mutation NewMessage($messageThreadId: uuid!, $content: String!) {
  insert_message_one(object: {threadId: $messageThreadId, content: $content}) {
    id
    threadId
    content
    createdAt
    sender {
      ...MessageUser
    }
  }
}
    ${MessageUserFragmentDoc}`;
export type TNewMessageMutationFn = Apollo.MutationFunction<TNewMessageMutation, TNewMessageMutationVariables>;

/**
 * __useNewMessageMutation__
 *
 * To run a mutation, you first call `useNewMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newMessageMutation, { data, loading, error }] = useNewMessageMutation({
 *   variables: {
 *      messageThreadId: // value for 'messageThreadId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useNewMessageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TNewMessageMutation, TNewMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TNewMessageMutation, TNewMessageMutationVariables>(NewMessageDocument, options);
      }
export type NewMessageMutationHookResult = ReturnType<typeof useNewMessageMutation>;
export type NewMessageMutationResult = Apollo.MutationResult<TNewMessageMutation>;
export type NewMessageMutationOptions = Apollo.BaseMutationOptions<TNewMessageMutation, TNewMessageMutationVariables>;
export const UserMessageThreadsDocument = gql`
    query UserMessageThreads($userId: uuid!) {
  threads: message_thread(
    order_by: {messages_aggregate: {max: {createdAt: desc}}}
    where: {messageThreadUsers: {userId: {_eq: $userId}}}
  ) {
    id
    name
    ownerId
    targetUser: messageThreadUsers(where: {userId: {_neq: $userId}}) {
      user {
        ...MessageUser
      }
    }
    lastMessage: messages(limit: 1, order_by: {createdAt: desc}) {
      content
      createdAt
      sender {
        ...MessageUser
      }
    }
  }
  total: message_thread_aggregate(
    where: {messageThreadUsers: {userId: {_eq: $userId}}}
  ) {
    aggregate {
      count(columns: id)
    }
  }
}
    ${MessageUserFragmentDoc}`;

/**
 * __useUserMessageThreadsQuery__
 *
 * To run a query within a React component, call `useUserMessageThreadsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserMessageThreadsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserMessageThreadsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserMessageThreadsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TUserMessageThreadsQuery, TUserMessageThreadsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TUserMessageThreadsQuery, TUserMessageThreadsQueryVariables>(UserMessageThreadsDocument, options);
      }
export function useUserMessageThreadsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TUserMessageThreadsQuery, TUserMessageThreadsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TUserMessageThreadsQuery, TUserMessageThreadsQueryVariables>(UserMessageThreadsDocument, options);
        }
export type UserMessageThreadsQueryHookResult = ReturnType<typeof useUserMessageThreadsQuery>;
export type UserMessageThreadsLazyQueryHookResult = ReturnType<typeof useUserMessageThreadsLazyQuery>;
export type UserMessageThreadsQueryResult = Apollo.QueryResult<TUserMessageThreadsQuery, TUserMessageThreadsQueryVariables>;
export function refetchUserMessageThreadsQuery(variables: TUserMessageThreadsQueryVariables) {
      return { query: UserMessageThreadsDocument, variables: variables }
    }
export const GetThreadUsersDocument = gql`
    query GetThreadUsers($messageThreadId: uuid!) {
  users: message_thread_users(where: {threadId: {_eq: $messageThreadId}}) {
    user {
      ...ThreadUser
    }
  }
}
    ${ThreadUserFragmentDoc}`;

/**
 * __useGetThreadUsersQuery__
 *
 * To run a query within a React component, call `useGetThreadUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetThreadUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetThreadUsersQuery({
 *   variables: {
 *      messageThreadId: // value for 'messageThreadId'
 *   },
 * });
 */
export function useGetThreadUsersQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TGetThreadUsersQuery, TGetThreadUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TGetThreadUsersQuery, TGetThreadUsersQueryVariables>(GetThreadUsersDocument, options);
      }
export function useGetThreadUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TGetThreadUsersQuery, TGetThreadUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TGetThreadUsersQuery, TGetThreadUsersQueryVariables>(GetThreadUsersDocument, options);
        }
export type GetThreadUsersQueryHookResult = ReturnType<typeof useGetThreadUsersQuery>;
export type GetThreadUsersLazyQueryHookResult = ReturnType<typeof useGetThreadUsersLazyQuery>;
export type GetThreadUsersQueryResult = Apollo.QueryResult<TGetThreadUsersQuery, TGetThreadUsersQueryVariables>;
export function refetchGetThreadUsersQuery(variables: TGetThreadUsersQueryVariables) {
      return { query: GetThreadUsersDocument, variables: variables }
    }
export const MessageListDocument = gql`
    subscription MessageList($messageThreadId: uuid!) {
  message(where: {threadId: {_eq: $messageThreadId}}, order_by: {createdAt: asc}) {
    id
    threadId
    content
    createdAt
    sender {
      ...MessageUser
    }
  }
}
    ${MessageUserFragmentDoc}`;

/**
 * __useMessageListSubscription__
 *
 * To run a query within a React component, call `useMessageListSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessageListSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageListSubscription({
 *   variables: {
 *      messageThreadId: // value for 'messageThreadId'
 *   },
 * });
 */
export function useMessageListSubscription(baseOptions: ApolloReactHooks.SubscriptionHookOptions<TMessageListSubscription, TMessageListSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useSubscription<TMessageListSubscription, TMessageListSubscriptionVariables>(MessageListDocument, options);
      }
export type MessageListSubscriptionHookResult = ReturnType<typeof useMessageListSubscription>;
export type MessageListSubscriptionResult = Apollo.SubscriptionResult<TMessageListSubscription>;
export const GetUserNotificationsDocument = gql`
    query GetUserNotifications($userId: uuid!) {
  user_notifications(where: {userId: {_eq: $userId}}, order_by: {createdAt: desc}) {
    ...NotificationFields
  }
}
    ${NotificationFieldsFragmentDoc}`;

/**
 * __useGetUserNotificationsQuery__
 *
 * To run a query within a React component, call `useGetUserNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserNotificationsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserNotificationsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TGetUserNotificationsQuery, TGetUserNotificationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TGetUserNotificationsQuery, TGetUserNotificationsQueryVariables>(GetUserNotificationsDocument, options);
      }
export function useGetUserNotificationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TGetUserNotificationsQuery, TGetUserNotificationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TGetUserNotificationsQuery, TGetUserNotificationsQueryVariables>(GetUserNotificationsDocument, options);
        }
export type GetUserNotificationsQueryHookResult = ReturnType<typeof useGetUserNotificationsQuery>;
export type GetUserNotificationsLazyQueryHookResult = ReturnType<typeof useGetUserNotificationsLazyQuery>;
export type GetUserNotificationsQueryResult = Apollo.QueryResult<TGetUserNotificationsQuery, TGetUserNotificationsQueryVariables>;
export function refetchGetUserNotificationsQuery(variables: TGetUserNotificationsQueryVariables) {
      return { query: GetUserNotificationsDocument, variables: variables }
    }
export const NewWithdrawalRequestDocument = gql`
    mutation NewWithdrawalRequest($amount: money!, $email: citext!) {
  insert_withdrawal_requests_one(object: {amount: $amount, email: $email}) {
    amount
  }
}
    `;
export type TNewWithdrawalRequestMutationFn = Apollo.MutationFunction<TNewWithdrawalRequestMutation, TNewWithdrawalRequestMutationVariables>;

/**
 * __useNewWithdrawalRequestMutation__
 *
 * To run a mutation, you first call `useNewWithdrawalRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewWithdrawalRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newWithdrawalRequestMutation, { data, loading, error }] = useNewWithdrawalRequestMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useNewWithdrawalRequestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TNewWithdrawalRequestMutation, TNewWithdrawalRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TNewWithdrawalRequestMutation, TNewWithdrawalRequestMutationVariables>(NewWithdrawalRequestDocument, options);
      }
export type NewWithdrawalRequestMutationHookResult = ReturnType<typeof useNewWithdrawalRequestMutation>;
export type NewWithdrawalRequestMutationResult = Apollo.MutationResult<TNewWithdrawalRequestMutation>;
export type NewWithdrawalRequestMutationOptions = Apollo.BaseMutationOptions<TNewWithdrawalRequestMutation, TNewWithdrawalRequestMutationVariables>;
export const CreateReportDocument = gql`
    mutation CreateReport($report: report_insert_input!) {
  insert_report_one(object: $report) {
    id
  }
}
    `;
export type TCreateReportMutationFn = Apollo.MutationFunction<TCreateReportMutation, TCreateReportMutationVariables>;

/**
 * __useCreateReportMutation__
 *
 * To run a mutation, you first call `useCreateReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReportMutation, { data, loading, error }] = useCreateReportMutation({
 *   variables: {
 *      report: // value for 'report'
 *   },
 * });
 */
export function useCreateReportMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TCreateReportMutation, TCreateReportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TCreateReportMutation, TCreateReportMutationVariables>(CreateReportDocument, options);
      }
export type CreateReportMutationHookResult = ReturnType<typeof useCreateReportMutation>;
export type CreateReportMutationResult = Apollo.MutationResult<TCreateReportMutation>;
export type CreateReportMutationOptions = Apollo.BaseMutationOptions<TCreateReportMutation, TCreateReportMutationVariables>;
export const UserSocialsDocument = gql`
    query UserSocials($id: uuid!) {
  profile: user_profile_by_pk(id: $id) {
    linkedin
    twitter
    website
  }
}
    `;

/**
 * __useUserSocialsQuery__
 *
 * To run a query within a React component, call `useUserSocialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserSocialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserSocialsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserSocialsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TUserSocialsQuery, TUserSocialsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TUserSocialsQuery, TUserSocialsQueryVariables>(UserSocialsDocument, options);
      }
export function useUserSocialsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TUserSocialsQuery, TUserSocialsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TUserSocialsQuery, TUserSocialsQueryVariables>(UserSocialsDocument, options);
        }
export type UserSocialsQueryHookResult = ReturnType<typeof useUserSocialsQuery>;
export type UserSocialsLazyQueryHookResult = ReturnType<typeof useUserSocialsLazyQuery>;
export type UserSocialsQueryResult = Apollo.QueryResult<TUserSocialsQuery, TUserSocialsQueryVariables>;
export function refetchUserSocialsQuery(variables: TUserSocialsQueryVariables) {
      return { query: UserSocialsDocument, variables: variables }
    }
export const UserProfileDetailsDocument = gql`
    query UserProfileDetails($userId: uuid!) {
  user(id: $userId) {
    displayName
    avatarUrl
    createdAt
    lastSeen
    address {
      location
      country
    }
    profile {
      availability
      background
      status
      startups
      businessDescription
      specialistIndustry
      statement
      skills
      objective
      pronouns
      customPronouns
    }
  }
}
    `;

/**
 * __useUserProfileDetailsQuery__
 *
 * To run a query within a React component, call `useUserProfileDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfileDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfileDetailsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserProfileDetailsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TUserProfileDetailsQuery, TUserProfileDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TUserProfileDetailsQuery, TUserProfileDetailsQueryVariables>(UserProfileDetailsDocument, options);
      }
export function useUserProfileDetailsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TUserProfileDetailsQuery, TUserProfileDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TUserProfileDetailsQuery, TUserProfileDetailsQueryVariables>(UserProfileDetailsDocument, options);
        }
export type UserProfileDetailsQueryHookResult = ReturnType<typeof useUserProfileDetailsQuery>;
export type UserProfileDetailsLazyQueryHookResult = ReturnType<typeof useUserProfileDetailsLazyQuery>;
export type UserProfileDetailsQueryResult = Apollo.QueryResult<TUserProfileDetailsQuery, TUserProfileDetailsQueryVariables>;
export function refetchUserProfileDetailsQuery(variables: TUserProfileDetailsQueryVariables) {
      return { query: UserProfileDetailsDocument, variables: variables }
    }
export const UserDocument = gql`
    query User($userId: uuid!) {
  user(id: $userId) {
    ...UserFieldsWithEmail
    createdAt
    lastSeen
    profile {
      id
      pronouns
      customPronouns
      isComplete
      skills
    }
    esteemPointsCurrency {
      points
      currency
    }
    matchSettings {
      lookingFor
      type
      skills
    }
  }
}
    ${UserFieldsWithEmailFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TUserQuery, TUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TUserQuery, TUserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TUserQuery, TUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TUserQuery, TUserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<TUserQuery, TUserQueryVariables>;
export function refetchUserQuery(variables: TUserQueryVariables) {
      return { query: UserDocument, variables: variables }
    }
export const UsersDocument = gql`
    query Users($where: user_profile_bool_exp, $limit: Int, $offset: Int, $orderBy: [user_profile_order_by!]) {
  user_profile_aggregate(where: $where) {
    aggregate {
      count
    }
  }
  user_profile(where: $where, limit: $limit, offset: $offset, order_by: $orderBy) {
    id
    objective
    ...UserSearch
  }
}
    ${UserSearchFragmentDoc}`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TUsersQuery, TUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TUsersQuery, TUsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TUsersQuery, TUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TUsersQuery, TUsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<TUsersQuery, TUsersQueryVariables>;
export function refetchUsersQuery(variables?: TUsersQueryVariables) {
      return { query: UsersDocument, variables: variables }
    }
export const UpdateUserProfileDocument = gql`
    mutation UpdateUserProfile($id: uuid!, $user_profile: user_profile_set_input!) {
  update_user_profile_by_pk(pk_columns: {id: $id}, _set: $user_profile) {
    id
    availability
    objective
    background
    linkedin
    twitter
    instagram
    facebook
    resume
    statement
    status
    businessDescription
    startups
    website
    skills
    isComplete
    specialistIndustry
    updatedAt
  }
}
    `;
export type TUpdateUserProfileMutationFn = Apollo.MutationFunction<TUpdateUserProfileMutation, TUpdateUserProfileMutationVariables>;

/**
 * __useUpdateUserProfileMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileMutation, { data, loading, error }] = useUpdateUserProfileMutation({
 *   variables: {
 *      id: // value for 'id'
 *      user_profile: // value for 'user_profile'
 *   },
 * });
 */
export function useUpdateUserProfileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TUpdateUserProfileMutation, TUpdateUserProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TUpdateUserProfileMutation, TUpdateUserProfileMutationVariables>(UpdateUserProfileDocument, options);
      }
export type UpdateUserProfileMutationHookResult = ReturnType<typeof useUpdateUserProfileMutation>;
export type UpdateUserProfileMutationResult = Apollo.MutationResult<TUpdateUserProfileMutation>;
export type UpdateUserProfileMutationOptions = Apollo.BaseMutationOptions<TUpdateUserProfileMutation, TUpdateUserProfileMutationVariables>;
export const UserExperienceDocument = gql`
    query UserExperience($id: uuid!) {
  profile: user_profile_by_pk(id: $id) {
    id
    userId
    objective
    background
    statement
    startups
    status
    availability
    businessDescription
    specialistIndustry
    skills
    resume
    linkedin
    twitter
    instagram
    facebook
    website
    updatedAt
    isComplete
    pronouns
    customPronouns
  }
}
    `;

/**
 * __useUserExperienceQuery__
 *
 * To run a query within a React component, call `useUserExperienceQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserExperienceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserExperienceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserExperienceQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TUserExperienceQuery, TUserExperienceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TUserExperienceQuery, TUserExperienceQueryVariables>(UserExperienceDocument, options);
      }
export function useUserExperienceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TUserExperienceQuery, TUserExperienceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TUserExperienceQuery, TUserExperienceQueryVariables>(UserExperienceDocument, options);
        }
export type UserExperienceQueryHookResult = ReturnType<typeof useUserExperienceQuery>;
export type UserExperienceLazyQueryHookResult = ReturnType<typeof useUserExperienceLazyQuery>;
export type UserExperienceQueryResult = Apollo.QueryResult<TUserExperienceQuery, TUserExperienceQueryVariables>;
export function refetchUserExperienceQuery(variables: TUserExperienceQueryVariables) {
      return { query: UserExperienceDocument, variables: variables }
    }
export const UpdateUserExperienceDocument = gql`
    mutation UpdateUserExperience($id: uuid!, $userExperience: user_profile_set_input!) {
  update_user_profile_by_pk(pk_columns: {id: $id}, _set: $userExperience) {
    id
    userId
    background
    statement
    startups
    status
    skills
    availability
    resume
    businessDescription
    objective
  }
}
    `;
export type TUpdateUserExperienceMutationFn = Apollo.MutationFunction<TUpdateUserExperienceMutation, TUpdateUserExperienceMutationVariables>;

/**
 * __useUpdateUserExperienceMutation__
 *
 * To run a mutation, you first call `useUpdateUserExperienceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserExperienceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserExperienceMutation, { data, loading, error }] = useUpdateUserExperienceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      userExperience: // value for 'userExperience'
 *   },
 * });
 */
export function useUpdateUserExperienceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TUpdateUserExperienceMutation, TUpdateUserExperienceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TUpdateUserExperienceMutation, TUpdateUserExperienceMutationVariables>(UpdateUserExperienceDocument, options);
      }
export type UpdateUserExperienceMutationHookResult = ReturnType<typeof useUpdateUserExperienceMutation>;
export type UpdateUserExperienceMutationResult = Apollo.MutationResult<TUpdateUserExperienceMutation>;
export type UpdateUserExperienceMutationOptions = Apollo.BaseMutationOptions<TUpdateUserExperienceMutation, TUpdateUserExperienceMutationVariables>;
export const UpdateResumeDocument = gql`
    mutation UpdateResume($id: uuid!, $resume: user_profile_set_input!) {
  update_user_profile_by_pk(pk_columns: {id: $id}, _set: $resume) {
    id
    resume
  }
}
    `;
export type TUpdateResumeMutationFn = Apollo.MutationFunction<TUpdateResumeMutation, TUpdateResumeMutationVariables>;

/**
 * __useUpdateResumeMutation__
 *
 * To run a mutation, you first call `useUpdateResumeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateResumeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateResumeMutation, { data, loading, error }] = useUpdateResumeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      resume: // value for 'resume'
 *   },
 * });
 */
export function useUpdateResumeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TUpdateResumeMutation, TUpdateResumeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TUpdateResumeMutation, TUpdateResumeMutationVariables>(UpdateResumeDocument, options);
      }
export type UpdateResumeMutationHookResult = ReturnType<typeof useUpdateResumeMutation>;
export type UpdateResumeMutationResult = Apollo.MutationResult<TUpdateResumeMutation>;
export type UpdateResumeMutationOptions = Apollo.BaseMutationOptions<TUpdateResumeMutation, TUpdateResumeMutationVariables>;
export const UpdateUserPersonalDetailsDocument = gql`
    mutation UpdateUserPersonalDetails($id: uuid!, $profileId: uuid!, $userPersonalDetails: users_set_input!, $userAddress: user_address_set_input!, $userProfile: user_profile_set_input!) {
  updateUser(pk_columns: {id: $id}, _set: $userPersonalDetails) {
    displayName
  }
  updateUserProfile: update_user_profile_by_pk(
    pk_columns: {id: $profileId}
    _set: $userProfile
  ) {
    id
    pronouns
    customPronouns
  }
  updateUserAddress: update_user_address_by_pk(
    pk_columns: {userId: $id}
    _set: $userAddress
  ) {
    country
    location
  }
}
    `;
export type TUpdateUserPersonalDetailsMutationFn = Apollo.MutationFunction<TUpdateUserPersonalDetailsMutation, TUpdateUserPersonalDetailsMutationVariables>;

/**
 * __useUpdateUserPersonalDetailsMutation__
 *
 * To run a mutation, you first call `useUpdateUserPersonalDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserPersonalDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserPersonalDetailsMutation, { data, loading, error }] = useUpdateUserPersonalDetailsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      profileId: // value for 'profileId'
 *      userPersonalDetails: // value for 'userPersonalDetails'
 *      userAddress: // value for 'userAddress'
 *      userProfile: // value for 'userProfile'
 *   },
 * });
 */
export function useUpdateUserPersonalDetailsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TUpdateUserPersonalDetailsMutation, TUpdateUserPersonalDetailsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TUpdateUserPersonalDetailsMutation, TUpdateUserPersonalDetailsMutationVariables>(UpdateUserPersonalDetailsDocument, options);
      }
export type UpdateUserPersonalDetailsMutationHookResult = ReturnType<typeof useUpdateUserPersonalDetailsMutation>;
export type UpdateUserPersonalDetailsMutationResult = Apollo.MutationResult<TUpdateUserPersonalDetailsMutation>;
export type UpdateUserPersonalDetailsMutationOptions = Apollo.BaseMutationOptions<TUpdateUserPersonalDetailsMutation, TUpdateUserPersonalDetailsMutationVariables>;
export const UpdateUserAvatarDocument = gql`
    mutation UpdateUserAvatar($id: uuid!, $userDetails: users_set_input!) {
  user: updateUser(pk_columns: {id: $id}, _set: $userDetails) {
    avatarUrl
  }
}
    `;
export type TUpdateUserAvatarMutationFn = Apollo.MutationFunction<TUpdateUserAvatarMutation, TUpdateUserAvatarMutationVariables>;

/**
 * __useUpdateUserAvatarMutation__
 *
 * To run a mutation, you first call `useUpdateUserAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserAvatarMutation, { data, loading, error }] = useUpdateUserAvatarMutation({
 *   variables: {
 *      id: // value for 'id'
 *      userDetails: // value for 'userDetails'
 *   },
 * });
 */
export function useUpdateUserAvatarMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TUpdateUserAvatarMutation, TUpdateUserAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TUpdateUserAvatarMutation, TUpdateUserAvatarMutationVariables>(UpdateUserAvatarDocument, options);
      }
export type UpdateUserAvatarMutationHookResult = ReturnType<typeof useUpdateUserAvatarMutation>;
export type UpdateUserAvatarMutationResult = Apollo.MutationResult<TUpdateUserAvatarMutation>;
export type UpdateUserAvatarMutationOptions = Apollo.BaseMutationOptions<TUpdateUserAvatarMutation, TUpdateUserAvatarMutationVariables>;
export const UserCurrencyDocument = gql`
    subscription UserCurrency($userId: uuid!) {
  currencyPoints: user_esteem_points_currency_by_pk(userId: $userId) {
    currency
    points
  }
}
    `;

/**
 * __useUserCurrencySubscription__
 *
 * To run a query within a React component, call `useUserCurrencySubscription` and pass it any options that fit your needs.
 * When your component renders, `useUserCurrencySubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCurrencySubscription({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserCurrencySubscription(baseOptions: ApolloReactHooks.SubscriptionHookOptions<TUserCurrencySubscription, TUserCurrencySubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useSubscription<TUserCurrencySubscription, TUserCurrencySubscriptionVariables>(UserCurrencyDocument, options);
      }
export type UserCurrencySubscriptionHookResult = ReturnType<typeof useUserCurrencySubscription>;
export type UserCurrencySubscriptionResult = Apollo.SubscriptionResult<TUserCurrencySubscription>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type TResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Boolean_comparison_exp: TBoolean_Comparison_Exp;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int_comparison_exp: TInt_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars['String']>;
  String_comparison_exp: TString_Comparison_Exp;
  activity: ResolverTypeWrapper<TActivity>;
  activity_aggregate: ResolverTypeWrapper<TActivity_Aggregate>;
  activity_aggregate_fields: ResolverTypeWrapper<TActivity_Aggregate_Fields>;
  activity_bool_exp: TActivity_Bool_Exp;
  activity_constraint: TActivity_Constraint;
  activity_insert_input: TActivity_Insert_Input;
  activity_max_fields: ResolverTypeWrapper<TActivity_Max_Fields>;
  activity_min_fields: ResolverTypeWrapper<TActivity_Min_Fields>;
  activity_mutation_response: ResolverTypeWrapper<TActivity_Mutation_Response>;
  activity_on_conflict: TActivity_On_Conflict;
  activity_order_by: TActivity_Order_By;
  activity_pk_columns_input: TActivity_Pk_Columns_Input;
  activity_select_column: TActivity_Select_Column;
  activity_set_input: TActivity_Set_Input;
  activity_stream_cursor_input: TActivity_Stream_Cursor_Input;
  activity_stream_cursor_value_input: TActivity_Stream_Cursor_Value_Input;
  activity_update_column: TActivity_Update_Column;
  activity_updates: TActivity_Updates;
  authProviderRequests: ResolverTypeWrapper<TAuthProviderRequests>;
  authProviderRequests_aggregate: ResolverTypeWrapper<TAuthProviderRequests_Aggregate>;
  authProviderRequests_aggregate_fields: ResolverTypeWrapper<TAuthProviderRequests_Aggregate_Fields>;
  authProviderRequests_append_input: TAuthProviderRequests_Append_Input;
  authProviderRequests_bool_exp: TAuthProviderRequests_Bool_Exp;
  authProviderRequests_constraint: TAuthProviderRequests_Constraint;
  authProviderRequests_delete_at_path_input: TAuthProviderRequests_Delete_At_Path_Input;
  authProviderRequests_delete_elem_input: TAuthProviderRequests_Delete_Elem_Input;
  authProviderRequests_delete_key_input: TAuthProviderRequests_Delete_Key_Input;
  authProviderRequests_insert_input: TAuthProviderRequests_Insert_Input;
  authProviderRequests_max_fields: ResolverTypeWrapper<TAuthProviderRequests_Max_Fields>;
  authProviderRequests_min_fields: ResolverTypeWrapper<TAuthProviderRequests_Min_Fields>;
  authProviderRequests_mutation_response: ResolverTypeWrapper<TAuthProviderRequests_Mutation_Response>;
  authProviderRequests_on_conflict: TAuthProviderRequests_On_Conflict;
  authProviderRequests_order_by: TAuthProviderRequests_Order_By;
  authProviderRequests_pk_columns_input: TAuthProviderRequests_Pk_Columns_Input;
  authProviderRequests_prepend_input: TAuthProviderRequests_Prepend_Input;
  authProviderRequests_select_column: TAuthProviderRequests_Select_Column;
  authProviderRequests_set_input: TAuthProviderRequests_Set_Input;
  authProviderRequests_stream_cursor_input: TAuthProviderRequests_Stream_Cursor_Input;
  authProviderRequests_stream_cursor_value_input: TAuthProviderRequests_Stream_Cursor_Value_Input;
  authProviderRequests_update_column: TAuthProviderRequests_Update_Column;
  authProviderRequests_updates: TAuthProviderRequests_Updates;
  authProviders: ResolverTypeWrapper<TAuthProviders>;
  authProviders_aggregate: ResolverTypeWrapper<TAuthProviders_Aggregate>;
  authProviders_aggregate_fields: ResolverTypeWrapper<TAuthProviders_Aggregate_Fields>;
  authProviders_bool_exp: TAuthProviders_Bool_Exp;
  authProviders_constraint: TAuthProviders_Constraint;
  authProviders_insert_input: TAuthProviders_Insert_Input;
  authProviders_max_fields: ResolverTypeWrapper<TAuthProviders_Max_Fields>;
  authProviders_min_fields: ResolverTypeWrapper<TAuthProviders_Min_Fields>;
  authProviders_mutation_response: ResolverTypeWrapper<TAuthProviders_Mutation_Response>;
  authProviders_obj_rel_insert_input: TAuthProviders_Obj_Rel_Insert_Input;
  authProviders_on_conflict: TAuthProviders_On_Conflict;
  authProviders_order_by: TAuthProviders_Order_By;
  authProviders_pk_columns_input: TAuthProviders_Pk_Columns_Input;
  authProviders_select_column: TAuthProviders_Select_Column;
  authProviders_set_input: TAuthProviders_Set_Input;
  authProviders_stream_cursor_input: TAuthProviders_Stream_Cursor_Input;
  authProviders_stream_cursor_value_input: TAuthProviders_Stream_Cursor_Value_Input;
  authProviders_update_column: TAuthProviders_Update_Column;
  authProviders_updates: TAuthProviders_Updates;
  authRefreshTokens: ResolverTypeWrapper<TAuthRefreshTokens>;
  authRefreshTokens_aggregate: ResolverTypeWrapper<TAuthRefreshTokens_Aggregate>;
  authRefreshTokens_aggregate_bool_exp: TAuthRefreshTokens_Aggregate_Bool_Exp;
  authRefreshTokens_aggregate_bool_exp_count: TAuthRefreshTokens_Aggregate_Bool_Exp_Count;
  authRefreshTokens_aggregate_fields: ResolverTypeWrapper<TAuthRefreshTokens_Aggregate_Fields>;
  authRefreshTokens_aggregate_order_by: TAuthRefreshTokens_Aggregate_Order_By;
  authRefreshTokens_arr_rel_insert_input: TAuthRefreshTokens_Arr_Rel_Insert_Input;
  authRefreshTokens_bool_exp: TAuthRefreshTokens_Bool_Exp;
  authRefreshTokens_constraint: TAuthRefreshTokens_Constraint;
  authRefreshTokens_insert_input: TAuthRefreshTokens_Insert_Input;
  authRefreshTokens_max_fields: ResolverTypeWrapper<TAuthRefreshTokens_Max_Fields>;
  authRefreshTokens_max_order_by: TAuthRefreshTokens_Max_Order_By;
  authRefreshTokens_min_fields: ResolverTypeWrapper<TAuthRefreshTokens_Min_Fields>;
  authRefreshTokens_min_order_by: TAuthRefreshTokens_Min_Order_By;
  authRefreshTokens_mutation_response: ResolverTypeWrapper<TAuthRefreshTokens_Mutation_Response>;
  authRefreshTokens_on_conflict: TAuthRefreshTokens_On_Conflict;
  authRefreshTokens_order_by: TAuthRefreshTokens_Order_By;
  authRefreshTokens_pk_columns_input: TAuthRefreshTokens_Pk_Columns_Input;
  authRefreshTokens_select_column: TAuthRefreshTokens_Select_Column;
  authRefreshTokens_set_input: TAuthRefreshTokens_Set_Input;
  authRefreshTokens_stream_cursor_input: TAuthRefreshTokens_Stream_Cursor_Input;
  authRefreshTokens_stream_cursor_value_input: TAuthRefreshTokens_Stream_Cursor_Value_Input;
  authRefreshTokens_update_column: TAuthRefreshTokens_Update_Column;
  authRefreshTokens_updates: TAuthRefreshTokens_Updates;
  authRoles: ResolverTypeWrapper<TAuthRoles>;
  authRoles_aggregate: ResolverTypeWrapper<TAuthRoles_Aggregate>;
  authRoles_aggregate_fields: ResolverTypeWrapper<TAuthRoles_Aggregate_Fields>;
  authRoles_bool_exp: TAuthRoles_Bool_Exp;
  authRoles_constraint: TAuthRoles_Constraint;
  authRoles_insert_input: TAuthRoles_Insert_Input;
  authRoles_max_fields: ResolverTypeWrapper<TAuthRoles_Max_Fields>;
  authRoles_min_fields: ResolverTypeWrapper<TAuthRoles_Min_Fields>;
  authRoles_mutation_response: ResolverTypeWrapper<TAuthRoles_Mutation_Response>;
  authRoles_obj_rel_insert_input: TAuthRoles_Obj_Rel_Insert_Input;
  authRoles_on_conflict: TAuthRoles_On_Conflict;
  authRoles_order_by: TAuthRoles_Order_By;
  authRoles_pk_columns_input: TAuthRoles_Pk_Columns_Input;
  authRoles_select_column: TAuthRoles_Select_Column;
  authRoles_set_input: TAuthRoles_Set_Input;
  authRoles_stream_cursor_input: TAuthRoles_Stream_Cursor_Input;
  authRoles_stream_cursor_value_input: TAuthRoles_Stream_Cursor_Value_Input;
  authRoles_update_column: TAuthRoles_Update_Column;
  authRoles_updates: TAuthRoles_Updates;
  authUserProviders: ResolverTypeWrapper<TAuthUserProviders>;
  authUserProviders_aggregate: ResolverTypeWrapper<TAuthUserProviders_Aggregate>;
  authUserProviders_aggregate_bool_exp: TAuthUserProviders_Aggregate_Bool_Exp;
  authUserProviders_aggregate_bool_exp_count: TAuthUserProviders_Aggregate_Bool_Exp_Count;
  authUserProviders_aggregate_fields: ResolverTypeWrapper<TAuthUserProviders_Aggregate_Fields>;
  authUserProviders_aggregate_order_by: TAuthUserProviders_Aggregate_Order_By;
  authUserProviders_arr_rel_insert_input: TAuthUserProviders_Arr_Rel_Insert_Input;
  authUserProviders_bool_exp: TAuthUserProviders_Bool_Exp;
  authUserProviders_constraint: TAuthUserProviders_Constraint;
  authUserProviders_insert_input: TAuthUserProviders_Insert_Input;
  authUserProviders_max_fields: ResolverTypeWrapper<TAuthUserProviders_Max_Fields>;
  authUserProviders_max_order_by: TAuthUserProviders_Max_Order_By;
  authUserProviders_min_fields: ResolverTypeWrapper<TAuthUserProviders_Min_Fields>;
  authUserProviders_min_order_by: TAuthUserProviders_Min_Order_By;
  authUserProviders_mutation_response: ResolverTypeWrapper<TAuthUserProviders_Mutation_Response>;
  authUserProviders_on_conflict: TAuthUserProviders_On_Conflict;
  authUserProviders_order_by: TAuthUserProviders_Order_By;
  authUserProviders_pk_columns_input: TAuthUserProviders_Pk_Columns_Input;
  authUserProviders_select_column: TAuthUserProviders_Select_Column;
  authUserProviders_set_input: TAuthUserProviders_Set_Input;
  authUserProviders_stream_cursor_input: TAuthUserProviders_Stream_Cursor_Input;
  authUserProviders_stream_cursor_value_input: TAuthUserProviders_Stream_Cursor_Value_Input;
  authUserProviders_update_column: TAuthUserProviders_Update_Column;
  authUserProviders_updates: TAuthUserProviders_Updates;
  authUserRoles: ResolverTypeWrapper<TAuthUserRoles>;
  authUserRoles_aggregate: ResolverTypeWrapper<TAuthUserRoles_Aggregate>;
  authUserRoles_aggregate_bool_exp: TAuthUserRoles_Aggregate_Bool_Exp;
  authUserRoles_aggregate_bool_exp_count: TAuthUserRoles_Aggregate_Bool_Exp_Count;
  authUserRoles_aggregate_fields: ResolverTypeWrapper<TAuthUserRoles_Aggregate_Fields>;
  authUserRoles_aggregate_order_by: TAuthUserRoles_Aggregate_Order_By;
  authUserRoles_arr_rel_insert_input: TAuthUserRoles_Arr_Rel_Insert_Input;
  authUserRoles_bool_exp: TAuthUserRoles_Bool_Exp;
  authUserRoles_constraint: TAuthUserRoles_Constraint;
  authUserRoles_insert_input: TAuthUserRoles_Insert_Input;
  authUserRoles_max_fields: ResolverTypeWrapper<TAuthUserRoles_Max_Fields>;
  authUserRoles_max_order_by: TAuthUserRoles_Max_Order_By;
  authUserRoles_min_fields: ResolverTypeWrapper<TAuthUserRoles_Min_Fields>;
  authUserRoles_min_order_by: TAuthUserRoles_Min_Order_By;
  authUserRoles_mutation_response: ResolverTypeWrapper<TAuthUserRoles_Mutation_Response>;
  authUserRoles_on_conflict: TAuthUserRoles_On_Conflict;
  authUserRoles_order_by: TAuthUserRoles_Order_By;
  authUserRoles_pk_columns_input: TAuthUserRoles_Pk_Columns_Input;
  authUserRoles_select_column: TAuthUserRoles_Select_Column;
  authUserRoles_set_input: TAuthUserRoles_Set_Input;
  authUserRoles_stream_cursor_input: TAuthUserRoles_Stream_Cursor_Input;
  authUserRoles_stream_cursor_value_input: TAuthUserRoles_Stream_Cursor_Value_Input;
  authUserRoles_update_column: TAuthUserRoles_Update_Column;
  authUserRoles_updates: TAuthUserRoles_Updates;
  authUserSecurityKeys: ResolverTypeWrapper<TAuthUserSecurityKeys>;
  authUserSecurityKeys_aggregate: ResolverTypeWrapper<TAuthUserSecurityKeys_Aggregate>;
  authUserSecurityKeys_aggregate_bool_exp: TAuthUserSecurityKeys_Aggregate_Bool_Exp;
  authUserSecurityKeys_aggregate_bool_exp_count: TAuthUserSecurityKeys_Aggregate_Bool_Exp_Count;
  authUserSecurityKeys_aggregate_fields: ResolverTypeWrapper<TAuthUserSecurityKeys_Aggregate_Fields>;
  authUserSecurityKeys_aggregate_order_by: TAuthUserSecurityKeys_Aggregate_Order_By;
  authUserSecurityKeys_arr_rel_insert_input: TAuthUserSecurityKeys_Arr_Rel_Insert_Input;
  authUserSecurityKeys_avg_fields: ResolverTypeWrapper<TAuthUserSecurityKeys_Avg_Fields>;
  authUserSecurityKeys_avg_order_by: TAuthUserSecurityKeys_Avg_Order_By;
  authUserSecurityKeys_bool_exp: TAuthUserSecurityKeys_Bool_Exp;
  authUserSecurityKeys_constraint: TAuthUserSecurityKeys_Constraint;
  authUserSecurityKeys_inc_input: TAuthUserSecurityKeys_Inc_Input;
  authUserSecurityKeys_insert_input: TAuthUserSecurityKeys_Insert_Input;
  authUserSecurityKeys_max_fields: ResolverTypeWrapper<TAuthUserSecurityKeys_Max_Fields>;
  authUserSecurityKeys_max_order_by: TAuthUserSecurityKeys_Max_Order_By;
  authUserSecurityKeys_min_fields: ResolverTypeWrapper<TAuthUserSecurityKeys_Min_Fields>;
  authUserSecurityKeys_min_order_by: TAuthUserSecurityKeys_Min_Order_By;
  authUserSecurityKeys_mutation_response: ResolverTypeWrapper<TAuthUserSecurityKeys_Mutation_Response>;
  authUserSecurityKeys_on_conflict: TAuthUserSecurityKeys_On_Conflict;
  authUserSecurityKeys_order_by: TAuthUserSecurityKeys_Order_By;
  authUserSecurityKeys_pk_columns_input: TAuthUserSecurityKeys_Pk_Columns_Input;
  authUserSecurityKeys_select_column: TAuthUserSecurityKeys_Select_Column;
  authUserSecurityKeys_set_input: TAuthUserSecurityKeys_Set_Input;
  authUserSecurityKeys_stddev_fields: ResolverTypeWrapper<TAuthUserSecurityKeys_Stddev_Fields>;
  authUserSecurityKeys_stddev_order_by: TAuthUserSecurityKeys_Stddev_Order_By;
  authUserSecurityKeys_stddev_pop_fields: ResolverTypeWrapper<TAuthUserSecurityKeys_Stddev_Pop_Fields>;
  authUserSecurityKeys_stddev_pop_order_by: TAuthUserSecurityKeys_Stddev_Pop_Order_By;
  authUserSecurityKeys_stddev_samp_fields: ResolverTypeWrapper<TAuthUserSecurityKeys_Stddev_Samp_Fields>;
  authUserSecurityKeys_stddev_samp_order_by: TAuthUserSecurityKeys_Stddev_Samp_Order_By;
  authUserSecurityKeys_stream_cursor_input: TAuthUserSecurityKeys_Stream_Cursor_Input;
  authUserSecurityKeys_stream_cursor_value_input: TAuthUserSecurityKeys_Stream_Cursor_Value_Input;
  authUserSecurityKeys_sum_fields: ResolverTypeWrapper<TAuthUserSecurityKeys_Sum_Fields>;
  authUserSecurityKeys_sum_order_by: TAuthUserSecurityKeys_Sum_Order_By;
  authUserSecurityKeys_update_column: TAuthUserSecurityKeys_Update_Column;
  authUserSecurityKeys_updates: TAuthUserSecurityKeys_Updates;
  authUserSecurityKeys_var_pop_fields: ResolverTypeWrapper<TAuthUserSecurityKeys_Var_Pop_Fields>;
  authUserSecurityKeys_var_pop_order_by: TAuthUserSecurityKeys_Var_Pop_Order_By;
  authUserSecurityKeys_var_samp_fields: ResolverTypeWrapper<TAuthUserSecurityKeys_Var_Samp_Fields>;
  authUserSecurityKeys_var_samp_order_by: TAuthUserSecurityKeys_Var_Samp_Order_By;
  authUserSecurityKeys_variance_fields: ResolverTypeWrapper<TAuthUserSecurityKeys_Variance_Fields>;
  authUserSecurityKeys_variance_order_by: TAuthUserSecurityKeys_Variance_Order_By;
  bigint: ResolverTypeWrapper<Scalars['bigint']>;
  bigint_comparison_exp: TBigint_Comparison_Exp;
  boosted_idea_log: ResolverTypeWrapper<TBoosted_Idea_Log>;
  boosted_idea_log_aggregate: ResolverTypeWrapper<TBoosted_Idea_Log_Aggregate>;
  boosted_idea_log_aggregate_fields: ResolverTypeWrapper<TBoosted_Idea_Log_Aggregate_Fields>;
  boosted_idea_log_bool_exp: TBoosted_Idea_Log_Bool_Exp;
  boosted_idea_log_constraint: TBoosted_Idea_Log_Constraint;
  boosted_idea_log_insert_input: TBoosted_Idea_Log_Insert_Input;
  boosted_idea_log_max_fields: ResolverTypeWrapper<TBoosted_Idea_Log_Max_Fields>;
  boosted_idea_log_min_fields: ResolverTypeWrapper<TBoosted_Idea_Log_Min_Fields>;
  boosted_idea_log_mutation_response: ResolverTypeWrapper<TBoosted_Idea_Log_Mutation_Response>;
  boosted_idea_log_on_conflict: TBoosted_Idea_Log_On_Conflict;
  boosted_idea_log_order_by: TBoosted_Idea_Log_Order_By;
  boosted_idea_log_pk_columns_input: TBoosted_Idea_Log_Pk_Columns_Input;
  boosted_idea_log_select_column: TBoosted_Idea_Log_Select_Column;
  boosted_idea_log_set_input: TBoosted_Idea_Log_Set_Input;
  boosted_idea_log_stream_cursor_input: TBoosted_Idea_Log_Stream_Cursor_Input;
  boosted_idea_log_stream_cursor_value_input: TBoosted_Idea_Log_Stream_Cursor_Value_Input;
  boosted_idea_log_update_column: TBoosted_Idea_Log_Update_Column;
  boosted_idea_log_updates: TBoosted_Idea_Log_Updates;
  boosted_ideas: ResolverTypeWrapper<TBoosted_Ideas>;
  boosted_ideas_aggregate: ResolverTypeWrapper<TBoosted_Ideas_Aggregate>;
  boosted_ideas_aggregate_fields: ResolverTypeWrapper<TBoosted_Ideas_Aggregate_Fields>;
  boosted_ideas_avg_fields: ResolverTypeWrapper<TBoosted_Ideas_Avg_Fields>;
  boosted_ideas_bool_exp: TBoosted_Ideas_Bool_Exp;
  boosted_ideas_constraint: TBoosted_Ideas_Constraint;
  boosted_ideas_inc_input: TBoosted_Ideas_Inc_Input;
  boosted_ideas_insert_input: TBoosted_Ideas_Insert_Input;
  boosted_ideas_max_fields: ResolverTypeWrapper<TBoosted_Ideas_Max_Fields>;
  boosted_ideas_min_fields: ResolverTypeWrapper<TBoosted_Ideas_Min_Fields>;
  boosted_ideas_mutation_response: ResolverTypeWrapper<TBoosted_Ideas_Mutation_Response>;
  boosted_ideas_obj_rel_insert_input: TBoosted_Ideas_Obj_Rel_Insert_Input;
  boosted_ideas_on_conflict: TBoosted_Ideas_On_Conflict;
  boosted_ideas_order_by: TBoosted_Ideas_Order_By;
  boosted_ideas_pk_columns_input: TBoosted_Ideas_Pk_Columns_Input;
  boosted_ideas_select_column: TBoosted_Ideas_Select_Column;
  boosted_ideas_set_input: TBoosted_Ideas_Set_Input;
  boosted_ideas_stddev_fields: ResolverTypeWrapper<TBoosted_Ideas_Stddev_Fields>;
  boosted_ideas_stddev_pop_fields: ResolverTypeWrapper<TBoosted_Ideas_Stddev_Pop_Fields>;
  boosted_ideas_stddev_samp_fields: ResolverTypeWrapper<TBoosted_Ideas_Stddev_Samp_Fields>;
  boosted_ideas_stream_cursor_input: TBoosted_Ideas_Stream_Cursor_Input;
  boosted_ideas_stream_cursor_value_input: TBoosted_Ideas_Stream_Cursor_Value_Input;
  boosted_ideas_sum_fields: ResolverTypeWrapper<TBoosted_Ideas_Sum_Fields>;
  boosted_ideas_update_column: TBoosted_Ideas_Update_Column;
  boosted_ideas_updates: TBoosted_Ideas_Updates;
  boosted_ideas_var_pop_fields: ResolverTypeWrapper<TBoosted_Ideas_Var_Pop_Fields>;
  boosted_ideas_var_samp_fields: ResolverTypeWrapper<TBoosted_Ideas_Var_Samp_Fields>;
  boosted_ideas_variance_fields: ResolverTypeWrapper<TBoosted_Ideas_Variance_Fields>;
  buckets: ResolverTypeWrapper<TBuckets>;
  buckets_aggregate: ResolverTypeWrapper<TBuckets_Aggregate>;
  buckets_aggregate_fields: ResolverTypeWrapper<TBuckets_Aggregate_Fields>;
  buckets_avg_fields: ResolverTypeWrapper<TBuckets_Avg_Fields>;
  buckets_bool_exp: TBuckets_Bool_Exp;
  buckets_constraint: TBuckets_Constraint;
  buckets_inc_input: TBuckets_Inc_Input;
  buckets_insert_input: TBuckets_Insert_Input;
  buckets_max_fields: ResolverTypeWrapper<TBuckets_Max_Fields>;
  buckets_min_fields: ResolverTypeWrapper<TBuckets_Min_Fields>;
  buckets_mutation_response: ResolverTypeWrapper<TBuckets_Mutation_Response>;
  buckets_obj_rel_insert_input: TBuckets_Obj_Rel_Insert_Input;
  buckets_on_conflict: TBuckets_On_Conflict;
  buckets_order_by: TBuckets_Order_By;
  buckets_pk_columns_input: TBuckets_Pk_Columns_Input;
  buckets_select_column: TBuckets_Select_Column;
  buckets_set_input: TBuckets_Set_Input;
  buckets_stddev_fields: ResolverTypeWrapper<TBuckets_Stddev_Fields>;
  buckets_stddev_pop_fields: ResolverTypeWrapper<TBuckets_Stddev_Pop_Fields>;
  buckets_stddev_samp_fields: ResolverTypeWrapper<TBuckets_Stddev_Samp_Fields>;
  buckets_stream_cursor_input: TBuckets_Stream_Cursor_Input;
  buckets_stream_cursor_value_input: TBuckets_Stream_Cursor_Value_Input;
  buckets_sum_fields: ResolverTypeWrapper<TBuckets_Sum_Fields>;
  buckets_update_column: TBuckets_Update_Column;
  buckets_updates: TBuckets_Updates;
  buckets_var_pop_fields: ResolverTypeWrapper<TBuckets_Var_Pop_Fields>;
  buckets_var_samp_fields: ResolverTypeWrapper<TBuckets_Var_Samp_Fields>;
  buckets_variance_fields: ResolverTypeWrapper<TBuckets_Variance_Fields>;
  bytea: ResolverTypeWrapper<Scalars['bytea']>;
  bytea_comparison_exp: TBytea_Comparison_Exp;
  citext: ResolverTypeWrapper<Scalars['citext']>;
  citext_comparison_exp: TCitext_Comparison_Exp;
  comment_status_types: ResolverTypeWrapper<TComment_Status_Types>;
  comment_status_types_aggregate: ResolverTypeWrapper<TComment_Status_Types_Aggregate>;
  comment_status_types_aggregate_fields: ResolverTypeWrapper<TComment_Status_Types_Aggregate_Fields>;
  comment_status_types_bool_exp: TComment_Status_Types_Bool_Exp;
  comment_status_types_constraint: TComment_Status_Types_Constraint;
  comment_status_types_enum: TComment_Status_Types_Enum;
  comment_status_types_enum_comparison_exp: TComment_Status_Types_Enum_Comparison_Exp;
  comment_status_types_insert_input: TComment_Status_Types_Insert_Input;
  comment_status_types_max_fields: ResolverTypeWrapper<TComment_Status_Types_Max_Fields>;
  comment_status_types_min_fields: ResolverTypeWrapper<TComment_Status_Types_Min_Fields>;
  comment_status_types_mutation_response: ResolverTypeWrapper<TComment_Status_Types_Mutation_Response>;
  comment_status_types_on_conflict: TComment_Status_Types_On_Conflict;
  comment_status_types_order_by: TComment_Status_Types_Order_By;
  comment_status_types_pk_columns_input: TComment_Status_Types_Pk_Columns_Input;
  comment_status_types_select_column: TComment_Status_Types_Select_Column;
  comment_status_types_set_input: TComment_Status_Types_Set_Input;
  comment_status_types_stream_cursor_input: TComment_Status_Types_Stream_Cursor_Input;
  comment_status_types_stream_cursor_value_input: TComment_Status_Types_Stream_Cursor_Value_Input;
  comment_status_types_update_column: TComment_Status_Types_Update_Column;
  comment_status_types_updates: TComment_Status_Types_Updates;
  cursor_ordering: TCursor_Ordering;
  files: ResolverTypeWrapper<TFiles>;
  files_aggregate: ResolverTypeWrapper<TFiles_Aggregate>;
  files_aggregate_bool_exp: TFiles_Aggregate_Bool_Exp;
  files_aggregate_bool_exp_bool_and: TFiles_Aggregate_Bool_Exp_Bool_And;
  files_aggregate_bool_exp_bool_or: TFiles_Aggregate_Bool_Exp_Bool_Or;
  files_aggregate_bool_exp_count: TFiles_Aggregate_Bool_Exp_Count;
  files_aggregate_fields: ResolverTypeWrapper<TFiles_Aggregate_Fields>;
  files_aggregate_order_by: TFiles_Aggregate_Order_By;
  files_arr_rel_insert_input: TFiles_Arr_Rel_Insert_Input;
  files_avg_fields: ResolverTypeWrapper<TFiles_Avg_Fields>;
  files_avg_order_by: TFiles_Avg_Order_By;
  files_bool_exp: TFiles_Bool_Exp;
  files_constraint: TFiles_Constraint;
  files_inc_input: TFiles_Inc_Input;
  files_insert_input: TFiles_Insert_Input;
  files_max_fields: ResolverTypeWrapper<TFiles_Max_Fields>;
  files_max_order_by: TFiles_Max_Order_By;
  files_min_fields: ResolverTypeWrapper<TFiles_Min_Fields>;
  files_min_order_by: TFiles_Min_Order_By;
  files_mutation_response: ResolverTypeWrapper<TFiles_Mutation_Response>;
  files_on_conflict: TFiles_On_Conflict;
  files_order_by: TFiles_Order_By;
  files_pk_columns_input: TFiles_Pk_Columns_Input;
  files_select_column: TFiles_Select_Column;
  files_select_column_files_aggregate_bool_exp_bool_and_arguments_columns: TFiles_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  files_select_column_files_aggregate_bool_exp_bool_or_arguments_columns: TFiles_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  files_set_input: TFiles_Set_Input;
  files_stddev_fields: ResolverTypeWrapper<TFiles_Stddev_Fields>;
  files_stddev_order_by: TFiles_Stddev_Order_By;
  files_stddev_pop_fields: ResolverTypeWrapper<TFiles_Stddev_Pop_Fields>;
  files_stddev_pop_order_by: TFiles_Stddev_Pop_Order_By;
  files_stddev_samp_fields: ResolverTypeWrapper<TFiles_Stddev_Samp_Fields>;
  files_stddev_samp_order_by: TFiles_Stddev_Samp_Order_By;
  files_stream_cursor_input: TFiles_Stream_Cursor_Input;
  files_stream_cursor_value_input: TFiles_Stream_Cursor_Value_Input;
  files_sum_fields: ResolverTypeWrapper<TFiles_Sum_Fields>;
  files_sum_order_by: TFiles_Sum_Order_By;
  files_update_column: TFiles_Update_Column;
  files_updates: TFiles_Updates;
  files_var_pop_fields: ResolverTypeWrapper<TFiles_Var_Pop_Fields>;
  files_var_pop_order_by: TFiles_Var_Pop_Order_By;
  files_var_samp_fields: ResolverTypeWrapper<TFiles_Var_Samp_Fields>;
  files_var_samp_order_by: TFiles_Var_Samp_Order_By;
  files_variance_fields: ResolverTypeWrapper<TFiles_Variance_Fields>;
  files_variance_order_by: TFiles_Variance_Order_By;
  idea_comment_replies: ResolverTypeWrapper<TIdea_Comment_Replies>;
  idea_comment_replies_aggregate: ResolverTypeWrapper<TIdea_Comment_Replies_Aggregate>;
  idea_comment_replies_aggregate_bool_exp: TIdea_Comment_Replies_Aggregate_Bool_Exp;
  idea_comment_replies_aggregate_bool_exp_count: TIdea_Comment_Replies_Aggregate_Bool_Exp_Count;
  idea_comment_replies_aggregate_fields: ResolverTypeWrapper<TIdea_Comment_Replies_Aggregate_Fields>;
  idea_comment_replies_aggregate_order_by: TIdea_Comment_Replies_Aggregate_Order_By;
  idea_comment_replies_arr_rel_insert_input: TIdea_Comment_Replies_Arr_Rel_Insert_Input;
  idea_comment_replies_bool_exp: TIdea_Comment_Replies_Bool_Exp;
  idea_comment_replies_constraint: TIdea_Comment_Replies_Constraint;
  idea_comment_replies_insert_input: TIdea_Comment_Replies_Insert_Input;
  idea_comment_replies_max_fields: ResolverTypeWrapper<TIdea_Comment_Replies_Max_Fields>;
  idea_comment_replies_max_order_by: TIdea_Comment_Replies_Max_Order_By;
  idea_comment_replies_min_fields: ResolverTypeWrapper<TIdea_Comment_Replies_Min_Fields>;
  idea_comment_replies_min_order_by: TIdea_Comment_Replies_Min_Order_By;
  idea_comment_replies_mutation_response: ResolverTypeWrapper<TIdea_Comment_Replies_Mutation_Response>;
  idea_comment_replies_on_conflict: TIdea_Comment_Replies_On_Conflict;
  idea_comment_replies_order_by: TIdea_Comment_Replies_Order_By;
  idea_comment_replies_pk_columns_input: TIdea_Comment_Replies_Pk_Columns_Input;
  idea_comment_replies_select_column: TIdea_Comment_Replies_Select_Column;
  idea_comment_replies_set_input: TIdea_Comment_Replies_Set_Input;
  idea_comment_replies_stream_cursor_input: TIdea_Comment_Replies_Stream_Cursor_Input;
  idea_comment_replies_stream_cursor_value_input: TIdea_Comment_Replies_Stream_Cursor_Value_Input;
  idea_comment_replies_update_column: TIdea_Comment_Replies_Update_Column;
  idea_comment_replies_updates: TIdea_Comment_Replies_Updates;
  idea_comments: ResolverTypeWrapper<TIdea_Comments>;
  idea_comments_aggregate: ResolverTypeWrapper<TIdea_Comments_Aggregate>;
  idea_comments_aggregate_bool_exp: TIdea_Comments_Aggregate_Bool_Exp;
  idea_comments_aggregate_bool_exp_bool_and: TIdea_Comments_Aggregate_Bool_Exp_Bool_And;
  idea_comments_aggregate_bool_exp_bool_or: TIdea_Comments_Aggregate_Bool_Exp_Bool_Or;
  idea_comments_aggregate_bool_exp_count: TIdea_Comments_Aggregate_Bool_Exp_Count;
  idea_comments_aggregate_fields: ResolverTypeWrapper<TIdea_Comments_Aggregate_Fields>;
  idea_comments_aggregate_order_by: TIdea_Comments_Aggregate_Order_By;
  idea_comments_arr_rel_insert_input: TIdea_Comments_Arr_Rel_Insert_Input;
  idea_comments_avg_fields: ResolverTypeWrapper<TIdea_Comments_Avg_Fields>;
  idea_comments_avg_order_by: TIdea_Comments_Avg_Order_By;
  idea_comments_bool_exp: TIdea_Comments_Bool_Exp;
  idea_comments_constraint: TIdea_Comments_Constraint;
  idea_comments_inc_input: TIdea_Comments_Inc_Input;
  idea_comments_insert_input: TIdea_Comments_Insert_Input;
  idea_comments_max_fields: ResolverTypeWrapper<TIdea_Comments_Max_Fields>;
  idea_comments_max_order_by: TIdea_Comments_Max_Order_By;
  idea_comments_min_fields: ResolverTypeWrapper<TIdea_Comments_Min_Fields>;
  idea_comments_min_order_by: TIdea_Comments_Min_Order_By;
  idea_comments_mutation_response: ResolverTypeWrapper<TIdea_Comments_Mutation_Response>;
  idea_comments_obj_rel_insert_input: TIdea_Comments_Obj_Rel_Insert_Input;
  idea_comments_on_conflict: TIdea_Comments_On_Conflict;
  idea_comments_order_by: TIdea_Comments_Order_By;
  idea_comments_pk_columns_input: TIdea_Comments_Pk_Columns_Input;
  idea_comments_select_column: TIdea_Comments_Select_Column;
  idea_comments_select_column_idea_comments_aggregate_bool_exp_bool_and_arguments_columns: TIdea_Comments_Select_Column_Idea_Comments_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  idea_comments_select_column_idea_comments_aggregate_bool_exp_bool_or_arguments_columns: TIdea_Comments_Select_Column_Idea_Comments_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  idea_comments_set_input: TIdea_Comments_Set_Input;
  idea_comments_stddev_fields: ResolverTypeWrapper<TIdea_Comments_Stddev_Fields>;
  idea_comments_stddev_order_by: TIdea_Comments_Stddev_Order_By;
  idea_comments_stddev_pop_fields: ResolverTypeWrapper<TIdea_Comments_Stddev_Pop_Fields>;
  idea_comments_stddev_pop_order_by: TIdea_Comments_Stddev_Pop_Order_By;
  idea_comments_stddev_samp_fields: ResolverTypeWrapper<TIdea_Comments_Stddev_Samp_Fields>;
  idea_comments_stddev_samp_order_by: TIdea_Comments_Stddev_Samp_Order_By;
  idea_comments_stream_cursor_input: TIdea_Comments_Stream_Cursor_Input;
  idea_comments_stream_cursor_value_input: TIdea_Comments_Stream_Cursor_Value_Input;
  idea_comments_sum_fields: ResolverTypeWrapper<TIdea_Comments_Sum_Fields>;
  idea_comments_sum_order_by: TIdea_Comments_Sum_Order_By;
  idea_comments_update_column: TIdea_Comments_Update_Column;
  idea_comments_updates: TIdea_Comments_Updates;
  idea_comments_var_pop_fields: ResolverTypeWrapper<TIdea_Comments_Var_Pop_Fields>;
  idea_comments_var_pop_order_by: TIdea_Comments_Var_Pop_Order_By;
  idea_comments_var_samp_fields: ResolverTypeWrapper<TIdea_Comments_Var_Samp_Fields>;
  idea_comments_var_samp_order_by: TIdea_Comments_Var_Samp_Order_By;
  idea_comments_variance_fields: ResolverTypeWrapper<TIdea_Comments_Variance_Fields>;
  idea_comments_variance_order_by: TIdea_Comments_Variance_Order_By;
  idea_preview: ResolverTypeWrapper<TIdea_Preview>;
  idea_preview_aggregate: ResolverTypeWrapper<TIdea_Preview_Aggregate>;
  idea_preview_aggregate_fields: ResolverTypeWrapper<TIdea_Preview_Aggregate_Fields>;
  idea_preview_bool_exp: TIdea_Preview_Bool_Exp;
  idea_preview_insert_input: TIdea_Preview_Insert_Input;
  idea_preview_max_fields: ResolverTypeWrapper<TIdea_Preview_Max_Fields>;
  idea_preview_min_fields: ResolverTypeWrapper<TIdea_Preview_Min_Fields>;
  idea_preview_mutation_response: ResolverTypeWrapper<TIdea_Preview_Mutation_Response>;
  idea_preview_order_by: TIdea_Preview_Order_By;
  idea_preview_select_column: TIdea_Preview_Select_Column;
  idea_preview_set_input: TIdea_Preview_Set_Input;
  idea_preview_stream_cursor_input: TIdea_Preview_Stream_Cursor_Input;
  idea_preview_stream_cursor_value_input: TIdea_Preview_Stream_Cursor_Value_Input;
  idea_preview_updates: TIdea_Preview_Updates;
  idea_votes: ResolverTypeWrapper<TIdea_Votes>;
  idea_votes_aggregate: ResolverTypeWrapper<TIdea_Votes_Aggregate>;
  idea_votes_aggregate_bool_exp: TIdea_Votes_Aggregate_Bool_Exp;
  idea_votes_aggregate_bool_exp_count: TIdea_Votes_Aggregate_Bool_Exp_Count;
  idea_votes_aggregate_fields: ResolverTypeWrapper<TIdea_Votes_Aggregate_Fields>;
  idea_votes_aggregate_order_by: TIdea_Votes_Aggregate_Order_By;
  idea_votes_arr_rel_insert_input: TIdea_Votes_Arr_Rel_Insert_Input;
  idea_votes_bool_exp: TIdea_Votes_Bool_Exp;
  idea_votes_constraint: TIdea_Votes_Constraint;
  idea_votes_insert_input: TIdea_Votes_Insert_Input;
  idea_votes_max_fields: ResolverTypeWrapper<TIdea_Votes_Max_Fields>;
  idea_votes_max_order_by: TIdea_Votes_Max_Order_By;
  idea_votes_min_fields: ResolverTypeWrapper<TIdea_Votes_Min_Fields>;
  idea_votes_min_order_by: TIdea_Votes_Min_Order_By;
  idea_votes_mutation_response: ResolverTypeWrapper<TIdea_Votes_Mutation_Response>;
  idea_votes_on_conflict: TIdea_Votes_On_Conflict;
  idea_votes_order_by: TIdea_Votes_Order_By;
  idea_votes_pk_columns_input: TIdea_Votes_Pk_Columns_Input;
  idea_votes_select_column: TIdea_Votes_Select_Column;
  idea_votes_set_input: TIdea_Votes_Set_Input;
  idea_votes_stream_cursor_input: TIdea_Votes_Stream_Cursor_Input;
  idea_votes_stream_cursor_value_input: TIdea_Votes_Stream_Cursor_Value_Input;
  idea_votes_update_column: TIdea_Votes_Update_Column;
  idea_votes_updates: TIdea_Votes_Updates;
  ideas: ResolverTypeWrapper<TIdeas>;
  ideas_aggregate: ResolverTypeWrapper<TIdeas_Aggregate>;
  ideas_aggregate_bool_exp: TIdeas_Aggregate_Bool_Exp;
  ideas_aggregate_bool_exp_bool_and: TIdeas_Aggregate_Bool_Exp_Bool_And;
  ideas_aggregate_bool_exp_bool_or: TIdeas_Aggregate_Bool_Exp_Bool_Or;
  ideas_aggregate_bool_exp_count: TIdeas_Aggregate_Bool_Exp_Count;
  ideas_aggregate_fields: ResolverTypeWrapper<TIdeas_Aggregate_Fields>;
  ideas_aggregate_order_by: TIdeas_Aggregate_Order_By;
  ideas_arr_rel_insert_input: TIdeas_Arr_Rel_Insert_Input;
  ideas_avg_fields: ResolverTypeWrapper<TIdeas_Avg_Fields>;
  ideas_avg_order_by: TIdeas_Avg_Order_By;
  ideas_bool_exp: TIdeas_Bool_Exp;
  ideas_constraint: TIdeas_Constraint;
  ideas_inc_input: TIdeas_Inc_Input;
  ideas_insert_input: TIdeas_Insert_Input;
  ideas_max_fields: ResolverTypeWrapper<TIdeas_Max_Fields>;
  ideas_max_order_by: TIdeas_Max_Order_By;
  ideas_min_fields: ResolverTypeWrapper<TIdeas_Min_Fields>;
  ideas_min_order_by: TIdeas_Min_Order_By;
  ideas_mutation_response: ResolverTypeWrapper<TIdeas_Mutation_Response>;
  ideas_obj_rel_insert_input: TIdeas_Obj_Rel_Insert_Input;
  ideas_on_conflict: TIdeas_On_Conflict;
  ideas_order_by: TIdeas_Order_By;
  ideas_pk_columns_input: TIdeas_Pk_Columns_Input;
  ideas_select_column: TIdeas_Select_Column;
  ideas_select_column_ideas_aggregate_bool_exp_bool_and_arguments_columns: TIdeas_Select_Column_Ideas_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  ideas_select_column_ideas_aggregate_bool_exp_bool_or_arguments_columns: TIdeas_Select_Column_Ideas_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  ideas_set_input: TIdeas_Set_Input;
  ideas_stddev_fields: ResolverTypeWrapper<TIdeas_Stddev_Fields>;
  ideas_stddev_order_by: TIdeas_Stddev_Order_By;
  ideas_stddev_pop_fields: ResolverTypeWrapper<TIdeas_Stddev_Pop_Fields>;
  ideas_stddev_pop_order_by: TIdeas_Stddev_Pop_Order_By;
  ideas_stddev_samp_fields: ResolverTypeWrapper<TIdeas_Stddev_Samp_Fields>;
  ideas_stddev_samp_order_by: TIdeas_Stddev_Samp_Order_By;
  ideas_stream_cursor_input: TIdeas_Stream_Cursor_Input;
  ideas_stream_cursor_value_input: TIdeas_Stream_Cursor_Value_Input;
  ideas_sum_fields: ResolverTypeWrapper<TIdeas_Sum_Fields>;
  ideas_sum_order_by: TIdeas_Sum_Order_By;
  ideas_update_column: TIdeas_Update_Column;
  ideas_updates: TIdeas_Updates;
  ideas_var_pop_fields: ResolverTypeWrapper<TIdeas_Var_Pop_Fields>;
  ideas_var_pop_order_by: TIdeas_Var_Pop_Order_By;
  ideas_var_samp_fields: ResolverTypeWrapper<TIdeas_Var_Samp_Fields>;
  ideas_var_samp_order_by: TIdeas_Var_Samp_Order_By;
  ideas_variance_fields: ResolverTypeWrapper<TIdeas_Variance_Fields>;
  ideas_variance_order_by: TIdeas_Variance_Order_By;
  interested_ideas: ResolverTypeWrapper<TInterested_Ideas>;
  interested_ideas_aggregate: ResolverTypeWrapper<TInterested_Ideas_Aggregate>;
  interested_ideas_aggregate_bool_exp: TInterested_Ideas_Aggregate_Bool_Exp;
  interested_ideas_aggregate_bool_exp_count: TInterested_Ideas_Aggregate_Bool_Exp_Count;
  interested_ideas_aggregate_fields: ResolverTypeWrapper<TInterested_Ideas_Aggregate_Fields>;
  interested_ideas_aggregate_order_by: TInterested_Ideas_Aggregate_Order_By;
  interested_ideas_arr_rel_insert_input: TInterested_Ideas_Arr_Rel_Insert_Input;
  interested_ideas_bool_exp: TInterested_Ideas_Bool_Exp;
  interested_ideas_constraint: TInterested_Ideas_Constraint;
  interested_ideas_insert_input: TInterested_Ideas_Insert_Input;
  interested_ideas_max_fields: ResolverTypeWrapper<TInterested_Ideas_Max_Fields>;
  interested_ideas_max_order_by: TInterested_Ideas_Max_Order_By;
  interested_ideas_min_fields: ResolverTypeWrapper<TInterested_Ideas_Min_Fields>;
  interested_ideas_min_order_by: TInterested_Ideas_Min_Order_By;
  interested_ideas_mutation_response: ResolverTypeWrapper<TInterested_Ideas_Mutation_Response>;
  interested_ideas_on_conflict: TInterested_Ideas_On_Conflict;
  interested_ideas_order_by: TInterested_Ideas_Order_By;
  interested_ideas_pk_columns_input: TInterested_Ideas_Pk_Columns_Input;
  interested_ideas_select_column: TInterested_Ideas_Select_Column;
  interested_ideas_set_input: TInterested_Ideas_Set_Input;
  interested_ideas_stream_cursor_input: TInterested_Ideas_Stream_Cursor_Input;
  interested_ideas_stream_cursor_value_input: TInterested_Ideas_Stream_Cursor_Value_Input;
  interested_ideas_update_column: TInterested_Ideas_Update_Column;
  interested_ideas_updates: TInterested_Ideas_Updates;
  jsonb: ResolverTypeWrapper<Scalars['jsonb']>;
  jsonb_cast_exp: TJsonb_Cast_Exp;
  jsonb_comparison_exp: TJsonb_Comparison_Exp;
  match_settings: ResolverTypeWrapper<TMatch_Settings>;
  match_settings_aggregate: ResolverTypeWrapper<TMatch_Settings_Aggregate>;
  match_settings_aggregate_fields: ResolverTypeWrapper<TMatch_Settings_Aggregate_Fields>;
  match_settings_append_input: TMatch_Settings_Append_Input;
  match_settings_bool_exp: TMatch_Settings_Bool_Exp;
  match_settings_constraint: TMatch_Settings_Constraint;
  match_settings_delete_at_path_input: TMatch_Settings_Delete_At_Path_Input;
  match_settings_delete_elem_input: TMatch_Settings_Delete_Elem_Input;
  match_settings_delete_key_input: TMatch_Settings_Delete_Key_Input;
  match_settings_insert_input: TMatch_Settings_Insert_Input;
  match_settings_max_fields: ResolverTypeWrapper<TMatch_Settings_Max_Fields>;
  match_settings_min_fields: ResolverTypeWrapper<TMatch_Settings_Min_Fields>;
  match_settings_mutation_response: ResolverTypeWrapper<TMatch_Settings_Mutation_Response>;
  match_settings_obj_rel_insert_input: TMatch_Settings_Obj_Rel_Insert_Input;
  match_settings_on_conflict: TMatch_Settings_On_Conflict;
  match_settings_order_by: TMatch_Settings_Order_By;
  match_settings_pk_columns_input: TMatch_Settings_Pk_Columns_Input;
  match_settings_prepend_input: TMatch_Settings_Prepend_Input;
  match_settings_select_column: TMatch_Settings_Select_Column;
  match_settings_set_input: TMatch_Settings_Set_Input;
  match_settings_stream_cursor_input: TMatch_Settings_Stream_Cursor_Input;
  match_settings_stream_cursor_value_input: TMatch_Settings_Stream_Cursor_Value_Input;
  match_settings_update_column: TMatch_Settings_Update_Column;
  match_settings_updates: TMatch_Settings_Updates;
  message: ResolverTypeWrapper<TMessage>;
  message_aggregate: ResolverTypeWrapper<TMessage_Aggregate>;
  message_aggregate_bool_exp: TMessage_Aggregate_Bool_Exp;
  message_aggregate_bool_exp_count: TMessage_Aggregate_Bool_Exp_Count;
  message_aggregate_fields: ResolverTypeWrapper<TMessage_Aggregate_Fields>;
  message_aggregate_order_by: TMessage_Aggregate_Order_By;
  message_arr_rel_insert_input: TMessage_Arr_Rel_Insert_Input;
  message_bool_exp: TMessage_Bool_Exp;
  message_constraint: TMessage_Constraint;
  message_insert_input: TMessage_Insert_Input;
  message_max_fields: ResolverTypeWrapper<TMessage_Max_Fields>;
  message_max_order_by: TMessage_Max_Order_By;
  message_min_fields: ResolverTypeWrapper<TMessage_Min_Fields>;
  message_min_order_by: TMessage_Min_Order_By;
  message_mutation_response: ResolverTypeWrapper<TMessage_Mutation_Response>;
  message_on_conflict: TMessage_On_Conflict;
  message_order_by: TMessage_Order_By;
  message_pk_columns_input: TMessage_Pk_Columns_Input;
  message_select_column: TMessage_Select_Column;
  message_set_input: TMessage_Set_Input;
  message_stream_cursor_input: TMessage_Stream_Cursor_Input;
  message_stream_cursor_value_input: TMessage_Stream_Cursor_Value_Input;
  message_thread: ResolverTypeWrapper<TMessage_Thread>;
  message_thread_aggregate: ResolverTypeWrapper<TMessage_Thread_Aggregate>;
  message_thread_aggregate_bool_exp: TMessage_Thread_Aggregate_Bool_Exp;
  message_thread_aggregate_bool_exp_count: TMessage_Thread_Aggregate_Bool_Exp_Count;
  message_thread_aggregate_fields: ResolverTypeWrapper<TMessage_Thread_Aggregate_Fields>;
  message_thread_aggregate_order_by: TMessage_Thread_Aggregate_Order_By;
  message_thread_arr_rel_insert_input: TMessage_Thread_Arr_Rel_Insert_Input;
  message_thread_bool_exp: TMessage_Thread_Bool_Exp;
  message_thread_constraint: TMessage_Thread_Constraint;
  message_thread_insert_input: TMessage_Thread_Insert_Input;
  message_thread_max_fields: ResolverTypeWrapper<TMessage_Thread_Max_Fields>;
  message_thread_max_order_by: TMessage_Thread_Max_Order_By;
  message_thread_min_fields: ResolverTypeWrapper<TMessage_Thread_Min_Fields>;
  message_thread_min_order_by: TMessage_Thread_Min_Order_By;
  message_thread_mutation_response: ResolverTypeWrapper<TMessage_Thread_Mutation_Response>;
  message_thread_obj_rel_insert_input: TMessage_Thread_Obj_Rel_Insert_Input;
  message_thread_on_conflict: TMessage_Thread_On_Conflict;
  message_thread_order_by: TMessage_Thread_Order_By;
  message_thread_pk_columns_input: TMessage_Thread_Pk_Columns_Input;
  message_thread_select_column: TMessage_Thread_Select_Column;
  message_thread_set_input: TMessage_Thread_Set_Input;
  message_thread_stream_cursor_input: TMessage_Thread_Stream_Cursor_Input;
  message_thread_stream_cursor_value_input: TMessage_Thread_Stream_Cursor_Value_Input;
  message_thread_update_column: TMessage_Thread_Update_Column;
  message_thread_updates: TMessage_Thread_Updates;
  message_thread_users: ResolverTypeWrapper<TMessage_Thread_Users>;
  message_thread_users_aggregate: ResolverTypeWrapper<TMessage_Thread_Users_Aggregate>;
  message_thread_users_aggregate_bool_exp: TMessage_Thread_Users_Aggregate_Bool_Exp;
  message_thread_users_aggregate_bool_exp_count: TMessage_Thread_Users_Aggregate_Bool_Exp_Count;
  message_thread_users_aggregate_fields: ResolverTypeWrapper<TMessage_Thread_Users_Aggregate_Fields>;
  message_thread_users_aggregate_order_by: TMessage_Thread_Users_Aggregate_Order_By;
  message_thread_users_arr_rel_insert_input: TMessage_Thread_Users_Arr_Rel_Insert_Input;
  message_thread_users_bool_exp: TMessage_Thread_Users_Bool_Exp;
  message_thread_users_constraint: TMessage_Thread_Users_Constraint;
  message_thread_users_insert_input: TMessage_Thread_Users_Insert_Input;
  message_thread_users_max_fields: ResolverTypeWrapper<TMessage_Thread_Users_Max_Fields>;
  message_thread_users_max_order_by: TMessage_Thread_Users_Max_Order_By;
  message_thread_users_min_fields: ResolverTypeWrapper<TMessage_Thread_Users_Min_Fields>;
  message_thread_users_min_order_by: TMessage_Thread_Users_Min_Order_By;
  message_thread_users_mutation_response: ResolverTypeWrapper<TMessage_Thread_Users_Mutation_Response>;
  message_thread_users_on_conflict: TMessage_Thread_Users_On_Conflict;
  message_thread_users_order_by: TMessage_Thread_Users_Order_By;
  message_thread_users_pk_columns_input: TMessage_Thread_Users_Pk_Columns_Input;
  message_thread_users_select_column: TMessage_Thread_Users_Select_Column;
  message_thread_users_set_input: TMessage_Thread_Users_Set_Input;
  message_thread_users_stream_cursor_input: TMessage_Thread_Users_Stream_Cursor_Input;
  message_thread_users_stream_cursor_value_input: TMessage_Thread_Users_Stream_Cursor_Value_Input;
  message_thread_users_update_column: TMessage_Thread_Users_Update_Column;
  message_thread_users_updates: TMessage_Thread_Users_Updates;
  message_update_column: TMessage_Update_Column;
  message_updates: TMessage_Updates;
  money: ResolverTypeWrapper<Scalars['money']>;
  money_comparison_exp: TMoney_Comparison_Exp;
  mutation_root: ResolverTypeWrapper<{}>;
  notification_types: ResolverTypeWrapper<TNotification_Types>;
  notification_types_aggregate: ResolverTypeWrapper<TNotification_Types_Aggregate>;
  notification_types_aggregate_fields: ResolverTypeWrapper<TNotification_Types_Aggregate_Fields>;
  notification_types_bool_exp: TNotification_Types_Bool_Exp;
  notification_types_constraint: TNotification_Types_Constraint;
  notification_types_enum: TNotification_Types_Enum;
  notification_types_enum_comparison_exp: TNotification_Types_Enum_Comparison_Exp;
  notification_types_insert_input: TNotification_Types_Insert_Input;
  notification_types_max_fields: ResolverTypeWrapper<TNotification_Types_Max_Fields>;
  notification_types_min_fields: ResolverTypeWrapper<TNotification_Types_Min_Fields>;
  notification_types_mutation_response: ResolverTypeWrapper<TNotification_Types_Mutation_Response>;
  notification_types_on_conflict: TNotification_Types_On_Conflict;
  notification_types_order_by: TNotification_Types_Order_By;
  notification_types_pk_columns_input: TNotification_Types_Pk_Columns_Input;
  notification_types_select_column: TNotification_Types_Select_Column;
  notification_types_set_input: TNotification_Types_Set_Input;
  notification_types_stream_cursor_input: TNotification_Types_Stream_Cursor_Input;
  notification_types_stream_cursor_value_input: TNotification_Types_Stream_Cursor_Value_Input;
  notification_types_update_column: TNotification_Types_Update_Column;
  notification_types_updates: TNotification_Types_Updates;
  order_by: TOrder_By;
  query_root: ResolverTypeWrapper<{}>;
  report: ResolverTypeWrapper<TReport>;
  report_aggregate: ResolverTypeWrapper<TReport_Aggregate>;
  report_aggregate_fields: ResolverTypeWrapper<TReport_Aggregate_Fields>;
  report_bool_exp: TReport_Bool_Exp;
  report_constraint: TReport_Constraint;
  report_insert_input: TReport_Insert_Input;
  report_max_fields: ResolverTypeWrapper<TReport_Max_Fields>;
  report_min_fields: ResolverTypeWrapper<TReport_Min_Fields>;
  report_mutation_response: ResolverTypeWrapper<TReport_Mutation_Response>;
  report_on_conflict: TReport_On_Conflict;
  report_order_by: TReport_Order_By;
  report_pk_columns_input: TReport_Pk_Columns_Input;
  report_select_column: TReport_Select_Column;
  report_set_input: TReport_Set_Input;
  report_stream_cursor_input: TReport_Stream_Cursor_Input;
  report_stream_cursor_value_input: TReport_Stream_Cursor_Value_Input;
  report_update_column: TReport_Update_Column;
  report_updates: TReport_Updates;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  timestamptz_comparison_exp: TTimestamptz_Comparison_Exp;
  user_address: ResolverTypeWrapper<TUser_Address>;
  user_address_aggregate: ResolverTypeWrapper<TUser_Address_Aggregate>;
  user_address_aggregate_fields: ResolverTypeWrapper<TUser_Address_Aggregate_Fields>;
  user_address_bool_exp: TUser_Address_Bool_Exp;
  user_address_constraint: TUser_Address_Constraint;
  user_address_insert_input: TUser_Address_Insert_Input;
  user_address_max_fields: ResolverTypeWrapper<TUser_Address_Max_Fields>;
  user_address_min_fields: ResolverTypeWrapper<TUser_Address_Min_Fields>;
  user_address_mutation_response: ResolverTypeWrapper<TUser_Address_Mutation_Response>;
  user_address_obj_rel_insert_input: TUser_Address_Obj_Rel_Insert_Input;
  user_address_on_conflict: TUser_Address_On_Conflict;
  user_address_order_by: TUser_Address_Order_By;
  user_address_pk_columns_input: TUser_Address_Pk_Columns_Input;
  user_address_select_column: TUser_Address_Select_Column;
  user_address_set_input: TUser_Address_Set_Input;
  user_address_stream_cursor_input: TUser_Address_Stream_Cursor_Input;
  user_address_stream_cursor_value_input: TUser_Address_Stream_Cursor_Value_Input;
  user_address_update_column: TUser_Address_Update_Column;
  user_address_updates: TUser_Address_Updates;
  user_esteem_points_currency: ResolverTypeWrapper<TUser_Esteem_Points_Currency>;
  user_esteem_points_currency_aggregate: ResolverTypeWrapper<TUser_Esteem_Points_Currency_Aggregate>;
  user_esteem_points_currency_aggregate_fields: ResolverTypeWrapper<TUser_Esteem_Points_Currency_Aggregate_Fields>;
  user_esteem_points_currency_avg_fields: ResolverTypeWrapper<TUser_Esteem_Points_Currency_Avg_Fields>;
  user_esteem_points_currency_bool_exp: TUser_Esteem_Points_Currency_Bool_Exp;
  user_esteem_points_currency_constraint: TUser_Esteem_Points_Currency_Constraint;
  user_esteem_points_currency_inc_input: TUser_Esteem_Points_Currency_Inc_Input;
  user_esteem_points_currency_insert_input: TUser_Esteem_Points_Currency_Insert_Input;
  user_esteem_points_currency_max_fields: ResolverTypeWrapper<TUser_Esteem_Points_Currency_Max_Fields>;
  user_esteem_points_currency_min_fields: ResolverTypeWrapper<TUser_Esteem_Points_Currency_Min_Fields>;
  user_esteem_points_currency_mutation_response: ResolverTypeWrapper<TUser_Esteem_Points_Currency_Mutation_Response>;
  user_esteem_points_currency_obj_rel_insert_input: TUser_Esteem_Points_Currency_Obj_Rel_Insert_Input;
  user_esteem_points_currency_on_conflict: TUser_Esteem_Points_Currency_On_Conflict;
  user_esteem_points_currency_order_by: TUser_Esteem_Points_Currency_Order_By;
  user_esteem_points_currency_pk_columns_input: TUser_Esteem_Points_Currency_Pk_Columns_Input;
  user_esteem_points_currency_select_column: TUser_Esteem_Points_Currency_Select_Column;
  user_esteem_points_currency_set_input: TUser_Esteem_Points_Currency_Set_Input;
  user_esteem_points_currency_stddev_fields: ResolverTypeWrapper<TUser_Esteem_Points_Currency_Stddev_Fields>;
  user_esteem_points_currency_stddev_pop_fields: ResolverTypeWrapper<TUser_Esteem_Points_Currency_Stddev_Pop_Fields>;
  user_esteem_points_currency_stddev_samp_fields: ResolverTypeWrapper<TUser_Esteem_Points_Currency_Stddev_Samp_Fields>;
  user_esteem_points_currency_stream_cursor_input: TUser_Esteem_Points_Currency_Stream_Cursor_Input;
  user_esteem_points_currency_stream_cursor_value_input: TUser_Esteem_Points_Currency_Stream_Cursor_Value_Input;
  user_esteem_points_currency_sum_fields: ResolverTypeWrapper<TUser_Esteem_Points_Currency_Sum_Fields>;
  user_esteem_points_currency_update_column: TUser_Esteem_Points_Currency_Update_Column;
  user_esteem_points_currency_updates: TUser_Esteem_Points_Currency_Updates;
  user_esteem_points_currency_var_pop_fields: ResolverTypeWrapper<TUser_Esteem_Points_Currency_Var_Pop_Fields>;
  user_esteem_points_currency_var_samp_fields: ResolverTypeWrapper<TUser_Esteem_Points_Currency_Var_Samp_Fields>;
  user_esteem_points_currency_variance_fields: ResolverTypeWrapper<TUser_Esteem_Points_Currency_Variance_Fields>;
  user_followers: ResolverTypeWrapper<TUser_Followers>;
  user_followers_aggregate: ResolverTypeWrapper<TUser_Followers_Aggregate>;
  user_followers_aggregate_bool_exp: TUser_Followers_Aggregate_Bool_Exp;
  user_followers_aggregate_bool_exp_count: TUser_Followers_Aggregate_Bool_Exp_Count;
  user_followers_aggregate_fields: ResolverTypeWrapper<TUser_Followers_Aggregate_Fields>;
  user_followers_aggregate_order_by: TUser_Followers_Aggregate_Order_By;
  user_followers_arr_rel_insert_input: TUser_Followers_Arr_Rel_Insert_Input;
  user_followers_bool_exp: TUser_Followers_Bool_Exp;
  user_followers_constraint: TUser_Followers_Constraint;
  user_followers_insert_input: TUser_Followers_Insert_Input;
  user_followers_max_fields: ResolverTypeWrapper<TUser_Followers_Max_Fields>;
  user_followers_max_order_by: TUser_Followers_Max_Order_By;
  user_followers_min_fields: ResolverTypeWrapper<TUser_Followers_Min_Fields>;
  user_followers_min_order_by: TUser_Followers_Min_Order_By;
  user_followers_mutation_response: ResolverTypeWrapper<TUser_Followers_Mutation_Response>;
  user_followers_on_conflict: TUser_Followers_On_Conflict;
  user_followers_order_by: TUser_Followers_Order_By;
  user_followers_pk_columns_input: TUser_Followers_Pk_Columns_Input;
  user_followers_select_column: TUser_Followers_Select_Column;
  user_followers_set_input: TUser_Followers_Set_Input;
  user_followers_stream_cursor_input: TUser_Followers_Stream_Cursor_Input;
  user_followers_stream_cursor_value_input: TUser_Followers_Stream_Cursor_Value_Input;
  user_followers_update_column: TUser_Followers_Update_Column;
  user_followers_updates: TUser_Followers_Updates;
  user_notifications: ResolverTypeWrapper<TUser_Notifications>;
  user_notifications_aggregate: ResolverTypeWrapper<TUser_Notifications_Aggregate>;
  user_notifications_aggregate_bool_exp: TUser_Notifications_Aggregate_Bool_Exp;
  user_notifications_aggregate_bool_exp_bool_and: TUser_Notifications_Aggregate_Bool_Exp_Bool_And;
  user_notifications_aggregate_bool_exp_bool_or: TUser_Notifications_Aggregate_Bool_Exp_Bool_Or;
  user_notifications_aggregate_bool_exp_count: TUser_Notifications_Aggregate_Bool_Exp_Count;
  user_notifications_aggregate_fields: ResolverTypeWrapper<TUser_Notifications_Aggregate_Fields>;
  user_notifications_aggregate_order_by: TUser_Notifications_Aggregate_Order_By;
  user_notifications_arr_rel_insert_input: TUser_Notifications_Arr_Rel_Insert_Input;
  user_notifications_bool_exp: TUser_Notifications_Bool_Exp;
  user_notifications_constraint: TUser_Notifications_Constraint;
  user_notifications_insert_input: TUser_Notifications_Insert_Input;
  user_notifications_max_fields: ResolverTypeWrapper<TUser_Notifications_Max_Fields>;
  user_notifications_max_order_by: TUser_Notifications_Max_Order_By;
  user_notifications_min_fields: ResolverTypeWrapper<TUser_Notifications_Min_Fields>;
  user_notifications_min_order_by: TUser_Notifications_Min_Order_By;
  user_notifications_mutation_response: ResolverTypeWrapper<TUser_Notifications_Mutation_Response>;
  user_notifications_on_conflict: TUser_Notifications_On_Conflict;
  user_notifications_order_by: TUser_Notifications_Order_By;
  user_notifications_pk_columns_input: TUser_Notifications_Pk_Columns_Input;
  user_notifications_select_column: TUser_Notifications_Select_Column;
  user_notifications_select_column_user_notifications_aggregate_bool_exp_bool_and_arguments_columns: TUser_Notifications_Select_Column_User_Notifications_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  user_notifications_select_column_user_notifications_aggregate_bool_exp_bool_or_arguments_columns: TUser_Notifications_Select_Column_User_Notifications_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  user_notifications_set_input: TUser_Notifications_Set_Input;
  user_notifications_stream_cursor_input: TUser_Notifications_Stream_Cursor_Input;
  user_notifications_stream_cursor_value_input: TUser_Notifications_Stream_Cursor_Value_Input;
  user_notifications_update_column: TUser_Notifications_Update_Column;
  user_notifications_updates: TUser_Notifications_Updates;
  user_profile: ResolverTypeWrapper<TUser_Profile>;
  user_profile_aggregate: ResolverTypeWrapper<TUser_Profile_Aggregate>;
  user_profile_aggregate_bool_exp: TUser_Profile_Aggregate_Bool_Exp;
  user_profile_aggregate_bool_exp_bool_and: TUser_Profile_Aggregate_Bool_Exp_Bool_And;
  user_profile_aggregate_bool_exp_bool_or: TUser_Profile_Aggregate_Bool_Exp_Bool_Or;
  user_profile_aggregate_bool_exp_count: TUser_Profile_Aggregate_Bool_Exp_Count;
  user_profile_aggregate_fields: ResolverTypeWrapper<TUser_Profile_Aggregate_Fields>;
  user_profile_aggregate_order_by: TUser_Profile_Aggregate_Order_By;
  user_profile_append_input: TUser_Profile_Append_Input;
  user_profile_arr_rel_insert_input: TUser_Profile_Arr_Rel_Insert_Input;
  user_profile_bool_exp: TUser_Profile_Bool_Exp;
  user_profile_constraint: TUser_Profile_Constraint;
  user_profile_delete_at_path_input: TUser_Profile_Delete_At_Path_Input;
  user_profile_delete_elem_input: TUser_Profile_Delete_Elem_Input;
  user_profile_delete_key_input: TUser_Profile_Delete_Key_Input;
  user_profile_insert_input: TUser_Profile_Insert_Input;
  user_profile_max_fields: ResolverTypeWrapper<TUser_Profile_Max_Fields>;
  user_profile_max_order_by: TUser_Profile_Max_Order_By;
  user_profile_min_fields: ResolverTypeWrapper<TUser_Profile_Min_Fields>;
  user_profile_min_order_by: TUser_Profile_Min_Order_By;
  user_profile_mutation_response: ResolverTypeWrapper<TUser_Profile_Mutation_Response>;
  user_profile_obj_rel_insert_input: TUser_Profile_Obj_Rel_Insert_Input;
  user_profile_on_conflict: TUser_Profile_On_Conflict;
  user_profile_order_by: TUser_Profile_Order_By;
  user_profile_pk_columns_input: TUser_Profile_Pk_Columns_Input;
  user_profile_prepend_input: TUser_Profile_Prepend_Input;
  user_profile_select_column: TUser_Profile_Select_Column;
  user_profile_select_column_user_profile_aggregate_bool_exp_bool_and_arguments_columns: TUser_Profile_Select_Column_User_Profile_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  user_profile_select_column_user_profile_aggregate_bool_exp_bool_or_arguments_columns: TUser_Profile_Select_Column_User_Profile_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  user_profile_set_input: TUser_Profile_Set_Input;
  user_profile_stream_cursor_input: TUser_Profile_Stream_Cursor_Input;
  user_profile_stream_cursor_value_input: TUser_Profile_Stream_Cursor_Value_Input;
  user_profile_update_column: TUser_Profile_Update_Column;
  user_profile_updates: TUser_Profile_Updates;
  users: ResolverTypeWrapper<TUsers>;
  users_aggregate: ResolverTypeWrapper<TUsers_Aggregate>;
  users_aggregate_bool_exp: TUsers_Aggregate_Bool_Exp;
  users_aggregate_bool_exp_bool_and: TUsers_Aggregate_Bool_Exp_Bool_And;
  users_aggregate_bool_exp_bool_or: TUsers_Aggregate_Bool_Exp_Bool_Or;
  users_aggregate_bool_exp_count: TUsers_Aggregate_Bool_Exp_Count;
  users_aggregate_fields: ResolverTypeWrapper<TUsers_Aggregate_Fields>;
  users_aggregate_order_by: TUsers_Aggregate_Order_By;
  users_append_input: TUsers_Append_Input;
  users_arr_rel_insert_input: TUsers_Arr_Rel_Insert_Input;
  users_bool_exp: TUsers_Bool_Exp;
  users_constraint: TUsers_Constraint;
  users_delete_at_path_input: TUsers_Delete_At_Path_Input;
  users_delete_elem_input: TUsers_Delete_Elem_Input;
  users_delete_key_input: TUsers_Delete_Key_Input;
  users_insert_input: TUsers_Insert_Input;
  users_max_fields: ResolverTypeWrapper<TUsers_Max_Fields>;
  users_max_order_by: TUsers_Max_Order_By;
  users_min_fields: ResolverTypeWrapper<TUsers_Min_Fields>;
  users_min_order_by: TUsers_Min_Order_By;
  users_mutation_response: ResolverTypeWrapper<TUsers_Mutation_Response>;
  users_obj_rel_insert_input: TUsers_Obj_Rel_Insert_Input;
  users_on_conflict: TUsers_On_Conflict;
  users_order_by: TUsers_Order_By;
  users_pk_columns_input: TUsers_Pk_Columns_Input;
  users_prepend_input: TUsers_Prepend_Input;
  users_select_column: TUsers_Select_Column;
  users_select_column_users_aggregate_bool_exp_bool_and_arguments_columns: TUsers_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  users_select_column_users_aggregate_bool_exp_bool_or_arguments_columns: TUsers_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  users_set_input: TUsers_Set_Input;
  users_stream_cursor_input: TUsers_Stream_Cursor_Input;
  users_stream_cursor_value_input: TUsers_Stream_Cursor_Value_Input;
  users_update_column: TUsers_Update_Column;
  users_updates: TUsers_Updates;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  uuid_comparison_exp: TUuid_Comparison_Exp;
  v_comments: ResolverTypeWrapper<TV_Comments>;
  v_comments_aggregate: ResolverTypeWrapper<TV_Comments_Aggregate>;
  v_comments_aggregate_fields: ResolverTypeWrapper<TV_Comments_Aggregate_Fields>;
  v_comments_avg_fields: ResolverTypeWrapper<TV_Comments_Avg_Fields>;
  v_comments_bool_exp: TV_Comments_Bool_Exp;
  v_comments_inc_input: TV_Comments_Inc_Input;
  v_comments_insert_input: TV_Comments_Insert_Input;
  v_comments_max_fields: ResolverTypeWrapper<TV_Comments_Max_Fields>;
  v_comments_min_fields: ResolverTypeWrapper<TV_Comments_Min_Fields>;
  v_comments_mutation_response: ResolverTypeWrapper<TV_Comments_Mutation_Response>;
  v_comments_order_by: TV_Comments_Order_By;
  v_comments_select_column: TV_Comments_Select_Column;
  v_comments_set_input: TV_Comments_Set_Input;
  v_comments_stddev_fields: ResolverTypeWrapper<TV_Comments_Stddev_Fields>;
  v_comments_stddev_pop_fields: ResolverTypeWrapper<TV_Comments_Stddev_Pop_Fields>;
  v_comments_stddev_samp_fields: ResolverTypeWrapper<TV_Comments_Stddev_Samp_Fields>;
  v_comments_stream_cursor_input: TV_Comments_Stream_Cursor_Input;
  v_comments_stream_cursor_value_input: TV_Comments_Stream_Cursor_Value_Input;
  v_comments_sum_fields: ResolverTypeWrapper<TV_Comments_Sum_Fields>;
  v_comments_updates: TV_Comments_Updates;
  v_comments_var_pop_fields: ResolverTypeWrapper<TV_Comments_Var_Pop_Fields>;
  v_comments_var_samp_fields: ResolverTypeWrapper<TV_Comments_Var_Samp_Fields>;
  v_comments_variance_fields: ResolverTypeWrapper<TV_Comments_Variance_Fields>;
  withdrawal_requests: ResolverTypeWrapper<TWithdrawal_Requests>;
  withdrawal_requests_aggregate: ResolverTypeWrapper<TWithdrawal_Requests_Aggregate>;
  withdrawal_requests_aggregate_fields: ResolverTypeWrapper<TWithdrawal_Requests_Aggregate_Fields>;
  withdrawal_requests_avg_fields: ResolverTypeWrapper<TWithdrawal_Requests_Avg_Fields>;
  withdrawal_requests_bool_exp: TWithdrawal_Requests_Bool_Exp;
  withdrawal_requests_constraint: TWithdrawal_Requests_Constraint;
  withdrawal_requests_inc_input: TWithdrawal_Requests_Inc_Input;
  withdrawal_requests_insert_input: TWithdrawal_Requests_Insert_Input;
  withdrawal_requests_max_fields: ResolverTypeWrapper<TWithdrawal_Requests_Max_Fields>;
  withdrawal_requests_min_fields: ResolverTypeWrapper<TWithdrawal_Requests_Min_Fields>;
  withdrawal_requests_mutation_response: ResolverTypeWrapper<TWithdrawal_Requests_Mutation_Response>;
  withdrawal_requests_on_conflict: TWithdrawal_Requests_On_Conflict;
  withdrawal_requests_order_by: TWithdrawal_Requests_Order_By;
  withdrawal_requests_pk_columns_input: TWithdrawal_Requests_Pk_Columns_Input;
  withdrawal_requests_select_column: TWithdrawal_Requests_Select_Column;
  withdrawal_requests_set_input: TWithdrawal_Requests_Set_Input;
  withdrawal_requests_stddev_fields: ResolverTypeWrapper<TWithdrawal_Requests_Stddev_Fields>;
  withdrawal_requests_stddev_pop_fields: ResolverTypeWrapper<TWithdrawal_Requests_Stddev_Pop_Fields>;
  withdrawal_requests_stddev_samp_fields: ResolverTypeWrapper<TWithdrawal_Requests_Stddev_Samp_Fields>;
  withdrawal_requests_stream_cursor_input: TWithdrawal_Requests_Stream_Cursor_Input;
  withdrawal_requests_stream_cursor_value_input: TWithdrawal_Requests_Stream_Cursor_Value_Input;
  withdrawal_requests_sum_fields: ResolverTypeWrapper<TWithdrawal_Requests_Sum_Fields>;
  withdrawal_requests_update_column: TWithdrawal_Requests_Update_Column;
  withdrawal_requests_updates: TWithdrawal_Requests_Updates;
  withdrawal_requests_var_pop_fields: ResolverTypeWrapper<TWithdrawal_Requests_Var_Pop_Fields>;
  withdrawal_requests_var_samp_fields: ResolverTypeWrapper<TWithdrawal_Requests_Var_Samp_Fields>;
  withdrawal_requests_variance_fields: ResolverTypeWrapper<TWithdrawal_Requests_Variance_Fields>;
};

/** Mapping between all available schema types and the resolvers parents */
export type TResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Boolean_comparison_exp: TBoolean_Comparison_Exp;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Int_comparison_exp: TInt_Comparison_Exp;
  String: Scalars['String'];
  String_comparison_exp: TString_Comparison_Exp;
  activity: TActivity;
  activity_aggregate: TActivity_Aggregate;
  activity_aggregate_fields: TActivity_Aggregate_Fields;
  activity_bool_exp: TActivity_Bool_Exp;
  activity_insert_input: TActivity_Insert_Input;
  activity_max_fields: TActivity_Max_Fields;
  activity_min_fields: TActivity_Min_Fields;
  activity_mutation_response: TActivity_Mutation_Response;
  activity_on_conflict: TActivity_On_Conflict;
  activity_order_by: TActivity_Order_By;
  activity_pk_columns_input: TActivity_Pk_Columns_Input;
  activity_set_input: TActivity_Set_Input;
  activity_stream_cursor_input: TActivity_Stream_Cursor_Input;
  activity_stream_cursor_value_input: TActivity_Stream_Cursor_Value_Input;
  activity_updates: TActivity_Updates;
  authProviderRequests: TAuthProviderRequests;
  authProviderRequests_aggregate: TAuthProviderRequests_Aggregate;
  authProviderRequests_aggregate_fields: TAuthProviderRequests_Aggregate_Fields;
  authProviderRequests_append_input: TAuthProviderRequests_Append_Input;
  authProviderRequests_bool_exp: TAuthProviderRequests_Bool_Exp;
  authProviderRequests_delete_at_path_input: TAuthProviderRequests_Delete_At_Path_Input;
  authProviderRequests_delete_elem_input: TAuthProviderRequests_Delete_Elem_Input;
  authProviderRequests_delete_key_input: TAuthProviderRequests_Delete_Key_Input;
  authProviderRequests_insert_input: TAuthProviderRequests_Insert_Input;
  authProviderRequests_max_fields: TAuthProviderRequests_Max_Fields;
  authProviderRequests_min_fields: TAuthProviderRequests_Min_Fields;
  authProviderRequests_mutation_response: TAuthProviderRequests_Mutation_Response;
  authProviderRequests_on_conflict: TAuthProviderRequests_On_Conflict;
  authProviderRequests_order_by: TAuthProviderRequests_Order_By;
  authProviderRequests_pk_columns_input: TAuthProviderRequests_Pk_Columns_Input;
  authProviderRequests_prepend_input: TAuthProviderRequests_Prepend_Input;
  authProviderRequests_set_input: TAuthProviderRequests_Set_Input;
  authProviderRequests_stream_cursor_input: TAuthProviderRequests_Stream_Cursor_Input;
  authProviderRequests_stream_cursor_value_input: TAuthProviderRequests_Stream_Cursor_Value_Input;
  authProviderRequests_updates: TAuthProviderRequests_Updates;
  authProviders: TAuthProviders;
  authProviders_aggregate: TAuthProviders_Aggregate;
  authProviders_aggregate_fields: TAuthProviders_Aggregate_Fields;
  authProviders_bool_exp: TAuthProviders_Bool_Exp;
  authProviders_insert_input: TAuthProviders_Insert_Input;
  authProviders_max_fields: TAuthProviders_Max_Fields;
  authProviders_min_fields: TAuthProviders_Min_Fields;
  authProviders_mutation_response: TAuthProviders_Mutation_Response;
  authProviders_obj_rel_insert_input: TAuthProviders_Obj_Rel_Insert_Input;
  authProviders_on_conflict: TAuthProviders_On_Conflict;
  authProviders_order_by: TAuthProviders_Order_By;
  authProviders_pk_columns_input: TAuthProviders_Pk_Columns_Input;
  authProviders_set_input: TAuthProviders_Set_Input;
  authProviders_stream_cursor_input: TAuthProviders_Stream_Cursor_Input;
  authProviders_stream_cursor_value_input: TAuthProviders_Stream_Cursor_Value_Input;
  authProviders_updates: TAuthProviders_Updates;
  authRefreshTokens: TAuthRefreshTokens;
  authRefreshTokens_aggregate: TAuthRefreshTokens_Aggregate;
  authRefreshTokens_aggregate_bool_exp: TAuthRefreshTokens_Aggregate_Bool_Exp;
  authRefreshTokens_aggregate_bool_exp_count: TAuthRefreshTokens_Aggregate_Bool_Exp_Count;
  authRefreshTokens_aggregate_fields: TAuthRefreshTokens_Aggregate_Fields;
  authRefreshTokens_aggregate_order_by: TAuthRefreshTokens_Aggregate_Order_By;
  authRefreshTokens_arr_rel_insert_input: TAuthRefreshTokens_Arr_Rel_Insert_Input;
  authRefreshTokens_bool_exp: TAuthRefreshTokens_Bool_Exp;
  authRefreshTokens_insert_input: TAuthRefreshTokens_Insert_Input;
  authRefreshTokens_max_fields: TAuthRefreshTokens_Max_Fields;
  authRefreshTokens_max_order_by: TAuthRefreshTokens_Max_Order_By;
  authRefreshTokens_min_fields: TAuthRefreshTokens_Min_Fields;
  authRefreshTokens_min_order_by: TAuthRefreshTokens_Min_Order_By;
  authRefreshTokens_mutation_response: TAuthRefreshTokens_Mutation_Response;
  authRefreshTokens_on_conflict: TAuthRefreshTokens_On_Conflict;
  authRefreshTokens_order_by: TAuthRefreshTokens_Order_By;
  authRefreshTokens_pk_columns_input: TAuthRefreshTokens_Pk_Columns_Input;
  authRefreshTokens_set_input: TAuthRefreshTokens_Set_Input;
  authRefreshTokens_stream_cursor_input: TAuthRefreshTokens_Stream_Cursor_Input;
  authRefreshTokens_stream_cursor_value_input: TAuthRefreshTokens_Stream_Cursor_Value_Input;
  authRefreshTokens_updates: TAuthRefreshTokens_Updates;
  authRoles: TAuthRoles;
  authRoles_aggregate: TAuthRoles_Aggregate;
  authRoles_aggregate_fields: TAuthRoles_Aggregate_Fields;
  authRoles_bool_exp: TAuthRoles_Bool_Exp;
  authRoles_insert_input: TAuthRoles_Insert_Input;
  authRoles_max_fields: TAuthRoles_Max_Fields;
  authRoles_min_fields: TAuthRoles_Min_Fields;
  authRoles_mutation_response: TAuthRoles_Mutation_Response;
  authRoles_obj_rel_insert_input: TAuthRoles_Obj_Rel_Insert_Input;
  authRoles_on_conflict: TAuthRoles_On_Conflict;
  authRoles_order_by: TAuthRoles_Order_By;
  authRoles_pk_columns_input: TAuthRoles_Pk_Columns_Input;
  authRoles_set_input: TAuthRoles_Set_Input;
  authRoles_stream_cursor_input: TAuthRoles_Stream_Cursor_Input;
  authRoles_stream_cursor_value_input: TAuthRoles_Stream_Cursor_Value_Input;
  authRoles_updates: TAuthRoles_Updates;
  authUserProviders: TAuthUserProviders;
  authUserProviders_aggregate: TAuthUserProviders_Aggregate;
  authUserProviders_aggregate_bool_exp: TAuthUserProviders_Aggregate_Bool_Exp;
  authUserProviders_aggregate_bool_exp_count: TAuthUserProviders_Aggregate_Bool_Exp_Count;
  authUserProviders_aggregate_fields: TAuthUserProviders_Aggregate_Fields;
  authUserProviders_aggregate_order_by: TAuthUserProviders_Aggregate_Order_By;
  authUserProviders_arr_rel_insert_input: TAuthUserProviders_Arr_Rel_Insert_Input;
  authUserProviders_bool_exp: TAuthUserProviders_Bool_Exp;
  authUserProviders_insert_input: TAuthUserProviders_Insert_Input;
  authUserProviders_max_fields: TAuthUserProviders_Max_Fields;
  authUserProviders_max_order_by: TAuthUserProviders_Max_Order_By;
  authUserProviders_min_fields: TAuthUserProviders_Min_Fields;
  authUserProviders_min_order_by: TAuthUserProviders_Min_Order_By;
  authUserProviders_mutation_response: TAuthUserProviders_Mutation_Response;
  authUserProviders_on_conflict: TAuthUserProviders_On_Conflict;
  authUserProviders_order_by: TAuthUserProviders_Order_By;
  authUserProviders_pk_columns_input: TAuthUserProviders_Pk_Columns_Input;
  authUserProviders_set_input: TAuthUserProviders_Set_Input;
  authUserProviders_stream_cursor_input: TAuthUserProviders_Stream_Cursor_Input;
  authUserProviders_stream_cursor_value_input: TAuthUserProviders_Stream_Cursor_Value_Input;
  authUserProviders_updates: TAuthUserProviders_Updates;
  authUserRoles: TAuthUserRoles;
  authUserRoles_aggregate: TAuthUserRoles_Aggregate;
  authUserRoles_aggregate_bool_exp: TAuthUserRoles_Aggregate_Bool_Exp;
  authUserRoles_aggregate_bool_exp_count: TAuthUserRoles_Aggregate_Bool_Exp_Count;
  authUserRoles_aggregate_fields: TAuthUserRoles_Aggregate_Fields;
  authUserRoles_aggregate_order_by: TAuthUserRoles_Aggregate_Order_By;
  authUserRoles_arr_rel_insert_input: TAuthUserRoles_Arr_Rel_Insert_Input;
  authUserRoles_bool_exp: TAuthUserRoles_Bool_Exp;
  authUserRoles_insert_input: TAuthUserRoles_Insert_Input;
  authUserRoles_max_fields: TAuthUserRoles_Max_Fields;
  authUserRoles_max_order_by: TAuthUserRoles_Max_Order_By;
  authUserRoles_min_fields: TAuthUserRoles_Min_Fields;
  authUserRoles_min_order_by: TAuthUserRoles_Min_Order_By;
  authUserRoles_mutation_response: TAuthUserRoles_Mutation_Response;
  authUserRoles_on_conflict: TAuthUserRoles_On_Conflict;
  authUserRoles_order_by: TAuthUserRoles_Order_By;
  authUserRoles_pk_columns_input: TAuthUserRoles_Pk_Columns_Input;
  authUserRoles_set_input: TAuthUserRoles_Set_Input;
  authUserRoles_stream_cursor_input: TAuthUserRoles_Stream_Cursor_Input;
  authUserRoles_stream_cursor_value_input: TAuthUserRoles_Stream_Cursor_Value_Input;
  authUserRoles_updates: TAuthUserRoles_Updates;
  authUserSecurityKeys: TAuthUserSecurityKeys;
  authUserSecurityKeys_aggregate: TAuthUserSecurityKeys_Aggregate;
  authUserSecurityKeys_aggregate_bool_exp: TAuthUserSecurityKeys_Aggregate_Bool_Exp;
  authUserSecurityKeys_aggregate_bool_exp_count: TAuthUserSecurityKeys_Aggregate_Bool_Exp_Count;
  authUserSecurityKeys_aggregate_fields: TAuthUserSecurityKeys_Aggregate_Fields;
  authUserSecurityKeys_aggregate_order_by: TAuthUserSecurityKeys_Aggregate_Order_By;
  authUserSecurityKeys_arr_rel_insert_input: TAuthUserSecurityKeys_Arr_Rel_Insert_Input;
  authUserSecurityKeys_avg_fields: TAuthUserSecurityKeys_Avg_Fields;
  authUserSecurityKeys_avg_order_by: TAuthUserSecurityKeys_Avg_Order_By;
  authUserSecurityKeys_bool_exp: TAuthUserSecurityKeys_Bool_Exp;
  authUserSecurityKeys_inc_input: TAuthUserSecurityKeys_Inc_Input;
  authUserSecurityKeys_insert_input: TAuthUserSecurityKeys_Insert_Input;
  authUserSecurityKeys_max_fields: TAuthUserSecurityKeys_Max_Fields;
  authUserSecurityKeys_max_order_by: TAuthUserSecurityKeys_Max_Order_By;
  authUserSecurityKeys_min_fields: TAuthUserSecurityKeys_Min_Fields;
  authUserSecurityKeys_min_order_by: TAuthUserSecurityKeys_Min_Order_By;
  authUserSecurityKeys_mutation_response: TAuthUserSecurityKeys_Mutation_Response;
  authUserSecurityKeys_on_conflict: TAuthUserSecurityKeys_On_Conflict;
  authUserSecurityKeys_order_by: TAuthUserSecurityKeys_Order_By;
  authUserSecurityKeys_pk_columns_input: TAuthUserSecurityKeys_Pk_Columns_Input;
  authUserSecurityKeys_set_input: TAuthUserSecurityKeys_Set_Input;
  authUserSecurityKeys_stddev_fields: TAuthUserSecurityKeys_Stddev_Fields;
  authUserSecurityKeys_stddev_order_by: TAuthUserSecurityKeys_Stddev_Order_By;
  authUserSecurityKeys_stddev_pop_fields: TAuthUserSecurityKeys_Stddev_Pop_Fields;
  authUserSecurityKeys_stddev_pop_order_by: TAuthUserSecurityKeys_Stddev_Pop_Order_By;
  authUserSecurityKeys_stddev_samp_fields: TAuthUserSecurityKeys_Stddev_Samp_Fields;
  authUserSecurityKeys_stddev_samp_order_by: TAuthUserSecurityKeys_Stddev_Samp_Order_By;
  authUserSecurityKeys_stream_cursor_input: TAuthUserSecurityKeys_Stream_Cursor_Input;
  authUserSecurityKeys_stream_cursor_value_input: TAuthUserSecurityKeys_Stream_Cursor_Value_Input;
  authUserSecurityKeys_sum_fields: TAuthUserSecurityKeys_Sum_Fields;
  authUserSecurityKeys_sum_order_by: TAuthUserSecurityKeys_Sum_Order_By;
  authUserSecurityKeys_updates: TAuthUserSecurityKeys_Updates;
  authUserSecurityKeys_var_pop_fields: TAuthUserSecurityKeys_Var_Pop_Fields;
  authUserSecurityKeys_var_pop_order_by: TAuthUserSecurityKeys_Var_Pop_Order_By;
  authUserSecurityKeys_var_samp_fields: TAuthUserSecurityKeys_Var_Samp_Fields;
  authUserSecurityKeys_var_samp_order_by: TAuthUserSecurityKeys_Var_Samp_Order_By;
  authUserSecurityKeys_variance_fields: TAuthUserSecurityKeys_Variance_Fields;
  authUserSecurityKeys_variance_order_by: TAuthUserSecurityKeys_Variance_Order_By;
  bigint: Scalars['bigint'];
  bigint_comparison_exp: TBigint_Comparison_Exp;
  boosted_idea_log: TBoosted_Idea_Log;
  boosted_idea_log_aggregate: TBoosted_Idea_Log_Aggregate;
  boosted_idea_log_aggregate_fields: TBoosted_Idea_Log_Aggregate_Fields;
  boosted_idea_log_bool_exp: TBoosted_Idea_Log_Bool_Exp;
  boosted_idea_log_insert_input: TBoosted_Idea_Log_Insert_Input;
  boosted_idea_log_max_fields: TBoosted_Idea_Log_Max_Fields;
  boosted_idea_log_min_fields: TBoosted_Idea_Log_Min_Fields;
  boosted_idea_log_mutation_response: TBoosted_Idea_Log_Mutation_Response;
  boosted_idea_log_on_conflict: TBoosted_Idea_Log_On_Conflict;
  boosted_idea_log_order_by: TBoosted_Idea_Log_Order_By;
  boosted_idea_log_pk_columns_input: TBoosted_Idea_Log_Pk_Columns_Input;
  boosted_idea_log_set_input: TBoosted_Idea_Log_Set_Input;
  boosted_idea_log_stream_cursor_input: TBoosted_Idea_Log_Stream_Cursor_Input;
  boosted_idea_log_stream_cursor_value_input: TBoosted_Idea_Log_Stream_Cursor_Value_Input;
  boosted_idea_log_updates: TBoosted_Idea_Log_Updates;
  boosted_ideas: TBoosted_Ideas;
  boosted_ideas_aggregate: TBoosted_Ideas_Aggregate;
  boosted_ideas_aggregate_fields: TBoosted_Ideas_Aggregate_Fields;
  boosted_ideas_avg_fields: TBoosted_Ideas_Avg_Fields;
  boosted_ideas_bool_exp: TBoosted_Ideas_Bool_Exp;
  boosted_ideas_inc_input: TBoosted_Ideas_Inc_Input;
  boosted_ideas_insert_input: TBoosted_Ideas_Insert_Input;
  boosted_ideas_max_fields: TBoosted_Ideas_Max_Fields;
  boosted_ideas_min_fields: TBoosted_Ideas_Min_Fields;
  boosted_ideas_mutation_response: TBoosted_Ideas_Mutation_Response;
  boosted_ideas_obj_rel_insert_input: TBoosted_Ideas_Obj_Rel_Insert_Input;
  boosted_ideas_on_conflict: TBoosted_Ideas_On_Conflict;
  boosted_ideas_order_by: TBoosted_Ideas_Order_By;
  boosted_ideas_pk_columns_input: TBoosted_Ideas_Pk_Columns_Input;
  boosted_ideas_set_input: TBoosted_Ideas_Set_Input;
  boosted_ideas_stddev_fields: TBoosted_Ideas_Stddev_Fields;
  boosted_ideas_stddev_pop_fields: TBoosted_Ideas_Stddev_Pop_Fields;
  boosted_ideas_stddev_samp_fields: TBoosted_Ideas_Stddev_Samp_Fields;
  boosted_ideas_stream_cursor_input: TBoosted_Ideas_Stream_Cursor_Input;
  boosted_ideas_stream_cursor_value_input: TBoosted_Ideas_Stream_Cursor_Value_Input;
  boosted_ideas_sum_fields: TBoosted_Ideas_Sum_Fields;
  boosted_ideas_updates: TBoosted_Ideas_Updates;
  boosted_ideas_var_pop_fields: TBoosted_Ideas_Var_Pop_Fields;
  boosted_ideas_var_samp_fields: TBoosted_Ideas_Var_Samp_Fields;
  boosted_ideas_variance_fields: TBoosted_Ideas_Variance_Fields;
  buckets: TBuckets;
  buckets_aggregate: TBuckets_Aggregate;
  buckets_aggregate_fields: TBuckets_Aggregate_Fields;
  buckets_avg_fields: TBuckets_Avg_Fields;
  buckets_bool_exp: TBuckets_Bool_Exp;
  buckets_inc_input: TBuckets_Inc_Input;
  buckets_insert_input: TBuckets_Insert_Input;
  buckets_max_fields: TBuckets_Max_Fields;
  buckets_min_fields: TBuckets_Min_Fields;
  buckets_mutation_response: TBuckets_Mutation_Response;
  buckets_obj_rel_insert_input: TBuckets_Obj_Rel_Insert_Input;
  buckets_on_conflict: TBuckets_On_Conflict;
  buckets_order_by: TBuckets_Order_By;
  buckets_pk_columns_input: TBuckets_Pk_Columns_Input;
  buckets_set_input: TBuckets_Set_Input;
  buckets_stddev_fields: TBuckets_Stddev_Fields;
  buckets_stddev_pop_fields: TBuckets_Stddev_Pop_Fields;
  buckets_stddev_samp_fields: TBuckets_Stddev_Samp_Fields;
  buckets_stream_cursor_input: TBuckets_Stream_Cursor_Input;
  buckets_stream_cursor_value_input: TBuckets_Stream_Cursor_Value_Input;
  buckets_sum_fields: TBuckets_Sum_Fields;
  buckets_updates: TBuckets_Updates;
  buckets_var_pop_fields: TBuckets_Var_Pop_Fields;
  buckets_var_samp_fields: TBuckets_Var_Samp_Fields;
  buckets_variance_fields: TBuckets_Variance_Fields;
  bytea: Scalars['bytea'];
  bytea_comparison_exp: TBytea_Comparison_Exp;
  citext: Scalars['citext'];
  citext_comparison_exp: TCitext_Comparison_Exp;
  comment_status_types: TComment_Status_Types;
  comment_status_types_aggregate: TComment_Status_Types_Aggregate;
  comment_status_types_aggregate_fields: TComment_Status_Types_Aggregate_Fields;
  comment_status_types_bool_exp: TComment_Status_Types_Bool_Exp;
  comment_status_types_enum_comparison_exp: TComment_Status_Types_Enum_Comparison_Exp;
  comment_status_types_insert_input: TComment_Status_Types_Insert_Input;
  comment_status_types_max_fields: TComment_Status_Types_Max_Fields;
  comment_status_types_min_fields: TComment_Status_Types_Min_Fields;
  comment_status_types_mutation_response: TComment_Status_Types_Mutation_Response;
  comment_status_types_on_conflict: TComment_Status_Types_On_Conflict;
  comment_status_types_order_by: TComment_Status_Types_Order_By;
  comment_status_types_pk_columns_input: TComment_Status_Types_Pk_Columns_Input;
  comment_status_types_set_input: TComment_Status_Types_Set_Input;
  comment_status_types_stream_cursor_input: TComment_Status_Types_Stream_Cursor_Input;
  comment_status_types_stream_cursor_value_input: TComment_Status_Types_Stream_Cursor_Value_Input;
  comment_status_types_updates: TComment_Status_Types_Updates;
  files: TFiles;
  files_aggregate: TFiles_Aggregate;
  files_aggregate_bool_exp: TFiles_Aggregate_Bool_Exp;
  files_aggregate_bool_exp_bool_and: TFiles_Aggregate_Bool_Exp_Bool_And;
  files_aggregate_bool_exp_bool_or: TFiles_Aggregate_Bool_Exp_Bool_Or;
  files_aggregate_bool_exp_count: TFiles_Aggregate_Bool_Exp_Count;
  files_aggregate_fields: TFiles_Aggregate_Fields;
  files_aggregate_order_by: TFiles_Aggregate_Order_By;
  files_arr_rel_insert_input: TFiles_Arr_Rel_Insert_Input;
  files_avg_fields: TFiles_Avg_Fields;
  files_avg_order_by: TFiles_Avg_Order_By;
  files_bool_exp: TFiles_Bool_Exp;
  files_inc_input: TFiles_Inc_Input;
  files_insert_input: TFiles_Insert_Input;
  files_max_fields: TFiles_Max_Fields;
  files_max_order_by: TFiles_Max_Order_By;
  files_min_fields: TFiles_Min_Fields;
  files_min_order_by: TFiles_Min_Order_By;
  files_mutation_response: TFiles_Mutation_Response;
  files_on_conflict: TFiles_On_Conflict;
  files_order_by: TFiles_Order_By;
  files_pk_columns_input: TFiles_Pk_Columns_Input;
  files_set_input: TFiles_Set_Input;
  files_stddev_fields: TFiles_Stddev_Fields;
  files_stddev_order_by: TFiles_Stddev_Order_By;
  files_stddev_pop_fields: TFiles_Stddev_Pop_Fields;
  files_stddev_pop_order_by: TFiles_Stddev_Pop_Order_By;
  files_stddev_samp_fields: TFiles_Stddev_Samp_Fields;
  files_stddev_samp_order_by: TFiles_Stddev_Samp_Order_By;
  files_stream_cursor_input: TFiles_Stream_Cursor_Input;
  files_stream_cursor_value_input: TFiles_Stream_Cursor_Value_Input;
  files_sum_fields: TFiles_Sum_Fields;
  files_sum_order_by: TFiles_Sum_Order_By;
  files_updates: TFiles_Updates;
  files_var_pop_fields: TFiles_Var_Pop_Fields;
  files_var_pop_order_by: TFiles_Var_Pop_Order_By;
  files_var_samp_fields: TFiles_Var_Samp_Fields;
  files_var_samp_order_by: TFiles_Var_Samp_Order_By;
  files_variance_fields: TFiles_Variance_Fields;
  files_variance_order_by: TFiles_Variance_Order_By;
  idea_comment_replies: TIdea_Comment_Replies;
  idea_comment_replies_aggregate: TIdea_Comment_Replies_Aggregate;
  idea_comment_replies_aggregate_bool_exp: TIdea_Comment_Replies_Aggregate_Bool_Exp;
  idea_comment_replies_aggregate_bool_exp_count: TIdea_Comment_Replies_Aggregate_Bool_Exp_Count;
  idea_comment_replies_aggregate_fields: TIdea_Comment_Replies_Aggregate_Fields;
  idea_comment_replies_aggregate_order_by: TIdea_Comment_Replies_Aggregate_Order_By;
  idea_comment_replies_arr_rel_insert_input: TIdea_Comment_Replies_Arr_Rel_Insert_Input;
  idea_comment_replies_bool_exp: TIdea_Comment_Replies_Bool_Exp;
  idea_comment_replies_insert_input: TIdea_Comment_Replies_Insert_Input;
  idea_comment_replies_max_fields: TIdea_Comment_Replies_Max_Fields;
  idea_comment_replies_max_order_by: TIdea_Comment_Replies_Max_Order_By;
  idea_comment_replies_min_fields: TIdea_Comment_Replies_Min_Fields;
  idea_comment_replies_min_order_by: TIdea_Comment_Replies_Min_Order_By;
  idea_comment_replies_mutation_response: TIdea_Comment_Replies_Mutation_Response;
  idea_comment_replies_on_conflict: TIdea_Comment_Replies_On_Conflict;
  idea_comment_replies_order_by: TIdea_Comment_Replies_Order_By;
  idea_comment_replies_pk_columns_input: TIdea_Comment_Replies_Pk_Columns_Input;
  idea_comment_replies_set_input: TIdea_Comment_Replies_Set_Input;
  idea_comment_replies_stream_cursor_input: TIdea_Comment_Replies_Stream_Cursor_Input;
  idea_comment_replies_stream_cursor_value_input: TIdea_Comment_Replies_Stream_Cursor_Value_Input;
  idea_comment_replies_updates: TIdea_Comment_Replies_Updates;
  idea_comments: TIdea_Comments;
  idea_comments_aggregate: TIdea_Comments_Aggregate;
  idea_comments_aggregate_bool_exp: TIdea_Comments_Aggregate_Bool_Exp;
  idea_comments_aggregate_bool_exp_bool_and: TIdea_Comments_Aggregate_Bool_Exp_Bool_And;
  idea_comments_aggregate_bool_exp_bool_or: TIdea_Comments_Aggregate_Bool_Exp_Bool_Or;
  idea_comments_aggregate_bool_exp_count: TIdea_Comments_Aggregate_Bool_Exp_Count;
  idea_comments_aggregate_fields: TIdea_Comments_Aggregate_Fields;
  idea_comments_aggregate_order_by: TIdea_Comments_Aggregate_Order_By;
  idea_comments_arr_rel_insert_input: TIdea_Comments_Arr_Rel_Insert_Input;
  idea_comments_avg_fields: TIdea_Comments_Avg_Fields;
  idea_comments_avg_order_by: TIdea_Comments_Avg_Order_By;
  idea_comments_bool_exp: TIdea_Comments_Bool_Exp;
  idea_comments_inc_input: TIdea_Comments_Inc_Input;
  idea_comments_insert_input: TIdea_Comments_Insert_Input;
  idea_comments_max_fields: TIdea_Comments_Max_Fields;
  idea_comments_max_order_by: TIdea_Comments_Max_Order_By;
  idea_comments_min_fields: TIdea_Comments_Min_Fields;
  idea_comments_min_order_by: TIdea_Comments_Min_Order_By;
  idea_comments_mutation_response: TIdea_Comments_Mutation_Response;
  idea_comments_obj_rel_insert_input: TIdea_Comments_Obj_Rel_Insert_Input;
  idea_comments_on_conflict: TIdea_Comments_On_Conflict;
  idea_comments_order_by: TIdea_Comments_Order_By;
  idea_comments_pk_columns_input: TIdea_Comments_Pk_Columns_Input;
  idea_comments_set_input: TIdea_Comments_Set_Input;
  idea_comments_stddev_fields: TIdea_Comments_Stddev_Fields;
  idea_comments_stddev_order_by: TIdea_Comments_Stddev_Order_By;
  idea_comments_stddev_pop_fields: TIdea_Comments_Stddev_Pop_Fields;
  idea_comments_stddev_pop_order_by: TIdea_Comments_Stddev_Pop_Order_By;
  idea_comments_stddev_samp_fields: TIdea_Comments_Stddev_Samp_Fields;
  idea_comments_stddev_samp_order_by: TIdea_Comments_Stddev_Samp_Order_By;
  idea_comments_stream_cursor_input: TIdea_Comments_Stream_Cursor_Input;
  idea_comments_stream_cursor_value_input: TIdea_Comments_Stream_Cursor_Value_Input;
  idea_comments_sum_fields: TIdea_Comments_Sum_Fields;
  idea_comments_sum_order_by: TIdea_Comments_Sum_Order_By;
  idea_comments_updates: TIdea_Comments_Updates;
  idea_comments_var_pop_fields: TIdea_Comments_Var_Pop_Fields;
  idea_comments_var_pop_order_by: TIdea_Comments_Var_Pop_Order_By;
  idea_comments_var_samp_fields: TIdea_Comments_Var_Samp_Fields;
  idea_comments_var_samp_order_by: TIdea_Comments_Var_Samp_Order_By;
  idea_comments_variance_fields: TIdea_Comments_Variance_Fields;
  idea_comments_variance_order_by: TIdea_Comments_Variance_Order_By;
  idea_preview: TIdea_Preview;
  idea_preview_aggregate: TIdea_Preview_Aggregate;
  idea_preview_aggregate_fields: TIdea_Preview_Aggregate_Fields;
  idea_preview_bool_exp: TIdea_Preview_Bool_Exp;
  idea_preview_insert_input: TIdea_Preview_Insert_Input;
  idea_preview_max_fields: TIdea_Preview_Max_Fields;
  idea_preview_min_fields: TIdea_Preview_Min_Fields;
  idea_preview_mutation_response: TIdea_Preview_Mutation_Response;
  idea_preview_order_by: TIdea_Preview_Order_By;
  idea_preview_set_input: TIdea_Preview_Set_Input;
  idea_preview_stream_cursor_input: TIdea_Preview_Stream_Cursor_Input;
  idea_preview_stream_cursor_value_input: TIdea_Preview_Stream_Cursor_Value_Input;
  idea_preview_updates: TIdea_Preview_Updates;
  idea_votes: TIdea_Votes;
  idea_votes_aggregate: TIdea_Votes_Aggregate;
  idea_votes_aggregate_bool_exp: TIdea_Votes_Aggregate_Bool_Exp;
  idea_votes_aggregate_bool_exp_count: TIdea_Votes_Aggregate_Bool_Exp_Count;
  idea_votes_aggregate_fields: TIdea_Votes_Aggregate_Fields;
  idea_votes_aggregate_order_by: TIdea_Votes_Aggregate_Order_By;
  idea_votes_arr_rel_insert_input: TIdea_Votes_Arr_Rel_Insert_Input;
  idea_votes_bool_exp: TIdea_Votes_Bool_Exp;
  idea_votes_insert_input: TIdea_Votes_Insert_Input;
  idea_votes_max_fields: TIdea_Votes_Max_Fields;
  idea_votes_max_order_by: TIdea_Votes_Max_Order_By;
  idea_votes_min_fields: TIdea_Votes_Min_Fields;
  idea_votes_min_order_by: TIdea_Votes_Min_Order_By;
  idea_votes_mutation_response: TIdea_Votes_Mutation_Response;
  idea_votes_on_conflict: TIdea_Votes_On_Conflict;
  idea_votes_order_by: TIdea_Votes_Order_By;
  idea_votes_pk_columns_input: TIdea_Votes_Pk_Columns_Input;
  idea_votes_set_input: TIdea_Votes_Set_Input;
  idea_votes_stream_cursor_input: TIdea_Votes_Stream_Cursor_Input;
  idea_votes_stream_cursor_value_input: TIdea_Votes_Stream_Cursor_Value_Input;
  idea_votes_updates: TIdea_Votes_Updates;
  ideas: TIdeas;
  ideas_aggregate: TIdeas_Aggregate;
  ideas_aggregate_bool_exp: TIdeas_Aggregate_Bool_Exp;
  ideas_aggregate_bool_exp_bool_and: TIdeas_Aggregate_Bool_Exp_Bool_And;
  ideas_aggregate_bool_exp_bool_or: TIdeas_Aggregate_Bool_Exp_Bool_Or;
  ideas_aggregate_bool_exp_count: TIdeas_Aggregate_Bool_Exp_Count;
  ideas_aggregate_fields: TIdeas_Aggregate_Fields;
  ideas_aggregate_order_by: TIdeas_Aggregate_Order_By;
  ideas_arr_rel_insert_input: TIdeas_Arr_Rel_Insert_Input;
  ideas_avg_fields: TIdeas_Avg_Fields;
  ideas_avg_order_by: TIdeas_Avg_Order_By;
  ideas_bool_exp: TIdeas_Bool_Exp;
  ideas_inc_input: TIdeas_Inc_Input;
  ideas_insert_input: TIdeas_Insert_Input;
  ideas_max_fields: TIdeas_Max_Fields;
  ideas_max_order_by: TIdeas_Max_Order_By;
  ideas_min_fields: TIdeas_Min_Fields;
  ideas_min_order_by: TIdeas_Min_Order_By;
  ideas_mutation_response: TIdeas_Mutation_Response;
  ideas_obj_rel_insert_input: TIdeas_Obj_Rel_Insert_Input;
  ideas_on_conflict: TIdeas_On_Conflict;
  ideas_order_by: TIdeas_Order_By;
  ideas_pk_columns_input: TIdeas_Pk_Columns_Input;
  ideas_set_input: TIdeas_Set_Input;
  ideas_stddev_fields: TIdeas_Stddev_Fields;
  ideas_stddev_order_by: TIdeas_Stddev_Order_By;
  ideas_stddev_pop_fields: TIdeas_Stddev_Pop_Fields;
  ideas_stddev_pop_order_by: TIdeas_Stddev_Pop_Order_By;
  ideas_stddev_samp_fields: TIdeas_Stddev_Samp_Fields;
  ideas_stddev_samp_order_by: TIdeas_Stddev_Samp_Order_By;
  ideas_stream_cursor_input: TIdeas_Stream_Cursor_Input;
  ideas_stream_cursor_value_input: TIdeas_Stream_Cursor_Value_Input;
  ideas_sum_fields: TIdeas_Sum_Fields;
  ideas_sum_order_by: TIdeas_Sum_Order_By;
  ideas_updates: TIdeas_Updates;
  ideas_var_pop_fields: TIdeas_Var_Pop_Fields;
  ideas_var_pop_order_by: TIdeas_Var_Pop_Order_By;
  ideas_var_samp_fields: TIdeas_Var_Samp_Fields;
  ideas_var_samp_order_by: TIdeas_Var_Samp_Order_By;
  ideas_variance_fields: TIdeas_Variance_Fields;
  ideas_variance_order_by: TIdeas_Variance_Order_By;
  interested_ideas: TInterested_Ideas;
  interested_ideas_aggregate: TInterested_Ideas_Aggregate;
  interested_ideas_aggregate_bool_exp: TInterested_Ideas_Aggregate_Bool_Exp;
  interested_ideas_aggregate_bool_exp_count: TInterested_Ideas_Aggregate_Bool_Exp_Count;
  interested_ideas_aggregate_fields: TInterested_Ideas_Aggregate_Fields;
  interested_ideas_aggregate_order_by: TInterested_Ideas_Aggregate_Order_By;
  interested_ideas_arr_rel_insert_input: TInterested_Ideas_Arr_Rel_Insert_Input;
  interested_ideas_bool_exp: TInterested_Ideas_Bool_Exp;
  interested_ideas_insert_input: TInterested_Ideas_Insert_Input;
  interested_ideas_max_fields: TInterested_Ideas_Max_Fields;
  interested_ideas_max_order_by: TInterested_Ideas_Max_Order_By;
  interested_ideas_min_fields: TInterested_Ideas_Min_Fields;
  interested_ideas_min_order_by: TInterested_Ideas_Min_Order_By;
  interested_ideas_mutation_response: TInterested_Ideas_Mutation_Response;
  interested_ideas_on_conflict: TInterested_Ideas_On_Conflict;
  interested_ideas_order_by: TInterested_Ideas_Order_By;
  interested_ideas_pk_columns_input: TInterested_Ideas_Pk_Columns_Input;
  interested_ideas_set_input: TInterested_Ideas_Set_Input;
  interested_ideas_stream_cursor_input: TInterested_Ideas_Stream_Cursor_Input;
  interested_ideas_stream_cursor_value_input: TInterested_Ideas_Stream_Cursor_Value_Input;
  interested_ideas_updates: TInterested_Ideas_Updates;
  jsonb: Scalars['jsonb'];
  jsonb_cast_exp: TJsonb_Cast_Exp;
  jsonb_comparison_exp: TJsonb_Comparison_Exp;
  match_settings: TMatch_Settings;
  match_settings_aggregate: TMatch_Settings_Aggregate;
  match_settings_aggregate_fields: TMatch_Settings_Aggregate_Fields;
  match_settings_append_input: TMatch_Settings_Append_Input;
  match_settings_bool_exp: TMatch_Settings_Bool_Exp;
  match_settings_delete_at_path_input: TMatch_Settings_Delete_At_Path_Input;
  match_settings_delete_elem_input: TMatch_Settings_Delete_Elem_Input;
  match_settings_delete_key_input: TMatch_Settings_Delete_Key_Input;
  match_settings_insert_input: TMatch_Settings_Insert_Input;
  match_settings_max_fields: TMatch_Settings_Max_Fields;
  match_settings_min_fields: TMatch_Settings_Min_Fields;
  match_settings_mutation_response: TMatch_Settings_Mutation_Response;
  match_settings_obj_rel_insert_input: TMatch_Settings_Obj_Rel_Insert_Input;
  match_settings_on_conflict: TMatch_Settings_On_Conflict;
  match_settings_order_by: TMatch_Settings_Order_By;
  match_settings_pk_columns_input: TMatch_Settings_Pk_Columns_Input;
  match_settings_prepend_input: TMatch_Settings_Prepend_Input;
  match_settings_set_input: TMatch_Settings_Set_Input;
  match_settings_stream_cursor_input: TMatch_Settings_Stream_Cursor_Input;
  match_settings_stream_cursor_value_input: TMatch_Settings_Stream_Cursor_Value_Input;
  match_settings_updates: TMatch_Settings_Updates;
  message: TMessage;
  message_aggregate: TMessage_Aggregate;
  message_aggregate_bool_exp: TMessage_Aggregate_Bool_Exp;
  message_aggregate_bool_exp_count: TMessage_Aggregate_Bool_Exp_Count;
  message_aggregate_fields: TMessage_Aggregate_Fields;
  message_aggregate_order_by: TMessage_Aggregate_Order_By;
  message_arr_rel_insert_input: TMessage_Arr_Rel_Insert_Input;
  message_bool_exp: TMessage_Bool_Exp;
  message_insert_input: TMessage_Insert_Input;
  message_max_fields: TMessage_Max_Fields;
  message_max_order_by: TMessage_Max_Order_By;
  message_min_fields: TMessage_Min_Fields;
  message_min_order_by: TMessage_Min_Order_By;
  message_mutation_response: TMessage_Mutation_Response;
  message_on_conflict: TMessage_On_Conflict;
  message_order_by: TMessage_Order_By;
  message_pk_columns_input: TMessage_Pk_Columns_Input;
  message_set_input: TMessage_Set_Input;
  message_stream_cursor_input: TMessage_Stream_Cursor_Input;
  message_stream_cursor_value_input: TMessage_Stream_Cursor_Value_Input;
  message_thread: TMessage_Thread;
  message_thread_aggregate: TMessage_Thread_Aggregate;
  message_thread_aggregate_bool_exp: TMessage_Thread_Aggregate_Bool_Exp;
  message_thread_aggregate_bool_exp_count: TMessage_Thread_Aggregate_Bool_Exp_Count;
  message_thread_aggregate_fields: TMessage_Thread_Aggregate_Fields;
  message_thread_aggregate_order_by: TMessage_Thread_Aggregate_Order_By;
  message_thread_arr_rel_insert_input: TMessage_Thread_Arr_Rel_Insert_Input;
  message_thread_bool_exp: TMessage_Thread_Bool_Exp;
  message_thread_insert_input: TMessage_Thread_Insert_Input;
  message_thread_max_fields: TMessage_Thread_Max_Fields;
  message_thread_max_order_by: TMessage_Thread_Max_Order_By;
  message_thread_min_fields: TMessage_Thread_Min_Fields;
  message_thread_min_order_by: TMessage_Thread_Min_Order_By;
  message_thread_mutation_response: TMessage_Thread_Mutation_Response;
  message_thread_obj_rel_insert_input: TMessage_Thread_Obj_Rel_Insert_Input;
  message_thread_on_conflict: TMessage_Thread_On_Conflict;
  message_thread_order_by: TMessage_Thread_Order_By;
  message_thread_pk_columns_input: TMessage_Thread_Pk_Columns_Input;
  message_thread_set_input: TMessage_Thread_Set_Input;
  message_thread_stream_cursor_input: TMessage_Thread_Stream_Cursor_Input;
  message_thread_stream_cursor_value_input: TMessage_Thread_Stream_Cursor_Value_Input;
  message_thread_updates: TMessage_Thread_Updates;
  message_thread_users: TMessage_Thread_Users;
  message_thread_users_aggregate: TMessage_Thread_Users_Aggregate;
  message_thread_users_aggregate_bool_exp: TMessage_Thread_Users_Aggregate_Bool_Exp;
  message_thread_users_aggregate_bool_exp_count: TMessage_Thread_Users_Aggregate_Bool_Exp_Count;
  message_thread_users_aggregate_fields: TMessage_Thread_Users_Aggregate_Fields;
  message_thread_users_aggregate_order_by: TMessage_Thread_Users_Aggregate_Order_By;
  message_thread_users_arr_rel_insert_input: TMessage_Thread_Users_Arr_Rel_Insert_Input;
  message_thread_users_bool_exp: TMessage_Thread_Users_Bool_Exp;
  message_thread_users_insert_input: TMessage_Thread_Users_Insert_Input;
  message_thread_users_max_fields: TMessage_Thread_Users_Max_Fields;
  message_thread_users_max_order_by: TMessage_Thread_Users_Max_Order_By;
  message_thread_users_min_fields: TMessage_Thread_Users_Min_Fields;
  message_thread_users_min_order_by: TMessage_Thread_Users_Min_Order_By;
  message_thread_users_mutation_response: TMessage_Thread_Users_Mutation_Response;
  message_thread_users_on_conflict: TMessage_Thread_Users_On_Conflict;
  message_thread_users_order_by: TMessage_Thread_Users_Order_By;
  message_thread_users_pk_columns_input: TMessage_Thread_Users_Pk_Columns_Input;
  message_thread_users_set_input: TMessage_Thread_Users_Set_Input;
  message_thread_users_stream_cursor_input: TMessage_Thread_Users_Stream_Cursor_Input;
  message_thread_users_stream_cursor_value_input: TMessage_Thread_Users_Stream_Cursor_Value_Input;
  message_thread_users_updates: TMessage_Thread_Users_Updates;
  message_updates: TMessage_Updates;
  money: Scalars['money'];
  money_comparison_exp: TMoney_Comparison_Exp;
  mutation_root: {};
  notification_types: TNotification_Types;
  notification_types_aggregate: TNotification_Types_Aggregate;
  notification_types_aggregate_fields: TNotification_Types_Aggregate_Fields;
  notification_types_bool_exp: TNotification_Types_Bool_Exp;
  notification_types_enum_comparison_exp: TNotification_Types_Enum_Comparison_Exp;
  notification_types_insert_input: TNotification_Types_Insert_Input;
  notification_types_max_fields: TNotification_Types_Max_Fields;
  notification_types_min_fields: TNotification_Types_Min_Fields;
  notification_types_mutation_response: TNotification_Types_Mutation_Response;
  notification_types_on_conflict: TNotification_Types_On_Conflict;
  notification_types_order_by: TNotification_Types_Order_By;
  notification_types_pk_columns_input: TNotification_Types_Pk_Columns_Input;
  notification_types_set_input: TNotification_Types_Set_Input;
  notification_types_stream_cursor_input: TNotification_Types_Stream_Cursor_Input;
  notification_types_stream_cursor_value_input: TNotification_Types_Stream_Cursor_Value_Input;
  notification_types_updates: TNotification_Types_Updates;
  query_root: {};
  report: TReport;
  report_aggregate: TReport_Aggregate;
  report_aggregate_fields: TReport_Aggregate_Fields;
  report_bool_exp: TReport_Bool_Exp;
  report_insert_input: TReport_Insert_Input;
  report_max_fields: TReport_Max_Fields;
  report_min_fields: TReport_Min_Fields;
  report_mutation_response: TReport_Mutation_Response;
  report_on_conflict: TReport_On_Conflict;
  report_order_by: TReport_Order_By;
  report_pk_columns_input: TReport_Pk_Columns_Input;
  report_set_input: TReport_Set_Input;
  report_stream_cursor_input: TReport_Stream_Cursor_Input;
  report_stream_cursor_value_input: TReport_Stream_Cursor_Value_Input;
  report_updates: TReport_Updates;
  subscription_root: {};
  timestamptz: Scalars['timestamptz'];
  timestamptz_comparison_exp: TTimestamptz_Comparison_Exp;
  user_address: TUser_Address;
  user_address_aggregate: TUser_Address_Aggregate;
  user_address_aggregate_fields: TUser_Address_Aggregate_Fields;
  user_address_bool_exp: TUser_Address_Bool_Exp;
  user_address_insert_input: TUser_Address_Insert_Input;
  user_address_max_fields: TUser_Address_Max_Fields;
  user_address_min_fields: TUser_Address_Min_Fields;
  user_address_mutation_response: TUser_Address_Mutation_Response;
  user_address_obj_rel_insert_input: TUser_Address_Obj_Rel_Insert_Input;
  user_address_on_conflict: TUser_Address_On_Conflict;
  user_address_order_by: TUser_Address_Order_By;
  user_address_pk_columns_input: TUser_Address_Pk_Columns_Input;
  user_address_set_input: TUser_Address_Set_Input;
  user_address_stream_cursor_input: TUser_Address_Stream_Cursor_Input;
  user_address_stream_cursor_value_input: TUser_Address_Stream_Cursor_Value_Input;
  user_address_updates: TUser_Address_Updates;
  user_esteem_points_currency: TUser_Esteem_Points_Currency;
  user_esteem_points_currency_aggregate: TUser_Esteem_Points_Currency_Aggregate;
  user_esteem_points_currency_aggregate_fields: TUser_Esteem_Points_Currency_Aggregate_Fields;
  user_esteem_points_currency_avg_fields: TUser_Esteem_Points_Currency_Avg_Fields;
  user_esteem_points_currency_bool_exp: TUser_Esteem_Points_Currency_Bool_Exp;
  user_esteem_points_currency_inc_input: TUser_Esteem_Points_Currency_Inc_Input;
  user_esteem_points_currency_insert_input: TUser_Esteem_Points_Currency_Insert_Input;
  user_esteem_points_currency_max_fields: TUser_Esteem_Points_Currency_Max_Fields;
  user_esteem_points_currency_min_fields: TUser_Esteem_Points_Currency_Min_Fields;
  user_esteem_points_currency_mutation_response: TUser_Esteem_Points_Currency_Mutation_Response;
  user_esteem_points_currency_obj_rel_insert_input: TUser_Esteem_Points_Currency_Obj_Rel_Insert_Input;
  user_esteem_points_currency_on_conflict: TUser_Esteem_Points_Currency_On_Conflict;
  user_esteem_points_currency_order_by: TUser_Esteem_Points_Currency_Order_By;
  user_esteem_points_currency_pk_columns_input: TUser_Esteem_Points_Currency_Pk_Columns_Input;
  user_esteem_points_currency_set_input: TUser_Esteem_Points_Currency_Set_Input;
  user_esteem_points_currency_stddev_fields: TUser_Esteem_Points_Currency_Stddev_Fields;
  user_esteem_points_currency_stddev_pop_fields: TUser_Esteem_Points_Currency_Stddev_Pop_Fields;
  user_esteem_points_currency_stddev_samp_fields: TUser_Esteem_Points_Currency_Stddev_Samp_Fields;
  user_esteem_points_currency_stream_cursor_input: TUser_Esteem_Points_Currency_Stream_Cursor_Input;
  user_esteem_points_currency_stream_cursor_value_input: TUser_Esteem_Points_Currency_Stream_Cursor_Value_Input;
  user_esteem_points_currency_sum_fields: TUser_Esteem_Points_Currency_Sum_Fields;
  user_esteem_points_currency_updates: TUser_Esteem_Points_Currency_Updates;
  user_esteem_points_currency_var_pop_fields: TUser_Esteem_Points_Currency_Var_Pop_Fields;
  user_esteem_points_currency_var_samp_fields: TUser_Esteem_Points_Currency_Var_Samp_Fields;
  user_esteem_points_currency_variance_fields: TUser_Esteem_Points_Currency_Variance_Fields;
  user_followers: TUser_Followers;
  user_followers_aggregate: TUser_Followers_Aggregate;
  user_followers_aggregate_bool_exp: TUser_Followers_Aggregate_Bool_Exp;
  user_followers_aggregate_bool_exp_count: TUser_Followers_Aggregate_Bool_Exp_Count;
  user_followers_aggregate_fields: TUser_Followers_Aggregate_Fields;
  user_followers_aggregate_order_by: TUser_Followers_Aggregate_Order_By;
  user_followers_arr_rel_insert_input: TUser_Followers_Arr_Rel_Insert_Input;
  user_followers_bool_exp: TUser_Followers_Bool_Exp;
  user_followers_insert_input: TUser_Followers_Insert_Input;
  user_followers_max_fields: TUser_Followers_Max_Fields;
  user_followers_max_order_by: TUser_Followers_Max_Order_By;
  user_followers_min_fields: TUser_Followers_Min_Fields;
  user_followers_min_order_by: TUser_Followers_Min_Order_By;
  user_followers_mutation_response: TUser_Followers_Mutation_Response;
  user_followers_on_conflict: TUser_Followers_On_Conflict;
  user_followers_order_by: TUser_Followers_Order_By;
  user_followers_pk_columns_input: TUser_Followers_Pk_Columns_Input;
  user_followers_set_input: TUser_Followers_Set_Input;
  user_followers_stream_cursor_input: TUser_Followers_Stream_Cursor_Input;
  user_followers_stream_cursor_value_input: TUser_Followers_Stream_Cursor_Value_Input;
  user_followers_updates: TUser_Followers_Updates;
  user_notifications: TUser_Notifications;
  user_notifications_aggregate: TUser_Notifications_Aggregate;
  user_notifications_aggregate_bool_exp: TUser_Notifications_Aggregate_Bool_Exp;
  user_notifications_aggregate_bool_exp_bool_and: TUser_Notifications_Aggregate_Bool_Exp_Bool_And;
  user_notifications_aggregate_bool_exp_bool_or: TUser_Notifications_Aggregate_Bool_Exp_Bool_Or;
  user_notifications_aggregate_bool_exp_count: TUser_Notifications_Aggregate_Bool_Exp_Count;
  user_notifications_aggregate_fields: TUser_Notifications_Aggregate_Fields;
  user_notifications_aggregate_order_by: TUser_Notifications_Aggregate_Order_By;
  user_notifications_arr_rel_insert_input: TUser_Notifications_Arr_Rel_Insert_Input;
  user_notifications_bool_exp: TUser_Notifications_Bool_Exp;
  user_notifications_insert_input: TUser_Notifications_Insert_Input;
  user_notifications_max_fields: TUser_Notifications_Max_Fields;
  user_notifications_max_order_by: TUser_Notifications_Max_Order_By;
  user_notifications_min_fields: TUser_Notifications_Min_Fields;
  user_notifications_min_order_by: TUser_Notifications_Min_Order_By;
  user_notifications_mutation_response: TUser_Notifications_Mutation_Response;
  user_notifications_on_conflict: TUser_Notifications_On_Conflict;
  user_notifications_order_by: TUser_Notifications_Order_By;
  user_notifications_pk_columns_input: TUser_Notifications_Pk_Columns_Input;
  user_notifications_set_input: TUser_Notifications_Set_Input;
  user_notifications_stream_cursor_input: TUser_Notifications_Stream_Cursor_Input;
  user_notifications_stream_cursor_value_input: TUser_Notifications_Stream_Cursor_Value_Input;
  user_notifications_updates: TUser_Notifications_Updates;
  user_profile: TUser_Profile;
  user_profile_aggregate: TUser_Profile_Aggregate;
  user_profile_aggregate_bool_exp: TUser_Profile_Aggregate_Bool_Exp;
  user_profile_aggregate_bool_exp_bool_and: TUser_Profile_Aggregate_Bool_Exp_Bool_And;
  user_profile_aggregate_bool_exp_bool_or: TUser_Profile_Aggregate_Bool_Exp_Bool_Or;
  user_profile_aggregate_bool_exp_count: TUser_Profile_Aggregate_Bool_Exp_Count;
  user_profile_aggregate_fields: TUser_Profile_Aggregate_Fields;
  user_profile_aggregate_order_by: TUser_Profile_Aggregate_Order_By;
  user_profile_append_input: TUser_Profile_Append_Input;
  user_profile_arr_rel_insert_input: TUser_Profile_Arr_Rel_Insert_Input;
  user_profile_bool_exp: TUser_Profile_Bool_Exp;
  user_profile_delete_at_path_input: TUser_Profile_Delete_At_Path_Input;
  user_profile_delete_elem_input: TUser_Profile_Delete_Elem_Input;
  user_profile_delete_key_input: TUser_Profile_Delete_Key_Input;
  user_profile_insert_input: TUser_Profile_Insert_Input;
  user_profile_max_fields: TUser_Profile_Max_Fields;
  user_profile_max_order_by: TUser_Profile_Max_Order_By;
  user_profile_min_fields: TUser_Profile_Min_Fields;
  user_profile_min_order_by: TUser_Profile_Min_Order_By;
  user_profile_mutation_response: TUser_Profile_Mutation_Response;
  user_profile_obj_rel_insert_input: TUser_Profile_Obj_Rel_Insert_Input;
  user_profile_on_conflict: TUser_Profile_On_Conflict;
  user_profile_order_by: TUser_Profile_Order_By;
  user_profile_pk_columns_input: TUser_Profile_Pk_Columns_Input;
  user_profile_prepend_input: TUser_Profile_Prepend_Input;
  user_profile_set_input: TUser_Profile_Set_Input;
  user_profile_stream_cursor_input: TUser_Profile_Stream_Cursor_Input;
  user_profile_stream_cursor_value_input: TUser_Profile_Stream_Cursor_Value_Input;
  user_profile_updates: TUser_Profile_Updates;
  users: TUsers;
  users_aggregate: TUsers_Aggregate;
  users_aggregate_bool_exp: TUsers_Aggregate_Bool_Exp;
  users_aggregate_bool_exp_bool_and: TUsers_Aggregate_Bool_Exp_Bool_And;
  users_aggregate_bool_exp_bool_or: TUsers_Aggregate_Bool_Exp_Bool_Or;
  users_aggregate_bool_exp_count: TUsers_Aggregate_Bool_Exp_Count;
  users_aggregate_fields: TUsers_Aggregate_Fields;
  users_aggregate_order_by: TUsers_Aggregate_Order_By;
  users_append_input: TUsers_Append_Input;
  users_arr_rel_insert_input: TUsers_Arr_Rel_Insert_Input;
  users_bool_exp: TUsers_Bool_Exp;
  users_delete_at_path_input: TUsers_Delete_At_Path_Input;
  users_delete_elem_input: TUsers_Delete_Elem_Input;
  users_delete_key_input: TUsers_Delete_Key_Input;
  users_insert_input: TUsers_Insert_Input;
  users_max_fields: TUsers_Max_Fields;
  users_max_order_by: TUsers_Max_Order_By;
  users_min_fields: TUsers_Min_Fields;
  users_min_order_by: TUsers_Min_Order_By;
  users_mutation_response: TUsers_Mutation_Response;
  users_obj_rel_insert_input: TUsers_Obj_Rel_Insert_Input;
  users_on_conflict: TUsers_On_Conflict;
  users_order_by: TUsers_Order_By;
  users_pk_columns_input: TUsers_Pk_Columns_Input;
  users_prepend_input: TUsers_Prepend_Input;
  users_set_input: TUsers_Set_Input;
  users_stream_cursor_input: TUsers_Stream_Cursor_Input;
  users_stream_cursor_value_input: TUsers_Stream_Cursor_Value_Input;
  users_updates: TUsers_Updates;
  uuid: Scalars['uuid'];
  uuid_comparison_exp: TUuid_Comparison_Exp;
  v_comments: TV_Comments;
  v_comments_aggregate: TV_Comments_Aggregate;
  v_comments_aggregate_fields: TV_Comments_Aggregate_Fields;
  v_comments_avg_fields: TV_Comments_Avg_Fields;
  v_comments_bool_exp: TV_Comments_Bool_Exp;
  v_comments_inc_input: TV_Comments_Inc_Input;
  v_comments_insert_input: TV_Comments_Insert_Input;
  v_comments_max_fields: TV_Comments_Max_Fields;
  v_comments_min_fields: TV_Comments_Min_Fields;
  v_comments_mutation_response: TV_Comments_Mutation_Response;
  v_comments_order_by: TV_Comments_Order_By;
  v_comments_set_input: TV_Comments_Set_Input;
  v_comments_stddev_fields: TV_Comments_Stddev_Fields;
  v_comments_stddev_pop_fields: TV_Comments_Stddev_Pop_Fields;
  v_comments_stddev_samp_fields: TV_Comments_Stddev_Samp_Fields;
  v_comments_stream_cursor_input: TV_Comments_Stream_Cursor_Input;
  v_comments_stream_cursor_value_input: TV_Comments_Stream_Cursor_Value_Input;
  v_comments_sum_fields: TV_Comments_Sum_Fields;
  v_comments_updates: TV_Comments_Updates;
  v_comments_var_pop_fields: TV_Comments_Var_Pop_Fields;
  v_comments_var_samp_fields: TV_Comments_Var_Samp_Fields;
  v_comments_variance_fields: TV_Comments_Variance_Fields;
  withdrawal_requests: TWithdrawal_Requests;
  withdrawal_requests_aggregate: TWithdrawal_Requests_Aggregate;
  withdrawal_requests_aggregate_fields: TWithdrawal_Requests_Aggregate_Fields;
  withdrawal_requests_avg_fields: TWithdrawal_Requests_Avg_Fields;
  withdrawal_requests_bool_exp: TWithdrawal_Requests_Bool_Exp;
  withdrawal_requests_inc_input: TWithdrawal_Requests_Inc_Input;
  withdrawal_requests_insert_input: TWithdrawal_Requests_Insert_Input;
  withdrawal_requests_max_fields: TWithdrawal_Requests_Max_Fields;
  withdrawal_requests_min_fields: TWithdrawal_Requests_Min_Fields;
  withdrawal_requests_mutation_response: TWithdrawal_Requests_Mutation_Response;
  withdrawal_requests_on_conflict: TWithdrawal_Requests_On_Conflict;
  withdrawal_requests_order_by: TWithdrawal_Requests_Order_By;
  withdrawal_requests_pk_columns_input: TWithdrawal_Requests_Pk_Columns_Input;
  withdrawal_requests_set_input: TWithdrawal_Requests_Set_Input;
  withdrawal_requests_stddev_fields: TWithdrawal_Requests_Stddev_Fields;
  withdrawal_requests_stddev_pop_fields: TWithdrawal_Requests_Stddev_Pop_Fields;
  withdrawal_requests_stddev_samp_fields: TWithdrawal_Requests_Stddev_Samp_Fields;
  withdrawal_requests_stream_cursor_input: TWithdrawal_Requests_Stream_Cursor_Input;
  withdrawal_requests_stream_cursor_value_input: TWithdrawal_Requests_Stream_Cursor_Value_Input;
  withdrawal_requests_sum_fields: TWithdrawal_Requests_Sum_Fields;
  withdrawal_requests_updates: TWithdrawal_Requests_Updates;
  withdrawal_requests_var_pop_fields: TWithdrawal_Requests_Var_Pop_Fields;
  withdrawal_requests_var_samp_fields: TWithdrawal_Requests_Var_Samp_Fields;
  withdrawal_requests_variance_fields: TWithdrawal_Requests_Variance_Fields;
};

export type TCachedDirectiveArgs = {
  refresh?: Scalars['Boolean'];
  ttl?: Scalars['Int'];
};

export type TCachedDirectiveResolver<Result, Parent, ContextType = any, Args = TCachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type TActivityResolvers<ContextType = any, ParentType extends TResolversParentTypes['activity'] = TResolversParentTypes['activity']> = {
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  event?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  ideaId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  type?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  url?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<TResolversTypes['users']>, ParentType, ContextType>;
  userId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TActivity_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['activity_aggregate'] = TResolversParentTypes['activity_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['activity_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['activity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TActivity_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['activity_aggregate_fields'] = TResolversParentTypes['activity_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TActivity_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['activity_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['activity_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TActivity_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['activity_max_fields'] = TResolversParentTypes['activity_max_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  event?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  ideaId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  type?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  url?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TActivity_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['activity_min_fields'] = TResolversParentTypes['activity_min_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  event?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  ideaId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  type?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  url?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TActivity_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['activity_mutation_response'] = TResolversParentTypes['activity_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['activity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthProviderRequestsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authProviderRequests'] = TResolversParentTypes['authProviderRequests']> = {
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  options?: Resolver<Maybe<TResolversTypes['jsonb']>, ParentType, ContextType, Partial<TAuthProviderRequestsOptionsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthProviderRequests_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['authProviderRequests_aggregate'] = TResolversParentTypes['authProviderRequests_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['authProviderRequests_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['authProviderRequests']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthProviderRequests_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authProviderRequests_aggregate_fields'] = TResolversParentTypes['authProviderRequests_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TAuthProviderRequests_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['authProviderRequests_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['authProviderRequests_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthProviderRequests_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authProviderRequests_max_fields'] = TResolversParentTypes['authProviderRequests_max_fields']> = {
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthProviderRequests_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authProviderRequests_min_fields'] = TResolversParentTypes['authProviderRequests_min_fields']> = {
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthProviderRequests_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['authProviderRequests_mutation_response'] = TResolversParentTypes['authProviderRequests_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['authProviderRequests']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthProvidersResolvers<ContextType = any, ParentType extends TResolversParentTypes['authProviders'] = TResolversParentTypes['authProviders']> = {
  id?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  userProviders?: Resolver<Array<TResolversTypes['authUserProviders']>, ParentType, ContextType, Partial<TAuthProvidersUserProvidersArgs>>;
  userProviders_aggregate?: Resolver<TResolversTypes['authUserProviders_aggregate'], ParentType, ContextType, Partial<TAuthProvidersUserProviders_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthProviders_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['authProviders_aggregate'] = TResolversParentTypes['authProviders_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['authProviders_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['authProviders']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthProviders_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authProviders_aggregate_fields'] = TResolversParentTypes['authProviders_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TAuthProviders_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['authProviders_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['authProviders_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthProviders_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authProviders_max_fields'] = TResolversParentTypes['authProviders_max_fields']> = {
  id?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthProviders_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authProviders_min_fields'] = TResolversParentTypes['authProviders_min_fields']> = {
  id?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthProviders_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['authProviders_mutation_response'] = TResolversParentTypes['authProviders_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['authProviders']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthRefreshTokensResolvers<ContextType = any, ParentType extends TResolversParentTypes['authRefreshTokens'] = TResolversParentTypes['authRefreshTokens']> = {
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  expiresAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  refreshToken?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  refreshTokenHash?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<TResolversTypes['users'], ParentType, ContextType>;
  userId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthRefreshTokens_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['authRefreshTokens_aggregate'] = TResolversParentTypes['authRefreshTokens_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['authRefreshTokens_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['authRefreshTokens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthRefreshTokens_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authRefreshTokens_aggregate_fields'] = TResolversParentTypes['authRefreshTokens_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TAuthRefreshTokens_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['authRefreshTokens_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['authRefreshTokens_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthRefreshTokens_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authRefreshTokens_max_fields'] = TResolversParentTypes['authRefreshTokens_max_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  expiresAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  refreshTokenHash?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthRefreshTokens_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authRefreshTokens_min_fields'] = TResolversParentTypes['authRefreshTokens_min_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  expiresAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  refreshTokenHash?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthRefreshTokens_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['authRefreshTokens_mutation_response'] = TResolversParentTypes['authRefreshTokens_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['authRefreshTokens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthRolesResolvers<ContextType = any, ParentType extends TResolversParentTypes['authRoles'] = TResolversParentTypes['authRoles']> = {
  role?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  userRoles?: Resolver<Array<TResolversTypes['authUserRoles']>, ParentType, ContextType, Partial<TAuthRolesUserRolesArgs>>;
  userRoles_aggregate?: Resolver<TResolversTypes['authUserRoles_aggregate'], ParentType, ContextType, Partial<TAuthRolesUserRoles_AggregateArgs>>;
  usersByDefaultRole?: Resolver<Array<TResolversTypes['users']>, ParentType, ContextType, Partial<TAuthRolesUsersByDefaultRoleArgs>>;
  usersByDefaultRole_aggregate?: Resolver<TResolversTypes['users_aggregate'], ParentType, ContextType, Partial<TAuthRolesUsersByDefaultRole_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthRoles_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['authRoles_aggregate'] = TResolversParentTypes['authRoles_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['authRoles_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['authRoles']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthRoles_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authRoles_aggregate_fields'] = TResolversParentTypes['authRoles_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TAuthRoles_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['authRoles_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['authRoles_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthRoles_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authRoles_max_fields'] = TResolversParentTypes['authRoles_max_fields']> = {
  role?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthRoles_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authRoles_min_fields'] = TResolversParentTypes['authRoles_min_fields']> = {
  role?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthRoles_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['authRoles_mutation_response'] = TResolversParentTypes['authRoles_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['authRoles']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserProvidersResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserProviders'] = TResolversParentTypes['authUserProviders']> = {
  accessToken?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  provider?: Resolver<TResolversTypes['authProviders'], ParentType, ContextType>;
  providerId?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  providerUserId?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<TResolversTypes['users'], ParentType, ContextType>;
  userId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserProviders_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserProviders_aggregate'] = TResolversParentTypes['authUserProviders_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['authUserProviders_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['authUserProviders']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserProviders_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserProviders_aggregate_fields'] = TResolversParentTypes['authUserProviders_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TAuthUserProviders_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['authUserProviders_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['authUserProviders_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserProviders_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserProviders_max_fields'] = TResolversParentTypes['authUserProviders_max_fields']> = {
  accessToken?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  providerUserId?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserProviders_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserProviders_min_fields'] = TResolversParentTypes['authUserProviders_min_fields']> = {
  accessToken?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  providerUserId?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserProviders_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserProviders_mutation_response'] = TResolversParentTypes['authUserProviders_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['authUserProviders']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserRolesResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserRoles'] = TResolversParentTypes['authUserRoles']> = {
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  role?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  roleByRole?: Resolver<TResolversTypes['authRoles'], ParentType, ContextType>;
  user?: Resolver<TResolversTypes['users'], ParentType, ContextType>;
  userId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserRoles_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserRoles_aggregate'] = TResolversParentTypes['authUserRoles_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['authUserRoles_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['authUserRoles']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserRoles_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserRoles_aggregate_fields'] = TResolversParentTypes['authUserRoles_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TAuthUserRoles_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['authUserRoles_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['authUserRoles_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserRoles_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserRoles_max_fields'] = TResolversParentTypes['authUserRoles_max_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  role?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserRoles_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserRoles_min_fields'] = TResolversParentTypes['authUserRoles_min_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  role?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserRoles_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserRoles_mutation_response'] = TResolversParentTypes['authUserRoles_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['authUserRoles']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserSecurityKeysResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserSecurityKeys'] = TResolversParentTypes['authUserSecurityKeys']> = {
  counter?: Resolver<TResolversTypes['bigint'], ParentType, ContextType>;
  credentialId?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  credentialPublicKey?: Resolver<Maybe<TResolversTypes['bytea']>, ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  nickname?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  transports?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<TResolversTypes['users'], ParentType, ContextType>;
  userId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserSecurityKeys_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserSecurityKeys_aggregate'] = TResolversParentTypes['authUserSecurityKeys_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['authUserSecurityKeys_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['authUserSecurityKeys']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserSecurityKeys_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserSecurityKeys_aggregate_fields'] = TResolversParentTypes['authUserSecurityKeys_aggregate_fields']> = {
  avg?: Resolver<Maybe<TResolversTypes['authUserSecurityKeys_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TAuthUserSecurityKeys_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['authUserSecurityKeys_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['authUserSecurityKeys_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<TResolversTypes['authUserSecurityKeys_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<TResolversTypes['authUserSecurityKeys_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<TResolversTypes['authUserSecurityKeys_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<TResolversTypes['authUserSecurityKeys_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<TResolversTypes['authUserSecurityKeys_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<TResolversTypes['authUserSecurityKeys_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<TResolversTypes['authUserSecurityKeys_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserSecurityKeys_Avg_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserSecurityKeys_avg_fields'] = TResolversParentTypes['authUserSecurityKeys_avg_fields']> = {
  counter?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserSecurityKeys_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserSecurityKeys_max_fields'] = TResolversParentTypes['authUserSecurityKeys_max_fields']> = {
  counter?: Resolver<Maybe<TResolversTypes['bigint']>, ParentType, ContextType>;
  credentialId?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  nickname?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  transports?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserSecurityKeys_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserSecurityKeys_min_fields'] = TResolversParentTypes['authUserSecurityKeys_min_fields']> = {
  counter?: Resolver<Maybe<TResolversTypes['bigint']>, ParentType, ContextType>;
  credentialId?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  nickname?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  transports?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserSecurityKeys_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserSecurityKeys_mutation_response'] = TResolversParentTypes['authUserSecurityKeys_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['authUserSecurityKeys']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserSecurityKeys_Stddev_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserSecurityKeys_stddev_fields'] = TResolversParentTypes['authUserSecurityKeys_stddev_fields']> = {
  counter?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserSecurityKeys_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserSecurityKeys_stddev_pop_fields'] = TResolversParentTypes['authUserSecurityKeys_stddev_pop_fields']> = {
  counter?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserSecurityKeys_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserSecurityKeys_stddev_samp_fields'] = TResolversParentTypes['authUserSecurityKeys_stddev_samp_fields']> = {
  counter?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserSecurityKeys_Sum_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserSecurityKeys_sum_fields'] = TResolversParentTypes['authUserSecurityKeys_sum_fields']> = {
  counter?: Resolver<Maybe<TResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserSecurityKeys_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserSecurityKeys_var_pop_fields'] = TResolversParentTypes['authUserSecurityKeys_var_pop_fields']> = {
  counter?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserSecurityKeys_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserSecurityKeys_var_samp_fields'] = TResolversParentTypes['authUserSecurityKeys_var_samp_fields']> = {
  counter?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthUserSecurityKeys_Variance_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['authUserSecurityKeys_variance_fields'] = TResolversParentTypes['authUserSecurityKeys_variance_fields']> = {
  counter?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TBigintScalarConfig extends GraphQLScalarTypeConfig<TResolversTypes['bigint'], any> {
  name: 'bigint';
}

export type TBoosted_Idea_LogResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_idea_log'] = TResolversParentTypes['boosted_idea_log']> = {
  created_at?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  idea_id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  updated_at?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_Idea_Log_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_idea_log_aggregate'] = TResolversParentTypes['boosted_idea_log_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['boosted_idea_log_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['boosted_idea_log']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_Idea_Log_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_idea_log_aggregate_fields'] = TResolversParentTypes['boosted_idea_log_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TBoosted_Idea_Log_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['boosted_idea_log_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['boosted_idea_log_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_Idea_Log_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_idea_log_max_fields'] = TResolversParentTypes['boosted_idea_log_max_fields']> = {
  created_at?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  idea_id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_Idea_Log_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_idea_log_min_fields'] = TResolversParentTypes['boosted_idea_log_min_fields']> = {
  created_at?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  idea_id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_Idea_Log_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_idea_log_mutation_response'] = TResolversParentTypes['boosted_idea_log_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['boosted_idea_log']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_IdeasResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_ideas'] = TResolversParentTypes['boosted_ideas']> = {
  completedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  currencyAmountIncrement?: Resolver<TResolversTypes['money'], ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  idea?: Resolver<Maybe<TResolversTypes['ideas']>, ParentType, ContextType>;
  ideaId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  pointsIncrement?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  remainingCurrencyAmount?: Resolver<Maybe<TResolversTypes['money']>, ParentType, ContextType>;
  remainingPoints?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  totalCurrencyAmount?: Resolver<Maybe<TResolversTypes['money']>, ParentType, ContextType>;
  totalPoints?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_Ideas_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_ideas_aggregate'] = TResolversParentTypes['boosted_ideas_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['boosted_ideas_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['boosted_ideas']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_Ideas_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_ideas_aggregate_fields'] = TResolversParentTypes['boosted_ideas_aggregate_fields']> = {
  avg?: Resolver<Maybe<TResolversTypes['boosted_ideas_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TBoosted_Ideas_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['boosted_ideas_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['boosted_ideas_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<TResolversTypes['boosted_ideas_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<TResolversTypes['boosted_ideas_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<TResolversTypes['boosted_ideas_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<TResolversTypes['boosted_ideas_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<TResolversTypes['boosted_ideas_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<TResolversTypes['boosted_ideas_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<TResolversTypes['boosted_ideas_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_Ideas_Avg_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_ideas_avg_fields'] = TResolversParentTypes['boosted_ideas_avg_fields']> = {
  currencyAmountIncrement?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  pointsIncrement?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  remainingCurrencyAmount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  remainingPoints?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalCurrencyAmount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalPoints?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_Ideas_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_ideas_max_fields'] = TResolversParentTypes['boosted_ideas_max_fields']> = {
  completedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  currencyAmountIncrement?: Resolver<Maybe<TResolversTypes['money']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  ideaId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  pointsIncrement?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  remainingCurrencyAmount?: Resolver<Maybe<TResolversTypes['money']>, ParentType, ContextType>;
  remainingPoints?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  totalCurrencyAmount?: Resolver<Maybe<TResolversTypes['money']>, ParentType, ContextType>;
  totalPoints?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_Ideas_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_ideas_min_fields'] = TResolversParentTypes['boosted_ideas_min_fields']> = {
  completedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  currencyAmountIncrement?: Resolver<Maybe<TResolversTypes['money']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  ideaId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  pointsIncrement?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  remainingCurrencyAmount?: Resolver<Maybe<TResolversTypes['money']>, ParentType, ContextType>;
  remainingPoints?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  totalCurrencyAmount?: Resolver<Maybe<TResolversTypes['money']>, ParentType, ContextType>;
  totalPoints?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_Ideas_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_ideas_mutation_response'] = TResolversParentTypes['boosted_ideas_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['boosted_ideas']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_Ideas_Stddev_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_ideas_stddev_fields'] = TResolversParentTypes['boosted_ideas_stddev_fields']> = {
  currencyAmountIncrement?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  pointsIncrement?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  remainingCurrencyAmount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  remainingPoints?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalCurrencyAmount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalPoints?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_Ideas_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_ideas_stddev_pop_fields'] = TResolversParentTypes['boosted_ideas_stddev_pop_fields']> = {
  currencyAmountIncrement?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  pointsIncrement?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  remainingCurrencyAmount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  remainingPoints?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalCurrencyAmount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalPoints?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_Ideas_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_ideas_stddev_samp_fields'] = TResolversParentTypes['boosted_ideas_stddev_samp_fields']> = {
  currencyAmountIncrement?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  pointsIncrement?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  remainingCurrencyAmount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  remainingPoints?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalCurrencyAmount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalPoints?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_Ideas_Sum_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_ideas_sum_fields'] = TResolversParentTypes['boosted_ideas_sum_fields']> = {
  currencyAmountIncrement?: Resolver<Maybe<TResolversTypes['money']>, ParentType, ContextType>;
  pointsIncrement?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  remainingCurrencyAmount?: Resolver<Maybe<TResolversTypes['money']>, ParentType, ContextType>;
  remainingPoints?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  totalCurrencyAmount?: Resolver<Maybe<TResolversTypes['money']>, ParentType, ContextType>;
  totalPoints?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_Ideas_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_ideas_var_pop_fields'] = TResolversParentTypes['boosted_ideas_var_pop_fields']> = {
  currencyAmountIncrement?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  pointsIncrement?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  remainingCurrencyAmount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  remainingPoints?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalCurrencyAmount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalPoints?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_Ideas_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_ideas_var_samp_fields'] = TResolversParentTypes['boosted_ideas_var_samp_fields']> = {
  currencyAmountIncrement?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  pointsIncrement?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  remainingCurrencyAmount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  remainingPoints?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalCurrencyAmount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalPoints?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBoosted_Ideas_Variance_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['boosted_ideas_variance_fields'] = TResolversParentTypes['boosted_ideas_variance_fields']> = {
  currencyAmountIncrement?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  pointsIncrement?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  remainingCurrencyAmount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  remainingPoints?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalCurrencyAmount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalPoints?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBucketsResolvers<ContextType = any, ParentType extends TResolversParentTypes['buckets'] = TResolversParentTypes['buckets']> = {
  cacheControl?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  downloadExpiration?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  files?: Resolver<Array<TResolversTypes['files']>, ParentType, ContextType, Partial<TBucketsFilesArgs>>;
  files_aggregate?: Resolver<TResolversTypes['files_aggregate'], ParentType, ContextType, Partial<TBucketsFiles_AggregateArgs>>;
  id?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  maxUploadFileSize?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  minUploadFileSize?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  presignedUrlsEnabled?: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  updatedAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBuckets_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['buckets_aggregate'] = TResolversParentTypes['buckets_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['buckets_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['buckets']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBuckets_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['buckets_aggregate_fields'] = TResolversParentTypes['buckets_aggregate_fields']> = {
  avg?: Resolver<Maybe<TResolversTypes['buckets_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TBuckets_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['buckets_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['buckets_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<TResolversTypes['buckets_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<TResolversTypes['buckets_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<TResolversTypes['buckets_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<TResolversTypes['buckets_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<TResolversTypes['buckets_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<TResolversTypes['buckets_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<TResolversTypes['buckets_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBuckets_Avg_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['buckets_avg_fields'] = TResolversParentTypes['buckets_avg_fields']> = {
  downloadExpiration?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  maxUploadFileSize?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  minUploadFileSize?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBuckets_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['buckets_max_fields'] = TResolversParentTypes['buckets_max_fields']> = {
  cacheControl?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  downloadExpiration?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  maxUploadFileSize?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  minUploadFileSize?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBuckets_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['buckets_min_fields'] = TResolversParentTypes['buckets_min_fields']> = {
  cacheControl?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  downloadExpiration?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  maxUploadFileSize?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  minUploadFileSize?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBuckets_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['buckets_mutation_response'] = TResolversParentTypes['buckets_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['buckets']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBuckets_Stddev_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['buckets_stddev_fields'] = TResolversParentTypes['buckets_stddev_fields']> = {
  downloadExpiration?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  maxUploadFileSize?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  minUploadFileSize?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBuckets_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['buckets_stddev_pop_fields'] = TResolversParentTypes['buckets_stddev_pop_fields']> = {
  downloadExpiration?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  maxUploadFileSize?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  minUploadFileSize?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBuckets_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['buckets_stddev_samp_fields'] = TResolversParentTypes['buckets_stddev_samp_fields']> = {
  downloadExpiration?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  maxUploadFileSize?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  minUploadFileSize?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBuckets_Sum_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['buckets_sum_fields'] = TResolversParentTypes['buckets_sum_fields']> = {
  downloadExpiration?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  maxUploadFileSize?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  minUploadFileSize?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBuckets_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['buckets_var_pop_fields'] = TResolversParentTypes['buckets_var_pop_fields']> = {
  downloadExpiration?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  maxUploadFileSize?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  minUploadFileSize?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBuckets_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['buckets_var_samp_fields'] = TResolversParentTypes['buckets_var_samp_fields']> = {
  downloadExpiration?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  maxUploadFileSize?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  minUploadFileSize?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBuckets_Variance_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['buckets_variance_fields'] = TResolversParentTypes['buckets_variance_fields']> = {
  downloadExpiration?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  maxUploadFileSize?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  minUploadFileSize?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TByteaScalarConfig extends GraphQLScalarTypeConfig<TResolversTypes['bytea'], any> {
  name: 'bytea';
}

export interface TCitextScalarConfig extends GraphQLScalarTypeConfig<TResolversTypes['citext'], any> {
  name: 'citext';
}

export type TComment_Status_TypesResolvers<ContextType = any, ParentType extends TResolversParentTypes['comment_status_types'] = TResolversParentTypes['comment_status_types']> = {
  description?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TComment_Status_Types_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['comment_status_types_aggregate'] = TResolversParentTypes['comment_status_types_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['comment_status_types_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['comment_status_types']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TComment_Status_Types_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['comment_status_types_aggregate_fields'] = TResolversParentTypes['comment_status_types_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TComment_Status_Types_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['comment_status_types_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['comment_status_types_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TComment_Status_Types_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['comment_status_types_max_fields'] = TResolversParentTypes['comment_status_types_max_fields']> = {
  description?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TComment_Status_Types_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['comment_status_types_min_fields'] = TResolversParentTypes['comment_status_types_min_fields']> = {
  description?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TComment_Status_Types_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['comment_status_types_mutation_response'] = TResolversParentTypes['comment_status_types_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['comment_status_types']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TFilesResolvers<ContextType = any, ParentType extends TResolversParentTypes['files'] = TResolversParentTypes['files']> = {
  bucket?: Resolver<TResolversTypes['buckets'], ParentType, ContextType>;
  bucketId?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  etag?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  isUploaded?: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  mimeType?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  uploadedByUserId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TFiles_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['files_aggregate'] = TResolversParentTypes['files_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['files_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['files']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TFiles_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['files_aggregate_fields'] = TResolversParentTypes['files_aggregate_fields']> = {
  avg?: Resolver<Maybe<TResolversTypes['files_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TFiles_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['files_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['files_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<TResolversTypes['files_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<TResolversTypes['files_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<TResolversTypes['files_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<TResolversTypes['files_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<TResolversTypes['files_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<TResolversTypes['files_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<TResolversTypes['files_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TFiles_Avg_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['files_avg_fields'] = TResolversParentTypes['files_avg_fields']> = {
  size?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TFiles_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['files_max_fields'] = TResolversParentTypes['files_max_fields']> = {
  bucketId?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  etag?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  mimeType?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  uploadedByUserId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TFiles_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['files_min_fields'] = TResolversParentTypes['files_min_fields']> = {
  bucketId?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  etag?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  mimeType?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  uploadedByUserId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TFiles_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['files_mutation_response'] = TResolversParentTypes['files_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['files']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TFiles_Stddev_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['files_stddev_fields'] = TResolversParentTypes['files_stddev_fields']> = {
  size?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TFiles_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['files_stddev_pop_fields'] = TResolversParentTypes['files_stddev_pop_fields']> = {
  size?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TFiles_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['files_stddev_samp_fields'] = TResolversParentTypes['files_stddev_samp_fields']> = {
  size?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TFiles_Sum_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['files_sum_fields'] = TResolversParentTypes['files_sum_fields']> = {
  size?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TFiles_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['files_var_pop_fields'] = TResolversParentTypes['files_var_pop_fields']> = {
  size?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TFiles_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['files_var_samp_fields'] = TResolversParentTypes['files_var_samp_fields']> = {
  size?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TFiles_Variance_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['files_variance_fields'] = TResolversParentTypes['files_variance_fields']> = {
  size?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comment_RepliesResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comment_replies'] = TResolversParentTypes['idea_comment_replies']> = {
  comment?: Resolver<Maybe<TResolversTypes['idea_comments']>, ParentType, ContextType>;
  commentId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  ideaId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  targetUserId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  updatedAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<Maybe<TResolversTypes['users']>, ParentType, ContextType>;
  userId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  value?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comment_Replies_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comment_replies_aggregate'] = TResolversParentTypes['idea_comment_replies_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['idea_comment_replies_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['idea_comment_replies']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comment_Replies_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comment_replies_aggregate_fields'] = TResolversParentTypes['idea_comment_replies_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TIdea_Comment_Replies_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['idea_comment_replies_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['idea_comment_replies_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comment_Replies_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comment_replies_max_fields'] = TResolversParentTypes['idea_comment_replies_max_fields']> = {
  commentId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  ideaId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  targetUserId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  value?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comment_Replies_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comment_replies_min_fields'] = TResolversParentTypes['idea_comment_replies_min_fields']> = {
  commentId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  ideaId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  targetUserId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  value?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comment_Replies_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comment_replies_mutation_response'] = TResolversParentTypes['idea_comment_replies_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['idea_comment_replies']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_CommentsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comments'] = TResolversParentTypes['idea_comments']> = {
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  idea?: Resolver<Maybe<TResolversTypes['ideas']>, ParentType, ContextType>;
  ideaId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  isBoost?: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  replies?: Resolver<Array<TResolversTypes['idea_comment_replies']>, ParentType, ContextType, Partial<TIdea_CommentsRepliesArgs>>;
  replies_aggregate?: Resolver<TResolversTypes['idea_comment_replies_aggregate'], ParentType, ContextType, Partial<TIdea_CommentsReplies_AggregateArgs>>;
  status?: Resolver<TResolversTypes['comment_status_types_enum'], ParentType, ContextType>;
  targetUserId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  totalReplies?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<Maybe<TResolversTypes['users']>, ParentType, ContextType>;
  userId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  value?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comments_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comments_aggregate'] = TResolversParentTypes['idea_comments_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['idea_comments_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['idea_comments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comments_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comments_aggregate_fields'] = TResolversParentTypes['idea_comments_aggregate_fields']> = {
  avg?: Resolver<Maybe<TResolversTypes['idea_comments_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TIdea_Comments_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['idea_comments_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['idea_comments_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<TResolversTypes['idea_comments_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<TResolversTypes['idea_comments_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<TResolversTypes['idea_comments_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<TResolversTypes['idea_comments_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<TResolversTypes['idea_comments_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<TResolversTypes['idea_comments_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<TResolversTypes['idea_comments_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comments_Avg_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comments_avg_fields'] = TResolversParentTypes['idea_comments_avg_fields']> = {
  totalReplies?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comments_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comments_max_fields'] = TResolversParentTypes['idea_comments_max_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  ideaId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  targetUserId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  totalReplies?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  value?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comments_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comments_min_fields'] = TResolversParentTypes['idea_comments_min_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  ideaId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  targetUserId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  totalReplies?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  value?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comments_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comments_mutation_response'] = TResolversParentTypes['idea_comments_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['idea_comments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comments_Stddev_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comments_stddev_fields'] = TResolversParentTypes['idea_comments_stddev_fields']> = {
  totalReplies?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comments_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comments_stddev_pop_fields'] = TResolversParentTypes['idea_comments_stddev_pop_fields']> = {
  totalReplies?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comments_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comments_stddev_samp_fields'] = TResolversParentTypes['idea_comments_stddev_samp_fields']> = {
  totalReplies?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comments_Sum_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comments_sum_fields'] = TResolversParentTypes['idea_comments_sum_fields']> = {
  totalReplies?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comments_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comments_var_pop_fields'] = TResolversParentTypes['idea_comments_var_pop_fields']> = {
  totalReplies?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comments_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comments_var_samp_fields'] = TResolversParentTypes['idea_comments_var_samp_fields']> = {
  totalReplies?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Comments_Variance_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_comments_variance_fields'] = TResolversParentTypes['idea_comments_variance_fields']> = {
  totalReplies?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_PreviewResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_preview'] = TResolversParentTypes['idea_preview']> = {
  boosted_idea?: Resolver<Maybe<TResolversTypes['boosted_ideas']>, ParentType, ContextType>;
  comments?: Resolver<Array<TResolversTypes['idea_comments']>, ParentType, ContextType, Partial<TIdea_PreviewCommentsArgs>>;
  comments_aggregate?: Resolver<TResolversTypes['idea_comments_aggregate'], ParentType, ContextType, Partial<TIdea_PreviewComments_AggregateArgs>>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  field?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  interested?: Resolver<Array<TResolversTypes['interested_ideas']>, ParentType, ContextType, Partial<TIdea_PreviewInterestedArgs>>;
  interested_aggregate?: Resolver<TResolversTypes['interested_ideas_aggregate'], ParentType, ContextType, Partial<TIdea_PreviewInterested_AggregateArgs>>;
  isNew?: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  isPublished?: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<TResolversTypes['users']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  votes?: Resolver<Array<TResolversTypes['idea_votes']>, ParentType, ContextType, Partial<TIdea_PreviewVotesArgs>>;
  votes_aggregate?: Resolver<TResolversTypes['idea_votes_aggregate'], ParentType, ContextType, Partial<TIdea_PreviewVotes_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Preview_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_preview_aggregate'] = TResolversParentTypes['idea_preview_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['idea_preview_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['idea_preview']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Preview_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_preview_aggregate_fields'] = TResolversParentTypes['idea_preview_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TIdea_Preview_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['idea_preview_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['idea_preview_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Preview_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_preview_max_fields'] = TResolversParentTypes['idea_preview_max_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  field?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Preview_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_preview_min_fields'] = TResolversParentTypes['idea_preview_min_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  field?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Preview_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_preview_mutation_response'] = TResolversParentTypes['idea_preview_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['idea_preview']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_VotesResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_votes'] = TResolversParentTypes['idea_votes']> = {
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  idea?: Resolver<Maybe<TResolversTypes['ideas']>, ParentType, ContextType>;
  ideaId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  updatedAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<Maybe<TResolversTypes['users']>, ParentType, ContextType>;
  userId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Votes_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_votes_aggregate'] = TResolversParentTypes['idea_votes_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['idea_votes_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['idea_votes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Votes_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_votes_aggregate_fields'] = TResolversParentTypes['idea_votes_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TIdea_Votes_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['idea_votes_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['idea_votes_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Votes_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_votes_max_fields'] = TResolversParentTypes['idea_votes_max_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  ideaId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Votes_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_votes_min_fields'] = TResolversParentTypes['idea_votes_min_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  ideaId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Votes_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_votes_mutation_response'] = TResolversParentTypes['idea_votes_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['idea_votes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdeasResolvers<ContextType = any, ParentType extends TResolversParentTypes['ideas'] = TResolversParentTypes['ideas']> = {
  additionalInformation?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  boosted_idea?: Resolver<Maybe<TResolversTypes['boosted_ideas']>, ParentType, ContextType>;
  businessPlan?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  comments?: Resolver<Array<TResolversTypes['idea_comments']>, ParentType, ContextType, Partial<TIdeasCommentsArgs>>;
  comments_aggregate?: Resolver<TResolversTypes['idea_comments_aggregate'], ParentType, ContextType, Partial<TIdeasComments_AggregateArgs>>;
  competitors?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  field?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  interested?: Resolver<Array<TResolversTypes['interested_ideas']>, ParentType, ContextType, Partial<TIdeasInterestedArgs>>;
  interested_aggregate?: Resolver<TResolversTypes['interested_ideas_aggregate'], ParentType, ContextType, Partial<TIdeasInterested_AggregateArgs>>;
  isPublished?: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  team?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  totalComments?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  totalInterested?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  totalVotes?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<Maybe<TResolversTypes['users']>, ParentType, ContextType>;
  userId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  votes?: Resolver<Array<TResolversTypes['idea_votes']>, ParentType, ContextType, Partial<TIdeasVotesArgs>>;
  votes_aggregate?: Resolver<TResolversTypes['idea_votes_aggregate'], ParentType, ContextType, Partial<TIdeasVotes_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdeas_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['ideas_aggregate'] = TResolversParentTypes['ideas_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['ideas_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['ideas']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdeas_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['ideas_aggregate_fields'] = TResolversParentTypes['ideas_aggregate_fields']> = {
  avg?: Resolver<Maybe<TResolversTypes['ideas_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TIdeas_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['ideas_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['ideas_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<TResolversTypes['ideas_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<TResolversTypes['ideas_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<TResolversTypes['ideas_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<TResolversTypes['ideas_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<TResolversTypes['ideas_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<TResolversTypes['ideas_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<TResolversTypes['ideas_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdeas_Avg_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['ideas_avg_fields'] = TResolversParentTypes['ideas_avg_fields']> = {
  totalComments?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalInterested?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalVotes?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdeas_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['ideas_max_fields'] = TResolversParentTypes['ideas_max_fields']> = {
  additionalInformation?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  businessPlan?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  competitors?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  field?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  team?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  totalComments?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  totalInterested?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  totalVotes?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdeas_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['ideas_min_fields'] = TResolversParentTypes['ideas_min_fields']> = {
  additionalInformation?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  businessPlan?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  competitors?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  field?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  team?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  totalComments?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  totalInterested?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  totalVotes?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdeas_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['ideas_mutation_response'] = TResolversParentTypes['ideas_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['ideas']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdeas_Stddev_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['ideas_stddev_fields'] = TResolversParentTypes['ideas_stddev_fields']> = {
  totalComments?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalInterested?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalVotes?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdeas_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['ideas_stddev_pop_fields'] = TResolversParentTypes['ideas_stddev_pop_fields']> = {
  totalComments?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalInterested?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalVotes?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdeas_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['ideas_stddev_samp_fields'] = TResolversParentTypes['ideas_stddev_samp_fields']> = {
  totalComments?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalInterested?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalVotes?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdeas_Sum_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['ideas_sum_fields'] = TResolversParentTypes['ideas_sum_fields']> = {
  totalComments?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  totalInterested?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  totalVotes?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdeas_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['ideas_var_pop_fields'] = TResolversParentTypes['ideas_var_pop_fields']> = {
  totalComments?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalInterested?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalVotes?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdeas_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['ideas_var_samp_fields'] = TResolversParentTypes['ideas_var_samp_fields']> = {
  totalComments?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalInterested?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalVotes?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdeas_Variance_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['ideas_variance_fields'] = TResolversParentTypes['ideas_variance_fields']> = {
  totalComments?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalInterested?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  totalVotes?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TInterested_IdeasResolvers<ContextType = any, ParentType extends TResolversParentTypes['interested_ideas'] = TResolversParentTypes['interested_ideas']> = {
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  ideaId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  targetUserId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  updatedAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<Maybe<TResolversTypes['users']>, ParentType, ContextType>;
  userId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TInterested_Ideas_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['interested_ideas_aggregate'] = TResolversParentTypes['interested_ideas_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['interested_ideas_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['interested_ideas']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TInterested_Ideas_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['interested_ideas_aggregate_fields'] = TResolversParentTypes['interested_ideas_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TInterested_Ideas_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['interested_ideas_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['interested_ideas_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TInterested_Ideas_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['interested_ideas_max_fields'] = TResolversParentTypes['interested_ideas_max_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  ideaId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  targetUserId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TInterested_Ideas_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['interested_ideas_min_fields'] = TResolversParentTypes['interested_ideas_min_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  ideaId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  targetUserId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TInterested_Ideas_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['interested_ideas_mutation_response'] = TResolversParentTypes['interested_ideas_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['interested_ideas']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TJsonbScalarConfig extends GraphQLScalarTypeConfig<TResolversTypes['jsonb'], any> {
  name: 'jsonb';
}

export type TMatch_SettingsResolvers<ContextType = any, ParentType extends TResolversParentTypes['match_settings'] = TResolversParentTypes['match_settings']> = {
  lookingFor?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  skills?: Resolver<Maybe<TResolversTypes['jsonb']>, ParentType, ContextType, Partial<TMatch_SettingsSkillsArgs>>;
  type?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<TResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMatch_Settings_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['match_settings_aggregate'] = TResolversParentTypes['match_settings_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['match_settings_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['match_settings']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMatch_Settings_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['match_settings_aggregate_fields'] = TResolversParentTypes['match_settings_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TMatch_Settings_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['match_settings_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['match_settings_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMatch_Settings_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['match_settings_max_fields'] = TResolversParentTypes['match_settings_max_fields']> = {
  lookingFor?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMatch_Settings_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['match_settings_min_fields'] = TResolversParentTypes['match_settings_min_fields']> = {
  lookingFor?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMatch_Settings_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['match_settings_mutation_response'] = TResolversParentTypes['match_settings_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['match_settings']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMessageResolvers<ContextType = any, ParentType extends TResolversParentTypes['message'] = TResolversParentTypes['message']> = {
  content?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  messageThread?: Resolver<TResolversTypes['message_thread'], ParentType, ContextType>;
  sender?: Resolver<TResolversTypes['users'], ParentType, ContextType>;
  senderUserId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  threadId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  updatedAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMessage_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['message_aggregate'] = TResolversParentTypes['message_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['message_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['message']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMessage_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['message_aggregate_fields'] = TResolversParentTypes['message_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TMessage_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['message_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['message_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMessage_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['message_max_fields'] = TResolversParentTypes['message_max_fields']> = {
  content?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  senderUserId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  threadId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMessage_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['message_min_fields'] = TResolversParentTypes['message_min_fields']> = {
  content?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  senderUserId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  threadId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMessage_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['message_mutation_response'] = TResolversParentTypes['message_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['message']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMessage_ThreadResolvers<ContextType = any, ParentType extends TResolversParentTypes['message_thread'] = TResolversParentTypes['message_thread']> = {
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  messageThreadUsers?: Resolver<Array<TResolversTypes['message_thread_users']>, ParentType, ContextType, Partial<TMessage_ThreadMessageThreadUsersArgs>>;
  messageThreadUsers_aggregate?: Resolver<TResolversTypes['message_thread_users_aggregate'], ParentType, ContextType, Partial<TMessage_ThreadMessageThreadUsers_AggregateArgs>>;
  messages?: Resolver<Array<TResolversTypes['message']>, ParentType, ContextType, Partial<TMessage_ThreadMessagesArgs>>;
  messages_aggregate?: Resolver<TResolversTypes['message_aggregate'], ParentType, ContextType, Partial<TMessage_ThreadMessages_AggregateArgs>>;
  name?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<TResolversTypes['users']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  updatedAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMessage_Thread_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['message_thread_aggregate'] = TResolversParentTypes['message_thread_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['message_thread_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['message_thread']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMessage_Thread_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['message_thread_aggregate_fields'] = TResolversParentTypes['message_thread_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TMessage_Thread_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['message_thread_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['message_thread_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMessage_Thread_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['message_thread_max_fields'] = TResolversParentTypes['message_thread_max_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMessage_Thread_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['message_thread_min_fields'] = TResolversParentTypes['message_thread_min_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMessage_Thread_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['message_thread_mutation_response'] = TResolversParentTypes['message_thread_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['message_thread']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMessage_Thread_UsersResolvers<ContextType = any, ParentType extends TResolversParentTypes['message_thread_users'] = TResolversParentTypes['message_thread_users']> = {
  messageThread?: Resolver<TResolversTypes['message_thread'], ParentType, ContextType>;
  threadId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  user?: Resolver<TResolversTypes['users'], ParentType, ContextType>;
  userId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMessage_Thread_Users_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['message_thread_users_aggregate'] = TResolversParentTypes['message_thread_users_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['message_thread_users_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['message_thread_users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMessage_Thread_Users_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['message_thread_users_aggregate_fields'] = TResolversParentTypes['message_thread_users_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TMessage_Thread_Users_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['message_thread_users_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['message_thread_users_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMessage_Thread_Users_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['message_thread_users_max_fields'] = TResolversParentTypes['message_thread_users_max_fields']> = {
  threadId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMessage_Thread_Users_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['message_thread_users_min_fields'] = TResolversParentTypes['message_thread_users_min_fields']> = {
  threadId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TMessage_Thread_Users_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['message_thread_users_mutation_response'] = TResolversParentTypes['message_thread_users_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['message_thread_users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TMoneyScalarConfig extends GraphQLScalarTypeConfig<TResolversTypes['money'], any> {
  name: 'money';
}

export type TMutation_RootResolvers<ContextType = any, ParentType extends TResolversParentTypes['mutation_root'] = TResolversParentTypes['mutation_root']> = {
  deleteAuthProvider?: Resolver<Maybe<TResolversTypes['authProviders']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteAuthProviderArgs, 'id'>>;
  deleteAuthProviderRequest?: Resolver<Maybe<TResolversTypes['authProviderRequests']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteAuthProviderRequestArgs, 'id'>>;
  deleteAuthProviderRequests?: Resolver<Maybe<TResolversTypes['authProviderRequests_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteAuthProviderRequestsArgs, 'where'>>;
  deleteAuthProviders?: Resolver<Maybe<TResolversTypes['authProviders_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteAuthProvidersArgs, 'where'>>;
  deleteAuthRefreshToken?: Resolver<Maybe<TResolversTypes['authRefreshTokens']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteAuthRefreshTokenArgs, 'refreshToken'>>;
  deleteAuthRefreshTokens?: Resolver<Maybe<TResolversTypes['authRefreshTokens_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteAuthRefreshTokensArgs, 'where'>>;
  deleteAuthRole?: Resolver<Maybe<TResolversTypes['authRoles']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteAuthRoleArgs, 'role'>>;
  deleteAuthRoles?: Resolver<Maybe<TResolversTypes['authRoles_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteAuthRolesArgs, 'where'>>;
  deleteAuthUserProvider?: Resolver<Maybe<TResolversTypes['authUserProviders']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteAuthUserProviderArgs, 'id'>>;
  deleteAuthUserProviders?: Resolver<Maybe<TResolversTypes['authUserProviders_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteAuthUserProvidersArgs, 'where'>>;
  deleteAuthUserRole?: Resolver<Maybe<TResolversTypes['authUserRoles']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteAuthUserRoleArgs, 'id'>>;
  deleteAuthUserRoles?: Resolver<Maybe<TResolversTypes['authUserRoles_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteAuthUserRolesArgs, 'where'>>;
  deleteAuthUserSecurityKey?: Resolver<Maybe<TResolversTypes['authUserSecurityKeys']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteAuthUserSecurityKeyArgs, 'id'>>;
  deleteAuthUserSecurityKeys?: Resolver<Maybe<TResolversTypes['authUserSecurityKeys_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteAuthUserSecurityKeysArgs, 'where'>>;
  deleteBucket?: Resolver<Maybe<TResolversTypes['buckets']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteBucketArgs, 'id'>>;
  deleteBuckets?: Resolver<Maybe<TResolversTypes['buckets_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteBucketsArgs, 'where'>>;
  deleteFile?: Resolver<Maybe<TResolversTypes['files']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteFileArgs, 'id'>>;
  deleteFiles?: Resolver<Maybe<TResolversTypes['files_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteFilesArgs, 'where'>>;
  deleteUser?: Resolver<Maybe<TResolversTypes['users']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteUserArgs, 'id'>>;
  deleteUsers?: Resolver<Maybe<TResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteUsersArgs, 'where'>>;
  delete_activity?: Resolver<Maybe<TResolversTypes['activity_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_ActivityArgs, 'where'>>;
  delete_activity_by_pk?: Resolver<Maybe<TResolversTypes['activity']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Activity_By_PkArgs, 'id'>>;
  delete_boosted_idea_log?: Resolver<Maybe<TResolversTypes['boosted_idea_log_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Boosted_Idea_LogArgs, 'where'>>;
  delete_boosted_idea_log_by_pk?: Resolver<Maybe<TResolversTypes['boosted_idea_log']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Boosted_Idea_Log_By_PkArgs, 'id'>>;
  delete_boosted_ideas?: Resolver<Maybe<TResolversTypes['boosted_ideas_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Boosted_IdeasArgs, 'where'>>;
  delete_boosted_ideas_by_pk?: Resolver<Maybe<TResolversTypes['boosted_ideas']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Boosted_Ideas_By_PkArgs, 'ideaId'>>;
  delete_comment_status_types?: Resolver<Maybe<TResolversTypes['comment_status_types_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Comment_Status_TypesArgs, 'where'>>;
  delete_comment_status_types_by_pk?: Resolver<Maybe<TResolversTypes['comment_status_types']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Comment_Status_Types_By_PkArgs, 'value'>>;
  delete_idea_comment_replies?: Resolver<Maybe<TResolversTypes['idea_comment_replies_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Idea_Comment_RepliesArgs, 'where'>>;
  delete_idea_comment_replies_by_pk?: Resolver<Maybe<TResolversTypes['idea_comment_replies']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Idea_Comment_Replies_By_PkArgs, 'id'>>;
  delete_idea_comments?: Resolver<Maybe<TResolversTypes['idea_comments_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Idea_CommentsArgs, 'where'>>;
  delete_idea_comments_by_pk?: Resolver<Maybe<TResolversTypes['idea_comments']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Idea_Comments_By_PkArgs, 'id'>>;
  delete_idea_preview?: Resolver<Maybe<TResolversTypes['idea_preview_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Idea_PreviewArgs, 'where'>>;
  delete_idea_votes?: Resolver<Maybe<TResolversTypes['idea_votes_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Idea_VotesArgs, 'where'>>;
  delete_idea_votes_by_pk?: Resolver<Maybe<TResolversTypes['idea_votes']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Idea_Votes_By_PkArgs, 'ideaId' | 'userId'>>;
  delete_ideas?: Resolver<Maybe<TResolversTypes['ideas_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_IdeasArgs, 'where'>>;
  delete_ideas_by_pk?: Resolver<Maybe<TResolversTypes['ideas']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Ideas_By_PkArgs, 'id'>>;
  delete_interested_ideas?: Resolver<Maybe<TResolversTypes['interested_ideas_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Interested_IdeasArgs, 'where'>>;
  delete_interested_ideas_by_pk?: Resolver<Maybe<TResolversTypes['interested_ideas']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Interested_Ideas_By_PkArgs, 'ideaId' | 'userId'>>;
  delete_match_settings?: Resolver<Maybe<TResolversTypes['match_settings_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Match_SettingsArgs, 'where'>>;
  delete_match_settings_by_pk?: Resolver<Maybe<TResolversTypes['match_settings']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Match_Settings_By_PkArgs, 'user_id'>>;
  delete_message?: Resolver<Maybe<TResolversTypes['message_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_MessageArgs, 'where'>>;
  delete_message_by_pk?: Resolver<Maybe<TResolversTypes['message']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Message_By_PkArgs, 'id'>>;
  delete_message_thread?: Resolver<Maybe<TResolversTypes['message_thread_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Message_ThreadArgs, 'where'>>;
  delete_message_thread_by_pk?: Resolver<Maybe<TResolversTypes['message_thread']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Message_Thread_By_PkArgs, 'id'>>;
  delete_message_thread_users?: Resolver<Maybe<TResolversTypes['message_thread_users_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Message_Thread_UsersArgs, 'where'>>;
  delete_message_thread_users_by_pk?: Resolver<Maybe<TResolversTypes['message_thread_users']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Message_Thread_Users_By_PkArgs, 'threadId' | 'userId'>>;
  delete_notification_types?: Resolver<Maybe<TResolversTypes['notification_types_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Notification_TypesArgs, 'where'>>;
  delete_notification_types_by_pk?: Resolver<Maybe<TResolversTypes['notification_types']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Notification_Types_By_PkArgs, 'value'>>;
  delete_report?: Resolver<Maybe<TResolversTypes['report_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_ReportArgs, 'where'>>;
  delete_report_by_pk?: Resolver<Maybe<TResolversTypes['report']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Report_By_PkArgs, 'id'>>;
  delete_user_address?: Resolver<Maybe<TResolversTypes['user_address_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_User_AddressArgs, 'where'>>;
  delete_user_address_by_pk?: Resolver<Maybe<TResolversTypes['user_address']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_User_Address_By_PkArgs, 'userId'>>;
  delete_user_esteem_points_currency?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_User_Esteem_Points_CurrencyArgs, 'where'>>;
  delete_user_esteem_points_currency_by_pk?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_User_Esteem_Points_Currency_By_PkArgs, 'userId'>>;
  delete_user_followers?: Resolver<Maybe<TResolversTypes['user_followers_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_User_FollowersArgs, 'where'>>;
  delete_user_followers_by_pk?: Resolver<Maybe<TResolversTypes['user_followers']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_User_Followers_By_PkArgs, 'followerId' | 'followingId'>>;
  delete_user_notifications?: Resolver<Maybe<TResolversTypes['user_notifications_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_User_NotificationsArgs, 'where'>>;
  delete_user_notifications_by_pk?: Resolver<Maybe<TResolversTypes['user_notifications']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_User_Notifications_By_PkArgs, 'id'>>;
  delete_user_profile?: Resolver<Maybe<TResolversTypes['user_profile_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_User_ProfileArgs, 'where'>>;
  delete_user_profile_by_pk?: Resolver<Maybe<TResolversTypes['user_profile']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_User_Profile_By_PkArgs, 'id'>>;
  delete_v_comments?: Resolver<Maybe<TResolversTypes['v_comments_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_V_CommentsArgs, 'where'>>;
  delete_withdrawal_requests?: Resolver<Maybe<TResolversTypes['withdrawal_requests_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Withdrawal_RequestsArgs, 'where'>>;
  delete_withdrawal_requests_by_pk?: Resolver<Maybe<TResolversTypes['withdrawal_requests']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Withdrawal_Requests_By_PkArgs, 'id'>>;
  insertAuthProvider?: Resolver<Maybe<TResolversTypes['authProviders']>, ParentType, ContextType, RequireFields<TMutation_RootInsertAuthProviderArgs, 'object'>>;
  insertAuthProviderRequest?: Resolver<Maybe<TResolversTypes['authProviderRequests']>, ParentType, ContextType, RequireFields<TMutation_RootInsertAuthProviderRequestArgs, 'object'>>;
  insertAuthProviderRequests?: Resolver<Maybe<TResolversTypes['authProviderRequests_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsertAuthProviderRequestsArgs, 'objects'>>;
  insertAuthProviders?: Resolver<Maybe<TResolversTypes['authProviders_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsertAuthProvidersArgs, 'objects'>>;
  insertAuthRefreshToken?: Resolver<Maybe<TResolversTypes['authRefreshTokens']>, ParentType, ContextType, RequireFields<TMutation_RootInsertAuthRefreshTokenArgs, 'object'>>;
  insertAuthRefreshTokens?: Resolver<Maybe<TResolversTypes['authRefreshTokens_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsertAuthRefreshTokensArgs, 'objects'>>;
  insertAuthRole?: Resolver<Maybe<TResolversTypes['authRoles']>, ParentType, ContextType, RequireFields<TMutation_RootInsertAuthRoleArgs, 'object'>>;
  insertAuthRoles?: Resolver<Maybe<TResolversTypes['authRoles_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsertAuthRolesArgs, 'objects'>>;
  insertAuthUserProvider?: Resolver<Maybe<TResolversTypes['authUserProviders']>, ParentType, ContextType, RequireFields<TMutation_RootInsertAuthUserProviderArgs, 'object'>>;
  insertAuthUserProviders?: Resolver<Maybe<TResolversTypes['authUserProviders_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsertAuthUserProvidersArgs, 'objects'>>;
  insertAuthUserRole?: Resolver<Maybe<TResolversTypes['authUserRoles']>, ParentType, ContextType, RequireFields<TMutation_RootInsertAuthUserRoleArgs, 'object'>>;
  insertAuthUserRoles?: Resolver<Maybe<TResolversTypes['authUserRoles_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsertAuthUserRolesArgs, 'objects'>>;
  insertAuthUserSecurityKey?: Resolver<Maybe<TResolversTypes['authUserSecurityKeys']>, ParentType, ContextType, RequireFields<TMutation_RootInsertAuthUserSecurityKeyArgs, 'object'>>;
  insertAuthUserSecurityKeys?: Resolver<Maybe<TResolversTypes['authUserSecurityKeys_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsertAuthUserSecurityKeysArgs, 'objects'>>;
  insertBucket?: Resolver<Maybe<TResolversTypes['buckets']>, ParentType, ContextType, RequireFields<TMutation_RootInsertBucketArgs, 'object'>>;
  insertBuckets?: Resolver<Maybe<TResolversTypes['buckets_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsertBucketsArgs, 'objects'>>;
  insertFile?: Resolver<Maybe<TResolversTypes['files']>, ParentType, ContextType, RequireFields<TMutation_RootInsertFileArgs, 'object'>>;
  insertFiles?: Resolver<Maybe<TResolversTypes['files_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsertFilesArgs, 'objects'>>;
  insertUser?: Resolver<Maybe<TResolversTypes['users']>, ParentType, ContextType, RequireFields<TMutation_RootInsertUserArgs, 'object'>>;
  insertUsers?: Resolver<Maybe<TResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsertUsersArgs, 'objects'>>;
  insert_activity?: Resolver<Maybe<TResolversTypes['activity_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_ActivityArgs, 'objects'>>;
  insert_activity_one?: Resolver<Maybe<TResolversTypes['activity']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Activity_OneArgs, 'object'>>;
  insert_boosted_idea_log?: Resolver<Maybe<TResolversTypes['boosted_idea_log_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Boosted_Idea_LogArgs, 'objects'>>;
  insert_boosted_idea_log_one?: Resolver<Maybe<TResolversTypes['boosted_idea_log']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Boosted_Idea_Log_OneArgs, 'object'>>;
  insert_boosted_ideas?: Resolver<Maybe<TResolversTypes['boosted_ideas_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Boosted_IdeasArgs, 'objects'>>;
  insert_boosted_ideas_one?: Resolver<Maybe<TResolversTypes['boosted_ideas']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Boosted_Ideas_OneArgs, 'object'>>;
  insert_comment_status_types?: Resolver<Maybe<TResolversTypes['comment_status_types_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Comment_Status_TypesArgs, 'objects'>>;
  insert_comment_status_types_one?: Resolver<Maybe<TResolversTypes['comment_status_types']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Comment_Status_Types_OneArgs, 'object'>>;
  insert_idea_comment_replies?: Resolver<Maybe<TResolversTypes['idea_comment_replies_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Idea_Comment_RepliesArgs, 'objects'>>;
  insert_idea_comment_replies_one?: Resolver<Maybe<TResolversTypes['idea_comment_replies']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Idea_Comment_Replies_OneArgs, 'object'>>;
  insert_idea_comments?: Resolver<Maybe<TResolversTypes['idea_comments_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Idea_CommentsArgs, 'objects'>>;
  insert_idea_comments_one?: Resolver<Maybe<TResolversTypes['idea_comments']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Idea_Comments_OneArgs, 'object'>>;
  insert_idea_preview?: Resolver<Maybe<TResolversTypes['idea_preview_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Idea_PreviewArgs, 'objects'>>;
  insert_idea_preview_one?: Resolver<Maybe<TResolversTypes['idea_preview']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Idea_Preview_OneArgs, 'object'>>;
  insert_idea_votes?: Resolver<Maybe<TResolversTypes['idea_votes_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Idea_VotesArgs, 'objects'>>;
  insert_idea_votes_one?: Resolver<Maybe<TResolversTypes['idea_votes']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Idea_Votes_OneArgs, 'object'>>;
  insert_ideas?: Resolver<Maybe<TResolversTypes['ideas_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_IdeasArgs, 'objects'>>;
  insert_ideas_one?: Resolver<Maybe<TResolversTypes['ideas']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Ideas_OneArgs, 'object'>>;
  insert_interested_ideas?: Resolver<Maybe<TResolversTypes['interested_ideas_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Interested_IdeasArgs, 'objects'>>;
  insert_interested_ideas_one?: Resolver<Maybe<TResolversTypes['interested_ideas']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Interested_Ideas_OneArgs, 'object'>>;
  insert_match_settings?: Resolver<Maybe<TResolversTypes['match_settings_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Match_SettingsArgs, 'objects'>>;
  insert_match_settings_one?: Resolver<Maybe<TResolversTypes['match_settings']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Match_Settings_OneArgs, 'object'>>;
  insert_message?: Resolver<Maybe<TResolversTypes['message_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_MessageArgs, 'objects'>>;
  insert_message_one?: Resolver<Maybe<TResolversTypes['message']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Message_OneArgs, 'object'>>;
  insert_message_thread?: Resolver<Maybe<TResolversTypes['message_thread_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Message_ThreadArgs, 'objects'>>;
  insert_message_thread_one?: Resolver<Maybe<TResolversTypes['message_thread']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Message_Thread_OneArgs, 'object'>>;
  insert_message_thread_users?: Resolver<Maybe<TResolversTypes['message_thread_users_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Message_Thread_UsersArgs, 'objects'>>;
  insert_message_thread_users_one?: Resolver<Maybe<TResolversTypes['message_thread_users']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Message_Thread_Users_OneArgs, 'object'>>;
  insert_notification_types?: Resolver<Maybe<TResolversTypes['notification_types_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Notification_TypesArgs, 'objects'>>;
  insert_notification_types_one?: Resolver<Maybe<TResolversTypes['notification_types']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Notification_Types_OneArgs, 'object'>>;
  insert_report?: Resolver<Maybe<TResolversTypes['report_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_ReportArgs, 'objects'>>;
  insert_report_one?: Resolver<Maybe<TResolversTypes['report']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Report_OneArgs, 'object'>>;
  insert_user_address?: Resolver<Maybe<TResolversTypes['user_address_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_User_AddressArgs, 'objects'>>;
  insert_user_address_one?: Resolver<Maybe<TResolversTypes['user_address']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_User_Address_OneArgs, 'object'>>;
  insert_user_esteem_points_currency?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_User_Esteem_Points_CurrencyArgs, 'objects'>>;
  insert_user_esteem_points_currency_one?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_User_Esteem_Points_Currency_OneArgs, 'object'>>;
  insert_user_followers?: Resolver<Maybe<TResolversTypes['user_followers_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_User_FollowersArgs, 'objects'>>;
  insert_user_followers_one?: Resolver<Maybe<TResolversTypes['user_followers']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_User_Followers_OneArgs, 'object'>>;
  insert_user_notifications?: Resolver<Maybe<TResolversTypes['user_notifications_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_User_NotificationsArgs, 'objects'>>;
  insert_user_notifications_one?: Resolver<Maybe<TResolversTypes['user_notifications']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_User_Notifications_OneArgs, 'object'>>;
  insert_user_profile?: Resolver<Maybe<TResolversTypes['user_profile_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_User_ProfileArgs, 'objects'>>;
  insert_user_profile_one?: Resolver<Maybe<TResolversTypes['user_profile']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_User_Profile_OneArgs, 'object'>>;
  insert_v_comments?: Resolver<Maybe<TResolversTypes['v_comments_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_V_CommentsArgs, 'objects'>>;
  insert_v_comments_one?: Resolver<Maybe<TResolversTypes['v_comments']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_V_Comments_OneArgs, 'object'>>;
  insert_withdrawal_requests?: Resolver<Maybe<TResolversTypes['withdrawal_requests_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Withdrawal_RequestsArgs, 'objects'>>;
  insert_withdrawal_requests_one?: Resolver<Maybe<TResolversTypes['withdrawal_requests']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Withdrawal_Requests_OneArgs, 'object'>>;
  updateAuthProvider?: Resolver<Maybe<TResolversTypes['authProviders']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateAuthProviderArgs, 'pk_columns'>>;
  updateAuthProviderRequest?: Resolver<Maybe<TResolversTypes['authProviderRequests']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateAuthProviderRequestArgs, 'pk_columns'>>;
  updateAuthProviderRequests?: Resolver<Maybe<TResolversTypes['authProviderRequests_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateAuthProviderRequestsArgs, 'where'>>;
  updateAuthProviders?: Resolver<Maybe<TResolversTypes['authProviders_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateAuthProvidersArgs, 'where'>>;
  updateAuthRefreshToken?: Resolver<Maybe<TResolversTypes['authRefreshTokens']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateAuthRefreshTokenArgs, 'pk_columns'>>;
  updateAuthRefreshTokens?: Resolver<Maybe<TResolversTypes['authRefreshTokens_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateAuthRefreshTokensArgs, 'where'>>;
  updateAuthRole?: Resolver<Maybe<TResolversTypes['authRoles']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateAuthRoleArgs, 'pk_columns'>>;
  updateAuthRoles?: Resolver<Maybe<TResolversTypes['authRoles_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateAuthRolesArgs, 'where'>>;
  updateAuthUserProvider?: Resolver<Maybe<TResolversTypes['authUserProviders']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateAuthUserProviderArgs, 'pk_columns'>>;
  updateAuthUserProviders?: Resolver<Maybe<TResolversTypes['authUserProviders_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateAuthUserProvidersArgs, 'where'>>;
  updateAuthUserRole?: Resolver<Maybe<TResolversTypes['authUserRoles']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateAuthUserRoleArgs, 'pk_columns'>>;
  updateAuthUserRoles?: Resolver<Maybe<TResolversTypes['authUserRoles_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateAuthUserRolesArgs, 'where'>>;
  updateAuthUserSecurityKey?: Resolver<Maybe<TResolversTypes['authUserSecurityKeys']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateAuthUserSecurityKeyArgs, 'pk_columns'>>;
  updateAuthUserSecurityKeys?: Resolver<Maybe<TResolversTypes['authUserSecurityKeys_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateAuthUserSecurityKeysArgs, 'where'>>;
  updateBucket?: Resolver<Maybe<TResolversTypes['buckets']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateBucketArgs, 'pk_columns'>>;
  updateBuckets?: Resolver<Maybe<TResolversTypes['buckets_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateBucketsArgs, 'where'>>;
  updateFile?: Resolver<Maybe<TResolversTypes['files']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateFileArgs, 'pk_columns'>>;
  updateFiles?: Resolver<Maybe<TResolversTypes['files_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateFilesArgs, 'where'>>;
  updateUser?: Resolver<Maybe<TResolversTypes['users']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateUserArgs, 'pk_columns'>>;
  updateUsers?: Resolver<Maybe<TResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateUsersArgs, 'where'>>;
  update_activity?: Resolver<Maybe<TResolversTypes['activity_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_ActivityArgs, 'where'>>;
  update_activity_by_pk?: Resolver<Maybe<TResolversTypes['activity']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Activity_By_PkArgs, 'pk_columns'>>;
  update_activity_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['activity_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Activity_ManyArgs, 'updates'>>;
  update_authProviderRequests_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['authProviderRequests_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_AuthProviderRequests_ManyArgs, 'updates'>>;
  update_authProviders_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['authProviders_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_AuthProviders_ManyArgs, 'updates'>>;
  update_authRefreshTokens_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['authRefreshTokens_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_AuthRefreshTokens_ManyArgs, 'updates'>>;
  update_authRoles_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['authRoles_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_AuthRoles_ManyArgs, 'updates'>>;
  update_authUserProviders_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['authUserProviders_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_AuthUserProviders_ManyArgs, 'updates'>>;
  update_authUserRoles_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['authUserRoles_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_AuthUserRoles_ManyArgs, 'updates'>>;
  update_authUserSecurityKeys_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['authUserSecurityKeys_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_AuthUserSecurityKeys_ManyArgs, 'updates'>>;
  update_boosted_idea_log?: Resolver<Maybe<TResolversTypes['boosted_idea_log_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Boosted_Idea_LogArgs, 'where'>>;
  update_boosted_idea_log_by_pk?: Resolver<Maybe<TResolversTypes['boosted_idea_log']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Boosted_Idea_Log_By_PkArgs, 'pk_columns'>>;
  update_boosted_idea_log_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['boosted_idea_log_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Boosted_Idea_Log_ManyArgs, 'updates'>>;
  update_boosted_ideas?: Resolver<Maybe<TResolversTypes['boosted_ideas_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Boosted_IdeasArgs, 'where'>>;
  update_boosted_ideas_by_pk?: Resolver<Maybe<TResolversTypes['boosted_ideas']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Boosted_Ideas_By_PkArgs, 'pk_columns'>>;
  update_boosted_ideas_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['boosted_ideas_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Boosted_Ideas_ManyArgs, 'updates'>>;
  update_buckets_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['buckets_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Buckets_ManyArgs, 'updates'>>;
  update_comment_status_types?: Resolver<Maybe<TResolversTypes['comment_status_types_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Comment_Status_TypesArgs, 'where'>>;
  update_comment_status_types_by_pk?: Resolver<Maybe<TResolversTypes['comment_status_types']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Comment_Status_Types_By_PkArgs, 'pk_columns'>>;
  update_comment_status_types_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['comment_status_types_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Comment_Status_Types_ManyArgs, 'updates'>>;
  update_files_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['files_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Files_ManyArgs, 'updates'>>;
  update_idea_comment_replies?: Resolver<Maybe<TResolversTypes['idea_comment_replies_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Idea_Comment_RepliesArgs, 'where'>>;
  update_idea_comment_replies_by_pk?: Resolver<Maybe<TResolversTypes['idea_comment_replies']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Idea_Comment_Replies_By_PkArgs, 'pk_columns'>>;
  update_idea_comment_replies_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['idea_comment_replies_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Idea_Comment_Replies_ManyArgs, 'updates'>>;
  update_idea_comments?: Resolver<Maybe<TResolversTypes['idea_comments_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Idea_CommentsArgs, 'where'>>;
  update_idea_comments_by_pk?: Resolver<Maybe<TResolversTypes['idea_comments']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Idea_Comments_By_PkArgs, 'pk_columns'>>;
  update_idea_comments_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['idea_comments_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Idea_Comments_ManyArgs, 'updates'>>;
  update_idea_preview?: Resolver<Maybe<TResolversTypes['idea_preview_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Idea_PreviewArgs, 'where'>>;
  update_idea_preview_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['idea_preview_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Idea_Preview_ManyArgs, 'updates'>>;
  update_idea_votes?: Resolver<Maybe<TResolversTypes['idea_votes_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Idea_VotesArgs, 'where'>>;
  update_idea_votes_by_pk?: Resolver<Maybe<TResolversTypes['idea_votes']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Idea_Votes_By_PkArgs, 'pk_columns'>>;
  update_idea_votes_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['idea_votes_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Idea_Votes_ManyArgs, 'updates'>>;
  update_ideas?: Resolver<Maybe<TResolversTypes['ideas_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_IdeasArgs, 'where'>>;
  update_ideas_by_pk?: Resolver<Maybe<TResolversTypes['ideas']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Ideas_By_PkArgs, 'pk_columns'>>;
  update_ideas_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['ideas_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Ideas_ManyArgs, 'updates'>>;
  update_interested_ideas?: Resolver<Maybe<TResolversTypes['interested_ideas_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Interested_IdeasArgs, 'where'>>;
  update_interested_ideas_by_pk?: Resolver<Maybe<TResolversTypes['interested_ideas']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Interested_Ideas_By_PkArgs, 'pk_columns'>>;
  update_interested_ideas_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['interested_ideas_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Interested_Ideas_ManyArgs, 'updates'>>;
  update_match_settings?: Resolver<Maybe<TResolversTypes['match_settings_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Match_SettingsArgs, 'where'>>;
  update_match_settings_by_pk?: Resolver<Maybe<TResolversTypes['match_settings']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Match_Settings_By_PkArgs, 'pk_columns'>>;
  update_match_settings_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['match_settings_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Match_Settings_ManyArgs, 'updates'>>;
  update_message?: Resolver<Maybe<TResolversTypes['message_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_MessageArgs, 'where'>>;
  update_message_by_pk?: Resolver<Maybe<TResolversTypes['message']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Message_By_PkArgs, 'pk_columns'>>;
  update_message_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['message_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Message_ManyArgs, 'updates'>>;
  update_message_thread?: Resolver<Maybe<TResolversTypes['message_thread_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Message_ThreadArgs, 'where'>>;
  update_message_thread_by_pk?: Resolver<Maybe<TResolversTypes['message_thread']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Message_Thread_By_PkArgs, 'pk_columns'>>;
  update_message_thread_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['message_thread_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Message_Thread_ManyArgs, 'updates'>>;
  update_message_thread_users?: Resolver<Maybe<TResolversTypes['message_thread_users_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Message_Thread_UsersArgs, 'where'>>;
  update_message_thread_users_by_pk?: Resolver<Maybe<TResolversTypes['message_thread_users']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Message_Thread_Users_By_PkArgs, 'pk_columns'>>;
  update_message_thread_users_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['message_thread_users_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Message_Thread_Users_ManyArgs, 'updates'>>;
  update_notification_types?: Resolver<Maybe<TResolversTypes['notification_types_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Notification_TypesArgs, 'where'>>;
  update_notification_types_by_pk?: Resolver<Maybe<TResolversTypes['notification_types']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Notification_Types_By_PkArgs, 'pk_columns'>>;
  update_notification_types_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['notification_types_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Notification_Types_ManyArgs, 'updates'>>;
  update_report?: Resolver<Maybe<TResolversTypes['report_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_ReportArgs, 'where'>>;
  update_report_by_pk?: Resolver<Maybe<TResolversTypes['report']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Report_By_PkArgs, 'pk_columns'>>;
  update_report_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['report_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Report_ManyArgs, 'updates'>>;
  update_user_address?: Resolver<Maybe<TResolversTypes['user_address_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_AddressArgs, 'where'>>;
  update_user_address_by_pk?: Resolver<Maybe<TResolversTypes['user_address']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_Address_By_PkArgs, 'pk_columns'>>;
  update_user_address_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['user_address_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_Address_ManyArgs, 'updates'>>;
  update_user_esteem_points_currency?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_Esteem_Points_CurrencyArgs, 'where'>>;
  update_user_esteem_points_currency_by_pk?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_Esteem_Points_Currency_By_PkArgs, 'pk_columns'>>;
  update_user_esteem_points_currency_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['user_esteem_points_currency_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_Esteem_Points_Currency_ManyArgs, 'updates'>>;
  update_user_followers?: Resolver<Maybe<TResolversTypes['user_followers_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_FollowersArgs, 'where'>>;
  update_user_followers_by_pk?: Resolver<Maybe<TResolversTypes['user_followers']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_Followers_By_PkArgs, 'pk_columns'>>;
  update_user_followers_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['user_followers_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_Followers_ManyArgs, 'updates'>>;
  update_user_notifications?: Resolver<Maybe<TResolversTypes['user_notifications_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_NotificationsArgs, 'where'>>;
  update_user_notifications_by_pk?: Resolver<Maybe<TResolversTypes['user_notifications']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_Notifications_By_PkArgs, 'pk_columns'>>;
  update_user_notifications_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['user_notifications_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_Notifications_ManyArgs, 'updates'>>;
  update_user_profile?: Resolver<Maybe<TResolversTypes['user_profile_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_ProfileArgs, 'where'>>;
  update_user_profile_by_pk?: Resolver<Maybe<TResolversTypes['user_profile']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_Profile_By_PkArgs, 'pk_columns'>>;
  update_user_profile_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['user_profile_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_Profile_ManyArgs, 'updates'>>;
  update_users_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['users_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Users_ManyArgs, 'updates'>>;
  update_v_comments?: Resolver<Maybe<TResolversTypes['v_comments_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_V_CommentsArgs, 'where'>>;
  update_v_comments_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['v_comments_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_V_Comments_ManyArgs, 'updates'>>;
  update_withdrawal_requests?: Resolver<Maybe<TResolversTypes['withdrawal_requests_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Withdrawal_RequestsArgs, 'where'>>;
  update_withdrawal_requests_by_pk?: Resolver<Maybe<TResolversTypes['withdrawal_requests']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Withdrawal_Requests_By_PkArgs, 'pk_columns'>>;
  update_withdrawal_requests_many?: Resolver<Maybe<Array<Maybe<TResolversTypes['withdrawal_requests_mutation_response']>>>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Withdrawal_Requests_ManyArgs, 'updates'>>;
};

export type TNotification_TypesResolvers<ContextType = any, ParentType extends TResolversParentTypes['notification_types'] = TResolversParentTypes['notification_types']> = {
  description?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNotification_Types_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['notification_types_aggregate'] = TResolversParentTypes['notification_types_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['notification_types_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['notification_types']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNotification_Types_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['notification_types_aggregate_fields'] = TResolversParentTypes['notification_types_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TNotification_Types_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['notification_types_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['notification_types_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNotification_Types_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['notification_types_max_fields'] = TResolversParentTypes['notification_types_max_fields']> = {
  description?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNotification_Types_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['notification_types_min_fields'] = TResolversParentTypes['notification_types_min_fields']> = {
  description?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNotification_Types_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['notification_types_mutation_response'] = TResolversParentTypes['notification_types_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['notification_types']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TQuery_RootResolvers<ContextType = any, ParentType extends TResolversParentTypes['query_root'] = TResolversParentTypes['query_root']> = {
  activity?: Resolver<Array<TResolversTypes['activity']>, ParentType, ContextType, Partial<TQuery_RootActivityArgs>>;
  activity_aggregate?: Resolver<TResolversTypes['activity_aggregate'], ParentType, ContextType, Partial<TQuery_RootActivity_AggregateArgs>>;
  activity_by_pk?: Resolver<Maybe<TResolversTypes['activity']>, ParentType, ContextType, RequireFields<TQuery_RootActivity_By_PkArgs, 'id'>>;
  authProvider?: Resolver<Maybe<TResolversTypes['authProviders']>, ParentType, ContextType, RequireFields<TQuery_RootAuthProviderArgs, 'id'>>;
  authProviderRequest?: Resolver<Maybe<TResolversTypes['authProviderRequests']>, ParentType, ContextType, RequireFields<TQuery_RootAuthProviderRequestArgs, 'id'>>;
  authProviderRequests?: Resolver<Array<TResolversTypes['authProviderRequests']>, ParentType, ContextType, Partial<TQuery_RootAuthProviderRequestsArgs>>;
  authProviderRequestsAggregate?: Resolver<TResolversTypes['authProviderRequests_aggregate'], ParentType, ContextType, Partial<TQuery_RootAuthProviderRequestsAggregateArgs>>;
  authProviders?: Resolver<Array<TResolversTypes['authProviders']>, ParentType, ContextType, Partial<TQuery_RootAuthProvidersArgs>>;
  authProvidersAggregate?: Resolver<TResolversTypes['authProviders_aggregate'], ParentType, ContextType, Partial<TQuery_RootAuthProvidersAggregateArgs>>;
  authRefreshToken?: Resolver<Maybe<TResolversTypes['authRefreshTokens']>, ParentType, ContextType, RequireFields<TQuery_RootAuthRefreshTokenArgs, 'refreshToken'>>;
  authRefreshTokens?: Resolver<Array<TResolversTypes['authRefreshTokens']>, ParentType, ContextType, Partial<TQuery_RootAuthRefreshTokensArgs>>;
  authRefreshTokensAggregate?: Resolver<TResolversTypes['authRefreshTokens_aggregate'], ParentType, ContextType, Partial<TQuery_RootAuthRefreshTokensAggregateArgs>>;
  authRole?: Resolver<Maybe<TResolversTypes['authRoles']>, ParentType, ContextType, RequireFields<TQuery_RootAuthRoleArgs, 'role'>>;
  authRoles?: Resolver<Array<TResolversTypes['authRoles']>, ParentType, ContextType, Partial<TQuery_RootAuthRolesArgs>>;
  authRolesAggregate?: Resolver<TResolversTypes['authRoles_aggregate'], ParentType, ContextType, Partial<TQuery_RootAuthRolesAggregateArgs>>;
  authUserProvider?: Resolver<Maybe<TResolversTypes['authUserProviders']>, ParentType, ContextType, RequireFields<TQuery_RootAuthUserProviderArgs, 'id'>>;
  authUserProviders?: Resolver<Array<TResolversTypes['authUserProviders']>, ParentType, ContextType, Partial<TQuery_RootAuthUserProvidersArgs>>;
  authUserProvidersAggregate?: Resolver<TResolversTypes['authUserProviders_aggregate'], ParentType, ContextType, Partial<TQuery_RootAuthUserProvidersAggregateArgs>>;
  authUserRole?: Resolver<Maybe<TResolversTypes['authUserRoles']>, ParentType, ContextType, RequireFields<TQuery_RootAuthUserRoleArgs, 'id'>>;
  authUserRoles?: Resolver<Array<TResolversTypes['authUserRoles']>, ParentType, ContextType, Partial<TQuery_RootAuthUserRolesArgs>>;
  authUserRolesAggregate?: Resolver<TResolversTypes['authUserRoles_aggregate'], ParentType, ContextType, Partial<TQuery_RootAuthUserRolesAggregateArgs>>;
  authUserSecurityKey?: Resolver<Maybe<TResolversTypes['authUserSecurityKeys']>, ParentType, ContextType, RequireFields<TQuery_RootAuthUserSecurityKeyArgs, 'id'>>;
  authUserSecurityKeys?: Resolver<Array<TResolversTypes['authUserSecurityKeys']>, ParentType, ContextType, Partial<TQuery_RootAuthUserSecurityKeysArgs>>;
  authUserSecurityKeysAggregate?: Resolver<TResolversTypes['authUserSecurityKeys_aggregate'], ParentType, ContextType, Partial<TQuery_RootAuthUserSecurityKeysAggregateArgs>>;
  boosted_idea_log?: Resolver<Array<TResolversTypes['boosted_idea_log']>, ParentType, ContextType, Partial<TQuery_RootBoosted_Idea_LogArgs>>;
  boosted_idea_log_aggregate?: Resolver<TResolversTypes['boosted_idea_log_aggregate'], ParentType, ContextType, Partial<TQuery_RootBoosted_Idea_Log_AggregateArgs>>;
  boosted_idea_log_by_pk?: Resolver<Maybe<TResolversTypes['boosted_idea_log']>, ParentType, ContextType, RequireFields<TQuery_RootBoosted_Idea_Log_By_PkArgs, 'id'>>;
  boosted_ideas?: Resolver<Array<TResolversTypes['boosted_ideas']>, ParentType, ContextType, Partial<TQuery_RootBoosted_IdeasArgs>>;
  boosted_ideas_aggregate?: Resolver<TResolversTypes['boosted_ideas_aggregate'], ParentType, ContextType, Partial<TQuery_RootBoosted_Ideas_AggregateArgs>>;
  boosted_ideas_by_pk?: Resolver<Maybe<TResolversTypes['boosted_ideas']>, ParentType, ContextType, RequireFields<TQuery_RootBoosted_Ideas_By_PkArgs, 'ideaId'>>;
  bucket?: Resolver<Maybe<TResolversTypes['buckets']>, ParentType, ContextType, RequireFields<TQuery_RootBucketArgs, 'id'>>;
  buckets?: Resolver<Array<TResolversTypes['buckets']>, ParentType, ContextType, Partial<TQuery_RootBucketsArgs>>;
  bucketsAggregate?: Resolver<TResolversTypes['buckets_aggregate'], ParentType, ContextType, Partial<TQuery_RootBucketsAggregateArgs>>;
  comment_status_types?: Resolver<Array<TResolversTypes['comment_status_types']>, ParentType, ContextType, Partial<TQuery_RootComment_Status_TypesArgs>>;
  comment_status_types_aggregate?: Resolver<TResolversTypes['comment_status_types_aggregate'], ParentType, ContextType, Partial<TQuery_RootComment_Status_Types_AggregateArgs>>;
  comment_status_types_by_pk?: Resolver<Maybe<TResolversTypes['comment_status_types']>, ParentType, ContextType, RequireFields<TQuery_RootComment_Status_Types_By_PkArgs, 'value'>>;
  file?: Resolver<Maybe<TResolversTypes['files']>, ParentType, ContextType, RequireFields<TQuery_RootFileArgs, 'id'>>;
  files?: Resolver<Array<TResolversTypes['files']>, ParentType, ContextType, Partial<TQuery_RootFilesArgs>>;
  filesAggregate?: Resolver<TResolversTypes['files_aggregate'], ParentType, ContextType, Partial<TQuery_RootFilesAggregateArgs>>;
  idea_comment_replies?: Resolver<Array<TResolversTypes['idea_comment_replies']>, ParentType, ContextType, Partial<TQuery_RootIdea_Comment_RepliesArgs>>;
  idea_comment_replies_aggregate?: Resolver<TResolversTypes['idea_comment_replies_aggregate'], ParentType, ContextType, Partial<TQuery_RootIdea_Comment_Replies_AggregateArgs>>;
  idea_comment_replies_by_pk?: Resolver<Maybe<TResolversTypes['idea_comment_replies']>, ParentType, ContextType, RequireFields<TQuery_RootIdea_Comment_Replies_By_PkArgs, 'id'>>;
  idea_comments?: Resolver<Array<TResolversTypes['idea_comments']>, ParentType, ContextType, Partial<TQuery_RootIdea_CommentsArgs>>;
  idea_comments_aggregate?: Resolver<TResolversTypes['idea_comments_aggregate'], ParentType, ContextType, Partial<TQuery_RootIdea_Comments_AggregateArgs>>;
  idea_comments_by_pk?: Resolver<Maybe<TResolversTypes['idea_comments']>, ParentType, ContextType, RequireFields<TQuery_RootIdea_Comments_By_PkArgs, 'id'>>;
  idea_preview?: Resolver<Array<TResolversTypes['idea_preview']>, ParentType, ContextType, Partial<TQuery_RootIdea_PreviewArgs>>;
  idea_preview_aggregate?: Resolver<TResolversTypes['idea_preview_aggregate'], ParentType, ContextType, Partial<TQuery_RootIdea_Preview_AggregateArgs>>;
  idea_votes?: Resolver<Array<TResolversTypes['idea_votes']>, ParentType, ContextType, Partial<TQuery_RootIdea_VotesArgs>>;
  idea_votes_aggregate?: Resolver<TResolversTypes['idea_votes_aggregate'], ParentType, ContextType, Partial<TQuery_RootIdea_Votes_AggregateArgs>>;
  idea_votes_by_pk?: Resolver<Maybe<TResolversTypes['idea_votes']>, ParentType, ContextType, RequireFields<TQuery_RootIdea_Votes_By_PkArgs, 'ideaId' | 'userId'>>;
  ideas?: Resolver<Array<TResolversTypes['ideas']>, ParentType, ContextType, Partial<TQuery_RootIdeasArgs>>;
  ideas_aggregate?: Resolver<TResolversTypes['ideas_aggregate'], ParentType, ContextType, Partial<TQuery_RootIdeas_AggregateArgs>>;
  ideas_by_pk?: Resolver<Maybe<TResolversTypes['ideas']>, ParentType, ContextType, RequireFields<TQuery_RootIdeas_By_PkArgs, 'id'>>;
  interested_ideas?: Resolver<Array<TResolversTypes['interested_ideas']>, ParentType, ContextType, Partial<TQuery_RootInterested_IdeasArgs>>;
  interested_ideas_aggregate?: Resolver<TResolversTypes['interested_ideas_aggregate'], ParentType, ContextType, Partial<TQuery_RootInterested_Ideas_AggregateArgs>>;
  interested_ideas_by_pk?: Resolver<Maybe<TResolversTypes['interested_ideas']>, ParentType, ContextType, RequireFields<TQuery_RootInterested_Ideas_By_PkArgs, 'ideaId' | 'userId'>>;
  match_settings?: Resolver<Array<TResolversTypes['match_settings']>, ParentType, ContextType, Partial<TQuery_RootMatch_SettingsArgs>>;
  match_settings_aggregate?: Resolver<TResolversTypes['match_settings_aggregate'], ParentType, ContextType, Partial<TQuery_RootMatch_Settings_AggregateArgs>>;
  match_settings_by_pk?: Resolver<Maybe<TResolversTypes['match_settings']>, ParentType, ContextType, RequireFields<TQuery_RootMatch_Settings_By_PkArgs, 'user_id'>>;
  message?: Resolver<Array<TResolversTypes['message']>, ParentType, ContextType, Partial<TQuery_RootMessageArgs>>;
  message_aggregate?: Resolver<TResolversTypes['message_aggregate'], ParentType, ContextType, Partial<TQuery_RootMessage_AggregateArgs>>;
  message_by_pk?: Resolver<Maybe<TResolversTypes['message']>, ParentType, ContextType, RequireFields<TQuery_RootMessage_By_PkArgs, 'id'>>;
  message_thread?: Resolver<Array<TResolversTypes['message_thread']>, ParentType, ContextType, Partial<TQuery_RootMessage_ThreadArgs>>;
  message_thread_aggregate?: Resolver<TResolversTypes['message_thread_aggregate'], ParentType, ContextType, Partial<TQuery_RootMessage_Thread_AggregateArgs>>;
  message_thread_by_pk?: Resolver<Maybe<TResolversTypes['message_thread']>, ParentType, ContextType, RequireFields<TQuery_RootMessage_Thread_By_PkArgs, 'id'>>;
  message_thread_users?: Resolver<Array<TResolversTypes['message_thread_users']>, ParentType, ContextType, Partial<TQuery_RootMessage_Thread_UsersArgs>>;
  message_thread_users_aggregate?: Resolver<TResolversTypes['message_thread_users_aggregate'], ParentType, ContextType, Partial<TQuery_RootMessage_Thread_Users_AggregateArgs>>;
  message_thread_users_by_pk?: Resolver<Maybe<TResolversTypes['message_thread_users']>, ParentType, ContextType, RequireFields<TQuery_RootMessage_Thread_Users_By_PkArgs, 'threadId' | 'userId'>>;
  notification_types?: Resolver<Array<TResolversTypes['notification_types']>, ParentType, ContextType, Partial<TQuery_RootNotification_TypesArgs>>;
  notification_types_aggregate?: Resolver<TResolversTypes['notification_types_aggregate'], ParentType, ContextType, Partial<TQuery_RootNotification_Types_AggregateArgs>>;
  notification_types_by_pk?: Resolver<Maybe<TResolversTypes['notification_types']>, ParentType, ContextType, RequireFields<TQuery_RootNotification_Types_By_PkArgs, 'value'>>;
  report?: Resolver<Array<TResolversTypes['report']>, ParentType, ContextType, Partial<TQuery_RootReportArgs>>;
  report_aggregate?: Resolver<TResolversTypes['report_aggregate'], ParentType, ContextType, Partial<TQuery_RootReport_AggregateArgs>>;
  report_by_pk?: Resolver<Maybe<TResolversTypes['report']>, ParentType, ContextType, RequireFields<TQuery_RootReport_By_PkArgs, 'id'>>;
  user?: Resolver<Maybe<TResolversTypes['users']>, ParentType, ContextType, RequireFields<TQuery_RootUserArgs, 'id'>>;
  user_address?: Resolver<Array<TResolversTypes['user_address']>, ParentType, ContextType, Partial<TQuery_RootUser_AddressArgs>>;
  user_address_aggregate?: Resolver<TResolversTypes['user_address_aggregate'], ParentType, ContextType, Partial<TQuery_RootUser_Address_AggregateArgs>>;
  user_address_by_pk?: Resolver<Maybe<TResolversTypes['user_address']>, ParentType, ContextType, RequireFields<TQuery_RootUser_Address_By_PkArgs, 'userId'>>;
  user_esteem_points_currency?: Resolver<Array<TResolversTypes['user_esteem_points_currency']>, ParentType, ContextType, Partial<TQuery_RootUser_Esteem_Points_CurrencyArgs>>;
  user_esteem_points_currency_aggregate?: Resolver<TResolversTypes['user_esteem_points_currency_aggregate'], ParentType, ContextType, Partial<TQuery_RootUser_Esteem_Points_Currency_AggregateArgs>>;
  user_esteem_points_currency_by_pk?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency']>, ParentType, ContextType, RequireFields<TQuery_RootUser_Esteem_Points_Currency_By_PkArgs, 'userId'>>;
  user_followers?: Resolver<Array<TResolversTypes['user_followers']>, ParentType, ContextType, Partial<TQuery_RootUser_FollowersArgs>>;
  user_followers_aggregate?: Resolver<TResolversTypes['user_followers_aggregate'], ParentType, ContextType, Partial<TQuery_RootUser_Followers_AggregateArgs>>;
  user_followers_by_pk?: Resolver<Maybe<TResolversTypes['user_followers']>, ParentType, ContextType, RequireFields<TQuery_RootUser_Followers_By_PkArgs, 'followerId' | 'followingId'>>;
  user_notifications?: Resolver<Array<TResolversTypes['user_notifications']>, ParentType, ContextType, Partial<TQuery_RootUser_NotificationsArgs>>;
  user_notifications_aggregate?: Resolver<TResolversTypes['user_notifications_aggregate'], ParentType, ContextType, Partial<TQuery_RootUser_Notifications_AggregateArgs>>;
  user_notifications_by_pk?: Resolver<Maybe<TResolversTypes['user_notifications']>, ParentType, ContextType, RequireFields<TQuery_RootUser_Notifications_By_PkArgs, 'id'>>;
  user_profile?: Resolver<Array<TResolversTypes['user_profile']>, ParentType, ContextType, Partial<TQuery_RootUser_ProfileArgs>>;
  user_profile_aggregate?: Resolver<TResolversTypes['user_profile_aggregate'], ParentType, ContextType, Partial<TQuery_RootUser_Profile_AggregateArgs>>;
  user_profile_by_pk?: Resolver<Maybe<TResolversTypes['user_profile']>, ParentType, ContextType, RequireFields<TQuery_RootUser_Profile_By_PkArgs, 'id'>>;
  users?: Resolver<Array<TResolversTypes['users']>, ParentType, ContextType, Partial<TQuery_RootUsersArgs>>;
  usersAggregate?: Resolver<TResolversTypes['users_aggregate'], ParentType, ContextType, Partial<TQuery_RootUsersAggregateArgs>>;
  v_comments?: Resolver<Array<TResolversTypes['v_comments']>, ParentType, ContextType, Partial<TQuery_RootV_CommentsArgs>>;
  v_comments_aggregate?: Resolver<TResolversTypes['v_comments_aggregate'], ParentType, ContextType, Partial<TQuery_RootV_Comments_AggregateArgs>>;
  withdrawal_requests?: Resolver<Array<TResolversTypes['withdrawal_requests']>, ParentType, ContextType, Partial<TQuery_RootWithdrawal_RequestsArgs>>;
  withdrawal_requests_aggregate?: Resolver<TResolversTypes['withdrawal_requests_aggregate'], ParentType, ContextType, Partial<TQuery_RootWithdrawal_Requests_AggregateArgs>>;
  withdrawal_requests_by_pk?: Resolver<Maybe<TResolversTypes['withdrawal_requests']>, ParentType, ContextType, RequireFields<TQuery_RootWithdrawal_Requests_By_PkArgs, 'id'>>;
};

export type TReportResolvers<ContextType = any, ParentType extends TResolversParentTypes['report'] = TResolversParentTypes['report']> = {
  content?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  fromUserId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  reason?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  recipientEmail?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  recipientName?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  reportedId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  reportedUserId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  type?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TReport_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['report_aggregate'] = TResolversParentTypes['report_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['report_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['report']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TReport_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['report_aggregate_fields'] = TResolversParentTypes['report_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TReport_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['report_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['report_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TReport_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['report_max_fields'] = TResolversParentTypes['report_max_fields']> = {
  content?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  fromUserId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  recipientEmail?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  recipientName?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  reportedId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  reportedUserId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  type?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TReport_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['report_min_fields'] = TResolversParentTypes['report_min_fields']> = {
  content?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  fromUserId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  recipientEmail?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  recipientName?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  reportedId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  reportedUserId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  type?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TReport_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['report_mutation_response'] = TResolversParentTypes['report_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['report']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSubscription_RootResolvers<ContextType = any, ParentType extends TResolversParentTypes['subscription_root'] = TResolversParentTypes['subscription_root']> = {
  activity?: SubscriptionResolver<Array<TResolversTypes['activity']>, "activity", ParentType, ContextType, Partial<TSubscription_RootActivityArgs>>;
  activity_aggregate?: SubscriptionResolver<TResolversTypes['activity_aggregate'], "activity_aggregate", ParentType, ContextType, Partial<TSubscription_RootActivity_AggregateArgs>>;
  activity_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['activity']>, "activity_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootActivity_By_PkArgs, 'id'>>;
  activity_stream?: SubscriptionResolver<Array<TResolversTypes['activity']>, "activity_stream", ParentType, ContextType, RequireFields<TSubscription_RootActivity_StreamArgs, 'batch_size' | 'cursor'>>;
  authProvider?: SubscriptionResolver<Maybe<TResolversTypes['authProviders']>, "authProvider", ParentType, ContextType, RequireFields<TSubscription_RootAuthProviderArgs, 'id'>>;
  authProviderRequest?: SubscriptionResolver<Maybe<TResolversTypes['authProviderRequests']>, "authProviderRequest", ParentType, ContextType, RequireFields<TSubscription_RootAuthProviderRequestArgs, 'id'>>;
  authProviderRequests?: SubscriptionResolver<Array<TResolversTypes['authProviderRequests']>, "authProviderRequests", ParentType, ContextType, Partial<TSubscription_RootAuthProviderRequestsArgs>>;
  authProviderRequestsAggregate?: SubscriptionResolver<TResolversTypes['authProviderRequests_aggregate'], "authProviderRequestsAggregate", ParentType, ContextType, Partial<TSubscription_RootAuthProviderRequestsAggregateArgs>>;
  authProviderRequests_stream?: SubscriptionResolver<Array<TResolversTypes['authProviderRequests']>, "authProviderRequests_stream", ParentType, ContextType, RequireFields<TSubscription_RootAuthProviderRequests_StreamArgs, 'batch_size' | 'cursor'>>;
  authProviders?: SubscriptionResolver<Array<TResolversTypes['authProviders']>, "authProviders", ParentType, ContextType, Partial<TSubscription_RootAuthProvidersArgs>>;
  authProvidersAggregate?: SubscriptionResolver<TResolversTypes['authProviders_aggregate'], "authProvidersAggregate", ParentType, ContextType, Partial<TSubscription_RootAuthProvidersAggregateArgs>>;
  authProviders_stream?: SubscriptionResolver<Array<TResolversTypes['authProviders']>, "authProviders_stream", ParentType, ContextType, RequireFields<TSubscription_RootAuthProviders_StreamArgs, 'batch_size' | 'cursor'>>;
  authRefreshToken?: SubscriptionResolver<Maybe<TResolversTypes['authRefreshTokens']>, "authRefreshToken", ParentType, ContextType, RequireFields<TSubscription_RootAuthRefreshTokenArgs, 'refreshToken'>>;
  authRefreshTokens?: SubscriptionResolver<Array<TResolversTypes['authRefreshTokens']>, "authRefreshTokens", ParentType, ContextType, Partial<TSubscription_RootAuthRefreshTokensArgs>>;
  authRefreshTokensAggregate?: SubscriptionResolver<TResolversTypes['authRefreshTokens_aggregate'], "authRefreshTokensAggregate", ParentType, ContextType, Partial<TSubscription_RootAuthRefreshTokensAggregateArgs>>;
  authRefreshTokens_stream?: SubscriptionResolver<Array<TResolversTypes['authRefreshTokens']>, "authRefreshTokens_stream", ParentType, ContextType, RequireFields<TSubscription_RootAuthRefreshTokens_StreamArgs, 'batch_size' | 'cursor'>>;
  authRole?: SubscriptionResolver<Maybe<TResolversTypes['authRoles']>, "authRole", ParentType, ContextType, RequireFields<TSubscription_RootAuthRoleArgs, 'role'>>;
  authRoles?: SubscriptionResolver<Array<TResolversTypes['authRoles']>, "authRoles", ParentType, ContextType, Partial<TSubscription_RootAuthRolesArgs>>;
  authRolesAggregate?: SubscriptionResolver<TResolversTypes['authRoles_aggregate'], "authRolesAggregate", ParentType, ContextType, Partial<TSubscription_RootAuthRolesAggregateArgs>>;
  authRoles_stream?: SubscriptionResolver<Array<TResolversTypes['authRoles']>, "authRoles_stream", ParentType, ContextType, RequireFields<TSubscription_RootAuthRoles_StreamArgs, 'batch_size' | 'cursor'>>;
  authUserProvider?: SubscriptionResolver<Maybe<TResolversTypes['authUserProviders']>, "authUserProvider", ParentType, ContextType, RequireFields<TSubscription_RootAuthUserProviderArgs, 'id'>>;
  authUserProviders?: SubscriptionResolver<Array<TResolversTypes['authUserProviders']>, "authUserProviders", ParentType, ContextType, Partial<TSubscription_RootAuthUserProvidersArgs>>;
  authUserProvidersAggregate?: SubscriptionResolver<TResolversTypes['authUserProviders_aggregate'], "authUserProvidersAggregate", ParentType, ContextType, Partial<TSubscription_RootAuthUserProvidersAggregateArgs>>;
  authUserProviders_stream?: SubscriptionResolver<Array<TResolversTypes['authUserProviders']>, "authUserProviders_stream", ParentType, ContextType, RequireFields<TSubscription_RootAuthUserProviders_StreamArgs, 'batch_size' | 'cursor'>>;
  authUserRole?: SubscriptionResolver<Maybe<TResolversTypes['authUserRoles']>, "authUserRole", ParentType, ContextType, RequireFields<TSubscription_RootAuthUserRoleArgs, 'id'>>;
  authUserRoles?: SubscriptionResolver<Array<TResolversTypes['authUserRoles']>, "authUserRoles", ParentType, ContextType, Partial<TSubscription_RootAuthUserRolesArgs>>;
  authUserRolesAggregate?: SubscriptionResolver<TResolversTypes['authUserRoles_aggregate'], "authUserRolesAggregate", ParentType, ContextType, Partial<TSubscription_RootAuthUserRolesAggregateArgs>>;
  authUserRoles_stream?: SubscriptionResolver<Array<TResolversTypes['authUserRoles']>, "authUserRoles_stream", ParentType, ContextType, RequireFields<TSubscription_RootAuthUserRoles_StreamArgs, 'batch_size' | 'cursor'>>;
  authUserSecurityKey?: SubscriptionResolver<Maybe<TResolversTypes['authUserSecurityKeys']>, "authUserSecurityKey", ParentType, ContextType, RequireFields<TSubscription_RootAuthUserSecurityKeyArgs, 'id'>>;
  authUserSecurityKeys?: SubscriptionResolver<Array<TResolversTypes['authUserSecurityKeys']>, "authUserSecurityKeys", ParentType, ContextType, Partial<TSubscription_RootAuthUserSecurityKeysArgs>>;
  authUserSecurityKeysAggregate?: SubscriptionResolver<TResolversTypes['authUserSecurityKeys_aggregate'], "authUserSecurityKeysAggregate", ParentType, ContextType, Partial<TSubscription_RootAuthUserSecurityKeysAggregateArgs>>;
  authUserSecurityKeys_stream?: SubscriptionResolver<Array<TResolversTypes['authUserSecurityKeys']>, "authUserSecurityKeys_stream", ParentType, ContextType, RequireFields<TSubscription_RootAuthUserSecurityKeys_StreamArgs, 'batch_size' | 'cursor'>>;
  boosted_idea_log?: SubscriptionResolver<Array<TResolversTypes['boosted_idea_log']>, "boosted_idea_log", ParentType, ContextType, Partial<TSubscription_RootBoosted_Idea_LogArgs>>;
  boosted_idea_log_aggregate?: SubscriptionResolver<TResolversTypes['boosted_idea_log_aggregate'], "boosted_idea_log_aggregate", ParentType, ContextType, Partial<TSubscription_RootBoosted_Idea_Log_AggregateArgs>>;
  boosted_idea_log_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['boosted_idea_log']>, "boosted_idea_log_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootBoosted_Idea_Log_By_PkArgs, 'id'>>;
  boosted_idea_log_stream?: SubscriptionResolver<Array<TResolversTypes['boosted_idea_log']>, "boosted_idea_log_stream", ParentType, ContextType, RequireFields<TSubscription_RootBoosted_Idea_Log_StreamArgs, 'batch_size' | 'cursor'>>;
  boosted_ideas?: SubscriptionResolver<Array<TResolversTypes['boosted_ideas']>, "boosted_ideas", ParentType, ContextType, Partial<TSubscription_RootBoosted_IdeasArgs>>;
  boosted_ideas_aggregate?: SubscriptionResolver<TResolversTypes['boosted_ideas_aggregate'], "boosted_ideas_aggregate", ParentType, ContextType, Partial<TSubscription_RootBoosted_Ideas_AggregateArgs>>;
  boosted_ideas_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['boosted_ideas']>, "boosted_ideas_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootBoosted_Ideas_By_PkArgs, 'ideaId'>>;
  boosted_ideas_stream?: SubscriptionResolver<Array<TResolversTypes['boosted_ideas']>, "boosted_ideas_stream", ParentType, ContextType, RequireFields<TSubscription_RootBoosted_Ideas_StreamArgs, 'batch_size' | 'cursor'>>;
  bucket?: SubscriptionResolver<Maybe<TResolversTypes['buckets']>, "bucket", ParentType, ContextType, RequireFields<TSubscription_RootBucketArgs, 'id'>>;
  buckets?: SubscriptionResolver<Array<TResolversTypes['buckets']>, "buckets", ParentType, ContextType, Partial<TSubscription_RootBucketsArgs>>;
  bucketsAggregate?: SubscriptionResolver<TResolversTypes['buckets_aggregate'], "bucketsAggregate", ParentType, ContextType, Partial<TSubscription_RootBucketsAggregateArgs>>;
  buckets_stream?: SubscriptionResolver<Array<TResolversTypes['buckets']>, "buckets_stream", ParentType, ContextType, RequireFields<TSubscription_RootBuckets_StreamArgs, 'batch_size' | 'cursor'>>;
  comment_status_types?: SubscriptionResolver<Array<TResolversTypes['comment_status_types']>, "comment_status_types", ParentType, ContextType, Partial<TSubscription_RootComment_Status_TypesArgs>>;
  comment_status_types_aggregate?: SubscriptionResolver<TResolversTypes['comment_status_types_aggregate'], "comment_status_types_aggregate", ParentType, ContextType, Partial<TSubscription_RootComment_Status_Types_AggregateArgs>>;
  comment_status_types_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['comment_status_types']>, "comment_status_types_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootComment_Status_Types_By_PkArgs, 'value'>>;
  comment_status_types_stream?: SubscriptionResolver<Array<TResolversTypes['comment_status_types']>, "comment_status_types_stream", ParentType, ContextType, RequireFields<TSubscription_RootComment_Status_Types_StreamArgs, 'batch_size' | 'cursor'>>;
  file?: SubscriptionResolver<Maybe<TResolversTypes['files']>, "file", ParentType, ContextType, RequireFields<TSubscription_RootFileArgs, 'id'>>;
  files?: SubscriptionResolver<Array<TResolversTypes['files']>, "files", ParentType, ContextType, Partial<TSubscription_RootFilesArgs>>;
  filesAggregate?: SubscriptionResolver<TResolversTypes['files_aggregate'], "filesAggregate", ParentType, ContextType, Partial<TSubscription_RootFilesAggregateArgs>>;
  files_stream?: SubscriptionResolver<Array<TResolversTypes['files']>, "files_stream", ParentType, ContextType, RequireFields<TSubscription_RootFiles_StreamArgs, 'batch_size' | 'cursor'>>;
  idea_comment_replies?: SubscriptionResolver<Array<TResolversTypes['idea_comment_replies']>, "idea_comment_replies", ParentType, ContextType, Partial<TSubscription_RootIdea_Comment_RepliesArgs>>;
  idea_comment_replies_aggregate?: SubscriptionResolver<TResolversTypes['idea_comment_replies_aggregate'], "idea_comment_replies_aggregate", ParentType, ContextType, Partial<TSubscription_RootIdea_Comment_Replies_AggregateArgs>>;
  idea_comment_replies_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['idea_comment_replies']>, "idea_comment_replies_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootIdea_Comment_Replies_By_PkArgs, 'id'>>;
  idea_comment_replies_stream?: SubscriptionResolver<Array<TResolversTypes['idea_comment_replies']>, "idea_comment_replies_stream", ParentType, ContextType, RequireFields<TSubscription_RootIdea_Comment_Replies_StreamArgs, 'batch_size' | 'cursor'>>;
  idea_comments?: SubscriptionResolver<Array<TResolversTypes['idea_comments']>, "idea_comments", ParentType, ContextType, Partial<TSubscription_RootIdea_CommentsArgs>>;
  idea_comments_aggregate?: SubscriptionResolver<TResolversTypes['idea_comments_aggregate'], "idea_comments_aggregate", ParentType, ContextType, Partial<TSubscription_RootIdea_Comments_AggregateArgs>>;
  idea_comments_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['idea_comments']>, "idea_comments_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootIdea_Comments_By_PkArgs, 'id'>>;
  idea_comments_stream?: SubscriptionResolver<Array<TResolversTypes['idea_comments']>, "idea_comments_stream", ParentType, ContextType, RequireFields<TSubscription_RootIdea_Comments_StreamArgs, 'batch_size' | 'cursor'>>;
  idea_preview?: SubscriptionResolver<Array<TResolversTypes['idea_preview']>, "idea_preview", ParentType, ContextType, Partial<TSubscription_RootIdea_PreviewArgs>>;
  idea_preview_aggregate?: SubscriptionResolver<TResolversTypes['idea_preview_aggregate'], "idea_preview_aggregate", ParentType, ContextType, Partial<TSubscription_RootIdea_Preview_AggregateArgs>>;
  idea_preview_stream?: SubscriptionResolver<Array<TResolversTypes['idea_preview']>, "idea_preview_stream", ParentType, ContextType, RequireFields<TSubscription_RootIdea_Preview_StreamArgs, 'batch_size' | 'cursor'>>;
  idea_votes?: SubscriptionResolver<Array<TResolversTypes['idea_votes']>, "idea_votes", ParentType, ContextType, Partial<TSubscription_RootIdea_VotesArgs>>;
  idea_votes_aggregate?: SubscriptionResolver<TResolversTypes['idea_votes_aggregate'], "idea_votes_aggregate", ParentType, ContextType, Partial<TSubscription_RootIdea_Votes_AggregateArgs>>;
  idea_votes_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['idea_votes']>, "idea_votes_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootIdea_Votes_By_PkArgs, 'ideaId' | 'userId'>>;
  idea_votes_stream?: SubscriptionResolver<Array<TResolversTypes['idea_votes']>, "idea_votes_stream", ParentType, ContextType, RequireFields<TSubscription_RootIdea_Votes_StreamArgs, 'batch_size' | 'cursor'>>;
  ideas?: SubscriptionResolver<Array<TResolversTypes['ideas']>, "ideas", ParentType, ContextType, Partial<TSubscription_RootIdeasArgs>>;
  ideas_aggregate?: SubscriptionResolver<TResolversTypes['ideas_aggregate'], "ideas_aggregate", ParentType, ContextType, Partial<TSubscription_RootIdeas_AggregateArgs>>;
  ideas_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['ideas']>, "ideas_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootIdeas_By_PkArgs, 'id'>>;
  ideas_stream?: SubscriptionResolver<Array<TResolversTypes['ideas']>, "ideas_stream", ParentType, ContextType, RequireFields<TSubscription_RootIdeas_StreamArgs, 'batch_size' | 'cursor'>>;
  interested_ideas?: SubscriptionResolver<Array<TResolversTypes['interested_ideas']>, "interested_ideas", ParentType, ContextType, Partial<TSubscription_RootInterested_IdeasArgs>>;
  interested_ideas_aggregate?: SubscriptionResolver<TResolversTypes['interested_ideas_aggregate'], "interested_ideas_aggregate", ParentType, ContextType, Partial<TSubscription_RootInterested_Ideas_AggregateArgs>>;
  interested_ideas_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['interested_ideas']>, "interested_ideas_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootInterested_Ideas_By_PkArgs, 'ideaId' | 'userId'>>;
  interested_ideas_stream?: SubscriptionResolver<Array<TResolversTypes['interested_ideas']>, "interested_ideas_stream", ParentType, ContextType, RequireFields<TSubscription_RootInterested_Ideas_StreamArgs, 'batch_size' | 'cursor'>>;
  match_settings?: SubscriptionResolver<Array<TResolversTypes['match_settings']>, "match_settings", ParentType, ContextType, Partial<TSubscription_RootMatch_SettingsArgs>>;
  match_settings_aggregate?: SubscriptionResolver<TResolversTypes['match_settings_aggregate'], "match_settings_aggregate", ParentType, ContextType, Partial<TSubscription_RootMatch_Settings_AggregateArgs>>;
  match_settings_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['match_settings']>, "match_settings_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootMatch_Settings_By_PkArgs, 'user_id'>>;
  match_settings_stream?: SubscriptionResolver<Array<TResolversTypes['match_settings']>, "match_settings_stream", ParentType, ContextType, RequireFields<TSubscription_RootMatch_Settings_StreamArgs, 'batch_size' | 'cursor'>>;
  message?: SubscriptionResolver<Array<TResolversTypes['message']>, "message", ParentType, ContextType, Partial<TSubscription_RootMessageArgs>>;
  message_aggregate?: SubscriptionResolver<TResolversTypes['message_aggregate'], "message_aggregate", ParentType, ContextType, Partial<TSubscription_RootMessage_AggregateArgs>>;
  message_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['message']>, "message_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootMessage_By_PkArgs, 'id'>>;
  message_stream?: SubscriptionResolver<Array<TResolversTypes['message']>, "message_stream", ParentType, ContextType, RequireFields<TSubscription_RootMessage_StreamArgs, 'batch_size' | 'cursor'>>;
  message_thread?: SubscriptionResolver<Array<TResolversTypes['message_thread']>, "message_thread", ParentType, ContextType, Partial<TSubscription_RootMessage_ThreadArgs>>;
  message_thread_aggregate?: SubscriptionResolver<TResolversTypes['message_thread_aggregate'], "message_thread_aggregate", ParentType, ContextType, Partial<TSubscription_RootMessage_Thread_AggregateArgs>>;
  message_thread_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['message_thread']>, "message_thread_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootMessage_Thread_By_PkArgs, 'id'>>;
  message_thread_stream?: SubscriptionResolver<Array<TResolversTypes['message_thread']>, "message_thread_stream", ParentType, ContextType, RequireFields<TSubscription_RootMessage_Thread_StreamArgs, 'batch_size' | 'cursor'>>;
  message_thread_users?: SubscriptionResolver<Array<TResolversTypes['message_thread_users']>, "message_thread_users", ParentType, ContextType, Partial<TSubscription_RootMessage_Thread_UsersArgs>>;
  message_thread_users_aggregate?: SubscriptionResolver<TResolversTypes['message_thread_users_aggregate'], "message_thread_users_aggregate", ParentType, ContextType, Partial<TSubscription_RootMessage_Thread_Users_AggregateArgs>>;
  message_thread_users_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['message_thread_users']>, "message_thread_users_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootMessage_Thread_Users_By_PkArgs, 'threadId' | 'userId'>>;
  message_thread_users_stream?: SubscriptionResolver<Array<TResolversTypes['message_thread_users']>, "message_thread_users_stream", ParentType, ContextType, RequireFields<TSubscription_RootMessage_Thread_Users_StreamArgs, 'batch_size' | 'cursor'>>;
  notification_types?: SubscriptionResolver<Array<TResolversTypes['notification_types']>, "notification_types", ParentType, ContextType, Partial<TSubscription_RootNotification_TypesArgs>>;
  notification_types_aggregate?: SubscriptionResolver<TResolversTypes['notification_types_aggregate'], "notification_types_aggregate", ParentType, ContextType, Partial<TSubscription_RootNotification_Types_AggregateArgs>>;
  notification_types_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['notification_types']>, "notification_types_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootNotification_Types_By_PkArgs, 'value'>>;
  notification_types_stream?: SubscriptionResolver<Array<TResolversTypes['notification_types']>, "notification_types_stream", ParentType, ContextType, RequireFields<TSubscription_RootNotification_Types_StreamArgs, 'batch_size' | 'cursor'>>;
  report?: SubscriptionResolver<Array<TResolversTypes['report']>, "report", ParentType, ContextType, Partial<TSubscription_RootReportArgs>>;
  report_aggregate?: SubscriptionResolver<TResolversTypes['report_aggregate'], "report_aggregate", ParentType, ContextType, Partial<TSubscription_RootReport_AggregateArgs>>;
  report_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['report']>, "report_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootReport_By_PkArgs, 'id'>>;
  report_stream?: SubscriptionResolver<Array<TResolversTypes['report']>, "report_stream", ParentType, ContextType, RequireFields<TSubscription_RootReport_StreamArgs, 'batch_size' | 'cursor'>>;
  user?: SubscriptionResolver<Maybe<TResolversTypes['users']>, "user", ParentType, ContextType, RequireFields<TSubscription_RootUserArgs, 'id'>>;
  user_address?: SubscriptionResolver<Array<TResolversTypes['user_address']>, "user_address", ParentType, ContextType, Partial<TSubscription_RootUser_AddressArgs>>;
  user_address_aggregate?: SubscriptionResolver<TResolversTypes['user_address_aggregate'], "user_address_aggregate", ParentType, ContextType, Partial<TSubscription_RootUser_Address_AggregateArgs>>;
  user_address_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['user_address']>, "user_address_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootUser_Address_By_PkArgs, 'userId'>>;
  user_address_stream?: SubscriptionResolver<Array<TResolversTypes['user_address']>, "user_address_stream", ParentType, ContextType, RequireFields<TSubscription_RootUser_Address_StreamArgs, 'batch_size' | 'cursor'>>;
  user_esteem_points_currency?: SubscriptionResolver<Array<TResolversTypes['user_esteem_points_currency']>, "user_esteem_points_currency", ParentType, ContextType, Partial<TSubscription_RootUser_Esteem_Points_CurrencyArgs>>;
  user_esteem_points_currency_aggregate?: SubscriptionResolver<TResolversTypes['user_esteem_points_currency_aggregate'], "user_esteem_points_currency_aggregate", ParentType, ContextType, Partial<TSubscription_RootUser_Esteem_Points_Currency_AggregateArgs>>;
  user_esteem_points_currency_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['user_esteem_points_currency']>, "user_esteem_points_currency_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootUser_Esteem_Points_Currency_By_PkArgs, 'userId'>>;
  user_esteem_points_currency_stream?: SubscriptionResolver<Array<TResolversTypes['user_esteem_points_currency']>, "user_esteem_points_currency_stream", ParentType, ContextType, RequireFields<TSubscription_RootUser_Esteem_Points_Currency_StreamArgs, 'batch_size' | 'cursor'>>;
  user_followers?: SubscriptionResolver<Array<TResolversTypes['user_followers']>, "user_followers", ParentType, ContextType, Partial<TSubscription_RootUser_FollowersArgs>>;
  user_followers_aggregate?: SubscriptionResolver<TResolversTypes['user_followers_aggregate'], "user_followers_aggregate", ParentType, ContextType, Partial<TSubscription_RootUser_Followers_AggregateArgs>>;
  user_followers_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['user_followers']>, "user_followers_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootUser_Followers_By_PkArgs, 'followerId' | 'followingId'>>;
  user_followers_stream?: SubscriptionResolver<Array<TResolversTypes['user_followers']>, "user_followers_stream", ParentType, ContextType, RequireFields<TSubscription_RootUser_Followers_StreamArgs, 'batch_size' | 'cursor'>>;
  user_notifications?: SubscriptionResolver<Array<TResolversTypes['user_notifications']>, "user_notifications", ParentType, ContextType, Partial<TSubscription_RootUser_NotificationsArgs>>;
  user_notifications_aggregate?: SubscriptionResolver<TResolversTypes['user_notifications_aggregate'], "user_notifications_aggregate", ParentType, ContextType, Partial<TSubscription_RootUser_Notifications_AggregateArgs>>;
  user_notifications_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['user_notifications']>, "user_notifications_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootUser_Notifications_By_PkArgs, 'id'>>;
  user_notifications_stream?: SubscriptionResolver<Array<TResolversTypes['user_notifications']>, "user_notifications_stream", ParentType, ContextType, RequireFields<TSubscription_RootUser_Notifications_StreamArgs, 'batch_size' | 'cursor'>>;
  user_profile?: SubscriptionResolver<Array<TResolversTypes['user_profile']>, "user_profile", ParentType, ContextType, Partial<TSubscription_RootUser_ProfileArgs>>;
  user_profile_aggregate?: SubscriptionResolver<TResolversTypes['user_profile_aggregate'], "user_profile_aggregate", ParentType, ContextType, Partial<TSubscription_RootUser_Profile_AggregateArgs>>;
  user_profile_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['user_profile']>, "user_profile_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootUser_Profile_By_PkArgs, 'id'>>;
  user_profile_stream?: SubscriptionResolver<Array<TResolversTypes['user_profile']>, "user_profile_stream", ParentType, ContextType, RequireFields<TSubscription_RootUser_Profile_StreamArgs, 'batch_size' | 'cursor'>>;
  users?: SubscriptionResolver<Array<TResolversTypes['users']>, "users", ParentType, ContextType, Partial<TSubscription_RootUsersArgs>>;
  usersAggregate?: SubscriptionResolver<TResolversTypes['users_aggregate'], "usersAggregate", ParentType, ContextType, Partial<TSubscription_RootUsersAggregateArgs>>;
  users_stream?: SubscriptionResolver<Array<TResolversTypes['users']>, "users_stream", ParentType, ContextType, RequireFields<TSubscription_RootUsers_StreamArgs, 'batch_size' | 'cursor'>>;
  v_comments?: SubscriptionResolver<Array<TResolversTypes['v_comments']>, "v_comments", ParentType, ContextType, Partial<TSubscription_RootV_CommentsArgs>>;
  v_comments_aggregate?: SubscriptionResolver<TResolversTypes['v_comments_aggregate'], "v_comments_aggregate", ParentType, ContextType, Partial<TSubscription_RootV_Comments_AggregateArgs>>;
  v_comments_stream?: SubscriptionResolver<Array<TResolversTypes['v_comments']>, "v_comments_stream", ParentType, ContextType, RequireFields<TSubscription_RootV_Comments_StreamArgs, 'batch_size' | 'cursor'>>;
  withdrawal_requests?: SubscriptionResolver<Array<TResolversTypes['withdrawal_requests']>, "withdrawal_requests", ParentType, ContextType, Partial<TSubscription_RootWithdrawal_RequestsArgs>>;
  withdrawal_requests_aggregate?: SubscriptionResolver<TResolversTypes['withdrawal_requests_aggregate'], "withdrawal_requests_aggregate", ParentType, ContextType, Partial<TSubscription_RootWithdrawal_Requests_AggregateArgs>>;
  withdrawal_requests_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['withdrawal_requests']>, "withdrawal_requests_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootWithdrawal_Requests_By_PkArgs, 'id'>>;
  withdrawal_requests_stream?: SubscriptionResolver<Array<TResolversTypes['withdrawal_requests']>, "withdrawal_requests_stream", ParentType, ContextType, RequireFields<TSubscription_RootWithdrawal_Requests_StreamArgs, 'batch_size' | 'cursor'>>;
};

export interface TTimestamptzScalarConfig extends GraphQLScalarTypeConfig<TResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export type TUser_AddressResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_address'] = TResolversParentTypes['user_address']> = {
  country?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  location?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<TResolversTypes['users'], ParentType, ContextType>;
  userId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Address_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_address_aggregate'] = TResolversParentTypes['user_address_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['user_address_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['user_address']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Address_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_address_aggregate_fields'] = TResolversParentTypes['user_address_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TUser_Address_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['user_address_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['user_address_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Address_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_address_max_fields'] = TResolversParentTypes['user_address_max_fields']> = {
  country?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  location?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Address_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_address_min_fields'] = TResolversParentTypes['user_address_min_fields']> = {
  country?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  location?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Address_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_address_mutation_response'] = TResolversParentTypes['user_address_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['user_address']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Esteem_Points_CurrencyResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_esteem_points_currency'] = TResolversParentTypes['user_esteem_points_currency']> = {
  currency?: Resolver<TResolversTypes['money'], ParentType, ContextType>;
  points?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Esteem_Points_Currency_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_esteem_points_currency_aggregate'] = TResolversParentTypes['user_esteem_points_currency_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['user_esteem_points_currency']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Esteem_Points_Currency_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_esteem_points_currency_aggregate_fields'] = TResolversParentTypes['user_esteem_points_currency_aggregate_fields']> = {
  avg?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TUser_Esteem_Points_Currency_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Esteem_Points_Currency_Avg_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_esteem_points_currency_avg_fields'] = TResolversParentTypes['user_esteem_points_currency_avg_fields']> = {
  currency?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  points?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Esteem_Points_Currency_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_esteem_points_currency_max_fields'] = TResolversParentTypes['user_esteem_points_currency_max_fields']> = {
  currency?: Resolver<Maybe<TResolversTypes['money']>, ParentType, ContextType>;
  points?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Esteem_Points_Currency_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_esteem_points_currency_min_fields'] = TResolversParentTypes['user_esteem_points_currency_min_fields']> = {
  currency?: Resolver<Maybe<TResolversTypes['money']>, ParentType, ContextType>;
  points?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Esteem_Points_Currency_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_esteem_points_currency_mutation_response'] = TResolversParentTypes['user_esteem_points_currency_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['user_esteem_points_currency']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Esteem_Points_Currency_Stddev_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_esteem_points_currency_stddev_fields'] = TResolversParentTypes['user_esteem_points_currency_stddev_fields']> = {
  currency?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  points?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Esteem_Points_Currency_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_esteem_points_currency_stddev_pop_fields'] = TResolversParentTypes['user_esteem_points_currency_stddev_pop_fields']> = {
  currency?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  points?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Esteem_Points_Currency_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_esteem_points_currency_stddev_samp_fields'] = TResolversParentTypes['user_esteem_points_currency_stddev_samp_fields']> = {
  currency?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  points?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Esteem_Points_Currency_Sum_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_esteem_points_currency_sum_fields'] = TResolversParentTypes['user_esteem_points_currency_sum_fields']> = {
  currency?: Resolver<Maybe<TResolversTypes['money']>, ParentType, ContextType>;
  points?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Esteem_Points_Currency_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_esteem_points_currency_var_pop_fields'] = TResolversParentTypes['user_esteem_points_currency_var_pop_fields']> = {
  currency?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  points?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Esteem_Points_Currency_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_esteem_points_currency_var_samp_fields'] = TResolversParentTypes['user_esteem_points_currency_var_samp_fields']> = {
  currency?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  points?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Esteem_Points_Currency_Variance_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_esteem_points_currency_variance_fields'] = TResolversParentTypes['user_esteem_points_currency_variance_fields']> = {
  currency?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  points?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_FollowersResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_followers'] = TResolversParentTypes['user_followers']> = {
  followerId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  followingId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  status?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<TResolversTypes['users'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Followers_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_followers_aggregate'] = TResolversParentTypes['user_followers_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['user_followers_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['user_followers']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Followers_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_followers_aggregate_fields'] = TResolversParentTypes['user_followers_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TUser_Followers_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['user_followers_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['user_followers_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Followers_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_followers_max_fields'] = TResolversParentTypes['user_followers_max_fields']> = {
  followerId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  followingId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  status?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Followers_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_followers_min_fields'] = TResolversParentTypes['user_followers_min_fields']> = {
  followerId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  followingId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  status?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Followers_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_followers_mutation_response'] = TResolversParentTypes['user_followers_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['user_followers']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_NotificationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_notifications'] = TResolversParentTypes['user_notifications']> = {
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  href?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  read?: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<TResolversTypes['notification_types_enum'], ParentType, ContextType>;
  updatedAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<TResolversTypes['users'], ParentType, ContextType>;
  userId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  value?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Notifications_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_notifications_aggregate'] = TResolversParentTypes['user_notifications_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['user_notifications_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['user_notifications']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Notifications_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_notifications_aggregate_fields'] = TResolversParentTypes['user_notifications_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TUser_Notifications_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['user_notifications_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['user_notifications_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Notifications_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_notifications_max_fields'] = TResolversParentTypes['user_notifications_max_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  href?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  value?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Notifications_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_notifications_min_fields'] = TResolversParentTypes['user_notifications_min_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  href?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  value?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Notifications_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_notifications_mutation_response'] = TResolversParentTypes['user_notifications_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['user_notifications']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_ProfileResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_profile'] = TResolversParentTypes['user_profile']> = {
  availability?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  background?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  businessDescription?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  customPronouns?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  facebook?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  industries?: Resolver<Maybe<TResolversTypes['jsonb']>, ParentType, ContextType, Partial<TUser_ProfileIndustriesArgs>>;
  instagram?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  isComplete?: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  linkedin?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  objective?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  pronouns?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  resume?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  skills?: Resolver<Maybe<TResolversTypes['jsonb']>, ParentType, ContextType, Partial<TUser_ProfileSkillsArgs>>;
  specialistIndustry?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  startups?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  statement?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<Maybe<TResolversTypes['users']>, ParentType, ContextType>;
  userId?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  website?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Profile_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_profile_aggregate'] = TResolversParentTypes['user_profile_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['user_profile_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['user_profile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Profile_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_profile_aggregate_fields'] = TResolversParentTypes['user_profile_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TUser_Profile_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['user_profile_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['user_profile_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Profile_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_profile_max_fields'] = TResolversParentTypes['user_profile_max_fields']> = {
  availability?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  background?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  businessDescription?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  customPronouns?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  facebook?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  instagram?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  linkedin?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  objective?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  pronouns?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  resume?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  specialistIndustry?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  startups?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  statement?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  website?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Profile_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_profile_min_fields'] = TResolversParentTypes['user_profile_min_fields']> = {
  availability?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  background?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  businessDescription?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  customPronouns?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  facebook?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  instagram?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  linkedin?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  objective?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  pronouns?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  resume?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  specialistIndustry?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  startups?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  statement?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  website?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUser_Profile_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_profile_mutation_response'] = TResolversParentTypes['user_profile_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['user_profile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUsersResolvers<ContextType = any, ParentType extends TResolversParentTypes['users'] = TResolversParentTypes['users']> = {
  activeMfaType?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<TResolversTypes['user_address']>, ParentType, ContextType>;
  avatarUrl?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  currentChallenge?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  defaultRole?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  defaultRoleByRole?: Resolver<TResolversTypes['authRoles'], ParentType, ContextType>;
  disabled?: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  displayName?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<Maybe<TResolversTypes['citext']>, ParentType, ContextType>;
  emailVerified?: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  esteemPointsCurrency?: Resolver<Maybe<TResolversTypes['user_esteem_points_currency']>, ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  ideas?: Resolver<Array<TResolversTypes['ideas']>, ParentType, ContextType, Partial<TUsersIdeasArgs>>;
  ideas_aggregate?: Resolver<TResolversTypes['ideas_aggregate'], ParentType, ContextType, Partial<TUsersIdeas_AggregateArgs>>;
  isAnonymous?: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  lastSeen?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  locale?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  matchSettings?: Resolver<Maybe<TResolversTypes['match_settings']>, ParentType, ContextType>;
  messageThreadUsers?: Resolver<Array<TResolversTypes['message_thread_users']>, ParentType, ContextType, Partial<TUsersMessageThreadUsersArgs>>;
  messageThreadUsers_aggregate?: Resolver<TResolversTypes['message_thread_users_aggregate'], ParentType, ContextType, Partial<TUsersMessageThreadUsers_AggregateArgs>>;
  messageThreads?: Resolver<Array<TResolversTypes['message_thread']>, ParentType, ContextType, Partial<TUsersMessageThreadsArgs>>;
  messageThreads_aggregate?: Resolver<TResolversTypes['message_thread_aggregate'], ParentType, ContextType, Partial<TUsersMessageThreads_AggregateArgs>>;
  messages?: Resolver<Array<TResolversTypes['message']>, ParentType, ContextType, Partial<TUsersMessagesArgs>>;
  messages_aggregate?: Resolver<TResolversTypes['message_aggregate'], ParentType, ContextType, Partial<TUsersMessages_AggregateArgs>>;
  metadata?: Resolver<Maybe<TResolversTypes['jsonb']>, ParentType, ContextType, Partial<TUsersMetadataArgs>>;
  newEmail?: Resolver<Maybe<TResolversTypes['citext']>, ParentType, ContextType>;
  otpHash?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  otpHashExpiresAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  otpMethodLastUsed?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  passwordHash?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  phoneNumberVerified?: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  profile?: Resolver<Maybe<TResolversTypes['user_profile']>, ParentType, ContextType>;
  refreshTokens?: Resolver<Array<TResolversTypes['authRefreshTokens']>, ParentType, ContextType, Partial<TUsersRefreshTokensArgs>>;
  refreshTokens_aggregate?: Resolver<TResolversTypes['authRefreshTokens_aggregate'], ParentType, ContextType, Partial<TUsersRefreshTokens_AggregateArgs>>;
  roles?: Resolver<Array<TResolversTypes['authUserRoles']>, ParentType, ContextType, Partial<TUsersRolesArgs>>;
  roles_aggregate?: Resolver<TResolversTypes['authUserRoles_aggregate'], ParentType, ContextType, Partial<TUsersRoles_AggregateArgs>>;
  securityKeys?: Resolver<Array<TResolversTypes['authUserSecurityKeys']>, ParentType, ContextType, Partial<TUsersSecurityKeysArgs>>;
  securityKeys_aggregate?: Resolver<TResolversTypes['authUserSecurityKeys_aggregate'], ParentType, ContextType, Partial<TUsersSecurityKeys_AggregateArgs>>;
  ticket?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  ticketExpiresAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  totpSecret?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  userProviders?: Resolver<Array<TResolversTypes['authUserProviders']>, ParentType, ContextType, Partial<TUsersUserProvidersArgs>>;
  userProviders_aggregate?: Resolver<TResolversTypes['authUserProviders_aggregate'], ParentType, ContextType, Partial<TUsersUserProviders_AggregateArgs>>;
  user_followers?: Resolver<Array<TResolversTypes['user_followers']>, ParentType, ContextType, Partial<TUsersUser_FollowersArgs>>;
  user_followers_aggregate?: Resolver<TResolversTypes['user_followers_aggregate'], ParentType, ContextType, Partial<TUsersUser_Followers_AggregateArgs>>;
  user_notifications?: Resolver<Array<TResolversTypes['user_notifications']>, ParentType, ContextType, Partial<TUsersUser_NotificationsArgs>>;
  user_notifications_aggregate?: Resolver<TResolversTypes['user_notifications_aggregate'], ParentType, ContextType, Partial<TUsersUser_Notifications_AggregateArgs>>;
  user_profiles?: Resolver<Array<TResolversTypes['user_profile']>, ParentType, ContextType, Partial<TUsersUser_ProfilesArgs>>;
  user_profiles_aggregate?: Resolver<TResolversTypes['user_profile_aggregate'], ParentType, ContextType, Partial<TUsersUser_Profiles_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUsers_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['users_aggregate'] = TResolversParentTypes['users_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['users_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUsers_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['users_aggregate_fields'] = TResolversParentTypes['users_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TUsers_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['users_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['users_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUsers_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['users_max_fields'] = TResolversParentTypes['users_max_fields']> = {
  activeMfaType?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  currentChallenge?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  defaultRole?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<TResolversTypes['citext']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  lastSeen?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  newEmail?: Resolver<Maybe<TResolversTypes['citext']>, ParentType, ContextType>;
  otpHash?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  otpHashExpiresAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  otpMethodLastUsed?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  passwordHash?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  ticket?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  ticketExpiresAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  totpSecret?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUsers_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['users_min_fields'] = TResolversParentTypes['users_min_fields']> = {
  activeMfaType?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  currentChallenge?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  defaultRole?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<TResolversTypes['citext']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  lastSeen?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  newEmail?: Resolver<Maybe<TResolversTypes['citext']>, ParentType, ContextType>;
  otpHash?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  otpHashExpiresAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  otpMethodLastUsed?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  passwordHash?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  ticket?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  ticketExpiresAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  totpSecret?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUsers_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['users_mutation_response'] = TResolversParentTypes['users_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TUuidScalarConfig extends GraphQLScalarTypeConfig<TResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type TV_CommentsResolvers<ContextType = any, ParentType extends TResolversParentTypes['v_comments'] = TResolversParentTypes['v_comments']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  idea?: Resolver<Maybe<TResolversTypes['ideas']>, ParentType, ContextType>;
  ideaId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  isBoost?: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  replies?: Resolver<Array<TResolversTypes['idea_comment_replies']>, ParentType, ContextType, Partial<TV_CommentsRepliesArgs>>;
  replies_aggregate?: Resolver<TResolversTypes['idea_comment_replies_aggregate'], ParentType, ContextType, Partial<TV_CommentsReplies_AggregateArgs>>;
  status?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  targetUserId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  totalReplies?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  user?: Resolver<Maybe<TResolversTypes['users']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  value?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TV_Comments_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['v_comments_aggregate'] = TResolversParentTypes['v_comments_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['v_comments_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['v_comments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TV_Comments_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['v_comments_aggregate_fields'] = TResolversParentTypes['v_comments_aggregate_fields']> = {
  avg?: Resolver<Maybe<TResolversTypes['v_comments_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TV_Comments_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['v_comments_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['v_comments_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<TResolversTypes['v_comments_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<TResolversTypes['v_comments_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<TResolversTypes['v_comments_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<TResolversTypes['v_comments_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<TResolversTypes['v_comments_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<TResolversTypes['v_comments_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<TResolversTypes['v_comments_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TV_Comments_Avg_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['v_comments_avg_fields'] = TResolversParentTypes['v_comments_avg_fields']> = {
  totalReplies?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TV_Comments_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['v_comments_max_fields'] = TResolversParentTypes['v_comments_max_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  ideaId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  status?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  targetUserId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  totalReplies?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  value?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TV_Comments_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['v_comments_min_fields'] = TResolversParentTypes['v_comments_min_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  ideaId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  status?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  targetUserId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  totalReplies?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  value?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TV_Comments_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['v_comments_mutation_response'] = TResolversParentTypes['v_comments_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['v_comments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TV_Comments_Stddev_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['v_comments_stddev_fields'] = TResolversParentTypes['v_comments_stddev_fields']> = {
  totalReplies?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TV_Comments_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['v_comments_stddev_pop_fields'] = TResolversParentTypes['v_comments_stddev_pop_fields']> = {
  totalReplies?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TV_Comments_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['v_comments_stddev_samp_fields'] = TResolversParentTypes['v_comments_stddev_samp_fields']> = {
  totalReplies?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TV_Comments_Sum_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['v_comments_sum_fields'] = TResolversParentTypes['v_comments_sum_fields']> = {
  totalReplies?: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TV_Comments_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['v_comments_var_pop_fields'] = TResolversParentTypes['v_comments_var_pop_fields']> = {
  totalReplies?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TV_Comments_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['v_comments_var_samp_fields'] = TResolversParentTypes['v_comments_var_samp_fields']> = {
  totalReplies?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TV_Comments_Variance_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['v_comments_variance_fields'] = TResolversParentTypes['v_comments_variance_fields']> = {
  totalReplies?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWithdrawal_RequestsResolvers<ContextType = any, ParentType extends TResolversParentTypes['withdrawal_requests'] = TResolversParentTypes['withdrawal_requests']> = {
  amount?: Resolver<TResolversTypes['money'], ParentType, ContextType>;
  created_at?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  email?: Resolver<Maybe<TResolversTypes['citext']>, ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  status?: Resolver<TResolversTypes['comment_status_types_enum'], ParentType, ContextType>;
  user?: Resolver<Maybe<TResolversTypes['users']>, ParentType, ContextType>;
  user_id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWithdrawal_Requests_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['withdrawal_requests_aggregate'] = TResolversParentTypes['withdrawal_requests_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['withdrawal_requests_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['withdrawal_requests']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWithdrawal_Requests_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['withdrawal_requests_aggregate_fields'] = TResolversParentTypes['withdrawal_requests_aggregate_fields']> = {
  avg?: Resolver<Maybe<TResolversTypes['withdrawal_requests_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, Partial<TWithdrawal_Requests_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<TResolversTypes['withdrawal_requests_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['withdrawal_requests_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<TResolversTypes['withdrawal_requests_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<TResolversTypes['withdrawal_requests_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<TResolversTypes['withdrawal_requests_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<TResolversTypes['withdrawal_requests_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<TResolversTypes['withdrawal_requests_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<TResolversTypes['withdrawal_requests_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<TResolversTypes['withdrawal_requests_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWithdrawal_Requests_Avg_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['withdrawal_requests_avg_fields'] = TResolversParentTypes['withdrawal_requests_avg_fields']> = {
  amount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWithdrawal_Requests_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['withdrawal_requests_max_fields'] = TResolversParentTypes['withdrawal_requests_max_fields']> = {
  amount?: Resolver<Maybe<TResolversTypes['money']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<TResolversTypes['citext']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWithdrawal_Requests_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['withdrawal_requests_min_fields'] = TResolversParentTypes['withdrawal_requests_min_fields']> = {
  amount?: Resolver<Maybe<TResolversTypes['money']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<TResolversTypes['citext']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWithdrawal_Requests_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['withdrawal_requests_mutation_response'] = TResolversParentTypes['withdrawal_requests_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['withdrawal_requests']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWithdrawal_Requests_Stddev_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['withdrawal_requests_stddev_fields'] = TResolversParentTypes['withdrawal_requests_stddev_fields']> = {
  amount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWithdrawal_Requests_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['withdrawal_requests_stddev_pop_fields'] = TResolversParentTypes['withdrawal_requests_stddev_pop_fields']> = {
  amount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWithdrawal_Requests_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['withdrawal_requests_stddev_samp_fields'] = TResolversParentTypes['withdrawal_requests_stddev_samp_fields']> = {
  amount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWithdrawal_Requests_Sum_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['withdrawal_requests_sum_fields'] = TResolversParentTypes['withdrawal_requests_sum_fields']> = {
  amount?: Resolver<Maybe<TResolversTypes['money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWithdrawal_Requests_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['withdrawal_requests_var_pop_fields'] = TResolversParentTypes['withdrawal_requests_var_pop_fields']> = {
  amount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWithdrawal_Requests_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['withdrawal_requests_var_samp_fields'] = TResolversParentTypes['withdrawal_requests_var_samp_fields']> = {
  amount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWithdrawal_Requests_Variance_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['withdrawal_requests_variance_fields'] = TResolversParentTypes['withdrawal_requests_variance_fields']> = {
  amount?: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TResolvers<ContextType = any> = {
  activity?: TActivityResolvers<ContextType>;
  activity_aggregate?: TActivity_AggregateResolvers<ContextType>;
  activity_aggregate_fields?: TActivity_Aggregate_FieldsResolvers<ContextType>;
  activity_max_fields?: TActivity_Max_FieldsResolvers<ContextType>;
  activity_min_fields?: TActivity_Min_FieldsResolvers<ContextType>;
  activity_mutation_response?: TActivity_Mutation_ResponseResolvers<ContextType>;
  authProviderRequests?: TAuthProviderRequestsResolvers<ContextType>;
  authProviderRequests_aggregate?: TAuthProviderRequests_AggregateResolvers<ContextType>;
  authProviderRequests_aggregate_fields?: TAuthProviderRequests_Aggregate_FieldsResolvers<ContextType>;
  authProviderRequests_max_fields?: TAuthProviderRequests_Max_FieldsResolvers<ContextType>;
  authProviderRequests_min_fields?: TAuthProviderRequests_Min_FieldsResolvers<ContextType>;
  authProviderRequests_mutation_response?: TAuthProviderRequests_Mutation_ResponseResolvers<ContextType>;
  authProviders?: TAuthProvidersResolvers<ContextType>;
  authProviders_aggregate?: TAuthProviders_AggregateResolvers<ContextType>;
  authProviders_aggregate_fields?: TAuthProviders_Aggregate_FieldsResolvers<ContextType>;
  authProviders_max_fields?: TAuthProviders_Max_FieldsResolvers<ContextType>;
  authProviders_min_fields?: TAuthProviders_Min_FieldsResolvers<ContextType>;
  authProviders_mutation_response?: TAuthProviders_Mutation_ResponseResolvers<ContextType>;
  authRefreshTokens?: TAuthRefreshTokensResolvers<ContextType>;
  authRefreshTokens_aggregate?: TAuthRefreshTokens_AggregateResolvers<ContextType>;
  authRefreshTokens_aggregate_fields?: TAuthRefreshTokens_Aggregate_FieldsResolvers<ContextType>;
  authRefreshTokens_max_fields?: TAuthRefreshTokens_Max_FieldsResolvers<ContextType>;
  authRefreshTokens_min_fields?: TAuthRefreshTokens_Min_FieldsResolvers<ContextType>;
  authRefreshTokens_mutation_response?: TAuthRefreshTokens_Mutation_ResponseResolvers<ContextType>;
  authRoles?: TAuthRolesResolvers<ContextType>;
  authRoles_aggregate?: TAuthRoles_AggregateResolvers<ContextType>;
  authRoles_aggregate_fields?: TAuthRoles_Aggregate_FieldsResolvers<ContextType>;
  authRoles_max_fields?: TAuthRoles_Max_FieldsResolvers<ContextType>;
  authRoles_min_fields?: TAuthRoles_Min_FieldsResolvers<ContextType>;
  authRoles_mutation_response?: TAuthRoles_Mutation_ResponseResolvers<ContextType>;
  authUserProviders?: TAuthUserProvidersResolvers<ContextType>;
  authUserProviders_aggregate?: TAuthUserProviders_AggregateResolvers<ContextType>;
  authUserProviders_aggregate_fields?: TAuthUserProviders_Aggregate_FieldsResolvers<ContextType>;
  authUserProviders_max_fields?: TAuthUserProviders_Max_FieldsResolvers<ContextType>;
  authUserProviders_min_fields?: TAuthUserProviders_Min_FieldsResolvers<ContextType>;
  authUserProviders_mutation_response?: TAuthUserProviders_Mutation_ResponseResolvers<ContextType>;
  authUserRoles?: TAuthUserRolesResolvers<ContextType>;
  authUserRoles_aggregate?: TAuthUserRoles_AggregateResolvers<ContextType>;
  authUserRoles_aggregate_fields?: TAuthUserRoles_Aggregate_FieldsResolvers<ContextType>;
  authUserRoles_max_fields?: TAuthUserRoles_Max_FieldsResolvers<ContextType>;
  authUserRoles_min_fields?: TAuthUserRoles_Min_FieldsResolvers<ContextType>;
  authUserRoles_mutation_response?: TAuthUserRoles_Mutation_ResponseResolvers<ContextType>;
  authUserSecurityKeys?: TAuthUserSecurityKeysResolvers<ContextType>;
  authUserSecurityKeys_aggregate?: TAuthUserSecurityKeys_AggregateResolvers<ContextType>;
  authUserSecurityKeys_aggregate_fields?: TAuthUserSecurityKeys_Aggregate_FieldsResolvers<ContextType>;
  authUserSecurityKeys_avg_fields?: TAuthUserSecurityKeys_Avg_FieldsResolvers<ContextType>;
  authUserSecurityKeys_max_fields?: TAuthUserSecurityKeys_Max_FieldsResolvers<ContextType>;
  authUserSecurityKeys_min_fields?: TAuthUserSecurityKeys_Min_FieldsResolvers<ContextType>;
  authUserSecurityKeys_mutation_response?: TAuthUserSecurityKeys_Mutation_ResponseResolvers<ContextType>;
  authUserSecurityKeys_stddev_fields?: TAuthUserSecurityKeys_Stddev_FieldsResolvers<ContextType>;
  authUserSecurityKeys_stddev_pop_fields?: TAuthUserSecurityKeys_Stddev_Pop_FieldsResolvers<ContextType>;
  authUserSecurityKeys_stddev_samp_fields?: TAuthUserSecurityKeys_Stddev_Samp_FieldsResolvers<ContextType>;
  authUserSecurityKeys_sum_fields?: TAuthUserSecurityKeys_Sum_FieldsResolvers<ContextType>;
  authUserSecurityKeys_var_pop_fields?: TAuthUserSecurityKeys_Var_Pop_FieldsResolvers<ContextType>;
  authUserSecurityKeys_var_samp_fields?: TAuthUserSecurityKeys_Var_Samp_FieldsResolvers<ContextType>;
  authUserSecurityKeys_variance_fields?: TAuthUserSecurityKeys_Variance_FieldsResolvers<ContextType>;
  bigint?: GraphQLScalarType;
  boosted_idea_log?: TBoosted_Idea_LogResolvers<ContextType>;
  boosted_idea_log_aggregate?: TBoosted_Idea_Log_AggregateResolvers<ContextType>;
  boosted_idea_log_aggregate_fields?: TBoosted_Idea_Log_Aggregate_FieldsResolvers<ContextType>;
  boosted_idea_log_max_fields?: TBoosted_Idea_Log_Max_FieldsResolvers<ContextType>;
  boosted_idea_log_min_fields?: TBoosted_Idea_Log_Min_FieldsResolvers<ContextType>;
  boosted_idea_log_mutation_response?: TBoosted_Idea_Log_Mutation_ResponseResolvers<ContextType>;
  boosted_ideas?: TBoosted_IdeasResolvers<ContextType>;
  boosted_ideas_aggregate?: TBoosted_Ideas_AggregateResolvers<ContextType>;
  boosted_ideas_aggregate_fields?: TBoosted_Ideas_Aggregate_FieldsResolvers<ContextType>;
  boosted_ideas_avg_fields?: TBoosted_Ideas_Avg_FieldsResolvers<ContextType>;
  boosted_ideas_max_fields?: TBoosted_Ideas_Max_FieldsResolvers<ContextType>;
  boosted_ideas_min_fields?: TBoosted_Ideas_Min_FieldsResolvers<ContextType>;
  boosted_ideas_mutation_response?: TBoosted_Ideas_Mutation_ResponseResolvers<ContextType>;
  boosted_ideas_stddev_fields?: TBoosted_Ideas_Stddev_FieldsResolvers<ContextType>;
  boosted_ideas_stddev_pop_fields?: TBoosted_Ideas_Stddev_Pop_FieldsResolvers<ContextType>;
  boosted_ideas_stddev_samp_fields?: TBoosted_Ideas_Stddev_Samp_FieldsResolvers<ContextType>;
  boosted_ideas_sum_fields?: TBoosted_Ideas_Sum_FieldsResolvers<ContextType>;
  boosted_ideas_var_pop_fields?: TBoosted_Ideas_Var_Pop_FieldsResolvers<ContextType>;
  boosted_ideas_var_samp_fields?: TBoosted_Ideas_Var_Samp_FieldsResolvers<ContextType>;
  boosted_ideas_variance_fields?: TBoosted_Ideas_Variance_FieldsResolvers<ContextType>;
  buckets?: TBucketsResolvers<ContextType>;
  buckets_aggregate?: TBuckets_AggregateResolvers<ContextType>;
  buckets_aggregate_fields?: TBuckets_Aggregate_FieldsResolvers<ContextType>;
  buckets_avg_fields?: TBuckets_Avg_FieldsResolvers<ContextType>;
  buckets_max_fields?: TBuckets_Max_FieldsResolvers<ContextType>;
  buckets_min_fields?: TBuckets_Min_FieldsResolvers<ContextType>;
  buckets_mutation_response?: TBuckets_Mutation_ResponseResolvers<ContextType>;
  buckets_stddev_fields?: TBuckets_Stddev_FieldsResolvers<ContextType>;
  buckets_stddev_pop_fields?: TBuckets_Stddev_Pop_FieldsResolvers<ContextType>;
  buckets_stddev_samp_fields?: TBuckets_Stddev_Samp_FieldsResolvers<ContextType>;
  buckets_sum_fields?: TBuckets_Sum_FieldsResolvers<ContextType>;
  buckets_var_pop_fields?: TBuckets_Var_Pop_FieldsResolvers<ContextType>;
  buckets_var_samp_fields?: TBuckets_Var_Samp_FieldsResolvers<ContextType>;
  buckets_variance_fields?: TBuckets_Variance_FieldsResolvers<ContextType>;
  bytea?: GraphQLScalarType;
  citext?: GraphQLScalarType;
  comment_status_types?: TComment_Status_TypesResolvers<ContextType>;
  comment_status_types_aggregate?: TComment_Status_Types_AggregateResolvers<ContextType>;
  comment_status_types_aggregate_fields?: TComment_Status_Types_Aggregate_FieldsResolvers<ContextType>;
  comment_status_types_max_fields?: TComment_Status_Types_Max_FieldsResolvers<ContextType>;
  comment_status_types_min_fields?: TComment_Status_Types_Min_FieldsResolvers<ContextType>;
  comment_status_types_mutation_response?: TComment_Status_Types_Mutation_ResponseResolvers<ContextType>;
  files?: TFilesResolvers<ContextType>;
  files_aggregate?: TFiles_AggregateResolvers<ContextType>;
  files_aggregate_fields?: TFiles_Aggregate_FieldsResolvers<ContextType>;
  files_avg_fields?: TFiles_Avg_FieldsResolvers<ContextType>;
  files_max_fields?: TFiles_Max_FieldsResolvers<ContextType>;
  files_min_fields?: TFiles_Min_FieldsResolvers<ContextType>;
  files_mutation_response?: TFiles_Mutation_ResponseResolvers<ContextType>;
  files_stddev_fields?: TFiles_Stddev_FieldsResolvers<ContextType>;
  files_stddev_pop_fields?: TFiles_Stddev_Pop_FieldsResolvers<ContextType>;
  files_stddev_samp_fields?: TFiles_Stddev_Samp_FieldsResolvers<ContextType>;
  files_sum_fields?: TFiles_Sum_FieldsResolvers<ContextType>;
  files_var_pop_fields?: TFiles_Var_Pop_FieldsResolvers<ContextType>;
  files_var_samp_fields?: TFiles_Var_Samp_FieldsResolvers<ContextType>;
  files_variance_fields?: TFiles_Variance_FieldsResolvers<ContextType>;
  idea_comment_replies?: TIdea_Comment_RepliesResolvers<ContextType>;
  idea_comment_replies_aggregate?: TIdea_Comment_Replies_AggregateResolvers<ContextType>;
  idea_comment_replies_aggregate_fields?: TIdea_Comment_Replies_Aggregate_FieldsResolvers<ContextType>;
  idea_comment_replies_max_fields?: TIdea_Comment_Replies_Max_FieldsResolvers<ContextType>;
  idea_comment_replies_min_fields?: TIdea_Comment_Replies_Min_FieldsResolvers<ContextType>;
  idea_comment_replies_mutation_response?: TIdea_Comment_Replies_Mutation_ResponseResolvers<ContextType>;
  idea_comments?: TIdea_CommentsResolvers<ContextType>;
  idea_comments_aggregate?: TIdea_Comments_AggregateResolvers<ContextType>;
  idea_comments_aggregate_fields?: TIdea_Comments_Aggregate_FieldsResolvers<ContextType>;
  idea_comments_avg_fields?: TIdea_Comments_Avg_FieldsResolvers<ContextType>;
  idea_comments_max_fields?: TIdea_Comments_Max_FieldsResolvers<ContextType>;
  idea_comments_min_fields?: TIdea_Comments_Min_FieldsResolvers<ContextType>;
  idea_comments_mutation_response?: TIdea_Comments_Mutation_ResponseResolvers<ContextType>;
  idea_comments_stddev_fields?: TIdea_Comments_Stddev_FieldsResolvers<ContextType>;
  idea_comments_stddev_pop_fields?: TIdea_Comments_Stddev_Pop_FieldsResolvers<ContextType>;
  idea_comments_stddev_samp_fields?: TIdea_Comments_Stddev_Samp_FieldsResolvers<ContextType>;
  idea_comments_sum_fields?: TIdea_Comments_Sum_FieldsResolvers<ContextType>;
  idea_comments_var_pop_fields?: TIdea_Comments_Var_Pop_FieldsResolvers<ContextType>;
  idea_comments_var_samp_fields?: TIdea_Comments_Var_Samp_FieldsResolvers<ContextType>;
  idea_comments_variance_fields?: TIdea_Comments_Variance_FieldsResolvers<ContextType>;
  idea_preview?: TIdea_PreviewResolvers<ContextType>;
  idea_preview_aggregate?: TIdea_Preview_AggregateResolvers<ContextType>;
  idea_preview_aggregate_fields?: TIdea_Preview_Aggregate_FieldsResolvers<ContextType>;
  idea_preview_max_fields?: TIdea_Preview_Max_FieldsResolvers<ContextType>;
  idea_preview_min_fields?: TIdea_Preview_Min_FieldsResolvers<ContextType>;
  idea_preview_mutation_response?: TIdea_Preview_Mutation_ResponseResolvers<ContextType>;
  idea_votes?: TIdea_VotesResolvers<ContextType>;
  idea_votes_aggregate?: TIdea_Votes_AggregateResolvers<ContextType>;
  idea_votes_aggregate_fields?: TIdea_Votes_Aggregate_FieldsResolvers<ContextType>;
  idea_votes_max_fields?: TIdea_Votes_Max_FieldsResolvers<ContextType>;
  idea_votes_min_fields?: TIdea_Votes_Min_FieldsResolvers<ContextType>;
  idea_votes_mutation_response?: TIdea_Votes_Mutation_ResponseResolvers<ContextType>;
  ideas?: TIdeasResolvers<ContextType>;
  ideas_aggregate?: TIdeas_AggregateResolvers<ContextType>;
  ideas_aggregate_fields?: TIdeas_Aggregate_FieldsResolvers<ContextType>;
  ideas_avg_fields?: TIdeas_Avg_FieldsResolvers<ContextType>;
  ideas_max_fields?: TIdeas_Max_FieldsResolvers<ContextType>;
  ideas_min_fields?: TIdeas_Min_FieldsResolvers<ContextType>;
  ideas_mutation_response?: TIdeas_Mutation_ResponseResolvers<ContextType>;
  ideas_stddev_fields?: TIdeas_Stddev_FieldsResolvers<ContextType>;
  ideas_stddev_pop_fields?: TIdeas_Stddev_Pop_FieldsResolvers<ContextType>;
  ideas_stddev_samp_fields?: TIdeas_Stddev_Samp_FieldsResolvers<ContextType>;
  ideas_sum_fields?: TIdeas_Sum_FieldsResolvers<ContextType>;
  ideas_var_pop_fields?: TIdeas_Var_Pop_FieldsResolvers<ContextType>;
  ideas_var_samp_fields?: TIdeas_Var_Samp_FieldsResolvers<ContextType>;
  ideas_variance_fields?: TIdeas_Variance_FieldsResolvers<ContextType>;
  interested_ideas?: TInterested_IdeasResolvers<ContextType>;
  interested_ideas_aggregate?: TInterested_Ideas_AggregateResolvers<ContextType>;
  interested_ideas_aggregate_fields?: TInterested_Ideas_Aggregate_FieldsResolvers<ContextType>;
  interested_ideas_max_fields?: TInterested_Ideas_Max_FieldsResolvers<ContextType>;
  interested_ideas_min_fields?: TInterested_Ideas_Min_FieldsResolvers<ContextType>;
  interested_ideas_mutation_response?: TInterested_Ideas_Mutation_ResponseResolvers<ContextType>;
  jsonb?: GraphQLScalarType;
  match_settings?: TMatch_SettingsResolvers<ContextType>;
  match_settings_aggregate?: TMatch_Settings_AggregateResolvers<ContextType>;
  match_settings_aggregate_fields?: TMatch_Settings_Aggregate_FieldsResolvers<ContextType>;
  match_settings_max_fields?: TMatch_Settings_Max_FieldsResolvers<ContextType>;
  match_settings_min_fields?: TMatch_Settings_Min_FieldsResolvers<ContextType>;
  match_settings_mutation_response?: TMatch_Settings_Mutation_ResponseResolvers<ContextType>;
  message?: TMessageResolvers<ContextType>;
  message_aggregate?: TMessage_AggregateResolvers<ContextType>;
  message_aggregate_fields?: TMessage_Aggregate_FieldsResolvers<ContextType>;
  message_max_fields?: TMessage_Max_FieldsResolvers<ContextType>;
  message_min_fields?: TMessage_Min_FieldsResolvers<ContextType>;
  message_mutation_response?: TMessage_Mutation_ResponseResolvers<ContextType>;
  message_thread?: TMessage_ThreadResolvers<ContextType>;
  message_thread_aggregate?: TMessage_Thread_AggregateResolvers<ContextType>;
  message_thread_aggregate_fields?: TMessage_Thread_Aggregate_FieldsResolvers<ContextType>;
  message_thread_max_fields?: TMessage_Thread_Max_FieldsResolvers<ContextType>;
  message_thread_min_fields?: TMessage_Thread_Min_FieldsResolvers<ContextType>;
  message_thread_mutation_response?: TMessage_Thread_Mutation_ResponseResolvers<ContextType>;
  message_thread_users?: TMessage_Thread_UsersResolvers<ContextType>;
  message_thread_users_aggregate?: TMessage_Thread_Users_AggregateResolvers<ContextType>;
  message_thread_users_aggregate_fields?: TMessage_Thread_Users_Aggregate_FieldsResolvers<ContextType>;
  message_thread_users_max_fields?: TMessage_Thread_Users_Max_FieldsResolvers<ContextType>;
  message_thread_users_min_fields?: TMessage_Thread_Users_Min_FieldsResolvers<ContextType>;
  message_thread_users_mutation_response?: TMessage_Thread_Users_Mutation_ResponseResolvers<ContextType>;
  money?: GraphQLScalarType;
  mutation_root?: TMutation_RootResolvers<ContextType>;
  notification_types?: TNotification_TypesResolvers<ContextType>;
  notification_types_aggregate?: TNotification_Types_AggregateResolvers<ContextType>;
  notification_types_aggregate_fields?: TNotification_Types_Aggregate_FieldsResolvers<ContextType>;
  notification_types_max_fields?: TNotification_Types_Max_FieldsResolvers<ContextType>;
  notification_types_min_fields?: TNotification_Types_Min_FieldsResolvers<ContextType>;
  notification_types_mutation_response?: TNotification_Types_Mutation_ResponseResolvers<ContextType>;
  query_root?: TQuery_RootResolvers<ContextType>;
  report?: TReportResolvers<ContextType>;
  report_aggregate?: TReport_AggregateResolvers<ContextType>;
  report_aggregate_fields?: TReport_Aggregate_FieldsResolvers<ContextType>;
  report_max_fields?: TReport_Max_FieldsResolvers<ContextType>;
  report_min_fields?: TReport_Min_FieldsResolvers<ContextType>;
  report_mutation_response?: TReport_Mutation_ResponseResolvers<ContextType>;
  subscription_root?: TSubscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  user_address?: TUser_AddressResolvers<ContextType>;
  user_address_aggregate?: TUser_Address_AggregateResolvers<ContextType>;
  user_address_aggregate_fields?: TUser_Address_Aggregate_FieldsResolvers<ContextType>;
  user_address_max_fields?: TUser_Address_Max_FieldsResolvers<ContextType>;
  user_address_min_fields?: TUser_Address_Min_FieldsResolvers<ContextType>;
  user_address_mutation_response?: TUser_Address_Mutation_ResponseResolvers<ContextType>;
  user_esteem_points_currency?: TUser_Esteem_Points_CurrencyResolvers<ContextType>;
  user_esteem_points_currency_aggregate?: TUser_Esteem_Points_Currency_AggregateResolvers<ContextType>;
  user_esteem_points_currency_aggregate_fields?: TUser_Esteem_Points_Currency_Aggregate_FieldsResolvers<ContextType>;
  user_esteem_points_currency_avg_fields?: TUser_Esteem_Points_Currency_Avg_FieldsResolvers<ContextType>;
  user_esteem_points_currency_max_fields?: TUser_Esteem_Points_Currency_Max_FieldsResolvers<ContextType>;
  user_esteem_points_currency_min_fields?: TUser_Esteem_Points_Currency_Min_FieldsResolvers<ContextType>;
  user_esteem_points_currency_mutation_response?: TUser_Esteem_Points_Currency_Mutation_ResponseResolvers<ContextType>;
  user_esteem_points_currency_stddev_fields?: TUser_Esteem_Points_Currency_Stddev_FieldsResolvers<ContextType>;
  user_esteem_points_currency_stddev_pop_fields?: TUser_Esteem_Points_Currency_Stddev_Pop_FieldsResolvers<ContextType>;
  user_esteem_points_currency_stddev_samp_fields?: TUser_Esteem_Points_Currency_Stddev_Samp_FieldsResolvers<ContextType>;
  user_esteem_points_currency_sum_fields?: TUser_Esteem_Points_Currency_Sum_FieldsResolvers<ContextType>;
  user_esteem_points_currency_var_pop_fields?: TUser_Esteem_Points_Currency_Var_Pop_FieldsResolvers<ContextType>;
  user_esteem_points_currency_var_samp_fields?: TUser_Esteem_Points_Currency_Var_Samp_FieldsResolvers<ContextType>;
  user_esteem_points_currency_variance_fields?: TUser_Esteem_Points_Currency_Variance_FieldsResolvers<ContextType>;
  user_followers?: TUser_FollowersResolvers<ContextType>;
  user_followers_aggregate?: TUser_Followers_AggregateResolvers<ContextType>;
  user_followers_aggregate_fields?: TUser_Followers_Aggregate_FieldsResolvers<ContextType>;
  user_followers_max_fields?: TUser_Followers_Max_FieldsResolvers<ContextType>;
  user_followers_min_fields?: TUser_Followers_Min_FieldsResolvers<ContextType>;
  user_followers_mutation_response?: TUser_Followers_Mutation_ResponseResolvers<ContextType>;
  user_notifications?: TUser_NotificationsResolvers<ContextType>;
  user_notifications_aggregate?: TUser_Notifications_AggregateResolvers<ContextType>;
  user_notifications_aggregate_fields?: TUser_Notifications_Aggregate_FieldsResolvers<ContextType>;
  user_notifications_max_fields?: TUser_Notifications_Max_FieldsResolvers<ContextType>;
  user_notifications_min_fields?: TUser_Notifications_Min_FieldsResolvers<ContextType>;
  user_notifications_mutation_response?: TUser_Notifications_Mutation_ResponseResolvers<ContextType>;
  user_profile?: TUser_ProfileResolvers<ContextType>;
  user_profile_aggregate?: TUser_Profile_AggregateResolvers<ContextType>;
  user_profile_aggregate_fields?: TUser_Profile_Aggregate_FieldsResolvers<ContextType>;
  user_profile_max_fields?: TUser_Profile_Max_FieldsResolvers<ContextType>;
  user_profile_min_fields?: TUser_Profile_Min_FieldsResolvers<ContextType>;
  user_profile_mutation_response?: TUser_Profile_Mutation_ResponseResolvers<ContextType>;
  users?: TUsersResolvers<ContextType>;
  users_aggregate?: TUsers_AggregateResolvers<ContextType>;
  users_aggregate_fields?: TUsers_Aggregate_FieldsResolvers<ContextType>;
  users_max_fields?: TUsers_Max_FieldsResolvers<ContextType>;
  users_min_fields?: TUsers_Min_FieldsResolvers<ContextType>;
  users_mutation_response?: TUsers_Mutation_ResponseResolvers<ContextType>;
  uuid?: GraphQLScalarType;
  v_comments?: TV_CommentsResolvers<ContextType>;
  v_comments_aggregate?: TV_Comments_AggregateResolvers<ContextType>;
  v_comments_aggregate_fields?: TV_Comments_Aggregate_FieldsResolvers<ContextType>;
  v_comments_avg_fields?: TV_Comments_Avg_FieldsResolvers<ContextType>;
  v_comments_max_fields?: TV_Comments_Max_FieldsResolvers<ContextType>;
  v_comments_min_fields?: TV_Comments_Min_FieldsResolvers<ContextType>;
  v_comments_mutation_response?: TV_Comments_Mutation_ResponseResolvers<ContextType>;
  v_comments_stddev_fields?: TV_Comments_Stddev_FieldsResolvers<ContextType>;
  v_comments_stddev_pop_fields?: TV_Comments_Stddev_Pop_FieldsResolvers<ContextType>;
  v_comments_stddev_samp_fields?: TV_Comments_Stddev_Samp_FieldsResolvers<ContextType>;
  v_comments_sum_fields?: TV_Comments_Sum_FieldsResolvers<ContextType>;
  v_comments_var_pop_fields?: TV_Comments_Var_Pop_FieldsResolvers<ContextType>;
  v_comments_var_samp_fields?: TV_Comments_Var_Samp_FieldsResolvers<ContextType>;
  v_comments_variance_fields?: TV_Comments_Variance_FieldsResolvers<ContextType>;
  withdrawal_requests?: TWithdrawal_RequestsResolvers<ContextType>;
  withdrawal_requests_aggregate?: TWithdrawal_Requests_AggregateResolvers<ContextType>;
  withdrawal_requests_aggregate_fields?: TWithdrawal_Requests_Aggregate_FieldsResolvers<ContextType>;
  withdrawal_requests_avg_fields?: TWithdrawal_Requests_Avg_FieldsResolvers<ContextType>;
  withdrawal_requests_max_fields?: TWithdrawal_Requests_Max_FieldsResolvers<ContextType>;
  withdrawal_requests_min_fields?: TWithdrawal_Requests_Min_FieldsResolvers<ContextType>;
  withdrawal_requests_mutation_response?: TWithdrawal_Requests_Mutation_ResponseResolvers<ContextType>;
  withdrawal_requests_stddev_fields?: TWithdrawal_Requests_Stddev_FieldsResolvers<ContextType>;
  withdrawal_requests_stddev_pop_fields?: TWithdrawal_Requests_Stddev_Pop_FieldsResolvers<ContextType>;
  withdrawal_requests_stddev_samp_fields?: TWithdrawal_Requests_Stddev_Samp_FieldsResolvers<ContextType>;
  withdrawal_requests_sum_fields?: TWithdrawal_Requests_Sum_FieldsResolvers<ContextType>;
  withdrawal_requests_var_pop_fields?: TWithdrawal_Requests_Var_Pop_FieldsResolvers<ContextType>;
  withdrawal_requests_var_samp_fields?: TWithdrawal_Requests_Var_Samp_FieldsResolvers<ContextType>;
  withdrawal_requests_variance_fields?: TWithdrawal_Requests_Variance_FieldsResolvers<ContextType>;
};

export type TDirectiveResolvers<ContextType = any> = {
  cached?: TCachedDirectiveResolver<any, any, ContextType>;
};
