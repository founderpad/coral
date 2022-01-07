import { TUser_Profile } from './../generated/api';
import { useCurrentUser } from './auth';

const useUserProfile = (): TUser_Profile => useCurrentUser()?.profile;
export default useUserProfile;
