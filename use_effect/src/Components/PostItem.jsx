const PostItem = (props) => {
    return ( 
        <div style={{ border:'1px solid black', margin:'30px'}}>
            <h4>
                {props.id} - {props.title}
            </h4>
            <h6>
                {props.body}
            </h6>
        </div>
     );
}
 
export default PostItem;