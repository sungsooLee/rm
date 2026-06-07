// 💡 { query: "raw" }를 주면 SVG 코드를 컴포넌트나 경로가 아닌 '순수 텍스트' 스트링으로 통째로 읽어옵니다.
const svgModules = import.meta.glob("../../../icons/*.svg", {
  query: "raw",
  eager: true,
});

export const iconMap = Object.fromEntries(
  Object.entries(svgModules).map(([path, rawString]) => {
    // 파일 경로에서 파일명만 추출 (예: "../../../icons/ic_btn_clear.svg" -> "ic_btn_clear")
    const name = path.split("/").pop().replace(".svg", "");
    return [name, rawString.default || rawString];
  }),
);
