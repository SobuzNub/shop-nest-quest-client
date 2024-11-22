import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork } from 'react-icons/md'
import MenuItem from './MenuItem'
const SellerMenu = () => {
  return (
    <>
      <MenuItem icon={BsFillHouseAddFill} label='Add Room' address='add-product' />
      <MenuItem icon={MdHomeWork} label='My Listings' address='my-listings' />
      {/* <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Bookings'
        address='manage-bookings'
      /> */}
    </>
  )
}

export default SellerMenu