// 각각 경로
const routes = {
  // 메인 화면(야식도 식후경) -- home
  Home: 'Home',

  // 직원용
  Emp: 'Emp', // 초기 화면(야식대 등록, 지출 내역 확인)
  Ret_List: 'Ret_List', // 야식대 list 섹션
  Req_Pay: 'Req_Pay', // 결제 요청 섹션
  Confirm_ReqPay: 'Confirm_ReqPay', // 업주 확인용 섹션
  Analyze_Home: 'Analyze_Home', //분석화면 홈
  Analyze_Graph: 'Analyze_Graph', //Graph screen
  Analyze_List: 'Analyze_List', //list screen
  // 업주용
  Ret_Profit: 'Ret_Profit', // 해당 음식점 매출 현황 섹션
  Ret_Anl_Graph: 'Ret_anl_Graph', //음식점 매출 그래프
  Ret_Anl_List: 'Ret_anl_List', //음식점 매출 리스트

  // 총무용
  Emp_PayDept: 'Emp_PayDept', // 초기 화면(결제 정보, 야식대 FDS)
  Info_Pay: 'Info_Pay', // 결제 정보 섹션(부서별, 업주별)
  Fds: 'Fds', // 야식대 FDS
  MAnalyze_Graph: 'MAnalyze_Graph', //총무 그래프 표출 스크린
  MAnalyze_List: 'MAnalyze_List', //총무 그래프 표출 스크린
  Dept_Fds: 'Dept_Fds', //Fds 부서별 스크린
  Emp_Fds: 'Emp_Fds',
};

export default routes;
