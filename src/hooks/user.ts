import { TUser_Profile } from './../generated/api';
import { useCurrentUser } from './auth';

const useUserProfile = (): TUser_Profile => useCurrentUser().user_profile;
export default useUserProfile;