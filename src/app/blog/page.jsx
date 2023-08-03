import styles from './blog.module.css'
import Image from 'next/image'
import Button from '../../components/button/Button'

const getBlogs = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Blogs = async () => {

  const posts = await getBlogs();

  return (
    <div className='my-10 mx-5 md:my-40 md:mx-16'>
      <div className='text-center mb-10'>
        <h2 className='text-4xl text-purple-500'>Here is where you get the hotest gossips in town!</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quo ea ad quibusdam.</p>

      </div>

      {

        posts.map(post => (
          <div className="shadow-lg px-10 flex flex-col md:flex-row md:even:flex-row-reverse my-14 gap-10" key={post.id}>
            <div className="flex-1">
              <h2 className='text-purple-400 my-3 capitalize text-xl'>{post.title}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero asperiores consequuntur. Eveniet neque deserunt in. Amet quaerat culpa voluptatibus quidem, aliquid veniam! Enim architecto voluptatum unde neque consectetur ducimus!</p>
              <br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero asperiores consequuntur. Eveniet neque deserunt in. Amet quaerat culpa voluptatibus quidem, aliquid veniam! Enim architecto voluptatum unde neque consectetur ducimus!</p>
              <br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero asperiores consequuntur. Eveniet neque deserunt in. Amet quaerat culpa voluptatibus quidem, aliquid veniam! Enim architecto voluptatum unde neque consectetur ducimus!</p>
              <div className='mt-4 mb-5 float-right'>
                <Button url={`/blog/${post.id}`} text='View Story' />
              </div>

            </div>
            <div className="flex-1 relative h-[420px] w-full">

              <Image src='/hero.jpg' fill alt='blog image' className='object-contain' />

            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Blogs
