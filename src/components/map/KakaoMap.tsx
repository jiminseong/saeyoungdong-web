"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    kakao: any;
  }
}

const RESTAURANT_LOCATION = {
  lat: 37.1392164097053,
  lng: 128.209056982319,
  name: "새영동숯불갈비",
  address: "충청북도 제천시 풍양로9길 13",
};

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const initMap = () => {
    const kakao = window.kakao;
    if (!kakao || !kakao.maps || !mapRef.current) return;

    kakao.maps.load(() => {
      if (!mapRef.current) return;

      const container = mapRef.current;
      const options = {
        center: new kakao.maps.LatLng(RESTAURANT_LOCATION.lat, RESTAURANT_LOCATION.lng),
        level: 3,
      };

      try {
        const map = new kakao.maps.Map(container, options);
        const markerPosition = new kakao.maps.LatLng(
          RESTAURANT_LOCATION.lat,
          RESTAURANT_LOCATION.lng,
        );

        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);

        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="padding:10px 15px;font-size:14px;font-weight:600;color:#2A1810;border:none;">${RESTAURANT_LOCATION.name}</div>`,
        });
        infowindow.open(map, marker);
      } catch (error) {
        console.error("❌ Kakao Map Init Error:", error);
      }
    });
  };

  useEffect(() => {
    if (isLoaded) {
      initMap();
    }
  }, [isLoaded]);

  return (
    <>
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&autoload=false`}
        onLoad={() => setIsLoaded(true)}
        strategy="afterInteractive"
      />
      <div
        ref={mapRef}
        className="w-full h-full min-h-[300px] md:min-h-[400px] rounded-2xl bg-warm-beige/30"
      />
    </>
  );
}
