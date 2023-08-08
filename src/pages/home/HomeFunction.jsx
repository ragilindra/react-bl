import Result from '../../component/home/Result';
import Button from '../../component/home/Button';
import Header from '../../component/home/Header';
import { useState } from 'react';

const HomeFunction = () => {
  const [getCount, setCount] = useState(0);

  return (
    <>
      <Header>Tested</Header>
      <div>
        <Button
          onClick={() => setCount(getCount + 1)}
          title="Click aku mas!!"
        />
      </div>

      <Result>{getCount}</Result>
    </>
  );
};

export default HomeFunction;
