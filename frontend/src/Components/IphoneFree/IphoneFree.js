import React from "react";
import airpods from "../../img/mme73.jpg";

export default function IphoneFree() {
  return (
    <div className="iphone-free">
      <h1 className="iphone-free__name">Отримай наушники за покупку айфону</h1>
      <div>
        <img src={airpods}></img>
      </div>
    </div>
  );
}
