export default function OverLayAbsolute({ onClick,classes = '' }) {
  return (
    <div
      className={`bg-dark absolute top-0 left-0 bottom-0 right-0 z-10 bg-opacity-20 ${ classes}`}
      onClick={onClick}
    ></div>
  );
}
