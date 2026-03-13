'use client'

import { useRouter } from 'next/navigation'

type Props = {
  productId: number
}

export default function Details({ productId }: Props) {
  const router = useRouter()

  return (
    <button
      className="btn btn-primary"
      type="button"
      onClick={() => router.push('/products/' + productId)}
    >
      Details
    </button>
  )
}