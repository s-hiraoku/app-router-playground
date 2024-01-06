'use client';

import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  // ウィンドウオブジェクトがない場合は、デフォルトでfalseを返す
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQueryList = window.matchMedia(query);

    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    // イベントリスナーを追加
    mediaQueryList.addEventListener('change', documentChangeHandler);

    // コンポーネントのアンマウント時にイベントリスナーを削除
    return () => {
      mediaQueryList.removeEventListener('change', documentChangeHandler);
    };
  }, [query]);

  return matches;
};
