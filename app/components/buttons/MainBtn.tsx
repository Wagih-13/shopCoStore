import "./mainBtnStyle.scss";

type MainBtnType = {
  content: string;
  fontSize: string;
  color: string;
  background?: string;
  border?: string;
};
const MainBtn = ({
  content,
  fontSize,
  background,
  border,
  color,
}: MainBtnType) => {
  return (
    <>
      <button
        className="mainBtn"
        style={{
          fontSize: fontSize,
          backgroundColor: background,
          border: border,
          color: color,
        }}
      >
        {content}
      </button>
    </>
  );
};

export default MainBtn;
