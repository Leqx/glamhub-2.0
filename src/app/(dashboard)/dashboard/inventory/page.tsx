// import { deleteUser } from '@/lib/actions';
// import { fetchUsers } from '@/lib/data';
import Pagination from '@/components/dashboard/pagination/pagination';
import Search from '@/components/dashboard/search/search';
import styles from '@/components/dashboard/users/users.module.css';
import InventoryList from '@/components/shop/inventory/tables/inventory-list';
import Image from 'next/image';
import Link from 'next/link';
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from 'react';

const UsersPage = async ({ searchParams }: any) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;
  // const { count, users } = await fetchUsers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div />
        <Link href="/dashboard/inventory/add">
          <button className="p-4 bg-primary rounded-md hover:bg-secondary">
            Add New Product
          </button>
        </Link>
      </div>

      <InventoryList />
    </div>
  );
};

export default UsersPage;
