import { useEffect, useState } from 'react';

let cachedImage: string | null = null;

export function useUser() {
  const [profileImage, setProfileImage] = useState<string | null>(cachedImage);

  useEffect(() => {
    if (!cachedImage) {
      const randomId = Math.floor(Math.random() * 1000);
      cachedImage = `https://i.pravatar.cc/200?u=${randomId}`;
    }
    setProfileImage(cachedImage);
  }, []);

  return {
    profileImage,
  };
}
