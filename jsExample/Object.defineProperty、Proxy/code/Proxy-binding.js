// Proxy可以直接监听数组的变化

// 渲染列表
const list = document.getElementById('list');
const btn = document.getElementById('btn');
const Render = {
  init(arr) {
    list.textContent = ''
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < arr.length; i++) {
      const li = document.createElement('li');
      li.textContent = arr[i];
      fragment.appendChild(li);
    }
    list.appendChild(fragment);
  },
  change(val) {
    const li = document.createElement('li');
    li.textContent = val;
    list.appendChild(li);
  },
};

// 监听数组
const arr = [1, 2, 3, 4];
const newArr = new Proxy(arr, {
  get(target, key, receiver) {
    console.log('getting: ', target, key, receiver);
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    console.log('setting: ', target, key, value, receiver);

    switch (key) {
        case 'length':
            target.length = value
            Render.init(target);
            break;

        case '0':
            target[key] = value
            Render.init(target);
            break;
    
        case 'push':
            target.length = value
            Render.init(target);
            break;
    }

    return Reflect.set(target, key, value, receiver);
  },
});

// 初始化
window.onload = () => Render.init(arr);

// 数组操作
btn.addEventListener('click', () => {
    // newArr.length = 1

    // newArr[0] = 11

    // newArr.push(5)
});
