import Image from 'next/image';
import MenuLink from './menuLink/menuLink';
import styles from './sidebar.module.css';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdOutlineInventory,
} from 'react-icons/md';
import { GrSchedules } from 'react-icons/gr';
import { IoStorefrontOutline } from 'react-icons/io5';
import { FcMoneyTransfer } from 'react-icons/fc';
import { GiCow } from 'react-icons/gi';
import { auth, signOut } from 'auth';

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: 'Store',
        path: '/dashboard/store',
        icon: <IoStorefrontOutline />,
      },
      {
        title: 'Inventory',
        path: '/dashboard/inventory',
        icon: <MdOutlineInventory />,
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: <FcMoneyTransfer />,
      },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: <MdWork />,
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: <MdAnalytics />,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const session = await auth();

  const user = session?.user;
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={user?.image || '/noavatar.png'}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user?.name}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button className="py-2 px-5 my-1 flex items-center gap-10 cursor-pointer rounded-lg bg-transparent border-none w-full transition-colors duration-300 ease-in-out hover:bg-primary/20">
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
