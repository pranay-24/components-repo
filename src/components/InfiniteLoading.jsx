import React , {useEffect,useRef,useState} from 'react'

export default function InfiniteLoading() {
    const loadingRef = useRef(null)
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)

    const fetchData =async ()=>{
        setLoading(true)
        const response =await fetch(`https://meowfacts.herokuapp.com/?count=${10}`)
        const newData = await response.json();
        const newD = newData.data
        setData((prevData)=> [...prevData, ...newD])

        setLoading (false)
    }

    const handleIntersection = (entries)=>{
    const [entry] = entries
  if(entry.isIntersecting && !loading){
   setTimeout(() => {
    fetchData()
   }, 2000);
    
  }
    }

        
  useEffect(()=>{

    const options = {
        root:null,
        margin:'-300px',
        threshold : 0.5
    }
    const observer = new IntersectionObserver(handleIntersection, options)

    if(loadingRef.current){
        observer.observe(loadingRef.current)
    }

    return ()=>{
        if(loadingRef.current){
            observer.unobserve(loadingRef.current)
        } 
    }

  },[loading])  
  return (
    <div className="relative">
      <div className="flex flex-col gap-[30px] justify-center items-center">
    {
        data.map((item,idx)=>{
            return (<div key={idx}>
            <p className='p-3 border border-gray-500 '>{item}</p>
            </div>)
        })
    }
      </div >
      <div className="left-[50%] -translate-x-[50%] absolute bottom-[50px]">
      {loading ? ( <p>...Loading...</p>) : (<p>Scroll down to load more</p>)
       
        } 
      </div>
      <div  ref={loadingRef}>
        
      </div>
      
    </div>
  )
}
