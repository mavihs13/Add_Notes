import React, { useState } from 'react'

function App() {
  const [Title, setTitle] = useState('');
 
  const [Details, setDetails] = useState('');
  const [Notes, setNotes] = useState([]);
  
  const submitHandler=(e)=>{
    e.preventDefault();
    const copyTask=[...Notes];
    copyTask.push({Title,Details});
    setNotes(copyTask);
     setTitle('');
     setDetails('');
  }
  const deleteNotes=(idx)=>{
    const copyNotes=[...Notes];
    copyNotes.splice(idx,1);
    setNotes(copyNotes);
  }
  return (
    <div className='h-screen lg:flex  bg-black text-white'>
      
      <form onSubmit={(e)=>{
        submitHandler(e)
          }} className=' items-start p-10 lg:w-1/2 flex flex-col  gap-4 ' >
            <h1 className='text-3xl font-bold '>Add Notes</h1>
        
        <input className='px-5 py-2 font-medium w-full border-2 outline-none rounded ' 
        type="text" 
        value={Title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        placeholder="Enter notes headline " />
        <textarea className='px-5 py-2 font-medium w-full  h-32 border-2 outline-none rounded'
         type="text" 
         value={Details}
         onChange={(e)=>{
          setDetails(e.target.value)
         }}
         placeholder='write details' />
        <button className='bg-white active:scale-95 text-black font-medium w-full  px-5 py-2 rounded'>Add Note</button>
       
      </form>
      <div className=' lg:w-1/2 lg:border-l-2  p-10'>
      <h1 className='text-3xl font-bold'>Your Notes</h1>
      <div className='flex flex-wrap items-start justify-start gap-5 mt-5  overflow-auto '>
       
          {Notes.map((elem,idx)=>{
          return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black pt-3  pb-4 px-4 bg-white bg-[url(https://imgs.search.brave.com/8Wit9w-9jlxV_FRsbLhIcpXpM6V_fnPjm1rr9LZRzQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDkv/MzEzLzYyOS9zbWFs/bC90b3JuLXBhcGVy/LWNsaXAtYXJ0LWZy/ZWUtcG5nLnBuZw)] bg-cover'>
          <div>
             <h3 className='leading-tight text-xl font-bold'>{elem.Title}</h3>
            <p className='mt-4 leading-tight  text-xs break-all font-semibold text-gray-500'>{elem.Details}</p>
          </div>
          <button onClick={(idx)=>{
            deleteNotes(idx)
          }} className='w-full bg-red-500 active:scale-95 py-1 text-xs rounded font-bold text-white'>Delete</button>
          </div>
        })}
        
        
      </div>
      </div>
    </div>
  )
}

export default App