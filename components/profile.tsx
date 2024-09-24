import { CodeOutlined, GithubOutlined, LaptopOutlined, ProjectOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default async function Profile() {
    return (
        <div id="profile" className="text-txt text-justify bg-mainColor w-full h-1/2 m-10 rounded shadow-md p-6 shadow-secondColor">
            <h2 className="text-7xl">Shahriyar Tarnasi</h2>
            <p className='mt-10'>I'm a <b>Senior Full Stack Programmer</b> with over 6 years of experience crafting scalable, high-performance web applications. Passionate about coding, I thrive on solving complex problems and continuously learning new technologies.</p>
            <p className='mt-2'>When I'm not coding, you’ll find me immersed in <b>Anime</b>, <b>Gaming</b>, or <b>exploring the world</b> through <b>Travel</b>. I'm driven by creativity and the desire to build systems that make a real impact.</p>
            <p className='mt-2'>I'm a Developer, Gamer and a anime lover :)</p>

            <div className="flex justify-around mt-10">
                {/* Box 1 */}
                <Link href="/projects" className="w-full sm:w-1/2 lg:w-1/4">
                    <div className="p-6 bg-secondColor shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300 ease-in-out text-center">
                        <CodeOutlined className="text-4xl mb-4 text-mainColor" />
                        <h3 className="text-xl font-semibold">Projects</h3>
                        <p>View my latest coding projects</p>
                    </div>
                </Link>

                {/* Box 2 */}
                <Link href="https://github.com/tarnasi" className="w-full sm:w-1/2 lg:w-1/4">
                    <div className="p-6 bg-secondColor shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300 ease-in-out text-center">
                        <GithubOutlined className="text-4xl mb-4 text-fifthColor" />
                        <h3 className="text-xl font-semibold">GitHub</h3>
                        <p>Check out my repositories</p>
                    </div>
                </Link>

                {/* Box 4 */}
                <Link href="/experience" className="w-full sm:w-1/2 lg:w-1/4">
                    <div className="p-6 bg-secondColor shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300 ease-in-out text-center">
                        <ProjectOutlined className="text-4xl mb-4 text-thirdColor" />
                        <h3 className="text-xl font-semibold">Experience</h3>
                        <p>Learn about my work experience</p>
                    </div>
                </Link>
            </div>

        </div>
    )
}