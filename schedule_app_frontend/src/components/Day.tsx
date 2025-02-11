import Button from '@mui/material/Button';

const Day = () => {
  return (
    <>
      <div className="one_day">
        <div>○日</div>
        <div>（○曜日）</div>
        <div>
          搬入予定
          <div>○○現場</div>
          <div>2tトラック</div>
          <div>車両を追加する</div>
          <div>予定を追加する</div>
        </div>
        <div>
          工事予定
          <div>○○現場</div>
          <div>山田</div>
          <div>佐藤</div>
          <div>田中</div>
          <div>人員を追加する</div>
          <div>予定を追加する</div>
        </div>
        <div>
          工場予定
          <div>松井</div>
          <div>斎藤</div>
          <div>山本</div>
          <div>人員を追加する</div>
        </div>
        <div>
          <label htmlFor="content">イベント</label>
          <br />
          <input
            type="text"
            name="content"
            placeholder="イベントを入力"
          ></input>
          <br />
          <Button
            type="submit"
            onClick={() => {
              console.log('save!');
            }}
          >
            保存/編集
          </Button>
        </div>
      </div>
    </>
  );
};

export default Day;
