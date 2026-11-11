const Add_local_storage = document.getElementById("Add");
const add_local = () => {
  localStorage.setItem("key_1", "value_1");
  localStorage.setItem("key_2", "value_2");
};
Add_local_storage.addEventListener("click", add_local);

const Get_local_storage = document.getElementById("get");
const get_local = () => {
  const key1 = localStorage.getItem("key_1", "value_1");
  const key2 = localStorage.getItem("key_2", "value_2");
  console.log(key1);
  console.log(key2);
};
Get_local_storage.addEventListener("click", get_local);

const del_key1 = document.getElementById("delete_key_1");
const delete_key1 = () => {
  localStorage.removeItem("key_1");
};
del_key1.addEventListener("click", delete_key1);

const del_key2 = document.getElementById("delete_key_2");
const delete_key2 = () => {
  localStorage.removeItem("key_2");
};
del_key2.addEventListener("click", delete_key2);

const clear = document.getElementById("clear");
clear_local = () => {
  localStorage.clear();
};
clear.addEventListener("click", clear_local);
