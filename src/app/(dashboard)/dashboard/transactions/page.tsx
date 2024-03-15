// import { deleteUser } from '@/lib/actions';
// import { fetchUsers } from '@/lib/data';
import Chart from '@/components/dashboard/chart/chart';
import Pagination from '@/components/dashboard/pagination/pagination';
import Search from '@/components/dashboard/search/search';
import Transactions from '@/components/dashboard/transactions/transactions';
import styles from '@/components/dashboard/users/users.module.css';
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
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {/* {cards.map((item) => (
              <Card item={item} key={item.id} />
            ))} */}
        </div>
        <Transactions />
        <Chart />
      </div>
      {/* <div className={styles.side}>
          <Rightbar />
        </div> */}
    </div>
  );
};

export default UsersPage;
