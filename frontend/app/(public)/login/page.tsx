'use client'

import React, { useEffect } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import { FieldError, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { authSchema } from '@/utils/zod'
import { AuthProps } from '@/types/type'
import { useRouter } from 'next/navigation'
import { setCookie } from 'nookies'
import { showToast } from '@/utils/toast'

function Login() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
  } = useForm<AuthProps>({
    resolver: zodResolver(authSchema),
  })

  useEffect(() => {
    if (errors.root) {
      showToast.error('Invalid Credentials')
    }
  }, [errors.root])

  const onSubmit = (data: AuthProps) => {
    const { username, password } = data
    const validAuthHash = process.env.NEXT_PUBLIC_AUTH_HASH

    if (!validAuthHash) {
      console.error('Environment variable NEXT_PUBLIC_AUTH_HASH is not set.')
      showToast.error('Server error. Please try again later.')
      return
    }

    const encoded = btoa(`${username}:${password}`)

    if (encoded === validAuthHash) {
      setCookie(null, 'authToken', encoded, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })

      router.push('/')
    } else {
      setError('root', {
        message: 'Invalid credentials',
      })
    }
  }

  const renderField = (
    id: 'username' | 'password',
    type: 'text' | 'password',
    labelText: string,
    placeholder: string,
    error: FieldError | undefined
  ) => {
    return (
      <fieldset className='flex_col gap-1'>
        <Label text={labelText} htmlFor={id} />
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          register={register}
        />
        {error && <p className='text-red-500 text-sm'>{error.message}</p>}
      </fieldset>
    )
  }

  return (
    <div className='bg-white rounded-md shadow-md p-6 max-w-[420px] mx-3 sm:mx-auto'>
      <div className='flex_col gap-2 mb-4'>
        <h2 className='font-semibold text-xl sm:text-[28px] text-dark-grey'>
          Welcome Back!
        </h2>
        <p className='text-grey text-sm sm:text-[16px] font-normal'>
          Please log in to access your dashboard and manage your items.
        </p>
      </div>

      <form className='flex_col gap-10' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex_col gap-3'>
          {renderField(
            'username',
            'text',
            'Username',
            'e.g., johndoe',
            errors.username
          )}

          {renderField(
            'password',
            'password',
            'Password',
            'Enter your secure password',
            errors.password
          )}
        </div>

        <Button
          type='submit'
          label='Log In'
          className='mb-4'
          isSubmitting={isSubmitting}
        />
      </form>
    </div>
  )
}

export default Login
