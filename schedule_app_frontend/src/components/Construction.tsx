const Construction: React.FC = () => {
  return (
    <>
      <div>工事予定</div>
      <details>
        <summary>○○現場</summary>
        <div>山田</div>
        <div>佐藤</div>
        <div>田中</div>
        <select name="workers">
          <option>人員を追加する</option>
          <option>山田</option>
          <option>佐藤</option>
          <option>田中</option>
        </select>
      </details>
      <div>予定を追加する</div>
    </>
  );
};

export default Construction;
