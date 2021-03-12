import { Menu } from '@headlessui/react'

export default function MyDropdown() {
  return (
    <Menu as='div' className='outline-none'>
      <Menu.Button className=''>Options</Menu.Button>
      <Menu.Items className='outline-none'>
        <Menu.Item>
          <div>Item 1</div>
        </Menu.Item>
        <Menu.Item>
          <div>Item 2</div>
        </Menu.Item>
        <Menu.Item>
          <div>Item 3</div>
        </Menu.Item>
        <Menu.Item>
          <div>Item 4</div>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
