import { User_Profile } from './../generated/graphql';
import { useCurrentUser } from './auth';

const useUserProfile = (): User_Profile => useCurrentUser().user_profile;
export default useUserProfile;