const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("inputText").value;
  document.getElementById("inputText").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "listRow";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //完了ボタン作成
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";

  //削除ボタン作成
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);

  //未完了のリストに追加
  const ul = document.getElementById("incompleteList");
  ul.appendChild(div);
};

document.getElementById("addBtn").addEventListener("click", () => onClickAdd());
