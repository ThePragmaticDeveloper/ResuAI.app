import { useEffect, useState } from 'react'
import ClerkUserButton from './ClerkUserButton';

export default function ClerkUserButtonWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent SSR mismatch

  return <ClerkUserButton />;
}
