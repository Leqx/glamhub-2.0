import * as z from 'zod';
import { UserRole } from '@prisma/client';

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: 'New password is required!',
      path: ['newPassword'],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: 'Password is required!',
      path: ['password'],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Minimum of 6 characters required',
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(6, {
    message: 'Minimum 6 characters required',
  }),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
});

export const VendorDetailsSchema = z.object({
  id: z.string(),
  userId: z.string(),
  latitude: z.number().nullable(),
  longitude: z.number().nullable(),
});

// Product schema
export const ProductSchema = z.lazy(() =>
  z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    price: z.number(),
    stock: z.number().int(),
    image: z.string().nullable(),
    vendorId: z.string(),
    category: CategorySchema.optional(),
    createdAt: z.date(),
  })
);

// Order schema
export const OrderSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  productId: z.string(),
  quantity: z.number().int(),
  totalPrice: z.number(),
  createdAt: z.date(),
});

// Review schema
export const ReviewSchema = z.object({
  id: z.string(),
  productId: z.string(),
  userId: z.string(),
  rating: z.number().min(1).max(5),
  comment: z.string().nullable(),
  createdAt: z.date(),
});

// Category schema
export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  //products: z.array(ProductSchema).optional(),
});
