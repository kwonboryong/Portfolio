import Introduce from '@/components/Introduce';
import Profile from '@/components/Profile';

function HomePage(){

  return (
    <div>
      {/* <h1>끊임없이 성장하는 개발자 <br/> 권보령입니다!</h1> */}
      <h1>안녕하세요</h1>
      <Profile/>
      <Introduce />
    </div>
  );
};

export default HomePage;
