function getPageno() {
  const param = new URLSearchParams(location.search);
  const pageno = parseInt(param.get('pageno'));

  // pageno가 없거나 숫자로 바꿀 수 없는 값인 경우 parseInt의 결과는 NaN
  // NaN를 비교하면 무조건 false(JS에서 NaN는 비교되는 값이 아니다)
  // NaN
  if (isNaN(pageno))
    return 1;
  else if (pageno < 1)
    return 1;
  return pageno;
}

// 기본 매개변수(default parameter)
async function fetch(pageno=1, pagesize=10) {
  const api ='http://sample.bmaster.kro.kr/contacts'
  const url =`${api}?pageno=${pageno}&pagesize=${pagesize}`;
  // $.ajax()는 병렬 처리(비동기처리)되는 코드 -> 언제 끝날지 모르는 코드
  // 비동기 코드를 리턴받는 result는 "미래에 값이 들어올 것이다"란 값을 가진다
  // (promise)
  try {
    return await $.ajax(url);
  }catch(err) {
    console.log(err);
    return null;
  }
  // const result = await $.ajax(url);
  // return result;
}