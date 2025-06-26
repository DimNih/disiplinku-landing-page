'use client';

import { useEffect, useState } from 'react';
import { ref, get, set, onValue } from 'firebase/database';
import { database } from '@/lib/firebase';

export function useVisitorCount() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const countRef = ref(database, 'disiplinku-landingPage/visitor/count');

    const updateVisitor = async () => {
      try {
        const snapshot = await get(countRef);
        const current = snapshot.exists() ? snapshot.val() : 0;
        const newCount = current + 1;

        await set(countRef, newCount);
        setVisitorCount(newCount);

        const unsubscribe = onValue(countRef, (snap) => {
          if (snap.exists()) {
            setVisitorCount(snap.val());
          }
        });

        return () => unsubscribe();
      } catch (error) {
        console.error('❌ Error visitor:', error);
      }
    };

    updateVisitor();
  }, []);

  return visitorCount;
}
