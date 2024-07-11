'use strict';
$(function () {
  //仕様
  //送信ボタンをクリックしたときにバリデーションチェックを実行
  //入力チェックで1つでもエラーがある場合は画面遷移しない
  //エラーがない場合thanks.htmlへ
  //エラーメッセージはエラーがある項目のみ表示する
  //
  //バリデーション定義
  //・名前-入力必須
  //・フリガナ-全角カナ(正規表現)
  //・電話番号-数値10桁or11桁(正規表現)
  //・アドレス-メールアドレス形式(正規表現)


  document.getElementById('form').addEventListener('submit', function (e) {
    let validation = true;
    let name = document.getElementById('name').value;
    let kana = document.getElementById('kana').value;
    let tel = document.getElementById('tel').value;
    let mail = document.getElementById('mail').value;

    //正規表現
    const kanaRegex = /^[ァ-ンー]+$/;
    const telRegex = /^\d{10}$|^\d{11}$/;
    const mailRegex = /^\S+@\S+\.\S+$/;

    //名前入力チェック
    if (name === '') {
      document.getElementById('err-name').innerText = '名前が未入力です。';
      validation = false;
    } else {
      document.getElementById('err-name').innerText = '';
    }

    //フリガナチェック
    if (!kana) {
      document.getElementById('err-kana').innerText = 'フリガナが未入力です';
      validation = false;
    } else if (!kanaRegex.test(kana)) {
      document.getElementById('err-kana').innerText = '全角カナで入力してください';
      validation = false;
    } else {
      document.getElementById('err-kana').innerText = '';
    }

    //電話番号チェック
    if (!tel) {
      document.getElementById('err-tel').innerText = '電話番号が未入力です';
      validation = false;
    } else if (!telRegex.test(tel)) {
      document.getElementById('err-tel').innerText = '電話番号をハイフンなしで入力してください';
      validation = false;
    } else {
      document.getElementById('err-tel').innerText = '';
    }

    //メールアドレスチェック
    if (!mail) {
      document.getElementById('err-mail').innerText = 'メールアドレスが未入力です';
      validation = false;
    } else if (!mailRegex.test(mail)) {
      document.getElementById('err-mail').innerText = 'メールアドレスの形式ではありません';
      validation = false;
    } else {
      document.getElementById('err-mail').innerText = '';
    }

    // バリデーションに引っかかった場合は送信しない
    if (!validation) {
      e.preventDefault();
    }

  })
});
