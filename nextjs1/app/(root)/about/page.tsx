async function Home() {
    const response =await fetch("https://jsonplaceholder.typicode.com/albums");
    if(!response.ok) throw new Error("failed to fetch data");

    const albums =await response.json();

    return(
        <div className="text-yellow-300">
            {albums.map((album:{id:number,title:string})=>(
                <div key={album.id} className="text-lg"></div>
            ))}
        </div>
    )
   
}
export default Home;