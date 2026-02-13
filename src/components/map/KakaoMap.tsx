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
  address: "충북 제천시 풍양로9길 13",
};

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (!mapRef.current) return;

        const options = {
          center: new window.kakao.maps.LatLng(RESTAURANT_LOCATION.lat, RESTAURANT_LOCATION.lng),
          level: 3,
        };

        const map = new window.kakao.maps.Map(mapRef.current, options);

        // 마커 생성
        const markerPosition = new window.kakao.maps.LatLng(
          RESTAURANT_LOCATION.lat,
          RESTAURANT_LOCATION.lng,
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);

        // 인포윈도우 생성
        const infowindow = new window.kakao.maps.InfoWindow({
          content: `<div style="padding:8px 12px;font-size:14px;font-weight:bold;color:#000;">${RESTAURANT_LOCATION.name}</div>`,
        });
        infowindow.open(map, marker);
      });
    };

    return () => {
      const existingScript = document.querySelector(`script[src*="dapi.kakao.com"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-full min-h-[300px] md:min-h-[400px] rounded-2xl"
      style={{ background: "#2A1810" }}
    />
  );
}
