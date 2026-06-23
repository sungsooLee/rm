import RmPageLayout from "./RmLayoutPage";
import SpinnerLogo from "../../assets/components/common/spinlogo/SpinLogo";
import { Button } from "../../assets/components/common/button/Button";

function LogoTest() {
  return (
    <RmPageLayout title="명동금융센터">
      <div className="loading_wrap">
        <SpinnerLogo size={64} animate="once" />
        <div className="text_wrap">
          <p className="text">
            죄송합니다. <br />
            AI 분석결과가 잠시 원활하지 않습니다. <br />
            요청하신 결과가 나올 때까지 자동으로 재시도 합니다.
            <br /> 같은 현상이 지속되면 화면을 나갔다가 다시 한번 시도해주세요.
          </p>
          <p className="error">1회 재시도중</p>
        </div>
        <Button variant="line_gray" size="medium">
          메인으로 이동하기
        </Button>
      </div>
    </RmPageLayout>
  );
}

export default LogoTest;
