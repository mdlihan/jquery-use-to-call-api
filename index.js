console.clear();

const makerequest= async(url,configa,data)=>{
    const ans = await $.ajax(url,configa,data)
    return ans;
}
// const getrequest=()=>{
//     makerequest('https://jsonplaceholder.typicode.com/posts/1',{
//         method:"get",
//     })
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// }
// getrequest();

// const postrequest=()=>{
//     makerequest('https://jsonplaceholder.typicode.com/posts',{
//         method:"post",
//         data:JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         })
//     })
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// }
// postrequest();


// const putrequest=()=>{
//     makerequest('https://jsonplaceholder.typicode.com/posts/1',{
//         method:"put",
//         data:JSON.stringify({
//             id:1,
//             title: 'foma',
//             body: 'barma',
//             userId: 1,
//         })
//     })
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// }
// putrequest();

// const patchrequest=()=>{
//     makerequest('https://jsonplaceholder.typicode.com/posts/1',{
//         method:"patch",
//         data:JSON.stringify({
//                title: 'fooma',
//         })
//     })
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// }
// patchrequest();

const deleterequest=()=>{
    makerequest('https://jsonplaceholder.typicode.com/posts/1',{
        method:"delete",
       
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}
deleterequest();