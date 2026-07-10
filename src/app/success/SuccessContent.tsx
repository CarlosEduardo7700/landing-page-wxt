/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { verifyPayment } from './verifyPayment';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';
import { SuccessState } from './SuccessState';

export function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!sessionId) {
      setStatus('error');
      setErrorMessage('Código de sessão de pagamento não encontrado.');
      return;
    }

    verifyPayment(sessionId, setStatus, setErrorMessage);
  }, [sessionId]);

  if (status === 'loading') {
    return <LoadingState />;
  }

  if (status === 'error') {
    return <ErrorState errorMessage={errorMessage} />;
  }

  return <SuccessState />;
}
