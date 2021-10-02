import gql from 'graphql-tag';

const USER_GET_SOCIALS = gql`
	query getUserSocials($id: uuid!) {
		profile: user_profile_by_pk(id: $id) {
			linkedin
			twitter
			website
		}
	}
`;

const GET_USER = gql`
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

const UPDATE_PROFILE = gql`
	mutation updateUserProfile(
		$id: uuid!
		$user_profile: user_profile_set_input!
	) {
		update_user_profile_by_pk(
			pk_columns: { id: $id }
			_set: $user_profile
		) {
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

// const USER_UPDATE_EXPERIENCE = gql`
// 	mutation updateUserExperience(
// 		$id: uuid!
// 		$userExperience: user_profile_set_input!
// 	) {
// 		user: update_user_profile_by_pk(
// 			pk_columns: { id: $id }
// 			_set: $userExperience
// 		) {
// 			background
// 			experience
// 			availability
// 			business_description
// 			industries
// 			statement
// 			status
// 		}
// 	}
// `;

const USER_GET_EXPERIENCE = gql`
	query getUserExperience($id: uuid!) {
		# user_profile(where: { user_id: { _eq: $userId } }) {
		# profile: user_profile_by_pk(id: $id) {
		# 	id
		# 	user_id
		# 	background
		# 	statement
		# 	startups
		# 	status
		# 	availability
		# 	business_description
		# }

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

const USER_UPDATE_EXPERIENCE = gql`
	mutation updateUserExperience(
		$id: uuid!
		$userExperience: user_profile_set_input!
	) {
		update_user_profile_by_pk(
			pk_columns: { id: $id }
			_set: $userExperience
		) {
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

const USER_UPDATE_RESUME = gql`
	mutation updateResume(
		$id: uuid!,
		$resume: user_profile_set_input!
	) {
		update_user_profile_by_pk(
			pk_columns: {id: $id}
			_set: $resume
		) {
	  		id
	  		resume
		}
  	}
`;

// const USER_UPDATE_EXPERIENCE = gql`
// 	mutation updateUserExperience(
// 		$userId: uuid!
// 		$userExperience: user_profile_set_input!
// 	) {
// 		update_user_profile(
// 			where: { user_id: { _eq: $userId } }
// 			_set: $userExperience
// 		) {
// 			returning {
// 				background
// 				business_description
// 				availability
// 			}
// 			affected_rows
// 		}
// 	}
// `;

const UPDATE_USER_PERSONAL_DETAILS = gql`
	mutation updateUserPersonalDetails(
		$id: uuid!
		$userPersonalDetails: users_set_input!
	) {
		user: update_users_by_pk(
			pk_columns: { id: $id }
			_set: $userPersonalDetails
		) {
			first_name
			last_name
			country
			avatar_url
		}
		# location: insert_user_location_one(
		# 	object: { country: $location, user_id: $id }
		# 	on_conflict: {
		# 		constraint: user_location_pkey
		# 		update_columns: [country]
		# 	}
		# ) {
		# 	country
		# }
	}
`;

const UPDATE_USER_AVATAR = gql`
	mutation updateUserAvatar($id: uuid!, $avatarUrl: users_set_input!) {
		user: update_users_by_pk(pk_columns: { id: $id }, _set: $avatarUrl) {
			avatar_url
		}
	}
`;

// const UPDATE_USER_PERSONAL_INFORMATION = gql`
// 	mutation updateUserPersonalInformation(
// 		$id: uuid!
// 		$partialUser: users_set_input!
// 		$location: user_location_set_input
// 	) {
// 		user: update_users_by_pk(pk_columns: { id: $id }, _set: $partialUser) {
// 			first_name
// 			last_name
// 		}
// 		location: insert_user_location_one(
// 			object: { country: $location, user_id: $id }
// 			on_conflict: {
// 				constraint: user_location_pkey
// 				update_columns: [country]
// 			}
// 		) {
// 			country
// 		}
// 	}
// `;

// const UPDATE_USER_PERSONAL_INFORMATION = gql`
// 	mutation updateUserPersonalInformation(
// 		$id: uuid!
// 		$partialUser: users_set_input!
// 		$location: user_location_set_input
// 	) {
// 		# update_users_by_pk(pk_columns: { id: $id }, _set: $partialUser) {
// 		# 	first_name
// 		# 	last_name
// 		# }
// insert_user_location_one(
// 	object: { country: "Ghana", user_id: $id }
// 	on_conflict: {
// 		constraint: user_location_pkey
//  		update_columns: [country]
//  	}
//  ) {
//  	country
//  }
// 	}
// `;

export {
	GET_USER,
	UPDATE_PROFILE,
	UPDATE_USER_PERSONAL_DETAILS,
	USER_UPDATE_EXPERIENCE,
	USER_GET_EXPERIENCE,
	USER_GET_SOCIALS,
	UPDATE_USER_AVATAR,
	USER_UPDATE_RESUME
};
