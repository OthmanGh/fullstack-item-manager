import { z } from 'zod'

export const authSchema = z.object({
  username: z
    .string()
    .nonempty("Username can't be empty")
    .min(5, 'Username must be at least 5 characters')
    .max(20, 'Username must not exceed 20 characters')
    .regex(/^[a-zA-Z]+$/, 'Username can only contain letters'),

  password: z
    .string()
    .nonempty("Password can't be empty")
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must not exceed 50 characters')
    .regex(/^[a-zA-Z]+$/, 'Password can only contain letters'),
})

export const itemSchema = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .nonempty({ message: "Name can't be empty" }),

  description: z.string().optional(),
  category: z.string().min(5, 'Category must be at least 5 characters'),
  price: z
    .number()
    .min(10, 'Price cannot be less than 10$ 😉')
    .max(10000, 'Price cannot exceed 10,000$ 🚀')
    .refine(
      (value) => {
        return Math.round(value * 100) / 100 === value
      },
      {
        message: 'Price must have at most two decimal places 💵',
      }
    ),

  inStock: z.boolean().default(true),
})

export type ItemFormData = z.infer<typeof itemSchema>
