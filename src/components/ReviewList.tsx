import { useEffect, useState } from 'react';

interface Review {
  name: string;
  rating: number;
  comment: string;
}

const ReviewList = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('fixmyhome_reviews');
    if (stored) {
      setReviews(JSON.parse(stored));
    }
  }, []);

  return (
    <section className="max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">User Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((rev, index) => (
          <div key={index} className="border p-3 mb-2 rounded shadow-sm">
            <strong>{rev.name || 'Anonymous'}</strong> — {"⭐".repeat(rev.rating)}
            <p>{rev.comment}</p>
          </div>
        ))
      )}
    </section>
  );
};

export default ReviewList;
