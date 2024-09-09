const containmodule = document.querySelectorAll(".container>.module");
containmodule.forEach(item => {
    item.addEventListener('click',()=>{
    [].filter.call(item.parentElement.children, el=>el!==item).forEach(
        el=>el.classList.remove("active"));
        item.classList.add('active')
    });
});

// const containmodule = document.querySelectorAll(".container > .module");

// // 将 NodeList 转换为数组，然后使用 forEach
// Array.from(containmodule).forEach(item => {
//     item.addEventListener('click', () => {
//         // 将子元素转换为数组并过滤，移除其他元素的 'active' 类
//         Array.from(item.parentElement.children)
//             .filter(el => el !== item)
//             .forEach(el => el.classList.remove('active'));

//         // 给当前点击的元素添加 'active' 类
//         item.classList.add('active');
//     });
// });
