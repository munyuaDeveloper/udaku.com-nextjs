
import Button from '../button/Button'

const myComponentStyle = {
    backgroundImage: `url('/hero.jpg')`
 }
const HeroSection = () => {
    return (
        <div className="bg-gray-50 flex items-center">
            <section className="min-h-screen w-full bg-cover bg-center py-56" style={myComponentStyle}>
                <div className="container mx-auto text-center text-white">
                    <h1 className="text-5xl font-medium mb-6">Welcome to Udaku.com</h1>
                    <p className="text-xl mb-12">Where we give you the hotest gossips in town.</p>
                    <Button text='View Our Stories' url='/blog'/>
                </div>
            </section>
        </div>
    )
}

export default HeroSection
