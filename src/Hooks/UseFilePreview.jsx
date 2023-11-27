import { useEffect, useState } from "react";

export default function UseFilePreview(file) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (file && file[0]) {
      const newUrl = URL.createObjectURL(file[0]);

      if (newUrl !== imgSrc) {
        setImgSrc(newUrl);
      }
    }
    console.log(file);
  }, [file, imgSrc]);

  return [imgSrc, setImgSrc];
}
