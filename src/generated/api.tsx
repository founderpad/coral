import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
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
  citext: any;
  jsonb: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type TBoolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type TInt_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type TString_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/**
 * The activity table of all users
 *
 *
 * columns and relationships of "activity"
 *
 */
export type TActivity = {
  __typename?: 'activity';
  created_at?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  event: Scalars['String'];
  id: Scalars['uuid'];
  idea_id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  /** An object relationship */
  user: TUsers;
  user_id: Scalars['uuid'];
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
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<TActivity_Max_Fields>;
  min?: Maybe<TActivity_Min_Fields>;
};


/** aggregate fields of "activity" */
export type TActivity_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<TActivity_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "activity" */
export type TActivity_Aggregate_Order_By = {
  count?: Maybe<TOrder_By>;
  max?: Maybe<TActivity_Max_Order_By>;
  min?: Maybe<TActivity_Min_Order_By>;
};

/** input type for inserting array relation for remote table "activity" */
export type TActivity_Arr_Rel_Insert_Input = {
  data: Array<TActivity_Insert_Input>;
  on_conflict?: Maybe<TActivity_On_Conflict>;
};

/** Boolean expression to filter rows from the table "activity". All fields are combined with a logical 'AND'. */
export type TActivity_Bool_Exp = {
  _and?: Maybe<Array<Maybe<TActivity_Bool_Exp>>>;
  _not?: Maybe<TActivity_Bool_Exp>;
  _or?: Maybe<Array<Maybe<TActivity_Bool_Exp>>>;
  created_at?: Maybe<TTimestamptz_Comparison_Exp>;
  description?: Maybe<TString_Comparison_Exp>;
  event?: Maybe<TString_Comparison_Exp>;
  id?: Maybe<TUuid_Comparison_Exp>;
  idea_id?: Maybe<TUuid_Comparison_Exp>;
  type?: Maybe<TString_Comparison_Exp>;
  updated_at?: Maybe<TTimestamptz_Comparison_Exp>;
  url?: Maybe<TString_Comparison_Exp>;
  user?: Maybe<TUsers_Bool_Exp>;
  user_id?: Maybe<TUuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "activity" */
export type TActivity_Constraint =
  /** unique or primary key constraint */
  | 'activity_pkey';

/** input type for inserting data into table "activity" */
export type TActivity_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  idea_id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  user?: Maybe<TUsers_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TActivity_Max_Fields = {
  __typename?: 'activity_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  idea_id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "activity" */
export type TActivity_Max_Order_By = {
  created_at?: Maybe<TOrder_By>;
  description?: Maybe<TOrder_By>;
  event?: Maybe<TOrder_By>;
  id?: Maybe<TOrder_By>;
  idea_id?: Maybe<TOrder_By>;
  type?: Maybe<TOrder_By>;
  updated_at?: Maybe<TOrder_By>;
  url?: Maybe<TOrder_By>;
  user_id?: Maybe<TOrder_By>;
};

/** aggregate min on columns */
export type TActivity_Min_Fields = {
  __typename?: 'activity_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  idea_id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "activity" */
export type TActivity_Min_Order_By = {
  created_at?: Maybe<TOrder_By>;
  description?: Maybe<TOrder_By>;
  event?: Maybe<TOrder_By>;
  id?: Maybe<TOrder_By>;
  idea_id?: Maybe<TOrder_By>;
  type?: Maybe<TOrder_By>;
  updated_at?: Maybe<TOrder_By>;
  url?: Maybe<TOrder_By>;
  user_id?: Maybe<TOrder_By>;
};

/** response of any mutation on the table "activity" */
export type TActivity_Mutation_Response = {
  __typename?: 'activity_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TActivity>;
};

/** input type for inserting object relation for remote table "activity" */
export type TActivity_Obj_Rel_Insert_Input = {
  data: TActivity_Insert_Input;
  on_conflict?: Maybe<TActivity_On_Conflict>;
};

/** on conflict condition type for table "activity" */
export type TActivity_On_Conflict = {
  constraint: TActivity_Constraint;
  update_columns: Array<TActivity_Update_Column>;
  where?: Maybe<TActivity_Bool_Exp>;
};

/** ordering options when selecting data from "activity" */
export type TActivity_Order_By = {
  created_at?: Maybe<TOrder_By>;
  description?: Maybe<TOrder_By>;
  event?: Maybe<TOrder_By>;
  id?: Maybe<TOrder_By>;
  idea_id?: Maybe<TOrder_By>;
  type?: Maybe<TOrder_By>;
  updated_at?: Maybe<TOrder_By>;
  url?: Maybe<TOrder_By>;
  user?: Maybe<TUsers_Order_By>;
  user_id?: Maybe<TOrder_By>;
};

/** primary key columns input for table: "activity" */
export type TActivity_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "activity" */
export type TActivity_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'description'
  /** column name */
  | 'event'
  /** column name */
  | 'id'
  /** column name */
  | 'idea_id'
  /** column name */
  | 'type'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'url'
  /** column name */
  | 'user_id';

/** input type for updating data in table "activity" */
export type TActivity_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  idea_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "activity" */
export type TActivity_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'description'
  /** column name */
  | 'event'
  /** column name */
  | 'id'
  /** column name */
  | 'idea_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

/** columns and relationships of "auth.accounts" */
export type TAuth_Accounts = {
  __typename?: 'auth_accounts';
  email?: Maybe<Scalars['citext']>;
  /** An object relationship */
  user: TUsers;
};

/** Boolean expression to filter rows from the table "auth.accounts". All fields are combined with a logical 'AND'. */
export type TAuth_Accounts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<TAuth_Accounts_Bool_Exp>>>;
  _not?: Maybe<TAuth_Accounts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<TAuth_Accounts_Bool_Exp>>>;
  email?: Maybe<TCitext_Comparison_Exp>;
  user?: Maybe<TUsers_Bool_Exp>;
};

/** ordering options when selecting data from "auth.accounts" */
export type TAuth_Accounts_Order_By = {
  email?: Maybe<TOrder_By>;
  user?: Maybe<TUsers_Order_By>;
};

/** primary key columns input for table: "auth.accounts" */
export type TAuth_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.accounts" */
export type TAuth_Accounts_Select_Column =
  /** column name */
  | 'email';

/** expression to compare columns of type citext. All fields are combined with logical 'AND'. */
export type TCitext_Comparison_Exp = {
  _eq?: Maybe<Scalars['citext']>;
  _gt?: Maybe<Scalars['citext']>;
  _gte?: Maybe<Scalars['citext']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['citext']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['citext']>;
  _lte?: Maybe<Scalars['citext']>;
  _neq?: Maybe<Scalars['citext']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['citext']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "idea_preview" */
export type TIdea_Preview = {
  __typename?: 'idea_preview';
  created_at?: Maybe<Scalars['timestamptz']>;
  field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  idea_user?: Maybe<TUsers>;
  /** An object relationship */
  idea_votes?: Maybe<TIdea_Votes>;
  is_new?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
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
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<TIdea_Preview_Max_Fields>;
  min?: Maybe<TIdea_Preview_Min_Fields>;
};


/** aggregate fields of "idea_preview" */
export type TIdea_Preview_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<TIdea_Preview_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "idea_preview" */
export type TIdea_Preview_Aggregate_Order_By = {
  count?: Maybe<TOrder_By>;
  max?: Maybe<TIdea_Preview_Max_Order_By>;
  min?: Maybe<TIdea_Preview_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "idea_preview". All fields are combined with a logical 'AND'. */
export type TIdea_Preview_Bool_Exp = {
  _and?: Maybe<Array<Maybe<TIdea_Preview_Bool_Exp>>>;
  _not?: Maybe<TIdea_Preview_Bool_Exp>;
  _or?: Maybe<Array<Maybe<TIdea_Preview_Bool_Exp>>>;
  created_at?: Maybe<TTimestamptz_Comparison_Exp>;
  field?: Maybe<TString_Comparison_Exp>;
  id?: Maybe<TUuid_Comparison_Exp>;
  idea_user?: Maybe<TUsers_Bool_Exp>;
  idea_votes?: Maybe<TIdea_Votes_Bool_Exp>;
  is_new?: Maybe<TBoolean_Comparison_Exp>;
  name?: Maybe<TString_Comparison_Exp>;
  preview?: Maybe<TString_Comparison_Exp>;
  status?: Maybe<TString_Comparison_Exp>;
  user_id?: Maybe<TUuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type TIdea_Preview_Max_Fields = {
  __typename?: 'idea_preview_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "idea_preview" */
export type TIdea_Preview_Max_Order_By = {
  created_at?: Maybe<TOrder_By>;
  field?: Maybe<TOrder_By>;
  id?: Maybe<TOrder_By>;
  name?: Maybe<TOrder_By>;
  preview?: Maybe<TOrder_By>;
  status?: Maybe<TOrder_By>;
  user_id?: Maybe<TOrder_By>;
};

/** aggregate min on columns */
export type TIdea_Preview_Min_Fields = {
  __typename?: 'idea_preview_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "idea_preview" */
export type TIdea_Preview_Min_Order_By = {
  created_at?: Maybe<TOrder_By>;
  field?: Maybe<TOrder_By>;
  id?: Maybe<TOrder_By>;
  name?: Maybe<TOrder_By>;
  preview?: Maybe<TOrder_By>;
  status?: Maybe<TOrder_By>;
  user_id?: Maybe<TOrder_By>;
};

/** ordering options when selecting data from "idea_preview" */
export type TIdea_Preview_Order_By = {
  created_at?: Maybe<TOrder_By>;
  field?: Maybe<TOrder_By>;
  id?: Maybe<TOrder_By>;
  idea_user?: Maybe<TUsers_Order_By>;
  idea_votes?: Maybe<TIdea_Votes_Order_By>;
  is_new?: Maybe<TOrder_By>;
  name?: Maybe<TOrder_By>;
  preview?: Maybe<TOrder_By>;
  status?: Maybe<TOrder_By>;
  user_id?: Maybe<TOrder_By>;
};

/** select columns of table "idea_preview" */
export type TIdea_Preview_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'field'
  /** column name */
  | 'id'
  /** column name */
  | 'is_new'
  /** column name */
  | 'name'
  /** column name */
  | 'preview'
  /** column name */
  | 'status'
  /** column name */
  | 'user_id';

/** columns and relationships of "idea_votes" */
export type TIdea_Votes = {
  __typename?: 'idea_votes';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  idea: TIdeas;
  idea_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: TUsers;
  user_id: Scalars['uuid'];
  vote_type: Scalars['Int'];
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
  avg?: Maybe<TIdea_Votes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<TIdea_Votes_Max_Fields>;
  min?: Maybe<TIdea_Votes_Min_Fields>;
  stddev?: Maybe<TIdea_Votes_Stddev_Fields>;
  stddev_pop?: Maybe<TIdea_Votes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<TIdea_Votes_Stddev_Samp_Fields>;
  sum?: Maybe<TIdea_Votes_Sum_Fields>;
  var_pop?: Maybe<TIdea_Votes_Var_Pop_Fields>;
  var_samp?: Maybe<TIdea_Votes_Var_Samp_Fields>;
  variance?: Maybe<TIdea_Votes_Variance_Fields>;
};


/** aggregate fields of "idea_votes" */
export type TIdea_Votes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<TIdea_Votes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "idea_votes" */
export type TIdea_Votes_Aggregate_Order_By = {
  avg?: Maybe<TIdea_Votes_Avg_Order_By>;
  count?: Maybe<TOrder_By>;
  max?: Maybe<TIdea_Votes_Max_Order_By>;
  min?: Maybe<TIdea_Votes_Min_Order_By>;
  stddev?: Maybe<TIdea_Votes_Stddev_Order_By>;
  stddev_pop?: Maybe<TIdea_Votes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<TIdea_Votes_Stddev_Samp_Order_By>;
  sum?: Maybe<TIdea_Votes_Sum_Order_By>;
  var_pop?: Maybe<TIdea_Votes_Var_Pop_Order_By>;
  var_samp?: Maybe<TIdea_Votes_Var_Samp_Order_By>;
  variance?: Maybe<TIdea_Votes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "idea_votes" */
export type TIdea_Votes_Arr_Rel_Insert_Input = {
  data: Array<TIdea_Votes_Insert_Input>;
  on_conflict?: Maybe<TIdea_Votes_On_Conflict>;
};

/** aggregate avg on columns */
export type TIdea_Votes_Avg_Fields = {
  __typename?: 'idea_votes_avg_fields';
  vote_type?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "idea_votes" */
export type TIdea_Votes_Avg_Order_By = {
  vote_type?: Maybe<TOrder_By>;
};

/** Boolean expression to filter rows from the table "idea_votes". All fields are combined with a logical 'AND'. */
export type TIdea_Votes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<TIdea_Votes_Bool_Exp>>>;
  _not?: Maybe<TIdea_Votes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<TIdea_Votes_Bool_Exp>>>;
  created_at?: Maybe<TTimestamptz_Comparison_Exp>;
  idea?: Maybe<TIdeas_Bool_Exp>;
  idea_id?: Maybe<TUuid_Comparison_Exp>;
  updated_at?: Maybe<TTimestamptz_Comparison_Exp>;
  user?: Maybe<TUsers_Bool_Exp>;
  user_id?: Maybe<TUuid_Comparison_Exp>;
  vote_type?: Maybe<TInt_Comparison_Exp>;
};

/** unique or primary key constraints on table "idea_votes" */
export type TIdea_Votes_Constraint =
  /** unique or primary key constraint */
  | 'idea_votes_idea_id_user_id_key'
  /** unique or primary key constraint */
  | 'idea_votes_pkey';

/** input type for incrementing integer column in table "idea_votes" */
export type TIdea_Votes_Inc_Input = {
  vote_type?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "idea_votes" */
export type TIdea_Votes_Insert_Input = {
  idea?: Maybe<TIdeas_Obj_Rel_Insert_Input>;
  idea_id?: Maybe<Scalars['uuid']>;
  user?: Maybe<TUsers_Obj_Rel_Insert_Input>;
  vote_type?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type TIdea_Votes_Max_Fields = {
  __typename?: 'idea_votes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  idea_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  vote_type?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "idea_votes" */
export type TIdea_Votes_Max_Order_By = {
  created_at?: Maybe<TOrder_By>;
  idea_id?: Maybe<TOrder_By>;
  updated_at?: Maybe<TOrder_By>;
  user_id?: Maybe<TOrder_By>;
  vote_type?: Maybe<TOrder_By>;
};

/** aggregate min on columns */
export type TIdea_Votes_Min_Fields = {
  __typename?: 'idea_votes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  idea_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  vote_type?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "idea_votes" */
export type TIdea_Votes_Min_Order_By = {
  created_at?: Maybe<TOrder_By>;
  idea_id?: Maybe<TOrder_By>;
  updated_at?: Maybe<TOrder_By>;
  user_id?: Maybe<TOrder_By>;
  vote_type?: Maybe<TOrder_By>;
};

/** response of any mutation on the table "idea_votes" */
export type TIdea_Votes_Mutation_Response = {
  __typename?: 'idea_votes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TIdea_Votes>;
};

/** input type for inserting object relation for remote table "idea_votes" */
export type TIdea_Votes_Obj_Rel_Insert_Input = {
  data: TIdea_Votes_Insert_Input;
  on_conflict?: Maybe<TIdea_Votes_On_Conflict>;
};

/** on conflict condition type for table "idea_votes" */
export type TIdea_Votes_On_Conflict = {
  constraint: TIdea_Votes_Constraint;
  update_columns: Array<TIdea_Votes_Update_Column>;
  where?: Maybe<TIdea_Votes_Bool_Exp>;
};

/** ordering options when selecting data from "idea_votes" */
export type TIdea_Votes_Order_By = {
  created_at?: Maybe<TOrder_By>;
  idea?: Maybe<TIdeas_Order_By>;
  idea_id?: Maybe<TOrder_By>;
  updated_at?: Maybe<TOrder_By>;
  user?: Maybe<TUsers_Order_By>;
  user_id?: Maybe<TOrder_By>;
  vote_type?: Maybe<TOrder_By>;
};

/** primary key columns input for table: "idea_votes" */
export type TIdea_Votes_Pk_Columns_Input = {
  idea_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** select columns of table "idea_votes" */
export type TIdea_Votes_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'idea_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id'
  /** column name */
  | 'vote_type';

/** input type for updating data in table "idea_votes" */
export type TIdea_Votes_Set_Input = {
  vote_type?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type TIdea_Votes_Stddev_Fields = {
  __typename?: 'idea_votes_stddev_fields';
  vote_type?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "idea_votes" */
export type TIdea_Votes_Stddev_Order_By = {
  vote_type?: Maybe<TOrder_By>;
};

/** aggregate stddev_pop on columns */
export type TIdea_Votes_Stddev_Pop_Fields = {
  __typename?: 'idea_votes_stddev_pop_fields';
  vote_type?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "idea_votes" */
export type TIdea_Votes_Stddev_Pop_Order_By = {
  vote_type?: Maybe<TOrder_By>;
};

/** aggregate stddev_samp on columns */
export type TIdea_Votes_Stddev_Samp_Fields = {
  __typename?: 'idea_votes_stddev_samp_fields';
  vote_type?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "idea_votes" */
export type TIdea_Votes_Stddev_Samp_Order_By = {
  vote_type?: Maybe<TOrder_By>;
};

/** aggregate sum on columns */
export type TIdea_Votes_Sum_Fields = {
  __typename?: 'idea_votes_sum_fields';
  vote_type?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "idea_votes" */
export type TIdea_Votes_Sum_Order_By = {
  vote_type?: Maybe<TOrder_By>;
};

/** update columns of table "idea_votes" */
export type TIdea_Votes_Update_Column =
  /** column name */
  | 'vote_type';

/** aggregate var_pop on columns */
export type TIdea_Votes_Var_Pop_Fields = {
  __typename?: 'idea_votes_var_pop_fields';
  vote_type?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "idea_votes" */
export type TIdea_Votes_Var_Pop_Order_By = {
  vote_type?: Maybe<TOrder_By>;
};

/** aggregate var_samp on columns */
export type TIdea_Votes_Var_Samp_Fields = {
  __typename?: 'idea_votes_var_samp_fields';
  vote_type?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "idea_votes" */
export type TIdea_Votes_Var_Samp_Order_By = {
  vote_type?: Maybe<TOrder_By>;
};

/** aggregate variance on columns */
export type TIdea_Votes_Variance_Fields = {
  __typename?: 'idea_votes_variance_fields';
  vote_type?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "idea_votes" */
export type TIdea_Votes_Variance_Order_By = {
  vote_type?: Maybe<TOrder_By>;
};

/**
 * Ideas table
 *
 *
 * columns and relationships of "ideas"
 *
 */
export type TIdeas = {
  __typename?: 'ideas';
  additional_information?: Maybe<Scalars['String']>;
  business_plan?: Maybe<Scalars['String']>;
  competitors?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  description_preview?: Maybe<Scalars['String']>;
  field: Scalars['String'];
  id: Scalars['uuid'];
  /** An object relationship */
  idea_user?: Maybe<TUsers>;
  /** An array relationship */
  idea_votes: Array<TIdea_Votes>;
  /** An aggregated array relationship */
  idea_votes_aggregate: TIdea_Votes_Aggregate;
  is_published?: Maybe<Scalars['Boolean']>;
  mission_statement?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id: Scalars['uuid'];
};


/**
 * Ideas table
 *
 *
 * columns and relationships of "ideas"
 *
 */
export type TIdeasIdea_VotesArgs = {
  distinct_on?: Maybe<Array<TIdea_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TIdea_Votes_Order_By>>;
  where?: Maybe<TIdea_Votes_Bool_Exp>;
};


/**
 * Ideas table
 *
 *
 * columns and relationships of "ideas"
 *
 */
export type TIdeasIdea_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<TIdea_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TIdea_Votes_Order_By>>;
  where?: Maybe<TIdea_Votes_Bool_Exp>;
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
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<TIdeas_Max_Fields>;
  min?: Maybe<TIdeas_Min_Fields>;
};


/** aggregate fields of "ideas" */
export type TIdeas_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<TIdeas_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ideas" */
export type TIdeas_Aggregate_Order_By = {
  count?: Maybe<TOrder_By>;
  max?: Maybe<TIdeas_Max_Order_By>;
  min?: Maybe<TIdeas_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ideas" */
export type TIdeas_Arr_Rel_Insert_Input = {
  data: Array<TIdeas_Insert_Input>;
  on_conflict?: Maybe<TIdeas_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ideas". All fields are combined with a logical 'AND'. */
export type TIdeas_Bool_Exp = {
  _and?: Maybe<Array<Maybe<TIdeas_Bool_Exp>>>;
  _not?: Maybe<TIdeas_Bool_Exp>;
  _or?: Maybe<Array<Maybe<TIdeas_Bool_Exp>>>;
  additional_information?: Maybe<TString_Comparison_Exp>;
  business_plan?: Maybe<TString_Comparison_Exp>;
  competitors?: Maybe<TString_Comparison_Exp>;
  created_at?: Maybe<TTimestamptz_Comparison_Exp>;
  description?: Maybe<TString_Comparison_Exp>;
  description_preview?: Maybe<TString_Comparison_Exp>;
  field?: Maybe<TString_Comparison_Exp>;
  id?: Maybe<TUuid_Comparison_Exp>;
  idea_user?: Maybe<TUsers_Bool_Exp>;
  idea_votes?: Maybe<TIdea_Votes_Bool_Exp>;
  is_published?: Maybe<TBoolean_Comparison_Exp>;
  mission_statement?: Maybe<TString_Comparison_Exp>;
  name?: Maybe<TString_Comparison_Exp>;
  status?: Maybe<TString_Comparison_Exp>;
  team?: Maybe<TString_Comparison_Exp>;
  updated_at?: Maybe<TTimestamptz_Comparison_Exp>;
  user_id?: Maybe<TUuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "ideas" */
export type TIdeas_Constraint =
  /** unique or primary key constraint */
  | 'ideas_pkey';

/** input type for inserting data into table "ideas" */
export type TIdeas_Insert_Input = {
  additional_information?: Maybe<Scalars['String']>;
  business_plan?: Maybe<Scalars['String']>;
  competitors?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_preview?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  idea_user?: Maybe<TUsers_Obj_Rel_Insert_Input>;
  idea_votes?: Maybe<TIdea_Votes_Arr_Rel_Insert_Input>;
  is_published?: Maybe<Scalars['Boolean']>;
  mission_statement?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TIdeas_Max_Fields = {
  __typename?: 'ideas_max_fields';
  additional_information?: Maybe<Scalars['String']>;
  business_plan?: Maybe<Scalars['String']>;
  competitors?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  description_preview?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mission_statement?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "ideas" */
export type TIdeas_Max_Order_By = {
  additional_information?: Maybe<TOrder_By>;
  business_plan?: Maybe<TOrder_By>;
  competitors?: Maybe<TOrder_By>;
  created_at?: Maybe<TOrder_By>;
  description?: Maybe<TOrder_By>;
  description_preview?: Maybe<TOrder_By>;
  field?: Maybe<TOrder_By>;
  id?: Maybe<TOrder_By>;
  mission_statement?: Maybe<TOrder_By>;
  name?: Maybe<TOrder_By>;
  status?: Maybe<TOrder_By>;
  team?: Maybe<TOrder_By>;
  updated_at?: Maybe<TOrder_By>;
  user_id?: Maybe<TOrder_By>;
};

/** aggregate min on columns */
export type TIdeas_Min_Fields = {
  __typename?: 'ideas_min_fields';
  additional_information?: Maybe<Scalars['String']>;
  business_plan?: Maybe<Scalars['String']>;
  competitors?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  description_preview?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mission_statement?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "ideas" */
export type TIdeas_Min_Order_By = {
  additional_information?: Maybe<TOrder_By>;
  business_plan?: Maybe<TOrder_By>;
  competitors?: Maybe<TOrder_By>;
  created_at?: Maybe<TOrder_By>;
  description?: Maybe<TOrder_By>;
  description_preview?: Maybe<TOrder_By>;
  field?: Maybe<TOrder_By>;
  id?: Maybe<TOrder_By>;
  mission_statement?: Maybe<TOrder_By>;
  name?: Maybe<TOrder_By>;
  status?: Maybe<TOrder_By>;
  team?: Maybe<TOrder_By>;
  updated_at?: Maybe<TOrder_By>;
  user_id?: Maybe<TOrder_By>;
};

/** response of any mutation on the table "ideas" */
export type TIdeas_Mutation_Response = {
  __typename?: 'ideas_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TIdeas>;
};

/** input type for inserting object relation for remote table "ideas" */
export type TIdeas_Obj_Rel_Insert_Input = {
  data: TIdeas_Insert_Input;
  on_conflict?: Maybe<TIdeas_On_Conflict>;
};

/** on conflict condition type for table "ideas" */
export type TIdeas_On_Conflict = {
  constraint: TIdeas_Constraint;
  update_columns: Array<TIdeas_Update_Column>;
  where?: Maybe<TIdeas_Bool_Exp>;
};

/** ordering options when selecting data from "ideas" */
export type TIdeas_Order_By = {
  additional_information?: Maybe<TOrder_By>;
  business_plan?: Maybe<TOrder_By>;
  competitors?: Maybe<TOrder_By>;
  created_at?: Maybe<TOrder_By>;
  description?: Maybe<TOrder_By>;
  description_preview?: Maybe<TOrder_By>;
  field?: Maybe<TOrder_By>;
  id?: Maybe<TOrder_By>;
  idea_user?: Maybe<TUsers_Order_By>;
  idea_votes_aggregate?: Maybe<TIdea_Votes_Aggregate_Order_By>;
  is_published?: Maybe<TOrder_By>;
  mission_statement?: Maybe<TOrder_By>;
  name?: Maybe<TOrder_By>;
  status?: Maybe<TOrder_By>;
  team?: Maybe<TOrder_By>;
  updated_at?: Maybe<TOrder_By>;
  user_id?: Maybe<TOrder_By>;
};

/** primary key columns input for table: "ideas" */
export type TIdeas_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ideas" */
export type TIdeas_Select_Column =
  /** column name */
  | 'additional_information'
  /** column name */
  | 'business_plan'
  /** column name */
  | 'competitors'
  /** column name */
  | 'created_at'
  /** column name */
  | 'description'
  /** column name */
  | 'description_preview'
  /** column name */
  | 'field'
  /** column name */
  | 'id'
  /** column name */
  | 'is_published'
  /** column name */
  | 'mission_statement'
  /** column name */
  | 'name'
  /** column name */
  | 'status'
  /** column name */
  | 'team'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

/** input type for updating data in table "ideas" */
export type TIdeas_Set_Input = {
  additional_information?: Maybe<Scalars['String']>;
  business_plan?: Maybe<Scalars['String']>;
  competitors?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  description_preview?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  is_published?: Maybe<Scalars['Boolean']>;
  mission_statement?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "ideas" */
export type TIdeas_Update_Column =
  /** column name */
  | 'additional_information'
  /** column name */
  | 'business_plan'
  /** column name */
  | 'competitors'
  /** column name */
  | 'created_at'
  /** column name */
  | 'description'
  /** column name */
  | 'description_preview'
  /** column name */
  | 'field'
  /** column name */
  | 'is_published'
  /** column name */
  | 'mission_statement'
  /** column name */
  | 'name'
  /** column name */
  | 'status'
  /** column name */
  | 'team'
  /** column name */
  | 'updated_at';

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type TJsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type TMutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "idea_votes" */
  delete_idea_votes?: Maybe<TIdea_Votes_Mutation_Response>;
  /** delete single row from the table: "idea_votes" */
  delete_idea_votes_by_pk?: Maybe<TIdea_Votes>;
  /** delete data from the table: "ideas" */
  delete_ideas?: Maybe<TIdeas_Mutation_Response>;
  /** delete single row from the table: "ideas" */
  delete_ideas_by_pk?: Maybe<TIdeas>;
  /** insert data into the table: "activity" */
  insert_activity?: Maybe<TActivity_Mutation_Response>;
  /** insert a single row into the table: "activity" */
  insert_activity_one?: Maybe<TActivity>;
  /** insert data into the table: "idea_votes" */
  insert_idea_votes?: Maybe<TIdea_Votes_Mutation_Response>;
  /** insert a single row into the table: "idea_votes" */
  insert_idea_votes_one?: Maybe<TIdea_Votes>;
  /** insert data into the table: "ideas" */
  insert_ideas?: Maybe<TIdeas_Mutation_Response>;
  /** insert a single row into the table: "ideas" */
  insert_ideas_one?: Maybe<TIdeas>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<TUsers_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<TUsers>;
  /** update data of the table: "activity" */
  update_activity?: Maybe<TActivity_Mutation_Response>;
  /** update single row of the table: "activity" */
  update_activity_by_pk?: Maybe<TActivity>;
  /** update data of the table: "idea_votes" */
  update_idea_votes?: Maybe<TIdea_Votes_Mutation_Response>;
  /** update single row of the table: "idea_votes" */
  update_idea_votes_by_pk?: Maybe<TIdea_Votes>;
  /** update data of the table: "ideas" */
  update_ideas?: Maybe<TIdeas_Mutation_Response>;
  /** update single row of the table: "ideas" */
  update_ideas_by_pk?: Maybe<TIdeas>;
  /** update data of the table: "user_profile" */
  update_user_profile?: Maybe<TUser_Profile_Mutation_Response>;
  /** update single row of the table: "user_profile" */
  update_user_profile_by_pk?: Maybe<TUser_Profile>;
  /** update data of the table: "users" */
  update_users?: Maybe<TUsers_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<TUsers>;
};


/** mutation root */
export type TMutation_RootDelete_Idea_VotesArgs = {
  where: TIdea_Votes_Bool_Exp;
};


/** mutation root */
export type TMutation_RootDelete_Idea_Votes_By_PkArgs = {
  idea_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
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
export type TMutation_RootInsert_ActivityArgs = {
  objects: Array<TActivity_Insert_Input>;
  on_conflict?: Maybe<TActivity_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Activity_OneArgs = {
  object: TActivity_Insert_Input;
  on_conflict?: Maybe<TActivity_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Idea_VotesArgs = {
  objects: Array<TIdea_Votes_Insert_Input>;
  on_conflict?: Maybe<TIdea_Votes_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Idea_Votes_OneArgs = {
  object: TIdea_Votes_Insert_Input;
  on_conflict?: Maybe<TIdea_Votes_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_IdeasArgs = {
  objects: Array<TIdeas_Insert_Input>;
  on_conflict?: Maybe<TIdeas_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Ideas_OneArgs = {
  object: TIdeas_Insert_Input;
  on_conflict?: Maybe<TIdeas_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_UsersArgs = {
  objects: Array<TUsers_Insert_Input>;
  on_conflict?: Maybe<TUsers_On_Conflict>;
};


/** mutation root */
export type TMutation_RootInsert_Users_OneArgs = {
  object: TUsers_Insert_Input;
  on_conflict?: Maybe<TUsers_On_Conflict>;
};


/** mutation root */
export type TMutation_RootUpdate_ActivityArgs = {
  _set?: Maybe<TActivity_Set_Input>;
  where: TActivity_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Activity_By_PkArgs = {
  _set?: Maybe<TActivity_Set_Input>;
  pk_columns: TActivity_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_Idea_VotesArgs = {
  _inc?: Maybe<TIdea_Votes_Inc_Input>;
  _set?: Maybe<TIdea_Votes_Set_Input>;
  where: TIdea_Votes_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Idea_Votes_By_PkArgs = {
  _inc?: Maybe<TIdea_Votes_Inc_Input>;
  _set?: Maybe<TIdea_Votes_Set_Input>;
  pk_columns: TIdea_Votes_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_IdeasArgs = {
  _set?: Maybe<TIdeas_Set_Input>;
  where: TIdeas_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Ideas_By_PkArgs = {
  _set?: Maybe<TIdeas_Set_Input>;
  pk_columns: TIdeas_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_User_ProfileArgs = {
  _append?: Maybe<TUser_Profile_Append_Input>;
  _delete_at_path?: Maybe<TUser_Profile_Delete_At_Path_Input>;
  _delete_elem?: Maybe<TUser_Profile_Delete_Elem_Input>;
  _delete_key?: Maybe<TUser_Profile_Delete_Key_Input>;
  _inc?: Maybe<TUser_Profile_Inc_Input>;
  _prepend?: Maybe<TUser_Profile_Prepend_Input>;
  _set?: Maybe<TUser_Profile_Set_Input>;
  where: TUser_Profile_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_User_Profile_By_PkArgs = {
  _append?: Maybe<TUser_Profile_Append_Input>;
  _delete_at_path?: Maybe<TUser_Profile_Delete_At_Path_Input>;
  _delete_elem?: Maybe<TUser_Profile_Delete_Elem_Input>;
  _delete_key?: Maybe<TUser_Profile_Delete_Key_Input>;
  _inc?: Maybe<TUser_Profile_Inc_Input>;
  _prepend?: Maybe<TUser_Profile_Prepend_Input>;
  _set?: Maybe<TUser_Profile_Set_Input>;
  pk_columns: TUser_Profile_Pk_Columns_Input;
};


/** mutation root */
export type TMutation_RootUpdate_UsersArgs = {
  _set?: Maybe<TUsers_Set_Input>;
  where: TUsers_Bool_Exp;
};


/** mutation root */
export type TMutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<TUsers_Set_Input>;
  pk_columns: TUsers_Pk_Columns_Input;
};

/** column ordering options */
export type TOrder_By =
  /** in the ascending order, nulls last */
  | 'asc'
  /** in the ascending order, nulls first */
  | 'asc_nulls_first'
  /** in the ascending order, nulls last */
  | 'asc_nulls_last'
  /** in the descending order, nulls first */
  | 'desc'
  /** in the descending order, nulls first */
  | 'desc_nulls_first'
  /** in the descending order, nulls last */
  | 'desc_nulls_last';

/** query root */
export type TQuery_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "activity" */
  activity: Array<TActivity>;
  /** fetch aggregated fields from the table: "activity" */
  activity_aggregate: TActivity_Aggregate;
  /** fetch data from the table: "activity" using primary key columns */
  activity_by_pk?: Maybe<TActivity>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<TAuth_Accounts>;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<TAuth_Accounts>;
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
  /** fetch data from the table: "ideas" */
  ideas: Array<TIdeas>;
  /** fetch aggregated fields from the table: "ideas" */
  ideas_aggregate: TIdeas_Aggregate;
  /** fetch data from the table: "ideas" using primary key columns */
  ideas_by_pk?: Maybe<TIdeas>;
  /** fetch data from the table: "user_profile" */
  user_profile: Array<TUser_Profile>;
  /** fetch data from the table: "user_profile" using primary key columns */
  user_profile_by_pk?: Maybe<TUser_Profile>;
  /** fetch data from the table: "users" */
  users: Array<TUsers>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<TUsers>;
};


/** query root */
export type TQuery_RootActivityArgs = {
  distinct_on?: Maybe<Array<TActivity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TActivity_Order_By>>;
  where?: Maybe<TActivity_Bool_Exp>;
};


/** query root */
export type TQuery_RootActivity_AggregateArgs = {
  distinct_on?: Maybe<Array<TActivity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TActivity_Order_By>>;
  where?: Maybe<TActivity_Bool_Exp>;
};


/** query root */
export type TQuery_RootActivity_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type TQuery_RootAuth_AccountsArgs = {
  distinct_on?: Maybe<Array<TAuth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TAuth_Accounts_Order_By>>;
  where?: Maybe<TAuth_Accounts_Bool_Exp>;
};


/** query root */
export type TQuery_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type TQuery_RootIdea_PreviewArgs = {
  distinct_on?: Maybe<Array<TIdea_Preview_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TIdea_Preview_Order_By>>;
  where?: Maybe<TIdea_Preview_Bool_Exp>;
};


/** query root */
export type TQuery_RootIdea_Preview_AggregateArgs = {
  distinct_on?: Maybe<Array<TIdea_Preview_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TIdea_Preview_Order_By>>;
  where?: Maybe<TIdea_Preview_Bool_Exp>;
};


/** query root */
export type TQuery_RootIdea_VotesArgs = {
  distinct_on?: Maybe<Array<TIdea_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TIdea_Votes_Order_By>>;
  where?: Maybe<TIdea_Votes_Bool_Exp>;
};


/** query root */
export type TQuery_RootIdea_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<TIdea_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TIdea_Votes_Order_By>>;
  where?: Maybe<TIdea_Votes_Bool_Exp>;
};


/** query root */
export type TQuery_RootIdea_Votes_By_PkArgs = {
  idea_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** query root */
export type TQuery_RootIdeasArgs = {
  distinct_on?: Maybe<Array<TIdeas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TIdeas_Order_By>>;
  where?: Maybe<TIdeas_Bool_Exp>;
};


/** query root */
export type TQuery_RootIdeas_AggregateArgs = {
  distinct_on?: Maybe<Array<TIdeas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TIdeas_Order_By>>;
  where?: Maybe<TIdeas_Bool_Exp>;
};


/** query root */
export type TQuery_RootIdeas_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type TQuery_RootUser_ProfileArgs = {
  distinct_on?: Maybe<Array<TUser_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TUser_Profile_Order_By>>;
  where?: Maybe<TUser_Profile_Bool_Exp>;
};


/** query root */
export type TQuery_RootUser_Profile_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type TQuery_RootUsersArgs = {
  distinct_on?: Maybe<Array<TUsers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TUsers_Order_By>>;
  where?: Maybe<TUsers_Bool_Exp>;
};


/** query root */
export type TQuery_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type TSubscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "activity" */
  activity: Array<TActivity>;
  /** fetch aggregated fields from the table: "activity" */
  activity_aggregate: TActivity_Aggregate;
  /** fetch data from the table: "activity" using primary key columns */
  activity_by_pk?: Maybe<TActivity>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<TAuth_Accounts>;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<TAuth_Accounts>;
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
  /** fetch data from the table: "ideas" */
  ideas: Array<TIdeas>;
  /** fetch aggregated fields from the table: "ideas" */
  ideas_aggregate: TIdeas_Aggregate;
  /** fetch data from the table: "ideas" using primary key columns */
  ideas_by_pk?: Maybe<TIdeas>;
  /** fetch data from the table: "user_profile" */
  user_profile: Array<TUser_Profile>;
  /** fetch data from the table: "user_profile" using primary key columns */
  user_profile_by_pk?: Maybe<TUser_Profile>;
  /** fetch data from the table: "users" */
  users: Array<TUsers>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<TUsers>;
};


/** subscription root */
export type TSubscription_RootActivityArgs = {
  distinct_on?: Maybe<Array<TActivity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TActivity_Order_By>>;
  where?: Maybe<TActivity_Bool_Exp>;
};


/** subscription root */
export type TSubscription_RootActivity_AggregateArgs = {
  distinct_on?: Maybe<Array<TActivity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TActivity_Order_By>>;
  where?: Maybe<TActivity_Bool_Exp>;
};


/** subscription root */
export type TSubscription_RootActivity_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type TSubscription_RootAuth_AccountsArgs = {
  distinct_on?: Maybe<Array<TAuth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TAuth_Accounts_Order_By>>;
  where?: Maybe<TAuth_Accounts_Bool_Exp>;
};


/** subscription root */
export type TSubscription_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type TSubscription_RootIdea_PreviewArgs = {
  distinct_on?: Maybe<Array<TIdea_Preview_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TIdea_Preview_Order_By>>;
  where?: Maybe<TIdea_Preview_Bool_Exp>;
};


/** subscription root */
export type TSubscription_RootIdea_Preview_AggregateArgs = {
  distinct_on?: Maybe<Array<TIdea_Preview_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TIdea_Preview_Order_By>>;
  where?: Maybe<TIdea_Preview_Bool_Exp>;
};


/** subscription root */
export type TSubscription_RootIdea_VotesArgs = {
  distinct_on?: Maybe<Array<TIdea_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TIdea_Votes_Order_By>>;
  where?: Maybe<TIdea_Votes_Bool_Exp>;
};


/** subscription root */
export type TSubscription_RootIdea_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<TIdea_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TIdea_Votes_Order_By>>;
  where?: Maybe<TIdea_Votes_Bool_Exp>;
};


/** subscription root */
export type TSubscription_RootIdea_Votes_By_PkArgs = {
  idea_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** subscription root */
export type TSubscription_RootIdeasArgs = {
  distinct_on?: Maybe<Array<TIdeas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TIdeas_Order_By>>;
  where?: Maybe<TIdeas_Bool_Exp>;
};


/** subscription root */
export type TSubscription_RootIdeas_AggregateArgs = {
  distinct_on?: Maybe<Array<TIdeas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TIdeas_Order_By>>;
  where?: Maybe<TIdeas_Bool_Exp>;
};


/** subscription root */
export type TSubscription_RootIdeas_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type TSubscription_RootUser_ProfileArgs = {
  distinct_on?: Maybe<Array<TUser_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TUser_Profile_Order_By>>;
  where?: Maybe<TUser_Profile_Bool_Exp>;
};


/** subscription root */
export type TSubscription_RootUser_Profile_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type TSubscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<TUsers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TUsers_Order_By>>;
  where?: Maybe<TUsers_Bool_Exp>;
};


/** subscription root */
export type TSubscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type TTimestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type TTimestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/**
 * User profile table
 *
 *
 * columns and relationships of "user_profile"
 *
 */
export type TUser_Profile = {
  __typename?: 'user_profile';
  availability?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
  business_description?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamp'];
  facebook?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  industries?: Maybe<Scalars['jsonb']>;
  instagram?: Maybe<Scalars['String']>;
  is_complete?: Maybe<Scalars['Boolean']>;
  linkedin?: Maybe<Scalars['String']>;
  resume?: Maybe<Scalars['String']>;
  skills?: Maybe<Scalars['jsonb']>;
  specialist_industry?: Maybe<Scalars['String']>;
  startups?: Maybe<Scalars['Int']>;
  statement?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user?: Maybe<TUsers>;
  user_id?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};


/**
 * User profile table
 *
 *
 * columns and relationships of "user_profile"
 *
 */
export type TUser_ProfileIndustriesArgs = {
  path?: Maybe<Scalars['String']>;
};


/**
 * User profile table
 *
 *
 * columns and relationships of "user_profile"
 *
 */
export type TUser_ProfileSkillsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type TUser_Profile_Append_Input = {
  industries?: Maybe<Scalars['jsonb']>;
  skills?: Maybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "user_profile". All fields are combined with a logical 'AND'. */
export type TUser_Profile_Bool_Exp = {
  _and?: Maybe<Array<Maybe<TUser_Profile_Bool_Exp>>>;
  _not?: Maybe<TUser_Profile_Bool_Exp>;
  _or?: Maybe<Array<Maybe<TUser_Profile_Bool_Exp>>>;
  availability?: Maybe<TInt_Comparison_Exp>;
  background?: Maybe<TString_Comparison_Exp>;
  business_description?: Maybe<TString_Comparison_Exp>;
  created_at?: Maybe<TTimestamp_Comparison_Exp>;
  facebook?: Maybe<TString_Comparison_Exp>;
  id?: Maybe<TUuid_Comparison_Exp>;
  industries?: Maybe<TJsonb_Comparison_Exp>;
  instagram?: Maybe<TString_Comparison_Exp>;
  is_complete?: Maybe<TBoolean_Comparison_Exp>;
  linkedin?: Maybe<TString_Comparison_Exp>;
  resume?: Maybe<TString_Comparison_Exp>;
  skills?: Maybe<TJsonb_Comparison_Exp>;
  specialist_industry?: Maybe<TString_Comparison_Exp>;
  startups?: Maybe<TInt_Comparison_Exp>;
  statement?: Maybe<TString_Comparison_Exp>;
  status?: Maybe<TString_Comparison_Exp>;
  twitter?: Maybe<TString_Comparison_Exp>;
  updated_at?: Maybe<TTimestamptz_Comparison_Exp>;
  user?: Maybe<TUsers_Bool_Exp>;
  user_id?: Maybe<TUuid_Comparison_Exp>;
  website?: Maybe<TString_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_profile" */
export type TUser_Profile_Constraint =
  /** unique or primary key constraint */
  | 'user_profile_pkey'
  /** unique or primary key constraint */
  | 'user_profile_user_id_key';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type TUser_Profile_Delete_At_Path_Input = {
  industries?: Maybe<Array<Maybe<Scalars['String']>>>;
  skills?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type TUser_Profile_Delete_Elem_Input = {
  industries?: Maybe<Scalars['Int']>;
  skills?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type TUser_Profile_Delete_Key_Input = {
  industries?: Maybe<Scalars['String']>;
  skills?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "user_profile" */
export type TUser_Profile_Inc_Input = {
  availability?: Maybe<Scalars['Int']>;
  startups?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "user_profile" */
export type TUser_Profile_Mutation_Response = {
  __typename?: 'user_profile_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TUser_Profile>;
};

/** on conflict condition type for table "user_profile" */
export type TUser_Profile_On_Conflict = {
  constraint: TUser_Profile_Constraint;
  update_columns: Array<TUser_Profile_Update_Column>;
  where?: Maybe<TUser_Profile_Bool_Exp>;
};

/** ordering options when selecting data from "user_profile" */
export type TUser_Profile_Order_By = {
  availability?: Maybe<TOrder_By>;
  background?: Maybe<TOrder_By>;
  business_description?: Maybe<TOrder_By>;
  created_at?: Maybe<TOrder_By>;
  facebook?: Maybe<TOrder_By>;
  id?: Maybe<TOrder_By>;
  industries?: Maybe<TOrder_By>;
  instagram?: Maybe<TOrder_By>;
  is_complete?: Maybe<TOrder_By>;
  linkedin?: Maybe<TOrder_By>;
  resume?: Maybe<TOrder_By>;
  skills?: Maybe<TOrder_By>;
  specialist_industry?: Maybe<TOrder_By>;
  startups?: Maybe<TOrder_By>;
  statement?: Maybe<TOrder_By>;
  status?: Maybe<TOrder_By>;
  twitter?: Maybe<TOrder_By>;
  updated_at?: Maybe<TOrder_By>;
  user?: Maybe<TUsers_Order_By>;
  user_id?: Maybe<TOrder_By>;
  website?: Maybe<TOrder_By>;
};

/** primary key columns input for table: "user_profile" */
export type TUser_Profile_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type TUser_Profile_Prepend_Input = {
  industries?: Maybe<Scalars['jsonb']>;
  skills?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "user_profile" */
export type TUser_Profile_Select_Column =
  /** column name */
  | 'availability'
  /** column name */
  | 'background'
  /** column name */
  | 'business_description'
  /** column name */
  | 'created_at'
  /** column name */
  | 'facebook'
  /** column name */
  | 'id'
  /** column name */
  | 'industries'
  /** column name */
  | 'instagram'
  /** column name */
  | 'is_complete'
  /** column name */
  | 'linkedin'
  /** column name */
  | 'resume'
  /** column name */
  | 'skills'
  /** column name */
  | 'specialist_industry'
  /** column name */
  | 'startups'
  /** column name */
  | 'statement'
  /** column name */
  | 'status'
  /** column name */
  | 'twitter'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id'
  /** column name */
  | 'website';

/** input type for updating data in table "user_profile" */
export type TUser_Profile_Set_Input = {
  availability?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
  business_description?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  facebook?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  industries?: Maybe<Scalars['jsonb']>;
  instagram?: Maybe<Scalars['String']>;
  is_complete?: Maybe<Scalars['Boolean']>;
  linkedin?: Maybe<Scalars['String']>;
  resume?: Maybe<Scalars['String']>;
  skills?: Maybe<Scalars['jsonb']>;
  specialist_industry?: Maybe<Scalars['String']>;
  startups?: Maybe<Scalars['Int']>;
  statement?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  website?: Maybe<Scalars['String']>;
};

/** update columns of table "user_profile" */
export type TUser_Profile_Update_Column =
  /** column name */
  | 'availability'
  /** column name */
  | 'background'
  /** column name */
  | 'business_description'
  /** column name */
  | 'created_at'
  /** column name */
  | 'facebook'
  /** column name */
  | 'id'
  /** column name */
  | 'industries'
  /** column name */
  | 'instagram'
  /** column name */
  | 'is_complete'
  /** column name */
  | 'linkedin'
  /** column name */
  | 'resume'
  /** column name */
  | 'skills'
  /** column name */
  | 'specialist_industry'
  /** column name */
  | 'startups'
  /** column name */
  | 'statement'
  /** column name */
  | 'status'
  /** column name */
  | 'twitter'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'website';

/** columns and relationships of "users" */
export type TUsers = {
  __typename?: 'users';
  /** An object relationship */
  account?: Maybe<TAuth_Accounts>;
  avatar_url?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  display_name?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  idea_votes: Array<TIdea_Votes>;
  /** An aggregated array relationship */
  idea_votes_aggregate: TIdea_Votes_Aggregate;
  last_name?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  user_activities: Array<TActivity>;
  /** An aggregated array relationship */
  user_activities_aggregate: TActivity_Aggregate;
  /** An object relationship */
  user_profile?: Maybe<TUser_Profile>;
  user_type?: Maybe<Scalars['String']>;
};


/** columns and relationships of "users" */
export type TUsersIdea_VotesArgs = {
  distinct_on?: Maybe<Array<TIdea_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TIdea_Votes_Order_By>>;
  where?: Maybe<TIdea_Votes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type TUsersIdea_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<TIdea_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TIdea_Votes_Order_By>>;
  where?: Maybe<TIdea_Votes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type TUsersUser_ActivitiesArgs = {
  distinct_on?: Maybe<Array<TActivity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TActivity_Order_By>>;
  where?: Maybe<TActivity_Bool_Exp>;
};


/** columns and relationships of "users" */
export type TUsersUser_Activities_AggregateArgs = {
  distinct_on?: Maybe<Array<TActivity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TActivity_Order_By>>;
  where?: Maybe<TActivity_Bool_Exp>;
};

/** input type for inserting array relation for remote table "users" */
export type TUsers_Arr_Rel_Insert_Input = {
  data: Array<TUsers_Insert_Input>;
  on_conflict?: Maybe<TUsers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type TUsers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<TUsers_Bool_Exp>>>;
  _not?: Maybe<TUsers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<TUsers_Bool_Exp>>>;
  account?: Maybe<TAuth_Accounts_Bool_Exp>;
  avatar_url?: Maybe<TString_Comparison_Exp>;
  country?: Maybe<TString_Comparison_Exp>;
  created_at?: Maybe<TTimestamptz_Comparison_Exp>;
  display_name?: Maybe<TString_Comparison_Exp>;
  first_name?: Maybe<TString_Comparison_Exp>;
  id?: Maybe<TUuid_Comparison_Exp>;
  idea_votes?: Maybe<TIdea_Votes_Bool_Exp>;
  last_name?: Maybe<TString_Comparison_Exp>;
  updated_at?: Maybe<TTimestamptz_Comparison_Exp>;
  user_activities?: Maybe<TActivity_Bool_Exp>;
  user_profile?: Maybe<TUser_Profile_Bool_Exp>;
  user_type?: Maybe<TString_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export type TUsers_Constraint =
  /** unique or primary key constraint */
  | 'users_pkey';

/** input type for inserting data into table "users" */
export type TUsers_Insert_Input = {
  country?: Maybe<Scalars['String']>;
  idea_votes?: Maybe<TIdea_Votes_Arr_Rel_Insert_Input>;
  user_activities?: Maybe<TActivity_Arr_Rel_Insert_Input>;
};

/** response of any mutation on the table "users" */
export type TUsers_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TUsers>;
};

/** input type for inserting object relation for remote table "users" */
export type TUsers_Obj_Rel_Insert_Input = {
  data: TUsers_Insert_Input;
  on_conflict?: Maybe<TUsers_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type TUsers_On_Conflict = {
  constraint: TUsers_Constraint;
  update_columns: Array<TUsers_Update_Column>;
  where?: Maybe<TUsers_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type TUsers_Order_By = {
  account?: Maybe<TAuth_Accounts_Order_By>;
  avatar_url?: Maybe<TOrder_By>;
  country?: Maybe<TOrder_By>;
  created_at?: Maybe<TOrder_By>;
  display_name?: Maybe<TOrder_By>;
  first_name?: Maybe<TOrder_By>;
  id?: Maybe<TOrder_By>;
  idea_votes_aggregate?: Maybe<TIdea_Votes_Aggregate_Order_By>;
  last_name?: Maybe<TOrder_By>;
  updated_at?: Maybe<TOrder_By>;
  user_activities_aggregate?: Maybe<TActivity_Aggregate_Order_By>;
  user_profile?: Maybe<TUser_Profile_Order_By>;
  user_type?: Maybe<TOrder_By>;
};

/** primary key columns input for table: "users" */
export type TUsers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export type TUsers_Select_Column =
  /** column name */
  | 'avatar_url'
  /** column name */
  | 'country'
  /** column name */
  | 'created_at'
  /** column name */
  | 'display_name'
  /** column name */
  | 'first_name'
  /** column name */
  | 'id'
  /** column name */
  | 'last_name'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_type';

/** input type for updating data in table "users" */
export type TUsers_Set_Input = {
  avatar_url?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  user_type?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export type TUsers_Update_Column =
  /** column name */
  | 'avatar_url'
  /** column name */
  | 'country'
  /** column name */
  | 'display_name'
  /** column name */
  | 'first_name'
  /** column name */
  | 'last_name'
  /** column name */
  | 'user_type';

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type TUuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type TResumeFragmentFragment = { __typename?: 'user_profile', id: any, resume?: string | null | undefined };

export type TSocialMediaFragmentFragment = { __typename?: 'user_profile', id: any, linkedin?: string | null | undefined, twitter?: string | null | undefined, instagram?: string | null | undefined, facebook?: string | null | undefined, website?: string | null | undefined };

export type TExperienceFragmentFragment = { __typename?: 'user_profile', id: any, background?: string | null | undefined, statement?: string | null | undefined, status?: string | null | undefined, availability?: number | null | undefined, startups?: number | null | undefined, skills?: any | null | undefined, resume?: string | null | undefined, specialist_industry?: string | null | undefined, business_description?: string | null | undefined, is_complete?: boolean | null | undefined };

export type TIdeaFragmentFragment = { __typename?: 'ideas', id: any, name: string, description: string, field: string, mission_statement?: string | null | undefined, competitors?: string | null | undefined, team?: string | null | undefined, additional_information?: string | null | undefined, is_published?: boolean | null | undefined, user_id: any, status?: string | null | undefined };

export type TGetUserActivitiesQueryVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type TGetUserActivitiesQuery = { activity: Array<{ __typename?: 'activity', idea_id?: any | null | undefined, event: string, description: string, url?: string | null | undefined, type?: string | null | undefined, created_at?: any | null | undefined }> };

export type TCreateIdeaMutationVariables = Exact<{
  idea: TIdeas_Insert_Input;
}>;


export type TCreateIdeaMutation = { idea?: { __typename?: 'ideas', id: any } | null | undefined };

export type TUpdateIdeaMutationVariables = Exact<{
  idea: TIdeas_Set_Input;
  id: Scalars['uuid'];
}>;


export type TUpdateIdeaMutation = { update_ideas_by_pk?: { __typename?: 'ideas', id: any, name: string, description: string, field: string, mission_statement?: string | null | undefined, competitors?: string | null | undefined, team?: string | null | undefined, additional_information?: string | null | undefined, is_published?: boolean | null | undefined, user_id: any, status?: string | null | undefined } | null | undefined };

export type TGetUserIdeasQueryVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type TGetUserIdeasQuery = { ideas: Array<{ __typename?: 'ideas', name: string, description: string, field: string, updated_at?: any | null | undefined, is_published?: boolean | null | undefined, user_id: any, id: any }> };

export type TDeleteIdeaMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type TDeleteIdeaMutation = { delete_ideas_by_pk?: { __typename?: 'ideas', id: any } | null | undefined };

export type TGetIdeasQueryVariables = Exact<{
  where?: Maybe<TIdea_Preview_Bool_Exp>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TIdea_Preview_Order_By> | TIdea_Preview_Order_By>;
  userId: Scalars['uuid'];
}>;


export type TGetIdeasQuery = { idea_preview_aggregate: { __typename?: 'idea_preview_aggregate', aggregate?: { __typename?: 'idea_preview_aggregate_fields', count?: number | null | undefined } | null | undefined }, idea_preview: Array<{ __typename?: 'idea_preview', id?: any | null | undefined, name?: string | null | undefined, preview?: string | null | undefined, field?: string | null | undefined, status?: string | null | undefined, created_at?: any | null | undefined, is_new?: boolean | null | undefined, idea_votes?: { __typename?: 'idea_votes', idea: { __typename?: 'ideas', idea_votes_aggregate: { __typename?: 'idea_votes_aggregate', aggregate?: { __typename?: 'idea_votes_aggregate_fields', sum?: { __typename?: 'idea_votes_sum_fields', vote_type?: number | null | undefined } | null | undefined } | null | undefined }, idea_votes: Array<{ __typename?: 'idea_votes', vote_type: number }> } } | null | undefined, idea_user?: { __typename?: 'users', first_name?: string | null | undefined, country?: string | null | undefined, id: any, avatar_url?: string | null | undefined } | null | undefined }> };

export type TGetIdeaQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type TGetIdeaQuery = { idea?: { __typename?: 'ideas', id: any, name: string, description: string, field: string, mission_statement?: string | null | undefined, competitors?: string | null | undefined, team?: string | null | undefined, additional_information?: string | null | undefined, is_published?: boolean | null | undefined, user_id: any, status?: string | null | undefined, created_at?: any | null | undefined, idea_user?: { __typename?: 'users', avatar_url?: string | null | undefined, first_name?: string | null | undefined, country?: string | null | undefined, id: any } | null | undefined, idea_votes_aggregate: { __typename?: 'idea_votes_aggregate', aggregate?: { __typename?: 'idea_votes_aggregate_fields', sum?: { __typename?: 'idea_votes_sum_fields', vote_type?: number | null | undefined } | null | undefined } | null | undefined } } | null | undefined };

export type TUpsertIdeaVoteMutationVariables = Exact<{
  idea_vote: TIdea_Votes_Insert_Input;
}>;


export type TUpsertIdeaVoteMutation = { insert_idea_votes_one?: { __typename?: 'idea_votes', idea_id: any } | null | undefined };

export type TGetUserSocialsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type TGetUserSocialsQuery = { profile?: { __typename?: 'user_profile', linkedin?: string | null | undefined, twitter?: string | null | undefined, website?: string | null | undefined } | null | undefined };

export type TGetUserQueryVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type TGetUserQuery = { user?: { __typename?: 'users', id: any, last_name?: string | null | undefined, first_name?: string | null | undefined, country?: string | null | undefined, avatar_url?: string | null | undefined, created_at: any, account?: { __typename?: 'auth_accounts', email?: any | null | undefined } | null | undefined, user_profile?: { __typename?: 'user_profile', id: any, is_complete?: boolean | null | undefined } | null | undefined } | null | undefined };

export type TUpdateUserProfileMutationVariables = Exact<{
  id: Scalars['uuid'];
  user_profile: TUser_Profile_Set_Input;
}>;


export type TUpdateUserProfileMutation = { update_user_profile_by_pk?: { __typename?: 'user_profile', id: any, availability?: number | null | undefined, background?: string | null | undefined, linkedin?: string | null | undefined, twitter?: string | null | undefined, instagram?: string | null | undefined, facebook?: string | null | undefined, resume?: string | null | undefined, statement?: string | null | undefined, status?: string | null | undefined, business_description?: string | null | undefined, startups?: number | null | undefined, website?: string | null | undefined, skills?: any | null | undefined, is_complete?: boolean | null | undefined, specialist_industry?: string | null | undefined, updated_at?: any | null | undefined } | null | undefined };

export type TGetUserExperienceQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type TGetUserExperienceQuery = { profile?: { __typename?: 'user_profile', id: any, user_id?: any | null | undefined, background?: string | null | undefined, statement?: string | null | undefined, startups?: number | null | undefined, status?: string | null | undefined, availability?: number | null | undefined, business_description?: string | null | undefined, specialist_industry?: string | null | undefined, skills?: any | null | undefined, resume?: string | null | undefined, linkedin?: string | null | undefined, twitter?: string | null | undefined, instagram?: string | null | undefined, facebook?: string | null | undefined, website?: string | null | undefined, updated_at?: any | null | undefined, is_complete?: boolean | null | undefined } | null | undefined };

export type TUpdateUserExperienceMutationVariables = Exact<{
  id: Scalars['uuid'];
  userExperience: TUser_Profile_Set_Input;
}>;


export type TUpdateUserExperienceMutation = { update_user_profile_by_pk?: { __typename?: 'user_profile', id: any, user_id?: any | null | undefined, background?: string | null | undefined, statement?: string | null | undefined, startups?: number | null | undefined, status?: string | null | undefined, skills?: any | null | undefined, availability?: number | null | undefined, resume?: string | null | undefined, business_description?: string | null | undefined } | null | undefined };

export type TUpdateResumeMutationVariables = Exact<{
  id: Scalars['uuid'];
  resume: TUser_Profile_Set_Input;
}>;


export type TUpdateResumeMutation = { update_user_profile_by_pk?: { __typename?: 'user_profile', id: any, resume?: string | null | undefined } | null | undefined };

export type TUpdateUserPersonalDetailsMutationVariables = Exact<{
  id: Scalars['uuid'];
  userPersonalDetails: TUsers_Set_Input;
}>;


export type TUpdateUserPersonalDetailsMutation = { user?: { __typename?: 'users', first_name?: string | null | undefined, last_name?: string | null | undefined, country?: string | null | undefined, avatar_url?: string | null | undefined } | null | undefined };

export type TUpdateUserAvatarMutationVariables = Exact<{
  id: Scalars['uuid'];
  avatarUrl: TUsers_Set_Input;
}>;


export type TUpdateUserAvatarMutation = { user?: { __typename?: 'users', avatar_url?: string | null | undefined } | null | undefined };

export const ResumeFragmentFragmentDoc = gql`
    fragment ResumeFragment on user_profile {
  id
  resume
}
    `;
export const SocialMediaFragmentFragmentDoc = gql`
    fragment SocialMediaFragment on user_profile {
  id
  linkedin
  twitter
  instagram
  facebook
  website
}
    `;
export const ExperienceFragmentFragmentDoc = gql`
    fragment ExperienceFragment on user_profile {
  id
  background
  statement
  status
  availability
  startups
  skills
  resume
  specialist_industry
  business_description
  is_complete
}
    `;
export const IdeaFragmentFragmentDoc = gql`
    fragment IdeaFragment on ideas {
  id
  name
  description
  field
  mission_statement
  competitors
  team
  additional_information
  is_published
  user_id
  status
}
    `;
export const GetUserActivitiesDocument = gql`
    query getUserActivities($user_id: uuid!) {
  activity(where: {user_id: {_eq: $user_id}}) {
    idea_id
    event
    description
    url
    type
    created_at
  }
}
    `;

/**
 * __useGetUserActivitiesQuery__
 *
 * To run a query within a React component, call `useGetUserActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserActivitiesQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetUserActivitiesQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TGetUserActivitiesQuery, TGetUserActivitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TGetUserActivitiesQuery, TGetUserActivitiesQueryVariables>(GetUserActivitiesDocument, options);
      }
export function useGetUserActivitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TGetUserActivitiesQuery, TGetUserActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TGetUserActivitiesQuery, TGetUserActivitiesQueryVariables>(GetUserActivitiesDocument, options);
        }
export type GetUserActivitiesQueryHookResult = ReturnType<typeof useGetUserActivitiesQuery>;
export type GetUserActivitiesLazyQueryHookResult = ReturnType<typeof useGetUserActivitiesLazyQuery>;
export type GetUserActivitiesQueryResult = Apollo.QueryResult<TGetUserActivitiesQuery, TGetUserActivitiesQueryVariables>;
export const CreateIdeaDocument = gql`
    mutation createIdea($idea: ideas_insert_input!) {
  idea: insert_ideas_one(object: $idea) {
    id
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
    mutation updateIdea($idea: ideas_set_input!, $id: uuid!) {
  update_ideas_by_pk(pk_columns: {id: $id}, _set: $idea) {
    id
    name
    description
    field
    mission_statement
    competitors
    team
    additional_information
    is_published
    user_id
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
export const GetUserIdeasDocument = gql`
    query getUserIdeas($user_id: uuid!) {
  ideas(
    where: {user_id: {_eq: "de0f34ae-8986-4534-b3b7-60d6ce0babb2"}}
    order_by: {updated_at: desc}
  ) {
    name
    description
    field
    updated_at
    is_published
    user_id
    id
  }
}
    `;

/**
 * __useGetUserIdeasQuery__
 *
 * To run a query within a React component, call `useGetUserIdeasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserIdeasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserIdeasQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetUserIdeasQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TGetUserIdeasQuery, TGetUserIdeasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TGetUserIdeasQuery, TGetUserIdeasQueryVariables>(GetUserIdeasDocument, options);
      }
export function useGetUserIdeasLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TGetUserIdeasQuery, TGetUserIdeasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TGetUserIdeasQuery, TGetUserIdeasQueryVariables>(GetUserIdeasDocument, options);
        }
export type GetUserIdeasQueryHookResult = ReturnType<typeof useGetUserIdeasQuery>;
export type GetUserIdeasLazyQueryHookResult = ReturnType<typeof useGetUserIdeasLazyQuery>;
export type GetUserIdeasQueryResult = Apollo.QueryResult<TGetUserIdeasQuery, TGetUserIdeasQueryVariables>;
export const DeleteIdeaDocument = gql`
    mutation deleteIdea($id: uuid!) {
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
export const GetIdeasDocument = gql`
    query getIdeas($where: idea_preview_bool_exp, $limit: Int, $offset: Int, $orderBy: [idea_preview_order_by!], $userId: uuid!) {
  idea_preview_aggregate(where: $where) {
    aggregate {
      count
    }
  }
  idea_preview(where: $where, limit: $limit, offset: $offset, order_by: $orderBy) {
    idea_votes {
      idea {
        idea_votes_aggregate {
          aggregate {
            sum {
              vote_type
            }
          }
        }
        idea_votes(where: {user_id: {_eq: $userId}}) {
          vote_type
        }
      }
    }
    id
    name
    preview
    field
    status
    created_at
    is_new
    idea_user {
      first_name
      country
      id
      avatar_url
    }
  }
}
    `;

/**
 * __useGetIdeasQuery__
 *
 * To run a query within a React component, call `useGetIdeasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIdeasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIdeasQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetIdeasQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TGetIdeasQuery, TGetIdeasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TGetIdeasQuery, TGetIdeasQueryVariables>(GetIdeasDocument, options);
      }
export function useGetIdeasLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TGetIdeasQuery, TGetIdeasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TGetIdeasQuery, TGetIdeasQueryVariables>(GetIdeasDocument, options);
        }
export type GetIdeasQueryHookResult = ReturnType<typeof useGetIdeasQuery>;
export type GetIdeasLazyQueryHookResult = ReturnType<typeof useGetIdeasLazyQuery>;
export type GetIdeasQueryResult = Apollo.QueryResult<TGetIdeasQuery, TGetIdeasQueryVariables>;
export const GetIdeaDocument = gql`
    query getIdea($id: uuid!) {
  idea: ideas_by_pk(id: $id) {
    id
    name
    description
    field
    mission_statement
    competitors
    team
    additional_information
    is_published
    user_id
    status
    created_at
    idea_user {
      avatar_url
      first_name
      country
      id
    }
    idea_votes_aggregate {
      aggregate {
        sum {
          vote_type
        }
      }
    }
  }
}
    `;

/**
 * __useGetIdeaQuery__
 *
 * To run a query within a React component, call `useGetIdeaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIdeaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIdeaQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetIdeaQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TGetIdeaQuery, TGetIdeaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TGetIdeaQuery, TGetIdeaQueryVariables>(GetIdeaDocument, options);
      }
export function useGetIdeaLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TGetIdeaQuery, TGetIdeaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TGetIdeaQuery, TGetIdeaQueryVariables>(GetIdeaDocument, options);
        }
export type GetIdeaQueryHookResult = ReturnType<typeof useGetIdeaQuery>;
export type GetIdeaLazyQueryHookResult = ReturnType<typeof useGetIdeaLazyQuery>;
export type GetIdeaQueryResult = Apollo.QueryResult<TGetIdeaQuery, TGetIdeaQueryVariables>;
export const UpsertIdeaVoteDocument = gql`
    mutation upsertIdeaVote($idea_vote: idea_votes_insert_input!) {
  insert_idea_votes_one(
    object: $idea_vote
    on_conflict: {constraint: idea_votes_pkey, update_columns: vote_type}
  ) {
    idea_id
  }
}
    `;
export type TUpsertIdeaVoteMutationFn = Apollo.MutationFunction<TUpsertIdeaVoteMutation, TUpsertIdeaVoteMutationVariables>;

/**
 * __useUpsertIdeaVoteMutation__
 *
 * To run a mutation, you first call `useUpsertIdeaVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertIdeaVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertIdeaVoteMutation, { data, loading, error }] = useUpsertIdeaVoteMutation({
 *   variables: {
 *      idea_vote: // value for 'idea_vote'
 *   },
 * });
 */
export function useUpsertIdeaVoteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TUpsertIdeaVoteMutation, TUpsertIdeaVoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TUpsertIdeaVoteMutation, TUpsertIdeaVoteMutationVariables>(UpsertIdeaVoteDocument, options);
      }
export type UpsertIdeaVoteMutationHookResult = ReturnType<typeof useUpsertIdeaVoteMutation>;
export type UpsertIdeaVoteMutationResult = Apollo.MutationResult<TUpsertIdeaVoteMutation>;
export type UpsertIdeaVoteMutationOptions = Apollo.BaseMutationOptions<TUpsertIdeaVoteMutation, TUpsertIdeaVoteMutationVariables>;
export const GetUserSocialsDocument = gql`
    query getUserSocials($id: uuid!) {
  profile: user_profile_by_pk(id: $id) {
    linkedin
    twitter
    website
  }
}
    `;

/**
 * __useGetUserSocialsQuery__
 *
 * To run a query within a React component, call `useGetUserSocialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserSocialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserSocialsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserSocialsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TGetUserSocialsQuery, TGetUserSocialsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TGetUserSocialsQuery, TGetUserSocialsQueryVariables>(GetUserSocialsDocument, options);
      }
export function useGetUserSocialsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TGetUserSocialsQuery, TGetUserSocialsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TGetUserSocialsQuery, TGetUserSocialsQueryVariables>(GetUserSocialsDocument, options);
        }
export type GetUserSocialsQueryHookResult = ReturnType<typeof useGetUserSocialsQuery>;
export type GetUserSocialsLazyQueryHookResult = ReturnType<typeof useGetUserSocialsLazyQuery>;
export type GetUserSocialsQueryResult = Apollo.QueryResult<TGetUserSocialsQuery, TGetUserSocialsQueryVariables>;
export const GetUserDocument = gql`
    query getUser($user_id: uuid!) {
  user: users_by_pk(id: $user_id) {
    id
    last_name
    first_name
    country
    avatar_url
    created_at
    account {
      email
    }
    user_profile {
      id
      is_complete
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TGetUserQuery, TGetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TGetUserQuery, TGetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TGetUserQuery, TGetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TGetUserQuery, TGetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<TGetUserQuery, TGetUserQueryVariables>;
export const UpdateUserProfileDocument = gql`
    mutation updateUserProfile($id: uuid!, $user_profile: user_profile_set_input!) {
  update_user_profile_by_pk(pk_columns: {id: $id}, _set: $user_profile) {
    id
    availability
    background
    linkedin
    twitter
    instagram
    facebook
    resume
    statement
    status
    business_description
    startups
    website
    skills
    is_complete
    specialist_industry
    updated_at
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
export const GetUserExperienceDocument = gql`
    query getUserExperience($id: uuid!) {
  profile: user_profile_by_pk(id: $id) {
    id
    user_id
    background
    statement
    startups
    status
    availability
    business_description
    specialist_industry
    skills
    resume
    linkedin
    twitter
    instagram
    facebook
    website
    updated_at
    is_complete
  }
}
    `;

/**
 * __useGetUserExperienceQuery__
 *
 * To run a query within a React component, call `useGetUserExperienceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserExperienceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserExperienceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserExperienceQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TGetUserExperienceQuery, TGetUserExperienceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TGetUserExperienceQuery, TGetUserExperienceQueryVariables>(GetUserExperienceDocument, options);
      }
export function useGetUserExperienceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TGetUserExperienceQuery, TGetUserExperienceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TGetUserExperienceQuery, TGetUserExperienceQueryVariables>(GetUserExperienceDocument, options);
        }
export type GetUserExperienceQueryHookResult = ReturnType<typeof useGetUserExperienceQuery>;
export type GetUserExperienceLazyQueryHookResult = ReturnType<typeof useGetUserExperienceLazyQuery>;
export type GetUserExperienceQueryResult = Apollo.QueryResult<TGetUserExperienceQuery, TGetUserExperienceQueryVariables>;
export const UpdateUserExperienceDocument = gql`
    mutation updateUserExperience($id: uuid!, $userExperience: user_profile_set_input!) {
  update_user_profile_by_pk(pk_columns: {id: $id}, _set: $userExperience) {
    id
    user_id
    background
    statement
    startups
    status
    skills
    availability
    resume
    business_description
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
    mutation updateResume($id: uuid!, $resume: user_profile_set_input!) {
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
    mutation updateUserPersonalDetails($id: uuid!, $userPersonalDetails: users_set_input!) {
  user: update_users_by_pk(pk_columns: {id: $id}, _set: $userPersonalDetails) {
    first_name
    last_name
    country
    avatar_url
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
 *      userPersonalDetails: // value for 'userPersonalDetails'
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
    mutation updateUserAvatar($id: uuid!, $avatarUrl: users_set_input!) {
  user: update_users_by_pk(pk_columns: {id: $id}, _set: $avatarUrl) {
    avatar_url
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
 *      avatarUrl: // value for 'avatarUrl'
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