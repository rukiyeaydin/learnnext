const ReviewId = ({params}:
    {params: {reviewId: string}}
) => {
    return (
        <div>
            <h1>ReviewId: {params.reviewId}</h1>
        </div>
     );
}
 
export default ReviewId;