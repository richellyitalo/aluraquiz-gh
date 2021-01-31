import { useRouter } from 'next/router';
import React from 'react';

export default function Quiz() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <h1 style={{ color: 'red' }}>
      Olá,
      {name}
    </h1>
  );
}
