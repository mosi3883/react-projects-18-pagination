import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  const { loading, data } = useFetch();
  // console.log(loading, data);

  useEffect(() => {
    console.log('use');
    if (data.length > 0) {
      setFollowers(data[page]);
    }
  }, [page, data]);
  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underlin'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {followers.map((follower) => (
            <Follower key={follower.id} {...follower} />
          ))}
        </div>
        {data.length > 0 && (
          <div className='btn-container'>
            {page > 0 && (
              <button className='prev-btn' onClick={() => setPage((prevPage) => prevPage - 1)}>
                prev
              </button>
            )}

            {data.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : ''}`}
                  onClick={() => setPage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            {page < data.length - 1 && (
              <button className='next-btn' onClick={() => setPage((prevPage) => prevPage + 1)}>
                next
              </button>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
