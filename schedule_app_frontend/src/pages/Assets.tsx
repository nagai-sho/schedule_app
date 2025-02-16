import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Assets: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <div>
        <p>tab表示、クリックで表示内容切り替え</p>
        <div
          className="select_tab"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <p>作業員 /</p>
          <p>現場情報 /</p>
          <p>車両</p>
        </div>

        <div className="main" style={{ display: 'flex' }}>
          <div className="operation">
            <h2>編集画面</h2>
            <label htmlFor="lastName">last_name: </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="name"
            />
            <br />
            <label htmlFor="firstName">first_name: </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="name"
            />
            <br />
            <label htmlFor="nameKana">name_kana: </label>
            <input
              type="text"
              name="nameKana"
              id="nameKana"
              placeholder="name"
            />
            <br />
            <label htmlFor="age">age: </label>
            <input type="number" name="age" id="age" placeholder="age" />
            <br />
            <label htmlFor="phoneNumber">phone_number: </label>
            <input
              type="string"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="phone"
            />
            <br />
            <label htmlFor="address">address: </label>
            <input
              type="string"
              name="address"
              id="address"
              placeholder="address"
            />
            <br />
            <label htmlFor="affiliated">company: </label>
            <input
              type="string"
              name="affiliated"
              id="affiliated"
              placeholder="affiliated company"
            />
            <br />
            <Button
              type="submit"
              onClick={() => {
                console.log('save!');
              }}
            >
              保存
            </Button>
            <br />
          </div>
          <div className="">
            <h2>登録社員一覧</h2>
            <div>（indexより抽出・表示）</div>
            <div>（indexより抽出・表示）</div>
            <div>（indexより抽出・表示）</div>
            <div>クリックで編集・削除ができるように</div>
          </div>
        </div>
      </div>
      <Link to="/">Topへ</Link>
    </>
  );
};

export default Assets;
