'use strict';
(function () {
  // 仕様
  // ショッピングカートに入った商品の合計を求めます。
  // 商品はタブレット(10,000円)とパソコン(50,000円)の2つです。
  // 計算ボタンをクリックした時に小計、税額、合計を求めてください。
  // 求めるものは以下の3つです。
  // 小計･･･商品の価格と数量の合計
  // 税額･･小計の金額に対して発生する消費税
  // 合計･･･小計と消費税を足した値


  // 使いそうな変数を宣言。必要に応じて後から追加する
  let subtotal = document.getElementById('subtotal');
  let tax = document.getElementById('tax');
  let total = document.getElementById('total');

  //値段をテキスト取得→Numberで変換
  let tabletPrice = document.getElementById('tabletPrice').innerText;
  let pcPrice = document.getElementById('pcPrice').innerText;
  let result1 = Number(tabletPrice); //10000
  let result2 = Number(pcPrice); //50000

  //NumberでHTMLの文字列を数値に変換
  //セレクトボックスの数量をvalueで取得する
  //ボタンをクリックで合計を計算する。
  //小計 subtotal　pc+タブレット
  //税額 tax　Math.round()で四捨五入
  //合計 total　小計 + 税額

  btn.addEventListener('click', function () {
    let tablet = Number(document.getElementById('tablet').value);
    let pc = Number(document.getElementById('pc').value);

    let tablettotal = result1 * tablet;
    let pctotal = result2 * pc;
    subtotal.innerText = tablettotal + pctotal;

    const TAXRATE = 10;
    let priceTotalTax = Math.round(Number(subtotal.innerText) * TAXRATE / 100);
    tax.innerText = priceTotalTax;

    total.innerText = Number(subtotal.innerText) + priceTotalTax;

  });
});
