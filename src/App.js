import { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  // useEffect(() => {
  //   console.log("마운트 및 업데이트 될 때 실행")
  // });

  // useEffect(() => {
  //   console.log("마운트 될 때만 실행");
  // }, []);

  useEffect(() => {
    console.log("num 값이 변경될 때 실행");
    return () => {
      console.log("cleanup 함수 실행");
    };
  }, [num]);

  return (
    <div>
      <h3>{num}</h3>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};

export default App;

// *useEffect
// => mount: 첫 렌더링
// => update: 리 렌더링
// => unmount: 화면에서 사라질 때(삭제)
// => 콜백함수: 렌더링이 되거나 리 렌더가 되었을 때 실핼
// => deps: 화면에 첫 렌더링 될 때 또는 값이 변경될 때 실행
// 반배열로 작성시 화면에 첫 렌더링 될때만 실행됨
