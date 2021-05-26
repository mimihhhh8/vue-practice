// 极简版的双向绑定
const obj = {};
Object.defineProperty(obj, "text", {
  get: function () {
    console.log("get val");
  },
  set: function (newVal) {
    console.log("set val:" + newVal);
    document.getElementById("defineproperty-input").value = newVal;
    document.getElementById("defineproperty-p").innerHTML = newVal;
  }
});

const input = document.getElementById("defineproperty-input");
input.addEventListener("keyup", function (e) {
  obj.text = e.target.value;
});
