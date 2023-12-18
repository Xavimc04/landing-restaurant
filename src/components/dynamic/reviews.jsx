import {
    useState, useEffect
} from 'react'

export default function Reviews() {
    const [reviews, handleReviews] = useState([])

    useEffect(() => {
        fetch('/static/reviews.json')
            .then(res => res.json())
            .then(data => handleReviews(data.reviews))
    }, [])

    return <section className="mt-10 mb-10 flex flex-wrap justify-between gap-5">
        {
            reviews.map((
                review, index
            ) => {
                return <div 
                    key={ index }
                    className="p-5 bg-gray-50/70 rounded-lg flex flex-col"
                    style={{
                        width: 'calc(33% - 1rem)'
                    }}
                >
                    <h3 className="whitespace-nowrap font-extrabold">
                        { review.name }
                    </h3>

                    <small className="text-gray-400">
                        { review.posted_at }
                    </small>

                    <p className="mt-5 flex-1">
                        { review.content }
                    </p>

                    <div className="flex justify-end text-sm mt-5">
                        {
                            Array.from(Array(review.stars), (e, i) => {
                                return <span className="material-icons text-sm" key={ i }>
                                    star
                                </span>
                            })
                        }
                    </div>
                </div>
            })
        }
    </section>
}