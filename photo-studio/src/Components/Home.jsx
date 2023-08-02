import { useState, useEffect } from "react";
const getData = (url) => {
    return fetch(url).then((res) => res.json());
};
const Home = () => {
    const [photos, setPhotos] = useState([]);
    const [showPhotos, setShowPhotos] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => { handleFetch(); }, []);
    const handleFetch = async () => {
        setLoading(true);
        setShowPhotos(false);
        try {
            const data = await getData(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
            console.log(data);
            setPhotos(data);
            setLoading(false);

        }
        catch (err) {
            console.error(err);
            setError(true);
            setLoading(false)
        };
    };
    if (loading) {
        return <h1>Loading...</h1>
    };
    if (error) {
        return <h1 style={{ color: "red" }}>Something went wrong ... Please try again.</h1>
    };
    return (
        <div>
            <h1>ALBUM STUDIO</h1>
           
            <hr />
            
                {
                   
                photos.map((photo) => {
                    return (
                        <div className="container-child">
                        <h3 key={photo.id}> {photo.id}  : {photo.title} </h3>
                        <img src={photo.url} alt={photo.title} />
                    </div>
                    )
                })
                }
          

        </div>
    );
}

export default Home;