'use client'
 
import { useParams } from 'next/navigation'
import styles from './blogPost.module.css'
import Image from 'next/image'

const getSinglePost = async({id}) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const blogPost = async() => {

  const params = useParams()

    const post = await getSinglePost(params)


  return (
    <div className='flex flex-col md:flex-row m-10 md:my-40 md:mx-20 gap-5 md:gap-24'>

      <div className='desc flex-1'>
        <h1 className='text-3xl text-purple-400 capitalize mb-2'>{post.title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos eum animi dignissimos optio! Aut vero quia quod temporibus dolorum dolore culpa beatae distinctio vitae reiciendis iure quisquam, magni necessitatibus. Suscipit.</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil saepe facere sed libero, quis suscipit facilis accusamus autem quasi? Sapiente optio minus animi velit magni sunt assumenda officia eius laudantium?</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil saepe facere sed libero, quis suscipit facilis accusamus autem quasi? Sapiente optio minus animi velit magni sunt assumenda officia eius laudantium?</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil saepe facere sed libero, quis suscipit facilis accusamus autem quasi? Sapiente optio minus animi velit magni sunt assumenda officia eius laudantium?</p>
      
      </div>

      <div className='image flex-1'>
        <Image src='/gossip.jpg' width={500} height={300} />
      </div>


    </div>
  )
}

export default blogPost
