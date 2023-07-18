import styles from './contact.module.css'
import Button from '../../components/button/Button'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='h-screen'>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src='/gossip.jpg' width={600} height={400} alt='about us image' />
        </div>
        <div className={styles.textContainer}>
          <h1 className='text-5xl text-purple-500 font-bold text-center my-2'>Get In Touch</h1>
          <div className={styles.divider} />
          <div className="w-full mt-6 mr-0 mb-0 ml-0 p-5 relative space-y-8 shadow-md">
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Email</p>
              <input placeholder="john@gmail.com" type="text" className="border placeholder-gray-400 focus:outline-none
                  focus:border-purple-400 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Subject</p>
              <input placeholder="I have a story to tell" type="text" className="border placeholder-gray-400 focus:outline-none
                  focus:border-purple-400 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>

            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Message</p>
              <textarea placeholder="My message ..." type="text" className="border placeholder-gray-400 focus:outline-none
                  focus:border-purple-400 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>

          </div>
          <div className='my-5 float-right'>
            <Button url='/blog' text='Send Email' />
          </div>

        </div>

      </div>
    </div>

  )
}

export default Contact
