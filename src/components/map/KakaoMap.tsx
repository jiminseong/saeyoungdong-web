"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const RESTAURANT_LOCATION = {
  lat: 36.9812,
  lng: 128.213,
  name: "새영동 숯불갈비",
  address: "충청북도 제천시 풍양로9길 13",
};

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = "kakao-map-script";
    const existingScript = document.getElementById(scriptId);

    const initMap = () => {
      const kakao = (globalThis as any).kakao;
      if (!kakao || !kakao.maps) return;

      kakao.maps.load(() => {
        if (!mapRef.current) return;

        const options = {
          center: new kakao.maps.LatLng(RESTAURANT_LOCATION.lat, RESTAURANT_LOCATION.lng),
          level: 3,
        };

        const map = new kakao.maps.Map(mapRef.current, options);

        // 마커 생성
        const markerPosition = new kakao.maps.LatLng(
          RESTAURANT_LOCATION.lat,
          RESTAURANT_LOCATION.lng,
        );
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);

        // 인포윈도우 생성
        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="padding:8px 12px;font-size:14px;font-weight:bold;color:#1F2937;border:none;">${RESTAURANT_LOCATION.name}</div>`,
        });
        infowindow.open(map, marker);
      });
    };

    if (existingScript) {
      if ((globalThis as any).kakao?.maps) {
        initMap();
      } else {
        existingScript.onload = initMap;
      }
    } else {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&autoload=false`;
      script.async = true;
      document.head.appendChild(script);
      script.onload = initMap;
    }
  }, []);

  return <div ref={mapRef} className="w-full h-full min-h-[300px] md:min-h-[400px] rounded-2xl" />;
}
