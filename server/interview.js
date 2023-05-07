// function getresult(x,y,flag)
// {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//                     flag?resolve(x**y):resolve(x*y);
//                 },2000)
//     })
// }
// async function addfunc(x,flag)
// {
//     let res=0;
//     for(let i=1;i<=3;i++)
//     {
//         res+=await getresult(x,i,flag);
//     }
//     return res;
// }
// addfunc(10,true).then((sum)=>{
//     console.log(sum)
// })
// addfunc(20,false).then((sum)=>{
//     console.log(sum)
// })
// 2
// const EventEmitter=require('events')
// const event=new EventEmitter();

// event.on('second',()=>{
//     console.log("Second Event");
// });
// event.on('first',()=>{
//     console.log("welcome");
// });

// event.emit('first');

// event.on('first',()=>{
//     event.emit('second');
//     console.log("First Event");
// })
// event.emit('first');
