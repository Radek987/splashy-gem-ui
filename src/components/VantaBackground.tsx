import { useEffect, useRef, useState } from 'react';
import HALO from 'vanta/dist/vanta.halo.min';
import * as THREE from 'three';

interface VantaBackgroundProps {
  children: React.ReactNode;
}

export const VantaBackground = ({ children }: VantaBackgroundProps) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          backgroundColor: 0x4454b6,
          amplitudeFactor: 2.00,
          size: 1.50
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="fixed inset-0 -z-10">
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};