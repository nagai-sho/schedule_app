import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Header from '../components/Header';

export const Assets: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <div>
        <Header />

        <p>{id}</p>
        <h2>編集画面</h2>

        <label htmlFor="lastName">last_name: </label>
        <input type="text" name="lastName" id="lastName" placeholder="name" />
        <br />
        <label htmlFor="firstName">first_name: </label>
        <input type="text" name="firstName" id="firstName" placeholder="name" />
        <br />
        <label htmlFor="nameKana">name_kana: </label>
        <input type="text" name="nameKana" id="nameKana" placeholder="name" />
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
      <div>
        <div>登録社員一覧</div>
        <div>（indexより抽出・表示）</div>
        <div>（indexより抽出・表示）</div>
        <div>（indexより抽出・表示）</div>
        <div>クリックで編集・削除ができるように</div>
      </div>
      <Link to="/">Topへ</Link>
    </>
  );
};

// export default Assets;
