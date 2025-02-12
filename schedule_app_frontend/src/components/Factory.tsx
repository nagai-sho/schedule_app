const Factory: React.FC = () => {
  return (
    <>
      <details>
        <summary>工場予定</summary>
        <div>松井</div>
        <div>斎藤</div>
        <div>山本</div>
        <select name="workers">
          <option>人員を追加する</option>
          <option>松井</option>
          <option>斎藤</option>
          <option>山本</option>
        </select>
      </details>
    </>
  );
};

export default Factory;
