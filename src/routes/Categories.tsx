import React, {useState} from "react";
import List from "../components/List";

export default function Categories() {
  const categories = [{"id":1,"name":"Категория1","description":"Мое описание категории1"},{"id":2,"name":"Категория2","description":"Мое описание категории2"},{"id":3,"name":"Категория3","description":"Мое описание категории3"},{"id":4,"name":"Категория4","description":"Мое описание категории4"},{"id":5,"name":"Категория5","description":"Мое описание категории5"},{"id":6,"name":"Категория6","description":"Мое описание категории6"},{"id":7,"name":"Категория7","description":"Мое описание категории7"},{"id":8,"name":"Категория8","description":"Мое описание категории8"}];
  console.log(categories);
  
  const [categoryList, setCategoryList] = useState(categories);
  console.log(categoryList)
  console.log(categories);
  return (
  <main>
    <div className="container">
      <List items={categories} />
    </div>
  </main>
  );
}

