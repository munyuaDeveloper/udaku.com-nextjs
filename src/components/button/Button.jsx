import Link from 'next/link'

const Button = ({text, url}) => {
  return (
    <Link href={url} className="bg-purple-500 text-white py-2 px-6 rounded-full hover:bg-indigo-600 my-2">{text}</Link>
  )
}

export default Button
