import { useState, useEffect } from "react";
// 2. import { useEffect } from "react;
import PostItem from "./PostItem";

const getData = (url) => {
    return fetch(url).then((res) => { 
        const totalCount = res.headers.get('X-Total-Count');
        //console.log(totalCount);
        return res.json()});
};

function Posts() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [posts, setPosts] = useState([]);
    const [totalCount,setTotalCount] = useState();
    //pageState
    const [page, setPage] = useState(1);
    // 3. use useffects - hook
    useEffect(() => {
        // this particular pease of code should be executed 
        // making network request 
        // get data from server
        // display data on UI
        fetchAndUpdateData();


    }, [page]);
    //1.  during the mount phase / initial render phase
    //2. during the update phase  ( Whenever the variables inside dependency array are updated)

    const fetchAndUpdateData = async () => {
        try {
            setLoading(true);
            //API requests
            const data = await getData(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
            //console.log(data);
            
            setPosts(data);
            setLoading(false);

        } catch (e) {
            console.error(e.message);
            setError(true);
            setLoading(false);

        }
    };
    const handlePageChange = (val) => {
        const updatedPage = page + val;
        setPage(updatedPage);
        //fetchAndUpdateData(updatedPage);
    }

    if (loading) {
        return <h1>Loading...</h1>;
    };
    if (error) {
        return <h1> Someithing went wrong... please check Internet Connection</h1>
    }

    return (
        <div>
            <h1>POSTS</h1>
            {/* 1. remove the button */}
            {/* <button onClick={fetchAndUpdateData}>FETCH POSTS</button> */}
            <hr />
            <div>
                {posts.map((post) => (
                    <PostItem
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                    />

                ))};
            </div>
            <div>
                {/* peginaton */}
                <button disabled={page === 1} onClick={() => { handlePageChange(-1) }}>PREVIOUS</button>
                <button disabled>{page}</button>
                <button disabled = {(totalCount/page)===0}onClick={() => { handlePageChange(+1) }}>NEXT</button>

            </div>
        </div>
    );
}

export default Posts;