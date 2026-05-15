
const loadCommentsData=()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=>console.error('load comments data error:',error));
}

// Alternative way
const loadCommentsData2 = async() => {
    try{
  const res=await fetch("https://jsonplaceholder.typicode.com/comments");
  const data=await res.json();
  console.log(data);
  }
  catch(error){
    console.error('Data load error:',error)
  };



  
};
