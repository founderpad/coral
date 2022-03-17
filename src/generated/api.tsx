import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  citext: any;
  jsonb: any;
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

/**
 * The activity table of all user actions
 *
 *
 * columns and relationships of "activity"
 *
 */
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

/** input type for inserting data into table "activity" */
export type TActivity_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<Scalars['String']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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

/** columns and relationships of "storage.buckets" */
export type TBuckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  downloadExpiration: Scalars['Int'];
  /** An array relationship */
  files: Array<TFiles>;
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

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type TBuckets_Bool_Exp = {
  _and?: InputMaybe<Array<TBuckets_Bool_Exp>>;
  _not?: InputMaybe<TBuckets_Bool_Exp>;
  _or?: InputMaybe<Array<TBuckets_Bool_Exp>>;
  cacheControl?: InputMaybe<TString_Comparison_Exp>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<TInt_Comparison_Exp>;
  files?: InputMaybe<TFiles_Bool_Exp>;
  id?: InputMaybe<TString_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<TInt_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<TInt_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<TBoolean_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
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

/** input type for inserting data into table "storage.files" */
export type TFiles_Insert_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
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

/** order by stddev() on columns of table "storage.files" */
export type TFiles_Stddev_Order_By = {
  size?: InputMaybe<TOrder_By>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type TFiles_Stddev_Pop_Order_By = {
  size?: InputMaybe<TOrder_By>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type TFiles_Stddev_Samp_Order_By = {
  size?: InputMaybe<TOrder_By>;
};

/** order by sum() on columns of table "storage.files" */
export type TFiles_Sum_Order_By = {
  size?: InputMaybe<TOrder_By>;
};

/** order by var_pop() on columns of table "storage.files" */
export type TFiles_Var_Pop_Order_By = {
  size?: InputMaybe<TOrder_By>;
};

/** order by var_samp() on columns of table "storage.files" */
export type TFiles_Var_Samp_Order_By = {
  size?: InputMaybe<TOrder_By>;
};

/** order by variance() on columns of table "storage.files" */
export type TFiles_Variance_Order_By = {
  size?: InputMaybe<TOrder_By>;
};

/**
 * The table to store all replies to comments
 *
 *
 * columns and relationships of "idea_comment_replies"
 *
 */
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
  /** unique or primary key constraint */
  | 'idea_comment_replies_pkey';

/** input type for inserting data into table "idea_comment_replies" */
export type TIdea_Comment_Replies_Insert_Input = {
  comment?: InputMaybe<TIdea_Comments_Obj_Rel_Insert_Input>;
  commentId?: InputMaybe<Scalars['uuid']>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  targetUserId?: InputMaybe<Scalars['uuid']>;
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
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "idea_comment_replies" */
export type TIdea_Comment_Replies_Update_Column =
  /** column name */
  | 'value';

/**
 * The table to store all comments for each idea
 *
 *
 * columns and relationships of "idea_comments"
 *
 */
export type TIdea_Comments = {
  __typename?: 'idea_comments';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  idea?: Maybe<TIdeas>;
  ideaId: Scalars['uuid'];
  /** An array relationship */
  replies: Array<TIdea_Comment_Replies>;
  /** An aggregate relationship */
  replies_aggregate: TIdea_Comment_Replies_Aggregate;
  targetUserId: Scalars['uuid'];
  totalReplies: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<TUsers>;
  userId: Scalars['uuid'];
  value: Scalars['String'];
};


/**
 * The table to store all comments for each idea
 *
 *
 * columns and relationships of "idea_comments"
 *
 */
export type TIdea_CommentsRepliesArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comment_Replies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comment_Replies_Order_By>>;
  where?: InputMaybe<TIdea_Comment_Replies_Bool_Exp>;
};


/**
 * The table to store all comments for each idea
 *
 *
 * columns and relationships of "idea_comments"
 *
 */
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
  replies?: InputMaybe<TIdea_Comment_Replies_Bool_Exp>;
  targetUserId?: InputMaybe<TUuid_Comparison_Exp>;
  totalReplies?: InputMaybe<TInt_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
  value?: InputMaybe<TString_Comparison_Exp>;
};

/** unique or primary key constraints on table "idea_comments" */
export type TIdea_Comments_Constraint =
  /** unique or primary key constraint */
  | 'idea_comments_pkey';

/** input type for incrementing numeric columns in table "idea_comments" */
export type TIdea_Comments_Inc_Input = {
  totalReplies?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "idea_comments" */
export type TIdea_Comments_Insert_Input = {
  idea?: InputMaybe<TIdeas_Obj_Rel_Insert_Input>;
  ideaId?: InputMaybe<Scalars['uuid']>;
  replies?: InputMaybe<TIdea_Comment_Replies_Arr_Rel_Insert_Input>;
  targetUserId?: InputMaybe<Scalars['uuid']>;
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
  replies_aggregate?: InputMaybe<TIdea_Comment_Replies_Aggregate_Order_By>;
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
  | 'targetUserId'
  /** column name */
  | 'totalReplies'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId'
  /** column name */
  | 'value';

/** input type for updating data in table "idea_comments" */
export type TIdea_Comments_Set_Input = {
  totalReplies?: InputMaybe<Scalars['Int']>;
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
  | 'totalReplies'
  /** column name */
  | 'value';

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
  comments?: InputMaybe<TIdea_Comments_Bool_Exp>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  field?: InputMaybe<TString_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  interested?: InputMaybe<TInterested_Ideas_Bool_Exp>;
  isNew?: InputMaybe<TBoolean_Comparison_Exp>;
  isPublished?: InputMaybe<TBoolean_Comparison_Exp>;
  name?: InputMaybe<TString_Comparison_Exp>;
  status?: InputMaybe<TString_Comparison_Exp>;
  summary?: InputMaybe<TString_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
  votes?: InputMaybe<TIdea_Votes_Bool_Exp>;
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

/** Ordering options when selecting data from "idea_preview". */
export type TIdea_Preview_Order_By = {
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

/**
 * The table to store all ideas
 *
 *
 * columns and relationships of "idea_votes"
 *
 */
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

/** input type for inserting data into table "idea_votes" */
export type TIdea_Votes_Insert_Input = {
  idea?: InputMaybe<TIdeas_Obj_Rel_Insert_Input>;
  ideaId?: InputMaybe<Scalars['uuid']>;
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

/**
 * The ideas created by all users
 *
 *
 * columns and relationships of "ideas"
 *
 */
export type TIdeas = {
  __typename?: 'ideas';
  additionalInformation?: Maybe<Scalars['String']>;
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


/**
 * The ideas created by all users
 *
 *
 * columns and relationships of "ideas"
 *
 */
export type TIdeasCommentsArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comments_Order_By>>;
  where?: InputMaybe<TIdea_Comments_Bool_Exp>;
};


/**
 * The ideas created by all users
 *
 *
 * columns and relationships of "ideas"
 *
 */
export type TIdeasComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Comments_Order_By>>;
  where?: InputMaybe<TIdea_Comments_Bool_Exp>;
};


/**
 * The ideas created by all users
 *
 *
 * columns and relationships of "ideas"
 *
 */
export type TIdeasInterestedArgs = {
  distinct_on?: InputMaybe<Array<TInterested_Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TInterested_Ideas_Order_By>>;
  where?: InputMaybe<TInterested_Ideas_Bool_Exp>;
};


/**
 * The ideas created by all users
 *
 *
 * columns and relationships of "ideas"
 *
 */
export type TIdeasInterested_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TInterested_Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TInterested_Ideas_Order_By>>;
  where?: InputMaybe<TInterested_Ideas_Bool_Exp>;
};


/**
 * The ideas created by all users
 *
 *
 * columns and relationships of "ideas"
 *
 */
export type TIdeasVotesArgs = {
  distinct_on?: InputMaybe<Array<TIdea_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdea_Votes_Order_By>>;
  where?: InputMaybe<TIdea_Votes_Bool_Exp>;
};


/**
 * The ideas created by all users
 *
 *
 * columns and relationships of "ideas"
 *
 */
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
  businessPlan?: InputMaybe<TString_Comparison_Exp>;
  comments?: InputMaybe<TIdea_Comments_Bool_Exp>;
  competitors?: InputMaybe<TString_Comparison_Exp>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  description?: InputMaybe<TString_Comparison_Exp>;
  field?: InputMaybe<TString_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  interested?: InputMaybe<TInterested_Ideas_Bool_Exp>;
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
};

/** unique or primary key constraints on table "ideas" */
export type TIdeas_Constraint =
  /** unique or primary key constraint */
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
  businessPlan?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<TIdea_Comments_Arr_Rel_Insert_Input>;
  competitors?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
  interested?: InputMaybe<TInterested_Ideas_Arr_Rel_Insert_Input>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  team?: InputMaybe<Scalars['String']>;
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

/** input type for updating data in table "ideas" */
export type TIdeas_Set_Input = {
  additionalInformation?: InputMaybe<Scalars['String']>;
  businessPlan?: InputMaybe<Scalars['String']>;
  competitors?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  team?: InputMaybe<Scalars['String']>;
  totalComments?: InputMaybe<Scalars['Int']>;
  totalInterested?: InputMaybe<Scalars['Int']>;
  totalVotes?: InputMaybe<Scalars['Int']>;
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
  | 'description'
  /** column name */
  | 'field'
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
  | 'totalVotes';

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

/**
 * The table to store all ideas users are interested in
 *
 *
 * columns and relationships of "interested_ideas"
 *
 */
export type TInterested_Ideas = {
  __typename?: 'interested_ideas';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  ideaId: Scalars['uuid'];
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
};

/** Boolean expression to filter rows from the table "interested_ideas". All fields are combined with a logical 'AND'. */
export type TInterested_Ideas_Bool_Exp = {
  _and?: InputMaybe<Array<TInterested_Ideas_Bool_Exp>>;
  _not?: InputMaybe<TInterested_Ideas_Bool_Exp>;
  _or?: InputMaybe<Array<TInterested_Ideas_Bool_Exp>>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  ideaId?: InputMaybe<TUuid_Comparison_Exp>;
  user?: InputMaybe<TUsers_Bool_Exp>;
  userId?: InputMaybe<TUuid_Comparison_Exp>;
};

/** input type for inserting data into table "interested_ideas" */
export type TInterested_Ideas_Insert_Input = {
  ideaId?: InputMaybe<Scalars['uuid']>;
  targetUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TInterested_Ideas_Max_Fields = {
  __typename?: 'interested_ideas_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  ideaId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "interested_ideas" */
export type TInterested_Ideas_Max_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  ideaId?: InputMaybe<TOrder_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** aggregate min on columns */
export type TInterested_Ideas_Min_Fields = {
  __typename?: 'interested_ideas_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  ideaId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "interested_ideas" */
export type TInterested_Ideas_Min_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  ideaId?: InputMaybe<TOrder_By>;
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

/** Ordering options when selecting data from "interested_ideas". */
export type TInterested_Ideas_Order_By = {
  createdAt?: InputMaybe<TOrder_By>;
  id?: InputMaybe<TOrder_By>;
  ideaId?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  userId?: InputMaybe<TOrder_By>;
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
  | 'userId';

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type TJsonb_Comparison_Exp = {
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

/**
 * All chat messages
 *
 *
 * columns and relationships of "message"
 *
 */
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
  /** unique or primary key constraint */
  | 'message_pkey';

/** input type for inserting data into table "message" */
export type TMessage_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  messageThread?: InputMaybe<TMessage_Thread_Obj_Rel_Insert_Input>;
  threadId?: InputMaybe<Scalars['uuid']>;
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
  threadId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/**
 * The parent table for all messages for a particular thread between two users
 *
 *
 * columns and relationships of "message_thread"
 *
 */
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


/**
 * The parent table for all messages for a particular thread between two users
 *
 *
 * columns and relationships of "message_thread"
 *
 */
export type TMessage_ThreadMessageThreadUsersArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Users_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
};


/**
 * The parent table for all messages for a particular thread between two users
 *
 *
 * columns and relationships of "message_thread"
 *
 */
export type TMessage_ThreadMessageThreadUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Users_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
};


/**
 * The parent table for all messages for a particular thread between two users
 *
 *
 * columns and relationships of "message_thread"
 *
 */
export type TMessage_ThreadMessagesArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Order_By>>;
  where?: InputMaybe<TMessage_Bool_Exp>;
};


/**
 * The parent table for all messages for a particular thread between two users
 *
 *
 * columns and relationships of "message_thread"
 *
 */
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

/** Boolean expression to filter rows from the table "message_thread". All fields are combined with a logical 'AND'. */
export type TMessage_Thread_Bool_Exp = {
  _and?: InputMaybe<Array<TMessage_Thread_Bool_Exp>>;
  _not?: InputMaybe<TMessage_Thread_Bool_Exp>;
  _or?: InputMaybe<Array<TMessage_Thread_Bool_Exp>>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  messageThreadUsers?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
  messages?: InputMaybe<TMessage_Bool_Exp>;
  name?: InputMaybe<TString_Comparison_Exp>;
  owner?: InputMaybe<TUsers_Bool_Exp>;
  ownerId?: InputMaybe<TUuid_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "message_thread" */
export type TMessage_Thread_Constraint =
  /** unique or primary key constraint */
  | 'message_thread_pkey';

/** input type for inserting data into table "message_thread" */
export type TMessage_Thread_Insert_Input = {
  messageThreadUsers?: InputMaybe<TMessage_Thread_Users_Arr_Rel_Insert_Input>;
  messages?: InputMaybe<TMessage_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['uuid']>;
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
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "message_thread" */
export type TMessage_Thread_Update_Column =
  /** column name */
  | 'name';

/**
 * All users participating in the message thread
 *
 *
 * columns and relationships of "message_thread_users"
 *
 */
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

/** input type for inserting data into table "message_thread_users" */
export type TMessage_Thread_Users_Insert_Input = {
  messageThread?: InputMaybe<TMessage_Thread_Obj_Rel_Insert_Input>;
  threadId?: InputMaybe<Scalars['uuid']>;
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

/** Ordering options when selecting data from "message_thread_users". */
export type TMessage_Thread_Users_Order_By = {
  messageThread?: InputMaybe<TMessage_Thread_Order_By>;
  threadId?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
  userId?: InputMaybe<TOrder_By>;
};

/** select columns of table "message_thread_users" */
export type TMessage_Thread_Users_Select_Column =
  /** column name */
  | 'threadId'
  /** column name */
  | 'userId';

/** update columns of table "message" */
export type TMessage_Update_Column =
  /** column name */
  | 'content'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'threadId'
  /** column name */
  | 'updatedAt';

/** mutation root */
export type TMutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<TFiles>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<TFiles_Mutation_Response>;
  /** delete data from the table: "idea_comment_replies" */
  delete_idea_comment_replies?: Maybe<TIdea_Comment_Replies_Mutation_Response>;
  /** delete single row from the table: "idea_comment_replies" */
  delete_idea_comment_replies_by_pk?: Maybe<TIdea_Comment_Replies>;
  /** delete data from the table: "idea_comments" */
  delete_idea_comments?: Maybe<TIdea_Comments_Mutation_Response>;
  /** delete single row from the table: "idea_comments" */
  delete_idea_comments_by_pk?: Maybe<TIdea_Comments>;
  /** delete data from the table: "idea_votes" */
  delete_idea_votes?: Maybe<TIdea_Votes_Mutation_Response>;
  /** delete single row from the table: "idea_votes" */
  delete_idea_votes_by_pk?: Maybe<TIdea_Votes>;
  /** delete data from the table: "ideas" */
  delete_ideas?: Maybe<TIdeas_Mutation_Response>;
  /** delete single row from the table: "ideas" */
  delete_ideas_by_pk?: Maybe<TIdeas>;
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
  /** delete data from the table: "user_followers" */
  delete_user_followers?: Maybe<TUser_Followers_Mutation_Response>;
  /** delete single row from the table: "user_followers" */
  delete_user_followers_by_pk?: Maybe<TUser_Followers>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<TFiles>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<TFiles_Mutation_Response>;
  /** insert data into the table: "activity" */
  insert_activity?: Maybe<TActivity_Mutation_Response>;
  /** insert a single row into the table: "activity" */
  insert_activity_one?: Maybe<TActivity>;
  /** insert data into the table: "idea_comment_replies" */
  insert_idea_comment_replies?: Maybe<TIdea_Comment_Replies_Mutation_Response>;
  /** insert a single row into the table: "idea_comment_replies" */
  insert_idea_comment_replies_one?: Maybe<TIdea_Comment_Replies>;
  /** insert data into the table: "idea_comments" */
  insert_idea_comments?: Maybe<TIdea_Comments_Mutation_Response>;
  /** insert a single row into the table: "idea_comments" */
  insert_idea_comments_one?: Maybe<TIdea_Comments>;
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
  /** insert data into the table: "report" */
  insert_report?: Maybe<TReport_Mutation_Response>;
  /** insert a single row into the table: "report" */
  insert_report_one?: Maybe<TReport>;
  /** insert data into the table: "user_followers" */
  insert_user_followers?: Maybe<TUser_Followers_Mutation_Response>;
  /** insert a single row into the table: "user_followers" */
  insert_user_followers_one?: Maybe<TUser_Followers>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<TUsers>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<TUsers_Mutation_Response>;
  /** update data of the table: "idea_comment_replies" */
  update_idea_comment_replies?: Maybe<TIdea_Comment_Replies_Mutation_Response>;
  /** update single row of the table: "idea_comment_replies" */
  update_idea_comment_replies_by_pk?: Maybe<TIdea_Comment_Replies>;
  /** update data of the table: "idea_comments" */
  update_idea_comments?: Maybe<TIdea_Comments_Mutation_Response>;
  /** update single row of the table: "idea_comments" */
  update_idea_comments_by_pk?: Maybe<TIdea_Comments>;
  /** update data of the table: "ideas" */
  update_ideas?: Maybe<TIdeas_Mutation_Response>;
  /** update single row of the table: "ideas" */
  update_ideas_by_pk?: Maybe<TIdeas>;
  /** update data of the table: "message" */
  update_message?: Maybe<TMessage_Mutation_Response>;
  /** update single row of the table: "message" */
  update_message_by_pk?: Maybe<TMessage>;
  /** update data of the table: "message_thread" */
  update_message_thread?: Maybe<TMessage_Thread_Mutation_Response>;
  /** update single row of the table: "message_thread" */
  update_message_thread_by_pk?: Maybe<TMessage_Thread>;
  /** update data of the table: "user_address" */
  update_user_address?: Maybe<TUser_Address_Mutation_Response>;
  /** update single row of the table: "user_address" */
  update_user_address_by_pk?: Maybe<TUser_Address>;
  /** update data of the table: "user_profile" */
  update_user_profile?: Maybe<TUser_Profile_Mutation_Response>;
  /** update single row of the table: "user_profile" */
  update_user_profile_by_pk?: Maybe<TUser_Profile>;
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
export type TMutation_RootDelete_User_FollowersArgs = {
  where: TUser_Followers_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_User_Followers_By_PkArgs = {
  followerId: Scalars['uuid'];
  followingId: Scalars['uuid'];
};


/** mutation root */
export type TMutation_RootInsertFileArgs = {
  object: TFiles_Insert_Input;
};


/** mutation root */
export type TMutation_RootInsertFilesArgs = {
  objects: Array<TFiles_Insert_Input>;
};


/** mutation root */
export type TMutation_RootInsert_ActivityArgs = {
  objects: Array<TActivity_Insert_Input>;
};


/** mutation root */
export type TMutation_RootInsert_Activity_OneArgs = {
  object: TActivity_Insert_Input;
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
export type TMutation_RootInsert_Idea_VotesArgs = {
  objects: Array<TIdea_Votes_Insert_Input>;
};


/** mutation root */
export type TMutation_RootInsert_Idea_Votes_OneArgs = {
  object: TIdea_Votes_Insert_Input;
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
};


/** mutation root */
export type TMutation_RootInsert_Interested_Ideas_OneArgs = {
  object: TInterested_Ideas_Insert_Input;
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
};


/** mutation root */
export type TMutation_RootInsert_Message_Thread_Users_OneArgs = {
  object: TMessage_Thread_Users_Insert_Input;
};


/** mutation root */
export type TMutation_RootInsert_ReportArgs = {
  objects: Array<TReport_Insert_Input>;
};


/** mutation root */
export type TMutation_RootInsert_Report_OneArgs = {
  object: TReport_Insert_Input;
};


/** mutation root */
export type TMutation_RootInsert_User_FollowersArgs = {
  objects: Array<TUser_Followers_Insert_Input>;
};


/** mutation root */
export type TMutation_RootInsert_User_Followers_OneArgs = {
  object: TUser_Followers_Insert_Input;
};


/** mutation root */
export type TMutation_RootUpdateUserArgs = {
  _set?: InputMaybe<TUsers_Set_Input>;
  pk_columns: TUsers_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdateUsersArgs = {
  _set?: InputMaybe<TUsers_Set_Input>;
  where: TUsers_Bool_Exp;
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
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<TBuckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<TBuckets>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<TFiles>;
  /** An array relationship */
  files: Array<TFiles>;
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
  /** fetch data from the table: "report" */
  report: Array<TReport>;
  /** fetch data from the table: "report" using primary key columns */
  report_by_pk?: Maybe<TReport>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<TUsers>;
  /** fetch aggregated fields from the table: "auth.users" */
  userAggregate: TUsers_Aggregate;
  /** fetch data from the table: "user_address" */
  user_address: Array<TUser_Address>;
  /** fetch data from the table: "user_address" using primary key columns */
  user_address_by_pk?: Maybe<TUser_Address>;
  /** fetch data from the table: "user_followers" */
  user_followers: Array<TUser_Followers>;
  /** fetch aggregated fields from the table: "user_followers" */
  user_followers_aggregate: TUser_Followers_Aggregate;
  /** fetch data from the table: "user_followers" using primary key columns */
  user_followers_by_pk?: Maybe<TUser_Followers>;
  /** fetch data from the table: "user_profile" */
  user_profile: Array<TUser_Profile>;
  /** fetch aggregated fields from the table: "user_profile" */
  user_profile_aggregate: TUser_Profile_Aggregate;
  /** fetch data from the table: "user_profile" using primary key columns */
  user_profile_by_pk?: Maybe<TUser_Profile>;
  /** fetch data from the table: "auth.users" */
  users: Array<TUsers>;
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


export type TQuery_RootReportArgs = {
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


export type TQuery_RootUserAggregateArgs = {
  distinct_on?: InputMaybe<Array<TUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUsers_Order_By>>;
  where?: InputMaybe<TUsers_Bool_Exp>;
};


export type TQuery_RootUser_AddressArgs = {
  distinct_on?: InputMaybe<Array<TUser_Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Address_Order_By>>;
  where?: InputMaybe<TUser_Address_Bool_Exp>;
};


export type TQuery_RootUser_Address_By_PkArgs = {
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

/**
 * The report table for all users, ideas, comments and replies
 *
 *
 * columns and relationships of "report"
 *
 */
export type TReport = {
  __typename?: 'report';
  id: Scalars['uuid'];
};

/** Boolean expression to filter rows from the table "report". All fields are combined with a logical 'AND'. */
export type TReport_Bool_Exp = {
  _and?: InputMaybe<Array<TReport_Bool_Exp>>;
  _not?: InputMaybe<TReport_Bool_Exp>;
  _or?: InputMaybe<Array<TReport_Bool_Exp>>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
};

/** input type for inserting data into table "report" */
export type TReport_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['String']>;
  recipientEmail?: InputMaybe<Scalars['String']>;
  recipientName?: InputMaybe<Scalars['String']>;
  reportedId?: InputMaybe<Scalars['uuid']>;
  reportedUserId?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "report" */
export type TReport_Mutation_Response = {
  __typename?: 'report_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TReport>;
};

/** Ordering options when selecting data from "report". */
export type TReport_Order_By = {
  id?: InputMaybe<TOrder_By>;
};

/** select columns of table "report" */
export type TReport_Select_Column =
  /** column name */
  | 'id';

export type TSubscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "activity" */
  activity: Array<TActivity>;
  /** fetch aggregated fields from the table: "activity" */
  activity_aggregate: TActivity_Aggregate;
  /** fetch data from the table: "activity" using primary key columns */
  activity_by_pk?: Maybe<TActivity>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<TBuckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<TBuckets>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<TFiles>;
  /** An array relationship */
  files: Array<TFiles>;
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
  /** fetch data from the table: "report" */
  report: Array<TReport>;
  /** fetch data from the table: "report" using primary key columns */
  report_by_pk?: Maybe<TReport>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<TUsers>;
  /** fetch aggregated fields from the table: "auth.users" */
  userAggregate: TUsers_Aggregate;
  /** fetch data from the table: "user_address" */
  user_address: Array<TUser_Address>;
  /** fetch data from the table: "user_address" using primary key columns */
  user_address_by_pk?: Maybe<TUser_Address>;
  /** fetch data from the table: "user_followers" */
  user_followers: Array<TUser_Followers>;
  /** fetch aggregated fields from the table: "user_followers" */
  user_followers_aggregate: TUser_Followers_Aggregate;
  /** fetch data from the table: "user_followers" using primary key columns */
  user_followers_by_pk?: Maybe<TUser_Followers>;
  /** fetch data from the table: "user_profile" */
  user_profile: Array<TUser_Profile>;
  /** fetch aggregated fields from the table: "user_profile" */
  user_profile_aggregate: TUser_Profile_Aggregate;
  /** fetch data from the table: "user_profile" using primary key columns */
  user_profile_by_pk?: Maybe<TUser_Profile>;
  /** fetch data from the table: "auth.users" */
  users: Array<TUsers>;
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


export type TSubscription_RootReportArgs = {
  distinct_on?: InputMaybe<Array<TReport_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TReport_Order_By>>;
  where?: InputMaybe<TReport_Bool_Exp>;
};


export type TSubscription_RootReport_By_PkArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootUserArgs = {
  id: Scalars['uuid'];
};


export type TSubscription_RootUserAggregateArgs = {
  distinct_on?: InputMaybe<Array<TUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUsers_Order_By>>;
  where?: InputMaybe<TUsers_Bool_Exp>;
};


export type TSubscription_RootUser_AddressArgs = {
  distinct_on?: InputMaybe<Array<TUser_Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Address_Order_By>>;
  where?: InputMaybe<TUser_Address_Bool_Exp>;
};


export type TSubscription_RootUser_Address_By_PkArgs = {
  userId: Scalars['uuid'];
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


export type TSubscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<TUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUsers_Order_By>>;
  where?: InputMaybe<TUsers_Bool_Exp>;
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

/**
 * The table to store the address for all users
 *
 *
 * columns and relationships of "user_address"
 *
 */
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

/** response of any mutation on the table "user_address" */
export type TUser_Address_Mutation_Response = {
  __typename?: 'user_address_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TUser_Address>;
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
  location?: InputMaybe<Scalars['String']>;
};

/**
 * The table to store all user followers
 *
 *
 * columns and relationships of "user_followers"
 *
 */
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

/** input type for inserting data into table "user_followers" */
export type TUser_Followers_Insert_Input = {
  followingId?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TUser_Followers_Max_Fields = {
  __typename?: 'user_followers_max_fields';
  followerId?: Maybe<Scalars['uuid']>;
  followingId?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type TUser_Followers_Min_Fields = {
  __typename?: 'user_followers_min_fields';
  followerId?: Maybe<Scalars['uuid']>;
  followingId?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_followers" */
export type TUser_Followers_Mutation_Response = {
  __typename?: 'user_followers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TUser_Followers>;
};

/** Ordering options when selecting data from "user_followers". */
export type TUser_Followers_Order_By = {
  followerId?: InputMaybe<TOrder_By>;
  followingId?: InputMaybe<TOrder_By>;
  status?: InputMaybe<TOrder_By>;
  user?: InputMaybe<TUsers_Order_By>;
};

/** select columns of table "user_followers" */
export type TUser_Followers_Select_Column =
  /** column name */
  | 'followerId'
  /** column name */
  | 'followingId'
  /** column name */
  | 'status';

/**
 * The table for a user's profile details
 *
 *
 * columns and relationships of "user_profile"
 *
 */
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


/**
 * The table for a user's profile details
 *
 *
 * columns and relationships of "user_profile"
 *
 */
export type TUser_ProfileIndustriesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/**
 * The table for a user's profile details
 *
 *
 * columns and relationships of "user_profile"
 *
 */
export type TUser_ProfileSkillsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "user_profile" */
export type TUser_Profile_Aggregate = {
  __typename?: 'user_profile_aggregate';
  aggregate?: Maybe<TUser_Profile_Aggregate_Fields>;
  nodes: Array<TUser_Profile>;
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

/** input type for updating data in table "user_profile" */
export type TUser_Profile_Set_Input = {
  availability?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
  businessDescription?: InputMaybe<Scalars['String']>;
  customPronouns?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
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
  website?: InputMaybe<Scalars['String']>;
};

/**
 * The table to store all users
 *
 *
 * columns and relationships of "auth.users"
 *
 */
export type TUsers = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  /** An object relationship */
  address?: Maybe<TUser_Address>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  defaultRole: Scalars['String'];
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  /** An array relationship */
  files: Array<TFiles>;
  id: Scalars['uuid'];
  /** An array relationship */
  ideas: Array<TIdeas>;
  /** An aggregate relationship */
  ideas_aggregate: TIdeas_Aggregate;
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
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
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An object relationship */
  profile?: Maybe<TUser_Profile>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  user_profiles: Array<TUser_Profile>;
  /** An aggregate relationship */
  user_profiles_aggregate: TUser_Profile_Aggregate;
};


/**
 * The table to store all users
 *
 *
 * columns and relationships of "auth.users"
 *
 */
export type TUsersFilesArgs = {
  distinct_on?: InputMaybe<Array<TFiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TFiles_Order_By>>;
  where?: InputMaybe<TFiles_Bool_Exp>;
};


/**
 * The table to store all users
 *
 *
 * columns and relationships of "auth.users"
 *
 */
export type TUsersIdeasArgs = {
  distinct_on?: InputMaybe<Array<TIdeas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdeas_Order_By>>;
  where?: InputMaybe<TIdeas_Bool_Exp>;
};


/**
 * The table to store all users
 *
 *
 * columns and relationships of "auth.users"
 *
 */
export type TUsersIdeas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TIdeas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TIdeas_Order_By>>;
  where?: InputMaybe<TIdeas_Bool_Exp>;
};


/**
 * The table to store all users
 *
 *
 * columns and relationships of "auth.users"
 *
 */
export type TUsersMessageThreadUsersArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Users_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
};


/**
 * The table to store all users
 *
 *
 * columns and relationships of "auth.users"
 *
 */
export type TUsersMessageThreadUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Users_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
};


/**
 * The table to store all users
 *
 *
 * columns and relationships of "auth.users"
 *
 */
export type TUsersMessageThreadsArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Bool_Exp>;
};


/**
 * The table to store all users
 *
 *
 * columns and relationships of "auth.users"
 *
 */
export type TUsersMessageThreads_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Thread_Order_By>>;
  where?: InputMaybe<TMessage_Thread_Bool_Exp>;
};


/**
 * The table to store all users
 *
 *
 * columns and relationships of "auth.users"
 *
 */
export type TUsersMessagesArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Order_By>>;
  where?: InputMaybe<TMessage_Bool_Exp>;
};


/**
 * The table to store all users
 *
 *
 * columns and relationships of "auth.users"
 *
 */
export type TUsersMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TMessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TMessage_Order_By>>;
  where?: InputMaybe<TMessage_Bool_Exp>;
};


/**
 * The table to store all users
 *
 *
 * columns and relationships of "auth.users"
 *
 */
export type TUsersUser_ProfilesArgs = {
  distinct_on?: InputMaybe<Array<TUser_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TUser_Profile_Order_By>>;
  where?: InputMaybe<TUser_Profile_Bool_Exp>;
};


/**
 * The table to store all users
 *
 *
 * columns and relationships of "auth.users"
 *
 */
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

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type TUsers_Bool_Exp = {
  _and?: InputMaybe<Array<TUsers_Bool_Exp>>;
  _not?: InputMaybe<TUsers_Bool_Exp>;
  _or?: InputMaybe<Array<TUsers_Bool_Exp>>;
  activeMfaType?: InputMaybe<TString_Comparison_Exp>;
  address?: InputMaybe<TUser_Address_Bool_Exp>;
  avatarUrl?: InputMaybe<TString_Comparison_Exp>;
  createdAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  defaultRole?: InputMaybe<TString_Comparison_Exp>;
  disabled?: InputMaybe<TBoolean_Comparison_Exp>;
  displayName?: InputMaybe<TString_Comparison_Exp>;
  email?: InputMaybe<TCitext_Comparison_Exp>;
  emailVerified?: InputMaybe<TBoolean_Comparison_Exp>;
  files?: InputMaybe<TFiles_Bool_Exp>;
  id?: InputMaybe<TUuid_Comparison_Exp>;
  ideas?: InputMaybe<TIdeas_Bool_Exp>;
  isAnonymous?: InputMaybe<TBoolean_Comparison_Exp>;
  lastSeen?: InputMaybe<TTimestamptz_Comparison_Exp>;
  locale?: InputMaybe<TString_Comparison_Exp>;
  messageThreadUsers?: InputMaybe<TMessage_Thread_Users_Bool_Exp>;
  messageThreads?: InputMaybe<TMessage_Thread_Bool_Exp>;
  messages?: InputMaybe<TMessage_Bool_Exp>;
  newEmail?: InputMaybe<TCitext_Comparison_Exp>;
  otpHash?: InputMaybe<TString_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<TString_Comparison_Exp>;
  passwordHash?: InputMaybe<TString_Comparison_Exp>;
  phoneNumber?: InputMaybe<TString_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<TBoolean_Comparison_Exp>;
  profile?: InputMaybe<TUser_Profile_Bool_Exp>;
  ticket?: InputMaybe<TString_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<TString_Comparison_Exp>;
  updatedAt?: InputMaybe<TTimestamptz_Comparison_Exp>;
  user_profiles?: InputMaybe<TUser_Profile_Bool_Exp>;
};

/** aggregate max on columns */
export type TUsers_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
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

/** aggregate min on columns */
export type TUsers_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
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

/** response of any mutation on the table "auth.users" */
export type TUsers_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TUsers>;
};

/** Ordering options when selecting data from "auth.users". */
export type TUsers_Order_By = {
  activeMfaType?: InputMaybe<TOrder_By>;
  address?: InputMaybe<TUser_Address_Order_By>;
  avatarUrl?: InputMaybe<TOrder_By>;
  createdAt?: InputMaybe<TOrder_By>;
  defaultRole?: InputMaybe<TOrder_By>;
  disabled?: InputMaybe<TOrder_By>;
  displayName?: InputMaybe<TOrder_By>;
  email?: InputMaybe<TOrder_By>;
  emailVerified?: InputMaybe<TOrder_By>;
  files_aggregate?: InputMaybe<TFiles_Aggregate_Order_By>;
  id?: InputMaybe<TOrder_By>;
  ideas_aggregate?: InputMaybe<TIdeas_Aggregate_Order_By>;
  isAnonymous?: InputMaybe<TOrder_By>;
  lastSeen?: InputMaybe<TOrder_By>;
  locale?: InputMaybe<TOrder_By>;
  messageThreadUsers_aggregate?: InputMaybe<TMessage_Thread_Users_Aggregate_Order_By>;
  messageThreads_aggregate?: InputMaybe<TMessage_Thread_Aggregate_Order_By>;
  messages_aggregate?: InputMaybe<TMessage_Aggregate_Order_By>;
  newEmail?: InputMaybe<TOrder_By>;
  otpHash?: InputMaybe<TOrder_By>;
  otpHashExpiresAt?: InputMaybe<TOrder_By>;
  otpMethodLastUsed?: InputMaybe<TOrder_By>;
  passwordHash?: InputMaybe<TOrder_By>;
  phoneNumber?: InputMaybe<TOrder_By>;
  phoneNumberVerified?: InputMaybe<TOrder_By>;
  profile?: InputMaybe<TUser_Profile_Order_By>;
  ticket?: InputMaybe<TOrder_By>;
  ticketExpiresAt?: InputMaybe<TOrder_By>;
  totpSecret?: InputMaybe<TOrder_By>;
  updatedAt?: InputMaybe<TOrder_By>;
  user_profiles_aggregate?: InputMaybe<TUser_Profile_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type TUsers_Pk_Columns_Input = {
  id: Scalars['uuid'];
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

/** input type for updating data in table "auth.users" */
export type TUsers_Set_Input = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
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

export type TUserActivityQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type TUserActivityQuery = { activity: Array<{ __typename?: 'activity', ideaId: any, event: string, description: string, url: string, type: string, createdAt: any }> };

export type TPostCommentMutationVariables = Exact<{
  ideaComment: TIdea_Comments_Insert_Input;
  ideaId: Scalars['uuid'];
}>;


export type TPostCommentMutation = { addIdeaComment?: { __typename?: 'idea_comments', id: any, ideaId: any, user?: { __typename?: 'users', displayName: string, avatarUrl?: string | null | undefined } | null | undefined } | null | undefined, updateIdeaTotalComments?: { __typename?: 'ideas', id: any } | null | undefined };

export type TPostReplyMutationVariables = Exact<{
  ideaReply: TIdea_Comment_Replies_Insert_Input;
  commentId: Scalars['uuid'];
}>;


export type TPostReplyMutation = { addIdeaReply?: { __typename?: 'idea_comment_replies', commentId: any, id: any, value: string } | null | undefined, update_idea_comments_by_pk?: { __typename?: 'idea_comments', id: any } | null | undefined };

export type TCommentFieldsFragment = { __typename?: 'idea_comments', id: any, updatedAt: any, value: string, ideaId: any, totalReplies: number, user?: { __typename?: 'users', displayName: string, id: any, avatarUrl?: string | null | undefined, createdAt: any, address?: { __typename?: 'user_address', location?: string | null | undefined, country?: string | null | undefined } | null | undefined } | null | undefined, firstReplies: Array<{ __typename?: 'idea_comment_replies', id: any, commentId: any, value: string, updatedAt: any, user?: { __typename?: 'users', displayName: string, id: any, avatarUrl?: string | null | undefined, createdAt: any, address?: { __typename?: 'user_address', location?: string | null | undefined, country?: string | null | undefined } | null | undefined } | null | undefined }> };

export type TCommentsForIdeaQueryVariables = Exact<{
  ideaId: Scalars['uuid'];
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type TCommentsForIdeaQuery = { comments: Array<{ __typename?: 'idea_comments', id: any, updatedAt: any, value: string, ideaId: any, totalReplies: number, user?: { __typename?: 'users', displayName: string, id: any, avatarUrl?: string | null | undefined, createdAt: any, address?: { __typename?: 'user_address', location?: string | null | undefined, country?: string | null | undefined } | null | undefined } | null | undefined, firstReplies: Array<{ __typename?: 'idea_comment_replies', id: any, commentId: any, value: string, updatedAt: any, user?: { __typename?: 'users', displayName: string, id: any, avatarUrl?: string | null | undefined, createdAt: any, address?: { __typename?: 'user_address', location?: string | null | undefined, country?: string | null | undefined } | null | undefined } | null | undefined }> }>, totalComments: { __typename?: 'idea_comments_aggregate', aggregate?: { __typename?: 'idea_comments_aggregate_fields', count: number } | null | undefined } };

export type TRepliesForCommentQueryVariables = Exact<{
  commentId: Scalars['uuid'];
}>;


export type TRepliesForCommentQuery = { replies: Array<{ __typename?: 'idea_comment_replies', id: any, commentId: any, value: string, updatedAt: any, user?: { __typename?: 'users', displayName: string, id: any, avatarUrl?: string | null | undefined, createdAt: any, address?: { __typename?: 'user_address', location?: string | null | undefined, country?: string | null | undefined } | null | undefined } | null | undefined }> };

export type TFollowUserMutationVariables = Exact<{
  followingId: Scalars['uuid'];
}>;


export type TFollowUserMutation = { insert_user_followers_one?: { __typename?: 'user_followers', followingId: any, followerId: any } | null | undefined };

export type TUserFieldsFragment = { __typename?: 'users', displayName: string, id: any, avatarUrl?: string | null | undefined, createdAt: any, address?: { __typename?: 'user_address', location?: string | null | undefined, country?: string | null | undefined } | null | undefined };

export type TUserFieldsWithEmailFragment = { __typename?: 'users', email?: any | null | undefined, displayName: string, id: any, avatarUrl?: string | null | undefined, createdAt: any, address?: { __typename?: 'user_address', location?: string | null | undefined, country?: string | null | undefined } | null | undefined };

export type TUserAddressFragment = { __typename?: 'user_address', location?: string | null | undefined, country?: string | null | undefined };

export type TUserSearchFragment = { __typename?: 'user_profile', skills?: any | null | undefined, startups?: string | null | undefined, availability?: string | null | undefined, specialistIndustry?: string | null | undefined, status?: string | null | undefined, objective?: string | null | undefined, pronouns?: string | null | undefined, customPronouns?: string | null | undefined, user?: { __typename?: 'users', displayName: string, id: any, avatarUrl?: string | null | undefined, createdAt: any, address?: { __typename?: 'user_address', location?: string | null | undefined, country?: string | null | undefined } | null | undefined } | null | undefined };

export type TMessageUserFragment = { __typename?: 'users', id: any, displayName: string, avatarUrl?: string | null | undefined, profile?: { __typename?: 'user_profile', pronouns?: string | null | undefined, customPronouns?: string | null | undefined } | null | undefined };

export type TCreateIdeaMutationVariables = Exact<{
  idea: TIdeas_Insert_Input;
}>;


export type TCreateIdeaMutation = { idea?: { __typename?: 'ideas', id: any, name: string } | null | undefined };

export type TUpdateIdeaMutationVariables = Exact<{
  idea: TIdeas_Set_Input;
  id: Scalars['uuid'];
}>;


export type TUpdateIdeaMutation = { update_ideas_by_pk?: { __typename?: 'ideas', id: any, name: string, summary?: string | null | undefined, description?: string | null | undefined, field: string, competitors?: string | null | undefined, team?: string | null | undefined, additionalInformation?: string | null | undefined, isPublished: boolean, userId: any, status?: string | null | undefined } | null | undefined };

export type TDeleteIdeaMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type TDeleteIdeaMutation = { delete_ideas_by_pk?: { __typename?: 'ideas', id: any } | null | undefined };

export type TCreateInterestedIdeaMutationVariables = Exact<{
  ideaId: Scalars['uuid'];
  targetUserId: Scalars['uuid'];
}>;


export type TCreateInterestedIdeaMutation = { addInterestedIdea?: { __typename?: 'interested_ideas', ideaId: any } | null | undefined };

export type TIdeasQueryVariables = Exact<{
  where?: InputMaybe<TIdea_Preview_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TIdea_Preview_Order_By> | TIdea_Preview_Order_By>;
  userId: Scalars['uuid'];
}>;


export type TIdeasQuery = { idea_preview_aggregate: { __typename?: 'idea_preview_aggregate', aggregate?: { __typename?: 'idea_preview_aggregate_fields', count: number } | null | undefined }, idea_preview: Array<{ __typename?: 'idea_preview', id?: any | null | undefined, name?: string | null | undefined, field?: string | null | undefined, status?: string | null | undefined, createdAt?: any | null | undefined, isNew?: boolean | null | undefined, isPublished?: boolean | null | undefined, summary?: string | null | undefined, userId?: any | null | undefined, user?: { __typename?: 'users', email?: any | null | undefined, displayName: string, id: any, avatarUrl?: string | null | undefined, createdAt: any, address?: { __typename?: 'user_address', location?: string | null | undefined, country?: string | null | undefined } | null | undefined } | null | undefined, votes_aggregate: { __typename?: 'idea_votes_aggregate', aggregate?: { __typename?: 'idea_votes_aggregate_fields', count: number } | null | undefined }, comments_aggregate: { __typename?: 'idea_comments_aggregate', aggregate?: { __typename?: 'idea_comments_aggregate_fields', count: number } | null | undefined }, interested_aggregate: { __typename?: 'interested_ideas_aggregate', aggregate?: { __typename?: 'interested_ideas_aggregate_fields', count: number } | null | undefined }, votes: Array<{ __typename?: 'idea_votes', id: any }> }> };

export type TIdeaPreviewFieldsFragment = { __typename?: 'idea_preview', id?: any | null | undefined, name?: string | null | undefined, field?: string | null | undefined, status?: string | null | undefined, createdAt?: any | null | undefined, isNew?: boolean | null | undefined, isPublished?: boolean | null | undefined, summary?: string | null | undefined, userId?: any | null | undefined, user?: { __typename?: 'users', email?: any | null | undefined, displayName: string, id: any, avatarUrl?: string | null | undefined, createdAt: any, address?: { __typename?: 'user_address', location?: string | null | undefined, country?: string | null | undefined } | null | undefined } | null | undefined, votes_aggregate: { __typename?: 'idea_votes_aggregate', aggregate?: { __typename?: 'idea_votes_aggregate_fields', count: number } | null | undefined }, comments_aggregate: { __typename?: 'idea_comments_aggregate', aggregate?: { __typename?: 'idea_comments_aggregate_fields', count: number } | null | undefined }, interested_aggregate: { __typename?: 'interested_ideas_aggregate', aggregate?: { __typename?: 'interested_ideas_aggregate_fields', count: number } | null | undefined }, votes: Array<{ __typename?: 'idea_votes', id: any }> };

export type TUserIdeasQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type TUserIdeasQuery = { user_ideas: Array<{ __typename?: 'ideas', id: any, name: string, createdAt: any, isPublished: boolean, totalInterested: number, totalVotes: number, totalComments: number }> };

export type TIdeaFieldsFragment = { __typename?: 'ideas', id: any, summary?: string | null | undefined, name: string, description?: string | null | undefined, field: string, competitors?: string | null | undefined, team?: string | null | undefined, additionalInformation?: string | null | undefined, isPublished: boolean, userId: any, status?: string | null | undefined, createdAt: any, totalInterested: number, totalComments: number, totalVotes: number };

export type TIdeaQueryVariables = Exact<{
  id: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type TIdeaQuery = { idea?: { __typename?: 'ideas', id: any, summary?: string | null | undefined, name: string, description?: string | null | undefined, field: string, competitors?: string | null | undefined, team?: string | null | undefined, additionalInformation?: string | null | undefined, isPublished: boolean, userId: any, status?: string | null | undefined, createdAt: any, totalInterested: number, totalComments: number, totalVotes: number, user?: { __typename?: 'users', email?: any | null | undefined, displayName: string, id: any, avatarUrl?: string | null | undefined, createdAt: any, address?: { __typename?: 'user_address', location?: string | null | undefined, country?: string | null | undefined } | null | undefined } | null | undefined, votes_aggregate: { __typename?: 'idea_votes_aggregate', aggregate?: { __typename?: 'idea_votes_aggregate_fields', count: number } | null | undefined }, votes: Array<{ __typename?: 'idea_votes', id: any }>, interested_aggregate: { __typename?: 'interested_ideas_aggregate', aggregate?: { __typename?: 'interested_ideas_aggregate_fields', count: number } | null | undefined } } | null | undefined, hasInterest?: { __typename?: 'interested_ideas', id: any, ideaId: any, userId: any } | null | undefined };

export type TInterestedIdeaFieldsFragment = { __typename?: 'interested_ideas', id: any, ideaId: any, userId: any };

export type TIdeaInterestedUsersQueryVariables = Exact<{
  ideaId: Scalars['uuid'];
}>;


export type TIdeaInterestedUsersQuery = { interested_users: Array<{ __typename?: 'interested_ideas', id: any, createdAt: any, user?: { __typename?: 'users', email?: any | null | undefined, displayName: string, id: any, avatarUrl?: string | null | undefined, createdAt: any, address?: { __typename?: 'user_address', location?: string | null | undefined, country?: string | null | undefined } | null | undefined } | null | undefined }> };

export type TInsertIdeaUpvoteMutationVariables = Exact<{
  idea_vote: TIdea_Votes_Insert_Input;
}>;


export type TInsertIdeaUpvoteMutation = { insert_idea_votes_one?: { __typename?: 'idea_votes', id: any, ideaId: any } | null | undefined };

export type TDeleteIdeaUpvoteMutationVariables = Exact<{
  ideaId: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type TDeleteIdeaUpvoteMutation = { delete_idea_votes?: { __typename?: 'idea_votes_mutation_response', affected_rows: number } | null | undefined };

export type TNewMessageThreadMutationVariables = Exact<{
  targetUserId: Scalars['uuid'];
  currentUserId: Scalars['uuid'];
}>;


export type TNewMessageThreadMutation = { insert_message_thread?: { __typename?: 'message_thread_mutation_response', returning: Array<{ __typename?: 'message_thread', id: any }> } | null | undefined };

export type TNewMessageMutationVariables = Exact<{
  messageThreadId: Scalars['uuid'];
  content: Scalars['String'];
}>;


export type TNewMessageMutation = { insert_message_one?: { __typename?: 'message', id: any, threadId: any, content: string, createdAt: any, sender: { __typename?: 'users', id: any, displayName: string, avatarUrl?: string | null | undefined, profile?: { __typename?: 'user_profile', pronouns?: string | null | undefined, customPronouns?: string | null | undefined } | null | undefined } } | null | undefined };

export type TUserMessageThreadsQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type TUserMessageThreadsQuery = { threads: Array<{ __typename?: 'message_thread', id: any, name?: string | null | undefined, ownerId?: any | null | undefined, targetUser: Array<{ __typename?: 'message_thread_users', user: { __typename?: 'users', id: any, displayName: string, avatarUrl?: string | null | undefined, profile?: { __typename?: 'user_profile', pronouns?: string | null | undefined, customPronouns?: string | null | undefined } | null | undefined } }>, lastMessage: Array<{ __typename?: 'message', content: string, createdAt: any, sender: { __typename?: 'users', id: any, displayName: string, avatarUrl?: string | null | undefined, profile?: { __typename?: 'user_profile', pronouns?: string | null | undefined, customPronouns?: string | null | undefined } | null | undefined } }> }>, total: { __typename?: 'message_thread_aggregate', aggregate?: { __typename?: 'message_thread_aggregate_fields', count: number } | null | undefined } };

export type TMessageListSubscriptionVariables = Exact<{
  messageThreadId: Scalars['uuid'];
}>;


export type TMessageListSubscription = { message: Array<{ __typename?: 'message', id: any, threadId: any, content: string, createdAt: any, sender: { __typename?: 'users', id: any, displayName: string, avatarUrl?: string | null | undefined, profile?: { __typename?: 'user_profile', pronouns?: string | null | undefined, customPronouns?: string | null | undefined } | null | undefined } }> };

export type TCreateReportMutationVariables = Exact<{
  report: TReport_Insert_Input;
}>;


export type TCreateReportMutation = { insert_report_one?: { __typename?: 'report', id: any } | null | undefined };

export type TUserSocialsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type TUserSocialsQuery = { profile?: { __typename?: 'user_profile', linkedin?: string | null | undefined, twitter?: string | null | undefined, website?: string | null | undefined } | null | undefined };

export type TUserProfileDetailsQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type TUserProfileDetailsQuery = { user?: { __typename?: 'users', displayName: string, avatarUrl?: string | null | undefined, createdAt: any, lastSeen?: any | null | undefined, address?: { __typename?: 'user_address', location?: string | null | undefined, country?: string | null | undefined } | null | undefined, profile?: { __typename?: 'user_profile', availability?: string | null | undefined, background?: string | null | undefined, status?: string | null | undefined, startups?: string | null | undefined, businessDescription?: string | null | undefined, specialistIndustry?: string | null | undefined, statement?: string | null | undefined, skills?: any | null | undefined, objective?: string | null | undefined, pronouns?: string | null | undefined, customPronouns?: string | null | undefined } | null | undefined } | null | undefined };

export type TUserQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type TUserQuery = { user?: { __typename?: 'users', createdAt: any, lastSeen?: any | null | undefined, email?: any | null | undefined, displayName: string, id: any, avatarUrl?: string | null | undefined, profile?: { __typename?: 'user_profile', id: any, pronouns?: string | null | undefined, customPronouns?: string | null | undefined, isComplete: boolean } | null | undefined, address?: { __typename?: 'user_address', location?: string | null | undefined, country?: string | null | undefined } | null | undefined } | null | undefined };

export type TUsersQueryVariables = Exact<{
  where?: InputMaybe<TUser_Profile_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TUser_Profile_Order_By> | TUser_Profile_Order_By>;
}>;


export type TUsersQuery = { user_profile_aggregate: { __typename?: 'user_profile_aggregate', aggregate?: { __typename?: 'user_profile_aggregate_fields', count: number } | null | undefined }, user_profile: Array<{ __typename?: 'user_profile', id: any, objective?: string | null | undefined, skills?: any | null | undefined, startups?: string | null | undefined, availability?: string | null | undefined, specialistIndustry?: string | null | undefined, status?: string | null | undefined, pronouns?: string | null | undefined, customPronouns?: string | null | undefined, user?: { __typename?: 'users', displayName: string, id: any, avatarUrl?: string | null | undefined, createdAt: any, address?: { __typename?: 'user_address', location?: string | null | undefined, country?: string | null | undefined } | null | undefined } | null | undefined }> };

export type TUpdateUserProfileMutationVariables = Exact<{
  id: Scalars['uuid'];
  user_profile: TUser_Profile_Set_Input;
}>;


export type TUpdateUserProfileMutation = { update_user_profile_by_pk?: { __typename?: 'user_profile', id: any, availability?: string | null | undefined, objective?: string | null | undefined, background?: string | null | undefined, linkedin?: string | null | undefined, twitter?: string | null | undefined, instagram?: string | null | undefined, facebook?: string | null | undefined, resume?: string | null | undefined, statement?: string | null | undefined, status?: string | null | undefined, businessDescription?: string | null | undefined, startups?: string | null | undefined, website?: string | null | undefined, skills?: any | null | undefined, isComplete: boolean, specialistIndustry?: string | null | undefined, updatedAt: any } | null | undefined };

export type TUserExperienceQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type TUserExperienceQuery = { profile?: { __typename?: 'user_profile', id: any, userId: any, objective?: string | null | undefined, background?: string | null | undefined, statement?: string | null | undefined, startups?: string | null | undefined, status?: string | null | undefined, availability?: string | null | undefined, businessDescription?: string | null | undefined, specialistIndustry?: string | null | undefined, skills?: any | null | undefined, resume?: string | null | undefined, linkedin?: string | null | undefined, twitter?: string | null | undefined, instagram?: string | null | undefined, facebook?: string | null | undefined, website?: string | null | undefined, updatedAt: any, isComplete: boolean, pronouns?: string | null | undefined, customPronouns?: string | null | undefined } | null | undefined };

export type TUpdateUserExperienceMutationVariables = Exact<{
  id: Scalars['uuid'];
  userExperience: TUser_Profile_Set_Input;
}>;


export type TUpdateUserExperienceMutation = { update_user_profile_by_pk?: { __typename?: 'user_profile', id: any, userId: any, background?: string | null | undefined, statement?: string | null | undefined, startups?: string | null | undefined, status?: string | null | undefined, skills?: any | null | undefined, availability?: string | null | undefined, resume?: string | null | undefined, businessDescription?: string | null | undefined, objective?: string | null | undefined } | null | undefined };

export type TUpdateResumeMutationVariables = Exact<{
  id: Scalars['uuid'];
  resume: TUser_Profile_Set_Input;
}>;


export type TUpdateResumeMutation = { update_user_profile_by_pk?: { __typename?: 'user_profile', id: any, resume?: string | null | undefined } | null | undefined };

export type TUpdateUserPersonalDetailsMutationVariables = Exact<{
  id: Scalars['uuid'];
  profileId: Scalars['uuid'];
  userPersonalDetails: TUsers_Set_Input;
  userAddress: TUser_Address_Set_Input;
  userProfile: TUser_Profile_Set_Input;
}>;


export type TUpdateUserPersonalDetailsMutation = { updateUser?: { __typename?: 'users', displayName: string } | null | undefined, updateUserProfile?: { __typename?: 'user_profile', id: any, pronouns?: string | null | undefined, customPronouns?: string | null | undefined } | null | undefined, updateUserAddress?: { __typename?: 'user_address', country?: string | null | undefined, location?: string | null | undefined } | null | undefined };

export type TUpdateUserAvatarMutationVariables = Exact<{
  id: Scalars['uuid'];
  userDetails: TUsers_Set_Input;
}>;


export type TUpdateUserAvatarMutation = { user?: { __typename?: 'users', avatarUrl?: string | null | undefined } | null | undefined };

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
    fragment CommentFields on idea_comments {
  id
  updatedAt
  value
  ideaId
  totalReplies
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
export const MessageUserFragmentDoc = gql`
    fragment MessageUser on users {
  id
  displayName
  avatarUrl
  profile {
    pronouns
    customPronouns
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
  comments: idea_comments(
    where: {ideaId: {_eq: $ideaId}}
    order_by: {updatedAt: desc}
    offset: $offset
    limit: 8
  ) {
    ...CommentFields
  }
  totalComments: idea_comments_aggregate(where: {ideaId: {_eq: $ideaId}}) {
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
  user_ideas: ideas(where: {userId: {_eq: $userId}}, order_by: {createdAt: desc}) {
    id
    name
    createdAt
    isPublished
    totalInterested
    totalVotes
    totalComments
  }
}
    `;

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
  }
  hasInterest: interested_ideas_by_pk(ideaId: $id, userId: $userId) {
    ...InterestedIdeaFields
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
  activity_insert_input: TActivity_Insert_Input;
  activity_max_fields: ResolverTypeWrapper<TActivity_Max_Fields>;
  activity_min_fields: ResolverTypeWrapper<TActivity_Min_Fields>;
  activity_mutation_response: ResolverTypeWrapper<TActivity_Mutation_Response>;
  activity_order_by: TActivity_Order_By;
  activity_select_column: TActivity_Select_Column;
  buckets: ResolverTypeWrapper<TBuckets>;
  buckets_bool_exp: TBuckets_Bool_Exp;
  buckets_order_by: TBuckets_Order_By;
  buckets_select_column: TBuckets_Select_Column;
  citext: ResolverTypeWrapper<Scalars['citext']>;
  citext_comparison_exp: TCitext_Comparison_Exp;
  files: ResolverTypeWrapper<TFiles>;
  files_aggregate_order_by: TFiles_Aggregate_Order_By;
  files_avg_order_by: TFiles_Avg_Order_By;
  files_bool_exp: TFiles_Bool_Exp;
  files_insert_input: TFiles_Insert_Input;
  files_max_order_by: TFiles_Max_Order_By;
  files_min_order_by: TFiles_Min_Order_By;
  files_mutation_response: ResolverTypeWrapper<TFiles_Mutation_Response>;
  files_order_by: TFiles_Order_By;
  files_select_column: TFiles_Select_Column;
  files_stddev_order_by: TFiles_Stddev_Order_By;
  files_stddev_pop_order_by: TFiles_Stddev_Pop_Order_By;
  files_stddev_samp_order_by: TFiles_Stddev_Samp_Order_By;
  files_sum_order_by: TFiles_Sum_Order_By;
  files_var_pop_order_by: TFiles_Var_Pop_Order_By;
  files_var_samp_order_by: TFiles_Var_Samp_Order_By;
  files_variance_order_by: TFiles_Variance_Order_By;
  idea_comment_replies: ResolverTypeWrapper<TIdea_Comment_Replies>;
  idea_comment_replies_aggregate: ResolverTypeWrapper<TIdea_Comment_Replies_Aggregate>;
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
  idea_comment_replies_update_column: TIdea_Comment_Replies_Update_Column;
  idea_comments: ResolverTypeWrapper<TIdea_Comments>;
  idea_comments_aggregate: ResolverTypeWrapper<TIdea_Comments_Aggregate>;
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
  idea_comments_set_input: TIdea_Comments_Set_Input;
  idea_comments_stddev_fields: ResolverTypeWrapper<TIdea_Comments_Stddev_Fields>;
  idea_comments_stddev_order_by: TIdea_Comments_Stddev_Order_By;
  idea_comments_stddev_pop_fields: ResolverTypeWrapper<TIdea_Comments_Stddev_Pop_Fields>;
  idea_comments_stddev_pop_order_by: TIdea_Comments_Stddev_Pop_Order_By;
  idea_comments_stddev_samp_fields: ResolverTypeWrapper<TIdea_Comments_Stddev_Samp_Fields>;
  idea_comments_stddev_samp_order_by: TIdea_Comments_Stddev_Samp_Order_By;
  idea_comments_sum_fields: ResolverTypeWrapper<TIdea_Comments_Sum_Fields>;
  idea_comments_sum_order_by: TIdea_Comments_Sum_Order_By;
  idea_comments_update_column: TIdea_Comments_Update_Column;
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
  idea_preview_max_fields: ResolverTypeWrapper<TIdea_Preview_Max_Fields>;
  idea_preview_min_fields: ResolverTypeWrapper<TIdea_Preview_Min_Fields>;
  idea_preview_order_by: TIdea_Preview_Order_By;
  idea_preview_select_column: TIdea_Preview_Select_Column;
  idea_votes: ResolverTypeWrapper<TIdea_Votes>;
  idea_votes_aggregate: ResolverTypeWrapper<TIdea_Votes_Aggregate>;
  idea_votes_aggregate_fields: ResolverTypeWrapper<TIdea_Votes_Aggregate_Fields>;
  idea_votes_aggregate_order_by: TIdea_Votes_Aggregate_Order_By;
  idea_votes_arr_rel_insert_input: TIdea_Votes_Arr_Rel_Insert_Input;
  idea_votes_bool_exp: TIdea_Votes_Bool_Exp;
  idea_votes_insert_input: TIdea_Votes_Insert_Input;
  idea_votes_max_fields: ResolverTypeWrapper<TIdea_Votes_Max_Fields>;
  idea_votes_max_order_by: TIdea_Votes_Max_Order_By;
  idea_votes_min_fields: ResolverTypeWrapper<TIdea_Votes_Min_Fields>;
  idea_votes_min_order_by: TIdea_Votes_Min_Order_By;
  idea_votes_mutation_response: ResolverTypeWrapper<TIdea_Votes_Mutation_Response>;
  idea_votes_order_by: TIdea_Votes_Order_By;
  idea_votes_select_column: TIdea_Votes_Select_Column;
  ideas: ResolverTypeWrapper<TIdeas>;
  ideas_aggregate: ResolverTypeWrapper<TIdeas_Aggregate>;
  ideas_aggregate_fields: ResolverTypeWrapper<TIdeas_Aggregate_Fields>;
  ideas_aggregate_order_by: TIdeas_Aggregate_Order_By;
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
  ideas_set_input: TIdeas_Set_Input;
  ideas_stddev_fields: ResolverTypeWrapper<TIdeas_Stddev_Fields>;
  ideas_stddev_order_by: TIdeas_Stddev_Order_By;
  ideas_stddev_pop_fields: ResolverTypeWrapper<TIdeas_Stddev_Pop_Fields>;
  ideas_stddev_pop_order_by: TIdeas_Stddev_Pop_Order_By;
  ideas_stddev_samp_fields: ResolverTypeWrapper<TIdeas_Stddev_Samp_Fields>;
  ideas_stddev_samp_order_by: TIdeas_Stddev_Samp_Order_By;
  ideas_sum_fields: ResolverTypeWrapper<TIdeas_Sum_Fields>;
  ideas_sum_order_by: TIdeas_Sum_Order_By;
  ideas_update_column: TIdeas_Update_Column;
  ideas_var_pop_fields: ResolverTypeWrapper<TIdeas_Var_Pop_Fields>;
  ideas_var_pop_order_by: TIdeas_Var_Pop_Order_By;
  ideas_var_samp_fields: ResolverTypeWrapper<TIdeas_Var_Samp_Fields>;
  ideas_var_samp_order_by: TIdeas_Var_Samp_Order_By;
  ideas_variance_fields: ResolverTypeWrapper<TIdeas_Variance_Fields>;
  ideas_variance_order_by: TIdeas_Variance_Order_By;
  interested_ideas: ResolverTypeWrapper<TInterested_Ideas>;
  interested_ideas_aggregate: ResolverTypeWrapper<TInterested_Ideas_Aggregate>;
  interested_ideas_aggregate_fields: ResolverTypeWrapper<TInterested_Ideas_Aggregate_Fields>;
  interested_ideas_aggregate_order_by: TInterested_Ideas_Aggregate_Order_By;
  interested_ideas_arr_rel_insert_input: TInterested_Ideas_Arr_Rel_Insert_Input;
  interested_ideas_bool_exp: TInterested_Ideas_Bool_Exp;
  interested_ideas_insert_input: TInterested_Ideas_Insert_Input;
  interested_ideas_max_fields: ResolverTypeWrapper<TInterested_Ideas_Max_Fields>;
  interested_ideas_max_order_by: TInterested_Ideas_Max_Order_By;
  interested_ideas_min_fields: ResolverTypeWrapper<TInterested_Ideas_Min_Fields>;
  interested_ideas_min_order_by: TInterested_Ideas_Min_Order_By;
  interested_ideas_mutation_response: ResolverTypeWrapper<TInterested_Ideas_Mutation_Response>;
  interested_ideas_order_by: TInterested_Ideas_Order_By;
  interested_ideas_select_column: TInterested_Ideas_Select_Column;
  jsonb: ResolverTypeWrapper<Scalars['jsonb']>;
  jsonb_comparison_exp: TJsonb_Comparison_Exp;
  message: ResolverTypeWrapper<TMessage>;
  message_aggregate: ResolverTypeWrapper<TMessage_Aggregate>;
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
  message_thread: ResolverTypeWrapper<TMessage_Thread>;
  message_thread_aggregate: ResolverTypeWrapper<TMessage_Thread_Aggregate>;
  message_thread_aggregate_fields: ResolverTypeWrapper<TMessage_Thread_Aggregate_Fields>;
  message_thread_aggregate_order_by: TMessage_Thread_Aggregate_Order_By;
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
  message_thread_update_column: TMessage_Thread_Update_Column;
  message_thread_users: ResolverTypeWrapper<TMessage_Thread_Users>;
  message_thread_users_aggregate: ResolverTypeWrapper<TMessage_Thread_Users_Aggregate>;
  message_thread_users_aggregate_fields: ResolverTypeWrapper<TMessage_Thread_Users_Aggregate_Fields>;
  message_thread_users_aggregate_order_by: TMessage_Thread_Users_Aggregate_Order_By;
  message_thread_users_arr_rel_insert_input: TMessage_Thread_Users_Arr_Rel_Insert_Input;
  message_thread_users_bool_exp: TMessage_Thread_Users_Bool_Exp;
  message_thread_users_insert_input: TMessage_Thread_Users_Insert_Input;
  message_thread_users_max_fields: ResolverTypeWrapper<TMessage_Thread_Users_Max_Fields>;
  message_thread_users_max_order_by: TMessage_Thread_Users_Max_Order_By;
  message_thread_users_min_fields: ResolverTypeWrapper<TMessage_Thread_Users_Min_Fields>;
  message_thread_users_min_order_by: TMessage_Thread_Users_Min_Order_By;
  message_thread_users_mutation_response: ResolverTypeWrapper<TMessage_Thread_Users_Mutation_Response>;
  message_thread_users_order_by: TMessage_Thread_Users_Order_By;
  message_thread_users_select_column: TMessage_Thread_Users_Select_Column;
  message_update_column: TMessage_Update_Column;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: TOrder_By;
  query_root: ResolverTypeWrapper<{}>;
  report: ResolverTypeWrapper<TReport>;
  report_bool_exp: TReport_Bool_Exp;
  report_insert_input: TReport_Insert_Input;
  report_mutation_response: ResolverTypeWrapper<TReport_Mutation_Response>;
  report_order_by: TReport_Order_By;
  report_select_column: TReport_Select_Column;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  timestamptz_comparison_exp: TTimestamptz_Comparison_Exp;
  user_address: ResolverTypeWrapper<TUser_Address>;
  user_address_bool_exp: TUser_Address_Bool_Exp;
  user_address_mutation_response: ResolverTypeWrapper<TUser_Address_Mutation_Response>;
  user_address_order_by: TUser_Address_Order_By;
  user_address_pk_columns_input: TUser_Address_Pk_Columns_Input;
  user_address_select_column: TUser_Address_Select_Column;
  user_address_set_input: TUser_Address_Set_Input;
  user_followers: ResolverTypeWrapper<TUser_Followers>;
  user_followers_aggregate: ResolverTypeWrapper<TUser_Followers_Aggregate>;
  user_followers_aggregate_fields: ResolverTypeWrapper<TUser_Followers_Aggregate_Fields>;
  user_followers_bool_exp: TUser_Followers_Bool_Exp;
  user_followers_insert_input: TUser_Followers_Insert_Input;
  user_followers_max_fields: ResolverTypeWrapper<TUser_Followers_Max_Fields>;
  user_followers_min_fields: ResolverTypeWrapper<TUser_Followers_Min_Fields>;
  user_followers_mutation_response: ResolverTypeWrapper<TUser_Followers_Mutation_Response>;
  user_followers_order_by: TUser_Followers_Order_By;
  user_followers_select_column: TUser_Followers_Select_Column;
  user_profile: ResolverTypeWrapper<TUser_Profile>;
  user_profile_aggregate: ResolverTypeWrapper<TUser_Profile_Aggregate>;
  user_profile_aggregate_fields: ResolverTypeWrapper<TUser_Profile_Aggregate_Fields>;
  user_profile_aggregate_order_by: TUser_Profile_Aggregate_Order_By;
  user_profile_append_input: TUser_Profile_Append_Input;
  user_profile_bool_exp: TUser_Profile_Bool_Exp;
  user_profile_delete_at_path_input: TUser_Profile_Delete_At_Path_Input;
  user_profile_delete_elem_input: TUser_Profile_Delete_Elem_Input;
  user_profile_delete_key_input: TUser_Profile_Delete_Key_Input;
  user_profile_max_fields: ResolverTypeWrapper<TUser_Profile_Max_Fields>;
  user_profile_max_order_by: TUser_Profile_Max_Order_By;
  user_profile_min_fields: ResolverTypeWrapper<TUser_Profile_Min_Fields>;
  user_profile_min_order_by: TUser_Profile_Min_Order_By;
  user_profile_mutation_response: ResolverTypeWrapper<TUser_Profile_Mutation_Response>;
  user_profile_order_by: TUser_Profile_Order_By;
  user_profile_pk_columns_input: TUser_Profile_Pk_Columns_Input;
  user_profile_prepend_input: TUser_Profile_Prepend_Input;
  user_profile_select_column: TUser_Profile_Select_Column;
  user_profile_set_input: TUser_Profile_Set_Input;
  users: ResolverTypeWrapper<TUsers>;
  users_aggregate: ResolverTypeWrapper<TUsers_Aggregate>;
  users_aggregate_fields: ResolverTypeWrapper<TUsers_Aggregate_Fields>;
  users_bool_exp: TUsers_Bool_Exp;
  users_max_fields: ResolverTypeWrapper<TUsers_Max_Fields>;
  users_min_fields: ResolverTypeWrapper<TUsers_Min_Fields>;
  users_mutation_response: ResolverTypeWrapper<TUsers_Mutation_Response>;
  users_order_by: TUsers_Order_By;
  users_pk_columns_input: TUsers_Pk_Columns_Input;
  users_select_column: TUsers_Select_Column;
  users_set_input: TUsers_Set_Input;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  uuid_comparison_exp: TUuid_Comparison_Exp;
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
  activity_order_by: TActivity_Order_By;
  buckets: TBuckets;
  buckets_bool_exp: TBuckets_Bool_Exp;
  buckets_order_by: TBuckets_Order_By;
  citext: Scalars['citext'];
  citext_comparison_exp: TCitext_Comparison_Exp;
  files: TFiles;
  files_aggregate_order_by: TFiles_Aggregate_Order_By;
  files_avg_order_by: TFiles_Avg_Order_By;
  files_bool_exp: TFiles_Bool_Exp;
  files_insert_input: TFiles_Insert_Input;
  files_max_order_by: TFiles_Max_Order_By;
  files_min_order_by: TFiles_Min_Order_By;
  files_mutation_response: TFiles_Mutation_Response;
  files_order_by: TFiles_Order_By;
  files_stddev_order_by: TFiles_Stddev_Order_By;
  files_stddev_pop_order_by: TFiles_Stddev_Pop_Order_By;
  files_stddev_samp_order_by: TFiles_Stddev_Samp_Order_By;
  files_sum_order_by: TFiles_Sum_Order_By;
  files_var_pop_order_by: TFiles_Var_Pop_Order_By;
  files_var_samp_order_by: TFiles_Var_Samp_Order_By;
  files_variance_order_by: TFiles_Variance_Order_By;
  idea_comment_replies: TIdea_Comment_Replies;
  idea_comment_replies_aggregate: TIdea_Comment_Replies_Aggregate;
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
  idea_comments: TIdea_Comments;
  idea_comments_aggregate: TIdea_Comments_Aggregate;
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
  idea_comments_sum_fields: TIdea_Comments_Sum_Fields;
  idea_comments_sum_order_by: TIdea_Comments_Sum_Order_By;
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
  idea_preview_max_fields: TIdea_Preview_Max_Fields;
  idea_preview_min_fields: TIdea_Preview_Min_Fields;
  idea_preview_order_by: TIdea_Preview_Order_By;
  idea_votes: TIdea_Votes;
  idea_votes_aggregate: TIdea_Votes_Aggregate;
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
  idea_votes_order_by: TIdea_Votes_Order_By;
  ideas: TIdeas;
  ideas_aggregate: TIdeas_Aggregate;
  ideas_aggregate_fields: TIdeas_Aggregate_Fields;
  ideas_aggregate_order_by: TIdeas_Aggregate_Order_By;
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
  ideas_sum_fields: TIdeas_Sum_Fields;
  ideas_sum_order_by: TIdeas_Sum_Order_By;
  ideas_var_pop_fields: TIdeas_Var_Pop_Fields;
  ideas_var_pop_order_by: TIdeas_Var_Pop_Order_By;
  ideas_var_samp_fields: TIdeas_Var_Samp_Fields;
  ideas_var_samp_order_by: TIdeas_Var_Samp_Order_By;
  ideas_variance_fields: TIdeas_Variance_Fields;
  ideas_variance_order_by: TIdeas_Variance_Order_By;
  interested_ideas: TInterested_Ideas;
  interested_ideas_aggregate: TInterested_Ideas_Aggregate;
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
  interested_ideas_order_by: TInterested_Ideas_Order_By;
  jsonb: Scalars['jsonb'];
  jsonb_comparison_exp: TJsonb_Comparison_Exp;
  message: TMessage;
  message_aggregate: TMessage_Aggregate;
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
  message_thread: TMessage_Thread;
  message_thread_aggregate: TMessage_Thread_Aggregate;
  message_thread_aggregate_fields: TMessage_Thread_Aggregate_Fields;
  message_thread_aggregate_order_by: TMessage_Thread_Aggregate_Order_By;
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
  message_thread_users: TMessage_Thread_Users;
  message_thread_users_aggregate: TMessage_Thread_Users_Aggregate;
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
  message_thread_users_order_by: TMessage_Thread_Users_Order_By;
  mutation_root: {};
  query_root: {};
  report: TReport;
  report_bool_exp: TReport_Bool_Exp;
  report_insert_input: TReport_Insert_Input;
  report_mutation_response: TReport_Mutation_Response;
  report_order_by: TReport_Order_By;
  subscription_root: {};
  timestamptz: Scalars['timestamptz'];
  timestamptz_comparison_exp: TTimestamptz_Comparison_Exp;
  user_address: TUser_Address;
  user_address_bool_exp: TUser_Address_Bool_Exp;
  user_address_mutation_response: TUser_Address_Mutation_Response;
  user_address_order_by: TUser_Address_Order_By;
  user_address_pk_columns_input: TUser_Address_Pk_Columns_Input;
  user_address_set_input: TUser_Address_Set_Input;
  user_followers: TUser_Followers;
  user_followers_aggregate: TUser_Followers_Aggregate;
  user_followers_aggregate_fields: TUser_Followers_Aggregate_Fields;
  user_followers_bool_exp: TUser_Followers_Bool_Exp;
  user_followers_insert_input: TUser_Followers_Insert_Input;
  user_followers_max_fields: TUser_Followers_Max_Fields;
  user_followers_min_fields: TUser_Followers_Min_Fields;
  user_followers_mutation_response: TUser_Followers_Mutation_Response;
  user_followers_order_by: TUser_Followers_Order_By;
  user_profile: TUser_Profile;
  user_profile_aggregate: TUser_Profile_Aggregate;
  user_profile_aggregate_fields: TUser_Profile_Aggregate_Fields;
  user_profile_aggregate_order_by: TUser_Profile_Aggregate_Order_By;
  user_profile_append_input: TUser_Profile_Append_Input;
  user_profile_bool_exp: TUser_Profile_Bool_Exp;
  user_profile_delete_at_path_input: TUser_Profile_Delete_At_Path_Input;
  user_profile_delete_elem_input: TUser_Profile_Delete_Elem_Input;
  user_profile_delete_key_input: TUser_Profile_Delete_Key_Input;
  user_profile_max_fields: TUser_Profile_Max_Fields;
  user_profile_max_order_by: TUser_Profile_Max_Order_By;
  user_profile_min_fields: TUser_Profile_Min_Fields;
  user_profile_min_order_by: TUser_Profile_Min_Order_By;
  user_profile_mutation_response: TUser_Profile_Mutation_Response;
  user_profile_order_by: TUser_Profile_Order_By;
  user_profile_pk_columns_input: TUser_Profile_Pk_Columns_Input;
  user_profile_prepend_input: TUser_Profile_Prepend_Input;
  user_profile_set_input: TUser_Profile_Set_Input;
  users: TUsers;
  users_aggregate: TUsers_Aggregate;
  users_aggregate_fields: TUsers_Aggregate_Fields;
  users_bool_exp: TUsers_Bool_Exp;
  users_max_fields: TUsers_Max_Fields;
  users_min_fields: TUsers_Min_Fields;
  users_mutation_response: TUsers_Mutation_Response;
  users_order_by: TUsers_Order_By;
  users_pk_columns_input: TUsers_Pk_Columns_Input;
  users_set_input: TUsers_Set_Input;
  uuid: Scalars['uuid'];
  uuid_comparison_exp: TUuid_Comparison_Exp;
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
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, RequireFields<TActivity_Aggregate_FieldsCountArgs, never>>;
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

export type TBucketsResolvers<ContextType = any, ParentType extends TResolversParentTypes['buckets'] = TResolversParentTypes['buckets']> = {
  cacheControl?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  downloadExpiration?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  files?: Resolver<Array<TResolversTypes['files']>, ParentType, ContextType, RequireFields<TBucketsFilesArgs, never>>;
  id?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  maxUploadFileSize?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  minUploadFileSize?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  presignedUrlsEnabled?: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  updatedAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TCitextScalarConfig extends GraphQLScalarTypeConfig<TResolversTypes['citext'], any> {
  name: 'citext';
}

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

export type TFiles_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['files_mutation_response'] = TResolversParentTypes['files_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['files']>, ParentType, ContextType>;
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
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, RequireFields<TIdea_Comment_Replies_Aggregate_FieldsCountArgs, never>>;
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
  replies?: Resolver<Array<TResolversTypes['idea_comment_replies']>, ParentType, ContextType, RequireFields<TIdea_CommentsRepliesArgs, never>>;
  replies_aggregate?: Resolver<TResolversTypes['idea_comment_replies_aggregate'], ParentType, ContextType, RequireFields<TIdea_CommentsReplies_AggregateArgs, never>>;
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
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, RequireFields<TIdea_Comments_Aggregate_FieldsCountArgs, never>>;
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
  comments?: Resolver<Array<TResolversTypes['idea_comments']>, ParentType, ContextType, RequireFields<TIdea_PreviewCommentsArgs, never>>;
  comments_aggregate?: Resolver<TResolversTypes['idea_comments_aggregate'], ParentType, ContextType, RequireFields<TIdea_PreviewComments_AggregateArgs, never>>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  field?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  interested?: Resolver<Array<TResolversTypes['interested_ideas']>, ParentType, ContextType, RequireFields<TIdea_PreviewInterestedArgs, never>>;
  interested_aggregate?: Resolver<TResolversTypes['interested_ideas_aggregate'], ParentType, ContextType, RequireFields<TIdea_PreviewInterested_AggregateArgs, never>>;
  isNew?: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  isPublished?: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<TResolversTypes['users']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  votes?: Resolver<Array<TResolversTypes['idea_votes']>, ParentType, ContextType, RequireFields<TIdea_PreviewVotesArgs, never>>;
  votes_aggregate?: Resolver<TResolversTypes['idea_votes_aggregate'], ParentType, ContextType, RequireFields<TIdea_PreviewVotes_AggregateArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Preview_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_preview_aggregate'] = TResolversParentTypes['idea_preview_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['idea_preview_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['idea_preview']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdea_Preview_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['idea_preview_aggregate_fields'] = TResolversParentTypes['idea_preview_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, RequireFields<TIdea_Preview_Aggregate_FieldsCountArgs, never>>;
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
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, RequireFields<TIdea_Votes_Aggregate_FieldsCountArgs, never>>;
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
  businessPlan?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  comments?: Resolver<Array<TResolversTypes['idea_comments']>, ParentType, ContextType, RequireFields<TIdeasCommentsArgs, never>>;
  comments_aggregate?: Resolver<TResolversTypes['idea_comments_aggregate'], ParentType, ContextType, RequireFields<TIdeasComments_AggregateArgs, never>>;
  competitors?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  field?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  interested?: Resolver<Array<TResolversTypes['interested_ideas']>, ParentType, ContextType, RequireFields<TIdeasInterestedArgs, never>>;
  interested_aggregate?: Resolver<TResolversTypes['interested_ideas_aggregate'], ParentType, ContextType, RequireFields<TIdeasInterested_AggregateArgs, never>>;
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
  votes?: Resolver<Array<TResolversTypes['idea_votes']>, ParentType, ContextType, RequireFields<TIdeasVotesArgs, never>>;
  votes_aggregate?: Resolver<TResolversTypes['idea_votes_aggregate'], ParentType, ContextType, RequireFields<TIdeasVotes_AggregateArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdeas_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['ideas_aggregate'] = TResolversParentTypes['ideas_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['ideas_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['ideas']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TIdeas_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['ideas_aggregate_fields'] = TResolversParentTypes['ideas_aggregate_fields']> = {
  avg?: Resolver<Maybe<TResolversTypes['ideas_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, RequireFields<TIdeas_Aggregate_FieldsCountArgs, never>>;
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
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, RequireFields<TInterested_Ideas_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<TResolversTypes['interested_ideas_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['interested_ideas_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TInterested_Ideas_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['interested_ideas_max_fields'] = TResolversParentTypes['interested_ideas_max_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  ideaId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TInterested_Ideas_Min_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['interested_ideas_min_fields'] = TResolversParentTypes['interested_ideas_min_fields']> = {
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
  ideaId?: Resolver<Maybe<TResolversTypes['uuid']>, ParentType, ContextType>;
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
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, RequireFields<TMessage_Aggregate_FieldsCountArgs, never>>;
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
  messageThreadUsers?: Resolver<Array<TResolversTypes['message_thread_users']>, ParentType, ContextType, RequireFields<TMessage_ThreadMessageThreadUsersArgs, never>>;
  messageThreadUsers_aggregate?: Resolver<TResolversTypes['message_thread_users_aggregate'], ParentType, ContextType, RequireFields<TMessage_ThreadMessageThreadUsers_AggregateArgs, never>>;
  messages?: Resolver<Array<TResolversTypes['message']>, ParentType, ContextType, RequireFields<TMessage_ThreadMessagesArgs, never>>;
  messages_aggregate?: Resolver<TResolversTypes['message_aggregate'], ParentType, ContextType, RequireFields<TMessage_ThreadMessages_AggregateArgs, never>>;
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
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, RequireFields<TMessage_Thread_Aggregate_FieldsCountArgs, never>>;
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
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, RequireFields<TMessage_Thread_Users_Aggregate_FieldsCountArgs, never>>;
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

export type TMutation_RootResolvers<ContextType = any, ParentType extends TResolversParentTypes['mutation_root'] = TResolversParentTypes['mutation_root']> = {
  deleteFile?: Resolver<Maybe<TResolversTypes['files']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteFileArgs, 'id'>>;
  deleteFiles?: Resolver<Maybe<TResolversTypes['files_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDeleteFilesArgs, 'where'>>;
  delete_idea_comment_replies?: Resolver<Maybe<TResolversTypes['idea_comment_replies_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Idea_Comment_RepliesArgs, 'where'>>;
  delete_idea_comment_replies_by_pk?: Resolver<Maybe<TResolversTypes['idea_comment_replies']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Idea_Comment_Replies_By_PkArgs, 'id'>>;
  delete_idea_comments?: Resolver<Maybe<TResolversTypes['idea_comments_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Idea_CommentsArgs, 'where'>>;
  delete_idea_comments_by_pk?: Resolver<Maybe<TResolversTypes['idea_comments']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Idea_Comments_By_PkArgs, 'id'>>;
  delete_idea_votes?: Resolver<Maybe<TResolversTypes['idea_votes_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Idea_VotesArgs, 'where'>>;
  delete_idea_votes_by_pk?: Resolver<Maybe<TResolversTypes['idea_votes']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Idea_Votes_By_PkArgs, 'ideaId' | 'userId'>>;
  delete_ideas?: Resolver<Maybe<TResolversTypes['ideas_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_IdeasArgs, 'where'>>;
  delete_ideas_by_pk?: Resolver<Maybe<TResolversTypes['ideas']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Ideas_By_PkArgs, 'id'>>;
  delete_message?: Resolver<Maybe<TResolversTypes['message_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_MessageArgs, 'where'>>;
  delete_message_by_pk?: Resolver<Maybe<TResolversTypes['message']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Message_By_PkArgs, 'id'>>;
  delete_message_thread?: Resolver<Maybe<TResolversTypes['message_thread_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Message_ThreadArgs, 'where'>>;
  delete_message_thread_by_pk?: Resolver<Maybe<TResolversTypes['message_thread']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Message_Thread_By_PkArgs, 'id'>>;
  delete_message_thread_users?: Resolver<Maybe<TResolversTypes['message_thread_users_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Message_Thread_UsersArgs, 'where'>>;
  delete_message_thread_users_by_pk?: Resolver<Maybe<TResolversTypes['message_thread_users']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_Message_Thread_Users_By_PkArgs, 'threadId' | 'userId'>>;
  delete_user_followers?: Resolver<Maybe<TResolversTypes['user_followers_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_User_FollowersArgs, 'where'>>;
  delete_user_followers_by_pk?: Resolver<Maybe<TResolversTypes['user_followers']>, ParentType, ContextType, RequireFields<TMutation_RootDelete_User_Followers_By_PkArgs, 'followerId' | 'followingId'>>;
  insertFile?: Resolver<Maybe<TResolversTypes['files']>, ParentType, ContextType, RequireFields<TMutation_RootInsertFileArgs, 'object'>>;
  insertFiles?: Resolver<Maybe<TResolversTypes['files_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsertFilesArgs, 'objects'>>;
  insert_activity?: Resolver<Maybe<TResolversTypes['activity_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_ActivityArgs, 'objects'>>;
  insert_activity_one?: Resolver<Maybe<TResolversTypes['activity']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Activity_OneArgs, 'object'>>;
  insert_idea_comment_replies?: Resolver<Maybe<TResolversTypes['idea_comment_replies_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Idea_Comment_RepliesArgs, 'objects'>>;
  insert_idea_comment_replies_one?: Resolver<Maybe<TResolversTypes['idea_comment_replies']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Idea_Comment_Replies_OneArgs, 'object'>>;
  insert_idea_comments?: Resolver<Maybe<TResolversTypes['idea_comments_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Idea_CommentsArgs, 'objects'>>;
  insert_idea_comments_one?: Resolver<Maybe<TResolversTypes['idea_comments']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Idea_Comments_OneArgs, 'object'>>;
  insert_idea_votes?: Resolver<Maybe<TResolversTypes['idea_votes_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Idea_VotesArgs, 'objects'>>;
  insert_idea_votes_one?: Resolver<Maybe<TResolversTypes['idea_votes']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Idea_Votes_OneArgs, 'object'>>;
  insert_ideas?: Resolver<Maybe<TResolversTypes['ideas_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_IdeasArgs, 'objects'>>;
  insert_ideas_one?: Resolver<Maybe<TResolversTypes['ideas']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Ideas_OneArgs, 'object'>>;
  insert_interested_ideas?: Resolver<Maybe<TResolversTypes['interested_ideas_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Interested_IdeasArgs, 'objects'>>;
  insert_interested_ideas_one?: Resolver<Maybe<TResolversTypes['interested_ideas']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Interested_Ideas_OneArgs, 'object'>>;
  insert_message?: Resolver<Maybe<TResolversTypes['message_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_MessageArgs, 'objects'>>;
  insert_message_one?: Resolver<Maybe<TResolversTypes['message']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Message_OneArgs, 'object'>>;
  insert_message_thread?: Resolver<Maybe<TResolversTypes['message_thread_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Message_ThreadArgs, 'objects'>>;
  insert_message_thread_one?: Resolver<Maybe<TResolversTypes['message_thread']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Message_Thread_OneArgs, 'object'>>;
  insert_message_thread_users?: Resolver<Maybe<TResolversTypes['message_thread_users_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Message_Thread_UsersArgs, 'objects'>>;
  insert_message_thread_users_one?: Resolver<Maybe<TResolversTypes['message_thread_users']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Message_Thread_Users_OneArgs, 'object'>>;
  insert_report?: Resolver<Maybe<TResolversTypes['report_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_ReportArgs, 'objects'>>;
  insert_report_one?: Resolver<Maybe<TResolversTypes['report']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_Report_OneArgs, 'object'>>;
  insert_user_followers?: Resolver<Maybe<TResolversTypes['user_followers_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_User_FollowersArgs, 'objects'>>;
  insert_user_followers_one?: Resolver<Maybe<TResolversTypes['user_followers']>, ParentType, ContextType, RequireFields<TMutation_RootInsert_User_Followers_OneArgs, 'object'>>;
  updateUser?: Resolver<Maybe<TResolversTypes['users']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateUserArgs, 'pk_columns'>>;
  updateUsers?: Resolver<Maybe<TResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdateUsersArgs, 'where'>>;
  update_idea_comment_replies?: Resolver<Maybe<TResolversTypes['idea_comment_replies_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Idea_Comment_RepliesArgs, 'where'>>;
  update_idea_comment_replies_by_pk?: Resolver<Maybe<TResolversTypes['idea_comment_replies']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Idea_Comment_Replies_By_PkArgs, 'pk_columns'>>;
  update_idea_comments?: Resolver<Maybe<TResolversTypes['idea_comments_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Idea_CommentsArgs, 'where'>>;
  update_idea_comments_by_pk?: Resolver<Maybe<TResolversTypes['idea_comments']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Idea_Comments_By_PkArgs, 'pk_columns'>>;
  update_ideas?: Resolver<Maybe<TResolversTypes['ideas_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_IdeasArgs, 'where'>>;
  update_ideas_by_pk?: Resolver<Maybe<TResolversTypes['ideas']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Ideas_By_PkArgs, 'pk_columns'>>;
  update_message?: Resolver<Maybe<TResolversTypes['message_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_MessageArgs, 'where'>>;
  update_message_by_pk?: Resolver<Maybe<TResolversTypes['message']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Message_By_PkArgs, 'pk_columns'>>;
  update_message_thread?: Resolver<Maybe<TResolversTypes['message_thread_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Message_ThreadArgs, 'where'>>;
  update_message_thread_by_pk?: Resolver<Maybe<TResolversTypes['message_thread']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_Message_Thread_By_PkArgs, 'pk_columns'>>;
  update_user_address?: Resolver<Maybe<TResolversTypes['user_address_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_AddressArgs, 'where'>>;
  update_user_address_by_pk?: Resolver<Maybe<TResolversTypes['user_address']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_Address_By_PkArgs, 'pk_columns'>>;
  update_user_profile?: Resolver<Maybe<TResolversTypes['user_profile_mutation_response']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_ProfileArgs, 'where'>>;
  update_user_profile_by_pk?: Resolver<Maybe<TResolversTypes['user_profile']>, ParentType, ContextType, RequireFields<TMutation_RootUpdate_User_Profile_By_PkArgs, 'pk_columns'>>;
};

export type TQuery_RootResolvers<ContextType = any, ParentType extends TResolversParentTypes['query_root'] = TResolversParentTypes['query_root']> = {
  activity?: Resolver<Array<TResolversTypes['activity']>, ParentType, ContextType, RequireFields<TQuery_RootActivityArgs, never>>;
  activity_aggregate?: Resolver<TResolversTypes['activity_aggregate'], ParentType, ContextType, RequireFields<TQuery_RootActivity_AggregateArgs, never>>;
  activity_by_pk?: Resolver<Maybe<TResolversTypes['activity']>, ParentType, ContextType, RequireFields<TQuery_RootActivity_By_PkArgs, 'id'>>;
  bucket?: Resolver<Maybe<TResolversTypes['buckets']>, ParentType, ContextType, RequireFields<TQuery_RootBucketArgs, 'id'>>;
  buckets?: Resolver<Array<TResolversTypes['buckets']>, ParentType, ContextType, RequireFields<TQuery_RootBucketsArgs, never>>;
  file?: Resolver<Maybe<TResolversTypes['files']>, ParentType, ContextType, RequireFields<TQuery_RootFileArgs, 'id'>>;
  files?: Resolver<Array<TResolversTypes['files']>, ParentType, ContextType, RequireFields<TQuery_RootFilesArgs, never>>;
  idea_comment_replies?: Resolver<Array<TResolversTypes['idea_comment_replies']>, ParentType, ContextType, RequireFields<TQuery_RootIdea_Comment_RepliesArgs, never>>;
  idea_comment_replies_aggregate?: Resolver<TResolversTypes['idea_comment_replies_aggregate'], ParentType, ContextType, RequireFields<TQuery_RootIdea_Comment_Replies_AggregateArgs, never>>;
  idea_comment_replies_by_pk?: Resolver<Maybe<TResolversTypes['idea_comment_replies']>, ParentType, ContextType, RequireFields<TQuery_RootIdea_Comment_Replies_By_PkArgs, 'id'>>;
  idea_comments?: Resolver<Array<TResolversTypes['idea_comments']>, ParentType, ContextType, RequireFields<TQuery_RootIdea_CommentsArgs, never>>;
  idea_comments_aggregate?: Resolver<TResolversTypes['idea_comments_aggregate'], ParentType, ContextType, RequireFields<TQuery_RootIdea_Comments_AggregateArgs, never>>;
  idea_comments_by_pk?: Resolver<Maybe<TResolversTypes['idea_comments']>, ParentType, ContextType, RequireFields<TQuery_RootIdea_Comments_By_PkArgs, 'id'>>;
  idea_preview?: Resolver<Array<TResolversTypes['idea_preview']>, ParentType, ContextType, RequireFields<TQuery_RootIdea_PreviewArgs, never>>;
  idea_preview_aggregate?: Resolver<TResolversTypes['idea_preview_aggregate'], ParentType, ContextType, RequireFields<TQuery_RootIdea_Preview_AggregateArgs, never>>;
  idea_votes?: Resolver<Array<TResolversTypes['idea_votes']>, ParentType, ContextType, RequireFields<TQuery_RootIdea_VotesArgs, never>>;
  idea_votes_aggregate?: Resolver<TResolversTypes['idea_votes_aggregate'], ParentType, ContextType, RequireFields<TQuery_RootIdea_Votes_AggregateArgs, never>>;
  idea_votes_by_pk?: Resolver<Maybe<TResolversTypes['idea_votes']>, ParentType, ContextType, RequireFields<TQuery_RootIdea_Votes_By_PkArgs, 'ideaId' | 'userId'>>;
  ideas?: Resolver<Array<TResolversTypes['ideas']>, ParentType, ContextType, RequireFields<TQuery_RootIdeasArgs, never>>;
  ideas_aggregate?: Resolver<TResolversTypes['ideas_aggregate'], ParentType, ContextType, RequireFields<TQuery_RootIdeas_AggregateArgs, never>>;
  ideas_by_pk?: Resolver<Maybe<TResolversTypes['ideas']>, ParentType, ContextType, RequireFields<TQuery_RootIdeas_By_PkArgs, 'id'>>;
  interested_ideas?: Resolver<Array<TResolversTypes['interested_ideas']>, ParentType, ContextType, RequireFields<TQuery_RootInterested_IdeasArgs, never>>;
  interested_ideas_aggregate?: Resolver<TResolversTypes['interested_ideas_aggregate'], ParentType, ContextType, RequireFields<TQuery_RootInterested_Ideas_AggregateArgs, never>>;
  interested_ideas_by_pk?: Resolver<Maybe<TResolversTypes['interested_ideas']>, ParentType, ContextType, RequireFields<TQuery_RootInterested_Ideas_By_PkArgs, 'ideaId' | 'userId'>>;
  message?: Resolver<Array<TResolversTypes['message']>, ParentType, ContextType, RequireFields<TQuery_RootMessageArgs, never>>;
  message_aggregate?: Resolver<TResolversTypes['message_aggregate'], ParentType, ContextType, RequireFields<TQuery_RootMessage_AggregateArgs, never>>;
  message_by_pk?: Resolver<Maybe<TResolversTypes['message']>, ParentType, ContextType, RequireFields<TQuery_RootMessage_By_PkArgs, 'id'>>;
  message_thread?: Resolver<Array<TResolversTypes['message_thread']>, ParentType, ContextType, RequireFields<TQuery_RootMessage_ThreadArgs, never>>;
  message_thread_aggregate?: Resolver<TResolversTypes['message_thread_aggregate'], ParentType, ContextType, RequireFields<TQuery_RootMessage_Thread_AggregateArgs, never>>;
  message_thread_by_pk?: Resolver<Maybe<TResolversTypes['message_thread']>, ParentType, ContextType, RequireFields<TQuery_RootMessage_Thread_By_PkArgs, 'id'>>;
  message_thread_users?: Resolver<Array<TResolversTypes['message_thread_users']>, ParentType, ContextType, RequireFields<TQuery_RootMessage_Thread_UsersArgs, never>>;
  message_thread_users_aggregate?: Resolver<TResolversTypes['message_thread_users_aggregate'], ParentType, ContextType, RequireFields<TQuery_RootMessage_Thread_Users_AggregateArgs, never>>;
  message_thread_users_by_pk?: Resolver<Maybe<TResolversTypes['message_thread_users']>, ParentType, ContextType, RequireFields<TQuery_RootMessage_Thread_Users_By_PkArgs, 'threadId' | 'userId'>>;
  report?: Resolver<Array<TResolversTypes['report']>, ParentType, ContextType, RequireFields<TQuery_RootReportArgs, never>>;
  report_by_pk?: Resolver<Maybe<TResolversTypes['report']>, ParentType, ContextType, RequireFields<TQuery_RootReport_By_PkArgs, 'id'>>;
  user?: Resolver<Maybe<TResolversTypes['users']>, ParentType, ContextType, RequireFields<TQuery_RootUserArgs, 'id'>>;
  userAggregate?: Resolver<TResolversTypes['users_aggregate'], ParentType, ContextType, RequireFields<TQuery_RootUserAggregateArgs, never>>;
  user_address?: Resolver<Array<TResolversTypes['user_address']>, ParentType, ContextType, RequireFields<TQuery_RootUser_AddressArgs, never>>;
  user_address_by_pk?: Resolver<Maybe<TResolversTypes['user_address']>, ParentType, ContextType, RequireFields<TQuery_RootUser_Address_By_PkArgs, 'userId'>>;
  user_followers?: Resolver<Array<TResolversTypes['user_followers']>, ParentType, ContextType, RequireFields<TQuery_RootUser_FollowersArgs, never>>;
  user_followers_aggregate?: Resolver<TResolversTypes['user_followers_aggregate'], ParentType, ContextType, RequireFields<TQuery_RootUser_Followers_AggregateArgs, never>>;
  user_followers_by_pk?: Resolver<Maybe<TResolversTypes['user_followers']>, ParentType, ContextType, RequireFields<TQuery_RootUser_Followers_By_PkArgs, 'followerId' | 'followingId'>>;
  user_profile?: Resolver<Array<TResolversTypes['user_profile']>, ParentType, ContextType, RequireFields<TQuery_RootUser_ProfileArgs, never>>;
  user_profile_aggregate?: Resolver<TResolversTypes['user_profile_aggregate'], ParentType, ContextType, RequireFields<TQuery_RootUser_Profile_AggregateArgs, never>>;
  user_profile_by_pk?: Resolver<Maybe<TResolversTypes['user_profile']>, ParentType, ContextType, RequireFields<TQuery_RootUser_Profile_By_PkArgs, 'id'>>;
  users?: Resolver<Array<TResolversTypes['users']>, ParentType, ContextType, RequireFields<TQuery_RootUsersArgs, never>>;
};

export type TReportResolvers<ContextType = any, ParentType extends TResolversParentTypes['report'] = TResolversParentTypes['report']> = {
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TReport_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['report_mutation_response'] = TResolversParentTypes['report_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['report']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSubscription_RootResolvers<ContextType = any, ParentType extends TResolversParentTypes['subscription_root'] = TResolversParentTypes['subscription_root']> = {
  activity?: SubscriptionResolver<Array<TResolversTypes['activity']>, "activity", ParentType, ContextType, RequireFields<TSubscription_RootActivityArgs, never>>;
  activity_aggregate?: SubscriptionResolver<TResolversTypes['activity_aggregate'], "activity_aggregate", ParentType, ContextType, RequireFields<TSubscription_RootActivity_AggregateArgs, never>>;
  activity_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['activity']>, "activity_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootActivity_By_PkArgs, 'id'>>;
  bucket?: SubscriptionResolver<Maybe<TResolversTypes['buckets']>, "bucket", ParentType, ContextType, RequireFields<TSubscription_RootBucketArgs, 'id'>>;
  buckets?: SubscriptionResolver<Array<TResolversTypes['buckets']>, "buckets", ParentType, ContextType, RequireFields<TSubscription_RootBucketsArgs, never>>;
  file?: SubscriptionResolver<Maybe<TResolversTypes['files']>, "file", ParentType, ContextType, RequireFields<TSubscription_RootFileArgs, 'id'>>;
  files?: SubscriptionResolver<Array<TResolversTypes['files']>, "files", ParentType, ContextType, RequireFields<TSubscription_RootFilesArgs, never>>;
  idea_comment_replies?: SubscriptionResolver<Array<TResolversTypes['idea_comment_replies']>, "idea_comment_replies", ParentType, ContextType, RequireFields<TSubscription_RootIdea_Comment_RepliesArgs, never>>;
  idea_comment_replies_aggregate?: SubscriptionResolver<TResolversTypes['idea_comment_replies_aggregate'], "idea_comment_replies_aggregate", ParentType, ContextType, RequireFields<TSubscription_RootIdea_Comment_Replies_AggregateArgs, never>>;
  idea_comment_replies_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['idea_comment_replies']>, "idea_comment_replies_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootIdea_Comment_Replies_By_PkArgs, 'id'>>;
  idea_comments?: SubscriptionResolver<Array<TResolversTypes['idea_comments']>, "idea_comments", ParentType, ContextType, RequireFields<TSubscription_RootIdea_CommentsArgs, never>>;
  idea_comments_aggregate?: SubscriptionResolver<TResolversTypes['idea_comments_aggregate'], "idea_comments_aggregate", ParentType, ContextType, RequireFields<TSubscription_RootIdea_Comments_AggregateArgs, never>>;
  idea_comments_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['idea_comments']>, "idea_comments_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootIdea_Comments_By_PkArgs, 'id'>>;
  idea_preview?: SubscriptionResolver<Array<TResolversTypes['idea_preview']>, "idea_preview", ParentType, ContextType, RequireFields<TSubscription_RootIdea_PreviewArgs, never>>;
  idea_preview_aggregate?: SubscriptionResolver<TResolversTypes['idea_preview_aggregate'], "idea_preview_aggregate", ParentType, ContextType, RequireFields<TSubscription_RootIdea_Preview_AggregateArgs, never>>;
  idea_votes?: SubscriptionResolver<Array<TResolversTypes['idea_votes']>, "idea_votes", ParentType, ContextType, RequireFields<TSubscription_RootIdea_VotesArgs, never>>;
  idea_votes_aggregate?: SubscriptionResolver<TResolversTypes['idea_votes_aggregate'], "idea_votes_aggregate", ParentType, ContextType, RequireFields<TSubscription_RootIdea_Votes_AggregateArgs, never>>;
  idea_votes_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['idea_votes']>, "idea_votes_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootIdea_Votes_By_PkArgs, 'ideaId' | 'userId'>>;
  ideas?: SubscriptionResolver<Array<TResolversTypes['ideas']>, "ideas", ParentType, ContextType, RequireFields<TSubscription_RootIdeasArgs, never>>;
  ideas_aggregate?: SubscriptionResolver<TResolversTypes['ideas_aggregate'], "ideas_aggregate", ParentType, ContextType, RequireFields<TSubscription_RootIdeas_AggregateArgs, never>>;
  ideas_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['ideas']>, "ideas_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootIdeas_By_PkArgs, 'id'>>;
  interested_ideas?: SubscriptionResolver<Array<TResolversTypes['interested_ideas']>, "interested_ideas", ParentType, ContextType, RequireFields<TSubscription_RootInterested_IdeasArgs, never>>;
  interested_ideas_aggregate?: SubscriptionResolver<TResolversTypes['interested_ideas_aggregate'], "interested_ideas_aggregate", ParentType, ContextType, RequireFields<TSubscription_RootInterested_Ideas_AggregateArgs, never>>;
  interested_ideas_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['interested_ideas']>, "interested_ideas_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootInterested_Ideas_By_PkArgs, 'ideaId' | 'userId'>>;
  message?: SubscriptionResolver<Array<TResolversTypes['message']>, "message", ParentType, ContextType, RequireFields<TSubscription_RootMessageArgs, never>>;
  message_aggregate?: SubscriptionResolver<TResolversTypes['message_aggregate'], "message_aggregate", ParentType, ContextType, RequireFields<TSubscription_RootMessage_AggregateArgs, never>>;
  message_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['message']>, "message_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootMessage_By_PkArgs, 'id'>>;
  message_thread?: SubscriptionResolver<Array<TResolversTypes['message_thread']>, "message_thread", ParentType, ContextType, RequireFields<TSubscription_RootMessage_ThreadArgs, never>>;
  message_thread_aggregate?: SubscriptionResolver<TResolversTypes['message_thread_aggregate'], "message_thread_aggregate", ParentType, ContextType, RequireFields<TSubscription_RootMessage_Thread_AggregateArgs, never>>;
  message_thread_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['message_thread']>, "message_thread_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootMessage_Thread_By_PkArgs, 'id'>>;
  message_thread_users?: SubscriptionResolver<Array<TResolversTypes['message_thread_users']>, "message_thread_users", ParentType, ContextType, RequireFields<TSubscription_RootMessage_Thread_UsersArgs, never>>;
  message_thread_users_aggregate?: SubscriptionResolver<TResolversTypes['message_thread_users_aggregate'], "message_thread_users_aggregate", ParentType, ContextType, RequireFields<TSubscription_RootMessage_Thread_Users_AggregateArgs, never>>;
  message_thread_users_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['message_thread_users']>, "message_thread_users_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootMessage_Thread_Users_By_PkArgs, 'threadId' | 'userId'>>;
  report?: SubscriptionResolver<Array<TResolversTypes['report']>, "report", ParentType, ContextType, RequireFields<TSubscription_RootReportArgs, never>>;
  report_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['report']>, "report_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootReport_By_PkArgs, 'id'>>;
  user?: SubscriptionResolver<Maybe<TResolversTypes['users']>, "user", ParentType, ContextType, RequireFields<TSubscription_RootUserArgs, 'id'>>;
  userAggregate?: SubscriptionResolver<TResolversTypes['users_aggregate'], "userAggregate", ParentType, ContextType, RequireFields<TSubscription_RootUserAggregateArgs, never>>;
  user_address?: SubscriptionResolver<Array<TResolversTypes['user_address']>, "user_address", ParentType, ContextType, RequireFields<TSubscription_RootUser_AddressArgs, never>>;
  user_address_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['user_address']>, "user_address_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootUser_Address_By_PkArgs, 'userId'>>;
  user_followers?: SubscriptionResolver<Array<TResolversTypes['user_followers']>, "user_followers", ParentType, ContextType, RequireFields<TSubscription_RootUser_FollowersArgs, never>>;
  user_followers_aggregate?: SubscriptionResolver<TResolversTypes['user_followers_aggregate'], "user_followers_aggregate", ParentType, ContextType, RequireFields<TSubscription_RootUser_Followers_AggregateArgs, never>>;
  user_followers_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['user_followers']>, "user_followers_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootUser_Followers_By_PkArgs, 'followerId' | 'followingId'>>;
  user_profile?: SubscriptionResolver<Array<TResolversTypes['user_profile']>, "user_profile", ParentType, ContextType, RequireFields<TSubscription_RootUser_ProfileArgs, never>>;
  user_profile_aggregate?: SubscriptionResolver<TResolversTypes['user_profile_aggregate'], "user_profile_aggregate", ParentType, ContextType, RequireFields<TSubscription_RootUser_Profile_AggregateArgs, never>>;
  user_profile_by_pk?: SubscriptionResolver<Maybe<TResolversTypes['user_profile']>, "user_profile_by_pk", ParentType, ContextType, RequireFields<TSubscription_RootUser_Profile_By_PkArgs, 'id'>>;
  users?: SubscriptionResolver<Array<TResolversTypes['users']>, "users", ParentType, ContextType, RequireFields<TSubscription_RootUsersArgs, never>>;
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

export type TUser_Address_Mutation_ResponseResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_address_mutation_response'] = TResolversParentTypes['user_address_mutation_response']> = {
  affected_rows?: Resolver<TResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<TResolversTypes['user_address']>, ParentType, ContextType>;
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
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, RequireFields<TUser_Followers_Aggregate_FieldsCountArgs, never>>;
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

export type TUser_ProfileResolvers<ContextType = any, ParentType extends TResolversParentTypes['user_profile'] = TResolversParentTypes['user_profile']> = {
  availability?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  background?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  businessDescription?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  customPronouns?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  facebook?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  industries?: Resolver<Maybe<TResolversTypes['jsonb']>, ParentType, ContextType, RequireFields<TUser_ProfileIndustriesArgs, never>>;
  instagram?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  isComplete?: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  linkedin?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  objective?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  pronouns?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  resume?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  skills?: Resolver<Maybe<TResolversTypes['jsonb']>, ParentType, ContextType, RequireFields<TUser_ProfileSkillsArgs, never>>;
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
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, RequireFields<TUser_Profile_Aggregate_FieldsCountArgs, never>>;
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
  avatarUrl?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  defaultRole?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  disabled?: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  displayName?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<Maybe<TResolversTypes['citext']>, ParentType, ContextType>;
  emailVerified?: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  files?: Resolver<Array<TResolversTypes['files']>, ParentType, ContextType, RequireFields<TUsersFilesArgs, never>>;
  id?: Resolver<TResolversTypes['uuid'], ParentType, ContextType>;
  ideas?: Resolver<Array<TResolversTypes['ideas']>, ParentType, ContextType, RequireFields<TUsersIdeasArgs, never>>;
  ideas_aggregate?: Resolver<TResolversTypes['ideas_aggregate'], ParentType, ContextType, RequireFields<TUsersIdeas_AggregateArgs, never>>;
  isAnonymous?: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  lastSeen?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
  locale?: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  messageThreadUsers?: Resolver<Array<TResolversTypes['message_thread_users']>, ParentType, ContextType, RequireFields<TUsersMessageThreadUsersArgs, never>>;
  messageThreadUsers_aggregate?: Resolver<TResolversTypes['message_thread_users_aggregate'], ParentType, ContextType, RequireFields<TUsersMessageThreadUsers_AggregateArgs, never>>;
  messageThreads?: Resolver<Array<TResolversTypes['message_thread']>, ParentType, ContextType, RequireFields<TUsersMessageThreadsArgs, never>>;
  messageThreads_aggregate?: Resolver<TResolversTypes['message_thread_aggregate'], ParentType, ContextType, RequireFields<TUsersMessageThreads_AggregateArgs, never>>;
  messages?: Resolver<Array<TResolversTypes['message']>, ParentType, ContextType, RequireFields<TUsersMessagesArgs, never>>;
  messages_aggregate?: Resolver<TResolversTypes['message_aggregate'], ParentType, ContextType, RequireFields<TUsersMessages_AggregateArgs, never>>;
  newEmail?: Resolver<Maybe<TResolversTypes['citext']>, ParentType, ContextType>;
  otpHash?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  otpHashExpiresAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  otpMethodLastUsed?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  passwordHash?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  phoneNumberVerified?: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  profile?: Resolver<Maybe<TResolversTypes['user_profile']>, ParentType, ContextType>;
  ticket?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  ticketExpiresAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  totpSecret?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<TResolversTypes['timestamptz'], ParentType, ContextType>;
  user_profiles?: Resolver<Array<TResolversTypes['user_profile']>, ParentType, ContextType, RequireFields<TUsersUser_ProfilesArgs, never>>;
  user_profiles_aggregate?: Resolver<TResolversTypes['user_profile_aggregate'], ParentType, ContextType, RequireFields<TUsersUser_Profiles_AggregateArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUsers_AggregateResolvers<ContextType = any, ParentType extends TResolversParentTypes['users_aggregate'] = TResolversParentTypes['users_aggregate']> = {
  aggregate?: Resolver<Maybe<TResolversTypes['users_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<TResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUsers_Aggregate_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['users_aggregate_fields'] = TResolversParentTypes['users_aggregate_fields']> = {
  count?: Resolver<TResolversTypes['Int'], ParentType, ContextType, RequireFields<TUsers_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<TResolversTypes['users_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<TResolversTypes['users_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TUsers_Max_FieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['users_max_fields'] = TResolversParentTypes['users_max_fields']> = {
  activeMfaType?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<TResolversTypes['timestamptz']>, ParentType, ContextType>;
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

export type TResolvers<ContextType = any> = {
  activity?: TActivityResolvers<ContextType>;
  activity_aggregate?: TActivity_AggregateResolvers<ContextType>;
  activity_aggregate_fields?: TActivity_Aggregate_FieldsResolvers<ContextType>;
  activity_max_fields?: TActivity_Max_FieldsResolvers<ContextType>;
  activity_min_fields?: TActivity_Min_FieldsResolvers<ContextType>;
  activity_mutation_response?: TActivity_Mutation_ResponseResolvers<ContextType>;
  buckets?: TBucketsResolvers<ContextType>;
  citext?: GraphQLScalarType;
  files?: TFilesResolvers<ContextType>;
  files_mutation_response?: TFiles_Mutation_ResponseResolvers<ContextType>;
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
  mutation_root?: TMutation_RootResolvers<ContextType>;
  query_root?: TQuery_RootResolvers<ContextType>;
  report?: TReportResolvers<ContextType>;
  report_mutation_response?: TReport_Mutation_ResponseResolvers<ContextType>;
  subscription_root?: TSubscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  user_address?: TUser_AddressResolvers<ContextType>;
  user_address_mutation_response?: TUser_Address_Mutation_ResponseResolvers<ContextType>;
  user_followers?: TUser_FollowersResolvers<ContextType>;
  user_followers_aggregate?: TUser_Followers_AggregateResolvers<ContextType>;
  user_followers_aggregate_fields?: TUser_Followers_Aggregate_FieldsResolvers<ContextType>;
  user_followers_max_fields?: TUser_Followers_Max_FieldsResolvers<ContextType>;
  user_followers_min_fields?: TUser_Followers_Min_FieldsResolvers<ContextType>;
  user_followers_mutation_response?: TUser_Followers_Mutation_ResponseResolvers<ContextType>;
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
};

export type TDirectiveResolvers<ContextType = any> = {
  cached?: TCachedDirectiveResolver<any, any, ContextType>;
};
