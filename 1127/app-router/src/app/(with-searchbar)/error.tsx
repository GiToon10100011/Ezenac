"use client"
import { useRouter } from 'next/navigation'
import React, { startTransition, useEffect } from 'react'

const Error = ({ error, reset }: { error: Error, reset: () => void }) => {
  const router = useRouter();
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <div>
      <h3>오류가 발생했습니다..</h3>
      <button onClick={() => {
        startTransition(() => {
          router.refresh(); //현재페이지에 대한 필요한 서버 정보만 다시 불러와주는 역할 
          reset(); //클라이언트 컴포넌트에서 발생한 문제를 해결하기 위해서 다시시도
        })
      }}>
        에러해결
      </button>
    </div >
  )
}

export default Error
