'use client';

import { UserRole } from '@prisma/client';

import { useCurrentRole } from '@/hooks/use-current-role';
import Pricing from '../paymant/cards/pricing';

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const SellerGate = ({
  children,
  allowedRole,
}: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <div>
        <Pricing />
      </div>
    );
  }

  return <>{children}</>;
};
