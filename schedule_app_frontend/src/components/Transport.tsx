const Transport: React.FC = () => {
  return (
    <>
      <div>搬入予定</div>
      <details>
        <summary>○○現場</summary>
        <div>2tトラック</div>
        <select name="truck">
          <option>車両を追加する</option>
          <option>軽トラ</option>
          <option>2tトラック</option>
        </select>
      </details>
      <div>予定を追加する</div>
    </>
  );
};

export default Transport;
