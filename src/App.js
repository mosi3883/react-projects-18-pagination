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
      </section>
    </main>
  );
}

export default App;
