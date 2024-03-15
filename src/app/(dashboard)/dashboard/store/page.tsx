// import { deleteUser } from '@/lib/actions';
// import { fetchUsers } from '@/lib/data';
import Pagination from '@/components/dashboard/pagination/pagination';
import Search from '@/components/dashboard/search/search';
import styles from '@/components/dashboard/users/users.module.css';
import StoreForm from '@/components/shop/store/forms/store-form';
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
      <StoreForm />
      {/* <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map(
            (user: {
              id: Key | readonly string[] | null | undefined;
              img: any;
              username:
                | string
                | number
                | boolean
                | ReactElement<
                    any,
                    string | JSXElementConstructor<any>
                  >
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<AwaitedReactNode>
                | null
                | undefined;
              email:
                | string
                | number
                | boolean
                | ReactElement<
                    any,
                    string | JSXElementConstructor<any>
                  >
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<AwaitedReactNode>
                | null
                | undefined;
              createdAt: { toString: () => string | any[] };
              isAdmin: any;
              isActive: any;
            }) => (
              <tr key={user.id}>
                <td>
                  <div className={styles.user}>
                    <Image
                      src={user.img || '/noavatar.png'}
                      alt=""
                      width={40}
                      height={40}
                      className={styles.userImage}
                    />
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                <td>{user.isAdmin ? 'Admin' : 'Client'}</td>
                <td>{user.isActive ? 'active' : 'passive'}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user.id}`}>
                      <button
                        className={`${styles.button} ${styles.view}`}
                      >
                        View
                      </button>
                    </Link>
                    <form action={deleteUser}>
                      <input
                        type="hidden"
                        name="id"
                        value={user.id}
                      />
                      <button
                        className={`${styles.button} ${styles.delete}`}
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <Pagination count={count} /> */}
    </div>
  );
};

export default UsersPage;
