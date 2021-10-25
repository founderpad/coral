import { TUser_Profile } from './../generated/graphql';
import { useCurrentUser } from './auth';

const useUserProfile = (): TUser_Profile => useCurrentUser().user_profile;
export default useUserProfile;