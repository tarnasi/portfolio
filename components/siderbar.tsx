import { 
    UserOutlined, HomeOutlined, PhoneOutlined, PlaySquareOutlined
} from '@ant-design/icons'

export default async function Sidebar() {
    return (
        <div id="siderbar" className="bg-fourthColor w-20 shadow-md shadow-mainColor">
            <div id='siderbar-icons'>
            <div id='sidebar-icon-1' className='bg-white rounded-sm mx-3 mt-8 shadow-sm shadow-secondColor hover:bg-mainColor hover:shadow-main'>
                <a href="/" className='cursor-pointer'>
                <HomeOutlined className='text-lg text-mainColor hover:text-white px-4 py-3'/>
                </a>
            </div>
            <div id='sidebar-icon-1' className='bg-white rounded-sm mx-3 mt-8 shadow-sm shadow-secondColor hover:bg-mainColor hover:shadow-main'>
                <a href="/tarnasi/profile" className='cursor-pointer'>
                <UserOutlined className='text-lg text-mainColor hover:text-white px-4 py-3 cursor-pointer' />
                </a>
            </div>
            <div id='sidebar-icon-1' className='bg-white rounded-sm mx-3 mt-8 shadow-sm shadow-secondColor hover:bg-mainColor hover:shadow-main'>
                <a href="/contact-me" className='cursor-pointer'>
                <PhoneOutlined className='text-lg text-mainColor hover:text-white px-4 py-3 cursor-pointer' />
                </a>
            </div>
            <div id='sidebar-icon-1' className='bg-white rounded-sm mx-3 mt-8 shadow-sm shadow-secondColor hover:bg-mainColor hover:shadow-main'>
                <a href="/tarnasi/profile" className='cursor-pointer'>
                <PlaySquareOutlined className='text-lg text-mainColor hover:text-white px-4 py-3 cursor-pointer' />
                </a>
            </div>
            </div>
        </div>
    )
}