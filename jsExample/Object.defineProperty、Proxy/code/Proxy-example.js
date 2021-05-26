// 极简版双向绑定
const input = document.getElementById('proxy-input');
const p = document.getElementById('proxy-p');

const newObj = new Proxy({}, {
  get(target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    console.log(`setting ${value}!`);
    if (key === 'text') {
      input.value = value;
      p.innerHTML = value;
    }
    return Reflect.set(target, key, value, receiver);
  },
});

input.addEventListener('keyup', function(e) {
  newObj.text = e.target.value;
});

