type PaymentStatus = 'loading' | 'success' | 'error';

export async function verifyPayment(
  sessionId: string,
  setStatus: (status: PaymentStatus) => void,
  setErrorMessage: (message: string) => void
) {
  try {
    const response = await fetch(`/api/verify-checkout?session_id=${sessionId}`);
    const data = await response.json();

    if (response.ok && data.verified) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(data.error || 'Não foi possível confirmar o pagamento.');
    }
  } catch (error) {
    console.error('Erro ao verificar pagamento:', error);
    setStatus('error');
    setErrorMessage('Erro de conexão com o servidor.');
  }
}
