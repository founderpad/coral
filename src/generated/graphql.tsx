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
  citext: any;
  jsonb: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
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
export type Int_Comparison_Exp = {
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
export type String_Comparison_Exp = {
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
export type Activity = {
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
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "activity" */
export type Activity_Aggregate = {
  __typename?: 'activity_aggregate';
  aggregate?: Maybe<Activity_Aggregate_Fields>;
  nodes: Array<Activity>;
};

/** aggregate fields of "activity" */
export type Activity_Aggregate_Fields = {
  __typename?: 'activity_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Activity_Max_Fields>;
  min?: Maybe<Activity_Min_Fields>;
};


/** aggregate fields of "activity" */
export type Activity_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Activity_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "activity" */
export type Activity_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Activity_Max_Order_By>;
  min?: Maybe<Activity_Min_Order_By>;
};

/** input type for inserting array relation for remote table "activity" */
export type Activity_Arr_Rel_Insert_Input = {
  data: Array<Activity_Insert_Input>;
  on_conflict?: Maybe<Activity_On_Conflict>;
};

/** Boolean expression to filter rows from the table "activity". All fields are combined with a logical 'AND'. */
export type Activity_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Activity_Bool_Exp>>>;
  _not?: Maybe<Activity_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Activity_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  event?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  idea_id?: Maybe<Uuid_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "activity" */
export type Activity_Constraint =
  /** unique or primary key constraint */
  | 'activity_pkey';

/** input type for inserting data into table "activity" */
export type Activity_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  idea_id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Activity_Max_Fields = {
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
export type Activity_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  event?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  idea_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Activity_Min_Fields = {
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
export type Activity_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  event?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  idea_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "activity" */
export type Activity_Mutation_Response = {
  __typename?: 'activity_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Activity>;
};

/** input type for inserting object relation for remote table "activity" */
export type Activity_Obj_Rel_Insert_Input = {
  data: Activity_Insert_Input;
  on_conflict?: Maybe<Activity_On_Conflict>;
};

/** on conflict condition type for table "activity" */
export type Activity_On_Conflict = {
  constraint: Activity_Constraint;
  update_columns: Array<Activity_Update_Column>;
  where?: Maybe<Activity_Bool_Exp>;
};

/** ordering options when selecting data from "activity" */
export type Activity_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  event?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  idea_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "activity" */
export type Activity_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "activity" */
export type Activity_Select_Column =
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
export type Activity_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  idea_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "activity" */
export type Activity_Update_Column =
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
export type Auth_Accounts = {
  __typename?: 'auth_accounts';
  email?: Maybe<Scalars['citext']>;
  /** An object relationship */
  user: Users;
};

/** Boolean expression to filter rows from the table "auth.accounts". All fields are combined with a logical 'AND'. */
export type Auth_Accounts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auth_Accounts_Bool_Exp>>>;
  _not?: Maybe<Auth_Accounts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Auth_Accounts_Bool_Exp>>>;
  email?: Maybe<Citext_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "auth.accounts" */
export type Auth_Accounts_Order_By = {
  email?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
};

/** primary key columns input for table: "auth.accounts" */
export type Auth_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.accounts" */
export type Auth_Accounts_Select_Column =
  /** column name */
  | 'email';

/** expression to compare columns of type citext. All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
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
export type Idea_Preview = {
  __typename?: 'idea_preview';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  idea_user?: Maybe<Users>;
  /** An object relationship */
  idea_votes?: Maybe<Idea_Votes>;
  industry?: Maybe<Scalars['String']>;
  is_new?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "idea_preview" */
export type Idea_Preview_Aggregate = {
  __typename?: 'idea_preview_aggregate';
  aggregate?: Maybe<Idea_Preview_Aggregate_Fields>;
  nodes: Array<Idea_Preview>;
};

/** aggregate fields of "idea_preview" */
export type Idea_Preview_Aggregate_Fields = {
  __typename?: 'idea_preview_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Idea_Preview_Max_Fields>;
  min?: Maybe<Idea_Preview_Min_Fields>;
};


/** aggregate fields of "idea_preview" */
export type Idea_Preview_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Idea_Preview_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "idea_preview" */
export type Idea_Preview_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Idea_Preview_Max_Order_By>;
  min?: Maybe<Idea_Preview_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "idea_preview". All fields are combined with a logical 'AND'. */
export type Idea_Preview_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Idea_Preview_Bool_Exp>>>;
  _not?: Maybe<Idea_Preview_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Idea_Preview_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  idea_user?: Maybe<Users_Bool_Exp>;
  idea_votes?: Maybe<Idea_Votes_Bool_Exp>;
  industry?: Maybe<String_Comparison_Exp>;
  is_new?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  preview?: Maybe<String_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type Idea_Preview_Max_Fields = {
  __typename?: 'idea_preview_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  industry?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "idea_preview" */
export type Idea_Preview_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  industry?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  preview?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Idea_Preview_Min_Fields = {
  __typename?: 'idea_preview_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  industry?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "idea_preview" */
export type Idea_Preview_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  industry?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  preview?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "idea_preview" */
export type Idea_Preview_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  idea_user?: Maybe<Users_Order_By>;
  idea_votes?: Maybe<Idea_Votes_Order_By>;
  industry?: Maybe<Order_By>;
  is_new?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  preview?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "idea_preview" */
export type Idea_Preview_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'industry'
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
export type Idea_Votes = {
  __typename?: 'idea_votes';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  idea: Ideas;
  idea_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
  vote_type: Scalars['Int'];
};

/** aggregated selection of "idea_votes" */
export type Idea_Votes_Aggregate = {
  __typename?: 'idea_votes_aggregate';
  aggregate?: Maybe<Idea_Votes_Aggregate_Fields>;
  nodes: Array<Idea_Votes>;
};

/** aggregate fields of "idea_votes" */
export type Idea_Votes_Aggregate_Fields = {
  __typename?: 'idea_votes_aggregate_fields';
  avg?: Maybe<Idea_Votes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Idea_Votes_Max_Fields>;
  min?: Maybe<Idea_Votes_Min_Fields>;
  stddev?: Maybe<Idea_Votes_Stddev_Fields>;
  stddev_pop?: Maybe<Idea_Votes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Idea_Votes_Stddev_Samp_Fields>;
  sum?: Maybe<Idea_Votes_Sum_Fields>;
  var_pop?: Maybe<Idea_Votes_Var_Pop_Fields>;
  var_samp?: Maybe<Idea_Votes_Var_Samp_Fields>;
  variance?: Maybe<Idea_Votes_Variance_Fields>;
};


/** aggregate fields of "idea_votes" */
export type Idea_Votes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Idea_Votes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "idea_votes" */
export type Idea_Votes_Aggregate_Order_By = {
  avg?: Maybe<Idea_Votes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Idea_Votes_Max_Order_By>;
  min?: Maybe<Idea_Votes_Min_Order_By>;
  stddev?: Maybe<Idea_Votes_Stddev_Order_By>;
  stddev_pop?: Maybe<Idea_Votes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Idea_Votes_Stddev_Samp_Order_By>;
  sum?: Maybe<Idea_Votes_Sum_Order_By>;
  var_pop?: Maybe<Idea_Votes_Var_Pop_Order_By>;
  var_samp?: Maybe<Idea_Votes_Var_Samp_Order_By>;
  variance?: Maybe<Idea_Votes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "idea_votes" */
export type Idea_Votes_Arr_Rel_Insert_Input = {
  data: Array<Idea_Votes_Insert_Input>;
  on_conflict?: Maybe<Idea_Votes_On_Conflict>;
};

/** aggregate avg on columns */
export type Idea_Votes_Avg_Fields = {
  __typename?: 'idea_votes_avg_fields';
  vote_type?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "idea_votes" */
export type Idea_Votes_Avg_Order_By = {
  vote_type?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "idea_votes". All fields are combined with a logical 'AND'. */
export type Idea_Votes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Idea_Votes_Bool_Exp>>>;
  _not?: Maybe<Idea_Votes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Idea_Votes_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  idea?: Maybe<Ideas_Bool_Exp>;
  idea_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  vote_type?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "idea_votes" */
export type Idea_Votes_Constraint =
  /** unique or primary key constraint */
  | 'idea_votes_idea_id_user_id_key'
  /** unique or primary key constraint */
  | 'idea_votes_pkey';

/** input type for incrementing integer column in table "idea_votes" */
export type Idea_Votes_Inc_Input = {
  vote_type?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "idea_votes" */
export type Idea_Votes_Insert_Input = {
  idea?: Maybe<Ideas_Obj_Rel_Insert_Input>;
  idea_id?: Maybe<Scalars['uuid']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  vote_type?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Idea_Votes_Max_Fields = {
  __typename?: 'idea_votes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  idea_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  vote_type?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "idea_votes" */
export type Idea_Votes_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  idea_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  vote_type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Idea_Votes_Min_Fields = {
  __typename?: 'idea_votes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  idea_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  vote_type?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "idea_votes" */
export type Idea_Votes_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  idea_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  vote_type?: Maybe<Order_By>;
};

/** response of any mutation on the table "idea_votes" */
export type Idea_Votes_Mutation_Response = {
  __typename?: 'idea_votes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Idea_Votes>;
};

/** input type for inserting object relation for remote table "idea_votes" */
export type Idea_Votes_Obj_Rel_Insert_Input = {
  data: Idea_Votes_Insert_Input;
  on_conflict?: Maybe<Idea_Votes_On_Conflict>;
};

/** on conflict condition type for table "idea_votes" */
export type Idea_Votes_On_Conflict = {
  constraint: Idea_Votes_Constraint;
  update_columns: Array<Idea_Votes_Update_Column>;
  where?: Maybe<Idea_Votes_Bool_Exp>;
};

/** ordering options when selecting data from "idea_votes" */
export type Idea_Votes_Order_By = {
  created_at?: Maybe<Order_By>;
  idea?: Maybe<Ideas_Order_By>;
  idea_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  vote_type?: Maybe<Order_By>;
};

/** primary key columns input for table: "idea_votes" */
export type Idea_Votes_Pk_Columns_Input = {
  idea_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** select columns of table "idea_votes" */
export type Idea_Votes_Select_Column =
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
export type Idea_Votes_Set_Input = {
  vote_type?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Idea_Votes_Stddev_Fields = {
  __typename?: 'idea_votes_stddev_fields';
  vote_type?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "idea_votes" */
export type Idea_Votes_Stddev_Order_By = {
  vote_type?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Idea_Votes_Stddev_Pop_Fields = {
  __typename?: 'idea_votes_stddev_pop_fields';
  vote_type?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "idea_votes" */
export type Idea_Votes_Stddev_Pop_Order_By = {
  vote_type?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Idea_Votes_Stddev_Samp_Fields = {
  __typename?: 'idea_votes_stddev_samp_fields';
  vote_type?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "idea_votes" */
export type Idea_Votes_Stddev_Samp_Order_By = {
  vote_type?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Idea_Votes_Sum_Fields = {
  __typename?: 'idea_votes_sum_fields';
  vote_type?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "idea_votes" */
export type Idea_Votes_Sum_Order_By = {
  vote_type?: Maybe<Order_By>;
};

/** update columns of table "idea_votes" */
export type Idea_Votes_Update_Column =
  /** column name */
  | 'vote_type';

/** aggregate var_pop on columns */
export type Idea_Votes_Var_Pop_Fields = {
  __typename?: 'idea_votes_var_pop_fields';
  vote_type?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "idea_votes" */
export type Idea_Votes_Var_Pop_Order_By = {
  vote_type?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Idea_Votes_Var_Samp_Fields = {
  __typename?: 'idea_votes_var_samp_fields';
  vote_type?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "idea_votes" */
export type Idea_Votes_Var_Samp_Order_By = {
  vote_type?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Idea_Votes_Variance_Fields = {
  __typename?: 'idea_votes_variance_fields';
  vote_type?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "idea_votes" */
export type Idea_Votes_Variance_Order_By = {
  vote_type?: Maybe<Order_By>;
};

/**
 * Ideas table
 *
 *
 * columns and relationships of "ideas"
 *
 */
export type Ideas = {
  __typename?: 'ideas';
  additional_information?: Maybe<Scalars['String']>;
  business_plan?: Maybe<Scalars['String']>;
  competitors?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  description_preview?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  idea_user?: Maybe<Users>;
  /** An array relationship */
  idea_votes: Array<Idea_Votes>;
  /** An aggregated array relationship */
  idea_votes_aggregate: Idea_Votes_Aggregate;
  industry: Scalars['String'];
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
export type IdeasIdea_VotesArgs = {
  distinct_on?: Maybe<Array<Idea_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Idea_Votes_Order_By>>;
  where?: Maybe<Idea_Votes_Bool_Exp>;
};


/**
 * Ideas table
 *
 *
 * columns and relationships of "ideas"
 *
 */
export type IdeasIdea_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Idea_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Idea_Votes_Order_By>>;
  where?: Maybe<Idea_Votes_Bool_Exp>;
};

/** aggregated selection of "ideas" */
export type Ideas_Aggregate = {
  __typename?: 'ideas_aggregate';
  aggregate?: Maybe<Ideas_Aggregate_Fields>;
  nodes: Array<Ideas>;
};

/** aggregate fields of "ideas" */
export type Ideas_Aggregate_Fields = {
  __typename?: 'ideas_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ideas_Max_Fields>;
  min?: Maybe<Ideas_Min_Fields>;
};


/** aggregate fields of "ideas" */
export type Ideas_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ideas_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ideas" */
export type Ideas_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Ideas_Max_Order_By>;
  min?: Maybe<Ideas_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ideas" */
export type Ideas_Arr_Rel_Insert_Input = {
  data: Array<Ideas_Insert_Input>;
  on_conflict?: Maybe<Ideas_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ideas". All fields are combined with a logical 'AND'. */
export type Ideas_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ideas_Bool_Exp>>>;
  _not?: Maybe<Ideas_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ideas_Bool_Exp>>>;
  additional_information?: Maybe<String_Comparison_Exp>;
  business_plan?: Maybe<String_Comparison_Exp>;
  competitors?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  description_preview?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  idea_user?: Maybe<Users_Bool_Exp>;
  idea_votes?: Maybe<Idea_Votes_Bool_Exp>;
  industry?: Maybe<String_Comparison_Exp>;
  is_published?: Maybe<Boolean_Comparison_Exp>;
  mission_statement?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  team?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "ideas" */
export type Ideas_Constraint =
  /** unique or primary key constraint */
  | 'ideas_pkey';

/** input type for inserting data into table "ideas" */
export type Ideas_Insert_Input = {
  additional_information?: Maybe<Scalars['String']>;
  business_plan?: Maybe<Scalars['String']>;
  competitors?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_preview?: Maybe<Scalars['String']>;
  idea_user?: Maybe<Users_Obj_Rel_Insert_Input>;
  idea_votes?: Maybe<Idea_Votes_Arr_Rel_Insert_Input>;
  industry?: Maybe<Scalars['String']>;
  is_published?: Maybe<Scalars['Boolean']>;
  mission_statement?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ideas_Max_Fields = {
  __typename?: 'ideas_max_fields';
  additional_information?: Maybe<Scalars['String']>;
  business_plan?: Maybe<Scalars['String']>;
  competitors?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  description_preview?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  industry?: Maybe<Scalars['String']>;
  mission_statement?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "ideas" */
export type Ideas_Max_Order_By = {
  additional_information?: Maybe<Order_By>;
  business_plan?: Maybe<Order_By>;
  competitors?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  description_preview?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  industry?: Maybe<Order_By>;
  mission_statement?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  team?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Ideas_Min_Fields = {
  __typename?: 'ideas_min_fields';
  additional_information?: Maybe<Scalars['String']>;
  business_plan?: Maybe<Scalars['String']>;
  competitors?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  description_preview?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  industry?: Maybe<Scalars['String']>;
  mission_statement?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "ideas" */
export type Ideas_Min_Order_By = {
  additional_information?: Maybe<Order_By>;
  business_plan?: Maybe<Order_By>;
  competitors?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  description_preview?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  industry?: Maybe<Order_By>;
  mission_statement?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  team?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "ideas" */
export type Ideas_Mutation_Response = {
  __typename?: 'ideas_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Ideas>;
};

/** input type for inserting object relation for remote table "ideas" */
export type Ideas_Obj_Rel_Insert_Input = {
  data: Ideas_Insert_Input;
  on_conflict?: Maybe<Ideas_On_Conflict>;
};

/** on conflict condition type for table "ideas" */
export type Ideas_On_Conflict = {
  constraint: Ideas_Constraint;
  update_columns: Array<Ideas_Update_Column>;
  where?: Maybe<Ideas_Bool_Exp>;
};

/** ordering options when selecting data from "ideas" */
export type Ideas_Order_By = {
  additional_information?: Maybe<Order_By>;
  business_plan?: Maybe<Order_By>;
  competitors?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  description_preview?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  idea_user?: Maybe<Users_Order_By>;
  idea_votes_aggregate?: Maybe<Idea_Votes_Aggregate_Order_By>;
  industry?: Maybe<Order_By>;
  is_published?: Maybe<Order_By>;
  mission_statement?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  team?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "ideas" */
export type Ideas_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ideas" */
export type Ideas_Select_Column =
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
  | 'id'
  /** column name */
  | 'industry'
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
export type Ideas_Set_Input = {
  additional_information?: Maybe<Scalars['String']>;
  business_plan?: Maybe<Scalars['String']>;
  competitors?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  description_preview?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  is_published?: Maybe<Scalars['Boolean']>;
  mission_statement?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "ideas" */
export type Ideas_Update_Column =
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
  | 'industry'
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
export type Jsonb_Comparison_Exp = {
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
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "idea_votes" */
  delete_idea_votes?: Maybe<Idea_Votes_Mutation_Response>;
  /** delete single row from the table: "idea_votes" */
  delete_idea_votes_by_pk?: Maybe<Idea_Votes>;
  /** delete data from the table: "ideas" */
  delete_ideas?: Maybe<Ideas_Mutation_Response>;
  /** delete single row from the table: "ideas" */
  delete_ideas_by_pk?: Maybe<Ideas>;
  /** insert data into the table: "activity" */
  insert_activity?: Maybe<Activity_Mutation_Response>;
  /** insert a single row into the table: "activity" */
  insert_activity_one?: Maybe<Activity>;
  /** insert data into the table: "idea_votes" */
  insert_idea_votes?: Maybe<Idea_Votes_Mutation_Response>;
  /** insert a single row into the table: "idea_votes" */
  insert_idea_votes_one?: Maybe<Idea_Votes>;
  /** insert data into the table: "ideas" */
  insert_ideas?: Maybe<Ideas_Mutation_Response>;
  /** insert a single row into the table: "ideas" */
  insert_ideas_one?: Maybe<Ideas>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "activity" */
  update_activity?: Maybe<Activity_Mutation_Response>;
  /** update single row of the table: "activity" */
  update_activity_by_pk?: Maybe<Activity>;
  /** update data of the table: "idea_votes" */
  update_idea_votes?: Maybe<Idea_Votes_Mutation_Response>;
  /** update single row of the table: "idea_votes" */
  update_idea_votes_by_pk?: Maybe<Idea_Votes>;
  /** update data of the table: "ideas" */
  update_ideas?: Maybe<Ideas_Mutation_Response>;
  /** update single row of the table: "ideas" */
  update_ideas_by_pk?: Maybe<Ideas>;
  /** update data of the table: "user_profile" */
  update_user_profile?: Maybe<User_Profile_Mutation_Response>;
  /** update single row of the table: "user_profile" */
  update_user_profile_by_pk?: Maybe<User_Profile>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_Idea_VotesArgs = {
  where: Idea_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Idea_Votes_By_PkArgs = {
  idea_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_IdeasArgs = {
  where: Ideas_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ideas_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ActivityArgs = {
  objects: Array<Activity_Insert_Input>;
  on_conflict?: Maybe<Activity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activity_OneArgs = {
  object: Activity_Insert_Input;
  on_conflict?: Maybe<Activity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Idea_VotesArgs = {
  objects: Array<Idea_Votes_Insert_Input>;
  on_conflict?: Maybe<Idea_Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Idea_Votes_OneArgs = {
  object: Idea_Votes_Insert_Input;
  on_conflict?: Maybe<Idea_Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_IdeasArgs = {
  objects: Array<Ideas_Insert_Input>;
  on_conflict?: Maybe<Ideas_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ideas_OneArgs = {
  object: Ideas_Insert_Input;
  on_conflict?: Maybe<Ideas_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ActivityArgs = {
  _set?: Maybe<Activity_Set_Input>;
  where: Activity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Activity_By_PkArgs = {
  _set?: Maybe<Activity_Set_Input>;
  pk_columns: Activity_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Idea_VotesArgs = {
  _inc?: Maybe<Idea_Votes_Inc_Input>;
  _set?: Maybe<Idea_Votes_Set_Input>;
  where: Idea_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Idea_Votes_By_PkArgs = {
  _inc?: Maybe<Idea_Votes_Inc_Input>;
  _set?: Maybe<Idea_Votes_Set_Input>;
  pk_columns: Idea_Votes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_IdeasArgs = {
  _set?: Maybe<Ideas_Set_Input>;
  where: Ideas_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ideas_By_PkArgs = {
  _set?: Maybe<Ideas_Set_Input>;
  pk_columns: Ideas_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ProfileArgs = {
  _append?: Maybe<User_Profile_Append_Input>;
  _delete_at_path?: Maybe<User_Profile_Delete_At_Path_Input>;
  _delete_elem?: Maybe<User_Profile_Delete_Elem_Input>;
  _delete_key?: Maybe<User_Profile_Delete_Key_Input>;
  _inc?: Maybe<User_Profile_Inc_Input>;
  _prepend?: Maybe<User_Profile_Prepend_Input>;
  _set?: Maybe<User_Profile_Set_Input>;
  where: User_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Profile_By_PkArgs = {
  _append?: Maybe<User_Profile_Append_Input>;
  _delete_at_path?: Maybe<User_Profile_Delete_At_Path_Input>;
  _delete_elem?: Maybe<User_Profile_Delete_Elem_Input>;
  _delete_key?: Maybe<User_Profile_Delete_Key_Input>;
  _inc?: Maybe<User_Profile_Inc_Input>;
  _prepend?: Maybe<User_Profile_Prepend_Input>;
  _set?: Maybe<User_Profile_Set_Input>;
  pk_columns: User_Profile_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export type Order_By =
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
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "activity" */
  activity: Array<Activity>;
  /** fetch aggregated fields from the table: "activity" */
  activity_aggregate: Activity_Aggregate;
  /** fetch data from the table: "activity" using primary key columns */
  activity_by_pk?: Maybe<Activity>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** fetch data from the table: "idea_preview" */
  idea_preview: Array<Idea_Preview>;
  /** fetch aggregated fields from the table: "idea_preview" */
  idea_preview_aggregate: Idea_Preview_Aggregate;
  /** fetch data from the table: "idea_votes" */
  idea_votes: Array<Idea_Votes>;
  /** fetch aggregated fields from the table: "idea_votes" */
  idea_votes_aggregate: Idea_Votes_Aggregate;
  /** fetch data from the table: "idea_votes" using primary key columns */
  idea_votes_by_pk?: Maybe<Idea_Votes>;
  /** fetch data from the table: "ideas" */
  ideas: Array<Ideas>;
  /** fetch aggregated fields from the table: "ideas" */
  ideas_aggregate: Ideas_Aggregate;
  /** fetch data from the table: "ideas" using primary key columns */
  ideas_by_pk?: Maybe<Ideas>;
  /** fetch data from the table: "user_profile" */
  user_profile: Array<User_Profile>;
  /** fetch data from the table: "user_profile" using primary key columns */
  user_profile_by_pk?: Maybe<User_Profile>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootActivityArgs = {
  distinct_on?: Maybe<Array<Activity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Order_By>>;
  where?: Maybe<Activity_Bool_Exp>;
};


/** query root */
export type Query_RootActivity_AggregateArgs = {
  distinct_on?: Maybe<Array<Activity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Order_By>>;
  where?: Maybe<Activity_Bool_Exp>;
};


/** query root */
export type Query_RootActivity_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootAuth_AccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


/** query root */
export type Query_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootIdea_PreviewArgs = {
  distinct_on?: Maybe<Array<Idea_Preview_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Idea_Preview_Order_By>>;
  where?: Maybe<Idea_Preview_Bool_Exp>;
};


/** query root */
export type Query_RootIdea_Preview_AggregateArgs = {
  distinct_on?: Maybe<Array<Idea_Preview_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Idea_Preview_Order_By>>;
  where?: Maybe<Idea_Preview_Bool_Exp>;
};


/** query root */
export type Query_RootIdea_VotesArgs = {
  distinct_on?: Maybe<Array<Idea_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Idea_Votes_Order_By>>;
  where?: Maybe<Idea_Votes_Bool_Exp>;
};


/** query root */
export type Query_RootIdea_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Idea_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Idea_Votes_Order_By>>;
  where?: Maybe<Idea_Votes_Bool_Exp>;
};


/** query root */
export type Query_RootIdea_Votes_By_PkArgs = {
  idea_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** query root */
export type Query_RootIdeasArgs = {
  distinct_on?: Maybe<Array<Ideas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ideas_Order_By>>;
  where?: Maybe<Ideas_Bool_Exp>;
};


/** query root */
export type Query_RootIdeas_AggregateArgs = {
  distinct_on?: Maybe<Array<Ideas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ideas_Order_By>>;
  where?: Maybe<Ideas_Bool_Exp>;
};


/** query root */
export type Query_RootIdeas_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUser_ProfileArgs = {
  distinct_on?: Maybe<Array<User_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Profile_Order_By>>;
  where?: Maybe<User_Profile_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Profile_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "activity" */
  activity: Array<Activity>;
  /** fetch aggregated fields from the table: "activity" */
  activity_aggregate: Activity_Aggregate;
  /** fetch data from the table: "activity" using primary key columns */
  activity_by_pk?: Maybe<Activity>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** fetch data from the table: "idea_preview" */
  idea_preview: Array<Idea_Preview>;
  /** fetch aggregated fields from the table: "idea_preview" */
  idea_preview_aggregate: Idea_Preview_Aggregate;
  /** fetch data from the table: "idea_votes" */
  idea_votes: Array<Idea_Votes>;
  /** fetch aggregated fields from the table: "idea_votes" */
  idea_votes_aggregate: Idea_Votes_Aggregate;
  /** fetch data from the table: "idea_votes" using primary key columns */
  idea_votes_by_pk?: Maybe<Idea_Votes>;
  /** fetch data from the table: "ideas" */
  ideas: Array<Ideas>;
  /** fetch aggregated fields from the table: "ideas" */
  ideas_aggregate: Ideas_Aggregate;
  /** fetch data from the table: "ideas" using primary key columns */
  ideas_by_pk?: Maybe<Ideas>;
  /** fetch data from the table: "user_profile" */
  user_profile: Array<User_Profile>;
  /** fetch data from the table: "user_profile" using primary key columns */
  user_profile_by_pk?: Maybe<User_Profile>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootActivityArgs = {
  distinct_on?: Maybe<Array<Activity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Order_By>>;
  where?: Maybe<Activity_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootActivity_AggregateArgs = {
  distinct_on?: Maybe<Array<Activity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Order_By>>;
  where?: Maybe<Activity_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootActivity_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootAuth_AccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootIdea_PreviewArgs = {
  distinct_on?: Maybe<Array<Idea_Preview_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Idea_Preview_Order_By>>;
  where?: Maybe<Idea_Preview_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootIdea_Preview_AggregateArgs = {
  distinct_on?: Maybe<Array<Idea_Preview_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Idea_Preview_Order_By>>;
  where?: Maybe<Idea_Preview_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootIdea_VotesArgs = {
  distinct_on?: Maybe<Array<Idea_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Idea_Votes_Order_By>>;
  where?: Maybe<Idea_Votes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootIdea_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Idea_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Idea_Votes_Order_By>>;
  where?: Maybe<Idea_Votes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootIdea_Votes_By_PkArgs = {
  idea_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootIdeasArgs = {
  distinct_on?: Maybe<Array<Ideas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ideas_Order_By>>;
  where?: Maybe<Ideas_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootIdeas_AggregateArgs = {
  distinct_on?: Maybe<Array<Ideas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ideas_Order_By>>;
  where?: Maybe<Ideas_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootIdeas_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUser_ProfileArgs = {
  distinct_on?: Maybe<Array<User_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Profile_Order_By>>;
  where?: Maybe<User_Profile_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Profile_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
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
export type Timestamptz_Comparison_Exp = {
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
export type User_Profile = {
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
  user?: Maybe<Users>;
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
export type User_ProfileIndustriesArgs = {
  path?: Maybe<Scalars['String']>;
};


/**
 * User profile table
 *
 *
 * columns and relationships of "user_profile"
 *
 */
export type User_ProfileSkillsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type User_Profile_Append_Input = {
  industries?: Maybe<Scalars['jsonb']>;
  skills?: Maybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "user_profile". All fields are combined with a logical 'AND'. */
export type User_Profile_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Profile_Bool_Exp>>>;
  _not?: Maybe<User_Profile_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Profile_Bool_Exp>>>;
  availability?: Maybe<Int_Comparison_Exp>;
  background?: Maybe<String_Comparison_Exp>;
  business_description?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  facebook?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  industries?: Maybe<Jsonb_Comparison_Exp>;
  instagram?: Maybe<String_Comparison_Exp>;
  is_complete?: Maybe<Boolean_Comparison_Exp>;
  linkedin?: Maybe<String_Comparison_Exp>;
  resume?: Maybe<String_Comparison_Exp>;
  skills?: Maybe<Jsonb_Comparison_Exp>;
  specialist_industry?: Maybe<String_Comparison_Exp>;
  startups?: Maybe<Int_Comparison_Exp>;
  statement?: Maybe<String_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  twitter?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  website?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_profile" */
export type User_Profile_Constraint =
  /** unique or primary key constraint */
  | 'user_profile_pkey'
  /** unique or primary key constraint */
  | 'user_profile_user_id_key';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type User_Profile_Delete_At_Path_Input = {
  industries?: Maybe<Array<Maybe<Scalars['String']>>>;
  skills?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type User_Profile_Delete_Elem_Input = {
  industries?: Maybe<Scalars['Int']>;
  skills?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type User_Profile_Delete_Key_Input = {
  industries?: Maybe<Scalars['String']>;
  skills?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "user_profile" */
export type User_Profile_Inc_Input = {
  availability?: Maybe<Scalars['Int']>;
  startups?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "user_profile" */
export type User_Profile_Mutation_Response = {
  __typename?: 'user_profile_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Profile>;
};

/** on conflict condition type for table "user_profile" */
export type User_Profile_On_Conflict = {
  constraint: User_Profile_Constraint;
  update_columns: Array<User_Profile_Update_Column>;
  where?: Maybe<User_Profile_Bool_Exp>;
};

/** ordering options when selecting data from "user_profile" */
export type User_Profile_Order_By = {
  availability?: Maybe<Order_By>;
  background?: Maybe<Order_By>;
  business_description?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  facebook?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  industries?: Maybe<Order_By>;
  instagram?: Maybe<Order_By>;
  is_complete?: Maybe<Order_By>;
  linkedin?: Maybe<Order_By>;
  resume?: Maybe<Order_By>;
  skills?: Maybe<Order_By>;
  specialist_industry?: Maybe<Order_By>;
  startups?: Maybe<Order_By>;
  statement?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  twitter?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_profile" */
export type User_Profile_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type User_Profile_Prepend_Input = {
  industries?: Maybe<Scalars['jsonb']>;
  skills?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "user_profile" */
export type User_Profile_Select_Column =
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
export type User_Profile_Set_Input = {
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
export type User_Profile_Update_Column =
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
export type Users = {
  __typename?: 'users';
  /** An object relationship */
  account?: Maybe<Auth_Accounts>;
  avatar_url?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  display_name?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  idea_votes: Array<Idea_Votes>;
  /** An aggregated array relationship */
  idea_votes_aggregate: Idea_Votes_Aggregate;
  last_name?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  user_activities: Array<Activity>;
  /** An aggregated array relationship */
  user_activities_aggregate: Activity_Aggregate;
  /** An object relationship */
  user_profile?: Maybe<User_Profile>;
  user_type?: Maybe<Scalars['String']>;
};


/** columns and relationships of "users" */
export type UsersIdea_VotesArgs = {
  distinct_on?: Maybe<Array<Idea_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Idea_Votes_Order_By>>;
  where?: Maybe<Idea_Votes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersIdea_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Idea_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Idea_Votes_Order_By>>;
  where?: Maybe<Idea_Votes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_ActivitiesArgs = {
  distinct_on?: Maybe<Array<Activity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Order_By>>;
  where?: Maybe<Activity_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Activities_AggregateArgs = {
  distinct_on?: Maybe<Array<Activity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Order_By>>;
  where?: Maybe<Activity_Bool_Exp>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  avatar_url?: Maybe<String_Comparison_Exp>;
  country?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  idea_votes?: Maybe<Idea_Votes_Bool_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_activities?: Maybe<Activity_Bool_Exp>;
  user_profile?: Maybe<User_Profile_Bool_Exp>;
  user_type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export type Users_Constraint =
  /** unique or primary key constraint */
  | 'users_pkey';

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  country?: Maybe<Scalars['String']>;
  idea_votes?: Maybe<Idea_Votes_Arr_Rel_Insert_Input>;
  user_activities?: Maybe<Activity_Arr_Rel_Insert_Input>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  avatar_url?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  idea_votes_aggregate?: Maybe<Idea_Votes_Aggregate_Order_By>;
  last_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_activities_aggregate?: Maybe<Activity_Aggregate_Order_By>;
  user_profile?: Maybe<User_Profile_Order_By>;
  user_type?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export type Users_Select_Column =
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
export type Users_Set_Input = {
  avatar_url?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  user_type?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export type Users_Update_Column =
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
export type Uuid_Comparison_Exp = {
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

export type GetUserActivitiesQueryVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type GetUserActivitiesQuery = { __typename?: 'query_root', activity: Array<{ __typename?: 'activity', idea_id?: any | null | undefined, event: string, description: string, url?: string | null | undefined, type?: string | null | undefined, created_at?: any | null | undefined }> };

export type CreateIdeaMutationVariables = Exact<{
  idea: Ideas_Insert_Input;
}>;


export type CreateIdeaMutation = { __typename?: 'mutation_root', idea?: { __typename?: 'ideas', id: any } | null | undefined };

export type UpdateIdeaMutationVariables = Exact<{
  idea: Ideas_Set_Input;
  id: Scalars['uuid'];
}>;


export type UpdateIdeaMutation = { __typename?: 'mutation_root', update_ideas_by_pk?: { __typename?: 'ideas', id: any, name: string, description: string, industry: string, mission_statement?: string | null | undefined, competitors?: string | null | undefined, team?: string | null | undefined, additional_information?: string | null | undefined, is_published?: boolean | null | undefined, user_id: any, status?: string | null | undefined } | null | undefined };

export type GetUserIdeasQueryVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type GetUserIdeasQuery = { __typename?: 'query_root', ideas: Array<{ __typename?: 'ideas', name: string, description: string, industry: string, updated_at?: any | null | undefined, is_published?: boolean | null | undefined, user_id: any, id: any }> };

export type DeleteIdeaMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteIdeaMutation = { __typename?: 'mutation_root', delete_ideas_by_pk?: { __typename?: 'ideas', id: any } | null | undefined };

export type GetIdeasQueryVariables = Exact<{
  where?: Maybe<Idea_Preview_Bool_Exp>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Idea_Preview_Order_By> | Idea_Preview_Order_By>;
  userId: Scalars['uuid'];
}>;


export type GetIdeasQuery = { __typename?: 'query_root', idea_preview_aggregate: { __typename?: 'idea_preview_aggregate', aggregate?: { __typename?: 'idea_preview_aggregate_fields', count?: number | null | undefined } | null | undefined }, idea_preview: Array<{ __typename?: 'idea_preview', id?: any | null | undefined, name?: string | null | undefined, preview?: string | null | undefined, industry?: string | null | undefined, status?: string | null | undefined, created_at?: any | null | undefined, is_new?: boolean | null | undefined, idea_votes?: { __typename?: 'idea_votes', idea: { __typename?: 'ideas', idea_votes_aggregate: { __typename?: 'idea_votes_aggregate', aggregate?: { __typename?: 'idea_votes_aggregate_fields', sum?: { __typename?: 'idea_votes_sum_fields', vote_type?: number | null | undefined } | null | undefined } | null | undefined }, idea_votes: Array<{ __typename?: 'idea_votes', vote_type: number }> } } | null | undefined, idea_user?: { __typename?: 'users', first_name?: string | null | undefined, country?: string | null | undefined, id: any, avatar_url?: string | null | undefined } | null | undefined }> };

export type GetIdeaQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetIdeaQuery = { __typename?: 'query_root', idea?: { __typename?: 'ideas', id: any, name: string, description: string, industry: string, mission_statement?: string | null | undefined, competitors?: string | null | undefined, team?: string | null | undefined, additional_information?: string | null | undefined, is_published?: boolean | null | undefined, user_id: any, status?: string | null | undefined, created_at?: any | null | undefined, idea_user?: { __typename?: 'users', avatar_url?: string | null | undefined, first_name?: string | null | undefined, country?: string | null | undefined, id: any } | null | undefined, idea_votes_aggregate: { __typename?: 'idea_votes_aggregate', aggregate?: { __typename?: 'idea_votes_aggregate_fields', sum?: { __typename?: 'idea_votes_sum_fields', vote_type?: number | null | undefined } | null | undefined } | null | undefined } } | null | undefined };

export type UpsertIdeaVoteMutationVariables = Exact<{
  idea_vote: Idea_Votes_Insert_Input;
}>;


export type UpsertIdeaVoteMutation = { __typename?: 'mutation_root', insert_idea_votes_one?: { __typename?: 'idea_votes', idea_id: any } | null | undefined };

export type GetUserSocialsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserSocialsQuery = { __typename?: 'query_root', profile?: { __typename?: 'user_profile', linkedin?: string | null | undefined, twitter?: string | null | undefined, website?: string | null | undefined } | null | undefined };

export type GetUserQueryVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type GetUserQuery = { __typename?: 'query_root', user?: { __typename?: 'users', id: any, last_name?: string | null | undefined, first_name?: string | null | undefined, country?: string | null | undefined, avatar_url?: string | null | undefined, created_at: any, account?: { __typename?: 'auth_accounts', email?: any | null | undefined } | null | undefined, user_profile?: { __typename?: 'user_profile', id: any, is_complete?: boolean | null | undefined } | null | undefined } | null | undefined };

export type UpdateUserProfileMutationVariables = Exact<{
  id: Scalars['uuid'];
  user_profile: User_Profile_Set_Input;
}>;


export type UpdateUserProfileMutation = { __typename?: 'mutation_root', update_user_profile_by_pk?: { __typename?: 'user_profile', id: any, availability?: number | null | undefined, background?: string | null | undefined, linkedin?: string | null | undefined, twitter?: string | null | undefined, instagram?: string | null | undefined, facebook?: string | null | undefined, resume?: string | null | undefined, statement?: string | null | undefined, status?: string | null | undefined, business_description?: string | null | undefined, startups?: number | null | undefined, website?: string | null | undefined, skills?: any | null | undefined, is_complete?: boolean | null | undefined, specialist_industry?: string | null | undefined, updated_at?: any | null | undefined } | null | undefined };

export type GetUserExperienceQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserExperienceQuery = { __typename?: 'query_root', profile?: { __typename?: 'user_profile', id: any, user_id?: any | null | undefined, background?: string | null | undefined, statement?: string | null | undefined, startups?: number | null | undefined, status?: string | null | undefined, availability?: number | null | undefined, business_description?: string | null | undefined, specialist_industry?: string | null | undefined, skills?: any | null | undefined, resume?: string | null | undefined, linkedin?: string | null | undefined, twitter?: string | null | undefined, instagram?: string | null | undefined, facebook?: string | null | undefined, website?: string | null | undefined, updated_at?: any | null | undefined, is_complete?: boolean | null | undefined } | null | undefined };

export type UpdateUserExperienceMutationVariables = Exact<{
  id: Scalars['uuid'];
  userExperience: User_Profile_Set_Input;
}>;


export type UpdateUserExperienceMutation = { __typename?: 'mutation_root', update_user_profile_by_pk?: { __typename?: 'user_profile', id: any, user_id?: any | null | undefined, background?: string | null | undefined, statement?: string | null | undefined, startups?: number | null | undefined, status?: string | null | undefined, skills?: any | null | undefined, availability?: number | null | undefined, resume?: string | null | undefined, business_description?: string | null | undefined } | null | undefined };

export type UpdateResumeMutationVariables = Exact<{
  id: Scalars['uuid'];
  resume: User_Profile_Set_Input;
}>;


export type UpdateResumeMutation = { __typename?: 'mutation_root', update_user_profile_by_pk?: { __typename?: 'user_profile', id: any, resume?: string | null | undefined } | null | undefined };

export type UpdateUserPersonalDetailsMutationVariables = Exact<{
  id: Scalars['uuid'];
  userPersonalDetails: Users_Set_Input;
}>;


export type UpdateUserPersonalDetailsMutation = { __typename?: 'mutation_root', user?: { __typename?: 'users', first_name?: string | null | undefined, last_name?: string | null | undefined, country?: string | null | undefined, avatar_url?: string | null | undefined } | null | undefined };

export type UpdateUserAvatarMutationVariables = Exact<{
  id: Scalars['uuid'];
  avatarUrl: Users_Set_Input;
}>;


export type UpdateUserAvatarMutation = { __typename?: 'mutation_root', user?: { __typename?: 'users', avatar_url?: string | null | undefined } | null | undefined };

export type ResumeFragmentFragment = { __typename?: 'user_profile', id: any, resume?: string | null | undefined };

export type SocialMediaFragmentFragment = { __typename?: 'user_profile', id: any, linkedin?: string | null | undefined, twitter?: string | null | undefined, instagram?: string | null | undefined, facebook?: string | null | undefined, website?: string | null | undefined };

export type ExperienceFragmentFragment = { __typename?: 'user_profile', id: any, background?: string | null | undefined, statement?: string | null | undefined, status?: string | null | undefined, availability?: number | null | undefined, startups?: number | null | undefined, skills?: any | null | undefined, resume?: string | null | undefined, specialist_industry?: string | null | undefined, business_description?: string | null | undefined, is_complete?: boolean | null | undefined };

export type IdeaFragmentFragment = { __typename?: 'ideas', id: any, name: string, description: string, industry: string, mission_statement?: string | null | undefined, competitors?: string | null | undefined, team?: string | null | undefined, additional_information?: string | null | undefined, is_published?: boolean | null | undefined, user_id: any, status?: string | null | undefined };

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
  industry
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
export function useGetUserActivitiesQuery(baseOptions: Apollo.QueryHookOptions<GetUserActivitiesQuery, GetUserActivitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserActivitiesQuery, GetUserActivitiesQueryVariables>(GetUserActivitiesDocument, options);
      }
export function useGetUserActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserActivitiesQuery, GetUserActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserActivitiesQuery, GetUserActivitiesQueryVariables>(GetUserActivitiesDocument, options);
        }
export type GetUserActivitiesQueryHookResult = ReturnType<typeof useGetUserActivitiesQuery>;
export type GetUserActivitiesLazyQueryHookResult = ReturnType<typeof useGetUserActivitiesLazyQuery>;
export type GetUserActivitiesQueryResult = Apollo.QueryResult<GetUserActivitiesQuery, GetUserActivitiesQueryVariables>;
export const CreateIdeaDocument = gql`
    mutation createIdea($idea: ideas_insert_input!) {
  idea: insert_ideas_one(object: $idea) {
    id
  }
}
    `;
export type CreateIdeaMutationFn = Apollo.MutationFunction<CreateIdeaMutation, CreateIdeaMutationVariables>;

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
export function useCreateIdeaMutation(baseOptions?: Apollo.MutationHookOptions<CreateIdeaMutation, CreateIdeaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateIdeaMutation, CreateIdeaMutationVariables>(CreateIdeaDocument, options);
      }
export type CreateIdeaMutationHookResult = ReturnType<typeof useCreateIdeaMutation>;
export type CreateIdeaMutationResult = Apollo.MutationResult<CreateIdeaMutation>;
export type CreateIdeaMutationOptions = Apollo.BaseMutationOptions<CreateIdeaMutation, CreateIdeaMutationVariables>;
export const UpdateIdeaDocument = gql`
    mutation updateIdea($idea: ideas_set_input!, $id: uuid!) {
  update_ideas_by_pk(pk_columns: {id: $id}, _set: $idea) {
    id
    name
    description
    industry
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
export type UpdateIdeaMutationFn = Apollo.MutationFunction<UpdateIdeaMutation, UpdateIdeaMutationVariables>;

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
export function useUpdateIdeaMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIdeaMutation, UpdateIdeaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateIdeaMutation, UpdateIdeaMutationVariables>(UpdateIdeaDocument, options);
      }
export type UpdateIdeaMutationHookResult = ReturnType<typeof useUpdateIdeaMutation>;
export type UpdateIdeaMutationResult = Apollo.MutationResult<UpdateIdeaMutation>;
export type UpdateIdeaMutationOptions = Apollo.BaseMutationOptions<UpdateIdeaMutation, UpdateIdeaMutationVariables>;
export const GetUserIdeasDocument = gql`
    query getUserIdeas($user_id: uuid!) {
  ideas(
    where: {user_id: {_eq: "de0f34ae-8986-4534-b3b7-60d6ce0babb2"}}
    order_by: {updated_at: desc}
  ) {
    name
    description
    industry
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
export function useGetUserIdeasQuery(baseOptions: Apollo.QueryHookOptions<GetUserIdeasQuery, GetUserIdeasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserIdeasQuery, GetUserIdeasQueryVariables>(GetUserIdeasDocument, options);
      }
export function useGetUserIdeasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserIdeasQuery, GetUserIdeasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserIdeasQuery, GetUserIdeasQueryVariables>(GetUserIdeasDocument, options);
        }
export type GetUserIdeasQueryHookResult = ReturnType<typeof useGetUserIdeasQuery>;
export type GetUserIdeasLazyQueryHookResult = ReturnType<typeof useGetUserIdeasLazyQuery>;
export type GetUserIdeasQueryResult = Apollo.QueryResult<GetUserIdeasQuery, GetUserIdeasQueryVariables>;
export const DeleteIdeaDocument = gql`
    mutation deleteIdea($id: uuid!) {
  delete_ideas_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteIdeaMutationFn = Apollo.MutationFunction<DeleteIdeaMutation, DeleteIdeaMutationVariables>;

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
export function useDeleteIdeaMutation(baseOptions?: Apollo.MutationHookOptions<DeleteIdeaMutation, DeleteIdeaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteIdeaMutation, DeleteIdeaMutationVariables>(DeleteIdeaDocument, options);
      }
export type DeleteIdeaMutationHookResult = ReturnType<typeof useDeleteIdeaMutation>;
export type DeleteIdeaMutationResult = Apollo.MutationResult<DeleteIdeaMutation>;
export type DeleteIdeaMutationOptions = Apollo.BaseMutationOptions<DeleteIdeaMutation, DeleteIdeaMutationVariables>;
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
    industry
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
export function useGetIdeasQuery(baseOptions: Apollo.QueryHookOptions<GetIdeasQuery, GetIdeasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIdeasQuery, GetIdeasQueryVariables>(GetIdeasDocument, options);
      }
export function useGetIdeasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIdeasQuery, GetIdeasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIdeasQuery, GetIdeasQueryVariables>(GetIdeasDocument, options);
        }
export type GetIdeasQueryHookResult = ReturnType<typeof useGetIdeasQuery>;
export type GetIdeasLazyQueryHookResult = ReturnType<typeof useGetIdeasLazyQuery>;
export type GetIdeasQueryResult = Apollo.QueryResult<GetIdeasQuery, GetIdeasQueryVariables>;
export const GetIdeaDocument = gql`
    query getIdea($id: uuid!) {
  idea: ideas_by_pk(id: $id) {
    id
    name
    description
    industry
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
export function useGetIdeaQuery(baseOptions: Apollo.QueryHookOptions<GetIdeaQuery, GetIdeaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIdeaQuery, GetIdeaQueryVariables>(GetIdeaDocument, options);
      }
export function useGetIdeaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIdeaQuery, GetIdeaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIdeaQuery, GetIdeaQueryVariables>(GetIdeaDocument, options);
        }
export type GetIdeaQueryHookResult = ReturnType<typeof useGetIdeaQuery>;
export type GetIdeaLazyQueryHookResult = ReturnType<typeof useGetIdeaLazyQuery>;
export type GetIdeaQueryResult = Apollo.QueryResult<GetIdeaQuery, GetIdeaQueryVariables>;
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
export type UpsertIdeaVoteMutationFn = Apollo.MutationFunction<UpsertIdeaVoteMutation, UpsertIdeaVoteMutationVariables>;

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
export function useUpsertIdeaVoteMutation(baseOptions?: Apollo.MutationHookOptions<UpsertIdeaVoteMutation, UpsertIdeaVoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertIdeaVoteMutation, UpsertIdeaVoteMutationVariables>(UpsertIdeaVoteDocument, options);
      }
export type UpsertIdeaVoteMutationHookResult = ReturnType<typeof useUpsertIdeaVoteMutation>;
export type UpsertIdeaVoteMutationResult = Apollo.MutationResult<UpsertIdeaVoteMutation>;
export type UpsertIdeaVoteMutationOptions = Apollo.BaseMutationOptions<UpsertIdeaVoteMutation, UpsertIdeaVoteMutationVariables>;
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
export function useGetUserSocialsQuery(baseOptions: Apollo.QueryHookOptions<GetUserSocialsQuery, GetUserSocialsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserSocialsQuery, GetUserSocialsQueryVariables>(GetUserSocialsDocument, options);
      }
export function useGetUserSocialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserSocialsQuery, GetUserSocialsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserSocialsQuery, GetUserSocialsQueryVariables>(GetUserSocialsDocument, options);
        }
export type GetUserSocialsQueryHookResult = ReturnType<typeof useGetUserSocialsQuery>;
export type GetUserSocialsLazyQueryHookResult = ReturnType<typeof useGetUserSocialsLazyQuery>;
export type GetUserSocialsQueryResult = Apollo.QueryResult<GetUserSocialsQuery, GetUserSocialsQueryVariables>;
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
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
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
export type UpdateUserProfileMutationFn = Apollo.MutationFunction<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;

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
export function useUpdateUserProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>(UpdateUserProfileDocument, options);
      }
export type UpdateUserProfileMutationHookResult = ReturnType<typeof useUpdateUserProfileMutation>;
export type UpdateUserProfileMutationResult = Apollo.MutationResult<UpdateUserProfileMutation>;
export type UpdateUserProfileMutationOptions = Apollo.BaseMutationOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;
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
export function useGetUserExperienceQuery(baseOptions: Apollo.QueryHookOptions<GetUserExperienceQuery, GetUserExperienceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserExperienceQuery, GetUserExperienceQueryVariables>(GetUserExperienceDocument, options);
      }
export function useGetUserExperienceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserExperienceQuery, GetUserExperienceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserExperienceQuery, GetUserExperienceQueryVariables>(GetUserExperienceDocument, options);
        }
export type GetUserExperienceQueryHookResult = ReturnType<typeof useGetUserExperienceQuery>;
export type GetUserExperienceLazyQueryHookResult = ReturnType<typeof useGetUserExperienceLazyQuery>;
export type GetUserExperienceQueryResult = Apollo.QueryResult<GetUserExperienceQuery, GetUserExperienceQueryVariables>;
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
export type UpdateUserExperienceMutationFn = Apollo.MutationFunction<UpdateUserExperienceMutation, UpdateUserExperienceMutationVariables>;

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
export function useUpdateUserExperienceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserExperienceMutation, UpdateUserExperienceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserExperienceMutation, UpdateUserExperienceMutationVariables>(UpdateUserExperienceDocument, options);
      }
export type UpdateUserExperienceMutationHookResult = ReturnType<typeof useUpdateUserExperienceMutation>;
export type UpdateUserExperienceMutationResult = Apollo.MutationResult<UpdateUserExperienceMutation>;
export type UpdateUserExperienceMutationOptions = Apollo.BaseMutationOptions<UpdateUserExperienceMutation, UpdateUserExperienceMutationVariables>;
export const UpdateResumeDocument = gql`
    mutation updateResume($id: uuid!, $resume: user_profile_set_input!) {
  update_user_profile_by_pk(pk_columns: {id: $id}, _set: $resume) {
    id
    resume
  }
}
    `;
export type UpdateResumeMutationFn = Apollo.MutationFunction<UpdateResumeMutation, UpdateResumeMutationVariables>;

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
export function useUpdateResumeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateResumeMutation, UpdateResumeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateResumeMutation, UpdateResumeMutationVariables>(UpdateResumeDocument, options);
      }
export type UpdateResumeMutationHookResult = ReturnType<typeof useUpdateResumeMutation>;
export type UpdateResumeMutationResult = Apollo.MutationResult<UpdateResumeMutation>;
export type UpdateResumeMutationOptions = Apollo.BaseMutationOptions<UpdateResumeMutation, UpdateResumeMutationVariables>;
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
export type UpdateUserPersonalDetailsMutationFn = Apollo.MutationFunction<UpdateUserPersonalDetailsMutation, UpdateUserPersonalDetailsMutationVariables>;

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
export function useUpdateUserPersonalDetailsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserPersonalDetailsMutation, UpdateUserPersonalDetailsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserPersonalDetailsMutation, UpdateUserPersonalDetailsMutationVariables>(UpdateUserPersonalDetailsDocument, options);
      }
export type UpdateUserPersonalDetailsMutationHookResult = ReturnType<typeof useUpdateUserPersonalDetailsMutation>;
export type UpdateUserPersonalDetailsMutationResult = Apollo.MutationResult<UpdateUserPersonalDetailsMutation>;
export type UpdateUserPersonalDetailsMutationOptions = Apollo.BaseMutationOptions<UpdateUserPersonalDetailsMutation, UpdateUserPersonalDetailsMutationVariables>;
export const UpdateUserAvatarDocument = gql`
    mutation updateUserAvatar($id: uuid!, $avatarUrl: users_set_input!) {
  user: update_users_by_pk(pk_columns: {id: $id}, _set: $avatarUrl) {
    avatar_url
  }
}
    `;
export type UpdateUserAvatarMutationFn = Apollo.MutationFunction<UpdateUserAvatarMutation, UpdateUserAvatarMutationVariables>;

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
export function useUpdateUserAvatarMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserAvatarMutation, UpdateUserAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserAvatarMutation, UpdateUserAvatarMutationVariables>(UpdateUserAvatarDocument, options);
      }
export type UpdateUserAvatarMutationHookResult = ReturnType<typeof useUpdateUserAvatarMutation>;
export type UpdateUserAvatarMutationResult = Apollo.MutationResult<UpdateUserAvatarMutation>;
export type UpdateUserAvatarMutationOptions = Apollo.BaseMutationOptions<UpdateUserAvatarMutation, UpdateUserAvatarMutationVariables>;