import { useState, useEffect } from 'react';

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {data.map((post, index) => (
        <li className='border p-3 m-3' key={index}>
          <h2 className='text-xl text-color-red mb-4'>{post.id + ". " + post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
