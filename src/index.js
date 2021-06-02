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
  completeBtn.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了リストから削除
    handleRemove(completeBtn.parentNode);

    //TODO内容テキストを取得
    const addTarget = completeBtn.parentNode;
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backBtn);

    document.getElementById("completeList").appendChild(addTarget);
  });

  //削除ボタン作成
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    handleRemove(deleteBtn.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);

  //未完了のリストに追加
  const ul = document.getElementById("incompleteList");
  ul.appendChild(div);
};

document.getElementById("addBtn").addEventListener("click", () => onClickAdd());

//ボタン押下時に削除する関数
const handleRemove = (target) => {
  document.getElementById("incompleteList").removeChild(target);
};
