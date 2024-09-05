import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import { Link } from 'react-router-dom'

export const DropDowns = () => {
    const items = [
        {
            key: '1',
            label: (
                <Link className='text-lg transition-all delay-100 ease-in-out hover:text-primary' to="/products/agricultureproducts">
                    Agriculture Products
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link className='text-lg transition-all delay-100 ease-in-out hover:text-primary' to="/products/dairyproducts">
                    Dairy Products
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link className='text-lg transition-all delay-100 ease-in-out hover:text-primary' to="/products/tomatoprocessesproducts">
                    Tomato Processed Products
                </Link>
            ),
        },
    ]
    return (
        <>
            <Dropdown className='cursor-pointer' menu={{ items, }}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <h1>
                            <Link className='transition-all delay-100 ease-in-out hover:text-primary' to='/products'>Products</Link>
                        </h1>
                        <DownOutlined className='transition-all delay-100 ease-in-out hover:text-primary' />
                    </Space>
                </a>
            </Dropdown>
        </>
    )
}
