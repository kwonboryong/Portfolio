import p from './../../public/assets/profile.webp';
import s from './profile.module.scss'; 

function Profile() {
  return (
    <>
      <img
      className={s.profile}
        src={p}
        alt="개발자 권보령 프로필 사진"
      />
    </>
  );
}

export default Profile;
