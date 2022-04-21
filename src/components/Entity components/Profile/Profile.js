import { useAuth } from "./../../../states/Global State/Auth State/AuthState.js";
import Container from "./../../Generic/Container/Container.js";
import { convertToString } from "./../../../util/mapKeyNames.js";
function Profile() {
  const { user } = useAuth();

  return (
    <Container heading="Profile" title="Update your info!" inputBoxes buttons />
  );
}
export default Profile;
