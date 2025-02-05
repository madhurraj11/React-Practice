import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 rounded-2xl bg-gray-100 p-4 text-3xl text-gray-700 font-semibold'>
    <img className="mx-auto rounded-full cursor-pointer" src={data.avatar_url} alt="Git picture" width={300} />
    Github followers: {data.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/madhurraj11')
    return response.json()
}