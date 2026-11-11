const Add_cookie = document.getElementById("add");
const Get_key1 = document.getElementById("get_key_1");
const Get_key2 = document.getElementById("get_key_2");
const Del_key1 = document.getElementById("delete_key_1");
const Del_key2 = document.getElementById("delete_key_2");

const add_cookie = () => {
  const time_to_live = 60 * 60 * 24 * 7;
  document.cookie = `"key_1=value_1"; max-age=${time_to_live}`;
  document.cookie = `"key_2=value_2"; max-age=${time_to_live}`;
};
Add_cookie.addEventListener("click", add_cookie);

const delete_key1 = () => {
  document.cookie = "key_1=; max-age=0";
};
Del_key1.addEventListener("click", delete_key1);

const delete_key2 = () => {
  document.cookie = "key_2=; max-age=0";
};
Del_key2.addEventListener("click", delete_key2);
////didnt reach that to review cookies later()
/*const get_key1 = () => {
  const value = document.cookie
    .split("; ")
    .find((row) => row.startsWith("key_1="))
    ?.split("=")[1];
  console.log(value);
};
Get_key1.addEventListener("click", get_key1);

const get_key2 = () => {
  const value = document.cookie
    .split("; ")
    .find((row) => row.startsWith("key_2="))
    ?.split("=")[1];
  console.log(value);
};
Get_key2.addEventListener("click", get_key2);*/
