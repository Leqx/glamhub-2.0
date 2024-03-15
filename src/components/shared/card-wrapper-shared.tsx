'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Header } from '@/components/auth/header';
import { Social } from '@/components/auth/social';
import { BackButton } from '@/components/auth/back-button';

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
}

export const CardWrapperShared = ({
  children,
  headerLabel,
}: CardWrapperProps) => {
  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <h6 className=" text-xl text-primary ">{headerLabel}</h6>
      </CardHeader>
      <CardContent>{children}</CardContent>

      <CardFooter></CardFooter>
    </Card>
  );
};
