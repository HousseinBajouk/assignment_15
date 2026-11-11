const Add_session_storage = document.getElementById("Add");
const add_session = () => {
  sessionStorage.setItem("key_1", "value_1");
  sessionStorage.setItem("key_2", "value_2");
};
Add_session_storage.addEventListener("click", add_session);

const Get_session_storage = document.getElementById("get");
const get_session = () => {
  const key1 = sessionStorage.getItem("key_1", "value_1");
  const key2 = sessionStorage.getItem("key_2", "value_2");
  console.log(key1);
  console.log(key2);
};
Get_session_storage.addEventListener("click", get_session);

const del_key1 = document.getElementById("delete_key_1");
const delete_key1 = () => {
  sessionStorage.removeItem("key_1");
};
del_key1.addEventListener("click", delete_key1);

const del_key2 = document.getElementById("delete_key_2");
const delete_key2 = () => {
  sessionStorage.removeItem("key_2");
};
del_key2.addEventListener("click", delete_key2);

const clear = document.getElementById("clear");
clear_session = () => {
  sessionStorage.clear();
};
clear.addEventListener("click", clear_session);
