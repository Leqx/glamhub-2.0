//import { cards } from '@/lib/data';
import Card from '@/components/dashboard//card/card';
import Chart from '@/components/dashboard//chart/chart';
import styles from '@/components/dashboard//dashboard.module.css';
import Rightbar from '@/components/dashboard//rightbar/rightbar';
import Transactions from '@/components/dashboard/transactions/transactions';
import RevenueTable from '@/components/shop/revenue/revenue-table';

type Props = {};

const RevenuePage = (props: Props) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.cards}>
            {/* {cards.map((item) => (
              <Card item={item} key={item.id} />
            ))} */}
          </div>

          <RevenueTable />

          <Chart />
        </div>
        {/* <div className={styles.side}>
          <Rightbar />
        </div> */}
      </div>
    </>
  );
};

export default RevenuePage;
