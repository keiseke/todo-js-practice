const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("inputText").value;
  document.getElementById("inputText").value = "";

  createIncompleteList(inputText);
};
//ボタン押下時に削除する関数
const handleRemove = (target, area) => {
  document.getElementById(area).removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "listRow";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //完了ボタン作成
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了リストから削除
    handleRemove(completeBtn.parentNode, "incompleteList");

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
    backBtn.addEventListener("click", () => {
      //押された完了ボタンの親タグ(div)を完了リストから削除
      handleRemove(backBtn.parentNode, "completeList");

      //TODO内容テキストを取得
      const text = backBtn.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

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
    handleRemove(deleteBtn.parentNode, "incompleteList");
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
