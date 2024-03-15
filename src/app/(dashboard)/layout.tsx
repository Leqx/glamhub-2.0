import Navbar from '@/components/dashboard/navbar/navbar';
import Sidebar from '@/components/dashboard/sidebar/sidebar';
import styles from '@/components/dashboard/dashboard.module.css';
import Footer from '@/components/dashboard/footer/footer';
import { SellerGate } from '@/components/auth/seller-gate';
import { UserRole } from '@prisma/client';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <SellerGate allowedRole={UserRole.SELLER}>
      <div className="h-full w-full bg-inherit">
        <div className={styles.container}>
          <div className={styles.menu}>
            <Sidebar />
          </div>
          <div className={styles.content}>
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </SellerGate>
  );
};

export default DashboardLayout;
